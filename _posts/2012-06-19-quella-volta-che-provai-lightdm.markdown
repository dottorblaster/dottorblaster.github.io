---
layout: post
status: publish
published: true
title: Quella volta che provai LightDM
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1356
wordpress_url: http://dottorblaster.it/?p=1356
date: '2012-06-19 16:58:28 +0200'
date_gmt: '2012-06-19 15:58:28 +0200'
categories:
- Linux
- Desktop Environment
tags:
- GNOME
- KDE
- linux
- lightdm
comments:
- id: 17579
  author: d.
  author_email: d@as.it
  author_url: ''
  date: '2012-06-19 17:43:00 +0200'
  date_gmt: '2012-06-19 16:43:00 +0200'
  content: 'Bah '
- id: 17580
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-06-19 22:59:00 +0200'
  date_gmt: '2012-06-19 21:59:00 +0200'
  content: "? :P"
- id: 17581
  author: Giovanni
  author_email: giovanni.cappellini@gmail.com
  author_url: http://www.quacos.com
  date: '2012-06-20 02:10:00 +0200'
  date_gmt: '2012-06-20 01:10:00 +0200'
  content: Ma di Slim invece cosa mi dici?
- id: 17582
  author: Diego G
  author_email: cdprincipe.spam@gmail.com
  author_url: ''
  date: '2012-06-20 07:51:00 +0200'
  date_gmt: '2012-06-20 06:51:00 +0200'
  content: mi piace, mi piace molto slim ma solo per XFCE, LXDE e tutti i WM
- id: 17583
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-06-20 09:16:00 +0200'
  date_gmt: '2012-06-20 08:16:00 +0200'
  content: |-
    Anch'io come @google-3db4ac2e0973e0954f84c2f5c8250308:disqus lo uso per XFCE sul netbook.
    È buono, se non altro è abbastanza agnostico anche se non integrato con nessuna libreria in particolare (non ricordo in cosa sia scritto) - poi comunque le feature sono ancora meno di quelle di LightDM :P
- id: 17584
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-06-20 09:17:00 +0200'
  date_gmt: '2012-06-20 08:17:00 +0200'
  content: E anche li però, se mi si alleggerisse LightDM invece di riproporsi come
    la peperonata, lo userei per avviare XFCE tramite il greeter webkit. :P
- id: 17585
  author: Francesco
  author_email: francesco@ceccon.me
  author_url: http://francesco-cek.com/
  date: '2012-06-20 13:35:00 +0200'
  date_gmt: '2012-06-20 12:35:00 +0200'
  content: Per curiosità, usando Slim cosa mi perdo? Di solito avvio =&gt; loggo =&gt;
    non vedo più il DM fino al giorno dopo.
- id: 17587
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-06-21 16:40:00 +0200'
  date_gmt: '2012-06-21 15:40:00 +0200'
  content: Ma niente, la stessa cosa anche con Slim. Solo che magari per XFCE o altre
    cose che non hanno un DM proprio, fa comodo averne uno leggerino che ti faccia
    fare il login grafico :D
---
<p>Ormai è molto tempo che vivo stabile e felice sulla mia <a href="http://www.archlinux.org/">Arch Linux</a> con installato <strong>KDE</strong>. Siccome però la voglia di smanettamento è sempre tanta, ho deciso che introdurre un pelino di entropia all'interno della mia solita (e ormai quasi noiosa) configurazione software sarebbe stato per certi versi quasi eccitante. Ho deciso quindi di dare una chance a <strong>LightDM</strong>, utilizzato già dalla "grande mela" Ubuntu con molto profitto: ne pensavo veramente bene.</p>
<p>Perché ne pensavo bene? Beh, perché mi piace la struttura di <a href="http://it.wikipedia.org/wiki/LightDM">LightDM</a> e trovo sacrosanto che la struttura "core" di un display manager possa considerarsi agnostica rispetto alle librerie grafiche utilizzate dal frontend, il greeter, che <strong>GTK+</strong> o <strong>QT</strong> che sia, può contare sempre sulla medesima struttura di fondo.</p>
<p><img class="aligncenter" title="Hack" src="http://farm5.staticflickr.com/4099/4813392151_410cf9a73b.jpg" alt="Hack" width="500" height="333" /></p>
<h3>Greeter definito a buildtime</h3>
<p>Il titolo di questo paragrafo vi dice proprio ciò che mi ha fatto storcere il naso in prima battuta: da entusiasta che ero di LightDM, tale display manager ha ridotto notevolmente il mio piacere dello smanettamento quando ho visto che, definito default il greeter GTK+, per cambiare greeter ed utilizzare quello scritto in QT per KDE avrei dovuto modificare i parametri di compilazione. Magari un parametro del genere <strong>definito a tempo di compilazione</strong> può rendere il binario più prestante, tuttavia ho trovato fastidioso che non ci fosse un file di configurazione dove scrivere e modificare successivamente le mie impostazioni in maniera dinamica riguardo il greeter.</p>
<p>Questo significa che se io, oggi, da KDE decidessi di tornare a <strong>GNOME</strong>, dovrei <strong>ricompilare LightDM</strong> con il greeter GTK+. Dislike, decisamente.</p>
<p>Ma andiamo oltre.</p>
<h3>LightDM consuma come un DC9</h3>
<p>Mi rifaccio a una famosa frase di <strong>Giobbe Covatta</strong> in "Dio li fa e poi li accoppa": "Tengo una Volvo di sedici anni che consuma come un DC9" - il DC9 nella mia esperienza di qualche giorno fa è proprio <strong>LightDM</strong>, che pur nella sua nuova concezione di management non si limita a gestire il display in maniera trasparente, ma fa sentire la sua presenza. Dove? Ma sulla <strong>CPU</strong>, naturalmente.</p>
<p>Mi sono accorto infatti che mentre spostavo le finestre il mio laptop risultava leggermente scarso durante il dragging, presentando anche alcuni scatti. Ora, dato il duplice chip grafico in entrambi i casi rispettabile (il window manager lo faccio girare sulla Intel che è comunque una signora scheda, soprattutto sul 2D), ho pensato che ci fosse qualcosa di strano. Così, dopo ore impiegate ad imprecare contro la gestione del caching di KWin, ho visto aprendo htop che invece la colpa era di qualcun altro: LightDM, che non lasciava alla mia CPU nemmeno un secondo per godersi "il sonno dei giusti" (parafrasando un <a href="http://telperion.wordpress.com/2012/01/08/il-sonno-dei-giusti/">post di telperion</a> in cui erano gli hard disk a stare sempre svegli e pimpanti).</p>
<p>Il carico del <strong>6% costante</strong> sul processore - ed il 6% del mio i5 nuovo nuovo non è esattamente poco - ha fatto si che con un colpo di <strong>sed</strong>, equiparabile al colpo di spugna di chi, invece che con <strong>vim</strong>, lavora col Vim liquido, io tornassi al mio KDM che non tradisce.</p>
<p>Ed il processore adesso dorme <strong>il sonno dei giusti</strong>.</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/schill/4813392151/in/photostream/">Scott Schiller</a></em></p>
