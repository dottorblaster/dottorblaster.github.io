---
layout: post
status: publish
published: true
title: L'Open Source, quando funziona, e quando no.
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 821
wordpress_url: http://dottorblaster.it/?p=821
date: '2011-01-17 11:43:08 +0100'
date_gmt: '2011-01-17 10:43:08 +0100'
categories:
- Linux
- Tech
tags:
- Informatica
- GIT
- GIMP
comments:
- id: 15447
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-17 11:27:00 +0100'
  date_gmt: '2011-01-17 11:27:00 +0100'
  content: |+
    Si, nel caso proposto, quello che scoccia è l'atteggiamento di chiusura.
    La patch ha tantissimi problemi da risolvere, spazio allineamento eccetera, ma cosa costa rispondere "ci sono buone idee ma molti problemi, se vuoi prosegui, noi siamo molto impegnati, ma se devi chiederci qualcosa sul codice ti risponderemo, se ne esce qualcosa di valido,  potremmo considerare di inserilo come opzione, in fondo un pannello in più o in meno che cambia."


- id: 15448
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-17 11:32:00 +0100'
  date_gmt: '2011-01-17 11:32:00 +0100'
  content: |+
    PS il testo non scolla nella finestra di input, difficoltoso scrivere.





- id: 15449
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2011-01-17 12:12:00 +0100'
  date_gmt: '2011-01-17 12:12:00 +0100'
  content: |-
    Direi che hai parlato molto molto alla leggere a proposito di Gimp (Compiz non so, visto che non ne seguo alcuna news). Le modifiche fatte alla GUI sono state tante, e non tutte le proposte, evidentemente, possono essere accettate.
    Non è una motivazione il fatto che tu (o io, o qualcun altro) trovi fondamentale che GIMP copi in tutto e per tutto la GUI di Photoshop.
    La risposta che ha avuto l'ideatore delle modifiche ha perfettamente senso: "vuoi che la tua patch stasera sia già parte della GUI di GIMP? Forka... Vuoi proporla, bene proponila. Adesso le priorità sono altre", come ad esempio GEGL (basta leggere in homepage su gimp.org).
    Ad ogni modo non si può avere un'opinione chiara sulla faccenda senza aver prima letto opportunamente questo articolo: http://www.libregraphicsworld.org/news.php?readmore=675
- id: 15450
  author: azzarcher
  author_email: azzarcher@gmail.com
  author_url: http://azzsthoughts.netsons.org/
  date: '2011-01-17 12:34:00 +0100'
  date_gmt: '2011-01-17 12:34:00 +0100'
  content: Veramente un bel post! Bravo! :)
- id: 15451
  author: Coniglio
  author_email: keteremillpario@gmail.com
  author_url: http://anonimoconiglio.blogspot.com
  date: '2011-01-17 14:24:00 +0100'
  date_gmt: '2011-01-17 14:24:00 +0100'
  content: |-
    Condivido il post, ovvero il messaggio. Alla fine uno può rilasciare il codice aperto ma non essere disposto a cambiamenti e quindi gestire il suo prodotto open come una cosa chiusa.

    Tuttavia, io credo che il fork sia sempre legittimo, anzi è parte del mondo open proprio perché la stessa licenza lo garantisce. Non so, mi vengono in mente tanti esempi, ma quello di Zeitgeist non accettato in Gnome forse è il più evidente. (qui so bene che non è un fork però non è stato accettato per motivi di "impegno").
- id: 15452
  author: Stefanauss
  author_email: ''
  author_url: http://twitter.com/Stefanauss
  date: '2011-01-17 14:32:00 +0100'
  date_gmt: '2011-01-17 14:32:00 +0100'
  content: |-
    "potremmo considerare di inserilo come opzione, in fondo un pannello in più o in meno che cambia."

    La risposta a questo la trovi esposta nella ML che tu stesso hai linkato: ogni concetto di interfaccia supplementare sarebbe una rogna pazzesca in quanto a manutenzione; in secondo luogo, renderebbe l'interfaccia inconsistente attraverso installazioni multiple, con tutti i problemi di documentazione, supporto e bug report che ciò comporta.

    L'eccessiva rudezza della risposta rimane, e probabilmente non si è fatto granchè per dare ulteriori motivazioni allo sviluppatore della patch, ma non è come se il tono della risposta quotata sia quello generale del feedback che sigetch sta ricevendo. A quotare solo quel pezzettino e articolare una polemica sopra, sembra un intero team a fare ostruzionismo becero. Non è così.

    Per la patch in sè, creare un prototipo di GUI non è la tipica patch del tipico sviluppatore volenteroso che vuole dare il suo contributo. Non è un lavoro di implementazione, migliorìa o correzione di qualche (nuova?) funzionalità nel quale lo sviluppatore ha una sua forte autonomia che gli deriva dal suo dedicarsi al task specifico.

    Sigetch ha prodotto del codice che tipicamente ha bisogno di derivare da un attento processo di design SENZA partecipare al processo di design. Che in GIMP è collaborativo, con dei responsabili/coordinatori designati dal team.

    E va tutto bene fintanto che si tratta del famoso "Scratch Your Own Itch" (ed è questo il caso), ma se sigetch si aspettava fin da quando ha cominciato a lavorare sul codice (e a leggere la ML, sembra assolutamente così) di vederselo integrato in GIMP attraverso un lineare commit &gt; revisione &gt; merge/merge opzionale allora ha fatto quantomeno un ingenuo errore di valutazione, visto che stava operando sulla _GUI_ di *GIMP*.

    La patch poteva anche essere perfetta e alla fine del controllo qualità. Possono mandarne 5 altre nella settimana entrante con altrettanti prototipi di GUI con codice di altissima qualità. Se si tratta di prototipi lontani da quanto stabilito, sia in termini di specifiche che in termini di flusso di lavoro, dal processo di design allora non è che devono entrare nel codice di GIMP solo perchè è codice esistente, funzionante o perchè il team di GIMP è esiguo quindi "quel che viene viene".

    5-6 thread sotto ["developer with spare time..."] c'è un esempio di come il team di GIMP fornisca le idee di base sulle specifiche stabilite, cosa utilissima PRIMA di cominciare a codare se davvero si desidera massimizzare la possibilità di vedere il proprio codice integrato nel progetto.

    Ripeto, la polemica sul "vai a fatti forkare" è pretestuosa secondo me.

    @ Blaster

    Non so come mai o cosa intendessi quando hai accostato Compiz e GIMP sulla base della rarità/ritardo dei rilasci.
    Gli stalli che fronteggiano GIMP e Compiz in quanto a rilasci di versioni stabili non hanno *niente* in comune tra loro. Per dirne una, Compiz nell'ultimo anno e mezzo è stato riscritto da capo, e GIMP no.
- id: 15453
  author: Picchiopc
  author_email: picchiopc@gmail.com
  author_url: http://picchiopc.blogspot.com
  date: '2011-01-17 14:40:00 +0100'
  date_gmt: '2011-01-17 14:40:00 +0100'
  content: post davvero interessante :D
- id: 15454
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-17 14:47:00 +0100'
  date_gmt: '2011-01-17 14:47:00 +0100'
  content: |+
    Guarda ho scritto delle considerazioni:
    http://telperion.wordpress.com/2011/01/17/gimp-gui-enhancement-patch-e-non-considerazioni-sullinterfaccia/

    che io ritengo valide per un uso razionale dello spazio "a prescindere" dalla patch.

    Su

    "ogni concetto di interfaccia supplementare sarebbe una rogna pazzesca in quanto a manutenzione;"

    se esamini con attenzione gimp, vedi che è gia cosi, pannelli, finestre agganciabili, puoi comporre già ora decine di interfacce completamente diverse tra loro, un pannello opzioni strumenti orizzontali in più, opzionale, ti assicuro non ammazzerebbe nessuno.

    Poi se tutto il  mondo è abituato a trovare le opzioni strumenti li, ci sarà un perchè.

    Ad esempio su OOwriter non li hanno messi in basso per non copiare MSoffice ...


- id: 15455
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-17 15:04:00 +0100'
  date_gmt: '2011-01-17 15:04:00 +0100'
  content: |-
    Compiz nell'ultimo anno e mezzo è stato riscritto da capo per orgoglio, così come per orgoglio è chiaro che GIMP ha subito rallentamenti nella scrittura (soprattutto della one-window-mode) per nepotismo.
    Ripeto, non è un voler condannare progetti in particolare, erano solo esempi di come una maggior apertura ai contribuenti esterni porterebbe un po' più di velocità.
- id: 15456
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-17 15:05:00 +0100'
  date_gmt: '2011-01-17 15:05:00 +0100'
  content: Esattamente, in realtà la fatica sarebbe molta meno, e come ho già detto
    oggi su oneOpenSource, e credo che tu mi abbia letto, se una cosa *merita* di
    stare in un posto non c'è concetto di copia che tenga.
- id: 15457
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-17 15:06:00 +0100'
  date_gmt: '2011-01-17 15:06:00 +0100'
  content: Certo che il fork è legittimo, per carità, ma non dev'essere l'unica strada.
    Semmai l'ultima risorsa.
- id: 15458
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-17 15:07:00 +0100'
  date_gmt: '2011-01-17 15:07:00 +0100'
  content: "È chiaro che il lavoro da fare è tantissimo, ma non mi pare che la risposta
    fosse stata *proprio* quella :D"
- id: 15459
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-17 15:07:00 +0100'
  date_gmt: '2011-01-17 15:07:00 +0100'
  content: Disqus MERDA maledetti
- id: 15460
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-17 15:08:00 +0100'
  date_gmt: '2011-01-17 15:08:00 +0100'
  content: Eeeesatto =)
- id: 15461
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-17 15:08:00 +0100'
  date_gmt: '2011-01-17 15:08:00 +0100'
  content: Grazie :)
- id: 15462
  author: Shaytan
  author_email: shaytan@linuxedintorni.org
  author_url: ''
  date: '2011-01-17 15:28:00 +0100'
  date_gmt: '2011-01-17 15:28:00 +0100'
  content: |-
    Ci sono tre punti che vanno approfonditi a mio avviso, i costi, umiltà e democrazia.
    Anche se il "vil denaro" in questi casi dovrebbe avere un impatto minimo e non considerabile ci si trova spesso di fronte a costi spesso insormontabili.
    Iniziare e tirare avanti un progetto tutto da soli è una cosa difficile se non impossibile ed allora ecco che si cercano proseliti per la propria causa con effetti strani.
    Chi si rende subito disponibile in modo gratuito ed invece chi pensa subito al denaro, purtroppo in questi casi devi rivolgere il tuo sguardo ad ambienti poco raccomandabili (leggi banche) che nel 99% dei casi snobbano il tuo progetto per milioni di motivi diversi.
    Conclusione il progetto va a rilento, sopravvive per qualche tempo e poi inesorabilmente muore sotto i colpi di un mercato veloce e pieno di soluzioni immediatamente pronte a costi tutto sommato abbastanza accettabili.
    Fattore umiltà, in questo caso esiste una semplice frase che è necessario ripetersi tutte le mattine davanti allo specchio appena alzati "per quanto io sia bravo c'è sempre qualcuno più bravo di me, se ne trovi un tipo del genere zitto ed osserva magari tra qualche tempo potresti essere tu che insegni ad altri".
    Ultimo punto, democrazia.
    In una società che ne ha sempre meno di questa sana abitudine e che piuttosto ci infonde modelli umani, ma preferirei definirli casi umani, che fanno delle loro decisioni virtu insindacabili un tocco di sana democrazia aiuterebbe molto, il progetto è open a mio avviso va immaginato come una grande piazza dopo ogni collaboratore, con garbo, dice la propria opinione e consiglia le proprie soluzioni.
    Sta ad un capo illuminato far si che molte voci diventino un unico ed armonio coro.
- id: 15463
  author: Stefanauss
  author_email: ''
  author_url: http://twitter.com/Stefanauss
  date: '2011-01-17 15:29:00 +0100'
  date_gmt: '2011-01-17 15:29:00 +0100'
  content: |-
    Per "inserire come opzione" facevo riferimento alle opzioni a tempo di compilazione. Questo è stato categoricamente escluso per le ragioni di cui sopra.

    La flessibilità che menzioni tu c'è, ma è tutta già integrata nel codice, viene compilata di default e segue il resto del codice in caso di grossi cambiamenti. Non aumenta la complessità della manutenzione.

    Poi è chiaro che ha il potenziale per diventare una modalità di disposizione opzionale degli strumenti, ufficialmente inclusa nel codice di GIMP. Ma ripeto, non deve diventarlo solo perchè "è qui e funziona, mettiamola". Pressochè qualsiasi cosa può essere opzionale, non significa che debba essere inclusa per tale ragione.
- id: 15464
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-17 15:32:00 +0100'
  date_gmt: '2011-01-17 15:32:00 +0100'
  content: Esattamente ciò che ho cercato di dire (a parte i costi) con questo post.
    Grazie del commento Shà ;)
- id: 15465
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-17 15:35:00 +0100'
  date_gmt: '2011-01-17 15:35:00 +0100'
  content: |
    e tra l'altro riscritto in C++ nemmeno troppo bene a dirla tutta, perchè è abbastanza inusabile.
- id: 15466
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-17 15:44:00 +0100'
  date_gmt: '2011-01-17 15:44:00 +0100'
  content: "Il punto fondamentale è\nrivedere, mettere in discussione l'attuale pannello
    \"opzioni strumenti\", che onestamente, è un vero obrobrio, poi del \"come\",
    se ne può parlare tranquillamente mediando le varie opzioni. \n"
- id: 15467
  author: Stefanauss
  author_email: ''
  author_url: http://twitter.com/Stefanauss
  date: '2011-01-17 15:45:00 +0100'
  date_gmt: '2011-01-17 15:45:00 +0100'
  content: |-
    È stata proprio il ritmo di sviluppo frenetico di Compiz, ottenuto accettando praticamente qualsiasi cosa o giù di lì, a trasformarlo in una matassa di codice non mantenibile e con pochissime prospettive di estensione. Per questo è stato riscritto, altro che orgoglio.
    La velocità nei rilasci non può essere ottenuta a scapito della stabilità e mantenibilità del codice, che non sono capricci da developer, ma una cosa che si ripercuote sull'utente alla fine (tant'è vero, 0 evoluzione sul Compositing Manager della distro linux più usata, per oltre un'anno).

    GIMP soffre di mancanza di sviluppatori, in quanto a numero. A questo è dovuta la lentezza di sviluppo, oltre al fatto che non è il software della Domenica, è GIMP, ce n'è di che spulciare prima di toccare il codice. Ad esempio, lo sviluppatore della OWM è assente da 3 mesi, motivo principale per il quale questa parte del codice è in stallo (dovrebbe ricominciare il mese prossimo). Ma non vuol dire che non appena sbuca un contributo esterno (questo come già detto è anche "troppo esterno") debba essere necessariamente accettato perchè è merce rara.
- id: 15468
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-17 16:18:00 +0100'
  date_gmt: '2011-01-17 16:18:00 +0100'
  content: |
    No, tutto il "qualsiasi cosa" di compiz erano plugin scritti già in c++, o interfacce (ccsm tool vari) scritti perlopiù in python-
    Ora è il core che è stato riscritto, per un motivo semplice, "C" è un gran casino e pochi ci sanno mettere le mani senza far danni.

    GIMP soffre di mancanza di sviluppatori, perchè è in "C", gnome ha gli stessi problemi, rispetto a KDE ad esempio, che è tutto in C++.
- id: 15469
  author: Coniglio
  author_email: keteremillpario@gmail.com
  author_url: http://anonimoconiglio.blogspot.com
  date: '2011-01-17 16:47:00 +0100'
  date_gmt: '2011-01-17 16:47:00 +0100'
  content: |-
    Sì, anche su questo siamo d'accordo. Il fork alla fine è l'ultima via di uscita, non dovrebbe essere preso alla leggera.

    Il problema è la cattiva gestione, se uno non gestisce le cose con un minimo di "democrazia" per così dire, poi ti forkano tutto. Infatti progetti FLOSS che vengono tenuti al chiuso o gestiti in modo poco "open" hanno ben poco da condividere della filosofia del free software
- id: 15470
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2011-01-17 20:46:00 +0100'
  date_gmt: '2011-01-17 20:46:00 +0100'
  content: Infatti 'sta storia dell'orgoglio non si regge in piedi, e non ho capito
    da dove salta fuori...
- id: 15471
  author: Stefanauss
  author_email: ''
  author_url: http://twitter.com/Stefanauss
  date: '2011-01-17 21:30:00 +0100'
  date_gmt: '2011-01-17 21:30:00 +0100'
  content: |-
    Non so in che linguaggio fossero scritti originariamente i plugin, e mi sembra che in effetti siano già passati da una riscrittura all'epoca, ma molti plugin di default sono stati riscritti (di nuovo?) dopo il cambio di core, tant'è vero che gli ultimi lotti di plugin portati al nuovo core stavano arrivando poco prima dell'annuncio di Compiz come WM di Unity per Ubuntu. Poi non ho sentito più niente di nuovo su quel fronte, ma di certo c'erano dei port in corso.

    Per il resto, assai probabile che il grosso della motivazione per la riscrittura sia il cambio del linguaggio di programmazione, per via della doppia faccia della stessa medaglia: poca base di programmatori capaci di maneggiare il C a dovere + difficoltà intrinseca del programmare a così basso livello, quindi più difficoltà a generare codice bug-free e via dicendo...
- id: 15472
  author: Emanuele Rampichini
  author_email: ''
  author_url: http://twitter.com/emanuele_r
  date: '2011-01-18 11:54:00 +0100'
  date_gmt: '2011-01-18 11:54:00 +0100'
  content: |-
    Ti ringrazio per aver citato il mio post e faccio dei commenti al tuo. Il mio punto di vista è che l'apertura è un processo tanto umano quanto tecnico. Tutti e 2 gli aspetti devono coesistere. Tecnicamente un progetto deve saper mantenere delle barriere all'ingresso molto basse per chi vuole ed è in grado di contribuire. Avere una documentazione degna di nota, predisporre strumenti per far familiarizzare un nuovo programmatore con la codebase, avere strumenti per tracciare le regressioni dovute a pezzi di codice in modo che un nuovo contributo non sia visto dai core developer come un fardello da mantenere etc... Naturalmente progetti che inseguono le feature da subito lasciando in secondo piano questi aspetti arriveranno ad un punto in cui la complessità del progetto finirà per scoraggiare anche il più abile dei programmatori.

    Il lato umano è invece quello che interviene quando si decide di non accettare un contributo. Ci sono 1000 motivi per non accettare un contributo, ma 0 per cui si possa evitare di dare una spiegazione e liquidare una persona volenterosa (stiamo parlando di gente che arriva "patch in mano") con un "mantieniti una tua versione".

    L'uovo di colombo in questo caso consiste nel facilitare la collaborazione al progetto nelle modalità giuste e fare della partecipazione un processo inclusivo. Secondo me un qualsiasi programmatore che si presenta con una patch (che non sia qualcosa di triviale) va accolto come un "potenziale" futuro core developer  e sarebbe bene accompagnarlo all'interno del progetto sia tecnicamente che umanamente per vedere se è in grado si esprimere quel potenziale.

    Solo in questo modo si può creare quel ricambio essenziale a mantenere vivo il progetto a lungo termine.
- id: 15473
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-18 11:59:00 +0100'
  date_gmt: '2011-01-18 11:59:00 +0100'
  content: Esattamente, il punto sta proprio nel non essere scortese. Ogni modifica,
    anche non accettata, va comunque un minimo discussa e il contribuente non deve
    avere l'impressione di trovarsi davanti a un muro di mattoni anzichè davanti a
    persone :P
- id: 15474
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2011-01-18 12:05:00 +0100'
  date_gmt: '2011-01-18 12:05:00 +0100'
  content: Magari hanno trovato scortese uno che dopo mesi di studio sull'interfaccia
    e definizione della Vision arriva e dice "io sono più bravo, vi ho fatto tutto".
    Ipotizzo eh, succedono cose simili anche nei LUG...
- id: 15475
  author: Emanuele Rampichini
  author_email: ''
  author_url: http://twitter.com/emanuele_r
  date: '2011-01-18 12:47:00 +0100'
  date_gmt: '2011-01-18 12:47:00 +0100'
  content: |-
    Mi sono andato a leggere tutta la discussione sulla mailing list e devo dire che il comportamento degli sviluppatori e di chi ha contribuito è stato nel caso della di gimp estremamente corretto. Sono state date tutte le motivazioni del caso sulla patch e su cosa fosse interessante e cosa no, tutto in un ambiente calmo e rispettoso delle reciproche posizioni.

    La mia era un'opinione generale e non legata a nessuna vicenda in particolare. ;-)
- id: 15476
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2011-01-18 12:54:00 +0100'
  date_gmt: '2011-01-18 12:54:00 +0100'
  content: Infatti lo sospettavo anch'io, per questo rispondevo a Bl@ster. :)
- id: 15477
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-18 13:13:00 +0100'
  date_gmt: '2011-01-18 13:13:00 +0100'
  content: "Il comportamento, nel caso specifico, sarà pure formalmente corretto,
    ma ne fatti, evita di ridiscutere, mettere mano al tallone d'achille dei gimp,
    ovvero l'interfaccia più farraginosa e confusa mai vista, e il recente lavoro
    fatto per l'interfaccia unica, non migliora affatto la situazione, anzi. \nCome
    dici tu il punto in cui la complessità del progetto finisce per scoraggiare anche
    il più abile dei programmatori. è già arrivata da un pezzo, frutto di continue
    aggiunte su aggiunte ad uno schema base errato di partenza (parlo sempre di interfaccia)
    mentre ad esempio progressi vengono fatti nel motore grafico (lasciamo perdere
    GEGL per ora che trasforma gimp in un bradipo su un quadcore) mentre l'interfaccia
    resta quella di 6 anni fa.\nE gli utenti passano ad altro  ...\nOvvio queste sono
    mie considerazioni personali.\n\nPS leggo sempre i tuoi articoli su AD, e ti faccio
    i miei complimenti."
- id: 15478
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-18 13:15:00 +0100'
  date_gmt: '2011-01-18 13:15:00 +0100'
  content: 'Piccolo OT: GEGL lo abiliti a tempo di compilazione?'
- id: 15479
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2011-01-18 13:39:00 +0100'
  date_gmt: '2011-01-18 13:39:00 +0100'
  content: |-
    "l'interfaccia più farraginosa e confusa mai vista"
    "lasciamo perdere GEGL per ora che trasforma gimp in un bradipo su un quadcore"
    Sei sempre libero di dimostrare di sapere fare di meglio. A fare critiche "a bomba" siamo capaci tutti, io, tu, Bl@ster, chiunque... Ma lasciano il tempo che trovano.
- id: 15480
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-18 13:46:00 +0100'
  date_gmt: '2011-01-18 13:46:00 +0100'
  content: |-
    È proprio questo il problema: persone che l'hanno fatto... e si sono sentite dire "si ma adesso abbiamo altre priorità".
    Ciò che mi fa specie peraltro è che gli stessi sviluppatori di GIMP *sanno* che l'interfaccia è pessima (e non parlo dei multipli pannelli flottanti, che a me piacciono), ma preferiscono... beh il resto l'hai letto :D
- id: 15481
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2011-01-18 13:53:00 +0100'
  date_gmt: '2011-01-18 13:53:00 +0100'
  content: |-
    "e non parlo dei multipli pannelli flottanti, che a me piacciono"
    Il punto è che la gente che parla a sproposito critica 24 ore su 24 i pannelli flottanti, che oltre ad essere utili sono anche assai simili a quanto si ha con Photoshop su Mac, quindi si straparla tanto per nulla. Le priorità sono altre, ovvio...
    GIMP non supporta ancora la quadricromia, oltre a tante altre cose... Se permetti la GUI si riesce ad usare anche adesso.

    Ah tra parentesi, come ti ho già detto, diverse proposte fatte da quel tizio verranno integrate in GIMP, specialmente la parte dei pennelli. Le modifiche alla GUI sono un'altra cosa, semplicemente perché sono avventate e cozzano con la vision generale. Perciò prima di accettare qualsiasi cosa, i developer saggi ci riflettono un attimo. E poi posticipare non è rifiutare.
- id: 15482
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-18 13:58:00 +0100'
  date_gmt: '2011-01-18 13:58:00 +0100'
  content: |-
    lazza mavaffa ... provocatore del c.

    scusami blaster ma sto cogli. supponente proprio non lo reggo.

    Paece&amp;love
- id: 15483
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-18 14:00:00 +0100'
  date_gmt: '2011-01-18 14:00:00 +0100'
  content: |-
    lo lo abiliti dai menu colore e visualizza, di default non è attivato.
    Visualizza uda gegl per renderizzare l'immagine in finestra, colori lo usa per le operazioni con i vari filtri.
- id: 15484
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2011-01-18 14:11:00 +0100'
  date_gmt: '2011-01-18 14:11:00 +0100'
  content: |-
    Mi fa davvero ridere che uno dopo aver mollato critiche gratuite sul lavoro di sviluppatori che ci hanno permesso di avere un software di tale livello, venga a dire "supponente" al primo che capita.
    Ti prego, continua... :D
- id: 15485
  author: ''
  author_email: federico.ruggi@gmail.com
  author_url: ''
  date: '2011-01-21 14:19:00 +0100'
  date_gmt: '2011-01-21 14:19:00 +0100'
  content: |-
    Nel mio piccolo di sviluppatore, condivido appieno.
    Seguo parecchio la scena open spulciando tra github, ohloh, sourceforge ecc ecc e molti progetti assolutamente promettenti arrivano a un punto morto unicamente per via della "immaturità" del core developer di turno. E proprio l'immaturità (unita spesso alla flessibilità mentale di un palo della luce) è la causa della mal riuscita di un sacco di programmi open.
    Insomma, siamo tutti buoni a straparlare di open source ma poi quando si coda diventiamo gelosi come delle siciliane nei confronti dei nostri prodotti ^^'
    Concordo pienamente anche sul discorso del "fork selvaggio" come pessima abitudine, anche se spesso proprio a causa della testardaggine di chi tira le fila del progetto in questione è l'unica soluzione :S

    Ciao e complimenti per il blog, ti leggo spesso anche se non ho mai commentato
- id: 15486
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-21 14:30:00 +0100'
  date_gmt: '2011-01-21 14:30:00 +0100'
  content: Grazie a te per il commento, non conoscevo Oloh e mi sembra una piattaforma
    fantastica :)
- id: 15487
  author: FkCek
  author_email: fkcek@me.com
  author_url: ''
  date: '2011-01-21 15:10:00 +0100'
  date_gmt: '2011-01-21 15:10:00 +0100'
  content: |-
    "Il punto è che la gente che parla a sproposito critica 24 ore su 24 i pannelli flottanti, che oltre ad essere utili sono anche assai simili a quanto si ha con Photoshop su Mac, quindi si straparla tanto per nulla."

    Funzionano in maniera differente, quelli di GIMP perdono il focus a ogni click.
- id: 15488
  author: FkCek
  author_email: fkcek@me.com
  author_url: ''
  date: '2011-01-21 15:10:00 +0100'
  date_gmt: '2011-01-21 15:10:00 +0100'
  content: |-
    "Il punto è che la gente che parla a sproposito critica 24 ore su 24 i pannelli flottanti, che oltre ad essere utili sono anche assai simili a quanto si ha con Photoshop su Mac, quindi si straparla tanto per nulla."

    Funzionano in maniera differente, quelli di GIMP perdono il focus a ogni click.
- id: 15489
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-21 17:27:00 +0100'
  date_gmt: '2011-01-21 17:27:00 +0100'
  content: |-
    oppure si fa un golpe come ffmpeg (e scusa se è poco)
    http://www.ossblog.it/post/7336/ffmpeg-nuova-gestione
- id: 15490
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-21 17:30:00 +0100'
  date_gmt: '2011-01-21 17:30:00 +0100'
  content: |
    Ecco spiegaglielo tu, l'orrido bordello del focus su gimp, che io ho consumato i tasti della tastiera.
- id: 15491
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-21 17:34:00 +0100'
  date_gmt: '2011-01-21 17:34:00 +0100'
  content: |-
    Ah questa me l'ero persa :D
    Un altro argomento (e anche grosso) contro il "forka o muori" :P
- id: 15492
  author: tragic0mic
  author_email: federico.ruggi@gmail.com
  author_url: http://jellycube.org
  date: '2011-01-21 17:44:00 +0100'
  date_gmt: '2011-01-21 17:44:00 +0100'
  content: Si avevo letto... personalmente condivido i motivi dell'incazzatura contro
    niedermayer, ma mi chiedo cosa farà adesso lui e soprattutto quali saranno gli
    sviluppi (fork del fork?)
- id: 15493
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-21 17:46:00 +0100'
  date_gmt: '2011-01-21 17:46:00 +0100'
  content: |-
    Beh il software rimane quello ;)
    Hanno isolato il tizio, e buona lì :P
- id: 15494
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2011-01-21 23:29:00 +0100'
  date_gmt: '2011-01-21 23:29:00 +0100'
  content: "Comunque un fork non è cosa semplice, specie per grandi codici.\nPer forkare
    seriamente bisognerebbe avere:\n- un team almeno paritetico come numero/competenze
    a quello originale\n- almeno uno sviluppatore del team originale che conosce bene
    tutto il codice\n- la stessa quantità di denaro disponibile, e le infrastrutture\n\naltrimenti
    il fork si esaurisce molto rapidamente.\n\nE i developer lo sanno benissimo, ecco
    perchè \"se non ti piace forkalo\" è una gran presa per il culo, ed ecco anche
    perchè \"se non ti piace invece di criticare fallo tu\" è un'altra fesseria retorica.\nDammi
    mezzi e team paritetici all'originale, e vedi se te lo faccio io, e pure meglio.\n\nLOL\n\n\n\n
    \n\n"
- id: 15495
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2011-01-22 11:48:00 +0100'
  date_gmt: '2011-01-22 11:48:00 +0100'
  content: |-
    Non ho detto che sono identici, né che l'interfaccia di GIMP (o di Photoshop) sia perfetta. Non esistono interfacce perfette (anche se la Apple cerca di convincerci da anni del contrario). La GUI di GIMP è migliorabile, anche se va tenuto conto che i cambiamenti radicali vanno fatti con cautela. Diamine, c'è gente che è impazzita persino quando hanno cambiato il tema di Facebook. XD
    Non sono sicuro di aver capito a quale problema di focus ti riferisci, immagino tu intenda quello che avviene su GIMP per Mac. In quel caso è colpa di X11 di Apple, ma comunque nessuna paura. È facilmente risolvibile, come scritto qui: http://gimpitalia.it/download/install_mac
    Se invece ti riferivi ad altro allora ho capito male. :P
- id: 15496
  author: Fulvio
  author_email: esposito.fulvio@gmail.com
  author_url: ''
  date: '2011-01-23 18:57:00 +0100'
  date_gmt: '2011-01-23 18:57:00 +0100'
  content: "Ciao Blaster,\nho scoperto il tuo blog quasi per caso, e dopo qualche
    mese che mi trovo a leggerti voglio postare anch'io un commento su questa faccenda,
    facendo qualche premessa.\nNon seguo nessuna dottrina, che sia opensource, closedsource,
    questo o quell'altro metodo di sviluppo, questo o quel linguaggio di programmazione,
    etc. Detto questo parlando del tuo post in generale e non della vicenda gimp,
    sono d'accordo quando dici che la pratica del fork o muori è morta da anni (più
    che altro dovrebbe; tutto sommato, se proprio non mi piace quell'editor di testo/immagini/etc
    posso sempre riscriverlo da zero, il che potrebbe essere anche cosa buona se la
    progettazione è \"moderna\" e si porta avanti l'impegno). \n\nSono un po' meno
    d'accordo quando dici \"Bisogna essere dei leader calibrati per saper condurre
    un progetto in totale apertura, e se non lo si è, preferisco accettare che mi
    venga chiuso il ciclo di sviluppo, piuttosto che vedere esclusi tutti i miei contributi.\"
    Un progetto open source è si aperto (principalmente dal punto di vista dei sorgenti),
    ma non è senza struttura. Questo vuol dire che è il gruppo principale di sviluppo
    che ne detiene la vision e delinea la roadmap e decide cosa è giusto e cosa no.
    Si può essere anche in totale disaccordo, ma alla fine qualcuno che comanda (che
    sia un developer o un gruppo non conta) ci deve essere e se non siamo d'accordo
    con lui/loro c'è poco da fare. Se non ci fosse qualcuno che comanda allora sarebbe
    anarchia. Più che giudicare il team di sviluppo di GIMP mi chiedo perché lo sviluppatore
    non ha chiesto *prima* di mettere mano al codice se le feature che voleva implementare
    fossero utili/in linea con la visione del progetto/metteteci un buon aggettivo
    a piacere. Di solito non si va in casa d'altri facendo i padroni, se si vuole
    fare uno sforzo si chiede prima se è utile; arrivare a cose fatte ti mette davanti
    ad un out-out, o dentro o fuori, e pace se hai lavorato un mese e alla fine non
    ti viene riconosciuto. Tutto sommato il team non è stato poi così cattivo a mio
    parere.\n\nIn sostanza totale apertura secondo me non vuol dire \"ti porto il
    mio lavoro, usalo\". Apertura vuol dire: \"Hey avete delle idee e un po' di tempo,
    discutiamone assieme, e se sono buone ci lavoriamo assieme\".\n\nSpero di non
    creare altri flame :)"
- id: 15497
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2011-01-23 19:04:00 +0100'
  date_gmt: '2011-01-23 19:04:00 +0100'
  content: |-
    Mi sono espresso male con quella frase, non volevo intendere che in maniera obbligatoria qualunque contributo dev'essere incluso in un progetto, volevo semplicemente dire che prima di  rigettare del codice (e del codice funzionante, non dei mockup sterili), ci si dovrebbe mettere seduti, come dici tu, a discuterne. E visto che ormai si è reiterata la stessa storia in più commenti, non accetto nemmeno un "ritenta, la prossima volta sarai più fortunato", perchè, soprattutto con la base di sviluppo di un progetto come GIMP, puoi permetterti non solo di discutere un'idea, ma dato che usi GIT, di farne un branch sul repository ufficiale del progetto, e portarlo avanti in parallelo per, che so, un mese, e vedere che fine fa.

    È proprio per questo che Linus Torvalds ha inventato GIT, non per castrare ma per generare un workflow non indifferente anche dietro la minima feature. ;)
---
<p>Il titolo può fuorviare. In realtà non sto scrivendo di ambiti in cui funziona la politica opensource, e altri in cui non funziona: ho avuto un'interessantissima discussione a proposito di questo col mio amico <a href="http://www.oscene.net/it/">Antonio</a>, su Facebook (chi dice che ci sono solo idioti?), e forse potrei riportarne gli esiti qui, tuttavia adesso, in questo post, voglio parlare di qualcos'altro. Qualcosa che mi preme, che ho visto succedere più volte, che affossa, molte volte, i progetti open.</p>
<p>Leggevo proprio l'altro giorno infatti il <a href="http://www.appuntidigitali.it/14145/come-nasce-un-progetto-open-source/">post di Emanuele</a>, che consiglio a tutti, il quale illustra come nasce e come cresce un progetto open, le dinamiche che lo portano alla vittoria, al fallimento, allo stallo; ebbene, il carissimo Emanuele ad un tratto, verso la parte finale dell'articolo ha parlato di qualcosa a cui tengo veramente molto: l'essere poi realmente open. Questo non ha molto a che fare con la licenza, ovvero: ok, ovviamente devi licenziare il tuo progetto per essere realmente aperto, ma, quando le persone cominciano a modificare il tuo codice, devi essere in grado di apprezzare tali cambiamenti, ed un bravo sviluppatore (soprattutto un bravo project manager) ha la sobrietà e la lucidità di <strong>giudicare codice concorrente dall'alto</strong>, senza far scendere minimamente in campo l'orgoglio.</p>
<p>In molti purtroppo, hanno ridimensionato il fenomeno dell'opensource, non perchè non funzioni, ma perchè alcuni progetti molto spesso per una ripicca di qualcuno hanno subito ritardi, stalli, portando poi ad un nulla di fatto. È questo poi il motivo per cui GIMP è ancora fermo e non vengono rilasciate versioni stabili da eoni, così come accade per <strong>Compiz</strong>. Tutti progetti cari al buon telperion, che ne parla come un padre di un figlio che va male a scuola; <a href="http://telperion.wordpress.com/2011/01/15/gimp-painter-2-7-2-gui-enhancement-patch-from-gimp-ui-brainstorm-blog/">ci espone</a> di una fantastica patch per <strong>GIMP</strong> che ne modifica sensibilmente l'interfaccia grafica, portando in alto i controlli dello strumento che si sta utilizzando.</p>
<p>Proposta tale patch, quale risposta viene data? "No ma, noi abbiamo deciso così, guarda, è facile: <strong>fai un fork</strong> e applica il tuo cambiamento".</p>
<p>Ma siete scemi? L'ottica del forka o muori <strong>è morta da anni</strong>. Bisogna essere dei leader calibrati per saper condurre un progetto in totale apertura, e se non lo si è, preferisco accettare che mi venga chiuso il ciclo di sviluppo, piuttosto che vedere esclusi tutti i miei contributi. Ci sono un po' di progetti che, grazie a queste alzate d'ingegno, sono rimasti fermi anni anzichè portare la ventata d'innovazione che il loro manifesto prometteva: è ora di smetterla con quest'ottica dittatoriale del "si fa come dico io". No: si deve fare cos'è meglio per tutti. E cos'è meglio per tutti si vede, semplicemente usando il programma, provando le patch concorrenti. Potrebbe sembrare che il tutto rallenti, ma in realtà se si cominciano a scartare i contributi esterni, i tempi si faranno ancora più stretti. E col tempo l'apporto di codice al GIT del progetto calerà drammaticamente, perchè in un'ottica del genere, o sei pagato, o sei fortemente legato (in maniera sentimentale, dico) ad altri membri del progetto, oppure non ci stai, a fare la pecora.</p>
<p><strong>L'opensource è anche fantasia</strong>, e chi non lo capisce merita che il proprio progetto affondi.</p>
