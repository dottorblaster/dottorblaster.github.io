---
layout: post
status: publish
published: true
title: RomaJS natalizio, tra Angular su vasta scala e lazy loading
date: 2017-12-23 20:32:03 +0100
categories:
- Open Source
tags:
- javascript
- development
- romajs
- angular
---

Che meraviglia le festività natalizie, e che c'è di meglio delle festività di Natale se non i **meetup prefestivi**? Ci si fa gli auguri, tra quei pochi che riescono a presenziare sfuggendo ai parenti, alle cene aziendali, agli eventi dove è del tutto assente il coding, e tra una fetta di pandoro e l'altra[^1] si parla di cose veramente interessanti. Questo mese abbiamo avuto due talk eccezionali:

- "Angular su progetti da milioni di euro" di **Alessandro Avolio**,
- "Image loading techniques" di **Guido D'Orsi**.

Il talk di Alessandro, "Angular su progetti da milioni di euro", è stato una conferma per alcuni aspetti, illuminante per altri. Mi ha dato spunto su alcune pratiche da introdurre nei prossimi progetti e mi ha chiarito alcuni dubbi che avevo riguardo lo sviluppo agile in consulenza. È molto interessante come il team di cui fa parte Alessandro abbia in qualche modo potuto **segregare il proprio dominio applicativo** rispetto ai produttori delle API (ovvero gli sviluppatori backend dello stesso team); le domande alla fine hanno fioccato, e gli argomenti delle questioni poste sono stati tra i più disparati: dalla compilazione del bundle al processo agile del team[^2]. Sicuramente è stata anche un'occasione notevole per mettere alla prova un framework di questo tipo su progetti che non siano la solita todo app, ma qualcosa di **molto più reale** (dove, ahimé, il **rischio di farsi male** aumenta esponenzialmente).

Guido invece ci ha presentato varie **tecniche per gestire il lazy loading** delle immagini nel nostro sito. Ancora una volta abbiamo avuto un talk "no-slides", con live coding e tutto il resto: Guido mi fa impazzire, perché ogni volta che porta un talk del genere fa delle cose assurde, come quando ha scritto un Virtual DOM senza colpo ferire. Anche questo talk è stato pieno di spunti, dato che non solo nella prima parte ci siamo concentrati molto sulle **performance di caricamento**, ma nella seconda abbiamo anche analizzato **tecniche per la produzione di placeholder** leggermente più impattanti dal punto di vista delle performance che però siano decisamente più belli a vedersi.

[^1]: Nessuna fetta di pandoro è stata mangiata a RomaJS in questo meeting, è un'idea che come tutte le idee veramente buone mi è venuta troppo tardi.

[^2]: Alessandro, hai svicolato sul "cosa fanno le altre 30 persone" ma noi non ti daremo mai tregua 😈
