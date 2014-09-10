---
layout: post
status: publish
published: true
title: Pacman. Ve lo racconto io.
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 954
wordpress_url: http://dottorblaster.it/?p=954
date: '2011-08-01 20:38:22 +0200'
date_gmt: '2011-08-01 19:38:22 +0200'
categories:
- Linux
tags:
- Arch
comments:
- id: 16186
  author: Picchiopc
  author_email: picchiopc@gmail.com
  author_url: http://picchiopc.wordpress.com
  date: '2011-08-01 19:47:00 +0200'
  date_gmt: '2011-08-01 19:47:00 +0200'
  content: |
    Potente in te scorre la forza °_°
- id: 16187
  author: ''
  author_email: unknhawk@gmail.com
  author_url: ''
  date: '2011-08-01 19:55:00 +0200'
  date_gmt: '2011-08-01 19:55:00 +0200'
  content: |-
    In effetti Synaptic, essendo fatto molto bene mi manca (soprattutto quando faccio ricerche quasi alla cieca).
    Per il resto Arch è una phaigata, con il nuovo installer in ncurses è molto più abbordabile.
    L'unica pecca (se si può definire tale) è che manca un opzione per far andare pacman e yaourt senza chiedere niente al padrone :D (del tipo lo lancio e lavora da solo tutta notte, non come capita a me che se mi stacco dal pc chiede si o no e si blocca).
    Ultima cosa, non ti azzardare a metter rm -rf /* nel pkgbuild! (oppure mettilo, tanto non lo lancio da root :P)
- id: 16188
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-08-01 20:08:00 +0200'
  date_gmt: '2011-08-01 20:08:00 +0200'
  content: Non ho parlato di Yaourt perchè è un software scritto da ArchLinuxFR e
    non dai developer. Pacbuilder in teoria non dovrebbe farti troppe domande :D
- id: 16189
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-08-01 20:11:00 +0200'
  date_gmt: '2011-08-01 20:11:00 +0200'
  content: Ma scherzi, c'è gente molto più figa di me.
- id: 16190
  author: ''
  author_email: unknhawk@gmail.com
  author_url: ''
  date: '2011-08-01 20:13:00 +0200'
  date_gmt: '2011-08-01 20:13:00 +0200'
  content: Azz, era meglio saperlo prima di iniziare a compilare il kernel v3.0 ;D
    Grazie mille per la dritta su pacbuilder (anche questo è del buon Cimitan? phigo
    :D )
- id: 16191
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-08-01 20:18:00 +0200'
  date_gmt: '2011-08-01 20:18:00 +0200'
  content: Si, voleva essere una sorta di Portage dei poveri. :D
- id: 16192
  author: ''
  author_email: parrella.antonio@gmail.com
  author_url: ''
  date: '2011-08-01 20:27:00 +0200'
  date_gmt: '2011-08-01 20:27:00 +0200'
  content: |
    Ci penso un po' su... però insomma, aptitude, ecco... :P
- id: 16193
  author: F Riccardo87
  author_email: f.riccardo87@gmail.com
  author_url: ''
  date: '2011-08-01 20:40:00 +0200'
  date_gmt: '2011-08-01 20:40:00 +0200'
  content: "# yaourt &lt;&gt; --noconfirm ti evita la noia di rispondere si o no ogni
    volta"
- id: 16194
  author: Picchiopc
  author_email: picchiopc@gmail.com
  author_url: http://picchiopc.wordpress.com
  date: '2011-08-01 20:53:00 +0200'
  date_gmt: '2011-08-01 20:53:00 +0200'
  content: Tipo chi ? °_°
- id: 16195
  author: ''
  author_email: unknhawk@gmail.com
  author_url: ''
  date: '2011-08-01 20:55:00 +0200'
  date_gmt: '2011-08-01 20:55:00 +0200'
  content: grazie :D
- id: 16196
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-08-01 22:38:00 +0200'
  date_gmt: '2011-08-01 22:38:00 +0200'
  content: Dai su, dagli una chance. Scoprirai che non è così male :D
- id: 16198
  author: Andrea
  author_email: pikkioweb@yahoo.it
  author_url: ''
  date: '2011-08-02 06:21:00 +0200'
  date_gmt: '2011-08-02 06:21:00 +0200'
  content: Posso fare "sudo apt-get install pacman"? Ihihi! :-)
- id: 16199
  author: ''
  author_email: the.sonda90@gmail.com
  author_url: ''
  date: '2011-08-02 09:33:00 +0200'
  date_gmt: '2011-08-02 09:33:00 +0200'
  content: Ho appena ordinato il libro da amazon.it :D Grazie mille!
---
<p>Negli ultimi tempi, mi è stata fatta spesso e volentieri la domanda clue del perchè uso <strong>Arch Linux</strong>: cosa rende <strong>Pacman</strong> un package manager migliore? O comunque, in cosa esso si distingue da gestori di pacchetti blasonatissimi come APT o Yum, o anche Zypper? In questo articolo che scrivo adesso, provo a fare mente locale, sia per me che per le persone che mi hanno fatto spesse volte questa domanda; in quanto <strong>AUR</strong> packager, cercherò di mantenere comunque un tono critico sulla questione e non convincervi che il vino è buono solo perchè io sono l'oste. Un grazie speciale a Zidagar che mi ha per così dire triggerato, dato che senza il suo <strong><a href="http://friendfeed.com/linux-italia/ca7b7bf1/pacman-vs-apt-ragazzi-non-ho-mai-provato-e-da-buon">domandone</a></strong> di sabato (e successivi commenti) su Linux Italia non sarei stato stimolato così intensamente a scrivere un post del genere. Allora, pronti? ;)</p>
<h3>Semplicità prima di tutto</h3>
<p><strong>Pacman</strong> è un gestore di pacchetti semplice, sia come ovvio nel funzionamento e nel comportamento, che nella sintassi: è infatti molto più comodo, almeno per me, usare Pacman piuttosto che qualsiasi altro gestore di pacchetti. Appendendo infatti lettere singole alle opzioni più generali possiamo generare comandi che eseguano più di una azione, così se di solito abbiamo bisogno di più comandi o di stringhe chilometriche ed espressioni regolari lunghe un miglio, il package manager di Arch Linux ci viene incontro mettendo a nostra disposizione la possibilità di fare millemila cose con un solo, brevissimo comando.</p>
<p>In cosa si traduce questo? Beh, ovviamente si traduce nel fatto che possiamo usare tutte quelle ore sprecate a digitare caratteri su caratteri in qualcosa di molto più proficuo, come patchare un software o rimediare a qualche configurazione errata di sistema che sicuramente avrete dimenticato nel posto sbagliato al momento sbagliato. Quindi insomma, niente di trascendentale se uno ha le competenze, ma tutto di guadagnato.</p>
<p>C'è poi un discorso di funzionamento di base, che almeno a me è molto comodo: se altri gestori complicati incorrono per esempio in problemi di dipendenze e configurazioni lasciate in sospeso, grazie al fatto che la configurazione viene svolta in gran parte dall'utente e c'è molta poca dinamicità in fase di installazione, comunque una volta dato un comando di gestione dei pacchetti è veramente molto difficile se non impossibile che il package manager si pianti a metà del lavoro dicendo che c'è quel pacchetto non configurato e quell'altro in attesa di cose mistiche. Altro tempo libero dunque, che possiamo dedicare a leggere un buon libro, ad esempio <strong>L'Etica Hacker</strong> di Pekka Himanen.</p>
<h3>Flessibilità quanto basta (cioè molto)</h3>
<p>Sicuramente Pacman è concepito in maniera tale da risultare <strong>molto flessibile</strong>. Il suo concetto di semplicità fa si che con un comando io possa agire chirurgicamente sui pacchetti installati, rimuovendone alcuni senza compromettere il funzionamento del sistema di gestione del software, fregandomene poi di tutto ciò che è il sistema di dipendenze. Questo significa che per sostituire un pacchetto dipendenza di altri, mi basta rimuoverlo e, facendo un po' d'attenzione, inserire il mio nuovo pacchetto non dando troppo fastidio ai software in esecuzione: in questo modo avrò personalizzato il sistema senza dover scoperchiare necessariamente tutto; la magia è resa possibile dal fatto che Pacman viene distribuito insieme ad un set di script che lo completano e che sono il suo vero punto di forza.</p>
<p>Se infatti la gestione del software risulta semplice ed agevole, comunque la flessibilità estrema (anche se non quanto Portage ovviamente) viene raggiunta concependo Pacman non come un sistema di gestione dei pacchetti, ma come un sistema di ibridazione tra la manutenzione tradizionale dei programmi tramite il paradigma a pacchetti, e la <strong>gestione dei ports</strong>. I ports sono quella cosa che ha reso tanto famosi BSD e Gentoo: file di testo addetti a istruire un sistema di script su come compilare ed installare un determinato tarball. Assieme a Pacman abbiamo quindi makepkg che si occupa di creare pacchetti dai PKGBUILD, ossia i file testuali che noi o altri scriviamo per compilare un software senza problemi. E assieme a Pacman e makepkg, ci viene fornito l'<strong>ABS</strong>, ossia l'Arch Build System, il quale consiste di tutti i file <strong>PKGBUILD</strong> dei pacchetti presenti nei repository ufficiali.</p>
<p>Avete capito bene. Questo significa che se non ci sta bene come è stato compilato un pacchetto dagli sviluppatori della distro, possiamo prenderci il PKGBUILD, personalizzare tutto in base alle nostre esigenze, dai metadati di pacchetto alle flag, al processo di build, e poi darlo in pasto a makepkg che ci sputerà fuori dopo la fase di compilazione e impacchettamento, un pacchetto fatto da noi secondo le nostre esigenze. Questa modularità fa si che Pacman possa essere utilizzato in maniera assolutamente proficua anche per server, o per configurazioni particolari che magari hanno bisogno del tale software compilato in una certa maniera (flag particolari, e quant'altro).</p>
<p>In aggiunta a questo, è anche semplicissimo e facilissimo mantenere un repository per Pacman, soprattutto con l'ausilio di un paio di scriptini editi dalla comunità, ma di questo magari ve ne parlo un'altra volta.</p>
<h3>Pacman sa farsi da parte</h3>
<p>Volete il pezzo forte? Il bello di Pacman è che se non ci sta bene come funziona, possiamo sostituirlo. Ebbene si, possiamo mandarlo a quel paese allegramente e gestire il nostro software in mille altre maniere :D</p>
<p>Questo è possibile grazie alle <strong>libalpm</strong>, ossia le LIBraries for Arch Linux Package Management, scritte in maniera separata da Pacman, il quale è solo un wrapper di questi file: esistono package manager alternativi, come il famosissimo Clyde, che purtroppo è defunto da poco per mancanza di tempo da parte dello sviluppatore principale; tra l'altro, essendo stato io un utente di <strong>Clyde</strong> in passato, invito fortemente chi sa programmare (non io che sono, detto chiaramente, una pippa come developer) a prendere in mano il progetto. Insomma, Pacman sa fare le cose in maniera semplice, pulita, non sporca, mangia poco e disturba ancora meno, come abbiamo visto. Ma vale veramente la pena passare ad Arch Linux (e a Pacman) se si vive bene senza?</p>
<h3>Pacman VS The Others</h3>
<p>Non ho molte parole da spendere in questo caso. Posso dire che, sicuramente, utilizzare una distro come Arch Linux che ha un approccio radicale e assolutamente nuovo al software, è un'esperienza di vita. Se quindi siete un po' annoiati una domenica pomeriggio, anzichè sbragarvi sul divano a fare niente, prendetevi <strong>Virtualbox</strong> e mettete su una bella macchina virtuale con l'ultimo media di installazione di Arch impostato per il boot. Sicuramente, non solo vi divertirete un mondo, ma forse vi piacerà così tanto come è fatta la distribuzione, e come è fatto Pacman, da dargli una chance sulla vostra workstation.</p>
<p>Sicuramente il buon Pacman manca di un'interfaccia grafica adeguata; APT possiede ad esempio <strong>Synaptic</strong>, ma proprio per questo, se per fare operazioni complesse con APT abbiamo bisogno del suo blasonato frontend, grazie alla semplicità di cui sopra Pacman non ha bisogno di queste cose: dalla CLI abbiamo tutto ciò che ci serve, senza doverci complicare ulteriormente la vita.</p>
<p>Che la Forza sia con voi.</p>
