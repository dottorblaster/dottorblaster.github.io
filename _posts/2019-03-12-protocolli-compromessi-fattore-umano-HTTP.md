---
layout: post
status: publish
published: true
title: Protocolli compromessi dal fattore umano
date: 2019-03-12 10:45:04 +0100
categories:
- Tech
tags:
- http
- internet
- tim berners lee
- gopher
---

È già un po' che questa mia riflessione va avanti, ma solo oggi, **12 marzo**, il "compleanno del WWW", ha trovato una forma degna di essere espressa.

_Abbiamo fallito._

E dico abbiamo perché, per quanto uno zero virgola, ho sempre avuto in quanto sviluppatore, in quanto nerd, in quanto "ricercatore" (qualsiasi cosa significhi), in quanto scienziato – pazzo ma pur sempre tale – il piacere di considerarmi una parte di Internet, una parte dell'allargatissimo gruppo costituente di pazzi che ha dato vita al mondo come lo conosciamo adesso.

Per la verità in gran parte questo ecosistema l'ho subìto, ma ho commentato RFC, contribuito al software **open source**, scritto di **Linux**. E sono qui oggi a proclamare, secondo quello che è il mio poco elevato e utile punto di vista che "noi", chiunque sia questo noi ipotetico, abbiamo fallito.

Pensavamo che Internet avrebbe dato il potere alle persone di comunicare, e che queste una volta appreso il potere che avevano in mano l'avrebbero gestito e controllato. Lo avrebbero usato per il bene. Non sarebbero più esistite barriere comunicative né di ceto sociale, reddito, altro. In una visione estremamente romantica, idealizzata, distorta di ciò che era possibile usando la Rete e rendendola pervasiva nelle nostre vite e negli ambienti che frequentiamo, abbiamo creduto che sarebbe successo il meglio del meglio.

Chiaramente è successo il peggio del peggio. Invece di prenderci ciò che è nostro di diritto, la libertà di parola assoluta, abbiamo permesso ad altri di imporre la loro volontà e usurparcelo. Le telco hanno preso il controllo, anzi forse è meglio dire/_scrivere_ che lo hanno sempre avuto. Ci hanno resi schiavi e vacche da mungere, oggi tramite Facebook, domani tramite Instagram, dopodomani tramite la nuova moda del momento. Nonsense in quattro terzi su palmari in sedici noni.

E oggi, oggi che Google dedica l'[ennesimo Doodle](https://www.google.com/doodles/30th-anniversary-of-the-world-wide-web) (e sarebbe ben ipocrita il contrario) al protocollo che le ha permesso di diventare un colosso da centodieci miliardi di fatturato e dodici miliardi di utile netto, parlando con Agnese lei mi ha detto:

> È quello che avrebbe cambiato il mondo, se solo il mondo non fosse fatto di persone

Ho realizzato che ci sta. Abbiamo cercato di spingere una soluzione tecnica[^1] a risolvere un problema non tecnico. Un problema umano. Da questo mi è venuto in mente [un post](http://antirez.com/news/127) che ho letto un paio di settimane fa, che mi aveva fatto sorridere sul momento:

> On the other hand Gopher is a text only protocol that is great to deliver text only documents where the stress is in what you write. But that would be fetichism, for me the silver bullet of Gopher is that it is UNCOOL. Uncool enough that it will be forever, AFAIK, an alternative reality where certain folks can decide to separate from the rest, to experience a different way to do things, more similar to the old times of BBSs or the first years of the internet. A place where most people will not want to go just to read nerdy stuff in an 80 columns fixed size font.
>
> [...]
>
> Well, have fun with Gopher! I hope this Gopher thing will go forward, I really believe there are a few of us that need to create a community outside the chaos of the modern Internet. No, it will not be possible to have no interactions. For instance I’ve no plans to stop blogging or using Internet. But certain slower higher quality communications need a place to prosper.

**Antirez** ha deciso per il decimo compleanno di Redis di implementare la comunicazione tramite **Gopher**, un protocollo alternativo ad HTTP largamente usato anche ai tempi della nascita del WWW. La sua frase è emblematica, perché con molta ironia riconduce ancora una volta il problema umano a una soluzione tecnica; questa volta però c'è quel sottotesto di proposta di eremitaggio di "contenuti di qualità" (trittico di parole che necessiterebbe di una definizione lunga svariate pagine) che fa ridere, e fa pensare.

Fa pensare perché Internet sarebbe un **posto clamorosamente bello** se fosse libero dalle persone. Libero dalle mammine pancine e da tutta una serie di soggetti categorizzati ed etichettati da altri soggetti che non fanno altro che urlare "io tifo asteroide" alimentando il circlejerk[^2] che porta all'estremo il teorema della bolla di filtraggio.

E dunque arriviamo al paradosso: l'adozione di un altro protocollo, perché HTTP è diventato troppo "pieno di schifezze", quasi al punto da essere irrecuperabile. La soluzione tecnica ad un quesito umano, quello di **Corrado Guzzanti**, secondo il quale "aborigeno, ma io e te, che cazzo se dovemo dì?".

Fa ridere eh? Certo che fa ridere. Lo sapete perché? Perché è _vero_.

Buon compleanno, piccolo esperimento incancrenito chiamato World Wide Web. Cento di questi giorni.

[^1]: [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html), il paper originale di Tim Berners-Lee.

[^2]: A group discussion or activity between like-minded individuals that validates mutual biases or goals in a non-confrontational environment. [From Urbandictionary](https://www.urbandictionary.com/define.php?term=Circlejerk)
