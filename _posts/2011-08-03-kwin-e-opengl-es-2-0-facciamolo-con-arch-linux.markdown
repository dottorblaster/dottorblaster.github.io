---
layout: post
status: publish
published: true
title: 'KWin e OpenGL ES 2.0: facciamolo con Arch Linux'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 964
wordpress_url: http://dottorblaster.it/?p=964
date: '2011-08-03 14:21:17 +0200'
date_gmt: '2011-08-03 13:21:17 +0200'
categories:
- Linux
tags:
- Arch
comments:
- id: 16202
  author: Gianfrix
  author_email: gianfrix.mg@gmail.com
  author_url: http://gianfrixblog.co.cc
  date: '2011-08-03 13:41:00 +0200'
  date_gmt: '2011-08-03 13:41:00 +0200'
  content: |-
    Hai dimenticato di dire che bisogna aggiungere libegl e libgles alle dipendenze :D

    Comunque è strano che non vada, pensavo fosse roba di drivers (a me va con i nouveau ma non con i blob proprietari)...
- id: 16203
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-08-03 13:44:00 +0200'
  date_gmt: '2011-08-03 13:44:00 +0200'
  content: Rimediato :D
- id: 16205
  author: Antonio Barba
  author_email: thekaneb@gmail.com
  author_url: ''
  date: '2011-08-03 15:59:00 +0200'
  date_gmt: '2011-08-03 15:59:00 +0200'
  content: |-
    Buono a sapersi, che KWin supporta OpenGL ES.... ma OpenGL ES è un subset di OpenGL ad esclusivo uso di telefonini, console and the sort... a che pro fare una tale configurazione su di un PC?
    Avrebbe senso usando una distribuzione Linux per ARM (ad esempio su quegli sbavosi netbook di Toshiba basati su Tegra 250), ma Arch non supporta tale architettura, quindi che famo? :-D
- id: 16206
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-08-03 16:04:00 +0200'
  date_gmt: '2011-08-03 16:04:00 +0200'
  content: |-
    Ci sono due punti da chiarire sulla questione :D
    È vero quello che dici, ma alcuni utenti hanno sperimentato prestazioni migliori anche sui PC (non chiedermi di più, ho solo letto commenti qua e la). Secondo poi... Arch *come preset* supporta solo i686 e 64bit ma con un makepkg.conf e tanta buona volontà in realtà puoi compilarti tutto per ARM :D
- id: 16207
  author: Antonio Barba
  author_email: thekaneb@gmail.com
  author_url: ''
  date: '2011-08-03 16:11:00 +0200'
  date_gmt: '2011-08-03 16:11:00 +0200'
  content: |-
    sulle prestazioni migliori ci metto la mano sul fuoco. Come ho già scritto, è un subset, con meno features e forti limitazioni nell'uso di textures e shaders, riduzione della precisione nei calcoli e accorciamento della pipeline grafica. Quindi sostanzialmente scambi le prestazioni con la qualità grafica, roba che farebbe scadere di molto i giochi, ma passa inosservata su un semplice sistema di compositing :-)

    Per quanto riguarda un eventuale port ARM, potrei intripparmi in tal senso in un prossimo futuro... sto solo aspettando l'uscita di netbook basati su Cortex A15, che hanno nuove FPU più prestanti e integrano fino a 16 core superscalari out of order :-) Ovviamente a prezzi umani...

    Sicuramente su un netbook preferirei una bella Arch ad un limitato Android (che è perfetto per i cellulari, ma sinceramente lo schifo al quadrato su un computer dotato di mouse e tastiera)...
- id: 16208
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-08-03 16:25:00 +0200'
  date_gmt: '2011-08-03 16:25:00 +0200'
  content: |-
    Oh beh ma questo è certo, Maestro :P
    Il port ARM è già attivo, si chiama ArchARM e non so quante possibilità abbiano, tantomeno se il suo sviluppo è ancora attivo. In ogni caso, un bel Cortex A15 per una workstation a casa me lo metterei sotto il sedere senza remore; se Arch non mi potesse venire in aiuto, beh, ripiegherei su Debian ARM :D

    Per quanto riguarda mouse e tastiera su Android, a me non piace molto quello che fa Asus con la docking station per il Transformer. Soluzione di ripiego IMHO eccellente, ma se devo farci qualcosa di più, l'eeePad diventa un oggettino. Anche se ne sto, non te lo nego, meditando l'acquisto ;)
- id: 16209
  author: Antonio Barba
  author_email: thekaneb@gmail.com
  author_url: ''
  date: '2011-08-03 17:51:00 +0200'
  date_gmt: '2011-08-03 17:51:00 +0200'
  content: terrò stott'occhio ArchARM :-)
- id: 16210
  author: Ospite
  author_email: seawolfmax@alice.it
  author_url: ''
  date: '2011-08-03 19:03:00 +0200'
  date_gmt: '2011-08-03 19:03:00 +0200'
  content: In Klipper avete ancora la voce per generare il bar code ?
- id: 16211
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-08-03 19:08:00 +0200'
  date_gmt: '2011-08-03 19:08:00 +0200'
  content: Non mi pare di avercela ._.
- id: 16212
  author: Erik_ilrosso
  author_email: erik_ilrosso@yahoo.it
  author_url: ''
  date: '2011-08-03 19:49:00 +0200'
  date_gmt: '2011-08-03 19:49:00 +0200'
  content: oltre le prestazioni migliori c'è un minor impatto sulla durata della batteria
    che non guasta mai.
- id: 16213
  author: Laycastle -
  author_email: laycastle@gmail.com
  author_url: ''
  date: '2011-08-03 23:04:00 +0200'
  date_gmt: '2011-08-03 23:04:00 +0200'
  content: per utenti gentoo basta abilitare la flag USE "gles"
---
<p>Ho parlato nel mio precedente post di <strong><a href="http://dottorblaster.it/2011/08/pacman-ve-lo-racconto-io/">come sia flessibile</a></strong> Arch Linux in virtù delle possibilità che <strong>Pacman</strong> ci dà, di ricompilare grazie ad ABS qualunque pacchetto presente nei repository ufficiali, o di crearcene di nuovi. Oggi voglio dirvi un paio di cose interessanti su <strong>KDE 4.7.0</strong> e KWin: la nuova release di KDE infatti tra le novità vede proprio tanta carne al fuoco per il suo gestore di finestre, rinnovato in tanti aspetti, e facente uso adesso, se ricompilato con le giuste flag, di OpenGL ES.</p>
<p><strong>OpenGL ES</strong>, ossia OpenGL for Embedded Systems è un particolare comparto del famoso framework grafico che si avvantaggia delle API messe a disposizione dai dispositivi integrati per aumentare le prestazioni, specialmente sui chipset Tegra2 e altri componenti di quel "parentado". <strong>Kwin</strong> fa uso di tutto ciò? Dall'ultima release, certo. Possiamo quindi ricompilare un pezzo di KDE (compreso il gestore di finestre) per abilitare tutto ciò, e possiamo farlo facilmente dal momento che abbiamo <strong>ABS</strong> come nostro potente alleato. Andiamo quindi in una directory vuota che adotteremo come workspace:</p>
<p><code>$ yaourt -G kdebase-workspace</code></p>
<p>Al posto di usare yaourt potete anche sincronizzare con il comando abs tutto il tree e copiarvi il <strong>PKGBUILD</strong> a mano, ma sinceramente così è più comodo, anche se richiede che abbiate installato, ovviamente, il blasonatissimo tool.</p>
<p>Purtroppo dobbiamo ricompilare tutto il workspace solo per quattro cose di KWin, ma pazienza. Dobbiamo solo aspettare che il processore faccia il suo sporco lavoro per compiacerci. Intanto installatevi <em>libgles</em> e <em>libegl</em>, poi a questo punto:</p>
<p><code>$ cd kdebase-workspace &amp;&amp; vim PKGBUILD</code></p>
<p>Al posto di <strong>vim</strong> potete usare l'editor di testo che preferite, basta che agiate con cognizione di causa :D</p>
<p>Dopo aver aperto il file, localizzate facilmente queste righe:</p>
<p><code>-DKWIN_MOBILE_EFFECTS=OFF \<br />
-DWITH_OpenGLES=OFF \<br />
-DKWIN_BUILD_WITH_OPENGLES=OFF</code></p>
<p>E tramutatele in:</p>
<p><code>-DKWIN_MOBILE_EFFECTS=OFF \<br />
-DWITH_OpenGLES=ON \<br />
-DKWIN_BUILD_WITH_OPENGLES=ON</code></p>
<p>Perfetto. Abbiamo abilitato ciò che ci serve. Adesso, possiamo tranquillamente lanciare il processo di build:</p>
<p><code>$ makepkg</code></p>
<p>Attendiamo. Io ho un dual core e tutto il compilame vario ha impiegato una quindicina di minuti per finire il tutto; sicuramente sul vostro esacore con hypertreading ci metterà molto meno. Appena finito, dopo una breve (spero per voi o dovete far controllare l'hard drive) fase di impacchettamento, makepkg ci sputerà fuori un pacchetto pronto per essere installato sul nostro sistema.</p>
<p><code># pacman -U *.pkg.*</code></p>
<p>Con questo comando andiamo a sostituire il pacchetto creato dal buon <strong>Andrea 'BaSh' Scarpino</strong> (che ringrazio per la distribuzione di KDE che ci offre, sempre impeccabile) con il nostro. Riavviate e godetevi lo spettacolo... spettacolo che, ovviamente, per chi non gode di OpenGL ES si concluderà con un imbombamento generale del compositing di KWin. Per voi fortunati che avete schede video compatibili con queste estensioni, se non fate questo procedimento sarete passibili di pena di morte. Ché io <strong>non posso</strong>.</p>
