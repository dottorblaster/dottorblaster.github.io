---
layout: post
status: publish
published: true
title: Android, Eclipse e strani errori di XML
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1205
wordpress_url: http://dottorblaster.it/?p=1205
date: '2012-03-29 12:06:34 +0200'
date_gmt: '2012-03-29 11:06:34 +0200'
categories:
- Android
tags: []
comments:
- id: 17272
  author: vigliag
  author_email: vigliag@gmail.com
  author_url: ''
  date: '2012-03-29 13:20:00 +0200'
  date_gmt: '2012-03-29 12:20:00 +0200'
  content: |-
    Dovesse capitarmi, so cosa fare :)

    Che lezione era? Sono curioso
- id: 17273
  author: Francesco
  author_email: francisco@rootworld.eu
  author_url: ''
  date: '2012-03-29 15:14:00 +0200'
  date_gmt: '2012-03-29 14:14:00 +0200'
  content: 'Come mai di Abbiategrasso? Sono di lì e non ho mai sentito quell''espressione
    :P '
- id: 17275
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-03-29 19:03:00 +0200'
  date_gmt: '2012-03-29 18:03:00 +0200'
  content: Configurazione e Gestione Reti Locali ;)
- id: 17276
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-03-29 19:03:00 +0200'
  date_gmt: '2012-03-29 18:03:00 +0200'
  content: |-
    Hahah :D
    Boh, così. Quindi non bevete Pampero tutto il giorno? :D
- id: 17278
  author: Tony Stark
  author_email: antonio.cavestro@gmail.com
  author_url: http://vitadanerd.it/
  date: '2012-03-30 10:33:00 +0200'
  date_gmt: '2012-03-30 09:33:00 +0200'
  content: Io odio l'emulatore, è troppo lento :D Compilo l'APK e lo passo sul telefono
    :D
- id: 17279
  author: Davide Fabbri
  author_email: abbio11@gmail.com
  author_url: ''
  date: '2012-03-30 10:48:00 +0200'
  date_gmt: '2012-03-30 09:48:00 +0200'
  content: 'CI ho smadonnato anche io parecchio! Ho scoperto poi che se hai selezionatoun
    file .xml, come ad esempio un layout (in Android capita spessissimo di fare delle
    prove a seguito dell''interfaccia) la compilazione va a farsi benedire.... E''
    uno dei bug più famosi e fastidiosi dell''ADT, sarebbe ora che ci mettessero una
    pezza, basterebbe che a partire dal .xml da cui si fa partire la Build andesse
    a recuperare il manifest e da lì la MainActivity, non mi sembra impossibile! '
- id: 17280
  author: Davide Fabbri
  author_email: abbio11@gmail.com
  author_url: ''
  date: '2012-03-30 10:49:00 +0200'
  date_gmt: '2012-03-30 09:49:00 +0200'
  content: " Puoi anche impostare il telefono come device di debug, basta collegarlo
    via usb e modificare un file di udev... Così l'APK lo passa l'ADT in automatico
    e te lo avvia anche!"
- id: 17281
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-03-30 22:16:00 +0200'
  date_gmt: '2012-03-30 21:16:00 +0200'
  content: |
    Ma infatti anche con un amico abbiamo provato in tutte le salse cambiando qualsiasi build config e l'unica maniera è fare tutta la trafila di selezione del device in ADT. Senseless :D
- id: 17282
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-03-30 22:17:00 +0200'
  date_gmt: '2012-03-30 21:17:00 +0200'
  content: |-
    Come dice @google-ed63b4e694a0257900763dcea2eabbca:disqus puoi benissimo usare il telefono come device connesso direttamente ad adb tramite Eclipse.
    Io però mi scoccio di tirare fuori dal cassetto il cavo USB :D
- id: 17283
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2012-03-31 12:01:00 +0200'
  date_gmt: '2012-03-31 11:01:00 +0200'
  content: 'Sai che adesso mi hai fatto venir voglia di aprire Eclipse e installare
    il plugin per Android invece di studiare altro? No dico, complimenti... XD '
- id: 17284
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-03-31 12:07:00 +0200'
  date_gmt: '2012-03-31 11:07:00 +0200'
  content: Eh a chi lo dici, il mio orale di Elettrotecnica sta penando :D
- id: 17285
  author: Tony Stark
  author_email: antonio.cavestro@gmail.com
  author_url: http://vitadanerd.it/
  date: '2012-03-31 13:15:00 +0200'
  date_gmt: '2012-03-31 12:15:00 +0200'
  content: Bravi ciò! :D
---
<p>Stavo giocando a <strong>Minecraft</strong> (beh? Uno non può mica sempre lavorare) quando mi è tornata in mente la pessima esperienza che ho avuto in questi giorni con <strong>Android SDK</strong>, e più precisamente con <strong>Eclipse</strong>; voglio condividere con voi il momento di colorite bestemmie da "peggiori bar di Caracas" (o di Abbiategrasso), quando ho scoperto che ad un problema grande la soluzione era semplice. Anzi. In realtà non era proprio un problema, ma non vi spoilero :D</p>
<p>Succede che in questi giorni mi sto dilettando con Android e lo sviluppo per il sistema di casa Google. Ho scaricato <strong>Eclipse</strong>, il plugin dedicato, l'SDK. Al suo primo avvio, mi scarica tutte le API di questo mondo e le relative piattaforme con emulatori annessi per test e APK building; succesivamente, vado a scrivere un po' di robaccia tanto per testare. Noto che funziona tutto al primo colpo (e quando io programmo nulla funziona mai al primo colpo, quindi questo è un grandissimo evento), tuttavia una volta cominciato il viaggio nelle profondità degli abissi androidiani, mi ha colpito il fatto che anche senza aver modificato una beata mazza il mio software non compilasse più. Figo. E come mai?</p>
<blockquote><p><code>'default' is not a best match for any device/locale combination.<br />
Displaying it with 'Locale Language ___Region __, sw320dp, w320dp, h533dp, Normal Screen, Long screen aspect ratio, Portrait Orientation, Normal, Day time, High Density, Finger-based touchscreen, Soft keyboard, No keyboard, Exposed navigation, Trackball navigation, Screen resolution 800x480, API Level 10' which is compatible, but will actually be displayed with another more specific version of the layout.</code></p>
<p><code>Error in an XML file: aborting build.</code></p></blockquote>
<p>Continuo a non capirci una mazza finché, sconsolato, non chiudo l'SDK e mi metto a fare altro. (Nello specifico, seguire la lezione. Si, stavo programmando mentre il prof spiegava - e per inciso dopo è anche venuto a dirmi "oh ma stai programmando Android! Fighissimo!")</p>
<p>Il giorno dopo, un po' insonnolito, riapro Eclipse e lancio il build <strong>dell'APK</strong>, con conseguente esecuzione in emulazione. Tutto liscio. Allora comincio a cercare su <strong>Google</strong>, smaliziato, e trovo effettivamente dei risultati; nessuno che si applichi al mi caso però: dopo un po' il problema di ripresenta identico e non serve a niente fare Clean, o chiudere e riaprire. Poi mi coglie l'ispirazione.</p>
<p>E decido di riaprire Eclipse, e lanciare la sequenza di build dal file principale che contiene la <strong>Main Activity</strong>: boom, tutto funziona alla grande. Cambio file, di nuovo stesso errore.</p>
<p>Conclusione? Beh, lesson learned: non fate gli idioti come me. Lanciate l'applicazione dal file principale.</p>
