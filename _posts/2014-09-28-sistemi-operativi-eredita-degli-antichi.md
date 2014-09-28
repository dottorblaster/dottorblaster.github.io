---
layout: post
status: publish
published: true
title: I sistemi operativi e l'eredità degli antichi
categories:
- Open Source
tags:
- linux
- mac
- os x
- bash
- shellshock
- heartbleed
---

![Un urlo per i sistemi operativi, ragazzi](https://farm5.staticflickr.com/4060/4267353106_35ce0e74af_o.jpg)

Abbiamo un problema. E il nostro problema è che usiamo dei sistemi operativi sostanzialmente, globalmente, inaffidabili. Ora, ci sono vari gradi di inaffidabilità: quello di cui sto parlando io adesso riguarda l'**eredità degli antichi** insita nei nostri sistemi, ovvero il fatto che per fare le cose più in fretta chi ha partorito gli aborti tecnologici che abbiamo ogni giorno sotto al sedere ha deciso di integrare dei prodotti già esistenti per formarne uno nuovo. Ogni sistema operativo è fatto così, è la **somma di più software in parte preesistenti al sistema stesso**; proprio in questi giorni abbiamo assistito alla messa a nudo di una falla gravissima nella Bash, la shell che generalmente usiamo sui nostri sistemi Linux o sui nostri Mac. E ancora prima abbiamo guardato impotenti (o circa) cadere ogni sistema basato su OpenSSL "grazie" ad Heartbleed. Nel caso specifico di **Bash**, però c'è stato qualcosa che in molti hanno esternato, ovvero:

> Ma possibile che ci siamo accorti di questa cosa solo vent'anni dopo che questo baco è stato mandato in giro?

Durante questo weekend, mi sono fatto un'opinione precisa della **sicurezza informatica**. E questa opinione, altamente negativa, è stata alimentata anche da uno scritto che ho letto su un paste selvatico in rete, il cui link potete trovare in calce al post, di cui riporto una parte:

> The problem is that it was designed 25 years ago.  Apache didn't exist yet for five years!  Granted, the internet already existed, but it was still a more confidential club.  Security in internet software and protocols were often just not considered at all in that time, and definitely not when developping a program such as a shell. [...] The problem is that 5 years later, new software was developed (apache, dhcp, etc), that uses bash in child processes, and which still uses environment variables to pass data.  Unfortunately, some of that data comes not from the trusted user of the local system, but comes from random users and program on the other side of the internet and of the planet.  And in the meantime, the undocumented (and under-published) feature of bash is forgotten.

La verità è che siamo **fottuti**. :-)

Basiamo i nostri sistemi operativi su uno **strato di software concepito anni, anni, e anni fa** senza preoccuparci minimamente che questi vengano riscritti per essere adattati a come _oggi_ funzionano le tecnologie, a come _oggi_ i sistemi comunicano tra di loro. Allo stesso modo, il mercato delle falle 0day fiorisce per il semplice fatto che parecchi smanettoni non sanno tenere le mani a posto (e meno male, vah), quindi ogni tanto fanno un danno serio che fa drizzare le orecchie a chi di dovere. Ne abbiamo ancora di robaccia da spalar via, quindi mi limito a constatare questo, a farlo presente ancora una volta, e soprattutto ad allegare qui di seguito la **lista di articoli** che mi ha fatto rendere conto di come, in realtà, ogni pezzo di **software** in circolazione sia irrimediabilmente compromesso per ragioni sue o di altri software che lo chiamano, lo sballottano, lo trattano in maniera stramba.

- [Paste number 143864: Not a bash bug](http://paste.lisp.org/display/143864), di tale pjb
- [Everything is broken](https://medium.com/message/everything-is-broken-81e5f33a24e1), di Quinn Norton
- [Programming sucks](http://stilldrinking.org/programming-sucks), di Peter Welch
- [Sale, BSD e paranoia](http://www.keinpfusch.net/2014/09/sale-bsd-e-paranoia.html), di Uriel Fanelli

Siamo specialisti dell'IT, la nostra è una missione. Ma dopo aver letto uno dopo l'altro questi quattro articoli, vi assicuro che ho guardato con molta cupidigia la **zappa** che ho in cantina.

Scommetto che al raccolto avrò dei **fiori di zucca** bellissimi.

_Photo courtesy of [Luca Rossato](https://www.flickr.com/photos/funky64/4267353106/)_
