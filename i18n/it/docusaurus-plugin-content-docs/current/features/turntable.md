---
sidebar_position: 14
---

# Ruota

Crea le tue ruote dei premi e falle girare durante la diretta. Puoi impostare il peso di ogni opzione, i colori della ruota e se un'opzione estratta viene poi rimossa.

La pagina ha tre schede: **Impostazioni**, **Crea ruota** e **Cronologia**. Crea prima una ruota, poi falla girare da **Impostazioni**.

## Passaggio 1: Crea una ruota

1. Apri **Ruota** nella barra laterale sinistra e passa alla scheda **Crea ruota**
2. In **Le mie ruote**, fai clic su **Aggiungi**. Compare una nuova ruota chiamata "Ruota 1" (poi "Ruota 2" e così via)
3. Fai clic sulla scheda di una ruota per modificarla. Fai clic sulla **✕** di una scheda per eliminare quella ruota

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Titolo della ruota

Inserisci un nome per la ruota. Viene usato nell'elenco delle ruote, nei menu a discesa e nella cronologia.

### Contenuto della ruota

1. Fai clic su **Modifica contenuto**
2. Inserisci le opzioni, **una per riga**
3. Fai clic su **Conferma**

### Peso

Una volta che la ruota ha delle opzioni, ognuna ottiene un campo **Peso** (minimo 1, predefinito 1). La dimensione dello spicchio di un'opzione e la sua probabilità di essere estratta sono proporzionali al peso. Ad esempio, un'opzione con peso 2 ha il doppio delle probabilità di essere estratta rispetto a un'opzione con peso 1.

### Colore tema della ruota

- **Minimal**: la combinazione integrata bianca e grigia
- **Personalizza**: crea una tua combinazione di colori. Inserisci un **Nome**, scegli i **Colori (3–5 colori)** con **＋** per aggiungere un colore e **✕** per rimuoverlo, poi fai clic su **Aggiungi**

Per modificare un tema personalizzato, fai clic sul suo pulsante **✎**. Per eliminarlo, fai clic su **✕**. I temi personalizzati sono disponibili anche come combinazioni di colori per l'animazione della ruota in [Estrazioni](./lottery).

### Rimuovi l'opzione dopo l'estrazione

Quando è attivo, un'opzione estratta viene tolta dalla ruota prima del giro successivo. Fai clic su **Reimposta** per rimettere tutte le opzioni.

## Passaggio 2: Scegli una modalità di visualizzazione e aggiungi la fonte OBS

Passa alla scheda **Impostazioni** e scegli una **Modalità di visualizzazione**:

| Modalità | Descrizione | URL della fonte OBS |
|------|-------------|----------------|
| **Ruota singola** | OBS mostra solo la ruota selezionata. Cambia ruota con il menu a discesa **Ruota in uso** | `http://127.0.0.1:7272/turntable` |
| **Ruote multiple** | OBS può mostrare più ruote contemporaneamente. Ogni ruota ha il proprio URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

In modalità **Ruote multiple**, scegli le ruote da **Aggiungi alla visualizzazione della ruota**. Ogni ruota aggiunta ottiene una propria scheda con il suo **URL sorgente OBS**. Fai clic su **Copia** per copiarlo. Fai clic su **✕** di una scheda per rimuovere quella ruota dalla visualizzazione.

Aggiungi l'URL copiato a OBS come fonte browser. Vedi [Come aggiungere fonti su OBS](../getting-started/obs-source). La Ruota non riproduce suoni, quindi non è necessario attivare "Controlla audio tramite OBS".

:::tip
Attiva anche l'interruttore accanto a **Ruota** nella barra laterale sinistra (**Attiva output OBS**). Quando è spento, l'overlay resta nascosto.
:::

## Passaggio 3: Fai girare la ruota

In ogni scheda ruota nella scheda **Impostazioni**:

- **Avvia**: fa girare la ruota. Al termine dell'animazione, l'overlay mostra il risultato. Non è possibile fare clic sul pulsante quando la ruota non ha opzioni o sta ancora girando
- **Reimposta**: rimette le opzioni rimosse, reimposta la ruota e svuota l'attuale **Elenco vincitori**

L'**Elenco vincitori** della scheda raccoglie tutti i risultati dall'ultimo **Reimposta**.

Puoi usare **Avvia** e **Reimposta** anche dalla finestra [Strumenti rapidi](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Cronologia

La scheda **Cronologia** conserva un record per ogni round, dal primo giro fino al **Reimposta** successivo. Elenca l'ora, il titolo della ruota e i vincitori. Vengono conservati solo i sorteggi degli ultimi 30 giorni. Per eliminare un record, fai clic su 🗑 e poi su **Conferma eliminazione**.

:::info Limiti della versione di prova
- Puoi creare solo **1** ruota
- L'overlay OBS mostra una filigrana

Vedi [Confronto tra versione di prova e versione completa](../getting-started/trial-comparison) per i dettagli.
:::
