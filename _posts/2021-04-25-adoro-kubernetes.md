---
layout: post
status: publish
published: true
title: Io adoro Kubernetes
date: 2021-04-25 23:24:58 +0200
categories:
- Development
tags:
- kubernetes
- software development
- sre
- tech
- sistemi operativi
- linux
- web
---

![dottorblaster adora Kubernetes](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/kubernetes/adoro_kubernetes.png)

Stavo pensando di buttare giù un post qualsiasi tanto per ricominciare a scrivere dato che mi lamento di non avere mai tempo, e ho pensato che non vi ho mai palesato un paio di fatti: il primo è che [AllaCarta](https://allacarta.menu/) da qualche tempo gira completamente su **Kubernetes**, il secondo è che, per dirlo con poche parole, io _adoro_ Kubernetes in ogni sua distribuzione e forma.

Come mai? Innanzi tutto va detto che io sono mortalmente affascinato, come i miei lettori di lunga data sanno, dalle opinioni coraggiose, e ["Unironically Using Kubernetes for my Personal Blog"](https://mbuffett.com/posts/kubernetes-setup/) è una delle mie preferite. Dopodiché, devo dire che due sono le cose che mi hanno fatto avvicinare a questa tecnologia che volevo apprendere da tempo: il fatto che un [formidabile individuo](https://github.com/Gsantomaggio) mi abbia convinto a mandare un po' di commit al progetto [k3ai](https://github.com/kf5i/k3ai-core), e il fatto di aver capito che Kubernetes stesse veramente "mangiando il mondo". Così mi sono spinto un po' più in là, ho cominciato a studiare e per acquisire un po' di conoscenza pratica in qualche settimana ho **portato AllaCarta da un paio di macchine deployate tramite Ansible a un cluster full-fledged Kubernetes**.

Devo dire che a parte lo scollinamento iniziale, è stato abbastanza semplice. Nel farlo ho scoperto persino un po' di cose su cui da fuori è molto facile soprassedere.

### Si fa presto a dire Kubernetes
Innanzi tutto Kubernetes non è "Kubernetes", ma esattamente come Linux vuol dire tutto e niente esistono svariate distribuzioni di Kubernetes che lo rendono un bundle utilizzabile e uno strumento meno grezzo del core che siamo stati abituati a concepire nei primi anni di vita di questo **adorabile orchestrator di quartiere**.

Tra le distribuzioni che possiamo vedere più spesso in giro possiamo trovare [K3s](https://k3s.io/), [MicroK8s](https://microk8s.io/), [minikube](https://minikube.sigs.k8s.io/docs/), [Rancher Kubernetes Engine](https://rancher.com/products/rke/). Fanno tutte un po' la stessa cosa, semplicemente esattamente come le distribuzioni di Linux alcune sono più adatte ad alcuni use case di altre: il mio amico [Carmine](https://github.com/CDimonaco) per esempio sta mettendo in piedi una guida abbastanza esaustiva su come deployare il proprio cluster RKE su delle VPS Hetzner, io invece sono un appassionato di K3s perché è facile come uno schiocco di dita metterci su dei begli ambienti di continuous integration per le proprie applicazioni[^1].

### Kubernetes è una piattaforma
Letto il titolo qui sopra? Molto bene: come tale, Kubernetes è piuttosto flessibile rispetto a quello che ci installiamo sopra, e non intendo solo i classici deployment di applicazioni, che sono la cosa più comune: è possibile **estendere le funzionalità del proprio cluster Kubernetes attraverso l'uso di particolari "operator"** (oltre che tramite le [Custom Resource Definition](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/)), ovvero delle estensioni software che provvedono a smazzare il grosso del lavoro per noi quando si presentano tematiche un po' più complesse e soprattutto generalizzate/generalizzabili, come il provisioning di un cluster PostgreSQL a bordo della nostra infrastruttura.

È molto bene di solito sapere che cosa avviene sotto il cofano di un operatore perché non conoscere profondamente il suo funzionamento può portarci a credere che stia avvenendo qualcosa sulla nostra infrastruttura di produzione che è assolutamente lontano da quello che in realtà sta succedendo, tuttavia penso che ci sia ancora tantissimo terreno inesplorato in tema di **Kubernetes operator**, che siano molto utili banalmente perché semplificano tanto lavoro, ma che siano un'astrazione da usare solo dopo aver compreso le basi.

Alcuni operatori sono una bomba allucinante, quasi talmente tanto che non è possibile concepire un cluster senza questi installati. Alcuni esempi? Datadog per il monitoraggio, **Argo CD** per la continuous delivery (attraverso [GitOps](https://www.gitops.tech/)). Questo ovviamente rischia di rendere la curva di apprendimento dell'ecosistema Kubernetes estremamente ripida, e rischia anche di creare una frammentazione allucinante nell'ecosistema dato che a questo punto non esiste un cluster che sia uguale a un altro. Ma la flessibilità e la potenza portano con loro questi lati negativi, quindi sapete che c'è? Non lamentatevi.

Non sprecate tempo né fiato nel farlo.

Se pensate che sia "troppo", guess what: l'informatica è un lavoro più duro di quanto credevate. Potete mettervi a studiare o andare a fare i crimpatori di cavi dentro qualche data center - sempre ammesso che lo sappiate fare: crimpare un cavo per bene è un'operazione da osservare con cura.

### La tematica dei costi
Infine, il momento della dolorosa come dicono in alcuni ristoranti: ma **quanto costa**? Heh, il problema è che è vero: Kubernetes non costa come una Lamborghini, ma di sicuro costa come una qualsiasi bella automobile che potete vedere in un concessionario. Il numero delle macchine di cui fare il provisioning lievita o comunque aumenta anche solo un po' a seconda della strategia che utilizziamo per gestire l'hardware che sta sotto il nostro cluster. Quello che però spesso non viene contato nel foglio di calcolo del budget infrastrutturale sono le ore uomo spese a connettere le macchine tra loro, a far parlare due VPS che stanno sotto un cluster Percona (un esempio tra tanti). Kubernetes rende queste operazioni leggermente più semplici portando in fondo all'anno un risparmio in ore uomo non indifferente banalmente per via dei principi di configuration-as-code che segue. Possiamo salvare la configurazione del cluster in dei file YML e riapplicarla.

Se non avete mai usato **configuration-as-code** come paradigma, scoprirete quanto può essere utile quando le cose vanno storte. Rideployare un'applicazione in qualche minuto è un fattore da non sottovalutare, specie se come il sottoscritto avete un pet project che fate girare da soli.

### Insomma...
Non è facile riassumere tutto quello che uno può imparare in settimane di deep dive su **Kubernetes**. Personalmente, non ci ho nemmeno provato: questi sono solo alcuni dei concetti che ho elaborato e che sto studiando. Da un punto di vista di piattaforma, Kubernetes è il nuovo Linux e rappresenta la koiné dialektos del mercato applicativo. Una piattaforma che può abilitarvi a fare le cose con uno schiocco di dita se solo studiate a sufficienza per averne la preparazione.

Non fatevi cogliere alla sprovvista.

[^1]: O anche deployare degli applicativi completi. K3s è full-K8s compliant rispetto alle API, e anche se è particolarmente indicato per ambienti piccoli non c'è dubbio che possiamo deployarci anche un bell'MVP in produzione.
