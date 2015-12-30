---
layout: post
status: publish
published: true
title: Jekyll e il flusso di pubblicazione
date: 2015-12-30 20:49:00 +0100
categories:
- Tech
tags:
- jekyll
- blogging
---

![Jekyll](http://i68.tinypic.com/2qbhnya.png)

In un suo post Nicola mi ha elogiato di aver mantenuto il ritmo di pubblicazione nonostante il passaggio a **Jekyll**. Per chi non lo conoscesse, [Jekyll](https://jekyllrb.com/) è il motore su cui si basa questo blog - o forse dovrei dire "non-motore" visto che di fatto è solo un generatore di siti statici. È vero, Jekyll da fuori sembra una figata assurda e quando poi ci sei dentro scopri che mentre tante cose sono facilissime rispetto a un CMS tradizionale, altre mancano di immediatezza, come la scrittura di un post. Visto che il buon **kOoLiNuS** si è dimostrato perplesso, vediamo di fare chiarezza su cosa influisca realmente in un flusso di pubblicazione basato su Jekyll, e anche su qualche aspetto collaterale.

> Mentre lascio a te la lettura e la valutazione di questa mossa, volevo mettere in evidenza la frase finale. Jekyll sarà anche figo, ma è senz’altro geek e abbastanza tecnico… e quando nella vita si vuole stare comodi non sempre certe soluzioni sono tali da invogliarti ad approcciare alla scrittura.
>
> Con l’eccezione di Dr.Blaster e Lucio, infatti, non conosco nessuno che una volta migrato su questa piattaforma abbia mantenuto il precedente ritmo di pubblicazione…

## Pregi di Jekyll
Sicuramente una delle cose più rilevanti, è che hai tutto in locale. Nel caso in cui tu voglia scrivere, hai tutto a disposizione per farlo: **basta aprire l'editor di testo**, iniziare a buttare giù qualcosa, riguardarlo, dargli una forma (e una formattazione). Quando hai finito, chiudi l'editor di testo e via: salvi il file e ti basta fare **un commit e un push su GitHub** (oppure rigenerare il sito, nel caso in cui tu non stia usando un sistema di Continuous Integration o GitHub Pages come faccio io). Tutto arabo vero? Ecco appunto: a questo arriviamo dopo.

Un altro grandissimo pregio, è che praticamente **non c'è bisogno di backup**, dato che la larghissima maggioranza dei blog generati da Jekyll che conosco sono sotto un opportuno sistema di versioning. Jekyll, d'altronde, è pensato per fare proprio questo: mantenere il proprio blog tramite solo testo, un'alberatura di file grossomodo semplice e qualche comando da terminale. L'idea è geniale, anche perché espandendo il concetto espresso poco sopra, mantenendo tutto versionato e su un hosting Git/SVN, aggiungere contenuti non comporta praticamente sforzo, il backup si fa da sé, e così via.

Oltre questo, troviamo anche una **personalizzabilità invidiabile**: basta modificare i template dei formati dei propri post, tramite il Liquid Templating Markup, per aggiungere nuovi custom post type e tanto altro. Insomma, una cosa per veri smanettoni smaliziati, il che ci porta direttamente ai difetti. :-D

## Difetti di Jekyll
Bello Jekyll, fico Jekyll, però è anche vero che per un blogger tutto questo significa alle volte una **fatica bestiale**. Nonostante l'infrastruttura perfetta infatti (dal punto di vista tecnico), il blogger è comunque una creatura che vive di impressione e ispirazione; la criticità quindi diventa proprio l'assenza di frontend, il fatto che senza strumenti che ti aiutino non riesci più a trovare quell'immediatezza, quel flusso di lavoro a cui ormai lungo i decenni il CMS ti ha abituato (nel mio caso, prima FlatNuke poi WordPress). A me Jekyll piace ancora, ma è anche vero che dopo più di un anno dalla migrazione, nell'intento di incrementare il ritmo di pubblicazione, ho cominciato a [scrivere una gemma Ruby](https://github.com/dottorblaster/burst) che dovrebbe contenere una serie di helper. L'ho messa su GitHub come quasi tutto il mio codice, e penso che presto ne farò il push anche su **RubyGems.org** :-)

Insomma, non è tutto oro quello che luccica, anzi: purtroppo nel caso di Jekyll è assolutamente reale che non c'è più quell'immediatezza che c'era con altri CMS; quello che è vero, tuttavia, è che lo strumento cambia il modo di scrivere, e sicuramente **Jekyll ha fatto in modo che scrivessi cose leggermente più ponderate**. Pian piano spero di arricchire Burst di funzionalità in modo da fornirmi tutto quello di cui ho bisogno.

È troppo vero: Jekyll ha reso di me un blogger peggiore (forse? Dato che comunque non scrivo più così spesso), ma penso che mi abbia reso più riflessivo e un programmatore migliore, indubbiamente. Il fatto che mi abbia dato nuove necessità da soddisfare, e nuovi problemi da risolvere, per me è un pregio ma per altri senza dubbio può essere un freno. E lo sarà: non è fatto per uscire dall'ambito geek, e quello che deve fare lo fa eccellentemente.

## Difetti? Ne ha, però...
È vero che usare un martello di un tipo piuttosto che di un altro tipo non cambia che il chiodo venga piantato, ma **uno dei siti più belli** che io abbia visto nell'ultimo anno è basato su Jekyll e merita una menzione: parlo del sito di [opensensorsdata](http://www.opensensorsdata.it/), e di tutti i sottodomini, rigorosamente jekyllizzati. È un esempio ottimo, secondo me, di come Jekyll possa corrispondere in modo più che ottimo a **determinate esigenze aziendali**.

_E ora scusate, devo andare a scrivere un software in Ruby per automatizzare la scrittura dei post per il mio blog basato sulla generazione di siti statici. A volte penso che, semplicemente, invece di automatizzare tutto solo per il gusto di farlo, dovrei semplicemente muovere il culo e scrivere di più :-)_
