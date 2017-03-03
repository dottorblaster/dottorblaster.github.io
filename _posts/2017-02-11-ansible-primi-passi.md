---
layout: post
status: publish
published: true
title: "Ansible: primi passi"
date: 2017-02-11 19:41:56 +0100
categories: 
- Linux
tags: 
- ansible
- configuration management
- chef
- puppet
- saltstack
- red hat
- linux
- server
---

![Ansible](https://www.ansible.com/hs-fs/hubfs/2016_Images/Home/bg_mango_desk.jpg)

Durante il mio [periodo in Sourcesense](http://dottorblaster.it/2017/02/farewell-sourcesense/) ho imparato parecchio su un software di configuration management di cui non ero molto pratico all'inizio, ovvero **Chef**: [Eugenio](https://devopsrecipes.info/) mi ha insegnato veramente di tutto su quello che considero uno dei sistemi più completi per l'orchestrazione della propria infrastruttura, tuttavia proprio in questi giorni mi sono trovato per le mani qualcosa di meraviglioso, ovvero (finalmente) qualcosa che infrastrutturalmente era un **green-field project**.

Da [Wikipedia](https://en.wikipedia.org/wiki/Greenfield_project):

> In many disciplines a **greenfield project** is one that lacks constraints imposed by prior work. The analogy is to that of construction on [greenfield land](https://en.wikipedia.org/wiki/Greenfield_land) where there is no need to work within the constraints of existing buildings or infrastructure.

Dovendo fare una scelta e avendo del tempo per stare dietro all'infrastruttura senza fretta, ho preferito privilegiare la conoscenza di un nuovo strumento, e ho deciso di dare una chance ad **Ansible**, di cui in parecchi mi avevano parlato bene durante le chiacchierate ai meetup.

### Primo impatto

Il **primo impatto** con Ansible non è malaccio, alla fine fornisce un'infrastruttura di configuration management completamente agentless in cui abbiamo una Ansible Control Machine (ovvero anche il nostro computer) e i vari host, che sono banalmente IP associati a delle label che li raggruppano. Successivamente abbiamo i **playbook**, dei file con descrittori scritti in **YAML** che vanno a specificare cosa fare su un determinato host o altro. Il range di cose che possiamo specificare è infinito, dato che possiamo installare pacchetti ma anche installare file tramite template e così via, fino all'installazione di software tramite le gemme Ruby o Python Pip, o addirittura l'istanziazione/orchestrazione di container Docker.

Questo è possibile perché **Ansible è ben ingegnerizzato**, e oltre ai playbook permette di scrivere dei **moduli** (in Python) che consentono di specificare comportamenti personalizzati invocando delle action precise. Alcuni di questi moduli sono parte di Ansible stesso out-of-the-box, come il modulo relativo a docker, che permette di fare cose simili:

```yaml
- name: Create a data container
  docker_container:
    name: mydata
    image: busybox
    volumes:
      - /data
```

E questi sono solo i primi esempi di cosa possiamo fare. Il fatto che in tutto questo non ci siano agent di mezzo, ma basti solo un `ssh-copy-id` e qualche riga di YAML per aggiungere un nodo all'infrastruttura e configurarlo è veramente fantastico, anche perché dal punto di vista di gestione è praticamente a sforzo zero, e non dipende da **barbatrucchi** assurdi.

Imparate le basi, mi è rimasto solo da misurarmi con qualche piccolo trucchetto per far quadrare la situazione come piaceva a me.

### Trucchetti 

Tra Puppet, Chef, Ansible e Saltstack non ho mai visto un sistema di configuration management privo di trucchetti per semplificarsi la vita. Mi spiego: su Chef per esempio la configurazione di `knife` e della workstation dello sviluppatore secondo me rimane un po' macchinosa. Oltre questo, ci sono una serie di piccoli inganni tipo i symlink per gestire più configurazioni insieme ed altro che non vengono molto (anzi, per niente) pubblicizzati dal manuale. Essendo però gli unici modi per ovviare a queste (secondo me) **falle di design**, la community è arrivata persino a sviluppare dei piccoli programmi Ruby per fare proprio queste cose qui.

**Ansible** non sfugge a questa regola, grossomodo: io ho da subito avuto un problema col fatto che avrei voluto memorizzare in un unico repository Git tutte le informazioni riguardo i miei playbook e riguardo i server, ma la manualistica di base consiglia di mantenere la lista degli host nel file di configurazione `/etc/ansible/hosts`.

È una cazzata.

Ansible stesso, ho scoperto dopo un po', permette di dargli in pasto un altro file in cui vengono descritti gli host (detto inventory file), da un path arbitrario, residente anche nella directory in cui ci troviamo (ovvero il workspace in cui manteniamo i playbook). In questo modo possiamo avere **file multipli che descrivono gli host di infrastrutture separate**, condividendo comunque i playbook da lanciare sulle macchine, e consentendoci di memorizzare tutto all'interno di un unico repository Git che fungerà da singola fonte di verità per il nostro pattern di **Infrastructure As Code**.

Quello che basterà fare successivamente sarà puntare al nostro file chiamato `infrastructure` invocando Ansible e dandogli in pasto il playbook da eseguire:

```sh
$ ansible-playbook -i infrastructure playbook-number-one.yml
```

Rubo dalla [documentazione ufficiale](http://docs.ansible.com/ansible/playbooks_best_practices.html#directory-layout) anche un albero di come è indicato tenere il workspace del repository dei playbook. Come si può vedere, nessuno ci dice di tenere gli host in un file lì dentro, ma come per magia nelle best practice il file compare da solo. Nice job 😁

```sh
production
staging

group_vars/
   group1
   group2
host_vars/
   hostname1
   hostname2

library/
filter_plugins/

site.yml
webservers.yml
dbservers.yml

roles/
    common/
        tasks/
            main.yml
        handlers/
            main.yml
        templates/
            ntp.conf.j2
        files/
            bar.txt
            foo.sh
        vars/
            main.yml
        defaults/
            main.yml
        meta/
            main.yml
        library/
        lookup_plugins/

    webtier/
    monitoring/
    fooapp/
```

Tutto molto molto carino.

### Business as usual: i ruoli e tutto il resto

Il resto della roba che Ansible mette a disposizione è molto simile a Chef, ma senza la complicazione di avere un agent che gira sulle macchine. Abbiamo i **ruoli**, che possono essere scaricati anche da [Ansible Galaxy](https://galaxy.ansible.com/) installandoli nel proprio repository, e che permettono di partire da una base già solida per quanto riguarda il riuso dei playbook dato che fungono da "moduli" in cui organizzare lo stato desiderato delle macchine. Abbiamo il templating, come ho già scritto, e un linguaggio che anche se non è simile a Ruby e non è potente allo stesso modo, fa decisamente quello che serve permettendoci persino di iterare attraverso oggetti multipli (esempio: la copia di più file, o l'installazione di più pacchetti nella stessa action).

Personalmente ho trovato Ansible molto comodo rispetto ad altre soluzioni di configuration management. **Non ho nemmeno provato Ansible Tower**, che Red Hat tenta di appizzarci appena diamo un'occhiata al sito. Sembra una figata, ma semplicemente non ne ho ancora avuto bisogno e mi sento di dire che sto bene così. Non so cosa possa fornire in più rispetto al sistema manuale, forse qualche chicca di eyecandy. Chef di solito lo gestivo in combo con la web console anche per motivi di usabilità, con Ansible non mi sento in pericolo sotto questo aspetto.

### Conclusioni

Prima di questa piccola esperienza, continuavo a chiedermi come mai nessuno avesse la mia stessa opinione sui tool di **configuration management**. Dopo aver provato Puppet e Ansible, credevo semplicemente che nessuno avesse pensato a risolvere i problemi in una maniera molto più terra-terra, sicuramente meno adatta alle infrastrutture giganti formato Facebook, ma molto più **alla portata di chiunque** non voglia stare ad impazzire appresso alle sue macchine.

Chef nello specifico è fantastico, ma trovo che non avendo io un milione di macchine non sia esattamente quello che mi serve. Viceversa a me serve qualcosa che si connetta ad un'altra macchina o ad un altro set di macchine, e faccia da **grosso wrapper di SSH**, senza il bisogno di un server centrale o di client strani che si eseguono ogni tot minuti.

La risposta alle mie domande è stata Ansible.