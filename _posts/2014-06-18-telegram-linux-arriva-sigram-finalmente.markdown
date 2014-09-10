---
layout: post
status: publish
published: true
title: 'Telegram per Linux: arriva Sigram (finalmente)'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2459
wordpress_url: http://dottorblaster.it/?p=2459
date: '2014-06-18 11:39:09 +0200'
date_gmt: '2014-06-18 10:39:09 +0200'
categories:
- Linux
tags:
- open source
- web
- telegram
- whatsapp
- messaging
comments:
- id: 18789
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2014-06-18 22:46:00 +0200'
  date_gmt: '2014-06-18 21:46:00 +0200'
  content: 80 MB di spazio occupato e le emoji Apple piratate... non male, ma forse
    si potrebbe fare di meglio. :P Intanto lo tengo e cercherò di usarlo, speriamo
    correggano qualche piccolezza e poi diventerà un buon client. :) Anche se la GUI
    non ci azzecca moltissimo con Unity è lo stesso carino.
- id: 18790
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2014-06-19 22:31:00 +0200'
  date_gmt: '2014-06-19 21:31:00 +0200'
  content: Lo spazio occupato fa propendere per l'uninstall immediato ma vabbeh...
    :D
- id: 18791
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2014-06-19 22:36:00 +0200'
  date_gmt: '2014-06-19 21:36:00 +0200'
  content: Eh eh già... però bisogna dire che non è male dai!
- id: 18792
  author: pietrochico
  author_email: pietro.chico1@gmail.com
  author_url: ''
  date: '2014-06-20 21:51:00 +0200'
  date_gmt: '2014-06-20 20:51:00 +0200'
  content: "Un mese senza post... Iniziavo a preoccuparmi :P \nNon ho capito una cosa:
    come va la sincronizzazione tra diversi dispositivi di accesso?"
- id: 18793
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2014-06-20 21:58:00 +0200'
  date_gmt: '2014-06-20 20:58:00 +0200'
  content: "Blaster è uno di opinioni simili alle mie, preferisce la qualità alla
    quantità. :-P \n\nRiguardo alla sincronizzazione, a me funziona bene. "
---
<p><img class="aligncenter" src="http://www.labs.sialan.org/sites/sialan-projects/files/sigram-file-sending.png" alt="Sigram, Telegram per Linux" width="615" height="615" /></p>
<p>Già ho avuto modo di <strong>esprimermi molto favorevolmente</strong> nei confronti di <a href="http://dottorblaster.it/2014/03/telegram-pro-e-contro/">Telegram</a>, che al tempo dell'ormai "storico" down di <strong>Whatsapp</strong> aveva preso il volo come l'alternativa per la messaggistica più gettonata. Nonostante i dubbi sulla sua politica per quanto riguarda l'<strong>open source</strong> e la privacy degli utenti, comunque l'avevo reputato decisamente più sicuro del concorrente Whatsapp e personalmente ho avuto modo di apprezzare la possibilità di avere delle <strong>API pubbliche</strong> che permettessero lo sviluppo di <strong>client di terze parti</strong>.</p>
<p><a href="https://itunes.apple.com/it/app/messenger-for-telegram/id747648890?mt=12">Telegram per Mac</a> è un gran software, con il quale mi sono trovato piuttosto bene negli scorsi mesi, ma sinceramente lavorando la stragrande maggioranza del tempo sul mio <strong>desktop Linux</strong> (si applari, avete sentito bene) ho sentito la mancanza di un client nativo per questa piattaforma, potendo solo fare affidamento su <a href="http://zhukov.github.io/webogram/">Webogram</a>, un client web-based di cui è disponibile anche l'<strong>app per Chrome</strong>.</p>
<p>Per fortuna, come ho letto su <a href="http://feedproxy.google.com/~r/webupd8/~3/YS6MHN9hBeE/sigram-native-linux-desktop-telegram.html">WebUpd8</a>, è stato sviluppato <a href="http://labs.sialan.org/projects/sigram">Sigram</a>, un <strong>client per Telegram che gira su Linux</strong> e utilizza tutte le mie tecnologie preferite:</p>
<ul>
<li>C;</li>
<li>C++;</li>
<li>Qt;</li>
<li>QML.</li>
</ul>
<p>Praticamente un sogno a occhi aperti per chi ama le <strong>librerie Qt</strong> - e perché no, anche la loro portabilità. L'interfaccia non è nemmeno malaccio, giocoforza <strong>QML</strong> rende tutto il software un po' <strong>webbarolo</strong> e il gusto degli sviluppatori, evidentemente deformato da eventuali esperienze in Silicon Valley (se non sono dei residenti), ha fatto si che implementassero <strong>questa UI flattona</strong> (neologismi come se piovesse oggi eh) che però non si accorda molto bene con Unity o con qualsiasi ambiente desktop presente su Linux. Forse con <strong>KDE</strong> va un po' meglio, ma siamo lì.</p>
<p>Per quanto riguarda l'installazione, in maniera molto spartana, dagli sviluppatori vengono forniti dei <strong>pacchetti .deb</strong> che dovrebbero andar bene sia su Ubuntu che su Debian. Viceversa, per le altre distribuzioni, mentre alcune non sono supportate, per le più popolari Fedora (e OpenSUSE?) e Arch Linux abbiamo una <strong>assortimento non ufficiale di RPM e PKGBUILD</strong>.</p>
<p>Nel complesso, sono molto soddisfatto. Un grande <strong>grazie</strong> agli sviluppatori, e un <strong>buon Telegram</strong> come sempre a tutti.</p>
