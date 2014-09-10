---
layout: post
status: publish
published: true
title: 'KDE: nuova API per la decorazione delle finestre'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2485
wordpress_url: http://dottorblaster.it/?p=2485
date: '2014-07-18 15:32:07 +0200'
date_gmt: '2014-07-18 14:32:07 +0200'
categories:
- Open Source
tags:
- KDE
- linux
- open source
- unix
comments: []
---
<p><img src="https://lh4.googleusercontent.com/-1NAxPL1zP64/U8jINjw_p5I/AAAAAAAACcc/LD3FQOjAiKE/w1308-h1136-no/windeco-donate-button1.png" alt="KDecoration 2" /></p>
<blockquote><p>Our decoration API is also showing it’s age. It’s cumbersome to use, too difficult to use. In fact there is a KDecoration and a KCommonDecoration – the latter trying to make KDecoration easier to use by for example providing buttons. The API got extended several times to support more features which are all optional. […] So what makes KDecoration2 better? Obviously it’s no longer QWidget or QWindow based. Instead it’s a pure QObject based API.</p></blockquote>
<p>La citazione di cui sopra è di <a href="http://blog.martin-graesslin.com/blog/2014/07/kdecoration2-the-road-ahead/">Martin Gräßlin</a>, che mi fa sempre impazzire per la qualità eccellente della comunicazione di ciò che accade all’interno del ciclo di sviluppo della <strong>decorazione finestre di KDE</strong>. In sostanza, adesso <strong>KDecoration2</strong> (ovvero il nuovo decoratore delle finestre in <strong>KDE Frameworks 5</strong>) espone una <strong>API</strong> basata su <strong>QObject</strong>, la quale immagino che renderà più flessibile la manipolazione della titlebar in modo da non introdurre solamente oggetti come i bottoni più classici dei classici, ma anche altro.</p>
<p>Un po’ come OS X, per esempio, o le header bar di <strong>GNOME Shell</strong>. Però fatte un po’ meglio.</p>
