---
layout: post
status: publish
published: true
title: Compilazione del kernel Linux - Debian-way.
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
excerpt: "<strong>Aggiornamento</strong> (9 lug 2008): Aggiunta piccola postilla su
  come fixare gli headers del kernel. Grazie a <a href=\"http://telperion.wordpress.com\">telperion</a>.\r\n\r\n<strong>Aggiornamento</strong>
  (5 apr 2008): Effettivamente, come riportato da scimmia, per chi ricompila è meglio
  aggiungere <em>make oldconfig</em>.\r\n\r\n<strong>Aggiornamento</strong> (4 apr
  2008): Aggiornata la guida con alcuni piccoli consigli di <a href=\"http://opensource2007.netsons.org/2007/\">LuNa</a>\r\n\r\nQuesta
  è una piccola chicca che mancava nel panorama delle varie guide che propongo; non
  mi soffermerò a lungo nel descrivere i comandi perchè si suppone che se una persona
  ricompila il kernel, sia un pochino addentrata nel mondo linux e quindi sappia quello
  che sta facendo.\r\n\r\nInnanzi tutto bisogna scaricare gli ultimi sorgenti del
  kernel Linux che andremo a <strong>compilare</strong>, e siccome io voglio fare
  sempre il super figo di turno che ha l'ultimo kernel disponibile sulla piazza iper
  aggiornato e mega alleggerito, andremo a scegliere l'ultima relase disponibile.
  Nella guida utilizzerò sudo anzichè su, perchè nella mia box utilizzo sudo, che
  ritengo migliore.\r\n\r\nPrima però di scaricare, spostare, linkare, compilare e
  chi più ne ha più ne metta, installiamo le dipendenze necessarie:\r\n\r\n<pre>sudo
  apt-get install build-essential kernel-package libncurses-dev linux-kernel-headers</pre>\r\n\r\nScaricheremo
  così tutto quello che ci serve per la compilazione. Se vogliamo configurare il kernel
  tramite xconfig o gconfig, abbiamo bisogno rispettivamente delle librerie di sviluppo
  QT o GTK, a seconda del caso."
wordpress_id: 164
wordpress_url: http://blaster.netsons.org/?p=164
date: '2008-04-03 18:03:23 +0200'
date_gmt: '2008-04-03 16:03:23 +0200'
categories:
- Linux
- How-To
- Tech
tags:
- Ubuntu
- Debian
- Informatica
- Kernel
comments:
- id: 1819
  author: mazzjoe
  author_email: mazzjoe@gmail.com
  author_url: http://mazzjoe.netsons.org
  date: '2008-04-03 20:12:06 +0200'
  date_gmt: '2008-04-03 18:12:06 +0200'
  content: Ottima guida, salvata su delicious... solo che la paura del kernel panic
    me la fa fare sotto.. vorrei tanto compilare il kernel per il mio portatile, permettendo
    di risparmiare batteria, ma il listone dell'hardware mi fa paura...
- id: 1820
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-04-04 10:45:56 +0200'
  date_gmt: '2008-04-04 08:45:56 +0200'
  content: "<p>@ mazzjoe: Grazie del complimento. Non ti preoccupare per il kernel
    panic, in fondo puoi sempre entrare dal vecchio kernel. ;)</p>"
- id: 1821
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2008-04-04 12:39:44 +0200'
  date_gmt: '2008-04-04 10:39:44 +0200'
  content: "nota: modules_image che ti serve ? se non hai altri moduli al di fuori
    del main line che vuoi compilare (cosa che qui non è spiegata) non serve.\r\nnota2:
    se non ti serve tutto il kernel scompattato (un casino di files e spazio su disco)
    appendi un kernel_headers e puoi anche portarti via i sorgenti del kernel, per
    compilare moduli bastano e avanzano gli headers.\r\n\r\n"
- id: 1822
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-04-04 12:54:20 +0200'
  date_gmt: '2008-04-04 10:54:20 +0200'
  content: "<p>@ LuNa: Grazie delle preziose precisazioni. In effetti quì come compilare
    i moduli esterni non c'entra molto ;)</p>"
- id: 1823
  author: davide (scimmia)
  author_email: lists4davide@gmail.com
  author_url: ''
  date: '2008-04-04 23:48:31 +0200'
  date_gmt: '2008-04-04 21:48:31 +0200'
  content: "\\begin{itemize}\r\n\\item su debian, se l'utente è nel gruppo src puoi
    fare tutto senza usare sudo (a parte l'installazione) e a me sembra cosa buona
    e giusta,\r\n\\item i sorgenti sono pacchettizati anche su debian, quindi si possono
    apt-gettare senza problemi, e averli patchati dai debian mantainer,\r\n\\item
    può essere utile partire dal config del kernel che si sta usando (che funziona
    sicuro) dando make oldconfig oppure da un config salvato all'uopo da una nostra
    altra compilazione precedente; lo si salva con il nome .config nella dir dei sorgenti
    e poi si da make menuconfig e si parte con l'ulteriore configurazione (io prendo
    sempre il mio `.config' precedente e lo importo, dando poi make-kpkg blablabla
    è lo script stesso a proporre sotto forma di eleganti domande la configurazione
    della sola parte nuova),\r\n\\item varie ed eventuali.\r\n\\end{itemize}"
- id: 1824
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-04-05 09:10:08 +0200'
  date_gmt: '2008-04-05 07:10:08 +0200'
  content: "<p>@ scimmia:</p>\r\n<p>1) Mettiamo che l'utente non sia nel gruppo src,
    si deve usare sudo. Non mi piace addare utenti a gruppi sulla mia macchina ;)</p>\r\n<p>2)
    Io penso che il kernel vanilla faccia più figo 8)</p>\r\n<p>3) Questo è vero,
    ma spesso la vecchia configurazione corrisponde ad una scrematura quasi nulla
    :D</p>\r\n<p>\r\nGrazie del commento :)</p>"
- id: 1825
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2008-04-05 11:06:01 +0200'
  date_gmt: '2008-04-05 09:06:01 +0200'
  content: "non l'avevo notato ....\r\nmake oldconfig è indispensabile, o che fai
    tutte le volte ti risetti da zero tutto ? mi sembra da pazzi.\r\ndi buon occhio
    scimmia ;)\r\n"
- id: 1826
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-04-05 11:44:49 +0200'
  date_gmt: '2008-04-05 09:44:49 +0200'
  content: "<p>Aggiunte alcune precisazioni fatte da scimmia.</p>"
- id: 1827
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2008-04-05 13:35:39 +0200'
  date_gmt: '2008-04-05 11:35:39 +0200'
  content: uhm, non sono così convinto. make oldconfig si che riprende le impostazioni
    che usi ora, nel caso di un vanilla nuovo appena estratto dal tarball, io non
    lo ometterei a maggior ragione. Comunque, mi documento :)
- id: 1828
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-04-05 13:56:35 +0200'
  date_gmt: '2008-04-05 11:56:35 +0200'
  content: "<p>Lo ho infatti aggiunto spiegando quello che fa. Chi lo vuole usare
    lo usi ;)</p>"
- id: 1837
  author: imu
  author_email: osrevolution@netsons.org
  author_url: http://www.osrevolution.netsons.org
  date: '2008-04-11 13:43:45 +0200'
  date_gmt: '2008-04-11 11:43:45 +0200'
  content: "$ make oldconfig ...\r\nsiete troppo attaccati al passato. Liberate la
    mente dal 2.6X è stata introdotta la feature di prendere le impostazioni del kernel
    corrente da <strong>\"/boot/config-$(uname -r)\"</strong>. Diciamo che serve o
    dovrebbe servire nel caso abbiate bisogno di usare o provare settaggi differenti
    dal corrente kernel, anche se io userei direttamente la funziona <strong>\"Load
    an Alternate Configuration File\"</strong>. Molto meno impegnativa e più intuitiva."
- id: 1838
  author: Paso
  author_email: dpasini@gmail.com
  author_url: http://paso.wordpress.com/
  date: '2008-04-11 18:22:16 +0200'
  date_gmt: '2008-04-11 16:22:16 +0200'
  content: "Ho una domanda che non mi è chiara, non mi intendo molto di kernel...\r\nMettiamo
    che io seguo la tua guida, lo compilo e lo installo. Ma se per caso sbaglio qualche
    parametro durante la configurazione al peggio cosa mi può succedere? se ho capito
    bene, al massimo non riesco ad avviare linux con il kernel appena compilato, quindi
    mi basta riavviare ed usare quello precedentemente installato e sono a posto?
    giusto?\r\nSai, nel caso mi venisse in mente di compilarlo non vorrei mai fare
    danni :)"
- id: 1839
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-04-11 19:44:27 +0200'
  date_gmt: '2008-04-11 17:44:27 +0200'
  content: "<p>@ Paso: È esattamente come hai detto tu. Hai sempre la possibilità
    di bootare dal vecchio kernel per ricompilare ;)</p>"
- id: 1866
  author: pol
  author_email: me@me.com
  author_url: ''
  date: '2008-04-20 14:15:28 +0200'
  date_gmt: '2008-04-20 12:15:28 +0200'
  content: "ascolta, ottima guida ma....quando avvio il kernel:\r\n \r\n1) l'audio
    non va, mi dice impossibile trovare plugin gstreamer ecc ecc\r\n2) non mi trova
    la scheda video nvidai 7800 (non c'è in DRIVER HARDWARE)"
- id: 1867
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-04-20 14:25:28 +0200'
  date_gmt: '2008-04-20 12:25:28 +0200'
  content: "<p>Il problema è tuo, e non del kernel. Sia per l'audio che per il video,
    i driver che ti servono sono specifici per il kernel e vengono distribuiti in
    moduli a parte; nella guida di imu c'è scritto come trattare per i driver nvidia.
    Per l'audio penso ti basti ricompilare alsa con l'opzione della tua scheda audio.
    Se passi nel canale saremo felici di darti una mano.</p>\r\n<p>;)</p>"
- id: 1869
  author: pol
  author_email: me@me.com
  author_url: ''
  date: '2008-04-20 14:28:24 +0200'
  date_gmt: '2008-04-20 12:28:24 +0200'
  content: "canale?!?!?! ehm cioè?\r\n \r\nse vuoi ho msn........"
- id: 1870
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-04-20 15:21:56 +0200'
  date_gmt: '2008-04-20 13:21:56 +0200'
  content: "<p>Ok, aggiungimi in msn, il contatto lo trovi nell'about.</p>"
- id: 1871
  author: pol
  author_email: me@me.com
  author_url: ''
  date: '2008-04-20 15:27:02 +0200'
  date_gmt: '2008-04-20 13:27:02 +0200'
  content: "ok!\r\nora sto ricompilando...ho aggiunto nei modules alsa e nvidia :D\r\n \r\nsperem!\r\n \r\nstudio
    e poi ti aggiungo!!\r\n \r\nio sono garrett ECC ECC in msn ;)"
- id: 1881
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2008-04-24 20:06:40 +0200'
  date_gmt: '2008-04-24 18:06:40 +0200'
  content: "Attenzione che come ripetutamente segnalato nel mio bog dal kernel-2.6.24
    <code>\r\nmake-kpkg\r\nproduce pacchetti kernel_headers non validi, che si installano
    non danno errori, ma non vi consentono di compilare nulla.</code>\r\n<code>Bisogna
    pertanto lasciare in /usr/src tutti i sorgenti del kernel compilati cosi come
    sono.</code>\r\n<code>\r\n</code>"
- id: 2035
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-05-25 12:14:23 +0200'
  date_gmt: '2008-05-25 10:14:23 +0200'
  content: "<p>@telperion: Speriamo si risolva presto.</p>"
- id: 3107
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2008-07-09 17:43:27 +0200'
  date_gmt: '2008-07-09 15:43:27 +0200'
  content: "come fixare gli headers (sia per i386 che A64)\r\nhttp://telperion.wordpress.com/2008/05/11/pacchetti-deb-linux-headers-custom-come-fixarli/"
- id: 3109
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2008-07-09 18:23:38 +0200'
  date_gmt: '2008-07-09 16:23:38 +0200'
  content: "@telperion: aggiunto link alla guida. Grazie."
- id: 5728
  author: LuCa
  author_email: piazzaluca@gmail.com
  author_url: ''
  date: '2008-11-10 15:27:58 +0100'
  date_gmt: '2008-11-10 13:27:58 +0100'
  content: "Saluti a tutti.\r\nChiedo a voi che la sapete lunga... esiste da qualche
    parte una documentazione ufficiale per la configurazione del kernel?\r\nOppure
    bisogna accontentarsi delle poche righe di spiegazione disponibili durante la
    configurazione?\r\n\r\nPensavo di trovare quello che cercavo in Kernel.org o siti
    simili, ma niente...\r\n:(\r\n\r\nLuCa"
- id: 5739
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org/
  date: '2008-11-12 18:36:54 +0100'
  date_gmt: '2008-11-12 16:36:54 +0100'
  content: "@LuCa: Non ti do nulla di certo, ma dato che sono solito spulciarmi gli
    stringatissimi changelog forniti da kernel.org, non dovrebbe esistere una documentazione
    ufficiale sui moduli; magari sul wiki di kernelnewbies.org c'è quello che ti serve."
- id: 6021
  author: Nicola
  author_email: notsecurity@gmail.com
  author_url: http://nicolagreco.com
  date: '2009-01-13 13:43:34 +0100'
  date_gmt: '2009-01-13 12:43:34 +0100'
  content: Ti penso ogni volta che compilo :D
- id: 6022
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://www.dottorblaster.it
  date: '2009-01-13 14:21:49 +0100'
  date_gmt: '2009-01-13 13:21:49 +0100'
  content: "@Nicola: Beh, grazie :D"
- id: 10951
  author: Pietropaolo
  author_email: pietropaolo@gmeil.it
  author_url: ''
  date: '2010-06-13 14:08:10 +0200'
  date_gmt: '2010-06-13 19:08:10 +0200'
  content: Ma questo articolo fa cagare! Sei solo un pezzo de merda, blaster. Smettila
    di copiare cazzate e spacciarle per tue. Soprattutto perche, voi de linox siete
    solo dei pezzenti che non se possono permette&#39; de compra&#39; i computer decenti...risparmiate
    un po&#39; de soldi e andateve a fa un sistema vista o windows sette invece de
    spara&#39; cazzate che confondono la gente....che poi e&#39; pure privo de logica,
    come fa una cosa gratuita, fatta senza guadagni ad essere meglio di una cosa seria,
    fatta da una societa&#39; vera?<br><br>Fottetevi tutti. Windows Rulez. Owned!
- id: 14046
  author: mazzjoe
  author_email: mazzjoe@gmail.com
  author_url: http://mazzjoe.netsons.org
  date: '2008-04-03 18:12:00 +0200'
  date_gmt: '2008-04-03 18:12:00 +0200'
  content: Ottima guida, salvata su delicious... solo che la paura del kernel panic
    me la fa fare sotto.. vorrei tanto compilare il kernel per il mio portatile, permettendo
    di risparmiare batteria, ma il listone dell'hardware mi fa paura...
- id: 14047
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-04-04 08:45:00 +0200'
  date_gmt: '2008-04-04 08:45:00 +0200'
  content: "@ mazzjoe: Grazie del complimento. Non ti preoccupare per il kernel panic,
    in fondo puoi sempre entrare dal vecchio kernel. ;)"
- id: 14048
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2008-04-04 10:39:00 +0200'
  date_gmt: '2008-04-04 10:39:00 +0200'
  content: "nota: modules_image che ti serve ? se non hai altri moduli al di fuori
    del main line che vuoi compilare (cosa che qui non è spiegata) non serve.\r\nnota2:
    se non ti serve tutto il kernel scompattato (un casino di files e spazio su disco)
    appendi un kernel_headers e puoi anche portarti via i sorgenti del kernel, per
    compilare moduli bastano e avanzano gli headers."
- id: 14049
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-04-04 10:54:00 +0200'
  date_gmt: '2008-04-04 10:54:00 +0200'
  content: "@ LuNa: Grazie delle preziose precisazioni. In effetti quì come compilare
    i moduli esterni non c'entra molto ;)"
- id: 14050
  author: ''
  author_email: lists4davide@gmail.com
  author_url: ''
  date: '2008-04-04 21:48:00 +0200'
  date_gmt: '2008-04-04 21:48:00 +0200'
  content: "begin{itemize}\r\nitem su debian, se l'utente è nel gruppo src puoi fare
    tutto senza usare sudo (a parte l'installazione) e a me sembra cosa buona e giusta,\r\nitem
    i sorgenti sono pacchettizati anche su debian, quindi si possono apt-gettare senza
    problemi, e averli patchati dai debian mantainer,\r\nitem può essere utile partire
    dal config del kernel che si sta usando (che funziona sicuro) dando make oldconfig
    oppure da un config salvato all'uopo da una nostra altra compilazione precedente;
    lo si salva con il nome .config nella dir dei sorgenti e poi si da make menuconfig
    e si parte con l'ulteriore configurazione (io prendo sempre il mio `.config' precedente
    e lo importo, dando poi make-kpkg blablabla è lo script stesso a proporre sotto
    forma di eleganti domande la configurazione della sola parte nuova),\r\nitem varie
    ed eventuali.\r\nend{itemize}"
- id: 14051
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-04-05 07:10:00 +0200'
  date_gmt: '2008-04-05 07:10:00 +0200'
  content: "@ scimmia:\n1) Mettiamo che l'utente non sia nel gruppo src, si deve usare
    sudo. Non mi piace addare utenti a gruppi sulla mia macchina ;)\n2) Io penso che
    il kernel vanilla faccia più figo 8)\n3) Questo è vero, ma spesso la vecchia configurazione
    corrisponde ad una scrematura quasi nulla :D\n\r\nGrazie del commento :)"
- id: 14052
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2008-04-05 09:06:00 +0200'
  date_gmt: '2008-04-05 09:06:00 +0200'
  content: "non l'avevo notato ....\r\nmake oldconfig è indispensabile, o che fai
    tutte le volte ti risetti da zero tutto ? mi sembra da pazzi.\r\ndi buon occhio
    scimmia ;)"
- id: 14053
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-04-05 09:44:00 +0200'
  date_gmt: '2008-04-05 09:44:00 +0200'
  content: Aggiunte alcune precisazioni fatte da scimmia.
- id: 14054
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2008-04-05 11:35:00 +0200'
  date_gmt: '2008-04-05 11:35:00 +0200'
  content: uhm, non sono così convinto. make oldconfig si che riprende le impostazioni
    che usi ora, nel caso di un vanilla nuovo appena estratto dal tarball, io non
    lo ometterei a maggior ragione. Comunque, mi documento :)
- id: 14055
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-04-05 11:56:00 +0200'
  date_gmt: '2008-04-05 11:56:00 +0200'
  content: Lo ho infatti aggiunto spiegando quello che fa. Chi lo vuole usare lo usi
    ;)
- id: 14056
  author: imu
  author_email: osrevolution@netsons.org
  author_url: http://www.osrevolution.netsons.org
  date: '2008-04-11 11:43:00 +0200'
  date_gmt: '2008-04-11 11:43:00 +0200'
  content: "$ make oldconfig ...\r\nsiete troppo attaccati al passato. Liberate la
    mente dal 2.6X è stata introdotta la feature di prendere le impostazioni del kernel
    corrente da <strong>\"/boot/config-$(uname -r)\"</strong>. Diciamo che serve o
    dovrebbe servire nel caso abbiate bisogno di usare o provare settaggi differenti
    dal corrente kernel, anche se io userei direttamente la funziona <strong>\"Load
    an Alternate Configuration File\"</strong>. Molto meno impegnativa e più intuitiva."
- id: 14057
  author: Paso
  author_email: dpasini@gmail.com
  author_url: http://paso.wordpress.com/
  date: '2008-04-11 16:22:00 +0200'
  date_gmt: '2008-04-11 16:22:00 +0200'
  content: "Ho una domanda che non mi è chiara, non mi intendo molto di kernel...\r\nMettiamo
    che io seguo la tua guida, lo compilo e lo installo. Ma se per caso sbaglio qualche
    parametro durante la configurazione al peggio cosa mi può succedere? se ho capito
    bene, al massimo non riesco ad avviare linux con il kernel appena compilato, quindi
    mi basta riavviare ed usare quello precedentemente installato e sono a posto?
    giusto?\r\nSai, nel caso mi venisse in mente di compilarlo non vorrei mai fare
    danni :)"
- id: 14058
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-04-11 17:44:00 +0200'
  date_gmt: '2008-04-11 17:44:00 +0200'
  content: "@ Paso: È esattamente come hai detto tu. Hai sempre la possibilità di
    bootare dal vecchio kernel per ricompilare ;)"
- id: 14059
  author: pol
  author_email: me@me.com
  author_url: ''
  date: '2008-04-20 12:15:00 +0200'
  date_gmt: '2008-04-20 12:15:00 +0200'
  content: "ascolta, ottima guida ma....quando avvio il kernel:\r\n \r\n1) l'audio
    non va, mi dice impossibile trovare plugin gstreamer ecc ecc\r\n2) non mi trova
    la scheda video nvidai 7800 (non c'è in DRIVER HARDWARE)"
- id: 14060
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-04-20 12:25:00 +0200'
  date_gmt: '2008-04-20 12:25:00 +0200'
  content: |-
    Il problema è tuo, e non del kernel. Sia per l'audio che per il video, i driver che ti servono sono specifici per il kernel e vengono distribuiti in moduli a parte; nella guida di imu c'è scritto come trattare per i driver nvidia. Per l'audio penso ti basti ricompilare alsa con l'opzione della tua scheda audio. Se passi nel canale saremo felici di darti una mano.
    ;)
- id: 14061
  author: pol
  author_email: me@me.com
  author_url: ''
  date: '2008-04-20 12:28:00 +0200'
  date_gmt: '2008-04-20 12:28:00 +0200'
  content: "canale?!?!?! ehm cioè?\r\n \r\nse vuoi ho msn........"
- id: 14062
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-04-20 13:21:00 +0200'
  date_gmt: '2008-04-20 13:21:00 +0200'
  content: Ok, aggiungimi in msn, il contatto lo trovi nell'about.
- id: 14063
  author: pol
  author_email: me@me.com
  author_url: ''
  date: '2008-04-20 13:27:00 +0200'
  date_gmt: '2008-04-20 13:27:00 +0200'
  content: "ok!\r\nora sto ricompilando...ho aggiunto nei modules alsa e nvidia :D\r\n \r\nsperem!\r\n \r\nstudio
    e poi ti aggiungo!!\r\n \r\nio sono garrett ECC ECC in msn ;)"
- id: 14064
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2008-04-24 18:06:00 +0200'
  date_gmt: '2008-04-24 18:06:00 +0200'
  content: "Attenzione che come ripetutamente segnalato nel mio bog dal kernel-2.6.24
    <code>\r\nmake-kpkg\r\nproduce pacchetti kernel_headers non validi, che si installano
    non danno errori, ma non vi consentono di compilare nulla.</code>\n<code>Bisogna
    pertanto lasciare in /usr/src tutti i sorgenti del kernel compilati cosi come
    sono.</code>\n<code>\n</code>"
- id: 14065
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-05-25 10:14:00 +0200'
  date_gmt: '2008-05-25 10:14:00 +0200'
  content: "@telperion: Speriamo si risolva presto."
- id: 14066
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2008-07-09 15:43:00 +0200'
  date_gmt: '2008-07-09 15:43:00 +0200'
  content: "come fixare gli headers (sia per i386 che A64)\r\nhttp://telperion.wordpress.com/2008/05/11/pacchetti-deb-linux-headers-custom-come-fixarli/"
- id: 14067
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-07-09 16:23:00 +0200'
  date_gmt: '2008-07-09 16:23:00 +0200'
  content: "@telperion: aggiunto link alla guida. Grazie."
- id: 14068
  author: LuCa
  author_email: piazzaluca@gmail.com
  author_url: ''
  date: '2008-11-10 13:27:00 +0100'
  date_gmt: '2008-11-10 13:27:00 +0100'
  content: "Saluti a tutti.\r\nChiedo a voi che la sapete lunga... esiste da qualche
    parte una documentazione ufficiale per la configurazione del kernel?\r\nOppure
    bisogna accontentarsi delle poche righe di spiegazione disponibili durante la
    configurazione?\r\n\r\nPensavo di trovare quello che cercavo in Kernel.org o siti
    simili, ma niente...\r\n:(\r\n\r\nLuCa"
- id: 14069
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2008-11-12 16:36:00 +0100'
  date_gmt: '2008-11-12 16:36:00 +0100'
  content: "@LuCa: Non ti do nulla di certo, ma dato che sono solito spulciarmi gli
    stringatissimi changelog forniti da kernel.org, non dovrebbe esistere una documentazione
    ufficiale sui moduli; magari sul wiki di kernelnewbies.org c'è quello che ti serve."
- id: 14070
  author: Nicola
  author_email: notsecurity@gmail.com
  author_url: http://nicolagreco.com
  date: '2009-01-13 12:43:00 +0100'
  date_gmt: '2009-01-13 12:43:00 +0100'
  content: Ti penso ogni volta che compilo :D
- id: 14071
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-01-13 13:21:00 +0100'
  date_gmt: '2009-01-13 13:21:00 +0100'
  content: "@Nicola: Beh, grazie :D"
---
<p><strong>Aggiornamento</strong> (9 lug 2008): Aggiunta piccola postilla su come fixare gli headers del kernel. Grazie a <a href="http://telperion.wordpress.com">telperion</a>.</p>
<p><strong>Aggiornamento</strong> (5 apr 2008): Effettivamente, come riportato da scimmia, per chi ricompila è meglio aggiungere <em>make oldconfig</em>.</p>
<p><strong>Aggiornamento</strong> (4 apr 2008): Aggiornata la guida con alcuni piccoli consigli di <a href="http://opensource2007.netsons.org/2007/">LuNa</a></p>
<p>Questa è una piccola chicca che mancava nel panorama delle varie guide che propongo; non mi soffermerò a lungo nel descrivere i comandi perchè si suppone che se una persona ricompila il kernel, sia un pochino addentrata nel mondo linux e quindi sappia quello che sta facendo.</p>
<p>Innanzi tutto bisogna scaricare gli ultimi sorgenti del kernel Linux che andremo a <strong>compilare</strong>, e siccome io voglio fare sempre il super figo di turno che ha l'ultimo kernel disponibile sulla piazza iper aggiornato e mega alleggerito, andremo a scegliere l'ultima relase disponibile. Nella guida utilizzerò sudo anzichè su, perchè nella mia box utilizzo sudo, che ritengo migliore.</p>
<p>Prima però di scaricare, spostare, linkare, compilare e chi più ne ha più ne metta, installiamo le dipendenze necessarie:</p>
<pre>sudo apt-get install build-essential kernel-package libncurses-dev linux-kernel-headers</pre>
<p>Scaricheremo così tutto quello che ci serve per la compilazione. Se vogliamo configurare il kernel tramite xconfig o gconfig, abbiamo bisogno rispettivamente delle librerie di sviluppo QT o GTK, a seconda del caso.<a id="more"></a><a id="more-164"></a></p>
<p>A questo punto andiamo a prelevare il kernel Linux dal sito www.kernel.org; nella prima pagina ci viene chiarito tutto il possibile sulle versioni, quindi scelgiamo l'ultima stable (visto che non siamo suicidi, e non vogliamo <strong>compilare Linux</strong> instabile), e copiatone l'indirizzo dalla "F" che vi si trova accanto, spostiamoci in /usr/src e scarichiamo lì i nostri sorgenti:</p>
<pre>cd /usr/src</pre>
<pre>sudo wget http://www.kernel.org/pub/linux/kernel/v2.$numero/linux-$versione_kernel.tar.bz2</pre>
<p>Comparirà quindi la famigerata barra d'avanzamento di wget. Una volta finito il download, diamo nel terminale un bel</p>
<pre>sudo tar jxvf linux-$versione_kernel.tar.bz2</pre>
<p>Ricordiamo che siamo fuori dalla nostra home, quindi mai omettere sudo.</p>
<p>Adesso, per semplicità, linkiamo la directory appena creata ad una immaginaria che riporta dentro quest'ultima, di nome "linux". In questo modo il percorso dei sorgenti sarà <strong>/usr/src/linux-$versione_kernel</strong>, anche abbreviabile in /usr/src/linux.</p>
<pre>sudo ln -s linux-2.6.19.1 linux</pre>
<p>Spostiamoci dunque nella directory per andare poi a compilare.</p>
<pre>cd linux</pre>
<p>Adesso puliamo i sorgenti da residui di altre compilazioni. Se è la prima volta che compiliamo possiamo anche omettere questo passo:</p>
<pre>sudo make-kpkg clean</pre>
<p>Una volta completata la pulitura del codice, andiamo dunque a configurare tutto il necessario per far funzionare il nostro kernel in modo leggero e scattante.</p>
<pre>sudo make oldconfig</pre>
<p>Comando <strong>da non dare necessariamente</strong>. Personalmente, credo che nella prima compilazione non serva poi a molto; ma andiamo prima a spiegare cosa effettivamente fa: make oldconfig configura il kernel in base ai parametri di quello che si sta usando. È molto utile in caso di molte compilazioni, infatti mettiamo che io dopo questo kernel debba ricompilare per fare il figo con un'eventuale ultima versione ancora più recente. Dando make oldconfig potrò importare la mia vecchia configurazione evitandomi la rogna di disattivare moduli già eliminati in precedenza. Io credo che questo aiuti anche un processo di scrematura crescente, in quanto vedo che ad ogni ricompilazione cresce il livello di consapevolezza di quello che serve o non serve. Con make oldconfig posso far ripartire la scrematura dal punto in cui l'avevo interrotta, con la sola aggiunta delle novità, che potrò disattivare sotto forma di domanda in seguito. Per chi invece compila per la prima volta, l'oldconfig non credo serva a molto; in fondo i kernel precompilati delle varie distribuzioni cercano di adattarsi a qualsiasi utilizzo e macchina, quindi le loro configurazioni sono molto standardizzate e non penso che vi sia stato tolto qualcosa. Anzi, in questi casi solitamente si aggiunge roba esterna.</p>
<pre>sudo make menuconfig</pre>
<p>Questo comando presenterà un'interfaccia ncurses, ma personalmente preferisco qualcosa di grafico che rende di più l'idea di quello che debbo settare, quello che manca, quello che ho già fatto... quindi utilizzo xconfig. Gconfig credo sia molto immaturo rispetto alla sua controparte QT, quindi consiglio xconfig anche agli gnomer come me. <strong>Da notare che entrambe le interfacce grafiche hanno bisogno delle rispettive librerie di sviluppo.</strong></p>
<p>Per <strong>configurare il kernel Linux</strong> non è necessario avere nessun requisito particolare; bisogna solo conoscere molto bene il proprio hardware, questo se si intende fare una scrematura consistente dei moduli disponibile, e snellire in modo ingente il kernel; se non si possiede un'estrema conoscenza dell'hardware (io stesso non sono un grande conoscitore del mio computer parte per parte), si può comunque tantare una densa scrematura, anche se non andando in profondità, poichè si rischia di eliminare qualche pezzo di kernel fondamentale. Il risultato, eliminando parti vitali del kernel, sarà l'immancabile <strong>Kernel Panic</strong>.</p>
<p>Il secondo requisito è la pazienza di Giobbe, per due motivi: per quanto riguarda il primo, nel mio caso il kernel ci mette un'ora buona a compilare tutto. Se si sbaglia e si va in kernel panic, si deve ricompilare tutto da capo, e quindi significa che abbiamo buttato un'ora per un kernel che non funziona. Il secondo motivo lo si capisce subito guardando la lista dei moduli: in questo caso, per una scrematura di buon livello, si impiega una mezz'ora. La lista è veramente gigante ed include l'ultimo hardware, comanche dei driver vecchi di dieci anni come quelli per le EEPROM.</p>
<p>Abbiamo configurato tutto? Ma proprio tutto, non omettendo nulla? Ok, è ora quindi di passare all'effetiva compilazione alla cui conclusione vi è l'automatico impacchettamento del kernel, in un pacchetto installabile comodamente con dpkg. Facile eh? :D</p>
<p>Puliamo ancora.</p>
<pre>sudo make-kpkg clean</pre>
<p>A questo punto vi è il comando cruciale, nel quale io, andando a memoria, dimentico sempre qualcosa: questo infatti compila e impacchetta il kernel secondo le opzioni che gli vengono date.</p>
<pre>sudo make-kpkg --revision 1.bt --append-to-version -bt --initrd kernel_image kernel_headers</pre>
<p>Soffermiamoci dunque a vedere che significa quello che abbiamo appena digitato.</p>
<p><em>--revision 1.bt</em> assegna un numero di revisione al mio kernel impacchettato, in modo che io abbia tutte le mie versioni belle numerate e catalogate, secondo ordine crescente. Può essere tranquillamente cambiato.</p>
<p><em>--append-to-version -bt</em> cambierà nome al kernel, infatti dopo la versione ci sarà il mio suffisso -bt. Esempio: 2.6.22-bt. Anche questo può essere cambiato, mettendo qualunque cosa dopo il trattino.</p>
<p><em>--initrd</em> dice a make-kpkg di creare per il kernel compilato anche una immagine <em>initial ram disk</em>. Questa è fondamentale per chi, come me, dimentica di settare qualcosa come statico invece che come modulare. Senza initrd possono capitare due cose: avete settato quello che c'era da settare come statico, e va tutto liscio, con anche due secondi in meno al boot, o vi viene restituito un Panic grosso come una casa. Ciò è dovuto al fatto della mancata impostazione come statici dei moduli che provvedono al controllo del disco fisso. Se siete guru della compilazione kernel, omettete l'initrd... ma io non posso farne a meno: senza initrd il mio PC non parte :D</p>
<p><em>kernel_image</em> e <em>kernel_headers</em> compilano e pacchettizzano rispettivamente kernel e headers del kernel. Non c'è molto da descrivere, è così e basta :)</p>
<p>Se volete, potete anche inserire un <em>modules_image</em>, che compilerà eventuali moduli inseriti a parte e non in mainline.</p>
<p>Una volta lanciato il comando, liberate la ram e attendete guardando una puntata de "La Signora in Giallo" o leggendo un fumetto. Ogni tanto guardate cosa sta facendo il terminale, tanto per essere sicuri che non dia qualche tipo di errore; circa un'ora dopo tornate a vedere come siete messi. Se ha finito di fare le sue cose, date questi due comandi:</p>
<pre>cd ..
sudo dpkg -i *.deb</pre>
<p>Il primo ci sposterà in /usr/src, perchè come sanno bene i pacchettizzatori, i pacchetti deb vengono creati nel livello superiore. Non chiedetemi perchè, visto che non lo so.</p>
<p>Il secondo comando installerà il nostro bel kernel compilato di fresco, e aggiornerà GRUB permettendoci così al riavvio di scegliere il nostro kernel con il nostro suffisso customizzato. :D</p>
<p><a href="http://telperion.wordpress.com">Telperion</a> mi ha inoltre segnalato che i kernel_headers prodotti da kernel package ultimamente non vanno. Per fixare possiamo benissimo usare <a href="http://telperion.wordpress.com/2008/05/11/pacchetti-deb-linux-headers-custom-come-fixarli/">la sua guida</a>.</p>
<p>Se fila tutto liscio fino a GDM (o KDM), possiamo dire di aver compilato un kernel funzionante! Auguri a chi compila per la prima volta!</p>
<p>----------------------------------------------------------</p>
<p>P.S.: I comandi sono presi e liberamente interpretati <a href="http://www.osrevolution.netsons.org/index.php/2006/12/13/kernel-debian-way-revision-2imu/">dalla guida</a> del bravo <a href="http://www.osrevolution.netsons.org/">imu</a>, la quale però mancava dell'initrd e di alcune chicche come il sudo :)</p>
