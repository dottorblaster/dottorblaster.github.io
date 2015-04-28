---
layout: link
status: publish
published: true
title: EXT4 encryption design document
origlink: https://docs.google.com/document/d/1ft26lUQyuSpiu6VleP70_npaWdRfXFoNnB8JYnykNTg/preview?sle=true#heading=h.fctvdc89s0kl
date: 2015-04-28 09:35:00 +0100
categories:
- Linux
tags:
- ext4
- filesystem
- linux
---

A quanto pare, il **supporto alla crittografia** sta approdando nativamente su **Ext4**: al link possiamo trovare il documento preliminare che si occupa di descrivere le specifiche tecniche.

> EXT4 encryption is not currently resilient in the face of an adversary who is able to manipulate the offline block device content prior to the authorized user later performing EXT4 file system I/O on said content. In that scenario the user can have no expectations regarding either data integrity or confidentiality.
>
> We are not currently planning on attempting any mitigations against timing attacks. We recognize that these are important to address, but mitigations will require substantial work in the Linux kernel Crypto API. Addressing timing attacks against users of the Crypto API is out of scope for this effort
