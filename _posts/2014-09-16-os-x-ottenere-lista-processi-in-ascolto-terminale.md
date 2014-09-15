---
layout: post
status: publish
published: true
title: OS X, ottenere una lista dei processi in ascolto da terminale
categories:
- Tech
tags:
- networking
- mac
- os x
- bsd
---

![lsof OSX](http://www.simonganiere.ch/wp-content/uploads/2012/07/lsof-output-example.png)

A volte su **OS X di Apple** ci aspettiamo che la command line sia uguale a quella che abbiamo su Linux, ma non è decisamente il caso. Per esempio, uno dei casi lampanti è il voler **verificare le porte aperte** e i processi in ascolto sulle porte: mentre su **Linux** potremmo sbrogliarcela decisamente bene usando netstat, su un Mac siamo costretti a usare lsof, che è una utility piuttosto carina.

Mi **appunto qui il comando** per non perdermelo ancora (ché tanto poi c'è San Google):

```bash
$ lsof -i | grep LISTEN | grep "TCP \*:" | sort
```

Se poi vogliamo buttare un occhio a quali processi hanno una **connessione aperta** (stabilita), allora possiamo utilizzare quest'altro comando:

```bash
$ lsof -i | grep ESTABLISHED | sort
```

Take care :-) Personalmente, non vedo l'ora di tornare a **Linux**, ma al momento sono costretto ad un **Mac**. Non è manco malaccio ma... volete mettere?

_Image courtesy of [Simon Ganiere](http://www.simonganiere.ch/)_
