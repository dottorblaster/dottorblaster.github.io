---
layout: post
status: publish
published: true
title: Xf86-video-intel 2.8.0 è fra noi :)
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 416
wordpress_url: http://dottorblaster.it/?p=416
date: '2009-07-22 21:29:36 +0200'
date_gmt: '2009-07-22 20:29:36 +0200'
categories:
- Linux
- Tech
tags:
- Informatica
- Arch
- Kernel
comments:
- id: 8390
  author: mattia
  author_email: tia.tif@fastwebnet.it
  author_url: ''
  date: '2009-07-23 12:04:55 +0200'
  date_gmt: '2009-07-23 17:04:55 +0200'
  content: era da molto tempo che non tiravano fuori un driver così ben fatto....<br><br>aspetto
    nuovo kernel (per KMS) e nuovo X per testarli e gustarmeli appieno ...
- id: 8392
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-07-23 12:30:15 +0200'
  date_gmt: '2009-07-23 17:30:15 +0200'
  content: Io ho testato su Ubuntu Karmic che utilizza il KMS, non ho notato nessun
    particolare boost, tuttavia il mio test non è stato molto approfondito :)<br>Vedremo
    cosa ci regaleranno gli sviluppatori alla fine di questa strada che ci porterà
    sicuramente ad un UXA prestante come e più di EXA :)
- id: 8395
  author: mattia
  author_email: tia.tif@fastwebnet.it
  author_url: ''
  date: '2009-07-23 15:29:32 +0200'
  date_gmt: '2009-07-23 20:29:32 +0200'
  content: ubuntu è un mondo a parte ogni software che installano prima gli modificano
    qualcosa !!!!<br><br>io aspetto su arch
- id: 8396
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-07-23 15:50:43 +0200'
  date_gmt: '2009-07-23 20:50:43 +0200'
  content: E fai bene :D<br>Comunque in Testing c&#39;è tutto, se vuoi qualche backport
    basta lavorare un po&#39; di pacman ;)
- id: 8399
  author: Andrea Cimitan
  author_email: andrea.cimitan@gmail.com
  author_url: http://www.cimitan.com/blog
  date: '2009-07-24 21:30:03 +0200'
  date_gmt: '2009-07-25 02:30:03 +0200'
  content: Meglio tenersi EXA+greedy per il momento, la differenza purtroppo si sente
    ancora bene
- id: 8400
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-07-24 21:33:32 +0200'
  date_gmt: '2009-07-25 02:33:32 +0200'
  content: Per quanto la differenza si senta ancora alquanto pesantemente, mi sto
    trovando molto bene con il nuovo driver, e ho deciso che era venuto il momento
    di uscire dalla letargia e mettermi a seguire un po&#39; questi benedette xf86-video-intel
    come feci mesi fa :D
- id: 8413
  author: simo
  author_email: simo91.linux@gmail.com
  author_url: http://simo91.wordpress.com/
  date: '2009-07-31 17:26:32 +0200'
  date_gmt: '2009-07-31 22:26:32 +0200'
  content: a quando sui repo di arch?
- id: 8417
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-08-01 16:50:15 +0200'
  date_gmt: '2009-08-01 21:50:15 +0200'
  content: 'Non lo so. :'
- id: 8428
  author: ombra09
  author_email: thelion85@yahoo.it
  author_url: ''
  date: '2009-08-05 14:32:42 +0200'
  date_gmt: '2009-08-05 19:32:42 +0200'
  content: Che tema usi? Mi piacerebbe sapere tutti i dettagli.<br><br>Grazie
- id: 8430
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-08-05 17:30:34 +0200'
  date_gmt: '2009-08-05 22:30:34 +0200'
  content: L&#39;emerald è personale, dovrei renderlo pubblico ma non lo faccio mai
    :D<br>Il GTK è MurrinaFancyBlaster :)
---
<p>Chi mi conosce bene sa che sono stato <strong>uno tra i più grandi avversatori</strong> della scelta fatta dagli sviluppatori di Intel: dare la precedenza al metodo di accelerazione UXA dichiarandolo deprecato ed <em>eliminando ogni supporto ad EXA e XAA</em> mi sembrava una forzatura, una scelta stupida che avrebbe solo intaccato la stima di quei pochi utenti che Linux ha acquisito sul fronte Intel.</p>
<p><strong>Poi questi driver</strong>. Stamattina, vista la notizia, mi sono precipitato ad aggiornare a manina il driver sulla mia Arch, comprendente anche Mesa 7.5, Xserver 1.6.2 e tante altre sciccherie che solo noi testers (tsè! :D) possiamo permetterci di avere.</p>
<p style="text-align: center;"><img class="alignnone" src="http://i26.tinypic.com/dgrxp5.jpg" alt="" width="554" height="413" /></p>
<p style="text-align: left;">Dunque, riavviando, ho sgranchito le articolazioni di pollici, alluci, e tutto ciò che ci sta di mezzo, ed ho finalmente testato l'ultimo driver partorito dalla nota casa di microprocessori.</p>
<p style="text-align: left;">Sbalordito, ho visto con i miei occhi che le prestazioni, a distanza solo di qualche commit, sono migliorate tantissimo. Grazie a Mesa 7.5, tra l'altro, non ho più un odioso flickering che avevo scoperto dovuto agli effetti di fade; Mesa e sciccherie a parte, il driver funziona, e ho constatato che non sento più una grossa mancanza di EXA. Qualche mese, ad essere pessimisti, e penso davvero che UXA diverrà pari a EXA se non addirittura migliore.</p>
<p style="text-align: left;">Nota bene: <em>non utilizzo il Kernel Mode Setting</em>.</p>
