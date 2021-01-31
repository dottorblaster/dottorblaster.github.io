---
layout: post
status: publish
published: true
title: Mamma, ho costruito una libreria di actor modeling per NodeJS
date: 2021-01-31 18:25:10 +0100
categories: 
- Development
tags: 
- nodejs
- node
- javascript
- backend
- actor model
- concurrency
---

![Hoverlord: actor model in action](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/hoverlord-1.png)

Qualche tempo fa in un attimo di follia ho cominciato a farmi qualche schemino per portare alcune delle mie feature preferite di **Elixir** su NodeJS, per il semplice fatto che potevano essermi utili anche lì. Può sembrare che io stia cercando di avvitare un bullone con un cucchiaio, ma ci sono un paio di verità di cui preferisco fare un bel listato:

- **Credo fermamente che l'[actor model](https://en.wikipedia.org/wiki/Actor_model) sia un paradigma vincente** che consente di gestire la concorrenza in un modo in cui gli esseri umani, mentalmente, non vadano a pestarsi i piedi mentalmente con altre elucubrazioni passate o future. Nella mia testa quello che avviene quando programmo un [GenServer](https://hexdocs.pm/elixir/GenServer.html) in Erlang è molto, molto più fluido di quello che avviene quando scrivo un thread in C o una goroutine;
- [NodeJS offre i Worker](https://nodejs.org/api/worker_threads.html), un'entità software di cui è possibile fare spawn a cui fare offloading del lavoro del main thread. I worker process sono un'area all'interno della quale secondo me la ricerca non è ancora al suo picco.[^1]

Quindi date queste doverose premesse ho sentito di poter dare un microscopico contributo all'ecosistema JavaScript con una libreria che consente di fare `spawn` di un worker process con del codice arbitrario all'interno. Allo stesso tempo il processo che viene avviato avrà una primitiva `receive` a disposizione che gli consentirà di ricevere i messaggi che gli vengono inviati. A questo punto data l'infrastruttura di comunicazione sottostante sarà possibile dividere la nostra applicazione in più attori dalla logica separata.

Lo snippet che c'è nel README è abbastanza esplicativo, la libreria (che si chiama [hoverlord](https://github.com/dottorblaster/hoverlord)) consente di fare una cosa del genere:

```js
const http = require('http');
const { spawn, send } = require('hoverlord');

spawn(() => {
  const { receive } = require('hoverlord');
  receive((_state, { content }) => {
    console.log(`log: ${message}`);
  });
}, 'logger');

spawn(() => {
  const { receive, send } = require('hoverlord');
  return receive((state, message) => {
    switch (message.content) {
      case 'ping':
        const newState = state + 1;
        send('logger', newState);
        return newState;
      default:
        return state;
    }
  }, 0);
}, 'stateReducer');

http
  .createServer((req, res) => {
    send('stateReducer', 'ping');
    res.writeHead(200);
    res.end(`Current process\n ${process.pid}`);
  })
  .listen(4000);
```

In pratica cosa abbiamo qui? Abbiamo un processo principale che avvia il webserver per un'applicazione web (tramite l'**HTTP server di Node**, niente di esoterico), il quale risponde a ogni richiesta sulla rotta principale con il PID del processo facendo però **aumentare un contatore mantenuto in un processo separato**, e facendo **loggare quello stesso stato a un altro processo ancora**.

Ovviamente il lavoro non è terminato, ma per cose semplici hoverlord fa il suo lavoro in maniera veramente cristallina, tant'è che io stesso sono rimasto stupito provando a **scrivere un po' di test con Jest** e cominciando a stressare un bel po' il design. Finora è sempre andato tutto bene, quindi se provate a usarla e beccate qualche bel bug vi prego di [aprire una issue](https://github.com/dottorblaster/hoverlord/issues).

Devo dirmi da solo che questo è il progetto più interessante a cui abbia lavorato ultimamente, e la cosa allucinante è che è tutto merito mio (dell'_interessanza_, intendo). Ho sempre desiderato scrivere una cosa del genere, ma non sapevo da dove partire. Finalmente dopo quasi un decennio di esperienza sul campo con **JavaScript** sono riuscito a farmi passare la sindrome dell'impostore, e sono troppo felice di aver trovato il tempo e l'area giusta su cui focalizzare i miei sforzi per un po'.

### Direzione del progetto, evoluzioni future eccetera
Una volta dimostrato che è possibile avere delle primitive di `spawn` e `receive` simili negli intenti a quelle di Erlang, sia pure con le dovute differenze tecnologiche, la più grande criticità di hoverlord è quella di avere una funzione di `require` patchata in modo da usare come path primario quello del progetto JavaScript originale e non la `/tmp` dove viene memorizzato il chunk di codice JavaScript "spawnato". Questa cosa in un progetto reale mostra delle crepe non banali, e devo studiare meglio come superarla perché allo stadio attuale fare `require` di alcune funzioni dentro gli attori di hoverlord _è un problema_.

Questa è anche una grossa chiamata alle armi: se qualcuno avesse lo stomaco per leggersi il codice di hoverlord (be warned) non credo di potercela fare da solo.

### Ringraziamenti
- [Emanuele De Cupis](https://github.com/balanza), per aver provato per primo la libreria e avermi dato alcuni utilissimi feedback - nonché per il suo stupendo tentativo di testare hoverlord in un setup end-to-end;
- [Mattia Tommasone](https://github.com/Raibaz/) per aver scritto la prima PR "di terzi" rendendo il tutto uno sforzo corale e non più un progetto solista;
- [Gianguido Sorà](https://github.com/gsora) per avermi fatto da [rubber duck](https://it.wikipedia.org/wiki/Rubber_duck_debugging) durante le feste di Natale, specialmente riguardo il meccanismo di hashing degli attori.

[^1]: Una prima versione di hoverlord usava la Cluster API al posto dei worker process. [Matteo Collina](https://github.com/mcollina) e [Tomas Della Vedova](https://github.com/delvedor) mi hanno convinto ben presto del fatto che fosse una scelta fallimentare :-)


