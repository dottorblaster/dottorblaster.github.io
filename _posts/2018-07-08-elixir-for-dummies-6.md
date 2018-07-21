---
layout: post
status: publish
published: true
title: Elixir per idioti /6, sua maestà il pattern matching
date: 2018-07-21 12:59:10 +0200
categories:
- Development
tags:
- elixir
- erlang
- beam
- pattern matching
- development
- software
---

Visto che nell'ultimo episodio abbiamo parlato di pipe operator, con cui cominciamo ad affrontare sul serio l'espressività di un linguaggio funzionale, andiamo a parare sull'ultimo ostacolo che ci separa dall'avere ogni base per cominciare a praticare il nostro Elixir-jutsu in maniera efficace. Sto parlando della feature che ogni linguaggio funzionale porta con sé, da Erlang a Scala al nostro Elixir, ovvero il **pattern matching**.

È più facile a farsi che a dirsi (o spiegarsi), ma ci proverò lo stesso con qualche parola astrusa: Elixir possiede la capacità di lasciarci definire più "clause", ovvero funzioni o altri tipi di espressioni, per poi decidere lui stesso quale definizione tra quelle che abbiamo scritto si applica in maniera più vicina all'input che viene dall'esterno. Ripeto: possiamo definire più casi in base a molteplici input, e il runtime provvede ad identificare la **forma più vicina** di volta in volta all'input fornito per poi comportarsi di conseguenza. Ma a questo punto facciamo prima a vedere un esempio pratico. Un modulo può avere più di una definizione della stessa funzione in base all'input:

```elixir
iex(1)> defmodule SalutePeople do
...(1)>   def hello("Alessio") do
...(1)>     IO.puts("Hello Alessio")
...(1)>   end
...(1)>
...(1)>   def hello("Agnese") do
...(1)>     IO.puts("Hello my love")
...(1)>   end
...(1)>
...(1)>   def hello(_anyone) do
...(1)>     IO.puts("Who the fuck are you?")
...(1)>   end
...(1)> end
{:module, SalutePeople,
 <<70, 79, 82, 49, 0, 0, 5, 28, 66, 69, 65, 77, 65, 116, 85, 56, 0, 0, 0, 147,
   0, 0, 0, 15, 19, 69, 108, 105, 120, 105, 114, 46, 83, 97, 108, 117, 116, 101,
   80, 101, 111, 112, 108, 101, 8, 95, 95, ...>>, {:hello, 1}}
```

Definendo un modulo così, cosa otteniamo? Otteniamo una funzione `hello` che si comporta diversamente di fronte a me, alla mia ragazza, o davanti a chiunque altro.

```elixir
iex(2)> SalutePeople.hello("Alessio")
Hello Alessio
:ok
iex(3)> SalutePeople.hello("Agnese")
Hello my love
:ok
iex(4)> SalutePeople.hello("Chiunque altro")
Who the fuck are you?
:ok
iex(5)>
```

Il pattern matching ci permette di specificare in maniera performante ed efficace come i nostri programmi si devono comportare in base a diversi input. Possiamo usare questa caratteristica non solo nelle firme delle funzioni (le firme sono quella sintassi `def tiziocaio(argomento) do ... end`) ma anche nei nostri `case` statement. Normalmente, in linguaggi come JavaScript o Ruby, gli **swith case** non sono altro che delle maniere leggermente più tollerabili (e dipende anche dai casi) di scrivere una scala a pioli di if else. Nei linguaggi come Elixir abbiamo il pattern matching come arma definitiva per renderli molto più potenti. Prendo il primo esempio che mi capita a tiro dal manuale di Elixir:

```elixir
iex> case {1, 2, 3} do
...>   {4, 5, 6} ->
...>     "This clause won't match"
...>   {1, x, 3} ->
...>     "This clause will match and bind x to 2 in this clause"
...>   _ ->
...>     "This clause would match any value"
...> end
"This clause will match and bind x to 2 in this clause"
```

In pratica rispetto a differenti pattern, il runtime come abbiamo già detto è in grado di riconoscere quello che si avvicina di più al caso corrente. In caso di mancato riconoscimento di un pattern, viene applicata la **soluzione più generica**, che in un `case` statement viene indicata con l'underscore come possiamo vedere dall'esempio.

[Vai alla parte 5](http://dottorblaster.it/2018/07/elixir-for-dummies-5/)
