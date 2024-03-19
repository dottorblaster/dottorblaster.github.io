---
layout: post
status: publish
published: true
title: Due parole su KDE Plasma 6 in openSUSE Tumbleweed
date: 2024-03-19 20:35:58 +0100
categories: 
- Linux
tags: 
- linux
- kde
- opensuse
- tumbleweed
---

Giusto una nota piccolina sull'aggiornamento a **KDE Plasma 6** sul laptop che uso per vedere le serie, che assolve a quello e pochi altri ingrati compiti, sul quale ho installato proprio per avere poche possibilità che le cose andassero storte **MicroOS Kalpa**, che sarebbe la stessa cosa di MicroOS Aeon (quindi MicroOS ma pensato per il desktop) ma con KDE al posto di GNOME.

Per capire come mai sono così soddisfatto, una necessaria premessa: MicroOS è letteralmente openSUSE Tumbleweed, ma con l'immutabilità applicata, quindi semplicemente tutto quello che modifica il sistema di base viene "inkebabbato" dentro una transazione. Questo fa sì che il sistema passi tramite un reboot dallo stato A allo stato B, senza stati intermedi.

Devo dire che effettivamente l'infrastruttura ha mantenuto la parola: [sulla mailing list di openSUSE Factory](https://lists.opensuse.org/archives/list/factory@lists.opensuse.org/thread/FZ7OPVGZS3IIJKTQSB5JIGAFPIU466R3/) ho letto tantissime persone che si sono lamentate di problemi relativi alla persistenza della sessione, particolarmente del fatto che la sessione grafica sia stata compromessa a metà aggiornamento e chi magari stava usando un terminale tipo Konsole per aggiornare ci ha quasi rimesso il setup.

Devo dire che grazie al filesystem gestito in maniera (quasi) interamente transazionale a me non è successo: fuori KDE 5, dentro KDE 6, semplicemente tramite un reboot. Anzi, voglio fare il coatto ancora di più: grazie agli update automatici ho continuato a vedere le serie di cui sopra (Doctor Who in particolare) senza accorgermi di niente.

Qualche piccolo problema l'ho avuto al reboot: un po' di impostazioni sono andate perse, tra cui quella per lo scaling factor del mio monitor 4K, ma soprattutto mi trovo installate due copie di VLC: una è la consueta installazione via Flatpak, l'altra è un'installazione che credo il package manager si sia sentito autorizzato a tirare dentro dai repository[^1].

Smooth.

O quantomeno: rispetto a quello che leggo in giro, una crema.

[^1]: Ne sono abbastanza sicuro perché mancano tutti i codec.
