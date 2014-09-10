---
layout: post
status: publish
published: true
title: 'Open source: quando il closed incombe'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1863
wordpress_url: http://dottorblaster.it/?p=1863
date: '2012-10-13 17:22:28 +0200'
date_gmt: '2012-10-13 16:22:28 +0200'
categories:
- Open Source
tags:
- Twitter
- closed source
- gpl
- bsd
comments:
- id: 17977
  author: andrea zakunin
  author_email: zakunin@gmail.com
  author_url: http://profiles.google.com/zakunin
  date: '2012-10-13 17:39:00 +0200'
  date_gmt: '2012-10-13 16:39:00 +0200'
  content: "Ma scusa, la GPL non permette di modificare/utilizzare il codice solo
    se poi viene redistribuito con la stessa licenza? se si cambia la licenza, si
    infrange la GPL ergo...non si può fare.\n\nSi può, a mio parere, aggiungere nuove
    funzionalità al codice GPL dotandole di una licenza diversa, ma non cambiarla
    in toto...\n\nSe hai su github del codice GPL e poi ti gira e cambi licenza, tutti
    quelli che hanno forkato che dovrebbero fare? restituirti i sorgenti?\n\nNon sono
    un giurista ma, ad occhio, la GPL si \"attacca\" al software ed è questa la sua
    forza. "
- id: 17978
  author: Patryk Rzucidlo
  author_email: ''
  author_url: http://twitter.com/PTKDev
  date: '2012-10-13 17:51:00 +0200'
  date_gmt: '2012-10-13 16:51:00 +0200'
  content: |-
    Se ho un software 1.0 in GPL e io sono l'unico autore (o comunque tutti gli owners+contributors+patcher danno il consenso) e decido che con la 1.1 diventa closed (o cambia licenza) lo posso fare. La la versione 1.0 (e precedenti) rimangono GPL.

    Un ipotetico utente XXXX può prendere la 1.0 e dire: fanculo PTKDev, tu lo fai proprietario e io lo porto avanti in GPL. Ovviamente non può cambiare la licenza della 1.0 ma è costretto ad usare la GPL perchè non è l'autore ma un forker del progetto e si deve tenere per forza la GPL come licenza.

    La 1.0 rimane opensource sotto GPL e ci fai quello che vuoi
- id: 17979
  author: Matteo Pani
  author_email: andovais@gmail.com
  author_url: ''
  date: '2012-10-13 18:07:00 +0200'
  date_gmt: '2012-10-13 17:07:00 +0200'
  content: Bella analisi :)
- id: 17980
  author: andrea zakunin
  author_email: zakunin@gmail.com
  author_url: http://profiles.google.com/zakunin
  date: '2012-10-13 19:31:00 +0200'
  date_gmt: '2012-10-13 18:31:00 +0200'
  content: "Mh...non so, a me pare che nè l'autore nè nessun altro possano cambiare
    la licenza (almeno la GPL). Ci sono licenze che lo permettono (se non sbaglio
    la MIT), ma non mi pare che l'eventuale cambio di licenza sia previsto nella lettera
    della GPL.\n\nSe ho il core di un programma in GPL, potrò farci dei plug-in proprietari,
    ma non potrò prendere il codice del core e chiuderlo: oltre ad essere a mio avviso
    \"poco etico\" la cosa sembra contraria ai termini della GPL.\n\nDa wikipedia
    (per la v2):\n<blockquote>Secondo Richard Stallman, la modifica più importante
    di questa versione è la clausola da lui denominata \"Libertà o morte\". Tale clausola
    impone che,qualora ci siano restrizioni di qualsiasi tipo sulla libera \ndistribuzione
    del software nei termini indicati nella licenza, il \nsoftware non possa essere
    distribuito affatto</blockquote>\n\nRipeto, non sono un tecnico nè un informatico
    ma imho, se potessi chiudere un software con licenza GPL, la FSF non avrebbe senso
    di esistere."
- id: 17981
  author: Giovanni
  author_email: giovanni.cappellini@gmail.com
  author_url: http://www.quacos.com
  date: '2012-10-13 20:10:00 +0200'
  date_gmt: '2012-10-13 19:10:00 +0200'
  content: 'La GPL è una licenza "virale": il software che esiste grazie a software
    GPL può avere solo licenza GPL. Questo è stato sempre uno dei punti più criticati.'
- id: 17982
  author: LinuxBird
  author_email: ''
  author_url: http://twitter.com/LinuxBird
  date: '2012-10-13 21:20:00 +0200'
  date_gmt: '2012-10-13 20:20:00 +0200'
  content: 'Scusa Alessio, ma con tutto rispetto, salvo trovare cavilli legali o carenze
    particolari, la scienza delle licenze è esatte come quella matematica: è tutto
    scritto o puoi fare una cosa o non la puoi fare. Prima di scegliere una licenza
    o la governance di un progetto sono d''accordo che lo/gli sviluppatore/i possano
    farsi mille seghe mentali su quale scegliere, ma una volta varato il rilascio
    con annessa licenza conta solo "la legge". Detto ciò nessuno costringe nessun
    sviluppatore a rilasciare il proprio software come libero, ma se lo fa vuol dire
    che (almeno quel rilascio) non è più sua proprietà, ma è di tutti. Vorremmo che
    fosse chiaro questo prima di tutti le questioni BSD/GPL ecc. Se credi nel modello/filosofia
    del software libero il tuo software non è tuo, è di tutti. Punto. Non ci sono
    altre questioni, o credi nella condivisione della conoscenza o non ci credi. Se
    ci credi c''è tutta una serie di modelli di business per non morire di stenti
    mentre programmi software libero, se non ci credi puoi fare altro. Ma "software
    libero" e "io sono il l''autore e decido io" non esiste proprio.'
- id: 17983
  author: Andrea
  author_email: a@a.it
  author_url: ''
  date: '2012-10-14 00:49:00 +0200'
  date_gmt: '2012-10-13 23:49:00 +0200'
  content: 'Non vedo come "io sono l''autore e decido io" non possa essere compatibile
    con l''idea di software libero. Io credo nella condivisione della conoscenza,
    ma al tempo stesso ho una visione decisa (e magari anche "impopolare", o quanto
    meno che a primo avviso possa non piacere) riguardo il mio progetto. Non capisco
    perché un progetto open-source deve essere necessariamente community-based. Ci
    sono patches dalla comunità? Se rientrano nei miei piani vengono introdotte, altrimenti
    si rifiutano. E se l''autore vuole esprimere la sua visione può benissimo forkare
    partendo da un lavoro già fatto. '
- id: 17984
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-10-14 01:42:00 +0200'
  date_gmt: '2012-10-14 00:42:00 +0200'
  content: |-
    Concordo con @8cb777d04124436b98d8bf9620b11d03:disqus per tutta una serie di ragioni. Comunque forse hai frainteso il discorso, ovviamente un rilascio open è SEMPRE di proprietà di tutti. Che poi in una release successiva per motivi di stakeholding del codice, crescita del personale interno o pura stabilizzazione di un fattore innovativo si possa chiudere (poi magari riaprire), per me sta in piedissimo, tanto gli autori sono tutti d'accordo.


    "Il software è di tutti" è demagogia spicciola. Ubuntu è un'antica parola africana che significa "io sono ciò che sono per merito di ciò che siamo tutti", a questo va integrato "noi sviluppatori": non è possibile che all'interno di un progetto un utente conti quanto uno sviluppatore. Un utente è uno che _usa_, quindi si adegua. La forza del software libero è la facilità con la quale un utente può passare in maniera seamless al ruolo di developer e avere voce in capitolo. E a quel punto si, il software è di tutti, ma di tutti chi? Degli sviluppatori, cioè una community, cioè in maniera potenziale di tutti gli utenti. Ma finché un utente rimane utente, non riporta bug, non scrive patch, non partecipa con blueprint, per me rimane un individuo che può restare al suo ruolo (scusa la malvagità ma sono schietto, da developer): usare il mio prodotto e fare pippa sulle mie decisioni.
- id: 17985
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-10-14 01:46:00 +0200'
  date_gmt: '2012-10-14 00:46:00 +0200'
  content: |-
    Adesso è notte e ho voglia di andarmi a leggere Dragonlance: ti rispondo solo con questo link
    http://www.gnu.org/licenses/gpl-faq.it.html#Consider



    La FSF non ha il compito di dire agli sviluppatori cosa fare. Ha il compito di tutelare il rispetto delle norme sulla proprietà intellettuale, che è diverso. (Cioè, in soldoni, che quello che è GPL non venga sfruttato; rilicenziare è un altro cavolo)
- id: 17988
  author: Santiago
  author_email: keteremillpario@gmail.com
  author_url: http://anonimoconiglio.blogspot.com/
  date: '2012-10-14 11:09:00 +0200'
  date_gmt: '2012-10-14 10:09:00 +0200'
  content: "totalmente d'accordo con @twitter-304465506:disqus \n<blockquote><i>nessuno
    costringe nessun sviluppatore a rilasciare il proprio software come libero, ma
    se lo fa vuol dire che (almeno quel rilascio) non è più sua proprietà, ma è di
    tutti.</i></blockquote>\n\n\n\nL'approccio del rilasciare un software sotto GPL
    ma considerare ancora la cosa come \"mia\" è <b>opportunistico</b>. Purtroppo
    il panorama del software libero è pieno di persone che preferiscono chiamarlo
    \"open Source\" e scegliere la GPL per motivi opportunistici. Perché \"<b>conviene</b>\"
    come modalità di sviluppo. Ma poi si sentono \"limitati\" dalla stessa GPL. \n\n\nSe
    è vero che <i>la mia libertà finisce dove inizia quella dell'altro</i> (Kant,
    o Martin Luther King, vado a memoria), allora io non ho il diritto di togliere
    all'altro quello che prima avevo concesso (la libertà del software che gli avevo
    concesso). \n\n\nCerto, nessuno gli toglie la vecchia versione, ma in sostanza
    se io rilascio un software come GPL, attiro quindi persone ad usarlo e parteciparne,
    e poi cerco di rendere le prossime versione closed, allora in sostanza sto prendendo
    per il culo in partenza chi credeva che io appoggiassi il software libero.\n\n\nÈ
    questo è un parere etico che esula da una licenza. La licenza è \"legge\" e come
    tale può essere difettosa, tant'è che la GPL 3.0 copre i buchi della GPL 2.0 e
    così via. \n\n\nFortunatamente la GPL non ha precetti morali né regole etiche
    al suo interno, altrimenti sarebbe una bibbia. Quindi sì, uno <b>può</b> farlo,
    ma se lo fa poi non si lamenti se gli utenti gli danno dello stronzo. "
- id: 17989
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-10-14 11:26:00 +0200'
  date_gmt: '2012-10-14 10:26:00 +0200'
  content: |-
    Santiago, amico mio, c'è gente che col software ci mangia. Sono d'accordo che sia "da stronzi" una cosa del genere ma


    a) si può fare tecnicamente
    b) a volte la GPL SCONVIENE. I fanatici del free software questo dovrebbero capirlo. La GPL è una delle peggiori licenze copyleft mai scritte, restrittiva in una maniera assurda, non ti permette di fare alcunché se è un mashup con codice proprietario o licenze incompatibili, tant'è che la rosa del licensing ha partorito una serie di licenze molto più pragmatiche come la MIT, la LGPL, la AGPL (che usiamo per TweetYourMEP), altre ancora, che consentono di fare un po' di più quello che ti pare e -toh- guarda caso i software migliori sono sempre quelli sotto una licenza poco restrittiva (Linux, Android a licenza mista) o che nella storia del processo software hanno subito un'incubazione closed.


    Ma parliamo di incubazione e di "stronzi". Google ha mai rilasciato il codice di Android 3.0? Si, anni dopo, e la gente ha avuto sotto gli occhi che effettivamente quel "coso" faceva cagare. Nel frattempo però Android ha subito una fase di staging proprietario in cui sono confluite tutte le innovazioni di Google a livello di HIG, codice, form factor, framework. Quando Google poi ha rilasciato Android 4.0 sul GIT tutti a dire "oh ma che bravi oh che bello" (compreso me eh) quando due minuti prima davano a Google della fascista opportunista. Hanno visto in due secondi cosa era uscito da un periodo di incubazione del prodotto e hanno fatto subito i complimenti: NESSUNO però ha pensato di dover fare mea culpa e NESSUNO ha detto "oh ma allora 'sto periodo in cui Google ha lavorato da sola è servito a qualcosa". Sicuramente andando verso quel form factor la comunità l'avrebbe ucciso e stroncato. E invece.


    Ti ricordo in ogni caso che per rendere un software closed *OGNI* contributore deve essere d'accordo. E come dicevo più su, data la democratizzazione del processo software open source, e dato che chiunque può divenire sviluppatore, non c'è pericolo di "stronzaggine" da parte delle aziende (e infatti non succede mai).


    Diversamente, gli unici che nel loro piccolo si arrabbiano sono gli utenti, a cui non viene tolto nessun giocarello, ma frustrati dalla consapevolezza di non aver mai imparato a sviluppare e non aver mai contribuito al progetto e di conseguenza essere rimasti con un palmo di naso per quanto riguarda la voce in capitolo, hanno il coraggio di pontificare riguardo le scelte del team di sviluppo di qualcosa a cui non hanno mai messo mano. Questa è pazzia, questa è ipocrisia, questi sono gli Scilipoti del mondo del software, questa è Sparta.
- id: 17990
  author: Santiago
  author_email: keteremillpario@gmail.com
  author_url: http://anonimoconiglio.blogspot.com/
  date: '2012-10-14 12:57:00 +0200'
  date_gmt: '2012-10-14 11:57:00 +0200'
  content: "Attenzione lo so bene, e chiarisco che ho usato la parola \"stronzo\"
    perché è calzante per evidenziare che la critica che si riceve in questi casi
    è oltre la soglia della richiesta \"legale\".\n\nInfatti, riguardo ai tuoi punti:\na)
    hai ragione, tecnicamente si può\nb) io, da fanatico del software libero, capisco
    perfettamente che a volte la GPL è sconveniente. Ma non per me :)\n\nIl problema
    è un'altro: Se tu, azienda o sviluppatore <b>sapevi sin dall'inizio che la GPL
    era sconveniente per te, perché l'hai adottata?</b>\n\n\nTutto qui. Se la adotti,
    sapendo le conseguenze del caso, allora poi non ci si può lamentare. \n\n\n<blockquote><i>Diversamente,
    gli unici che nel loro piccolo si arrabbiano sono gli utenti, a cui non viene
    tolto nessun giocarello, ma frustrati dalla consapevolezza di non aver mai imparato
    a sviluppare e non aver mai contribuito al progetto e di conseguenza essere rimasti
    con un palmo di naso per quanto riguarda la voce in capitolo, hanno il coraggio
    di pontificare riguardo le scelte del team di sviluppo di qualcosa a cui non hanno
    mai messo mano. Questa è pazzia, questa è ipocrisia, questi sono gli Scilipoti
    del mondo del software, questa è Sparta.</i></blockquote>\n\n\n\nSecondo me questo
    è snobbistico, e parecchio eh :D \nMa al di là di ciò, pur non essendo d'accordo
    col paragonare l'utente a un bambino capriccioso, ti faccio notare che anche in
    quel caso la faccenda è prevedibile: \n\n\nSe io regalo un caramello a un bambino
    tutti i giorni e poi arriva il giorno in cui gli dico: non te la do più, mi becco
    dello stronzo. Comprensibile, visto che l'ho viziato.\n\n\nPatti chiari, amicizia
    lunga: Se adotti la GPL sai cosa ti aspetta. \n\n\nOra capiamo bene che in questo
    caso non si tratta di una caramella, ma di un diritto (puoi avere i sorgenti del
    mio software) che prima gli hai consegnato e poi cerchi di togliere. Il che rende
    l'incazzatura, secondo me, ancora più comprensibile.\n\n\nE se dovessi schierarmi
    verso lo sviluppatore che trova la GPL sconveniente ma la adotta lo stesso, o
    verso l'utente a cui da un giorno all'altro possono vietargli quello che prima
    usava perché sapeva che era libero, beh io mi schiero decisamente con/per il secondo. "
- id: 17991
  author: LinuxBird
  author_email: ''
  author_url: http://twitter.com/LinuxBird
  date: '2012-10-14 13:17:00 +0200'
  date_gmt: '2012-10-14 12:17:00 +0200'
  content: |-
    Attenzione, non confondere la licenza con la governance. La scelta su come portare avanti il progetto, con che politiche, è assolutamente in mano allo sviluppatore o al team di sviluppo, non si discute.
    Il nostro discorso riguarda la licenza: se decidi per il software libero non puoi vantare diritti su di esso una volta rilasciato. Non è closed source e open, una volta donato è di tutti. La discussione su Twitter è nata da questo aspetto.
- id: 17992
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-10-14 13:18:00 +0200'
  date_gmt: '2012-10-14 12:18:00 +0200'
  content: |-
    Che sia una carognata sono d'accordo (in buona parte, diciamo), tuttavia piuttosto che parlare di battaglie e scioperi della fame, io ti consiglio di leggerti la storia del Tacchino Induttivista: http://it.wikipedia.org/wiki/Tacchino_induttivista


    Le cose non rimangono sempre ferme allo status quo di chi crede che un valore sia un assoluto incontestabile. Ci sono anche esigenze, e a questo punto ho motivo di credere (da snob/snobbista quale mi reputi, perché è vero che lo sono) che se parli così è perché non hai mai provato a rapportarti con una community veramente open. Se ne fai una questione di licenza e diritti civili, allora è difficile che tu riesca a comprendere il vero spirito dell'open source, quello spirito puramente *tecnico* per cui Stallman ha scritto GCC e Eric Raymond si è spolmonato per anni.


    Hai mai provato a mandare una patch dentro GNOME che non rispetti i loro canoni? È inutile, ci sono dei project leader che hanno poteri immensi sui progetti; l'open source ci offre lo strumento del fork per dire "ok adesso mi vendico e ti faccio un c**o così", amichevole o meno che possa essere la tenzone. Grandissimi progetti sono sorti in questo modo (libusbx ad esempio), anche dalle ceneri open di progetti poi divenuti proprietari.


    Amico mio, io non dico che le compagnie siano sante quando chiudono. Anzi. Ma a volte sta proprio nel conoscere il nostro nemico la chiave di volta della battaglia, e nello sfruttarlo quando ci viene comodo: questo lo disse Sun Tzu, o Jim Morrison, non ricordo. Chiudere per un annetto il codice di un progetto e sondare il terreno con qualche release a porte chiuse, se poi in futuro il tutto viene riaperto, non è un grosso malus, anzi, probabilmente per questo commento ti arriverà una mail di notifica sul tuo telefono Android 4.0/4.1 nato dal closed e aperto successivamente. È un discorso pericoloso perché, sono d'accordo, non bisogna mai perdere di vista l'etica, ma se vuoi un prodotto di successo (o comunque coerente) a volte devi saper anche ricacciare qualche contributo indietro, se serve.


    Poi se il metro di paragone di una persona per la qualità di un software è se questo è libero o meno, io penso solo che sia un poraccio in tutta confidenza. Anche perché su questo punto c'abbiamo tutti la faccia nella porcheria: tutti a parlare di openness, e poi la gente installa Windows per giocare a Skyrim. Prima rimettiamo ogni tassello al suo posto.
- id: 17993
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-10-14 13:22:00 +0200'
  date_gmt: '2012-10-14 12:22:00 +0200'
  content: |-
    A quanto vedo continua ad andare di moda parlare di codice senza aver studiato manco Git eh :D
    La release è una release e riguarda una specifica versione. Nello specifico, i contributor sono autori e proprietari del diritto d'autore, e con la release successiva possono fare *quello che gli pare*. Vantare diritti mi sembra il minimo: l'ho scritto io, tu lo stai usando. Se non ti sta bene, forka o manda una pull request.


    Tanto per fare qualche nome, il progetto Debian si regge sul principio di do-ocracy.
- id: 17994
  author: LinuxBird
  author_email: ''
  author_url: http://twitter.com/LinuxBird
  date: '2012-10-14 13:28:00 +0200'
  date_gmt: '2012-10-14 12:28:00 +0200'
  content: |-
    I problemi non sono della GPL, ma della scelta della licenza in relazione al modello di business adottato.
    Se usi la GPL ma non adotti un modello di business adatto finisce che fai la fame (e prendi svolte drastiche preso dal panico). E' una questione di mentalità e pianificazione delle proprie attività.
- id: 17995
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-10-14 13:33:00 +0200'
  date_gmt: '2012-10-14 12:33:00 +0200'
  content: |-
    Ma io non parlo di svolte drastiche né di fatturati in calo.
    Semplicemente a volte è necessario attraversare un periodo di staging proprietario per veder crescere il proprio prodotto nella maniera giusta: la comunità non è sempre il bene, e a volte ci sono individui che è meglio non far intervenire nel ciclo di sviluppo.


    L'industria è piena di modelli mash, e in un modello mash corretto un layer proprietario concorrente ad un modello open oppure una transizione open-closed-open sono fattori che ti semplificano enormemente la situazione. Il punto è che vi ostinate a condurre una battaglia contro i mulini a vento quando a valle di tutto abbiamo una situazione win-win di cui non c'è assolutamente necessità di lamento.
- id: 17996
  author: Santiago
  author_email: keteremillpario@gmail.com
  author_url: http://anonimoconiglio.blogspot.com/
  date: '2012-10-14 13:43:00 +0200'
  date_gmt: '2012-10-14 12:43:00 +0200'
  content: "Aspetta, su molte cose siamo d'accordo, non perdiamo il punto:\n\n<blockquote>Se
    ne fai una questione di licenza e diritti civili, allora è difficile che tu riesca
    a comprendere il vero spirito dell'open source, quello spirito puramente *tecnico*
    per cui Stallman ha scritto GCC e Eric Raymond si è spolmonato per anni.</blockquote>\n\n\nNon
    capisco cosa tu intenda per \"spirito tecnico\", ma tornando al punto: se come
    dicevi prima la comunità di sviluppatori - ogni contributore - decide che la prossima
    versione esce con un'altra licenza, non ci trovo niente di male. \n\n\nQuello
    che voglio dire è che l'incazzatura dell'utente, se pur bambino, viziato, illuso,
    ecc, è prevedibile e comprensibile. \n\n\nInfatti per evitare la cosa ci si poteva
    pensare prima e non adottare la licenza libera. \n\n\nNel caso Google ricordo
    che l'azienda sosteneva che fosse open, con tanto di licenza aperta, ma non rilasciava
    i sorgenti. Mi pare diverso, per quanto mi riguarda ho sempre criticato questo
    comportamento. Ricordo che avevo scritto un post in cui facevo notare che la confusione
    era tale che il Disinformatico, famoso per controllare fino al limite tutto ciò
    che scrive, definiva Android un sistema <a href=\"http://attivissimo.blogspot.it/2010/08/android-successo-e-cavalli-di-troia.html\"
    rel=\"nofollow\">\"basato su GNU/Linux e quasi interamente libero e open source\"</a>.
    È ancora lì e non ha mica cambiato il post :D\n\n\n---------------------------------\n\n\nComunque
    non ho detto che tu sia snob, ho detto che quel paragrafo contiene un alto tasso
    di snobbismo. Se avessi detto che tu fossi una persona snob starei dandoti un
    valore \"assoluto\", io ho attribuito la qualità al pensiero, che come tale può
    sempre cambiare :)\n\n\nQuesto non per convincerti che puoi cambiare parere, ma
    per sottolineare la differenza tra la critica personale e la critica alle argomentazioni.
    Lo \"stronzo\" che io attribuisco spesso a Canonical non è riferito alle persone
    ma al comportamento dell'azienda nel suo insieme. Pareri personali comunque.\n\n\nPS:
    ho un cellulare vecchio con symbian che se te lo faccio vedere mi sa che ti viene
    un colpo. :D\n"
- id: 17997
  author: LinuxBird
  author_email: ''
  author_url: http://twitter.com/LinuxBird
  date: '2012-10-14 13:47:00 +0200'
  date_gmt: '2012-10-14 12:47:00 +0200'
  content: |-
    Quello che hai appena scritto non contraddice minimamente quello che abbiamo affermato infatti.
    Serve studiare codice per fare un'analisi di questo genere?
- id: 17998
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-10-14 13:51:00 +0200'
  date_gmt: '2012-10-14 12:51:00 +0200'
  content: |-
    <blockquote>se come dicevi prima la comunità di sviluppatori - ogni contributore - decide che la prossima versione esce con un'altra licenza, non ci trovo niente di male.&lt;/blockquote


    E infatti è necessario altrimenti in tribunale vince la GPL. (o comunque la licenza che c&#039;era prima) :P


    Ho capito che in fin dei conti siamo d&#039;accordo, a parte questa cosa degli utenti. Il punto però è che gli utenti usano, gli sviluppatori sviluppano (e il coccodrillo come fa?) - che per carità, ci può anche stare beccarsi lo sfogo dell&#039;utente che stava per diventare contributor e invece tràcchete, comunque come ho detto a @twitter-304465506:disqus io non sto dicendo che sono favorevole al cambio di licenza in proprietaria. Sto dicendo che a volte è più che utile attraversare una *fase* proprietaria dove l&#039;azienda possa prendersi qualche libertà in più, dato che è l&#039;azienda. Zacchiroli fa reggere Debian sul principio della do-ocracy, non vedo perché anche le aziende non possano fare la stessa cosa :P


    Volevo scrivere un&#039;altra cosa ma non me la ricordo più. E cambia telefono!
- id: 17999
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-10-14 13:54:00 +0200'
  date_gmt: '2012-10-14 12:54:00 +0200'
  content: |-
    Mi riferisco a:


    <blockquote>una volta donato è di tutti</blockquote>


    Non è esattamente di tutti, diciamo che il codice è di tutti ma le decisioni continuano a prenderle gli sviluppatori. Ribadisco, la forza dell'open è che potenzialmente chiunque può entrare nell'organico del development. :)

    Non serve studiare codice, ma quantomeno per fare un'analisi incentrata sul pragmatismo e non sull'attivismo politico secondo me bisogna anche un po' lavorare in aziende in ottica open.
- id: 18000
  author: Santiago
  author_email: keteremillpario@gmail.com
  author_url: http://anonimoconiglio.blogspot.com/
  date: '2012-10-14 14:02:00 +0200'
  date_gmt: '2012-10-14 13:02:00 +0200'
  content: "Si attenzione, non ci trovo niente di male appunto a livello \"legale\".
    \n\n\nCioe alla fine <b>l'utente</b> è una persona che usando il tuo software
    compie una <b>scelta</b>. \n\n\nSe io trovo un software sotto licenza GPL lo scelgo
    al posto di uno con licenza proprietaria. Poi metti caso che un bel giorno incontro
    un bug e glielo segnalo, o in un certo senso do il mio feedback. Se all'indomani
    coloro che rilasciavano il programma decidono di farlo diventare closed, mi viene
    senz'altro di mandarli a quel paese. \n\n\nDopodiché mi chiedo, ma allora perché
    hai rilasciato tutto inizialmente con GPL? perché volevi che ti segnalassi i bug,
    volevi il contributo di una comunità che altrimenti non avresti avuto. Un approccio
    opportunistico come dicevo prima.\n\n\nInsomma è una questione di \"tradimento\"
    di un contratto che ovviamente non può essere esplicitato in una licenza. Di un
    contratto che non c'è.\n\n\nChe poi, a me piace ancora il mio nokia con Symbian.
    Symbian spacca i culi a Android e a iOS. Non c'è paragone... "
- id: 18001
  author: LinuxBird
  author_email: ''
  author_url: http://twitter.com/LinuxBird
  date: '2012-10-14 14:04:00 +0200'
  date_gmt: '2012-10-14 13:04:00 +0200'
  content: |-
    "Una volta donato è di tutti" significa che se hai rilasciato una versione di software con la GPL dopo non puoi retroattivamente cambiarla.
    Quello di cui parli tu è la Governance, ovvero come portare avanti lo sviluppo di un progetto, ed è ovviamente una scelta dell'autore del software e del suo team. Possono coinvolgere o meno la comunità, gestire come vogliono le fasi prima del rilascio e abbandonare sviluppo e supporto quando pare a loro... Nessuno lo ha mai messo in discussione.
- id: 18002
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-10-14 14:13:00 +0200'
  date_gmt: '2012-10-14 13:13:00 +0200'
  content: "Quella dei bugreport è effettivamente una situazione borderline. Ci devo
    pensare :P \n\n\n(Android rulla e basta)"
- id: 18003
  author: Franco Solerio
  author_email: ''
  author_url: http://twitter.com/dokfranco
  date: '2012-10-14 14:49:00 +0200'
  date_gmt: '2012-10-14 13:49:00 +0200'
  content: Bello spunto! A occhio direi che un bugreport non costituisce proprietà
    intellettuale, mentre un bugfix, se incluso poi nella release branch lo è.
- id: 18004
  author: Franco Solerio
  author_email: ''
  author_url: http://twitter.com/dokfranco
  date: '2012-10-14 14:53:00 +0200'
  date_gmt: '2012-10-14 13:53:00 +0200'
  content: "Rilasciato non significa donato. Si fa una gran confusione tra proprietà
    intellettuale e diritti di utilizzo.\n\n\nCredo la risposta a tutte le questioni
    si ritrovi nella domanda posta a preambolo dell'articolo: \"se io cambiassi la
    licenza (dalla GPL) al MIO software, sarebbe legale?\"\nLa GPL è una Licenza,
    quindi un contratto che garantisce a chi RICEVE il software dei diritti, e ne
    sancisce dei doveri. Ne deriva che l'autore (proprietario) del codice rilasciando
    con GPL concede dei diritti a chi scarica il software, ma non rinuncia alla sua
    proprietà.\nNel preambolo della GPL è molto chiaro: gli sviluppatori e autori
    che usano la GPL proteggono i tuoi diritti in due passi:\n1) Ne asseriscono la
    proprietà intellettuale (il codice è mio)\n2) Ti offrono il diritto legale di
    copiarlo, distribuirlo e modificarlo (puoi farne quel che vuoi)\n\n\nNulla quindi
    impedisce lo sviluppatore originario, che è rimasto proprietario, di continuare
    lo sviluppo, preparare una nuova versione, e distribuirlo con una licenza diversa.\n\n\nBen
    diversa è la questione, e credo qui sia il punto importante, se lo sviluppatore
    originario nella nuova versione include delle modifiche proposte da uno o più
    sviluppatori terzi che hanno scaricato e modificato la versione originariamente
    distribuita come GPL. In questo caso il problema non è la GPL, ma di nuovo la
    proprietà intellettuale che non è più unicamente nelle mani dello sviluppatore
    originario, in quanto alcune parti di codice sono di proprietà di chi ha fatto
    le modifiche.\n\n\nQuesto diventa immensamente più complicato nei progetti sviluppati
    da una community complessa. C'è talmente tanto codice scritto da talmente tante
    persone che per cambiare licenza occorrerebbe raccogliere il permesso da tutti
    quelli che hanno scritto anche solo una riga di quel codice, rendendo di fatto
    l'operazione impossibile. "
- id: 18005
  author: Stefanauss
  author_email: stefanauss@gmail.com
  author_url: ''
  date: '2012-10-14 22:07:00 +0200'
  date_gmt: '2012-10-14 21:07:00 +0200'
  content: |-
    <blockquote>Se io trovo un software sotto licenza GPL <b>lo scelgo</b> al posto di uno con licenza proprietaria.</blockquote>

    <blockquote>Che poi, a me piace ancora il mio <b>nokia con Symbian</b>. Symbian spacca i culi a Android e a iOS.</blockquote>

    EX-PLAIN! EX-PLAIN. (cit.)
- id: 18006
  author: Santiago
  author_email: keteremillpario@gmail.com
  author_url: http://anonimoconiglio.blogspot.com/
  date: '2012-10-14 23:05:00 +0200'
  date_gmt: '2012-10-14 22:05:00 +0200'
  content: |-
    Pensavo che fosse abbastanza chiaro che la frase su Symbian e su Nokia era ironica!
    Un po' come quella di @dottorblaster cuando diceva che questa è Sparta. Ora mi viene il dubbio che lui fosse serio :D
- id: 18007
  author: andrea zakunin
  author_email: zakunin@gmail.com
  author_url: http://profiles.google.com/zakunin
  date: '2012-10-16 12:10:00 +0200'
  date_gmt: '2012-10-16 11:10:00 +0200'
  content: urka dragonlance! ho letto la saga dei draghi e quella dei gemelli qualche
    cosa come mille anni fa :) grazie per i link!
- id: 18009
  author: Santiago
  author_email: keteremillpario@gmail.com
  author_url: http://anonimoconiglio.blogspot.com/
  date: '2012-10-19 09:18:00 +0200'
  date_gmt: '2012-10-19 08:18:00 +0200'
  content: "<blockquote>Semplicemente a volte è necessario attraversare un periodo
    di staging proprietario</blockquote>\n\n\nCome questo, no?\nhttp://techcrunch.com/2012/10/18/canonical-ceo-mark-shuttleworth-tires-of-critics-moves-key-ubuntu-developments-out-of-public-eye/\n\n\n\n=P
    \n #trollingDottorBlaster \n\n\nSe interessa su G+ ne stiamo parlando qui https://plus.google.com/b/100466170970927492776/"
- id: 18011
  author: dagvin
  author_email: xyz666999@yahoo.it
  author_url: ''
  date: '2012-10-21 13:45:00 +0200'
  date_gmt: '2012-10-21 12:45:00 +0200'
  content: Vorrei ricordare nel 2000 (mi pare) il caso di Interbase 6.0, software
    closed, poi rilasciato in open source alla comunità e subito dopo richiuso e oggi
    ancora disponibile come prodotto closed nella versione XE3,ma dal quale codice
    si sviluppo firebirdsql. Voglio ricordare ancora il caso nessus, che divenne software
    closed.
---
<p>Oggi <strong>Patryk</strong> su Twitter ha fatto una <a href="https://twitter.com/PTKDev/status/257093849091022849">domanda</a> abbastanza intelligente: "ma se io se cambiassi licenza (dalla GPL) al mio software nella prossima versione, sarebbe legale?" - ora, a prescindere da tutto, la domanda non è per niente banale, tan'è che la <strong>General Public License</strong> in un punto ammette proprio che sia possibile cambiare licenza, a patto però che tutti i contributori del progetto siano consenzienti, per ovvie ragioni di proprietà del diritto d'autore e della <strong>proprietà intellettuale</strong>. Al che è sorto un <a href="https://twitter.com/AleLorenzi/status/257121512736321536">bel discorso</a> anche con altri; è giusto infatti che da una versione all'altra un software diventi proprietario?</p>
<p><strong>tl;dr</strong>: per me si. Ma andiamo per gradi.</p>
<h3>Libertà</h3>
<p>Come diceva <strong>Voltaire</strong>, la libertà è tale finché non danneggia quella degli altri; ebbene, a prescindere dai <strong>contributor</strong> potenziali di un progetto <strong>open source</strong>, abbiamo da una parte gli sviluppatori e dall'altra gli utenti divisi da un gap abbastanza profondo: gli sviluppatori a volte sono costretti a prendere delle vie che nemmeno a loro piacciono, eppure debbono farlo. E se per qualche motivo al proprietario del diritto d'autore non potesse essere permesso di cambiare la licenza in tempi successivi alla prima versione, questo sarebbe <strong>assolutamente restrittivo</strong> anche nei confronti dell'artefice del software. E se la libertà è tale finché non danneggia quella degli altri, chissà cosa dovrei pensare di qualcosa che danneggia in primis la mia, di <strong>libertà</strong>.</p>
<h3>In vino veritas</h3>
<p>C'è poi il punto fondamentale della "verità del vino", ossia che in alcune occasioni - diciamocelo - mantenere un <strong>layer di sviluppo in ottica proprietaria</strong> può fare la fortuna di alcuni progetti, anche con successivo rilascio di codice. L'esempio più lampante è quello di una compagnia che vuole imprimere al suo prodotto un <strong>form factor</strong> caratteristico che magari la comunità distorcerebbe - senza per questo essere nazisti come mi diceva <a href="http://voices.telecomitaliahub.it/author/dep1050">Rosario</a> ieri sera mentre eravamo seduti davanti al nostro lauto aperitivo.</p>
<p><img class="aligncenter" title="Brain" src="http://farm5.staticflickr.com/4106/5173498203_f533c2897f.jpg" alt="Brain" width="500" height="333" /></p>
<p>In fondo a volte la comunità è come una donna: nonostante tutto, ci sono casi in cui cerca di cambiare tutto nel <strong>software</strong>, e quando ci riesce poi dice che non gli piace più. Mi scuso con le donne per il riferimento sessista, ma dovete ammettere che ci stava. :)</p>
<p>In alcuni casi quindi il non-rilascio del codice e il mantenimento del tutto ad uno status quo declinato in una licenza proprietaria non è necessariamente un male: in fondo ad un livello successivo l'azienda, o chi per essa, può sempre decidere di riaprire lo sviluppo anche rendendolo <strong>community-based</strong> e svincolando di fatto sé stessa da tutta l'attività di licensing.</p>
<h3>Everything but licenses (but use GPL)</h3>
<p>Questo paragrafo lo intitolo riprendendo una celebre frase di <strong>Matt Mullenweg</strong>, il creatore di WordPress e CEO di Automattic. Sul palco di non mi ricordo quale <strong>WordCamp</strong>, alla faccia del fact-checking, disse: "Open source is everything but the license (but use GPL)". Questo significa che tutta la nostra attività di sviluppo in ambito <strong>open source</strong> dipende da una serie di fattori che dopo un rapido controllo sono effettivamente verificabili come aventi poco o niente a che fare con una licenza software: d'altronde le licenze copyleft sono state create per fronteggiare i colossi e le dotcom dei miei stivali che già dagli anni '80 scorrazzavano senza timore per la Silicon Valley uccidendo l'innovazione libera sfruttando una serie di cavilli burocratici per togliere le licenze d'uso ai concorrenti. Qualcosa di molto vicino al patent trolling di oggi.</p>
<p>Quindi, la conclusione è: non state a guardare il pezzo di carta. Programmate liberi, distribuite, moltiplicate il software come i pani e i pesci. Ma possibilmente, rendetelo <strong>open source</strong>.</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/jdhancock/5173498203/">JD Hancock</a></em></p>
