---
layout: post
status: publish
published: true
title: Homebrew, macOS e lo strano caso dell'XCode fantasma 👻
date: 2017-10-20 18:34:18 +0200
categories:
- Development
tags:
- xcode
- macos
- homebrew
- command line
- hacking
---

Altro giro di **Homebrew su macOS**, altra storia dell'orrore (sort of: ne ho sentite di molto peggiori) su "cose a caso": scrivo "cose a caso" perché effettivamente non ho capito che cosa cacchio stesse cercando di fare il mio computer, e cosa diamine sia successo nel frattempo.

Andando con ordine, questa settimana ho trovato un bug su [un bot Telegram](https://github.com/dottorblaster/vaporbot) che ho scritto in **Elixir**. Provando a compilare il fix in locale, ho trovato un'incompatibilità tra la **vecchia versione di Erlang** che avevo installata, e macOS High Sierra a cui ho aggiornato da poco. Ho deciso quindi di aggiornare i miei package locali, ma:

```
Error: Your Xcode (8.3.spicci) is outdated. Please update to Xcode 9.0 (or delete it). Xcode can be updated from the App Store.
```

Ok. Vado sull'**App Store**, e vedo che XCode non mi viene segnalato come installato. Strano: ricordo di averlo, ma effettivamente non riesco a vederlo nemmeno dal drawer delle applicazioni. Dopodiché metto ad installare gli svariati giga della versione 9.0, mentre penso "ma vuoi vedere che basta aggiornare solo i command line tools?"; nell'ordine sono successe le seguenti cose:

- Ho usato `xcode-select --install` per cercare aggiornamenti nei CLI tools, e ne ho installato uno (che non specificava la versione);
- Nell'App Store mi è comparsa la voce di aggiornamento ai CLI tools 8.3.spicci (che avevo appena portato a termine), e ho aggiornato;
- L'App Store mi ha successivamente proposto l'aggiornamento ai CLI tools 9.0, che ho installato;
- Lanciando `brew upgrade` ottengo **lo stesso errore**.

Ho lanciato il computer nello zaino e me ne sono andato al [meetup di Rust](https://www.meetup.com/it-IT/Rust-Roma/) che mi attendeva. La mattina dopo mi viene lo sghiribizzo di controllare meglio: il laptop mi accoglie con un popup che mi informa del download di **XCode 9.0** fallito (cominciamo bene), e a me viene in mente di lanciare una find su `/Applications` giusto per capire; infatti scopro che ho una versione di XCode installata, a 'sto punto non tanto **a mia insaputa** quanto a insaputa del sistema operativo. Provo a cancellarla, e a rilanciare `brew upgrade`.

Funziona.

Poi dicono che **Linux è difficile**.
