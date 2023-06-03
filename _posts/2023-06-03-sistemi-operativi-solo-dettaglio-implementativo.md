---
layout: post
status: publish
published: true
title: I sistemi operativi stanno diventando solo un dettaglio implementativo
date: 2023-06-03 12:42:16 +0200
categories: 
- Linux
tags: 
- linux
- desktop
- opensuse
- microos
- packaging
- rpm
---

Ieri notte ho letto nel mio feed reader la notizia che **Red Hat** [non manterrà](https://www.omglinux.com/red-hat-stop-packaging-libreoffice/) più nessun pacchetto RPM relativo alla suite d'ufficio **LibreOffice**, per via di una riorganizzazione delle risorse e di una ottimizzazione che allocherà praticamente tutto lo staff disponibile a implementare un sacco di "goodies" dentro lo stack grafico del sistema operativo, tra cui il supporto all'HDR e ovviamente (ma non troppo) chiudere il gap tra Wayland e X.

Devo ammettere che sono stato parecchio stupito dal non aver letto troppi pareri negativi rispetto a questa decisione: di stracci ne sono volati pochi nelle scorse ore, e stamattina sono stato anche sorpreso da [un post di Jorge Castro](https://www.ypsidanger.com/the-distribution-model-is-changing/) che fa una riflessione piuttosto accurata su questa decisione in particolare e tutto l'ecosistema che ne è a supporto.

Coincidenza delle coincidenze, tutto questo sta accadendo nemmeno una settimana dopo che ho cominciato a sperimentare a casa con un laptop d'avanzo che avevo e [openSUSE MicroOS](https://microos.opensuse.org/). Ovviamente questa congiunzione astrale mi ha stimolato un paio di riflessioni.

### Flatpak, our lord and savior
La triade leggendaria delle soluzioni per installare applicazioni "grafiche" containerizzate (e impacchettate staticamente) su Linux è composta da **Flatpak, Snap e AppImage**. Onestamente **Flatpak** è l'unico che mi abbia dato una user experience decente, è supportato estremamente bene da SUSE[^1], e se uno non vuole esplorare quello che c'è sotto il cofano si integra con GNOME e KDE come un cittadino di prima classe.

Sul laptop aziendale ho praticamente qualsiasi applicazione grafica installata tramite Flatpak, e devo dire che anche come sviluppatore non mi ci sono trovato male: quando si è trattato di distribuire NewsFlash[^2] è stata una scelta che ha pagato tantissimo perché praticamente una volta fatto il bump della versione e costruito l'artefatto si ha un pacchetto che funziona su qualsiasi distribuzione. In caso di richieste di supporto, a meno di build da AUR per gli utenti Arch Linux, più o meno sai che cosa sta succedendo sotto al cofano. Sono sempre stato un grande fan del packaging per le distro, ma questo per gli sviluppatori è semplicemente... come dovrebbero funzionare le cose.

### MicroOS, immutabilità e tutto il resto
Flatpak è solo uno degli ingredienti del futuro(tm) dei sistemi operativi: il suo degno compare è un sistema di base come **MicroOS**, che ho provato questa settimana, cogliendo l'occasione per testare la nuovissima [openSUSE Aeon](https://aeondesktop.org/). Attraverso un layer immutabile che fa da base system e le applicazioni eseguite attraverso OStree (ossia Flatpak) si raggiunge un estremo grado di isolamento tra quello che c'è "sotto" e quello che c'è "sopra".

Se per le applicazioni grafiche abbiamo **Flatpak in user mode** che ci consente di installare questi "pacchettoni" con i programmi all'interno, esattamente come avviene ad esempio su MacOS (avete mai provato ad aprire un file .app?), per la nostra developer toolchain e qualsiasi tool da riga di comando di cui abbiamo bisogno possiamo utilizzare [distrobox](https://github.com/89luca89/distrobox), uno strumento che non mi ero mai filato fino all'altro ieri e del quale una volta presa un po' la mano non penso che riuscirò mai più a fare a meno. È facile da usare, e il livello di granularità che permette è infinito: possiamo avere un solo container con tutto quello di cui abbiamo bisogno, oppure separare il nostro tooling progetto per progetto e avere decine di container, ognuno ritagliato appositamente per quello che ci serve. Ogni ambiente, che monta trasparentemente la nostra home, è a un `distrobox enter` di distanza.

In questo modo **MicroOS diventa un affidabilissimo base system di quartiere**, che semplicemente a ogni aggiornamento si "spacchetta" dove gli compete, lavorando in completo isolamento rispetto ai workload che ci girano su.

Inutile dire che questa compartimentalizzazione estrema fa sì che i malfunzionamenti introdotti da package "meno supportati di altri" siano minimi. Sicuramente questo tipo di outage **non ha più effetto sul sistema operativo in sé**, ma solo, magari, nello specifico di un container di podman (di cui distrobox fa uso) o qualche Flatpak ballerino.

### Solo un dettaglio implementativo, ovvero il futuro dei sistemi operativi
Il 22 dicembre del 2011 è uscito su ZDNet ["Why the Operating System is becoming irrelevant"](https://www.zdnet.com/article/why-the-operating-system-is-becoming-irrelevant/), un articolo che metteva a nudo come l'open source permettesse un'omogeneizzazione della disponibilità di software tra sistema e sistema. Allo stesso modo sul [blog di Flameeyes](https://flameeyes.blog/2017/06/27/distributions-becoming-irrelevant/) nel 2017 è stato trattato come le differenze tra distro e distro si stessero assottigliando sempre di più.

Nel cloud è già così: ormai il base system di un container è niente più che un `FROM` dentro un Dockerfile o qualcosa di simile. **Niente più che un dettaglio implementativo** che assume importanza solo se lo si guarda da estremamente vicino, senza prendere in considerazione che un artefatto è la somma delle parti che lo compongono. Sul desktop stiamo arrivando allo stesso tipo di paradigma: un filesystem immutabile alla base di tutto è davvero così importante se poi le applicazioni che vengono eseguite sono tutte, nessuna esclusa, containerizzate e statiche?

Ha davvero così tanta importanza che io utilizzi una o l'altra distro se poi le "scatole" che ci stanno sopra non hanno nulla a che fare con il sistema di base?

A questo punto il sistema operativo perde la rilevanza che aveva e ne assume piuttosto una tutta nuova: le scelte tecnologiche vengono analizzate **sotto l'unica lente della stabilità**, in pratica. Il ruolo tutto nuovo del sistema operativo ad oggi e per il futuro è essere una roccia senza nessun tipo di crepa nei confronti dei **workload containerizzati**.

Vedremo nei prossimi anni come andrà a finire. Sono molto curioso.

Per ora ho solo l'enorme tarlo in testa di sostituire il sistema operativo che ho sulla mia workstation con MicroOS[^3].

[^1]: Leggasi: ho colleghi che non fanno altro che parlarne.

[^2]: Nota bene: il manifest non l'ho scritto io, sono solo un umile utente e contributor.

[^3]: Se pensate che sia troppo aziendalista, potete provare Fedora Silverblue. Dato che come abbiamo detto il sistema operativo è un dettaglio implementativo... è uguale :-)))
