---
sidebar_position: 20
---

# Temi

Condividi e scarica l'aspetto degli overlay tramite Steam Workshop. Un tema può includere l'aspetto di queste funzioni:

- [Chat](./chat)
- [Barra donazioni](./donate)
- [Avvisi di donazione](./donate-alert)
- [Avvisi nuovi follower](./fan-alert)
- [Compleanni degli spettatori](./birthday-alert)
- [Bacheca donazioni](./sponsors)
- [Sondaggi live](./vote)
- [Orologio](./clock)
- [Barra obiettivo Twitch](./goal): **Obiettivo follower**, **Obiettivo abbonamenti**, **Obiettivo Bits**

Aprilo da **🎨 Temi** in fondo al menu a sinistra. La pagina ha due schede: **I miei temi** e **Temi scaricati**. Steam deve essere in esecuzione.

## Trovare e applicare un tema dalla pagina di una funzione

In ognuna delle funzioni elencate sopra, apri la sezione **CSS personalizzato** e fai clic su **Esplora i temi di Steam Workshop**:

1. **Esplora temi** elenca i temi del Workshop per questa funzione. Scrivi in **Cerca per nome del tema** e fai clic su **Cerca**, oppure usa **Pagina precedente** / **Pagina successiva** per sfogliare le pagine
2. Fai clic su una miniatura per vedere l'immagine di anteprima
3. Fai clic su **Applica**. Il tema viene sottoscritto, scaricato e applicato a questa funzione
4. **Iscritti** elenca i temi a cui ti sei già iscritto per questa funzione

Mentre un tema è applicato, la pagina mostra **Tema in uso: (nome)** e un pulsante **Ripristina**, e il CSS personalizzato è di sola lettura. Fai clic su **Ripristina** per tornare alle tue impostazioni.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Temi scaricati

Elenca tutti i temi a cui ti sei iscritto su Steam. I temi sottoscritti non vengono applicati automaticamente: usa i pulsanti sulla scheda. OBS si aggiorna subito.

Ogni scheda mostra l'anteprima, il nome, **In uso** se una funzione lo usa, e **Include:** le funzioni coperte dal tema (✓ indica le funzioni che lo stanno usando).

| Pulsante | Cosa fa |
|------|------|
| **Applica tutto** | Applica il tema a tutte le funzioni che include. Se una funzione sta usando un altro tema, ti viene chiesto di confermare la sostituzione |
| **Scegli…** | Scegli a quali funzioni applicarlo |
| **Ripristina tutto** | Riporta tutte le funzioni che usano questo tema alle tue impostazioni precedenti all'applicazione |
| **Ripristina…** | Scegli quali funzioni ripristinare |
| **Annulla iscrizione** | Annulla l'iscrizione. Se il tema è in uso, quelle funzioni vengono prima ripristinate |

Dopo l'applicazione, un messaggio in basso mostra per 30 secondi cosa è cambiato, con un pulsante **Ripristina** per annullare.

:::note
- Il ripristino torna alle tue impostazioni, non a un tema che è stato sostituito
- Le modifiche all'aspetto fatte mentre un tema è applicato non vengono conservate dopo il ripristino
:::

- **Download in corso…**: tieni Steam in esecuzione; potrai applicarlo al termine del download
- **Tema rimosso (#id)**: il tema non è più tra le tue iscrizioni su Steam ma alcune funzioni lo usano ancora. Le immagini potrebbero non essere visualizzate, quindi è consigliato il ripristino
- Se Steam non è in esecuzione, avvia Steam e fai clic su **Aggiorna**

{/* TODO: 截圖 — 下載的主題 */}

## I miei temi: caricare un tema

1. Configura l'aspetto delle funzioni che vuoi condividere nelle rispettive pagine
2. In **I miei temi**, fai clic su **Carica nuovo tema**
3. Compila:
   - **Nome del tema** (obbligatorio)
   - **Descrizione del tema**
   - **Funzioni incluse** (almeno una)
   - **Immagine di anteprima** (obbligatoria, fino a 1MB): fai clic su **Scegli immagine di anteprima**
4. Seleziona la casella per confermare di avere il diritto di distribuire ogni immagine, font e suono del tema. Le risorse con licenza solo per uso personale o non commerciale non possono essere caricate
5. Fai clic su **Carica tema**

Se vedi "Accetta prima i termini di Steam Workshop nel browser", accetta i termini affinché il tema possa diventare pubblico.

### Gestire i temi caricati

Ogni tema caricato ha:

- **Scarica e applica**: applica il tema pubblicato alle tue funzioni. Questo sovrascrive le tue impostazioni attuali dell'aspetto
- **Modifica**: ricarica le tue impostazioni attuali dell'aspetto nello stesso tema. Se non hai scaricato il tema, l'immagine di anteprima esistente non viene mantenuta e devi sceglierne una nuova
- **Gestisci su Steam**: apre il tema in Steam

:::info Limiti della versione di prova
I temi (Steam Workshop) sono disponibili solo nella versione completa. Nella versione di prova, **🎨 Temi** non può essere aperto e i temi non possono essere applicati.

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::
