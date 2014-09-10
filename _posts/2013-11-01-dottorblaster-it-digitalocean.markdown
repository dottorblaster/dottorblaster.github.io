---
layout: post
status: publish
published: true
title: dottorblaster.it @ DigitalOcean
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2264
wordpress_url: http://dottorblaster.it/?p=2264
date: '2013-11-01 11:59:08 +0100'
date_gmt: '2013-11-01 10:59:08 +0100'
categories:
- Web
tags:
- Debian
- Server
- linux
- digitalocean
comments:
- id: 18576
  author: koalalorenzo
  author_email: koalalorenzo@gmail.com
  author_url: http://blog.setale.me/
  date: '2013-11-01 12:02:00 +0100'
  date_gmt: '2013-11-01 11:02:00 +0100'
  content: Benvenuto a bordo bro! :D
- id: 18577
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2013-11-01 12:03:00 +0100'
  date_gmt: '2013-11-01 11:03:00 +0100'
  content: Hahah grazie :D
- id: 18579
  author: C.Stefano
  author_email: ketiserver@gmail.com
  author_url: http://spazio-informatico.blogspot.com
  date: '2013-11-02 16:36:00 +0100'
  date_gmt: '2013-11-02 15:36:00 +0100'
  content: Interessante...grazie Alessio. Ma prima dove avevi hostato il blog?
- id: 18581
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2013-11-02 17:44:00 +0100'
  date_gmt: '2013-11-02 16:44:00 +0100'
  content: Prima ero su HostingPerTe ma ho voluto passare ad una cosa mia per semplificarmi
    la gestione :)
- id: 18598
  author: "~Smbl"
  author_email: smlb@riseup.net
  author_url: ''
  date: '2013-11-09 17:02:00 +0100'
  date_gmt: '2013-11-09 16:02:00 +0100'
  content: Recentemente sono passato a digitalocean per il mio relay e altre piccole
    cosucce (ad Amsterdam ovviamente) e funziona egregiamente, un ottimo servizio.
    Inoltre il meccanismo dei droplet è fantastico :D
- id: 18599
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2013-11-11 11:39:00 +0100'
  date_gmt: '2013-11-11 10:39:00 +0100'
  content: Vero? Tra l'altro dal punto di vista sales devo ammettere che è fenomenale,
    ti spinge ad acquistare un bel po' tramite loro. Bello bello bello.
- id: 18689
  author: 'Registry npm privato: in cloud con Nodejitsu oppure in-house | Grab The
    Blaster'
  author_email: ''
  author_url: http://dottorblaster.it/2014/01/registry-npm-privato-cloud-nodejitsu-oppure-in-house/
  date: '2014-01-23 17:06:02 +0100'
  date_gmt: '2014-01-23 16:06:02 +0100'
  content: "[&#8230;] al costo della cloud qualche ora di effort e una macchina &#8211;
    o una VPS. Ovviamente io consiglio DigitalOcean che permette l&#8217;hosting di
    droplet su SSD [&#8230;]"
- id: 18763
  author: Cloud server &#8211; su CloudAtCost ci sono i saldi | Grab The Blaster
  author_email: ''
  author_url: http://dottorblaster.it/2014/05/cloud-server-su-cloudatcost-ci-sono-i-saldi/
  date: '2014-05-10 13:49:05 +0200'
  date_gmt: '2014-05-10 12:49:05 +0200'
  content: "[&#8230;] DigitalOcean mi offra un servizio più che soddisfacente, non
    mi piacciono più di tanto i canoni annui: è per questo che già da un po&#8217;
    di tempo [&#8230;]"
---
<p><img class="aligncenter" alt="" src="https://i.imgur.com/dxEAhZr.png?1" width="1009" height="597" /></p>
<p>Era già un po' che ci pensavo, e alla fine l'ho fatto: con il vecchio servizio in scadenza, e il nuovo anno di lavoro alle porte, ho deciso di <strong>spostare il blog</strong> da un banale hosting condiviso <strong>al mio VPS</strong> dove tengo anche le altre applicazioni che sto sviluppando, eccetera eccetera. Questo significa che da oggi, su questo blog, a questo IP, a questo dominio risponde un serverino (con <strong>Debian</strong> come OS) totalmente configurato e amministrato dal sottoscritto, in macchina virtuale, con locazione fisica in un <strong>data center di Amsterdam</strong>.</p>
<p>Il provider che ho scelto per farmi ospitare è <a href="https://www.digitalocean.com/">DigitalOcean</a>, per tutta una serie di motivi: primo fra tutti, il loro <a href="http://www.youtube.com/watch?v=vHZLCahai4Q">spot su YouTube</a> che mi ha conquistato, insieme ovviamente ai feedback dei miei amici. Su consiglio di <a href="http://blog.setale.me/">Lorenzo</a> infatti ho creato una droplet di test qualche mese fa, e non me ne sono mai pentito, anzi. Di qui, la decisione. Un altro punto a favore di <strong>DigitalOcean</strong> poi (almeno per me) è l'<strong>attenzione all'ecosistema open</strong>: ha una comunità fiorente, e ci sono developer (o membri del team) che donano soldi a chi porta avanti progetti che fanno crescere la piattaforma. Una dote rara da trovare, come ha raccontato sempre <strong>Lorenzo</strong> in un <a href="http://blog.setale.me/2013/09/01/500-di-soddisfazioni/">suo post</a>.</p>
<p>In ultimo, ovviamente il prezzo: per <strong>5 dollari al mese</strong>, ossia come dicono negli sport di attrezzi per fitness <strong>qualche caffè ogni 15 giorni</strong>, abbiamo a disposizione delle istanze dove possiamo scegliere noi il <strong>sistema operativo</strong> e configurarle come preferiamo, con prestazioni assolutamente elevate e un pannello di controllo al top che permette il deploy rapido di nuove macchine, nel caso in cui l'architettura con cui ci troviamo dovesse (e potesse, chiaramente) scalare rapidamente.</p>
<p>Insomma: per adesso sono soddisfatto. Ah, perché <strong>Amsterdam</strong>? Perché così posso ospitare chi e cosa voglio, senza preoccuparmi del fatto che <strong>GPG</strong> sia considerato un'<a href="http://en.wikipedia.org/wiki/Pretty_Good_Privacy#Current_situation">arma termonucleare globale</a>. (Ovviamente, adesso la situazione sulla <strong>crittografia PGP</strong> è più stabile, ma non intendo solo quella: voglio poter usare la tecnologia che mi pare. Simple.)</p>
