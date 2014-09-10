---
layout: post
status: publish
published: true
title: Aggiornata ancora la guida alla ricompilazione del kernel
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 165
wordpress_url: http://blaster.netsons.org/?p=165
date: '2008-04-05 11:43:25 +0200'
date_gmt: '2008-04-05 09:43:25 +0200'
categories:
- Linux
- How-To
- Tech
tags:
- Informatica
- Kernel
comments:
- id: 1833
  author: scimmia
  author_email: lists4davide@gmail.com
  author_url: ''
  date: '2008-04-08 13:00:11 +0200'
  date_gmt: '2008-04-08 11:00:11 +0200'
  content: "ritorno un attimo sulla questione di make oldconfig, sono d'accordo con
    te che alla prima compilazione possa riusltare non indispensabile; ma io preferisco
    usarlo lo stesso, per utilizzare i parametri del kernel debian (che so funzionare
    senza problemi di sorta) e poi applicarci sopra, con un make menuconfig le mie
    scelte e i miei parametri modificati (più che altro la rimozione di molti moduli
    non indispensabili).\r\nIo uso questa tecnica perché offre una sorta di paracadute,
    se dimentichi qualcosa, il valore di default andrà bene. E oltre a questo, anche
    dopo 10 anni di linux, non conosco il significato di ogni parametro nè tanto meno
    il valore migliore.\r\n\r\nAd ogni modo buona guida; credo sarà utile a più di
    qualcuno.\r\nCiao."
- id: 1834
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-04-08 16:49:05 +0200'
  date_gmt: '2008-04-08 14:49:05 +0200'
  content: "<p>Credo che tu abbia ragione, tuttavia non rivedrò la guida 8)</p>\r\n<p>Sono
    comunque d'accordo sul fatto che make oldconfig offra una scelta sicura per chi
    è alle prime compilazioni :D</p>"
- id: 14072
  author: ''
  author_email: lists4davide@gmail.com
  author_url: ''
  date: '2008-04-08 11:00:00 +0200'
  date_gmt: '2008-04-08 11:00:00 +0200'
  content: "ritorno un attimo sulla questione di make oldconfig, sono d'accordo con
    te che alla prima compilazione possa riusltare non indispensabile; ma io preferisco
    usarlo lo stesso, per utilizzare i parametri del kernel debian (che so funzionare
    senza problemi di sorta) e poi applicarci sopra, con un make menuconfig le mie
    scelte e i miei parametri modificati (più che altro la rimozione di molti moduli
    non indispensabili).\r\nIo uso questa tecnica perché offre una sorta di paracadute,
    se dimentichi qualcosa, il valore di default andrà bene. E oltre a questo, anche
    dopo 10 anni di linux, non conosco il significato di ogni parametro nè tanto meno
    il valore migliore.\r\n\r\nAd ogni modo buona guida; credo sarà utile a più di
    qualcuno.\r\nCiao."
- id: 14073
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-04-08 14:49:00 +0200'
  date_gmt: '2008-04-08 14:49:00 +0200'
  content: |-
    Credo che tu abbia ragione, tuttavia non rivedrò la guida 8)
    Sono comunque d'accordo sul fatto che make oldconfig offra una scelta sicura per chi è alle prime compilazioni :D
---
<p>Vista la mia aperta mentalità nei confronti delle opinioni altrui, ho deciso di inserire i suggerimenti di <a href="http://opensource2007.netsons.org/2007/">LuNa</a> e scimmia come statici nella mia guida alla ricompilazione del kernel debian-way.</p>
<p>LuNa ha suggerito che l'opzione <strong>modules_image</strong> non serve a nulla, se non si includono moduli esterni non presenti nella mainline; allo stesso modo è stato fondamentale l'intervento del mio amico scimmia il quale ha pensato bene di ricordarmi di includere una parte che menzionasse <strong>make oldconfig</strong>. L'ho fatto, inserendo anche la mia opinione personale sul comando che, seppur fondamentale in caso di ri-compilazione, nel caso della prima compilazione di un vanilla non credo meriti tutta quell'importanza che invece ha nel primo caso.</p>
<p>Ho dato anche qualche ritocchino per chi volesse cimentarsi nella compilazione seguendo però la via grafica (non tramite kernelcheck) di xconfig e gconfig. Io stesso ho perso una ventina di minuti prima di capire che mi mancavano le qt-dev :D</p>
<p>Beh, che dire... leggete, imparate, ricompilate e fatemi sapere che la guida è utile!</p>
