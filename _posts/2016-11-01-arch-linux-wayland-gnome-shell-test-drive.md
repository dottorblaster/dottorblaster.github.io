---
layout: post
status: publish
published: true
title: Arch Linux, Wayland e GNOME Shell - un giro di pista
date: 2016-11-01 08:26:31 +0100
categories:
- Linux
tags:
- gnome
- wayland
- arch linux
---

Durante queste settimane, **GNOME 3.22** è arrivato nei **repository Extra di Arch Linux**, e io non ho minimamente perso l'occasione di scaricare i pacchetti aggiornati e installarli immediatamente - a parte un paio di giorni di routine per lasciare agli sviluppatori il tempo di aggiustare eventuali bug sulle estensioni della community più blasonate. Durante l'uso non andava nemmeno poi male, se non che ad un certo punto mi sono trovato a voler **riavviare GNOME Shell**, e l'ambiente desktop mi ha recitato uno strano messaggio:

![GNOME Shell: restart is not available on Wayland](https://gitlab.com/dottorblaster/blog-images/raw/master/images/gnome_wayland_restart.png)

Ho fatto due cose quindi: la prima è stata controllare che effettivamente stessi usando **Wayland**, il che mi è stato confermato dalle informazioni su GNOME, e da qualche giro di `ps` in cui compariva chiaramente Chrome sotto XWayland e GDM sotto Wayland.

![GNOME e Wayland](https://gitlab.com/dottorblaster/blog-images/raw/master/images/screen_gnome_wayland.png)

La seconda è stata naturalmente dare una possibilità a [Wayland](https://en.wikipedia.org/wiki/Wayland_(display_server_protocol)) come **display server principale**, e devo dire che sono piuttosto soddisfatto.

Il supporto di GNOME a Wayland è ottimo infatti, e non ho sofferto di alcuna regressione grafica se non di **qualche lag** per quanto riguarda (stranamente) il cursore del mouse. Ogni tanto infatti, senza apparente motivo, rallenta per qualche secondo fino a bloccarsi un po', poi riprende la sua corsa senza problemi. Il resto, beh, tutto ottimo: specialmente l'uso di XWayland da parte delle applicazioni che hanno tardato un po' la corsa al nuovo server grafico, totalmente trasparente, senza artefatti e senza nessun fattore che metta a disagio l'utente.

Queste prove le ho effettuate con una **scheda video Intel**; ovviamente mi dicono dalla regia che con un equipaggiamento Nvidia la situazione non è esattamente rose e fiori come la descrivo io. Nel frattempo però chi ha come me una situazione di doppia scheda video può tranquillamente lasciare la Nvidia spenta ed affidarsi alla Intel - a me non dà fastidio dato che la scheda "potente" la uso solo per giocare, e in questo periodo mi sono attaccato come una vongola alla mia PS4 e ad Overwatch. :-D

Adesso, beh, c'è solo da sperare che Wayland migliori sempre di più, che i desktop environment lo sfruttino al meglio (dato che a livello di [compositing](https://it.wikipedia.org/wiki/Compositing_window_manager) ognuno può scriversi la sua implementazione), e che per noi utenti tutto questo si traduca in un **beneficio tangibile**.
