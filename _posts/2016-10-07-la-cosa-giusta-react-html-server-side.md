---
layout: post
status: publish
published: true
title: La cosa giusta
date: 2016-10-07 09:30:46 +0200
categories:
- Development
tags:
- development
- react
- html
- frontend
---

![Minified Javascript](https://c2.staticflickr.com/6/5017/29333109874_720a986515_b.jpg)

Nell'ultimo periodo, ho iniziato a **rivedere alcune idee** che mi ero fatto riguardo un'applicazione da scrivere nel tempo libero per testare alcune tecnologie sul campo. Quello che ho iniziato a scrivere era un banalissimo pastebin, dato che in azienda non avevamo un'istanza di un software del genere, e ho pensato che ci potesse fare comodo.

All'inizio volevo mettere in piedi un backend di API REST, composto di microservizi, con un frontend impostato con [VueJS](https://vuejs.org/) che fosse una single page app. **Per un pastebin però è troppa roba**. Pur avendo pistolato con un'implementazione del backend primitiva e con un frontendino basato su [Materialize](http://materializecss.com/), ho iniziato a pensare di "buttare" (non è la parola adatta) tutto e scrivere dei template server-side.

Quello che mi ha sorpreso, è stato leggere in questi giorni una serie di post che mi hanno fatto alzare il sopracciglio. Nell'ordine:

- [Announcing Constable, an open source Phoenix application](https://robots.thoughtbot.com/announcing-constable-our-first-open-source-phoenix-application)
- [How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.uuqjgprol)
- [How We Replaced React with Phoenix](https://robots.thoughtbot.com/how-we-replaced-react-with-phoenix)
- [Questo gist senza titolo](https://gist.github.com/threepointone/c382856fd2e2c325f8d230e85d85499b), ma stupendo

Sto per addentrarmi in una questione squisitamente relativa allo sviluppo web, che mi rendo conto essere una cosa che di riffa o di raffa non ho mai trattato ad un livello così profondamente tecnico su questo blog. Get ready.

> We started with a JSON API and a React front end and slowly migrated to server rendered HTML.

### Best practice
La cosa che mi ha lasciato impressionato è stata leggere in meno di una settimana svariati articoli, umoristici o meno, che riportavano l'attenzione proprio su questo aspetto: **sviluppare la solita single page app** con approccio REST e tutto il rest-o (hahah), è veramente considerabile come una sorta di dogma? Ovviamente no. Pare che invece, affrontata nel modo inverso (ovvero, posso _non_ scrivere una SPA?), la questione appaia drammatica. **Se non usi React non sei nessuno**. Se non hai una single page app da sviluppare non sei nessuno. Se non ti schieri nella faida (perché tale sembra) tra Angular e React, sei irrilevante.

Lo sviluppo web sta subendo sicuramente una svolta in questi anni, ma forse è troppo repentina perché le persone non la subiscano come una sorta di religione emergente, per cui all'interno dei vari user group e delle community ormai si sente parlare in modo ossessivo di **nuovi framework** che fanno le stesse cose dei vecchi framework, ma cambiando una virgola nei parametri da passare ai costruttori (costruttori? Ho detto costruttori?).

Puoi pronunciare le parole "generiamo HTML server-side" solo se affianco ci infili "il nostro Javascript è isomorfico". Altrimenti ti inseguono con un forcone.

Ironia a parte, a me pare che ci sia una frazione di persone che al posto di pensare con la propria testa vada appresso alle mode in modo cieco. Questo a volte porta dei risultati, altre volte porta alcuni irresponsabili a fare dei danni non da poco.

### Ho scritto un'app MVC e mi è piaciuto
Non c'è nessuna colpa nel seguire un approccio che è ritenuto legacy dalla maggior parte degli sviluppatori "alla moda". Quando scriviamo un programma, dobbiamo tenere conto di alcuni fattori che non sono solo semplicemente quale **approccio**, nell'istante in cui apriamo l'editor di testo vuoto, è considerato il più corretto.

- Quanto **debito tecnico** abbiamo nei confronti di un approccio più innovativo
- Che tipo di **caratteristiche** dobbiamo sviluppare
- Quanto sarà facile che arrivino **contributi** complicando eventualmente l'architettura

Sono solo tre delle domande infinite che mi sono trovato ad affrontare progettando un'applicazione da zero. A volte può capitare di dover **sacrificare qualche tecnologia molto alla moda** perché le persone con cui lavori non la capirebbero mai, perché non hai tempo per studiare e la consegna è tra tre quarti di giornata, o perché semplicemente fare in un certo modo (in _quel_ modo, il modo troppo fico) sarebbe sbagliato (!).

Prendiamo l'esempio del mio stupidissimo pastebin: ha senso immaginare una single-page application con un sistema di rotte per un diamine di affare che prende del testo e lo renderizza un po' più carino? Decisamente no. Ha senso utilizzare React, invece, per accelerare lo sviluppo di una webapp altamente dinamica? Decisamente si.

Spesso alle persone (e, attenzione, io ricado in questo esempio parecchie volte :-D) piace tirare in mezzo tecnologie e pattern all'ultima moda solo per **sperimentare**, senza considerare tutti gli aspetti di contorno e l'intento dell'attività che si sta svolgendo.

### Ma quindi ti fa schifo React?
No, anzi. Mi sono trovato di recente in una situazione spinosa pur avendo un margine di tempo per studiare. Ero da solo, e improvvisamente mi sono trovato con la richiesta pendente sulla testa di scrivere una webapp che facesse determinate cose. Potendo scegliere cosa tirare in campo per **facilitarmi la vita**, ho deciso di utilizzare [React](https://facebook.github.io/react/), e sono ancora vivo nonchè molto soddisfatto.

Tuttavia, il punto della questione è un altro: oggi è il 6 ottobre 2016. Ci sono cose che nel 2016 possono ancora essere impiegate con tantissima efficacia.

**JQuery** ha ancora da dire la sua nel 2016.

Un'**architettura monolitica** ha ancora da dire la sua nel 2016.

L'**HTML server-side** ha ancora da dire la sua (e ne ha ben donde) nel 2016.

E probabilmente, lo **sviluppatore più anziano del vostro ufficio** ha ancora da dire la sua nel 2016.

### Sviluppa responsabilmente
Si, dico proprio a te che stai leggendo. Lo so che ti piace sperimentare. Lo so che è molto più facile ascoltare gli altri in maniera cieca. Ma guarda che stai facendo, stai usando React, che incentiva gli **stili inline**, quando gli stili inline sono stati demonizzati per anni, insieme al templating schiantato dentro il codice, e insieme a tutta una serie di cose che React fa e ti costringe a fare.

Quando sei davanti a una directory vuota, trepidante nell'attesa di scrivere il primo file del progetto, **accendi il cervello**, e chiediti quale sia veramente **la cosa giusta**.

È gratis.

_Photo courtesy of [ThoroughlyReviewed](https://www.flickr.com/photos/143842337@N03/29333109874)_
