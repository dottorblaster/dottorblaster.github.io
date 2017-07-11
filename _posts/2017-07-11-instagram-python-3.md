---
layout: link
status: publish
published: true
title: Lo switch di Instagram a Python 3
origlink: https://thenewstack.io/instagram-makes-smooth-move-python-3/
date: 2017-07-11 11:20:05 +0200
categories:
- Development
tags:
- python
- python3
- instagram
---

La prima volta che mi sono trovato di fronte a uno switch massiccio a **Python 3**, è stato con **Arch Linux** dove mantenevo pacchetti per la community, e in quel momento scoprii di mantenere un sacco di roba in Python. Altrettanto velocemente, imparai a lanciare un mega-sed per cambiare lo shabang di un sacco di roba nei miei PKGBUILD in modo da garantire la retrocompatibilità.

In questi giorni invece mi è capitato sotto mano (smaltendo la roba che avevo in arretrato da leggere) questo interessantissimo articolo che racconta lo switch a Python 3, recente, di **Instagram**.

La cosa che mi ha colpito più di tutte è stata soprattutto lo stop sui pacchetti, che rappresenta una fetta rilevante del lavoro da fare, soprattutto in caso di un cambiamento di ecosistema così rilevante come **Python**.

> First, the team undertook massive code modification. This took two to three months, and included replacing incompatible third-party packages with ones supporting Python 3 — the working rule was, “No Python 3, no new package” — and also deleting unused packages.

Deliziosi casi di studio da portare al vostro capo che desidera ardentemente che voi sforniate feature a rotta di collo. O no?
