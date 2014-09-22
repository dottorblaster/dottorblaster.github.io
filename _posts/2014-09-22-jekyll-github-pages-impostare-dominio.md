---
layout: post
status: publish
published: true
title: Jekyll e GitHub Pages, come impostare correttamente il proprio dominio
categories:
- Web
tags:
- networking
- dns
- cname
- jekyll
- github
- git
- cms
---

![Io.](https://farm4.staticflickr.com/3921/15222489276_1425af268a_b.jpg)

Guardate questo volto. È il mio, ed è il volto di un uomo distrutto durante un weekend in cui pur avendo degli impegni ha fatto nottata a migrare il blog ad un nuovo CMS. In realtà la questione è un po' meno semplice di così, e mi serve per introdurre un argomento importante per chi ha intenzione di **migrare  il proprio sito a Jekyll** mantenendo inalterata la funzionalità globale (compresa soprattutto quella social).

Cominciamo dal principio: poco prima della Blogfest (quest'anno Festa della Rete) ho migrato il mio blog a Jekyll, dopodiché tutto contentone ho sfornato un post con alcuni consigli, mantenendo comunque nel mio product backlog (volendo usare termini da fuffarolo Agile) la reintroduzione dei commenti e delle funzionalità legate alla Graph API di Facebook: solo durante il weekend mi sono reso conto che proprio da quel punto di vista avevo spaccato tutto. A Facebook infatti non piace per niente l'**impostazione dei record A** consigliata [da GitHub](https://help.github.com/articles/tips-for-configuring-an-a-record-with-your-dns-provider), quindi se usate [GitHub Pages](https://pages.github.com/) per servire le vostre pagine e volete che l'entity debugger vi sorrida, dovete per prima cosa utilizzare un **CNAME** per la root del vostro dominio. Ovviamente io sono fortunatissimo... e quindi **OVH non supporta tutto questo**.

Ora, quello che accade è che possiamo trovarci davanti a due eventalità pessime: la prima è quella che è successa a me, ovvero che il provider non fornisca nessuno strumento per assegnare un CNAME al proprio dominio; la seconda è quasi peggiore, ovvero che il provider da cui abbiamo registrato il dominio fornisca si una maniera anche agevole per **assegnare all'apex domain un CNAME**, ma gestisca molto molto molto male la cosa.

Prima di buttarmi in un angolo con della birra a fare l'alcolista, ho greppato l'internet per un po' e in preda alla disperazione più totale [CloudFlare si è presentato a me](http://davidensinger.com/2014/04/transferring-the-dns-from-namecheap-to-cloudflare-for-github-pages/) come un servizio circonfuso di luce. Tramite **CloudFlare** infatti non solo possiamo avvalerci di una CDN notevole, ma possiamo anche (chiaramente) scegliere di non curarci di questo e abilitare solo le caratteristiche di base, gratuitamente, che ci permettono di **gestire il DNS del nostro dominio** supportando tutto quello che manca invece al nostro provider di servizi.

Se vogliamo quindi ospitare il nostro sito su GitHub Pages, ci basterà iscriverci a CloudFlare e invece che inserire un record A **puntare un CNAME dal nostro dominio al nostro sottodominio di GitHub** (nel mio caso, _dottorblaster.github.io_). Successivamente - e questa è la parte peggiore - dobbiamo **togliere la delegazione dei DNS al nostro provider** e dobbiamo impostare i DNS di CloudFlare per il nostro dominio. Questo può essere fatto direttamente da qualsiasi pannello di controllo, ma da quando l'avremo fatto ci vorranno dalle ventiquattro alle settantadue ore perché le modifiche abbiano effetto. Per quanto riguarda questo passo ho avuto un'esperienza terribile perché per circa una ventina di ore i DNS hanno continuato a sfarfallare tra il vecchio e il nuovo dominio, causando anche dei malfunzionamenti a tutto il cucuzzaro.

Una volta fatto tutto e atteso quanto dovuto, apriamo un terminale e verifichiamo che tutto stia funzionando a dovere:

```bash
blaster@boromir ~ $ dig dottorblaster.it

; <<>> DiG 9.8.3-P1 <<>> dottorblaster.it
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12044
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;dottorblaster.it.		IN	A

;; ANSWER SECTION:
dottorblaster.it.	239	IN	A	104.28.3.118
dottorblaster.it.	239	IN	A	104.28.2.118

;; Query time: 5379 msec
;; SERVER: 8.8.8.8#53(8.8.8.8)
;; WHEN: Thu Sep 18 14:07:04 2014
;; MSG SIZE  rcvd: 66
```

Ora che il vostro **CNAME record** sul dominio "nudo" [non rompe l'Internet](http://blog.iwantmyname.com/2014/01/why-alias-type-records-break-the-internet.html), leggetevi una comoda [spiegazione](https://support.cloudflare.com/hc/en-us/articles/200169056-CNAME-Flattening-RFC-compliant-support-for-CNAME-at-the-root) dell'implementazione di questa feature da parte di CloudFlare, totalmente **RFC-compliant**. Perché ho scritto tutto questo? Perché se avessi saputo tutte queste cose in anticipo, probabilmente [Angelo](http://angelo.ghigi.com/), che mi ha scattato quella foto, avrebbe avuto non dico un soggetto migliore, ma quantomeno un soggetto meno sfatto, con gli occhi meno pesti.

_Photo courtesy of [Angelo Ghigi](https://www.flickr.com/photos/aghigi/15222489276/)_
