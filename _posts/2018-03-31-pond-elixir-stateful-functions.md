---
layout: post
status: publish
published: true
title: "Elixir: pond, funzioni stateful e GenServer"
date: 2018-03-31 19:53:26 +0200
categories:
- Development
tags:
- elixir
- genserver
- pond
- hex
---

In questi giorni mi è scorso davanti agli occhi un package interessantissimo per Elixir, ovvero [pond](https://github.com/vic/pond). **Pond** permette di implementare quello che a conti fatti è quasi un antipattern della programmazione funzionale, ovvero funzioni che mantengano al loro interno uno stato.

All'interno del README di pond c'è una dissertazione piuttosto interessante sul fatto se convenga o meno fare uso di [GenServer](https://hexdocs.pm/elixir/GenServer.html), ovvero di quelli che ad alto livello sono degli attori, e a basso livello sono processi, solo per mantenere lo **stato di un software**.

> Don't get me wrong, one of the best features of the BEAM is that it's very cheap to create tons of processes and supervise them.
>
> However abusing spawn, just because you want to keep state, well, that's certainly not the smartest thing. If you created zillions of tiny processes all data between them would actually be duplicated on each message pass, since processes prefer to share nothing, messages get copied between them when sent.
>
> Think about the Server part in GenServer, it sounds like something intended to be used by many clients something much more complex than just maintaining state.

Di seguito troviamo qualche link come ["To spawn or not to spawn?"](http://theerlangelist.com/article/spawn_or_not) per corroborare la discussione su questo aspetto. Sinceramente tutto questo mi è stato utile per capire il ruolo dei **GenServer** nello sviluppo di un'applicazione **Elixir** (o Erlang), ed il fatto che è assolutamente vero che **creare nuovi processi grazie alla BEAM** è molto semplice, ma la creazione di nuovi processi dovrebbe essere qualcosa che viene dall'architettura dell'applicazione che stiamo progettando, e non tanto dalla volontà di cavarsela con poco nella gestione di uno o due staterelli.
