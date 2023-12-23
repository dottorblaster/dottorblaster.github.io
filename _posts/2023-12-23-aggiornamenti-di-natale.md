---
layout: post
status: publish
published: true
title: Un assonnato aggiornamento natalizio
date: 2023-12-23 16:19:53 +0100
categories: 
- Open Source
tags: 
- talisman
- event sourcing
- life
- updates
- linux
- trento
---

Un po' di aggiornamenti di Natale, stringati non per mancanza d'entusiasmo ma perché sono leggermente sonnolento in questi giorni di ripresa natalizia. Volevo scrivere un resoconto dettagliato a caldo del **RustLab 2023**, a cui sono stato, ma nel frattempo mi sono anche [rotto una mano](https://fosstodon.org/@dottorblaster/111385196728249951), quindi principalmente diciamo che l'ultimo mese è stato dedicato al non fare altre cazzate (non più del necessario) e riprendermi.

Nonostante questo, finalmente la mano è tornata operativa e io con lei. Yay! Giusto in tempo per questo break natalizio in cui mi sto prendendo un po' di tempo per delle pulizie:

- La CI e la CD di questo blog finalmente non usano più un workflow accroccato dal sottoscritto ma fanno leva principalmente sul "nuovo modo" di fare i deployment di GitHub Pages. Sostanzialmente fai la build, crei uno zippone con l'artefatto, e spari tutto su. La differenza col metodo di prima è che adesso tutta la parte di "sparare" e la parte dello "zippone" sono astratte da un paio di bellissime action pronto-cassa.
- [Talisman](https://github.com/dottorblaster/talisman), un progettino che ho iniziato l'anno scorso per vedere se riuscivo a scrivere un ricettario usando l'event sourcing, è più o meno pronto per essere usato in alpha. Ovviamente non ho scritto una riga di documentazione, ma dato il punto a cui è il progetto forse dovrei.
- Sto approfittando anche per delle pulizie di Natale su Trento, [specialmente sul repository della dashboard](https://github.com/trento-project/web/pulls?q=is%3Apr+is%3Aclosed+author%3Adottorblaster). Lo diciamo sempre coi colleghi e alla fine non lo facciamo mai, ma prima o poi dovremmo organizzare degli stream su Twitch in cui lo sviluppiamo.
- Ho iniziato a pensare a una suite di test per [Pacnews](https://github.com/dottorblaster/pacnews) ma ho bisogno di digerire le varie idee che mi sono venute in mente.

Dovrebbe esserci tutto. Direi che il prossimo post sarà quello dell'ultimo dell'anno, come al solito. ;-)
