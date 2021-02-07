---
layout: post
status: publish
published: true
title: "Da grande voglio essere Bryan Cantrill: tre talk da vedere (più bonus track)"
date: 2021-02-07 12:42:40 +0100
categories: 
- Category
tags: 
- first_tag
- second_tag
---

Da qualche mese ho preso l'abitudine di spendere un'oretta al giorno del mio tempo **guardando dei talk**, vista anche la carenza di conferenze dal vivo (tipologia di evento a cui ero molto affezionato) e non apprezzando tantissimo il formato delle conferenze online - banalmente perché tante volte avere la chattina al posto di una birra in un centro conferenze sminuisce un po' l'intera esperienza.

Ma sto divagando. Qualche settimana fa **Elastic si è esibita in un corposo relicensing di ElasticSearch**, che io preferisco non commentare perché l'azione in sé si commenta abbastanza da sola. Quello che potete leggere in merito lo trovate sul [blog di Drew DeVault](https://drewdevault.com/2021/01/19/Elasticsearch-does-not-belong-to-Elastic.html), dove è linkato un talk molto affine alla questione presa in esame, ovvero un talk di **Bryan Cantrill** del 2011 su Solaris e IllumOS. È stato proprio in questa sede che ho (ri)scoperto la figura di Cantrill, un ingegnere controverso perseguitato per metà della sua vita da una risposta oggettivamente stupida su `comp.sys.sun.hardware`, dagli infiniti meriti tecnologici, e soprattutto un uomo che potrei stare ad ascoltare per ore semplicemente perché sì. Siccome sono andato in fissa, praticamente la mia ultima settimana è stata un continuo approfondimento delle opinioni, dello stile, dei meriti tecnici e del software stesso scritto da lui, accorgendomi che avevo letto di recente anche ["Rust after the honeymoon"](http://dtrace.org/blogs/bmc/2020/10/11/rust-after-the-honeymoon/).

Questo dover ammettere che ogni volta che inciampo su un suo contenuto me lo spolpi voracemente mi ha fatto venire voglia di scrivere questo post in cui vi linko tre suoi talk che secondo me spiegano abbastanza bene come mai da grande io voglia essere Bryan Cantrill.

### Fork Yeah! The Rise and Development of Illumos
<iframe width="560" height="315" src="https://www.youtube.com/embed/-zRN7XLCRhc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Questo è il talk che citavo sopra: IllumOS era appena nato dalle ceneri di Solaris, e se c'è una cosa di cui quest'uomo è estremamente fiero è l'aver lavorato al fianco dei giganti prima dell'acquisizione di Sun, essendo poi diventato egli stesso un gigante scrivendo [DTrace](https://github.com/opendtrace/opendtrace). A parte le cose divertenti come le prese in giro rispetto a Oracle e ai vari personaggi dell'epoca, una cosa che adoro di questo talk è il porre l'accento in maniera particolare sul **principio fondante di Sun** (che purtroppo è stato il suo canto del cigno):

> Kicked ass, had fun, loved our customers, changed computing forever.

Il che per quanto mi riguarda è quello che cerco di fare ogni giorno.

### Debugging Under Fire: Keep your Head when Systems have Lost their Mind
<iframe width="560" height="315" src="https://www.youtube.com/embed/30jNsCVLpAE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Il mio meccanismo di scoperta su YouTube è pressoché quello di tutti: vedo una cosa interessante nella sidebar dei video correlati, la clicko. È così che mi sono imbattuto in questo video, perché mi ha solleticato il fatto che mentre di solito tutti parliamo di best practice quando è tutto a posto e in ordine, veramente in pochi parlano di quello che dovresti fare quando c'è un incidente veramente grosso in produzione. La maggior parte dei talk con **approccio SRE** ti dicono cose come "vedi salire la metrica rossa sul grafichetto, fai squillare il PagerDuty di tutti, leggi l'handbook che hai preparato col tuo team".

Questo è stato il primo e unico talk che io abbia mai visto che spiega cosa passa veramente per la testa di un software engineer durante un **incidente in produzione** nei primi due minuti: "Please don't be me".

### Principles of Technology Leadership
<iframe width="560" height="315" src="https://www.youtube.com/embed/9QMGAtxUlAc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Devo dire che questo talk mi ha incuriosito parecchio su quello che succede alla Monktoberfest, tanto che quando riprenderà in presenza vorrei andarci. Oltre l'apprezzamento per la conferenza dalle tematiche più umane che tecniche, comunque, questo talk mi ha fatto morire perché come dice uno dei commenti "voglio mettermi _Always be hustlin'_ pronunciato da Bryan Cantrill come suoneria del cellulare" ma soprattutto ho adorato, adorato, _adorato_ la **critica feroce agli Amazon's technology leadership principles** insieme a quelli di Uber.

### Bonus track: The summer of Rust
<iframe width="560" height="315" src="https://www.youtube.com/embed/LjFM8vw3pbU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Secondo voi è possibile che un coefficiente di stima già alto per una persona vada improvvisamente fuori scala con qualcosa che è una "bonus track" e non avevi nemmeno preventivato di metterlo in un post che ti eri appuntato da settimane? Con questo talk ho scoperto che almeno per me è possibile, non tanto per le affermazioni riguardo Rust, ma per quelle che precedono il racconto su Rust, che riguardano **JavaScript**, e con le quali da JavaScript software engineer ho empatizzato un sacco. Non avevo mai sentito qualcuno dire ad alta voce quello che già pensavo da me: "**JavaScript is Lisp in C's clothing**" - ed è veramente strano, _veramente_ strano che a dirlo sia una persona che si professa "not a programming language guy", perché persone che invece si ammantano di un'oscura aura di mistero adorando discutere tutto il giorno di language design alla fine della fiera non sono mai arrivate a comprendere questa verità profonda.

E questo è un grosso indice di quanto l'ecosistema IT mondiale sia rotto in gran parte, dato che da una parte ci sono persone che dicono cose del genere e dall'altra ci sono persone convinte che un full-stack developer possa fare from zero to hero in sei mesi con un bootcamp che a questo punto non saprei come definire se non "miracoloso" dati i risultati che promette.

Alla luce di un'affermazione del genere, mi sento di scrivere anch'io qualcosa in merito: se veramente volete scoprire da dove viene JavaScript e comprenderne alcuni meccanismi che possono sembrare oscuri, **studiate OCaml. Studiate il Lisp. Studiate il C.** Fatelo bene, poi tornate a dirmi che non capite le scelte di design che stanno dietro al lexing o ad altre meccaniche.

### Wrap-up
Di seguito una **lista di commenti** su YouTube a video di questo genere, che ho raccolto durante le mie visioni semplicemente scrollando un po' con la rotella del mouse, coi quali concordo in maniera smodata:

- "I feel like I am watching a stand up comedian, but with topics I like to listen too."
- "This guy has more stories to tell than all of my great grandfathers combined"
- "I am an hour in and this man has just now mentioned Rust for the first time... and can I just say, I completely forgot that this talk was about Rust and I do not care. I'm loving this"
- "when you let bryan cantrill have caffeine, a halo appears around his head"
- "This talk is more entertaining than a lot of Netflix comedy shows, thanks for it."
- "His energetic speech style is truly one of a kind. Loves it."

Devo dire che raramente mi è capitato di sentire talk che mi ispirassero così tanto in materia di system programming e in materia di software engineering più in generale. Che altro? Boh, vado a guardarmene un altro. Spero di essermi fatto capire. Sicuramenter Bryan Cantrill ci sarebbe riuscito meglio.
