---
layout: post
status: publish
published: true
title: GNOME "The Breakage" 3.4
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1212
wordpress_url: http://dottorblaster.it/?p=1212
date: '2012-04-03 12:20:48 +0200'
date_gmt: '2012-04-03 11:20:48 +0200'
categories:
- Desktop Environment
tags:
- Gnome
comments:
- id: 17293
  author: calca
  author_email: ''
  author_url: http://twitter.com/calca
  date: '2012-04-03 12:28:00 +0200'
  date_gmt: '2012-04-03 11:28:00 +0200'
  content: gnome ha ragione. stanno lavorando su tutto lo stack in modo coerente per
    proporre un desktop coerente e valido.
- id: 17294
  author: Saturno
  author_email: gibbin.fabio@gmail.com
  author_url: ''
  date: '2012-04-04 00:21:00 +0200'
  date_gmt: '2012-04-03 23:21:00 +0200'
  content: " Si, ok, ma non mi sembra una buona ragione per rompere le api ad ogni
    rilascio ... cioè quello che è stato implementato in gnome 3.4 riguardo ai temi
    poteva essere fatto anche su gnome 3.0? con quale motivo giustificano questo cambiamento
    gli sviluppatori di gnome? Per coerenza forse? ti sembra coerente proporre un
    modo per creare temi in una release e esattamente un anno dopo rendere tutto incompatibile
    con quello scritto da sviluppatori indipendenti durante lo stesso periodo? oppure
    quelli di gnome non voglio più che gli utenti creino temi personalizzati e renderanno
    adwaita difficilmente sostituibile? Da semplice utente a cui le idee di gnome
    in generale piacciono questo continuo reinventare la ruota sembra una perdita
    di tempo ... Fino a quando non si avranno api stabili gnome 3.x resterà un giocattolo
    per nerd ... nessuna azienda investe su un os che ha le sue librerie di base che
    cambiano di continuo!"
- id: 17296
  author: Gianfrix
  author_email: gianfrix.mg@gmail.com
  author_url: http://gianfrixblog.co.cc
  date: '2012-04-05 18:43:00 +0200'
  date_gmt: '2012-04-05 17:43:00 +0200'
  content: Infatti ora anche oxygen-gtk3 mi si è sfanculato per colpa delle GTK 3.4
    -.-'
- id: 17298
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-04-06 20:28:00 +0200'
  date_gmt: '2012-04-06 19:28:00 +0200'
  content: Bella roba. -.-'
- id: 17299
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-04-06 20:28:00 +0200'
  date_gmt: '2012-04-06 19:28:00 +0200'
  content: |-
    Spero che almeno dalla 3.6 venga fuori qualcosa di stabile per il futuro.
    GNOME 3.4 è pronto per gli utenti, ma non per coloro che customizzano il desktop, che sono parecchi. Sad.
- id: 17300
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2012-04-06 21:45:00 +0200'
  date_gmt: '2012-04-06 20:45:00 +0200'
  content: |-
     Anche perchè i "geni" mettono di default un tema che ha solo gt3 e per gtk2 usa clearlook che non centra nulla con adwaita, come se nessuno usasse app gtk2 ma SOLO quelle di gnome stesso.
    Veramente pessimi ed isolazionisti.
- id: 17301
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-04-06 21:49:00 +0200'
  date_gmt: '2012-04-06 20:49:00 +0200'
  content: |-
    @abbe4d985439b867571a3ce51a4f85ac:disqus io sinceramente *non l'ho capito* che stanno facendo, o meglio l'ho capito e faccio di tutto per non prenderne coscienza.
    Purtroppo GNOME è un DE nato per computer *normali*, tentare di traslarlo su tablet et similia è solo un abominio.

    KDE ha fatto la cosa più intelligente, Plasma Active è una figata immensa e nel frattempo continuo a produrre contenuti e a fare il mio lavoro su quello che in ambito Linux è rimasto l'unico DE coi piedi per terra oltre XFCE (che però è povero). [Lascio fuori dalla discussione la disorganizzazione dei menù, al momento è l'ultimo problema]
- id: 17329
  author: calca
  author_email: ''
  author_url: http://twitter.com/calca
  date: '2012-04-12 09:48:00 +0200'
  date_gmt: '2012-04-12 08:48:00 +0200'
  content: |-
    se valuti la stabilità per ISV di un desktop dalle API dei temi, non posso condividere. il progetto gnome mantiene API/ABI compatibily per tutto il ramo 3.x come lo è stato per il 2.x. 

    la concezioen di 'tema' è al di fuori di gnome, al massimo per le gtk.
---
<p>Di solito mi scorno con <a href="http://telperion.wordpress.com/">telperion</a> per quanto riguarda l'argomento desktop e dintorni, sia perchè siamo di fazioni diverse (non opposte) per ideologie e paradigmi, sia per altri motivi; tornando a fare i seri dalle solite scemenze invece, ci siamo confrontati su qualcosa di nuovo: <strong>GNOME 3.4</strong>. Figo? Non figo? Bello? Brutto? Eccetera. Ho scritto un <a href="http://www.oneopensource.it/03/04/2012/gnome-3-4-e-pronto/">post su OneOpenSource</a> linkando un articolo di <strong>Joe Brockmeier</strong> che secondo me merita la lettura, se non altro perchè a mio parere è una buona cifra di cosa l'utente finale può aspettarsi.</p>
<p>Telperion da buon insider invece mi ha commentato così:</p>
<blockquote><p>da quel che ho visto:<br />
temi gtk3.4 di nuovo incompatibili con i 3.2, il nuovo adwaita mi sembra peggio del vecchio 3.2, in più ora i temi sono pure compilati (gtk.gresource) e quindi per fare qualche modifica bisogna procurarsi il sorgente.<br />
Ogni rilascio un “pain in the ass”, sarebbe meglio un rilascio stabile ogni 2-3 anni dell’infrastuttura (lib) con solo correzioni e aggiunte di funzionalità senza api-break, e aggiornamenti semestarli dei soli programmi vari di gnome, questo per dare un minimo di stabilità.<br />
Non si può ogni sei mesi riscrivere temi estensioni e quant’altro.<br />
La stabilità per un tempo ragionevole, è essenziale.</p></blockquote>
<p>Ora, io dico, ma è veramente necessario che ci sia un <strong>API breakage</strong> mostruoso come quello di cui si parla? Non solo a livello di sviluppo, ma anche a livello di community building - terreno sul quale mio malgrado sto diventando un esperto - <strong>GNOME 2.32</strong> risultava avere una filosofia di rilasci vincente, dato che permetteva la retrocompatibilità con il 99,99% dei temi in circolazione. Differentemente, ormai su GNOME 3.4 ad ogni release viene rotto qualcosa e i developer di cose limitrofe piangono.</p>
<p>Oh, quando uno c'ha ragione, <strong>c'ha ragione</strong>.</p>
