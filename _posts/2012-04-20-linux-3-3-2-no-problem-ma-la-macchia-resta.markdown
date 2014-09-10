---
layout: post
status: publish
published: true
title: 'Linux 3.3.2: no problem, ma la macchia resta'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1230
wordpress_url: http://dottorblaster.it/?p=1230
date: '2012-04-20 19:55:24 +0200'
date_gmt: '2012-04-20 18:55:24 +0200'
categories:
- Linux
tags:
- Arch
comments:
- id: 17375
  author: Timothy
  author_email: timothy.redaelli@gmail.com
  author_url: ''
  date: '2012-04-21 11:31:00 +0200'
  date_gmt: '2012-04-21 10:31:00 +0200'
  content: Potevi usare testing e riportare te il bug prima che il pacchetto venisse
    portato in core
- id: 17377
  author: Picchiopc
  author_email: picchiopc@gmail.com
  author_url: http://picchiopc.wordpress.com
  date: '2012-04-21 13:12:00 +0200'
  date_gmt: '2012-04-21 12:12:00 +0200'
  content: '"Era tempo di YouPorn?" LOL rido come un cretino da 10 minuti xD Cmq anche
    io sono incappato in questo bug, fortuna che avevo il vecchio kernel in /var/cache
    e l''ho ripristinato. '
- id: 17380
  author: Giovanni Scafora
  author_email: linuxmania@gmail.com
  author_url: ''
  date: '2012-04-22 15:25:00 +0200'
  date_gmt: '2012-04-22 14:25:00 +0200'
  content: 'Ciao Alessio, come ben sai,  il meccanismo di Arch Linux prevede solo
    due signoff affinché il kernel linux passi da [testing] a [core]. È molto probabile
    che coloro che hanno dato il signoff non usassero quel driver. È altresì impensabile
    testare tutti i moduli del kernel, soprattutto quando non si ha disposizione quel
    determinato hardware. Ed è impensabile pure chiedere di fornire più di due signoff
    per ogni pacchetto rilasciato per entrambe le architetture (i686 e x86_64). In
    fondo, hai sempre la possibilità di fare un downgrade. Non accolliamo ad Arch
    Linux colpe imputabili solo ed esclusivamente agli sviluppatori del kernel. '
- id: 17381
  author: Giovanni Scafora
  author_email: linuxmania@gmail.com
  author_url: ''
  date: '2012-04-22 15:26:00 +0200'
  date_gmt: '2012-04-22 14:26:00 +0200'
  content: " Potevi fare il downgrade pure se non avevi il vecchio kernel in /var/cache"
- id: 17382
  author: Picchiopc
  author_email: picchiopc@gmail.com
  author_url: http://picchiopc.wordpress.com
  date: '2012-04-22 15:35:00 +0200'
  date_gmt: '2012-04-22 14:35:00 +0200'
  content: " Davvero ? E come ?"
- id: 17383
  author: Giovanni Scafora
  author_email: linuxmania@gmail.com
  author_url: ''
  date: '2012-04-22 17:55:00 +0200'
  date_gmt: '2012-04-22 16:55:00 +0200'
  content: |-
    https://wiki.archlinux.org/index.php/Downgrading_Packages_%28Italiano%29

    È inoltre possibile controllare questo mirror che mantiene pacchetti datati:

    http://schlunix.org/?page_id=11
- id: 17396
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-04-26 12:57:00 +0200'
  date_gmt: '2012-04-26 11:57:00 +0200'
  content: |-
    Sono moderatamente d'accordo, però così a tarallucci e vino mi piacerebbe che per alcuni pacchetti (tipo il kernel appunto) si prevedessero più signoff anzichè solo due. Non credo si avrebbe difficoltà dato che sono pacchetti "critici" usati da tutti. Il problema di questo specifico caso è che ath9k è largamente usato e con un po' di attesa in più si sarebbe raggiunto lo stato dell'arte anche questa volta.

    Tutto IMHO eh ;)
- id: 17405
  author: Giovanni Scafora
  author_email: linuxmania@gmail.com
  author_url: ''
  date: '2012-04-29 00:50:00 +0200'
  date_gmt: '2012-04-28 23:50:00 +0200'
  content: |-
    Sono d'accordo che qualche signoff in più per alcuni pacchetti, tipo il kernel, non sarebbe una cattiva idea, ma la questione non riguarda i signoff, in questo caso specifico, perché ath9k presentava problemi noti agli utenti già molto tempo prima del rilascio del kernel 3.3.1 (anche con le versioni precedenti c'erano problemi). Ammesso e non concesso pure che qualcuno avesse segnalato di nuovo il problema di ath9k (peraltro già noto da tempo anche agli sviluppatori del kernel), pensi che il maintainer del pacchetto del kernel avrebbe dovuto "attendere", quindi saltare/ignorare/bloccare questo e precedenti rilasci *solo* perché un modulo (ath9k) non funzionasse a dovere, sacrificando di conseguenza tutti gli altri benefici apportati?
    Secondo il tuo ragionamento, quindi, mai nessun rilascio del kernel andrebbe in [core], perché ad ogni rilascio si presentano tante migliorie quante anomalie.
- id: 17408
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-04-29 12:03:00 +0200'
  date_gmt: '2012-04-29 11:03:00 +0200'
  content: |-
    Ti dico che in linea di massima sarei d'accordo con te, solo che nel caso specifico non è un "problema" ma una bella gatta da pelare. Anomalie ci possono essere, ma sei d'accordo con me che privare tutti gli utilizzatori di ath9k della possibilità di connettersi a reti protette sia *leggermente* bloccante nei confronti del rollout?

    Quello che intendo dire io è che ok il bleeding edge, ok tutto, ma c'è una certa soglia oltre la quale un bug diventa qualcosa di cui l'utente non è costretto a soffrire, a prescindere dai paradigmi che la filosofia della distribuzione impone. Certo, lode a voi developer per la coerenza, però così mi sembra un po' troppo :D
---
<p>Poco tempo fa è apparso un <a href="http://www.oneopensource.it/13/04/2012/linux-3-3-1-wireless-atheros-non-funzionante-in-attesa-di-patch/">post su OneOpenSource</a> scritto dal medesimo che spiegava come <strong>Linux 3.3.1</strong> introducesse dei bug gravissimi nella gestione di schede wireless <strong>Atheros</strong>, precisamente facenti uso del driver ath9k incluso in Linux già da parecchi anni. A quanto pare infatti, gli sviluppatori hanno deciso di farsi qualche risata alle nostre spalle.</p>
<p>Con <strong>Linux 3.3.2</strong> rilasciato stabile su <a href="http://kernel.org/">kernel.org</a> ho voluto dare una chance alla mainline 3.3 per vedere cosa diavolo succedesse, e invece mi sono trovato connesso alla rete WPA2 di <a href="http://lug.uniroma2.it/">Roma2LUG</a> in men che non si dica. Tutto è bene quel che finisce bene, tuttavia volevo lasciarmi a qualche considerazione da vecchia di paese riguardo l'accaduto, precisamente sul meccanismo di QA e signoff sia del kernel <strong>Linux</strong> che del suo pacchetto in <strong>Arch Linux</strong>.</p>
<p>Mi domando infatti cosa diavolo sia venuto in mente agli sviluppatori da due lati: innanzi tutto rilasciare una modifica del genere <strong>senza testare</strong>. È vero infatti che uno in genere è sicuro di quello che scrive e "if it compiles, it works", tuttavia ho esaminato la patch (capirai, 'sta perizia tecnica hahah) e ho visto che è stata tolta una porzione di codice veramente miserrima, mentre le aggiunte sono state parecchie in confronto. Mi è sembrato come se ci si fosse <strong>dimenticati</strong> di inserire delle syscall in mezzo al codice; qualcosa del tipo "Massì, fàmo così, che ce frega,che ce 'mporta, male che va ci arriva qualche mail minatoria" - e infatti è andata male. Non commento solo perchè in quanto a programmatore sono un'emerito imbecille e non sono al livello, sicuramente, di chi ha scritto ath9k, però insomma. Qualche riserva me la prenderei.</p>
<p>La mia seconda perplessità è riguardo il meccanismo di <strong>signoff di Arch Linux</strong>. Quando è arrivata la mail "please signoff linux-3.3.1" la gente a che pensava? Era tempo di YouPorn? Mi fa strano, perchè comunque gli sviluppatori di Arch di solito scoprono eventuali malfunzionamenti abbastanza in fretta. La <strong>patata bollente</strong> stavolta è scappata dalle mani di tutti, ed è finita in terra. Peccato: sinora il meccanismo di QA (se così si può chiamare, dato che non lo è in maniera letterale) aveva retto parecchio bene a eventi di questo tipo.</p>
<p>Questo è lo spazio riservato alle considerazioni che mi sono concesso. Le riflessioni che ne sono derivate, magari ve le racconto nel prossimo post ;)</p>
