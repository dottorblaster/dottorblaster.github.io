---
layout: post
status: publish
published: true
title: Mantenere Webkit aggiornato in Ubuntu
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
excerpt: "Nel <a href=\"http://dottorblaster.it/2009/08/pidgin-liberiamoci-del-solito-look-barboso/\">post
  precedente</a> c'eravamo divertiti nel cambiare faccia al nostro Piccione viaggiatore,
  se ben ricordate, facendolo diventare qualcosa di molto simile a questa immagine.\r\n<p
  style=\"text-align: center;\"><img class=\"alignnone\" src=\"http://i28.tinypic.com/2up8nbn.jpg\"
  alt=\"\" width=\"646\" height=\"505\" /></p>\r\n<p style=\"text-align: left;\">Tutto
  ciò, ormai è risaputo per chi si è un po' addentrato nel mondo dell'<em>estetica
  da messenger</em>, è consentito dal motore grafico Webkit, visto che le sciccherie
  adottate provengono in realtà da OSX, precisamente dal messenger Adium; nella precedente
  guida mi è stato fatto notare come su Ubuntu Jaunty ci siano problemi di compilazione
  del plugin che permette di utilizzare i temi di Adium, e in parecchi abbiamo visto
  come questo fatto dipenda dalla versione di Webkit utilizzata, che appunto in Ubuntu
  Jaunty è un tantinello vecchia. Occorre quindi dare una svecchiata al nostro Webkit,
  e possiamo mantenere aggiornato il celebre motore grafico semplicemente aggiungendo
  un repository alla nostra lista già molto fornita."
wordpress_id: 438
wordpress_url: http://dottorblaster.it/?p=438
date: '2009-08-15 19:11:36 +0200'
date_gmt: '2009-08-15 18:11:36 +0200'
categories:
- Linux
tags:
- Ubuntu
- Repository
comments:
- id: 8569
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2009-08-15 20:24:34 +0200'
  date_gmt: '2009-08-16 01:24:34 +0200'
  content: Vecchio sarai tu! XD Tra 1.0-1 e 1.0-2 che grande differenza ci dev&#39;essere.
    :P
- id: 8570
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-08-15 20:58:04 +0200'
  date_gmt: '2009-08-16 01:58:04 +0200'
  content: Una differenza che non ti fa compilare Pidgin-webkit, giudica tu :D
- id: 8571
  author: scimmia
  author_email: lists4davide@gmail.com
  author_url: ''
  date: '2009-08-15 20:59:09 +0200'
  date_gmt: '2009-08-16 01:59:09 +0200'
  content: fai un diff, o leggi il changelog!
- id: 8572
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2009-08-15 21:03:00 +0200'
  date_gmt: '2009-08-16 02:03:00 +0200'
  content: LOL ma non credo che ce ne sia bisogno :P
- id: 10973
  author: nike air force 1
  author_email: lingjuantong@gmail.com
  author_url: http://www.nike-air-force-one.com
  date: '2010-06-08 06:18:30 +0200'
  date_gmt: '2010-06-08 11:18:30 +0200'
  content: Hhe article&#39;s content rich variety which make us move for our mood
    after reading this article. surprise, here you will find what you want! Recently,
    I found some wedsites which commodity is colorful of fashion.<br><a href="http://www.inin-from.com"
    rel="nofollow">http://www.inin-from.com</a>
---
<p>Nel <a href="http://dottorblaster.it/2009/08/pidgin-liberiamoci-del-solito-look-barboso/">post precedente</a> c'eravamo divertiti nel cambiare faccia al nostro Piccione viaggiatore, se ben ricordate, facendolo diventare qualcosa di molto simile a questa immagine.</p>
<p style="text-align: center;"><img class="alignnone" src="http://i28.tinypic.com/2up8nbn.jpg" alt="" width="646" height="505" /></p>
<p style="text-align: left;">Tutto ciò, ormai è risaputo per chi si è un po' addentrato nel mondo dell'<em>estetica da messenger</em>, è consentito dal motore grafico Webkit, visto che le sciccherie adottate provengono in realtà da OSX, precisamente dal messenger Adium; nella precedente guida mi è stato fatto notare come su Ubuntu Jaunty ci siano problemi di compilazione del plugin che permette di utilizzare i temi di Adium, e in parecchi abbiamo visto come questo fatto dipenda dalla versione di Webkit utilizzata, che appunto in Ubuntu Jaunty è un tantinello vecchia. Occorre quindi dare una svecchiata al nostro Webkit, e possiamo mantenere aggiornato il celebre motore grafico semplicemente aggiungendo un repository alla nostra lista già molto fornita.<a id="more"></a><a id="more-438"></a></p>
<p style="text-align: left;">Un repository è semplicemente un "magazzino di software" dove vengono messi i pacchetti per la distribuzione. Le versioni di questi vengono poi controllate dal gestore di pacchetti che decide se sono da aggiornare o meno. Inoltre tramite repository esterni è possibile installare programmi esterni.</p>
<p style="text-align: left;">Il repository del Webkit Team tuttavia si occupa solamente di mantenere una versione stabile e aggiornata del pacchetto libwebkit. Ordunque, aggiungiamolo :)</p>
<p style="text-align: left;">Apriamo il file che contiene la nostra lista dei repository:</p>
<p style="text-align: left;"><code>sudo gedit /etc/apt/sources.list</code></p>
<p style="text-align: left;">Se non abbiamo aggiunto nulla, questo file contiene solamente repository ufficiali. In caso contrario contiene già anche altri repository esterni, ma non dobbiamo preoccuparcene :)</p>
<p style="text-align: left;">Aggiungiamo in fondo le righe relative al repository del Webkit Team:</p>
<p><code>deb http://ppa.launchpad.net/webkit-team/ppa/ubuntu jaunty main<br />
deb-src http://ppa.launchpad.net/webkit-team/ppa/ubuntu jaunty main</code></p>
<p>Salviamo il file, chiudiamo e aggiorniamo il nostro sistema. Possiamo farlo anche subito da terminale:</p>
<p><code>sudo apt-get update &amp;&amp; sudo apt-get dist-upgrade</code></p>
<p>Con questo aggiornamento, ci saranno anche i pacchetti di Webkit alla nuova versione ;)</p>
