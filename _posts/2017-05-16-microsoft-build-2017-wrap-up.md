---
layout: post
status: publish
published: true
title: "Microsoft Build 2017: riflessioni sulla strada del ritorno 👍"
date: 2017-05-16 16:26:23 +0200
categories: 
- Linux
tags: 
- linux
- windows
- windows 10
- windows subsystem for linux
- microsoft
- microsoft build
---

Nello [scorso post](http://dottorblaster.it/2017/05/microsoft-build-arrivo/), prima di sparire nell'ombra, ho dato notizia che sarei stato a [Build](https://build.microsoft.com/), la conferenza annuale di Microsoft in cui si fa una review più o meno di tutte le novità presenti nelle piattaforme del colosso di Redmond. Ci sono andato invitato da loro, e nonostante la cosa mi abbia fatto molto piacere, ho pur sempre mantenuto l'atteggiamento che mi contraddistingue quando si parla dell'interazione tra me e **Microsoft**, ovvero un approccio onestamente critico e genuinamente (poco, ormai) sospettoso di cui potete osservare una diapositiva qui sotto.

![Microsoft perplexed face](https://gitlab.com/dottorblaster/blog-images/raw/master/images/seattle_build_2017/IMG_20170512_132916.jpg)

Scherzi a parte, la prima volta che sono stato contattato da Microsoft ero veramente sospettoso, mentre adesso questo sentimento è quasi svanito. Perché? Perché a partire dalla mia visita alla loro sede di **Milano nel 2015**, dalla quale era uscita una [valutazione più che positiva](http://dottorblaster.it/2015/09/microsoft-open-source/), Microsoft ha mostrato un sincero commitment sull'ecosistema Linux, portando addirittura **la Bash e Linux dentro Windows** (e anche ZSH, dato come l'hanno fatto), muovendosi con ancora più coraggio incontro a questa nuova strategia che la vede, in prospettiva, quasi la più grande Linux company del mondo.

Una delle cose che ho letto durante la mia permanenza negli States è stata una frase [su Twitter](https://twitter.com/CarmenCrincoli/status/862714516257226752):

> So uh, I'll say it: 
>
> 2017 is finally the year of Linux on the Desktop. 
>
> It's just that the Desktop is Windows.

E questo è vero, indubbiamente. Una delle cose che sono state presentate riguarda proprio questo aspetto, e sinceramente mi ha deluso che il giorno della keynote tutto questo sia stato affrontato solo con qualche frase di circostanza, anche se posso capirlo.

Ma cominciamo un ricapitolo disordinato per vedere **cosa ho portato a casa** da questo fantastico Build passato insieme ai miei "colleghi" del Technical Advisory Group.

### Redmond, glad to see you
La nostra prima giornata ha visto al suo centro una visita abbastanza approfondita al **campus di Redmond**, dove a parte le meraviglie da parco divertimenti abbiamo dato un'occhiata al processo attraverso il quale Microsoft lavora sui suoi prossimi prodotti, attraverso delle demo e un giro nel cosiddetto Envisioning Center. Prima di ciò abbiamo avuto anche una panoramica dell'operatività del **Cyber Defense Operations Center**, dove vengono continuamente individuate nuove minacce e dove presumo che venga fatto anche parecchio del lavoro su Windows Defender.

![Cybersecurity Ops Center](https://gitlab.com/dottorblaster/blog-images/raw/master/images/seattle_build_2017/IMG_20170509_102006.jpg)

Il fatto che il giorno dopo per via di macchine non aggiornate il **ransomware** WannaCry si sia diffuso per mezza Europa diciamo che ha completato la panoramica. In ogni caso, un dettaglio importante che abbiamo avuto è che adesso i ransomware sono la categoria di malware su cui Microsoft punta la sua lente d'ingrandimento più spesso.

La "spicy sauce" di questa giornata, per gradire, è stata il finale a base di demo su **Hololens**: avevo già usato Hololens in passato, ma ho avuto la possibilità di afferrarne di più le potenzialità.

![Microsoft Campus Halo](https://gitlab.com/dottorblaster/blog-images/raw/master/images/seattle_build_2017/IMG_20170509_113947.jpg)

### Keynote, day one
Il giorno successivo abbiamo avuto la keynote della conferenza, dove **Satya Nadella** ha tenuto il suo speech ispirazionale, illustrando ovviamente la compagnia ad oggi e soprattutto dando alcuni scorci sul domani:

> We need to build trust in computing of the future, making sure we don't fall in dystopian scenarios like Orwell's 1984

Sottolineando **l'importanza e la responsabilità degli sviluppatori** riguardo questo punto, Satya ha stressato molto il fatto che Microsoft è una compagnia nata dopo tutto come una developer tools company, ed è suo dovere quasi morale muoversi in tale senso. A questo proposito, il resto della keynote ha avuto i suoi punti focali principali su Azure, sulla nuova CLI integrata direttamente nel portale web (che **è una Bash**, e non una CMD, e nemmeno una Powershell! Kudos Microsoft), e su **IoT Edge**, ovvero la nuova possibilità svelata dai ragazzi per portare sul proprio datacenter locale le potenzialità dello stack Azure, senza dover effettuare trasferimenti di dati inutili tra la cloud e il cosiddetto edge.

![Me at Microsoft](https://gitlab.com/dottorblaster/blog-images/raw/master/images/seattle_build_2017/IMG_20170509_123901.jpg)

In questo senso, Microsoft ha dimostrato di avere le potenzialità per stare sulla cresta dell'onda riguardo il cloud computing, dato che per ora sembra l'unica ad aver messo l'accento in maniera così marcata sulle potenzialità dell'edge e sulla sua interoperabilità con l'ecosistema cloud.

Insieme a questo, mentre la parte Azure è stata curata da Scott Guthrie (naturalmente), Harry Shum ha presentato una serie di novità su Cortana, sul Bot Framework di Azure, e sui Cognitive Services.

### CosmosDB
Un capitolo a parte lo merita **CosmosDB**, annunciato sempre nella keynote del primo giorno, ossia un database in cloud multi-model (relazionale, documentale, graph) con possibilità di replicazione multiregione in un click o due. Devo ammettere che da questo sono rimasto positivamente colpito, e vorrei anche realizzare qualche piccola PoC con questo affarino, sempre che le finanze del mio account Azure me lo permettano.

Insieme a CosmosDB, un altro annuncio particolarmente godereccio è stato quello di PostgreSQL e MySQL come DBaaS (DataBase as a Service) su Azure. Sbav.

![Azuze Clinic](https://gitlab.com/dottorblaster/blog-images/raw/master/images/seattle_build_2017/IMG_20170510_163518.jpg)

### Keynote, day two
Mentre il primo giorno abbiamo assisitito a una carrellata di cose su Azure, il secondo giorno è stato all'insegna del futuro, e di quello che Microsoft farà (e cosa permetterà di fare agli sviluppatori) con i suoi prodotti di punta lato consumer: è stato annunciato il nuovo **Fall Creators Update per Windows 10**, che oltre ad introdurre una nuova interfaccia per molte app che fa uso di un nuovo paradigma chiamato Fluent Design, ovviamente apporterà altri miglioramenti a una parte che a me interessa tantissimo, ovvero il Windows Subsystem for Linux.

E proprio parlando di **Windows Subsystem for Linux** arriviamo a quello che per me è stato un punto molto importante, ovvero la disponibilità di Bash direttamente dal Windows Store, pacchettizzata insieme alle immagini delle distribuzioni Linux più blasonate: **Ubuntu, Fedora, e Suse**. Questo significa che WSL esce dalla beta, e diventa utilizzabile a tutti gli effetti, e devo dire che in questi giorni ho avuto occasione di farci più di qualcosa e ormai come esperienza utente non mi ha lasciato davvero nulla da ridire. Sono orgoglioso del lavoro che Microsoft sta facendo per portare la Bash (con tutto l'ecosistema connesso) su Windows, e come utente sono anche soddisfatto.

Insieme a questi, che per me sono punti focali, sono state annunciate un sacco di novità per quanto riguarda Xamarin e lo sviluppo su iOS/Android, insieme a molte cose in arrivo su Hololens (insieme ai Mixed Reality Kit di Acer ed HP).

![Me and my Hololens kit](https://gitlab.com/dottorblaster/blog-images/raw/master/images/seattle_build_2017/IMG_20170509_160036.jpg)

### Networking, hacking e così via
Lasciando stare la keynote, in realtà una parte succosa è stata quella delle sessioni (tra cui una molto molto carina sullo sviluppo React con Office UI Fabric), e ovviamente la possibilità di incontrare dal vivo un sacco di personaggi, tra cui **Ross Gardler** di Azure Compute Service e Exec VP di Apache Foundation, nonché mio "capo" per quanto riguarda il Technical Advisory Group.

Ross è veramente un figo! 😁 Abbiamo avuto occasione di parlare a lungo durante i meetup del TAG, e durante l'hackathon che si è tenuto l'ultimo giorno per tirare fuori feedback a cannone sulla piattaforma Azure da dare in pasto ai ragazzi di Microsoft. Ho persino contribuito con un bug report e svariati chilometri di documentazione 👌

Viceversa, parlando di "cool people", ho avuto il grandissimo piacere e onore di conoscere Chris Heilmann (!) e ho avuto un'oretta di chiacchierata molto interessante allo stand del **Bash for Windows development team** con Paul Campbell, che mi ha fatto vedere un sacco di trucchetti interessanti.

![With Paul Campbell at the Bash stand](https://gitlab.com/dottorblaster/blog-images/raw/master/images/seattle_build_2017/IMG_20170511_110641.jpg)

Una cosa che mi ha colpito molto è che nel **subsystem Linux** sia stato inserito un eseguibile cmd.exe, che ci permette di eseguire dei trick clamorosi, tipo eseguire un comando di cmd direttamente da dentro la Bash, senza dover cambiare shell. Usando **ZSH**, quello che proverò a fare tra poco sarà wrappare tutto questo in un plugin.

Per il resto, ci siamo divertiti veramente tanto. È stata una bella occassione sia di parlare con tante persone (tra cui gente del team di Edge, veramente preparata, che mi ha confermato che non ci sarà mai una release per Mac o Linux) che di stringere amicizia con i vari membri del **Technical Advisory Group**, con alcuni dei quali ho avuto il piacere di rimanere invischiato in piacevoli dibattiti tecnici, e anche culturali. 🤘

Che altro dire: è stata una **settimana meravigliosa**, e così intensa che riesco a riprendermi solo oggi per poterne scrivere qualcosa. Probabilmente ho tralasciato tante cose, ma il fine di questo wrap up è quello di mettere insieme il vero valore che ha avuto per me la conferenza, ovvero quello di poter venire a contatto con una Microsoft che raramente viene esposta agli occhi degli outsider, ovvero quella che ha come focus principale il portare valore all'ecosistema **open source**, di cui Microsoft giorno dopo giorno diventa un player sempre più visibile e importante.

Cose da chiedere a Microsoft? Beh, lo rifacciamo l'anno prossimo? 😎
