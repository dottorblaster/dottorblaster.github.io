---
layout: post
status: publish
published: true
title: Xorg 7.8 è fra noi; installiamolo su Arch Linux :)
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 638
wordpress_url: http://dottorblaster.it/?p=638
date: '2010-04-06 21:09:38 +0200'
date_gmt: '2010-04-06 20:09:38 +0200'
categories:
- Linux
tags:
- Arch
comments:
- id: 9880
  author: berseker
  author_email: berseker86@gmail.com
  author_url: ''
  date: '2010-04-06 20:56:38 +0200'
  date_gmt: '2010-04-07 01:56:38 +0200'
  content: ..mm se posso permettermi, noto un velo un po&#39; troppo polemico! Il
    repository messo su "in fretta e furia" è stato reso disponibile praticamente
    il giorno stesso dell&#39;uscita di Xorg (prima distribuzione ad utilizzare xorg7.8),
    in modo da sfamare la nota archlinuxiana sete di novità, è un repo esterno e quindi
    opzionale, e vista la natura praticamente da considerare più testing di testing
    ;)<br>malfunzionamenti vari ci sono, anche perchè le modifiche e i cambiamenti
    avvenuti nel sistema grafico linuxiano da 6 mesi a questa parte sono enormi e,
    complice la intrinseca difficoltà nel sincronizzare il lavoro in ambiente open,
    portano ovviamente a dei problemi.<br><br>Nvidia sarà pure l&#39;azienda che chiude
    all&#39;opensource, ma è l&#39;unica che fornisce driver performanti e compatibili
    con kernel e xorg recenti anche prima che questi ultimi escano (^^). Nonostante
    ciò, non vedo l&#39;ora che nouveau raggiunga un buon livello di prestazioni per
    fare lo switch, perchè kms è una feature troppo appetitosa per rinunciarci!<br><br>Concordo
    sull&#39;ultima frase, se non sapete dove mettere le mani in caso di necessità
    e non volete problemi vari, "meglio tenerlo così" ;)
- id: 9881
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-04-06 21:09:09 +0200'
  date_gmt: '2010-04-07 02:09:09 +0200'
  content: No guarda, sul fatto del repo messo su in fretta e furia hai frainteso
    :D<br>In realtà mi sto riferendo più a kde-unstable e gnome-unstable, che sono
    software che dopo il loro tempo nei repo dedicati, finiscono in testing per tempi
    infinitesimali, oppure, ancora peggio, passano direttamente in extra pur conservando
    dei bug idioti che con due settimane di testing in più verrebbero risolti senza
    far smadonnare nessuno. Ecco, il mio succo è quello :P
- id: 9882
  author: berseker
  author_email: berseker86@gmail.com
  author_url: ''
  date: '2010-04-06 21:39:57 +0200'
  date_gmt: '2010-04-07 02:39:57 +0200'
  content: aaah la polemica aveva radici ben più profonde!! allora niente da dire,
    si vede che non si è perso il vizietto.. io è dalla 2.28 che ho deciso di dare
    un taglio a DE sempre pieni degli stessi bug man mano che si passa di versione
    e sono felicemente approdato a una soluzione wm+thunar ;) ora non riesco più a
    tornare indietro
- id: 9883
  author: baghera
  author_email: fedech82@mail.com
  author_url: ''
  date: '2010-04-06 22:51:17 +0200'
  date_gmt: '2010-04-07 03:51:17 +0200'
  content: 'Giusto un appunto: è stato rilasciato xorg-server 1.8 , ma non c&#39;è
    stato un nuovo rilascio di Xorg (tra l&#39;altro xorg-server 1.7.x fa parte di
    Xorg 7.5, quindi al limite dovrebbe essere stato rilasciato Xorg 7.6 :))'
- id: 9884
  author: teolinux
  author_email: teolinux@hotmail.com
  author_url: ''
  date: '2010-04-07 04:08:18 +0200'
  date_gmt: '2010-04-07 09:08:18 +0200'
  content: Qualche bug l&#39;hanno già sistemato. Aspettiamo aggiornamentio repo...<br><a
    href="http://www.phoronix.com/scan.php?page=news_item&px=ODEyNA" rel="nofollow">http://www.phoronix.com/scan.php?page=news_item...</a>
- id: 9885
  author: telperion
  author_email: nikita_top@libero.it
  author_url: ''
  date: '2010-04-07 15:07:12 +0200'
  date_gmt: '2010-04-07 20:07:12 +0200'
  content: Bah, passano gli xorg ma non cambia mai nulla, forse con schede Intel,
    ma con le Nvidia e le lib opegl proprietarie non c&#39;è alcuna differenza tra
    uno xorg e il successivo ...<br><br>cit<br>"Tanto rumore per nulla"<br><br>;)
- id: 9886
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-04-07 15:09:52 +0200'
  date_gmt: '2010-04-07 20:09:52 +0200'
  content: Dal punto di vista prestazionale è tutto fermo, anche perchè per avere
    un vero boost servirebbe qualcosa di più di un aggiornamento, ma dal punto di
    vista delle feature cambia ancora tutto; niente più HAL :P
- id: 9887
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2010-04-07 21:21:46 +0200'
  date_gmt: '2010-04-08 02:21:46 +0200'
  content: Cavolo hai ragione, mi sono lasciato trasportare da alcune versioni dei
    pacchetti :D
---
<p>Pochi giorni fa è stato rilasciato <strong>Xorg</strong> 7.8, ultima versione del sistema grafico più usato dai pinguini e dai diavoletti (in prevalenza, certo); dato che ultimamente va molto di moda, è stato deciso, invece di sbattere tutto in testing, di aprire un repository a parte per chi volesse provare le prime pacchettizzazioni del nuovo Xorg. Tutto ciò che verrà detto ora, è scritto a prescindere dal fatto che un giorno farò un post volutamente polemico sull'<em>uso dei repo alla cazzo di cane</em> che si fa più o meno da quando Arch è passata a <strong>KDE</strong> 4.</p>
<p>Ordunque, è stato messo su in fretta e furia un repository con tutti i pacchetti aggiornati del server grafico, che può essere facilmente aggiunto al nostro pacman.conf per aggiornare il nostro sistema in maniera assolutamente veloce.</p>
<p style="text-align: center;"><img class="alignnone" src="http://i37.tinypic.com/2uif24k.png" alt="" width="431" height="345" /></p>
<p>Apriamo pacman.conf...</p>
<p><code>sudo nano /etc/pacman.conf</code></p>
<p>...ed aggiungiamo in tutta tranquillità le righe che riguardano il repository chiamato, giustappunto, <strong>[xorg18]</strong>.</p>
<p><code>[xorg18]<br />
Include = /etc/pacman.d/mirrorlist</code></p>
<p>Scritto tutto ciò che serve, <strong>obbligatoriamente prima</strong> dei repository ufficiali, salviamo, chiudiamo e diamo un'aggiornata. A questo punto ci troveremo con il server grafico 1.8 e tutto il sistema alla versione 7.8; problemi noti? Per me, già troppi. Pare che con Nvidia infatti si debba aggiungere l'opzione <em>ignoreABI</em> all'avvio del server altrimenti l'intruglio ucciderà il nostro cane; ma dato che io uso Intel, per fortuna il server si avvia tranquillamente.</p>
<p>Diversamente, se con <strong>Compiz</strong> attivo si imposta la risoluzione del monitor, si viene rispediti direttamente a <strong>GDM</strong> come se nulla fosse successo. Sicuramente saranno problemi che verranno aggiustati in quattro e quattr'otto dagli sviluppatori così solerti e bravi, ma per ora, insomma, come dire,<strong> ce lo teniamo così</strong> :D</p>
