---
layout: post
status: publish
published: true
title: "Kubernetes: primi passi 🐳"
date: 2017-10-24 09:25:30 +0200
categories:
- Linux
tags:
- kubernetes
- containers
- docker
- devops
- orchestration
- containerization
---

Onestamente? Sono anni che voglio imparare [Kubernetes](https://kubernetes.io/). Peccato che per qualche motivo finisca sempre per capitolare; il più fallimentare dei miei tentativi è stato quando per far partire un numero spropositato di "minion" in [UniquID](http://uniquid.com/) che simulassero un dato comportamento ho infilato tutto in dei container: pur volendo imparare a installare un clustter Kubernetes, alla fine sono tornato per mancanza di tempo ad una gestione manuale tramite un programma in Python scritto da me.

Stufo della mia ignoranza, da qualche settimana ho deciso di partire con un crash course di **Kubernetes**. La prima cosa che ho fatto, avendo fallito completamente in passato con il setup di un cluster non capendo nemmeno dove mettere mano, è stata darmi una calmata installando **Minikube** sul mio computer.

### Minikube
Da quando ho fatto [tableflip](http://knowyourmeme.com/memes/flipping-tables-%E2%95%AF%E2%96%A1%E2%95%AF%EF%B8%B5-%E2%94%BB%E2%94%81%E2%94%BB) l'ultima volta cercando di capire come funziona il setup di un cluster Kubernetes, è uscito Minikube. Grazie a Minikube possiamo installare un cluster di un singolo nodo master di test all'interno della nostra macchina; la [pagina di manuale](https://kubernetes.io/docs/tasks/tools/install-minikube/) dedicata è abbastanza estesa.

Una volta installato e configurato `kubectl` (sulla mia workstation ho usato Homebrew, per Arch Linux come al solito è tutto su AUR, per Debian e CentOS/Red Hat se non lo trovate nei repository ci sono modi alternativi) è toccato all'eseguibile `minikube` essere installato in `/usr/local/bin`. La guida spiega come fare con un `curl`, e io ho semplicemente (una volta controllato che lo script che stavo scaricando non facesse cose strane) installato il binario in questo modo.

Con `minikube start` poi l'ho lanciato, ed è partita la fase di setup che richiede qualche minuto. Una volta completata la guida del kickstart deployando il container che ha dentro una sorta di applicazione "hello world", ho fatto qualche altro esperimento deployando Grocery, ovvero il mio webserver scritto in C che ho svolto come progetto universitario qualche settimana fa.

![Kubernetes dashboard](https://gitlab.com/dottorblaster/blog-images/raw/dbc7e35fecd11da45094c40a33927db9025e6603/images/kubernetes/firefox_kube_dash.png)

Per deployare il container è necessario un comando simile a questo:

``` shell
$ kubectl run hello-grocery --image=registry.hub.docker.com/dottorblaster/grocery --port=8080
```

È importante notare l'URL che abbiamo dato in pasto a `kubectl`, perché l'unica via per me di reperire come sono fatti i resource locator di immagini presenti su Docker Hub è stato scavare dentro StackOverflow. Quindi, tanto per chiarire, per deployare un container costruito a partire da un'immagine che si trova sul Docker Hub, dobbiamo prependere al nostro solito nome di immagine il dominio `registry.hub.docker.com`.

Dopodiché per rendere il container accessibile al mondo esterno dobbiamo esporre il deployment tramite la rete interna. Questa cosa mi disturba leggermente, nel senso che già Docker fa da discreto layer di astrazione con il suo mapping di porte esterne al container a porte interne, in più con Kubernetes andiamo ad aggiungere strati su strati di complessità, che ovviamente però per grandi ambienti e infrastrutture ingombranti diventa necessaria.

```shell
$ kubectl expose deployment grocery --type=NodePort
```

Fatto! Abbiamo deployato il nostro container.

### Non è che l'inizio
Per una prova al volo, questo era quello che mi interessava, che però non mette in risalto nemmeno un millesimo delle potenzialità di Kubernetes. Volevo iniziare a fare altre cose ma la mia versione locale di `kubectl` era troppo aggiornata rispetto a quella di Minikube, così invece di risolvere questo problema ho preferito aspettare direttamente un aggiornamento di Minikube studiando altro.

### Setup di un cluster Kubernetes
Invece di continuare a pasticciare con Minikube il quale forse è il tool migliore per studiare Kubernetes che io abbia mai visto, sono andato a cercare sul manuale come fare setup di un **cluster on premise**. Abbastanza sepolto sotto ogni offerta cloud di 'sto mondo ho trovato effettivamente il modo, con varie alternative.

Nello specifico quelle che ho apprezzato di più sono [kubeadm](https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/), che è il tool principe per l'amministrazione di un cluster, e [Kubespray](https://kubernetes.io/docs/getting-started-guides/kubespray/), che consiste in un insieme di **playbook Ansible** che non fanno altro che orchestrare l'uso di `kubeadm` per rendere più semplice il mantenimento del cluster.

### Prossimi step
Per ora termino qui, tuttavia il mio "learning path" relativo a Kubernetes credo sia ben lontano dall'essere anche solo cominciato. Tutto quello che ho appena appuntato mi serve, perché trovo che **la documentazione di Kubernetes oltre ad essere dispersiva sia molto incentrata sul "compra hosting Kubernetes dai migliori provider"** – che è sicuramente quello che ogni azienda con un po' di sale in zucca dovrebbe fare, ma non è decisamente il miglior modo per un "junior" di imparare come funziona il giocattolone.

I prossimi passi:

- Setup **vero** di un cluster usando `kubeadm`
- Deploy di un'**applicazione stateful con uno stack classico webapp + database**, per imparare a gestire anche questa grana

👋
