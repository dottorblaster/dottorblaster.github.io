---
layout: post
status: publish
published: true
title: Ubuntu Extras, per una distro un po' più rolling
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 682
wordpress_url: http://dottorblaster.it/?p=682
date: '2010-06-29 09:51:20 +0200'
date_gmt: '2010-06-29 08:51:20 +0200'
categories:
- Linux
tags:
- Ubuntu
comments:
- id: 11021
  author: TheKaspa
  author_email: thekaspa@gmail.com
  author_url: http://blog.thekaspa.it
  date: '2010-06-29 09:29:10 +0200'
  date_gmt: '2010-06-29 14:29:10 +0200'
  content: Alleluja!
- id: 11022
  author: Alberto Zoani
  author_email: None
  author_url: http://twitter.com/MuD_aDDiCTeD
  date: '2010-06-29 10:38:00 +0200'
  date_gmt: '2010-06-29 15:38:00 +0200'
  content: Si, ma un ignorante come me non ha capito nulla di quel che stai dicendo..
    :(
- id: 11023
  author: Andrea Azzini
  author_email: None
  author_url: http://twitter.com/AndreaAzzini
  date: '2010-06-29 11:17:05 +0200'
  date_gmt: '2010-06-29 16:17:05 +0200'
  content: se funzionerà, sarà fantastico! Finalmente potrò pensare di reinstallare
    ubuntu!
- id: 11026
  author: Picchio
  author_email: None
  author_url: http://twitter.com/Picchiopc
  date: '2010-06-29 13:36:13 +0200'
  date_gmt: '2010-06-29 18:36:13 +0200'
  content: La cosa mi aggrada, anche per me decippiù :D
- id: 11028
  author: fj93
  author_email: dallamarco93@gmail.com
  author_url: ''
  date: '2010-06-29 18:47:10 +0200'
  date_gmt: '2010-06-29 23:47:10 +0200'
  content: ma da quello che ho capito non sarà per niente rolling, semplicemente le
    nuove applicazioni che non sono gia nei repo verranno inseriti qui.... ma non
    gli aggiornamenti
- id: 11029
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2010-06-29 20:41:45 +0200'
  date_gmt: '2010-06-30 01:41:45 +0200'
  content: Infatti qui<br><a href="http://www.oneopensource.it/29/06/2010/ubuntu-non-e-e-non-sara-una-distribuzione-rolling-release/"
    rel="nofollow">http://www.oneopensource.it/29/06/2010/ubuntu-n...</a><br>si dice
    il contrario.<br><br>Confusion?<br>Manca solo il vuvuzela repository ...<br>:D
- id: 11031
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-06-30 20:45:55 +0200'
  date_gmt: '2010-07-01 01:45:55 +0200'
  content: Poveri noi Canonical ha smentito. E secondo me hanno perso una buona occasione.
- id: 11032
  author: fj93
  author_email: dallamarco93@gmail.com
  author_url: ''
  date: '2010-07-02 08:39:49 +0200'
  date_gmt: '2010-07-02 13:39:49 +0200'
  content: poveri noi?<br>Piuttosto.. poveri ubuntiani ;) gli arcieri non hanno questi
    problemi ;)<br>(vabbè io dovrei proprio stare zitto che in questo momento sto
    usando mac, ma solitamente uso arch anche io xP)
---
<p>Ebbene si, un po' quello che abbiamo sognato tutti no? D'altronde è da un po', esattamente da quando ho provato <strong>Debian </strong>Sid ma soprattutto<strong> Arch Linux</strong>, che andavo in giro a proclamare il verbo: <em>più rolling per tutti</em>. Anche se ovviamente Ubuntu, con tutta la serietà che ha messo su, non può portare il rolling agli utenti, perchè ovviamente non ha la possibilità, essendo una distro che punta alto e di ben altri principi, di prendersi un attimo di pausa e <strong>sfornare</strong> un pacchetto malnato. Nonnò, non si può. Così Mark "cosa ti invento sul momento" Shuttleworth e i suoi picciotti ci portano una nuova idea, che nemmeno ai tizi di Fedora era mai passata per la testa: lasciare il sistema base e tutto ciò che costituisce una parte fondamentale dell'ambiente desktop da parte, sicuri, testati lì, e aggiornare in un repository a parte tutta la pletora di software che, diciamocelo, dopo sei mesi, <strong>puzzano</strong> di vecchio.</p>
<p style="text-align: center;"><img class="alignnone" src="http://i45.tinypic.com/2q89fz6.png" alt="" width="450" height="450" /></p>
<p>È un ideale che ho sempre portato avanti: un ciclo semestrale per tutti i pacchetti è un'operazione che non solo richiede un grosso rebuild ogni sei mesi, ma fa rimanere <em>scoperti</em>, se così si può dire, gli utenti da aggiornamenti che magari includono caratteristiche realmente degne di nota; ovviamente a ciò è stato tentato di porre rimedio, infatti negli anni la comunità ci ha, come si suol dire, <em>messo una pezza</em>. I software aggiornati sono stati inseriti in repository di terze parti, e Canonical da una parte scioccamente, dall'altra furbescamente, ha incentivato questo comportamento, finchè non si è arrivati a dei livelli inaccettabili: non è possibile che per avere un <strong>major update di Firefox o Thunderbird</strong> si debbano aspettare mesi. È così che extras.ubuntu.com fa la sua comparsa sulla scena, per rendere Ubuntu una distribuzione, seppur non bleedin' edge, comunque aggiornata almeno per quel che riguarda i programmi di più alto livello.</p>
<p>In questa maniera infatti verranno aggiornate solo le applicazioni, mentre il sistema operativo di base rimarrà quello, assieme a tutto l'humus di pacchetti che non interessano all'utente. Speriamo che questo repository venga usato con criterio dunque, e <strong>Canonical</strong> non abbia febbre da update e comportamenti irresponsabili nei confronti di un bacino di utenza che ormai, quello che ha nel gestore di aggiornamenti, lo prende come <strong>oro colato</strong> e non vuole assolutamente problemi.</p>
<p>Bravi bravi, <em>diecippiù</em>.</p>
