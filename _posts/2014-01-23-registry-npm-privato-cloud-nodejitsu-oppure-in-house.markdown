---
layout: post
status: publish
published: true
title: 'Registry npm privato: in cloud con Nodejitsu oppure in-house'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 2379
wordpress_url: http://dottorblaster.it/?p=2379
date: '2014-01-23 17:05:57 +0100'
date_gmt: '2014-01-23 16:05:57 +0100'
categories:
- Open Source
tags:
- open source
- node.js
- javascript
comments: []
---
<p><img class="alignnone" alt="Node.js" src="http://farm3.staticflickr.com/2049/5820449269_1f04240c48_b.jpg" width="1024" height="576" /></p>
<p>Proprio in questi giorni, ho letto che <a href="http://blog.nodejitsu.com/simple-hosted-private-npm-and-registry-nodejitsu-com/">Nodejitsu</a> ha cominciato a implementare il proprio modello per i <strong>registry privati di pacchetti npm</strong> in modo che le aziende possano mantenere i propri package privati su un server in cloud a prezzi comunque sostenibili. Il tutto si basa sull'utilizzo del modulo di Node <strong>smart-private-npm</strong>; di seguito, un esempio preso dal loro blog dove sfruttano Node.js per fornire un registry privato insieme alla loro libreria, da poco (immagino) resa open source per chi comunque non può permettersi un costo così elevato (perché in startup o per qualche altro motivo) e decide di sostituire al costo della cloud qualche ora di effort e una macchina - o una VPS. Ovviamente io <a href="http://dottorblaster.it/2013/11/dottorblaster-it-digitalocean/">consiglio DigitalOcean</a> che permette l'hosting di droplet su <strong>SSD</strong> :D</p>
<pre><code>var smartPrivateNpm = require("smart-private-npm"),
    url = require("url");

//
// Configure your private npm. You could load this in from a file
// somewhere.
//
var config = {
  rewrites: require("./config/rewrites"),
  proxy: {
    //
    // Location of the target public npm registry. 
    //
    npm: url.parse("http://user:pass@registry.nodejitsu.com"),
    //
    // Private npm options.
    //
    policy: {
      npm: url.parse("http://user:pass@private.registry.nodejitsu.com"),
      private: {
        //
        // This is the list of 'known private modules'
        // that will always be proxied to the private npm.
        // It is built over time by remembering 'publish' requests.
        //
      },
      blacklist: {
        //
        // This is the list of modules that will ALWAYS be proxies
        // to the private npm, no matter what.
        //
      },
      whitelist: {
        //
        // If enabled: only requests for these modules will be served
        // by the proxy (unless they are 'known private modules').
        //
      },
      //
      // In 'transparent mode' the proxy will always forward to
      // the public registry.
      //
      transparent: false
    }
  },
  //
  // Server options (from 'create-servers')
  //
  http: 80
  https: {
    port: 443,
    root: "/path/to/your/ssl/files",
    key: "your-ssl.key",  // or .pem
    key: "your-ssl.cert", // or .pem
  }
};

smartPrivateNpm.createServer(config, function (err, servers) {
  if (err) {
    console.log("Error starting private npm: %j", servers);
    return process.exit(1);
  }

  console.log("Private npm running on %j servers.", Object.keys(servers));
});</code></pre>
<p>Per l'operazione di pubblicazione dei <strong>pacchetti npm</strong> su un registry diverso, va semplicemente riadattato poi il comando che andiamo a dare nella shell:</p>
<pre><code>npm publish some-private-code --reg http://localhost/</code></pre>
<p>Ho trovato con cosa giocare stasera dopo il lavoro. In bocca al lupo a chiunque si voglia cimentare, e come sempre grazie a Nodejitsu per tutto l'<strong>open source</strong> che ci regala.</p>
<p><em>Photo courtesy of <a href="http://www.flickr.com/photos/trygve_lie/5820449269/">Trygve Lie</a></em></p>
