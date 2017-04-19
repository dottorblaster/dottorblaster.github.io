---
layout: link
status: publish
published: true
title: Trappole più comuni in Elixir
origlink: https://medium.com/blackode/common-pitfalls-in-elixir-coding-a9f8a5db2877
date: 2017-04-19 10:28:00 +0200
categories:
- Development
tags:
- elixir
- coding
- pitfalls
- erlang
---

Recentemente mi sono appassionato molto ad **Elixir**, linguaggio funzionale che fa uso della **Erlang VM** per definire una piattaforma veramente versatile orientata ai processi isolati comunicanti via messaggi.

In particolare questo post che ho letto di recente su Blackode mette in luce alcuni aspetti particolari del linguaggio con i quali chi non ha confidenza rischia di fare **assunzioni un po' troppo coraggiose**.

Un ottimo esempio:

> We think that the result of `list ++ value` would be `[1,2,3,4,5,99]` but in general it will be `[1,2,3,4,5|99]`. This is a improper list. You cannot use `length` function over. In proper list, when you iterate over the list, the tail would be `[]` empty list. This is different with the improper list.

