---
layout: post
status: publish
published: true
title: Elixir per idioti /4, definire moduli e funzioni
date: 2018-06-16 18:41:52 +0200
categories:
- Development
tags:
- development
- module pattern
- elixir
---

La scorsa volta, che ormai è stata un po' di tempo fa, avevamo visto come operare sulle liste tramite le funzioni messe a disposizione dal modulo Enum. Un modulo non è altro che una **raccolta di funzioni**, come una scatola degli attrezzi; possiamo usare i moduli per organizzare meglio il nostro codice e raggruppare le funzioni che scriviamo per affinità. Adesso riprendiamo le basi del linguaggio e poniamoci una domanda: cosa succederebbe se io volessi scrivere **un modulo tutto mio con blackjack e squillo di lusso** in cui raggruppare le mie funzioni?

È abbastanza semplice, ci basta usare `defmodule`. Un modulo **Elixir** ha questa faccia:

```elixir
defmodule Hello do
  def salute(name) do
    IO.puts("I salute you, " <> name)
  end

  def sayhello(name) do
    IO.puts("Hello, " <> name)
  end
end
```

Insieme a `defmodule` stiamo imparando anche come definire delle funzioni. Una funzione in Elixir si compone della keyword `def`, un nome, e degli argomenti (quelli passati tra parentesi). In seguito possiamo richiamare le funzioni del modulo che abbiamo definito in questo modo:

```elixir
Hello.salute("Alessio")
```

E otterremo che venga stampato a schermo un saluto col nostro nome, come da codice. Se vogliamo provare a giocare un po' con la definizione dei moduli possiamo **buttare giù uno script Elixir** al volo, creando un file chiamato `hello.exs` con questo contenuto:

```elixir
defmodule Hello do
  def salute(name) do
    IO.puts("I salute you, #{name}")
  end

  def sayhello(name) do
    IO.puts("Hello, #{name}")
  end
end

Hello.salute("Alessio")
Hello.sayhello("Arcibaldo")
```

Per eseguirlo ci basta spostarci nella directory dove si trova e lanciarlo con il comando `elixir`:

```bash
$ elixir hello.exs
I salute you, Alessio
Hello, Arcibaldo
```

Possiamo definire quanti **moduli** vogliamo. In uno script piccolo di un solo file fatichiamo a vedere l'utilità di una cosa simile, ma quando abbiamo tanti file e un progetto che comincia ad assumere una stazza importante, l'ordine è fondamentale. Per quanto riguarda la creazione di un nuovo progetto (non uno script piccolino, proprio un progetto di quelli potenzialmente grandi) da zero vi rimando al [post di Francesco](http://francesco.codes/2018/05/11/come-configurare-un-primo-progetto-elixir-ed-effettivamente-e-semplicissimo/), che illustra molto bene il tool che viene usato per gestire i progetti in Elixir, Mix, insieme al suo uso più comune, ovvero `mix new`.

### La keyword `return` in Elixir
Vale la pena spendere due parole, dato che stiamo parlando per la prima volta davvero di **funzioni**, su come definire i valori di ritorno delle proprie funzioni in Elixir. Al posto di usare `return` come in tantissimi altri linguaggi, tra cui JavaScript, Java, o Ruby, in Elixir il valore di ritorno di una funzione è semplicemente l'ultima espressione che scriviamo dentro di essa.

Per dare un occhio più approfondito a questa piccola particolarità possiamo definire un modulo che si occupi di fare piccole operazioni sui numeri:

```elixir
defmodule SimpleMath do
  def divide_by_two(number) do
    number/2
  end

  def square(number) do
    number*number
  end

  def sum_three(number) do
    number+3
  end
end
```

Salvando questo modulo come `simple_math.ex` possiamo caricarlo dentro `iex` e farci degli esperimenti:

```elixir
iex(1)> import_file("simple_math.ex")
{:module, SimpleMath,
 <<70, 79, 82, 49, 0, 0, 5, 56, 66, 69, 65, 77, 65, 116, 85, 56, 0, 0, 0, 159,
   0, 0, 0, 17, 17, 69, 108, 105, 120, 105, 114, 46, 83, 105, 109, 112, 108,
   101, 77, 97, 116, 104, 8, 95, 95, 105, 110, ...>>, {:sum_three, 1}}
iex(2)> 4 |> SimpleMath.divide_by_two |> IO.puts
2.0
:ok
iex(3)>
```

Come vediamo, all'interno delle funzioni ci basta usare un'espressione per identificarla come **valore di ritorno**. Se volessimo la stringa `ciao` come valore di ritorno, non dovremmo fare altro che scrivere `"ciao"` alla fine della funzione. Per chi viene da altri linguaggi questa è una differenza non da poco, dato che Elixir non è strutturato per permettere per esempio i cosiddetti "early return"[^1] all'interno delle funzioni. Io però con questo meccanismo ho preso confidenza abbastanza in fretta.

Adesso che sappiamo come definire funzioni ma soprattutto come definire moduli dove raccogliere le nostre funzioni, possiamo mantenere il codice ordinato. Non ci resta altro che cominciare con qualche piccolo progettino[^2].

[Vai alla parte 3](http://dottorblaster.it/2018/02/elixir-for-dummies-3/)

[Vai alla parte 5](http://dottorblaster.it/2018/07/elixir-for-dummies-5/)

[^1]: Per chi volesse approfondire, un buon esempio di early return in JavaScript è [qua](http://blog.timoxley.com/post/47041269194/avoid-else-return-early). È una tecnica che uso anch'io, ma in Elixir non si può, e non solo: in realtà per come è strutturato il linguaggio penso aiuti a fattorizzare meglio il codice. Se ne volete parlare, meglio scrivermi o venire al prossimo incontro di Elixir Roma ;-)

[^2]: In realtà manca ancora un piccolo pezzettino, confido che lo vedremo presto. Avete visto la piccola magia che ho fatto dentro iex nell'ultimo snippet di codice? Si chiama pipe operator. Ma ne parleremo meglio la prossima volta.
