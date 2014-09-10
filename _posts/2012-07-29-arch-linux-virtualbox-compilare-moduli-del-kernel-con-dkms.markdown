---
layout: post
status: publish
published: true
title: 'Arch Linux e Virtualbox: compilare i moduli del kernel con DKMS'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1435
wordpress_url: http://dottorblaster.it/?p=1435
date: '2012-07-29 12:24:23 +0200'
date_gmt: '2012-07-29 11:24:23 +0200'
categories:
- Linux
tags:
- Arch
- Arch Linux
- virtualbox
- dkms
- kernel
comments:
- id: 17694
  author: medeoTL
  author_email: ''
  author_url: http://twitter.com/medeoTL
  date: '2012-07-30 09:15:00 +0200'
  date_gmt: '2012-07-30 08:15:00 +0200'
  content: bello il "tema" del terminale, si puo' avere il .bashrc?
- id: 17695
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-07-30 11:58:00 +0200'
  date_gmt: '2012-07-30 10:58:00 +0200'
  content: |-
    Toh :D
    http://pastebin.archlinux.fr/449265



    (per l'arancione, l'ho settato da Konsole come #FFA200 in foreground.)
---
<p>Attenziò, attenziò. Questa mattina ho aggiornato la mia <strong>Arch Linux</strong> e mi è comparso un bel warning che mi avvertiva del fatto che da questo momento (generico) in poi <strong>Virtualbox</strong>, per la generazione di moduli inerenti <strong>custom kernel</strong>, vuole assolutamente che vengano installati (a meno che non decidiate di farlo a mano) tramite <strong>DKMS</strong> - che mi sembra anche una buona soluzione.</p>
<p><img class="aligncenter" title="Virtualbox Arch Linux" src="http://i50.tinypic.com/w98zux.png" alt="Virtualbox Arch Linux" width="586" height="394" /></p>
<p>Per chi quindi fosse abituato con <strong>vboxbuild</strong>, non c'è problema. Come il cambiamento di gattopardiana memoria infatti non troviamo nulla di diverso se non nella sintassi:</p>
<blockquote><p><code># dkms install vboxhost/4.1.18</code></p></blockquote>
<p>Una volta terminata la compilazione basterà rimuovere il vecchio modulo, inserire il nuovo con <strong>modprobe</strong> e tutto andrà al suo posto. Ovviamente, se serve (e servirà, credo, in seguito), modificate il comando affinché compili la versione giusta dei moduli. Potreste anche incorrere in qualche problema ulteriore sul riconoscimento degli <strong>header</strong> corretti; per questo vi indirizzo all'interessante <a href="https://bbs.archlinux.org/viewtopic.php?pid=1137771">topic sul forum</a> di <strong>Arch Linux</strong>.</p>
