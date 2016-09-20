---
layout: post
status: publish
published: true
title: GNOME Shell - dopo tanto tempo
date: 2016-09-11 14:00:00 +0200
categories:
- Linux
tags:
- gnome
- kde
- gnome shell
- desktop environment
---

Era già da un po' che volevo iniziare a scrivere questo post, ma per impegni personali ho sempre rimandato. E ho rimandato anche quello precedente, il che è divertente: avevo infatti intenzione (e non l'ho fatto!) di scrivere, da agosto scorso, di come io sia tornato a casa, e abbia **distrutto tutte le partizioni** del disco rigido del mio PC fisso per tornare ad installare, dopo parecchio tempo, **Arch Linux**.

### Back to Arch
Alla fine, renderò quel post un piccolo paragrafo di questo. **Tornare su Arch Linux** è, nell'ultimo anno, probabilmente la cosa più sensata che io abbia fatto con le mie macchine. Sul laptop per motivi di autonomia e assenza di voglia di sbattimento continuo ad avere **macOS**, viceversa sul fisso non solo ho sbragato tutto ciò che c'era di preesistente per ripartire con un ambiente pulito, ma stufo di tutti i problemini e gli impuntamenti che le altre distribuzioni mi avevano riservato (frustrandomi) ho deciso di provare a calcare la strada che una volta mi era stata **più congeniale**, per scoprire che è ancora il mio percorso preferito.

Forse su questo avrò da dire di più in seguito.

Ho scritto [pacnews](https://github.com/dottorblaster/pacnews).

Ma soprattutto, ho **installato GNOME Shell**, la scorsa settimana, per prendermi una pausa di riflessione da KDE; ed il risultato è stato totalmente inaspettato.

### Il setup
Per l'occasione, ho deciso di avvalermi di un assistente d'eccezione: così mentre il package manager sbrigava il lavoro sporco ho chiamato [Gianguido](http://blog.gsora.xyz/), che la scena GNOME negli ultimi tempi l'ha seguita molto più di me, e gli ho chiesto consiglio.

```shell
$ sudo pacman -Rcs kde
$ sudo pacman -S gnome gnome-extra
```

Con i comandi di rito ho avuto un **setup abbastanza pulito di GNOME** sulla mia macchina. Quello che però non sono ancora riuscito a digerire della nuova **GUI**, purtroppo, è il tema di default che gli sviluppatori hanno deciso di disegnare ed adottare: se infatti dall'esterno può apparire anche gradevole, personalmente non lo trovo molto bello, anche se devo giudicarlo molto funzionale. Essendo stato consigliato da Gianguido riguardo l'**installare un tema** dato che nel tempo c'è stata una proliferazione discreta, ho optato per sostituire il secolare (ormai) Adwaita con un **più ammiccante Arc**, sia per quanto riguarda la GUI delle applicazioni, sia per quanto riguarda GNOME Shell.

![GNOME 3 vanilla](https://gitlab.com/dottorblaster/blog-images/raw/master/images/gnome3_vanilla.png)

### Estensioni
Già che c'ero, mi sono fatto consigliare qualche estensione per rendere ancora più personalizzata la mia esperienza. Dato che ormai avevo sostituito il tema di default (e non volevo rinunciare a una dock) potevo anche **andare all-in con le customizzazioni** no?

Attualmente sono arrivato ad avere questo pool di estensioni attivo:

- **User themes**, per attivare il tema personalizzato Arc per la Shell;
- **Dash to dock**, per la dock: devo dire che svolge meravigliosamente il suo compito anche se va un po' configurata;
- **Impatience**, che è un simpatico trick per configurare la durata delle animazioni della Shell, dato che le performance non mi hanno convinto del tutto anche se di questo parleremo poi.

### Performance
Sinceramente, il **lato performance** mi sembra il più grosso caveat di **GNOME**. Sinceramente credo di aver ritrovato un po' di pace interiore con questa impostazione attuale (estensioni incluse), quindi sono portato a comparare il tutto al mio vecchio desktop GNOME di anni fa, preso da una memoria lasciata al volo su Facebook:

![GNOME 2.30](https://gitlab.com/dottorblaster/blog-images/raw/master/images/1916834_1521768761191_1878241_n.jpg)

_(Poi dicono che questi social media ci fanno male)_

In quanto a performance secondo me il mio ambiente attuale non è paragonabile all'**ambiente di cui ho nostalgia, basato su GNOME e Compiz**. Trovo però che sia un **buon compromesso** rispetto all'offerta attuale dei desktop Linux, che trovo funzionale ma poco prestante rispetto alle soluzioni offerte dalla concorrenza.

La cosa secondo me più grave è che per raggiungere qualcosa di decente io abbia non solo dovuto installare un'estensione per far durare meno le **animazioni di Mutter** (che io, per inciso, trovo **esageratamente** lente), ma abbia anche dovuto applicare una [configurazione particolare](http://dottorblaster.it/2016/08/intel-linux-tearing/) al mio driver video che a quanto pare non era abilitata, e senza la quale, detto senza peli sulla lingua, GNOME non gira molto bene.

A lato, va detto che secondo me Mutter e la Shell hanno **qualche problema con la memoria**, nel senso che ne allocano molta, ne consumano parecchia, e soprattutto la Shell va riavviata dopo qualche giorno di utilizzo continuo altrimenti comincia a soffrire di un po' di **micro-lag**.

### Applicazioni e user experience
Nonostante l'aspetto relativo alle performance non stia proprio brillando in casa GNOME, e nonostante io venga comunque da un'**esperienza Plasma 5** che al contrario è velocissimo in ogni animazione e ogni azione, **sono molto soddisfatto dell'uso del desktop nel quotidiano**. Le applicazioni si fanno usare volentieri, e non sento nessun tipo di mancanza in confronto ad ambienti desktop molto più blasonati come quello di **macOS**.

Addirittura, ho cominciato a fare qualche ricerchina per applicazioni che usino tutte le nuove feature delle **GTK3**, e se ne cominciano a trovare parecchie.

![GNOME 3 custom](https://gitlab.com/dottorblaster/blog-images/raw/master/images/gnome3_mine.png)

Una cosa che mi ha lasciato stupefatto è quanto **Nautilus e l'handling dei file** in tutto l'ambiente sia rimasto al top: nonostante qualche funzionalità in meno rispetto al passato (e infatti tempo addietro usavo Nauilus ricompilato con il patchset dell'Elementary Project), il file manager rimane una delle applicazioni più curate. Al contrario di KDE, è possibile trascinare i file da un posto all'altro (tipo, ehm, il browser) senza incorrere in side effect inaspettati. Immagino che questo sia comunque un merito dell'ambiente nel complesso (quindi di file manager, gestore finestre et al.), più che un merito del singolo programma.

L'effetto di **preview delle finestre nel workspace**, nonostante da queste parti sia ad utilizzo notevolmente ridotto a causa della dock, è comunque abbastanza piacevole e non mi dà così tanta noia come me ne dava i primi tempi in cui provai GNOME. Probabilmente il fattore abitudine influisce tanto su queste scelte e questi "sentimenti", e devo dire che se ho avuto qualche difficoltà ad adattarmi a GNOME nel tempo è stato anche perché l'aggiornamento improvviso sulle distribuzioni Linux che uso di più mi ha fatto sentire un "homeless di GNOME 2" più di quanto io sia abituato a credere.

La cosa che mi fa storcere il naso di più, in ogni caso, è come il **setup di default** non soddisfi il mio gusto personale e come sono abituato a lavorare; il fatto che gli sviluppatori di GNOME cerchino addirittura di osteggiare le personalizzazioni è persino più grave. Però nonostante questo **comincio ad affezionarmi**.

![GNOME 3 while working](https://gitlab.com/dottorblaster/blog-images/raw/master/images/gnome3_prod.png)

### Impressioni finali
Dopo qualche settimana di **uso costante di GNOME**, posso dire "viva GNOME!" seppur con qualche riserva. Esattamente come KDE va fatto del fine tuning per far funzionare tutto in modo che possa usarlo un essere umano normale. Le applicazioni sono belle, il desktop fa quello che dovrebbe fare e fa quello che ci si aspetta che un ambiente desktop debba fare. È sicuramente meno scarno di altri miei setup passati, e credo che rimarrà comunque il **mio desktop environment** per moltissimo tempo, dato che è esattamente quello che volevo.
