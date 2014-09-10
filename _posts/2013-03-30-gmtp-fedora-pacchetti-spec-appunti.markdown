---
layout: post
status: publish
published: true
title: gMTP su Fedora - pacchetti (spec) e appunti
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2100
wordpress_url: http://dottorblaster.it/?p=2100
date: '2013-03-30 15:15:26 +0100'
date_gmt: '2013-03-30 14:15:26 +0100'
categories:
- Linux
tags:
- Fedora
- software
comments:
- id: 18299
  author: Federico
  author_email: f.vibrati@gmail.com
  author_url: ''
  date: '2013-04-03 11:49:00 +0200'
  date_gmt: '2013-04-03 10:49:00 +0200'
  content: Quando provo ad installare il pacchetto mi dice che il file non è valido
    =(
- id: 18300
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2013-04-03 12:14:00 +0200'
  date_gmt: '2013-04-03 11:14:00 +0200'
  content: Puoi incollarmi il log? (Magari in un pastebin)
- id: 18625
  author: Milozzy
  author_email: marco.sting@gmail.com
  author_url: ''
  date: '2013-12-11 10:49:00 +0100'
  date_gmt: '2013-12-11 09:49:00 +0100'
  content: Ciao @dottorblaster:disqus ! Il Metodo funziona anche su F19?
---
<p>Come sapete, da qualche tempo <a href="http://dottorblaster.it/2013/01/fedora-recensione-semiseria-pensieri-su-fedora-18/">sto usando Fedora</a> (al momento <strong>Fedora 18</strong>) con GNOME e devo dire che mi trovo, se non molto bene, di sicuro "non male": ovviamente c'è il supporto hardware solito tipico di Linux, e GNOME Shell ha fatto un po' di passi che se non sono da gigante comunque lasciano intravedere la speranza per chi, con le prime release, ha storto il naso (sottoscritto compreso). La mancanza più grande che ho riscontrato sinora però è quella di <strong>gMTP</strong>.</p>
<p>Per chi non sapesse cos'è <strong>MTP</strong>, copincollo <a href="http://it.wikipedia.org/wiki/Media_Transfer_Protocol">da Wikipedia</a>:</p>
<blockquote><p>L' MTP (Media Transfer Protocol) è un <strong>set di estensioni del PTP</strong> (Picture Transfer Protocol) creato da Microsoft, per consentire l'uso di lettori MP3, macchine fotografiche digitali e altri dispositivi digitali portatili. MTP è fortemente legato a Windows Media Player. L'utilizzo di MTP al posto del classico MSC (mass storage class) comporta alcuni vantaggi pratici per gli utenti che utilizzano abitualmente Windows Media Player, ma rende di fatto meno accessibile la periferica rispetto ad un utilizzo col protocollo MSC. Ad esempio: un lettore MP3 che viene visto tramite MSC come una comune chiave di memoria (e quindi anche in Risorse del Computer si comporta come tale) è molto più versatile di un lettore MP3 che utilizza il protocollo MTP e che viene visto dalla gestione delle risorse del computer come dispositivo "Hierarchical", cioè come sotto cartella di risorse del computer. Le sottocartelle poi non portano indicazione sulla data e l'ora di creazione dei file contenuti (molto scomodo se il lettore MP3 è dotato di registratore vocale in quanto si perdono la data e l'ora in cui sono stati registrati i dati; infatti una volta trasferiti sul pc acquisteranno la data e l'ora del momento esatto del trasferimento. Altro difetto sta nel fatto che durante un trasferimento non si deve chiudere la cartella del lettore mp3 dalla quale si stanno prelevando i file altrimenti il trasferimento si interrompe.</p></blockquote>
<p>Ora, piccolo approfondimento, che molti conosceranno già: in cerca di un protocollo migliore per gestire i trasferimenti di file in <strong>Android</strong>, Google ha deciso di utilizzare MTP che è probabilmente (anzi sicuramente) il protocollo "meno peggio" in circolazione riguardo il file transfer tra dispositivi. Il problema è che MTP gode del seguente supporto presso i maggiori sistemi operativi:</p>
<ul>
<li><span style="line-height: 13px;">Windows lo supporta ottimamente (ci credo: è il loro)</span></li>
<li>Mac OS ha bisogno di un frescobuffo che si chiama Android File Transfer - che, per chi non lo sapesse, e si ostinasse a denigrare il software <strong>open source</strong> in ogni sua forma, è una GUI per <strong>libmtp</strong>, progetto aperto. Sucate.</li>
<li>Su Linux, come sopra, abbiamo libmtp che però ha una corolla di interfacce grafiche e a riga di comando notevoli. La mia preferita è gMTP che, pur funzionando (scusate la ruralità dell'espressione) a cazzo, è anche in questo caso la meno peggio. Semplice, efficace, fa il suo mestiere.</li>
</ul>
<p><img class="aligncenter" alt="Package" src="http://farm1.staticflickr.com/251/445691943_72386fe4c9.jpg" width="500" height="375" /></p>
<p>Il problema è che pur essendo nei repository di tutte le distro del mondo, come al solito <strong>Fedora</strong>, sguarnita più di un supermercato il giorno dopo Natale, non ce l'ha. Mi sono quindi ingegnato e editando uno spec che ho preso da <a href="http://dottorblaster.it/2013/01/fedora-recensione-semiseria-pensieri-su-fedora-18/">Fedora Forum</a>, ho creato il mio bel <a href="http://dl.dropbox.com/u/685412/f-pkg/gmtp-1.3.4-2.fc18.src.rpm">pacchetto sorgente</a> con l'ultima versione di gMTP, pronto per compilare su qualsiasi Fedora 18 di questo mondo. Dovrete armarvi di un po' di buon senso, la linea di comando e delle vostre incantevoli dita, dopodiché, come ci dice anche il <a href="http://wiki.centos.org/HowTos/RebuildSRPM">wiki di CentOS</a>:</p>
<p><code>wget http://dl.dropbox.com/u/685412/f-pkg/gmtp-1.3.4-2.fc18.src.rpm<br />
rpm -i gmtp-1.3.4-2.fc18.src.rpm<br />
cd ~/rpmbuild/SPECS<br />
rpmbuild -ba gmtp.spec</code></p>
<p>Dando questi quattro comandi riusciremo a produrre un <strong>RPM di gMTP</strong> perfettamente funzionante, che possiamo installare come vogliamo; io ho usato <strong>rpm da CLI</strong> perché il frontend era andato in sciopero per ragioni a me ignote.</p>
<h3>Note nerd</h3>
<p>Oh, figo <strong>rpmbuild</strong>!</p>
<p>Non avevo mai visto una cosa così caruccetta nei modi e nelle configurazioni. L'unica cosa che gli assomiglia per la mia esperienza è <strong>ABS</strong>, il sistema di port di <strong>Arch Linux</strong>, ma la sintassi degli spec per costruire un RPM è decisamente poco complessa, con header ben definiti e contenuti stra-leggibili. Sembra - azzardo - quasi un <strong>file markdown</strong> più che qualcosa dove vengono istanziate delle variabili. Ne sono rimasto piacevolmente sorpreso, adesso come in altre occasioni. Sicuramente, sia rpmbuild che makepkg sono anni avanti a quello che è (mi scusino i debianisti) il modo di creare un pacchetto DEB, pacchetti per i quali ho buttato il sangue a suo tempo e sui quali ho promesso di non ripetere più l'esperienza traumatica.</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/fweno/445691943/">Fernando Weno</a></em></p>
