---
layout: link
status: publish
published: true
title: Emoji di Twitter, da ora open source
origlink: https://blog.twitter.com/2014/open-sourcing-twitter-emoji-for-everyone
categories:
- Web
tags:
- open source
- twitter
- web
- emoji
---

Da giovedì le **emoji di Twitter** sono **open source** e liberamente utilizzabili da chiunque.

```xhtml
<script src="//twemoji.maxcdn.com/twemoji.min.js"></script>
```

Se vogliamo fare i virtuosi possiamo persino **lavorarle nel DOM**:

```js
var div = document.createElement('div');
div.textContent = 'I \u2764\uFE0F emoji!';
document.body.appendChild(div);
 
twemoji.parse(document.body);
 
var img = div.querySelector('img');
 
// note the div is preserved
img.parentNode === div; // true
 
img.src;        // abs.twimg.com/emoji/v1/36x36/2764.png
img.alt;        // \u2764\uFE0F
img.class;      // emoji
img.draggable;  // false
```

E poco altro. Sicuramente è importante avere delle **emoji di riferimento** da far renderizzare all'utente **al posto di qualche font di sistema** che è una schifezza (come quello, aehm, di Apple? - O quel coso schifoso che c'è su Linux... :-D), tra l'altro distribuite attraverso **MaxCDN** per essere usufruibili al massimo delle prestazioni da chiunque.
