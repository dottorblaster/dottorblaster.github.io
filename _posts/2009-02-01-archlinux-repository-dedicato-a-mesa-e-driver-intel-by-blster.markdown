---
layout: post
status: publish
published: true
title: 'ArchLinux: repository dedicato a MESA e driver Intel by Bl@ster'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 271
wordpress_url: http://dottorblaster.it/?p=271
date: '2009-02-01 16:40:24 +0100'
date_gmt: '2009-02-01 15:40:24 +0100'
categories:
- Linux
tags:
- Arch
- Repository
- MESA
- Intel Bl
- Grazie Luca
comments:
- id: 6213
  author: ugaciaka
  author_email: ugaciaka@gmail.com
  author_url: http://ugaciaka.wordpress.com
  date: '2009-02-01 17:59:36 +0100'
  date_gmt: '2009-02-01 16:59:36 +0100'
  content: architettura? :-)
- id: 6214
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 18:28:05 +0100'
  date_gmt: '2009-02-01 17:28:05 +0100'
  content: Grazie Blaster. Ci voleva un repository come questo. Purtroppo il periodo
    nero delle schede grafiche Intel impone un costante aggiornamento. Grazie mille
- id: 6215
  author: pierluigi
  author_email: pierluigi.picciau@gmail.com
  author_url: http://pierloz.com
  date: '2009-02-01 18:53:09 +0100'
  date_gmt: '2009-02-01 17:53:09 +0100'
  content: "ben fatto.\r\n\r\nfinalmente gtkperf è ai livelli di XAA pre 2.6.28, ma
    con UXA e 2.6.28.\r\n\r\ngrazie, hai sopperito alla mia pigrizia di ricompilare
    :)"
- id: 6216
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-02-01 19:18:24 +0100'
  date_gmt: '2009-02-01 18:18:24 +0100'
  content: "@ugaciaka: per il momento solamente i686, non posseggo un 64 bit.\r\nTi
    offri come volontario per la compilazione?\r\n\r\n@pierluigi: Grazie a te di aver
    fatto da tester ;)\r\n\r\n@Emanuele: Non dirlo a me, le prestazioni di Compiz
    hanno avuto uno schizzo a dir poco pazzesco :P"
- id: 6217
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 20:06:11 +0100'
  date_gmt: '2009-02-01 19:06:11 +0100'
  content: "è normale che glxgears sia tornato a 60 FPS?? Nonostante questo valore
    basso comunque compiz va a meraviglia. Voi quanto realizzate con glxgears?? \r\n\r\nPS
    Ho un Intel X3100 su Dell Inspiron 1525"
- id: 6219
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-02-01 20:38:06 +0100'
  date_gmt: '2009-02-01 19:38:06 +0100'
  content: "@Emanuele:\r\n[blaster@astaroth ~]$ glxgears\r\n291 frames in 5.0 seconds
    = 58.054 FPS\r\n299 frames in 5.0 seconds = 59.627 FPS\r\n299 frames in 5.0 seconds
    = 59.628 FPS\r\n[blaster@astaroth ~]$ \r\n\r\nAnche da me questo risultato, su
    una Intel 4500M.\r\nMa i FPS devono essere bassi o alti?"
- id: 6220
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 20:48:26 +0100'
  date_gmt: '2009-02-01 19:48:26 +0100'
  content: credo che piu alto sia il valore piu è performante la scheda video. sul
    fisso ho una nvidia 6600 GT mi dà circa 3000 con glxgears. Invece per la intel
    x3100 il migliore risultato si ottiene con Fedora 10 con un valore superiore ai
    1000
- id: 6221
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 20:53:41 +0100'
  date_gmt: '2009-02-01 19:53:41 +0100'
  content: Comunque secondo me c'è tipo un limite su glxgears. Anche a me va al massimo
    a 300 frames in 5.0 seconds. Di certo non è un benchmark affidabile glxgears.
    Comunque a conclusione di tutto questi nuovi driver vanno meglio dei vecchi.;-)
- id: 6222
  author: pierluigi
  author_email: pierluigi.picciau@gmail.com
  author_url: http://pierloz.com
  date: '2009-02-01 21:04:20 +0100'
  date_gmt: '2009-02-01 20:04:20 +0100'
  content: a parte la non affidabilità di glxgears, avanzo l'ipotesi che i driver
    limitino gli FPS alla frequenza di refresh, tanto una situazione in cui FPS&gt;refresh
    è puro spreco di potenza (e quindi anche di elettricità)
- id: 6223
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-02-01 21:07:21 +0100'
  date_gmt: '2009-02-01 20:07:21 +0100'
  content: "In ogni caso ragazzi, io considero migliori questi driver, e di molto
    :)\r\n\r\nHo aggiornato il repository con anche libgl ;)"
- id: 6224
  author: Piplos
  author_email: piplos89@gmail.com
  author_url: http://www.piplos.org/
  date: '2009-02-01 22:52:52 +0100'
  date_gmt: '2009-02-01 21:52:52 +0100'
  content: "A me la GPU schizza:\r\n\r\npiplos@laptop:~$ glxgears\r\n9076 frames in
    5.0 seconds = 1813.749 FPS\r\n9755 frames in 5.0 seconds = 1950.934 FPS\r\n9745
    frames in 5.0 seconds = 1948.895 FPS\r\n9649 frames in 5.0 seconds = 1929.761
    FPS\r\n\r\nAh, non vi ho detto che è una nVidia. :P"
- id: 6225
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-02-01 22:55:28 +0100'
  date_gmt: '2009-02-01 21:55:28 +0100'
  content: "Per quattro rotelline, da noi è 30 FPS e da te 1813.\r\nChi è meglio?
    :P"
- id: 6226
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 23:21:30 +0100'
  date_gmt: '2009-02-01 22:21:30 +0100'
  content: blaster io ho un problema. Ho riavviato. Entro in gnome e compiz mi va
    bene. Esco da gnome ed entro in kde-chakra 4.2. Attivo gli effetti di kde e vanno
    lenti. Esco da kde e rientro in gnome. Attivo compiz e adesso anche compiz va
    lento.
- id: 6227
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-02-01 23:25:05 +0100'
  date_gmt: '2009-02-01 22:25:05 +0100'
  content: "@Emanuele: Riavvia il PC.\r\nPoi ovviamente apri Firefox e dimmi cosa
    succede 8D"
- id: 6228
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 23:34:50 +0100'
  date_gmt: '2009-02-01 22:34:50 +0100'
  content: riavviando il pc e facendo partire gnome per poi attivare compiz va tutto
    bene. Compiz è fluido.
- id: 6229
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-02-01 23:38:06 +0100'
  date_gmt: '2009-02-01 22:38:06 +0100'
  content: "@Emanuele: Allora è lo stesso baco capitato a me.\r\nNiente paura, lo
    fa poche volte :D\r\n\r\nAspettiamo gli sviluppi, e vediamo se (sicuramente) verrà
    corretto il problema."
- id: 6232
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-02-02 02:45:52 +0100'
  date_gmt: '2009-02-02 01:45:52 +0100'
  content: "~ $ glxgears\r\n15057 frames in 5.0 seconds = 3011.307 FPS\r\n15030 frames
    in 5.0 seconds = 3005.171 FPS\r\n15012 frames in 5.0 seconds = 3002.383 FPS\r\n\r\n8600GT
    refresh a 60Hz"
- id: 6234
  author: Martino
  author_email: gaigi86@gmail.com
  author_url: http://traba86.wordpress.com
  date: '2009-02-02 13:09:11 +0100'
  date_gmt: '2009-02-02 12:09:11 +0100'
  content: "9249 frames in 5.0 seconds = 1849.788 FPS\r\n9233 frames in 5.0 seconds
    = 1846.514 FPS\r\n9164 frames in 5.0 seconds = 1832.614 FPS\r\n9296 frames in
    5.0 seconds = 1859.096 FPS\r\n9130 frames in 5.0 seconds = 1825.822 FPS\r\n9043
    frames in 5.0 seconds = 1808.536 FPS\r\n\r\nIntel(R) G33 mesa 7.2"
- id: 6235
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-02 13:51:56 +0100'
  date_gmt: '2009-02-02 12:51:56 +0100'
  content: '@Martino : puoi postare la sezione "Device" del tuo xorg.conf ?? Grazie!!'
- id: 6236
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-02-02 14:03:34 +0100'
  date_gmt: '2009-02-02 13:03:34 +0100'
  content: "@Martino: Hai postato un risultato ottenuto usando Mesa 7.2 :|"
- id: 6237
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: ''
  date: '2009-02-02 17:38:00 +0100'
  date_gmt: '2009-02-02 16:38:00 +0100'
  content: "glxgears non da alcuna idea come test prestazionale, per quello ci sono
    altri tools, più completi e studiati per testare le prestazioni grafiche. Utile
    però per valutare se OpenGL funziona.\r\n;)"
- id: 6238
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-02-02 18:27:17 +0100'
  date_gmt: '2009-02-02 17:27:17 +0100'
  content: "@LuNa: Ne ho avuto il sospetto :D"
- id: 6282
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 11:33:06 +0100'
  date_gmt: '2009-02-06 10:33:06 +0100'
  content: "@Bla@ster: non è che inseriresti nel tuo repository anche l' xorg-server
    versione di sviluppo (stile 1.5.99 mi sembra che adesso ce l abbiano le versioni
    di Ubuntu e di Fedora in sviluppo) ?? Ho un pò approfondito la vicenda Intel e
    Xorg si dice che con il kernel 2.6.29 gli ultimi driver e il nuovo Xorg le performance
    dovrebbero incrementare notevolmente perchè tutte e tre le principali componenti
    (driver kernel e Xorg) finalmente supportano una certa tecnologia di cui non ricordo
    il nome. Scusami se forse ti chiedo troppo"
- id: 6284
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 13:35:05 +0100'
  date_gmt: '2009-02-06 12:35:05 +0100'
  content: "Ho trovato un post sul forum internazionale di arch. \r\nhttp://bbs.archlinux.org/viewtopic.php?id=61650&amp;p=1\r\n\r\nCi
    sono diversi pkgbuild relativi alle varie componenti. Sto compilando quello che
    manca nel repo. Vi terrò informati dei risultati"
- id: 6285
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-02-06 13:58:46 +0100'
  date_gmt: '2009-02-06 12:58:46 +0100'
  content: "@Emanuele tienimi informato, in ogni caso posso anche inserire i pacchetti
    fatti da te nel repo :P"
- id: 6288
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 15:53:43 +0100'
  date_gmt: '2009-02-06 14:53:43 +0100'
  content: Niente. Ho compilato ed installato quei pacchetti ma niente è cambiato.
    C'è però da considerare che il nuovo xorg-server non riusciva a partire (e vedendo
    il log non ho capito cosa è successo) quindi ho dovuto reinstallare quello presente
    in extra.
- id: 6289
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 16:32:48 +0100'
  date_gmt: '2009-02-06 15:32:48 +0100'
  content: Comunque volevo segnalare come i giochi OpenGL bloccano completamente il
    sistema. Fare una prova con foobiliard o con vdrift.
- id: 6290
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 16:49:33 +0100'
  date_gmt: '2009-02-06 15:49:33 +0100'
  content: Sto facendo nuove prove utilizzando esclusivamente i pacchetti indicati
    nel topic del forum internazionale. A presto
- id: 6292
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-02-06 16:59:23 +0100'
  date_gmt: '2009-02-06 15:59:23 +0100'
  content: "@Emanuele: Io ho appena giocato a foobillard senza problemi, bisogna disattivare
    Compiz per far andare decentemente i giochi, mi succede sempre :D\r\n\r\nTienimi
    informato, e se funzia tutto, stai pronto a passarmi i pacchetti che li hosto
    :D"
- id: 6293
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 17:28:14 +0100'
  date_gmt: '2009-02-06 16:28:14 +0100'
  content: Niente ho installato tutto con i pkgbuild suggeriti nel forum ma ho una
    schermata nera quando avvio Xorg. Purtroppo adesso devo smettere di fare prove..mi
    aspettano i libri di Motori a Combustione Interna. Alla prossima ciao ciao
- id: 6568
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-21 13:15:43 +0100'
  date_gmt: '2009-02-21 12:15:43 +0100'
  content: 'é saltato il server?? Comunque ho fatto una sorta di "benchmark" con Stellarium:
    con i pacchetti presenti in Arch ho un FPS pari a 6 con quelli del tuo repository
    arrivo a 20 FPS. un bel miglioramento no?'
- id: 12478
  author: Dillon Wexell
  author_email: Sterry@gmail.com
  author_url: http://peterlin.weblog.com
  date: '2010-09-03 17:06:21 +0200'
  date_gmt: '2010-09-03 16:06:21 +0200'
  content: Accomplishment.
- id: 14653
  author: ugaciaka
  author_email: ugaciaka@gmail.com
  author_url: http://ugaciaka.wordpress.com
  date: '2009-02-01 16:59:00 +0100'
  date_gmt: '2009-02-01 16:59:00 +0100'
  content: architettura? :-)
- id: 14654
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 17:28:00 +0100'
  date_gmt: '2009-02-01 17:28:00 +0100'
  content: Grazie Blaster. Ci voleva un repository come questo. Purtroppo il periodo
    nero delle schede grafiche Intel impone un costante aggiornamento. Grazie mille
- id: 14655
  author: pierluigi
  author_email: pierluigi.picciau@gmail.com
  author_url: http://pierloz.com
  date: '2009-02-01 17:53:00 +0100'
  date_gmt: '2009-02-01 17:53:00 +0100'
  content: "ben fatto.\r\n\r\nfinalmente gtkperf è ai livelli di XAA pre 2.6.28, ma
    con UXA e 2.6.28.\r\n\r\ngrazie, hai sopperito alla mia pigrizia di ricompilare
    :)"
- id: 14656
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-02-01 18:18:00 +0100'
  date_gmt: '2009-02-01 18:18:00 +0100'
  content: "@ugaciaka: per il momento solamente i686, non posseggo un 64 bit.\r\nTi
    offri come volontario per la compilazione?\r\n\r\n@pierluigi: Grazie a te di aver
    fatto da tester ;)\r\n\r\n@Emanuele: Non dirlo a me, le prestazioni di Compiz
    hanno avuto uno schizzo a dir poco pazzesco :P"
- id: 14657
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 19:06:00 +0100'
  date_gmt: '2009-02-01 19:06:00 +0100'
  content: "è normale che glxgears sia tornato a 60 FPS?? Nonostante questo valore
    basso comunque compiz va a meraviglia. Voi quanto realizzate con glxgears?? \r\n\r\nPS
    Ho un Intel X3100 su Dell Inspiron 1525"
- id: 14658
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-02-01 19:38:00 +0100'
  date_gmt: '2009-02-01 19:38:00 +0100'
  content: "@Emanuele:\r\n[blaster@astaroth ~]$ glxgears\r\n291 frames in 5.0 seconds
    = 58.054 FPS\r\n299 frames in 5.0 seconds = 59.627 FPS\r\n299 frames in 5.0 seconds
    = 59.628 FPS\r\n[blaster@astaroth ~]$ \r\n\r\nAnche da me questo risultato, su
    una Intel 4500M.\r\nMa i FPS devono essere bassi o alti?"
- id: 14659
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 19:48:00 +0100'
  date_gmt: '2009-02-01 19:48:00 +0100'
  content: credo che piu alto sia il valore piu è performante la scheda video. sul
    fisso ho una nvidia 6600 GT mi dà circa 3000 con glxgears. Invece per la intel
    x3100 il migliore risultato si ottiene con Fedora 10 con un valore superiore ai
    1000
- id: 14660
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 19:53:00 +0100'
  date_gmt: '2009-02-01 19:53:00 +0100'
  content: Comunque secondo me c'è tipo un limite su glxgears. Anche a me va al massimo
    a 300 frames in 5.0 seconds. Di certo non è un benchmark affidabile glxgears.
    Comunque a conclusione di tutto questi nuovi driver vanno meglio dei vecchi.;-)
- id: 14661
  author: pierluigi
  author_email: pierluigi.picciau@gmail.com
  author_url: http://pierloz.com
  date: '2009-02-01 20:04:00 +0100'
  date_gmt: '2009-02-01 20:04:00 +0100'
  content: a parte la non affidabilità di glxgears, avanzo l'ipotesi che i driver
    limitino gli FPS alla frequenza di refresh, tanto una situazione in cui FPS&gt;refresh
    è puro spreco di potenza (e quindi anche di elettricità)
- id: 14662
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-02-01 20:07:00 +0100'
  date_gmt: '2009-02-01 20:07:00 +0100'
  content: "In ogni caso ragazzi, io considero migliori questi driver, e di molto
    :)\r\n\r\nHo aggiornato il repository con anche libgl ;)"
- id: 14663
  author: Piplos
  author_email: piplos89@gmail.com
  author_url: http://www.piplos.org/
  date: '2009-02-01 21:52:00 +0100'
  date_gmt: '2009-02-01 21:52:00 +0100'
  content: "A me la GPU schizza:\r\n\r\npiplos@laptop:~$ glxgears\r\n9076 frames in
    5.0 seconds = 1813.749 FPS\r\n9755 frames in 5.0 seconds = 1950.934 FPS\r\n9745
    frames in 5.0 seconds = 1948.895 FPS\r\n9649 frames in 5.0 seconds = 1929.761
    FPS\r\n\r\nAh, non vi ho detto che è una nVidia. :P"
- id: 14664
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-02-01 21:55:00 +0100'
  date_gmt: '2009-02-01 21:55:00 +0100'
  content: "Per quattro rotelline, da noi è 30 FPS e da te 1813.\r\nChi è meglio?
    :P"
- id: 14665
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 22:21:00 +0100'
  date_gmt: '2009-02-01 22:21:00 +0100'
  content: blaster io ho un problema. Ho riavviato. Entro in gnome e compiz mi va
    bene. Esco da gnome ed entro in kde-chakra 4.2. Attivo gli effetti di kde e vanno
    lenti. Esco da kde e rientro in gnome. Attivo compiz e adesso anche compiz va
    lento.
- id: 14666
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-02-01 22:25:00 +0100'
  date_gmt: '2009-02-01 22:25:00 +0100'
  content: "@Emanuele: Riavvia il PC.\r\nPoi ovviamente apri Firefox e dimmi cosa
    succede 8D"
- id: 14667
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-01 22:34:00 +0100'
  date_gmt: '2009-02-01 22:34:00 +0100'
  content: riavviando il pc e facendo partire gnome per poi attivare compiz va tutto
    bene. Compiz è fluido.
- id: 14668
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-02-01 22:38:00 +0100'
  date_gmt: '2009-02-01 22:38:00 +0100'
  content: "@Emanuele: Allora è lo stesso baco capitato a me.\r\nNiente paura, lo
    fa poche volte :D\r\n\r\nAspettiamo gli sviluppi, e vediamo se (sicuramente) verrà
    corretto il problema."
- id: 14669
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-02-02 01:45:00 +0100'
  date_gmt: '2009-02-02 01:45:00 +0100'
  content: "~ $ glxgears\r\n15057 frames in 5.0 seconds = 3011.307 FPS\r\n15030 frames
    in 5.0 seconds = 3005.171 FPS\r\n15012 frames in 5.0 seconds = 3002.383 FPS\r\n\r\n8600GT
    refresh a 60Hz"
- id: 14670
  author: Martino
  author_email: gaigi86@gmail.com
  author_url: http://traba86.wordpress.com
  date: '2009-02-02 12:09:00 +0100'
  date_gmt: '2009-02-02 12:09:00 +0100'
  content: "9249 frames in 5.0 seconds = 1849.788 FPS\r\n9233 frames in 5.0 seconds
    = 1846.514 FPS\r\n9164 frames in 5.0 seconds = 1832.614 FPS\r\n9296 frames in
    5.0 seconds = 1859.096 FPS\r\n9130 frames in 5.0 seconds = 1825.822 FPS\r\n9043
    frames in 5.0 seconds = 1808.536 FPS\r\n\r\nIntel(R) G33 mesa 7.2"
- id: 14671
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-02 12:51:00 +0100'
  date_gmt: '2009-02-02 12:51:00 +0100'
  content: '@Martino : puoi postare la sezione "Device" del tuo xorg.conf ?? Grazie!!'
- id: 14672
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-02-02 13:03:00 +0100'
  date_gmt: '2009-02-02 13:03:00 +0100'
  content: "@Martino: Hai postato un risultato ottenuto usando Mesa 7.2 :|"
- id: 14673
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: ''
  date: '2009-02-02 16:38:00 +0100'
  date_gmt: '2009-02-02 16:38:00 +0100'
  content: "glxgears non da alcuna idea come test prestazionale, per quello ci sono
    altri tools, più completi e studiati per testare le prestazioni grafiche. Utile
    però per valutare se OpenGL funziona.\r\n;)"
- id: 14674
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-02-02 17:27:00 +0100'
  date_gmt: '2009-02-02 17:27:00 +0100'
  content: "@LuNa: Ne ho avuto il sospetto :D"
- id: 14675
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 10:33:00 +0100'
  date_gmt: '2009-02-06 10:33:00 +0100'
  content: "@Bla@ster: non è che inseriresti nel tuo repository anche l' xorg-server
    versione di sviluppo (stile 1.5.99 mi sembra che adesso ce l abbiano le versioni
    di Ubuntu e di Fedora in sviluppo) ?? Ho un pò approfondito la vicenda Intel e
    Xorg si dice che con il kernel 2.6.29 gli ultimi driver e il nuovo Xorg le performance
    dovrebbero incrementare notevolmente perchè tutte e tre le principali componenti
    (driver kernel e Xorg) finalmente supportano una certa tecnologia di cui non ricordo
    il nome. Scusami se forse ti chiedo troppo"
- id: 14676
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 12:35:00 +0100'
  date_gmt: '2009-02-06 12:35:00 +0100'
  content: "Ho trovato un post sul forum internazionale di arch. \r\nhttp://bbs.archlinux.org/viewtopic.php?id=61650&amp;p=1\r\n\r\nCi
    sono diversi pkgbuild relativi alle varie componenti. Sto compilando quello che
    manca nel repo. Vi terrò informati dei risultati"
- id: 14677
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-02-06 12:58:00 +0100'
  date_gmt: '2009-02-06 12:58:00 +0100'
  content: "@Emanuele tienimi informato, in ogni caso posso anche inserire i pacchetti
    fatti da te nel repo :P"
- id: 14678
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 14:53:00 +0100'
  date_gmt: '2009-02-06 14:53:00 +0100'
  content: Niente. Ho compilato ed installato quei pacchetti ma niente è cambiato.
    C'è però da considerare che il nuovo xorg-server non riusciva a partire (e vedendo
    il log non ho capito cosa è successo) quindi ho dovuto reinstallare quello presente
    in extra.
- id: 14679
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 15:32:00 +0100'
  date_gmt: '2009-02-06 15:32:00 +0100'
  content: Comunque volevo segnalare come i giochi OpenGL bloccano completamente il
    sistema. Fare una prova con foobiliard o con vdrift.
- id: 14680
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 15:49:00 +0100'
  date_gmt: '2009-02-06 15:49:00 +0100'
  content: Sto facendo nuove prove utilizzando esclusivamente i pacchetti indicati
    nel topic del forum internazionale. A presto
- id: 14681
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-02-06 15:59:00 +0100'
  date_gmt: '2009-02-06 15:59:00 +0100'
  content: "@Emanuele: Io ho appena giocato a foobillard senza problemi, bisogna disattivare
    Compiz per far andare decentemente i giochi, mi succede sempre :D\r\n\r\nTienimi
    informato, e se funzia tutto, stai pronto a passarmi i pacchetti che li hosto
    :D"
- id: 14682
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-06 16:28:00 +0100'
  date_gmt: '2009-02-06 16:28:00 +0100'
  content: Niente ho installato tutto con i pkgbuild suggeriti nel forum ma ho una
    schermata nera quando avvio Xorg. Purtroppo adesso devo smettere di fare prove..mi
    aspettano i libri di Motori a Combustione Interna. Alla prossima ciao ciao
- id: 14683
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2009-02-21 12:15:00 +0100'
  date_gmt: '2009-02-21 12:15:00 +0100'
  content: 'é saltato il server?? Comunque ho fatto una sorta di "benchmark" con Stellarium:
    con i pacchetti presenti in Arch ho un FPS pari a 6 con quelli del tuo repository
    arrivo a 20 FPS. un bel miglioramento no?'
---
<p>Da poco, mi sono accorto che la versione di MESA nei repository ufficiali ArchLinux era la 7.2, mentre era da qualche tempo uscita la 7.3.</p>
<p>E con l'uscita del nuovo MESA, anche intel-dri e altri pacchetti hanno subito di conseguenza cambiamenti spaventosi, nel mio caso migliori. Quindi, senza indugiare oltre, ho impacchettato tutto ciò che mi pareva essere oltremodo vecchio, e l'ho messo sul mio spazietto online (Grazie a <strong>Luca</strong>!).</p>
<p style="text-align: center;"><img class="alignnone" src="http://www.2pt-inf.com/images/loghi/Intel_logo.jpg" alt="" width="448" height="305" /></p>
<p>Potete quindi aggiungere già da adesso in cima al vostro pacman.conf il mio repository dedicato a tutti quei pacchetti che vengono lasciati, nei repository ufficiali, ad una versione precedente. Questo per quanto riguarda, ovviamente, le schede video Intel e MESA.</p>
<p><code>[intel]<br />
Server = http://blaster.tuttoeniente.net/arch/intel</code></p>
<p>Sembra quasi scontato dire che se avete richieste, o volete riportare qualche baco o imperfezione, siete liberi di farlo, anzi, è apprezzato che lo facciate.</p>
<p>Sappiate però che non sono un mostro di programmatore, e nemmeno un grande patchatore :P</p>
