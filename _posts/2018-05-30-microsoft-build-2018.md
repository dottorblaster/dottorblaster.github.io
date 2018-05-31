---
layout: post
status: publish
published: true
title: Microsoft Build 2018, scartabellando tra le cose interessanti
date: 2018-05-30 23:10:10 +0200
categories:
- Tech
tags:
- microsoft
- build
- windows
- linux
- unix
- shell
---

Anche quest'anno si è tenuto il solito appuntamento con la conferenza per sviluppatori di Microsoft, ovvero **Microsoft Build**, dove come sempre sono state concentrate le novità rilevanti del 2017 e di questa prima metà di 2018. Per quanto mi riguarda, piuttosto che concentrarmi sulla conferenza in generale, (a cui questa volta non ho potuto assistere di persona al contrario dell'[anno scorso](http://dottorblaster.it/2017/05/microsoft-build-2017-wrap-up/)) per il mio commentario ho scelto tre cose che mi hanno colpito particolarmente. Sul resto glisserò sia perché sono parti di stack che al momento non mi interessano, sia perché voglio parlare prevalentemente di **Unix**.

Prima di Unix però parliamo di qualcosa che non c'entra molto, ovvero **Windows 10**: su Windows 10 arriverà una nuova feature chiamata **Sets**. Microsoft ha deciso che, bene, vi piacevano le tab del browser? Vi piace tenere sott'occhio un sacco di roba tutta insieme? E allora perché non rendere "tabbed", a schede, la navigazione su _tutti i programmi_? Abbiamo un simbolo simile a quello della nuova tab del browser, sulla barra del titolo delle finestre, con cui possiamo aprire nella stessa finestra dove stiamo modificando un documento di Word, Excel, o ritoccando una foto, un'altra applicazione con degli altri contenuti. In questo modo le finestre stesse si trasformano in spazi di lavoro a sé stanti.

E devo dire, cara Microsoft, anche se penso che questa visione vada raffinata, che sia lo stesso un'ottima intuizione. Props.

Ma ora veniamo alle cose importanti (che sono le cose che piacciono a me e le cose più bizzarre): Microsoft ha annunciato in occasione di questo[^1] Build che Notepad introdurrà il supporto a LF, ovvero ai **terminatori di riga Unix**. È la fine di un'epoca, considerato che i terminatori di riga sono sempre stati il grande cruccio degli sviluppatori non-Unix[^2], che git ha introdotto un'opzione apposta per correggerli in automatico, e che Microsoft ha sempre adottato un atteggiamento un po' protettivo da una parte (per esempio Visual Studio li supporta e ci mancherebbe altro), mentre dall'altra prendi un developer, trattalo male, lascialo aspettare per ore - giorni - anni - prima di implementare una cosa del genere, mandandolo per le piste col suo amministratore di sistema e coi suoi colleghi. Ma appunto.

L'altra novità che mi ha colpito è stata la voce "Open Linux shell here" nel file manager. Di solito è molto difficile trovare roba di questo tipo integrata in Windows e disponibile in questo modo, spiattellata in faccia in questo modo. Questo perché esattamente come macOS Windows non privilegia molto i **power user**, anzi: le opzioni che possono compromettere la stabilità vengono ben nascoste. In questo caso non solo troviamo una bella voce di menu da veri nerdoni, ma la troviamo anche riguardante Linux e la sua shell inclusa dentro Windows. Onestamente lo trovo non solo utile, ma un altro passo di Microsoft nella direzione di una strategia inclusiva nei confronti di Linux e di tutta la community che lo "foraggia"[^3].

Quanto è fico tutto il resto? È fico, è fico. Ma io rimango:

- Un nerdone
- Un power user
- Un linuxaro

E quindi i miei takeaway (insieme ai lavioli gambeli del cinese sotto casa) sono questi.

[^1]: o di questa? Build è femminile, mi dissero dalla regia.

[^2]: e anche di noi Unix guys dato che ci trovavamo i repository impestati di zozzerie committate da utenti Windows. Perdonatemi ragazzi di Microsoft, ma è così.

[^3]: perdonatemi il termine. È tardi, e non me ne sta venendo in mente uno migliore.

