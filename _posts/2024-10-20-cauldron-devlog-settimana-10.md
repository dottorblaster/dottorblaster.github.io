---
layout: post
status: publish
published: true
title: "Cauldron devlog, settimana #10"
date: 2024-10-20 22:33:02 +0200
categories: 
- Linux
tags: 
- linux
- gnome
- pocket
- cauldron
- gtk
---

La settimana scorsa ho saltato il devlog di Cauldron perché ho fatto un casino con l'organizzazione dei tempi anche dato il fermento per un po' di bisboccia imminente coi colleghi.

![Cauldron alla sua undicesima settimana](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/cauldron/photo_2024-10-20_19-47-25.jpg)

Innanzi tutto c'è da dire che cogliendo l'occasione di un paio di viaggi in treno belli pesanti mi sono deciso a iniziare il processo per far avere a Cauldron un'icona, [richiedendola al design team di GNOME](https://gitlab.gnome.org/Teams/Design/app-icon-requests/-/issues/71), i quali ragazzi sono stati gentilissimi: Jakub Steiner ha persino condiviso dei primi bozzetti che sono assolutamente adorabili. Oltre questo mi sono concentrato nel mettere a punto un README che non facesse schifo e che linkasse al contempo al resto dell'ecosistema di GNOME.

Questa settimana invece mi sono dedicato a cose più fattuali e "code-wise" visto che avevo a disposizione un paio di macchine serie (purtroppo il mio amatissimo laptop ha i suoi limiti quando si tratta di questo genere di cose). Innanzi tutto ho finalmente implementato una **logica di download** più robusta per cui vengono scaricati tutti gli articoli salvati dall'utente, mentre prima me ne perdevo parecchi per strada semplicemente perché non mi andava di stare a litigare con la paginazione.

Mi ci è voluto un po' ma l'adorabilissimo `serde` ha fatto il suo.

Su un versante più relativo all'eye-candy, invece, ho fatto in modo che quando vengono caricati gli articoli venga visualizzato un bellissimo spinner al posto del bottone di refresh. All'inizio avevo usato un normalissimo **spinner GTK**, dopodiché il tutto è diventato un po' la tana del bianconiglio.

Mi sono accorto infatti che `libadwaita` espone un _suo_ `Spinner`, che ovviamente è costruito sullo spinner di GTK ma è molto più facile da impostare (leggasi: ha una API umana). Ha anche un look un po' più moderno. Purtroppo però è disponibile solo in libadwaita 1.6, che a sua volta è scritta per **GNOME 47**. Ho quindi colto l'occasione per portare l'applicazione a GNOME 47, principalmente aggiornanto le feature del crate di Relm4 e finalizzando gli smanettamenti che avevo già iniziato sul manifest Flatpak di sviluppo.

Insieme allo spinner ho anche portato la mia prima icona custom, per l'azione di archiving, all'interno dell'app: ho avuto qualche problema a farla andare correttamente con la **dark mode**, ma una volta data [una letta al manuale](https://developer.gnome.org/documentation/tutorials/themed-icons.html#symbolic-icons) ho capito il sistema di specchi e leve che usa GNOME per fare il fill in automatico delle icone a seconda che si usi la dark mode o no, e ho risolto.

L'aspetto che ancora non riesco a inquadrare e sul quale ho persino da ridire è il **testing**. Non sono ancora riuscito a scrivere dei test decenti, e penso che dopo qualche refactor mi sarà più facile. Vorrei testare anche la UI oltre che la logica di business, ma ho capito che con GTK è un bagno di sangue.
