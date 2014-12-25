---
layout: link
status: publish
published: true
title: Backup in Linux semplici e veloci con attic
origlink: http://www.debian-administration.org/article/712/An_introduction_to_the_attic_backup_program
categories:
- Linux
tags:
- attic
- backup
---

**Steve Kemp** su **Debian Administration**:

> Of the recent tools, obnam, bup, etc, attic is the one that I'm using myself. It supports backing up content both locally, or over an SSH connection to a remote system. There is also support for using encryption so that the remote backups don't leak your passwords, etc.

**Attic** utilizza un concetto di **repository** che mi attira parecchio:

> Attic uses a notion of a "repository" which is used to host a collection of backups. While this repository could be local it might also be stored on a remote host (which is reachable via ssh, providing the remote host also has attic installed).

Sembra fichissimo. Credo che lo utilizzerò d'ora in poi come **sistema di backup** per le mie macchine. Essendo da riga di comando, peraltro, è anche facilmente scriptabile. Altro che **Time Machine** :-)
