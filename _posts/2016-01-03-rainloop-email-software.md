---
layout: post
status: publish
published: true
title: "RainLoop: mettere in piedi una webmail senza sforzo"
date: 2016-01-03 22:47:00 +0100
categories: 
- Tech
tags: 
- rainloop
- webmail
- email
- cloud
---

![RainLoop](http://i65.tinypic.com/2jdqi4i.png)

Et voilà: primo post del **2016**. :-)

Con tutta questa **cloud** siamo abituati sin troppo ad usare le applicazioni all'interno del nostro browser; io stesso uso da sempre **GMail**, le altre applicazioni di Google e svariati servizi solo tramite un visualizzatore di pagine web. Da un po' di tempo tuttavia sto meditando sia di mettere in piedi un mailserver personale, anche se non mi reputo in grado di sostenerne l'impegno - più che altro quello morale; viceversa, in ufficio la nostra **webmail** ha bisogno di una imponentissima svecchiata.

In questo scenario il buon [Julian](https://julianxhokaxhiu.com/) mi ha picchiettato più volte la spalla consigliandomi [RainLoop](http://www.rainloop.net/), un **client email web-based** che mi ha intrigato sin da subito: il traguardo di questa applicazione infatti è quello di fornire un'esperienza d'uso molto simile a quella di un servizio email offerto da un qualsiasi provider, unita chiaramente ai pregi di una (o un pool di queste, diciamo) casella email **self-hosted**. 

Fatte queste doverose premesse, in questi giorni ho cominciato a smacchinare per ottenere un'installazione di **RainLoop** funzionante su una macchina con **CentOS**; eccovi quindi una piccola recensione.

### Installazione
Per imparare qualcosa in più su questo software (e sul mondo Red Hat, dato che di solito per le macchine uso **Debian**), ho preferito non installare RainLoop tramite **Docker** (visto che ha un suo [Dockerfile](https://github.com/jprjr/docker-rainloop)), mettendo invece su un webserver Apache andando a completare una classica installazione **LAMP** (quindi con MySQL sotto le natiche).

Scompattato il tarball di installazione (per cui gli sviluppatori forniscono anche qualche riga di scripting), installato qualche modulo PHP mancante e riavviato il webserver per l'ultima volta, ho avuto una bella sorpresa: tutto funzionante e zero sbattimento :-)

### Configurazione
RainLoop espone un path al quale possiamo **configurare la webapp** per modificarne alcuni comportamenti, tra cui l'accesso ai server di posta: nella sezione dei domini, ci basta infilare il nostro mailserver tramite una label, le impostazioni IMAP e quelle SMTP. Quando poi andremo a effettuare l'accesso, potremo utilizzare le credenziali della casella di posta: **RainLoop farà da middleware**, validando queste informazioni e **sincronizzando la casella di posta**. Non male, mh?

Inoltre, ci sono anche delle opzioni apposite per il branding. Tramite l'acquisto di una licenza premium, possiamo anche fare l'upload di un logo personalizzato.

### Utilizzo
L'uso è quello di un normale **client web-based IMAP**: abbiamo un pulsante per qualsiasi azione, e una semantica di ricerca per quanto riguarda i messaggi simile a quella usata da Google. La cosa che mi ha lasciato perplesso è che non ho ancora visto nulla per fare raggruppamento dei thread, probabilmente qualcuno avrà sviluppato un plugin per questo.

_Ecco qua, ho parlato troppo presto. RainLoop supporta il threading tradizionale di IMAP, basta attivarlo nelle opzioni. L'ho visto in [questa issue su GitHub](https://github.com/RainLoop/rainloop-webmail/issues/46)._

Insomma, un software che ti salva veramente la vita: la composizione di mail è ottima e offre tutto quello che può servirci, la lettura della posta anche, adattandosi sia a **mail HTML** potenzialmente molto antipatiche, sia ovviamente al testo semplice. Per quanto mi riguarda l'unica vera pecca di questo software è che i temi non sono veri temi, e il software non mi sembra ben estensibile.

La **scelta dei temi** infatti non cambia la veste grafica di RainLoop, ma solo lo sfondo della webmail; allo stesso modo non apprezzo moltissimo il look 'n feel dei pulsanti e delle barre, un po' retrò e al quale a quanto pare dovrò abituarmi. Senza dubbio molto meglio dell'aspetto incartapecorito delle applicazioni concorrenti, non c'è che dire :-)

Veramente troppo, troppo fico. Ho finalmente trovato un'alternativa agli antipatici **client email** desktop, che più di qualche volta presentano impuntamenti e ritrosie; spero che questo si comporti bene.

