---
layout: post
status: publish
published: true
title: Aggiornato Emesene-SVN, fixate le dipendenze del pacchetto
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 181
wordpress_url: http://blaster.netsons.org/?p=181
date: '2008-07-07 16:34:27 +0200'
date_gmt: '2008-07-07 14:34:27 +0200'
categories:
- Linux
- Tech
- Desktop Environment
- Workflow
tags:
- Lavori
- Informatica
- Gnome
- Arch
- Repository
comments: []
---
<p>Dopo una caccia al malfunzionamento, sono finalmente riuscito a scoprire cosa non andava nel pacchetto <em>emesene-svn</em>, mantenuto da me nel mio speciale repository per Arch.</p>
<p>La questione è stata abbastanza semplice da risolvere: Emesene necessita del pacchetto <em>notification-daemon</em> per funzionare al pieno delle sue capacità, e per poter usfruire delle comodissime (e integratissime) notifiche in Python che sfruttano LibNotify. Inoltre è da qualche revisione che, se non si ha <em>notification-daemon</em> installato, Emesene si rifiuta di avviarsi.</p>
<p>Ho risolto brillantemente specificando il pacchetto incriminato tra le dipendenze; spero che non si verifichino più problemi di sorta.</p>
