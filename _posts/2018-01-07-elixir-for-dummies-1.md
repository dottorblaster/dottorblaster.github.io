---
layout: post
status: publish
published: true
title: Elixir per idioti /1
date: 2018-01-07 01:01:42 +0100
categories:
- Development
tags:
- elixir
- iex
---

Visto che ci siamo cominciamo l'anno nuovo col piede giusto, e diamo il via alla serie di post "Elixir per idioti", ovvero appunti sparsi, confusi e ordinati semicasualmente sul mio viaggio nell'ecosistema di **Elixir**.

Bando alle ciance, iniziamo:

### Why
Elixir è un linguaggio con una sintassi molto simile a quella di Ruby che però, contrariamente appunto a Ruby, sfrutta la potenza della **BEAM**, ovvero la virtual machine di Erlang, e dell'ecosistema OTP per costruire ed eseguire applicazioni per la maggior parte di rete, a bassa latenza, distribuite, fault-tolerant.

Quello che a me fa impazzire è che oltre ad essere un **vero gioiellino** per le web application ed in generale la programmazione distribuita, la sintassi funzionale impura Ruby-like lo rende in realtà un meraviglioso giocattolino general purpose, che diventa adatto per costruire qualsiasi tipo di programma, anche un CLI tool o altro.

Il sito ufficiale del linguaggio è [elixir-lang.github.io](http://elixir-lang.github.io/).

### Setup

Il setup dell'ambiente è abbastanza facile. Su macOS:

```sh
$ brew install elixir
```

Su **Linux** leggermente meno, ma dipende dalla distribuzione che usiamo. In genere abbiamo il pacchetto `elixir` nei repository della nostra distribuzione. Per Arch Linux è sufficiente un:

```sh
# pacman -S elixir
```

**Ubuntu e Debian** per esempio prevedono che venga usato il repository di pacchetti di Erlang Solutions:

```sh
$ wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb
$ sudo dpkg -i erlang-solutions_1.0_all.deb
$ sudo apt-get update
$ sudo apt-get install esl-erlang elixir
```

In caso di necessità comunque, informazioni aggiornate possono essere trovate sulla [pagina ufficiale](http://elixir-lang.github.io/install.html).

### REPL
Figata! Ora che abbiamo il nostro setup possiamo divertirci con il **REPL**.

> A Read–Eval–Print Loop (REPL), also known as an interactive toplevel or language shell, is a simple, interactive computer programming environment that takes single user inputs (i.e. single expressions), evaluates them, and returns the result to the user; a program written in a REPL environment is executed piecewise. The term is most usually used to refer to programming interfaces similar to the classic Lisp machine interactive environment. Common examples include command line shells and similar environments for programming languages, and is particularly characteristic of scripting languages.

[Wikipedia](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) ci dà una definizione abbastanza precisa di cos'è un REPL, ed io ad oggi considero questo tipo di applicativo la via più breve per imparare un linguaggio di programmazione, sperimentare funzioni specifiche e scoprire sempre cose nuove riguardo gli internals.

> Tip: moltissimi altri linguaggi hanno un REPL incluso nell'ambiente di sviluppo, come Python (`python`), JavaScript (`node` o la stessa console di Chrome), Ruby (`irb`), Haskell (`ghci`).

Il nostro REPL nello specifico si chiama `iex`. Lanciandolo nel terminale ci dà un po' di informazioni utili, dopodiché sta a noi cominciare a fabbricare **i nostri elisir**:

```sh
blaster at gandalf in [~]
22:02:51 › iex
Erlang/OTP 20 [erts-9.2] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:10] [hipe] [kernel-poll:false] [dtrace]

Interactive Elixir (1.5.3) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```

Ci siamo.

### Hello world
Il percorso di apprendimento di un nuovo linguaggio comincia sempre con un **hello world**.

```elixir
iex(1)> IO.puts("hello world!")
hello world!
:ok
iex(2)>
```

Beh, per ora è tutto 😎

[Vai alla parte 2](http://dottorblaster.it/2018/01/elixir-for-dummies-2/)

