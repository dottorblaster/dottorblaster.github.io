---
layout: post
status: publish
published: true
title: This is a title
date: 2026-07-05 18:42:16 +0200
categories:
- Linux
tags:
- linux
- distrobox
- ebpf
- kubernetes
- suse
- opensuse
---

Quest'anno per il secondo anno di fila mi sono catapultato a Norimberga per la **openSUSE Conference 2026**. Questo termine non lo uso a caso, perché quando ho visto che anche quest'anno sarebbe stata allo Z-Bau e anche quest'anno l'avrebbero fatta a Norimberga ho pensato che l'anno scorso mi ero divertito talmente tanto, ma talmente tanto che volevo assolutamente esserci.

Ho inviato quindi due candidature per due talk diversi, e sorpresa delle sorprese[^1], sono stati accettati entrambi. Uno ovviamente era più serio, mentre un altro era su una cosa che ho fatto nel tempo libero per cazzeggiare, ma che comunque ha riscosso più di qualche sguardo interessato quando ne ho parlato:

- Il [primo talk](https://events.opensuse.org/conferences/oSC26/program/proposals/5149) infatti è stato tutto dedicato al Runtime Enforcer, il nuovo progetto che ho curato dalla fine dell'anno scorso in qualità di Principal Engineer, affiancato da ingegneri d'eccezione. Mi sono divertito tantissimo a fare il progetto e ancora di più mi sto divertendo a far vedere come funziona: si tratta di un runtime security enforcer, completamente CRD-driven e Kubernetes-native. Questo significa che in un primo momento viene fatto un fingerprinting dei workload che girano sul proprio cluster grazie a un sistema di specchi, leve ed **eBPF**, e in un secondo momento viene semplicemente consultata la mappa costruita a partire da questo fingerprinting per vedere se ci sono processi estranei al comportamento usuale che stanno provando a partire. Spiegarlo in un tot di minuti più ovviamente una live demo è stata una sfida, ed esserci riuscito mi ha emozionato tantissimo.
- Il [secondo talk](https://events.opensuse.org/conferences/oSC26/program/proposals/5150) invece è stato dedicato ad **amake**, un tool che ho scritto per gioco, stufo di dover ripetere sempre i soliti prompt soprattutto per task piccoli, LLM-driven, a cui non volevo ripetere sempre la solita solfa. Di fatto usa lo stesso approccio di Make per automatizzare esecuzioni di prompt da parte di coding agent installati sulla nostra macchina. Un'idea semplice, a quanto pare non così banale, molto divertente da implementare e da spiegare.

![Io poco prima di parlare. In realtà mi stavo cacando addosso dalla tensione, fortunatamente non si vede](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/openSUSE-conference-2026/A9EDC807-BC81-4DA3-BBED-C935AF1D0DE8.jpg)

### Gli altri talk
Ho visto un sacco di altri talk, oltre a parlare con le persone nei corridoi[^2]; il consueto stato dell'arte sulla "great migration" di Patrick Fitzgerald non poteva mancare, così come sono rimasto (lo confesso) affascinato dalla pragmaticità di Jeff Mahoney quest'anno durante la sua keynote sul futuro della community openSUSE. Di fatto un bellissimo paragone rispetto a quello che fanno le altre community, con una sugosissima lista di cose da clonare e da non clonare. Il confronto con Fedora è stato ovviamente un passo obbligato, e devo dire che l'analisi di Jeff risuona molto con la mia: c'è tanto di buono da prendere dal modello di governance di Fedora, e anche dal modello di esecuzione quando poi si tratta di mettere a terra le iniziative tecniche. Di fatto il modello di openSUSE dove chi fa le cose comanda è molto bello ma ci espone al fatto di diventare un enorme Far West linuxiano.

Ovviamente menzione d'onore per [Emanuele](https://emanuele.decup.is/) e il suo talk su Distrobox 2.0, che ha ricevuto un sacco di domande e dei feedback atomici: mi è particolarmente piaciuto il fatto di aver non solo fatto un volo d'uccello sulla nuova architettura, ma anche aver visto spiegato cosa implica una riscrittura per Distrobox, quali sono i traguardi che ci aspettiamo in termini di community e come impatta il codice che abbiamo scritto (e riscritto) in termini soprattutto umani oltre che prestazionali. La triade di italiani è stata completata da [Michele](https://github.com/mbussolotto): il suo talk su come eseguire Uyuni praticamente ovunque mi è piaciuto parecchio, e devo dire di essere anche orgoglioso di aver fatto parte di questa batteria di ingegneri mediterranei che hanno invaso Norimberga per qualche giorno. I miei complimenti ai miei due compagni di scorribanda.

![Emanuele "balanza" De Cupis ammaestra la folla riguardo Distrobox](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/openSUSE-conference-2026/3EE5E533-3BD7-4B64-8139-23ED63619DF1.jpg)

Jorge Marques poi ha provveduto a spiegarci come usare i container rootless come self-hosted runner per la nostra CI, e devo dire che il talk è stato molto più interessante di come me lo aspettassi, anche per le menzioni a [pi.dev](https://pi.dev), che ormai adoro, e che non mi aspettavo in un talk simile.

Ultimo ma non per importanza, il talk di [Johannes Segitz](https://github.com/jsegitz) sullo stato dell'arte riguardo le coordinated disclosure, cosa si può fare di meglio, e perché in quest'era ormai completamente invasa dall'intelligenza artificiale è necessario identificare nuove misure e soprattutto cambiare un po' mentalità riguardo le vulnerabilità di sicurezza e le conseguenti patch. Talk talmente fico, un po' come Johannes diciamocelo, che mi ci sono voluto fare una bella foto insieme da mandare a colleghi e ex colleghi.

![Io e Johannes <3](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/openSUSE-conference-2026/1B6BC998-FA5E-485E-97E8-BBB023289D0F.jpg)

### Amici, calore e carne arrosto
Ovviamente, a parte i contenuti tecnici, quello che mi ha fatto impazzire di felicità come sempre è stato reincontrare ingegneri che non vedevo da parecchio, e soprattutto persone a cui ho fatto da mentor che sono cresciute. Devo dire che la sensazione di veder crescere le leve più giovani e vederle andare avanti nella propria carriera è qualcosa che sto assaporando solo adesso, e mi rende veramente felice vedere che alcune delle persone su cui ho scommesso di più stanno effettivamente avendo tutto ciò che meritano e anche oltre. Non voglio fare nomi, ma ovviamente c'è in gioco anche un bel po' di meme di mamma chioccia e i pulcini preferiti.

In mezzo a tutti questi sorrisi, e in mezzo anche a tutto questo caldo (perché diciamocelo: c'era un caldo bestiale, come se qualcuno avesse acceso una pompa di calore a tutta manetta per sempre), c'è stato l'istituzionale barbecue di openSUSE Conference. Abbiamo mangiato fino a scoppiare, bevuto altrettanto se non di più, constatando che neanche il caldo più atroce può fermare un manipolo di ingegneri fermamente convinti che devono bersi almeno tre birre.

![Un barile di birra in giardino? E perché no?](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/openSUSE-conference-2026/0D6AF1F7-06F6-4EE0-9585-0B0D29AFFA98.jpg)

Sono stati tre giorni meravigliosi. Lungi da me fare l'aziendalista, del lavoro non me ne frega quasi niente (in termini di "day job"), ma per quanto riguarda l'aspetto comunitario relativo al costruire qualcosa, stare a contatto con queste persone è un privilegio per il quale non smetto mai di ringraziare. Sia per l'apporto umano, sia per quanto riguarda l'apporto tecnico, grazie al quale non smetto di crescere anno dopo anno e soprattutto non mi annoio mai.

[^1]: O furboneria delle furbonerie, dato che in questo modo un solo speaker ha coperto due slot con, aehm, una sola allocazione di budget per i viaggi.

[^2]: Diciamocelo: non è per questo che andiamo alle conferenze? Alla fine siamo tutti delle comari del codice.
