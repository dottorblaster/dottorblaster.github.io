---
layout: post
status: publish
published: true
title: Markdown e Tumblr, tutto da CLI con Tumbledown
date: 2017-06-30 20:24:38 +0200
categories:
- Development
tags:
- markdown
- tumblr
- tumbledown
- nodejs
- javascript
- promises
---

![Tumbledown](https://gitlab.com/dottorblaster/blog-images/raw/master/images/tumbledown.png)

Woh, il mio **git prompt** mi ha fatto appena realizzare che è più di un mese che non scrivo nulla. Questo è male. Ma non così tanto, perché nel frattempo sono successe un po' di cose interessanti, tra cui un matrimonio, un viaggio di nozze, e tadaaaa, il fatto che mentre ero in Giappone e avevo necessità di scrivere qualche riflessione personale sul mio taccuino digitale, ho rispolverato il text editor e ho scritto [Tumbledown](https://github.com/dottorblaster/tumbledown), un programma per postare markdown su **Tumblr** da riga di comando senza impazzire.

### Current status
Lo stato corrente dei lavori è che il programma funziona, e lo sto usando per pubblicare cagate su Tumblr dalla mia comodissima riga di comando senza dover aprire il browser. Quello che mi fa stare "male" è che al momento l'autenticazione fa comunque uso delle API key che l'utente deve immettere manualmente, mentre vorrei che questa cosa venisse realizzata tramite un retrieve **OAuth**.

Nonostante questo però ho realizzato una simpatica interfaccia con **Inquirer.js** che una volta immesse le chiavi consente di scegliere in che blog pubblicare i post.

### Dipendenze interessanti
Durante questo piccolo esperimento ho scoperto un po' di moduli su NPM che mi hanno facilitato tantissimo la vita: il primo è [conf](https://github.com/sindresorhus/conf), che gestisce da sé la configurazione dell'applicativo (e io lo uso per lo storage delle chiavi). Ha una API a prova di imbecille, ed è solo ad un `npm install` di distanza.

Stesso discorso vale per [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/), con cui ho realizzato l'interfaccia "grafica", ossia i prompt.

### Promise: un uso estensivo
Forse in maniera un po' ridondante e prolissa alla fine della fiera, ma ho usato **Promise** su tutto il codice per fattorizzarlo meglio e devo dire che mi ha aiutato. Pur essendo un progetto piccolo, mi ha permesso di apprezzare i pregi dell'uso estensivo delle promise, e me ne ha fatto notare i difetti, come il fatto che per esempio si tende ad esagerare leggermente inondando il call stack di roba.

Nonostante le criticità sono soddisfatto del mio lavoro. Spero di migliorarlo presto – e anche di cominciare a postare qualche pillola di functional programming presto 😁
