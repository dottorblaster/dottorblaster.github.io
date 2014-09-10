---
layout: post
status: publish
published: true
title: 'Docker 1.0: impressioni, analisi e previsioni'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2462
wordpress_url: http://dottorblaster.it/?p=2462
date: '2014-06-30 10:00:14 +0200'
date_gmt: '2014-06-30 09:00:14 +0200'
categories:
- Open Source
tags:
- linux
- open source
- docker
- virtualizzazione
- kvm
- xen
comments:
- id: 18794
  author: durdn
  author_email: durden@gmail.com
  author_url: ''
  date: '2014-06-30 16:26:00 +0200'
  date_gmt: '2014-06-30 15:26:00 +0200'
  content: Grazie Alessio ottima carrellata. Sono d'accordo con te Docker quest'anno
    crescerà in maniera incredibile. Come hai scritto si stanno veramente muovendo
    e coordinando tutti i grossi nomi :).
- id: 18795
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2014-06-30 17:07:00 +0200'
  date_gmt: '2014-06-30 16:07:00 +0200'
  content: |-
    Hohoh, una faccia non nuova ;)
    La coordinazione tra i nomi mi sta veramente impressionando, sinceramente non credo di aver visto una mobilitazione simile (azzarderei) nemmeno in casi come OpenStack. Belle cose :-)
- id: 18796
  author: Enrico Vecchio
  author_email: enrico.vecchio1@gmail.com
  author_url: ''
  date: '2014-06-30 21:51:00 +0200'
  date_gmt: '2014-06-30 20:51:00 +0200'
  content: |-
    Anche il team di AWS ha introdotto la possibilità di utilizzare Docker sul servizio Elasticbeanstalk. Con risultati ottimi tralaltro!

    http://aws.amazon.com/about-aws/whats-new/2014/04/23/aws-elastic-beanstalk-adds-docker-support/
- id: 18797
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2014-07-01 11:44:00 +0200'
  date_gmt: '2014-07-01 10:44:00 +0200'
  content: Ma questa cosa è fichissima, mi era sfuggita. Grazie!
- id: 18798
  author: Visto nel Web &#8211; 138 | Ok, panico
  author_email: ''
  author_url: http://okpanico.wordpress.com/2014/07/06/visto-nel-web-138/
  date: '2014-07-06 06:17:15 +0200'
  date_gmt: '2014-07-06 05:17:15 +0200'
  content: "[&#8230;] Docker 1.0: impressioni, analisi e previsioni ::: Bl@ster&#8217;s
    [&#8230;]"
---
<p><em>In questo periodo sono successe parecchie cose, per questo ho preferito tralasciare un pochino il blog, ossia adattarlo ai nuovi ritagli di tempo di cui dispongo (che sono ancora inferiori a quelli che avevo prima) - un po’ tipo <a href="http://www.zerocalcare.it/2014/05/19/una-noiosa-spiegazione-che-nessuno-ti-obbliga-a-leggere/">Calcare</a> con il suo, non so se avete presente. Dico questo solo per giustificarmi di un’assenza prolungata: c’entra ben poco con quello che sto per introdurre.</em></p>
<p><img class="aligncenter" src="https://farm7.staticflickr.com/6074/6070724870_c3bd8424b0_z.jpg" alt="Dock" width="640" height="427" /></p>
<p>Sul finale di questo mio periodo di assenza infatti è stato annunciato <strong>Docker 1.0</strong>, ossia una milestone release del progetto che maggiormente, probabilmente, da un anno a questa parte ha attirato la mia attenzione. <strong>Docker</strong> è, in buona sostanza, un modo intelligente di sfruttare LXC per innestare le applicazioni che configuriamo in dei veri e propri “container” virtuali, i quali poi possono essere esportati su qualsiasi altra macchina. È richiesto solo Docker; fornita un’infrastruttura di base, tutto il resto continuerà a funzionare. Docker è versatile, perché è <strong>eseguibile in istanze virtuali</strong>, ma anche su <strong>macchine fisiche</strong>, e così via. La praticità di Docker è innestabile a qualsiasi livello, e questo lo rende una tecnologia perfetta anche a livello enterprise.</p>
<h3>Cosa significa Docker 1.0</h3>
<p><strong>Docker 1.0</strong> significa un sacco di cose. Principalmente, significa che ora come ora Docker è una <strong>piattaforma in rapida crescita</strong>, che si appresta ad avere come target il mondo enterprise ad un livello visto sinora solo con tecnologie come <a href="https://www.openstack.org/">OpenStack</a> (e, ehm, <strong>Linux</strong>? Ma voglio andarci piano coi paragoni). Per questo motivo, mi aspetto che in questi mesi e principalmente nel prossimo anno Docker raggiunga un livello di diffusione planetario, anche perché il suo primo periodo di vita depone molto bene a suo favore: con i <strong>numeri</strong> che ha alle spalle, sicuramente è diventato una tecnologia su cui investire del tempo, che magari in Italia viene snobbata per <strong>alternative vecchie come il cucco</strong> e sostanzialmente best-effort, ma che magari può fornire buone opportunità per consulenze in aziende estere, anche di grandi dimensioni.</p>
<p>Docker 1.0 significa <strong>feature</strong>: la codebase si ingrandirà, tanto che con questo traguardo già abbiamo alcuni importantissimi segnali di un progetto sano e di successo, come un registry pubblico dei container (simile ad npm per Node.js, ma per i propri dock), chiamato <strong>Docker Hub</strong>, e tantissime caratteristiche come ottimizzazioni sullo scheduling e sulla rimozione dei container che, beh, non fanno che rendere Docker <strong>più production-ready</strong> di quanto già non fosse. Di quanto già non fosse per un motivo ben preciso: Docker è un software che, a prescindere dalla bontà de facto del codice sorgente, è stato capace di tirare su dei numeri notevolissimi mentre lo stesso team di sviluppo si spolmonava (beh, più o meno) a scrivere ovunque “do not run in production”. E di irresponsabili, per così dire, in giro ce ne sono stati parecchi. Alcune cifre e alcuni nomi ce lo possono testimoniare.</p>
<h3>Momentum: numeri e fatti su Docker 1.0</h3>
<p>Ce lo dice l’annuncio di rilascio: Docker per tutto l’ultimo anno, dal 20 marzo 2013, è stato praticamente il <strong>protagonista dell’innovazione emergente dal punto di vista dei sistemi e della virtualizzazione in container</strong>. Quello che abbiamo davanti, da qualche settimana, è un tarball che dietro nasconde questo:</p>
<ul>
<li><strong>460 contributor</strong>;</li>
<li>8.741 commit;</li>
<li>2.75 milioni di download;</li>
<li>14.000 “Dockerized apps”, che suppongo siano container uploadati su quello che ora è il Docker Hub.</li>
</ul>
<p>Ma non solo: <strong>Docker</strong> ha subito un pesante <strong>endorsement</strong> da aziende che fregandosene del suo status hanno cominciato ad integrarlo nella propria infrastruttura e a sperimentarci su. Per esempio, una serie di nomi molto interessanti, anche di aziende che producono software che usiamo sul nostro PC ogni giorno:</p>
<ul>
<li><a href="http://www.slideshare.net/dotCloud/john-engates-keynote-at-dockercon-14">Rackspace</a>;</li>
<li><a href="http://www.slideshare.net/dotCloud/docker-at-spotify-by-rohan-singh">Spotify</a>;</li>
<li><a href="http://www.slideshare.net/dotCloud/docker-con-ebay-35858384">eBay</a>;</li>
<li><a href="http://www.slideshare.net/dotCloud/high-speed-shipping-lanes-how-containers-are-revolutionizing-distributed-computing-at-scale">Twitter</a>;</li>
<li><a href="http://www.slideshare.net/dotCloud/tupperware-containerized-deployment-at-facebook">Facebook</a>;</li>
</ul>
<p>Per non parlare dei casi di studio forniti da <a href="http://www.slideshare.net/dotCloud/be-a-happier-developer-with-docker-tricks-of-the-trade-35851445">Atlassian</a>, <a href="http://www.slideshare.net/dotCloud/complementing-docker-with-puppet">PuppetLabs</a>, <a href="http://www.slideshare.net/dotCloud/performance-characteristics-of-traditional-v-ms-vs-docker-containers">IBM</a>, <a href="http://www.slideshare.net/dotCloud/cloud-native-netflixoss-services-on-docker">Netflix</a>, <a href="http://www.slideshare.net/dotCloud/eric-brewer-dockercon-keynote">Google</a>.</p>
<h3>Docker: risorse interessanti e tutorial</h3>
<p>Contestualmente a tutto questo fiorire di Docker nella produzione e nella pre-produzione di aziende il cui fatturato arriva ad essere una parte rilevante dell'economia globale, hanno cominciato a spuntare come funghi risorse su Docker, insieme a degli articoli che spiegano come sfruttare al meglio questo software all'interno di determinati processi. Ne ho da poco cominciato a stilare una piccola collezione, che riporto qui di seguito allo stato attuale, anche per tenere traccia di come ad oggi sia messo il panorama. Periodicamente condividerò anche altro, ma già ora - che Docker non è nemmeno diventato per così dire pronto per il panorama enterprise - ci sono diversi post che hanno suscitato il mio interesse.</p>
<ul>
<li><a href="http://www.tech-d.net/2013/12/16/persistent-volumes-with-docker-container-as-volume-pattern/">Persistent volumes with Docker – Data-only container pattern</a> - Un interessantissimo post che segnala come sia possibile creare dei container di soli dati per il management dei contenuti grezzi via Docker, in maniera da non perdere nulla, avere tutto ciò che facciamo tracciato tramite i sistemi di logging dell'infrastruttura e molto altro ancora. Utile, utile, utile. L'ho già detto utile?</li>
<li><a href="http://venturebeat.com/2014/06/10/red-hat-mashes-docker-containers-into-its-enterprise-linux-distribution/">Red Hat mashes Docker containers into its Enterprise Linux distribution</a> - Yes! Docker è attivamente supportato da Red Hat, il che significa che nella prossima Red Hat Enterprise Linux questa tecnologia sarà installabile con un colpo di yum e un po' di olio di gomito per quanto riguarda la configurazione. Certo, è un endorsement di piccola entità, ma venendo da un colosso come Red Hat che non dà mai niente per niente, sicuramente conta più che il Docker incluso in qualsiasi repository third-party di una distro a caso scalcagnata.</li>
<li><a href="http://www.centurylinklabs.com/analyzing-dockers-new-oss-libchan-and-libswarm/">Analyzing Docker’s New OSS: libchan and libswarm</a> - L'annuncio di Docker 1.0 non ha significato solo stabilità, ma anche una di nuove librerie completamente open source per la composizione di servizi di rete complessi che fanno uso (tra le altro cose) anche di Docker. Libchan, libswarm e libcontainer sono dei fulgidi esempi di come un'azienda possa innovare non solo con il proprio prodotto di punta, ma con un ecosistema di librerie a corredo che rendono possibili delle caratteristiche piuttosto utili. Nell'articolo trovate tutti i dettagli, ad esempio, di come con un banale <code>docker ps</code> sia possibile grazie a libswarm avere una panoramica dei processi in esecuzione in più container. È una lucidissima analisi di come queste librerie appena rilasciate possano letteralmente cambiare il modo in cui è concepita e implementata la cloud che utilizziamo attualmente.</li>
<li><a href="http://www.powpark.com/blog/programming/2014/01/29/integrating-docker-with-jenkins-for-ruby-on-rails-app">Integrating Docker with Jenkins for continuous deployment of a Ruby on Rails application</a> - Un caso di studio piccolo, se vogliamo elementare, ma esemplare. I grandi software possono essere messi alla prova anche e soprattutto con piccoli compiti, e Docker con Jenkins non sfugge a questa logica: con questo tutorial possiamo implementare un piccolo caso di continuous integration dove Jenkins costruisce dei Docker container, e se i test unitari vanno a buon fine, li esegue. Personalmente, apprezzo molto questo tipo di contenuti, anche perché mostrano applicazioni reali di software che altrimenti non avremmo (quasi) idea di come usare. L'idea di utilizzare Docker come layer mediano in una struttura del genere è interessante (e onestamente non so come ho fatto a non pensarci prima. Genio! [cit. René Ferretti])</li>
<li><a href="http://blogs.atlassian.com/2014/06/docker-automated-builds-bitbucket/">Announcing Docker Automated Builds on Bitbucket</a> - Atlassian non solo si impegna nello sperimentare con Docker, ma offre a tutti noi utenti di <a href="https://bitbucket.org/">Bitbucket</a> (e, ehm, spero presto anche di Stash) un modo per fruire delle Automated Build senza dover per forza ricorrere a GitHub. Un modo come un altro, questa partnership, per avvicinare delle community e generare un impareggiabile valore aggiunto.</li>
</ul>
<p><em>Photo courtesy of <a href="https://www.flickr.com/photos/tristantaussac/6070724870/">Tristan Taussac</a></em></p>
