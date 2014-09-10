---
layout: post
status: publish
published: true
title: 'KDE: finalmente un nuovo gestore dei monitor'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1979
wordpress_url: http://dottorblaster.it/?p=1979
date: '2012-12-30 13:14:27 +0100'
date_gmt: '2012-12-30 12:14:27 +0100'
categories:
- Linux
tags:
- KDE
comments:
- id: 18132
  author: Stefanauss
  author_email: stefanauss@gmail.com
  author_url: ''
  date: '2012-12-30 16:53:00 +0100'
  date_gmt: '2012-12-30 15:53:00 +0100'
  content: |-
    Questa è roba meravigliosa: fixa tutto quello che c'era di male nel gestore precedente, fa tutto quello che già fa il gestore schermi GNOME, ed in più gestisce out-of-the-box il lid closing!

    Perfetto per chi come me ha sempre un monitor esterno attaccato.

    Se hanno attuato anche il persistere di diverse configurazioni a seconda del modello del monitor (che indicherebbe diverse location e quindi probabili impostazioni differenti) è la perfezione.
- id: 18133
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-12-30 17:00:00 +0100'
  date_gmt: '2012-12-30 16:00:00 +0100'
  content: 'Guarda, questo non te lo so dire ma così a occhio dovrebbero aver aggiustato
    anche questo: l''hotplug dovrebbe andare a seconda della model string, non a seconda
    dell''uscita VGA/HDMI. (Anche perché altrimenti romperesti qualche schermo con
    dei framerate troppo alti)'
---
<p>Come ho già scritto diversi mesi fa nella mia <a href="http://dottorblaster.it/2012/08/recensione-kde-4-9/">recensione di KDE 4.9</a>, trovo l'ultima versione di KDE veramente un bel giocattolo, e nonostante una parentesi da GNOME-er durata anche parecchie settimane, sono ormai mesi e mesi che <strong>KDE</strong> mi serve molto bene come ambiente desktop, dandomi qualsiasi tool per essere produttivo in ogni situazione. Il vero problema che ho sempre riscontrato in KDE, tuttavia, è stato sin da quando ho cominicato a usarlo il non fornirmi un comportamento soddisfacente "on the fly" con i <strong>monitor</strong>. Dover sempre aprire il gestore della configurazione anche solo per attaccare un <strong>monitor esterno</strong> è una cosa incredibilmente fastidiosa - credetemi - soprattutto se come me si usa un PC soltanto (togliendo i server e i giocattoli che costellano la mia stanza), facendo poi la spola tra una stanza e l'altra, con la necessità di attaccare e staccare un monitor esterno un numero di volte veramente elevato.</p>
<p><img class="aligncenter" alt="KDE" src="http://farm5.staticflickr.com/4083/5171406641_f5452f9c6a.jpg" width="500" height="313" /></p>
<p>Giorni fa però facendo un giro sul <a href="http://www.afiestas.org/screen-management-got-magic/">blog di Alex Fiestas</a> (prima) e su <a href="http://www.progdan.cz/2012/09/display-management-in-kde/">quello di Progdan</a> (poi - alias <strong>Dan Vràtil</strong>, già famoso per altre collaborazioni di prestigio) mi sono imbattuto in questo simpatico tentativo di ridare vita a un comportamento civile per <strong>KDE</strong> riguardo <strong>l'hotplugging di monitor esterni</strong>. Il video ufficiale che segue dimostra più o meno quello che voglio dire:</p>
<p><iframe src="http://player.vimeo.com/video/56296943" height="281" width="500" allowfullscreen="" frameborder="0"></iframe></p>
<p>Come vedete, il buon Alex si diletta a cambiare al volo le sue configurazioni mostrando anche che al successivo "riattacco" del monitor, questo viene riconosciuto e riportato esattamente alle impostazioni con cui lo avevamo staccato. Non male, non male davvero: queste sono le cose di cui Linux ha veramente bisogno, le piccolezze che hanno bisogno di essere rifinite. Mi spiace solo che abbiamo dovuto attendere la fine del 2012 per un tool simile in <strong>KDE</strong> - il cui nome è <strong>KScreen</strong> - anche se sono lieto che il contributo venga da due sviluppatori appositamente contattati da un duo di compagnie d'eccezione: <strong>Blue Systems</strong>, ormai patron di KDE, e <strong>Red Hat</strong>, che invece versa più dal lato <strong>GNOME</strong>, e per la quale quindi questo è un contributo che sostanzialmente vale doppio.</p>
<p><strong>Finalmente</strong>.</p>
<p><em>Image courtesy of <a href="http://www.flickr.com/photos/muadib/5171406641/">Martin</a></em></p>
