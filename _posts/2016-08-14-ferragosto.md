---
layout: post
status: publish
published: true
title: Ferragosto e un esercizio di stile in Node.js
date: 2016-08-14 16:55:22 +0200
categories:
- Development
tags:
- ferragosto
- nodejs
---

![ferragosto nodejs CLI util](http://i68.tinypic.com/1i27bl.png)

Proprio ieri pomeriggio, con la musica nelle orecchie, ero in cerca di un valido motivo per non studiare. Sono incappato per "caso" nel sito dedicato a Ferragosto di [nois3](http://www.nois3.it/), ovvero [chefacciamoaferragosto.it](http://chefacciamoaferragosto.it/), e con un po' di curiosità ho cominciato a smanettarci su. **Ficcanasando** nel codice ho scoperto l'endpoint al quale la UI chiede le frasi, e ho deciso di mettermi a **costruire un tool da riga di comando** per farmi dare dei consigli su cosa fare a Ferragosto :-)

In capo a qualche ora ho messo in piedi il tutto, ed è possibile installare `ferragosto` tramite **npm**:

```bash
$ npm install -g ferragosto
```

Dopodiché, per provarlo basta invocarlo come un qualsiasi altro comando. Ovviamente richiede **Node.js**.

### Le cose interessanti
Grazie a [Carlo](http://carlofrinolli.it/) che mi ha segnalato la sua ultima creatura, e grazie alla mia curiosità nel costruire questo programmino molto semplice ho potuto provare [nopt](https://github.com/npm/nopt), ovvero l'option parser per i programmi da CLI scritto dai ragazzi di NPM. È davvero ben fatto, anche se avrei apprezzato la possibilità di gestire un default sugli argomenti (come [Trollop](https://github.com/ManageIQ/trollop) in Ruby, che uso in [Burst](https://github.com/dottorblaster/burst)).

**Creare eseguibili in Node** da pubblicare su NPM è un affare abbastanza semplice, sono rimasto abbastanza colpito sia dalla dimensione piccolina dal programma (che fa due cose in croce eh), sia da come con un debito tecnico abbastanza consistente io sia comunque stato in grado in un paio di ore di mettere insieme tutto in una forma non esattamente vicina alla sciatteria.

### Queste diavolerie da giovani, altro che Node.js, ai miei tempi c'era il C
È vero! Devo tornare a studiare. ;-)
