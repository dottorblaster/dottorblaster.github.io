---
layout: post
status: publish
published: true
title: Migliorare il proprio codice Elixir in tre mosse
date: 2019-07-28 19:55:52 +0200
categories:
- Development
tags:
- elixir
- coding
- linting
- analisi statica
- credo
- erlang
---

![Elixirs and photos](https://gitlab.com/dottorblaster/blog-images/raw/master/images/artem-maltsev-3n7DdlkMfEg-unsplash.jpg)

Più passa il tempo più mi diverto con Elixir, sia usandolo su progetti più grandi che su scemenze domestiche. Tra **The Big Elixir** l'anno scorso e un po' di esperienza sul campo ho imparato soprattutto una cosa: che quelle che pensavo fossero ovvietà in realtà sono **piccoli consigli** che consentono a chiunque di migliorare la qualità del proprio codice senza fare nulla.

### `mix compile --warnings-as-errors`
I più giovani la vedranno come una mossa malvagia senza alcun guadagno, ma in realtà `mix compile --warnings-as-errors` è un comando che ci permette di trarre vantaggio da un **assetto più pedante del compilatore** senza dover fare nulla, e salvandoci da potenziali **errori in produzione**. Quello che succede usando questo comando è che il nostro codice viene compilato, ma appena viene trovato un warning (quindi qualcosa di cui il compilatore ci avvisa ma su cui normalmente passa sopra) la compilazione fallisce irrimediabilmente, e noi siamo costretti a dover andare ad aggiustare la porcata che abbiamo (forse) scritto.

La cosa interessante è che questo riguarda solo il nostro codice: fortunatamente se c'è un warning in qualche dipendenza il compilatore continuerà a costruire il nostro pacchetto come se nulla fosse.

Perché è utile? Beh: innanzi tutto senza aver scritto alcun test, anche per un progetto stupidissimo di un weekend, possiamo infilare questo comando in una pipeline e avere una build di continuous integration **più affidabile e gratis**. In secondo luogo, è sempre utile un occhio in più sul codice, e il compilatore di Elixir da solo è in grado di aiutarci sulle marachelle più grandi.

### Usare il formatter nativo
Da Elixir 1.6 è disponibile, direttamente integrato nella piattaforma, un **formatter nativo** che prende tutti i file `.ex`/`.exs` e se abbiamo fatto qualche errore di formattazione o semplicemente scritto codice in maniera poco leggibile, prende il file e lo riscrive in modo da aumentare la leggibilità.

I benefici dell'usare un formatter vanno dalla leggibilità di base al fatto che essendo la configurazione parte del progetto, sia che siamo da soli a lavorare su una codebase sia che siamo in novecento avremo uno stile coerente su tutto il codice.

Quello di usare un formatter è un consiglio valido per ogni tipo di piattaforma e linguaggio, ma il formatter di Elixir ci dà qualcosa in più: un comando per controllare se i file sono stati formattati, da inserire ovviamente insieme a `mix compile --warnings-as-errors` nella nostra pipeline.

Se andiamo a guardare le opzioni di `mix format` infatti possiamo vedere qualcosa di interessante:

- `--check-formatted` - checks that the file is already formatted. This is    useful in pre-commit hooks and CI scripts if you want to reject contributions with unformatted code. However keep in mind that the formatted output may differ between Elixir versions as improvements and fixes are applied to the formatter.
- `--check-equivalent` - checks if the files after formatting have the same    AST as before formatting. If the ASTs are not equivalent, it is a bug in the code formatter. This option is useful if you suspect you have ran into a formatter bug and you would like confirmation.

In base a che livello di comprensione abbiamo di come funziona la compilazione del codice Elixir possiamo usare uno di questi due flag. Io personalmente tendo a usare `--check-formatted`, dato che `--check-equivalent` è più adatto per cercare bachi all'interno del formatter stesso.

Insomma, se vogliamo controllare che ogni cambiamento sia adeguatamente formattato andiamo a inserire `mix format --check-formatted` all'interno della nostra pipeline e subito ne noteremo i risultati.

### Usare Credo
L'ultimo consiglio ma non per importanza è l'adozione di [Credo](https://github.com/rrrene/credo). Conosco questo **tool di linting e analisi statica del codice** (soprattutto la seconda) da quando ho iniziato a scrivere i miei primi programmi in Elixir, merito della segnalazione del buon [Claudio](https://github.com/claudio-dalicandro): è veramente una figata. Innanzi tutto perché non c'è niente da fare ed è veramente "drop in" come approccio: lo metti tra le dipendenze, il tempo di un `mix deps.get` e sei già in pole position con `mix credo`.

I consigli che dà sono tra i più disparati, e se lo infilate dentro il progetto quando siete all'inizio non avrete necessità di fare refactoring sanguinolenti più in là: vi segnalerà indentazioni sbagliate, pezzi di codice ottimizzabili, addirittura problemi di design del codice, e tronconi del vostro programma dove potete migliorare la leggibilità.

È veramente una figata, e ovviamente potete introdurlo in maniera incrementale dato che ogni **check di Credo** è disabilitabile da file di configurazione, quindi è possibile partire con una configurazione più blanda per andare poi col tempo, dopo un po' di refactoring se il progetto è vecchio, a introdurre man mano sempre più controlli.

Beh, spero di avervi dato qualche indizio interessante su mosse di effort minimo che possono avere un grande impatto di qualità sui vostri progetti in **Elixir**. Se nella vostra cintura avete altri strumenti simili vi aspetto nei commenti ;-)

Photo courtesy of [Artem Maltsev](https://unsplash.com/@art_maltsev)

