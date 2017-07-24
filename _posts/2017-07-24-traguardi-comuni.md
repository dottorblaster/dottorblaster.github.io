---
layout: post
status: publish
published: true
title: Software development, traguardi comuni, e benefit per gli utenti
date: 2017-07-24 18:05:59 +0200
categories:
- Development
tags:
- development
- agile
- sviluppo software
- programmazione
- team
- management
---

![Desperate coder](https://gitlab.com/dottorblaster/blog-images/raw/master/images/desperate_coder.jpeg)

Di recente ho letto [un post](https://blog.halide.cam/one-weird-trick-to-lose-size-c0a4013de331) su come evitare di far diventare le applicazioni mobile che sviluppiamo dei **mega blob**. È stato veramente interessante, anche se non sviluppo mobile; una cosa però ha particolarmente attirato la mia attenzione:

> Say an engineer wants to move up the tech ladder. Shipping features won’t get you a promotion. Building a new layout engine does. The company even gets recruiting-bait for the engineering blog.
>
> The only solution is senior leadership declaring, “We are going to slim down our app.” Unfortunately, tech CEOs don’t use iPhones with 8 gigs of storage, and they don’t live in areas with shoddy speeds.

Questo snippet proviene dalla conclusione di "One Weird Trick to Lose Size". Mi ha veramente colpito non appena l'ho letto. Perché? Ma per via del mio passato da consulente, ovviamente.

### Tradeoff
Quando ancora ero un giovane **freelance imberbe** puntavo a fare le cose al meglio (almeno secondo me), con uno standard che col tempo ho imparato a riconoscere come piuttosto alto. I miei software hanno sempre avuto una certa _raison d'être_, risolvevano problemi che generalmente o aveva il mio cliente, o avevo io. Niente di più, niente di meno. E i setup dei sistemi operativi più o meno seguivano lo stesso principio: straight to the point.

Col tempo ho imparato che non funziona così nella maggior parte dei casi: la sovringegnerizzazione prende il sopravvento, insieme al **boilerplate code**, quando poi lavori con altre persone che non hanno la stessa lista di priorità che hai tu. Ecco che dunque sei costretto a tralasciare pezzi di applicativo per dedicarti ad altro, ad accroccare soluzioni che stanno in piedi alla bell'e meglio solo perché "dopodomani il cliente vuole che gli diamo qualcosa da provare", lasci stare i test perché nell'immediato non servono e "non ci pagano per questo".

Lasciando il ventre di vacca della vita da freelance solitario per divenire un membro di un branco ho imparato cose meravigliose, ho conosciuto persone altrettanto spettacolari e sono venuto a contatto anche con queste schifezze. Luci e ombre. Quando era il momento di **produrre debito tecnico**, buttare fuori codice di cui non eravamo fieri, mettere in piedi un server senza configuration management, in tutti questi casi ho potuto osservare un fattore, che è poi ciò che produce da una parte frustrazione mentre dall'altra: una grandissima diseguaglianza di obiettivi tra lo **sviluppatore** (voglio fare il miglior prodotto possibile) e il **management** (voglio il prodotto il più in fretta possibile).

Questo ci fa vivere male il nostro lavoro e, soprattutto, genera dei side effect. Un esempio sono le cose che non funzionano come dovrebbero quando escono dagli ambienti di demo. Purtroppo mi sono accorto che questa condizione è data dalla **mancanza di obiettivi comuni** e dalla assoluta disparità tra le figure coinvolte nel portare avanti un progetto.

Lateralmente, è anche il motivo per cui le metodologie agili in Italia attecchiscono così poco senza essere snaturate e trasformate in dei **waterfall ad alta frequenza**: invece di focalizzarsi su MVP ed utenti, alla fine si vuole solo risparmiare tempo su tempo attraverso il micromanagement, cosa che i programmatori digeriscono male. Motivo per cui focalizzarsi sul proprio utente risulta essere un buon tradeoff.

### Quello che dico io, quando lo dico io
La necessità di trovare un tradeoff deriva dal fatto che nell'economia del software attuale, quando non abbiamo la fortuna di essere inseriti in delle aziende che abbiano una coscienza **seria** di cosa sia il loro reparto IT, esistiamo come specialisti per far fare carriera al nostro capo (o al nostro committente). E il nostro committente non farà strada se facciamo cose come snellire il bundle della nostra applicazione. Esso beneficerà, e noi assieme a lui, di un **continuo rollout di feature**, perfettamente inutili, con delle tempistiche assolutamente fuori dal mondo. Tutto questo, per giunta, a dei ritmi che usualmente non sono niente di sopportabile a lungo termine.

Inutile dire che rispetto a questa piaga globale (dopo la [website obesity crisis](http://idlewords.com/talks/website_obesity.htm), possiamo parlare di generica application obesity crisis?) l'Italia non consente nemmeno una buona frequenza di turnover, con l'economia del lavoro IT abbastanza al lumicino, il che servirebbe da **deterrente** per chi costringe i sottoposti a lavorare, perdonatemi il termine, di merda.

Questo non vale solo per le piccole aziende: di recente ho avuto occasione di confrontarmi con alcune grandi realtà alle quali ho avuto il piacere di dire "guardate ragazzi, ci vediamo un'altra volta eh", proprio in virtù di questo. Per fortuna ultimamente ho trovato un po' di pace: saluto con molto affetto il mio teamleader [Riccardo](https://github.com/riquito), la quale è l'unica persona che in vita mia mi abbia inserito dei task di studio nel [backlog dello sprint](https://www.mountaingoatsoftware.com/agile/scrum/scrum-tools/sprint-backlog).

Purtroppo quella a cui mi riferisco è una situazione che sembra non solo italica, ma mondiale. Non si riconosce mai alla **riduzione del debito tecnico** il peso che merita, tantomeno ai benefici per l'utente (shocking!), e purtroppo questo induce degli errori microscopici se presi uno ad uno, macroscopici se presi insieme, da parte anche di team di sviluppo rodati sottoposti purtroppo alla tortura sempre più ricorrente dello "shit it fast, ship it buggy" – e non solo: spesso vengono partoriti mostri, ai quali è stata data un'impronta originale dai developer, obbligati poi a cambiare direzione (senza ovviamente avere il tempo per rinnegare eventualmente scelte tecniche vincolanti) da un management fermo nelle decisioni quanto un polso nervoso.

Tutto questo flusso di coscienza per dire che si, purtroppo soffriamo di una **disparità di mire** personali tra development e management che spesso produce il contrario di quello che gli utenti vorrebbero da noi. E questo non è nemmeno detto che faccia schifo a tutti.
