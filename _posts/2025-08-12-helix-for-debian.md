---
layout: post
status: publish
published: true
title: Helix for Debian
date: 2025-08-12 14:13:52 +0200
categories:
- Linux
tags: 
- debian
- obs
- opensuse
- helix
---

Qualche giorno fa [Gianguido](https://github.com/gsora) stava cercando di convincermi a comprare un MNT Reform, e nello specifico stavamo parlando della distribuzione Debian-based che gli sviluppatori fanno girare su questo dispositivo. Siamo finiti a parlare del suo workflow, del fatto che a lui piace molto Helix; sta cercando di portare anche me in questa setta, ma (finora) con scarsi risultati[^1].

Parla che ti riparla è venuto fuori che **Helix** non è nei repository di **Debian**, e il mio amichetto ha detto quasi tra sé e sé: "Probabilmente basterebbe scaricare il sorgente e lanciare `cargo deb`". Per quanto questo sia vero, ho ovviamente pensato subito a un'altra cosa che potevamo fare.

Quello che ho pensato io è stato infatti, so per certo che [OBS (Open Build Service)](https://openbuildservice.org/) può costruire pacchetti per qualsiasi distribuzione, vuoi vedere che non riusciamo a tirare fuori qualcosa per avere un repository Debian "in full effect" da cui installare Helix?

Così mi sono messo a smacchinare e da oggi è possibile avere Helix su Debian senza grossi sforzi usando il nostro repository che ho prontamente chiamato **Helix for Debian**. Usarlo su Debian 13, che è uscita qualche giorno fa e che era il mio target primario, è molto semplice:

```sh
echo "deb [signed-by=/etc/apt/keyrings/alessio.biancalana-obs.gpg] https://download.opensuse.org/repositories/home:/alessio.biancalana:/helix-debian/Debian_13/ ./" | sudo tee -a /etc/apt/sources.list.d/helix-debian.list
wget -O alessio.biancalana-obs.gpg https://build.opensuse.org/projects/home:alessio.biancalana/signing_keys/download\?kind\=gpg
sudo cp alessio.biancalana-obs.gpg /etc/apt/keyrings/alessio.biancalana-obs.gpg
```

Con queste tre righe di shell dovreste aver aggiunto il repository e configurato la verifica dei pacchetti tramite GPG.

A questo punto basta usarlo normalmente:

```sh
sudo apt update
sudo apt install helix
```

In teoria dovrei aver abilitato la compilazione dei pacchetti anche per Testing e Sid, quindi di fatto al posto di `Debian_13` è possibile utilizzare `Debian_Testing` o `Debian_Unstable` a seconda dei casi e tutto dovrebbe comunque funzionare.

Ci ho messo un po' più del dovuto semplicemente perché in vita mia non avevo mai fatto un pacchetto per Debian o derivate, quindi ho dovuto imparare una tonnellata di roba nuova, ma a parte qualche colorita bestemmia principalmente dovuta all'approccio che ha Debian verso i programmi scritti in Rust è stato molto divertente.

E buon divertimento con l'ultima versione di Helix sulla vostra Debian[^2] :-)

![Helix su Debian](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/debian-helix/2025-12-08-14_22.png)

[^1]: Sono molto affezionato al mio flow con vim/neovim, quindi è molto difficile farmi fare onboarding di una cosa nuova. Quello che riconosco però è che i default di Helix sono veramente sensati, e il fatto di avere un setup tutto sommato produttivo da subito senza dover smadonnare tra plugin e voci di configurazione incomprensibili ha il suo fascino.

[^2]: Ovviamente non ho installato davvero Debian su nessuna delle mie macchine, semplicemente per fare tutto questo lavoro nonché altre cose fichissime è sufficiente essere abbastanza versati con [distrobox](https://github.com/89luca89/distrobox).
