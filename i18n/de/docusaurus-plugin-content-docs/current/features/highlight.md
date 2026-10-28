---
sidebar_position: 6
---

# Stream-Highlight-Markierung

Drücke während deines Streams ein Tastenkürzel, um festzuhalten, „wie weit im Stream“ ein Highlight passiert ist. Später kannst du anhand der Zeitliste die Highlights in deinem VOD beim Schneiden finden.

Markierungen werden in Stream Toolkit gespeichert. Diese Funktion hat kein OBS-Overlay, du musst also keine OBS-Quelle hinzufügen.

Die Seite hat zwei Tabs: **Einstellungen** und **Highlight-Verlauf**.

:::tip
Schalte den Schalter neben **Stream-Highlight-Markierung** in der linken Seitenleiste ein. Solange er aus ist, fügen weder das Tastenkürzel noch die Schaltfläche **MARK** eine Markierung hinzu.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Schritt 1: Quelle wählen

**Quelle** bestimmt, wie die Streamzeit ermittelt wird:

| Quelle | Wie die Zeit ermittelt wird | Voraussetzung |
|--------|----------------------------|-------------|
| **Twitch** | Zeit seit Beginn deines aktuellen Twitch-Streams | Twitch verbunden. Siehe [Twitch Einstellungen](../platforms/twitch) |
| **YouTube** | Zeit seit Beginn deines aktuellen YouTube-Livestreams | Google-Anmeldung. Siehe [YouTube Einstellungen](../platforms/youtube-settings) |
| **Manuelle Ausrichtung** (Standard) | Der Wert des manuellen Timers auf dieser Seite | Keine |

Ein Punkt neben **Twitch** und **YouTube** zeigt an, ob die Plattform verbunden ist. Falls nicht, zeigt die Option **(Nicht verbunden)** bzw. **(nicht mit Google angemeldet)**.

Markierst du, während du nicht live bist (oder bei **Manuelle Ausrichtung**, während der Timer gestoppt ist), wird die Zeit als **Kein Stream aktiv** erfasst. Bei der Quelle **Twitch** kann dieses Ergebnis etwa 20 Sekunden bis zur Anzeige brauchen, da Stream Toolkit es einige Male erneut versucht, falls Twitch einen gerade gestarteten Stream noch nicht registriert hat.

### Manueller Timer

Ist **Manuelle Ausrichtung** ausgewählt, erscheint ein **Manueller Timer**:

1. Gib die aktuelle Streamzeit als `HH:MM:SS` ein (zum Beispiel `00:00:00` genau beim Live-Gehen)
2. Klicke auf **Synchrone Zeitmessung starten**. Der Timer beginnt ab diesem Wert hochzuzählen
3. Jede Markierung verwendet den aktuellen Wert des Timers
4. Klicke auf **Stopp**, um den Timer anzuhalten

### Beim Markieren Twitch-Clip erstellen

Diese Option erscheint nur, wenn die Quelle **Twitch** ist. Wenn sie aktiviert ist, erstellt jede Markierung zusätzlich einen Twitch-Clip.

- Du musst live sein. Der Clip ist etwa 30 Sekunden lang
- Clips werden im Creator-Dashboard unter Inhalte → Clips gespeichert
- Nach dem Markieren zeigt die Seite **Twitch-Clip erstellt** oder den Grund für den Fehler: **Nicht live**, **Fehlende Berechtigung; Twitch neu verbinden**, **Twitch nicht verbunden** oder **Fehlgeschlagen; erneut versuchen**

## Schritt 2: Tastenkürzel festlegen

Das Standard-Tastenkürzel ist `Ctrl+Shift+M`. So änderst du es:

1. Klicke auf die Tastenkürzel-Schaltfläche
2. Drücke die gewünschte Tastenkombination und lass sie dann los. Drücke **Esc**, um abzubrechen
3. Zum Entfernen klicke auf **Löschen**

Wird die Kombination bereits von einer anderen Funktion verwendet, zeigt die Schaltfläche **Dieses Tastenkürzel wird bereits verwendet** und das Tastenkürzel wird nicht gespeichert. Das Tastenkürzel funktioniert auch, wenn Stream Toolkit nicht das aktive Fenster ist.

Du kannst auch auf die Schaltfläche **MARK** unter dem Tastenkürzel klicken. Sie bewirkt dasselbe wie das Tastenkürzel. Das Fenster [Schnellzugriff](./quick-tools) hat ebenfalls eine Schaltfläche **MARK**.

## Schritt 3: Während des Streams markieren

1. (Optional) Gib vor dem Markieren einen Namen in **Markierungsname** ein. Lässt du das Feld leer, werden Markierungen automatisch nummeriert (`精華標記_1`, `精華標記_2`, …)
2. Drücke das Tastenkürzel oder klicke auf **MARK**

Der eingegebene Name gilt nur für die nächste Markierung; danach wird das Feld geleert.

## Highlight-Verlauf

Der Tab **Highlight-Verlauf** listet alle Markierungen, die neueste zuerst. Jede Zeile zeigt die Streamzeit, den Namen, die Quelle sowie Datum und Uhrzeit der Markierung.

- **Kopieren**: kopiert die Markierung als Text im Format `[date] name 🎬 stream time (source)`
- **🗑️**: Klicke darauf und dann auf **Löschen bestätigen**, um die Markierung zu löschen
- **Twitch-Clip öffnen**: erscheint, wenn für diese Markierung ein Twitch-Clip erstellt wurde. Öffnet den Clip auf Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Einschränkungen der Testversion
**Beim Markieren Twitch-Clip erstellen** ist nicht verfügbar. Die Option wird als „In der Vollversion verfügbar“ angezeigt.

Details findest du unter [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
