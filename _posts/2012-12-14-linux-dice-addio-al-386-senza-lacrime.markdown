---
layout: post
status: publish
published: true
title: Linux dice addio al 386, senza lacrime
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 1952
wordpress_url: http://dottorblaster.it/?p=1952
date: '2012-12-14 16:27:49 +0100'
date_gmt: '2012-12-14 15:27:49 +0100'
categories:
- Linux
tags:
- Arch Linux
- linux
- open source
comments:
- id: 18067
  author: Giovanni
  author_email: giovanni.cappellini@gmail.com
  author_url: http://www.quacos.com
  date: '2012-12-14 17:11:00 +0100'
  date_gmt: '2012-12-14 16:11:00 +0100'
  content: Dal punto di vista filosofico, è una perdita enorme. Però, forse calcolatori
    puri 386 non esistono più nemmeno come sistemi embed. Però se ad ogni aggiornamento
    del kernel doveva essere fatto del lavoro extra per mantenere questa possibilità...
    il "good riddance" ci sta tutto!
- id: 18068
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2012-12-14 18:52:00 +0100'
  date_gmt: '2012-12-14 17:52:00 +0100'
  content: Beh filosoficamente è come uccidere il padre di tanta innovazione, secondo
    me. Però, quando ci vuole... :)
---
<p>In questi giorni mi sono passate per le mani un sacco di email: una tra quelle che mi hanno colpito maggiormente è proprio quella di "addio" del kernel <strong>Linux</strong> all'architettura <strong>386</strong>. Uno tra i supporti più antichi all'interno del kernel, tanto che tutte le distribuzioni "cardine" fino a non molto tempo fa continuavano a voler supportare con ottimizzazioni varie ed eventuali anche un'architettura antica come questa.</p>
<p><img class="aligncenter" alt="Python code" src="http://farm5.staticflickr.com/4004/4653088356_194d56a59a.jpg" width="500" height="330" /></p>
<p>Beh, lungi da me piangere una <strong>modernizzazione dell'infrastruttura</strong>. Come da mail, questo comporta una <strong>riduzione della complessità</strong> e anche qualche miglioramento in quanto a performance (meno righe di codice, bla bla bla), quindi non posso che esserne contento. La nostalgia risale al fatto che io abbia ricordato come anni e anni fa scaricavo distribuzioni -i386, anche se una delle ultime che scaricai fu <strong>Arch Linux</strong> che, in avanti rispetto ad altri, ottimizzava già per <strong>i686</strong>. Che bella cosa.</p>
<p>Riporto integralmente il <a href="https://git.kernel.org/?p=linux/kernel/git/torvalds/linux.git;a=commit;h=743aa456c1834f76982af44e8b71d1a0b2a82e21">commit message</a> di <strong>Linus Torvalds</strong>:</p>
<blockquote><p>Merge branch 'x86-nuke386-for-linus' of git://git./linux/kernel/git/tip/tip</p>
<p>Pull "Nuke 386-DX/SX support" from Ingo Molnar:<br />
"This tree removes ancient-386-CPUs support and thus zaps quite a bit<br />
of complexity:</p>
<p>24 files changed, 56 insertions(+), 425 deletions(-)</p>
<p>... which complexity has plagued us with extra work whenever we wanted<br />
to change SMP primitives, for years.</p>
<p>Unfortunately there's a nostalgic cost: your old original 386 DX33<br />
system from early 1991 won't be able to boot modern Linux kernels<br />
anymore.  Sniff."</p>
<p>I'm not sentimental.  Good riddance.</p>
<p>* 'x86-nuke386-for-linus' of git://git.kernel.org/pub/scm/linux/kernel/git/tip/tip:<br />
x86, 386 removal: Document Nx586 as a 386 and thus unsupported<br />
x86, cleanups: Simplify sync_core() in the case of no CPUID<br />
x86, 386 removal: Remove CONFIG_X86_POPAD_OK<br />
x86, 386 removal: Remove CONFIG_X86_WP_WORKS_OK<br />
x86, 386 removal: Remove CONFIG_INVLPG<br />
x86, 386 removal: Remove CONFIG_BSWAP<br />
x86, 386 removal: Remove CONFIG_XADD<br />
x86, 386 removal: Remove CONFIG_CMPXCHG<br />
x86, 386 removal: Remove CONFIG_M386 from Kconfig</p></blockquote>
<p>:')</p>
<p>L'immagine non c'entra niente, è Python, ma mi piaceva molto.</p>
<p><em>Image courtesy of <a href="http://www.flickr.com/photos/nyuhuhuu/4653088356/in/photostream/">nyuhuhuu</a></em></p>
