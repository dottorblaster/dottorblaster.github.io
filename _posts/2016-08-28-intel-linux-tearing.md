---
layout: post
status: publish
published: true
title: Intel, Linux e il mistero del tearing
date: 2016-08-28 23:22:54 +0200
categories:
- Linux
tags:
- linux
- tech
- intel
- xorg
---
_(Ovvero, nel caso specifico, come velocizzare le animazioni di GNOME Shell)_

Per la serie "non si finisce mai di imparare", torniamo a parlare di Linux; al rientro dalla vacanze, nonostante l'esperienza più che discreta con [Windows 10](http://dottorblaster.it/2016/08/macos-resta-al-palo-windows-10-mi-stupisce/), ho deciso di dare una piallata a KDE sulla mia Arch Linux per dare una possibilità a GNOME Shell, dato che in molti nonostante io non fossi particolarmente convinto me ne hanno parlato più che bene.

A questo credo che dedicherò un post a parte; quello che invece voglio trattare in questo momento è una "feature" di cui sono venuto a conoscenza solo oggi riguardante i driver grafici Intel su Linux, che hanno cominciato a darmi qualche noia con GNOME; nello specifico con la Shell ho sempre notato che le animazioni erano veramente poco fluide, con cali di FPS a manetta durante qualsiasi effetto grafico.

Avevo deciso di classificare la cosa come un "non sei tu, sono io", ma oggi girovagando per l'internet mi sono imbattuto in un tizio sul forum di Arch che aveva lo stesso problema, al quale hanno consigliato di puntare il dito verso l'opzione TearFree dei driver, misteriosamente disabilitata out of the box nel mio e nel suo caso.

Dopo un giretto su [Arch Wiki](https://wiki.archlinux.org/index.php/Intel_graphics#Tear-free_video) ho trovato quello che mi serviva; ho aperto il file di configurazione dei miei driver (vuoto):

```shell
$ sudo vim /etc/X11/xorg.conf.d/20-intel.conf
```

E ho riempito il file con questa roba:

```shell
Section "Device"
	Identifier  "Intel Graphics"
	Driver      "intel"
	Option      "TearFree"    "true"
EndSection
```

E al riavvio, magicamente, GNOME è diventato performante come un ghepardo.

Quello che non capisco, è come questa roba sia disabilitata out of the box, visto l'incremento di FPS pauroso che mi ha offerto praticamente dal nulla. Su Arch Wiki c'è scritto che con il DRI abilitato anche TearFree dovrebbe essere abilitato di default. Ovviamente sulla mia macchina manco l'ombra.

Tutto è bene, quel che finisce bene.
