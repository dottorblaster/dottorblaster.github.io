---
layout: post
status: publish
published: true
title: JRuby lentissimo a precompilare gli asset - la risposta è NodeJS
date: 2016-01-07 12:00:21 +0100
categories:
- Tech
tags:
- ruby
- jruby
- javascript
- nodejs
---

In questi giorni al lavoro mi sono trovato davanti a una cosetta allo stesso tempo interessante e allucinante: un applicativo Rails deployato sotto **JRuby** (astenersi commenti tipo "OMG JRuby ma che state a fà") che **per precompilare gli asset impiegava un tempo tra i 40 e i 50 minuti**, quando non si piantava tutto il job di continuous integration.

E olé, verso nuove avventure: addentrandomi un po' dentro questa roba ho capito che **rake** usa l'ambiente Javascript che si trova sotto il sedere per precompilare/minificare/offuscare/quellochevepare, quindi ho sostituito il runtime a livello applicativo con tre righe semplici ma efficaci nella configurazione:

```ruby
if defined?(ExecJS) && system('which node')
    ExecJS.runtime = ExecJS::Runtimes::Node
end
```

Questo fa si che, una volta trovato l'eseguibile di **NodeJS** sul filesystem, e appurato che si stia usando ExecJS per eseguire il Javascript all'interno dell'applicazione, venga **utilizzato NodeJS come runtime Javascript**, e non quello built-in di JRuby che causa un rallentamento notevole.

Nel nostro caso, il tempo impiegato dalla build è stato ridotto da 45 minuti medi a circa 5 minuti medi. Chiaramente questa soluzione necessita di NodeJS installato sulla macchina.

