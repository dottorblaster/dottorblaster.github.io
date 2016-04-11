---
layout: post
status: publish
published: true
title: I patched GitLab and I liked it
date: 2016-04-08 19:35:04 +0200
categories:
- Tech
tags:
- gitlab
- git
---

![GitLab commit](http://i64.tinypic.com/f210r5.png)

Un software che apprezzo veramente tanto (e chi segue questo blog lo sa visto che ne parlo abbastanza spesso) è **GitLab**. Visto che ultimamente ho avuto anche un'esperienza ravvicinata con GitLab in un ambiente enterprise con migliaia di push giornaliere, ho imparato anche un po' più profondamente com'è fatto il progetto in sé: con questo presupposto, ho deciso di inviare un contributo scemo.

Non mi piaceva infatti la disposizione di alcuni elementi grafici, e secondo me mancava un margine in un punto preciso; così mi sono letto le contribution guideline, e ho fatto una piccolissima modifica, sottoponendola poi tramite [merge request](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests/3505) al core team.

Devo dire che tutto il **processo** mi ha lasciato molto soddisfatto; grazie alla continuous delivery pipeline che hanno in casa loro, oggi ho visto applicato in produzione il cambiamento che ho apportato (una scemenza, ma ne sono comunque fiero :-D), e a valle di questo processo di contribuzione conclusosi nel migliore dei modi mi sento di fare un po' di appunti:

- Il **triaging delle merge request** è lento, ma questo dipende anche dal fatto che ci sono "pochi" addetti, mentre il numero di contributor esterni è abbastanza alto;
- Le **contribution guideline** indicano come processo ideale quello di fare fork, creare un **feature branch**, poi chiedere la merge request dal feature branch in master. Secondo me questo non è ottimale, dato che la creazione del feature branch per modifiche di poco conto (come la mia) non inficia la review della richiesta che viene fatta dopo ed è solo uno step in più che appesantisce il workflow;
- Mi è stato chiesto di assicurarmi che **la build** del mio commit fosse verde. Questo è sacrosanto, viceversa secondo me non è sacrosanto che uno step della pipeline di testing restituisca un **esito non deterministico**.

Tenendo a mente soprattutto l'ultima pillola e fissandola come un **antipattern dell'ambito QA/operations**, sono molto contento del risultato.

Daje :-)
