---
layout: post
status: publish
published: true
title: Cauldron dev log, settimana #8
date: 2024-10-07 21:04:39 +0200
categories: 
- Category
tags: 
- first_tag
- second_tag
---

Da metà Luglio più o meno sto scrivendo un **client Pocket per Linux** che ho iniziato per un paio di motivi principali:

- Mi serviva, essendo io un utente del servizio, e mi dava enormemente fastidio che l'unico client decente fosse quello ufficiale per macOS;
- Non avevo mai sviluppato un'applicazione con la GUI che non fosse una webapp, e mi sembrava il momento storico adatto per cimentarmi con questa sfida.

Avendo maturato una precisa consapevolezza di quale è lo stato dell'arte sullo sviluppo in Rust e GTK, e dovendo il talk che farò a openSUSE Asia poggiare su un esempio reale, mi ci sto dedicando da più di due mesi settimanalmente.

Oggi sono riuscito a implementare la dark mode senza particolari barbatrucchi:

![Cauldron dark mode :-)](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/cauldron/Schermata_del_2024-10-07_20-15-09.png)

In realtà la cosa peggiore finora, oltre far visualizzare la webview per renderizzare il contenuto degli articoli, è stata riuscire a iniettare del CSS dentro la webview stessa. L'approccio che ho scelto è subottimale ma funzionale: scorrendo le callback messe a disposizione dalla struttura dati della webview ho visto che c'era una `connect_resource_load_started`, che viene eseguita a ogni carimento (appunto) di una risorsa remota. In questo modo avendo accesso all'istanza della webview da un punto strategico è possibile innestare nel meccanismo "reattivo" di Relm4, che ho scelto come libreria che orchestra gli update all'interfaccia, del codice che provvede a impostare nel content manager della vista stessa il foglio di stile necessario per il rendering corretto.

Questo era necessario prima di tutto perché altrimenti detto senza mezzi termini la UI faceva schifo, pena e pietà; ho però rubato un paio di trucchetti dal codice di NewsFlash in merito e ho scoperto che reagendo a un paio di classi CSS apposite è possibile anche supportare la dark mode di GNOME senza nessuno sforzo.

A parte quello di scrivere quelle **due righe di CSS** in più, chiaramente.

Oltre questo ho implementato un paio di cose stupide ma che fanno sembrare l'applicazione un po' più vera e meno un giocattolo:

- La UI adesso reagisce in maniera appropriata quando un articolo viene archiviato, togliendolo dalla lista degli articoli disponibili e tornando allo stato iniziale;
- C'è una piccola call to action che fa da empty state quando nessun articolo è selezionato. Pensavo fosse una scemenza, invece mi piace un sacco il feeling :)

![Cauldron "empty state"](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/cauldron/Schermata_del_2024-10-07_20-10-56.png)

Sto togliendo piano piano tutta la rumenta grossa a livello di codice che ci può essere a livello di debito e di UX. Non sono ancora soddisfatto del testing, ma ci sono due cose che mi preme fare prima di subito:

- La submission su FlatHub
- Scrivere un README decente, con screenshot e quel poco di documentazione che fa la differenza tra un progetto amatoriale e uno, invece, serio.

Oltre questo, vorrei chiedere gentilmente un logo al design team di GNOME perché le mie abilità con Inkscape sono al livello di una scimmia ubriaca.
