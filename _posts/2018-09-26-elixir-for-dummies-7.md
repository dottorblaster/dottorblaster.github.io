---
layout: post
status: publish
published: true
title: Elixir per idioti /7, mettiamo le mani in pasta con Phoenix Framework
date: 2018-09-26 19:45:47 +0200
categories:
- Development
tags:
- elixir
- phoenix framework
- phoenix
- linguaggi
- sviluppo software
- software development
---

Visto che abbiamo scavato sempre più a fondo nelle basi del linguaggio, proviamo a fare qualcosa di più cicciotto con il framework web del momento, ovvero Phoenix. **Phoenix Framework** è, come abbiamo appena detto, un framework per il web che ci permette di sviluppare il nostro backend in Elixir seguendo quello che a grandi linee sembra un pattern [MVC](https://it.wikipedia.org/wiki/Model-view-controller). In realtà come tutti i framework di ultime generazione, può essere piegato per sviluppare backend REST/RESTful. Ma con tutti questi acronimi abbiamo già messo troppa carne al fuoco.

Dato che abbiamo già un'installazione funzionante di **Elixir**, possiamo usare Mix per installare il pacchetto di Phoenix:

```shell
$ mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez
```

Per quanto riguarda le **utility che ci facilitano la vita sul frontend**, avremo bisogno anche di **NodeJS**. Su macOS io lo installo tramite Homebrew:

```shell
$ brew install node
```

Su una distribuzione Linux Debian-based come Ubuntu dobbiamo invece scaricare il pacchetto più aggiornato o servirci direttamente dei repository ufficiali:

```shell
$ sudo apt-get install nodejs
```

Per poi fare un link mano in modo che il comando `node` faccia partire NodeJS.

```shell
$ ln -s /usr/bin/nodejs /usr/bin/node
```

Una volta dati questi comandi, siamo pronti. In teoria avremmo bisogno di configurare anche un database PostgreSQL in locale in modo da poter salvare eventuali dati, ma questo è già qualcosa di più avanzato. Abbiamo una serie di **task Mix** che ci aiutano con la creazione di un nuovo progetto; attraverso `mix phx.new` possiamo creare una nuova struttura e soprattutto definire di cosa abbiamo bisogno. Possiamo escludere il frontend e possiamo escludere la parte di interfaccia al database se non ci servono.

Per il mio esempio escluderò di aver bisogno del database.

```shell
$ mix phx.new my_phoenix_demo --no-ecto
```

Abbiamo di seguito un output dei file creati e qualche indicazione utile per cominciare a muovere i nostri primi passi con, dopo tanto parlare di massimi sistemi, un esempio di applicazione reale:

```
* creating my_phoenix_demo/config/config.exs
* creating my_phoenix_demo/config/dev.exs
* creating my_phoenix_demo/config/prod.exs
* creating my_phoenix_demo/config/prod.secret.exs
* creating my_phoenix_demo/config/test.exs
* creating my_phoenix_demo/lib/my_phoenix_demo/application.ex
* creating my_phoenix_demo/lib/my_phoenix_demo.ex
* creating my_phoenix_demo/lib/my_phoenix_demo_web/channels/user_socket.ex
* creating my_phoenix_demo/lib/my_phoenix_demo_web/views/error_helpers.ex
* creating my_phoenix_demo/lib/my_phoenix_demo_web/views/error_view.ex
* creating my_phoenix_demo/lib/my_phoenix_demo_web/endpoint.ex
* creating my_phoenix_demo/lib/my_phoenix_demo_web/router.ex
* creating my_phoenix_demo/lib/my_phoenix_demo_web.ex
* creating my_phoenix_demo/mix.exs
* creating my_phoenix_demo/README.md
* creating my_phoenix_demo/test/support/channel_case.ex
* creating my_phoenix_demo/test/support/conn_case.ex
* creating my_phoenix_demo/test/test_helper.exs
* creating my_phoenix_demo/test/my_phoenix_demo_web/views/error_view_test.exs
* creating my_phoenix_demo/lib/my_phoenix_demo_web/gettext.ex
* creating my_phoenix_demo/priv/gettext/en/LC_MESSAGES/errors.po
* creating my_phoenix_demo/priv/gettext/errors.pot
* creating my_phoenix_demo/lib/my_phoenix_demo_web/controllers/page_controller.ex
* creating my_phoenix_demo/lib/my_phoenix_demo_web/templates/layout/app.html.eex
* creating my_phoenix_demo/lib/my_phoenix_demo_web/templates/page/index.html.eex
* creating my_phoenix_demo/lib/my_phoenix_demo_web/views/layout_view.ex
* creating my_phoenix_demo/lib/my_phoenix_demo_web/views/page_view.ex
* creating my_phoenix_demo/test/my_phoenix_demo_web/controllers/page_controller_test.exs
* creating my_phoenix_demo/test/my_phoenix_demo_web/views/layout_view_test.exs
* creating my_phoenix_demo/test/my_phoenix_demo_web/views/page_view_test.exs
* creating my_phoenix_demo/.gitignore
* creating my_phoenix_demo/assets/brunch-config.js
* creating my_phoenix_demo/assets/css/app.css
* creating my_phoenix_demo/assets/css/phoenix.css
* creating my_phoenix_demo/assets/js/app.js
* creating my_phoenix_demo/assets/js/socket.js
* creating my_phoenix_demo/assets/package.json
* creating my_phoenix_demo/assets/static/robots.txt
* creating my_phoenix_demo/assets/static/images/phoenix.png
* creating my_phoenix_demo/assets/static/favicon.ico

Fetch and install dependencies? [Yn] Y
* running mix deps.get
* running cd assets && npm install && node node_modules/brunch/bin/brunch build
* running mix deps.compile

We are all set! Go into your application by running:

    $ cd my_phoenix_demo

Start your Phoenix app with:

    $ mix phx.server

You can also run your app inside IEx (Interactive Elixir) as:

    $ iex -S mix phx.server

```

L'unica cosa che ci viene chiesta è se vogliamo già scaricare le prime dipendenze e cominiciare con una prima compilazione del progetto Elixir e degli asset grafici (JavaScript e quant'altro).

Possiamo provare subito il nostro _hello world_, entrando nella directory che abbiamo creato e dando i comandi che ci consiglia lo stesso Phoenix:

```shell
$ cd my_phoenix_demo
$ mix phx.server
Compiling 12 files (.ex)
Generated my_phoenix_demo app
[info] Running MyPhoenixDemoWeb.Endpoint with Cowboy using http://0.0.0.0:4000
19:23:19 - info: compiled 6 files into 2 files, copied 3 in 1.3 sec
```

Puntando il nostro browser all'indirizzo `http://localhost:4000/` possiamo vedere la nostra applicazione che gira.

![Phoenix hello world](https://gitlab.com/dottorblaster/blog-images/raw/master/images/elixir/phoenix_homepage.png)

All'interno della directory abbiamo tutti i file della nostra nuova applicazione Phoenix, tra cui i controller, il router, e i template HTML (file di estensione `.eex`). Proviamo a vedere com'è fatto il **router**, che è un po' il punto nevralgico dove avviene lo smistamento delle chiamate al nostro server:

```elixir
# lib/my_phoenix_demo_web/router.ex

defmodule MyPhoenixDemoWeb.Router do
  use MyPhoenixDemoWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", MyPhoenixDemoWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", MyPhoenixDemoWeb do
  #   pipe_through :api
  # end
end
```

Quello del router è un [DSL](https://it.wikipedia.org/wiki/Domain-specific_language) specifico creato apprositamente per specificare gli endpoint della nostra applicazione e redirezionare le richieste allo specifico controller di competenza. In questo caso, abbiamo solo una rotta che rappresenta la home page.

Proviamo ad aggiungere una rotta nuova che mostri all'utente una pagina con la data odierna. Modifichiamo il router in questo modo:

```elixir
scope "/", MyPhoenixDemoWeb do
  pipe_through :browser # Use the default browser stack

  get "/", PageController, :index
  get "/today-date", PageController, :date
end
```

In questo modo ogni volta che fare una richiesta a `/today-date`, verrà eseguita la funzione `date` all'interno del `PageController` (che è appunto un controller. Lo dice la parola stessa). Andiamo aggiungerla quindi:

```elixir
# lib/my_phoenix_demo_web/controllers/page_controller.ex

defmodule MyPhoenixDemoWeb.PageController do
  use MyPhoenixDemoWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def date(conn, params) do
    today_date = Date.utc_today() |> Date.to_string
    render conn, "date.html", today_date: today_date
  end
end
```

Ho appunto creato la **nuova funzione** che prende la data, fa uso del [pipe operator](http://dottorblaster.it/2018/07/elixir-for-dummies-5/) di cui abbiamo già parlato e inietta il valore in un template che poi renderizza. Andiamo quindi a creare questo template, che sarà il file `lib/my_phoenix_demo_web/templates/page/date.html.eex`:

```html
<p>Today is: <%= @today_date %></p>
```

Facciamo ripartire il server con `mix phx.server`. Puntiamo poi il browser su `http://localhost:4000/today-date` e via, il gioco è fatto. potremo osservare l'agognato risultato del nostro lavoro. E non finisce qui: quello che abbiamo imparato molto a grandi linee è come sviluppare una feature seguendo un pattern MVC di base, ma possiamo fare anche altro. Per esempio, io uso Phoenix per fare bootstrap anche solo di applicazioni server-side che forniscano API RESTful.

![Phoenix today date application](https://gitlab.com/dottorblaster/blog-images/raw/master/images/elixir/phoenix_date_experiment.png)

Per come la vedo io, Phoenix nasconde molto delle vere potenzialità (e dei veri problemi) che Elixir può offrire, ma non è che un grandissimo trampolino di lancio e una porta di facilissimo ingresso per chi vuole cominciare a scrivere codice con una curva di apprendimento bassissima.

[Vai alla parte 6](http://dottorblaster.it/2018/07/elixir-for-dummies-6/)
