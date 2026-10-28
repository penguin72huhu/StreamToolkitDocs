---
sidebar_position: 14
---

# Glücksrad

Erstelle eigene Glücksräder und drehe sie im Stream. Du kannst die Gewichtung jeder Option, die Farben des Rads und das Entfernen gezogener Optionen festlegen.

Die Seite hat drei Tabs: **Einstellungen**, **Glücksrad erstellen** und **Verlauf**. Erstelle zuerst ein Glücksrad und drehe es dann über **Einstellungen**.

## Schritt 1: Glücksrad erstellen

1. Öffne **Glücksrad** in der linken Seitenleiste und wechsle zum Tab **Glücksrad erstellen**
2. Klicke unter **Meine Glücksräder** auf **Hinzufügen**. Ein neues Glücksrad namens „Glücksrad 1“ (dann „Glücksrad 2“ usw.) erscheint
3. Klicke auf eine Glücksrad-Karte, um sie zu bearbeiten. Klicke auf das **✕** einer Karte, um dieses Glücksrad zu löschen

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Glücksrad-Titel

Gib einen Namen für das Glücksrad ein. Er wird in der Glücksrad-Liste, den Dropdown-Listen und im Verlauf verwendet.

### Glücksrad-Inhalt

1. Klicke auf **Inhalt bearbeiten**
2. Gib die Optionen ein, **eine pro Zeile**
3. Klicke auf **Bestätigen**

### Gewichtung

Sobald das Glücksrad Optionen hat, erhält jede ein Feld **Gewichtung** (Minimum 1, Standard 1). Die Segmentgröße einer Option und ihre Ziehungswahrscheinlichkeit richten sich beide nach ihrer Gewichtung. Eine Option mit Gewichtung 2 wird zum Beispiel doppelt so wahrscheinlich gezogen wie eine Option mit Gewichtung 1.

### Glücksrad-Themenfarbe

- **Minimal**: das integrierte Weiß-Grau-Schema
- **Eigen**: Erstelle dein eigenes Farbschema. Gib einen **Name** ein, wähle **Farben (3–5 Farben)** – mit **＋** fügst du eine Farbe hinzu, mit **✕** entfernst du eine – und klicke dann auf **Hinzufügen**

Um ein eigenes Theme zu ändern, klicke auf seine Schaltfläche **✎**. Zum Löschen klicke auf **✕**. Eigene Themes stehen auch als Farbschemata für die Glücksrad-Animation bei [Verlosungen](./lottery) zur Verfügung.

### Option nach Ziehung entfernen

Wenn aktiviert, wird eine gezogene Option vor der nächsten Drehung vom Glücksrad entfernt. Klicke auf **Zurücksetzen**, um alle Optionen wiederherzustellen.

## Schritt 2: Anzeigemodus wählen und OBS-Quelle hinzufügen

Wechsle zum Tab **Einstellungen** und wähle einen Anzeigemodus:

| Modus | Beschreibung | OBS-Quellen-URL |
|------|-------------|----------------|
| **Einzelnes Glücksrad** | OBS zeigt nur das ausgewählte Glücksrad. Wechsle das Glücksrad über die Dropdown-Liste **Aktuell verwendetes Glücksrad** | `http://127.0.0.1:7272/turntable` |
| **Mehrere Glücksräder** | OBS kann mehrere Glücksräder gleichzeitig anzeigen. Jedes Glücksrad hat eine eigene URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

Wähle im Modus **Mehrere Glücksräder** Glücksräder über **Zur Glücksrad-Anzeige hinzufügen** aus. Jedes hinzugefügte Glücksrad erhält eine eigene Karte mit seiner **OBS-Quellen-URL**. Klicke auf **Kopieren**, um sie zu kopieren. Klicke auf **✕** einer Karte, um dieses Glücksrad aus der Anzeige zu entfernen.

Füge die kopierte URL in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source). Das Glücksrad gibt keinen Ton aus, du musst „Audio über OBS steuern“ also nicht aktivieren.

:::tip
Schalte außerdem den Schalter neben **Glücksrad** in der linken Seitenleiste ein (**OBS-Anzeige einschalten**). Solange er aus ist, bleibt das Overlay ausgeblendet.
:::

## Schritt 3: Drehen

Auf jeder Glücksrad-Karte im Tab **Einstellungen**:

- **Starten**: startet die Drehung. Nach Ende der Animation zeigt das Overlay das Ergebnis. Die Schaltfläche kann nicht angeklickt werden, solange das Glücksrad keine Optionen hat oder sich noch dreht
- **Zurücksetzen**: stellt entfernte Optionen wieder her, setzt das Glücksrad zurück und leert die aktuelle **Gewinnerliste**

Die **Gewinnerliste** der Karte sammelt alle Ergebnisse seit dem letzten **Zurücksetzen**.

Du kannst **Starten** und **Zurücksetzen** auch im Fenster [Schnellzugriff](./quick-tools) verwenden.

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Verlauf

Der Tab **Verlauf** speichert einen Eintrag pro Runde, von der ersten Drehung bis zum nächsten **Zurücksetzen**. Er listet Uhrzeit, Glücksrad-Titel und Gewinner. Nur der Glücksrad-Verlauf der letzten 30 Tage wird gespeichert. Um einen Eintrag zu löschen, klicke auf 🗑 und dann auf **Löschen bestätigen**.

:::info Einschränkungen der Testversion
- Du kannst nur **1** Glücksrad erstellen
- Das OBS-Overlay zeigt ein Wasserzeichen

Details findest du unter [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
