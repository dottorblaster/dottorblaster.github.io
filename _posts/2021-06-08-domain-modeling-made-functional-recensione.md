---
layout: post
status: publish
published: true
title: "Recensione: Domain Modeling Made Functional, di Scott Wlaschin"
date: 2021-06-08 17:40:23 +0200
categories: 
- Development
tags: 
- ddd
- functional programming
- programmazione funzionale
- programmazione
- coding
- fsharp
---

![Domain Modeling Made Functional](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/domain_modeling_made_functional.png)

Ed eccoci qui con una nuova recensione: in questo periodo oltre a [ripassare le basi](https://dottorblaster.it/2021/02/pragmatic-programmer-recensione/) ho deciso di rendere leggermente più formale la mia preparazione in termini di **functional programming**, specialmente nei termini di quella zona grigia che è il punto di contatto tra il mondo accademico, come viene tradotta una dimostrazione in codice (che è davvero dove un linguaggio fortemente espressivo dà il suo meglio) e il mondo del business, in particolare delle applicazioni web, dove questi principi di design possono aiutare a far crescere una codebase nella maniera più pulita possibile - soprattutto guardando al codice attraverso la lente del tempo.

**Domain Modeling Made Functional** viene in nostro soccorso proprio per assisterci durante alcune scelte all'inizio di un nuovo progetto, dotandoci di un po' di disciplina, insegnandoci un po' di Domain-Driven Design, e mostrandoci senza troppi giri di parole come il DDD viene espresso al suo meglio attraverso la programmazione funzionale.

Grossomodo il discorso viene portato avanti attraverso vari punti, primo tra cui il **type system** di un linguaggio funzionale. Nel libro viene usato **F#**, personalmente ho trovato che tantissimi esempi si adattassero al modo che il manuale e il compilatore di **Rust** consigliano di trattare il codice, specialmente nella gestione dei side-effect (usando i `Result`). Dalla descrizione del type system viene poi srotolata un po' di roba utile, come il fatto di usare le firme delle funzioni **non tanto come rete di sicurezza a compile-time quanto come una buona documentazione mantenuta in tempo reale di come funziona il dominio**.

A quel punto, avendo un dominio descritto in maniera **type-driven** e le cui funzioni utilizzano una raccolta di tipi ben definita, si passa ai side effect: validazione, parsing, gestione degli errori attraverso il i**modello two-track**[^1], chiamata di API esterne, persistenza.

Tutto questo senza minimamente menzionare[^2] **monadi**, funtori, applicativi, o altra roba arcana che il lettore non avrebbe nemmeno la forza di approfondire; il vero valore di questo volume è **tenere un approccio estremamente semplice**, abbandonando i concetti accademici fuori dalla porta e concentrandosi esclusivamente sui benefici di un approccio del generare risultando in questo modo un super-pregevole distillato di buonissime pratiche che scorre estremamente veloce nella lettura e soprattutto nell'apprendimento.

Un grazie speciale va a **Emanuele De Cupis**, che me l'ha consigliato.

Se lo volete comprare, [questa è la pagina del libro sulla Pragmatic Bookshelf](https://pragprog.com/titles/swdddf/domain-modeling-made-functional/): non c'è modo migliore di spendere i vostri soldi, e potete stare sicuri del fatto che sia un consiglio sincero perché non ci rimedio una lira :-)

[^1]: Non sapete cosa sia il modello two-track? Non sapevo neanche io che si chiamasse così, ma se fate JavaScript di mestiere e usate le promise è quello che succede se avete una serie di `.then()` concatenati e alla fine di tutto un `.catch()` che gestisce l'errore avvenuto in qualsiasi punto della catena.

[^2]: Effettivamente viene fatto una volta sola. Un buon portale per chi è alle prime armi e vuole approfondire anche quegli aspetti più matematici legati a quel tipo di strutture dati.
