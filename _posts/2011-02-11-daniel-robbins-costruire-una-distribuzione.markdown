---
layout: post
status: publish
published: true
title: Daniel Robbins - Costruire una distribuzione
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 832
wordpress_url: http://dottorblaster.it/?p=832
date: '2011-02-11 21:51:07 +0100'
date_gmt: '2011-02-11 20:51:07 +0100'
categories:
- Linux
tags: []
comments:
- id: 15516
  author: ''
  author_email: marcopaolone@gmail.com
  author_url: ''
  date: '2011-02-11 23:49:00 +0100'
  date_gmt: '2011-02-11 23:49:00 +0100'
  content: |-
    C'è tutto un mondo a sé dietro Gentoo... ed è una di quelle distribuzioni per cui non esiste una via di mezzo: o la ami, o la odi. È un modo piacevole per sporcarsi le mani e per capire cosa ci sia dietro le quinte. E soprattutto, crearsi una installazione Linux a proprio piacere, non ha paragoni :)

    &lt;3 Gentoo
- id: 15517
  author: Picchiopc
  author_email: picchiopc@gmail.com
  author_url: http://picchiopc.blogspot.com
  date: '2011-02-12 00:04:00 +0100'
  date_gmt: '2011-02-12 00:04:00 +0100'
  content: "*_* wow bellissima storia!"
- id: 15520
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-02-12 15:48:00 +0100'
  date_gmt: '2011-02-12 15:48:00 +0100'
  content: Da quando l'ho letto ho rivalutato Robbins come persona, e ho visto come
    in realtà Portage sia nato per necessità e non per sadismo :D
- id: 15521
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-02-12 15:49:00 +0100'
  date_gmt: '2011-02-12 15:49:00 +0100'
  content: |-
    Io l'ho sia adorata che odiata :D
    Comunque è vero, è la distro che mi ha insegnato di più.
- id: 15523
  author: Carmine
  author_email: ''
  author_url: http://twitter.com/carmine93
  date: '2011-02-13 08:50:00 +0100'
  date_gmt: '2011-02-13 08:50:00 +0100'
  content: Anche io da quando ho letto quelle pagine ho cambiato idea sia sulla distro
    che su Daniel, anche se mi piacerebbe avere una gentoo, ci sono delle incongruenze,
    che lasciamo perdere, ma comunque resta un'ottima distro
- id: 15524
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-02-15 12:31:00 +0100'
  date_gmt: '2011-02-15 12:31:00 +0100'
  content: Io l'ho avuta per delle settimane e la mia prima impressione è stata quella
    di un sistema che mi permettesse una libertà assoluta. Resta però un po' troppo
    macchinoso come meccanismo, e ho preferito restare fedele ad Arch che mi permette
    di switchare comodamente da precompilato e sistema di ports :D
- id: 15528
  author: Carmine
  author_email: ''
  author_url: http://twitter.com/carmine93
  date: '2011-02-19 17:13:00 +0100'
  date_gmt: '2011-02-19 17:13:00 +0100'
  content: Infatti, ma i "problemi" sorgono anche per il mantenimento, porta via abbastanza
    tempo, comunque i problemi col nuovo kernel si sono risolti, ho provato proprio
    pochi giorni fa, ma in ogni caso resto fedele alla mia Arch e Debian :D
- id: 15529
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-02-19 17:17:00 +0100'
  date_gmt: '2011-02-19 17:17:00 +0100'
  content: Il problema è che ogni rebuild di glibc è un'ora e mezza di compilazione
    -.-'
- id: 15530
  author: ''
  author_email: marcopaolone@gmail.com
  author_url: ''
  date: '2011-02-20 21:24:00 +0100'
  date_gmt: '2011-02-20 21:24:00 +0100'
  content: glibc è quello che impiega meno :D xulrunner e gcc sono peggio...
- id: 15531
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-02-25 12:53:00 +0100'
  date_gmt: '2011-02-25 12:53:00 +0100'
  content: |
    si gcc è il più lento in assoluto, perchè compila prima il gcc nuovo col vecchio, e poi si ricompila con se stesso.
- id: 16946
  author: Bi-andrea
  author_email: bi-andrea@libero.it
  author_url: ''
  date: '2012-01-04 00:47:00 +0100'
  date_gmt: '2012-01-03 23:47:00 +0100'
  content: Io uso Gentoo da 2 anni, con alle spalle 15 anni di RedHat e poi Fedora,
    ho avuto problemi all'inizio perchè non capivo, ma ora la amo...
---
<p>Parlavamo <strong><a href="http://dottorblaster.it/2011/01/lopen-source-quando-funziona-e-quando-no/">poco tempo fa</a></strong> di come gestire un progetto open source: nei commenti si sono sviluppati pensieri interessanti, alcuni simili alle riflessioni fatte da me, altri contrari ma comunque ottimi spunti di riflessione sulla filosofia open e, soprattutto, sulla gestione del codice e dei programmatori, cosa più pragmatica.</p>
<p>Ripensando a questo, mi è venuta in mente una cosa: ma voi l'avete mai letto <strong>Making the Distro</strong>? Si tratta di un insieme di tre articoli, scritti dal fondatore di <strong>Gentoo</strong> Daniel Robbins, che parlano proprio di come costruire una distribuzione, partendo si dal lato tecnico, ma affrontando anche argomenti molto più "umani". Questo povero ragazzo che era Daniel all'inizio infatti, ha riscontrato costruendo giorno dopo giorno una delle migliori distro di tutti i tempi, che in realtà gestire un mucchio di gente, parlarci, cooperare, può diventare una fonte d'ira non indifferente. E soprattutto ha constatato con mano come l'open source, ai tempi come ancora adesso, non sia esattamente tutto rose e fiori.</p>
<p>Certo, la storia è da contestualizzare, tuttavia io penso che una letta alle righe scritte da Daniel non possa fare altro che bene, sia per vedere tecnicamente e umanamente come è nato il toolkit di Gentoo (specialmente <strong>Portage</strong>), poi per godersi un ottimo resoconto, una appassionante storia, di come un ragazzo possa creare un punto fermo nella storia dell'informatica anche solo hobbisticamente. Lo fece Linus Torvalds col kernel, lo fece Daniel Robbins con Gentoo.</p>
<p>Sul serio, leggetevi "<a href="http://www.gentoo.org/doc/it/articles/making-the-distro-p1.xml"><strong>Costruire una distribuzione</strong></a>". Vi farà bene. Ed è divertente.</p>
