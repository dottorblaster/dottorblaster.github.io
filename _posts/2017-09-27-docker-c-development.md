---
layout: post
status: publish
published: true
title: Sviluppare un programma in C con Docker (si, è una figata)
date: 2017-09-28 00:04:03 +0200
categories:
- Development
tags:
- c
- development
- docker
- webserver
- software
---

![Docker logo in ASCII](https://scene-si.org/post/2016-03-31-how-to-live-inside-a-docker-container/heading.png)

In questo periodo non ho scritto moltissimo sul blog, ed il motivo principale è che oltre al lavoro e a qualche progettino personale, sono stato impegnato con il **webserver** che avevo da scrivere per il mio esame di Reti di Calcolatori (che è uno dei "perk" dell'essere ancora uno studente di triennale a ventisei anni). Trovandomi a sviluppare su parecchie piattaforme ed essendo il target principale un sistema operativo generico Linux, ho avuto il piccolo problema di sviluppare parte del codice sul mio portatile con macOS: ovviamente non potevo testare bene qualsiasi cosa facessi, e non avevo così tanta voglia di portare a Darwin tutto quello che avevo scritto, quindi mi sono ingegnato per trovare una soluzione nel più breve tempo possibile.

All'inizio ho provato con una **macchina virtuale** e con qualche server sparso in giro per il mondo. È un buon approccio se uno ha voglia di perder tempo. Viceversa dopo un po' mi sono detto: "E se provassi con **Docker** costruendo un container per debuggare?"

### Docker to the rescue
Dopo aver dato una scorsa al manuale per togliere la ruggine sulla **sintassi dei Dockerfile**, ho deciso di creare il mio container per Grocery. Sono partito in realtà da quello definitivo che è veramente piccolino, creando una directory `docker` all'interno del mio repository e andandoci a scrivere questo file `Dockerfile`:

```docker
FROM alpine:3.6

RUN apk update
RUN apk add --no-cache build-base imagemagick

RUN mkdir /grocery
RUN mkdir /grocery/www
RUN mkdir /grocery/cache

ADD . /grocery

WORKDIR /grocery
RUN make clean release

RUN apk del build-base

VOLUME /grocery/www

CMD ["./grocery", "8080"]
```

Niente di trascendentale: installo le **dipendenze dell'applicazione** (che consistono in ImageMagick e pochissimo altro), riempio il container dei file sorgenti, li compilo come se fossi in una fakeroot ed espongo un volume per la directory da cui il webserver dovrà leggere i file. Period. Successivamente, avendo a disposizione un Makefile con vari goal ho inserito quello per fare il build della mia immagine.

```makefile
...

build_docker:
	sudo docker build -t grocery -f docker/Dockerfile .

...
```

In questo modo attraverso un semplice `make build_docker` ho potuto costruire ogni volta che ne avevo bisogno un container con una versione "freezata" del programma.

Successivamente, ho visto che non solo questa roba funzionava, ma mi consentiva effettivamente una **portabilità del package su qualsiasi sistema operativo** senza perdere nulla e senza dover impazzire dietro a cambiamenti infrastrutturali dovuti all'OS che ospita il container. Docker in questo senso essendo un layer di compatibilità ci permette di risparmiare veramente tanto tempo.

### Un container per lo sviluppo in C
Dato che il mio container "per la produzione" funzionava, ho deciso di muovermi leggermente oltre, creando un equivalente per lo sviluppo che **ad ogni restart** prendesse il codice, lo ricompilasse e lo eseguisse senza dover fare repackage. Questo possiamo farlo grazie ai **volumi** e grazie alle istruzioni per lo start del container.

Ho quindi dotato la directory `docker` del mio progetto di un file `Dockerfile.test`, contenente quanto segue:

```docker
FROM alpine:3.6

RUN apk update
RUN apk add alpine-sdk imagemagick

RUN mkdir /grocery
WORKDIR /grocery
VOLUME /grocery
EXPOSE 8080
```

Successivamente ho inserito nel Makefile due goal, uno per costruire l'immagine di test e uno per eseguirla:

```makefile
...

build_docker_test:
	sudo docker build -t grocery_test -f docker/Dockerfile.test .

docker_test:
	sudo docker run -d -P -p 8080:8080 --name grtest -v $(shell pwd):/grocery grocery_test \
		make debug run

...
```

Su questo abbiamo un po' di cose da dire: costruendo il **container di test** esponiamo un volume, sul quale poi montiamo la nostra directory con i sorgenti.Subito dopo possiamo tramite un `make docker_test` inizializzare un container che prenda la nostra directory corrente, la monti come volume, e ricompili il codice eseguendo il binario.

Tra l'altro mi sono accorto ora che c'è una inception perché questo è un goal di un Makefile che esegue un altro `make`, stavolta containerizzato.

In realtà non c'è molto da dire: avremo il container in listen sulla porta 8080 ma possiamo anche rimapparla a nostro piacimento se ci dà fastidio; e questo container ci abilita a fare `docker restart grtest` (o qualsiasi altro nome voi diate al vostro, di container) per far si che istantaneamente il codice si ricompili e ricominci ad eseguirsi. Il passo ulteriore che potrebbe essere fatto è quello di monitorare per cambiamenti ai file del codice sorgente per **l'autorestart del container**, ma sinceramente non avevo voglia di arrivare così lontano.

Sono andato rapido, anche un po' troppo, perché ritengo che questo piccolo lavoro di "ricerca" sia banale e sia ancora meglio guardare un caso di studio reale per poi adattarlo al proprio progetto. In ogni caso, in questo modo ho **reso il mio codice C indipendente dal sistema operativo** usato per lo sviluppo, quindi da parte mia non posso che consigliarlo a chi fa sviluppo C per processori con architettura i686/x86_64 😸

Il progetto, per chiunque avesse voglia di dargli un occhio, è ovviamente su [GitHub](https://github.com/dottorblaster/grocery).

_Image courtesy of Tit Petric, [whose post](https://scene-si.org/2016/04/01/how-to-live-inside-a-docker-container/) is amazing and full of interesting tips._ 😁
