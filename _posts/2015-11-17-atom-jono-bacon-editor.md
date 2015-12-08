---
layout: link
status: publish
published: true
title: Atom è l'editor preferito di Jono Bacon, ma non il mio
origlink: http://www.jonobacon.org/2015/11/16/atom-my-new-favorite-code-editor/
date: 2015-11-29 18:35:00 +0100
categories:
- Tech
tags:
- unix
- atom
- sublime
- editor
---

Mi è capitato di inciampare nel post che linko sopra, di **Jono Bacon**, che dice che si è innamorato di **Atom** come editor di codice. A parte i lustrini sul "adesso lavoro a GitHub, suckers" (che effettivamente ha ogni titolo per piazzare :-D), ha condiviso una serie di impressioni, e il suo setup che - devo ammettere - ci tengo a copiare prima possibile. Purtroppo però con me Atom non sta avendo lo stesso viaggio rose e fiori:

> Back in the day I used to use Eclipse with the PyDev plugin. I then moved on to use GEdit with a few extensions switched on. After that I moved to Geany. I have to admit, much to the shock of some of you, I never really stuck with Sublime, despite a few attempts.

Non capisco seriamente, dopo i primi venti minuti di utilizzo, come si faccia a non amare Sublime Text, e trovare allo stesso tempo Atom così affascinante - dato che **Atom è una versione un po' più "fighetta" del celebre editor** che ormai è diventato un must-have per tutti gli sviluppatori. In questi giorni comunque ho avuto modo di provare Atom e qualche pregio ce l'ha:

- Supporto veramente buono a **temi e coloscheme**
- Eccellente **autocompletamento della sintassi** e buoni snippet
- È basato su [Electron](http://electron.atom.io/), che è la prossima tecnologia su cui voglio mettere le mani
- La **personalizzabilità** è all'ordine del giorno
- **APM**, ovvero il package manager di Atom che è banalmente un wrapper di NPM che installa temi e plugin da riga di comando

Nonostante questo però, ho trovato dei lati negativi che mi è stato impossibile sormontare, almeno per il lavoro quotidiani in ufficio:

- **Atom è lento**. Dico davvero: parlando di file molto grandi, è praticamente impossibile praticare uno scroll un po' violento senza imbattersi nell'editor che arranca per starti dietro. Sublime mi ha abituato piuttosto male riguardo questo (non facendo veramente una piega anche su file da 40000 righe di codice) e mi aspetto sinceramente che un editor di testo che si pone come concorrente di Sublime Text. Colpa di Electron? Colpa di Javascript? Colpa di miocuggino? Che ne so.
- Nonostante ci siano molti plugin veramente fatti bene, il **numero di estensioni** disponibili non compete minimamente con quello di Sublime
- Il **formato dei syntax highlighter** è codificato in uno standard robusto che fa uso di JSON come notazione, tuttavia rompe la compatibilità con il formato supportato da Sublime Text, che era a sua volta retrocompatibile con quello di TextMate

Insomma, c'è materiale su cui riflettere; per quanto concerne le prestazioni, Atom è migliorato negli ultimi tempi ma senza lasciarmi a bocca aperta. Mi aspetto che migliori ancora per adottarlo su tutte le workstation, dato che mentre Sublime Text è fatto di codice proprietario, Atom è completamente **open source**.
