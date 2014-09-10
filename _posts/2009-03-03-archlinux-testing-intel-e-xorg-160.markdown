---
layout: post
status: publish
published: true
title: ArchLinux Testing, [intel] e Xorg 1.6.0
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 315
wordpress_url: http://dottorblaster.it/?p=315
date: '2009-03-03 22:29:27 +0100'
date_gmt: '2009-03-03 21:29:27 +0100'
categories:
- Linux
tags:
- Arch
- Repository
comments:
- id: 6764
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-03-04 12:13:46 +0100'
  date_gmt: '2009-03-04 11:13:46 +0100'
  content: "altro driver 2.6.3\r\nhttp://www.phoronix.com/scan.php?page=news_item&amp;px=NzExMQ"
- id: 6765
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://intensedebate.com/people/dottorblaster
  date: '2009-03-04 11:20:37 +0100'
  date_gmt: '2009-03-04 11:20:37 +0100'
  content: "Si, avevo gi&agrave; visto. \nIl pacchetto &egrave; stato flaggato come
    outdated poco dopo il rilascio, ma non &egrave; ancora stato uppato :D "
- id: 14890
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-03-04 11:13:00 +0100'
  date_gmt: '2009-03-04 11:13:00 +0100'
  content: "altro driver 2.6.3\r\nhttp://www.phoronix.com/scan.php?page=news_item&amp;px=NzExMQ"
- id: 14891
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-03-04 11:20:00 +0100'
  date_gmt: '2009-03-04 11:20:00 +0100'
  content: "Si, avevo gi&agrave; visto. \nIl pacchetto &egrave; stato flaggato come
    outdated poco dopo il rilascio, ma non &egrave; ancora stato uppato :D"
---
<p>Ok, oggi ufficialmente i nuovi pacchetti con driver, input e quant'altro, compreso il nuovo server X 1.6.0, sono entrati nel repository Testing.</p>
<p>Suggerisco quindi di abbandonare il mio repository e abilitare tranquillamente Testing, per poter avere dei driver aggiornati assieme a Mesa e varie librerie.</p>
<p>Abilitato Testing, basta un</p>
<blockquote><p>pacman -Sf xf86-video-intel intel-dri libdrm mesa libgl xorg-server</p></blockquote>
<p>da root, dopo aver disabilitato il mio repository per abbandonarlo definitivamente. Ovviamente chi non utilizza alcuni dei pacchetti sopra citati non esiti a modificare il comando.</p>
<p>Stessa procedura per chi usa il mio repository senza Testing abilitato. Conviene assolutamente che venga eseguita quando Xorg 1.6.0 e gli altri pacchetti approderanno in Extra.</p>
