---
layout: post
status: publish
published: true
title: Elixir per idioti /8, costruiamo una API REST super semplice
date: 2020-12-13 15:50:31 +0100
categories: 
- Development
tags:
- elixir
- erlang
- elixir per idioti
- mix
- api
- api rest
- rest
- restful
---

È un sacco di tempo che non parliamo di Elixir, e il nostro percorso era rimasto un po' appeso con [la parte 7](https://dottorblaster.it/2018/09/elixir-for-dummies-7/), dove avevamo creato un'applicazioncina di prova con Phoenix Framework. Se vogliamo fare cose più complicate come modellare un microservizio tutto nostro attorno a un dominio ben preciso però qualcosa come quello che abbiamo visto è limitante, perché visualizzare delle paginette web limita un pochino l'interoperabilità che possiamo avere con altri servizi.

E se al posto di pagine web volessimo servire dei JSON in puro stile **API REST-ful**[^1]?

**Elixir e Phoenix** coprono anche questo caso d'uso in maniera eccellente. In realtà potremmo fare il tutto anche senza Phoenix solo usando il webserver che ne è alla base, cioè Cowboy, ma Phoenix offre una serie di semplificazioni "on top" che ci rendono leggermente più semplice la vita, accorciano in maniera notevole questo tutorial, e risultano anche comode per evoluzioni future della nostra piccola API, come il supporto out-of-the-box a JWT[^2].

Bando alle ciance, andiamo a creare il nostro nuovo progettino:

```sh
$ mix new tiny_echo_api --no-webpack --no-ecto
```

Usando lo **scaffolder di Phoenix**, che è fatto molto bene, andiamo a dichiarare che stiamo creando un nuovo progetto senza bisogno di frontend (`--no-webpack`) e senza strato di persistenza su database (`--no-ecto`)[^3].

Spostiamoci nella directory che è stata appena creata, installiamo le dipendenze del nostro progetto e facciamolo partire:

```sh
$ cd tiny_api
$ mix deps.get
$ mix phx.server
```

`localhost:4000` ci mostrerà la solita paginetta di benvenuto, non diamole troppa attenzione, e andiamo immediatamente a **implementare un nuovo endpoint che prende in input una stringa, e ce la restituisce dentro un JSON**. Non un grande servizio in sé, ma è un ottimo modo per fare tutto il giro, vedere cosa ci mette a dispozione Phoenix e eventualmente cominciare a costruirci sopra qualcosa.

Apriamo il router, che abbiamo già visto nell'episodio precedente:

```elixir
# lib/tiny_api_web/router.ex

defmodule TinyApiWeb.Router do
  use TinyApiWeb, :router

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

  scope "/", TinyApiWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", TinyApiWeb do
  #   pipe_through :api
  # end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: TinyApiWeb.Telemetry
    end
  end
end
```

E andiamo a modificare le rotte dichiarate in questo modo:

```elixir
scope "/", TinyApiWeb do
  pipe_through :browser

  get "/", PageController, :index
  get "/echo/:payload", EchoController, :echo
end
```

In questo modo andiamo a dichiarare una nuova rotta disponibile solo in GET che ha la forma `/echo/qualcosa`, e andremo poi a fare in modo che quando noi chiamiamo la nostra applicazione sulla rotta `/echo/qualcosa` quella ci risponda a sua volta `qualcosa` dentro un JSON di risposta.

Nel router abbiamo dichiarato che andremo a pescare la funzione `echo` da un controller chiamato `EchoController`; Phoenix si aspetterà il modulo corrispondente, quindi andiamolo a creare, mettendoci dentro anche l'implementazione della funzione `echo`:

```elixir
# lib/tiny_api_web/controllers/echo_controller.ex

defmodule TinyApiWeb.EchoController do
  @moduledoc """
  This module handles echo requests and replies back
  with an echo JSON containing the word used by the request.
  """

  use TinyApiWeb, :controller

  def echo(conn, params) do
    response = %{"reply" => params["payload"]}
    json(conn, response)
  end
end
```

Eccoci qua: come vediamo abbiamo **definito il modulo** `TinyApiWeb.EchoController`, ci abbiamo messo addirittura una bellissima `@moduledoc` per aiutare chi si imbatte in questo modulo a capire che cosa fa (Elixir dispone di utility che generano automaticamente la documentazione corrispondente da queste annotazioni), gli abbiamo detto di comportarsi come un controller Phoenix attraverso l'uso di `use`, e abbiamo **implementato la funzione** `echo`, che va poi a rispondere usando la funzione `json` messaci a disposizione da Phoenix per poter rispondere direttamente usando la mappa che abbiamo dichiarato.

Facciamo ripartire il servizio con `mix phx.server` e andiamo a vedere su `http://localhost:4000/echo/this-is-an-answer` che cosa abbiamo combinato:

```sh
$ curl localhost:4000/echo/this-is-an-answer
{"reply":"this-is-an-answer"}
```

### Bonus trick: usare la destrutturazione
Volendo sfruttare la potenza della sintassi di Elixir, possiamo implementare la funzione `echo` in un altro modo, andando a usare la **destrutturazione** per tirare fuori il campo `payload` dai parametri della chiamata poi poi andare a costruire la mappa con la risposta direttamente inline:

```elixir
def echo(conn, params) do
  %{"payload" => payload} = params
  json(conn, %{"reply" => payload})
end
```

Oppure, volendo essere più concisi, andando a sfruttare tutto quello che la sintassi di Elixir ci mette a disposizione, così da scrivere tutto su una sola riga:

```elixir
def echo(conn, %{"payload" => payload}), do: json(conn, %{"reply" => payload})
```

A voi giudicare se in questo modo si perde di leggibilità. Quello che andiamo a fare in questo modo è **utilizzare il pattern matching insieme alla destrutturazione** direttamente nella firma della funzione. Le tre implementazioni che abbiamo visto sono assolutamente equivalenti.

Volete implementare un nuovo endpoint nel vostro servizio? Adesso avete visto come funziona tutto il giro. Potete sbizzarrirvi: fatelo! :-)

[^1]: In realtà questo termine è abusatissimo, dato che REST è un paradigma che presuppone che le risorse vengano richiamate in un certo modo. Per ora facciamo solo finta che un'API REST ben scritta sia una API che segue la semantica HTTP (GET/POST/eccetera) e restituisce una risposta in JSON. Magari in futuro vediamo insieme come deve essere fatta una API REST-ful "a modino", mh? ;-)

[^2]: Anche qui, su JSON Web Token ci si potrebbe scrivere una bibbia: per brevità questo lo demandiamo ad un altro post perché non è lo scopo di questa trattazione, tantomeno per una persona alle prime armi con un nuovo stack.

[^3]: Mentre Webpack è il tool che si occupa di mettere insieme tutto il JavaScript che scriviamo nelle nostre applicazioni, e che Phoenix include in modo automatico, Ecto è la libreria che viene utilizzata per comunicare con il database della nostra applicazione, che di default è PostgreSQL. Ecto è uno strumento ultrapotente, lo vedremo nel dettaglio in un episodio in futuro!
