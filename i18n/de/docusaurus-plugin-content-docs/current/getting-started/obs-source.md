---
sidebar_position: 2
---

# Quellen in OBS hinzufügen

Die meisten Funktionen von Stream Toolkit erfordern das Hinzufügen einer „Browserquelle“ in OBS, um im Live-Stream angezeigt zu werden.

## Schritt 1: Funktions-URL kopieren

In Stream Toolkit wird auf jeder Funktionsseite die entsprechende lokale URL im folgenden Format angezeigt:

```
http://127.0.0.1:7272/feature-name
```

Kopieren Sie die Funktions-URL, die Sie hinzufügen möchten.

## Schritt 2: Browserquelle in OBS hinzufügen

1. Klicken Sie im Bereich **Quellen** in OBS unten auf die Schaltfläche **+**
2. Wählen Sie **Browser**
3. Wählen Sie **Neu erstellen**, geben Sie einen Namen für die Quelle ein (z. B. „Spendenleiste“) und klicken Sie auf **OK**
4. Fügen Sie die in Schritt 1 kopierte URL in das Feld **URL** ein
5. Passen Sie **Breite** und **Höhe** nach Bedarf an
6. Klicken Sie auf **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Folgende Funktionen erfordern das Aktivieren von „Audio über OBS steuern“

Enthält Audioausgabe; Sie müssen in den Einstellungen der Browserquelle **Audio über OBS steuern** aktivieren, damit der Ton im Live-Stream korrekt wiedergegeben wird:

- **Media Board** — Video, Sound
- **Spendenbenachrichtigungen**
- **Musikwünsche**

So aktivieren Sie es:
1. Klicken Sie in der Quellenliste von OBS mit der rechten Maustaste auf die Browserquelle
2. Wählen Sie **Eigenschaften**
3. Suchen Sie nach **Audio über OBS steuern** und aktivieren Sie es
4. Klicken Sie auf **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Wenn nach dem Aktivieren immer noch kein Ton zu hören ist, stellen Sie sicher, dass die Quelle im OBS-Audio-Mixer nicht stummgeschaltet ist.
:::
