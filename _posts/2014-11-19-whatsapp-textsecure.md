---
layout: link
status: publish
published: true
title: WhatsApp fornisce un meccanismo di crittografia e2e
origlink: https://whispersystems.org/blog/whatsapp/
categories:
- Tech
tags:
- android
- whatsapp
- smartphone
- networking
- security
- mobile
---

Dal blog di **Open Whisper Systems**:

> The most recent WhatsApp Android client release includes support for the TextSecure encryption protocol, and billions of encrypted messages are being exchanged daily. The WhatsApp Android client does not yet support encrypted messaging for group chat or media messages, but we’ll be rolling out support for those next, in addition to support for more client platforms. We’ll also be surfacing options for key verification in clients as the protocol integrations are completed.

È bene che WhatsApp metta una toppa alle proprie falle di sicurezza, visto che relativamente poco tempo fa ci sono stati un paio di casi di segnalazioni piuttosto allarmanti. Tuttavia:

- Lo so che è un tipo di encription end to end, ma finché **il server è proprietario** può sempre esserci qualche magheggio (notare il termine tecnico) dietro che di fatto non consente un viaggio ddel messaggio da utente a utente completamente sicuro;
- WhatsApp stesso è closed source, quindi il massimo che possiamo fare è decompilare l'APK per vedere se troviamo qualcosa di utile, o sniffare la rete per verificare che **veramente** venga usato quello specifico protocollo;
- La cosa positiva è che quantomeno sia il server che il client sono **open source**. La questione, come detto sopra, è verificare se veramente WhatsApp usa 'sta roba o una versione modificata.

Poi vabbeh: se volessi essere inutilmente caustico consiglierei a tutti di [passare a Telegram](http://dottorblaster.it/2014/03/telegram-pro-e-contro/), ma non lo farò (anche perché non credo che sia una soluzione).

