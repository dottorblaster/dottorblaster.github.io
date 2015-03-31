---
layout: post
status: publish
published: true
title: FriendFeed - profilo Open Source e "immortale"
date: 2015-03-31 22:21:00 +0100
categories:
- Open Source
tags:
- open data
- social netrworking
- open source
- git
---

![FriendFeed profile open source](http://i60.tinypic.com/2ai3kmr.png)

Purtroppo nell'ultimo mese non ho mai avuto tempo di fare un post come si deve; provo a recuperare adesso in calcio d'angolo, dando un indizio che spero sia interessante a tutti i nerd che mi leggono e che hanno un profilo su **FriendFeed** (ormai credo pochi). Mi è infatti venuto in mente che, [chiudendo la piattaforma il 9 aprile](http://dottorblaster.it/2015/03/goodbye-friendfeed), oltre che esportare i miei contenuti e quelli di alcune stanzette, potevo rendere disponibile il tutto per un facile accesso online, **non spendendo una lira** di hosting.

La ricetta è semplice, e gli ingredienti sono:

- [ffexp](https://github.com/claudioc/ffexp), il pratico exporter in PHP di Claudio Cicali;
- [GitHub Pages](https://pages.github.com/), il servizio di hosting di GitHub;
- [Jekyll](http://jekyllrb.com/) (che è comunque un pezzo di GitHub Pages).

La procedura è abbastanza semplice; **esportiamo tutto il nostro profilo di FriendFeed** tramite ffexp:

```bash
php ffexp.php ff_profile.json
```

Trasformiamo poi il JSON in un **file HTML** tramite l'altro tool scritto da Claudio.

```bash
php ffexp2html.php ff_profile.json > index.html
```

Fatto? Fatto: il prossimo passo è **creare un repository su GitHub e fare il push dei file**; se avete scritto tanto su FriendFeed vi aspetta un'attesa lancinante, dato che comunque, per esempio, il mio feed consta di 200MB e spicci di file allegati.

Personalmente, per rendere open source il mio profilo FriendFeed ho scelto la seguente struttura del repository:

- Un branch _master_ su cui committare il JSON esportato dalle API, in modo da avere sempre sulla radice del repository il dataset;
- Un branch _gh-pages_ su cui committare l'HTML generato e le risorse che utilizza, branch che sarà poi automaticamente _ciucciato_ da Jekyll.

Una volta fatto il **push dei file** (e di entrambi i branch: l'importante è soprattutto avere _gh-pages_ al suo posto), avremo il tutto disponibile in qualche minuto sotto il dominio _username_.github.io/_nome-repository_. In questo modo il nostro profilo FriendFeed vivrà per sempre al sicuro, noncurante del tempo, sempre disponibile se un giorno vorremo riguardarcelo (per una qualsiasi motivamente), cristallizzato.

Come avviene la magia? È abbastanza semplice: GitHub Pages si occupa di controllare se nei nostri progetti abbiamo un ramo _gh-pages_, dopodiché lo dà in pasto alla sua istanza di **Jekyll** che fa una build del sito e lo serve al pubblico.

È un **esercizio di stile**, ma per me era anche importante salvarmi tutto e tenerlo lontano dai miei hard disk, dato che non mi fido delle mie procedure di backup fallaci.

Se volete vedere come viene il lavoro finito, trovate [il mio feed qui](http://dottorblaster.it/friendfeed-profile/) (e il repository corrispondente [qui](https://github.com/dottorblaster/friendfeed-profile), senza README e licenza perché ovviamente l'ho fatto di fretta).
