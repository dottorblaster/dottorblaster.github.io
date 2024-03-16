---
layout: post
status: publish
published: true
title: Hello Miniflux, ovvero come ho scoperto il miglior RSS reader del mondo
date: 2024-03-16 16:57:39 +0100
categories: 
- Open Source
tags:
- rss
- rss reader
- feedly
- inoreader
- api
- newsflash
---

C'è una storia il cui racconto ho sempre rimandato.

Io sono sempre stato un fedelissimo utente di Feedly, fino a qualche tempo fa, talmente fedele da mantenerne il supporto dentro [Newsflash](https://apps.gnome.org/it/NewsFlash/) per un bel po' di tempo. La farò breve: Feedly come azienda a un certo punto ha deciso che degli utenti se ne sarebbe sbattuta abbastanza i cosiddetti, e contestualmente alla scadenza del developer token di Newsflash (quello associato al "nostro" App ID) ha provveduto a spiegarci in maniera assolutamente certosina che avrebbe considerato l'emissione di un nuovo token solo a fronte del fatto che il team di Newsflash (nella persona di [Jan Lukas](https://blogs.gnome.org/jangernert/)) avesse realizzato un client in grado di usare le loro feature di intelligenza artificiale.

Siccome a lui di fare questa cosa non andava, a me meno che meno, alla fine io con mio sommo scorno[^1] non ho più potuto mantenere l'integrazione con Feedly, e lui è stato costretto a togliere il supporto al servizio di sincronizzazione perché, _in the end_, con il nostro token scaduto aveva smesso di funzionare.

Questo è, diciamo, il prologo di questa storia.

In un secondo momento sono diventato un utente abbastanza affezionato di Inoreader, di cui ho anche pagato una subscription. Pochi spicci in pratica, ma erano comunque i miei spicci, e finalmente credevo di aver trovato un feed reader decente in grado di farmi riprendere l'affezione per i feed RSS come mezzo d'informazione: questo è stato vero in parte. Se con il telefono avevo un mezzo perfetto per fare questo, ovvero [NetNewsWire](https://netnewswire.com/), un'app per iOS che si integra perfettamente con Inoreader, dall'altra parte sul mio computer sono sempre stato condannato a dover abbandonare **Newsflash** (il mio client RSS preferito, a cui ho anche contribuito!) perché a meno di avere un access token dedicato la quota riservata all'access token "ufficiale" di Newsflash era esigua e costantemente cannibalizzata. Il vero problema è che Inoreader per un accesso API decente, dedicato, e comunque soggetto a rate limiting e quote piuttosto stringenti chiede un prezzo che è il triplo di una subscription normale.

Per quanto ci abbia pensato, comunque non ho mai trovato la voglia di strisciare la carta di credito per questo. Di tutte le cose per cui _adoro_ farmi rubare i soldi, l'accesso API in toto a una piattaforma è qualcosa che credo rientri comunque nei diritti di qualsiasi utente. Una questione di principio, se vogliamo. Fatto sta che l'altro giorno, non ricordo titillato in quale maniera, in call con [Gianguido](https://g7o.today/) e [Simone](https://github.com/smlb), ho iniziato a urlare frasi sconnesse sul tema e dopo un po' il buon Gianguido ha pensato bene di erudirmi sullo stile dell'apone della Cheerios: "Ma tu Miniflux l'hai mai provato? Perché sembra esattamente quello che vuoi tu - ed è self hosted".

Ovviamente la mia risposta è stata sull'onda del "se prima avevi la mia curiosità ora hai la mia attenzione", e ho cominciato a investigare.

E quindi adesso vi spiego perché Miniflux è il feed reader migliore del mondo.

Innanzi tutto ha un'interfaccia web minimalissima. E quando dico minimale intendo _davvero_ minimale, no notifiche, no toast, no cazzate, solo tu e il testo. Penso che il tutto siano solo template statici, che per un'app del genere assolvono il compito perfettamente.

Poi: installarla è una scemenza. L'applicazione specie dalla v2 in poi è un solo binario, è scritta in Go, si prende tutta la configurazione da variabili d'ambiente eccellentemente documentate. Abbisogna solo del classico Postgres d'appoggio per i dati. Io con cinque bicchieri di vino in corpo all'una di notte l'ho deployata su un cluster Kubernetes a occhi chiusi.

Terzo: siete troppo pigri per installarla da voi? Non avete un server su cui ospitare questa fantastica applicazione? Per 15 dollari l'autore vi crea un account sulla sua hosted instance. Fantastico.

La **lista delle integrazioni** è enorme: su NetNewsWire basta selezionare FreshRSS e mi pare che vada anche abilitato un layer di compatibilità API nelle impostazioni, e siamo a cavallo. Newsflash la supporta nativamente. Reeder sono sicuro che la supporti tramite il layer di Fever API. C'è la disponibilità dell'integrazione con Pocket e con letteralmente qualsiasi altra cosa ci venga in mente.

Un vero gioiello.

Da meno di 24 ore sono tornato ad appropriarmi dei miei feed RSS e devo dire che sono felicissimo, perché applicazioni come Miniflux mi fanno credere che **un'informatica fuori dalle logiche di Internet vista solo come un'enorme vetrina** sia ancora possibile.

[^1]: Anche perché è stata per molto tempo l'unica opportunità che ho avuto di stare a contatto con una codebase scritta in Rust di un certo peso e di una certa estensione.
