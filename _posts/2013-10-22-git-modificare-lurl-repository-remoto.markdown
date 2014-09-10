---
layout: post
status: publish
published: true
title: 'Git: modificare l''URL di un repository remoto'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2258
wordpress_url: http://dottorblaster.it/?p=2258
date: '2013-10-22 16:08:44 +0200'
date_gmt: '2013-10-22 15:08:44 +0200'
categories:
- Open Source
tags:
- GIT
- deciblr
comments: []
---
<p><img class="aligncenter" alt="git" src="http://farm9.staticflickr.com/8524/8673251944_0e3ca1f1f3_c.jpg" width="800" height="334" /></p>
<p>In questi giorni mi è successa una cosa abbastanza strana (per me, almeno): ho iniziato a sviluppare un'applicazione, poi effettivamente ho scoperto che il <strong>nome che le avevo dato</strong> non solo era già preso da un'altra app (che mi aveva pure fregato il dominio), ma era registrato come trademark eccetera eccetera, cosicché se l'avessi usato comunque avrei fatto un grave torto al suo utilizzatore primario. Insomma, ho deciso di <strong>cambiare nome all'applicazione</strong>.</p>
<p>Posto che non voglio discutere se sia giusto o meno assegnare un nome "ufficiale" a dei repository per app ancora in sviluppo, ho cambiato quindi anche nome al <strong>repository Git</strong> dove facevo push dei miei cambiamenti: essendo lo sviluppo portato avanti su più macchine, ho avuto delle difficoltà di tipo "rottura di cosiddetti" a migrare al nuovo repository, almeno finché non ho deciso di aprire il manuale di Git per controllare se "origin" potesse essere modificato senza particolari rogne. Così, ho studiato un po'.</p>
<p>Per <strong>modificare un URL di un qualsiasi repository</strong> remoto a cui abbiamo assegnato uno short name, ci basta dare questo comando da terminale:</p>
<p><code>git config remote.origin.url $URL</code></p>
<p>Il che ovviamente corrisponde al modificare il <strong>repository origin</strong>. Se il repository si chiama pippo, ovviamente ci basterà modificare il nome del repository, intuitivamente:</p>
<p><code>git config remote.pippo.url $URL</code></p>
<p>Fine della storia. Così possiamo <strong>cambiare URL del repository</strong> remoto ogni volta che vogliamo. Ovviamente, per team di grandi dimensioni, è necessario avvisare all'interno del flusso di lavoro di stare fermi, pena trovarsi con <strong>commit e push mandati a carte quarantotto</strong>, specie se chi lavora al progetto fa parecchie push. Ah, la bellezza della continous integration.</p>
<p><em>Poscritto</em> - <strong>Fulvio</strong> mi ha appena ricordato <a href="https://www.facebook.com/if.you.read.this.you.dont.need.glasses/posts/10202387757792303">su Facebook</a> che c'è anche un altro modo; da <strong>Git 1.7</strong> possiamo anche dare il seguente comando:</p>
<p><code>git remote set-url origin $URL</code></p>
