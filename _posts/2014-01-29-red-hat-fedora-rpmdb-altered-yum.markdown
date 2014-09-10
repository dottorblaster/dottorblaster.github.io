---
layout: post
status: publish
published: true
title: 'Red Hat / Fedora: RPMDB altered outside of yum'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2385
wordpress_url: http://dottorblaster.it/?p=2385
date: '2014-01-29 19:22:16 +0100'
date_gmt: '2014-01-29 18:22:16 +0100'
categories:
- Linux
tags:
- Fedora
- rpm
comments: []
---
<p><img class="aligncenter" alt="Fedora htop" src="http://farm6.staticflickr.com/5023/5669863992_7c2fa95523_b.jpg" width="1024" height="768" /></p>
<p>Di recente sulla mia workstation con Fedora ho cominciato a pastrugnare con il <strong>package management</strong> in maniera indiscriminata, così invece di far fare tutto a <strong>Yum</strong> che mi dava qualche piccola incongruenza, per installare un pacchetto mi sono <strong>avvalso di RPM puro</strong>, cosa che ormai a quanto vedo non dovrebbe essere mai fatta, demandando a <code>yum localinstall</code> il compito di installare pacchetti singoli.</p>
<p>Fatto sta, che ho avuto un feedback "strano" dalla mia macchina provando a <strong>usare direttamente RPM</strong>: ha cominciato a rompermi le scatole ad ogni operazione di gestione dei pacchetti avvisandomi che il <strong>database di RPM era stato modificato</strong> senza che Yum lo avesse autorizzato.</p>
<pre><code>Running rpm_check_debug
Running Transaction Test
Transaction Test Succeeded
Running Transaction
Warning: RPMDB altered outside of yum.</code></pre>
<p>Al di là di ogni presa di coscienza del fatto, e procurato allarme (ok, ho scardinato <strong>RPM</strong>, ho capito), può essere utile <strong>rimettere in marcia</strong> il nostro sistema senza che mostri più quel <strong>feedback</strong> che, con tutto il rispetto, ma mi ha fatto prendere un accidente. Mi sono guardato un po' intorno e ho notato che basta dare un <strong>singolo comando</strong> per liberarsi di questo peso sulla coscienza:</p>
<pre><code>$ sudo yum clean all</code></pre>
<p><strong>Occultamento di cadavere</strong>? Forse si. Ma se la macchina la amministriamo noi, chi se ne importa. Buon lavoro :-)</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/kalebdf/5669863992/">Kaleb Fulgham</a></em></p>
