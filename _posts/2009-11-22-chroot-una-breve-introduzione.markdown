---
layout: post
status: publish
published: true
title: 'Chroot: una breve introduzione'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 540
wordpress_url: http://dottorblaster.it/?p=540
date: '2009-11-22 12:45:40 +0100'
date_gmt: '2009-11-22 11:45:40 +0100'
categories:
- Linux
- How-To
tags:
- Arch
- Gentoo
comments:
- id: 9320
  author: Hilinus
  author_email: itahilinus@hotmail.it
  author_url: ''
  date: '2009-11-22 14:01:04 +0100'
  date_gmt: '2009-11-22 19:01:04 +0100'
  content: Ottima guida per un comando veramente versatile e potente... gentoo insegna
    ;)
- id: 9321
  author: saten
  author_email: saten.r@gmail.com
  author_url: http://santerotondi.net/
  date: '2009-11-22 14:09:06 +0100'
  date_gmt: '2009-11-22 19:09:06 +0100'
  content: Bell&#39;articolo, tornerà utile a molti :D<br><br>Certo che chroot è un
    po&#39; la virtualizzazione dei poveri ;D
- id: 9322
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 14:16:14 +0100'
  date_gmt: '2009-11-22 19:16:14 +0100'
  content: Assolutamente si, da quando ho scoperto chroot lo uso per un sacco di cose
    :D
- id: 9323
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 14:15:57 +0100'
  date_gmt: '2009-11-22 19:15:57 +0100'
  content: "È più potente della virtualizzazione: in questo caso non vengono consumate
    risorse da macchine virtuali di nessun tipo; hai un sistema operativo completamente
    sandboxato e pienamente funzionante :)"
- id: 9324
  author: saten
  author_email: saten.r@gmail.com
  author_url: http://santerotondi.net/
  date: '2009-11-22 14:23:48 +0100'
  date_gmt: '2009-11-22 19:23:48 +0100'
  content: no vabbè, non diciamo cazzate :D<br>per isolamento e flessibilità, non
    c&#39;è paragone :P
- id: 9325
  author: ugaciaka
  author_email: ugaciaka@gmail.com
  author_url: http://www.ugaciaka.wordpress.com/
  date: '2009-11-22 14:24:09 +0100'
  date_gmt: '2009-11-22 19:24:09 +0100'
  content: io chroot la uso spesso con systemrescue cd (Live CD) per entrare in arch
    e mettere a posto...devo dire che mi ha salvato il *ulo molte volte...
- id: 9326
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 14:28:43 +0100'
  date_gmt: '2009-11-22 19:28:43 +0100'
  content: Infatti mi sono trovato a rimettere a posto parecchie volte, o a fornire
    istruzioni sul forum, per Arch che non bootavano più, o magari avevano un problema
    di troppo.<br>Chroot al potere! :D
- id: 9328
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 15:52:41 +0100'
  date_gmt: '2009-11-22 20:52:41 +0100'
  content: Dici? Cioè, ovvio che non puoi far girare il sistema al 100%, ma per esempio
    un webserver in chroot gira tranquillamente, con accesso diretto alla macchina,
    senza lo spreco di risorse portato dalla virtualizzazione.<br>Questione di esigenze
    ;)
- id: 9329
  author: saten
  author_email: saten.r@gmail.com
  author_url: http://santerotondi.net/
  date: '2009-11-22 15:58:00 +0100'
  date_gmt: '2009-11-22 20:58:00 +0100'
  content: Eh.. però è un inferno da mettere su in scenari un pelo più complessi,
    o se si ha bisogno di poter fare un revert dello stato..<br>In ogni caso è un
    ottimo sistema per fare ripristino, e una mutanda di latta aggiuntiva in casi
    particolari :)
- id: 9330
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 16:27:39 +0100'
  date_gmt: '2009-11-22 21:27:39 +0100'
  content: Sulla reversibilità hai assolutamente ragione, i dischi vmdk/vdi sono il
    massimo :)<br>Tra l&#39;altro un disco virtuale può essere replicato su centinaia
    di macchine mentre una chroot no. :D
- id: 9331
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2009-11-22 18:40:12 +0100'
  date_gmt: '2009-11-22 23:40:12 +0100'
  content: io monterei anche /sys ;)
- id: 9332
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 18:46:44 +0100'
  date_gmt: '2009-11-22 23:46:44 +0100'
  content: Come mai?<br>Non ne ho mai avuto bisogno :P<br>In teoria uno dovrebbe montare
    anche /dev/pty al posto giusto ma chi ne ha voglia :D
- id: 9333
  author: Giovanni Scafora
  author_email: giovanni@archlinux.org
  author_url: http://www.archlinux.it/
  date: '2009-11-22 19:05:22 +0100'
  date_gmt: '2009-11-23 00:05:22 +0100'
  content: Ottima guida per i newbie.<br>Complimenti!
- id: 9334
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 19:21:18 +0100'
  date_gmt: '2009-11-23 00:21:18 +0100'
  content: Grazie :)
- id: 9335
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-11-22 20:47:22 +0100'
  date_gmt: '2009-11-23 01:47:22 +0100'
  content: Per quello c&#39;è solaris con ZFS è prossimamente un giorno chissà sto
    cavolo di brfs.<br>Inoltre i dischi vdi non brillano certo per velocità paragonati
    a un disco vero.
- id: 9336
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-11-22 20:44:19 +0100'
  date_gmt: '2009-11-23 01:44:19 +0100'
  content: '"ma per esempio un webserver in chroot gira tranquillamente"<br><br>Che
    poi è la soluzione migliore. per un webserver esposto alla giungla.<br>Se catturano
    la macchina, a parte il webserver non controllano un bel nulla. <br>Rispetto ad
    una vm la memoria è condivisa.<br>Puoi installare una intera distribuzione a 32
    bit in chroot in una 64, oppure un&#39;altra distribuzione in un chroot.'
- id: 9337
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-11-22 20:49:58 +0100'
  date_gmt: '2009-11-23 01:49:58 +0100'
  content: Io con arch ho preso l&#39;abitudine di avere sempre 2 kernel, quello di
    arch che fa da riserva, e il mio vanilla che uso regolarmente.<br>Tranquillo che
    uno dei 2 boota regolarmente.<br>;)
- id: 9338
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 20:56:14 +0100'
  date_gmt: '2009-11-23 01:56:14 +0100'
  content: Beh anche il virtuale ha un suo perchè, però ;)
- id: 9339
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 20:57:22 +0100'
  date_gmt: '2009-11-23 01:57:22 +0100'
  content: Non se scoppia qualche servizio all&#39;avvio :D
- id: 9341
  author: linuser
  author_email: prd.gtt@operamail.com
  author_url: ''
  date: '2009-11-22 21:57:19 +0100'
  date_gmt: '2009-11-23 02:57:19 +0100'
  content: 'chroot è usabile per sandboxare qualunque cosa si voglia ... alcuni esempi<br><br>-
    Linux From Scratch : <a href="http://www.linuxfromscratch.org/index.html" rel="nofollow">http://www.linuxfromscratch.org/index.html</a><br>-
    Script per chroot-are privoxy , tor , distccd e irssi : <a href="http://northernsecurity.net/download/"
    rel="nofollow">http://northernsecurity.net/download/</a>'
- id: 9342
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 22:02:05 +0100'
  date_gmt: '2009-11-23 03:02:05 +0100'
  content: utile, mi segno tutto, casomai un giorno mi servisse :)
- id: 9343
  author: linuser
  author_email: prd.gtt@operamail.com
  author_url: ''
  date: '2009-11-22 22:02:38 +0100'
  date_gmt: '2009-11-23 03:02:38 +0100'
  content: 'Dimenticavo ... con FreeBSD si può usare jail : <a href="http://www.freebsd.org/cgi/man.cgi?query=jail&format=html"
    rel="nofollow">http://www.freebsd.org/cgi/man.cgi?query=jail&f...</a>'
- id: 9344
  author: Hilinus
  author_email: itahilinus@hotmail.it
  author_url: ''
  date: '2009-11-22 22:05:06 +0100'
  date_gmt: '2009-11-23 03:05:06 +0100'
  content: ":D LFS...  la  provai quest&#39;estate, con tanto di X e pekWM. Molto
    reattiva ma per me rimane un esercizio di stile... interessante esperienza comunque."
- id: 9345
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 23:00:40 +0100'
  date_gmt: '2009-11-23 04:00:40 +0100'
  content: Io devo ancora mettermici bene. Ma alla fine, libro alla mano, siamo capaci
    tutti! :D
- id: 9346
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-22 23:01:16 +0100'
  date_gmt: '2009-11-23 04:01:16 +0100'
  content: Grazie della dritta Unixistica ;)
- id: 9347
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-11-22 23:41:49 +0100'
  date_gmt: '2009-11-23 04:41:49 +0100'
  content: In 2 anni di arch (agosto 2007) l&#39;unico fail al boot mi è capitato
    con un aggiornamento del kernel "ufficiale" che evidentemente non era stato creato
    e impacchettato "a modo".<br>Da quel giorno sempre usato il kernel ufficiale bloccato
    alla prima versione della serie in corso, e il vanilla custom regolarmente aggiornato
    da ME. <br>Mai più visti casini.<br>:D
- id: 9348
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2009-11-23 16:01:48 +0100'
  date_gmt: '2009-11-23 21:01:48 +0100'
  content: e perchè non sarebbe replicabile ? la tarro e me la metto dove cavolo voglio,
    uguale uguale. anzi, non si verifica nemmeno il problema di immagini disco tra
    versioni del virtualizzatore diverse che a volte configura qualche incompatibilità.
- id: 9349
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-23 16:05:28 +0100'
  date_gmt: '2009-11-23 21:05:28 +0100'
  content: Ah già mi sa che c&#39;hai ragione ._.
- id: 9351
  author: linuser
  author_email: prd.gtt@operamail.com
  author_url: ''
  date: '2009-11-23 20:10:18 +0100'
  date_gmt: '2009-11-24 01:10:18 +0100'
  content: 'dimenticavo (2) ... altre chicche :<br><br>-l&#39;opzione -o bind (in
    alcuni casi bisogna usare l&#39;opzione -B oppure --bind ; è possibile usare la
    stessa opzione in /etc/fstab per montare direttamente al boot ; man 8 mount vi
    darà tutte le informazioni a riguardo ;-)  ) serve a montare un filesystem su
    un altro mount point ed averlo quindi disponibile in due mount points <br><br>-
    nel caso di openssh , con le ultime versioni non è necessario farlo girare in
    chroot ( tra l&#39;altro facendo i salti mortali ) a patto di non usare scp ma
    il solo sftp nella versione linkata staticamente al demone ssh : <a href="http://www.debian-administration.org/articles/590"
    rel="nofollow">http://www.debian-administration.org/articles/590</a>'
- id: 9352
  author: scimmia
  author_email: lists4davide@gmail.com
  author_url: http://it.wikipedia.org/wiki/Speciale:PaginaCasuale
  date: '2009-11-24 00:59:54 +0100'
  date_gmt: '2009-11-24 05:59:54 +0100'
  content: razzata == cazzata da root
- id: 9353
  author: M0rF3uS
  author_email: morfeus@ilportalinux.it
  author_url: http://www.ilportalinux.it
  date: '2009-11-24 09:17:37 +0100'
  date_gmt: '2009-11-24 14:17:37 +0100'
  content: "<blockquote><br>Ordunque, andiamo a montare /dev con alcune opzioni che
    non so minimamente cosa significhino, ma dato che sono scritte sul Gentoo Handbook
    e le ho usate moltissime volte le prendo per buone <br>sudo mount -o bind /dev
    /media/target/dev<br>E andiamo poi a montare uno pseudo-proc, almeno da quanto
    ho capito per via della sintassi di comando leggermente più articolata.<br>sudo
    mount -t proc none /media/target/proc<br></blockquote><br><br>il modulo bind di
    mount serve per montare un determinato percorso in più punti, un pò come il link
    simbolico ma  molto più potente in quanto viene gestito come una specie di partizione
    condivisa. Per dire, il repository di arch sul portalinux risiede fisicamente
    sulla home del tuo utente ma viene montato col modulo bind dentro la doc root
    del sito per renderla visibile :)<br><br>-t proc invece monta il filesystem di
    tipo proc, sostanzialmente ci hai azzeccato solo che non ti monta uno pseudo-proc,
    ma un proc vero e proprio solo che lo fai a manella :D quando avvi la tua distribuzione
    gli script di init danno quel comando li per montarti /proc sul sistema.<br><br>Grande
    articolo cmq complimentazioni!"
- id: 9354
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-24 10:09:23 +0100'
  date_gmt: '2009-11-24 15:09:23 +0100'
  content: LOL
- id: 9355
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-24 10:09:07 +0100'
  date_gmt: '2009-11-24 15:09:07 +0100'
  content: Grazie dei complimenti, e grazie delle utilissime delucidazioni, Maestro
    :D
- id: 9356
  author: M0rF3uS
  author_email: morfeus@ilportalinux.it
  author_url: http://www.ilportalinux.it
  date: '2009-11-24 10:35:48 +0100'
  date_gmt: '2009-11-24 15:35:48 +0100'
  content: 'Disqus ha scritto:'
- id: 9357
  author: M0rF3uS
  author_email: morfeus@ilportalinux.it
  author_url: http://www.ilportalinux.it
  date: '2009-11-24 11:06:52 +0100'
  date_gmt: '2009-11-24 16:06:52 +0100'
  content: cmq un consiglio, imposta disqus per mettere in thread al massimo 2/3 risposte
    altrimenti diventa una roba illegibile
- id: 9372
  author: Timothy
  author_email: None
  author_url: http://blog.redaelli.eu/
  date: '2009-11-26 20:33:55 +0100'
  date_gmt: '2009-11-27 01:33:55 +0100'
  content: Ci sono un paio di imprecisioni, per /dev è meglio fare "mount --rbind"
    e non "mount --bind" (sennò ti perdi pts e shm). E a volte è utile montare anche
    sysfs :)
- id: 9373
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-11-27 08:55:26 +0100'
  date_gmt: '2009-11-27 13:55:26 +0100'
  content: Mh, grazie del consiglio :)<br>Me lo segno :P
- id: 10975
  author: nike air force 1
  author_email: lingjuantong@gmail.com
  author_url: http://www.nike-air-force-one.com
  date: '2010-06-08 06:13:34 +0200'
  date_gmt: '2010-06-08 11:13:34 +0200'
  content: Hhe article&#39;s content rich variety which make us move for our mood
    after reading this article. surprise, here you will find what you want! Recently,
    I found some wedsites which commodity is colorful of fashion.<br><a href="http://www.inin-from.com"
    rel="nofollow">http://www.inin-from.com</a>
- id: 15059
  author: Xaber1488
  author_email: xaber1488@gmail.com
  author_url: ''
  date: '2010-09-14 13:49:00 +0200'
  date_gmt: '2010-09-14 13:49:00 +0200'
  content: Grazie mille Blaster! Era da tempo che cercavo una guida semplice e chiara
    riguardante chroot! Complimenti!
- id: 15061
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-09-15 11:42:00 +0200'
  date_gmt: '2010-09-15 11:42:00 +0200'
  content: Dai che divento rosso poi :P
---
<p>In questi giorni ho deciso di cominciare una guida più o meno completa ad un comando che purtroppo, nel mondo degli smanettoni "non avanzati", è poco conosciuto; si tratta di <strong>chroot</strong>.</p>
<p>Infatti, tra un impegno ed un altro, mi sono accorto sul forum di Arch Linux, e non solo, di dover fornire spiegazioni riguardo questa utility, che <em>non</em> è, d'altronde, ricca di documentazione e spiegata come vorrei (e come vorrebbero). :P</p>
<p>Innanzi tutto, una breve introduzione: chroot serve per entrare in una data directory provvista di filesystem Unix e, all'interno di questa, bash, per sfruttarla alla stregua di una vera e propria directory radice, allo scopo di eseguire programmi o riparare, come mi è successo spesse volte, problemi vari. Nello specifico, mi sono trovato a spiegare chroot nell'ambito della risoluzione di problemi legata a sistemi che, in circostanze varie, non eseguono correttamente la procedura di boot, per cui non ci si può loggare all'interno del sistema per<strong> riparare</strong> i danni.</p>
<p>Chroot quindi, oltre che una utility per scopi più o meno noti, può servire da trucchetto d'emergenza per riparare al fatto di aver fatto una <strong>r</strong>azzata; spesso si sente dire "Linux va formattato solo in caso di problemi gravissimi". Ebbene, questo è falso, perchè in caso di problemi gravissimi abbiamo il nostro chroot pronto a darci una mano<strong> in qualsiasi circostanza</strong> :D</p>
<p style="text-align: center;"><img class="alignnone" src="http://i47.tinypic.com/2aj2etd.jpg" alt="" width="261" height="280" /></p>
<p>Ma vediamone per bene il funzionamento: innanzi tutto, abbiamo bisogno, come ho detto su, di una subdirectory con un filesystem Unix e la bash installata; nel caso in cui dovessimo riparare dei danni, la nostra partizione target può diventare facilmente una subdirectory del sistema operativo che stiamo utilizzando tramite una semplice operazione di montaggio. Creiamo quindi il punto di aggancio:</p>
<blockquote><p><code>sudo mkdir /media/target</code></p></blockquote>
<p>E montiamo, finalmente, il nostro pseudo-filesystem, o la partizione bersaglio dei cambiamenti che vogliamo effettuare, legandolo in questo modo alla nostra root reale.</p>
<blockquote><p><code>mount /dev/sdaX /media/target</code></p></blockquote>
<p>A questo punto, se vogliamo solo modificare dei file senza compiere operazioni che interessino i dispositivi o i dati presenti in /proc, possiamo anche saltare il montaggiodi altre parti del nostro sistema base nel sistema bersaglio.<strong> Però</strong>, c'è un però.</p>
<p>Però, se vogliamo compiere operazioni come un aggiornamento, che interessa ovviamente alcuni dati di /dev e alcuni dati di /proc, conviene rendere disponibili queste informazioni al sistema ospite; come fare? Tramite altri due comandi di montaggio, il primo che riguardi la directory /dev, e l'altro che interessi /proc: in questa maniera <strong>rendiamo leggibili</strong> le informazioni riguardo l'hardware della macchina al sistema ospite, che potrà, in parecchi casi, averne bisogno. Per esempio per una ricompilazione del kernel. Per esempio.</p>
<p>Ordunque, andiamo a montare /dev con alcune opzioni che non so minimamente cosa significhino, ma dato che sono scritte sul Gentoo Handbook e le ho usate moltissime volte<em> le prendo per buone</em> :mrgreen:</p>
<blockquote><p><code>sudo mount -o bind /dev /media/target/dev</code></p></blockquote>
<p>E andiamo poi a montare uno pseudo-proc, almeno da quanto ho capito per via della sintassi di comando leggermente più articolata.</p>
<blockquote><p><code>sudo mount -t proc none /media/target/proc</code></p></blockquote>
<p>Per una spiegazione completa dei comandi integro il commento del buon <a href="http://www.alexanghelone.it/">Alex Anghelone</a>, che ci dice a cosa serve tutto questo:</p>
<blockquote><p>Il modulo bind di mount serve per montare un determinato percorso in più punti, un pò come il link simbolico ma molto più potente in quanto viene gestito come una specie di partizione condivisa. Per dire, il repository di arch sul portalinux risiede fisicamente sulla home del tuo utente ma viene montato col modulo bind dentro la doc root del sito per renderla visibile :)</p>
<p>-t proc invece monta il filesystem di tipo proc, sostanzialmente ci hai azzeccato solo che non ti monta uno pseudo-proc, ma un proc vero e proprio solo che lo fai a manella :D quando avvi la tua distribuzione gli script di init danno quel comando li per montarti /proc sul sistema.</p></blockquote>
<p>A questo punto, siamo pronti. Possiamo tuffarci nel sistema ospite, ed iniziare riparazioni, modifiche, aggiornamenti, installazioni e quant'altro:</p>
<blockquote><p><code>sudo chroot /media/target</code></p></blockquote>
<p>Come vediamo, il PS1 è cambiato, e rappresenta il .bashrc che abbiamo impostato per l'utente root sulla directory target, nella quale adesso siamo loggati come root e possiamo effettuare ogni tipo di modifica.</p>
<p>Per uscire dalla nuova directory radice, ovviamente, basta un semplice comando <code>exit</code> ;)</p>
<p>In questo modo, si possono far eseguire programmi in una <strong>sandbox a prova di bomba</strong>, in quanto <em>non condivide nulla</em>, a parte qualche informazione, con la macchina ospitante. Godetevi il vostro chroot, e cominciate a usarlo massivamente per i compiti più disparati. Posso veramente dire: <em>chroot, mai più senza</em> :mrgreen:</p>
