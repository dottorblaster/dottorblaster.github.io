---
layout: post
status: publish
published: true
title: GNOME Shell con GPU Intel, configurazione (circa) finale
date: 2017-05-01 20:29:07 +0200
categories: 
- Linux
tags: 
- gnome shell
- gnome
- intel
- clutter
- xorg
- wayland
- tearfree
---

![GNOME Shell Tearing-free](https://gitlab.com/dottorblaster/blog-images/raw/master/images/gnome-shell-terminal-details.png)

E insomma, dopo tanto smanettare forse credo di aver trovato una quadra su quella che dovrebbe essere la mia **configurazione ottimale** per quanto concerne **GNOME Shell e la poverissima GPU Intel** a cui mi diverto a dare il tormento tenendo spenta la scheda grafica discreta (che non mi serve praticamente a niente su Linux, se non a trasformare questa macchina in una fornace da calcolo).

In poche parole, modificando `/etc/environment` lo facciamo diventare come segue:

```sh
#
# This file is parsed by pam_env module
#
# Syntax: simple "KEY=VAL" pairs on separate lines
#

CLUTTER_VBLANK=True
```

Dopodiché configuriamo il driver video in questo modo, modificando il file `/etc/X11/xorg.conf.d/20-intel.conf`:

```sh
Section "Device"
	Identifier  "Intel Graphics"
	Driver      "intel"
	Option      "TearFree"    "true"
	Option      "SwapbuffersWait" "true"
	Option      "AccelMethod" "sna"
EndSection
```

In parte questo mistero l'avevamo già eviscerato [in passato](http://dottorblaster.it/2016/08/intel-linux-tearing/), riuscendo a migliorare la situazione ma non a debellare la problematica. Quello che questa configurazione fa è forzare uno specifico metodo di accelerazione grafica (che è quello di default, e dovrebbe essere quello di ultima generazione - sia mai che non andasse da solo), impostando poi sia **TearFree** che **SwapbuffersWait**.

Insieme a questo anche uno specifico **tweak di Clutter** fa sì che le performance siano migliori nel complesso, a costo di usare qualche ciclo di calcolo in più. Mi pare che questa configurazione performi molto meglio sulla mia macchina, ne sono veramente soddisfatto.

Questa configurazione va molto, molto bene anche con **Wayland**.

Forse c'è ancora qualcosa che si può fare. I'll keep you posted.

