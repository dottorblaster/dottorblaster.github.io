Se c'è una cosa di cui sono un fanboy sfegatato, non è Android, non è iOS, non è nemmeno Linux (anche se effettivamente...). È Markdown. Perché Markdown è la soluzione a qualsiasi problema coinvolga del testo, almeno per quella che è la mia esperienza: si può usare per qualsiasi scopo, si può convertire in Markdown pressoché qualsiasi cosa, e Markdown può essere usato per produrre pressoché qualsiasi formato.

È stato così che quasi senza pensarci durante una riunione in cui il team di sviluppo di cui facevo parte un paio d'anni fa si lamentava a gran voce della necessità di manutenere dei manuali di installazione di alcuni applicativi, ho proposto di passare il tutto a Markdown senza remore. C'è stato chi mi ha appoggiato, chi mi ha osteggiato (heh), e chi ha chiesto spiegazioni al sottoscritto che ovviamente è stato felice di darne.

Il nostro caso è stato secondo me un episodio di normale amministrazione di documentazione che nessuno ha voglia di manutenere per qualcuno che non ha assolutamente voglia di leggerla; per questo ho pensato che fosse doveroso migrare a un approccio quanto più automatizzabile possibile per levarci dalle scatole una cosa su cui nessuno di noi aveva voglia di applicarsi.

I problemi che abbiamo avuto sono stati, nell'ordine, di:

- Versioning
- Editing
- Esportazione
- Changelog

In conclusione, è stata una sfida interessante anche tecnologicamente parlando, soprattutto considerata la tematica che secondo me viene costantemente sottovalutata. Nuovi runtime, nuovi framework, nuovi linguaggi, si: tutto bellissimo, ma se non avete mai provato a far passare un team di dieci persone a un nuovo formato di documentazione non siete nessuno.

### Versioning
"Mi passi il documento di installazione?", "a che versione siamo arrivati?", "ragazzi chi è che ha il documento più aggiornato?" - queste sono alcune delle frasi che mi è capitato di sentire nel periodo in cui la manualistica, relegata a una semplice formalità, ce la passavamo su chiavetta USB. Poi l'applicazione ha cominciato a crescere, e con essa è cresciuta l'entropia di ogni deploy in produzione.
