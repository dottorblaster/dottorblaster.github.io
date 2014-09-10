---
layout: post
status: publish
published: true
title: LibreSSL e il porting su altre piattaforme
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2437
wordpress_url: http://dottorblaster.it/?p=2437
date: '2014-05-05 12:08:58 +0200'
date_gmt: '2014-05-05 11:08:58 +0200'
categories:
- Open Source
tags:
- linux
- open source
- ssl
- libressl
- openssl
- heartbleed
comments: []
---
<p>Finalmente sto iniziando a guardare i primi vagiti di <strong>LibreSSL</strong> su altre piattaforme, e pur non avendone scritto qui la questione <strong>Heartbleed</strong> è stata un bel bailamme da seguire, dato che ha tirato in ballo una serie di questioni notevoli sul futuro del <strong>software open source</strong> e sulla presunzione di sicurezza di alcuni sistemi.</p>
<p><img src="https://farm8.staticflickr.com/7200/7120345307_d7413868b6_c.jpg" alt="Lock" /></p>
<p>Sempre per parlare di presunzione di sicurezza, <strong>Insane Coder</strong> durante un piccolo <a href="http://insanecoding.blogspot.no/2014/04/common-libressl-porting-mistakes.html">processo di review</a> di alcuni port di LibreSSL ha effettivamente dimostrato come il grado di sicurezza di <a href="http://www.libressl.org/">LibreSSL</a> diminuisca a seconda della piattaforma utilizzata (il che è anche colpa delle prassi di porting di alcune funzioni); questo non è solo un <strong>problema di SSL</strong>, ma è anche un <strong>campanello di allarme</strong> che dovrebbe farci riflettere sulla sicurezza delle piattaforme che usiamo di solito e su cui siamo abituati a sviluppare.</p>
<blockquote><p>There’s a couple of other significant mistakes I’m expecting to see appear in LibreSSL ports, but have not seen yet. These probably already exists in ports I haven’t reviewed, or will exist in the wild soon enough. Chief among them is implementing timingsafe_bcmp(). I’m expecting to see implementations which directly wrap to regular bcmp(), which unlike the former, is not performed in constant-time, and can expose the application to timing attacks.</p></blockquote>
<p>Insomma: non è che adesso c’è LibreSSL ed è tutto a posto. Dobbiamo continuare a tenere gli <strong>occhi aperti</strong>, perché anche se aggiustiamo un anello della catena ci sono due tipi di criticità che si presentano a questo punto.</p>
<ul>
<li><strong>Aggiustare un anello</strong> non significa aggiustare tutta la catena: la sicurezza di un particolare strato non assicura che il resto della piattaforma sia a prova di bomba;</li>
<li>Inserire un anello nuovo in una <strong>catena di tipo diverso</strong> è difficile e dev’essere fatto nel modo giusto, garantendo che il risultato non sia troppo debole.</li>
</ul>
<p><em>Photo courtesy of <a href="https://www.flickr.com/photos/patrickhruby/7120345307/">Patrick H.</a></em></p>
