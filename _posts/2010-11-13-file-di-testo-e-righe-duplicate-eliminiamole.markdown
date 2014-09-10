---
layout: post
status: publish
published: true
title: File di testo e righe duplicate, eliminiamole.
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 775
wordpress_url: http://dottorblaster.it/?p=775
date: '2010-11-13 00:30:13 +0100'
date_gmt: '2010-11-12 23:30:13 +0100'
categories:
- Linux
tags:
- AWK
- Infatti Bash
- UFO
- AUR
comments:
- id: 15214
  author: Edo
  author_email: federico.granata@gmail.com
  author_url: http://www.google.com/profiles/federico.granata
  date: '2010-11-13 07:57:00 +0100'
  date_gmt: '2010-11-13 07:57:00 +0100'
  content: |-
    ovviamente dipende dal contenuto del file ma un bel
    sort | uniq
    fa sempre il suo sporco lavoro ;)
- id: 15215
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-11-13 09:14:00 +0100'
  date_gmt: '2010-11-13 09:14:00 +0100'
  content: |-
    Verissimo, ho dimenticato di inserirlo :D
    Però in rari casi in cui ti interessa che l'ordine delle righe rimanga precisamente quello, sort te lo rovina un po' :P
- id: 15216
  author: ''
  author_email: marcopaolone@gmail.com
  author_url: ''
  date: '2010-11-13 09:33:00 +0100'
  date_gmt: '2010-11-13 09:33:00 +0100'
  content: Farlo con sed è ancora più sadico di awk :D
- id: 15217
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2010-11-13 11:48:00 +0100'
  date_gmt: '2010-11-13 11:48:00 +0100'
  content: Si può fare in modo che elimini i doppioni "per primi" e non "per secondi"?
    In modo che mi tenga i comandi doppi che ho usato solo quando li ho usati per
    ultimi? :P
- id: 15218
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-11-13 12:07:00 +0100'
  date_gmt: '2010-11-13 12:07:00 +0100'
  content: |-
    la variabile d'ambiente che configura Bash scritta lì dovrebbe farlo, in teoria.
    Non ho testato la cosa :D
- id: 15219
  author: juhan
  author_email: n1n0.aegis@gmail.com
  author_url: ''
  date: '2010-11-13 14:12:00 +0100'
  date_gmt: '2010-11-13 14:12:00 +0100'
  content: "Ottimo post. Io awk quando lo usavo tiravo giù tutti i santi del calendario.\nEsiste
    sul web un sito ottimo, dove non manca una guida a awk http://www.thegeekstuff.com/2010/01/awk-introduction-tutorial-7-awk-print-examples/
    (questo è uno della serie).\nCon Ubuntu avevo avuto problemi con ignoredups, non
    so se per errori miei. \nOT: MM continua a avere problemi con wmctrl, non identifica
    l'area di lavoro. Nessuno ne sa qualcosa?\n"
- id: 15220
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-11-13 14:20:00 +0100'
  date_gmt: '2010-11-13 14:20:00 +0100'
  content: |-
    Mi sa di strumento troppo potente, comunque è spettacolare :D
    Grazie dell'indirizzo per le guide, è utilissimo e credo che ne farò uso :P

    Riguardo WMCTRL, non so dirti. Qua sembrano diventare tutti scemi appresso al look'n feel e poi ci si perde i pezzi ;)
- id: 15242
  author: MrModd
  author_email: mr.modd@gmail.com
  author_url: http://mrmodd.it/
  date: '2010-11-15 19:13:00 +0100'
  date_gmt: '2010-11-15 19:13:00 +0100'
  content: |-
    Ricorda la domanda fondamentale: "Ma si può fare di meglio???"

    A parte tutto bellissimo articolo. Non sarebbe male metterlo in cron per fargli fare una pulizia automatica di tanto in tanto.
    ignoredups? Troppo da nabbi :D
- id: 15244
  author: Edo
  author_email: federico.granata@gmail.com
  author_url: http://www.google.com/profiles/federico.granata
  date: '2010-11-15 21:46:00 +0100'
  date_gmt: '2010-11-15 21:46:00 +0100'
  content: |-
    quindi tu avresti dei file di testo in cui l'ordine delle righe è importante ma ciò nonostante potresti avere delle righe non consecutive tra di loro ?
    potresti farmi un esempio, mi sa che sono casi così rari che non mi vengono in mente ...
- id: 15245
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-11-15 22:58:00 +0100'
  date_gmt: '2010-11-15 22:58:00 +0100'
  content: |-
    Fare ingegneria ti fotte il cervello :D
    Caso pratico: proprio il bash_history.
    Se vai di sort | uniq prima ti viene fatto il sort di tutto il file, quindi vengono ordinate tutte le righe, e l'ordine temporale viene stravolto. È chiaro che è da paranoico, ma il giorno che poi sort | uniq per un malaugurato caso ti uccide qualcosa, poi è il caso di sapere che cosa è successo :D
- id: 15246
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-11-15 23:04:00 +0100'
  date_gmt: '2010-11-15 23:04:00 +0100'
  content: "È per quello che ho postato tre soluzioni, anche se le sette soluzioni
    a fibonacci non le batte nessuno :D"
- id: 15248
  author: Edo
  author_email: federico.granata@gmail.com
  author_url: http://www.google.com/profiles/federico.granata
  date: '2010-11-16 06:32:00 +0100'
  date_gmt: '2010-11-16 06:32:00 +0100'
  content: |-
    sarà che con il trasloco in atto mi ritrovo senza energie ma non riesco a seguirti ...
    a parte che nella history puoi salvarti anche la data in qui un dato comando è stato lanciato ...
    se tu cancelli dei comandi dalla history, qualsiasi mezzo tu utilizzi, non potrai aspettarti di poter ricostruire quanto avvenuto ...
- id: 15249
  author: MrModd
  author_email: mr.modd@gmail.com
  author_url: http://mrmodd.it/
  date: '2010-11-16 07:51:00 +0100'
  date_gmt: '2010-11-16 07:51:00 +0100'
  content: Ahahahahah!!!
---
<p>Oggi nel tardo pomeriggio, il mio amico <a href="http://twitter.com/chemicky_pes"><strong>@chemicky_pes</strong></a> ha fatto <a href="http://twitter.com/#!/chemicky_pes/status/3153761987989504">una domanda</a> su Twitter il cui scopo per certi versi può risultare inutile, tuttavia per puro scopo di ricerca abbiamo pensato di studiare un po' la cosa e risolvere questo piccolo quesito, in vari modi; non masticando lui la Bash, e volendo affrontare il problema con un software in C, io ho tagliato corto con un po' di alto livello che, in questi casi, ci salva sempre :D</p>
<p>[blackbirdpie id="3153761987989504"]</p>
<p>In particolare la questione, non ben spiegata con quel twit, è stata: e <strong>se io non volessi doppioni nel .bash_history</strong>? Il .bash_history, per chi non sapesse, è quel file nascosto nella home di un utente in un sistema operativo Unix, che governa la "memoria" della console; ossia, premendo il tasto SU (si, la freccia), si accede agli ultimi comandi in ordine cronologico che sono stati inseriti, e l'elenco è contenuto proprio nel suddetto file. Ora, volendo risolvere il problema, ho approcciato la cosa preferendo un po' di sano scripting. Ed ho risolto con uno script di cui vi posto lo pseudocodice, chè se leggete il mio codice Bash fate notte e vi viene il mal di testa :P</p>
<p><code>for rigazero to ultimariga do{ #indice X<br />
for rigazero to ultimariga do{ #indice Y<br />
if (rigax==rigay)<br />
cancella_riga<br />
}}</code></p>
<p>In pratica che succede: grazie al <strong>doppio for</strong> scorro il file di riga in riga e cancello quelle duplicate. <em>Problema</em>: comunque mi cambiano parecchi parametri se elimino la riga in maniera netta, devo mantenere lo spazio vuoto al suo posto, o usare un while. Siccome non sono una persona molto paziente, ho cercato su Google una maniera rapida per risolvere il problema delle righe duplicate, e ho trovato delle dritte su <strong>AWK</strong>, praticamente a mia opinione l'unico programma su Linux più difficile da usare di <strong>Sed</strong>: infatti AWK è un programma che accetta non parametri, bensì vere e proprie istruzioni come input. Un programma programmabile, praticamente l'inferno. Non so che succede se lo si usa in maniera ricorsiva, probabilmente escono le cavallette dal PC, o gli UFO vengono a rapirti. Fatto sta che con una bella istruzione, a occhio banale, di AWK, ho risolto:</p>
<p><code>awk '!x[$0]++' targetfile.txt</code></p>
<p>A occhio, dicevo, è banale, ma spiegare perchè una riga del genere elimini le righe duplicate in un file... :D</p>
<p>Non entrando nei dettagli, AWK con quel parametro <strong>scannerizza il file come un array </strong>che in ogni cella ha una riga. Dopodichè grazie al suo mistico potere (secondo me infatti sto software funziona per magia) guarda quali sono le righe duplicate, e agisce di conseguenza, mandando in output il file senza doppioni. Usarlo in pratica è un altro conto, ed è leggermente più complicato, perchè necessita di un file temporaneo a cui appoggiarsi:</p>
<p><code>awk '!x[$0]++' filetarget.txt &gt; temp.txt &amp;&amp; mv -f temp.txt filetarget.txt</code></p>
<p>In questa maniera facciamo fare ad AWK il suo porco lavoro, poi sbattiamo tutto nel temp.txt, dopodichè facciamo la copia forzata sul file target. Et voilà :)</p>
<p>Ovviamente però, la soluzione è ancora più semplice. Infatti Bash ha una maledetta opzione per fare tutto ciò, e ce l'ha detta <a href="http://twitter.com/axsergi">@axsergi</a> (il compagno di merende con cui mi scambio tipsntricks vari, perchè siamo entrambi AUR packager per Arch Linux): basta infatti aggiornare una maledetta variabile d'ambiente che dice alla console proprio questo :D</p>
<p><code>export HISTCONTROL=ignoredups</code></p>
<p>Tuttavia la teoria spiegata <strong>è comunque valida</strong>: questo ragionamento fatto con AWK può applicarsi a qualunque file, e magari ricordare questo comando quando abbiamo bisogno di sfoltire un file troppo corposo che ci da fastidio su un server può risparmiarci un po' di grattacapi ;)</p>
