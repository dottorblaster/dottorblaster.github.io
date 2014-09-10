---
layout: post
status: publish
published: true
title: 'Pronti per voi: WebKitGTK+ 1.1.12'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 427
wordpress_url: http://dottorblaster.it/?p=427
date: '2009-08-09 16:04:21 +0200'
date_gmt: '2009-08-09 15:04:21 +0200'
categories:
- Linux
- Tech
- Desktop Environment
tags:
- Informatica
- Gnome
- Arch
comments:
- id: 8474
  author: lazza
  author_email: ilpinguino@andrealazzarotto.com
  author_url: http://www.2girls1cup.com/
  date: '2009-08-09 18:03:22 +0200'
  date_gmt: '2009-08-09 23:03:22 +0200'
  content: a proposito di webkit, quando spieghi come buttarlo in pidgin?
- id: 8487
  author: Gianfrix
  author_email: gianfrix.mg@gmail.com
  author_url: http://gianfrix.netsons.org
  date: '2009-08-10 11:49:06 +0200'
  date_gmt: '2009-08-10 16:49:06 +0200'
  content: Denghiu! :D
- id: 8488
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-08-10 13:19:43 +0200'
  date_gmt: '2009-08-10 18:19:43 +0200'
  content: Si fighiuri :D
- id: 8491
  author: koalalorenzo
  author_email: koalalorenzo@siderus.org
  author_url: http://www.koalalorenzo.com
  date: '2009-08-11 08:12:12 +0200'
  date_gmt: '2009-08-11 13:12:12 +0200'
  content: Invece di quel simbolo di cui non preferisco pronunciar nome, perché non
    metti Midori o simile? :)<br>asd
- id: 8492
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-08-11 10:18:37 +0200'
  date_gmt: '2009-08-11 15:18:37 +0200'
  content: Perchè Midori non è WebKit xD
- id: 8510
  author: koalalorenzo
  author_email: koalalorenzo@siderus.org
  author_url: http://www.koalalorenzo.com
  date: '2009-08-11 17:02:12 +0200'
  date_gmt: '2009-08-11 22:02:12 +0200'
  content: '<a href="http://en.wikipedia.org/wiki/Midori_%28web_browser" rel="nofollow">http://en.wikipedia.org/wiki/Midori_(web_browser</a>)<br><br>Midori
    usa webkit :<br>O almeno così io leggo :'
---
<p>Ieri, mentre <a href="http://dottorblaster.it/2009/08/nuovi-smanetti-nuovi-casini-debian-e-il-pacchetto-mancante/">smanettavo</a> con la mia nuova Debian Sid, ho notato installando i pacchetti relativi a WebKit, che la versione era la 1.1.12. Così, avendomi messo Apt la pulce nell'orecchio, controllato la versione del relativo pacchetto presente nei repository di Arch Linux, e mi è stata restituita per tutta risposta la versione 1.1.10. Ho così spulciato tra le dipendenze del nuovo WebKit, per vedere cosa ne intralciasse il mantenimento, e ho visto che necessita di libsoup, un software relativo al mio caro GNOME, alla  versione 2.27.4; ho così deciso di impacchettare il tutto e fornirvelo in dei comodi pacchetti installabili tranquillamente con Pacman.</p>
<p style="text-align: center;"><img class="alignnone" src="http://i28.tinypic.com/21l4s41.jpg" alt="" width="538" height="327" /></p>
<p style="text-align: left;">Dopo la compilazione relativamente breve di libsoup, che per fortuna non ha richiesto backport di alcun tipo dal GIT di GNOME, ho proceduto alla compilazione di WebKit; ho dovuto farlo stamattina presto, quando c'era ancora il fresco visto che altrimenti avrei fuso la CPU. :D</p>
<p style="text-align: left;">Per tutti coloro che volessero aggiornare un po' la loro versione di WebKit per Arch Linux, dunque, ho sfornato questi due pacchetti, così da non far affaticare le vostre CPU su quel popo' di sorgente ;)</p>
<p style="text-align: left;"><a href="http://dl.getdropbox.com/u/685412/libsoup-2.27.4-1-i686.pkg.tar.gz">LibSoup-2.27.4-1</a></p>
<p style="text-align: left;"><a href="http://dl.getdropbox.com/u/685412/libwebkit-1.1.12-1-i686.pkg.tar.gz">LibWebKit-1.1.12-1</a></p>
<p style="text-align: left;">P.S.: Pacchetti solo per i686. Non dispongo ancora di Arch64, lo sapete :D</p>
<p style="text-align: left;">
