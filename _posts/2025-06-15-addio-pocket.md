---
layout: post
status: publish
published: true
title: Di Mozilla, Pocket, e asce che calano
date: 2025-06-15 15:44:44 +0200
categories: 
- Linux
tags: 
- cauldron
- pocket
- mozilla
---

Tornando qualche settimana fa dal retreat a Barcellona di tutto il mio dipartimento sono stato sorpreso (almeno in prima battuta) dalla notizia che rimbalzava in giro per l'Internet secondo cui Mozilla avrebbe chiuso Pocket da Ottobre 2025. Oltre al fatto che io adoro Pocket come servizio, e che ero entusiasta di usarlo sia sui miei computer che su _tutti_ i miei dispositivi dato che si integra (...va) nativamente con il Kobo, la reazione negativa che ho avuto nel leggere questa novità è stata accentuata ovviamente dal fatto che [più o meno un anno fa](https://dottorblaster.it/2024/10/cauldron-devlog-settimana-8/) ho deciso di svilupparne un [client per il desktop Linux](https://flathub.org/apps/it.dottorblaster.cauldron).

Oltre a rosicare tantissimo e a trovarmi inerme di fronte [alla issue](https://github.com/dottorblaster/cauldron/issues/136) che mi ha aperto il buon [Alessandro](https://miliucci.org), chiaramente adesso mi sto chiedendo: che fare per il futuro?

## RIP Pocket sul Kobo
**Pocket sul Kobo** era una figata. Secondo me avrebbero potuto raffinarne poco poco l'usabilità: per esempio la grandezza dei caratteri degli articoli di Pocket era stranamente molto piccola, e ogni volta che mi sono trovato a usare questa funzionalità ho dovuto aumentare la font-size talmente tanto che andando poi a rileggere un libro sembravo uno di quegli orbi che leggono due lettere per pagina.

## Tutto sommato, non una sorpresa
Stupido io ad investirci così tanto: **Pocket** sembrava già alla canna del gas da tantissimo tempo, e ho deciso di ignorare tutti i segnali. Primo tra tutti, proprio il segnale principe di non mantenere più e addirittura togliere dall'App Store il client per Mac, che era un piccolo gioiello.

Quantomeno mi rimane la soddisfazione di essere stato capace di replicare quell'esperienza utente prima della fine.

Gli altri segnali sono sempre stati un reiterato tentativo di palesare il fatto che Mozilla non era assolutamente interessata a continuare il lavoro su Pocket, specie avendo realizzato di non poterci guadagnare. Insomma, non voglio buttarla troppo sul politico, ma un'altra grande vittoria del capitalismo - e a rimetterci siamo sempre noi consumatori, dato che all'interno di un sistema capitalista parlare di utenti anziché di consumatori secondo me mistifica e altera un pochettino la percezione della realtà.

Le alternative (self-hosted) che ho valutato sono [Wallabag](https://wallabag.it/en/) e [Shiori](https://github.com/go-shiori/shiori): ho tentato di non farmi contaminare troppo dai dettagli implementativi, ma il fatto che Wallabag, pur ricco di integrazioni, sia in PHP mi rende veramente difficile pensare che sia facile da operare e con poco impatto sulla mia infrastruttura, che è piccolina.

## Gli impatti su Cauldron
Non ultima ovviamente per me la domanda cardine: cosa succederà a Cauldron?

Per Cauldron vedo alcune vie, soprattutto data la presenza per Wallabag di un client desktop:

- Buttarlo nel secchio (è una possibilità);
- Convertire l'applicazione a un approccio multi-provider che permetta di autenticarsi con qualsiasi servizio;
- Convertire l'applicazione in un client desktop per Shiori.

Tutto questo (qualsiasi cosa non rientri nella decisione del secchio) sarebbe comunque fattibile per me solo nella seconda metà inoltrata dell'anno.

Per una volta che avevo fatto una cosa carina... ma vabbeh, shit happens :-)
