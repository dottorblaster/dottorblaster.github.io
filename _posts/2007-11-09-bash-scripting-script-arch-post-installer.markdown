---
layout: post
status: publish
published: true
title: 'Bash Scripting: script Arch post-installer'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
excerpt: 'L''altro giorno ero in canale, e da Diska è partita un''idea pazza che però
  poteva diventare una roba buona per tutti gli utenti Arch alle prime armi. In pratica
  ha proposto, dopo un po'' che parlavamo del più e del meno, di fare uno scriptino
  (ino ino), molto pratico, che si interfacciasse con il povero e indifeso utente
  Arch e lo guidasse sino al cuore del sistema, con qualche <em>pacman -S robautile</em>,
  impostando la lingua, generando i locali, e cose di questo genere: per farla breve,
  io vorrei che questo script diventasse una sorta di punto di riferimento, e spiegasse
  all''utente che cosa in quel preciso momento si sta portando avanti, in modo da
  fornire allo stesso tempo un pratico script che prepari il terreno per la semina,
  e allo stesso tempo un software educativo :D'
wordpress_id: 109
wordpress_url: http://blaster.netsons.org/?p=109
date: '2007-11-09 10:46:43 +0100'
date_gmt: '2007-11-09 08:46:43 +0100'
categories:
- Linux
- Progetti
tags:
- Progetti
- Arch
comments:
- id: 1037
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2007-11-09 11:05:16 +0100'
  date_gmt: '2007-11-09 09:05:16 +0100'
  content: "ehm\r\nkoff .. koff .. &egrave; un po che lo sto facendo gi&agrave;\r\n:D"
- id: 1038
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2007-11-09 11:06:22 +0100'
  date_gmt: '2007-11-09 09:06:22 +0100'
  content: LuNa argghh; allora ti do una mano!
- id: 1039
  author: matteo
  author_email: matteo@luccalug.it
  author_url: http://luk156.wordpress.com
  date: '2007-11-09 14:56:07 +0100'
  date_gmt: '2007-11-09 12:56:07 +0100'
  content: Interessante... io stavo pensando pi&ugrave; semplicemnte ad un pacchetto
    simil ubuntu-restricted-extras che installa tutti i vari plugin font eccc...
- id: 1040
  author: ubu4ever
  author_email: morarossa@gmail.com
  author_url: http://ubu4ever.netsons.org
  date: '2007-11-09 14:59:01 +0100'
  date_gmt: '2007-11-09 12:59:01 +0100'
  content: "Uhm.... ci sono anche io! (faccio un po schifo in fatto di scripting ma
    si fa quello che si pu&ograve;). Tanto tra poco avr&agrave; una arch pure io,
    visto che ho risolto il problema &quot;internet&quot;.\r\n\r\n@ matteo\r\n\r\nAnche
    questa idea non &egrave; male........."
- id: 1041
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2007-11-09 16:01:20 +0100'
  date_gmt: '2007-11-09 14:01:20 +0100'
  content: "@matteo: Beh, un simil-n00b pu&ograve; chiedere anche questo. Tanto non
    &egrave; che sia molto difficile implementare qualcosa del genere ;)\r\n@ubu4ever:
    Evvai!"
- id: 1050
  author: marco
  author_email: marcocurreli@tiscali.it
  author_url: ''
  date: '2007-11-10 01:22:56 +0100'
  date_gmt: '2007-11-09 23:22:56 +0100'
  content: "Sono un po' scettico al riguardo.\r\nLa prima configurazione è generalmente
    quella piiù importante, e questa è anche la fase in cui un nuovo utente ha già
    messo in conto di perderci un po' di tempo.\r\nCon la configurazione totalmente
    manuale l'utente non solo ha un sistema funzionante, ma alla fine del processo
    ha una macchina che conosce, in altre parole è padrone della propria macchina.\r\nEd
    è questa la filosofia di Arch Linux.\r\n\r\nIn caso di problemi, o di modifiche
    al sistema, l'utente dovrà imparare molte meno cose (e tra l'altro questa è la
    fase in cui generalmente si è meno disposti a imparare cose nuove).\r\n\r\nArch
    è una distribuzione completamente \"trasparente\", e non vorrei che si venissero
    a creare delle \"scatole nere\".\r\n\r\nAggiungerei anche che agire direttamente
    sui file di configurazione è una cosa abbasanza semplice, soprattutto se ci sono
    delle guide chiare."
- id: 1051
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2007-11-10 15:12:32 +0100'
  date_gmt: '2007-11-10 13:12:32 +0100'
  content: "@marco: hai ragione :D\r\ned &egrave; per questo che adesso io e LuNa
    ci stiamo orientando su qualcosa di diverso ;)"
- id: 1096
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2007-11-15 19:57:20 +0100'
  date_gmt: '2007-11-15 17:57:20 +0100'
  content: "Arghhh eretici! Al rogo!\r\nVogliono trasformare Arch in una\r\n&quot;scimmietta
    scorreggiosa&quot;!\r\nVade retro!\r\n:)"
- id: 1098
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2007-11-15 20:05:03 +0100'
  date_gmt: '2007-11-15 18:05:03 +0100'
  content: Uff. Era un'idea. :D
- id: 13540
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2007-11-09 09:05:00 +0100'
  date_gmt: '2007-11-09 09:05:00 +0100'
  content: "ehm\r\nkoff .. koff .. &egrave; un po che lo sto facendo gi&agrave;\r\n:D"
- id: 13541
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2007-11-09 09:06:00 +0100'
  date_gmt: '2007-11-09 09:06:00 +0100'
  content: LuNa argghh; allora ti do una mano!
- id: 13542
  author: matteo
  author_email: matteo@luccalug.it
  author_url: http://luk156.wordpress.com
  date: '2007-11-09 12:56:00 +0100'
  date_gmt: '2007-11-09 12:56:00 +0100'
  content: Interessante... io stavo pensando pi&ugrave; semplicemnte ad un pacchetto
    simil ubuntu-restricted-extras che installa tutti i vari plugin font eccc...
- id: 13543
  author: ubu4ever
  author_email: morarossa@gmail.com
  author_url: http://ubu4ever.netsons.org
  date: '2007-11-09 12:59:00 +0100'
  date_gmt: '2007-11-09 12:59:00 +0100'
  content: "Uhm.... ci sono anche io! (faccio un po schifo in fatto di scripting ma
    si fa quello che si pu&ograve;). Tanto tra poco avr&agrave; una arch pure io,
    visto che ho risolto il problema &quot;internet&quot;.\r\n\r\n@ matteo\r\n\r\nAnche
    questa idea non &egrave; male........."
- id: 13544
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2007-11-09 14:01:00 +0100'
  date_gmt: '2007-11-09 14:01:00 +0100'
  content: "@matteo: Beh, un simil-n00b pu&ograve; chiedere anche questo. Tanto non
    &egrave; che sia molto difficile implementare qualcosa del genere ;)\r\n@ubu4ever:
    Evvai!"
- id: 13545
  author: marco
  author_email: marcocurreli@tiscali.it
  author_url: ''
  date: '2007-11-09 23:22:00 +0100'
  date_gmt: '2007-11-09 23:22:00 +0100'
  content: "Sono un po' scettico al riguardo.\r\nLa prima configurazione è generalmente
    quella piiù importante, e questa è anche la fase in cui un nuovo utente ha già
    messo in conto di perderci un po' di tempo.\r\nCon la configurazione totalmente
    manuale l'utente non solo ha un sistema funzionante, ma alla fine del processo
    ha una macchina che conosce, in altre parole è padrone della propria macchina.\r\nEd
    è questa la filosofia di Arch Linux.\r\n\r\nIn caso di problemi, o di modifiche
    al sistema, l'utente dovrà imparare molte meno cose (e tra l'altro questa è la
    fase in cui generalmente si è meno disposti a imparare cose nuove).\r\n\r\nArch
    è una distribuzione completamente \"trasparente\", e non vorrei che si venissero
    a creare delle \"scatole nere\".\r\n\r\nAggiungerei anche che agire direttamente
    sui file di configurazione è una cosa abbasanza semplice, soprattutto se ci sono
    delle guide chiare."
- id: 13546
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2007-11-10 13:12:00 +0100'
  date_gmt: '2007-11-10 13:12:00 +0100'
  content: "@marco: hai ragione :D\r\ned &egrave; per questo che adesso io e LuNa
    ci stiamo orientando su qualcosa di diverso ;)"
- id: 13547
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2007-11-15 17:57:00 +0100'
  date_gmt: '2007-11-15 17:57:00 +0100'
  content: "Arghhh eretici! Al rogo!\r\nVogliono trasformare Arch in una\r\n&quot;scimmietta
    scorreggiosa&quot;!\r\nVade retro!\r\n:)"
- id: 13548
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2007-11-15 18:05:00 +0100'
  date_gmt: '2007-11-15 18:05:00 +0100'
  content: Uff. Era un'idea. :D
---
<p>L'altro giorno ero in canale, e da Diska è partita un'idea pazza che però poteva diventare una roba buona per tutti gli utenti Arch alle prime armi. In pratica ha proposto, dopo un po' che parlavamo del più e del meno, di fare uno scriptino (ino ino), molto pratico, che si interfacciasse con il povero e indifeso utente Arch e lo guidasse sino al cuore del sistema, con qualche <em>pacman -S robautile</em>, impostando la lingua, generando i locali, e cose di questo genere: per farla breve, io vorrei che questo script diventasse una sorta di punto di riferimento, e spiegasse all'utente che cosa in quel preciso momento si sta portando avanti, in modo da fornire allo stesso tempo un pratico script che prepari il terreno per la semina, e allo stesso tempo un software educativo :D<a id="more"></a><a id="more-109"></a></p>
<p>Lo so che questo va praticamente a sbattere e a sfracellarsi contro lo spirito della distro (<em>keep it simple</em>, non <em>keep it easy</em>), ma credo che tuttavia, se un utente alle prime armi vuole imparare in fretta, questo sia il modo migliore: uno script che gli spiega:</p>
<blockquote><p>Adesso installiamo un po' di roba utile altrimenti il tuo PC ti scoppia davanti (pacchetto acpi-utils)</p>
<p>Vuoi un ambiente grafico? (pacman -S xorg-server)</p></blockquote>
<p>Insomma, cose di questo genere. Se poi vedremo che qualcuno ci viene dietro, progetto di rendere lo script qualcosa di più "sofisticato", tipo far scegliere ad un n00b che ambiente desktop vuole, e cose di questo genere, che non dovrebbero essere nemmeno troppo difficili. Ebbene, TheKaneB, e altri amici arcieri, mi ucciderete per questa mia idea, ma io la porterò avanti lo stesso.</p>
