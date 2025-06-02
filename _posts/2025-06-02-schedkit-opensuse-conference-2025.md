---
layout: post
status: publish
published: true
title: schedkit @ openSUSE Conference 2025
date: 2025-06-02 19:28:41 +0200
categories: 
- Linux
tags: 
- schedkit
- ebpf
- linux
- opensuse
- suse
---

Poco dopo [il FOSDEM di quest'anno](https://dottorblaster.it/2025/02/fosdem-2025/) mi sono messo a ragionare se avesse senso tentare di eseguire scheduler scritti con sched_ext in maniera containerizzata. La parola "containerizzato" per uno scheduler userspace è abbastanza stiracchiata semplicemente perché comunque il processo all'interno del container ha comunque bisogno di privilegi più elevati rispetto a quelli usuali, rompendo un po' il modo di pensare classico rispetto a queste tematiche.

Prima di spenderci troppi pensieri, avevo già creato [un piccolo tool](https://github.com/schedkit/schedctl) che sostanzialmente si interfaccia in maniera abbastanza "opinionata" a containerd e **Podman** e li usa come container engine/runtime per istanziare uno scheduler containerizzato scritto usando appunto sched_ext, che permette di **implementare scheduler personalizzati** attraverso una serie di callback tramite **eBPF**.

La notizia in realtà non è tanto questa, quanto il fatto che a fine Giugno sarò a Norimberga per la [openSUSE Conference 2025](https://events.opensuse.org/conferences/oSC25), per parlare appunto [di schedkit](https://events.opensuse.org/conferences/oSC25/program/proposals/4964), dei traguardi che ha raggiunto e delle prossime mosse. È la prima volta che presento un progetto così ambizioso, e devo dire che non pensavo nemmeno che mi accettassero il talk :-)

Ho una nuvola di cose in testa in questo momento anche perché sono reduce dal retreat del mio team a Lisbona qualche settimana fa, ma non volevo che un annuncio del genere alla fine andasse perso semplicemente per pigrizia. Stanno succedendo parecchie cose in queste settimane, sia lavorativamente parlando che personalmente parlando[^1], e spero che questo blocco note non patisca ancora a lungo.

Ci vediamo alla **openSUSE Conference**!

[^1]: Sono tornato a fare il master di D&D! Speriamo che riesca a terminare la campagna questa volta.


