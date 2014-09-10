---
layout: post
status: publish
published: true
title: Android e i cambiamenti apportati al kernel Linux
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2136
wordpress_url: http://dottorblaster.it/?p=2136
date: '2013-05-13 09:30:58 +0200'
date_gmt: '2013-05-13 08:30:58 +0200'
categories:
- Android
tags:
- Kernel
- android
- linux
comments:
- id: 18324
  author: Daniele Zoboli
  author_email: lozobo@gmail.com
  author_url: ''
  date: '2013-05-13 14:17:00 +0200'
  date_gmt: '2013-05-13 13:17:00 +0200'
  content: "Grazie per il post! \n\nAl momento sto facendo una tesi su Android e sto
    post sul kernel capita a fagiolo... =D"
- id: 18325
  author: devmobile
  author_email: ''
  author_url: http://twitter.com/warpmobile_it
  date: '2013-05-13 16:26:00 +0200'
  date_gmt: '2013-05-13 15:26:00 +0200'
  content: |-
    google penso che stia dando una grossa mano al kernel per il supporto ad Arm. E' vero che agisce sempre per il proprio tornaconto ma alla fine aiuta tutti.
    vado un po OT sorry.
    Secondo me anche per webkit ne vedremo delle belle, ha recentemente creato un fork da quello che ha rilasciato Apple.
- id: 18327
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2013-05-13 23:33:00 +0200'
  date_gmt: '2013-05-13 22:33:00 +0200'
  content: Prego! So cosa significa, anche il nostro dipartimento con Android ci da
    un bel da fare :) Lieto di aver chiarito qualche dubbio.
- id: 18328
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2013-05-13 23:33:00 +0200'
  date_gmt: '2013-05-13 22:33:00 +0200'
  content: 'Beh: è il bello dell''open. Migliorare per il proprio tornaconto, perché
    l''assolutamente buono è il bene comune. ;)'
- id: 18331
  author: Stefanauss
  author_email: stefanauss@gmail.com
  author_url: ''
  date: '2013-05-15 02:28:00 +0200'
  date_gmt: '2013-05-15 01:28:00 +0200'
  content: |-
    Onestamente, anche qualora fossero cambiamenti invasivissimi, visto che Google non contribuisce direttamente codice in upstream non ci sarebbe possibilità di "interferire" con Linus e farlo incazzare.
    Ora, esattamente non so cosa di queste strutture è stato poi mandato in upstream da quando, da un anno a questa parte, Google si sta impegnando per integrare questi cambiamenti direttamente in Linux. Forse i wakelock lo sono stati già, ma non sono sicuro.
    Credo che anche Linus miri a questo, integrazione totale di tutte le patch di Android nel mainline. Non l'ho mai sentito criticare niente del codice Android-specific di Google.
---
<p>Rispolvero un minuto il blog, dato che ultimamente posto poco per il semplice fatto che tra lavoro e università, scrivere di cose che mi stiano a cuore con la testa "a posto" (ossia non presa da mille pensieri) mi riesce un po' arduo. Ma ho appena scovato una <strong>cosa interessante</strong>, che ha mi ha svoltato qualche ora della mia esistenza.</p>
<p>Vi siete mai chiesti quanti cambiamenti il <strong>progetto Android</strong> abbia mai apportato al kernel Linux per renderlo compatibile con il documento di progetto iniziale? Io spesso me lo sono chiesto. E a prescindere dal fatto che da qualche versione di Linux tutto il codice prima separato è confluito nel sorgente ufficiale, è una domanda che qualche volta mi sono fatto anch'io, concludendo con un sonoro boh ogni mia riflessione. Fortunatamente qualcuno ha deciso di <a href="https://www.quora.com/Android-OS/What-are-the-major-changes-that-Android-made-to-the-Linux-kernel">chiederlo su Quora</a>, e qualcun altro, uno sviluppatore Google, ha risposto.</p>
<p><img class="aligncenter" alt="android" src="http://farm9.staticflickr.com/8244/8664239813_5f3a577dec.jpg" width="500" height="333" /></p>
<p>Traduco in italiano perché merita:</p>
<blockquote><p>La cosa interessante riguardo il <strong>design di Android</strong> è quanto poco abbiamo modificato il kernel. La maggior parte dei sistemi embedded su cui ho messo mano hanno apportato cambiamenti drastici al kernel, solo per lasciare lo user space isolato - per esempio, un kernel "realtime" fortemente modificato, e poi X11 per la GUI.</p>
<p>Android è l'opposto: solo cambiamenti minimali al kernel, ma uno user space esclusivo, diversamente da ogni altro sistema Unix. Infatti, lo user space di Android è così differente dal Linux tradizionale, che <strong>si può dire che Android non sia un sistema Linux</strong> eccetto che per il kernel.</p>
<p>Ecco una lista concisa dei cambiamenti che abbiamo apportato al kernel di Linux:</p>
<ol>
<li><strong>ashmem</strong> (Android Shared Memory), un sistema di memoria condivisa file-based;</li>
<li><strong>Binder</strong>, un sistema <a href="http://it.m.wikipedia.org/wiki/Comunicazione_tra_processi">IPC</a> ed <a href="http://it.m.wikipedia.org/wiki/Chiamata_di_procedura_remota">RPC</a>;</li>
<li><strong>logger</strong>, un sistema hi-speed interno al kernel di logging ottimizzato per le scritture;</li>
<li><strong>Paranoid Networking</strong>, un meccanismo per ridurre l'I/O di rete a determinati processi;</li>
<li><strong>pmem</strong>, un driver per mappare chunk grandi di memoria fisica nello user space;</li>
<li><strong>Viking Killer</strong>, un OOM killer di rimpiazzo che implementa la logica di Android "killa i processi recenti meno utilizzati" in condizioni di memoria libera scarsa;</li>
<li><strong>wakelock</strong>, la soluzione unica di Android per il power management, per cui lo stato di default del dispositivo è sleep e sono richieste azioni esplicite (via il wakelock) per svegliarlo.</li>
</ol>
<p>E ovviamente tutto il solito assortimento di driver, port per architetture ARM, e altro codice a basso livello per supportare Android su ogni dispositivo.</p>
<p>Di questa lista, quasi <strong>tutti i punti sono stati implementati come driver di dispositivo</strong> con modifiche al core del kernel minimali o assenti. L'unico cambiamento significativo è l'implementazione dei wakelock.</p></blockquote>
<p>Per cui, ecco la risposta: la cosa più invasiva che ha realizzato Google è il <strong>meccanismo di wakelock</strong>, mentre il resto è tutto farina del sacco di Mountain View che però non interferisce per nulla o quasi col lavoro predefinito del kernel del ramo Linus Torvalds "e figli". Molto molto bene. Non credo di aver mai trovato righe così interessanti su Android e su quale sia il rapporto che lega i due team di development (e i due code stack).</p>
<p>Ringrazio il mio ottimo "collega" <a href="https://twitter.com/al3hex">Alessio Sergi</a> per la segnalazione.</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/tompagenet/8664239813/">Tom Page</a></em></p>
