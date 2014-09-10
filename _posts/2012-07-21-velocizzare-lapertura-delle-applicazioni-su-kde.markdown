---
layout: post
status: publish
published: true
title: Velocizzare l'apertura delle applicazioni su KDE
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1407
wordpress_url: http://dottorblaster.it/?p=1407
date: '2012-07-21 10:41:30 +0200'
date_gmt: '2012-07-21 09:41:30 +0200'
categories:
- Linux
- Desktop Environment
tags:
- KDE
- linux
- opensource
- cache
comments: []
---
<p>Effettivamente, uno dei difetti più grandi di <strong>KDE</strong> è l’apertura non velocissima di alcune applicazioni. Mi dispiace vedere una macchina piuttosto carrozzata far “finta” di arrancare a volte, quando in realtà è solo questione di applicare un po’ di <strong>tweaking</strong>. È così che ho ritrovato <a href="http://kdemonkey.blogspot.it/2008_04_01_archive.html">un post</a> sepolto nel web che spiega come il meccanismo di <strong>caching</strong> di alcuni componenti di KDE sia attivato solo in circostanze specifiche.</p>
<p style="text-align: center;"><img class="aligncenter" title="Unix Toolbox" src="http://farm1.staticflickr.com/26/45345136_dadb433659.jpg" alt="Unix Toolbox" width="500" height="375" /></p>
<p>Il comando magico:</p>
<p><code>mkdir -p ~/.compose-cache</code></p>
<p>Crea una directory chiamata <strong>.compose-cache</strong> (giustappunto) che si occupa di contenere tutti i dati sul caching di alcuni campi di ricerca e di digitazione. Con questo piccolo trucchetto sono riuscito ad aumentare sensibilmente le prestazioni di <a href="http://kde.org/">KDE</a>; non capisco come mai questo comportamento, presente da anni, non sia ancora reso <strong>predefinito</strong>.</p>
<p>La spiegazione, dal post:</p>
<blockquote><p>Per i curiosi riguardo quello che succede, questa cosa abilita un’ottimizzazione che Lubos [...] ha introdotto tempo fa e che, riscritta, è stata integrata in libx11. Normalmente allo startup le applicazioni leggono le informazioni sui metodi di input da /usr/share/X11/locale/&lt;your locale&gt;/Compose. Questo file Compose è veramente lungo (&gt;5000 linee per il file en_US.UTF-8) e ci vuole tempo perché venga processato. Libx11 può creare una cache delle informazioni parsare che sia più veloce da leggere sequenzialmente; userà una cache esistente in /var/cache/libx11/compose o ne creerà una in ~/.compose-cache se la directory esiste già.</p></blockquote>
<p>Piccolo escamotage raccomandato a chiunque usi <strong>KDE</strong>. Non ve ne pentirete.</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/harshadsharma/45345136/in/photostream/">Harshad Sharma</a></em></p>
