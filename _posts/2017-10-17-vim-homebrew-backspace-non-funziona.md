---
layout: post
status: publish
published: true
title: "Vim su macOS installato tramite Homebrew: come riabilitare il backspace ⌨️"
date: 2017-10-17 11:18:17 +0200
categories:
- Development
tags:
- homebrew
- macos
- backspace
- terminal
- cli
---

È già da un sacco di tempo che volevo risolvere questo piccolo problemino ma non trovavo la voglia dato che per lavoro uso sempre qualche altro editor: installando **Vim** da Homebrew su macOS, il **backspace** non funziona più come dovrebbe in insert mode.

Per riavere indietro il vecchio comportamento, basta inserire questa riga alla fine del proprio `vimrc`:

```vim
set backspace=2
```

### Vim da Homebrew
Giusto come annotazione, installare Vim da Homebrew serve, dato che la versione installata di default con macOS è un po' vecchiotta, e quello che accade è semplicemente che alcuni plugin, magari facenti uso di feature più recenti, non si comportano come previsto.


