---
layout: post
status: publish
published: true
title: GitLab 7.1 - sempre più simile a GitHub, ma open source
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2489
wordpress_url: http://dottorblaster.it/?p=2489
date: '2014-07-28 23:08:50 +0200'
date_gmt: '2014-07-28 22:08:50 +0200'
categories:
- Open Source
tags:
- GIT
- development
- github
- gitlab
- coding
comments:
- id: 18808
  author: Matteo Pani
  author_email: andovais@gmail.com
  author_url: ''
  date: '2014-08-02 01:31:00 +0200'
  date_gmt: '2014-08-02 00:31:00 +0200'
  content: Non lo conoscevo minimamente, gli sto dando un'occhiata e sembra molto
    bello :D
- id: 18809
  author: Visto nel Web &#8211; 142 | Ok, panico
  author_email: ''
  author_url: http://okpanico.wordpress.com/2014/08/03/visto-nel-web-142/
  date: '2014-08-03 07:47:44 +0200'
  date_gmt: '2014-08-03 06:47:44 +0200'
  content: "[&#8230;] GitLab 7.1 – sempre più simile a GitHub, ma open source :::
    Bl@ster&#8217;s [&#8230;]"
- id: 18810
  author: Sytse Sijbrandij
  author_email: web2008@sytse.com
  author_url: ''
  date: '2014-08-03 11:23:00 +0200'
  date_gmt: '2014-08-03 10:23:00 +0200'
  content: GitLab B.V. CEO here. Thanks for the great blogpost!
- id: 18811
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2014-08-03 11:26:00 +0200'
  date_gmt: '2014-08-03 10:26:00 +0200'
  content: |-
    Bellissimo. Devo dare un'occhiata alla setup phase, l'ultima volta che l'ho visto non era granché facile da installare ma penso che col tempo abbiano semplificato notevolmente le cose. :)

    Edit: si, l'hanno decisamente fatto https://about.gitlab.com/2014/02/14/gitlab-is-now-simple-to-install/
- id: 18812
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2014-08-03 11:30:00 +0200'
  date_gmt: '2014-08-03 10:30:00 +0200'
  content: Oh, hello there! Thanks for this feedback, it matters so much to me :)))
- id: 18813
  author: Sytse Sijbrandij
  author_email: web2008@sytse.com
  author_url: ''
  date: '2014-08-03 11:34:00 +0200'
  date_gmt: '2014-08-03 10:34:00 +0200'
  content: "&lt;3"
- id: 18814
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2014-08-03 11:49:00 +0200'
  date_gmt: '2014-08-03 10:49:00 +0200'
  content: ":D"
---
<p><img src="https://about.gitlab.com/images/7_1/discussion.png" alt="GitLab 7.1" /></p>
<p>Nonostante in questo periodo stia guardando con interesse qualsiasi notizia proveniente dal mondo open source mi ero perso uno degli aggiornamenti più importanti riguardo - probabilmente - uno tra i miei software preferiti, ovvero <strong>GitLab</strong>. Il clone <strong>open source</strong> del sistemone che usa <strong>GitHub</strong> (non esageriamo, ma in piccolo è così) infatti si è reso veramente molto simile al suo parente chiuso, con alcune feature che, portate in uso stabile in questa release, lo rendono perfetto anche per aziende che dal proprio flusso di lavoro pretendono parecchio anche a livello di frontend per i propri sviluppatori.</p>
<p>Bando alle ciance, il changelog di <a href="https://about.gitlab.com/2014/07/22/gitlab-7-dot-1-released/">GitLab 7.1</a> parla da sé:</p>
<ul>
<li><strong>API per i contributor</strong>: adesso possiamo prenderci tutti i contributor di un progetto con una singola chiamata API. Statistics incoming! :D</li>
<li><strong>Discussioni</strong>: se c’è una cosa che GitHub sa fare bene, è consentire a persone potenzialmente sociopatiche e omicide di esprimersi verbosamente senza causarsi danni fisici. GitLab ha fatto tesoro di tutto questo, implementando un frontend per le discussioi che permette di tirare in ballo linee di codice, emoticon e quant’altro (persino cambiamenti &amp; co.) senza dover sacrificare nessun gallo nero al signore oscuro. Un grosso passo avanti. Mi scusino gli sviluppatori che si sentono vessati da queste osservazioni… ma lo sapete meglio di me che è vero. Vi vengo a portare le arance al gabbio, prometto.</li>
<li><strong>Nuova pagina di login</strong>: è bellissima. Punto. Forse un filo enterprise, ma ci sta.</li>
<li><strong>VERSION nella sidebar</strong>: se avete un file VERSION all’interno del repository, vi verrà mostrato nella sidebar il contenuto, ovvero il version number. Mai più persi tra mille rilasci ;)</li>
<li><strong>Milestone di gruppo</strong>: semplicemente epico. Se abbiamo un progetto suddiviso in più sottoprogetti, le group milestone permettono di raggruppare tutte le issue di tutti i progetti che appartengono a una milestone nominata ugualmente in ogni sezione. Questo significa che per la milestone “pippo” potremo avere una visione di insieme parecchio ampia per quanto riguarda ogni milestone e chiuderla (o riaprirla per lavori dell’ultimo minuto) con molta più cognizione di causa, esaminando la situazione nel complesso.</li>
</ul>
<p>È sicuramente un bel traguardo, questo, sia per <strong>GitLab</strong> che per l'intera comunità open source: avere a disposizione sia GitHub (che ormai è lo <strong>standard de facto</strong> per tutto quello che viene portato avanti in totale apertura) che un software as-a-service per sviluppare qualcosa di interno dove decidere la disponibilità per il pubblico di ogni repository è un grosso valore aggiunto, dato che naturalmente si abbassano i costi della piattaforma di code hosting, e soprattutto chi vuole può installare il proprio software in-house senza dover dipendere da fornitori con comportamenti ballerini.</p>
<p>Auguri GitLab, ancora una volta :-)</p>
