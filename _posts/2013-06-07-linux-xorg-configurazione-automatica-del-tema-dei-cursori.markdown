---
layout: post
status: publish
published: true
title: 'Linux, Xorg: configurazione automatica del tema dei cursori'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2151
wordpress_url: http://dottorblaster.it/?p=2151
date: '2013-06-07 23:52:12 +0200'
date_gmt: '2013-06-07 22:52:12 +0200'
categories:
- Linux
tags:
- Ubuntu
- linux
- xorg
comments:
- id: 18379
  author: MeRcUS
  author_email: mercantiandrea@gmail.com
  author_url: ''
  date: '2013-06-08 06:21:00 +0200'
  date_gmt: '2013-06-08 05:21:00 +0200'
  content: Passa a GNOME SHELL, ha sicuramente meno bug KDEschifo! :D
- id: 18380
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2013-06-08 10:25:00 +0200'
  date_gmt: '2013-06-08 09:25:00 +0200'
  content: Ma smettila :D
- id: 18387
  author: aldolat
  author_email: aldolat@gmail.com
  author_url: http://www.aldolat.it/
  date: '2013-06-08 20:27:00 +0200'
  date_gmt: '2013-06-08 19:27:00 +0200'
  content: 'Curiosità: qual è il tema dei cursori che stai usando?'
- id: 18390
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2013-06-09 14:36:00 +0200'
  date_gmt: '2013-06-09 13:36:00 +0200'
  content: DMZ White, semplicemente. Che non viene preinstallato in Kubuntu :P
- id: 18391
  author: aldolat
  author_email: aldolat@gmail.com
  author_url: http://www.aldolat.it/
  date: '2013-06-09 17:39:00 +0200'
  date_gmt: '2013-06-09 16:39:00 +0200'
  content: Grazie! :P
- id: 18406
  author: Luigi
  author_email: nupocuetuttu@gmail.com
  author_url: http://nupocuetuttu.wordpress.com/
  date: '2013-06-16 10:54:00 +0200'
  date_gmt: '2013-06-16 09:54:00 +0200'
  content: anche su unity e ancora prima su gnome 2 c'era e c'è lo stesso problema
---
<p>Da quando è arrivato il mio <strong>computer nuovo</strong> (si, ho comprato un altro giocattolo, e si, vi scasserò quanto prima con una pedissequa descrizione) ho ricominciato ad imbattermi nei problemi più assurdi che riguardano tutte le piccolezze del setup di base di una bella workstation con <strong>Linux</strong>. In particolare una cosa di cui non mi ero mai accorto è sempre stata come sia un fastidio immane dover riconfigurare il tema dei <strong>cursori di sistema</strong>.</p>
<p>Ho dovuto farlo infatti, dato che <strong>KDE</strong> non gestisce molto bene le preferenze dell'utente sui cursori, per cui ogni tanto mostra il tema deciso da noi (me, te, il mio vicino), e ogni tanto invece prende e di sua totale iniziativa mostra il <strong>tema di sistema</strong>. La soluzione è quindi impostare il <strong>tema del cursore</strong> system-wide e quello dell'utente sullo stesso valore, in modo da non dare più occasione a KDE di rovinare la nostra <strong>user experience</strong>.</p>
<p><img class="aligncenter" alt="xorg mouse" src="http://farm3.staticflickr.com/2441/4034348942_2cae61ff32.jpg" width="500" height="333" /></p>
<p>Dato che non mi andava di andare a rovistare in decine di file di configurazione alla ricerca di quello giusto (tantomeno di leggere il <strong>manuale</strong>) ho fatto una ricerchina su Google per questo bel bug e mi sono accorto che <a href="https://bugs.launchpad.net/ubuntu/+source/kde-workspace/+bug/288502">su Launchpad</a> viene consigliata l'esecuzione di <strong>update-alternatives</strong> per questo tipo di task.</p>
<p>Ci basta dare quindi il comando:</p>
<p><code>sudo update-alternatives --config x-cursor-theme</code></p>
<p>Che provvederà a mostrarci un piacevole dialogo numerico a riga di comando dove potremo scegliere il <strong>cursore di default</strong> semplicemente digitando il numero ad esso associato.</p>
<p>Fine dei giochi. Semplice no? Magari se gli sviluppatori di KDE mi evitassero di sbroccare per queste piccolezze. Eh.</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/fonso/4034348942/">fonso</a></em></p>
