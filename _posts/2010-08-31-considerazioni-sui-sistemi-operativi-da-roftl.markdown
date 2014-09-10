---
layout: post
status: publish
published: true
title: Considerazioni sui sistemi operativi da ROFTL
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 724
wordpress_url: http://dottorblaster.it/?p=724
date: '2010-08-31 09:48:16 +0200'
date_gmt: '2010-08-31 08:48:16 +0200'
categories:
- Linux
- Tech
tags:
- Informatica
- ROFTL
- LOL
comments:
- id: 12408
  author: Gianluca Andreotti
  author_email: ''
  author_url: http://twitter.com/FlameKaos1
  date: '2010-08-31 09:38:00 +0200'
  date_gmt: '2010-08-31 09:38:00 +0200'
  content: |-
    Beh... diciamo che non è proprio completamente errato :)
    Esempio: tu hai un computer (o device) con un processore che supporta le SSE 4.1. Tuttavia, poiché c'è gente con processori che non le supportano, compilano tutto il software senza abilitarle (-msse4.1 nelle cflags/cxxflags con GCC). Il risultato è che comunque sfrutti meno il tuo hardware :).
    Altro esempio: avete mai notato che Glibc è compilato con il supporto anche a kernel non proprio recenti (per un desktop intendo)? Se noi sappiamo che, nel nostro caso, abbiamo necessità solo di una certa versione del kernel, possiamo ridurre la dimensione del codice e pure ottimizzarlo (opzione --enable-kernel=...).

    Insomma, non voglio dire che l'interoperabilità è un male :), ma che con le prestazioni pure non va sempre d'accordo :D.

    PS: leggo da molto il tuo blog, pur senza aver mai commentato. Ottimi articoli in ogni caso ;).
- id: 12409
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-08-31 09:56:00 +0200'
  date_gmt: '2010-08-31 09:56:00 +0200'
  content: |-
    Guarda, parli con uno che ha provato Gentoo per parecchio tempo, e si è studiato bene bene Portage :D
    Concordo pienamente con quello che dici, tuttavia la cosa da una parte non è applicabile ad Android il quale viene buildato con opzioni di compilazione diverse dalla casa produttrice per ogni device, dall'altra sui PC ha senso solo in casi particolari: le prestazioni secondo me risentono in maniera marginale dell'abilitazione di un set di istruzioni piuttosto che di un altro, almeno per quello che ho potuto vedere.
    In ogni caso non è che il sistema con un set schizzi, e con l'altro diventi pachidermico: le prestazioni grossomodo hanno sempre lo stesso ordine di grandezza :D

    Grazie del commento, stimolante anche se solo il primo (spero di una lunga serie!) e grazie per i complimenti :)
- id: 12412
  author: Gianluca Andreotti
  author_email: ''
  author_url: http://twitter.com/FlameKaos1
  date: '2010-08-31 10:22:00 +0200'
  date_gmt: '2010-08-31 10:22:00 +0200'
  content: |-
    Gentoo è un ottima distro per queste cose :D
    Riguardo il guadagno prestazionale, può essere (ammetto che non ho mai provato il guadagno con un set in più, oltre al supplemento delle ssse3, perché la cpu non le supportava) però avevo sentito di qualcuno che assicurava in certi frangenti anche un 20% in più nei (suoi) test di Phoronix rispetto a distro binarie. Ovviamente però detto così va preso molto con le pinze :). Diciamo che un miglioramento più o meno consistente può stare nella dimensione dei binari: se sono abbastanza piccoli da girare nella cache del processore, dovrebbero ottenere un grosso aumento di performance.

    In ogni caso sono appunto ottimizzazioni evitabili nella maggior parte dei casi :), non a caso ero passato ad Arch :).

    Ammetto di non aver pensato al fatto che le case produttrici rilasciassero build diverse, anche perché non ho dispositivi Android tra le mani :).
- id: 12413
  author: Stefanauss
  author_email: ''
  author_url: http://alldnsleadstome.wordpress.com/
  date: '2010-08-31 12:18:00 +0200'
  date_gmt: '2010-08-31 12:18:00 +0200'
  content: |-
    Io ho masterizzato a gettito continuo cd di distro linux pesanti e lente, provate con soddisfazione su pc pesanti e lenti. Ormai sarò a 1kg di cd, quindi sul pesante ci siamo.

    Non avevo mai sentito paragonare OS embedded e per personal computer, la lacuna andava colmata xD
- id: 12414
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-08-31 12:49:00 +0200'
  date_gmt: '2010-08-31 12:49:00 +0200'
  content: Ma guarda, a me è venuto da pensare ad Alphawinux. Che questo sia il suo
    mirabolante inventore?
- id: 12421
  author: FK
  author_email: fkcek@me.com
  author_url: http://frakko.wordpress.com/
  date: '2010-08-31 19:48:00 +0200'
  date_gmt: '2010-08-31 19:48:00 +0200'
  content: |-
    L'unica cosa che mi lascia perplesso del Droide sono le millemila versioni che ci sono in giro, per il resto credo sia un buon OS, sicuramente non sembra lento e pesante.
    Anche se l'ho usato davvero poco.
- id: 12423
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-08-31 19:59:00 +0200'
  date_gmt: '2010-08-31 19:59:00 +0200'
  content: Lento e pesante proprio no, e le millemila versioni non sono un problema
    dato che le personalizzazioni inficiano solo sul lato grafico, e solo alcune ROM
    di fabbrica sul lato prestazionale; le apps rimangono comunque sempre funzionanti
    :)
- id: 12426
  author: FK
  author_email: fkcek@me.com
  author_url: http://frakko.wordpress.com/
  date: '2010-08-31 20:39:00 +0200'
  date_gmt: '2010-08-31 20:39:00 +0200'
  content: |-
    EH vedi quelle cose non le so :P

    Avevo letto di gente bloccata ancora con la version 1.6 però, dici che funziona (quasi) tutto normalmente anche a loro?

    Mamma che ignorante che sono :D
- id: 12427
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-08-31 20:50:00 +0200'
  date_gmt: '2010-08-31 20:50:00 +0200'
  content: |-
    Ah intendevi sulle case :D
    Beh molte applicazioni funzionano sulla 1.6, comunque bisogna saperne un attimo, leggere un po' e scegliere con calma il proprio dispositivo. In realtà i device di punta sono tutti aggiornati o quasi :P
- id: 12444
  author: scimmia (quella vera-era!)
  author_email: erscimmio@gmail.com
  author_url: ''
  date: '2010-09-02 06:28:00 +0200'
  date_gmt: '2010-09-02 06:28:00 +0200'
  content: tu hai messo qualche mod? quando le recensisci (tutte!)?
- id: 12451
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-09-02 19:17:00 +0200'
  date_gmt: '2010-09-02 19:17:00 +0200'
  content: Purtroppo per me ancora niente androide, ma ce l'avrò presto ;D
- id: 12452
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-09-02 19:11:00 +0200'
  date_gmt: '2010-09-02 19:11:00 +0200'
  content: |-
    Ma si, alla fine una generica ottimizzazione per i686 fa tutto il grosso del lavoro, e con una ricompilata del kernel restano fuori solo cose veramente marginali con le quali il guadagno prestazionale è veramente minimo (nel mio caso dubbio) :P
    Le case produttrici pastrugnano parecchio con Android, certo non al punto da farlo diventare totalmente diverso ma oltre le personalizzazioni grafiche ci sono anche ottimizzazioni. Non a caso esiste anche la ROM Kitchen :P
---
<p>Appena ho visto questa aberrazione <a href="http://twitter.com/TonyP62/status/22598208199">su Twitter</a>, non ho resistito: mi sono detto, si, questa va assolutamente pubblicata <strong>ad imperitura memoria</strong>.</p>
<p style="text-align: center;"><img class="alignnone" src="http://i36.tinypic.com/6tdbt4.png" alt="" width="639" height="407" /></p>
<p style="text-align: left;"><strong>Genyo</strong>. Assolutamente genyo. Signori, ci troviamo di fronte a una svolta epocale: buttate via i vostri CD di Linux dove in 700Mb c'è il mondo. <strong>Sono pesanti e lenti</strong>.</p>
<p style="text-align: left;">Praticamente, come se io <a href="http://dottorblaster.it/2010/07/linteroperabilita-un-male-ma-quando-mai/">qualche post fa</a> non avessi detto niente. Mi rimangio qualunque cosa, <strong>sono stato smentito</strong>.</p>
<p style="text-align: left;"><strong>LOL</strong>.</p>
