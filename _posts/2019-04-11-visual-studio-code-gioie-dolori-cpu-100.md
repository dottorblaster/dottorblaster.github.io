---
layout: post
status: publish
published: true
title: "Visual Studio Code, gioie e dolori: CPU al 100% con la nuova versione"
date: 2019-04-11 14:50:45 +0200
categories:
- Development
tags:
- microsoft
- visual studio code
- code
- visual studio
- sviluppo
- codice
- debug
- programmazione
- coding
---

In questi ultimi – boh – due giorni, mi è capitato di riavviare il computer per dare una pulita e installare qualche aggiornamento di sistema rimasto lì a prendere un po' di polvere (non sono più il ghepardo di una volta con gli aggiornamenti, devo dire); contestualmente ho riavviato **Visual Studio Code** e anche di quello ho automaticamente installato l'ultima versione.

Purtroppo ho immediatamente notato qualche problemino, nel senso che aprendo più di due o tre file **JavaScript** (e facendo frontend "for a living", beh, mi capita spesso) la CPU andava al 100%, e non la smetteva mai se non occasionalmente. Non avendo tempo per indagare me lo sono tenuto così per qualche decina di ore, dopodiché appena ho avuto due minuti ho cominciato a scartabellare e greppare l'internet per capire cosa stava succedendo e come risolvere quello che ho scoperto essere un problema non solo mio, ma anzi di un sacco di altra gente.

### tl;dr
Il comando in questione ha riportato ordine nel mio microcosmo, e penso che lo eseguirò anche sul resto delle mie workstation prima possibile:

```sh
$ rm -rf Library/Caches/typescript/*
```

In pratica, non lo sapevo ma l'installazione di **TypeScript** distribuita con Visual Studio Code crea una **cache** relativa a un sacco di oggetti che vengono costantemente smanacciati dal compilatore e dall'editor. Con questo la eliminiamo annullando eventuali stalli o incoerenze, come nella migliore delle tradizioni di ogni meccanismo di caching: se qualcosa può corrompersi e generare falsi hit positivi o negativi, lo farà.

### Debuggare Visual Studio Code
Nel corso del mio `grep` dell'intera Internet, sono inciampato prima di tutto su un commento utile di uno sviluppatore di Visual Studio Code che consigliava di aprire l'**inspector dei processi** interni all'editor. Questo può essere fatto tramite il comando:

```
> Developer: Open Process Explorer
```

Possiamo impartire questo comando tramite il menu che appare premendo `CTRL-Shift-P` su Linux e Windows, o `Cmd-Shift-P` se siamo un Mac. Ci apparirà una finestra che mostra il consumo di risorse di ogni processo integrato, che nel system monitor tradizionale viene contrassegnato solo come _Code Helper_, il che non è un grande aiuto.

![Visual Studio Code TS server 100% CPU](https://gitlab.com/dottorblaster/blog-images/raw/master/images/vs_code_ts_server.png)

Viceversa questa simpatica finestra è veramente utile. Grazie a queste informazioni sono incappato in un sacco di maledizioni verso il **TypeScript Language Server**, che per la verità gestisce anche il normale JavaScript. Ho guardato queste tre issue:

- [Latest VSCode Insiders electron_node tsserver.js taking 100% of CPU](https://github.com/Microsoft/vscode/issues/63630)
- [100% CPU used after upgrading to Mojave](https://github.com/Microsoft/vscode/issues/71829)
- [1.33 performance issues with TypeScript and JavaScript](https://github.com/Microsoft/vscode/issues/71751)

Leggendo l'ultima, capendo l'antifona, ho deciso di mettere in pratica il consiglio che la maggior parte dei commenti caldeggiavano. Come scritto sopra:

```sh
$ rm -rf Library/Caches/typescript/*
```

Chiuso Visual Studio Code, riaperto, e il problema era svanito. Il sistema operativo ha giusto impiegato un po' di tempo per ricostruire alcuni indici e la cache, dopodiché tutto è andato liscio come l'olio. Devo dire che non conoscevo l'inspector integrato per i processi di Code. Dovrei usarlo più spesso.
