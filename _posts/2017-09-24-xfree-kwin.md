---
layout: link
status: publish
published: true
title: XFree KWin, aka KWin senza XWayland
origlink: https://blog.martin-graesslin.com/blog/2017/09/announcing-the-xfree-kwin-project/
date: 2017-09-24 22:40:57 +0200
categories:
- Open Source
tags:
- kde
- kwin
- xorg
- wayland
---

Il buon **Martin Graesslin** ci aggiorna sullo stato dell'arte di Wayland e KDE. In particolare, adesso si sta concentrando sul far partire KWin senza XWayland, ovvero il layer di compatibilità tra X.org e Wayland.

Gran parte del lavoro è fatta, ma c'è ancora parecchio da sistemare:

> [...] my personal main goal is to be able to handle a crashing XWayland. This will also be an interesting task as the X11 code in KWin also depends on other libraries (e.g. KWindowSystem) which do not expect to outlive the X server [...]

E da parte mia non posso che augurargli buona fortuna.
