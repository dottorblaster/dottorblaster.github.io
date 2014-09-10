---
layout: post
status: publish
published: true
title: "[HowTo] Pidgin + Guifications + Tema carino"
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
excerpt: Vediamo in questo post come installare, su una Ubuntu 7.04, Pidgin (client
  messenger multiprotocollo), il suo plugin indispensabile Guifications e possibilmente
  un tema per Guifications decente. Alla fine della mini-guida ci troveremo con un
  Pidgin che ci avvisa con delle eleganti notifiche se entra un contatto, se esce
  un contatto e se ci contattano mentre noi siamo a giocherellare su un'altra finestra.
wordpress_id: 80
wordpress_url: http://blaster.netsons.org/?p=80
date: '2007-09-23 15:27:44 +0200'
date_gmt: '2007-09-23 13:27:44 +0200'
categories:
- Linux
- How-To
tags:
- Ubuntu
comments:
- id: 771
  author: Piplos
  author_email: piplos@piplos.org
  author_url: http://www.piplos.org/
  date: '2007-09-23 18:01:34 +0200'
  date_gmt: '2007-09-23 16:01:34 +0200'
  content: Hmmm... mi stai facendo venire voglia di installare pidgin sulla mia box!
    :)
- id: 772
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2007-09-24 13:00:50 +0200'
  date_gmt: '2007-09-24 11:00:50 +0200'
  content: "@Piplos: installalo, &egrave; una grande invenzione :D"
- id: 808
  author: luca90$
  author_email: savanafatta@hotmail.it
  author_url: ''
  date: '2007-09-29 16:10:36 +0200'
  date_gmt: '2007-09-29 14:10:36 +0200'
  content: Anch'io lo installato!!! &egrave; proprio una figata!!!! altro che winzozz
- id: 5958
  author: attileBoksDeegnag
  author_email: uehylauu25099@gmail.com
  author_url: ''
  date: '2008-12-31 16:55:26 +0100'
  date_gmt: '2008-12-31 15:55:26 +0100'
  content: sgcwxmdjukbklkvwwell, hi admin adn people nice forum indeed. how's life?
    hope it's introduce branch ;)
- id: 13303
  author: Piplos
  author_email: piplos@piplos.org
  author_url: http://www.piplos.org/
  date: '2007-09-23 16:01:00 +0200'
  date_gmt: '2007-09-23 16:01:00 +0200'
  content: Hmmm... mi stai facendo venire voglia di installare pidgin sulla mia box!
    :)
- id: 13304
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2007-09-24 11:00:00 +0200'
  date_gmt: '2007-09-24 11:00:00 +0200'
  content: "@Piplos: installalo, &egrave; una grande invenzione :D"
- id: 13305
  author: luca90$
  author_email: savanafatta@hotmail.it
  author_url: ''
  date: '2007-09-29 14:10:00 +0200'
  date_gmt: '2007-09-29 14:10:00 +0200'
  content: Anch'io lo installato!!! &egrave; proprio una figata!!!! altro che winzozz
- id: 13306
  author: attileBoksDeegnag
  author_email: uehylauu25099@gmail.com
  author_url: ''
  date: '2008-12-31 15:55:00 +0100'
  date_gmt: '2008-12-31 15:55:00 +0100'
  content: sgcwxmdjukbklkvwwell, hi admin adn people nice forum indeed. how's life?
    hope it's introduce branch ;)
---
<p>Vediamo in questo post come installare, su una Ubuntu 7.04, Pidgin (client messenger multiprotocollo), il suo plugin indispensabile Guifications e possibilmente un tema per Guifications decente. Alla fine della mini-guida ci troveremo con un Pidgin che ci avvisa con delle eleganti notifiche se entra un contatto, se esce un contatto e se ci contattano mentre noi siamo a giocherellare su un'altra finestra.<a id="more"></a><a id="more-80"></a></p>
<p>Ovviamente Pidgin <em>non è</em> nei repository ufficiali di Ubuntu, quindi aggiungiamo il repository di GetDeb al nostro sources.list. Apriamo il file con gedit</p>
<p><code>sudo gedit  /etc/apt/sources.list</code></p>
<p>e andiamo ad inserire le righe del repository GetDeb:</p>
<p><code>##Repository GetDeb<br />
deb http://ubuntu.org.ua/ getdeb/</code></p>
<p>Quindi salviamo e chiudiamo il file.</p>
<p>Adesso aggiorniamo la lista dei pacchetti disponibili (sennò come farebbe il sistema a vedere i nuovi pacchetti?) e nel contempo aggiorniamo il sistema per non avere problemini di sorta:</p>
<p><code>sudo apt-get update &amp;&amp; sudo apt-get dist-upgrade</code></p>
<p>Ovviamente, visto che il repository <em>non ha una chiave di autenticazione</em>, il sistema ci avviserà che i pacchetti provengono da una sorgente inaffidabile... ma noi siamo testardi e continuiamo lo stesso.</p>
<p>Una volta aggiornato tutto, installiamo finalmente Pidgin e il plugin Guifications:</p>
<p><code>sudo apt-get install pidgin pidgin-guifications</code></p>
<p>Adesso abbiamo il programma installato con tanto di plugin. Adesso bisogna solo aggiungere un tema decente; io ho optato per <a href="http://gnome-look.org/content/show.php/Green+Toast+Guifications+Theme?content=41614">questo</a>. Scaricate il file sul vostro desktop e aprite la finestra di configurazione del plugin: per fare ciò basta andare nella lista dei plugin, selezionare Guifications e premere il bottone "Configura il plugin". Selezionate il tab "Temi", e vi apparirà una schermata di questo genere.</p>
<p><img src="http://img29.picoodle.com/img/img29/9/9/23/f_SchermataGum_45b81f2.png" align="absmiddle" /></p>
<p>Adesso basterà trascinare l'archivio che avete scaricato tra i temi... et violà! Sarà subito disponibile per essere utilizzato.</p>
<p>Lasciate il tic solo sul tema che volete utilizzare; buone chat con notifica!</p>
<p><strong>P.S.: Ovviamente dovete attivare il plugin mettendo il segno di spunta nella lista apposita! </strong></p>
