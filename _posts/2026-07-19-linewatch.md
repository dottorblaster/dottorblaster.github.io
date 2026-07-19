---
layout: post
status: publish
published: true
title: linewatch
date: 2026-07-19 18:36:03 +0200
categories:
- Linux
tags:
- linewatch
- fibra ottica
- wind tre
- disservizi
- santa maria delle mole
---

A Santa Maria delle Mole, qui dove abito, c'è un problema grosso con la connessione internet: praticamente quando vengono raggiunte alte temperature gli armadi della fibra si **friggono** (termine estremamente tecnico) e a tutta Santa Maria, indipendentemente dal provider telefonico (che nel mio caso è WindTre), smette di funzionare la rete cablata.

Ovviamente tutti si attaccano con hotspot e router portatili 4/5G vari quindi vi lascio immaginare come effetto collaterale quanto collassa da 1 a 10 il ripetitore di zona quando gli arriva il burst di (tipo) mille persone che si attaccano immediatamente alla linea non cablata.

Detto ciò, dato che questa cosa accade da anni, il problema è ogni anno esponenzialmente più grave, e a quanto pare la situazione non è mai stata presa seriamente in considerazione da nessuno che non fosse interessato a un rimpallo burocratico, ho cominciato a chiacchierarne con un LLM, in attesa di parlarne con un avvocato vero, e ho avuto un'idea.

È così che è nato [linewatch](https://github.com/dottorblaster/linewatch), un monitor di linea da deployare su un server casalingo (va bene anche una Raspberry Pi) che periodicamente monitora il livello di salute della connessione e appende il risultato in un log che segue la stessa logica della blockchain, ovvero ogni nodo contiene l'hash SHA-256 del nodo precedente. Ogni quanto vogliamo, l'event log può essere usato per generare un report in PDF da mandare al nostro avvocato di fiducia insieme al log stesso.

_Ka-ching_.

La cosa carina è che oltre a tutte queste informazioni tecniche, sia il log e il report contengono per ogni outage anche il livello di servizio Agcom in modo da facilitare la vita a, per esempio, un giudice che legge queste carte. La parte legal è, più o meno, servita :-D

La beffa del fato, a quanto pare, è che una volta sviluppato e deployato tutto questo, ho avuto appena il tempo di verificare che tutto funzionasse: a quanto pare tramite dei lavori (che Agnese ha visto in realtime) la centralina incriminata è stata sostituita. Tempo 48 ore la linea ha ricominciato a fare su e giù, e non so se sperare che il disservizio continui, adesso che ho i mezzi per una causa, o sperare in altre riparazioni.

In caso vi servisse, **linewatch** ha anche la sua bellissima container image che potete deployare dove volete. Basta andare sul repository e spiluccare un po'.
