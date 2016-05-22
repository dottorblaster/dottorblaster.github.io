---
layout: post
status: publish
published: true
title: Git squash, log riscritti, bazooka e mosche
date: 2016-05-22 02:15:42 +0200
categories:
- Tech
tags:
- development
- git
- software
---


Ieri sera, ho beccato sul feed reader un elemento che ha catturato immediatamente la mia attenzione; **Matthew Garrett** infatti [ha esibito](https://mjg59.dreamwidth.org/42759.html) quanto fastidio possa dare l'impossibilità di comprendere il lavoro delle altre persone dovuta allo **squash dei commit** sulla history di un progetto Git, specialmente se tutto questo accade all'interno di un progetto **open source**:

> I've got some familiarity with Kubernetes, but even then this commit is difficult for me to read. It doesn't tell a story. I can't see its growth. Looking at a single hunk of this diff doesn't tell me whether it's infrastructural or part of the integration. Given time I can (and have) figured it out, but it's an unnecessary waste of effort that could have gone towards something else. For someone who's less used to working on large projects, it'd be even worse. I'm paid to deal with this. For someone who isn't, the probability that they'll give up and do something else entirely is even greater.

Il punto che spesso mi piace sottolineare è messo a fuoco in modo spettacolare da **Joey Hess**, nel titolo stesso di ["Our Beautiful Fake Histories"](https://joeyh.name/blog/entry/our_beautiful_fake_histories/):

> Beautiful fake histories. Because coding is actually messy; our actual edit history contains blind alleys and doublings back on itself; contains periods of many days the code isn't building properly. We want to sweep that complexity away, hide it under the rug. This works well except when it doesn't, when some detail airbrushed out of the only remaining history turns out to be important.

Ed è veramente così. Chiaramente c'è un sacco di **Work In Progress** di cui fare tanta pulizia alle volte, ma mi sembra che l'attenzione verso la history di un progetto sia portata alla luce da certi personaggi in maniera maniacale, come se fosse l'unica cosa di cui preoccuparsi, quando probabilmente **l'unico vero paletto dovrebbe essere la qualità del codice**. Il pattume nel log di git lo possiamo lasciare alle retrospettive, o comunque ad altri momenti del flusso di lavoro, che il progetto sia aperto o chiuso.

Onestamente, penso che chi passa il tempo a urlare contro le persone perché facciano rebase della propria history sia solo **un incapace a cui piace mettersi in mostra senza mettere sul piatto nulla di tecnico** se non paura e terrore instillato nei confronti di chi potrebbe contribuire in maniera più rilevante a un qualsiasi progetto. Alla fine, invece, quello che si ottiene è solo l'allontanamento di molti dal progetto stesso. Su un progetto open source smetteranno di contribuire. Su un progetto lavorativo, le persone troveranno (o inventeranno) altri task per allocarsi altrove.

Sulle persone che amano fare sceneggiate di questo tipo, **Daniel Robbins** ne dà un buon excursus durante ["Costruire Una Distribuzione"](https://gentoo-handbook.lugons.org/doc/it/articles/making-the-distro-p1.xml). Cercate la parte sugli "strani".
