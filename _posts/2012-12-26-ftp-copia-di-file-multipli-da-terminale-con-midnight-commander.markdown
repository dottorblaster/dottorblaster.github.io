---
layout: post
status: publish
published: true
title: FTP e copia di file multipli da terminale con Midnight Commander
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1972
wordpress_url: http://dottorblaster.it/?p=1972
date: '2012-12-26 18:23:33 +0100'
date_gmt: '2012-12-26 17:23:33 +0100'
categories:
- Linux
tags:
- midnight commander
- cli
- ftp
comments:
- id: 18091
  author: koalalorenzo
  author_email: koalalorenzo@siderus.org
  author_url: http://blog.setale.me/
  date: '2012-12-26 18:57:00 +0100'
  date_gmt: '2012-12-26 17:57:00 +0100'
  content: "Questo è il genere di post che mi piace! :D \nMi fa tornare a quando digitavamo
    su linux-cafe su IRC! :')"
- id: 18092
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-12-26 18:59:00 +0100'
  date_gmt: '2012-12-26 17:59:00 +0100'
  content: Bei tempi. ;)
- id: 18093
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2012-12-26 23:52:00 +0100'
  date_gmt: '2012-12-26 22:52:00 +0100'
  content: |-
    Mi stavo in effetti chiedendo perché mai lo stessi facendo da console, poi sono arrivato qui:

    <blockquote>Consiglio particolarmente l’uso di Midnight Commander per copiare file da una macchina all’altra usando la CLI, in combinazione con GNU screen, che ci consente di fare “detach” e chiudere la consolle senza che il processo di Midnight Commander si interrompa</blockquote>


    E tutto è stato chiaro nell'universo. :P
- id: 18094
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-12-27 00:57:00 +0100'
  date_gmt: '2012-12-26 23:57:00 +0100'
  content: |-
    Heheh ;)
    Non mi andava di usare ftp a mano, volevo qualcosa con un minimo di GUI :D
- id: 18096
  author: MeRcUS
  author_email: mercantiandrea@gmail.com
  author_url: ''
  date: '2012-12-27 11:33:00 +0100'
  date_gmt: '2012-12-27 10:33:00 +0100'
  content: Figo, non lo conoscevo. Grazie dell'howto veloce! ;)
- id: 18097
  author: MeRcUS
  author_email: mercantiandrea@gmail.com
  author_url: ''
  date: '2012-12-27 11:35:00 +0100'
  date_gmt: '2012-12-27 10:35:00 +0100'
  content: come si fa il detach?
- id: 18098
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-12-27 11:41:00 +0100'
  date_gmt: '2012-12-27 10:41:00 +0100'
  content: ";)"
- id: 18099
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-12-27 11:41:00 +0100'
  date_gmt: '2012-12-27 10:41:00 +0100'
  content: |-
    ctrl+a d su screen :)
    Poi per fare reattach basta dare screen -r. :)
- id: 18103
  author: MeRcUS
  author_email: mercantiandrea@gmail.com
  author_url: ''
  date: '2012-12-27 12:02:00 +0100'
  date_gmt: '2012-12-27 11:02:00 +0100'
  content: ah sisi, screen lo conosco!
---
<p>Proprio oggi mi serviva mettere a copiare dei file da un server remoto al mio muletto di casa, così ho scartabellato un po' greppando l'internet alla ricerca di un client <strong>FTP</strong> da terminale con una GUI recente. Dopo un po', greppa che ti greppa, ho ricordato che <strong>Midnight Commander</strong> ha una simpatica interfaccia ncurses e supporta sia FTP che SFTP (cioè FTP over <strong>SSH</strong>) integrandone le funzionalità. Mi sono ripassato quindi un po' di manualistica sull'interfaccia di <strong>Midnight Commander</strong>, che per un novellino può essere leggermente complicata, quindi ho cominciato subito a cercare.</p>
<p>Per connetterci via <strong>FTP</strong> ad un host remoto dobbiamo andare nel menù del pannello di destra o di sinistra (accedendo alla <strong>menubar con F9</strong>), a piacere, e dobbiamo selezionare "Connessione FTP". Successivamente, dobbiamo dare in pasto a Midnight Commander le nostre credenziali nel formato seguente:</p>
<blockquote><p><code>ftp://user@indirizzo-ip:porta</code></p></blockquote>
<p>E aspettare, dando conferma, che ci venga chiesta la password. Per <strong>copiare file multipli</strong> basta premere CTRL-t dentro una directory per cominciare a selezionare il materiale che vogliamo copiare. Una volta terminata la sezione, dal menù File scegliamo Copia - la cui location sarà di default la directory esplorata dall'altro pannello.</p>
<p><img class="aligncenter" alt="Midnight Commander" src="http://i45.tinypic.com/330r8mo.png" width="511" height="331" /></p>
<p>Una volta finito il tutto, voilà: diamo un Ok, e immediatamente il processo di <strong>FTP</strong> o SFTP comincerà a copiare i file mostrandoci l'avanzamento tramite una <strong>progressbar</strong>. Consiglio particolarmente l'uso di <strong>Midnight Commander</strong> per copiare file da una macchina all'altra usando la <strong>CLI</strong>, in combinazione con <a href="http://www.gnu.org/software/screen/manual/screen.html">GNU screen</a>, che ci consente di fare "detach" e chiudere la consolle senza che il processo di Midnight Commander si interrompa. In questo modo potremo lasciare che le due macchine remote (come nel mio caso) sbrighino i propri compiti mentre noi in locale - ad esempio - mandiamo in sospensione il nostro PC, e ce ne andiamo a farci una bella mangiata dal <strong>kebabbaro</strong> qua di fianco.</p>
