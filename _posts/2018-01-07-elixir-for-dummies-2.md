---
layout: post
status: publish
published: true
title: Elixir per idioti /2, tipi e operazioni sui tipi
date: 2018-01-09 22:54:16 +0100
categories:
- Development
tags:
- elixir
- erlang
- ruby
- development
---

Visto che abbiamo imparato come configurare Elixir sulla nostra macchina, un po' di esperimenti e un approccio di base.

I tipi sono interi, numeri (in virgola mobile), booleani, atomi[^1], e stringhe.

Possiamo giochicchiarci in `iex`:

```elixir
iex(1)> 1 + 2
3
iex(2)> "hello" <> "world"
"helloworld"
iex(3)> false || true
true
iex(4)> !true
false
iex(5)> !false
true
iex(6)> true == true
true
iex(7)> 2 == 2
true
iex(8)> 2 == "2"
false
iex(9)> 2 == 2.0
true
iex(10)> 2 === 2.0
false
```

Cose che possiamo notare sin da subito: le **operazioni con tipi discordanti** non funzionano, al contrario per esempio di JavaScript dove possiamo sommare stringhe e numeri indistintamente ottenendo una concatenazione (per esempio, grazie al casting implicito "molto libertino"); oltre questo, la comparazione con l'operatore `==` è debolmente tipizzata, ma i tipi compatibili tra loro sono molti meno. `2` è diverso da `"2"` ma è uguale a `2.0`, che è in virgola mobile.

L'uguaglianza con il numero in virgola mobile viene falsificata da una comparazione "strict", ovvero con triplo uguale, che fa anche un check del tipo.

I tipi li considero sempre la parte noiosa, ma vanno studiati; tra le cose divertenti invece abbiamo l'**interpolazione di stringhe**, che è abbastanza utile:

```elixir
iex(15)> lang = "Elixir"
"Elixir"
iex(16)> "I'm studying #{lang}"
"I'm studying Elixir"
```

Stiamo carburando? Stiamo carburando! Mancano ancora un po' di basi, tra cui le **strutture dati** fondamentali per non scrivere cose nonsense. Le vedremo in seguito.

[^1]: Gli atomi sono una figata, chi conosce la programmazione funzionale penso li conosca bene. Per chi non la conosce, sono delle stringhe "on steroids"; ne parleremo più avanti in ogni caso.
