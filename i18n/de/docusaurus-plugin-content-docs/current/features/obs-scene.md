---
sidebar_position: 2
---

# OBS-Szenensteuerung

Mit der **OBS-Szenensteuerung** wechselst du Szenen und blendest Quellen in deiner Streaming-Software per globalem Tastenkürzel oder über den [Schnellzugriff](./quick-tools) ein und aus. Sie funktioniert mit **OBS Studio**, **Streamlabs** und **Meld Studio**.

Diese Funktion hat kein Overlay, daher muss in OBS keine Browserquelle hinzugefügt werden.

:::info
Tastenkürzel funktionieren nur, solange der Schalter **OBS-Szenensteuerung** in der Seitenleiste eingeschaltet ist. Sie funktionieren auch, wenn das Stream-Toolkit-Fenster in den Infobereich minimiert ist.
:::

Die Einstellungsseite hat zwei Tabs: **Verbindung** und **Tastenkürzel**.

## Tab „Verbindung“

### Schritt 1: Software wählen

Wähle unter **Software** **OBS Studio**, **Streamlabs** oder **Meld Studio**. Dies kann nur geändert werden, solange keine Verbindung besteht.

Jede Software hat eigene Tastenkürzel und eine eigene Szenenliste; beim Wechsel der Software werden deren eigene Einstellungen angezeigt.

### Schritt 2: Software vorbereiten

#### OBS Studio

1. Öffne in OBS **Werkzeuge → WebSocket-Servereinstellungen**
2. Aktiviere **WebSocket-Server aktivieren**
3. Klicke auf **Verbindungsinformationen anzeigen**, um das Passwort zu sehen
4. Trage in Stream Toolkit **Host** (Standard `localhost`), **Port** (Standard `4455`) und **Passwort** ein

#### Streamlabs / Meld Studio

Keine Einrichtung nötig – das Programm muss nur laufen.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Schritt 3: Verbinden

Klicke auf **Verbinden**. **Status** wechselt zu **Verbunden** (bei OBS und Meld wird zusätzlich die Versionsnummer angezeigt). Klicke auf **Trennen**, um die Verbindung zu beenden.

**Beim Start verbinden** (standardmäßig ein): verbindet automatisch, wenn Stream Toolkit startet und wenn du den Funktionsschalter einschaltest. Das Ausschalten des Funktionsschalters trennt die Verbindung.

### Szenen

Der Abschnitt **Szenen** listet deine Szenen und die Anzahl ihrer Quellen auf; die aktuelle Szene ist hervorgehoben. Klicke auf **Aktualisieren**, um nach Änderungen an Szenen in deiner Software die neueste Liste abzurufen.

Ohne Verbindung wird weiterhin die zuletzt abgerufene Liste angezeigt.

## Tab „Tastenkürzel“

Um ein Tastenkürzel festzulegen, klicke auf **Klicken, um Tastenkürzel festzulegen** und drücke dann die Tastenkombination. Drücke `Esc`, um abzubrechen. Wird die Kombination bereits von einer anderen Funktion verwendet, wird **Tastenkürzel-Konflikt** angezeigt und sie wird nicht gespeichert. Klicke auf **✕** neben einem Tastenkürzel, um es zu löschen.

### Szene wechseln

1. Klicke auf **Hinzufügen**
2. Lege ein Tastenkürzel fest
3. Wähle die Szene, zu der gewechselt werden soll

Klicke auf **✕** am Ende der Zeile, um sie zu löschen.

### Quellen umschalten

Ein Tastenkürzel kann mehrere Quellen derselben Szene gleichzeitig steuern.

1. Klicke auf **Hinzufügen**
2. Lege ein Tastenkürzel fest
3. Gib einen **Name** ein (optional – wird als Beschriftung der Schaltfläche im Schnellzugriff verwendet; ist er leer, wird der Szenenname verwendet)
4. Wähle die Szene, zu der die Quellen gehören
5. Klicke auf **Quelle hinzufügen**, wähle eine Quelle und wähle **Anzeigen**, **Ausblenden** oder **Umschalten** (Standard **Umschalten**)
6. Wiederhole Schritt 5 für weitere Quellen

Wird die Szene eines Eintrags geändert, wird seine Quellenliste geleert.

:::tip
Eine Szene oder Quelle, die in deiner Software nicht mehr existiert, wird rot markiert. Wähle sie in der Dropdown-Liste erneut aus.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Verwendung im Schnellzugriff

Ist die Funktion eingeschaltet und existiert mindestens ein Tastenkürzel-Eintrag, zeigt der [Schnellzugriff](./quick-tools) eine Karte **OBS-Szenensteuerung** mit einer Schaltfläche pro Eintrag. Ein Klick auf eine Schaltfläche bewirkt dasselbe wie das zugehörige Tastenkürzel.

## Fehlermeldungen

Beim Verwenden eines Tastenkürzels oder einer Schaltfläche können diese Meldungen erscheinen:

| Meldung | Bedeutung |
|---------|---------|
| **Nicht mit OBS verbunden** | Keine Verbindung – wechsle zum Tab **Verbindung** und klicke auf **Verbinden** |
| **Szene „…“ nicht gefunden** | Die Szene wurde in deiner Software umbenannt oder gelöscht |
| **Quellen nicht gefunden: …** | Diese Quellen existieren in der Szene nicht mehr |

## Einschränkungen der Testversion

:::info
Die Testversion erlaubt insgesamt **1** Tastenkürzel-Eintrag (Szene wechseln und Quellen umschalten zusammen). Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::

## Häufig gestellte Fragen (FAQ)

**Q: Es wurde gemeldet, dass OBS nicht erreichbar ist, und nach dem Öffnen von OBS wurde es nicht erneut versucht.**
Schlägt der allererste Verbindungsversuch fehl (zum Beispiel, weil OBS noch nicht lief), versucht Stream Toolkit es nicht dauerhaft erneut. Öffne deine Streaming-Software und klicke dann auf **Verbinden**. Sobald eine Verbindung einmal erfolgreich war, wird bei einem Verbindungsabbruch automatisch neu verbunden.
