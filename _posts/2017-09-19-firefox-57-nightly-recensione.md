---
layout: post
status: publish
published: true
title: Firefox Nightly, ovvero quanto è fichissimo quello che ci aspetta
date: 2017-09-20 00:09:12 +0200
categories:
- Open Source
tags:
- firefox
- mozilla
- firefox 57
- browser
- open source
---

Ho un po' di sonno, sono le 11 di sera, ma è troppo tempo che non posto sul blog e mi sono imposto di iniziare di nuovo. Quello che però non avevo previsto era l'iniziare da un argomento che sono sorpreso mi stia così a cuore, ovvero **Firefox 57**, ovvero Firefox Nightly. _(Si: il doppio "ovvero" è voluto; grazie mille grammar nazi!)_

Si perché dopo tanti [buoni propositi](http://dottorblaster.it/2013/07/eppure-dovremmo-usare-firefox//) ed essendo stato per tanto tempo utente di **Firefox**, alla fine ho capitolato: dato che Javascript dentro il browser mi dà da mangiare, e dato che i dev tools dall'altro lato della barricata sono migliori (o almeno, lo erano), ho abbandonato il panda rosso per passare a **Chrome** e fine della storia. Se non che... se non che [Gianguido](https://me.gsora.xyz/) in chat mi ha avvisato del fatto che **Firefox Nightly** allo stato attuale è una figata, e mi ha fatto drizzare le orecchie.

### Rendering: Servo all the things
Nell'ultima stable release ad oggi di Firefox, e ovviamente nelle nightly build, viene usato **Servo** come motore di rendering per il CSS – o meglio [Stylo](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/), un suo modulo integrato in Gecko. Devo dire che già così, il browser sembra tutto nuovo e il caricamento delle pagine ne risulta già parecchio migliorato.

### Lato performance: multiprocesso et al.
Ormai anche Firefox è arrivato ad avere la sua versione **multiprocesso**, quindi ogni tab che apriamo è un processo gestito in maniera separata. Da `about:config` possiamo gestire il numero di processi separati massimi che Firefox può far partire. È onestamente una figata, anche perché essendo configurabile possiamo impostare un massimo di processi ideale come **tradeoff** per il nostro hardware.

### Photon UI
Il complimento maggiore va alla **Photon UI**, che sotto Mac OS e sotto Linux fa veramente una grandissima figura. Sotto Windows ancora devo provarla per motivi di tempo e perché ho cambiato computer fisso nel frattempo, ma ci arriveremo; in ogni caso la nuova interfaccia è veramente una gioia per gli occhi.

![Firefox Nightly – Photon UI, versione compatta](https://gitlab.com/dottorblaster/blog-images/raw/master/images/firefox_nightly.png)

La cosa che mi fa piacere notare è che oltre ad aver mantenuto lo stesso grado di flessibilità e configurabilità della precedente versione (che pure mi aveva colpito ma stufato in passato dopo qualche mese di uso), Photon ha introdotto anche persino una modalità compatta. Nella versione out of the box la nuova UI è già **meno "alta" e massiccia** di quella di Chrome. Con la versione compatta devo ammettere di essere arrivato direttamente nel nirvana con un calcio di cui il miglior [punter](https://it.wikipedia.org/wiki/Punter) al mondo andrebbe fiero per secoli.

### Development tools
I **nuovi dev tools** sembrano veramente promettenti. Io ancora non ho avuto modo di farci un giro in ufficio, ma penso dalla settimana prossima di iniziare a vedere come mi ci trovo. Onestamente sono molto, molto abituato alla console di Chrome, e sui debugger non sono uno che cambia abitudine facilmente. Principalmente perché non mi piace usarne. In ogni caso [sul blog di Nightly c'è un ottimo approfondimento](https://blog.nightly.mozilla.org/2017/09/11/developer-tools-visual-refresh-coming-to-nightly/).

Vi faremo sapere.

Per quanto riguarda l'impressione di base comunque, l'unica cosa che posso rimproverare a queste Nightly che ormai uso da un mese è il fatto di essere delle nightly build appunto, quindi versioni dove accetti che qualcosa possa spaccarsi "because reasons". Non vedo l'ora che quello che ho sotto le mani diventi la **nuova versione stabile di Firefox**. Davvero.
