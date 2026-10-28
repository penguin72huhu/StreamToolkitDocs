---
sidebar_position: 11
---

# Timer

Mostra durante la diretta timer con conto alla rovescia o cronometri. Un conto alla rovescia può guadagnare o perdere tempo tramite pulsanti su cui fai clic, oppure automaticamente con follow, abbonamenti, Bits di Twitch e donazioni.

La pagina ha due schede: **Impostazioni** e **Crea timer**. Crea prima un timer, poi controllalo da **Impostazioni**.

## Passaggio 1: Crea un timer

1. Apri **Timer** nella barra laterale sinistra e passa alla scheda **Crea timer**
2. In **I miei timer**, fai clic su **Aggiungi**. Viene creato un nuovo timer con conto alla rovescia, con un tempo iniziale di 10 minuti e tre opzioni di tempo (+30 sec, +1 min, +5 min)
3. Fai clic sulla scheda di un timer per modificarlo. Fai clic sulla **✕** di una scheda per eliminare quel timer

L'**Anteprima** mostra l'aspetto del timer selezionato. Usa il riquadro colore accanto per cambiare lo sfondo dell'anteprima.

Sotto l'anteprima, passa tra **Impostazioni timer** e **Aspetto**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Passaggio 2: Impostazioni timer

### Modalità timer

- **Conto alla rovescia**: conta alla rovescia a partire dal tempo iniziale
- **Cronometro**: conta in avanti da 0 e può registrare i giri. La modalità cronometro non ha tempo iniziale, tempo di avviso, suono di fine né opzioni di tempo

### Nome

Il nome mostrato nell'elenco dei timer, nei menu a discesa e in Strumenti rapidi.

### Tempo iniziale

Il tempo di partenza del conto alla rovescia, in ore, minuti e secondi. Accanto viene mostrato il totale in secondi.

### Tempo di avviso

Quando il tempo rimanente raggiunge questo valore, il testo del timer passa al colore **Avviso** impostato in **Aspetto**. Lascia 0 per nessun avviso.

### Suono di fine countdown

Il suono riprodotto quando il conto alla rovescia arriva a 0. Scegli **Nessuno** o uno dei suoni integrati (**Campanella**, **Moneta**, **Campana**, **Pop**, **Fanfara**). Fai clic su **▶** per provarlo. Per usare un tuo file, fai clic su **Scegli suono** e sceglilo dal gestore risorse.

Il suono viene riprodotto dalla fonte browser di OBS, quindi attiva **Controlla audio tramite OBS** per la fonte del timer. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source).

### Opzioni tempo

Le opzioni tempo sono i pulsanti per aggiungere/togliere tempo a un conto alla rovescia. Ogni timer può averne fino a 20.

Per aggiungerne una, compila il modulo **Aggiungi opzione tempo**:

1. **Sorgente trigger**: scegli cosa applica automaticamente questa opzione
   - **Manuale**: applicata solo quando fai clic sul pulsante
   - **Follow**: applicata a ogni nuovo follow su Twitch
   - **Twitch Bits**: applicata ai cheer di Bits
   - **Nuovo abbonamento Twitch**: applicata agli abbonamenti Twitch
   - **Donazione**: applicata alle donazioni. Usa **Piattaforme di donazione** per scegliere quali tra **YouTube**, **O'Pay**, **ECPay** e **PayPal** contano
2. Per **Twitch Bits** e **Donazione**, imposta anche:
   - **Soglia di attivazione**: la quantità di Bits o l'importo della donazione per un passo
   - **Metodo di conversione**: **Attivazione a multipli interi** o **Conversione proporzionale** (vedi l'esempio sotto)
3. **Aggiungi tempo**: scegli **＋** o **－**, poi imposta ore, minuti e secondi
4. Fai clic su **Aggiungi**

Per cambiare un'opzione, fai clic sul suo **Modifica**, modifica il modulo, poi fai clic su **Salva** (o **Annulla**). Fai clic su **✕** per eliminarla. Le opzioni con un trigger automatico sono contrassegnate con 🔗 e il nome del trigger.

**Esempio di conversione**: Soglia di attivazione 100 bits, Aggiungi tempo +1 min, e uno spettatore invia 250 bits:

- **Attivazione a multipli interi**: contano solo i multipli interi della soglia → 2 × 1 min = **+2 min**
- **Conversione proporzionale**: 250 ÷ 100 × 1 min → **+2 min 30 sec**

Per le donazioni, l'importo viene convertito nella valuta selezionata nelle Impostazioni dell'app prima di essere confrontato con la soglia.

:::note
- I trigger automatici riguardano solo i timer con conto alla rovescia
- Le opzioni tempo con un trigger automatico compaiono comunque come pulsanti nel pannello di controllo, quindi puoi anche farci clic manualmente
- **Nuovo abbonamento Twitch** si applica una volta per ogni evento di abbonamento: un regalo di più abbonamenti lo applica una sola volta. I rinnovi lo applicano solo quando **Conta i rinnovi di abbonamento** è attivo in [Barra obiettivo Twitch](./goal)
:::

### Scorciatoie di controllo

Imposta le scorciatoie da tastiera per questo timer:

- **Avvia/Pausa**
- **Scorciatoia giro** (solo cronometro)
- **Scorciatoia reimposta**

Vedi anche [Scorciatoie](./hotkeys).

## Passaggio 3: Aspetto

| Impostazione | Descrizione |
|---------|-------------|
| **Carattere** | Font del testo del tempo |
| **Dimensione carattere** | 12–300 px |
| **Colore testo** | **Normale**: **Tinta unita** o **Sfumatura** (due colori e un **Angolo**). **Avviso** (solo conto alla rovescia): il colore usato una volta raggiunto il tempo di avviso |
| **Colore sfondo** | Sfondo dietro il tempo |
| **Bordo** | Colore del contorno, **Opacità** e **Spessore** (0–20 px) |
| **Ombra** | Colore dell'ombra, **Opacità**, **Sfocatura** e spostamento **X** / **Y** |

## Passaggio 4: Scegli una modalità di visualizzazione e aggiungi la fonte OBS

Passa alla scheda **Impostazioni**. In **Pannello di controllo**, scegli una **Modalità di visualizzazione**:

| Modalità | Descrizione | URL della fonte OBS |
|------|-------------|----------------|
| **Timer singolo** | OBS mostra solo il timer selezionato. Cambia timer con il menu a discesa **Timer attuale** | `http://127.0.0.1:7272/timer` |
| **Timer multipli** | Ogni timer ha il proprio URL e può essere aggiunto a OBS separatamente | `http://127.0.0.1:7272/timer/<timer ID>` |

In modalità **Timer multipli**, scegli i timer da **Aggiungi alla visualizzazione**. Ogni timer aggiunto ottiene una propria scheda con il suo **URL sorgente OBS**. Fai clic su **Copia** per copiarlo. Fai clic su **✕** di una scheda per rimuoverlo dalla visualizzazione.

Aggiungi l'URL copiato a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source).

:::tip
Attiva anche l'interruttore accanto a **Timer** nella barra laterale sinistra (**Attiva output OBS**). Quando è spento, il timer è nascosto in OBS.
:::

## Passaggio 5: Controlla il timer

Ogni scheda timer nella scheda **Impostazioni** ha:

- **Avvia** / **Pausa**: per un cronometro, il pulsante di pausa indica **Ferma**. Un conto alla rovescia arrivato a 0 non può essere avviato finché non lo reimposti o aggiungi tempo
- **Giro** (solo cronometro): registra un giro mentre è in funzione. I giri sono elencati sotto la scheda con il tempo e la differenza rispetto al giro precedente
- **Reimposta**: ferma il timer e lo riporta al tempo iniziale (0 per un cronometro), cancellando i giri
- **Aggiungi tempo** (solo conto alla rovescia): un pulsante per ogni opzione tempo

Il tempo in corso viene mostrato solo nell'overlay OBS, non nella pagina delle impostazioni. Puoi controllare i timer anche dalla finestra [Strumenti rapidi](./quick-tools), che mostra anche il tempo attuale.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Limiti della versione di prova
Puoi creare solo **1** timer. Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison) per i dettagli.
:::
