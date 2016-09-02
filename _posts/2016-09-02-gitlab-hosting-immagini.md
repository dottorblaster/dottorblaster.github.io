---
layout: post
status: publish
published: true
title: "Gestire le immagini statiche tramite Git: why not"
date: 2016-09-02 23:43:28 +0200
categories:
- Tech
tags:
- git
- jekyll
- gitlab
---

Stamattina ho avuto un'**illuminazione da toilette**. Dicesi illuminazione da toilette quel momento chiarificatore di ogni cosa, che accade generalmente la mattina tra quando prendi il caffè e quando ti vesti. Ossia quando sei (circa) seduto sul tuo augusto trono casalingo ad espletare le funzioni corporali di un essere umano medio.

Erano mesi che ragionavo su una tematica particolare: questo blog ha sempre usato un hosting esterno per le immagini; come posso fare a portarmele dentro casa, o comunque su una piattaforma dove io abbia un controllo decisamente maggiore? Così ho analizzato varie soluzioni:

- **Amazon S3**
- [Minio](https://minio.io/)
- **Apache/nginx** e un FTP custom
- Un **servizio di image hosting** anche a pagamento

Mi è passata circa immediatamente la voglia di fare un censimento di ogni roba simile che ci fosse sull'internet. S3 l'ho escluso perché costa un pacco di soldi. **Minio** non fa esattamente quello che volevo io, e per concludere, beh, anche Apache o nginx non hanno decisamente la comodità di offrirmi un'interfaccia caruccia per fare queste cose.

Viceversa stamattina, l'**illuminazione**. Sono andato al computer, ancora con tutto lo sventramento di C aperto dalla sera prima, e ho fatto questo:

![Gitlab epiphany](https://gitlab.com/dottorblaster/blog-images/raw/master/images/epiphany_gitlab_repoblog.png)

Vedrò di gestire le immagini (d'ora in poi) tramite **Git**, e un repository pubblico su **Gitlab** creato per l'occasione. Mi sono detto che essendo un fan di Git così assiduo (diamine, persino questo blog è basato su Git), forse ha senso provare ad approfittare un po' di quello che offre Gitlab.

Vi faremo sapere. :-D
