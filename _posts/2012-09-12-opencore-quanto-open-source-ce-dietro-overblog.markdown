---
layout: post
status: publish
published: true
title: "#opencore - Quanto open source c'è dietro OverBlog"
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1806
wordpress_url: http://dottorblaster.it/?p=1806
date: '2012-09-12 10:16:07 +0200'
date_gmt: '2012-09-12 09:16:07 +0200'
categories:
- Open Source
tags:
- open source
- opencore
- overblog
comments:
- id: 17899
  author: Matteo Pani
  author_email: andovais@gmail.com
  author_url: ''
  date: '2012-09-12 13:09:00 +0200'
  date_gmt: '2012-09-12 12:09:00 +0200'
  content: |-
    Intervista interessantissima. Ho anche scoperto l'esistenza di Overblog, ne ero all'oscuro. Più nomi di tutta una serie di software a me sconosciuti.
    Questa serie di post inizia alla grande, non vedo l'ora di leggere i prossimi :D
- id: 17900
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-09-12 13:48:00 +0200'
  date_gmt: '2012-09-12 12:48:00 +0200'
  content: Spero di reggere la qualità, gli ospiti sono tutta gente preparata (e l'elenco
    è ancora in espansione :P)
- id: 17901
  author: Matteo Pani
  author_email: andovais@gmail.com
  author_url: ''
  date: '2012-09-12 13:58:00 +0200'
  date_gmt: '2012-09-12 12:58:00 +0200'
  content: Ma sì che la reggerai :)
---
<p>In questo periodo come sapete sono stato un po' impegnato con il <a href="http://dottorblaster.it/2012/09/opencore-ovvero-quanto-open-source-ce-dietro-a/">progetto #opencore</a>, di cui vi ho già parlato. Il mio trofeo più grande, ad ora, rimane quello di essere riuscito a porre qualche domanda al <strong>CTO</strong> di OverBlog, <strong>Xavier Hausherr</strong>, che si è dimostrato molto gentile ed ha risposto anche a questioni spinose sull'open source. <strong>OverBlog</strong> è una piattaforma ottima <a href="http://it.over-blog.com/">per aprire un proprio blog</a>, ed ero proprio curioso di sapere come fosse composta l'infrastruttura alla base di questa piattaforma che, sin dal primo sguardo, mi ha sempre dato l'idea di <strong>uno strumento molto complesso</strong> e raffinato sul quale viene svolto ogni giorno tantissimo lavoro.</p>
<p>Ho quindi "marchiato" anche OverBlog con le mie cinque domande, grazie a <strong>Paolo Mulè</strong>, country manager italiano di OverBlog, che, all'idea dell'intervista un po' più da smanettone, si è subito offerto di fare da intermediario tra me e il team di sviluppo. Un <strong>grazie</strong> quindi a lui e a Xavier.</p>
<p><img class="aligncenter" title="OverBlog" src="http://i47.tinypic.com/2ms0s95.png" alt="OverBlog" width="500" height="241" /></p>
<h3>L'intervista</h3>
<p>Come si pone <strong>OverBlog</strong> rispetto al concetto di libertà? C'è una roadmap specifica o più generalmente un atteggiamento mentale sul fatto di permettere agli utenti di "smanettare" più a fondo con la piattaforma?</p>
<blockquote><p>Il nostro desiderio è far sentire i blogger a casa propria quando usano OverBlog. Per far questo, vogliamo offrire loro quanta più libertà possibile, attraverso la creazione e la <strong>personalizzazione dei temi</strong>, la flessibilità dei layout e l’organizzazione dei contenuti, il rilascio di una <strong>API</strong> e di alcuni widget che verranno configurati grazie ad un sistema contributivo. Quindi possiamo dire che sulla questione c’è <strong>una roadmap molto chiara</strong>.</p></blockquote>
<p>Ogni piattaforma fa affidamento su una serie di applicativi più o meno critici, come un webserver e un'infrastruttra cloud. Questi sono generalmente descritti come uno "stack software". Com'è costruito lo <strong>stack software di OverBlog</strong>? Quali sono le applicazioni che ne sono alla base? Sono <strong>open source</strong>?</p>
<blockquote><p>Il nuovo OverBlog è stato costruito per essere flessibile al massimo in termini di sviluppo e scalabilità. La colonna portante di OverBlog è la <strong>Service-oriented Architecture</strong> (SOA).</p>
<p>Ogni progetto è indipendente: da una parte abbiamo i cosiddetti “servizi core” (Blog, Commenti, Utenti, eccetera), dall’altra abbiamo i veri e propri “siti web” (nello specifico l’Interfaccia di Amministrazione e il Portale). Questa configurazione permette ad ogni progetto di sfruttare le tecnologie che meglio soddisfano le sue specifiche necessità, senza alcun limite.</p>
<p>Allo stato attuale, per quello che concerne il livello di <strong>backend</strong>, i nostri progetti sono costruiti in PHP con il framework <strong>Symfony 2</strong>. Utilizziamo, per lo storage di dati, i seguenti sistemi: Postgresql, MySQL, <strong>Redis</strong> e Memcache.</p>
<p>Il layer di <strong>frontend</strong> è anch’esso sviluppato in PHP con Symfony 2. Per il Javascript, usiamo il framework YUI, con un layer di housing chiamato <strong>Yoshioka</strong> (<a href="https://github.com/hadrienl/yoshioka.js">https://github.com/hadrienl/yoshioka.js</a>), disponibile gratuitamente.</p>
<p>I nostri servizi comunicano l’uno con l’altro attraverso un layer di trasporto binario chiamato <strong>Thrift</strong>, creato da <strong>Facebook</strong> e incubato da Apache. Abbiamo fatto parecchio lavoro di ingegnerizzazione su questo punto in particolare, per assicurarci delle ottime performance, e siamo veramente soddisfatti del risultato.</p>
<p>Invitiamo a dare un’occhiata alle nostre slide, presentate al Symfony Live 2012 a Parigi, che spiegano questi punti dettagliatamente: <a href="http://fr.slideshare.net/xkobal/the-use-of-symfony2-overblog">http://fr.slideshare.net/xkobal/the-use-of-symfony2-overblog</a></p>
<p>Per tutti i server, utilizziamo la distribuzione Linux Debian. Le pagine sono distribuite tramite Apache. Il tutto è ospitato su dei server VmWare che ci permettono una grande flessibilità nel creare nuove macchine e questo, di conseguenza, aiuta tantissimo nella sfida per la scalabilità.</p></blockquote>
<p>Parliamo di sviluppo e programmatori. Quali sono gli <strong>strumenti fondamentali</strong> (IDE, VCS, altro) usati dai developer di OverBlog? Puoi descrivermi la tipica workstation di uno sviluppatore di OverBlog?</p>
<blockquote><p>La cassetta degli attrezzi di ogni sviluppatore di OverBlog comprende quasi sempre gli stessi tool:</p>
<p>- Lavoriamo tutti su piattaforma Mac, con una <strong>macchina virtuale Debian-based</strong> “fatta in casa” e una configurazione centralizzata grazie a <strong>Puppet</strong>. Questo rende il tutto molto facile da aggiornare. C’è anche installato tutto il software che serve per eseguire l’intera piattaforma OverBlog in locale!</p>
<p>- Sviluppiamo in PHP 5.4</p>
<p>- I developer del frontend usano <strong>NodeJS</strong></p>
<p>- Tutti i nostri sorgenti sono ospitati su <strong>GitHub</strong></p>
<p>- Per quello che concerne l’IDE, i nostri tool sono <strong>Netbeans</strong>, Textmate e, ancora, PhpStorm</p></blockquote>
<p>Sarebbe carino se <strong>Timekiwi/OverBlog</strong> fossero open source. C'è qualche piano futuro per rendere tutto questo lavoro open source (sotto GPL, o Apache) e disponibile per i power user?</p>
<blockquote><p><strong>OverBlog</strong> non è concepito per essere open source. Ci sono parecchie ragioni per questa scelta, incluso il fatto che il codice deve in primis performare su un’infrastruttura estesa come quella che usiamo noi. <strong>Non è assolutamente inteso per essere utilizzato come motore per un blog singolo</strong> su un server, come fanno alcuni dei nostri competitor.</p>
<p>In ogni caso, essendo noi stessi fautori e fruitori di open source, rilasciamo alcune parti dello sviluppo che portiamo avanti e dei miglioramenti che apportiamo come <strong>Thrift</strong> (al quale abbiamo contribuito), parecchi bundle di Symfony, il nostro framework javascript <a href="https://github.com/hadrienl/yoshioka.js">Yoshioka.js</a> e, sicuramente, un po’ di altri progetti nel prossimo futuro. Questi progetti sono disponibili su GitHub: <a href="https://github.com/ebuzzing">https://github.com/ebuzzing</a></p></blockquote>
<p>Hai 400 caratteri per dirmi qualsiasi cosa sull'open source e l'open culture.</p>
<blockquote><p>Sin dalla sua creazione, nel 2004, <strong>OverBlog</strong> ha sempre usato o contribuito a progetti <strong>open source</strong>, come Postgresql, Symfony, Thrift, o altro. Un’espressione che ci piace, e che riassume il nostro pensiero, recita: “Perché reinventare la ruota quando qualcun altro l'ha creata così bene?”</p>
<p>L’open source ci aiuta a sviluppare <strong>OverBlog</strong>, il che sarebbe difficile da fare usando software proprietario: la piattaforma che abbiamo creato è estremamente specifica, e necessita di essere spinta molto più lontano di quanto qualsiasi software basilare ci permetterebbe di fare. E conosciamo tutti la difficoltà di far evolvere un software non libero!</p>
<p>In cambio, <strong>ripaghiamo la community open source</strong> pubblicando i miglioramenti che abbiamo apportato sviluppando il software stesso.</p></blockquote>
