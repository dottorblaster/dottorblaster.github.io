---
layout: link
status: publish
published: true
title: Tiny npm packaging
origlink: http://g14n.info/2015/12/tiny-npm-package/
date: 2016-01-03 22:48:08 +0100
categories: 
- Tech
tags: 
- nodejs
- javascript
---

[Gianluca](http://g14n.info/) ha avuto l'ottima idea di stilare una comodissima **checklist** di cosa dovremmo includere in prima battuta quando mettiamo su un **pacchetto per npm** da zero. Giusto qualche osservazione: 

- Il **.gitignore** mi sembra un po' scarno, ma effettivamente per un tiny package (e quindi un pacchetto che segue la **filosofia Unix**, ossia quella di fare una cosa e farla bene) c'è poca roba da considerare, quindi poca da ignorare
- Di solito genero il package.json tramite npm init, ma anche avere un modello come quello che c'è nel post non è male; detto questo, sto iniziando a pensare di scrivere un piccolo eseguibile per generare un package.json al volo :-)
- Basta co' 'sto feross standard style! A me piacciono i puntevvirgola. :-P

