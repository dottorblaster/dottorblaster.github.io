---
layout: post
status: publish
published: true
title: Arch e GNOME 2.30, primi pacchetti in [gnome-unstable]
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 636
wordpress_url: http://dottorblaster.it/?p=636
date: '2010-03-31 21:57:12 +0200'
date_gmt: '2010-03-31 20:57:12 +0200'
categories:
- Linux
- Desktop Environment
tags:
- Gnome
- Arch
comments:
- id: 9851
  author: Gianfrix
  author_email: gianfrix.mg@gmail.com
  author_url: http://gianfrixblog.co.cc
  date: '2010-04-01 10:58:21 +0200'
  date_gmt: '2010-04-01 15:58:21 +0200'
  content: Dalle release notes di GNOME 2.30:<br>"L&#39;applicazione per la massaggistica
    istantanea e la comunicazione di GNOME, Empathy, basata sul framework Telepathy,
    ha guadagnato molte importanti caratteristiche per facilitare la comunicazione
    tra gli utenti, tra cui la lettura del pensiero."<br><br>Ma che è, un pesce di
    Aprile? XD
- id: 9852
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2010-04-01 11:26:37 +0200'
  date_gmt: '2010-04-01 16:26:37 +0200'
  content: "É un pò che non aggiorno archlinux, mi deve scaricare 900MiB di roba,
    mi è passala voglia, ora uso Sid in pianta stabile e penso che per ora resterò
    su quella per mancanza di tempo ( e voglia).<br><br>Peccato perchè è un&#39;ottima
    distribuzione, la mia prima pipì fuori dal vasetto apt/dpgk ...<br>:)"
- id: 9853
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-04-01 11:37:53 +0200'
  date_gmt: '2010-04-01 16:37:53 +0200'
  content: Beh io stamattina ho aggiornato circa 2Giga di archivi. Hanno anche cambiato
    il formato di pacchettizzazione, ti consiglio quantomeno di fare pacman -S pacman
    :D
- id: 9854
  author: Ivan!
  author_email: ivan.novembri@gmail.com
  author_url: ''
  date: '2010-04-01 12:32:50 +0200'
  date_gmt: '2010-04-01 17:32:50 +0200'
  content: 'A me tantissimi pacchetti non li aggiorna... a causa di una dipendenza:<br>attenzione:
    impossibile risolvere "glib2&gt;=2.24", una dipendenza di "atk" (vedi pastebin
    in fondo)<br>la mia versione di glib2 è: glib2 2.22.5-1<br><br>Ho provato ad aggiornarla
    ora (sudo pacman -S glib2) ma mi aggiorna sempre la glib2-2.22.5-1 sebbene su
    <a href="http://archlinux.org" rel="nofollow">archlinux.org</a> dia: glib2 2.24.0-1     o.O<br><br>Qui
    il log (non è lungo) di pacman (aggiornamento glib2 e pacman -Syyu) <a href="http://pastebin.com/RdZ7dQub"
    rel="nofollow">http://pastebin.com/RdZ7dQub</a>'
- id: 9855
  author: Ivan!
  author_email: ivan.novembri@gmail.com
  author_url: ''
  date: '2010-04-01 13:40:51 +0200'
  date_gmt: '2010-04-01 18:40:51 +0200'
  content: Ho risolto, ho scaricato il pkgbuild del pacchetto e poi l&#39;ho installato,
    aggiornato tutto :)
- id: 9856
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-04-01 23:10:49 +0200'
  date_gmt: '2010-04-02 04:10:49 +0200'
  content: Sono fiero di te :D
- id: 9859
  author: wesbluemarine
  author_email: wesbluemarine@gmail.com
  author_url: ''
  date: '2010-04-02 17:44:39 +0200'
  date_gmt: '2010-04-02 22:44:39 +0200'
  content: '"Ma nautilus è ancora pachidermoso?" :D:D:D'
- id: 9860
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-04-02 17:52:28 +0200'
  date_gmt: '2010-04-02 22:52:28 +0200'
  content: ROFTL :&#39;D
---
<p>Ormai è da qualche tempo che seguo gli aggiornamenti della serie instabile di <strong>GNOME</strong>, installata prima sul mio <a href="http://dottorblaster.it/2009/12/lacquisto-del-netbook-e-peripezie-seguenti/">netbook</a> e da qualche giorno per un utilizzo assiduo sulla postazione da lavoro; ebbene, dopo aver provato e usato con profitto la versione 2.29 dell'ambiente desktop, ho deciso di aggiornare alla 2.30 senza particolari problemi, dato che i pacchetti stanno entrando pian piano, uno alla volta, nel repository<em> [gnome-unstable] </em>mantenuto dal buon Jan De Groot.</p>
<p style="text-align: center;"><img class="alignnone" src="http://i42.tinypic.com/343q3k5.jpg" alt="" width="514" height="368" /></p>
<p>Che posso dire di questa 2.30? Particolari problemi non ne ho avuti, a parte il non poter più decidere se visualizzare le icone nei menù o no, cosa di cui ho <a href="http://dottorblaster.it/2010/02/gnome-ridammi-le-icone-su/">parlato</a> assiduamente, e il fatto che gnome-panel si ostini ad andarsene crashando per le sue, ogni volta che chiudo una conversazione di <strong>Pidgin</strong>. Cose nuove ce ne sono certo, ma mi riservo di parlarne dopo aver testato un pochino il rilascio stabile, senza fretta.</p>
<p>Installare GNOME dal repository di Jan, dite? Molto semplice, è tutto ospitato sui server ufficiali, quindi basta editare il nostro pacman.conf...</p>
<p><code>sudo nano /etc/pacman.conf</code></p>
<p>... e abilitare l'archivio dei pacchetti aggiungendo le linee:</p>
<p><code>[gnome-unstable]<br />
Include = /etc/pacman.d/mirrorlist</code></p>
<p>A questo punto siamo pronti, un <code>pacman -Syu</code> e saremo aggiornati. Immediato, <strong>veloce</strong> e, soprattutto, <a href="http://dottorblaster.it/2009/10/effettuare-il-passaggio-a-gnome-2-28-in-maniera-indolore/">a differenza</a> dell'altra volta, relativamente <strong>indolore</strong> ;)</p>
