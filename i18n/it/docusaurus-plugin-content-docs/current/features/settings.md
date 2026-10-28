---
sidebar_position: 19
---

# Impostazioni

Fai clic su **⚙️ Impostazioni** in fondo al menu a sinistra. Questa pagina contiene le opzioni generali dell'app, i collegamenti alle piattaforme e i gateway di pagamento per le donazioni.

## Generale

| Opzione | Cosa fa | Predefinito |
|------|------|------|
| **Tema** | Modalità di visualizzazione dell'interfaccia: **Grigio scuro** o **Chiaro** | Grigio scuro |
| **Lingua** | Lingua dell'interfaccia; cambia immediatamente | — |
| **Riduci nella barra delle applicazioni con la X** | Chiudendo la finestra la si riduce nell'area di notifica invece di uscire | Attivo |
| **Valuta delle donazioni** | Valuta globale, usata dalla barra donazioni, dagli avvisi e da tutte le altre visualizzazioni di importi | Impostata al primo avvio in base alla lingua del sistema (ad es. cinese tradizionale (Taiwan) → TWD, giapponese → JPY, altre → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Collegamento piattaforme

### Twitch

Fai clic su **Collega account** e autorizza nel browser. Una volta collegato mostra **Connesso @tuo-nome** e un pulsante **Disconnetti**. Procedura completa: [Impostazioni Twitch](../platforms/twitch).

Dopo il collegamento, **▸ Impostazioni di conversione** imposta quanto valgono Bits e abbonamenti nella tua valuta delle donazioni:

- **Ripartizione ricavi**: **50 / 50** o **70 / 30**
- **Ogni 100 Bits**, **Abbonamento Tier 1**, **Abbonamento Tier 2**, **Abbonamento Tier 3**
- **Salva** memorizza i valori per la valuta attuale; **Ripristina predefiniti** inserisce i valori integrati per quella valuta

### YouTube

1. Fai clic su **Collega account** e accedi con Google. Passo per passo: [Impostazioni YouTube](../platforms/youtube-settings)
2. Una volta collegato, mostra **Connesso: nome del canale**. **Disconnetti** scollega l'account
3. Scegli come trovare la chat live:
   - **Rileva la diretta in corso**: richiede l'accesso con Google. Fai clic su **Connetti** per cercare nel tuo canale la diretta in corso o in programma. Se ce ne sono diverse, scegline una dall'elenco
   - **Inserisci un URL manualmente**: incolla l'**URL della chat**
4. **Chiedi l'URL della chat a ogni avvio del programma**: facoltativo

**▸ Impostazioni di conversione** sotto YouTube imposta quanto valgono le iscrizioni (YouTube non invia un importo per le iscrizioni):

- **Impostazioni livelli di abbonamento**: aggiungi il nome di ogni livello e il suo valore. I nomi dei livelli devono coincidere esattamente con quelli del tuo canale YouTube
- **Livelli non elencati**: valore usato per un livello non presente nella tabella
- **Livello delle iscrizioni regalate**: a quale livello corrispondono le iscrizioni regalate
- I livelli rilevati negli eventi ma assenti dalla tabella vengono elencati con **Aggiungi alla tabella** / **Ignora**

## Integrazione piattaforme di donazione

Fai clic su un gateway per espanderlo. Ognuno ha un link **Guida qui** alla relativa guida di configurazione:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Notifica di prova

Il pulsante **Notifica di prova** accanto al titolo apre una finestra di prova:

- Compila **Nome di prova**, **Messaggio di prova**, **Importo di prova**, scegli la **Piattaforma di prova**, poi fai clic su **Invia notifica di prova**
- **Prova Super Chat YouTube**: inserisci una **Stringa importo** come `$5.00` o `NT$150` e fai clic su **Invia Super Chat di prova** per provare il riconoscimento dell'importo e la conversione di valuta

## Informazioni

Fai clic sul pulsante **i** accanto a "Stream Toolkit" in cima al menu a sinistra per vedere la versione, l'autore e un link alla documentazione ufficiale.

:::info Limiti della versione di prova
- **Integrazione piattaforme di donazione** è disponibile solo nella versione completa
- Le **Impostazioni di conversione** delle iscrizioni YouTube sono disponibili solo nella versione completa

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison).
:::
