---
layout: post
status: publish
published: true
title: Elixir per idioti /3, Enum e funzioni di Enum
date: 2018-02-18 14:01:16 +0100
categories:
- Development
tags:
- elixir
- ruby
- development
- enum
---

Andando in ordine sparso rispetto alle funzioni messe a disposizione dalla **standard library di Elixir**, una cosa che adoro letteralmente è il modulo `Enum`.

### Il protocollo Enumerable
La prendo da lontano: il modulo Enum contiene funzioni che posso iterare su qualsiasi tipo, custom e non, che implementi il protocollo `Enumerable`. Per implementare un protocollo la documentazione ci mette a disposizione tutto ciò che dobbiamo sapere, e ci basta implementare le funzioni che quello specifico protocollo richiede.

Io sono un fan dell'approccio configuration-over-convention, ma in questo caso devo dire che pur con le mie perplessità penso che questo tipo di convention-over-configuration sia il meglio che si possa ottenere senza rischiare di fare casino.

*Con [convention-over-configuration](https://it.wikipedia.org/wiki/Convention_Over_Configuration) si fa sempre casino ndr.*

Per tantissimi tipi di base, il [protocollo Enumerable](https://hexdocs.pm/elixir/Enumerable.html) è già implementato di suo e non dobbiamo assolutamente preoccuparci di scrivere noi le funzioni che consentano al modulo Enum di operare indisturbato; questo significa che la premessa di cui sopra per i non smaliziati è assolutamente inutile, però mi piaceva farla.

E ora, dai con le cose importanti.

### Enum
Il modulo `Enum` serve a fare pressoché qualsiasi operazione di cui abbiamo bisogno su **tipi iterabili**, come le liste o le mappe. Ci espone un sacco di funzioni, di cui le più importanti "ovviamente" (ovviamente un corno, ma per chi conosce la programmazione funzionale è ovvio) sono `map` e `reduce`.

Un esempio:

```elixir
iex(1)> list = [1, 2, 56, 43, 90]
[1, 2, 56, 43, 90]
iex(2)> Enum.map(list, fn(x) -> x * 2 end)
[2, 4, 112, 86, 180]
```

Abbiamo **dichiarato una lista** con dei valori dentro, dopodiché abbiamo mappato la funzione che raddoppia il valore che le diamo in pasto su ogni elemento della lista che abbiamo dichiarato in precedenza. In questo caso abbiamo usato una **funzione anonima** (ovvero una funzione dichiarata inline a cui non abbiamo dato un nome).

Abbiamo mille altre funzioni per ottenere informazioni sulla nostra lista, come `count`:

```elixir
iex(3)> Enum.count(list)
5
```

O per manipolarla:

```elixir
iex(4)> Enum.concat(list, [23, 42])
[1, 2, 56, 43, 90, 23, 42]
iex(5)> list
[1, 2, 56, 43, 90]
```

Notiamo bene che in perfetta linea con l'orientamento funzionale del linguaggio, queste funzioni non modificano il parametro che passiamo in ingresso, ma per esempio per quanto riguarda la nostra lista ne ritornano una nuova. Per mantenere il risultato della nostra `concat`, dobbiamo quindi dichiarare una nuova lista, e in questo modo potremo fare logica sull'output della funzione.

```elixir
iex(6)> larger_list = Enum.concat(list, [23, 42])
[1, 2, 56, 43, 90, 23, 42]
iex(7)> larger_list
[1, 2, 56, 43, 90, 23, 42]
iex(8)> Enum.map(larger_list, fn(x) -> x * 3 end)
[3, 6, 168, 129, 270, 69, 126]
```

Il manuale di `Enum` è piuttosto vasto. Ve l'ho già detto che userei il manuale di Elixir in generale come lettura della buona notte? La reference di `Enum` la troviamo [qui](https://hexdocs.pm/elixir/Enum.html).

È importante notare come le funzioni, anonime o meno che siano, che passiamo alle funzioni di `Enum`, possano cambiare leggermente la loro API in funzione del **tipo su cui iteriamo**. Per esempio per iterare su una mappa abbiamo bisogno di una funzione con ingresso un parametro, una tupla con la chiave e il valore, su cui dentro la funzione che dichiariamo potremo fare logica ovviamente.

```elixir
iex(9)> map_to_iterate = %{top: 1, lol: "this is a random string"}
%{lol: "this is a random string", top: 1}
iex(10)> Enum.map(map_to_iterate, fn(param) -> IO.inspect(param) end)
{:lol, "this is a random string"}
{:top, 1}
[lol: "this is a random string", top: 1]
```

In questo caso non abbiamo modificato nulla per cui la funzione ci ha **stampato** quello che le abbiamo chiesto di stampare (ovvero la tupla in input), e ci ha restituito la mappa convertita in una **lista di tuple**, che si può consultare nello stesso modo di una mappa standard quindi non ci crea problemi.

Possiamo comunque anche modificare la nostra mappa in ingresso:

```elixir
iex(11)> Enum.map(map_to_iterate, fn({k, v}) -> {k, "Look! #{v}"} end)
[lol: "Look! this is a random string", top: "Look! 1"]
```

Ma che cosa abbiamo appena fatto? Abbiamo usato una sintassi molto concisa per dichiarare il valore di ritorno della nostra funzione. Probabilmente ne parleremo di qui a breve: Elixir consente una **potenza espressiva** notevole, il che significa che in pochissime righe di codice possiamo fare parecchio. Questo significa anche, però, che ad un occhio meno allenato il codice possa risultare meno comprensibile.

[Vai alla parte 2](http://dottorblaster.it/2018/01/elixir-for-dummies-2/)

