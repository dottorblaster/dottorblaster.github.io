---
layout: post
status: publish
published: true
title: "Una nuova tastiera: ovvero come ho costruito la mia tastiera finale" 
date: 2025-01-26 19:17:55 +0100
categories: 
- Tech
tags: 
- tastiera
- tastiera meccanica
- thock
- gazzew boba linear
- tofu60
---

Sono sempre stato appassionato di hardware strani. In particolar modo, una tunnel in cui ho deciso di infilarmi alcuni anni fa è quello delle tastiere meccaniche[^1]. Al che, come primo acquisto ho deciso di buttarmi su qualcosa di precostruito che mi ha servito, devo dire, molto bene sino ad oggi.

A Natale però ho deciso di farmi un piccolo regalo extra, grazie anche allo stimolo di [Agnese](http://www.killbilla.it/) che mi ha regalato dei keycap nuovi (che avevo già deciso di destinare a questo piccolo progetto): costruirmi una tastiera da zero, con pezzi completamente selezionati da me, puntando ad avere un sound in stile "THOCK" quando vengono premuti i tasti. Facendomi un giro su vari siti e soprattutto ascoltando fino alla noia sound test su YouTube, sfruttando anche vari appunti in passato ho deciso di procedere con questo setup:

- Case: **Tofu60 Redux**, meteorite gray, in alluminio anodizzato;
- PCB: in realtà ho preso un kit, quindi il PCB è arrivato incluso con il case Tofu60. Un generico **60% ANSI hotswap**[^2], con layout WK;
- Foam mod[^3]: per forza. Il kit della Tofu60 arriva con due strati di foam, uno da mettere tra il PCB e la switch board, l'altro da infilare direttamente a contatto con il case per farlo suonare meglio
- Weight bar: presente. Ovvero, una barra di ottone da inserire all'interno del case per farlo pesare un po' di più e avere una sensazione di solidità maggiore;
- Switch: **Gazzew Boba Linear Thock**, prelubrificati;
- Keycap: **SOLIDEE 135 bianchi**, con l'alfabeto **hiragana** riportato a lato, regalo di Agnese.

### L'arrivo
La sfida maggiore è stata reperire tutti i pezzi: il case/kit Tofu60 si trova abbastanza facilmente, i keycap sono stati ordinati su un noto sito di ecommerce, mentre per gli switch ho dovuto impegnarmi un po' di più: oltre a venire oggettivamente un rene rispetto a degli switch per delle tasche più contenute, ho scoperto che i Boba Linear sono rari come il santo Graal, motivo per cui ho dovuto prenderli da un sito terribile, che non nominerò, ma che ha affidato la sua logistica a UPS.

![Close-up della confezione dei Boba Linear](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/new-keeb/2025-01-26_18-38-04_673.jpeg)

Non lo sapevo, ma **UPS ha il peggior servizio di notifica esistente al mondo**: una volta lasciato il suono americano, non ho più avuto notizie del mio pacco finché non mi sono trovato un bellissimo avviso di giacenza una volta tornato dal mio viaggetto a Londra con gli amici, scoprendo contestualmente che:

- Il tentativo di consegna era avvenuto in un giorno assolutamente a caso senza che io ne sapessi niente, mentre non c'ero, senza una telefonatina né niente
- Mi spettava anche di pagare più di un paio di kebab alla dogana di Stato

Siccome so che ve lo state chiedendo: oggettivamente sono gli switch migliori che abbia mai sentito e su cui abbia digitato. Nonostante questo ho intenzione di pagare a peso d'oro, la prossima volta, chiunque mi possa risparmiare la quasi-mezza-giornata che ho speso all'ufficio postale tentando di ritirare il mio pacco in giacenza, godendomi una assolutamente innecessaria dose di interazione col mondo circostante e con la fauna locale.

![La weight bar infilata dentro il case](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/new-keeb/2025-01-24_15-44-21_690.jpeg)

### Il montaggio
A posteriori, devo dire che il montaggio non mi ha preso troppo tempo, e **pensavo molto peggio**. Lì per lì, tuttavia, ci sono stati dei momenti in cui ho detto "adesso appendo tutto e vado a farmi un giro" da quanto ero frustrato. Il motivo di questa frustrazione è che il kit di suo arriva **senza un vero set di istruzioni**. Alla seconda build guide che guardavo su YouTube ho anche capito un po' come funzionava tutto il giro, e sono andato a riguardare la pagina del kit stesso su KBDFans, dove c'è in realtà un breakdown abbastanza preciso delle parti e di come si combinano tra di loro.

![PCB, foam e plate](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/new-keeb/2025-01-24_15-44-03_420.jpeg)

Tra una build guide e l'altra sono più o meno riuscito a capire per conto mio cosa fare e cosa non fare, con somma soddisfazione mia che con le cose "fisiche e meccaniche" sono sempre stato una grandissima frana, e di mio padre a cui mandavo le foto in realtime per provargli che suo figlio non è un imbranato del cazzo quando si tratta di tenere un cacciavite in mano[^4].

![Sua maestà il PCB](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/new-keeb/2025-01-24_16-55-11_095.jpeg)

Il momento peggiore per quanto riguarda il quantitativo di frustrazione è stato il montaggio degli **stabilizzatori**: senza nessun tipo di guida ho dovuto imparare a montare uno stabilizzatore screw-in per poi agganciarlo al PCB in maniera sicura e avvitarlo successivamente. Non è sicuramente scienza missilistica (anzi) ma devo dire che prima di capire dove infilare cosa ci ho messo svariati minuti se non decine di minuti. Se è una cosa che non hai mai fatto in vita tua, sicuramente avere in mano uno stabilizzatore smontato intimidisce un po', almeno per me. L'unico metodo che ha funzionato nel farmi capire, infine, come muovermi, è stato [questo post di (santi subito) Keyboard University](https://www.keyboard.university/guides/using-screw-in-stabilizers-7nxj6).

Fortunatamente una volta scollinata la fase degli stabilizzatori il resto è stato abbastanza tranquillo: montare il PCB completo di stabilizzanti dentro il case, applicare la foam mod, applicare la piastra per gli switch sopra, agganciare gli switch e completare l'opera con i keycap. Prima che me ne fossi accorto, avevo montato la mia tastiera!

![La tastiera mezza montata, con qualche switch e qualche keycap](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/new-keeb/2025-01-24_17-54-09_287.jpeg)

Ovviamente con qualche sbavatura però: ho scoperto infatti a mie spese che conviene fare un test degli switch, altrimenti si rischia di doverli rimpiazzare; personalmente non ho trovato nessun modo di distinguere tra uno switch i cui piedini sono infilati a regola d'arte e uno switch dove semplicemente montando il pezzo nel suo alloggiamento e spingendo, uno dei piedini è andato a farsi benedire piegandosi come un panetto di burro al sole.

![Tastiera completamente montata, senza RGB, a cavo scollegato](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/new-keeb/2025-01-24_18-07-06_083.jpeg)

È stato per questo motivo che ho dovuto rimpiazzare, se non sbaglio, sei switch. Meno male che la tastiera ha un layout 60% e avevo ordinato il pacco da 90.

![La tastiera completamente montata e in funzione](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/new-keeb/2025-01-26_18-33-14_583.jpeg)

Sono ormai un paio di giorni che la sto usando, e ovviamente rispetto a una precostruita c'è un abisso, non tanto per quanto riguarda la qualità, ma per quanto riguarda la cura che ho messo nel selezionare ogni componente (PCB a parte: la prossima sfida è quella di saldarmelo da me). Devo dire che una bella porzione di soddisfazione deriva anche dall'aver visto realizzare e crescere sotto i miei occhi questo progettino che era in pigra gestazione da circa quattro anni, e dall'aver visto realizzarsi come esatta ogni mia supposizione.

O forse dovrei dire... "quasi ogni": la build originale che avevo in mente era con i **Boba U4T**, ma alla fine sono andato all-in sulla nuova serie Linear, che quando ho ideato questa build (nella notte dei tempi) non era ancora sul mercato.

Il problema più grande ora è che non riesco a smettere di pensare a che altro tipo di build potrei mettere in piedi, una volta superata la paura del mio primo montaggio da zero... quindi che dire, alla prossima build :-D

[^1]: Devo dire che comunque è uno dei tunnel meno strani riguardo l'hardware. Per esempio potrei parlarvi per ore della mia fissa per il Flipper Zero.

[^2]: Ovvero un PCB dove gli switch si possono scambiare. Non ne ho mai visto uno che non fosse hotswap, sembra che abbiano conquistato il mercato negli ultimi anni.

[^3]: Un foglio di polietilene messo di solito tra il PCB e la board dove si infilano gli switch. Serve ad ottimizzare l'acustica della tastiera.

[^4]: Tema che ho già ampiamente sviscerato in terapia, quindi nonostante tutto penso di averlo fatto in maniera assolutamente sana e senza urlare "I'M THE ELDEST BOY!" ([cit.](https://www.youtube.com/watch?v=es17PtDeHRU)[^5])

[^5]: Occhio se aprite il video che è uno spoiler del finale di una delle mie serie preferite di sempre.
