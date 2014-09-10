---
layout: post
status: publish
published: true
title: "#opencore - Quanto open source c'è dietro wiMAN"
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1843
wordpress_url: http://dottorblaster.it/?p=1843
date: '2012-10-03 09:50:21 +0200'
date_gmt: '2012-10-03 08:50:21 +0200'
categories:
- Open Source
tags:
- opencore
- wiman
comments:
- id: 17955
  author: C.Stefano
  author_email: spazioinformaticoblog@gmail.com
  author_url: http://spazio-informatico.blogspot.com
  date: '2012-10-03 13:34:00 +0200'
  date_gmt: '2012-10-03 12:34:00 +0200'
  content: |-
    Accidenti...che progetto interessante e anche molto suggestivo.
    Complimenti al team.
    Ho solo un dubbio, anzi due.
    1)Non si rischia di rendere Facebook come una sorta di carta d'identità in internet??
    2)Accedere al wifi coi dati di Login su Fb. Ma questo non permetterebbe anche ai fake di accedervi?
- id: 17956
  author: Timothy Redaelli
  author_email: ''
  author_url: http://twitter.com/drizztbsd
  date: '2012-10-03 16:33:00 +0200'
  date_gmt: '2012-10-03 15:33:00 +0200'
  content: Peccato che sia CoovaChilli che OpenWrt siano in licenza GPL e questo obbliga
    a rilasciare i sorgenti a richiesta. Indipendentemente da qualsiasi policy open
    source che vogliano avere
- id: 17957
  author: mik
  author_email: mdimauro83@gmail.com
  author_url: ''
  date: '2012-10-03 21:20:00 +0200'
  date_gmt: '2012-10-03 20:20:00 +0200'
  content: non mi occupo della parte legale, comunque ad essere più specifici non
    abbiamo modificato nè coovachilli nè openwrt, abbiamo *solo* aggiunto alcuni script
    e configurazioni.  L'intento è quello di aprirsi alla community, è solo da capire
    quando ed in che modo :)
- id: 17958
  author: mik
  author_email: mdimauro83@gmail.com
  author_url: ''
  date: '2012-10-03 21:26:00 +0200'
  date_gmt: '2012-10-03 20:26:00 +0200'
  content: 'Grazie Stefano, l'' idea di utilizzare la propria identità digitale grazie
    ad API (facebook, twitter, google) ci è sembrata la strada più semplice per accedere
    al wifi in maniera sicura e veloce, in effetti si traduce in accesso in 1 click,
    dato che molti hanno una sessione facebook sempre aperta sul proprio smartphone.
    Il discorso dei fake si risolve in questo modo: facebook (ad esempio) distingue
    gli utenti in VERIFICATI e NON VERIFICATI, a seconda che abbiano inserito o meno
    nel proprio profilo un numero di cellulare sul quale hanno ricevuto un sms di
    conferma. Possiamo decidere se far navigare solo gli utenti verificati, sfruttando
    quindi lo stesso livello di sicurezza degli hotspot che utilizzano l''autenticazione
    via sms.'
- id: 17959
  author: C.Stefano
  author_email: spazioinformaticoblog@gmail.com
  author_url: http://spazio-informatico.blogspot.com
  date: '2012-10-04 17:35:00 +0200'
  date_gmt: '2012-10-04 16:35:00 +0200'
  content: |-
    Così facendo si associa un numero al proprio account. Effettivamente è un deterrente per gli account fake, sarebbero costretti a convalidare l'account con un numero che è associato a qualcuno/qualcosa
    In ogni caso ritengo che una soluzione di questo tipo permetterebbe anche ad utenti stranieri di accedere anche se il loro numero non è italiano.

    Molto interessante, rinnovo i miei complimenti.
---
<p>Incuriosito da un <a href="http://gadget.wired.it/news/mondo_computer/2012/08/03/wi-man-il-router-social-per-condividere-la-rete-con-i-propri-clienti-89234.html">post su Wired</a> che lessi qualche tempo fa, ho approfondito il discorso di una rete <strong>wifi</strong> con autenticazione legata a <strong>Facebook</strong>, un concetto che mi è parso interessante sin da subito in quanto molto più accessibile per le strutture pubbliche, in modo da non dover più richiedere noiosi dettagli personali quando qualcuno vuole utilizzare la connessione wireless della struttura.</p>
<p>È così che ho <em>pingato</em> i ragazzi di <a href="http://wiman.me/">wiMAN</a>, startup non solo italiana ma pure pugliese (regione in cui ho lasciato il cuore), di cui mi ha particolamente attratto il claim, "Libera il wifi", che prende un po' spunto anche da quella che è l'ottica Fon e dalla comunità dei Foneros. Loro non hanno solamente risposto con pazienza alle mie domande per <a href="http://dottorblaster.it/tag/opencore/">#opencore</a>, ma si sono dimostrati molto gentili e abbiamo chiacchierato anche di altro, come di business model comprensivi di strategie open source e tanti bellissimi argomenti squisitamente più tecnici (tipo <strong>OpenWRT</strong>, dd-WRT, eccetera eccetera). Bando alle ciance, eccovi quindi la mi intervista a <strong>Michele Di Mauro</strong>, in arte <a href="https://twitter.com/wiM1K">@wiM1K</a>.</p>
<p><img class="aligncenter" title="wiMAN" src="http://i47.tinypic.com/2md0web.jpg" alt="wiMAN" width="501" height="251" /></p>
<h3>L'intervista</h3>
<p>Ciao Michele, visto che abbiamo già rotto il ghiaccio su <strong>Twitter</strong> iniziamo subito: ogni sistema software fa affidamento a dei software chiave per il suo funzionamento; questi sono appunto detti "stack software"; come è composto lo <strong>stack software di wiMAN</strong>? Ci sono software <strong>open source</strong> al suo interno?</p>
<blockquote><p>Dunque, la nostra startup è fortemente legata al mondo dell' open source. 4 anni fa da buon studente di ingegneria delle telecomunicazioni ed appassionato <strong>Linux</strong>, mi imbattei per caso in questo progetto <a href="https://openwrt.org/" target="_blank">https://openwrt.org/</a>, ho pensato subito: "wow che figata"! Lo installai sul mio router ed iniziai ad utilizzarlo per un po' (senza tante pretese). Poi dopo un anno con il mio attuale co-founder in wiMAN (<strong>Massimo Ciuffreda</strong>) iniziammo ad installare hotspot "convenzionali" (con registrazione via sms) nel nostro paese (Mattinata) utilizzando soluzioni proprietarie; ben presto peró capimmo che innanzitutto la soluzione non era scalabile ed in piú l' approccio al wifi era comunque sbagliato: non si puó costringere un utente a compilare form di registrazione, ricevere codici via sms o ancora peggio inserire carte di credito per navigare, un approccio di questo tipo costituisce una vera e propria barriera all' ingresso, senza contare che gli stranieri non possono ricevere sms sui propri telefoni con SIM estera. Allora ci siamo detti: "dobbiamo inventarci qualcosa". Così iniziai a rispolverare <strong>OpenWRT</strong> in accoppiata col Linksys wrt54gl (un must), mi serviva a questo punto un demone che mi fornisse il captive portal e mi imbattei in <a href="http://coova.org/CoovaChilli">CoovaChilli</a>. A questo punto sul router avevamo tutto quello che ci serviva. Ci studiammo le api e le classi PHP messe a disposizione da Facebook per autenticare gli utenti attraverso il social network. A questo punto mancava solo una solida base dati per chiudere il cerchio <strong>open source</strong>, scegliemmo <strong>MySQL</strong>. Poi dopo 12.500 ore di lavoro wiman era pronto per essere testato in pubblico. Oggi dopo soli 3 mesi abbiamo raggiunto <strong>quasi 50.000 connessioni</strong> di cui 20.000 ad agosto con soli 80 router circa dislocati in tutta Italia, e siamo solo all' inizio :)</p></blockquote>
<p>Informazioni illuminanti: sono lieto di vedere che tutto quello su cui vi basate è aperto e "hackabile". Parliamo invece delle vostre postazioni e dello <strong>stack</strong> "lato sviluppatore": quali sono gli strumenti che usate per sviluppare? (<strong>IDE</strong>, eventuali VPS)</p>
<blockquote><p>Beh, lato server è tutto <strong>open source</strong>! Per quanto riguarda le nostre postazioni si dividono tra Mac OS e <strong>Ubuntu</strong>. I tool che utilizziamo maggiormente sono <strong>Komodo Edit</strong> come IDE, <strong>Wireshark</strong>, Filezilla, Firefox, Sequel Pro, PHPMyAdmin, GPG, <strong>GIMP</strong>, Vi e personalmente abuso di JQuery !</p>
<p>Pensa che ho chiesto ad un ragazzo del team quali software open source usasse personalmente, mi ha risposto un po' stizzito "io uso solo open source!", ehehe... direi che ci siamo, no? :D</p></blockquote>
<p>Grandissimi :D</p>
<p>Qual è la vostra opinione sul <strong>rapporto tra processo di innovazione e open source</strong>? In quale punto della catena, secondo voi, deve essere inserito lo step del rendere un prodotto aperto?</p>
<blockquote><p>Ti parlo della nostra esperienza: senza open source non avremmo neanche iniziato a pensare a <strong>wiMAN</strong>. Quando ci dicemmo: "sarebbe bello accedere al wifi con Facebook" immediatamente pensai ad OpenWRT, andai a casa ed iniziai a smanettarci; se non ci fosse stato OpenWRT (o qualsiasi altro firmware open) sarebbe rimasta la classica frase: "sarebbe bello se....". L'open source dà la possibilità a chiunque di FARE! Abbatte qualsiasi tipo di barriera e ti mette a disposizione gli strumenti di cui hai bisogno a costo zero e per una <strong>startup</strong> vuole dire tantissimo. Quindi l'innovazione non può prescindere assolutamente dall'open source.</p>
<p>Per la seconda domanda, varia a seconda dell'azienda e del prodotto. Ma qui la questione non è il punto della catena in cui inserire lo step "del rendere un prodotto open". <strong>Il punto è far capire alle aziende, il cui obiettivo è generare profitti, che possono farlo anche con politiche aziendali aperte all'open source</strong>. Ad oggi non sappiamo in quale direzione andrà il nostro prodotto per quanto riguarda l'open source, quello che sappiamo per certo è che all'open source wiMAN deve tanto.</p></blockquote>
<p>Lavorando al vostro progetto, avete contribuito con delle <strong>patch</strong> verso i progetti originali, o non c'è stato bisogno perché erano già adatti ai vostri scopi?</p>
<blockquote><p>In effetti noi abbiamo implementato il login con i social network partendo da <strong>CoovaChilli</strong> che principalmente fornisce la possibilità di autenticare gli utenti su server Radius, cosa che a noi non serviva, dopodiché abbiamo aggiunto una patch sviluppata da noi che si interfaccia con le API di Facebook (ed altri social network) e con i nostri server. Quindi la risposta è sí :)</p></blockquote>
<p>E avete rilasciato questa <strong>patch upstream</strong>, o una versione di Coovachilli modificata?</p>
<blockquote><p>Per il momento stiamo ancora pensando la nostra politica sull'<strong>open source</strong>, sicuramente abbiamo pianificato il rilascio in futuro della patch in una forma ancora da definirsi.</p></blockquote>
