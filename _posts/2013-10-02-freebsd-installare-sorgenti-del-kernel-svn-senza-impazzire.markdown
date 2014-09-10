---
layout: post
status: publish
published: true
title: 'FreeBSD: installare i sorgenti del kernel con SVN senza impazzire'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2237
wordpress_url: http://dottorblaster.it/?p=2237
date: '2013-10-02 15:01:39 +0200'
date_gmt: '2013-10-02 14:01:39 +0200'
categories:
- Open Source
tags:
- bsd
- freebsd
comments:
- id: 18532
  author: Quizzlo
  author_email: marcopaolone@gmail.com
  author_url: ''
  date: '2013-10-02 23:15:00 +0200'
  date_gmt: '2013-10-02 22:15:00 +0200'
  content: Aggiornato giusto ieri sera alla 9.2, e la release 10 promette bene, finalmente
    arriva il supporto a Raspberry (e ARM in generale, sperem). Non vedo l'ora ;)
- id: 18533
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2013-10-02 23:17:00 +0200'
  date_gmt: '2013-10-02 22:17:00 +0200'
  content: Io ho aggiornato stasera a 9.2-RELEASE, domani i port :D
- id: 18537
  author: atomix600
  author_email: lucadepandis@gmail.com
  author_url: ''
  date: '2013-10-12 12:00:00 +0200'
  date_gmt: '2013-10-12 11:00:00 +0200'
  content: |-
    Se si usa una -RELEASE non è una cosa buona usare i sorgenti del ramo -STABLE.  ;)

    Si può anche fare così:
    $ fetch ftp://ftp.freebsd.org/pub/FreeBSD/releases/amd64/9.2-RELEASE/src.txz
    # tar xJvf src.txz usr/src/sys -C /

    O se avete la chiavetta/cd/dvd con cui avete installato l'OS, potete anche evitarvi il download e andare direttamente di tar.


    PS: In alcuni casi è meglio scompattare il tarball intero.
    Fino alla serie 8 ti bastava installare i sorgenti SRC.BASE e SRC.SYS (il primo contiene i Makefile base e il secondo i sorgenti del kernel), ora invece è stato completamente integrato tutto il trunk in un solo pacchetto.
    Ricordo ancora quando con la 8x dovevo installare SRC.BASE perché fuse ed ntfs-3g lamentavano la mancanza di tali file.
---
<p>È <strong>più di un mese</strong> che non scrivo nulla qui, per il semplice fatto che sono stato troppo preso tra <a href="http://dottorblaster.it/2013/07/vi-racconto-posto-dove-lavoro/">lavoro</a> ed esami - e pazzescamente l'unico momento in cui scrivere un post un po' più faceto ce l'ho proprio in congiunzione con l'inizio dei nuovi corsi in università. E visto che avevo quel poco di tempo libero, non solo ho deciso di riscrivere qui (ovviamente), ma ho deciso di farlo mentre mi divertivo con una <strong>macchinina FreeBSD</strong> che ho a casa, con cui sto facendo un po' di cose carine.</p>
<p><img class="aligncenter" alt="FreeBSD" src="http://farm4.staticflickr.com/3568/3489353270_3bb7c95443_z.jpg" width="640" height="426" /></p>
<p>Il problema è che al momento ce l'ho dentro macchina virtuale: questo esige che io compili il <strong>modulo VirtualBox</strong> per le guest additions, ma le dipendenze sono parecchie: tra queste, nei port, si esige anche che io abbia installato il <strong>codice sorgente del kernel</strong>, che in fase di installazione ho deciso di omettere per conto mio. Come possiamo quindi installare i sorgenti del <strong>kernel FreeBSD</strong> senza impazzire? Facile: <strong>usiamo Subversion</strong>. Ovviamente, se non l'abbiamo fatto prima, installiamo SVN tramite il "comodo, pratico" sistema di port.</p>
<p><code># cd /usr/ports/devel/subversion<br />
# make install</code></p>
<p>Dopodiché, la cosa più rapida, anziché scaricarci tutto il sorgente di mezza <strong>FreeBSD</strong> (vedere per credere: basta dare un'occhiata all'<a href="http://svn.freebsd.org/base/stable/9">SVN tree</a> per capire di cosa parlo), è prendere a mano tramite <strong>SVN</strong> il sorgente della sola <strong>directory ./sys</strong> contenente il kernel del sistema operativo nella sua forma più primordiale.</p>
<p><code># svn co svn://svn.freebsd.org/base/stable/9/sys /usr/src/sys</code></p>
<p>La vostra macchina comincerà a macinare il <strong>download</strong> con la dovuta perizia. Aspettate qualche minuto (anche qualche decina: dipende dalla vostra connessione di banda), dopodiché tornate al vostro terminale e compilate i moduli che volete.</p>
<p>P.S.: Ho scritto questo post perché cercando in rete una guida alla gestione dei sorgenti mi sono trovato smarrito, invece con questi <strong>semplici passaggi</strong> (ovviamente homemade) ho risolto il mio problema.</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/mollenborg/3489353270/">Kristian Mollenborg</a></em></p>
