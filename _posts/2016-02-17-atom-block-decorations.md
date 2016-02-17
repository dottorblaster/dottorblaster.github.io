---
layout: link
status: publish
published: true
origlink: http://blog.atom.io/2016/02/03/introducing-block-decorations.html
title: "Atom: introducing block decorations"
date: 2016-02-17 17:03:10 +0100
categories:
- Tech
tags:
- atom
- dom
---

Quello di **Atom** è un percorso secondo me abbastanza travagliato per un sacco di motivi, primo tra tutti il fatto che comunque Sublime Text per questioni prestazionali senza alcun aggiornamento da parte degli sviluppatori è comunque performante e fluido quanto basta per farlo sentire in difetto.

Quello che tuttavia avevo sempre sottovalutato è quanto l'editor in sé non sia ristretto quanto Sublime anzi: oltre ad essere completamente open, è anche molto "hackable". Pensavo fosse un payoff, e invece:

> However, poking with Atom internals is clearly suboptimal, as they could change at any time and break all the packages that rely on them. (In fact, at the time of writing, we are actively working towards redesigning the whole display layer). Today we're happy to announce a new experimental primitive for Atom 1.6.0-beta that is going to change this: block decorations. [...] While maintaining the ease of use of decorations, this new API opens up a number of new scenarios such as inline diffs, code evaluation, image previews, etc.

Detta in gergo, questa è una **figata spaziale**, per una serie di motivi, ed il primo è che rende a prova di bomba l'interazione con componenti anche core di Atom.

Devo dire che non mi pento affatto di aver esteso di recente l'uso di Atom a più macchine tra le mie; addirittura penso sempre di più all'adozione totale :-) Ovviamente fatto salvo il buon **Vim**.
