---
layout: post
status: publish
published: true
title: Kernel Linux - kdbus sta per entrare a gamba tesa nella mainline
categories:
- Linux
tags:
- open source
- systemd
- linux
---

![Atomic Explosion](https://farm3.staticflickr.com/2499/4179024102_40c1e48234_b.jpg)

> This is the first submission of kdbus by the kernel community.  It was developed in its own repository for well more than a year, and has been tested on x64-64, i686 and ARM architectures in various use cases. The driver is totally non-intrusive and doesn't touch a single line of existing kernel code.

Forse il **kernel Linux** è arrivato ad una delle sue più grandi svolte (almeno secondo me): un primo abbozzo di kdbus è stato [sottomesso alla Linux Kernel Mailing List](https://lkml.org/lkml/2014/10/29/854) (_si, sottomesso come nel sadomaso, grazie a [Giorgio](http://www.zarrelli.org/blog/) per la segnalazione_) per l'approvazione. Per chi non sapesse che cos'è **kdbus**, cito sempre dalla stessa mail:

> kdbus is a kernel-level IPC implementation that aims for resemblance to the the protocol layer with the existing userspace D-Bus daemon while enabling some features that couldn't be implemented before in userspace.

Per avere la capacità di afferrare il **cambiamento** che sta per avvenire quindi dovete avere una nozione in testa più o meno consistente di:

- Cosa sia un [meccanismo di IPC](http://it.wikipedia.org/wiki/Comunicazione_tra_processi);
- Che lavoro fa [D-Bus](http://www.freedesktop.org/wiki/Software/dbus/#index1h1);
- [Varie ed eventuali](https://www.youtube.com/watch?v=sJyVaKZ8tbc) sul perché avere un IPC (si: lo so che è grammaticalmente sbagliato) lato kernel è fico.

In poche parole, se veramente la community riuscirà ad ottenere un'infrastruttura di **IPC** nel kernel, vari software potranno trarne vantaggio per un funzionamento migliore ed essenzialmente anche più veloce e snello (chi ha detto **Systemd**? O init, perché no?). Probabilmente, ora come ora, stiamo vivendo un momento storico per lo sviluppo del kernel **Linux** come lo conosciamo. Fate molta attenzione se vi interessa.

_Photo courtesy of [James Vaughan](https://www.flickr.com/photos/x-ray_delta_one/4179024102/)_