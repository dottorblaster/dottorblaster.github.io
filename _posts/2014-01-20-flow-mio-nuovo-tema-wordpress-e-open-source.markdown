---
layout: post
status: publish
published: true
title: 'Flow: il mio nuovo tema per WordPress è open source'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2374
wordpress_url: http://dottorblaster.it/?p=2374
date: '2014-01-20 11:43:58 +0100'
date_gmt: '2014-01-20 10:43:58 +0100'
categories:
- Open Source
tags:
- WordPress
- open source
- underscores
comments:
- id: 18688
  author: C.Stefano
  author_email: ketiserver@gmail.com
  author_url: http://spazio-informatico.blogspot.com
  date: '2014-01-21 08:44:00 +0100'
  date_gmt: '2014-01-21 07:44:00 +0100'
  content: Questo commento non verrà preso in considerazione. Ma anche io sto pensando
    di passare a Wordpress per il  mio blog. Tutto in fase molto embrionale ma il
    tuo tema potrebbe essere una base di partenza. Ti offro io una birretta?
- id: 18690
  author: Visto nel Web &#8211; 115 | Ok, panico
  author_email: ''
  author_url: http://okpanico.wordpress.com/2014/01/26/visto-nel-web-115/
  date: '2014-01-26 09:29:44 +0100'
  date_gmt: '2014-01-26 08:29:44 +0100'
  content: "[&#8230;] Flow: il mio nuovo tema per WordPress è open source ::: Bl@ster&#8217;s
    [&#8230;]"
- id: 18691
  author: Fexys
  author_email: marcopat@gmail.com
  author_url: http://fexys.com/
  date: '2014-01-28 12:03:00 +0100'
  date_gmt: '2014-01-28 11:03:00 +0100'
  content: A questo punto aggiungiamo anche http://html5blank.com/ per partire da
    un tema basato su HTML5 :D
- id: 18692
  author: evilripper
  author_email: gigarimini@gmail.com
  author_url: http://www.evilripper.net/
  date: '2014-01-31 00:18:00 +0100'
  date_gmt: '2014-01-30 23:18:00 +0100'
  content: |-
    Bello!!E' minimale al punto giusto mi piace!
    ps
    Un appunto solo che non vuole essere una critica ma solo uno spunto, forse su schermi 1920 (dove sono ora) rimane leggermente troppo stretto e qualche pixel in più in larghezza forse non guasterebbe.
    pps
    Anche il mio attuale child themes  l'ho messo su github! :)
    notte!
- id: 18693
  author: evilripper
  author_email: gigarimini@gmail.com
  author_url: http://www.evilripper.net/
  date: '2014-01-31 00:20:00 +0100'
  date_gmt: '2014-01-30 23:20:00 +0100'
  content: |-
    Bello!!E' minimale al punto giusto mi piace!
    ps
    Un appunto solo che non vuole essere una critica ma solo uno spunto, forse su schermi 1920 (dove sono ora) rimane leggermente troppo stretto e qualche pixel in più in larghezza forse non guasterebbero.
    pps
    Anche il mio attuale child themes l'ho messo su github! :)
    nottez!
    ops mi era partito il click su elimina l'ho rimesso.
- id: 18694
  author: 'Flow: il mio nuovo tema per WordPress &egrave; ...'
  author_email: ''
  author_url: http://www.scoop.it/t/conoscere-wordpress/p/4015317391/2014/02/04/flow-il-mio-nuovo-tema-per-wordpress-e-open-source-grab-the
  date: '2014-02-04 09:51:57 +0100'
  date_gmt: '2014-02-04 08:51:57 +0100'
  content: "[&#8230;] Flow: il mio nuovo tema per WordPress &egrave; open source.
    github open source. In due o tre, dall&#039;ultimo restyle del blog che risale
    a questo capodanno, mi hanno fatto i complimenti per il nuovo tema; effettivamente
    non c&#039;&egrave; voluto molto, ma ho ...&nbsp; [&#8230;]"
---
<p><img class="alignnone" alt="github open source" src="http://farm6.staticflickr.com/5066/5654469677_03a0869db0_b.jpg" width="1024" height="768" /></p>
<p>In due o tre, dall'ultimo <strong>restyle del blog</strong> che risale a questo capodanno, mi hanno fatto i complimenti per il nuovo tema; effettivamente non c'è voluto molto, ma ho dovuto mettere insieme qualche tassello per permettere la modifica della foto nell'header e qualche altra cosetta. È anche la mia prima esperienza diretta con il <strong>responsive web design</strong>: finora avevo demandato tutto a <strong>framework come Foundation o Bootstrap</strong>, ma ho deciso di fare tutto da zero e scrivermi un po' di media query da solo (con stili associati).</p>
<p>Flow (ho deciso di chiamarlo così) è <a href="https://github.com/dottorblaster/wp-theme-flow">su GitHub</a> sotto licenza <strong>GPL2</strong> per motivi di fork dal tema padre, Lean, a sua volta basato su Underscores; mi sono trovato molto bene a costruire un tema su Underscores, tuttavia anche le opzioni che ha elencato <a href="http://coding.napolux.com/post/72778327791/blankslate-il-tema-in-bianco-per-wordpress">Francesco</a> recentemente non sono niente male, e se dovessi ripartire da zero oggi userei BlankSlate.</p>
<h3>Cosa c'è e cosa non c'è</h3>
<ul>
<li>Per il momento all'interno del tema è presente la possibilità (implementata nel functions.php con delle specifiche precise) di cambiare l'immagine dell'header, che in questo caso è banalmente la foto circolare. In questo blog c'è la mia, ma di default ho inserito un <strong>simpatico capibara</strong>.</li>
<li>Il codice è quello che è, è mio e <strong>ogni scarafone è bello a mamma sua</strong>. Ogni lamentela che non alleghi una pull request non verrà presa in considerazione. :D</li>
<li>L'aspetto meno simpatico è che ho fatto <strong>hardcoding</strong> su un paio di cosette come il mio nome e il "gdb ./life" presente nella testata. Al momento non ho in programma di portare questi aspetti ad un livello più pulito e di backend, quindi chi vuole usare il tema lo modifichi tranquillamente. Chi invece ha tempo e voglia di perderci una mezz'ora a implementare un pannellino di configurazione, ha una birra pagata quando ci vediamo.</li>
<li><strong>Flow è responsive</strong>!</li>
<li>Alla batteria, Mike Mangini.</li>
</ul>
<p>Che altro dire: divertitevi. :)</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/p1k3/5654469677/">Brennan Bearness</a></em></p>
