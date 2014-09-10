---
layout: post
status: publish
published: true
title: 'SSH con Android: vediamolo insieme'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 996
wordpress_url: http://dottorblaster.it/?p=996
date: '2011-09-02 20:04:58 +0200'
date_gmt: '2011-09-02 19:04:58 +0200'
categories:
- Android
tags: []
comments:
- id: 16338
  author: ''
  author_email: marcopaolone@gmail.com
  author_url: ''
  date: '2011-09-02 19:23:00 +0200'
  date_gmt: '2011-09-02 19:23:00 +0200'
  content: |-
    shepherd @ herd  ~ $ ssh root@192.168.0.101

    (Dopo questa, mi ritiro in eremitaggio.)
- id: 16339
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-09-02 19:26:00 +0200'
  date_gmt: '2011-09-02 19:26:00 +0200'
  content: Ehi anch'io oggi avevo *.101 in fase di test :D
- id: 16340
  author: ''
  author_email: marcopaolone@gmail.com
  author_url: ''
  date: '2011-09-02 19:27:00 +0200'
  date_gmt: '2011-09-02 19:27:00 +0200'
  content: Quando si dice il caso :D
- id: 16342
  author: M0rF3uS
  author_email: morfeus@ilportalinux.it
  author_url: ''
  date: '2011-09-05 15:19:00 +0200'
  date_gmt: '2011-09-05 15:19:00 +0200'
  content: L'utilità di avere un server ssh sul telefono che gira? Lo chiedo per curiosità
- id: 16343
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-09-05 16:02:00 +0200'
  date_gmt: '2011-09-05 16:02:00 +0200'
  content: |-
    Prima cosa, per il nerdgasm.
    Seconda cosa, per usare la shell dal PC e non scassarsi le mani con il tastierino minuscolo touch. :D
- id: 16344
  author: M0rF3uS
  author_email: morfeus@ilportalinux.it
  author_url: ''
  date: '2011-09-06 15:14:00 +0200'
  date_gmt: '2011-09-06 15:14:00 +0200'
  content: Ma esiste adb per quello :/
- id: 16345
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-09-06 21:46:00 +0200'
  date_gmt: '2011-09-06 21:46:00 +0200'
  content: Non se hai il telefono sul comodino e ti pesano i glutei. :D
- id: 16431
  author: Erik Satta
  author_email: arkindal@gmail.com
  author_url: ''
  date: '2011-10-07 14:25:00 +0200'
  date_gmt: '2011-10-07 13:25:00 +0200'
  content: Sono lo slowpoke di turno ma non vedo l'ora di provarlo quando passo a
    fastweb anche per la telefonia mobile :P
---
<p>E mentre Steve Jobs si dimette dal ruolo di CEO di Apple, <strong>Android</strong> continua ad andare fortissimo, prima di tutto in quanto a marketshare, e poi nel mio cuore perchè, che diamine, è pur sempre <strong>Linux</strong>. Stavolta quindi vi faccio vedere un paio di trucchi carini su come sfruttare il nostro super robottino mentre siamo in movimento per svolgere task su macchine remote, o meglio ancora, iniziare a paciugare sul nostro terminale da remoto, magari dalla nostra workstation, semplicemente perchè non abbiamo voglia di alzarci.</p>
<p>Ovviamente, un piccolo disclaimer iniziale: oltre a non essere responsabile se rompete il vaso cinese di vostra nonna con un <strong>SSH</strong> sulla porta sbagliata (o sull'IP sbagliato), le applicazioni che elencherò e le piccole procedure che andrò a spiegare richiedono root. Non obbligatorio eh, ma certo vi sarete accorti che soprattutto con la <strong>Bash</strong> presente sul vostro piccolo linuxfonino, senza permessi di amministratore potete fare ben poco.</p>
<h3>Android → Unix</h3>
<p>Per la parte Android to Unix, o in generale qualsiasi macchina che abbia installata una <strong>Secure SHell</strong>, parte che si rivela la più semplice, basta un'applicazione che andiamo a reperire sul Market, di nome <strong><a href="https://market.android.com/details?id=org.connectbot">ConnectBot</a></strong>. Tramite ConnectBot possiamo tranquillamente collegarci al nostro computer in SSH, inserendo gli opportuni parametri in fase di configurazione, molto breve, del programma. Un paio di passaggi, e se l'installazione di OpenSSH che abbiamo funziona decentemente saremo subito dentro. Ci sono un po' di barbatrucchi da studiare, come i metodi per intimare dei keyboard interrupt su una QWERTY a schermo che non è dotata di CTRL, ma tutto si fa e a tutto c'è rimedio. Basta aprire il comodo foglietto illustrativo che è possibile invocare dal menù.</p>
<h3>Android ← Unix</h3>
<p>Per quanto riguarda la parte inversa, ossia agire dalla macchina sul terminale Android, c'è una pratica applicazione che possiamo scaricare, chiamata <strong><a href="https://market.android.com/details?id=berserker.android.apps.sshdroid&amp;feature=search_result">SSHDroid</a></strong>. Normalmente non richiede root, e non ho avuto modo di testarla con dei privilegi ristretti, ma quello che consiglio è di eseguire comunque il rooting del device prima di usarla, non per altro, ma perchè sicuramente facendola girare sotto root si acquisiscono maggiori privilegi sul sistema. Le indicazioni sono tutte contenute nell'applicazione: c'è anche la possibilità di eseguire il <strong>pairing GPG</strong>, di impostare una password per l'autenticazione diversa da quella ridicola di default ("admin", tanto per cambiare), e di fare un sacco di altre cose interessanti, di quelle che si fanno di solito in fase di configurazione di un server SSH insomma.</p>
<p>Una volta preparato il tutto, vi basta connettervi in SSH usando <strong>root@ip-del-device</strong>, come dice anche l'app stessa, e siete dentro, a posto. Se invece volete provare qualcosa di esotico e vi trovare <em>per caso</em> un terminale con una <strong>CyanogenMod</strong> installata, potete attivare il server SSH integrato nella ROM seguendo <strong><a href="http://wiki.cyanogenmod.com/wiki/Howto:_Connect_to_Device_with_SSH">questo pratico tutorial</a></strong> sul wiki ufficiale. Non lo consiglio dato che comunque SSHDroid è una scelta più immediata, ma sicuramente può essere interessante, nonchè integrata in maniera migliore come soluzione.</p>
<p>Bene. Mi aspetto che dopo questo articolo, tutti voi andiate a ravanare in SSH sui vostri androidi per fargli sognare tante pecore elettriche. :D</p>
