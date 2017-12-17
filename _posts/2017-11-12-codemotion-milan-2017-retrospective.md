---
layout: post
status: publish
published: true
title: "Codemotion Milan 2017: siamo tutti una unica grande famiglia (serverless) 💻 🚀 🏎"
date: 2017-11-13 08:40:44 +0100
categories:
- Development
tags:
- codemotion
- codemotion milan
- serverless
- blockchain
- conferenze
- cicinelli non fa ridere
- devops
- docker
---

... _e il cui albero genealogico è memorizzato su una blockchain_. Ma scherzi a parte 😎

![Codemotion Milan 2017](https://gitlab.com/dottorblaster/blog-images/raw/master/images/codemotion2017milan/23380156_1683594904996144_3433341846844884429_n.jpg)

Sono passate a malapena ventiquattro ore dal mio ritorno a casa dopo questo **Codemotion Milan 2017**; ho fatto fatica a cominciare la scrittura di questa retrospettiva per il semplice fatto che in due giorni sono successe tante, troppe cose – e insieme ai "fatti" ci metto anche tutte le informazioni da metabolizzare e rielaborare. In ogni caso, sono veramente grato a tutto l'ecosistema italiano del software development per avermi regalato due giorni da sogno.

### Giorno 1
Il primo impatto che ho avuto con Codemotion Milano è stato a causa della nuova location di quest'anno: passata la fila per il badge mi sono trovato catapultato in qualcosa di nuovo, ossia il **BASE Milano**. Un posto decisamente diverso dal Politecnico che ha ospitato la conferenza sino ad ora. Essendo un gigantesco open space, non pensavo che avrebbe funzionato bene suddividere lo spazio tramite "enclosures" per poi dare ai partecipanti un paio di cuffie a testa per ascoltare gli speaker in mezzo alla confusione generale; e invece dopo la keynote session in cui guardavo la location abbastanza sfiduciato, devo dire che con quelle cuffie abbiamo ingranato alla grande.

A proposito di keynote session, la keynote è stata spettacolare: innanzi tutto un applauso ai ragazzi di Codemotion per averci portato Salvatore "antirez" Sanfilippo, e un applauso ad **antirez** stesso, che con i suoi feedback su **8 anni di sviluppo di Redis** mi ha fatto veramente emozionare parecchio. Ho avuto occasione di parlarci anche in separata sede, sia in caffetteria che durante la cena speaker (grazie a Francesco per avermi portato con sé!), ed è una persona di una saggezza infinita, di un'intelligenza rara, e di una purezza che in altri rockstar developer di oggi fatico a trovare. Mi ha colpito, e devo dire che le chiacchierate con lui mi hanno aperto la mente su svariati temi.

![Io, antirez e il buon Luca Ronca](https://gitlab.com/dottorblaster/blog-images/raw/master/images/codemotion2017milan/antirez.jpg)

Proseguendo, ho seguito **Luciano Mammino** con il suo "Cracking JWT tokens: a tale of magic, Node.JS and parallel computing": un talk veramente ben confezionato, non proprio entry level ma nemmeno così esoterico che ha mostrato alcune vulnerabilità relative a **JSON Web Token**, specialmente per quanto concerne i secret. Usate sempre secret robusti e memorizzati nei vault giusti!

Nei due giorni, a partire da dopo il talk di Luciano, ho persino avuto degli incontri più e meno ravvicinati con i ragazzi del Team per la Trasformazione Digitale del governo italiano. Nello specifico ho incontrato più da vicino **Riccardo Iaconelli**, mentre il buon Alessandro Ranellucci l'ho solo visto da lontano, e mi è piaciuto molto che durante un evento del genere i nostri eroi abbiano trovato il modo di ritagliarsi un momento per raccogliere proposte dai community leader che erano presenti.

Dopo il pranzo del primo giorno ho seguito **Lorenzo Barbieri** di Microsoft che parlava di Functions As A Service su Azure, e malgrado il suo talk mi sia piaciuto molto l'ho trovato un po' troppo orientato ai CTO e poco ai developer smaliziati. Mi rendo conto che c'era poco tempo per spiegare tutto, ma un po' più di codice e qualche esempio visto più profondamente mi avrebbe fatto piacere. A parte il contenuto su cui per forza di cose immagino abbia dovuto tagliare, per me Lorenzo rimane uno dei punti di riferimento per quanto riguarda le tecniche di public speaking 😸

Poi è stato il turno di **James Ferguson**, direttamente da SkyScanner: il suo "A design system. A year in review." è stato una bella sorpresa, perché ha affrontato alcuni temi che sto tentando di sviscerare anche in azienda, e mi ha dato dei consigli utilissimi, come il fatto di gestire il proprio design system tramite **un'architettura monorepo basata su Lerna e Storybook**. In ogni caso, è stato interessante vedere che per adottare un design system in maniera sensata, il primo ostacolo da superare sia proprio la mente delle persone, e in quello può sicuramente servire un bravo facilitatore che riesca a mettere tutti sul binario giusto per cooperare.

![Matteo Manchi: React Native in practice](https://gitlab.com/dottorblaster/blog-images/raw/master/images/codemotion2017milan/23517880_1682809125074722_6683526407323154081_n.jpg)

Subito dopo è stata la volta del mio amichetto **Matteo "takeno" Manchi**, con "React Native for multi-platform mobile applications". Che dire? Un talk essenziale, fatto bene, che fa capire le potenzialità di **React Native** a chi non lo conosce, e soprattutto a chi è interessato ad adottarlo per un uso aziendale. Di più non posso dire, o mi perderei in lodi dato che Matteo ha una dialettica veramente affine alla mia, con cui riesce sempre a catturarmi (e spero a catturare anche gli altri!).

Dopodiché, il meetup dei meetup con **Andrea Ferlito a fare da boss della situa**. 🚀

E dopo ancora, la cena speaker durante la quale abbiamo formato un **meraviglioso manipolo** con Matteo Manchi (again! Ma ve l'ho detto che gli voglio bene), Marco Liberati, Francesco "de-vasto" Malatesta e Mattia "raibaz" Tommasone, ascoltando **antirez che parlava di università, di Golang, e di un sacco di altre cose**. ❤️

### Giorno 2
Il secondo giorno ancora un po' insonnolito ho seguito **Justin Cormack** di Docker con "The 10 Container Security Tricks That Will Help You Sleep At Night": alcuni consigli erano un po' triti, altri veramente non banali. Oltretutto Justin è stato disponibile per le domande anche dopo durante il networking. In particolare, tra i consigli ho apprezzato molto quello sul **distruggere spesso i container** in modo che attaccanti malevoli non abbiano la possibilità di aprire una backdoor di lunga durata bensì debbano sempre riprovare a sfruttare le falle (falle che con container circa "rolling release" vengono sempre patchate, oltretutto).

Rafal Gancarz, con "Serverless for the Enterprise", era partito benissimo, poi nonostante abbia mantenuto il suo talk su un livello più che decente, ha deciso di infilare dopo un hello world con Amazon Lambda il suo personale punto di vista sul catalogo serverless di Amazon, prodotto per prodotto. Diciamo che per quanto abbia provato a seguirlo e per quanto la qualità fosse comunque presente, la parte centrale del talk è stata un po' sterile.

Uno slot l'ho saltato per andare a pranzo con la mia amica Alice ❤️

E sono tornato a bomba con il talk di **Francescone Malatesta**: "Costruire una Community: 'What You Give is What You Get'", dove il mio stimatissimo esimio collega ha messo in luce i vantaggi di partecipare alla vita delle community che troviamo sulla nostra strada durante la nostra vita professionale e non. Sinceramente mi è anche scesa la lacrimuccia quando ha annunciato di voler lasciare Laravel-Italia. Dopodiché tra una chiacchiera e l'altra ho dato il mio arrivederci allo zio Chicco, e avendo fatto un ultimo giro per salutare tutti gli amici sono corso in stazione per il treno, per andare a casa.

Alla fine di tutto questo, ho **solo un consiglio**, rivolto specialmente agli speaker che hanno affrontato le tematiche blockchain e serverless computing: fateci vedere casi reali. Ci siamo rotti il 🍆 di assistere a talk che sembrano la versione un po' più lunga e discorsiva di "Serverless 101", e come funziona una blockchain lo sappiamo da un bel po', tra proof of work e distributed consensus. Fateci vedere applicazioni reali, ve ne prego. Casi di studio, codice, e così via: vogliamo vedervi mettere le mani tra lo sporco, si chiama Codemotion, non Slidemotion, quindi vedete di darvi una smossa e per la "big thing" dell'anno prossimo (tanto 'sta roba sarà già passata di moda) portate qualcosa di ciccione e di impegnativo da farci digerire.

Gli amici che mi hanno fatto passare due giorni memorabili si meritano una menzione speciale qui sotto (e per chi non ci fosse, sappiate che la cosa è _puramente intenzionale_ (scherzo)):

- Luciano Mammino (ti devo ancora un caffè mortacci mia! Giuro che la prossima volta mando a cagare tutti quelli che ci interrompono)
- Marco Vito "mavimo" Moscaritolo
- Francesco Malatesta (again)
- Matteo "takeno" Manchi (again)
- Marco Liberati (again)
- Alessandro "lifeisfoo" Miliucci
- Giuseppe "sanfra" Sanfrancesco
- Daniele "wifau" Faugiana
- Enrico "wolf4ood" Risa
- Niko "mogui" Usai
- Angelo Quercioli
- Roberto "rebtoor" Alfieri
- Luca "zeta3" Annunziata
- Luca Ronca, Davide Barbesino, Gabriele Genta e tutta la stupenda ciurma di AdEspresso

Ad maiora! 🚀
