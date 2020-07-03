---
layout: post
status: publish
published: true
title: "AllaCarta è online: la mia app per i menù digitali"
date: 2020-07-03 17:50:51 +0200
categories:
- Category
tags:
- first_tag
- second_tag
---

![AllaCarta, menù contactless](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/allacarta.png)

È un sacco di tempo che non scrivo, principalmente perché più che scrivere prosa in queste settimane ho scritto codice. Tra le cosette che sono uscite fuori, il mio orgoglio principale è AllaCarta, una piccola applicazione che mi sono divertito a prototipare visto il proliferare di soluzioni di **menù "contactless", con QR code e URL univoco**, che sono spuntate come margherite all'affacciarsi della fase 2 di questa pandemia che ci ha visti cambiare le abitudini e il modo di fruire di oggetti, posti e rapporti.

Insomma, un po' per gioco, un po' per mettere alla prova le mie abilità, mi sono messo a programmare un giocattolino che ho battezzato subito **AllaCarta**, con l'obiettivo di rendere facile la vita al ristoratore di turno che vuole offrire un servizio senza svenarsi – dato che comunque dando un occhio ai servizi che esistevano già mi ero fatto l'idea che fossero grossomodo tutti a pagamento.

### tl;dr
Ho scritto un prototipo, come già specificato, di un prodottino per menù digitali. L'ho scritto tutto in **Elixir** per quanto riguarda il backend, e usando **React** e alcune cosette meravigliose per quanto riguarda il frontend. Il suo nome è [AllaCarta](https://allacarta.menu/), e quando ho tempo mi diverto a metterci qualche feature carina. Volete sapere cosa ho fatto e come l'ho fatto? Leggete oltre ;-)

### Come ho creato AllaCarta
Scrivi codice di qua, scrivi codice di là, aggiungi una libreria per l'autenticazione e via dicendo, alla fine entro un paio di settimane avevo qualcosa di funzionante in mano che rispettasse l'idea di MVP che avevo in mente: "come utente desidero registrarmi, e come utente desidero creare/modificare il menù del mio ristorante da una dashboard potendolo poi visualizzare". Avevo scritto il backend in Elixir usando Phoenix, e per il frontend mi sono ingegnato in due modi: la dashboard di modifica del ristorante l'ho scritta usando JavaScript e React, mentre per la visualizzazione del menù del ristorante ho voluto dare priorità alle performance per cui sono tornato a qualcosa di naif e velocissimo: un bel po' di server side rendering (coi template e tutto il resto).

Ho scelto una color palette ben precisa, ho scritto il sito (su questo penso che farò un post a parte perché credo di essermi inventato un bel barbatrucco), dopodiché ho mostrato fiero il mio lavoro ad [Agnese](http://www.killbilla.it/) per evitare l'effetto "ogni scarrafone è bello a mamma sua" – e allo stesso tempo farmi validare l'MVP da qualcuno che ha le competenze professionali per farlo.

Il feedback più o meno è stato "è tutto da rifare"; ho fatto coaching tecnico per anni a decine di team, e indovinate chi è caduto vittima dell'amore per la propria idea e per la propria execution? **Proprio il sottoscritto**.

Ho provato ad andare un pochino avanti sulla traccia che avevo, ma è diventato chiaro abbastanza presto mentre continuavo a scrivere codice che non avevo idea di come continuare perché mi ero infilato in un vicolo cieco: il mio frontend aveva un enorme problema di consistenza, e io stavo faticando ad ammetterlo.

Dopo il "non ci siamo" di Agnese che aveva già fatto un primo giro e una call di qualche quarto d'ora in cui [Francesco](http://francesco.codes/) mi ha espresso tante perplessità sulla UI, ho dovuto fare i conti con me stesso: cavolo, proprio io che faccio il frontend di lavoro ho cannato l'implementazione del frontend del mio prodottino?

Ho deciso così di riscrivere il frontend di AllaCarta iterando sul codice che avevo già scritto (tanto fortunatamente fa poche cose :-D), cambiando design system di origine, ridisegnando le parti più importanti della UI e cambiando il template della visualizzazione del menù del singolo ristorante con qualcosa di più fresco. Piano piano ci sono arrivato, e ho concepito quella che più o meno è la versione attuale di quella pagina. Effettivamente piaceva di più anche a me, e quando mi sono presentato da Agnese per una nuova product review stavolta l'esito è stato tutt'altro che un pollice verso. Ero tornato "on track".

Ho colto l'occasione per aggiungere anche le interazioni **drag and drop** alla dashboard, e a quel punto ho mandato il tutto in produzione. A ridisegnare tutto ci ho messo più o meno una settimana, più un'altra settimana di bugfix e piccoli miglioramenti incrementali: in circa un mese ho messo su un MVP molto minimale di un prodotto con un free tier, per vedere che succede. E non potrei essere più soddisfatto di così.

### E adesso?
Adesso vediamo! Intanto se conoscete ristoratori, barman o altri appartenenti a questa categoria consigliate e fate consigliare AllaCarta. Sto radunando un po' di feedback, potete sempre scrivere a supporto@allacarta.menu per qualsiasi tipo di impressione o di richiesta di supporto. Probabilmente nei prossimi giorni scriverò ancora sulla tecnologia che sta dietro il prodotto :-)

