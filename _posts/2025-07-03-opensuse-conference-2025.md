---
layout: post
status: publish
published: true
title: openSUSE Conference 2025
date: 2025-07-03 19:25:44 +0200
categories: 
- Linux
tags: 
- suse
- openSUSE
- openSUSE Conference
- linux
- ebpf
---

Esattamente come la scorsa edizione è stata la mia prima presenza a [openSUSE Asia Summit](https://dottorblaster.it/2024/11/opensuse-asia-2024/), quest'anno sono invece riuscito a incastrare, come avevo già scritto, l'avere un talk decente da portare con la mia prima **openSUSE Conference**. Di ritorno quindi, appunto, da openSUSE Conference '25 posso dire che queste conferenze quasi completamente verticali mi stanno piacendo sempre di più, e mi stanno facendo capire che se mi fosse reso conto prima del tipo di contenuto e del tipo di audience forse ci sarei venuto da molto molto tempo prima.

E la mia vita professionale forse avrebbe fatto giri diversi per giungere allo stesso punto.

### Il posto
Non essendo mai stato alla openSUSE Conference, non sapevo che tipo di posto fosse lo Z-Bau finché non ci ho messo piede per la prima volta: è veramente incredibile, devo dire, vedere una conferenza incentrata sul software avvenire in un locale palesemente fatto per fare da centro sociale (e fin qua anche ok) e da posto per ospitare concerti anche di una certa dimensione e potenza. Non mancano infatti andando in giro per lo Z-Bau i poster di una fracca di concerti che spaziano dal goth al death metal al depressive black spinto, per non parlare di tutta la wave elettronica.

Anche se ora ho i capelli corti, da metallaro non ho potuto che apprezzare, anche perché la prima sera della conferenza nel cortile esterno c'era appunto un **DJ set metal** niente male. Grazie a questo tipo di location, per la prima volta ho tenuto un talk tecnico su un palco che era fatto per ospitare il metallo. Purtroppo non c'è stato nessun tentativo di pogo durante il momento del Q&A, ma non si può avere tutto dalla vita.

### I talk
Togliamoci subito il dente: nella lineup degli speaker c'ero anche io con un talk su [SchedKit](https://github.com/schedkit), un progettino che ho iniziato a febbraio di quest'anno che si prepone di impacchettare in immagini OCI degli scheduler scritti per girare attraverso sched_ext, per poi avere del tooling che permette di prendere questi **bundle OCI** e far girare gli scheduler contenuti al loro interno. Il talk è andato bene, ci sono state anche un paio di domande interessanti; mi è dispiaciuto che alcune delle domande siano arrivate offline e non mentre c'era la registrazione che andava, perché sarebbe stato carino avere tutto il set di risposte da sbobinare.

A parte, appunto, il sottoscritto di cui ho parlato anche troppo, ho visto anche altri talk interessanti:

- Paolo Perego che ne ha portati addirittura due: uno sulla prototipazione di tool di security tramite gli LLM, e uno sull'importanza e sulle implicazioni dell'auditing del codice per gli sviluppatori di software open source. In particolare il secondo talk mi ha fatto riflettere sul fatto che _nessuno_ dei miei progetti possiede un file SECURITY.md;
- Richard Brown col suo consueto aggiornamento su Aeon, dove siamo, dove andiamo e perché lo facciamo;
- Filippo Bonazzi con il suo workshop su openSUSEway, il "nostro" tentativo di fornire una rice di Sway bella e pronta con il branding di openSUSE e un po' di cosette utili;
- Patrick Fitzgerald che ha cercato di fare un punto sull'adozione di Linux sul desktop attraverso progetti di migrazione strutturata (pubbliche amministrazioni and co.): l'aspetto interessante è che invece di fare un discorso filosofico Patrick ha anche portato dei numeri sui risparmi per i clienti e le opportunità di margine per i fornitori;
- Danilo Spinella che ha portato la sua ricerca sulle diverse strategie che adottano le distribuzioni Linux per quanto riguarda il packaging;
- Rick Spencer con la sua panoramica sullo stato della community di openSUSE: ho particolarmente apprezzato il fatto che in quanto General Manager della divisione Business Critical Linux di SUSE comunque non cerchi mai di forzare le cose all'interno del progetto open;
- Dan Čermák con un po' di tooling per aggiornamenti del sistema operativo a partire da immagini OCI;
- Ish Sookun con due talk interessantissimi, uno sul mirror di openSUSE che hanno avviato nelle Mauritius (con un sacco di bash e nastro adesivo: ho apprezzato) e uno sul processo di approvazione delle membership di openSUSE, che è sostanzialmente un fardello enorme sulle spalle di pochi;
- Nico Krapp che ha parlato di come openSUSE stia supportando i Framework laptop.

### La community
C'è poco da girarci intorno: tra talk filosofici e talk tecnici devo dire che ho sbadigliato molto raramente in questi giorni, nonostante la mancanza di riposo dovuta essenzialmente ai litri e litri di birra bevuti coi miei colleghi e coi miei amici. Ho seguito talk veramente su qualsiasi argomento, senza filtro, facendomi un bagno di una cosa che adoro (i ~bratwurst~ sistemi operativi) senza soluzione di continuità per tre giorni di fila. Ma più di questo, la cosa che mi dà sempre maggiore soddisfazione è vedere di essere circondato da persone che pur con qualche divergenza di opinioni sono affascinate dal tema quanto me.

Ne parlavo con degli amici tempo fa: gli appassionati di queste tematiche sono veramente pochi e avere l'occasione di ritrovarsi di persona davanti a una birra è secondo me un tesoro da custodire - specie quando i tuoi amici sono così carini da portarti nei loro posti speciali. Come sempre è stata l'occasione per approfondire qualche conoscenza, per stringere nuove mani, ma soprattutto per sfondarsi di cibo tutti insieme durante il fantastico barbecue che lo staff della conferenza organizza più o meno ogni anno.

Tra il livello tecnico abbastanza alto e la compagnia, devo dire che mi piacerebbe fare di questa conferenza un **appuntamento fisso**. L'anno prossimo potrebbe essere un po' più complicato, ma sicuramente quello dopo... :-)

Come nota di chiusura, verso la fine dell'evento ho avuto la mia grossa fettà di opportunità per parlare coi membri del **board di openSUSE** e fargli presente alcune cose che andrebbero riviste all'interno del progetto. In particolare:

- La creazione di **gruppi di lavoro** tematici intorno a specifiche aree, dato che spesso il lavoro è molto personalizzato e alla fine in mancanza di processi si tende ad avere delle "go-to people" che di fatto diventano silos
- Il fatto che il concetto stesso di membership e il processo di review debbano essere un pochino rivisti

Entrambe le proposte mi sono sembrate estremamente ben accolte. Per quanto riguarda i working group, ci si sta già lavorando. Per quanto riguarda la membership, Ish Sookun ha già detto che vuole metterci le mani e cercando lui volontari non mi sono certo tirato indietro.

Con queste premesse, sicuramente possiamo dire che fino a 2026 inoltrato sarò parecchio impegnato. See ya! Have a lot of fun!
