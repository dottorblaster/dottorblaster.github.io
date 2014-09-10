---
layout: post
status: publish
published: true
title: Arch Linux e i nuovi initscripts
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 869
wordpress_url: http://dottorblaster.it/?p=869
date: '2011-05-03 22:21:02 +0200'
date_gmt: '2011-05-03 21:21:02 +0200'
categories:
- Linux
tags:
- Arch
comments:
- id: 15842
  author: M0rF3uS
  author_email: morfeus@ilportalinux.it
  author_url: ''
  date: '2011-05-04 10:34:00 +0200'
  date_gmt: '2011-05-04 10:34:00 +0200'
  content: Un pò come ubuntu che da qualche release usa un sistema alla red hat way
    con "service $servizio $azione", non male, in particolare con rc si fa pure prima
    che è più corto da digitare :D
- id: 15843
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-05-04 17:33:00 +0200'
  date_gmt: '2011-05-04 17:33:00 +0200'
  content: Comodissimo, in più invoglia a paciugare coi servizi attivi e non :D
- id: 15852
  author: MrModd
  author_email: mr.modd@gmail.com
  author_url: http://mrmodd.it/
  date: '2011-05-07 07:43:00 +0200'
  date_gmt: '2011-05-07 07:43:00 +0200'
  content: |
    È bellissimo :D

    Non è male avere un metodo più diretto per raggiungere l'rc.d. Tra l'altro "rc list" oltre a listarti i servizi ti da anche un riassunto del loro stato.
- id: 15872
  author: Darkarix
  author_email: costailmigliore@hotmail.com
  author_url: ''
  date: '2011-05-09 16:37:00 +0200'
  date_gmt: '2011-05-09 16:37:00 +0200'
  content: ' mah... mi sembra una cosa abbastanza inutile dal punto di vista pratico.
    dare "/etc/rc.d/servizio start" o "rc servizio start" è equivalente. forse così
    è un po'' più ordinato...'
- id: 15883
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-05-10 15:46:00 +0200'
  date_gmt: '2011-05-10 15:46:00 +0200'
  content: Beh non solo, lo script può anche riassumere i servizi in esecuzione e
    tanto altro :P
---
<p>Proprio ieri sera <strong><a href="http://dottorblaster.it/2011/05/arch-linux-come-iniziare/">mi trovavo</a></strong> a scrivere di <strong>Arch Linux</strong> e di quanto il mio rapporto con questa distribuzione sia quanto di più <em>carnale</em> possa esservi; appena dopo aver scritto profusamente di consigli e letture interessanti su come approcciarsi a questo mondo particolarmente interessante, ho buttato un occhio nel mio feed reader, e ho trovato <strong><a href="http://www.archlinux.it/forum/viewtopic.php?id=11577">la notizia</a></strong> dell'aggiornamento di <strong>initscripts</strong>, ossia il pacchetto che contiene gli script per l'avvio dei demoni e della macchina.</p>
<p>Questa release porta notevoli cambiamenti (miglioramenti?) per quanto riguarda la struttura della distro; se infatti prima si dovevano eseguire a mano i vari script in <strong>/etc/rc.d/</strong> relativi ai demoni per le azioni di start|stop|restart o altre varie ed eventuali, adesso tramite l'applicazione <strong>rc</strong>, appunto, residente in <strong>/sbin</strong>, possiamo listare, far partire e stoppare i vari servizi in maniera molto più comoda ed elastica.</p>
<p>Questo proprio per tornare a bomba su quello che ho scritto in coda al mio ultimo post: chi ha detto che la consolle dev'essere un luogo scomodo e freddo? ;)</p>
<p>E dunque gli sviluppatori ci hanno donato questa piccola perla, che ci permette di amministrare il nostro sistema con maggiore scioltezza, con uno stampo tipicamente improntato alla facilità di controllo dal lato prettamente sistemistico, come se dell'approccio <strong>BSD-like</strong> in Arch non ce ne fosse abbastanza (cosa che ovviamente a me non dispiace affatto).</p>
<p>Go go go!</p>
