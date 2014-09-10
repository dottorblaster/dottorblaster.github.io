---
layout: post
status: publish
published: true
title: Cinque falsi miti su Arch Linux
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1556
wordpress_url: http://dottorblaster.it/?p=1556
date: '2012-08-27 10:00:16 +0200'
date_gmt: '2012-08-27 09:00:16 +0200'
categories:
- Linux
tags:
- Arch
- Arch Linux
- distro
- development
comments:
- id: 17848
  author: drake762001
  author_email: drake762001@gmail.com
  author_url: ''
  date: '2012-08-27 11:02:00 +0200'
  date_gmt: '2012-08-27 10:02:00 +0200'
  content: |-
    In parte sono d'accordo, ma in parte meno. Mi è capitato in passato che un upgrade creasse problemi (una volta mi sono ritrovato senza rete). Nulla che non si potesse sistemare, ma se il pc deve essere sempre funzionante al 100% in ogni momento, non la consiglierei. Probabilmente mi sono perso qualche info di pacman che mi avvisava del problema, ma se si aggiornarno molti pacchetti (e sai che basta non far il pacman -Syu per un po' che la lista si allunga) il fiume di output a video è lungo. Però è così che deve essere arch, la sua semplicità e il fatto di essere rolling al quadrato è la controparte (succulenta) di questo. Non ci si deve lamentare (vabbè ho visto gente fare le stesse lamentele e scoprire che avevano installato debian-sid).
    Sul fatto che avere software iper-aggiornato sia più sicuro ... anche qui dissento un po'. Recentemente ho sbattuto la testa e mi sono reso conto della differenza tra un pacchetto in debian (stable) e su ubuntu. Quello di debian era più vecchio ma perfettamente funzionante e integrato, quello su ubuntu (12.04, repo ufficiali) no.
    Il software iper aggiornato ti da un mare di nuove features ma non è detto che vada meglio o sia più sicuro. Ma anche questo per me è uno degli aspetti peculiari di arch, non sono i software a doverci impaurire se sono troppo "poco rodati" ma il core del sistema.
    Comunque, per coma la vedo io, Arch è fantastica, veloce, ipeaggiornata, istruttiva al massimo e perfetta per un uso domestico. Per lavoro (se non si ha un pc di backup sempre pronto) no, una svista (dell'utente) su un pacman -Syu e puoi rimanere in braghe di tela. Ma questo succede veramente di rado.
- id: 17849
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-27 11:24:00 +0200'
  date_gmt: '2012-08-27 10:24:00 +0200'
  content: |-
    cat /var/log/pacman.log
    E improvvisamente gli aggiornamenti diventano molto più edibili anche a fronte delle modifiche :P Se ti va di stare appresso al tuo sistema, anche in produzione Arch è un sistema eccellente. Non sono mai stato lasciato a piedi. Al contrario, se hai bisogno di una cosa "punta e clicca", ovviamente non la usi ;)


    Poi, per il fatto del rolling release, io mi sono ritrovato senza rete per colpa di un bug upstream al kernel. Ma siccome è successo una volta in anni e anni, non stigmatizzo nessuno: downgrade e passa la paura ;)
- id: 17850
  author: Valantin
  author_email: ''
  author_url: http://twitter.com/valantin89
  date: '2012-08-27 11:52:00 +0200'
  date_gmt: '2012-08-27 10:52:00 +0200'
  content: |-
    sul punto riguardante gli utenti avrei qualcosa da ridire...
    si molti utenti archlinux fà parte di un gruppo di persone compatto, che ama la propria distribuzione e ammette quado ci sono i suoi problemi, aiuta il nuovo utente se pone la domanda come si deve, (hi non ha mai trollato qualche noob su un forum per una cazzata detta? solo per farsi 2 risate in compagnia?) ma c'è una cerchia di fanboysmo che esce fuori dal coro se si và a guardare il forum che rovina tutta la comunità, se un utente nuovo chiede un qualcosa c'è chi lo trolla e poi aiuta e chi è solo capace a trollare perchè non ha le competenze di aiutare, se non sei capace di autare evita di postare.....
    Quando qualcuno pone dubbi su come viene fatta una cosa, su come potrebbe essere meglio farla o semplicemente critica una scelta con un parere personale solo per vedere se altri la pensano nella stessa maniera arriva il fanboy di turno che dice "meglio così, meno noob per le scatole, non vi vogliamo, vatti a installare ubuntu se non sei capace di patchare il kernel(vabbè questa è per cazzeggio)"
    Se l'obiettivo di una distribuzione è quello di allontanare il nuovo utente che vuole imparare ma ha bisogno di una spinta, che magari un giorno appassionato grazie alla comunità decide di contribuire, il mio giudizio è che tale distribuzione non ha senso di esistere....
    Se un utente critica i nuovi script di installazione affermando che non sono KISS e che è impossibile usarli perchè la documentazione fà ridere i polli, non puoi dirgli di andarsene a cacare perchè gli script sono una manna dal celo (che poi quasi nessuno di quelli che rispondeva a mio parere avevo provato ad usarli in accoppiata alla documentazione)...
    la risposta che si dovrebbe avere da una comunità è: " guarda attualmente ci manca gente che contribuisce, ci dobbiamo accontentare, per installare con quegli script devi fare questo questo e quest'altro."
    più utenti vuol dire più potenziali contributori, visto che servono perchè cacciarli?

    Ovviamente liberi di non essere del mio parere, ma io arch l'ho utilizzata per almeno 3 anni, e queste situazioni le ho viste tante volte, semplicemente ho capito che ArchLinux non fà per me, non posso perdere troppo tempo per avere un sistema funzionante anche quando devo aggiornare, quindi son semplicemente tornato ad utilizzare altro....
- id: 17851
  author: Vladimir
  author_email: carlo.mazzanti@gmail.com
  author_url: ''
  date: '2012-08-27 12:06:00 +0200'
  date_gmt: '2012-08-27 11:06:00 +0200'
  content: |-
    "Quello che amo della comunità di Arch Linux, allo stesso tempo, è quel latente senso di MIT anni ’70 per cui se dici una cavolata, nel giro di trenta secondi lo sapranno tutti (stile condominio con comari annesse) – e comincerà a breve una serie di battute sarcastiche nei tuoi confronti. Niente di cui lamentarsi riguardo la cattiveria comunque: di solito sono prese in giro bonarie di chi si diverte a ostentare un po’ la sua superiorità nei termini della questione che viene discussa sul momento".

    "In coda, un monito: se un utente Arch Linux – specialmente di quelli della vecchia guardia – sta dicendo che avete torto durante un dibattito su Linux, di solito è bene rivedere le proprie posizioni. Perché state effettivamente, al 90%, avendo torto; e se continuate a dare addosso a questo genere di persone, che sono abituate a dimostrare che quello che dicono è vero coi fatti, è probabile che vi sbugiardino su tutta la linea con una serie di prove schiaccianti. Alla faccia della spocchia: abbiamo solo sempre ragione :D"

    Ecco questo è il tipo di atteggiamento che ho sempre detestato nel mondo Linux: fare a gara a chi ce l'ha più lungo, ostentare la propria (vera o presunta) superiorità. Spesso nei forum si sviluppano liti astiose e inutilmente polemiche proprio per questa "spocchia". Con risultati deprimenti: liti feroci, utenti inesperti che abbandonano, eccetera. Essere pochi (1,5%) e anche inutilmente litigiosi è il massimo della sfiga.

    Sul resto del tuo articolo concordo: si sentono molte cose inesatte e approssimative sia su Arch che su tante altre distro.
- id: 17852
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-27 12:06:00 +0200'
  date_gmt: '2012-08-27 11:06:00 +0200'
  content: |-
    È vero che la board è diventata meno di qualità rispetto a prima, ma è anche colpa di un giro di utenti aumentato e di tantissimi altri fattori. Nel valutare una community lanciare critiche lapidarie in maniera seria è quasi impossibile :)


    &gt; Se l'obiettivo di una distribuzione è quello di allontanare il nuovo utente che vuole imparare ma ha bisogno di una spinta


    Giammai, direi più che altro che se l'utente che ha bisogno di una spinta è molto pigro e svogliato (dati i toni di certe questioni), allora magari è meglio che quella spinta non gli venga data, pena ritrovarselo un giorno a distribuire pane e cazzate come ho detto nel mio primo paragrafo. Sai che ci sono utenti che hanno adottato questo tipo di atteggiamento, non ti sto nemmeno a fare i nomi.
- id: 17853
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-27 12:09:00 +0200'
  date_gmt: '2012-08-27 11:09:00 +0200'
  content: |-
    Un po' di goliardia nei confronti di chi è meno documentato ci sta sempre, non diciamo cose troppo politically correct :P Di solito gli utenti Arch Linux sono persone che prima di intervenire su qualche tema si leggono quattro o cinque pagine di wiki, e quando poi (almeno nel mio caso) vedono che chi hanno di fronte non presta la stessa attenzione verso l'esattezza delle informazioni, allora non esitano a farglielo notare - spesso con link annessi.


    Ovviamente sul resto quoto. Ci sono tantissimi dibattiti online che fanno ridere i polli, se le persone passassero IMHO più tempo a documentarsi e meno tempo a far finta di non essere poco più che dei troll, la community ne risentirebbe in maniera positivissima.
- id: 17854
  author: Enrico Bastelli
  author_email: enrico.bastelli@gmail.com
  author_url: ''
  date: '2012-08-27 13:38:00 +0200'
  date_gmt: '2012-08-27 12:38:00 +0200'
  content: |-
    Ma la sensazione che ultimamente la comunità Arch abbia alzato un pochino le barriere nei confronti dei nuovi arrivati?
    Togli AIF, non hai sviluppatori e lo devi togliere, sono d'accordo e non obietto, mi spiace perché era comodo ma capisco la scelta. Del resto gli strumenti messi sono capienti.
    Per curiosità mi vado a leggere le beginner's guide all'installazione subito dopo il cambio e dire che lasciavano il nuovo utente allo sbaraglio era dire poco.
    Nessuna indicazione sul partizionamento standard o consigliato (ed esiste, dato che AIF ti partizionava automaticamente, facendoti /var /boot / e /home, con dimensioni precise), nessun richiamo al comando di mount e, ad un certo punto diceva di chrootare, adesso ci sono i comandi, prima nemmeno quello.
    La sensazione era di quella di voler lasciare fuori gli utenti non abbastanza pro e questo mi ha disturbato tantissimo. Arch l'ho sempre vista come una distro molto aperta, il modo con il quale sono state gestite le variazioni mi hanno lasciato abbastanza di stucco.
    In tanti mi hanno detto che ho percepito male io, magari hanno ragione quelli che mi danno torto, ma la sensazione di fastidio ai nuovi la percepivo da tempo.
    Ripeto, magari mi sbaglio.
- id: 17855
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-27 14:02:00 +0200'
  date_gmt: '2012-08-27 13:02:00 +0200'
  content: |-
    In realtà questa tua percezione, secondo me erronea, mette in evidenza una grossa mancanza nel processo decisionale di Arch, anche se è vero che gli sviluppatori sono pochi e quindi nisba.
    Il passaggio ai nuovi script è stato gestito in maniera totalmente svincolata dalla documentazione. Dicono che la Beginner's Guide sia già migliorata ma i primi tempi, più che altro, ti è stata data quell'impressione perché la parte Installation è stata rivista bene o male per dare un'idea di placeholder, qualcosa che poi in fase successiva (come sta avvenendo) sarebbe stato migliorato.


    Pretendere sin da subito una documentazione della stessa qualità di quando avevamo AIF è al limite dell'errore. Però c'è qualcosa che non va.
- id: 17856
  author: Picchiopc
  author_email: picchiopc@gmail.com
  author_url: http://picchiopc.wordpress.com
  date: '2012-08-27 14:12:00 +0200'
  date_gmt: '2012-08-27 13:12:00 +0200'
  content: Io ora mi stampo questo post e me lo appendo in camera mia per quanto è
    fantastico :D
- id: 17857
  author: Elia Notarangelo
  author_email: elia.notarangelo@gmail.com
  author_url: ''
  date: '2012-08-27 14:45:00 +0200'
  date_gmt: '2012-08-27 13:45:00 +0200'
  content: |-
    Approvo tutto quello che hai scritto, davvero da incorniciare. Io mi sono addentrato nel mondo arch solo da un paio di mesi quindi non sono il più adatto ad esprimere opinioni, ma sono entusiasta di questa nuova esperienza.
    Ringraziando lassù, dopo aver realizzato praticamente alla cieca, lavorando da archbang, il pacchetto 'pacmind' (frontend grafico di yaourt-gui), che sta antipatico a tanti arcieri puri, ho avuto la fortuna di conoscere Alexiobash, l'amministratore di dark-linux (creatore di Yaourt-gui), che mi ha aiutato in quel progetto e, soprattutto, mi insegnato a muovere i primi passi in arch, a partire dall'installazione con AIF e poi (per diletto) da quella con il nuovo sistema di pacstrap. Ho trovato negli arcieri conosciuti finora la massima disponibilità e, soprattutto, una competenza fuori del comune, essendo difficile che sparino fesserie.
    In buona sostanza, nonostante con lo staff di www.xfce-italia.it abbiamo creato una nostra distro basata su Ubuntu (X-Light Mind), adesso non posso fare a meno di Arch. Magari, essendo ancora un po' "timido" e spaventato dall'idea che, per mia colpa, possa bloccarsi dopo un aggiornamento, non la installo sulla macchina principale dello studio, ma con poche accortezze effettivamente si riesce ad ottenere la massima produttività.
    Inutile dilungarsi su ulteriori complimenti alla filosofia ed alla distro, che hanno lo stesso peso delle critiche se scritti tanto per scrivere.
- id: 17859
  author: Stefanauss
  author_email: stefanauss@gmail.com
  author_url: ''
  date: '2012-08-27 23:17:00 +0200'
  date_gmt: '2012-08-27 22:17:00 +0200'
  content: |-
    I primi 3 punti, spot on.
    Il 4 con Arch Linux non c'entra niente, è un falso falso mito sulla comunità dei power-user Linux, ovvero una verità sulla comunità power-user Linux in generale, non specifico ad Arch (che però ne ha una concentrazione naturale più alta).
    Il 5 è sostanzialmente una ripetizione del punto 3. A leggere il titolo, mi sarei aspettato si parlasse di qualcosa tipo "Arch è ancora KISS?".
- id: 17860
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-27 23:26:00 +0200'
  date_gmt: '2012-08-27 22:26:00 +0200'
  content: |-
    Hai ragione :)
    In realtà però pone il focus su un altro punto di vista, e ci sono cose che non ho detto, tipo che i cambiamenti vengono discussi mesi e mesi (vedi systemd su cui ancora si battibecca adesso sia in arch-dev che in arch-general) :D
- id: 17867
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2012-08-28 16:10:00 +0200'
  date_gmt: '2012-08-28 15:10:00 +0200'
  content: "\"Utenti che aggiornavano alla cieca quindi si sono visti scomparire il
    \nsistema in stato consistente da sotto i piedi, semplicemente perché \nprima
    di un reboot non hanno letto il log di Pacman che diceva di aggiungere una banale
    opzione, una voce aut similia ad un file di configurazione.\"\n\nNo spiegami un
    attimo... in questo punto tu non stai parlando di una opzione assolutamente facoltativa,
    ma di una fondamentale che è *richiesta* per il funzionamento del pacchetto, e
    l'utente se ne deve occupare? Ciò vuol dire fornire un software senza un file
    di configurazione vagamente funzionante e sperare che il povero cristo di turno
    sappia per scienza infusa che deve stare attento a cosa arriva e adattarsi di
    conseguenza. È uno scherzo o cosa? Credevo che Arch almeno le configurazioni di
    default ce le avesse, poi se uno vuole modificarsele ben venga eh!\n\n\"quel latente
    senso di MIT anni ’70 per cui se dici una \ncavolata, nel giro di trenta secondi
    lo sapranno tutti (stile condominio\n con comari annesse) – e comincerà a breve
    una serie di battute sarcastiche nei tuoi confronti\"\n\nCavolo che bel modo di
    comportarsi! Proprio dei signori sono! XD Alle elementari era un classico e si
    rispondeva con \"tu non sbagli mai?\" ma dopo i 15 anni un atteggiamento del genere
    è semplicemente incredibile."
- id: 17869
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-28 16:16:00 +0200'
  date_gmt: '2012-08-28 15:16:00 +0200'
  content: |-
    Fa esattamente la stessa cosa che fa APT, ma l'utente deve sotituire il file di configurazione a mano, se vuole, e non tramite prompt come Debian. Altrimenti va fatto il merge della configurazione a mano esattamente come tutte le distro di questo mondo.


    &gt; Tu non sbagli mai?
    L'utente tipo di Arch non sbaglia mai. O se sbaglia, rimedia molto in fretta, invece di cominciare a postare lamentele inutili su qualsiasi social network. Tantomeno critica strumenti che non ha mai utilizzato ;)
- id: 17870
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2012-08-28 16:24:00 +0200'
  date_gmt: '2012-08-28 15:24:00 +0200'
  content: |-
    Da come l'hai messa nel post era molto peggio di come l'hai detta ora rigaurdo ai pacchetti. XD

    Comunque per l'altra questione be' c'è da dire solo "fly down!!!" a tutti questi tizi che si credono Dio. Che poi qua rischia di venire fuori che gli utenti Arch sono peggio degli utenti Mac...
    E in tutta onestà il "sìcertocomenofigurati" è d'obbligo su una frase del tipo "L'utente tipo di Arch non sbaglia mai".
- id: 17871
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-28 16:32:00 +0200'
  date_gmt: '2012-08-28 15:32:00 +0200'
  content: |-
    Certo. Ma chissà come mai c'è uno zoccolo duro di persone che sono veramente tante, e non hanno mai perso le staffe per non aver letto un log, tantomeno brasato il proprio sistema operativo perché non gli andava di controllare il manuale; inoltre, data una curva d'apprendimento altissima e una comunità formata per la maggior parte da persone simili, è evidente che quando una persona posta un errore banale, sia nel caso di un utente più navigato che abbia gli strumenti mentali per dire "sono un idiota", sia nel caso del niubbone che comunque ce la sta mettendo tutta per imparare, nessuno fa da balia a nessuno e la prima reazione sia sempre quella di una corposa risata, o comunque un sorriso.


    Poi se uno ha l'onestà intellettuale di ammettere lo sbaglio che ha fatto, ed è pronto ad accogliere suggerimenti, ben venga, ed è accolto benissimo (credi che non mi sia mai beccato una pernacchia da qualche membro storico?), ma se si chiude a riccio con "aaah mi hai offeso, specchioriflesso, chiamo la mamma", è ovvio come il favore venga pienamente ricambiato.
- id: 17872
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2012-08-28 16:44:00 +0200'
  date_gmt: '2012-08-28 15:44:00 +0200'
  content: "\"Poi se uno ha l'onestà intellettuale di ammettere lo sbaglio che ha
    \nfatto, ed è pronto ad accogliere suggerimenti, ben venga, ed è accolto \nbenissimo\"\n\nUn
    attimo fa mi pareva di aver inteso che tu nel post avessi detto che gli utenti
    che sbagliano vengano scherniti con spirito \"MIT anni '70\". Rileggerò il paragrafo,
    magari me lo sono sognato.\n\nQuello che ti sto dicendo è che è un atteggiamento
    infantile e anche da eremita asociale che si fa le ... sulla tastiera il fatto
    di partecipare a un forum dando risposte come \"ah ah ah! sei un povero idiota\"
    a uno che magari ha chiesto come mai la configurazione che ha applicato non va.
    \"Hai usato una opzione sbagliata\" sarebbe molto più civile, o va a svanire completamente
    lo scopo di un forum.\nPoi se gli utenti di Arch sono così disponibili, allora
    in questo momento stai affermando l'esatto contrario di quello che hai scritto
    nel post (cioè che se uno sbaglia viene messo alla gogna per il resto della sua
    vita), quindi la faccenda mi diventa alquanto poco chiara.\n"
- id: 17873
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-28 19:50:00 +0200'
  date_gmt: '2012-08-28 18:50:00 +0200'
  content: "Se uno sbaglia ci si fa quattro risate in compagnia. Che poi quelle quattro
    risate vengano percepite da alcuni come \"ah ommioddio gli utenti Arch mi insultano\",
    pace. Ma non è vero. \n\nUn esempio: http://www.archlinux.it/forum/viewtopic.php?f=4&amp;t=15150\nLe
    risposte sono al limite del cortese, ma la funzione di ricerca non l'hanno inventata
    per far piacere a te e a me, tanto più che c'era la news in homepage."
- id: 17874
  author: Lazza
  author_email: andrea.lazzarotto@gmail.com
  author_url: http://andrealazzarotto.com/
  date: '2012-08-28 19:59:00 +0200'
  date_gmt: '2012-08-28 18:59:00 +0200'
  content: Veramente non mi pare di vedere nel tuo esempio gli scherni da saccenti
    di cui parlavi nel post.
- id: 17875
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-28 20:08:00 +0200'
  date_gmt: '2012-08-28 19:08:00 +0200'
  content: |-
    Esattamente.
    Però ci sono delle persone per cui "ohè facciamocela una ricerchina sul forum e sul wiki" diventa un motivo di ignominia pubblica, e giù rantoli sul fatto che in altri forum (che è sempre lo stesso altro, uno a caso, quello di Ubuntu) ti trattano molto meglio.
- id: 17876
  author: carlo coppa
  author_email: woddy68@gmail.com
  author_url: ''
  date: '2012-08-29 15:27:00 +0200'
  date_gmt: '2012-08-29 14:27:00 +0200'
  content: Un inno alla modestia !
- id: 17877
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-08-29 15:58:00 +0200'
  date_gmt: '2012-08-29 14:58:00 +0200'
  content: 'Eh oh: una distro per power user, è per power user. Pochi artifici. :D'
- id: 17878
  author: Francesco
  author_email: francesco@ceccon.me
  author_url: http://francesco-cek.com/
  date: '2012-08-31 08:57:00 +0200'
  date_gmt: '2012-08-31 07:57:00 +0200'
  content: Cosa è un "aggironamento"? È grave se non aggirono la mia distro linux?
    :P
- id: 17880
  author: ChicoMD
  author_email: ricky.hh@libero.it
  author_url: ''
  date: '2012-09-02 06:48:00 +0200'
  date_gmt: '2012-09-02 05:48:00 +0200'
  content: |-
    Alessio, io ti stimo molto, ma qui in alcuni punti l'hai fatta fuori dal vaso, lasciandoti trasportare dal tuo fanboysmo. Valantin ha totalmente ragione.
    Una distro può essere user-centrica, ma non così (inutilmente) complessa.
    Per non parlare dei salti nel vuoto... le features a caso ci sono eccome: io mi chiedo come ci si possa ancora fidare di una distro che da un giorno all'altro ti smonta tutto come pare a lei. AIF è solo una delle tante bischerate. Salti nel vuoto che nessun'altra distro farebbe mai.
    I suoi utenti sono spocchiosi fino al ridicolo, non neghiamo anche questo. "Perdo 3 ore davanti al wiki perchè l'aggiornamento mi ha smontato tutto, sono troppo un figo." L'ho già detto mille volte in altri posti: la stessa leggerezza, user-centricità e configurabilità la ritrovi grosso modo in un'installazione minimale di Debian.
    Io trovo Arch inutilmente complessa, inutilità fine al nulla. Gentoo è utilità che ha un fine: cristo, lì plasmi il software sull'hardware, lì c'è un reale fine alla complessità.
    Lessi di un utente che disse che Arch è un misto tra Gentoo e Slacky che ha preso le peggiori cose di entrambi, e non posso far altro che concordare.
    Ottima distro da test, per provare tutti i nuovi pacchetti... Ma dopo ciò?
    Debian era decisamente più complessa di Ubuntu, e cosa ha fatto? Non ha pensato "chissene di aiutare i nuovi utenti, chi vuole la strada facile usa Ubuntu", ma ha pensato a migliorare anche la propria di semplicità di installazione in modo incredibile. E non penso che Debian, come Arch, punti a fare i numeri e ad avvicinarsi agli utonti, semplicemente si è migliorata.
    Ripeto Alessio, si può rimanere KISS e user-centrici anche con GUI che aiutano i meno esperti, alla fine il risultato "X" non cambia se ci arrivi con 20 script manuali o con 20 passaggi guidati graficamente. La verità è che Arch si vuole che rimanga una distro per nerd ed aspiranti tali, se solo lo ammetteste fareste (imho) più bella figura.
- id: 17881
  author: ChicoMD
  author_email: ricky.hh@libero.it
  author_url: ''
  date: '2012-09-02 07:27:00 +0200'
  date_gmt: '2012-09-02 06:27:00 +0200'
  content: "Alessio, io ti stimo molto, ma qui l'hai fatta fuori dal vaso, lasciandoti
    trasportare dal tuo fanboysmo. Valantin ha ragione.\nDopo così tanti salti nel
    vuoto non capisco perché qualcuno si stia ancora fidando di Arch. Vi smontano
    tutto da un giorno all'altro e a voi sta bene così, è assurdo. Togliere AIF è
    solo l'ultima delle tante bischerate.\nLa spocchiosità dell'utenza raggiunge livelli
    inarrivabili, non raccontiamoci frottole.\n\"Ho passato 3 ore davanti al wiki
    perché un aggiornamento mi ha smontato tutto. Sono troppo un figo.\"\nChe va ad
    aggiungersi al fatto di costruire una barriera contro il povero newbie che proviene
    da Ubuntu che vuole semplicemente provare qualcosa di nuovo, e che rappresenta
    dunque un potenziale contributore (bravo Valantin).\nAlessio, KISS non vuol dire
    linea di comando. Si può rimanere fedeli al KISS anche facilitando la vita ai
    nuovi utenti. Si può giungere al risultato \"X\" sia con 20 script manuali, che
    con 20 passaggi graficamente illustrati. \nArch rappresenta pura complessità inutile,
    per quanto mi riguarda. Gentoo è complessità utile: cristo, ti plasma il software
    sul tuo hardware, vuoi mettere?\nE c'è ancora gente parla di oggettiva velocità
    e reattività di Arch nei confronti di altre distro a parità di software installato,
    LOL, abbastanza ridicoli.\nDebian era decisamente più complessa di Ubuntu, eppure
    non mi pare avesse pensato \"chissene dei nuovi utenti, se vogliono la pappa pronta
    c'è Ubuntu\", si è sempre più semplificata e migliorata, realizzando un installer
    sempre più comodo. Arch dovrebbe fare uguale.\nArch si vuole che rimanga una distro
    per pseudo-nerd ed aspiranti tali, che deve rimanere inutilmente complessa, perché
    si vuole così. Se solo lo ammetteste fareste (imho) più bella figura."
- id: 17882
  author: ChicoMD
  author_email: ricky.hh@libero.it
  author_url: ''
  date: '2012-09-02 07:27:00 +0200'
  date_gmt: '2012-09-02 06:27:00 +0200'
  content: lol, ma spariscono i post?
- id: 17884
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-09-02 09:18:00 +0200'
  date_gmt: '2012-09-02 08:18:00 +0200'
  content: |-
    Tante cose del tuo commento sono vere, risponderò solo ad alcune perché altrimenti facciamo notte. :P


    &gt;&gt; Alessio, io ti stimo molto
    Grazie. :D


    &gt;&gt; le features a caso ci sono eccome
    Tutte discusse un mese in mailing list. Nessuno si alza la mattina e decide d'amblé.


    &gt;&gt; Perdo 3 ore davanti al wiki perchè l'aggiornamento mi ha smontato tutto
    Ci sono due cose da dire riguardo questo atteggiamento di persone che vedono Arch come una distro che ti si smonta sotto ai piedi quando, almeno per me, Debian Stable si classifica poco sopra. :)
    Primo, nessuno ha mai perso tre ore davanti al wiki. Io probabilmente tre ore le ho impiegate per la mia configurazione iniziale di questo notebook, dato che con Bumblebee e la scheda audio abbastanza criptica, non sapevo assolutamente dove mettere le mani.
    Secondo, improvvisamente con un update che, d'accordissimo, poteva essere gestito molto meglio anche a livello di informazioni sulla community, Arch è diventata "la distribuzione Linux che ti si sfascia da un minuto all'altro, spesso anche senza che aggiorni" o cose simili. Ma vi rileggete quando scrivete? Ecco, io questo non lo accetto, perché ci può stare la tendenza al miglioramento, ci può stare qualsiasi cosa ma per un aggiornamento trattato in maniera leggermente superflua il team di sviluppatori è stato preso d'assalto che manco le cavallette.


    &gt;&gt; AIF
    Ma che credi, che ci piaccia pure prendere nel culo i lampioni? (scusa la franchezza.)
    AIF è stato tolto per mancanza di maintainer e: numero uno, pacstrap è comunque un buon sistema di script dato che gente che non aveva visto Linux manco in cartolina wiki alla mano ha installato tutto tranquillamente; numero due, non è che l'hanno tolto e basta, the end, fìn. Lo rimetteranno in piedi quando sarà terminata la manutenzione sul software che, dato l'apporto nullo, è rimandata a data da destinarsi. Poi ripeto: tutti che sparano a zero, anche nella community di Arch. Tu almeno sei esterno, usi Debian, e critichi da fuori. Ci può stare. A me quelli che fanno arrabbiare sono i critici dall'interno, che puntano il dito verso chi ha tolto AIF, poi ti guardi i loro thread e scopri che sanno il C abbastanza bene, gli chiedi di contribuire, e improvvisamente smettono di risponderti.
- id: 17889
  author: Chicopisco
  author_email: giomiostofra@dispose.it
  author_url: ''
  date: '2012-09-07 05:55:00 +0200'
  date_gmt: '2012-09-07 04:55:00 +0200'
  content: "Lo staff di Ubuntu-it è imbarazzante, incompetenza a fiumi. \nComunque
    penso che un po' di sfottò sia giusto, anche per spronare un po' i nuovi utenti
    che si trovano ad avere a che fare con una distro impegnativa, che non lavora
    per te.\nComunque Blaster, per colpa tua ho installato Arch e il problema è che
    mi ci sono già innamorato. Grazie per avermi rovinato la vita."
- id: 17890
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-09-07 13:57:00 +0200'
  date_gmt: '2012-09-07 12:57:00 +0200'
  content: |-
    Oh, finalmente qualcuno che non si offende per nulla :)
    Sono contento che anche da questo post vengano spunti utili per spronare la curiosità di chi Arch non l'aveva mai provata prima; purtroppo alcune volte sono stato accusato di fanboismo, ma se le persone si incuriosiscono anche quando scrivo post del genere, significa che in fondo sto facendo un buon lavoro.
- id: 17973
  author: Simbox97
  author_email: ssimone0825@gmail.com
  author_url: http://chimerarevo.com/
  date: '2012-10-11 12:22:00 +0200'
  date_gmt: '2012-10-11 11:22:00 +0200'
  content: |-
    Così fantastico e così vero! :D
    Spettacolare!
- id: 18064
  author: Michelangelo Giacomelli
  author_email: ''
  author_url: http://www.facebook.com/profile.php?id=1335765520
  date: '2012-12-11 10:27:00 +0100'
  date_gmt: '2012-12-11 09:27:00 +0100'
  content: gli utenti arch sono (siamo) spocchiosi dai è risaputo, è una delle cose
    che mi piace di più ah ah ah
- id: 18228
  author: albbrt
  author_email: alberto.berretti@gmail.com
  author_url: ''
  date: '2013-03-03 19:10:00 +0100'
  date_gmt: '2013-03-03 18:10:00 +0100'
  content: 'Manca: "Gli utenti di archlinux amano le catene e le fruste".'
- id: 18482
  author: angelo busillo
  author_email: angelobusillo34@gmail.com
  author_url: ''
  date: '2013-08-02 12:28:00 +0200'
  date_gmt: '2013-08-02 11:28:00 +0200'
  content: Fantastica arch linux!!!!!
---
<p>Soprattutto in questi ultimi tempi, si è fatto un gran parlare di <strong>Arch Linux</strong> su alcuni media (specialmente <strong>Twitter</strong> e <strong>Google+</strong>) relativamente alla cerchia solita dei Linux user italiani - nonché alcuni blog. Questo mi ha convinto a rispolverare un grande classico per pubblicarlo, ossia i cinque più grandi falsi miti su Arch Linux. Arch è una <strong>distribuzione inflazionata</strong>, infatti, e col tempo è stata testata praticamente sulle macchine di chiunque: alcuni hanno avuto l'onestà intellettuale di dire "non è una distro che fa per me"; altri hanno semplicemente messo in giro <a href="http://it.wikipedia.org/wiki/Fear,_uncertainty_and_doubt">FUD</a> diffondendo opinioni squisitamente personali spacciate come fatti oggettivi, cosa che per il modus operandi dialettico del sottoscritto trasforma queste affermazioni in <strong>cazzate</strong>.</p>
<p>Dato che sempre più spesso capita di farsi il sangue amaro su persone che non hanno ben chiari filosofia e obiettivi del progetto Arch Linux, ho pensato quindi di stilare, e qui concludo con il preambolo, questo piccolo <strong>Bignami</strong> che spero torni utile a ciascuno di noi, in un qualsiasi thread di Google+, una conversazione di Twitter, o quando pensiamo di stare per pronunciare (si, noi arcieri) un'offesa marcata contro gli stessi sviluppatori. Ché non sono mica solo quelli che se la prendono facilmente, a scagliarsi contro <strong>Arch Linux</strong>.</p>
<p><img class="aligncenter" title="Arch Linux" src="http://farm5.staticflickr.com/4017/4399347414_97950d3c56.jpg" alt="Arch Linux" width="500" height="400" /></p>
<h3>È una rolling release quindi è meno sicura/stabile</h3>
<p>Sbagliato. Per due motivi: essenzialmente tutto il lavoro di sicurezza sul software open source viene svolto <strong>upstream</strong>. Le patch che vengono applicate ad esempio dal ramo Security di <strong>Debian</strong> sono backport di codice che rende l'applicazione maggiormente sicura ad una versione meno recente, in modo che venga tappata la falla in quella specifica versione del pacchetto. Una distribuzione rolling release, invece, ha cura di fornire all'utente, bene o male, sempre l'ultima versione del pacchetto disponibile; per questo motivo, possiamo dire che le distro rolling release sono orientativamente sicure quanto le distro a ciclo di rilascio periodico - se non di più, ove il patching e il <strong>backport</strong> del codice non avvengano in tempi ragionevolmente brevi.</p>
<p>Per la stabilità il discorso è lo stesso: l'ultima versione di un software upstream incorpora anche patch provenienti da tutte le distribuzioni. Quelle poche volte che il lavoro di aggiornamento riguardo un bug di stabilità non viene svolto upstream, nulla vieta agli sviluppatori (o agli utenti, dato che è assunto che gli utenti di <strong>Arch Linux</strong> abbiano tale capacità), se non vogliono attendere, di applicare la patch di un'altra distro al pacchetto e rilasciarlo subito.</p>
<p>Se invece si tratta di bug chiusi upstream, la nuova versione sarà migliore. Le distribuzioni a rilascio periodico invece dovranno attendere che il ramo instabile diventi stabile; per bug non gravi che affliggono un numero moderato di persone, questo può essere un problema.</p>
<p>Inoltre, Arch Linux dispone di un repository <strong>Testing</strong>, dove vengono testati moltissimi pacchetti prima del rilascio nel ramo stabile. A volte vengono persino creati dei repository ex-novo per impedire che nuove release di un software contaminino la <strong>stabilità dell'ecosistema</strong> dei package che "vivono" all'interno di Core ed Extra (i due repository che essenzialmente costituiscono il ramo stabile di Arch Linux).</p>
<h3>Pacman non è all'altezza di APT/RPM</h3>
<p>Falso. <strong>Pacman</strong> implementa meccanismi largamente in voga nelle distribuzioni Linux, ma in maniera più semplice. Ad esempio il signing dei pacchetti: viene fatto in maniera meno complessa di <strong>APT</strong>, e molto più user-centrica. È il <strong>tool chiave di Arch Linux</strong>, e se è vero che non è da meno a gestori di pacchetti più blasonati fornendone le stesse funzionalità, un buon argomento di conversazione potrebbero essere gli innumerevoli miglioramenti di cui Pacman avrebbe bisogno. Dire semplicemente che "Pacman fa schifo" è <strong>una goliardata</strong> che merita di finire nell'Olimpo delle frasi stupide del panorama <strong>Linux</strong>.</p>
<h3>Un aggiornamento può distruggere il sistema</h3>
<p>Falso. Anche se molte persone hanno pensato che fosse vero vista la loro pervicacia nel forzare alcuni aggiornamenti nonostante fosse scritto ovunque di non usare assolutamente l'opzione <code>--force</code> su uno specifico package. Nonostante ci sia stato quest'ultimo caso eclatante (l'ultimo, epico, aggiornamento di <code>glibc</code>), avevo sentito più volte l'affermazione legata anche ad altri <strong>aggiornamenti critici</strong>. Il punto è che <strong>Pacman</strong> (per scelta, non ce lo scordiamo) non gestisce i file di configurazione e gli aggiornamenti da fare a questi ultimi. Questo compito in <strong>Arch Linux</strong> è lasciato all'utente il quale ha come assistenti un <a href="https://wiki.archlinux.org/">ottimo wiki</a>, e soprattutto le <strong>indicazioni</strong> non appena un pacchetto viene installato.</p>
<p>Utenti che aggiornavano alla cieca quindi si sono visti scomparire il sistema in stato consistente da sotto i piedi, semplicemente perché prima di un reboot non hanno letto il log di <strong>Pacman</strong> che diceva di aggiungere una banale opzione, una voce aut similia ad un file di configurazione.</p>
<p>Con chi te la vuoi prendere in casi come questi? Ma coi developer naturalmente. I quali avevano l'impegno morale e l'imperativo categorico di <strong>telefonarti a casa per avvisarti</strong>. Seh.</p>
<p>Di solito l'argomento più efficace contro le persone che affermano una cosa del genere è che forse potrebbero uscire dall'analfabetismo e leggere il log di Pacman, specialmente dopo un aggiornamento ciccione da centinaia di megabyte - o peggio, qualche giga.</p>
<h3>Gli utenti di Arch Linux sono spocchiosi</h3>
<p>Sbagliato. In realtà, se le cose vengono chieste con cortesia ed educazione, è possibile trovare negli <strong>utenti di Arch Linux</strong> una risorsa inestimabile in termini di <strong>case study</strong>, bug affrontati, bug risolti, ecosistema open source, e soprattutto bei <strong>birrozzi</strong> in compagnia.</p>
<p>Quello che amo della comunità di <strong>Arch Linux</strong>, allo stesso tempo, è quel latente <strong>senso di MIT anni '70</strong> per cui se dici una cavolata, nel giro di trenta secondi lo sapranno tutti (stile condominio con comari annesse) - e comincerà a breve una serie di <strong>battute sarcastiche</strong> nei tuoi confronti. Niente di cui lamentarsi riguardo la cattiveria comunque: di solito sono prese in giro bonarie (o binarie?) di chi si diverte a ostentare un po' la sua superiorità nei termini della questione che viene discussa sul momento.</p>
<p>Ci sono persone che percepiscono questa cosa come una barriera, e me ne dispiaccio perché ho incontrato spesso persone conosciute sul canale italiano di <strong>Arch Linux</strong>, o sulla board nazionale, e non mi sono mai trovato male. Mai e poi mai.</p>
<p>In coda, un monito: se un utente Arch Linux - specialmente di quelli della vecchia guardia - sta dicendo che avete torto durante un dibattito su Linux, di solito è bene rivedere le proprie posizioni. Perché state effettivamente, al 90%, <strong>avendo torto</strong>; e se continuate a dare addosso a questo genere di persone, che sono abituate a dimostrare che quello che dicono è vero coi fatti, è probabile che vi sbugiardino su tutta la linea con una serie di prove schiaccianti. Alla faccia della spocchia: <strong>abbiamo solo sempre ragione</strong> :D</p>
<h3>Gli sviluppatori di Arch Linux sono pazzi e inseriscono nuove feature a caso e in maniera improvvisa</h3>
<p>Sbagliato. O meglio: gli sviluppatori di Arch Linux inseriscono nuove feature in maniera improvvisa ma non sono né pazzi, tantomeno lo fanno a caso. In Arch Linux la necessità di aggiornamento è completamente a carico dell'utente, e può capitare, come sopra, che alcuni update siano leggermente più difficili da gestire che premere il tasto <code>y</code> sulla tastiera.</p>
<p>È un rischio potenziale per qualsiasi aggiornamento, ma ci si può accorgere di questo con dei piccoli trucchetti: uno è tenere d'occhio le <strong>news</strong>, che informano gli utenti di qualsiasi aggiornamento farraginoso. L'altro piccolo trick è guardare la <strong>lista dei pacchetti in aggiornamento</strong> prima di fare un update casuale a tutto quanto l'ambaradan: di solito pacchetti come <code>glibc</code> possono essere leggermente più pericolosi ed è consigliato prestare attenzione quando si aggiorna il core del sistema. Questo comprende pacchetti come <code>systemd</code> (si, avete letto bene, systemd), <code>kmod</code>, il kernel Linux, o Pacman.</p>
<p>Inoltre, personalmente ci sono alcune settimane in cui ho necessità di essere più produttivo che in altre. In quei periodi evito di toccare lo <strong>stack software</strong> della mia macchina, perché so che anche un piccolo cambiamento potrebbe inficiare la mia produttività e il mio workflow. Sono piccoli consigli, metterli in pratica non costa veramente niente e la vostra vita da arcieri ne guadagnerà.</p>
<p>Tradotto, questo pistolotto può essere sintetizzato in: se aggiorni alla membro di segugio non è colpa mia.</p>
<p><strong>Arch Linux</strong> non è un sistema pensato per rispondere ad esigenze brainless. A soddisfare i vostri bisogni dovete pensarci voi, ed il sistema vi mette a disposizione tutto ciò che serve per farlo. Quindi, quando accendete la vostra macchina, verificate di aver acceso prima anche il cervello. È gratis.</p>
<p><em>Image courtesy of <a href="http://www.flickr.com/photos/jasonwryan/4399347414/">Jason Ryan</a></em></p>
