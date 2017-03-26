---
layout: post
status: publish
published: true
title: ChatOps, Botstation, e un momento di relax con RomaJS
date: 2017-03-26 13:22:30 +0200
categories:
- Development
tags:
- javascript
- nodejs
- chatops
- chatbots
- sysop
- sysadmin
- teambuilding
- romajs
---

Nell'ultimo mese ho avuto a che fare con un po' di **grattacapi interessanti**; in particolare, con il mio nuovo team ci siamo trovati nella condizione antipatica di dover svolgere alcuni task ripetitivi senza che tutti conoscessero esattamente le operazioni da svolgere e i comandi da dare in pasto alle macchine.

Per questo motivo ho deciso di introdurre un po' di pratiche **ChatOps** ([qui](https://www.pagerduty.com/blog/what-is-chatops/) qualche informazione in più), in modo da avere un bot a disposizione che mi consentisse di dedicarmi alle cose importanti, senza essere infastidito dal "come si fa", da una miriade di cose ripetitive, e così via. Il primo passo è stato studiare un po' la piattaforma di Slack (che usiamo in [UniquID](http://uniquid.com/)) e capire cosa potevo fare grazie alla libreria `slackbots` per NodeJS; il passo induttivo, invece, è stato dare forma a un **piccolo minion** che prendesse i comandi dal team e li trasformasse in azioni reali.

![Alessio Biancalana at RomaJS, ChatOps](https://scontent-mxp1-1.xx.fbcdn.net/v/t31.0-8/17311204_1420403281365731_2398660245613338328_o.jpg?oh=82349afff59b02bebb132dfd63b819e4&oe=59665D75)

### ChatOps è divertimento
Immediatamente mi sono accorto che a meno di qualche ritocco era tutto pronto: una forma simpatica del bot ne ha facilitato l'adozione da parte del team, che in meno di poche ore aveva già accolto il nuovo arrivato e il suo cervello artificiale con tanti sorrisi. Lui è ancora lì che fa cose per noi, quando gliele chiediamo, e ogni tanto aggiungiamo **qualche funzione che potrebbe essere utile** – insieme ad altre sicuramente più facete.

Una cosa che ho notato è che adesso pur mantenendo un **debito tecnico** abbastanza elevato sulle attività sistemistiche, comunque il team è in grado di gestirle senza degli specialisti, senza frustrarsi, e avendo comunque nei casi peggiori una linea guida su come diavolo fare una determinata cosa, data proprio dal sorgente del bot.

Codice sorgente che allo stato attuale, dopo un po' di macchinazioni, è diventato all'incirca quello che segue:

```js
var Botstation = require('botstation');
var bot = new Botstation.Bot();
 
bot.config({
    key: 'xoxb-157105193143-eJdSjJRttSCU2DAd3IdAtBoi',
    name: 'Dat Bot'
});
 
bot.task({
    name: "Help",
    matcher: "isMessage",
    content: "!help",
    exec: (bot, data, params) => {
        bot.postMessage(data.channel, 'Do you need help?', params);
    }
});
 
bot.start(() => {
    console.log('Bot started!');
});
```

### Botstation
Il codice qui sopra non è campato in aria, bensì deriva da un lavoro di semplificazione che ho fatto su ciò che avevo in un momento precedente; ho realizzato infatti che non ci sono moltissimi framework per scrivere bot, così ho provato a buttarne giù uno mio, con una API architettata in modo da poter aggiungere quanti task mi servivano nascondendo tutta la (poca per il momento, a dir la verità) complessità di gestione del websocket, degli eventi del bot, e così via. Ho chiamato questa nuova creatura **Botstation**.

Il prossimo passo che vorrei intraprendere è quello di rendere [Botstation](https://github.com/uniquid/botstation) multipiattaforma, scrivendo un meccanismo per cui **avendo a disposizione vari adapter** (Slack, Telegram, Facebook) si riesca a mettere in piedi un chatbot senza sforzo nascondendo la complessità della diversità dei servizi e delle loro API. Solo che non ho tempo di farlo adesso 😁

Fortunatamente, però, ho visto che i vari wrapper per le API di Telegram e compari sono orientati agli eventi nella stessa maniera.

### RomaJS: ChatOps in compagnia con birra e taralli
Ho presentato questo piccolo lavoretto allo scorso **RomaJS** ([veniteci a trovare](http://romajs.org/)!), credendo di fare solo da riempitivo perché non c'era nessun altro che portasse uno speech di livello. A sorpresa, invece, le persone sono rimaste abbastanza colpite sia dall'approccio ChatOps, fortemente orientato al cazzeggio inter-team, sia dalla facilità con cui è possibile scrivere un chatbot – con o senza Botstation, che ora come ora funge solo da wrapper di Slackbots.

![RomaJS: ChatOps in compagnia con birra e taralli](https://scontent-mxp1-1.xx.fbcdn.net/v/t31.0-8/17218644_1420408228031903_7820429815842101660_o.jpg?oh=d132ea1d3b01399acce68d17b27e8e13&oe=59571A3D)

Avrei dovuto scrivere questo post parecchi giorni fa, ma purtroppo sono state settimane complicate ed è stato veramente difficile mettere insieme i pezzi per via degli impegni di questi giorni. Un aspetto veramente stimolante è stato incontrare anche a **Codemotion**, in questi giorni appena passati, svariate persone che mi hanno chiesto come stesse andando lo sviluppo di Botstation e mi hanno esposto alcune domande e alcuni dubbi.

Io ovviamente sono stato felicissimo dell'**impatto** (seppur piccolo) che sta avendo un framework del genere, che onestamente avevo iniziato a scrivere solamente come esercizio personale. 😎

### Quindi?

Riassumendo:

- **ChatOps** vi aiuta a liberarvi del peso di task orientati alla sistemistica, ripetitivi, noiosi;
- Un **bot** utile è sempre ben accolto; un bot con funzioni aggiuntive stupide, insensate e ironiche ancora di più perché migliora il morale
- **Botstation** vi può aiutare, se usate Slack. Presto vi potrà aiutare anche se usate altre piattaforme di messaggistica 👌 
