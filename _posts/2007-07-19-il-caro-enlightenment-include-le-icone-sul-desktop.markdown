---
layout: post
status: publish
published: true
title: Il caro Enlightenment include le icone sul desktop!
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
excerpt: 'Eh, già, questa notizia l''aveva già data felipe, ma al momento del suo
  post le icone uno doveva crearsele a manina... invece ieri, facendo il solito checkout
  dal repository di E, sono entrato e... meraviglia!!! Le icone c''erano, eccome!
  E senza editare nulla! '
wordpress_id: 24
wordpress_url: http://blaster.netsons.org/?p=24
date: '2007-07-19 19:23:27 +0200'
date_gmt: '2007-07-19 17:23:27 +0200'
categories:
- Linux
tags:
- Ubuntu
comments: []
---
<p>Eh, già, questa notizia l'aveva già data felipe, ma al momento del suo post le icone uno doveva crearsele a manina... invece ieri, facendo il solito checkout dal repository di E, sono entrato e... meraviglia!!! Le icone c'erano, eccome! E senza editare nulla! <a id="more"></a><a id="more-24"></a> Beh, per installare Enlightenment17 sulla nostra box, non dobbiamo fare altro che questi semplici passi: aggiungere i repository, e con un colpo (anzi due) di APT installare il tutto :)</p>
<blockquote><p>sudo gedit /etc/apt/sources.list</p></blockquote>
<p>verrà aperto il consueto file dei repository, ed in fondo a tutto incollate questo:</p>
<blockquote><p>##Repository Enlightenment<br />
deb http://edevelop.org/pkg-e/ubuntu feisty e17</p></blockquote>
<p>scaricate <a href="http://lut1n.ifrance.com/repo_key.asc">questo file</a> nella vostra home e autenticate il repo:</p>
<blockquote><p>sudo apt-key add repo_key.asc</p></blockquote>
<p>poi date l'ultimo comando:</p>
<blockquote><p>sudo apt-get update &amp;&amp; sudo apt-get install e17</p></blockquote>
<p>Buon divertimento! :D</p>
