---
layout: post
status: publish
published: true
title: 'Ubuntu: aggiornamento improvviso del kernel. Come mai?'
author:
  display_name: Bl@ster
  login: Blaster
  email: dottorblaster@gmail.com
  url: http://www.dottorblaster.it
author_login: Blaster
author_email: dottorblaster@gmail.com
author_url: http://www.dottorblaster.it
wordpress_id: 59
wordpress_url: http://blaster.netsons.org/?p=59
date: '2007-08-31 21:38:09 +0200'
date_gmt: '2007-08-31 19:38:09 +0200'
categories:
- Linux
tags:
- Ubuntu
comments:
- id: 504
  author: ubu4ever
  author_email: morarossa@gmail.com
  author_url: http://ubu4ever.wordpress.com
  date: '2007-08-31 23:10:16 +0200'
  date_gmt: '2007-08-31 21:10:16 +0200'
  content: "Il mio &quot;amatissimo&quot; &egrave; quello lowlatency :P\r\n\r\n[OT]Ma
    il tema di Usplash va?[/OT]"
- id: 505
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2007-08-31 23:38:16 +0200'
  date_gmt: '2007-08-31 21:38:16 +0200'
  content: ma quando ? a me non ha aggiornato un bel niente :S
- id: 506
  author: Steven
  author_email: steven3k@gmail.com
  author_url: http://steven3k.wordpress.com
  date: '2007-09-01 00:17:31 +0200'
  date_gmt: '2007-08-31 22:17:31 +0200'
  content: 'Confermo: l&#39;update c&#39;&egrave;, purtroppo manca il changelog...
    vedremo'
- id: 507
  author: MisterAlbe
  author_email: a.albertalli@libero.it
  author_url: ''
  date: '2007-09-01 00:44:53 +0200'
  date_gmt: '2007-08-31 22:44:53 +0200'
  content: stessa cosa a me qualche sec fa...
- id: 508
  author: bitmastro
  author_email: fcolasuonno@gmail.com
  author_url: ''
  date: '2007-09-01 00:56:19 +0200'
  date_gmt: '2007-08-31 22:56:19 +0200'
  content: "ecco il changelog :-)\r\nlinux-source-2.6.20 (2.6.20-16.31) feisty-security;
    urgency=low\r\n\r\n  [Phillip Lougher]\r\n\r\n  * Fix build problem with CVE-2007-3380
    patch\r\n    - GIT-SHA 40b2e68a8d1137d2e7f4eb7ce561ccf30ebce4d1\r\n  * sysfs_readdir
    NULL ptr dereference causes kernel oops (CVE-2007-3104)\r\n    - GIT-SHA 5ca45c7e9e3d363c7bd3a5419742cb3368baf474\r\n
    \ * Fix VMI lazy mode race (again)\r\n    - GIT-SHA b6fb010967dbc9fcbf1731716927369c9cb89725\r\n
    \ * Fix CVE-2007-3848 patch for older kernel\r\n    - GIT-SHA ddc739c7419ffdd584845d1aaa3ee9ded154a951\r\n
    \ * Fix paravirt vmalloc bug\r\n    - GIT-SHA c330f3fb3b90703cabc0e485aec3f7545753e289\r\n
    \ * Fix race condition in Squashfs cache handling\r\n    - GIT-SHA 00b3f12b4f0a5cbdea6d66587a3cd7ca25375c55\r\n\r\n
    \ [Tim Gardner]\r\n\r\n  * Dell Inspiron 1420 no external audio\r\n    - GIT-SHA
    dc24b94b0d384a70b400d56f97060351f800c3df\r\n    - Bug #119898\r\n  * [TG3]: Fix
    link problem on Dell&#39;s onboard 5906.\r\n    - GIT-SHA 7dce7db84f689c27c012d30be00dba2a0b567ff5\r\n
    \   - Bug #121030\r\n  * Add AGP support for Intel G33 video. Add 3D/mesa support
    for Intel G33\r\n    video.\r\n    - GIT-SHA 6331663c669b38521a31b04d4f58f9a888b19d2c\r\n
    \   - Bug #121443\r\n  * Touchpad not recognized on Dell Inspiron 1420\r\n    -
    GIT-SHA 9cfe7aefbb8d5755a636eb104348175738eb4fe0\r\n    - Bug #129477\r\n  * Fix
    another paravirt bug for Feisty\r\n    - GIT-SHA 0d84c3f9a8dce561d393c7ac349014b5f19a4c84\r\n\r\n
    \ [Upstream Kernel Changes]\r\n\r\n  * cpuset: prevent information leak in cpuset_tasks_read
    (CVE-2007-2875)\r\n  * NETFILTER: {ip, nf}_conntrack_sctp: fix remotely triggerable
    NULL ptr\r\n    dereference (CVE-2007-2876)\r\n  * [DLM] CVE-2007-3380 A TCP connection
    to DLM port blocks DLM operations\r\n  * [PPPOE]: memory leak when socket is release()d
    before PPPIOCGCHAN has\r\n    been called on it (CVE-2007-2525)\r\n  * fat: fix
    VFAT compat ioctls on 64-bit systems (CVE-2007-2878)\r\n  * random: fix bound
    check ordering (CVE-2007-3105)\r\n  * USB: usblcd doesn&#39;t limit memory consumption
    during write\r\n    (CVE-2007-3513)\r\n  * [NETFILTER]: nf_conntrack_h323: add
    checking of out-of-range on\r\n    choices&#39; index values (CVE-2007-3642)\r\n
    \ * drm/i915: Fix i965 secured batchbuffer usage (CVE-2007-3851)\r\n  * [CIFS]
    Fix sign mount option and sign proc config setting\r\n    (CVE-2007-3843)\r\n
    \ * Reset current-&gt;pdeath_signal on SUID binary execution (CVE-2007-3848)\r\n
    \ * aacraid: fix security hole (CVE-2007-4308)\r\n\r\n -- Phillip Lougher &lt;phillip@ubuntu.com&gt;
    \ Wed, 29 Aug 2007 20:42:52 +0100"
- id: 509
  author: Matteo
  author_email: matteo@matteomoro.net
  author_url: http://www.MatteoMoro.net
  date: '2007-09-01 02:02:52 +0200'
  date_gmt: '2007-09-01 00:02:52 +0200'
  content: "Niente di inatteso n&egrave; di improvviso. Il kernel &egrave; un pezzo
    di software come tutti gli altri, e come a tutti gli altri, quando viene trovato
    qualche problema viene corretto e aggiornato.\r\n\r\nPuoi avere tutti i dettagli
    sugli aggiornamenti di sicurezza dei pacchetti Ubuntu (kernel compreso) iscrivendoti
    all&#39;apposita Mailing-List:\r\nhttps://lists.ubuntu.com/mailman/listinfo/ubuntu-security-announce\r\n\r\nPuoi
    anche andare a leggerti gli archivi della ML stessa:\r\nhttps://lists.ubuntu.com/archives/ubuntu-security-announce/\r\n\r\nI
    dettagli degli aggiornamenti di oggi sono contenuti negli annunci USN-508-1, USN-509-1
    e USN-510-1."
- id: 510
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2007-09-01 02:50:03 +0200'
  date_gmt: '2007-09-01 00:50:03 +0200'
  content: "presto detto:\r\n<a href=\"http://it.archive.ubuntu.com/ubuntu/pool/main/l/linux-source-2.6.20/linux-image-2.6.20-16-generic_2.6.20-16.29_i386.deb\"
    rel=\"nofollow\">linux-image-2.6.20-16-generic_2.6.20-16.29_i386.deb</a>  8 giugno
    2007\r\n\r\n<a href=\"http://it.archive.ubuntu.com/ubuntu/pool/main/l/linux-source-2.6.20/linux-image-2.6.20-16-generic_2.6.20-16.31_i386.deb\"
    rel=\"nofollow\">linux-image-2.6.20-16-generic_2.6.20-16.31_i386.deb</a>  31 agosto
    2007\r\n\r\nMentre qui : http://www.ubuntu.com/usn/usn-510-1  avete tutta la lista
    di cosa &egrave; cambiato. sono security fix.\r\n\r\n"
- id: 511
  author: DktrKranz
  author_email: dktrkranz@ubuntu.com
  author_url: ''
  date: '2007-09-01 03:12:17 +0200'
  date_gmt: '2007-09-01 01:12:17 +0200'
  content: 'Tutti i dettagli qui: http://www.ubuntu.com/usn/usn-510-1'
- id: 512
  author: default
  author_email: default@null.net
  author_url: ''
  date: '2007-09-01 08:25:48 +0200'
  date_gmt: '2007-09-01 06:25:48 +0200'
  content: "Tra i tanti fix problem, patch, ecc. ho notato che :   \t \t \t \t \t
    \t \t \t \t<!-- \t\t@page { size: 21cm 29.7cm; margin: 2cm } \t\tP { margin-bottom:
    0.21cm } \t--> \t  Dell Inspiron 1420 no external audio        - Bug #119898     *
    [TG3]: Fix link problem on Dell&#39;s onboard 5906.        - Bug #121030     *
    Add AGP support for Intel G33 video. Add 3D/mesa support for Intel G33       video.
    \       - Bug #121443     * Touchpad not recognized on Dell Inspiron 1420\r\n&nbsp;Insomma
    un po&#39; di aggiustamenti per la gamma Dell attualmente in vendita con ubuntu
    preinstallato\r\n  "
- id: 513
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2007-09-01 10:04:26 +0200'
  date_gmt: '2007-09-01 08:04:26 +0200'
  content: "Grazie a tutti per le informazioni :)\r\ndicevo che &egrave; un po&#39;
    strano perch&egrave; di solito vengono rilasciati due kernel: il &quot;primo&quot;
    con il cd, aggiornato poi al secondo qualche mese dopo. Non mi sembra di ricordare
    poi degli aggiustamenti all&#39;immagine cos&igrave; consistenti. Comunque sar&agrave;
    per &#39;sta storia di Dell...\r\n\r\n@ubu4ever: purtroppo il tema non ho ancora
    finito di impacchettarlo :-|"
- id: 514
  author: Matteo
  author_email: matteo@matteomoro.net
  author_url: http://www.MatteoMoro.net
  date: '2007-09-01 10:35:12 +0200'
  date_gmt: '2007-09-01 08:35:12 +0200'
  content: "&lt;strong&gt;@Bl@ster:&lt;/strong&gt;\r\n\r\nNo, gli aggiornamenti del
    kernel vengono rilasciati come per ogni altro pacchetto, e anche una virgola cambiata
    comporta lo scaricarsi il pacchetto intero, ovvero sempre una 30ina di mega. Niente
    di particolare..."
- id: 515
  author: yemmi
  author_email: yemminator@virgilio.it
  author_url: ''
  date: '2007-09-01 21:50:36 +0200'
  date_gmt: '2007-09-01 19:50:36 +0200'
  content: ma su ubuntu state ancora con il kernel 2.6.20 :| , cio&egrave; c&#39;e&#39;
    gi&agrave; il kernel 2.6.22 in giro e ubuntu sta ancora al 6.2.20 bah
- id: 516
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://blaster.netsons.org
  date: '2007-09-02 09:44:46 +0200'
  date_gmt: '2007-09-02 07:44:46 +0200'
  content: 2.6.22 mi pare ci sia in gutsy ;)
- id: 517
  author: TheKaneB
  author_email: thekaneb@gmail.com
  author_url: http://bloginformatico.netsons.org
  date: '2007-09-02 14:59:59 +0200'
  date_gmt: '2007-09-02 12:59:59 +0200'
  content: "@yemmi: Qual&#39;&egrave; il tuo problema? \r\nUbuntu ha un ciclo di rilascio
    semestrale, gli aggiornamenti tra una release e l&#39;altra si limitano ai bugfix
    come qualunque altra distribuzione che si basa su un ramo stabile e uno di testing
    e sviluppo."
- id: 530
  author: Lobotomia
  author_email: lobotomiatbm@gmail.com
  author_url: http://pettinix.blogspot.com
  date: '2007-09-03 14:53:58 +0200'
  date_gmt: '2007-09-03 12:53:58 +0200'
  content: "@yemmi: scusa tu che distro usi che ti preoccupi che su ubuntu stanno
    ancora alla 2.6.20? :|\r\n\r\nP.s. ed io non uso ubuntu :D"
- id: 13074
  author: ubu4ever
  author_email: morarossa@gmail.com
  author_url: http://ubu4ever.wordpress.com
  date: '2007-08-31 21:10:00 +0200'
  date_gmt: '2007-08-31 21:10:00 +0200'
  content: "Il mio &quot;amatissimo&quot; &egrave; quello lowlatency :P\r\n\r\n[OT]Ma
    il tema di Usplash va?[/OT]"
- id: 13075
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2007-08-31 21:38:00 +0200'
  date_gmt: '2007-08-31 21:38:00 +0200'
  content: ma quando ? a me non ha aggiornato un bel niente :S
- id: 13076
  author: Steven
  author_email: steven3k@gmail.com
  author_url: http://steven3k.wordpress.com
  date: '2007-08-31 22:17:00 +0200'
  date_gmt: '2007-08-31 22:17:00 +0200'
  content: 'Confermo: l&#039;update c&#039;&egrave;, purtroppo manca il changelog...
    vedremo'
- id: 13077
  author: MisterAlbe
  author_email: a.albertalli@libero.it
  author_url: ''
  date: '2007-08-31 22:44:00 +0200'
  date_gmt: '2007-08-31 22:44:00 +0200'
  content: stessa cosa a me qualche sec fa...
- id: 13078
  author: bitmastro
  author_email: fcolasuonno@gmail.com
  author_url: ''
  date: '2007-08-31 22:56:00 +0200'
  date_gmt: '2007-08-31 22:56:00 +0200'
  content: "ecco il changelog :-)\r\nlinux-source-2.6.20 (2.6.20-16.31) feisty-security;
    urgency=low\r\n\r\n  [Phillip Lougher]\r\n\r\n  * Fix build problem with CVE-2007-3380
    patch\r\n    - GIT-SHA 40b2e68a8d1137d2e7f4eb7ce561ccf30ebce4d1\r\n  * sysfs_readdir
    NULL ptr dereference causes kernel oops (CVE-2007-3104)\r\n    - GIT-SHA 5ca45c7e9e3d363c7bd3a5419742cb3368baf474\r\n
    \ * Fix VMI lazy mode race (again)\r\n    - GIT-SHA b6fb010967dbc9fcbf1731716927369c9cb89725\r\n
    \ * Fix CVE-2007-3848 patch for older kernel\r\n    - GIT-SHA ddc739c7419ffdd584845d1aaa3ee9ded154a951\r\n
    \ * Fix paravirt vmalloc bug\r\n    - GIT-SHA c330f3fb3b90703cabc0e485aec3f7545753e289\r\n
    \ * Fix race condition in Squashfs cache handling\r\n    - GIT-SHA 00b3f12b4f0a5cbdea6d66587a3cd7ca25375c55\r\n\r\n
    \ [Tim Gardner]\r\n\r\n  * Dell Inspiron 1420 no external audio\r\n    - GIT-SHA
    dc24b94b0d384a70b400d56f97060351f800c3df\r\n    - Bug #119898\r\n  * [TG3]: Fix
    link problem on Dell&#039;s onboard 5906.\r\n    - GIT-SHA 7dce7db84f689c27c012d30be00dba2a0b567ff5\r\n
    \   - Bug #121030\r\n  * Add AGP support for Intel G33 video. Add 3D/mesa support
    for Intel G33\r\n    video.\r\n    - GIT-SHA 6331663c669b38521a31b04d4f58f9a888b19d2c\r\n
    \   - Bug #121443\r\n  * Touchpad not recognized on Dell Inspiron 1420\r\n    -
    GIT-SHA 9cfe7aefbb8d5755a636eb104348175738eb4fe0\r\n    - Bug #129477\r\n  * Fix
    another paravirt bug for Feisty\r\n    - GIT-SHA 0d84c3f9a8dce561d393c7ac349014b5f19a4c84\r\n\r\n
    \ [Upstream Kernel Changes]\r\n\r\n  * cpuset: prevent information leak in cpuset_tasks_read
    (CVE-2007-2875)\r\n  * NETFILTER: {ip, nf}_conntrack_sctp: fix remotely triggerable
    NULL ptr\r\n    dereference (CVE-2007-2876)\r\n  * [DLM] CVE-2007-3380 A TCP connection
    to DLM port blocks DLM operations\r\n  * [PPPOE]: memory leak when socket is release()d
    before PPPIOCGCHAN has\r\n    been called on it (CVE-2007-2525)\r\n  * fat: fix
    VFAT compat ioctls on 64-bit systems (CVE-2007-2878)\r\n  * random: fix bound
    check ordering (CVE-2007-3105)\r\n  * USB: usblcd doesn&#039;t limit memory consumption
    during write\r\n    (CVE-2007-3513)\r\n  * [NETFILTER]: nf_conntrack_h323: add
    checking of out-of-range on\r\n    choices&#039; index values (CVE-2007-3642)\r\n
    \ * drm/i915: Fix i965 secured batchbuffer usage (CVE-2007-3851)\r\n  * [CIFS]
    Fix sign mount option and sign proc config setting\r\n    (CVE-2007-3843)\r\n
    \ * Reset current-&gt;pdeath_signal on SUID binary execution (CVE-2007-3848)\r\n
    \ * aacraid: fix security hole (CVE-2007-4308)\r\n\r\n -- Phillip Lougher &lt;phillip@ubuntu.com&gt;
    \ Wed, 29 Aug 2007 20:42:52 +0100"
- id: 13079
  author: Matteo
  author_email: matteo@matteomoro.net
  author_url: http://www.MatteoMoro.net
  date: '2007-09-01 00:02:00 +0200'
  date_gmt: '2007-09-01 00:02:00 +0200'
  content: "Niente di inatteso n&egrave; di improvviso. Il kernel &egrave; un pezzo
    di software come tutti gli altri, e come a tutti gli altri, quando viene trovato
    qualche problema viene corretto e aggiornato.\r\n\r\nPuoi avere tutti i dettagli
    sugli aggiornamenti di sicurezza dei pacchetti Ubuntu (kernel compreso) iscrivendoti
    all&#039;apposita Mailing-List:\r\nhttps://lists.ubuntu.com/mailman/listinfo/ubuntu-security-announce\r\n\r\nPuoi
    anche andare a leggerti gli archivi della ML stessa:\r\nhttps://lists.ubuntu.com/archives/ubuntu-security-announce/\r\n\r\nI
    dettagli degli aggiornamenti di oggi sono contenuti negli annunci USN-508-1, USN-509-1
    e USN-510-1."
- id: 13080
  author: LuNa
  author_email: ipoccios@msn.com
  author_url: http://opensource2007.netsons.org
  date: '2007-09-01 00:50:00 +0200'
  date_gmt: '2007-09-01 00:50:00 +0200'
  content: "presto detto:\r\n<a href=\"http://it.archive.ubuntu.com/ubuntu/pool/main/l/linux-source-2.6.20/linux-image-2.6.20-16-generic_2.6.20-16.29_i386.deb\"
    rel=\"nofollow\">linux-image-2.6.20-16-generic_2.6.20-16.29_i386.deb</a>  8 giugno
    2007\r\n\r\n<a href=\"http://it.archive.ubuntu.com/ubuntu/pool/main/l/linux-source-2.6.20/linux-image-2.6.20-16-generic_2.6.20-16.31_i386.deb\"
    rel=\"nofollow\">linux-image-2.6.20-16-generic_2.6.20-16.31_i386.deb</a>  31 agosto
    2007\r\n\r\nMentre qui : http://www.ubuntu.com/usn/usn-510-1  avete tutta la lista
    di cosa &egrave; cambiato. sono security fix."
- id: 13081
  author: DktrKranz
  author_email: dktrkranz@ubuntu.com
  author_url: ''
  date: '2007-09-01 01:12:00 +0200'
  date_gmt: '2007-09-01 01:12:00 +0200'
  content: 'Tutti i dettagli qui: http://www.ubuntu.com/usn/usn-510-1'
- id: 13082
  author: default
  author_email: default@null.net
  author_url: ''
  date: '2007-09-01 06:25:00 +0200'
  date_gmt: '2007-09-01 06:25:00 +0200'
  content: "Tra i tanti fix problem, patch, ecc. ho notato che :   \t \t \t \t \t
    \t \t \t \t<!-- \t\t@page { size: 21cm 29.7cm; margin: 2cm } \t\tP { margin-bottom:
    0.21cm } \t--> \t  Dell Inspiron 1420 no external audio        - Bug #119898     *
    [TG3]: Fix link problem on Dell&#039;s onboard 5906.        - Bug #121030     *
    Add AGP support for Intel G33 video. Add 3D/mesa support for Intel G33       video.
    \       - Bug #121443     * Touchpad not recognized on Dell Inspiron 1420\r\n&nbsp;Insomma
    un po&#039; di aggiustamenti per la gamma Dell attualmente in vendita con ubuntu
    preinstallato"
- id: 13083
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2007-09-01 08:04:00 +0200'
  date_gmt: '2007-09-01 08:04:00 +0200'
  content: "Grazie a tutti per le informazioni :)\r\ndicevo che &egrave; un po&#039;
    strano perch&egrave; di solito vengono rilasciati due kernel: il &quot;primo&quot;
    con il cd, aggiornato poi al secondo qualche mese dopo. Non mi sembra di ricordare
    poi degli aggiustamenti all&#039;immagine cos&igrave; consistenti. Comunque sar&agrave;
    per &#039;sta storia di Dell...\r\n\r\n@ubu4ever: purtroppo il tema non ho ancora
    finito di impacchettarlo :-|"
- id: 13084
  author: Matteo
  author_email: matteo@matteomoro.net
  author_url: http://www.MatteoMoro.net
  date: '2007-09-01 08:35:00 +0200'
  date_gmt: '2007-09-01 08:35:00 +0200'
  content: "&lt;strong&gt;@Bl@ster:&lt;/strong&gt;\r\n\r\nNo, gli aggiornamenti del
    kernel vengono rilasciati come per ogni altro pacchetto, e anche una virgola cambiata
    comporta lo scaricarsi il pacchetto intero, ovvero sempre una 30ina di mega. Niente
    di particolare..."
- id: 13085
  author: yemmi
  author_email: yemminator@virgilio.it
  author_url: ''
  date: '2007-09-01 19:50:00 +0200'
  date_gmt: '2007-09-01 19:50:00 +0200'
  content: ma su ubuntu state ancora con il kernel 2.6.20 :| , cio&egrave; c&#039;e&#039;
    gi&agrave; il kernel 2.6.22 in giro e ubuntu sta ancora al 6.2.20 bah
- id: 13086
  author: Bl@ster
  author_email: dottorblaster@gmail.com
  author_url: http://dottorblaster.it/
  date: '2007-09-02 07:44:00 +0200'
  date_gmt: '2007-09-02 07:44:00 +0200'
  content: 2.6.22 mi pare ci sia in gutsy ;)
- id: 13087
  author: TheKaneB
  author_email: thekaneb@gmail.com
  author_url: http://bloginformatico.netsons.org
  date: '2007-09-02 12:59:00 +0200'
  date_gmt: '2007-09-02 12:59:00 +0200'
  content: "@yemmi: Qual&#039;&egrave; il tuo problema? \r\nUbuntu ha un ciclo di
    rilascio semestrale, gli aggiornamenti tra una release e l&#039;altra si limitano
    ai bugfix come qualunque altra distribuzione che si basa su un ramo stabile e
    uno di testing e sviluppo."
- id: 13088
  author: Lobotomia
  author_email: lobotomiatbm@gmail.com
  author_url: http://pettinix.blogspot.com
  date: '2007-09-03 12:53:00 +0200'
  date_gmt: '2007-09-03 12:53:00 +0200'
  content: "@yemmi: scusa tu che distro usi che ti preoccupi che su ubuntu stanno
    ancora alla 2.6.20? :|\r\n\r\nP.s. ed io non uso ubuntu :D"
---
<p>Ad un tratto, lanciando come di routine il mio script di upgrade che tutto il mondo mi invidia, ho notato che tra gli aggiornamenti presenti era in arrivo un bel pacco da 33MB dal ramo security di Ubuntu, ed era un nuovo kernel. Niente paura, si tratta sempre del nostro amatissimo 2.6.20-16-generic, ma non capisco come mai un aggiornamento così inatteso come una modifica al kernel. Si, lo so, qualche bug si può sempre scovare, ma che genere di vermaccio era? Bah, per chi me lo spiega,  un bacio se una ragazza, un abbraccio se un ragazzo.</p>
