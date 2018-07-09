---
layout: post
status: publish
published: true
title: Elixir per idioti /5, pipe operator e pipeline di funzioni
date: 2018-07-09 08:50:44 +0200
categories:
- Development
tags:
- elixir
- functional programming
- programmazione funzionale
- pipe
- lambda
- linguaggi di programmazione
- erlang
---

Quando ho approcciato **Elixir** per la prima volta, una tra le cose più complicate con cui ho avuto a che fare è stata proprio l'abituarmi a leggere il codice di altri e a capire alcune particolarità del linguaggio, una su tutte il pipe operator. Ve l'ho mostrato nello scorso episodio: il **pipe operator** (`|>`) è un operatore particolare che permette di passare l'output di una funzione direttamente alla funzione successiva come primo argomento.

Questo significa che noi possiamo scrivere qualcosa di questo tipo:

```elixir
IO.puts(divide_by_two(square(10)))
```

In una forma migliore, che è questa:

```elixir
10 |> square() |> divide_by_two() |> IO.puts()
```

E possiamo anche **formattarlo** perché sia più ordinato:

```elixir
10
|> square()
|> divide_by_two()
|> IO.puts()
```

Il funzionamento del pipe operator è abbastanza semplice, si tratta solo di prenderci la mano e di cominciare a "pensare per pipeline", ovvero immaginare il proprio codice come una **sequenza di funzioni** per cui l'argomento iniziale che noi forniamo passa attraverso, esattamente come una catena di montaggio, e viene di volta in volta "evoluto" in qualcos'altro.

Personalmente questo concetto di **pipeline** è qualcosa che mi piace molto, perché permette di architettare il codice in maniera migliore e soprattutto di giocare alle scatole cinesi, per cui una funzione può semplicemente assumere la forma di una grossissima catena di montaggio:

```elixir
def huge_pipeline(number) do
  number
  |> some_function()
  |> some_other_function()
  |> wow()
  |> such()
  |> code()
end
```

Ogni funzione di quelle che abbiamo indicato applicherà le sue modifiche al numero in entrata e l'output come abbiamo detto verrà passato alla successiva. Facile no? Proviamo a definire qualche funzione e a **giocare col pipe operator** per capire meglio.

```elixir
iex(1)> defmodule SimpleMath do
...(1)>   def square(number), do: number*number
...(1)>   def divide_by_two(number), do: number/2
...(1)> end
{:module, SimpleMath,
 <<70, 79, 82, 49, 0, 0, 4, 196, 66, 69, 65, 77, 65, 116, 85, 56, 0, 0, 0, 147,
   0, 0, 0, 15, 17, 69, 108, 105, 120, 105, 114, 46, 83, 105, 109, 112, 108,
   101, 77, 97, 116, 104, 8, 95, 95, 105, 110, ...>>, {:divide_by_two, 1}}
iex(2)> SimpleMath.square(2)
4
iex(3)> defmodule HugeModule do
...(3)>   def great_function(number) do
...(3)>     number
...(3)>     |> SimpleMath.square()
...(3)>     |> SimpleMath.divide_by_two()
...(3)>   end
...(3)> end
{:module, HugeModule,
 <<70, 79, 82, 49, 0, 0, 4, 152, 66, 69, 65, 77, 65, 116, 85, 56, 0, 0, 0, 178,
   0, 0, 0, 16, 17, 69, 108, 105, 120, 105, 114, 46, 72, 117, 103, 101, 77, 111,
   100, 117, 108, 101, 8, 95, 95, 105, 110, ...>>, {:great_function, 1}}
iex(4)> HugeModule.great_function(5)
12.5
iex(5)> HugeModule.great_function(20)
200.0
iex(6)>
```

Ok, ce l'ho fatta. Giuro che non sto barando, ho scritto 'sto polpettone nella shell di Elixir, `iex`, di cui vi ho già parlato.

Quello che ho appena fatto è molto semplice ma secondo me fa capire bene cosa abbiamo davanti: ho scritto un modulo `SimpleMath` simile a quello dell'episodio precedente, dopodiché in un altro modulo (per comodità) ho riusato queste funzioni definite precedentemente **orchestrando una pipeline** composta da queste due procedure e il classico valore in input.

Ci siamo. Se avete afferrato come funziona il pipe operator, siete pronti per la prossima grande avventura, ovvero il **pattern matching**.

[Vai alla parte 4](http://dottorblaster.it/2018/06/elixir-for-dummies-4/)
