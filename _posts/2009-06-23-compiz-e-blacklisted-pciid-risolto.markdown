---
layout: post
status: publish
published: true
title: Compiz e blacklisted PCIID, come comportarsi
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 392
wordpress_url: http://dottorblaster.it/?p=392
date: '2009-06-23 18:32:57 +0200'
date_gmt: '2009-06-23 17:32:57 +0200'
categories:
- Linux
- Desktop Environment
tags:
- Ubuntu
comments:
- id: 8294
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-06-24 13:30:22 +0200'
  date_gmt: '2009-06-24 18:30:22 +0200'
  content: Se invece di ostinarsi ad usare il wrapper di ubuntu, si usasse Fusion
    icon, di tuto questo neppure si sospetterebbe l&#39;esistenza.<br>Ma-che-ve-lo-di-co-a-fà?
- id: 8295
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-06-24 13:34:25 +0200'
  date_gmt: '2009-06-24 18:34:25 +0200'
  content: Con fusion-icon succede la stessa cosa, la magagna sta nell&#39;eseguibile
    di Compiz che ha dentro di sè anche i pciid blacklistati :)<br>Ciò non toglie
    che Fusion Icon sia il mio metodo gestionale preferito ;)
- id: 8296
  author: teperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-06-24 15:20:28 +0200'
  date_gmt: '2009-06-24 20:20:28 +0200'
  content: No c&#39;è il pacchetto compiz-wrapper che installa lo scritp compiz con
    le "magagne" e rmentre l&#39;eseguibile compiz è compiz.real e li nascono i casini.<br><br>Sempre
    detestato questo sistema.
- id: 8297
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-06-24 16:26:56 +0200'
  date_gmt: '2009-06-24 21:26:56 +0200'
  content: Obbeh, a detestarlo lo detesto anch&#39;io, ma leggi qua<br><a href="http://sanniolug.org/node/106"
    rel="nofollow">http://sanniolug.org/node/106</a><br>Loro hanno risolto in questa
    maniera, mi confermi quindi che è un buggarozzo relativo alla sola Ubuntu?
- id: 8298
  author: teperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-06-24 23:05:42 +0200'
  date_gmt: '2009-06-25 04:05:42 +0200'
  content: Si ti ripeto compiz in ubuntu è uno script con il manager, compiz vero
    (l&#39;eseguibile) è compiz.real.<br><br>Lo script lo apri e lo modifichi come
    ti pare.
- id: 8299
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-06-25 07:41:49 +0200'
  date_gmt: '2009-06-25 12:41:49 +0200'
  content: Pensa te, questa veramente non la sapevo.<br>Ho sempre odiato quel wrapper
    :@<br>Mi sbagliava tutte le impostazioni. Incredibile, la gente passa a Linux
    per il cubo desktop, e negli effetti Aggiuntivi nemmeno l&#39;ombra di costui
    :D
- id: 8301
  author: Santiago
  author_email: keteremillpario@gmail.com
  author_url: http://lajungladelpoder.blogspot.com/
  date: '2009-06-29 16:23:59 +0200'
  date_gmt: '2009-06-29 21:23:59 +0200'
  content: 'ciao, non la sapevo questa. Grazie dell&#39;info.<br>io avevo scoperto
    un altro metodo per farlo in modo più completo, si tratta di uno script che ti
    valuta fa tutti i test per sapere se la tua scheda è supportata, ma nel caso fosse
    in blacklist ti domanda se vuoi toglierla.<br>link: <a href="http://www.uielinux.org/guide-e-tutorial/8-tips-a-tricks/130-compiz-script-risolvo-problemi.html"
    rel="nofollow">http://www.uielinux.org/guide-e-tutorial/8-tips...</a><br>Provalo
    magari e fammi sapere che te pare.<br>Ciao e complimenti per il blog'
---
<p>Giorni fa,è capitato ad uno dei miei migliori amici di aggiornare Compiz sul suo laptop, insieme ad altri pacchetti gentilmente offerti dagli sviluppatori Ubuntu. A quanto pare Compiz viene sviluppato usando un'opzione che permette ai suoi sviluppatori di mettere in blacklist alcune schede video, e non farlo eseguire con le suddette schede, cosicchè non si abbiano problemi di sorta.</p>
<p>Se però di decide di voler soffrire come cani in preda alla follia più acuta, basta una riga nel posto giusto e tutto torna a funzionare magicamente.</p>
<p><code>mkdir -p ~/.config/compiz; echo SKIP_CHECKS=yes &gt;&gt; ~/.config/compiz/compiz-manager</code></p>
<p style="text-align: center;"><img class="alignnone" src="http://i42.tinypic.com/2rxbcjc.jpg" alt="" width="400" height="203" /></p>
<p>Tramite questa riga, impediamo a Compiz, nel momento in cui viene eseguito, di eseguire i suoi controlli di rito, come la presenza di XGL (obsoleto da decenni, mi chiedo perchè lo tengano lì :D) e appunto, la presenza di una scheda video messa in blacklist.</p>
<p>Fatto questo, è molto probabile che il vostro Compiz funzioni e, nell'impeto, cerchi di uccidere il vostro cane, ma l'importante è avere di nuovo tutto funzionante, trasparente e così sexy :lol:</p>
