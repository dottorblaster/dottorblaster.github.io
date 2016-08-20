---
layout: post
status: publish
published: true
title: Farewell Chrome Apps
date: 2016-08-20 15:35:26 +0200
categories:
- Tech
tags:
- chrome
- chromeos
- mozilla
- electron
- development
---

![Google Chrome](https://c2.staticflickr.com/8/7281/27519596232_09ffe1bded_k.jpg)

E così, è successo: **Google** ha iniziato a dire ufficialmente che nel giro di un paio d'anni [eliminerà la possibilità di eseguire le cosiddette Chrome Apps](https://www.engadget.com/2016/08/19/google-ending-chrome-apps-for-mac-and-windows/), ovvero **applicazioni all'interno di Google Chrome** – almeno per quanto riguarda Windows, macOS e Linux. Chiaramente questa possibilità penso rimarrà confinata al loro **ChromeOS**.

ChromeOS sul quale si continua a lavorare, e per il quale è stata annunciata proprio poche ore fa una [nuova feature](https://www.engadget.com/2016/08/19/unlock-chrome-os-with-pin/) (il PIN di sblocco al posto della password di Google); questo a riprova del fatto che secondo me la strategia di **centralizzare in Chrome** le operazioni degli utenti da parte di Google è **fallita miseramente**.

### Chrome runtime VS Electron
Col tempo infatti ha preso piede sì l'idea di **eseguire delle webapp su desktop**, ma in modo molto diverso da come Google aveva concepito la cosa; mentre a Mountain View si cercava di rendere Chrome il motore immobile dell'ambiente desktop, legando di fatto l'esecuzione delle applicazioni a quella del browser, anche se in finestre separate, GitHub ha tirato fuori dal cilindro un suo **container agnostico** per applicazioni web.

Il risultato usando **Electron** è molto meglio, dato che non è in nessun modo legato al browser in uso, e le applicazioni risultano molto, molto meglio integrate nel sistema operativo. Così l'idea delle **Chrome Apps** per macOS, Windows, Linux è andata a morire in favore di un sistema che a fronte di una omogeneità maggiore col sistema operativo e con l'ambiente desktop anziché col browser offre comunque un agnosticismo di fondo che consente di portare il codice su tutte le piattaforme senza troppi sbattimenti.

### Tutti amano i runtime, a nessuno piace il contenitore
Secondo me le Chrome Apps (che per un periodo stavano prendendo piede) sono state uccise dai runtime per una ragione molto semplice: a tutti piace il runtime, mentre a nessuno piace vedere una **webapp** "vestita" da app desktop con così poca cura, e con così poca differenza rispetto al sito che la rappresenta.

A me è sempre sembrata una presa in giro, e mentre le Chrome Apps cominciano ad essere allontanate persino dai loro creatori, i runtime simili ad Electron (addirittura compatbili con questo) crescono di numero: [Mozilla](https://github.com/mozilla/positron) ha il suo, e [GNOME](http://dottorblaster.it/2016/06/epiphany-electron/) agogna la possibilità di trasformare un pezzo di **Epiphany** in una shell simile.

Di positivo c'è che trovo che **Chrome** stia tornando pian piano a fare solo il browser. Ed è una cosa di cui c'è da essere contenti.

_Photo courtesy of [Thomas Hawk](https://www.flickr.com/photos/thomashawk/27519596232/)_
