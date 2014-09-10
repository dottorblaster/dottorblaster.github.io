---
layout: post
status: publish
published: true
title: 'Compiz: via gnome-panel dal monopolio delle ombreggiature'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 763
wordpress_url: http://dottorblaster.it/?p=763
date: '2010-10-14 17:08:07 +0200'
date_gmt: '2010-10-14 16:08:07 +0200'
categories:
- Linux
- Desktop Environment
tags:
- Ubuntu
- Gnome
- Arch
- GNOME
- Arch Linux
comments:
- id: 15141
  author: ''
  author_email: marcopaolone@gmail.com
  author_url: ''
  date: '2010-10-14 16:17:00 +0200'
  date_gmt: '2010-10-14 16:17:00 +0200'
  content: Prendo appunti :) grazie dottò! xD
- id: 15143
  author: Gianfrix
  author_email: gianfrix.mg@gmail.com
  author_url: http://gianfrixblog.co.cc
  date: '2010-10-14 18:08:00 +0200'
  date_gmt: '2010-10-14 18:08:00 +0200'
  content: |-
    Fino ad ora toglievo direttamente l'ombra al pannello nelle decorazioni :D
    Denghiù! :D
- id: 15144
  author: MrModd
  author_email: mr.modd@gmail.com
  author_url: ''
  date: '2010-10-15 07:02:00 +0200'
  date_gmt: '2010-10-15 07:02:00 +0200'
  content: |-
    Ottima guida!!! Ho sempre odiato pure io quell'ombra malefica :D
    Appena reinstallo il sistema sarà una delle prime cose che sistemerò, dopo aver installato X.org ;)
    Grazie!!!
- id: 15145
  author: lippol94
  author_email: ''
  author_url: http://twitter.com/lippol94
  date: '2010-10-16 12:41:00 +0200'
  date_gmt: '2010-10-16 12:41:00 +0200'
  content: Grazie mille Bl@ster! Mi tornerà utile! Volevo chiederti.. Come si chiama
    il tema gtk del tuo dekstop? Grazie! =)
- id: 15146
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-10-16 12:52:00 +0200'
  date_gmt: '2010-10-16 12:52:00 +0200'
  content: Shiki Colors :P
- id: 15147
  author: gusions
  author_email: gusions@yahoo.it
  author_url: http://www.arresojas.it
  date: '2010-10-19 21:19:00 +0200'
  date_gmt: '2010-10-19 21:19:00 +0200'
  content: Font usato in gedit?
- id: 15148
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-10-19 22:18:00 +0200'
  date_gmt: '2010-10-19 22:18:00 +0200'
  content: |-
    Monaco.
    Ideale per qualunque testo monospaziato e scrittura di codice.
- id: 15149
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2010-10-23 18:32:00 +0200'
  date_gmt: '2010-10-23 18:32:00 +0200'
  content: |-
    Con il piccolo problema che poi le finestre salgono sopra al pennello in basso ...
    http://img180.imageshack.us/img180/3264/screenshot2ic.png
- id: 15156
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-10-24 11:59:00 +0200'
  date_gmt: '2010-10-24 11:59:00 +0200'
  content: Magari agendo tramite title e non tramite name puoi specificare che deve
    stare sopra solo il pannello superiore :D
---
<p>La <strong>consistenza dell'interfaccia</strong> grafica è un elemento importante in un sistema operativo diretto all'utenza desktop: è piacevole per un utente ritrovare voci di menù già viste attraverso più applicazioni, e oltre ciò è anche bello che la fisica degli oggetti sul desktop sia abbastanza coerente. È per questo motivo che recentemente ho iniziato <strong>ad odiare</strong> un comportamento piuttosto fastidioso di <strong>Compiz</strong>, che mentre in <strong>Ubuntu</strong> e in <strong>Debian</strong> (dietro patch? Dietro impostazione predefinita?) non sovrappone il pannello di <strong>GNOME</strong> alle finestre, nelle altre distribuzioni che seguono una linea più semplice come <strong>Slackware</strong> e <strong>Arch Linux</strong> sottopone il desktop ad una forzata dittatura dell'ombra proiettata dal pannello.</p>
<p>Dunque questa mattina mi sono messo a indagare un po', e sono arrivato ad un risultato <strong>più che soddisfacente</strong>, osservabile in figura:</p>
<p style="text-align: center;"><img class="alignnone" src="http://i54.tinypic.com/2d85eet.png" alt="" width="381" height="210" /></p>
<p>Come è facilmente visibile, tramite un paio di impostazioni di Compiz sono riuscito a <strong>sottomettere</strong> al mio immenso potere il pannello e la sua maledetta ombra che veniva proiettata su tutte le finestre che piazzavo lì, rendendo anche abbastanza scarsa la visibilità della titlebar. Per risolvere questo annoso problema dunque, possiamo recarci nel configuratore che sicuramente avremo installato, ed abilitare il plugin <strong>Regole delle Finestre</strong>: questo piccolo amico ci permetterà di definire una regola per gnome-panel attraverso la quale andremo a fargli <em>abbasare la cresta</em> :D</p>
<p>Basta andare nella configurazione del plugin, e nella tab "Corrispondenze", alla voce "Sotto", andare ad inserire <code>name=gnome-panel</code>. A questo punto i cambiamenti verranno capplicati e avvicinando le finestre al pannello, finalmente, le vedremo sovrapposte e non sottoposte. Per prevenire poi il problema che si creerebbe andando a selezionare il pannello, dandogli il focus e facendo schizzare l'ombra in su, possiamo incollare il medesimo parametro nella regola "<strong>No focus</strong>".</p>
<p>Problema risolto :P</p>
