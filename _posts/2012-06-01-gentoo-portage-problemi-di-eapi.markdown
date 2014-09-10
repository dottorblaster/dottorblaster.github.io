---
layout: post
status: publish
published: true
title: 'Gentoo: Portage e problemi di EAPI'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1327
wordpress_url: http://dottorblaster.it/?p=1327
date: '2012-06-01 20:51:46 +0200'
date_gmt: '2012-06-01 19:51:46 +0200'
categories:
- Linux
tags:
- Gentoo
- linux
- gentoo
- portage
- eapi
comments:
- id: 17540
  author: Gianfranco Micoli
  author_email: ''
  author_url: http://www.facebook.com/gianfrix
  date: '2012-06-01 22:02:00 +0200'
  date_gmt: '2012-06-01 21:02:00 +0200'
  content: |-
    ...un numero molto elevato di pacchetti vicino alla cifra “tutti”...

    I lol'd
- id: 17541
  author: Francesco Del Prete
  author_email: italyanker@gmail.com
  author_url: http://profiles.google.com/italyanker
  date: '2012-06-02 01:43:00 +0200'
  date_gmt: '2012-06-02 00:43:00 +0200'
  content: |-
    Wow! O.o
    Comunque non è un figlio...
    Bensì un pupo stormtrooper che tiene in mano un lego stromtrooper...
    L'ho notato guardando le gambe del piccoletto...E siccome si sembrava improbabile che esistesse una roba del genere a grandezza 1/4 d'uomo ho ritenuto che anche il big boy fosse un pupazzo...
- id: 17542
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-06-02 08:10:00 +0200'
  date_gmt: '2012-06-02 07:10:00 +0200'
  content: Sono contento, era fatto apposta :D
- id: 17543
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-06-02 08:12:00 +0200'
  date_gmt: '2012-06-02 07:12:00 +0200'
  content: Beh c'hai preso :D Ma dato che la foto si intitola The Consolation of a
    Trooper... :P
- id: 17544
  author: Laycastle
  author_email: laycastle@gmail.com
  author_url: ''
  date: '2012-06-02 09:05:00 +0200'
  date_gmt: '2012-06-02 08:05:00 +0200'
  content: Non bastava aggiornare portage ad una versione "mediana" che avesse già
    il supporto a EAPI 4 anziché all'ultima disponibile? Spulciando il changelog la
    prima ad introdurre il supporto per EAPI 4 dovrebbe essere la 2.1.9.27.
- id: 17548
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-06-04 10:43:00 +0200'
  date_gmt: '2012-06-04 09:43:00 +0200'
  content: Era tutto mascherato e io avevo già sincronizzato. Sono un idiota :D
---
<p>Vi racconto questa cosa parecchio carina (col senno di poi) che mi è successa provando ad aggiornare una <strong>Gentoo</strong> in macchina virtuale. Probabilmente se sarete sconsiderati quanto me nelle politiche di aggiornamento di Gentoo (che ricordo essere rolling release) incapperete anche voi in questo episodio divertente e fonte di pianti e graffi sul volto. Questo errore può essere dato da pacchetti essenzialmente a caso: a me l'ha dato <strong>Portage</strong>, ma vi incollo quello che ho trovato su qualche forum:</p>
<p><code>!!! All ebuilds that could satisfy "=xf86-video-ati-9999" have been masked. !!! One of the following masked packages is required to complete your request: - x11-drivers/xf86-video-ati-9999::x11 (masked by: EAPI 4) The current version of portage supports EAPI '3'. You must upgrade to a newer version of portage before EAPI masked packages can be installed. For more information, see the MASKED PACKAGES section in the emerge man page or refer to the Gentoo Handbook.</code></p>
<p>Figo eh?</p>
<p>È un problema di <strong>EAPI</strong>. Succede che se si sincronizza il Portage tree senza aver aggiornato prima, passando da un albero molto vecchio all'ultimo disponibile, un numero molto elevato di pacchetti vicino alla cifra "tutti" risulta non supportato e mascherato per colpa del fatto che  il vostro Portage è fermo alla EAPI 2, o 3, mentre l'EAPI attualmente supportata è la versione 4. Molto carino. Ho provato ad aggiornare andando per tentativi, ma non ho ottenuto molto: poi l'illuminazione.</p>
<p><img class="aligncenter" title="Trooper Cry" src="http://farm7.staticflickr.com/6120/6405474963_fe13625166.jpg" alt="Trooper Cry" width="500" height="331" /></p>
<h3>L'ispirazione dall'alto dei cieli</h3>
<p>Portage offre una soluzione interessante per risolvere questo problema, ossia l'opzione "<strong>nodeps</strong>" che ci permette di infischiarcene delle dipendenze e continuare come se nulla fosse. L'unico problema sarà reperire le dipendenze di compilazione, ma se abbiamo un sistema non poi così vecchio, comunque il software sarà compilato con la nostra toolchain corrente senza dare grossi problemi. Personalmente me la sono cavata avendo l'illuminazione di dare:</p>
<p><code>emerge --oneshot --nodeps python</code></p>
<p>Ho avuto la cura di specificare una versione per Python: la 2.7, che non fosse troppo recente e che supportasse l'ultima versione di Portage. Dopo aver "emerso" Python, magheggiate con la versione utilizzando <strong>eselect</strong> per cambiare l'interprete. Dopodichè, dovreste andare di <strong>revdep-rebuild</strong>, ma come abbiamo detto tanti pacchetti sono maskati, quindi non conviene. Meglio prima aggiornare Portage.</p>
<p><code>emerge --oneshot --nodeps portage</code></p>
<p>Lasciamo che Portage si installi: la nostra nuova versione di Portage è pronta per girare. A questo punto siamo pronti per aggiornare il sistema.</p>
<p><code>emerge -uDN world</code></p>
<p>O magari ricompilate direttamente tutto, dato che comunque se vi accade qualcosa di simile significa che il vostro sistema è veramente obsoleto. Iniziate con GCC, continuate con GLibC, proseguite con il resto. Salud.</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/kalexanderson/6405474963/in/photostream/">Kristina Alexanderson</a> (non è bellissimo, il papà stormtrooper che consola il figliolo?)</em></p>
