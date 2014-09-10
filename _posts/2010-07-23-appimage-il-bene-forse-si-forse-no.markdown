---
layout: post
status: publish
published: true
title: AppImage, il bene? Forse si, forse no.
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 699
wordpress_url: http://dottorblaster.it/?p=699
date: '2010-07-23 16:25:52 +0200'
date_gmt: '2010-07-23 15:25:52 +0200'
categories:
- Linux
tags:
- Ubuntu
- Debian
- Fedora
comments:
- id: 11842
  author: Picchio
  author_email: None
  author_url: http://twitter.com/Picchiopc
  date: '2010-07-23 15:42:52 +0200'
  date_gmt: '2010-07-23 20:42:52 +0200'
  content: Proprio le mie stesse opinioni :D <br><a href="http://picchiopc.blogspot.com/2010/07/portableapps-vs-repository.html"
    rel="nofollow">http://picchiopc.blogspot.com/2010/07/portablea...</a>
- id: 11843
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-07-23 21:15:37 +0200'
  date_gmt: '2010-07-24 02:15:37 +0200'
  content: In sostanza, è un po&#39; quello che pensiamo tutti :D
- id: 11844
  author: Giovanni
  author_email: giovanni.cappellini@gmail.com
  author_url: http://www.quacos.com
  date: '2010-07-24 08:41:34 +0200'
  date_gmt: '2010-07-24 13:41:34 +0200'
  content: Appena ho finito di leggere questo post, mi sono bevuto un yaourt -Syu
    --aur
- id: 11845
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-07-24 10:11:17 +0200'
  date_gmt: '2010-07-24 15:11:17 +0200'
  content: "È sempre cosa buona e giusta :D"
- id: 11846
  author: firstbit
  author_email: andrea.de.iacovo@gmail.com
  author_url: ''
  date: '2010-07-24 14:35:50 +0200'
  date_gmt: '2010-07-24 19:35:50 +0200'
  content: 'd&#39;accordo quasi su tutto tranne che sulla frecciatina a dpkg/rpm.<br>C&#39;è
    un motivo ben definito se questi gestori di pacchetti non permettono di installare
    direttamente software compilato dall&#39;utente: in questo modo si cerca di evitare
    il definitivo "sminchiamento" dell&#39;organizzazione del file system. Se cominciamo
    a tenere i file un po&#39; in  /opt, un po&#39; in /usr, e un po&#39; in /usr/local
    non si capisce più nulla; Debian, così come Ubuntu e Fedora/Redhat, ha delle direttive
    specifiche sul modo in cui i vari file devono essere distribuiti nel sistema.<br>Certo,
    mi dirai tu, basta usare ./configure come si deve e il problema non si presenta
    ma, in tal caso, basta e avanza il caro vecchio (orribile) checkinstall.'
- id: 11847
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-07-24 15:40:35 +0200'
  date_gmt: '2010-07-24 20:40:35 +0200'
  content: Un sistema di script integrato con APT potrebbe risolvere il problema in
    modo molto più elengante di quanto già faccia checkinstall :P Il problema è che
    checkinstall produce cose aberranti e inutilizzabili, molto poco integrate con
    l&#39;ecosistema dei pacchetti veri, altrimenti avremmo già risolto :D
- id: 11848
  author: firstbit
  author_email: andrea.de.iacovo@gmail.com
  author_url: ''
  date: '2010-07-24 16:42:03 +0200'
  date_gmt: '2010-07-24 21:42:03 +0200'
  content: 'Esattamente.<br>È proprio per questo che, secondo me, non vale la pena
    di "perdere tempo" con cose tipo AppImage: meglio concentrare gli sforzi sull&#39;ulteriore
    sviluppo di aptitude (e soci) nel tentativo di permettere l&#39;installazione
    facile e tracciabile anche di software non distribuiti in forma binaria.'
- id: 11849
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-07-24 17:32:15 +0200'
  date_gmt: '2010-07-24 22:32:15 +0200'
  content: se le persone facessero qualcosa per migliorare apt-build probabilmente
    non saremmo in questa situazione :D
- id: 11899
  author: Nikita_top
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2010-08-01 14:24:42 +0200'
  date_gmt: '2010-08-01 19:24:42 +0200'
  content: Mah, con le librerie condivise hai poco da fare, un mese dopo il freeze
    ad esempio, Ubuntu è già vecchio, quindi soft nuovo che richiede lib recenti non
    va e basta.<br>Appimage fornirebbe un sistema completo con l&#39;applicazione,
    evitando di incasinare le lib di sistema e gli altri programmi, cosa impossibile
    con apt-build o checkinstall.<br>Quello delle librerie condivise è un retaggio
    poco comprensibile per un utente desktop, che semplicemente non capisce perchè
    non può installare un programma nel proprio sistema con fa con Windows e Mac.<br>Le
    lib condivise sono buone per server e embebbed (sicurezza/spazio) su un desktop
    sono una zavorra irritante e limitante.<br>Con quad core e dischi da TB possono
    benissimo starci 5 versioni di ffmpeg nel mio sistema (ad esempio) cosi che tuti
    i miei soft multimediali funzionino al meglio.<br>Il resto son solo cavolate medioevali,
    roba da templari.
- id: 11900
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-08-01 14:40:39 +0200'
  date_gmt: '2010-08-01 19:40:39 +0200'
  content: Beh su questo ti do ragione, purtroppo non tutti capiscono la bellezza
    e l&#39;importanza delle librerie condivise, a volte nemmeno gli stessi pacchettizzatori
    come puoi vedere tu stesso :P
---
<p>Proprio stamattina <a href="http://pollycoke.org/2010/07/23/appimage-figlio-di-appdir-della-tribu-di-rox-appbundle-e-klik-par/">ne ha scritto felipe</a>, e mi sentirei di riprendere il discorso. AppImage, la nuova tecnologia tanto simile, tanto uguale, tanto identica a tutte le precedenti già affondate che si propone come l'alternativa al tradizionale concetto di gestione dei pacchetti, e che si fa un po' portatrice dell'ideale di Apple rispetto alla <strong>gestione del software</strong>. Un archivio con il binario dell'applicazione, e tutte le librerie aliene compilate staticamente per far funzionare il prodotto al meglio su qualsiasi distribuzione; il pericolo secondo me, come secondo felipe, non viene covato nella potenzialità di sfornare pacchetti binari da centinaia di mega per un client di posta, andiamo oltre: il pericolo, per me, è che tale sistema divenga abusato. Felipe al contrario ne vorrebbe l'adozione di massa per una gestione delle applicazioni più a misura di utente. <strong>Effettivamente non sarebbe male</strong>, ma svisceriamone ogni aspetto, e vediamo perchè è figo e, invece, perchè fa cagare :D</p>
<p><em><strong>Perchè è benissimo</strong></em><br />
AppImage è una figata. Consentirà finalmente a migliaia di utenti di aggiornare comodamente il proprio Firefox ad esempio, o la propria copia di Thunderbird, mandando definitivamente a quel paese quei <strong>metodi diabolici tipo UbuntuZilla</strong> e soci, che non fanno altro che insozzare il nostro sistema con del software non gestito dal gestore dei pacchetti, e nemmeno facilmente rimovibile.</p>
<p>Potremo finalmente prendere un'applicazione, trascinarla, sballottarla, e quella <strong>resterà sempre</strong> nel suo comodo guscio di applicativo AppImage, senza possibilità di uccidere file per una smanettata di troppo, senza necessità di dover soddisfare il diavolo di dipendenze prima di un'installazione, senza appunto la necessità di una connessione alla rete per installare qualcosa. Ma c'è il risvolto della medaglia.</p>
<p><em><strong>Perchè fa cagare</strong></em><br />
È facile immaginare il perchè contrario; anni di utilizzo di <a href="http://www.archlinux.it/">distribuzioni concepite in maniera più che razionale</a>, hanno fatto di me una persona un tantino paranoica. Il package manager è il bene assoluto e definitivo. Il package manager consente di installare software senza sporcarsi le mani, il package manager, se ben implementato, ha la funzione di far gestire all'utente tutto il software presente nel computer tramite una singola interfaccia. Peccato che in Ubuntu, Debian, ma anche relativamente alle controparti RPM come Fedora e Mandriva, in questi anni si sia venuto a creare <strong>una specie di bordello</strong> dove esistono diecimila applicazioni, come dicevo poco sopra, ognuna che installa il software che vuole, alla maniera in cui vuole, secondo la versione che preferisce. Poi uno dice che ce l'ha lungo perchè usa Arch Linux, e grazie: con un solo strumento posso<strong> gestire tutto il software</strong>, quello compilato, quello pacchettizzato, qualunque cosa. DPKG ed RPM invece sono mal implementati in questo senso, perchè <strong>non danno possibilità all'utente</strong> di compilare un sorgente ed installarlo secondo le norme riservate ad un comune pacchetto (e poterlo quindi disinstallare agevolmente).</p>
<p>Fuori dal delirio, purtroppo, finchè il package manager resta uno strumento nelle mani del distributore che non si adegua alle logiche dell'utenza, necessitiamo di qualcosa come AppImage, che ci consenta di gestire il nostro software in maniera semplice e avulsa dal distributore. Tuttavia, voglio dire un'ultima cosa. Felipe, proprio tu hai fatto <strong>riferimento a OSX</strong> per la gestione delle applicazioni non a livello di sistema. Ebbene, voglio ricordarti questo: noi stiamo copiando i .app, mentre il popolo della mela da tempo ci ha <strong>copiato e imbellito Synaptic</strong> proprio perchè stufo di questo sistema. Si chiama <a href="http://appbodega.com/">Bodega</a> :P</p>
<p>Siamo dunque sicuri che tutto ciò non sia <strong>un capriccio</strong> dell'utenza e di alcune persone, più che una necessità vera? Magari avremmo più bisogno di qualcuno che mantenesse le applicazioni aggiornate? Tipo un potenziale repository rolling apposito di cui ho <a href="http://dottorblaster.it/2010/06/ubuntu-extras-per-una-distro-un-po-piu-rolling/">già parlato</a>?</p>
<p><em>Esamino di coscienza please</em>.</p>
