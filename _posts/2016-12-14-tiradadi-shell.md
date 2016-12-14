---
layout: post
status: publish
published: true
title: Un tiradadi per la shell
date: 2016-12-14 19:49:50 +0100
categories:
- Linux
tags:
- tech
- roleplay
---

Ieri sera giocavo con i miei amichetti di roleplay a **Dungeons & Dragons** in una situazione un po' complicata, in tethering da una connessione 3G al lumicino in un albergo a Cosenza.

Al momento di **tirare un d20**, trovandomi sprovvisto di dadi fisici, ed essendo il telefono in carica in un posto abbastanza lontano dalla mia portata, ho avuto il lampo di genio di scrivermene uno mio (non potendo nemmendo consumare banda per caricare un'interfaccia web) in una riga.

Inizialmente ho optato per **una riga di Javascript** avendo una console di NodeJS aperta:

```js
> function roll(i) { return Math.floor(Math.random()*(i)) + 1 }
```

Chiaramente, è solo un generatore di numeri casuali compresi tra 1 e `i` che corrisponde alle facce del dado.

Siccome però la console Javascript per fare una cosa simile è un overkill, ho scritto un oneliner per Zsh:

```sh
$ roll() { print $[RANDOM % $1 + 1]; }
```

La stessa cosa si può fare in bash usando `echo` al posto di . Volendo usarlo come utility per i prossimi **casi di emergenza**, l'ho anche infilato in un custom plugin per Oh My Zsh:

```sh
$ cat .oh-my-zsh/custom/plugins/dice-roller/dice-roller.plugin.zsh
roll() {
  print $[RANDOM % $1 + 1];
}

$ roll 20
12
```

In questo modo abbiamo realizzato un pratico tiradadi da shell 😎 e niente, almeno non ho buttato banda né mi sono dovuto alzare dalla sedia comoda. Resterò **ciccione per sempre**. Evvai!
