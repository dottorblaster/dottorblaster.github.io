---
layout: post
status: publish
published: true
title: 'Linux, Xorg e i driver Intel: forse siamo giunti a una conclusione'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 481
wordpress_url: http://dottorblaster.it/?p=481
date: '2009-09-22 11:35:22 +0200'
date_gmt: '2009-09-22 10:35:22 +0200'
categories:
- Linux
- Tech
tags:
- Informatica
comments:
- id: 8869
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-09-22 13:33:23 +0200'
  date_gmt: '2009-09-22 18:33:23 +0200'
  content: Mah tutta sta fatica per cavar sangue dalle rape .. <br><br>Se vuoi "una
    scheda video" certo non usi un "adattatore grafico Intel", <br>le schede più sgrause
    del globo. <br>Se le usi per quel che sono, cioè dei cassonetti non differenziati
    per il 2d, anche il driver vesa va più che bene.<br>E diciamolo una volta per
    tutte, basta con le lodi a ste schifezza di schede video Intel.<br><br>Tutti in
    coro:<br>Paga la multa ... o intel paga la multa ... paga la muuulta ...o intel
    paga la multa!<br><br>LOL
- id: 8870
  author: csavi
  author_email: marcosiviero.mobile@gmail.com
  author_url: ''
  date: '2009-09-22 13:55:48 +0200'
  date_gmt: '2009-09-22 18:55:48 +0200'
  content: Bene, già ora non trovo malaccio i driver intel non legacy, chissà questi
    che sono stati migliorati... magari li provo anche io!<br>Per ciò che riguarda
    il kms invece devo dire che rimango un po&#39; scettico sulle sue prestazioni;
    se non erro dovrebbe impostare la virtual console alla massima risoluzione supportata
    dalla macchina, e fare in modo che la transizione tra console e gdm/serverx/quelcheusate
    sia fluida e senza "spegnimenti" del monitor.<br>Purtroppo sul mio eeepc 900 non
    è così, anzi, con il kms ho 2/3 spegnimenti del monitor durante il processo di
    boot, quando disabilitando kms ne ho uno solo. Tutto questo causa un rallentamento
    al boot di un paio di secondi, purtroppo.<br>(tutte impressioni relative al kernel
    2.6.29, da allora non ho più provato la sensazione di avere una console ad alta
    risoluzione grazie a kms)
- id: 8883
  author: Shiba
  author_email: shibotto@gmail.com
  author_url: http://shiba89.wordpress.com/
  date: '2009-09-22 20:30:52 +0200'
  date_gmt: '2009-09-23 01:30:52 +0200'
  content: Nuuuuuuuu a risoluzioni basse si riesce pure a giocare a tremulous :)
- id: 8885
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-09-22 21:28:35 +0200'
  date_gmt: '2009-09-23 02:28:35 +0200'
  content: Io il KMS non l&#39;ho abilitato.<br>Per quanto riguarda questi driver,
    sono veramente fatti bene, da provare :)
- id: 8886
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-09-22 21:29:30 +0200'
  date_gmt: '2009-09-23 02:29:30 +0200'
  content: Prossimamente su questi schermi il "comodinoshot" con delle cose che credo
    ti piaceranno.
- id: 8887
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-09-22 21:37:02 +0200'
  date_gmt: '2009-09-23 02:37:02 +0200'
  content: Urban Terror FTW :D
- id: 8891
  author: M0rF3uS
  author_email: morfeus@ilportalinux.it
  author_url: http://www.ilportalinux.it
  date: '2009-09-23 08:57:05 +0200'
  date_gmt: '2009-09-23 13:57:05 +0200'
  content: mi allego ai cori da stadio...<br><br>n-vi-dia...n-vi-dia...n-vi-dia....
- id: 8895
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-09-23 12:32:33 +0200'
  date_gmt: '2009-09-23 17:32:33 +0200'
  content: A parte gli scherzi, purtroppo sui notebooh (è li il vero problema) ti
    ritrovi le schede video intel per mantenere il prezzo finale basso, grazie alle
    politiche commerciali di Intel che offre cpu+chipset con grafica integrata a prezzi
    "vantaggiosi" rispetto a cpu + chipset IG nvidia o ati, con evidente danno del
    consumatore che si trova un divario di 100€ tra i due prodotti, mentre su desktop
    una buona scheda video che va 10 volte una intel, costa 30€.<br>E il bello che
    spesso nei forum si consiglia INTEL come scheda video ...<br>Tafazzi docet, vai
    a martellarsi gli zebedei ...<br>Penitenziagite, presto in bundle con intel, il
    cilicio.<br>LOL
---
<p>È risaputo, adoro compilare e installare sulle mie Linux Box software instabile per divertirmi a vederne giorno per giorno le evoluzioni e gli eventuali passi in avanti, prima che tutto venga congelato nella release stabile. Mi sono sempre scelto distribuzioni che mi permettessero di seguire con calma, senza scapicollarmi, lo sviluppo del mainstream senza pregiudicarmi un uso della mia Box tranquillo.</p>
<p>In ogni caso, digressioni smelense e sentimentali a parte, sono ormai mesi che seguo lo sviluppo dei driver video Intel dal ramo di sviluppo GIT. Ciò che mi ha spinto a farlo è stato innanzi tutto il mio voler divertirmi ancora una volta a veder crescere un progetto che giorno dopo giorno fa grossi passi in avanti, e, per dirla tutta, ho voluto seguire da vicino i fatti riguardanti questo driver perchè dalla versione 2.7 è stato levato il supporto ad EXA, ed il supporto a UXA, nuovo metodo di accelerazione video, non era ancora completamente maturo. Ho verificato quindi che gli sviluppatori andassero a parare nella direzione sperata.</p>
<p style="text-align: center;"><img class="alignnone" src="http://i36.tinypic.com/fe0x74.jpg" alt="" width="577" height="372" /></p>
<p>Ebbene, ho ottime notizie per chi si interessa delle prestazioni della sua povera scheda video che avevano subito un calo dopo il drop di EXA da parte degli sviluppatori: in questi ultimi giorni nel GIT si sta muovendo parecchio codice, i commit sono frequenti, i miglioramenti si vedono attimo dopo attimo.</p>
<p>Non è ancora l'ora, ma posso affermare che la prossima release dei driver xf86-video-intel, sarà una release che si avvicinerà, in quanto a prestazioni, a quelle ottenute con EXA e i driver ormai legacy. Non oso immaginare con il nuovo Xorg e il Kernel Mode Setting abilitato cosa possa venire fuori :P</p>
