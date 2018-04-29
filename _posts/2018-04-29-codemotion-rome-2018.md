---
layout: post
status: publish
published: true
title: Codemotion Rome 2018, ovvero perdersi in chiacchiere invece di pensare a programmare
date: 2018-04-29 20:54:09 +0200
categories:
- Development
tags:
- codemotion
- development
- software
- erlang
- elixir
- elm
- conferenze
- functional programming
- programming
---

In questa soleggiata manco per niente domenica di Aprile[^1], smaltisco la stanchezza accumulata dalla settimana che è appena passata e che sul finale ha visto ripetersi ancora una volta l'eccezionale reunion di nerdoni di tutta Italia (circa, e anche circa un po' di gente da fuori), ovvero Codemotion. L'edizione romana è quella a cui sono più affezionato per motivi ovviamente etnici, essendo io di Roma, ma in maniera altrettanto importante perché è stata la prima, quella da cui è partito tutto, e quindi oltre l'aspetto tecnico, di crescita professionale, di crescita personale, mettiamoci anche il Grande Amarcord Anulare di tutte le edizioni passate, di tutta l'acqua passata sotto i ponti, delle [interviste a un ragazzo alle prime armi col public speaking](https://www.youtube.com/watch?v=_oFHnJYmb14) che pensava due cose e se ne dimenticava quattro per strada.

Abbandonando il pensatoio dei ricordi, questo Codemotion mi ha permesso come al solito di vedere speaker di livello e soprattutto di reincontrare amici che non ho mai occasione di abbracciare. Riguardo gli speaker, quello che ha attirato di più la mia attenzione è stato il clamore intorno alla programmazione funzionale, un keynoter particolare, e quello che mi aiuta a portare il pane a casa ovvero i talk sullo sviluppo frontend e su JavaScript più in generale.

### The Power of the Paradigm by Douglas Crockford
La sessione di keynote è stata emozionante, principalmente perché è stata tenuta da **Douglas Crockford**, l'autore della prima proposta riguardante JSON, e l'autore di "JavaScript: The Good Parts". È uno dei miei miti, quindi non potevo assolutamente perdermelo.

![The power of the paradigm - Douglas Crockford](https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/30697942_1861340607221572_1723287715497115648_o.jpg?_nc_cat=0&oh=db3ed7a0fdaa5b02dad8338031f8f05d&oe=5B519865)

Quello di cui ha parlato è stato illuminante, nel senso che ha consumato due filoni consequenziali: il primo è stato l'illustrare come i paradigmi evolvano a loro volta in altri paradigmi, e come lungo la storia dello sviluppo software siano stati trovati all'interno di determinati paradigmi dei concetti che abbiano portato al superamento di quegli stessi modi di concepire i programmi. Questo ci ha portati diretti al **nuovo paradigma** che si sta affermando, ovvero la transizione dalla programmazione sequenziale allo scambio asincrono di messaggi.

Secondo me a questo punto Crockford si è un po' perso, nel senso che ha illustrato il suo nuovo progetto, una piattaforma per portare su tutti i linguaggi quello che è sostanzialmente lo scambio di messaggi tra processi tipico di indovinate un po' quale piattaforma? Ma ovviamente la BEAM, con Erlang ed Elixir in prima fila come linguaggi con cui programmarci su.

Chiaramente Crockford ha incentrato le prime iterazioni di [Seif](http://www.seif.place/), così si chiama il suo nuovo progetto, su una prima implementazione in **JavaScript**, tuttavia Seif è un vero e proprio protocollo di cui esisteranno miriadi di implementazioni in futuro.

Questo è senza dubbio interessante, ma in una **sessione di keynote di Codemotion** avrei preferito che venisse proseguito l'aspetto concettuale, dato che alcuni punti solamente lambiti riguardo la cultura del cambiamento e dell'evoluzione paradigmatica all'interno del software potevano essere approfonditi veramente tanto.

### Unbundling the JavaScript module bundler
Il mitico **Luciano Mammino** durante il suo bellissimo talk ci ha fatto vedere quali sono i principi attraverso un cui funziona un module bundler per JavaScript come Browserify o Webpack. Siccome Webpack è un argomento che mi ha sempre affascinato, ho seguito il tutto con interesse apprezzando soprattutto il fatto che Luciano abbia anche spiegato come costruire un module bundler rudimentale attraverso pochi principi di base.

La presenza di Douglas Crockford al suo talk deve averlo innervosito un po', ma tranquillo Luciano, se ho capito io tutto quello che hai detto significa che ti sei spiegato perfettamente e ce la possono fare tutti. Voto 10+ per il ragazzo dublinese d'adozione.

### Beyond JavaScript frameworks with Elm
Nonostante io abbia cominciato a pistolare con molto poco successo con i linguaggi della famiglia ML tipo Haskell, una tecnologia che continua ad incuriosirmi per quanto riguarda le applicazioni frontend è **Elm**.

**Erik Wendel**, che è il founder dell'Oslo Elm Meetup e dell'Oslo Elm Day, ha illustrato una panoramica abbastanza ampia riguardo le funzionalità che offre Elm, quali problemi risolve, e perché sia meglio di JavaScript vanilla per le webapp. Tra le cose che ho apprezzato ci sono le seguenti:

- Un meccanismo centralizzato di gestione dei side effect
- Un linguaggio funzionale ML molto molto espressivo
- Il compilatore. Erik ha mostrato pochissimo del compilatore ma è veramente fichissimo

### BEAM in Action: scrivere una web application con Elixir
Qui si giocava in casa, ma è stato comunque un talk rilevantissimo: i carissimi **Claudio D'Alicandro** (già mio collega e fondatore di Elxir Roma) e **Gabriele Santomaggio** (eminenza dell'ecosistema Erlang) hanno presentato una panoramica dei vantaggi di programmare in Erlang o (ancora meglio) in Elixir per le proprie webapp, stressando il punto chiave alla base della keynote di Crockford della mattina.

Ovvero il fatto che non solo **Asynchronous Message Passing** è il nuovo paradigma da inseguire, ma che grazie alle feature di actor modeling esposte dalla BEAM tramite (ad esempio) i GenServer, possiamo raggiungere questo status quo con Elixir in pochissime righe di codice.

Voto 10+ anche a Claudio e Gabriele 😍

### Who's afraid of open design?
Non avevo mai sentito **Emanuela Damiani** parlare, mi ero limitato a leggere qualcosa di suo e scambiarci qualche commento in giro per l'internet. Lei è nel team che ha sviluppato [Photon](https://design.firefox.com/photon/welcome.html), il nuovo design system alla base di Firefox. Ci ha parlato di come Mozilla si è messa in gioco per implementare davvero una strategia di open design, di come il team si sia dovuto fidare della community su alcune scelte, e abbia per altre dovuto imparare a comunicare le decisioni all'esterno.

E perché no, anche imparare a ricevere feedback.

Il talk di Emanuela è stato molto bello, perché ha contribuito secondo me a demistificare da un lato, e valorizzare dall'altro, l'operato di **Mozilla** che spesso è vista come una sorta di organismo immanente, ma che al suo interno in realtà ha delle persone che sono sensibili ai feedback come tutti noi e che cercano semplicemente di fare il loro lavoro al meglio.

Il nuovo Firefox per quanto mi riguarda è espressione perfetta di questo. E con le bellissime slide di Emanuela ho chiuso il mio giorno 1, lasciando perdere (mea culpa (?)) la birra finale dato che c'era una folla tale che sembrava un mosh pit ad un concerto dei Meshuggah.

Dopo il birrozzo in realtà c'era un altro intervento di rilievo che però ho saltato per negligenza (perdonatemi ragazzi!), ovvero il già citato **Claudione D'Alicandro** insieme a **Enrico Risa** per un talk a due bocche, quattro mani e quattro gambe tipo Goro di Mortal Kombat sulla combinazione di codice Elixir e Rust per applicazioni distribuite e iperperformanti.

### Giorno 2: "Ah ma siamo ad una conferenza?"
Ultimamente sto provando una certa avversione nei confronti del mondo dei videogiochi, inspiegabilmente. Questo ha fatto si che il giorno 2, dove la track di game development era leggermente più nutrita, in preda ad una certa mancanza d'attenzione[^2], ho preferito **non guardare nessun talk** dato che la scaletta che ho visto ha solleticato a malapena la mia curiosità.

![Richard Feldman](https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/30688170_1861339620555004_7457367328250920960_o.jpg?_nc_cat=0&oh=89c7d120186b933580ee4bb0f363be32&oe=5B54A5E5)

Tra le cose interessanti che c'erano, in mezzo al marasma di talk sullo sviluppo videoludico, ho identificato queste:

- What Service Workers can do - di Maurizio Mangione (ciao Mauri! Mi hai salutato in conferenza ma ero veramente storto di sonno)
- Monads Explained for OOP Developers - di Mikhail Shilkov
- What Haskell taught us when we were not looking - di Eric Torreborre

Cui però non ho dato spago. Quello che invece ha impiegato la maggior parte del mio tempo è stato **bighellonare** insieme al mio esimio collega [Francesco](http://francesco.codes) e al mio tecnicamente ineccepibile compaesano [Alessandro](https://github.com/lifeisfoo) parlando principalmente di programmazione funzionale, Lisp, Haskell, amenità, infrastrutture ridondate, sarcicce.

**Codemotion** si conferma anche con questa edizione quindi non solo quel coacervo di talk interessanti che è già da un paio d'anni, continuando ad alzare il tiro sia con gli speaker che con i keynoter, ma anche l'occasione a Roma e Milano per incontrare quegli amici che non vedi mai, con cui interagisci troppo tempo da dietro una tastiera e un monitor, per chiacchierare **a colpi di birra** anziché di righe di codice.

L'unico **difetto** che gli trovo comincia ad essere la track sul game development, dato che mi sembra una cosa abbastanza rara che le persone interessate a quella specifica traccia si facciano contaminare anche dalle altre, mentre chi frequenta Codemotion per (attenzione, buzzword in buca) DevOps, sviluppo frontend (React, Elm et similia), programmazione funzionale - ripeto - a me pare che non abbia molto l'interesse, a parte rari casi, di spararsi un'ora di sviluppo di videogiochi. Ma probabilmente è un mio limite, e sto solo generalizzando l'impressione che ho avuto personalmente.

Il **verdetto finale** non richiesto è ovviamente che anche le prossime edizioni mi vedranno in prima fila. Vorrei arrivare a proporre un talk. Che la Forza sia con me, con lo staff di Codemotion (sempre cari ragazzi), e con tutti li nostra.

*Questo post è stato scritto principalmente su due letti, uno a Palestrina e uno a Cetona. Le foto sono ovviamente dei bellissimi e bravissimi ragazzi di Codemotion. La colonna sonora è [To Be Everywhere Is To Be Nowhere](https://it.wikipedia.org/wiki/To_Be_Everywhere_Is_to_Be_Nowhere) dei Thrice.*

[^1]: È chiaramente riferito a quando ho iniziato a scrivere questo post, non certo quando l'ho finito, che mortacci mia che so solo li mia è quasi il ponte del primo maggio e io ancora sto qua a spippolà con 'sta tastiera.

[^2]: Tutta canalizzata verso un brunch che si stava tenendo nel frattempo da Vintro.
