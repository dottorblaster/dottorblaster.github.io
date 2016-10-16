---
layout: post
status: publish
published: true
title: "FreeBSD 11: uno sguardo da vicino"
date: 2016-10-16 23:25:10 +0200
categories:
- Linux
tags:
- freebsd
- openbsd
- bsd
---

![Unix command line](https://c2.staticflickr.com/2/1569/25618310576_8afd2b0967_o.jpg)

Circa un mese fa, ho deciso di migrare le macchine di una [API abbastanza famosa](http://stocazzo.io/) (che ho scritto io, e il cui sorgente è disponibile [su GitHub](https://github.com/scaas/stocazzo)) **da Linux a qualcosa di diverso**. Tanto per continuare a studiare, ho scelto **FreeBSD** come sistema operativo di base, e mi sono veramente stupito di quanto sia ben ingegnerizzata l'alternativa a Linux che io stesso avevo sempre **sottovalutato**.

### FreeBSD 11: novità (?)
A dire il vero le [novità](https://www.freebsd.org/releases/11.0R/relnotes.html) di questa **FreeBSD 11** non sono poi molte: c'è un sacco di carne al fuoco per ZFS, il cui supporto nativo è stato aumentato lungo tutta la catena di utility del sistema come `bsdinstall` e `sade`. Per il resto, la cosa che risalta di più olte i soliti bugfix al kernel è chiaramente l'aggiornamento di tutto il parco software, dei port e dei pacchetti.

L'aggiornamento per me che venivo da FreeBSD 10.3 è stato veramente **rapido e indolore**: qualche colpo di `freebsd-update` e un giro di `pkg` hanno fatto avanzare di versione le mie macchine senza che io dovessi fare letteralmente niente. Una volta fatto un piccolo test in laboratorio ho lanciato tutti i comandi in sequenza e olé. La cosa stupefacente (circa) è che durante tutta la procedura le applicazioni funzionano a meraviglia, anche durante gli step intermedi, per via della **separazione che avviene tra software applicativo e software di sistema** effettuata a monte.

### Sistema di base, port e pacchetti
Pur conoscendo un minimo la **struttura** del sistema operativo, dover usare BSD per il deploy di un servizio REST mi ha permesso di apprezzare e - letteralmente - di farmi innamorare dell'architettura di sistema, che mette a disposizione tre elementi fondamentali: il **sistema operativo di base**, formato dal kernel e da tutta la userland (quindi i comandi di base, come cp, ls e così via), un **sistema di package management** che non fa né più né meno di quello che deve, ossia gestire bene i pacchetti scaricabili da un repository, e un **gestore di port**, che sono tutti quegli script il cui formato ha avuto un successo stellare (basti considerare i PKGBUILD di Arch Linux o gli Slackbuild di Slackware, ma anche gli ebuild di Gentoo), che permettono con un singolo comando di scaricare i sorgenti di un software, compilarli e installare il risultato sul sistema tenendone traccia insieme a tutte le dipendenze.

Questo fa si da un lato che ogni cosa funzioni in maniera molto più isolata, dato che di massima i software continuano a funzionare anche nonostante degli aggiornamenti al layer di base sottostante; nel frattempo, il tutto dà un feeling di **massima integrazione** al sistema, dato che il tutto viene considerato come un unico prodotto, un unico grande artefatto, e di conseguenza installato, manutenuto e aggiornato come tale.

È espresso in maniera molto, molto chiara quindi il fatto che al di fuori della **codebase di BSD**, il resto sia proprio "il resto", ossia pacchetti che si vanno a innestare in cima a una struttura che li accoglie e permette ai software l'esecuzione.

Insomma, anche troppe parole per dire: mi è piaciuta veramente tanto l'architettura del sistema.

### Solidità e sicurezza
**4.4BSD** è un sistema che ha gli anni che ha. **FreeBSD** stesso è un sistema operativo che, per quanto possa reggere botta in maniera impressionante come abbiamo visto, ha gli anni che ha. Per la precisione ventitré. Nonostante questo, il sistema è robusto e dà ancora oggi la stessa sensazione che all'epoca aveva avuto [Daniel Robbins](https://gentoo-handbook.lugons.org/doc/it/articles/making-the-distro-p3.xml):

> Molte delle differenze tra Linux e FreeBSD provengono dalle diverse strutture di sviluppo che li caratterizzano. Lo sviluppo di Linux è molto decentralizzato, e ci affidiamo alle distribuzioni per mettere insieme ed unire i vari pezzi di Linux sparsi per Internet. Confrontate ciò con FreeBSD e gli altri BSD (OpenBSD e NetBSD), dove c'è un team di sviluppo unificato che lavora su di un unico insieme di sorgenti. Bene, ogni BSD ha il suo unico insieme di sorgenti unificati. Questa può essere una cosa positiva ed ha come conseguenza che FreeBSD non ha quel feeling di "messo insieme con le patch" come molte delle distribuzioni Linux.
>
> Successivamente, possiamo confrontare la tecnologia che sta sotto il cofano. Molti dei fan di FreeBSD sosterranno che FreeBSD è predisposto meglio di Linux per essere un server. Vi diranno che FreeBSD è meglio se sottoposto a carichi pesanti e che ha uno stack TCP/IP migliore. Se confrontate Linux 2.2 o precedente con FreeBSD, devo ritenermi d'accordo.

Per quanto Linux abbia integrato dei software di grandissimo valore nel tempo, e possa essere vera anche la seconda parte di quello che Robbins scriveva al tempo della fondazione di Gentoo...

> Mi è capitato di essere un grande fan dei kernel di test della serie 2.4 che ho utilizzato. Sono veramente fantastici e contengono un buon stack TCP/IP ed un sistema "netfilter" totalmente riprogettato che è veramente esplosivo. In conclusione, penso che Linux sarà il sistema operativo che definirà nuovi standard di performance e che renderà i server Unix liberi persino più competitivi contro le loro controparti commerciali.

... è altrettanto vero che per quella che è la mia prospettiva alcune scelte compiute all'interno di questo ecosistema (quello Linux) hanno portato una **regressione a livello di performance e architetturale**, oltre a lasciare Linux a girare attorno a sé stesso senza prendere una direzione del tutto innovativa, che è ciò che mi aspetto da un sistema operativo del genere. Queste regressioni hanno portato addirittura alternative un tempo ritenute molto meno rilevanti a poter trattare alla pari con Linux, se non persino superarlo. Tra i BSD, trovo che **OpenBSD** ricopra benissimo questo ruolo.

E questo ruolo è ricoperto con eccellenza grazie anche a `pf`, il firewall di OpenBSD presente anche in FreeBSD, uno dei cavalli di battaglia della scuola BSD VS Linux, ed effettivamente un grande alleato di chi si occupa di security.

### Ending theme
Insomma, questo weekend mi sono divertito un sacco con **FreeBSD** e con i **BSD in generale**. A breve mi sono ripromesso di cominciare a pistolare con **OpenBSD**, dato che molti amici (nerdoni) autorevoli tra cui [Gianguido](http://blog.gsora.xyz/) e [Roberto](https://twitter.com/rebtoor) mi hanno consigliato di farci un giro.

_Photo courtesy of [lolwho](https://www.flickr.com/photos/47680582@N08/25618310576/)_
