---
layout: post
status: publish
published: true
title: From JavaScript to Elixir to JavaScript – note sparse su andata e ritorno
date: 2019-08-15 20:25:24 +0200
categories:
- Development
tags:
- javascript
- ecmascript
- elixir
- functional
- functional programming
- programmazione funzionale
- immutabilità
- erlang
- js
---

![JS Code](https://gitlab.com/dottorblaster/blog-images/raw/master/images/js-code.jpg)

In questo periodo di totale nullafacenza che sono le ferie mie e di Agnese ho preso la palla al balzo per dare un'aggiornata globale a un progetto che ha preso un numero imbarazzante di star su GitHub, che aveva bisogno di tantissimo amore (non ci mettevo mano letteralmente da anni), e che aveva anche un discreto numero di notifiche di sicurezza dovute a librerie non aggiornate.

Sto parlando di [Stocazzo As A Service](https://github.com/dottorblaster/stocazzo), un esperimento divertente che mi ha permesso illo tempore di sperimentare un po' con **Hapi**, un framework per lo sviluppo di applicazioni web, e che ha persino ricevuto qualche pull request interessante.

Ci ho messo abbastanza poco a capire che non sarebbe bastato **aggiornare le dipendenze**, e che in realtà la codebase aveva bisogno di una riscrittura totale in barba a tutte le raccomandazioni del tipo "non andare a rompere quello che funziona" che ogni guru del software vi darebbe. Non essendo un pazzo suicida però ho deciso di lavorare iterativamente, seguendo la regola del boy scout, un sacco di cautela e la **suite di test** che avevo già scritto in precedenza.

Siccome vengo da anni di **JavaScript** ma soprattutto anche da (meno) anni di **Elixir** nel tempo libero, ho sentito subito la mancanza di alcune cosette:

- Un formatter come `mix format`;
- Un tool di analisi statica come Credo;
- Pipe operator e immutabilità.

Siccome per quanto riguarda la terza non potevo farci niente (almeno non sul momento), ho deciso di concentrarmi sul rendere la mia **toolchain** un po' più confortevole, quindi ho aggiunto [Prettier](https://prettier.io/) e ho configurato npm per formattare tutto tipo `mix format`; successivamente, ho dato un bel giro di vite alla codebase esistente aggiungendo [ESLint](https://eslint.org/) al progetto con una configurazione abbastanza generica.

A quel punto ho aggiornato le **librerie di testing** ([Code](https://github.com/hapijs/code) per expectation e [Lab](https://github.com/hapijs/lab) per la test instrumentation) e ho cominciato a vedere cosa si rompeva. L'interfaccia col webserver in realtà non era cambiata molto: il brutto del guardare indietro al codice che hai scritto tanto tempo fa è più che altro lo sguardo lanciato nel baratro degli errori di gioventù che hai commesso. Tipo un modulo `utils` e una serie di funzioni dentro che fanno "cose" fantasiose coi parametri che gli passi. Ho stracoperto quella parte di test, **perché era la parte più debole**, poi ho portato tutto alla nuova versione di Hapi, che è leggermente diversa nel funzionamento dato che si basa molto su `async` e `await`. Contestualmente ho aggiornato la test suite, in modo da usare nuove funzioni.

L'ultimo passo è stato cominciare a riscrivere la libreria di "utils" che avevo partorito all'epoca. Ormai forte di una test suite a prova di bomba, non potevo rompere niente e sono stato guidato dai test rotti alla ricerca di eventuali problemi.

Ci ho messo un paio d'ore a fare tutto, forse tre. Non era una codebase particolarmente larga, quindi mi sono potuto permettere il lusso di farle un lifting completo.

"Che c'è di nuovo?" Direte voi, miei lettori. "È una storia di un refactoring come tanti altri". Ed è vero. Quello che ho notato però è come la mia esperienza con un altro linguaggio e un'altra piattaforma mi abbia condotto alla ricerca del miglior tooling per fare quello di cui avevo bisogno, e come io abbia messo in pratica best practice totalmente trasversali.

In parole povere, sono convinto che **nel momento in cui impariamo un nuovo linguaggio**, o un nuovo tool, **impariamo un nuovo modo di lavorare** oppure **perfezioniamo il metodo che abbiamo già**. E questo, almeno per me, è incredibilmente incoraggiante, perché con questa esperienza ho avuto modo di toccare con mano quanto il tempo che ho speso su [Elixir](https://elixir-lang.org/) abbia cambiato in meglio le mie abitudini in maniera estremamente profonda.

_Photo courtesy of [Safar Safarov](https://unsplash.com/@codestorm)_
