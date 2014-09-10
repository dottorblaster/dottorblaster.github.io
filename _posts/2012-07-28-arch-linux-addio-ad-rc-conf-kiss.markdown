---
layout: post
status: publish
published: true
title: 'Arch Linux: addio ad rc.conf. KISS?'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1429
wordpress_url: http://dottorblaster.it/?p=1429
date: '2012-07-28 16:42:18 +0200'
date_gmt: '2012-07-28 15:42:18 +0200'
categories:
- Linux
tags:
- Arch
- Arch Linux
- linux
- rc.conf
- KISS
comments:
- id: 17678
  author: bashlnx
  author_email: bash.lnx@gmail.com
  author_url: ''
  date: '2012-07-28 16:52:00 +0200'
  date_gmt: '2012-07-28 15:52:00 +0200'
  content: |-
    * rc.conf non e` stato droppato *
    Solo che ora le impostazioni nei file vconsole.conf, hostname, locale.conf e compagnia hanno la precedenza. Mi pare una gran bella differenza ;)

    Io personalmente ho rimosso totalmente initscripts e ritengo rc.conf non KISS. Prima d'ora non c'eravamo mai posti il problema KISS/non KISS poiche` initscripts era l'unico a leggere quelle impostazioni settate in rc.conf, ma ora che c'e` anche systemd ritengo giusta la scelta di "allinearsi" da parte di Tom.
- id: 17679
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-07-28 16:57:00 +0200'
  date_gmt: '2012-07-28 15:57:00 +0200'
  content: |-
    Ho frainteso, qualcuno in giro ha detto che rc.conf non sarebbe più stato valido. Classico gioco del telefono :)

    Comunque, il punto del mio post rimane, e per me tutti quei file in giro non sono una soluzione molto KISS. Se hai argomentazioni che dimostrano il contrario, prego ;)
- id: 17680
  author: bashlnx
  author_email: bash.lnx@gmail.com
  author_url: ''
  date: '2012-07-28 17:10:00 +0200'
  date_gmt: '2012-07-28 16:10:00 +0200'
  content: |-
    Forse l'utente non nota la differenza, ma io vedo la filosofia KISS dal punto di vista dello sviluppatore.

    Perche` riscrivere un parser dei moduli, della configurazione delle schede di rete, del tipo di font, del fuso orario, ecc...quando tutto questo e` stato gia` fatto da qualcun altro?
    Su Arch cerchiamo sempre di "inoltrare" ogni cosa al suo sviluppatore originario; vedi i pacchetti, c'e` un bug? noi non pacchamo niente, quindi riporta il bug al suo sviluppatore, non a noi. Stesso dicasi per queste opzioni, gli utenti hanno iniziato a richiedere sempre piu` feature, sempre piu` liberta` nel gestire quelle opzioni (com'e` giusto che sia e come si doveva immaginare) ed ecco il risultato: un codice troppo complesso da mantenere e da gestire. E alla fine ha vinto il KISS :)
- id: 17682
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-07-28 17:44:00 +0200'
  date_gmt: '2012-07-28 16:44:00 +0200'
  content: Ma si infatti mi va anche bene che lo sviluppo sia decentralizzato e con
    sede upstream, ti rende dal punto di vista del distributore il lavoro molto più
    facile, ed è molto più KISS. Io però credo che rc.conf sia una gran figata, e
    che systemd da questo punto di vista sia più teso verso Fedora che certo non è
    la regina del KISS :D
- id: 17683
  author: Cippaciong
  author_email: lacapannadelloziotom@gmail.com
  author_url: ''
  date: '2012-07-28 18:46:00 +0200'
  date_gmt: '2012-07-28 17:46:00 +0200'
  content: |-
    Al momento non ho tempo per leggere bene l'intero articolo ma lo farò appena possibile.
    Ci tenevo però a segnalare la discussione che, senza sapere nulla dei retroscena nè di questo articolo, ho aperto oggi nel forum di Arch. Mi fa piacere avere la conferma che l'argomento non sta a cuore soltanto a me.
    http://www.archlinux.it/forum/viewtopic.php?f=17&amp;t=15106
    Ogni intervento è gradito :)
- id: 17684
  author: Stefanauss
  author_email: stefanauss@gmail.com
  author_url: ''
  date: '2012-07-28 19:23:00 +0200'
  date_gmt: '2012-07-28 18:23:00 +0200'
  content: A quale "manuale degli scriptini" alludi? Link? ^_^
- id: 17685
  author: Simone
  author_email: ''
  author_url: http://twitter.com/obo
  date: '2012-07-28 22:39:00 +0200'
  date_gmt: '2012-07-28 21:39:00 +0200'
  content: "ti dirò, prima reazione mia: che palle mi tocca \"studiare\" di nuovo.
    \nEcco forse il problema di quelli che si lamentano di più sta proprio qui, l'abitudine
    e la non-fatica.\nAbbiamo deciso di usare un s.o. rolling, in forte evoluzione
    e che può cambiare da un giorno all'altro così come cambiano e nascono nuove tecnologie;
    credo che nonostante tutto la possibilità di non restare fermi e fossilizzati,
    ma continuare ad imparare cose nuove (perché su arch non fai avanti-avanti-fine,
    ma ti documenti e decidi con la tua testa che fare), sia il bello di essere informatici
    (e un po' nerd).\nPer chi vuole la comodità ci sono mille altre distro ;)"
- id: 17688
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-07-29 11:46:00 +0200'
  date_gmt: '2012-07-29 10:46:00 +0200'
  content: Beh essenzialmente si, non sei l'unico che si fa qualche domanda su quanto
    sia effettivamente KISS dai vari punti di vista questa adozione ;)
- id: 17689
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-07-29 11:47:00 +0200'
  date_gmt: '2012-07-29 10:47:00 +0200'
  content: |-
    https://wiki.archlinux.org/index.php/Installation_Guide_(Italiano)
    Hanno aggiornato il wiki con tutte le istruzioni in base a pacstrap :)
- id: 17690
  author: Massimiliano Torromeo
  author_email: massimiliano.torromeo@gmail.com
  author_url: ''
  date: '2012-07-29 15:20:00 +0200'
  date_gmt: '2012-07-29 14:20:00 +0200'
  content: |-
    Ho notato che praticamente nessuno ha capito i vantaggi apportati da un sistema come systemd.
    Qua non si tratta semplicemente di cambiare gli script di avvio e i comandi per abilitare/disabilitare i servizi.


    E anche chi pensa che sia tutta una questione di velocizzare il boot si sbaglia di grosso.


    Systemd è un sistema veramente complesso ma moderno e ben strutturato che offre molto più di questo (supervisor, automounter, socket based activation) e per una distribuzione bleeding-edge come arch lo trovo perfetto. In confronto l'attuale sistema di init fa veramente pena.


    Per chi ha voglia di imparare qualcosa e smetterla di parlare a vanvera (non mi riferisco a nessuno in particolare) http://www.youtube.com/watch?v=TyMLi8QF6sw&amp;feature=results_main&amp;playnext=1&amp;list=PLD53AE1C197602E09


    OT: C'è un limite ai compromessi che è accettabile fare pur di mantenere la filosofia KISS a tutti i costi. Per quanto possa essere una buona linea guida, non può essere l'unico parametro di giudizio.
- id: 17691
  author: Stefanauss
  author_email: stefanauss@gmail.com
  author_url: ''
  date: '2012-07-29 17:07:00 +0200'
  date_gmt: '2012-07-29 16:07:00 +0200'
  content: |-
    Ah, quella. L'avevo vista.
    SInceramente mi da fastidio confrontare quest'abbozzo di documentazione con la precedente, magnifica, guida all'installazione.
    Da un lato "obbligano" la comunità ad essere reattiva e riscrivere la documentazione dall'altro... che palle, va riscritta e riletta documentazione.
- id: 17692
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-07-29 17:10:00 +0200'
  date_gmt: '2012-07-29 16:10:00 +0200'
  content: Dagli tempo :P D'altronde è un tool nuovo, e non puoi pretendere subito
    il livello di completezza che aveva la scorsa release ;)
- id: 17693
  author: Stefanauss
  author_email: stefanauss@gmail.com
  author_url: ''
  date: '2012-07-29 17:34:00 +0200'
  date_gmt: '2012-07-29 16:34:00 +0200'
  content: |-
    Quello no. Però, al di la dello scazzo personale, non è difficile intravedere una bella dose di scarsa pianificazione. Questi script non sono certo stati scritti l'altro ieri, uno scheletro di documentazione (anche del tipo "was that and now is this") la potevano scrivere durante lo sviluppo, per non lasciare tutti spiazzati. man archlinux(7) è... boh, inutile?
    Mi sento come se avessero rilasciato nuova API dicendo "poi documentiamo settimana prossima" e tu sei lasciato a indovinare dal nome della funzione che cosa cavolo faccia. E nel frattempo rinunci a installare/consigliare Arch, cosa che vorresti davvero fare.
- id: 17696
  author: C.Stefano
  author_email: spazioinformaticoblog@gmail.com
  author_url: http://spazio-informatico.blogspot.com
  date: '2012-07-31 15:54:00 +0200'
  date_gmt: '2012-07-31 14:54:00 +0200'
  content: |-
    Interessante quest'articolo e questa discussione, tanto da invitarmi a scrivere per la prima volta su questo blog appena scoperto.
    E' una domanda che mi sono posto anche io: Come mai non c'era qualcosa di pronto? Perchè, e parlo del wiki italiano, non c'è stato subito qualcosa di pronto senza dover far correre il traduttore/scrittore di turno?

    Essendo un grande estimatore di Archlinux, e fino a qualche mese fa un utilizzatore fino a cause di forza maggiore che me lo hanno impedito(rottura parziale del disco), ho provato in vbox l'installazione senza AIF e sinceramente non ci trovo niente di complicato. Discorso diverso per rc.conf. Questa modifica mi disorienta; ritenevo infatti rc.conf un punto di forza della distribuzione: tutto in un unico file. Tuttavia non mi disturba il modificare più file se ciò mi aiuta a padroneggiare la mia distribuzione in maniera più completa e universale (e non solo in riferimento ad Arch).

    Il concetto di KISS io lo ritrovo nell'amministrazione effettiva della distribuzione. Nel suo aggiornamento, in AUR, nel wiki completo.

    Detta la mia, vi saluto.
- id: 17705
  author: Valdan
  author_email: red1983red@gmail.com
  author_url: ''
  date: '2012-08-02 14:58:00 +0200'
  date_gmt: '2012-08-02 13:58:00 +0200'
  content: NOOOOO! Da buon ignorante, che se la "spaccheggia" con gli amici perché
    installa ad occhi chiusi una distribuzione che non è basata su Debian, è terribile!
    Non penso che abbandonerò Arch, ma temo che mi dovrò documentare prima della prossima
    installazione.
- id: 17706
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-02 15:34:00 +0200'
  date_gmt: '2012-08-02 14:34:00 +0200'
  content: |-
    Concordo molto con il tuo commento e il punto di vista che per molti versi si rifà a quello di @bashlnx:disqus.
    Auguri per il tuo primo intervento :)
- id: 17707
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-02 15:35:00 +0200'
  date_gmt: '2012-08-02 14:35:00 +0200'
  content: Grazie mille! Il talk che hai linkato è veramente illuminante, probabilmente
    ci farò un post apposito a breve :)
- id: 17708
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-02 15:35:00 +0200'
  date_gmt: '2012-08-02 14:35:00 +0200'
  content: Quello è sicuro, tra AIF  e rc.conf... ;)
- id: 17772
  author: TopoRuggente
  author_email: topo.ruggente@gmail.com
  author_url: ''
  date: '2012-08-15 16:27:00 +0200'
  date_gmt: '2012-08-15 15:27:00 +0200'
  content: |-
    Per quanto riguarda l'installazione mi trovo perfettamente d'accordo, anzi, alla prima installazione di Arch avevo avuto problemi a capire il partizionamento, quindi normalmente aprivo un altro login e partizionavo comunque manualmente con fdisk.

    Col nuovo sistema ho eseguito due installazioni, da usb a usb e da usb a cf entrambe andate lisce come l'olio.

    Per quanto riguarda systemd, diciamo che ci sto lavorando, ancora non ho configurato la parte relativa all'esecuzione dei daemon.
    Onestamente comunque utilizzando Arch in parallelo con Slack avere la configurazione sparpagliata in molti file non mi lascia stranito.
---
<p>In questi giorni ho letto una <strong>RFC</strong> all'interno della mailing list arch-dev, che si è poi tramutata col tempo in una solida realtà, malgrado la scelta snaturata che propone: <strong>Arch Linux</strong>, a causa del passaggio a <a href="http://en.wikipedia.org/wiki/Systemd">systemd</a>, dirà addio ad <strong>rc.conf</strong> come unica unità di configurazione del sistema operativo. Mi sono fatto un paio di domande sulla questione, e su come questo potesse riflettersi in maniera positiva su un utente Arch. Fortunatamente, poi, comprendo abbastanza lo spagnolo e il <a href="http://www.rafaelrojas.net/2012/07/27/adios-al-etcrc-conf/">post di Rafael Rojas</a> mi ha aiutato a capire meglio la situazione.</p>
<h3>Che palle</h3>
<p>Primo paragrafo in cui mi lamento. In fondo, ho sempre apprezzato <strong>Arch Linux</strong> per la sua semplicità e la sua monoliticità, che mi permette di avere un sistema configurato e funzionante, sapendo dove mettere le mani, in <strong>pochissimo tempo</strong>. Tramite la migrazione a systemd tutto questo viene messo in gioco ripudiando <strong>rc.conf</strong> come fonte unica del sapere, e rendendolo un mero file di gestione dei demoni, mentre il resto viene affidato non ad un altro file, ma ad una serie di <strong>microglobuline</strong> sparse per il filesystem; io che sono fondamentalmente una persona molto pigra credo che verrò salvato da tutta questa accidia solamente per intercessione della modalità splittata di <strong>vim</strong>.</p>
<p>Pessimismo e fastidio.</p>
<h3>KISS?</h3>
<p>Come sopra. Quanto è <a href="http://it.wikipedia.org/wiki/KISS_(informatica)">KISS</a> qualcosa del genere? Il mio metro di paragone su queste piccolezze è sempre <strong>Gentoo Linux</strong>: non potrebbe esistere distro più complicata e soggetta alla frammentazione (nonostante <strong>make.conf</strong>), per quanto mi riguarda, quindi mi rifaccio sempre agli esempi dettatimi dall'esperienza. Purtroppo, la gestione attraverso microfile di configurazione diffusi un po' ovunque avviene anche sulla famosa distro di <strong>Robbins</strong>, e questo mi porta a pensare che non solo si stia andando verso un approccio meno KISS, ma che ci si stia dirigendo con una scelta del genere verso una strada che, dal <strong>KISS</strong>, non potrebbe essere più lontana.</p>
<p><strong>KISS my ass</strong>, è proprio il caso di dirlo. :D</p>
<p><img class="aligncenter" title="Linux Machine" src="http://farm3.staticflickr.com/2472/3797070188_ece79b25b3.jpg" alt="Linux Machine" width="500" height="333" /></p>
<h3>Effetti collaterali positivi</h3>
<p>Alcuni mi hanno accusato di essere sempre troppo indulgente con le scelte dei developer di <strong>Arch Linux</strong>, ma la verità è che qualsiasi cosa sia stata fatta fino ad ora, comunque hanno incontrato il mio consenso, anche rimuovendo l'installer grafico (<strong>AIF</strong>) e sostituendolo con degli script, per non parlare del link simbolico da /lib verso <strong>/usr/lib</strong>. Entrambe scelte discutibili, ma che seguono una filosofia di fondo che approvo e della quale mi faccio spesso portatore.</p>
<p>Anche questa scelta come tutte ha degli effetti collaterali non negativi; come diceva un tizio famoso, la verità sta nel mezzo, e chi sono io per confutarlo? <strong>Arch Linux</strong> potrà quindi aderire in toto ad un nuovo standard, ed essere maggiormente apprezzata da chi si affanna per portare in maniera più indolore possibile l'ordine in quel caos che a volte si rivela essere il panorama <strong>Linux</strong> in generale.</p>
<p>Con l'affermazione di un <a href="http://it.wikipedia.org/wiki/Init">sistema di init</a> standard de facto che interagisce in maniera così profonda con il sistema, e l'adozione di un software ormai maturo ma ancora agli albori per quanto riguarda la diffusione e gli sviluppi "futuri" come lo è <strong>systemd</strong>, mi sento orgoglioso di appartenere all'utenza e alla comunità di una distribuzione che si fa sempre scrupolo di rimanere aggiornata sia banalmente in tema di versioni del software, che in tema di adozioni di concetti (sempre a prescindere dal <strong>KISS</strong>).</p>
<h3>Abbandonare Arch Linux</h3>
<p>C'è chi magari troverà sin troppo fastidiosa questa scelta e deciderà che magari è venuta la volta buona di provare qualche altra <strong>distribuzione</strong>. È libero di farlo. Pur non gradendo io personalmente che <strong>rc.conf</strong> venga <del>"droppato"</del> reso non preferenziale (pardon) in maniera così brusca per una soluzione così suddivisa e per gente che - diciamocelo - non ha niente di meglio da fare che ravanare il proprio filesystem alla ricerca di tali <strong>follicoli di configurazione</strong>, in ogni caso apprezzo <strong>Arch Linux</strong> per l'approccio KISS applicato in tutti gli aspetti in cui una distribuzione Linux possa essere personalizzata.</p>
<p>Continuerò quindi ad usarla felicemente. Sono comunque fortunato, e non vorrei essere nei panni di chi si è trovato ad installare in questi giorni: auguri, per leggervi tutto il manuale degli <strong>scriptini</strong> ci vuole voglia :D</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/telwink/3797070188/in/photostream/">telwink</a></em></p>
