---
layout: post
status: publish
published: true
title: Le Pull Request \"inutili\"
date: 2016-04-14 22:51:40 +0200
categories:
- Open Source
tags:
- tech
- zsh
- linux
- gitlab
---

E insomma, in questi giorni oltre che di scrivere software ho avuto anche la possibilità di fermarmi a riflettere come non facevo da un po', specie dopo aver fatto la mia [entrata in scena su GitLab](http://dottorblaster.it/2016/04/gitlab-contribution/) con quella cretinata di commit. Non è l'unica pull request piccola (o merge request per dirla nel loro gergo) che ho fatto, anzi.

Ce n'è una su **Docker**, una scemissima su Oh My Zsh. La lista non è corta, anzi; semplicemente ogni volta ho risolto delle piccole cose. Cose che, probabilmente, se non ci fossi arrivato io col ditino ci sarebbe semplicemente arrivata un'altra persona. Ho pensato che nel tempo ho cambiato radicalmente la percezione che ho dei commit. Alcuni estratti del mio pensiero:

- Per quanto piccolo possa essere, un commit idealmente dovrebbe sempre apportare un **miglioramento**. È inutile adottare una posizione di biasimo nei confronti di chiunque ti mandi del codice, fosse anche solo una riga;
- La **documentazione**, specie se fatta bene, è sempre la benvenuta; prima avevo un punto di vista diverso nei confronti dei traduttori e di chi si occupava del manuale. Adesso, probabilmente, considererei un commit di documentazione quasi più importante di un bug risolto;
- **La tua facezia è sempre il bug di qualcun altro**: quante volte vi è capitato di dire "vabeh, questo lo sistemo dopo"? Tutt'ora Burst si spacca se non gli viene passato un argomento `title`, anche se tramite l'argument parser l'ho dichiarato opzionale. Per me non è un problema; magari se qualcun altro lo risolvesse sarei comunque contento (io non ho tempo di farlo adesso).

E così via, e così via, e così via. Un esempio bellissimo di come una **pull request** di peso infimo possa essere trasformata in qualcosa di veramente fico, per esempio, è come è stata trattata la [mia proposta su Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh/pull/4673) per uno snippet che cambiasse l'identità di **Git** sul momento.

> I think there is some hidden potential that we can tap into for a more straightforward way to switch identities, which possibly would become an entirely new plugin. I understand if you don't want to take on that much work, but as is now I'm not very inclined to pull this in. Thanks!

Interessante vero? E se fosse proprio quello che avevo intenzione di fare? Volevo pastrugnare un po' con Go per realizzare un programmino da shell che fosse in grado di fare questa roba, viceversa adesso sono più che incline a scrivere un po' di codice per Oh My Zsh :-)

Questo per dimostrare che no, non esistono pull request ridicole, anzi: contribuire al codice aperto, in ogni modo, arricchisce il software, arricchisce gli altri, e **arricchisce noi**.
