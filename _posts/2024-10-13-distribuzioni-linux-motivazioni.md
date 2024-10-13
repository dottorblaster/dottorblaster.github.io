---
layout: post
status: publish
published: true
title: Il ruolo delle distribuzioni Linux nel 2024
date: 2024-10-13 13:37:54 +0200
categories: 
- Linux
tags: 
- linux
- unix
- distro linux
- linux development
---

Questo weekend sono stato a un matrimonio. Nonostante la bellezza stupenda della genuinità di un gruppo di amici che si riunisce per far festa[^1], una cosa in particolare che mi ha colpito è stato parlare con un altro invitato, anche lui addentro al mondo dell'informatica quanto me: parlando del mio lavoro, della distribuzione Linux su cui ogni tanto metto le mani, ovviamente è scappato il "ah, ma è ancora sviluppata?" di rito.

Questo ancora una volta mi ha portato a chiedermi se abbia senso il concetto di **distribuzione Linux**, che infatti sta morendo per come era inteso negli anni passati. Ad oggi quello che viene comunemente inteso come distribuzione Linux ha molti meno livelli rispetto a prima:

- Il primo livello di configurazioni di base, rappresentato dalla gerarchia del filesystem, dagli strumenti preinstallati e dalle location predefinite in cui il package manager installa i pacchetti di base;
- Da systemd in su è praticamente tutto standardizzato, e le personalizzazioni sono minime;
- Lo userspace è dominato praticamente in toto, nei sistemi operativi immutabili per esempio, da sistemi di distribuzione come Flatpak o Docker, dove la distribuzione Linux in sé non interviene più nel "distribuire" appunto i programmi utilizzati dall'utente, tantomeno nel personalizzarli con temi o impostazioni diverse da quelle predefinite dai team di sviluppo.

Ne consegue che ormai il ruolo di una distribuzione Linux è quanto più a basso livello possibile: diminuendo le differenze nello userspace e standardizzando i meccanismi di distribuzione delle applicazioni tratti come il supporto alla Full Disk Encryption, la presenza o meno di un determinato modulo del kernel, l'inclusione di programmi per consentire l'osservabilità del sistema (come una suite di programmi eBPF), risultano tutti fattori differenzianti per le distribuzioni Linux.

Distribuzioni che a questo punto possono permettersi di smettere di dedicare forza lavoro al patching delle applicazioni, per preoccuparsi di quello che dovrebbero in realtà fare al meglio: consentire il funzionamento del sistema operativo come un orologio, senza errori.

Il che, personalmente, è la cosa che mi appassiona e interessa di più.

[^1]: Perché di questo si è trattato, più che di un vero e proprio banchetto nuziale, nonostante l'ottimo catering. A tratti una cerimonia, a tratti un piccolissimo rave party. Ancora i miei migliori auguri a Marco e Guan Xing.
