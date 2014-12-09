---
layout: post
status: publish
published: true
title: Technicolor TG582n, hacking del router per cambiare ESSID e DNS
categories:
- Tech
tags:
- telecom
- technicolor
- router
- hacking
---

![Technicolor TG582n hack](http://www.k4ch0.org/wp-content/uploads/2013/12/Modem-Technicolor-TG582n.jpg)

Qualche settimana fa, mia madre ha pensato bene di attribuire la colpa di alcuni **malfunzionamenti della rete casalinga** al nostro router - che effettivamente cominciava a mostrare segni di cedimento dopo quasi dieci anni (si, avete letto bene: dieci anni) di servizio. Ignorando qualsiasi dettame totalitario imposto da me sull'acquisto di beni tecnologici, chiaramente provocato dal fatto che senza la consulenza del sottoscritto sono state fatte entrare in casa delle cagate immonde che non meriterebbero manco il nome di "hardware" (tanto meno quello di "software" per quanto riguarda i firmware di codesti dispositivi), ha chiamato allegrotta Telecom per farci mandare un **nuovo router**.

![A mia insaputa come quello famoso](http://4.bp.blogspot.com/-PLcsu_MZ4ww/Tu3MurgWs9I/AAAAAAAAThk/cNU9FcPu4WQ/s1600/Scajola%2BNonleggerlo.png)

Così, senza manco tornare dalla trasferta, e senza manco una telefonatina, il danno era fatto: mi sono trovato a mia insaputa a dover installare un **Technicolor TG582n**, ovvero il router che da qualche tempo Telecom, Tiscali e un sacco di altri **provider** anche esteri mandano ai propri clienti.

### Il problema
Ho guardato quel router, ancora inscatolato, come guarderei un **velociraptor** che voglia assolutamente fare l'amore con me. Sapevo già cosa mi aspettava, e mi sono ripassato tutto quello di cui avrei avuto bisogno di configurare mentre lo collegavo alla rete elettrica; c'è un motivo per cui ho detto no da una decina d'anni ai router che i provider di servizi si ostinano a rifilare ai propri clienti, ed è che di solito non si riesce a configurare un bel niente relativo alle proprietà della rete. In questo caso il provider (a cui non faccio nessuna colpa, beninteso) si è superato dando alle persone la possibilità di impostare addirittura cose come DynDNS e la soglia di rumore prima di switchare dinamicamente il canale della rete WiFi, ma togliendo completamente all'utente la possibilità di impostare alcune cose di base come:

- L'**ESSID** della rete WiFi (?!?!) (ovvero il nome della rete)
- I **DNS**
- Eccetera eccetera eccetera (praticamente qualsiasi parametro)

Ovviamente al primo impatto quello che ho fatto è stato seplicemente inorridire: l'**interfaccia web** di questo affare non è minimamente utilizzabile per i compiti di base di chiunque voglia amministrare con un po' di raziocinio la propria rete casalinga. Fortunatamente ho trovato un piccolo trucco per **aggirare questi limiti senza riflashare il Technicolor** con un firmware normale.

### La soluzione  
Scartabellando un po' ho visto che l'interfaccia del router espone quantomeno un metodo per il **backup delle impostazioni** e per il restore di queste nel caso in cui qualcosa vada storto. Queste impostazioni sono scritte in un **file di testo XML** che però, purtroppo, è **criptato attraverso AES**. In giro per l'Internet comunque ci sono le chiavi per decrittare il file, per cui ci basta andare nell'interfaccia di amministrazione del router e, nel dialogo apposito, scegliere di fare un backup delle nostre impostazioni. Questo ci farà scaricare un file.

Per **trasformare il file in formato .kry in un normale file XML**, ci basterà usare OpenSSL come nell'esempio qui sotto:

```bash
openssl aes-128-cbc -K 65316532656263323039373831383630 -nosalt -iv 0 -d -in file.kry -out file_decriptato.xml
```

A questo punto, **aprendo il file XML** potremo modificare qualsiasi valore in qualcosa di più adatto. Un paio di riferimenti utili:

- <code>\<SSID\>NomeDellaRete\</SSID\></code>: in questo particolare punto potete modificare il nome della vostra rete come l'ESSID, che altrimenti sarebbe ad vitam qualcosa tipo Telecom-123456
- <code>\<PublicPrimaryDNS\>0.0.0.0\</PublicPrimaryDNS\></code> per il DNS primario, altrimenti risolverete sempre sui DNS del provider, che in genere fanno cagare. Io ho impostato i classici DNS di Google, ma anche gli OpenDNS vanno benone.
- <code>\<PublicSecondaryDNS\>0.0.0.0\</PublicSecondaryDNS\></code> come sopra: DNS secondario per la risoluzione dei nomi di dominio.

Ci sono anche un sacco di valori che se siete dei power user delle reti di calcolatori potete modificare a mano. Io non ho voluto fare troppi danni. :-D

Fatto tutto quello di cui abbiamo bisogno, possiamo tranquillamente **ripacchettizzare il nuovo file XML** con le nostre impostazioni in un **nuovo file .kry** per poi iniettare il risultato nel router attraverso il dialogo di ripristino delle impostazioni precedentemente backuppate.

```bash
openssl aes-128-cbc -K 65316532656263323039373831383630 -nosalt -iv 0 -e -in file_decriptato.xml -out nuovo_file.kry
```

Fatto? Fatto. Il tempo di un riavvio e saremo di nuovo i **legittimi proprietari della nostra rete casalinga**, in barba ai service provider che non si curano dei power user. Buon divertimento :-)

_Photos courtesy of [k4cho](http://www.k4ch0.org/vpn-en-infinitum-technicolor-tg582n/), [Nonleggerlo](http://nonleggerlo.blogspot.it/2011/12/vostra-insaputa.html)_
