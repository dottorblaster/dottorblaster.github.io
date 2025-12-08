---
layout: post
status: publish
published: true
title: "openSUSE Hack Week 25: Distrobox in Go, ma anche moltissime altre cosette"
date: 2025-12-08 16:50:02 +0100
categories:
- Category
tags:
- first_tag
- second_tag
---

Come di consueto, anche quest'anno nella comunità di openSUSE si è tenuta la [openSUSE Hack Week](https://hackweek.opensuse.org/). Sono ormai un po' di anni che partecipo, ma in particolare quest'anno le cose con cui ci siamo (e in particolare mi sono, lol) sporcato le mani sono succose e fichissime, quindi volevo scriverne un pochettino a mo' di appunti sparsi.

## Distrobox in Go
Il progetto principale in cui mi sono cimentato insieme a un gruppo di amici ([Emanuele De Cupis](https://github.com/balanza/), [Fabrizio Sestito](https://github.com/fabriziosestito/), e [Luca Di Maio](https://github.com/89luca89/) stesso) è stato quello di tentare di [riscrivere Distrobox in Go](https://hackweek.opensuse.org/projects/rewrite-distrobox-in-go-poc). Non proprio la cosa più banale del mondo, ma soprattutto devo dire che in una settimana abbiamo raggiunto uno stato di cui siamo soddisfatti e che penso condivideremo pubblicamente a breve. Allo stato attuale la prossima incarnazione di **Distrobox** consente di:

- Creare delle distrobox esattamente come la vecchia versione;
- Entrare nei container che sono stati creati;
- Rimuovere le distrobox;
- Più o meno tutto quello che faceva il comando `assemble`.

Mancano ancora un po' di cose, tra cui lo stop dei container e la creazione di container effimeri (aka `distrobox-ephemeral`), ma allo stato attuale possiamo quantomeno usare la nuova versione per fare un po' di dogfooding, il che alla fine di una settimana di lavori piuttosto intensi e pull request agli orari più assurdi è sicuramente un risultato incoraggiante (a dir poco).

La riscrittura ci ha permesso di portare (o quantomeno cominciare a portare) Distrobox un passo avanti, ottenendo dei benefit che con la vecchia implementazione erano assolutamente impossibili anche solo da pensare:

- Un sacco di leggibilità in più per quanto riguarda il codice, il che significa anche si spera una manutenzione più agevole;
- Un'architettura migliore che divide l'implementazione della CLI dall'implementazione sottostante dei comandi, il che permetterà in futuro di usare Distrobox anche come libreria all'interno di altri programmi (sbizzarritevi!);
- Moltissimo testing in più, sia unitario che di integrazione.

La cosa che mi ha lasciato stupefatto, durante l'Hack Week, è che addirittura questo non sia stato l'unico output.

## Packaging di Lima per openSUSE
Tempo fa mi ero messo a **impacchettare Lima per openSUSE**. In caso non sapeste cos'è [Lima](https://github.com/lima-vm/lima), è progetto CNCF che si occupa di creare un manager di macchine virtuali che sia, per dirla in breve, un po' più moderno del classico VirtualBox. Ha funzionato sui miei sistemi, ma non mi sono mai preso la briga di portare il pacchetto dentro di repository ufficiali di openSUSE perché pensavo che in fin dei conti non sarebbe stato utile a nessuno.

Visto che [Flavio](https://flavio.castelli.me/) con il suo progetto aveva bisogno di un ambiente di test e ha trovato il mio pacchetto che girava per OBS (smentendomi, di fatto), e visto che si è messo anche lui di buzzo buono ad aggiornare il mio packaging iniziale, ho pensato che uno sforzo del genere non dovesse andare buttato. Il tempo di affrontare la burocrazia necessaria (ovvero un paio di [submission request](https://build.opensuse.org/requests/1321436)) e `lima` dovrebbe comparire all'interno dei repository di openSUSE Tumbleweed.

## Lychee 0.22.0 in openSUSE Tumbleweed
In coda alla hackweek, è anche uscita la nuova versione di [Lychee](https://github.com/lycheeverse/lychee), di cui mantengo il pacchetto. Mi sono quindi occupato abbastanza velocemente di aggiornarlo, patcharlo (con un paio di colorite, ehm, osservazioni), e fare la mia bella [submission request](https://build.opensuse.org/requests/1321407).

È stata una Hack Week particolarmente movimentata, quest'anno. Spero che i risultati siano utili a quante più persone possibile, e spero che questo sia solo un finale d'anno che faccia da firestarter per il 2026 :-)
