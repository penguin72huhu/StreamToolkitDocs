---
sidebar_position: 2
---

# Come aggiungere fonti su OBS

La maggior parte delle funzioni di Stream Toolkit richiede l'aggiunta di una "Fonte browser" su OBS per essere visualizzata nella diretta streaming.

## Passaggio 1: Copia l'URL della funzione

In Stream Toolkit, ogni pagina della funzione mostra il relativo URL locale, nel formato:

```
http://127.0.0.1:7272/feature-name
```

Copia l'URL della funzione che desideri aggiungere.

## Passaggio 2: Aggiungi una fonte browser su OBS

1. Nella sezione **Fonti** di OBS, fai clic sul pulsante **+** in basso
2. Seleziona **Browser**
3. Seleziona **Crea nuovo**, inserisci un nome per la fonte (ad esempio, "Barra donazioni") e fai clic su **OK**
4. Incolla l'URL copiato nel Passaggio 1 nel campo **URL**
5. Regola **Larghezza** e **Altezza** in base alle tue esigenze
6. Fai clic su **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Funzioni seguenti che richiedono di selezionare "Controlla audio tramite OBS"

Include l'uscita audio; è necessario selezionare **Controlla audio tramite OBS** nelle impostazioni della fonte browser affinché il suono appaia correttamente nella diretta streaming:

- **Media Board** — Video, Suono
- **Avvisi di donazione**
- **Richieste musicali**

Come selezionare:
1. Nello elenco delle fonti di OBS, fai clic con il pulsante destro del mouse sulla fonte browser
2. Seleziona **Proprietà**
3. Trova **Controlla audio tramite OBS** e selezionalo
4. Fai clic su **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Se non c'è ancora audio dopo la selezione, verifica che la fonte non sia silenziata nel mixer audio di OBS.
:::
