---
layout: post
status: publish
published: true
title: Kernel, divinità, e pastiere napoletane
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1226
wordpress_url: http://dottorblaster.it/?p=1226
date: '2012-04-16 21:10:51 +0200'
date_gmt: '2012-04-16 20:10:51 +0200'
categories:
- Linux
tags: []
comments:
- id: 17358
  author: Davide Fabbri
  author_email: abbio11@gmail.com
  author_url: ''
  date: '2012-04-17 08:41:00 +0200'
  date_gmt: '2012-04-17 07:41:00 +0200'
  content: |
    Vero... Ho ricompilato il kernel 3-4 anni fa, andava, ero contento e l'aggiornamento successivo avevo già il kernel original (ovvero quello distribuito), ora non saprei nemmeno dove ricominciare per ricompilare il kernel, anzi sì ovvero cercarmi una guida!

    Il brutto è che c'è ancora oggi gente che pensa che per usare Linux bisogna sapersi ricompilare il kernel....
- id: 17360
  author: Saro
  author_email: theshade14@gmail.com
  author_url: ''
  date: '2012-04-17 12:20:00 +0200'
  date_gmt: '2012-04-17 11:20:00 +0200'
  content: " Magari per sapere utilizzare Linux no.. ma per sapere cos'è Linux si
    :)"
- id: 17361
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2012-04-17 13:47:00 +0200'
  date_gmt: '2012-04-17 12:47:00 +0200'
  content: |
    Compilare un kernel richiede, nel mio caso, circa 2 minuti scarico sorgenti + patch da kernel.org, circa 30 secondi per configurare ottimizzazioni cpu e timer e  poco altro, e circa 15 minuti di lavoro del pc (non lavoro mio) che mi produce due pacchetti, image e headersm che installo in 20 secondi.
    Questo mi garantisce
    - kernel vanilla senza patch più o meno "dubbie" di mantainer vari (se le PATCH sono cosi buone finirebbero in main no?!)
    - completo controllo del kernel nel pc evitando aggiornamenti "fantasiosi" delle distro a volte causa di blocchi di qualche periferica.
    Un paio di minuti una volta al mese di lavoro, non mi sembra un prezzo troppo alto.
    Altrimenti mi compravo un MAC o usavo Win ...
- id: 17362
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-04-17 13:52:00 +0200'
  date_gmt: '2012-04-17 12:52:00 +0200'
  content: A proposito, tu che sei assiduo compilatore e giustappunto dici queste
    cose, la produzione degli header in kernel-package di Debian è aggiustata, si?
- id: 17365
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2012-04-17 22:41:00 +0200'
  date_gmt: '2012-04-17 21:41:00 +0200'
  content: " si con la versione 12.036+nmu2 è a posto \nComunque prima \"aggiustare\"
    il pacchetto headers era una fesseria bastava aggiugere la cartella arch/x86/include/
    dal src che non veniva inserita.\nDimenticavo ...\nbuonissima la Pastiera"
- id: 17366
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2012-04-17 22:45:00 +0200'
  date_gmt: '2012-04-17 21:45:00 +0200'
  content: |
     preciso,
     si con la versione 12.036+nmu2 è a posto fino ai 3.2 il 3.3 ancora non l'ho compilato e NON SO se i  mattacchione dev del kernel hanno per l'ennesima volta spostato qualche minquitata.
    Sai che ci tengono molto a giocare con ste cose per rompere il quazzo a chi sviluppa tool e driver closed.
    Soòòò ragazzzziiiiii ....
- id: 17369
  author: Teolinux
  author_email: teolinux@hotmail.com
  author_url: ''
  date: '2012-04-18 18:11:00 +0200'
  date_gmt: '2012-04-18 17:11:00 +0200'
  content: Non si ricompila il kernel perchè ci serve, ma perchè "si può fare"  ;)))
---
<blockquote>Certo, <strong>non è una passeggiata</strong>. Se non si ha un animo smanettone è meglio lasciare perdere. Non perché sia impossibile, ma perché a conti fatti <strong>non cambia l'esperienza utente</strong>.</p></blockquote>
<p><a href="http://www.vencizon.co.vu/2012/04/how-to-compiliamo-il-nostro-kernel.html">Questo post di Vincenzo</a> mi ha colpito molto, non solo perché non è la solita sequenza fritta e rifritta di comandi, ma soprattutto perché dice una verità immensa, cioè che ricompilare il kernel <strong>Linux</strong> ad un utente medio (ma anche medio-alto) non serve assolutamente a niente, a meno che non ci siano moduli che per qualche strano motivo non vengono inclusi nella distribuzioni standard.</p>
<p>Tutta didattica e poca altra roba quindi. Poi oh, ha usato una <a href="http://dottorblaster.it/2008/04/compilare-il-kernel-alla-debian/">mia guida</a> linkandola e ringraziandomi. Io però ho deciso che mi preparerà <strong>una pastiera</strong> di sua mano, dato che, si sa, <em>verba volant, pastierae manent</em>.</p>
