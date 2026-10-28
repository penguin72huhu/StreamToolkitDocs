---
sidebar_position: 18
---

# Chat bot

Pubblica automaticamente messaggi nella tua chat: messaggi programmati a intervalli prestabiliti e risposte a parole chiave quando uno spettatore digita un comando. Il bot scrive dal tuo account.

Il chat bot non ha un overlay OBS, quindi non c'è alcun URL da aggiungere.

:::tip
Attiva l'interruttore accanto a **Chat bot** nel menu a sinistra. Quando è spento, il bot non invia nulla.
:::

La pagina ha tre schede: **Impostazioni**, **Messaggi programmati** e **Risposte a parole chiave**.

## Scheda Impostazioni

In **Piattaforme**, fai clic su **Twitch** per attivarlo (fai di nuovo clic per disattivarlo). Il punto accanto si illumina quando Twitch è collegato; altrimenti mostra **(non connesso)**. Collega prima Twitch: [Impostazioni Twitch](../platforms/twitch).

**YouTube** è indicato come **In arrivo** e non può ancora essere attivato.

Se nessuna piattaforma è collegata, le altre due schede mostrano "Nessuna piattaforma collegata, quindi il bot non invierà nulla." con un pulsante **Vai alle impostazioni**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Messaggi programmati

Pubblica un messaggio a intervalli regolari mentre sei in diretta.

1. Fai clic su **+ Aggiungi**
2. Compila:
   - **Messaggio**: il testo da pubblicare (fino a 500 caratteri su Twitch). È sempre su una sola riga: Invio non fa nulla e gli a capo incollati diventano spazi
   - **Intervallo**: minuti tra un invio e l'altro (5–240, predefinito 15)
   - **Min. messaggi**: quanti nuovi messaggi in chat servono dall'ultimo invio prima di pubblicare di nuovo (0–100, predefinito 2), così da non continuare a scrivere in una chat vuota
   - **Piattaforme**: dove pubblicare
3. Fai clic su **Salva**

Come vengono pubblicati:

- Solo mentre sei in diretta. Il primo invio avviene un intervallo intero dopo l'inizio della diretta, non nel momento in cui parte lo stream
- Se più messaggi programmati scadono contemporaneamente, vengono distanziati invece di essere pubblicati insieme

## Risposte a parole chiave

Risponde quando il messaggio di uno spettatore inizia con un comando.

1. Fai clic su **+ Aggiungi**
2. Compila:
   - **Comando**: scegli il prefisso (`! @ # $ % & ~`), poi digita una sola parola senza spazi, ad es. `!dc`. Viene confrontato con la prima parola di un messaggio in chat, ignorando maiuscole/minuscole
   - **Risposta**: il testo da pubblicare. `{user}` viene sostituito con il nome dello spettatore che ha usato il comando
   - **Attesa**: secondi prima che lo stesso comando possa rispondere di nuovo (0–3600, predefinito 5)
   - **Piattaforme**: dove rispondere
3. Fai clic su **Salva**

Le risposte a parole chiave funzionano in qualsiasi momento, in diretta o meno.

Un comando non può essere uguale a quello di un'altra risposta a parola chiave, né a un comando già usato da [Richieste musicali](./song-request) o dalla parola chiave di [Estrazioni](./lottery).

## Gestione dell'elenco

In entrambe le schede, ogni elemento ha:

- Una casella di controllo a sinistra per attivare o disattivare l'elemento senza eliminarlo
- Etichette delle piattaforme; un'etichetta sbiadita indica che quella piattaforma è disattivata nella scheda Impostazioni
- **Modifica** ed **Elimina**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Limiti della versione di prova
- 1 messaggio programmato e 1 risposta a parola chiave
- Ogni messaggio termina con ` (by StreamToolkit)`, quindi la lunghezza massima del messaggio è inferiore

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::
