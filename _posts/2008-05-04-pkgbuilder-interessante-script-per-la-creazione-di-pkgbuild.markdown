---
layout: post
status: publish
published: true
title: PKGBUILDER, interessante script per la creazione di PKGBUILD
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 170
wordpress_url: http://blaster.netsons.org/?p=170
date: '2008-05-04 09:33:53 +0200'
date_gmt: '2008-05-04 07:33:53 +0200'
categories:
- Linux
- Tech
- Desktop Environment
tags:
- Recensioni
- Informatica
- Gnome
- Arch
- Programmare
comments:
- id: 1903
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2008-05-04 10:55:36 +0200'
  date_gmt: '2008-05-04 08:55:36 +0200'
  content: "Ma fatto cosi è, secondo me, assolutamente inutile.\r\nSerebbe utile se
    funzionasse tipo, che so, checkinstall o dh_make di debian, \r\ncioè monitorizzasse
    una pseudo installazione, o creasse un semplice pkbuild con dipendende\r\ne build.\r\nAltrimenti
    notepad è più che adeguato e in abs trovi esempi a iosa per make cmake python
    con script install e quant'altro"
- id: 1904
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-05-04 11:22:16 +0200'
  date_gmt: '2008-05-04 09:22:16 +0200'
  content: "<p>Infatti ho precisato che è da migliorare, e citandomi da solo:</p>\r\n<blockquote>Beh,
    che dire, questo tool mi sembra comunque ottimo per chi non ha voglia (come me)
    di mettersi a buttare giù un PKGBUILD da zero, e non vuole prendere un modello
    di PKGBUILD come riferimento.\r\n</blockquote>\r\n<p>:)</p>\r\n<p>e non dimenticare
    che in dh_make e checkinstall le istruzioni di compilazione le dai sempre tu,
    non è mai automatica la procedura. Automatico è semmai il processo di creazione
    della subdirectory debian, che in arch non è necessaria essendo il pacchetto compilato
    in fakeroot e compresso.</p>\r\n<p>Comunque trovo anche io che l'aggiunta delle
    dipendenze, sia di compilazione che di esecuzione, in automatico sarebbe ottima,
    anche perchè certi pkgbuild non sono fatti in maniera ortodossa da questo punto
    di vista.</p>"
- id: 1905
  author: Psykopear
  author_email: psykopear@gmail.com
  author_url: ''
  date: '2008-05-04 12:19:47 +0200'
  date_gmt: '2008-05-04 10:19:47 +0200'
  content: Anch'io mi ero fatto uno script simile per crearmi i PKGBUILD in modo rapido,
    anche senza l'utilizzo di zenity, tanto è utilizzabilissimo anche semplicemente
    da shell, ed in effetti può essere pratico per scrivere (o modificare) velocemente
    un PKGBUILD, anche se alla fine il build() te lo devi scrivere (ovvimente) da
    solo.
- id: 1906
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-05-04 13:22:37 +0200'
  date_gmt: '2008-05-04 11:22:37 +0200'
  content: "<p>@Psykopear: Si, ma zenity da un aspetto grafico al tutto, fa più figo
    :D</p>"
- id: 1908
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2008-05-04 15:12:38 +0200'
  date_gmt: '2008-05-04 13:12:38 +0200'
  content: "\"e non dimenticare che in dh_make e checkinstall le istruzioni di compilazione
    le dai sempre tu, non è mai automatica la procedura. Automatico è semmai il processo
    di creazione della subdirectory debian, che in arch non è necessaria essendo il
    pacchetto compilato in fakeroot e compresso\"\r\n \r\nIo non lo dimentico, forse
    magari tu non hai ben chiaro come funziona dh_make e debuild binary e a cosa serva
    la cartella debian.\r\n \r\n \r\n "
- id: 1909
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-05-04 18:04:29 +0200'
  date_gmt: '2008-05-04 16:04:29 +0200'
  content: "No scusa, mi sono espresso male per quanto riguarda la directory debian;
    comunque ribadisco che in arch una feature così non aderirebbe al kiss :)\r\nComunque
    a volte dh_make può anche toppare sulle dipendenze ;)"
- id: 1912
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2008-05-05 06:25:13 +0200'
  date_gmt: '2008-05-05 04:25:13 +0200'
  content: "@blaster: ah si perchè dh_make da quando mette le dipendenze ? :D\r\nper
    quanto riguarda il programmino, quoto telperion ... non serve a nulla :D"
- id: 1915
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-05-05 13:32:57 +0200'
  date_gmt: '2008-05-05 11:32:57 +0200'
  content: "Strano, mi ricordavo me le avesse messe :|\r\nProbabilmente le avrò messe
    io a mano e non me le ricordo :)"
- id: 1917
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: ''
  date: '2008-05-05 19:37:40 +0200'
  date_gmt: '2008-05-05 17:37:40 +0200'
  content: "dh_make praticamente da un sorgente qualsiasi crea una cartella chiamata
    debian, con dentro tutti i files di controllo necessari a crearti il pacchettino.
    Non sa assolutamente quali siano le dipendenze, quelle devi conoscerle tu. Ti
    confondi sicuramente con un sorgente con già preparata (diversi lo fanno) la cartella
    debian, dove allora potresti aver trovato già indicate le dipendenze\r\n:)"
- id: 1918
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-05-05 21:31:24 +0200'
  date_gmt: '2008-05-05 19:31:24 +0200'
  content: "<p>@LuNa: Ora che mi ricordo le dipendenze per gtk2-engines le ho settate
    a mano, copiando quelle del pacchetto originale; me lo ricordo perchè ho tirato
    giù i santi a causa dell'arduo copia-incolla con mouse mezzo scassato.</p>\r\n<p>Changelog
    e Control? Non me ne parlare, il duo malefico :lol:</p>"
- id: 1919
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: ''
  date: '2008-05-05 22:43:10 +0200'
  date_gmt: '2008-05-05 20:43:10 +0200'
  content: pacchettizzare debian è difficile. anche rpm (che non conosco) è arcano.
    con arch e slackware è veramente roba da poco con gli script di build.
- id: 1922
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-05-06 13:50:31 +0200'
  date_gmt: '2008-05-06 11:50:31 +0200'
  content: "<p>@LuNa: il KISS si fa sentire parecchio :)</p>"
- id: 1924
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2008-05-06 20:38:05 +0200'
  date_gmt: '2008-05-06 18:38:05 +0200'
  content: "dh_make genera il file control che contiene le variabili\r\nDepends: ${shlibs:Depends},
    ${misc:Depends}\r\nche vengono riempite automaticamente con tutte le dipendenze
    necessarie, basandosi sulle versioni installate sulla macchina.\r\nEsempio il
    mio pacchetto gimp2.5 ha come dipendenze\r\nPackage: gimp2.5\r\nVersion: 2.5.0~Hardy~telperion\r\nArchitecture:
    i386\r\nMaintainer: mauro &lt;mc@unknown&gt;\r\nInstalled-Size: 54172\r\nDepends:
    libaa1 (&gt;= 1.4p5), libart-2.0-2 (&gt;= 2.3.18), libasound2 (&gt;&gt; 1.0.14),
    libatk1.0-0 (&gt;= 1.20.0), libbabl-0.0-0, libc6 (&gt;= 2.4), libcairo2 (&gt;=
    1.6.0), libdbus-1-3 (&gt;= 1.1.1), libdbus-glib-1-2 (&gt;= 0.74), libexif12, libexpat1
    (&gt;= 1.95.8), libfontconfig1 (&gt;= 2.4.0), libfreetype6 (&gt;= 2.3.5), libgegl-0.0-0,
    libglib2.0-0 (&gt;= 2.16.0), libgtk2.0-0 (&gt;= 2.12.0), libhal1 (&gt;= 0.5.8.1),
    libice6 (&gt;= 1:1.0.0), libjpeg62, liblcms1 (&gt;= 1.15-1), libmng1 (&gt;= 1.0.3-1),
    libpango1.0-0 (&gt;= 1.20.1), libpng12-0 (&gt;= 1.2.13-4), libpoppler-glib2 (&gt;=
    0.6), librsvg2-2 (&gt;= 2.18.1), libsm6, libtiff4, libwmf0.2-7 (&gt;= 0.2.8.4),
    libx11-6, libxext6, libxfixes3 (&gt;= 1:4.0.1), libxmu6, libxpm4, libxt6, zlib1g
    (&gt;= 1:1.2.3.3.dfsg-1)\r\n\r\ne io non ne ho messa una (sarebbe un'impresa folle),
    ci pensa debuild a fare il lavoro, e questo è bello.\r\nOvviamente fuziona bene
    solo con tradionali autogen/configure make, non funziona con python e altri sistemi 
    \"esotici\".\r\nL'inferno inizia se devi mettere le mani su debian/rules, dividere
    in diversi pacchetti il risultato, fare script pre/post installazione, un vero
    incubo, lì PKGBUILD è estremamete semplice.\r\nManca un tool che monitorizza una
    normale installazione (magari in fakeroot), calcoli le dipendenze e scriva un
    PKGBUILD \"rozzo\" ricavato dalle operazioni monitorate, magari poi da perfezionare
    a mano, quello si che sarebbe utile.\r\n \r\n \r\n "
- id: 1926
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-05-06 20:45:53 +0200'
  date_gmt: '2008-05-06 18:45:53 +0200'
  content: "<p>@telperion: Beh uno script che mi mette le dipendenze in automatico
    è il mio sogno, ma non so se sarebbe aderente al KISS; molto probabilmente si,
    perchè non si lancia in cose troppo acrobatica.</p>\r\n<p>Comunque le dipendenze
    per gtk2-engines le ho dovute mettere a mano causa impicci vari col file di control
    :lol:</p>\r\n<p>Poi non voglio ancora addentrarmi nel mondo del packaging multiplo,
    perchè so che lì si hanno degli incubi e visioni paurose.</p>"
- id: 14088
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2008-05-04 08:55:00 +0200'
  date_gmt: '2008-05-04 08:55:00 +0200'
  content: "Ma fatto cosi è, secondo me, assolutamente inutile.\r\nSerebbe utile se
    funzionasse tipo, che so, checkinstall o dh_make di debian, \r\ncioè monitorizzasse
    una pseudo installazione, o creasse un semplice pkbuild con dipendende\r\ne build.\r\nAltrimenti
    notepad è più che adeguato e in abs trovi esempi a iosa per make cmake python
    con script install e quant'altro"
- id: 14089
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-05-04 09:22:00 +0200'
  date_gmt: '2008-05-04 09:22:00 +0200'
  content: "Infatti ho precisato che è da migliorare, e citandomi da solo:\n<blockquote>Beh,
    che dire, questo tool mi sembra comunque ottimo per chi non ha voglia (come me)
    di mettersi a buttare giù un PKGBUILD da zero, e non vuole prendere un modello
    di PKGBUILD come riferimento.\r\n</blockquote>\n:)\ne non dimenticare che in dh_make
    e checkinstall le istruzioni di compilazione le dai sempre tu, non è mai automatica
    la procedura. Automatico è semmai il processo di creazione della subdirectory
    debian, che in arch non è necessaria essendo il pacchetto compilato in fakeroot
    e compresso.\nComunque trovo anche io che l'aggiunta delle dipendenze, sia di
    compilazione che di esecuzione, in automatico sarebbe ottima, anche perchè certi
    pkgbuild non sono fatti in maniera ortodossa da questo punto di vista."
- id: 14090
  author: Psykopear
  author_email: psykopear@gmail.com
  author_url: ''
  date: '2008-05-04 10:19:00 +0200'
  date_gmt: '2008-05-04 10:19:00 +0200'
  content: Anch'io mi ero fatto uno script simile per crearmi i PKGBUILD in modo rapido,
    anche senza l'utilizzo di zenity, tanto è utilizzabilissimo anche semplicemente
    da shell, ed in effetti può essere pratico per scrivere (o modificare) velocemente
    un PKGBUILD, anche se alla fine il build() te lo devi scrivere (ovvimente) da
    solo.
- id: 14091
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-05-04 11:22:00 +0200'
  date_gmt: '2008-05-04 11:22:00 +0200'
  content: "@Psykopear: Si, ma zenity da un aspetto grafico al tutto, fa più figo
    :D"
- id: 14092
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2008-05-04 13:12:00 +0200'
  date_gmt: '2008-05-04 13:12:00 +0200'
  content: "\"e non dimenticare che in dh_make e checkinstall le istruzioni di compilazione
    le dai sempre tu, non è mai automatica la procedura. Automatico è semmai il processo
    di creazione della subdirectory debian, che in arch non è necessaria essendo il
    pacchetto compilato in fakeroot e compresso\"\r\n \r\nIo non lo dimentico, forse
    magari tu non hai ben chiaro come funziona dh_make e debuild binary e a cosa serva
    la cartella debian.\r\n \r\n \r\n "
- id: 14093
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-05-04 16:04:00 +0200'
  date_gmt: '2008-05-04 16:04:00 +0200'
  content: "No scusa, mi sono espresso male per quanto riguarda la directory debian;
    comunque ribadisco che in arch una feature così non aderirebbe al kiss :)\r\nComunque
    a volte dh_make può anche toppare sulle dipendenze ;)"
- id: 14094
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2008-05-05 04:25:00 +0200'
  date_gmt: '2008-05-05 04:25:00 +0200'
  content: "@blaster: ah si perchè dh_make da quando mette le dipendenze ? :D\r\nper
    quanto riguarda il programmino, quoto telperion ... non serve a nulla :D"
- id: 14095
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-05-05 11:32:00 +0200'
  date_gmt: '2008-05-05 11:32:00 +0200'
  content: "Strano, mi ricordavo me le avesse messe :|\r\nProbabilmente le avrò messe
    io a mano e non me le ricordo :)"
- id: 14096
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: ''
  date: '2008-05-05 17:37:00 +0200'
  date_gmt: '2008-05-05 17:37:00 +0200'
  content: "dh_make praticamente da un sorgente qualsiasi crea una cartella chiamata
    debian, con dentro tutti i files di controllo necessari a crearti il pacchettino.
    Non sa assolutamente quali siano le dipendenze, quelle devi conoscerle tu. Ti
    confondi sicuramente con un sorgente con già preparata (diversi lo fanno) la cartella
    debian, dove allora potresti aver trovato già indicate le dipendenze\r\n:)"
- id: 14097
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-05-05 19:31:00 +0200'
  date_gmt: '2008-05-05 19:31:00 +0200'
  content: |-
    @LuNa: Ora che mi ricordo le dipendenze per gtk2-engines le ho settate a mano, copiando quelle del pacchetto originale; me lo ricordo perchè ho tirato giù i santi a causa dell'arduo copia-incolla con mouse mezzo scassato.
    Changelog e Control? Non me ne parlare, il duo malefico :lol:
- id: 14098
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: ''
  date: '2008-05-05 20:43:00 +0200'
  date_gmt: '2008-05-05 20:43:00 +0200'
  content: pacchettizzare debian è difficile. anche rpm (che non conosco) è arcano.
    con arch e slackware è veramente roba da poco con gli script di build.
- id: 14099
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-05-06 11:50:00 +0200'
  date_gmt: '2008-05-06 11:50:00 +0200'
  content: "@LuNa: il KISS si fa sentire parecchio :)"
- id: 14100
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2008-05-06 18:38:00 +0200'
  date_gmt: '2008-05-06 18:38:00 +0200'
  content: "dh_make genera il file control che contiene le variabili\r\nDepends: ${shlibs:Depends},
    ${misc:Depends}\r\nche vengono riempite automaticamente con tutte le dipendenze
    necessarie, basandosi sulle versioni installate sulla macchina.\r\nEsempio il
    mio pacchetto gimp2.5 ha come dipendenze\r\nPackage: gimp2.5\r\nVersion: 2.5.0~Hardy~telperion\r\nArchitecture:
    i386\r\nMaintainer: mauro &lt;mc@unknown&gt;\r\nInstalled-Size: 54172\r\nDepends:
    libaa1 (&gt;= 1.4p5), libart-2.0-2 (&gt;= 2.3.18), libasound2 (&gt;&gt; 1.0.14),
    libatk1.0-0 (&gt;= 1.20.0), libbabl-0.0-0, libc6 (&gt;= 2.4), libcairo2 (&gt;=
    1.6.0), libdbus-1-3 (&gt;= 1.1.1), libdbus-glib-1-2 (&gt;= 0.74), libexif12, libexpat1
    (&gt;= 1.95.8), libfontconfig1 (&gt;= 2.4.0), libfreetype6 (&gt;= 2.3.5), libgegl-0.0-0,
    libglib2.0-0 (&gt;= 2.16.0), libgtk2.0-0 (&gt;= 2.12.0), libhal1 (&gt;= 0.5.8.1),
    libice6 (&gt;= 1:1.0.0), libjpeg62, liblcms1 (&gt;= 1.15-1), libmng1 (&gt;= 1.0.3-1),
    libpango1.0-0 (&gt;= 1.20.1), libpng12-0 (&gt;= 1.2.13-4), libpoppler-glib2 (&gt;=
    0.6), librsvg2-2 (&gt;= 2.18.1), libsm6, libtiff4, libwmf0.2-7 (&gt;= 0.2.8.4),
    libx11-6, libxext6, libxfixes3 (&gt;= 1:4.0.1), libxmu6, libxpm4, libxt6, zlib1g
    (&gt;= 1:1.2.3.3.dfsg-1)\r\n\r\ne io non ne ho messa una (sarebbe un'impresa folle),
    ci pensa debuild a fare il lavoro, e questo è bello.\r\nOvviamente fuziona bene
    solo con tradionali autogen/configure make, non funziona con python e altri sistemi 
    \"esotici\".\r\nL'inferno inizia se devi mettere le mani su debian/rules, dividere
    in diversi pacchetti il risultato, fare script pre/post installazione, un vero
    incubo, lì PKGBUILD è estremamete semplice.\r\nManca un tool che monitorizza una
    normale installazione (magari in fakeroot), calcoli le dipendenze e scriva un
    PKGBUILD \"rozzo\" ricavato dalle operazioni monitorate, magari poi da perfezionare
    a mano, quello si che sarebbe utile.\r\n \r\n \r\n "
- id: 14101
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-05-06 18:45:00 +0200'
  date_gmt: '2008-05-06 18:45:00 +0200'
  content: |-
    @telperion: Beh uno script che mi mette le dipendenze in automatico è il mio sogno, ma non so se sarebbe aderente al KISS; molto probabilmente si, perchè non si lancia in cose troppo acrobatica.
    Comunque le dipendenze per gtk2-engines le ho dovute mettere a mano causa impicci vari col file di control :lol:
    Poi non voglio ancora addentrarmi nel mondo del packaging multiplo, perchè so che lì si hanno degli incubi e visioni paurose.
---
<p>Stamattina, girovagando senza meta per la rete, ho deciso di passare su AUR per vedere se c'era qualche bella novità; ebbene, non appena entrato, ho dato un'occhiata alla lista dei PKGBUILD appena aggiornati e ho visto un nome interessante svettare al primo posto, come aggiornamento più recente.</p>
<blockquote><p>pkgbuilder 1.1-1</p></blockquote>
<p>Mi sono detto "Chissà cosa sarà", ed in effetti, incuriosito, ho letto la descrizione del pacchetto. Sono rimasto leggermente stupito, perchè recitava questo:</p>
<blockquote><p><span class="f3">PKGBUILDER is a simple PKGBUILD creation utility.</span></p></blockquote>
<p>Credo non ci abbia mai pensato nessuno, fondamentalmente perchè Arch è pensata per Power User e per chi ama la semplicità, a fare una cosa del genere, tuttavia io la trovo strabiliante, e anche un ottimo esempio di bash scripting combinato con zenity.</p>
<p>Lo script è molto semplice come struttura: appena runnato, chiede il nome del pacchetto che intendiamo creare, quindi crea la directory dove piazzare il PKGBUILD chiamandola con lo stesso nome del pacchetto, indi ci chiede informazioni sul contributor e sul mantainer; fatto questo comincia a creare il PKGBUILD secondo le variabili che immettiamo ad ogni suo prompt, come ad esempio l'architettura o l'url del codice sorgente. Poi si arriva a questo:</p>
<p style="text-align: center;"><img src="http://img37.picoodle.com/img/img37/4/5/3/f_SchermataPKm_b2ac653.png" alt="" /></p>
<p style="text-align: center;"><em>Figo eh? C'è proprio tutto!</em></p>
<p style="text-align: left;">Quì scegliamo accuratamente gli elementi aggiuntivi da aggiungere al nostro PKGBUILD per maggiore completezza e integrazione con Pacman. Una volta fatte le nostre scelte, dovremo fornire i dati riguardo le variabili che abbiamo scelto di includere.</p>
<p style="text-align: left;">Concluso l'iter "burocratico", ci troveremo a dover provvedere a fornire allo script l'ultima parte del PKGBUILD, cioè le istruzioni di compilazione.</p>
<p style="text-align: center;"><img src="http://img27.picoodle.com/img/img27/4/5/3/f_SchermataPKm_33a53f6.png" alt="" /></p>
<p style="text-align: center;"><em>E quì, che ci metto? :|</em></p>
<p style="text-align: left;">Ovviamente lo script non è in grado di eseguire arcani incantesimi, e per quanto si possa automatizzare la procedura di compilazione, tramite ABS, non è comunque possibile scappare dalla funzione <em>build()</em>.</p>
<p style="text-align: left;">In questo riquadro dunque dovremo fornire le istruzioni per la compilazione dei sorgenti; da questo punto in poi penso che lo script possa migliorare ancora per venire incontro a chi di PKGBUILD non è ancora molto pratico. Bisogna infatti sapere bene che si usa fakeroot, ed io includerei anche qualche riga per consigliare all'utente di leggere le Linee Guida per l'impacchettatore.</p>
<p style="text-align: left;">Beh, che dire, questo tool mi sembra comunque ottimo per chi non ha voglia (come me) di mettersi a buttare giù un PKGBUILD da zero, e non vuole prendere un modello di PKGBUILD come riferimento.</p>
<p style="text-align: left;">"Si ma... dove lo scarico?" direte voi, e giustamente; lo trovate ovviamente su AUR!</p>
<p style="text-align: left;"><a href="http://aur.archlinux.org/packages.php?ID=16616">PKGBUILDER's PKGBUILD</a></p>
