---
layout: post
status: publish
published: true
title: Back to Linux
date: 2020-12-20 20:06:13 +0100
categories: 
- Linux
tags: 
- linux
- arch linux
- pinguino
- free software
- open source
- development
---

Atto di dolore: il mio computer fisso è stato un **Hackintosh** per una cospicua dose di anni. L'ho costruito in un momento in cui la supremazia di Intel nelle macchine di Apple sembrava essere una cosa indiscussa per gli anni a venire, e in un momento di straordinaria compatibilità con tutto l'hardware esistente. Non mi sento di aver buttato soldi e tempo, anzi: ho acquisito negli anni mettendo le mani in pasta [con varie distribuzioni di macOS](https://dottorblaster.it/2009/03/seven-kalyway-reactos-bsd/) per dispositivi non-Apple una certa conoscenza di quello che c'è sotto il cofano, cosa che per un appassionato di sistemi operativi è sempre una grossa soddisfazione.

L'ultima build è stata particolarmente compatibile e divertente, sono stato aiutato da [Gianguido](https://me.gsora.xyz/) e il setup ce lo siamo fatto insieme in videocall anni e anni fa. E non c'era nemmeno una pandemia globale in corso![^1]

Insomma: di punto in bianco per colpa di Apple smettono di uscire i driver NVIDIA per MacOS, quindi non posso più aggiornare il mio sistema operativo. Di seguito una lista di ottimi motivi che mi hanno riportato sulla retta via:

- **Niente più aggiornamenti** del sistema operativo, quindi niente più nuove feature. Non sarebbe stato un problema, le nuove feature dei sistemi Apple sono veramente fegatelli. Se non che...
- Le applicazioni hanno smesso quest'anno di supportare **High Sierra** (che era la versione a cui ero fermo): Docker mi avvisava con un inquietante popup che avevo una versione non supportata, e di aggiornare il mio sistema operativo; il carico da novanta ce l'ha messo Homebrew qualche settimana fa mostrando un bel messaggio in console dicendo che da quel momento se avessi incontrato qualche problema di build era _fortemente sconsigliato_ che aprissi una issue su GitHub. Lo stesso iTerm non gira più su High Sierra se non sbaglio.
- Ho aggiornato il laptop a **Big Sur**. Sul lato performance niente da dire, penso che sia stato fatto un ottimo lavoro. Sul lato UI viceversa ho pensato "chi ha trasformato il mio computer in un Kid Clementoni?"
- Last but not least, le mie cuffie bluetooth appena acquistate hanno qualche problemino con lo stack bluetooth/audio di macOS.

Insomma, nonostante io adori il fatto di avere un sistema operativo curato dal punto di vista della UX, la convivenza era diventata estremamente difficoltosa; quindi mi sono sentito in potere, una volta accumulato il coraggio di mandare a terra un setup vecchio di circa 3 anni e spicci, di sbattere macOS fuori di casa.

### Hello Linux my old friend
Non voglio fare paragoni azzardati (e sarebbe un enorme atto di [hybris](https://it.wikipedia.org/wiki/Hybris)) ma ogni volta che succede questa cosa mi sento come Daniel Robbins che torna a Linux dopo anni di BSD. Il primo pensiero che ho avuto, una volta avviata la mia Linux box reinstallata di fresco, è stata "flexibility at your fingertips", ovvero qualsiasi personalizzazione finalmente a portata di dito. Con un briciolo di vergogna mi chiedo: perché ci ho messo tanto?

![GNOME fresco di installazione e personalizzazione, circa](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/gnome-shell-screenshot-VFIMV0.png)

Ovviamente ho dovuto prendere **qualche precauzione**: negli anni ho accumulato un sacco di piccoli trucchetti e cavolate personali per aumentare il throughput della mia giornata lavorativa, e tutta questa suite di script, programmini e utility varie ha richiesto qualche piccolo adattamento. In un weekend lungo comunque (standoci dietro relativamente poco tempo se non la mattinata che mi ha richiesto l'installazione iniziale di Arch Linux[^2]) ho sfangato tutto quanto, soprattutto per quanto riguarda il **remap della mia tastiera**, su cui avevo fatto un bel lavoretto di fino usando Karabiner. Ho riportato tutto su Linux usando [xkeysnail](https://github.com/mooz/xkeysnail), un software di cui probabilmente parlerò più in dettaglio a breve.

Dall'altra parte, una volta attraversata l'imperscrutabile barriera del "avrò una workstation funzionante prima di sera?", mi sono potuto sedere un attimo a osservare il setup che avevo tirato su. Un setup per la precisione composto di:

- Arch Linux (kernel `5.9.14-arch1-1` al momento della scrittura di questo post);
- Systemd 247.2 e systemd-boot come bootloader, grazie a gsora e [smlb](https://smlb.github.io/) per i consigli[^3];
- GNOME 3.38.2;
- Tema Arc Solid, una certezza;
- Un po' di estensioni per GNOME Shell, giusto perché di serie viene fuori un po' sguarnita[^4];
- [Tilix](https://gnunn1.github.io/tilix-web/) come emulatore di terminale;
- [Rofi](https://github.com/davatorium/rofi) come launcher di applicazioni;
- [Firefox](https://www.mozilla.org/it/firefox/) come web browser;
- Una sequela di altre applicazioni con le quali vi annoierei e basta.

Devo dire che sono rimasto piacevolmente colpito soprattutto dal fatto che **GNOME Shell** abbia risolto i suoi problemi di performance, dal fatto che Nautilus che già prima era un signor file manager adesso è veramente super maturo (con un bel po' di feature e una bellissima interfaccia[^5]), e dal fatto che **lavorare con Linux** è ormai un piacere raro.

Docker non è costretto a ricorrere a una ridicola macchina virtuale per poter funzionare, e l'hardware che hai sotto lo puoi sentire scalpitare. L'altro giorno ho scritto a un amico che stavo compilando una release di Erlang - tempo che lui mi rispondesse la macchina aveva già finito. Insomma: avete capito no?

**Lavorare con GNOME** oltre tutto è una sciccheria: devo dire che una volta risolti i problemi di performance dell'ambiente grafico macOS non mi manca per niente, specie dato il fatto che mentre GNOME è migliorato esponenzialmente anno dopo anno la UI del mio Macbook è diventata sempre peggiore. L'esperienza utente è ugualmente rifinita, e con dei piccoli ritocchi al tema di base (come ho già detto uso Arc nella variante solid, anche se Adwaita è migliorato un sacco nell'ultimo anno) si può veramente azzardare il paragone con altre esperienze desktop nella UX delle quali vengono spesi miliardi l'anno.

Insomma: è anche la prima volta che provo un **setup full Linux** col mio doppio monitor. E devo dire che mi trovo egregiamente. Spero che la soddisfazione cresca ancora :-) e soprattutto spero di scrivere presto qualche piccola guida "vecchio stile" riguardo delle cose che ho scoperto in queste settimane di rinnovata convivenza col pinguino.

![GNOME Shell in dual monitor](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/gnome-shell-screenshot-LX6WV0.png)

[^1]: Ogni volta che sento cose tipo "questo virus ci ha fatto imparare il valore di blablabla" vorrei solo rispondere "a' regazzì, ma che davero? Benvenuti nel 2020".

[^2]: Una mattinata è comunque un casino di tempo. C'erano un sacco di cose nuove per me che ora come ora sfangherei in due minuti. L'installazione reale senza contare lo studio penso mi abbia richiesto, boh, quaranta minuti in totale? :-D

[^3]: E per aver calmato l'attacco di panico dovuto al primo setup UEFI della mia vita :-)))

[^4]: Anche qua, un tema da trattare con molta calma. Non sono un grande fan dell'inzeppare GNOME di un milione di estensioni inutili, ma la versione di default secondo me si porta dietro delle cazzate (diciamolo) tipo non poter ridurre a icona una finestra, che sono delle corbellerie belle e buone. Eh ma tu non capisci il paradigma che abbiamo concepito, mi dice il team di sviluppo. Ragazzi, non scherziamo, dico io.

[^5]: Interfaccia che [qualcuno](https://www.apple.com/it/macos/big-sur/) sembra aver preso come ispirazione. :V


