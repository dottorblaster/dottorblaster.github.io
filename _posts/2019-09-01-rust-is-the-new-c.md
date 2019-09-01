---
layout: post
status: publish
published: true
title: Rust è il nuovo C? Forse lo è, forse è anche meglio
date: 2019-09-01 18:37:22 +0200
categories:
- Development
tags:
- software development
- linguaggi
- programmazione
- rust
- codice
- programmazione funzionale
---

![Siren Rust code](https://gitlab.com/dottorblaster/blog-images/raw/master/images/rust_code.jpg)

Ho iniziato a leggere un thread affascinante su [LWN](https://lwn.net/Articles/797558/), in ripresa di un post piuttosto lungo sul [blog di Packt](https://hub.packtpub.com/rust-is-the-future-of-systems-programming-c-is-the-new-assembly-intel-principal-engineer-josh-triplett/):

> Systems programming often involves low-level manipulations and requires low-level details of the processors such as privileged instructions. For this, Rust supports using inline Assembly via the 'asm!' macro. However, it is only present in the nightly compiler and not yet stabilized. Triplett in a collaboration with other Rust developers is writing a proposal to introduce more robust syntax for inline Assembly.

**Non penso che il punto sia rendere obsoleto C** quanto ormai è obsoleto Assembly. Casomai, penso che il punto sia **ridare dignità a ognuno di questi strumenti** nel modo migliore. Rust è un ottimo rimpiazzo di C per quanto riguarda la programmazione di sistema, soprattutto quando vengono meno determinati bisogni (ovvero restrizioni dovute alla memoria che puoi avere su determinati chippetti). Assembly, viceversa, è un tool che a meno di assurde invenzioni non è possibile sostituire.

Rust indirizza tutti questi bisogni in una maniera estremamente elegante, unendo una sintassi estremamente efficace, tooling ottimo, soprattutto moderno, e alcune **finezze funzionali** che lo rendono il mio primo candidato quando si tratta di piccoli programmi.

Il thread su LWN è veramente ricco di spunti, ve lo raccomando. Per esempio dal commento di _Archimedes_:

> cargo as build system is "nice and simple" and can handle a lot but falls short if complex builds are needed which can be done in C using the automake/autoconf, cmake, ... hell ...

Questo evidenzia una **giovinezza** in alcuni aspetti del **tooling** legato a Rust, e anche degli aspetti in cui la catena di montaggio attuale si può migliorare a tal punto da servire come punto d'appoggio per una brand awareness fortissima da parte di aziende che decidono di scrivere larga parte del loro software in Rust, e sentono questo tipo di necessità.

Poi non venite a dire che non ve l'ho detto. ;-)
