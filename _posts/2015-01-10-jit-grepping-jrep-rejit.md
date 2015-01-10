---
layout: link
status: publish
published: true
title: A JIT for grepping: jrep and rejit
origlink: https://lwn.net/Articles/589009/
date: 2015-01-10 13:20:00 +0100
categories:
- Open Source
tags:
- open source
- grep
- nerd
---

**Alexandre Rames** su **LWN**:

> Jrep is a grep-like program powered by the rejit library. So it is "just another" grepping program, except that it is quite fast. Opportunities to improve regular expression matching performance are interesting for the speed gain itself, but also for the technical aspects behind the scenes.

Un articolo sicuramente interessantissimo non solo sull'implementazione di un algoritmo di generazione JIT di codice macchina per quanto riguarda il **matching di espressioni regolari**, ma anche su tutta la parte di benchmarking che è stata condotta.

**Jrep**, come software, è anche utile per eseguire il match in modalità **multithread**, cosa che grep non può fare.
