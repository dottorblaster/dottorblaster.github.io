---
layout: post
status: publish
published: true
title: Thor - ovvero scriviamoci il nostro task runner per Ruby
date: 2017-05-03 23:02:21 +0200
categories: 
- Development
tags: 
- thor
- jekyll
- rake
- ruby
---

Stasera tornando a casa ho avuto la "brillante idea" di mettermi a trafficare con il Rakefile che uso per manutenere questo blog e automatizzare ad esempio la creazione dei file **markdown** o per eseguire una build locale. Mi è capitato di notare una cosa più del solito: il metodo che usa Rake per passare i parametri ai task fa schifo.

Per passare un parametro a un task bisogna scrivere una cosa tipo `rake foo[bar]`, che per quanto possa essere rapido da scrivere non è nemmeno compatibile con ZSH, che si lamenta. L'equivalente che ho usato sempre sino ad oggi è `rake "new[post-slug]"`, che mette a tacere ZSH ma fa ancora più schifo esteticamente. Viceversa guardandomi intorno per un modo più furbo di passare i parametri a Rake, ho scoperto **Thor**.

Thor è una figata di software che si compone di due pezzi: una libreria per creare delle **utility CLI**, piccoli programmini a riga di comando che sbrighino dei task arbitrari. L'esempio di base è questo, preso dal [sito ufficiale](http://whatisthor.com/):

```ruby
require "thor"

class MyCLI < Thor
  # contents of the Thor class
end

MyCLI.start(ARGV)
```

In realtà sfruttando qualche gabola interna documentata in maniera un po' allegra (ossia: io non ho trovato documentazione su questo, ma ho rubato in giro) possiamo sfruttare **Thor** come **Rake**, per scriverci la nostra classe Ruby che faccia da task runner. Per fare un esperimento ho preso il mio Rakefile:

```ruby
require 'date'

task default: %w[build]

task :run do
	sh "jekyll serve"
end

task 'build' do
	sh "jekyll build"
end

task :new, [:title] do |t, args|
	fn = "_posts/#{Date.today().to_s()}-#{args.title || "slug"}.md"
	File.new(fn, "w")
	puts("Successfully create file: #{fn}")
end
```

E l'ho riscritto usando Thor. Ho creato un **Thorfile** scritto così:

```ruby
require 'date'

class Default < Thor
  
  desc 'up', 'Serves the blog locally through Jekyll\'s embedded server'
  def up
    exec("jekyll serve")
  end

  desc 'build', 'Builds the static site'
  def build
    exec("jekyll build")
  end

  desc 'new SLUG', 'Creates a new post with the provided slug'
  def new(slug)
    filename = "_posts/#{Date.today().to_s()}-#{slug}.md"
    File.new(filename, "w")
    puts("Created file: #{filename}")
  end

end
```

Ci sono due **trick** che usiamo, e che sono leggermente sottintesi nella [documentazione](https://github.com/erikhuda/thor/wiki): un Thorfile viene sempre cercato come predefinito insieme a qualsiasi file `.thor`, quindi possiamo chiamare il file in questo modo ed evitare di passare un filename a Thor stesso; l'altro trucchetto è che una classe `Default` non ha bisogno di prefissi per i nomi dei task. In questo modo leviamo di mezzo un bel po' di complessità rispetto all'uso classico di Thor, che è ben più potente, definendo i task in maniera molto simile a un **Rakefile**.

Tutto questo con un plus però: ovvero il fatto che possiamo finalmente passare degli argomenti in una maniera normale e umana ai nostri task, e il check automatico degli argomenti da parte di Thor stesso fa sì che non sbagliamo a passare più o meno parametri di quelli necessari, pena degli **alert super sexy**.

L'effetto è questo:

```sh
$ thor new thor-task-runner
Created file: _posts/2017-05-03-thor-task-runner.md

$ thor new 
ERROR: "thor new" was called with no arguments
Usage: "thor :new SLUG"

$ thor new top kek
ERROR: "thor new" was called with arguments ["top", "kek"]
Usage: "thor :new SLUG"
```

Io per stasera ho trovato il giocattolo nuovo, e sono proprio soddisfatto. Come sempre, è bandita la domanda sulla vita sociale, dato che la risposta è come al solito un no secco. **Adoro il mio divano**. E adoro anche Thor.
