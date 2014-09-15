---
layout: post
status: publish
published: true
title: Addio WordPress, benvenuto Jekyll
categories:
- Web
tags:
- blogging
- wordpress
- jekyll
- cms
---

![Jekyll e GitHub Pages](http://pixelcog.com/img/post-banners/jekyll-pt1-intro.gif)

Doveva succedere, dato che da ben un anno valutavo questa opzione. Così, dopo svariati anni di utilizzo di WordPress per questo blog, ho migrato tutto a una piattaforma nuova, più performante, leggermente più scarna e decisamente più affidabile (per me, magari non per altri): **ho abbandonato WordPress per passare a Jekyll**.

E non credo che tornerei indietro, a conti fatti.

### La migrazione editoriale
Come tutti quelli che passano a [Jekyll](http://jekyllrb.com/), anche io sento l'impellente bisogno di raccontare questo piccolo **episodio di IT** della mia vita, perché mi è servito a comprendere che non avevo bisogno di parecchie cose le quali mi erano fornite dal mio **CMS**, e allo stesso tempo mi ha fatto rendere conto di quanto negli anni il materiale che ho scritto si sia accumulato. Tanta, tanta roba.

Per **importare i post** dentro Jekyll, nonostante vengano forniti in rete tantissimi tool sotto forma di plugin, di script e di blob, ho preferito dare una chance alla banalissima soluzione scritta in Ruby e fornita direttamente dai ragazzi di GitHub/Jekyll - quindi sono andato sulla documentazione ufficiale, e ho convertito la **oscena istruzione** multiriga di Ruby in un piccolo script, che ha funzionato perfettamente al primo colpo. I tag sono stati correttamente mantenuti in ogni post, così come le categorie e anche tutti i commenti (che non ho il coraggio di strippare né di parsare a mano, quindi per ora lascerò tutto così schiantato nei file di markdown). Per mostrare effettivamente i commenti uso **Disqus**, che è totalmente slegato da tutto questo.


```ruby
#!/usr/bin/ruby

require "jekyll-import";

JekyllImport::Importers::WordPress.run({
  "dbname"   => "home_",
  "user"     => "alvise",
  "password" => "sbrebbro",
  "host"     => "dottorblaster.it",
  "socket"   => "",
  "table_prefix"   => "wp_",
  "clean_entities" => false,
  "comments"       => true,
  "categories"     => true,
  "tags"           => true,
  "more_excerpt"   => true,
  "more_anchor"    => true,
  "status"         => ["publish"]
})
```

Il flusso di scrittura non è molto diverso da quello che adottavo in precedenza: apro il mio editor di testo, scrivo **il mio file in Markdown** (perché, ricordiamolo, Markdown regna), e successivamente se prima mi servivo di funzionalità built-in in **Sublime Text** o in Byword per pubblicare quello che avevo scritto, adesso mi basta fare commit del mio post e fare push sul repository Git che ospita il blog. L'istanza di Jekyll remota si occupa di accogliere le modifiche, rigenerare il sito, e rifare il deploy.

La **fase di editing** è veramente semplice: essendo tutto ciò che importa scritto in Markdown, non devo fare altro che modificare quello che mi interessa in Sublime Text (in genere), agendo su parti di testo o specifici parametri, non dovendo avere a che fare con interfacce web che hanno bisogno di caricarsi ogni volta. Per sviluppare parti del sito che richiedono modifiche massicce (quindi non per modifiche piccole) posso con due comandi avviare un'istanza locale che rispecchia quello che vedrei online. Jekyll, in poche parole, per l'aspetto editoriale è un generatore di siti statici che non sta in mezzo ai piedi come farebbe un CMS, **permettendo ai power user una maggiore flessibilità** e soprattutto, secondo me, dei tempi di scrittura minori, non dovendo avere a che fare con tutto il peso di una web UI.

### La migrazione tecnica
L'aspetto editoriale l'ho gestito con qualche script e il fido Sublime Text al fianco. L'aspetto tecnico invece ha avuto bisogno di qualche riga di **Javascript**, e soprattutto un po' di olio di gomito col quale non ho ancora terminato (ho colto l'occasione per scrivermi dei **tool in Go** che non riuserò mai, ma era per fare esercizio). Alla fine è stato più semplice di quanto avessi effettivamente stimato nelle prime progettazioni del blog, anche perché con Jekyll ho preso la mano dopo poco (e non è la prima volta che lo uso). Per quanto riguarda quindi gli aspetti tecnici della migrazione di un blog a Jekyll (o la scrittura da zero) il meglio che posso fare è condividere la lista dei link del materiale che ho usato per questo piccolo giochetto articolato in tre serate post-lavoro e un lunedì mattina passato in treno:

- [La documentazione ufficiale di Jekyll](http://jekyllrb.com/docs/home/)
- [Jekyll From Scratch - Getting Started](http://pixelcog.com/blog/2013/jekyll-from-scratch-introduction/)
- [Jekyll From Scratch - Extending Jekyll](http://pixelcog.com/blog/2013/jekyll-from-scratch-extending-jekyll/)
- [Migrating from WordPress to Jekyll, and Host on Github](http://girliemac.com/blog/2013/12/27/wordpress-to-jekyll/)
- [WordPress to Jekyll](http://paulstamatiou.com/how-to-wordpress-to-jekyll/), di Paul Stamatiou
- [exitwp @ GitHub](https://github.com/thomasf/exitwp)
- [Poole, the Jekyll butler](http://getpoole.com/)

Di seguito, riporto anche **qualche impressione** che ho avuto durante questo processo:

- **Non è così semplice** come ti aspetteresti: i developer di Jekyll ti vendono il pacchetto come già pronto, ma al 90% hai bisogno di metterci le mani e sporcartele parecchio. Persino quello che loro definiscono come una banale istruzione Ruby ha richiesto la modifica di alcuni parametri, e per quanto Jekyll sia pensato per power user del blogging, e power user del computer in generale (di Unix... :-D) comunque mi ha dato fastidio l'atteggiamento un po' facilone, in alcuni punti, del docset.
- I temi fanno cagare, o meglio, non esistono: se volete **cambiare layout**, dato che la logica è spostata tutta nel generatore di pagine statiche, dovete modificare praticamente tutto quanto. Probabilmente è un difetto mio, nel senso che avendo usato WordPress per una vita, non sono abituato a modificare cose nella root del sito - allo stesso modo però è pure vero che tutta la gestione delle modifiche e della versione del proprio layout è affidata alla testa del blogger (che di fatto diventa uno sviluppatore frontend) e al suo branching model. E facciamo pure un tenero saluto a tutti i casini mentali e pragmatici che questo comporta.
- Rispetto a WordPress, tutto questo è di una **semplicità abissale** e persino chi non conosce una mazza assoluta di Ruby può arrivare in cinque minuti, se si impegna, a fare il deploy di un blog con Jekyll.

### La bellezza di GitHub Pages
In tutto ciò, ho voluto **semplificare anche la parte di web hosting** al massimo. Per questo motivo, ho dato il tutto in braccio a GitHub e ho lasciato che trasformasse il mio blog da puro codice alla realtà attraverso il meccanismo di deploy automatico di [GitHub Pages](http://pages.github.com/). In questo modo, tempo qualche secondo, ogni volta che pusho una modifica sul mio repository git, Pages avvia per me il rebuild automatico di tutto. Mi era stato suggerito di utilizzare dei plugin per fare alcune cose che adesso sono costretto a fare a manina, ed ero anche tendenzialmente favorevole all'idea, anche se poi ho pensato che avrei dovuto tenermi committata anche tutta la directory _site e generare tutto ogni volta a mano. Il che, decisamente, non è quello che voglio.

Oltre tutto, con GitHub Pages, mi scordo totalmente delle limitazioni di traffico che può avere un server normale, mettendo dietro al mio blog una meravigliosa infrastruttura che non comprende solo una serie di macchine carrozzate in maniera invidiabile (e gratuitamente, ecco), ma anche una **CDN** che si fà carico di ottimizzare i tempi di distribuzione dei contenuti in tutto il mondo... cosa che quantomeno risolve in maniera eccellente il caricamento del sito in Italia da un server statunitense. :-P

### "E Octopress?"
[Octopress](https://github.com/imathis/octopress) è un overkill nel 90% dei casi. Aggiunge codice Ruby al codice Ruby di Jekyll per fare relativamente poco, il che significa che per me, che sto cercando di ridurre la complessità di WordPress a uno zero assoluto (circa), anche no. Pure perché, una volta scritto per bene il template di Jekyll, non riesco a capire a cosa possa servire dato che GitHub Pages fa già il deploy da sé.

Insomma, tutto è bene ciò che finisce bene: mi scuso con chi aspettava qualcosa pubblicato da me in questi giorni, ma ho preferito dare la massima priorità a questo lavoro in modo da sbrogliarmi prima possibile.
