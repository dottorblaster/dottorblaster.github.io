---
layout: post
status: publish
published: true
title: 'Yandex apre i propri DNS: piccolo test approfondito'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2297
wordpress_url: http://dottorblaster.it/?p=2297
date: '2013-11-14 15:17:36 +0100'
date_gmt: '2013-11-14 14:17:36 +0100'
categories:
- Web
tags:
- DNS
- internet
- yandex
comments: []
---
<p>Proprio in questi giorni, ho visto che <strong>Yandex</strong> ha finalmente messo in stato di operatività il proprio <strong>DNS pubblico</strong>. Evidentemente l'operazione del colosso russo è un po' la stessa di <strong>Google</strong>, anche se in scala minore (non intesa come worldwide) e - beh - anche dai risultati un po' troppo deficitari per quello che a tutti gli effetti è uno dei motori di ricerca e provider di servizi di maggioranza da quelle parti.</p>
<p>Ho infatti voluto fare qualche test, tanto per fare, dato che nel frattempo seguivo <a href="https://twitter.com/OmarCaf">Omar</a> che spiegava un po' di <strong>iOS</strong>, così ho attivato <strong>namebench</strong>, un pratico programmino in Python fatto da Google proprio per individuare i DNS migliori nella propria zona.</p>
<p>Gli <strong>IP dei server</strong> sono rispettivamente:</p>
<ul>
<li><strong>77.88.8.1</strong> per il server DNS primario;</li>
<li><strong>77.88.8.8</strong> per il server DNS secondario.</li>
</ul>
<h3>Test tramite namebench</h3>
<p>Il <strong>caso d'uso</strong> mi ha fornito la possibilità di documentarmi su <a href="https://code.google.com/p/namebench/">namebench</a> e usarlo: è un cosino carino, e per fare qualche <strong>analisi prestazionale sui DNS</strong> che ci interessano è probabilmente uno dei migliori software sulla faccia della terra. L'unico all'altezza, mi pare, avrei dovuto farlo girare tramite Wine (essenzialmente perché solo per Windows), quindi anche no.</p>
<p><strong>Namebench</strong> mi ha dato qualche risultato interessante. Per esempio, dei bellissimi grafici fatti con <strong>Google Charts</strong> della reattività di alcuni popolari server DNS comparati a quelli di Yandex:</p>
<p><img src="http://oi41.tinypic.com/25ur5tf.jpg" alt="Yandex DNS response duration" /></p>
<p>Come vediamo, i <strong>DNS di Yandex</strong> in questo ambito arrivano praticamente ultimi. Se la cavano un po' meglio guardando la distribution chart delle risposte, anche se chiaramente <strong>non c'è storia con i DNS di Google</strong>, tantomeno con quelli delle major principali con cui è stato fatto il confronto. Chiaramente con i <strong>DNS di Telecom</strong> il confronto viene impari, perché si trovano su territorio nazionale, mentre verso la Russia a me potrebbero essere state applicate delle limitazioni di servizio per quanto riguarda i miei pacchetti in entrata da loro (è normale, ogni provider lo fa).</p>
<p><img src="http://i41.tinypic.com/28iti4p.jpg" alt="Yandex DNS response distribution chart" /></p>
<p>Insomma, come mi aveva preannunciato <a href="http://twitter.com/dema">il buon Dema su Twitter</a> e come era emerso dai miei rapidi ping preliminari, poca roba di cui essere felici. Però è stato un bell'<strong>esperimento nerd</strong>.</p>
<p>http://twitter.com/dema/status/400217983970447360</p>
