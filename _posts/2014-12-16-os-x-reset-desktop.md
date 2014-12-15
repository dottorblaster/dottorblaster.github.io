---
layout: post
status: publish
published: true
title: OS X - reset delle impostazioni del desktop se Finder fa i capricci
categories:
- Tech
tags:
- OS X
- Mac
- Finder
- Bash
---

![OS X e Bash](http://i61.tinypic.com/rlypnm.png)

**Finder** (il file manager di **OS X**) è un software fantastico: fa tutto quello che deve fare, e lo fa in maniera piuttosto discreta, mantenendo un aspetto minimale e sfoderando una serie di feature da power user solo quando servono. A volte però si prende veramente troppa confidenza: è stato il caso per esempio di quando ha deciso che in alcuni posti del mio desktop **non potevo più piazzare icone**.

Ci ho messo un po' a capire che per **ripristinare il corretto comportamento sul desktop di un Mac** bisogna reimpostare le "fissazioni" su cui Finder si è inchiodato, e questa cosa non è per nulla intuitiva (ovviamente). Per eseguire un reset del desktop è sufficiente dare il comando seguente in un terminale:

```bash
rm ~/Desktop/.DS_Store && killall Finder
```

In questo modo forzeremo Finder a ricalcolare la posizione di tutte le cartelle sul desktop, riavviandosi. E olé, problema risolto.