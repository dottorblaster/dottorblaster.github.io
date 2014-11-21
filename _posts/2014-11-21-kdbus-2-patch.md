---
layout: link
status: publish
published: true
title: kdbus - arriva la seconda versione della patch
origlink: http://article.gmane.org/gmane.linux.kernel.api/6266
categories:
- Linux
tags:
- kdbus
- kernel
---

**Jake**, su [LWN](http://lwn.net/Articles/622644/rss):

> The second version of the kdbus patches have been posted to the Linux kernel mailing list by Greg Kroah-Hartman. The biggest change since the original patch set (which we looked at in early November) is that kdbus now provides a filesystem-based interface (kdbusfs) rather than the /dev/kdbus device-based interface.

Rispetto a [quello che ho già scritto](http://dottorblaster.it/2014/10/kernel-linux-kdbus-mainline/) non cambia molto - ovviamente invece le meccaniche di funzionamento cambiano parecchio per quanto riguarda tutto il patchset: passare da un'interfaccia basata su un dispositivo virtuale ad una basata su **filesystem** significa tanto. Speriamo che tutto questo venga approvato al più presto ;-)