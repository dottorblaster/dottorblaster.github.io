
---
layout: post
status: publish
published: true
title: Fediverso ed elucubrazioni connesse (Sagra IndieWeb 2026 - Febbraio)
date: 2026-02-08 12:35:15 +0100
categories:
- Tech
tags:
- activitypub
- atproto
- fediverse
- fediverso
---

[Xab](https://misskey.social/@xabacadabra) questo mese, deputato a scegliere un tema per la nostra Sagra IndieWeb, ha scelto di lanciarci l'amo sul fediverso. Ho già letto [Ed](https://cantina.ragnate.la/fediverso-sagra-indieweb-febbraio-2026/), [LaVi](https://log.livellosegreto.it/atlaviatlivellosegreto-it/il-fediverso), [TiTiNoNero](https://77nn.it/2026/02/01/Fediverso-sagra-indie-febbraio.html), e le trovo tutte visioni molto positive: in generale anch'io sono positivista in generale sulle tecnologie decentralizzate, ed essendo il Fediverso (nome molto rivendibile e carino per riferirisi in realtà a network basati su ActivityPub) una di queste sono in generale contento che esista e contento di esserci.

Detto questo però sono anche tornato da relativamente poco dal FOSDEM, in cui c'era la [Decentralized Communication devroom](https://fosdem.org/2026/schedule/track/decentralised-communication/) grazie alla quale con buona pace di Ed vi beccherete anche un po' di tecnologia in questo post. Grazie al contenuto di quest'anno di questa stanza, ho cominciato a guardare con occhio vigile alcuni aspetti di ActivityPub che avevo sempre sottovalutato. Continuerò a usare i miei account sul fediverso per postare "tutta la roba", ma penso che i tempi siano maturi anche per studiare alternative. Penso anche che ATProto sia un'opportunità troppo grossa per essere ignorata, e nei prossimi paragrafi spero anche di riuscire a spiegare perché la penso così.

## Temi trattati e bolle e balle varie
Prendo a prestito una frase di Xab che mi è veramente piaciuta e che ha risuonato nella mia testa per diverso tempo:

> Non avendo mai amato Twitter, tendo a evitare ciance su politica e cronaca che trovo noiose, ripetitive e inutili: sono antifascista e progressista, se siete da 'ste parti probabilmente la pensiamo già allo stesso modo per un buon 80%

Mi rivedo molto in queste parole: ogni volta che apro le mie timeline, sia quella più italiana che quella più internazionale (dal mio account su Fosstodon) mi trovo davanti una sfilza di roba di cui ero così saturo qualche settimana fa al punto di essere arrivato a impostare un filtro per keyword. Lungi da me essere benaltrista, ma il mondo è un posto veramente grande, molto molto più grande e vario rispetto a quello che succede oggi in Italia, o domani negli Stati Uniti. Penso che anche dare così tanta attenzione a certe nazioni e a certi atteggiamenti significhi conferirgli parte del potere che poi questi contesti hanno sulla nostra quotidianità.

Quello che adoro del fediverso invece è il fatto che riesca sempre a scoprire qualcosa di nuovo, qualcosa che mi ero perso in termini di tecnologia, videogiochi, lingue strane, persone strane. In termini di un mondo vario, per quanto la struttura del fediverso abbia i suoi grossi limiti (di fatto le istanze rappresentano delle grosse bolle, ma di questo parleremo tra poco), sicuramente rispetto a un social network centralizzato dove le logiche di visualizzazione e ban (e shadowban ove presenti algoritmi) sono unilaterali si riesce a scovare sempre qualcosa di fichissimo, se ci si impegna.

## Logiche capitaliste
Le persone si augurano che l'adozione del fediverso cresca. Lo capisco. Nonostante io mi auguri lo stesso, non mi interessa molto. Trovo che la conta degli utenti afferisca a una logica capitalista dove la sostenibilità di un progetto è legata alla sua crescita. Sicuramente tutto questo è importante, ma la cosa bella delle tecnologie decentralizzate è che possono sopravvivere rimanendo stabili o anche decrescendo. Odio chi fa i discorsi di decrescita felice grazie ai quali di solito ci svegliamo un giorno semplicemente più poveri rispetto a qualche riccone, ma allo stesso tempo non sono così ossessionato dal vedere il fediverso crescere.

L'istanza che abbiamo messo su con [Marco](https://cedmax.net/) ne è un esempio: siamo meno di dieci persone, ci conosciamo, la moderazione è facile da quel punto di vista, e la fa tutta lui basandosi sul fatto che siamo degli adulti funzionali (più o meno). E va bene così.

## Riflessioni sul protocollo
Il fediverso è, come sappiamo, soprattutto ActivityPub, il protocollo che Mastodon supporta, che Misskey pure supporta, e che qualsiasi software "del fediverso" supporta sotto la sua interfaccia. Questo protocollo, ammantato del fatto che sia uno standard W3C, ha fatto un bel po' di strada senza andare ad aggiustare le mancanze strutturali che lo rendono poco efficace per un uso davvero decentralizzato. Chiunque sostenga il contrario, a mio avviso, manca di forti conoscenze sui sistemi distribuiti e dovrebbe leggersi da cima a fondo "Designing Data Intensive Applications" di Martin Kleppmann prima di commentare ancora.

In particolare mi riferisco come contraltare alle soluzioni implementate da ATProto (per gli amici, il protocollo su cui si basa BlueSky).

In ActivityPub il concetto centrale è l'istanza. Tutto viene derivato a cascata. Questo ha delle implicazioni enormi per quanto riguarda l'identità di un utente, che di fatto può migrare da un'istanza all'altra ma non può portare i propri contenuti dalla vecchia istanza alla nuova. L'identità dell'utente è accoppiata con il server su cui sono ospitati i contenuti. Tutti quanti commettiamo degli errori, e quando è nato ActivityPub sicuramente a questi problemi si pensava in maniera diversa. Di fatto tutto questo rende la migrazione di utente da un'istanza all'altra un processo molto prono ad errori, con l'impossibilità di un evento totalmente trasparente (di base, ti sparisce la roba che avevi postato, sta sul vecchio account, e fine dei giochi).

ATProto implementa tutto questo in maniera più furba. L'identità, o DID (Decentralized IDentifier), di default viene legata a BlueSky come applicazione, ma di fatto è implementato un altro metodo di autenticazione che si chiama `did:web`. Un DID web è di fatto un `.well-known` file piazzato dentro (facciamo per esempio) il nostro sito web. In questo modo noi andiamo ad attestare la nostra identità presso un PDS (Personal Data Server), ma le due cose sono assolutamente scollegate. Questo rende possibile passare da un PDS all'altro mantenento addirittura invariata la nostra identità e il nostro handle; nessuno si accorgerà di niente quando lo faremo, e verranno aggiornati tutti i link con le dovute informazioni in maniera automatica. Questo perché l'identità è disaccoppiata dal livello dei dati.

Il PDS oltretutto è un semplicemente un "server che memorizza la roba" ed è a sua volta disaccoppiato dall'application layer. Questo significa che se esce una nuova applicazione che utilizza ATProto (per esempio un ricettario social, o una piattaforma di publishing), utilizzando la nuova applicazione andremo ad insistere sempre sul nostro PDS dove stanno i nostri dati, cambiandone semplicemente "la lente" con cui li leggiamo. In questo momento il mio did:web è ospitato su questo sito, e il PDS su cui ho i miei dati è a casa di [Gianguido](https://geesawra.industries/).

La propagazione dei contenuti è in larga parte demandata ai Relay. I Relay sono semplicemente dei "pezzi" di ATProto il cui compito è quello di far rimbalzare i dati da una parte all'altra, e sono i veri componenti traffic-heavy. Non ho idea di quanto costi hostare un relay, ma di una cosa sono certo: quando vi dicono che ATProto non è federation-first, non è decentralizzato, non è distribuito, questa cosa è una **bugia** fomentata da chi non ha voglia di leggere due pagine di documentazione.

Mi auguro che ActivityPub sappia riconoscere quello che c'è di buono altrove, perché nell'ecosistema ATProto stanno fiorendo tantissime applicazioni carine, e il fatto di potersi hostare il PDS dentro casa con relativamente poco sforzo è una figata pazzesca.

Trovo che ActivityPub sia molto maturo dal punto di vista dell'adozione, ma trovo che ATProto abbia le carte in regola per scalare meglio. Ora che tra l'altro ATProto è uno standard W3C esso stesso, abbiamo due protocolli che competono alla pari. Di solito la competizione sforna ottima tecnologia, perciò penso che a livello di protocolli nel 2026 ne vedremo delle belle.

## Conclusioni
Detto ciò, detto tutto! Non penso di abbandonare tanto presto i miei amichetti del fediverso, ma penso che nel mio prossimo futuro ci sia un sacco di codice relativo a tutte queste tecnologie. Scusate se il tono è troppo da nerd, ragazzi. D'altronde, è quel che sono.
