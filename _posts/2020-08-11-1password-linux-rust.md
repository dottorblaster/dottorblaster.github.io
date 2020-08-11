---
layout: post
status: publish
published: true
title: 1Password per Linux è un'applicazione che avrei voluto scrivere io
date: 2020-08-11 19:48:25 +0200
categories:
- Linux
tags:
- 1password
- rust
- react
- javascript
- password management
- password
- security
---

![1Password per Linux](https://com-agilebits-users.s3.amazonaws.com/dave/1password-linux-hero-nonscaled-web-iNFpMV172f7S.png)

Tempo fa ho fatto una revisione dei software per il management delle credenziali e ho deciso di passare da Enpass a Bitwarden. Uno dei motivi per cui non ho valutato **1Password** come un sostituto potenziale è stata soprattutto la mancanza di una vera applicazione per Linux, oltre il fatto che avevo la possibilità di adottare un software il cui stack fosse completamente open source.

Open source a parte però ho visto in questi giorni che è disponibile una prima versione, limitata nelle feature ma non nell'animo, di 1Password per Linux, scritta "from scratch" e che ha una caratteristica importante: il frontend è fatto completamente con componenti **React** (quindi JavaScript), mentre il backend dell'applicazione è scritto per intero in **Rust**, uno dei linguaggi che sono più contento di aver approfondito negli anni, anche se per la maggior parte ho scritto di **Elixir** 😅

Una lista di feature direttamente dall'[annuncio originale](https://discussions.agilebits.com/discussion/114964/1password-for-linux-development-preview):

> - Simple and secure installs using apt and dnf packager managers 📦
> - Automatic Dark Mode selection based on your GTK theme 🌓
> - Open network locations (FTP, SSH, SMB) 🌍
> - Tiling window manager support and descriptive window titles 🏠
> - Unlock with your Linux user account, including biometrics ☝️
> - System tray icon for staying unlocked while closed 📌
> - X11 clipboard integration and clearing ✂️
> - Keyboard shortcuts ⌨️
> - Data export ✈️
> - Unlock multiple accounts with different passwords 🔐
> - Create collections to organize data across accounts and vaults 🎯

Insomma, mi dispiace che tutto questo non sia open source perché vorrei veramente tanto sapere come hanno fatto gli sviluppatori a infilare una UI JavaScript dentro un'applicazione desktop Rust, che tipo di **runtime** hanno usato e che tipo di problemi hanno incontrato. Però tanti complimenti per le tecnologie scelte :-)

