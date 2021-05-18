---
layout: post
status: publish
published: true
title: "Kubernetes production-ready in piccolo: deployare un mini-cluster K3s"
date: 2021-05-18 20:47:32 +0200
categories: 
- Linux
tags: 
- kubernetes
- k3s
- container
- kubectl
- orchestrazione
- orchestration
---

![Linux, gerarchia del filesystem](https://gitlab.com/dottorblaster/blog-images/-/raw/master/images/computers/linux-filesystem.webp)

Qualche settimana fa mi ha amabilmente scritto il **cloud provider** presso cui è ospitato il cluster Kubernetes di produzione di [AllaCarta](https://allacarta.menu/) informandomi del fatto che la beta del loro servizio **Kubernetes managed** (che ho provato ~a scrocco~ in anticipo fornendo dei preziosi feedback) sta giungendo a una fine. Dopo attimi di panico, mi sono appuntato tre strade possibili da vagliare:

- Rimanere col provider attuale, pagando, continuando a usare Kubernetes. Non ho tuttavia voglia di diventare povero, per quanto i loro costi siano molto più prevedibili di qualsiasi piattaforma cloud "mainstream". In fin dei conti, davvero impraticabile. Dato che AllaCarta è gratis a oggi, devo tagliare tutti i costi il più possibile. :-D;
- Migrare a un metodo di deployment più tradizionale riutilizzando i **playbook Ansible** scritti in precedenza;
- Deployare un cluster Kubernetes per conto mio e provare a riapplicare tutta la configurazione del mio cluster di prod.

Marcata come non fattibile la prima alternativa, ho passato una settimanella a cercare di far fare briscola ai miei playbook Ansible con le nuove macchine di staging che avevo deployato, ma ce n'era sempre una tra versioni che non andavano più bene e altro. L'altra sera, così, in preda a un raptus, ho deciso di provare davvero a vedere se deployare un **cluster K3s mononodo di test** fosse una cosa proibitiva a livello di sforzo e know-how richiesto.

Ho scoperto che invece basta loggarsi su una macchina appena deployata e dare questo comando:

```sh
$ curl -sfL https://get.k3s.io | sh -
```

In questo modo, il nostro terminale sputerà un po' di informazioni e in pochissimo tempo avremo _davvero_ un master node Kubernetes perfettamente funzionante a cui connetterci. **K3s** non è _esattamente_ una distribuzione che include tutto quello che le distribuzioni canoniche di Kubernetes si portano dietro, ma valutando i miei bisogni ho deciso che potevo fare a meno di quelle che per me sono caratteristiche marginali.

Per connetterci al cluster da fuori abbiamo bisogno di un `kubeconfig`, che possiamo trovare in questo modo. Con questo comando otterremo qualcosa del genere:

```yml
$ cat /etc/rancher/k3s/k3s.yaml
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJlRENDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyTVRrNU1EWXdNRFF3SGhjTk1qRXdOVEF4TWpFMU16STBXaGNOTXpFd05ESTVNakUxTXpJMApXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyTVRrNU1EWXdNRFF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFSRzNUY0FCVE9hTFRaT1piUG51QlFEbGNtMTAxMEw5VDF3SVR0TUR5TWIKR0s0YitHTG8xenVOQXRETE1uNjhIWlI5UTRYbFJySzJuVWJnVG1ucUhlb2JvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVXZ6QlU3bUtTRUF3NFQ5RDJuOWNNCm9FQkRzVlF3Q2dZSUtvWkl6ajBFQXdJRFNRQXdSZ0lVjZzLzN6RmhkTUsxNFpENU5tRGc5ZG9zdUViOXYKaVFsdU93UHp5bmNDQWlFQWxWK2FYWCtnTENZR3dzTXJBNU1yaWkrSGl3T1hlYVJMWUIvWFAvQVR2Mm89Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
    server: https://127.0.0.1:6443
  name: default
contexts:
- context:
    cluster: default
    user: default
  name: default
current-context: default
kind: Config
preferences: {}
users:
- name: default
  user:
    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrRENDQVRlZ0F3SUJBZ0lJZm9FNytndXpLS0V3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOakU1T1RBMk1EQTBNQjRYRFRJeE1EVXdNVEl4TlRNeU5Gb1hEVEl5TURVdwpNVEl4TlRNeU5Gb3dNREVYTUJVR0ExVUVDaE1PYzNmRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJFMnI3ZXp0dmFnZkRhdnMKd2VhL01WclhiV3RXb0ZGc2FRaVlVTXZxMDNiZlNzdXFHWEYyTUlpRzZ1UG1uOEZwNnRMcG9vQzVQWGp4Zmo3RgpNRUxKM2FpalNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU010RBV2dCVFA4VDJNNHhOVmlHTlBPT0ZKOG12c1ovUjJnakFLQmdncWhrak9QUVFEQWdOSEFEQkUKQWlCd2dubFl0MUczdGtuR1NQOEViNm5UMHU5MFQvRWZJZnZNWkR2aVBtZTY0QUlnT2M0UjM0aGJqRE1xejlzbgpHY2oyTDdIcFNad1Z2Z3lXd0xhdGFzQjR6Y1k9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyTVRrNU1EWXdNRFF3SGhjTk1qRXdOVEF4TWpFMU16STBXaGNOTXpFd05ESTVNakUxTXpJMApXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyTVRrNU1EWXdNRFF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFTSnFaOSsyNkViZ1hVUTllRlIrWFc1eGw3OEptcGdYbHZSVzZQU2M2Q0IKUTNmRk95dkFFRkhGQ1FleGwxbS9GUkluVjVWL1pmZFN6R2pvS3ZpODMzZFRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVXovRTlqT01UVlloalR6amhTZkpyCjdHZjBkb0l3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUlnZjh5SUdFa3JzcFhINWNTL1pmMVlEUlB5ZXJBQ01SdmwKVFNxUXBRSzJSNVlDSVFDeE10S0Y4R2xzYVRZc1AxK0xRUlFyNUZtSXVvcE81RVJjM2VXYmp3YlJGQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K
    client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUs5Snkraks3SW02Wm5xUm91Z1Jsa3NsaVFjbENzQlk0NWdTZTFOaEZPWXNvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFVGF2dDdPMjlxQjhOcSt6QjVyOHhXdGRtyVGR0OUt5Nm9aY1hZdwppSWJxNCthZndXbnEwdW1pZ0xrOWVQRitQc1V3UXNuZHFBPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo=
```

Come possiamo vedere, alla voce riguardante l'indirizzo del server abbiamo un affascinante `127.0.0.1` che dobbiamo **sostituire con l'IP pubblico della macchina** che abbiamo deployato, o con l'IP privato se stiamo dietro una bella VPN. Fatto questo, il file è effettivamente un kubeconfig valido che possiamo salvare e utilizzare facendolo digerire al nostro `kubectl`. Ci sono vari modi per farlo che spero conosciate; non ho intenzione di ammorbarvi in questa sede spiegandovi quale è il mio preferito.

Dopo qualche secondo, con un `kubectl get all` dovremmo poter vedere le risorse dentro il nostro cluster mononodo appena deployato, che giustamente saranno prossime allo zero. Prima di iniziare a deployarci delle applicazioni sopra potremmo guardare se è il caso di attaccare al nostro master node qualche **worker node** in modo da consentire al nostro sistema un po' di respiro se lo vogliamo far andare a regime.

È necessario innanzi tutto scoprire quale è il **token** per connetterci al nostro master node:

```sh
$ sudo cat /var/lib/rancher/k3s/server/node-token
K10361c7ecce9548dc6b5d1fc32e69b42eeb6e8d00d5e097923d83b9b4604277a9d::server:c44ecc6b22fdd6d7d08ea321798150f8
```

Dopodiché possiamo tranquillamente deployare un'altra istanza su un'altra macchina informandola di questo token e dell'URL del master node in modo che ci si vada a connettere:

```sh
$ export k3s_master_url="https://k3s-master:6443"
$ export k3s_token="K10361c7ecce9548dc6b5d1fc32e69b42eeb6e8d00d5e097923d83b9b4604277a9d::server:c44ecc6b22fdd6d7d08ea321798150f8"
$ curl -sfL https://get.k3s.io | K3S_URL=${k3s_master_url} K3S_TOKEN=${k3s_token} sh -
```

Con un `kubectl cluster-info` dovremmo vedere che il nostro nodo nuovo di pacca ha fatto il suo lavoro. A questo punto possiamo iniziare a giocarci, scrivendo la configurazione di cui abbiamo bisogno nei nostro file YAML e applicandola con `kubectl apply -f`. Questo procedimento usa K3s e un hosting a basso costo, ma con un po' di fine tuning (soprattutto andando a parare su un hosting più affidabile per le macchine) possiamo deployare i nostri nodi in questa maniera anche in produzione[^1]. Personalmente ancora non ho trovato feature mancanti dentro K3s per progetti piccoli che mi facciano dire "no, K3s non va bene anche per applicazioni di media portata"; per quanto riguarda **Allacarta**, soprattutto, questo setup e un po' di hardening hanno decisamente salvato la giornata e mi hanno permesso di **non rinunciare a un modo di lavorare molto più reattivo** a cui ormai mi ero piuttosto assuefatto.

[^1]: In realtà in produzione abbiamo bisogno di una serie di accorgimenti in più, e soprattutto dato che K3s non supporta il **multi-master** non possiamo proprio stare senza pensieri. Tuttavia, penso che per il setup per la validazione di un prototipo una cosa del genere vada più che bene.

