---
layout: post
status: publish
published: true
title: Hai del brutto codice per le mani? Testalo!
date: 2019-10-13 13:57:00 +0200
categories:
- Development
tags:
- testing
- codice non ottimale
- coding
- digital work
- programmazione
---

Gergely Orosz, qualche giorno fa (e se non seguite il suo blog ve lo consiglio caldamente):

> [...] "bad code" is a lazy expression. It’s not specific and means different things to everyone.

Suggerisce quindi alcuni consigli quando si arriva a criticare del codice in maniera sana suggerendo un **refactoring** o direttamente in fase di scrittura. Come sempre l'[interazione coi compagni di team](https://dottorblaster.it/2019/10/messaggi-privati-silo-effect/) risulta cruciale:

- Be specific
- Give a specific suggestion
- Talk about the future implications of the code you see, if not changed
- Ask the person writing the code, what they think about your comments

Sono tutti consigli giusti, e sono tutti principi che metto in pratica costantemente e che impattano sulla qualità finale del codice. Mi sento di aggiungerne uno mio in coda: se qualcosa ti sembra **generalmente debole**, i tuoi commenti non vengono apprezzati, o banalmente non c'è tempo e le cose stanno funzionando in questo stato di precarità, copri quella funzione infame con una suite di test. Questo permette di metricare "quanto" effettivamente un pezzo di codice è prono a rompersi, attraverso test stressanti (quindi copertura dell'happy path e due/tre altri casi più "tricky") che rendano più sicura l'**evoluzione della codebase** tangente quella funzione, quel metodo, quell'oggetto che stiamo prendendo in esame.

A quel punto non c'è niente da fare: **una test suite scritta bene parla per te**, e funge da dimostrazione euristica che le tue preoccupazioni sono infondate, oppure che c'è qualcosa che va aggiustato immantinente.

A quel punto se il test infame continua a rompersi, beh: non è un problema tuo no? Anzi: in fase di riscrittura o in generale di miglioramento, avrai le spalle coperte dal te stesso del passato.




