---
layout: post
status: publish
published: true
title: KDE 4 SVN per Arch Linux. Dieci minuti?
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
excerpt: "Da qualche settimana ormai è iniziata l'estate, e sul mio hard disk ha trovato
  spazio anche KDE 4, ovviamente compilato da SVN.\r\n\r\nSiccome non penso di voler
  mai sprecare un secondo del mio tempo a compilare sorgenti SVN di KDE, mi affido
  quotidianamente ad un repository altamente nocivo per Arch che ho scoperto solo
  di recente.\r\n\r\nVediamo quindi come installare KDE 4 sulla nostra Arch Linux,
  impacchettato quotidianamente; consiglio la lettura della procedura nel suo insieme,
  per evitare sorprese :D\r\n\r\nAggiungiamo <strong>in cima</strong> al nostro pacman.conf
  le seguenti righe:\r\n\r\n<code>[kde]<br/>\r\nServer = http://pkg.markconstable.com/kde/i686/</code>\r\n\r\nPer
  Arch 64 basta sostituire \"i686\" con \"x86_64\".\r\n\r\nAdesso, occhio: desumo
  dal nome dei pacchetti che si sovrascrivano a KDE 3, quindi, cari utenti Arch che
  avete KDE 3.5, in caso non vi piaccia KDE 4 dovrete reinstallare successivamente
  la versione di Arch. Per gli utenti Gnome invece non sono indicati particolari problemi."
wordpress_id: 178
wordpress_url: http://blaster.netsons.org/?p=178
date: '2008-06-25 14:25:54 +0200'
date_gmt: '2008-06-25 12:25:54 +0200'
categories:
- Linux
- How-To
- Tech
- Desktop Environment
tags:
- Informatica
- Arch
- Arch Linux
- SVN
- KDE
comments:
- id: 2274
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2008-06-25 15:56:51 +0200'
  date_gmt: '2008-06-25 13:56:51 +0200'
  content: "Volevo segnalarti, per completare l'articolo, alla presenza di pacchetti
    di kdemod in versione unstable che vengono rilasciati con frequenza più o meno
    settimanale. Le istruzioni per installarlo sono qui:\r\n\r\nhttp://www.kdemod.ath.cx/bbs/viewtopic.php?id=782\r\n\r\nParagonando
    le due soluzioni possibili, mi sembra che kdemod4 si integri meglio con il sistema
    ma i pacchetti indicati da te sono più completi."
- id: 2275
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-06-25 16:05:52 +0200'
  date_gmt: '2008-06-25 14:05:52 +0200'
  content: "@Emanuele: So che esiste kdemod, ma ho la mania del bleeding-edge. :P\r\nInserirò
    comunque nella guida la tua preziosa indicazione."
- id: 2278
  author: fallingautumnlinks
  author_email: fallingautumnlinks@alice.it
  author_url: http://falling.netsons.org
  date: '2008-06-25 20:29:08 +0200'
  date_gmt: '2008-06-25 18:29:08 +0200'
  content: "Evvai, anche blaster coi suoi polipi !!!\r\nLo sapevo che non avresti
    resistito...è così polposo ;-)\r\nCerto da te non me lo sarei mai aspettato...l'unica
    cosa che potresti fare, senza sprecare giustificazioni è una bel harakiri pubblico,che
    di questi tempi non se ne vedono tutti i giorni, e prima un bel meaculpa da gnomiano,
    o devo chiamarti kdeinao ora ? Voglio una risposta"
- id: 2280
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-06-25 21:44:02 +0200'
  date_gmt: '2008-06-25 19:44:02 +0200'
  content: "@Falling: Beh i polipi attirano che vuoi :P\r\nE comunque il post è servito
    da pubblica scusa per la mia debolezza :D"
- id: 2281
  author: Nicola Greco
  author_email: notsecurity@gmail.com
  author_url: http://notsecurity.com
  date: '2008-06-25 21:55:09 +0200'
  date_gmt: '2008-06-25 19:55:09 +0200'
  content: mmm per ora continuo a utilizzare kdemod corrispondente alla 3.5.9, anche
    se presto credo di provarla kde 4.. aggiungo nei segnalibri
- id: 2283
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-06-26 11:51:10 +0200'
  date_gmt: '2008-06-26 09:51:10 +0200'
  content: "@Nicola Greco: Come hai potuto vedere dal primo commento c'è anche kdemod
    unstable :P"
- id: 2294
  author: Jak - BeeSeek blog admin
  author_email: supermarco88@gmail.com
  author_url: http://blog.beeseek.org
  date: '2008-06-28 18:16:09 +0200'
  date_gmt: '2008-06-28 16:16:09 +0200'
  content: "Ciao ti segnalo l'esistenza di un repo per Arch, praticamente giornaliero
    basato che però va a mettere kde4 in /opt risparmiando il problemone di sovrascrivere
    kdemod 3.5.9, giusto per farci un salto ogni tanto.\r\n\r\nIl repo lo trovate
    in questo post del forum inglese: http://bbs.archlinux.org/viewtopic.php?id=49454\r\n\r\nCredo
    che questa sia una buona soluzione.\r\n\r\n_OT_\r\nMa il WYSIWYG è integrato nella
    nuova versione di WordPress?\r\n_/OT_"
- id: 2296
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-06-28 18:37:45 +0200'
  date_gmt: '2008-06-28 16:37:45 +0200'
  content: "@Jak: Conoscevo già il repo di tanis, ma ho scelto di includere quello
    di markc nella guida per il semplice motivo che è più aggiornato di tanis. Scelta
    comunque validissima come repo, grazie di avermelo ricordato."
- id: 2329
  author: said
  author_email: atvordhosbn@gmail.com
  author_url: ''
  date: '2008-07-03 20:10:32 +0200'
  date_gmt: '2008-07-03 18:10:32 +0200'
  content: "ciao, anche io vorrei mettere kde4 sulla mia arch-box. Quindi in definitiva
    sono preferibili questi repository di mark?\r\nSi potrebbe sapere con esattezza
    di quali pacchetti installati differiscono kde-svn e kde-svn-all?"
- id: 2330
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-07-03 20:57:00 +0200'
  date_gmt: '2008-07-03 18:57:00 +0200'
  content: "@said: Non ricordo quali pacchetti differiscano. Comunque se segui la
    guida non dovresti avere problemi, altrimenti puoi sempre chiedere qui :)"
- id: 3110
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2008-07-09 20:29:01 +0200'
  date_gmt: '2008-07-09 18:29:01 +0200'
  content: "\r\nho abbandonato il repository di kdemod4 in favore di quello di tanis
    (segnalato tra i commenti): è aggiornatissimo e in più comprende tutti ma proprio
    tutti i programmi del progetto kde 4. In pratica hanno compilato tutto l'svn!!!!\r\ne
    ultimamente lo stanno aggiornando molto piu spesso!!! (l ultima compilazione è
    di ieri!!!)\r\n"
- id: 3362
  author: said
  author_email: atvordhosbn@gmail.com
  author_url: ''
  date: '2008-07-11 12:11:19 +0200'
  date_gmt: '2008-07-11 10:11:19 +0200'
  content: 'alla fine anche io ho installato dall''svn di tanis e va tutto abbastanza
    bene... a parte che è bruttissimo: il font ha dei pixel enormi, lo stile pure
    non mi piace, le applicazioni gtk poi fanno davvero pena! ho cercato un po'' ma
    non trovo un configuratore per l''aspetto.. forse lo devo installare?'
- id: 3363
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2008-07-11 14:36:55 +0200'
  date_gmt: '2008-07-11 12:36:55 +0200'
  content: Ma guarda per le applicazioni gtk con tanis non hai installato il componente
    di kde che gestisce le applicazioni gtk; lo puoi installare da aur ma non vedo
    miglioramenti. Comunque per sistemare l aspetto ti basta avviare all 'avvio della
    sessione "gnome-settings-daemon". Per i font e altre cose non so, puoi vedere
    nel menu "system settings" ---&gt; "aspetto" (o equivalente in english)
- id: 3485
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-07-12 10:15:36 +0200'
  date_gmt: '2008-07-12 08:15:36 +0200'
  content: "Con le vostre dritte ci sta venendo fuori un bel dopo-guida.\r\nPenso
    che includerò tutto nel post :D"
- id: 3575
  author: said
  author_email: atvordhosbn@gmail.com
  author_url: ''
  date: '2008-07-13 00:12:43 +0200'
  date_gmt: '2008-07-12 22:12:43 +0200'
  content: io ho installato i pacchetti gtk-qt-engine-svn e ttf-liberation con un
    significativo miglioramento estetico
- id: 5085
  author: raw
  author_email: cryptex00@gmail.com
  author_url: http://rackon.wordpress.com
  date: '2008-07-22 19:37:08 +0200'
  date_gmt: '2008-07-22 17:37:08 +0200'
  content: "Uhm...blaster..mi stai tentando ad installare kde4 sul fisso. In questo
    periodo sono stato titubante...ma se mi garantisci che il sistema va bene e rallentamenti
    rispetto alla versione 3.5 non ce ne sono...allora vado :)\r\nPs.\r\nOttima guida
    :)"
- id: 5086
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-07-22 19:48:50 +0200'
  date_gmt: '2008-07-22 17:48:50 +0200'
  content: "@raw: Rallentamenti necessari non ce ne sono, almeno non di rilevanti
    se possiedi una scheda grafica decente.\r\nTi consiglio di provare :D\r\n\r\nGrazie
    per il complimento, si fa quel che si può ;)"
- id: 5671
  author: Tony-Evo
  author_email: a.cacciotto@virgilio.it
  author_url: ''
  date: '2008-10-20 20:05:02 +0200'
  date_gmt: '2008-10-20 18:05:02 +0200'
  content: "Ragazzi,ma con questi repo funziona anche nepomuk?\r\nPerchè per esempio
    su mandriva nepomuk funziona parzialmente quando si richiamano i tag messi ad
    un file da un errore,invece su suse è propio impossibile richiamare i tag dati
    ai file.\r\n\r\nSe qualcuno è cosi gentile da rispondrmi gliene sarei immensamente
    grato e proverei volentieri arch linux(mai provata)\r\n\r\nGrazie"
- id: 5709
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: ''
  date: '2008-11-08 15:58:30 +0100'
  date_gmt: '2008-11-08 13:58:30 +0100'
  content: segnalo che il repo in oggetto, così come l'altro alternativo (sempre svn)
    non sono aggiornati ormai dall'estate. che io sappia, di fatto in questo momento
    arch non ha repository di questo tipo attivi.
- id: 5710
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org/
  date: '2008-11-08 16:02:24 +0100'
  date_gmt: '2008-11-08 14:02:24 +0100'
  content: "@LuNa: a me sembra che ci siano altri repository in Arch che continuano
    a impacchettare. Cercherò per aggiornare la guida; grazie dell'avviso :)"
- id: 14176
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2008-06-25 13:56:00 +0200'
  date_gmt: '2008-06-25 13:56:00 +0200'
  content: "Volevo segnalarti, per completare l'articolo, alla presenza di pacchetti
    di kdemod in versione unstable che vengono rilasciati con frequenza più o meno
    settimanale. Le istruzioni per installarlo sono qui:\r\n\r\nhttp://www.kdemod.ath.cx/bbs/viewtopic.php?id=782\r\n\r\nParagonando
    le due soluzioni possibili, mi sembra che kdemod4 si integri meglio con il sistema
    ma i pacchetti indicati da te sono più completi."
- id: 14177
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-06-25 14:05:00 +0200'
  date_gmt: '2008-06-25 14:05:00 +0200'
  content: "@Emanuele: So che esiste kdemod, ma ho la mania del bleeding-edge. :P\r\nInserirò
    comunque nella guida la tua preziosa indicazione."
- id: 14178
  author: fallingautumnlinks
  author_email: fallingautumnlinks@alice.it
  author_url: http://falling.netsons.org
  date: '2008-06-25 18:29:00 +0200'
  date_gmt: '2008-06-25 18:29:00 +0200'
  content: "Evvai, anche blaster coi suoi polipi !!!\r\nLo sapevo che non avresti
    resistito...è così polposo ;-)\r\nCerto da te non me lo sarei mai aspettato...l'unica
    cosa che potresti fare, senza sprecare giustificazioni è una bel harakiri pubblico,che
    di questi tempi non se ne vedono tutti i giorni, e prima un bel meaculpa da gnomiano,
    o devo chiamarti kdeinao ora ? Voglio una risposta"
- id: 14179
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-06-25 19:44:00 +0200'
  date_gmt: '2008-06-25 19:44:00 +0200'
  content: "@Falling: Beh i polipi attirano che vuoi :P\r\nE comunque il post è servito
    da pubblica scusa per la mia debolezza :D"
- id: 14180
  author: Nicola Greco
  author_email: notsecurity@gmail.com
  author_url: http://notsecurity.com
  date: '2008-06-25 19:55:00 +0200'
  date_gmt: '2008-06-25 19:55:00 +0200'
  content: mmm per ora continuo a utilizzare kdemod corrispondente alla 3.5.9, anche
    se presto credo di provarla kde 4.. aggiungo nei segnalibri
- id: 14181
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-06-26 09:51:00 +0200'
  date_gmt: '2008-06-26 09:51:00 +0200'
  content: "@Nicola Greco: Come hai potuto vedere dal primo commento c'è anche kdemod
    unstable :P"
- id: 14182
  author: Jak - BeeSeek blog admin
  author_email: supermarco88@gmail.com
  author_url: http://blog.beeseek.org
  date: '2008-06-28 16:16:00 +0200'
  date_gmt: '2008-06-28 16:16:00 +0200'
  content: "Ciao ti segnalo l'esistenza di un repo per Arch, praticamente giornaliero
    basato che però va a mettere kde4 in /opt risparmiando il problemone di sovrascrivere
    kdemod 3.5.9, giusto per farci un salto ogni tanto.\r\n\r\nIl repo lo trovate
    in questo post del forum inglese: http://bbs.archlinux.org/viewtopic.php?id=49454\r\n\r\nCredo
    che questa sia una buona soluzione.\r\n\r\n_OT_\r\nMa il WYSIWYG è integrato nella
    nuova versione di WordPress?\r\n_/OT_"
- id: 14183
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-06-28 16:37:00 +0200'
  date_gmt: '2008-06-28 16:37:00 +0200'
  content: "@Jak: Conoscevo già il repo di tanis, ma ho scelto di includere quello
    di markc nella guida per il semplice motivo che è più aggiornato di tanis. Scelta
    comunque validissima come repo, grazie di avermelo ricordato."
- id: 14184
  author: said
  author_email: atvordhosbn@gmail.com
  author_url: ''
  date: '2008-07-03 18:10:00 +0200'
  date_gmt: '2008-07-03 18:10:00 +0200'
  content: "ciao, anche io vorrei mettere kde4 sulla mia arch-box. Quindi in definitiva
    sono preferibili questi repository di mark?\r\nSi potrebbe sapere con esattezza
    di quali pacchetti installati differiscono kde-svn e kde-svn-all?"
- id: 14185
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-07-03 18:57:00 +0200'
  date_gmt: '2008-07-03 18:57:00 +0200'
  content: "@said: Non ricordo quali pacchetti differiscano. Comunque se segui la
    guida non dovresti avere problemi, altrimenti puoi sempre chiedere qui :)"
- id: 14186
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2008-07-09 18:29:00 +0200'
  date_gmt: '2008-07-09 18:29:00 +0200'
  content: "ho abbandonato il repository di kdemod4 in favore di quello di tanis (segnalato
    tra i commenti): è aggiornatissimo e in più comprende tutti ma proprio tutti i
    programmi del progetto kde 4. In pratica hanno compilato tutto l'svn!!!!\r\ne
    ultimamente lo stanno aggiornando molto piu spesso!!! (l ultima compilazione è
    di ieri!!!)"
- id: 14187
  author: said
  author_email: atvordhosbn@gmail.com
  author_url: ''
  date: '2008-07-11 10:11:00 +0200'
  date_gmt: '2008-07-11 10:11:00 +0200'
  content: 'alla fine anche io ho installato dall''svn di tanis e va tutto abbastanza
    bene... a parte che è bruttissimo: il font ha dei pixel enormi, lo stile pure
    non mi piace, le applicazioni gtk poi fanno davvero pena! ho cercato un po'' ma
    non trovo un configuratore per l''aspetto.. forse lo devo installare?'
- id: 14188
  author: Emanuele
  author_email: newdna1510@yahoo.it
  author_url: ''
  date: '2008-07-11 12:36:00 +0200'
  date_gmt: '2008-07-11 12:36:00 +0200'
  content: Ma guarda per le applicazioni gtk con tanis non hai installato il componente
    di kde che gestisce le applicazioni gtk; lo puoi installare da aur ma non vedo
    miglioramenti. Comunque per sistemare l aspetto ti basta avviare all 'avvio della
    sessione "gnome-settings-daemon". Per i font e altre cose non so, puoi vedere
    nel menu "system settings" ---&gt; "aspetto" (o equivalente in english)
- id: 14189
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-07-12 08:15:00 +0200'
  date_gmt: '2008-07-12 08:15:00 +0200'
  content: "Con le vostre dritte ci sta venendo fuori un bel dopo-guida.\r\nPenso
    che includerò tutto nel post :D"
- id: 14190
  author: said
  author_email: atvordhosbn@gmail.com
  author_url: ''
  date: '2008-07-12 22:12:00 +0200'
  date_gmt: '2008-07-12 22:12:00 +0200'
  content: io ho installato i pacchetti gtk-qt-engine-svn e ttf-liberation con un
    significativo miglioramento estetico
- id: 14191
  author: raw
  author_email: cryptex00@gmail.com
  author_url: http://rackon.wordpress.com
  date: '2008-07-22 17:37:00 +0200'
  date_gmt: '2008-07-22 17:37:00 +0200'
  content: "Uhm...blaster..mi stai tentando ad installare kde4 sul fisso. In questo
    periodo sono stato titubante...ma se mi garantisci che il sistema va bene e rallentamenti
    rispetto alla versione 3.5 non ce ne sono...allora vado :)\r\nPs.\r\nOttima guida
    :)"
- id: 14192
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-07-22 17:48:00 +0200'
  date_gmt: '2008-07-22 17:48:00 +0200'
  content: "@raw: Rallentamenti necessari non ce ne sono, almeno non di rilevanti
    se possiedi una scheda grafica decente.\r\nTi consiglio di provare :D\r\n\r\nGrazie
    per il complimento, si fa quel che si può ;)"
- id: 14193
  author: Tony-Evo
  author_email: a.cacciotto@virgilio.it
  author_url: ''
  date: '2008-10-20 18:05:00 +0200'
  date_gmt: '2008-10-20 18:05:00 +0200'
  content: "Ragazzi,ma con questi repo funziona anche nepomuk?\r\nPerchè per esempio
    su mandriva nepomuk funziona parzialmente quando si richiamano i tag messi ad
    un file da un errore,invece su suse è propio impossibile richiamare i tag dati
    ai file.\r\n\r\nSe qualcuno è cosi gentile da rispondrmi gliene sarei immensamente
    grato e proverei volentieri arch linux(mai provata)\r\n\r\nGrazie"
- id: 14194
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: ''
  date: '2008-11-08 13:58:00 +0100'
  date_gmt: '2008-11-08 13:58:00 +0100'
  content: segnalo che il repo in oggetto, così come l'altro alternativo (sempre svn)
    non sono aggiornati ormai dall'estate. che io sappia, di fatto in questo momento
    arch non ha repository di questo tipo attivi.
- id: 14195
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-11-08 14:02:00 +0100'
  date_gmt: '2008-11-08 14:02:00 +0100'
  content: "@LuNa: a me sembra che ci siano altri repository in Arch che continuano
    a impacchettare. Cercherò per aggiornare la guida; grazie dell'avviso :)"
---
<p>Da qualche settimana ormai è iniziata l'estate, e sul mio hard disk ha trovato spazio anche KDE 4, ovviamente compilato da SVN.</p>
<p>Siccome non penso di voler mai sprecare un secondo del mio tempo a compilare sorgenti SVN di KDE, mi affido quotidianamente ad un repository altamente nocivo per Arch che ho scoperto solo di recente.</p>
<p>Vediamo quindi come installare KDE 4 sulla nostra Arch Linux, impacchettato quotidianamente; consiglio la lettura della procedura nel suo insieme, per evitare sorprese :D</p>
<p>Aggiungiamo <strong>in cima</strong> al nostro pacman.conf le seguenti righe:</p>
<p><code>[kde]<br/><br />
Server = http://pkg.markconstable.com/kde/i686/</code></p>
<p>Per Arch 64 basta sostituire "i686" con "x86_64".</p>
<p>Adesso, occhio: desumo dal nome dei pacchetti che si sovrascrivano a KDE 3, quindi, cari utenti Arch che avete KDE 3.5, in caso non vi piaccia KDE 4 dovrete reinstallare successivamente la versione di Arch. Per gli utenti Gnome invece non sono indicati particolari problemi.<a id="more"></a><a id="more-178"></a></p>
<p><code>pacman -Sy kde-svn</code></p>
<p>Questo installerà KDE 4 sulla nostra macchina. Se vogliamo tutti i frizzi e i lazzi al completo, allora il gruppo da installare è <strong>kde-svn-all</strong>.</p>
<p>Forse dovremo forzare addirittura l'installazione dei pacchetti per far andare alcune cose, ma non c'è da preoccuparsi; non ho riscontrato particolari malfunzionamenti.</p>
<p>Mentre scarica e installa, prendetevi un caffè dato che sono un bel po' di pacchetti :D</p>
<p>Fatto? Fatto! Riavviamo X e godiamoci KDE 4.</p>
<p style="text-align: center;"><a title="KDE 4 di Blaster3, su Flickr" href="http://www.flickr.com/photos/fotoblaster/2610521550/"><img class="aligncenter" src="http://farm4.static.flickr.com/3129/2610521550_b593285794.jpg" alt="KDE 4" width="500" height="375" /></a></p>
<p style="text-align: left;">Adesso non ci resta che divertirci e personalizzare un po' il tutto, specialmente Plasma...</p>
<p style="text-align: center;"><a title="KDE 4... di Blaster3, su Flickr" href="http://www.flickr.com/photos/fotoblaster/2610521984/"><img src="http://farm4.static.flickr.com/3258/2610521984_e182997fc3.jpg" alt="KDE 4..." width="500" height="375" /></a></p>
<p style="text-align: left;">Tornando a Gnome e rimuovendo KDE 4, mi è successo di dover ripristinare la copia di backup fatta in precedenza del file dei menù, poichè mi era misteriosamente scomparso Applicazioni:</p>
<p style="text-align: left;"><code>sudo mv /etc/xdg/menus/applications.menu.pacsave  /etc/xdg/menus/applications.menu</code></p>
<p style="text-align: left;">Beh, questo è tutto.</p>
<p style="text-align: left;">Spero che per gli arcieri sia stata cosa utile :D</p>
