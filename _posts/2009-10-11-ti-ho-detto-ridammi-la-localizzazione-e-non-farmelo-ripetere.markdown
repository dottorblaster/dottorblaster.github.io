---
layout: post
status: publish
published: true
title: Ti ho detto ridammi la localizzazione. E non farmelo ripetere.
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 504
wordpress_url: http://dottorblaster.it/?p=504
date: '2009-10-11 08:30:31 +0200'
date_gmt: '2009-10-11 07:30:31 +0200'
categories:
- Linux
- Desktop Environment
tags:
- Gnome
- Arch
comments:
- id: 9062
  author: simo
  author_email: simo91.linux@gmail.com
  author_url: http://simo91.wordpress.com/
  date: '2009-10-11 14:18:48 +0200'
  date_gmt: '2009-10-11 19:18:48 +0200'
  content: alla faccia della semplicità (ma dove?) di gnome!
- id: 9063
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2009-10-11 14:20:32 +0200'
  date_gmt: '2009-10-11 19:20:32 +0200'
  content: che schifezza !
- id: 9065
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-10-11 20:48:57 +0200'
  date_gmt: '2009-10-12 01:48:57 +0200'
  content: più che altro qui c&#39;entra la facilità d&#39;uso e il troppo affidarsi
    ai sistemi "automagici" esterni.
- id: 9066
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-10-11 20:49:13 +0200'
  date_gmt: '2009-10-12 01:49:13 +0200'
  content: già :/
- id: 9067
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2009-10-11 22:46:00 +0200'
  date_gmt: '2009-10-12 03:46:00 +0200'
  content: Quindi se uno per caso ha una tastiera "tetesca", perchè per "ezembio"
    ha compate bordadile in chrucchia, si drofa con gh-nnome tutto i tetesco?<br>Wunderbar!!!!<br><br>LOL<br>Zarè
    grossen inzetten di gh-nome ...<br><br>Zempre pegghio. Ach!!!!
- id: 9068
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-10-11 23:33:24 +0200'
  date_gmt: '2009-10-12 04:33:24 +0200'
  content: ma che, no, è solo che il settaggio predefinito è USA. 0_o
- id: 9107
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2009-10-13 23:17:24 +0200'
  date_gmt: '2009-10-14 04:17:24 +0200'
  content: 'quindi riassumendo (ci sono cascato anche io proprio poco fa)<br>- una
    localizzazione di sistema <br>- una localizzazione di xorg <br>- una localizzazione
    di gdm<br>- una localizzazione di gnome<br>quella che "comanda" in ambiente grafico
    gnome è quella impostata dal GDM, mentre KDE funziona per stracacchi suoi. Quello
    che non si capisce è perchè devo impostare 4 (quattro!) volte la stessa cosa.
    Non basta la system-wide e poi tutto viene letto da li ? bah.<br>Qualcuno in alto
    ha detto, recentemente "non sapremmo come guadagnarci" (parlando di desktop linux,
    ovviamente) ... certo che se per scrivere ù à ò è @ e quant&#39;altro devo sciorparmi
    queste manie compulsive di programmatori che non si mettono d&#39;accordo questo
    qualcuno ha ragione da vendere. ribadisco: che schifo !'
- id: 9108
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-10-13 23:22:34 +0200'
  date_gmt: '2009-10-14 04:22:34 +0200'
  content: si, è quello che proponevo io nel post. Ma perchè non andava bene la localizzazione
    di Xorg/HAL? Mah.
- id: 9109
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2009-10-14 14:26:53 +0200'
  date_gmt: '2009-10-14 19:26:53 +0200'
  content: sono talmente soddisfatto di GDM 2.28 che il mio sistema ha subito un bel<br>pacman
    -Rd gdm<br>yaourt -S gdm<br><br>con aggiunta di<br>IgnorePkg = gdm<br>a pacman.conf<br><br>:D
- id: 9112
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-10-14 15:52:21 +0200'
  date_gmt: '2009-10-14 20:52:21 +0200'
  content: LOL :D
---
<p>Pochi giorni fa, ho scritto giustappunto di GNOME e del suo ostinarsi a mettermi i bastoni tra le ruote quando decidevo di far funzionare i dispositivi di input alla mia maniera. L'ultima peripezia l'ho avuta pochi giorni fa quando misticamente il mio desktop environment preferito ha smesso di scrivere con la localizzazione italiana. :|</p>
<p>"Strano" mi sono detto "l'ho impostata e ci ho pure fatto su un post". Ho indagato. Ormai il dialogo delle localizzazioni della tastiera è cosa mia, quindi sono andato a cercarmi qualche opzione strana; poi all'improvviso noto che avevo solo la voce USA, l'altra impostata da me sembrava sparita.</p>
<p style="text-align: center;"><img class="alignnone" src="http://i34.tinypic.com/2d6jfop.jpg" alt="" width="348" height="251" /></p>
<p>Ma WTF?<br />
Allora sono corso a reimpostare tutto. E funzionava. Al riavvio, stessa cosa. E ancora.</p>
<p>Maledetto gnomo, non voleva proprio memorizzare le impostazioni decise da me; poi improvvisamente il flash. GDM 2.28 fa tante belle cose di default, ma soprattutto imposta la localizzazione della tastiera di suo, senza stare a ricorrere a dialoghi strambi e impostazioni stralunate. Mi è bastato impostare la tastiera italiana da lì, e tutto a cominciato a funzionare a meraviglia: niente reset delle impostazioni al reboot.</p>
<p>Secondo me la cosa dovrebbe essere impostata in modo che GDM legga il GConf dell'utente specificato, e ne imposti la localizzazione secondo le preferenze decise a priori dal dialogo proposto dall'ambiente; ma vabeh, non siamo tutti perfetti, e la legge di Murphy deve sempre entrarci.</p>
<p>È per questo che scrivo, o no? :P</p>
