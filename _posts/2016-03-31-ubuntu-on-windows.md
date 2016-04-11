---
layout: post
status: publish
published: true
title: Ubuntu su Windows – what else?
date: 2016-03-31 09:10:34 +0200
categories:
- Linux
tags:
- windows
- microsoft
- canonical
---

![Linux, Windows, OSX](https://c2.staticflickr.com/6/5241/5349185631_da3344199a_o.jpg)

Abbiamo visto qualcosa di fenomenale secondo me nelle ultime 24 ore: mi sono astenuto dal commentare senza studiare in maniera un poco più approfondita, ma Microsoft ha appena presentato durante **Build**, l'annuale development conference targata Redmond, un runtime per Windows comprensivo di tutto l'ecosistema **Linux** a meno di qualcosina. Più che Linux, propriamente, **Ubuntu**.

### Come funziona
Praticamente questo "coso" che hanno presentato, nello specifico, è una tecnologia che esegue una traduzione di chiamate di sistema Linux direttamente in chiamate di sistema Windows, un po' come il layer di compatibilità Linux che c'è in BSD, in modo che gli **eseguibili della toolbox classica di uno sviluppatore Unix** vengano resi disponibili anche su Windows. Posso dire che è figo? Dai, concedetemelo.

### È un bene?
Si. Per quanto sicuramente tutto questo possa incidere in qualche modo sull'**uso di Linux come desktop** (perché avendo alcune di queste comodità su Windows, sicuramente vengono a mancare alcune motivazioni che possono spingere i più ad installare Linux sul proprio PC), avere dentro Windows **una finestra di cmd.exe** che, eseguita, possa **avviare da ssh ad apt** è senza dubbio una grossa fonte di gioia. Io, probabilmente, non credo che userò Windows in maniera meno sporadica di adesso (anche perché di Unix uso un po' tutto, e per adesso questo rimane poco più che un esperimento), tuttavia ci sono frotte di miei amici, colleghi, coworker e così via che non vedono l'ora di disintallare Putty (& co.) per passare al cmd nativo.

Compreso il sottoscritto che sul suo setup di Windows ha sempre un **ambiente MinGW** impostato.

Un ulteriore esperimento che proverei a fare? Beh: in fondo questo non è che un runtime, e **Bash** non è che una shell; chissà se ci gira anche **Zsh**, con [Oh My Zsh](http://ohmyz.sh/).

Se siete interessati a saperne di più, in ogni caso, il mio è solo un commentario delle informazioni che **Canonical** stessa ha condiviso [attraverso Insights](https://insights.ubuntu.com/2016/03/30/ubuntu-on-windows-the-ubuntu-userspace-for-windows-developers/), il suo blog relativo ai case study.
