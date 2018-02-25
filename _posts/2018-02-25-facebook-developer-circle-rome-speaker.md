---
layout: post
status: publish
published: true
title: Come ci si sente a fare lo speaker al Facebook Developer Circle
date: 2018-02-25 21:18:13 +0100
categories:
- Development
tags:
- speaker
- facebook
- development
- meetup
---

A quasi un mese di distanza, mi sembra giusto parlare del fatto che sono stato speaker in un meetup: lo scorso **Facebook Developer Circle** di Roma. Strano che non ne abbia parlato prima, ho come buttato la cosa nel dimenticatoio, ed è strano perché invece sono veramente fiero di com'è andata, del tema che ho trattato, delle tecnologie che ho usato per il mio proof of concept.

Generalmente i meetup che frequento stabilmente sono due: RomaJS, di cui sono un affezionatissimo, ed Elixir Roma, a cui ormai lavorando con [Claudio](https://github.com/claudio-dalicandro) e facendogli da vassallo nell'organizzazione sono legato per la vita. (:-D)

Nel corso del tempo mi sono accorto di aver bisogno di sgranchirmi come speaker, così quando [Innocenzo](https://twitter.com/innosans) e [Giovanni](https://twitter.com/joaolaq) hanno deciso di cooptarmi per farmi diventare il loro uomo della serata - insieme a degli altri eccezionali compari - sono stato ben lieto di dirgli si in modo da vedere se potevo cavarmela di fronte a quel tipo di audience o se a ventisette anni devo già relegarmi tra i grandi successi del secolo scorso. A proposito, grazie per lo speaker pack[^1] ragazzi!

![Facebook Developer Circle: Rome - Alessio Biancalana](https://scontent.ffco3-1.fna.fbcdn.net/v/t1.0-9/27459180_10212981994718743_4729740938426117354_n.jpg?oh=e5c89371b87504c69bbdb95f47e5ec97&oe=5B06A53C)

E invece è andata bene: l'argomento che ho deciso di trattare è stata la creazione di un **chatbot sulla piattaforma di Facebook Messenger** in pochissimo tempo. Per scrivere il bot mi sono destreggiato con Elixir in una giornata natalizia, e devo scrivere che per tanti aspetti questo ha contribuito a farmi credere ancora di più che Elixir sia adatto sia per codebase piccole che per grandi monoliti. In foto mi vedete ritratto da Andrea Millozzi mentre cerco di commentare una [mappa](https://elixir-lang.org/getting-started/keywords-and-maps.html) che non è uscita fuori esattamente nel modo che mi aspettavo, e che rappresenta una risposta dei server di Facebook a un evento di messaggistica arricchito con dei dati relativi al Natural Langiage Processing del messaggio.

Se non ci metto del mio in termini di **idiozia** non sono mai contento, così ho inserito (dato il clima delle festività passate) un pezzettino di logica ulteriore che facendo leva sulle meccaniche dell'NLP offerto da Facebook, in caso di auguri, risponda con "a te e famiglia". Utile per il prossimo Natale, no?

![Facebook Developer Circle: Rome - gente con la maglietta di dottorblaster addosso](https://scontent.ffco3-1.fna.fbcdn.net/v/t1.0-9/27459883_10215477712672994_7294638152338622741_n.jpg?oh=9e14a9ed26c0b1a3cc7e611e763f18e6&oe=5B13B7A5)

E (lo so che non si iniziano i periodi con "e", ci sono andato a scuola, ma il libero arbitrio prevede anche fottersene delle regole dei grandi) se tutto questo non basta per fare una grande serata, a quanto pare entrando in sala ho scoperto di avere un fan club. A quanto pare l'insanità mentale che mi porto dietro ha deciso di estendere i suoi tentacoli ai miei amici, che si sono fatti fare di nascosto delle **magliette** che potete vedere in diapositiva, per poi sfoggiarle la sera del meetup. Giusto per farmi rilassare quei cinque minuti prima di parlare, senza mettermi pressione addosso.

### Il lato tecnologico
Facebook permette di mettere in piedi un bot in pochissimo tempo, basta creare un'applicazione dal developer portal, legarla a una fanpage, dopo di che abilitare la piattaforma Messenger e utilizzare il token che ci viene fornito. In aggiunta a questo c'è il webhook da configurare. Il mio talk ha parlato di questo, detto in estrema sintesi.

Quello su cui voglio concentrarmi adesso invece è qualcosa di leggermente diverso, ovvero la codebase del bot, scritta in Elixir, che potete trovare su [GitHub](https://github.com/dottorblaster/atefbot). Ho deciso di scrivere il bot in Elixir per due ordini di motivi:

- Avere alla fine del processo di sviluppo **una demo** da portare al talk che non fosse un copincolla della documentazione di Facebook, che pur fatta benissimo è molto incentrata su **NodeJS**;
- Mettere alla prova **Elixir** per scrivere una codebase semplice che però avesse una serie di caratteristiche.

Le **feature di Elixir** che ho apprezzato rispetto alla scrittura di un bot sono state i module attributes, che ho arricchito facendo arrivare il valore di un attributo direttamente dalla configurazione del bot, e la possibilità di implementare un client HTTP per i propri servizi in un tempo praticamente nullo grazie ad [HTTPoison](https://github.com/edgurgel/httpoison), con un semplice `use`.

A dire il vero volevo fare qualcosa di più, e pubblicare un client fatto decentemente per la Messenger API direttamente su [Hex](https://hex.pm/), ma non ci sono riuscito per mancanza di tempo.

### Conclusioni
Dovremmo sempre dire dei "sì" che non possiamo permetterci di dire. Da questo sì, detto in un momento in cui ero pieno di lavoro e codice da scrivere (e non solo), ho ricavato il superamento di un limite, un bel talk, un bel software, e tantissimi amici che mi hanno fatto **una delle sorprese più belle di sempre**.

[^1]: Lo speaker pack comprende una maglietta ufficiale del Facebook Developer Circle, una penna, un'agenda e non mi ricordo più che altro. La maglietta è fica, davvero - come tutto il resto d'altronde. Ma la maglietta un po' di più.
