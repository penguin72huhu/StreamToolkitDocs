---
sidebar_position: 10
---

# Twitch-Zielleiste

Zeige im Stream Fortschrittsleisten für deine Twitch-Follower-, Abo- und Bits-Ziele. Jeder Zieltyp hat eine eigene Leiste, eigene Einstellungen und eine eigene OBS-URL.

:::note Bevor du loslegst
Die Zielleisten zählen Twitch-Ereignisse, verbinde also zuerst dein Twitch-Konto. Siehe [Twitch Einstellungen](../platforms/twitch).
:::

## Schritt 1: Zieltyp wählen und OBS-Quelle hinzufügen

Wähle oben auf der Seite einen Zieltyp: **Follow**, **Abo** oder **Bits**. Die **OBS-URL** unter den Schaltflächen ändert sich entsprechend. Klicke auf **Kopieren**, um sie zu kopieren.

| Zieltyp | OBS-Quellen-URL |
|-----------|----------------|
| **Follow** | `http://127.0.0.1:7272/goal/follow` |
| **Abo** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Füge jede Leiste, die du anzeigen möchtest, als separate Browserquelle in OBS hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source). Die Zielleisten geben keinen Ton aus, du musst „Audio über OBS steuern“ also nicht aktivieren.

:::tip
Schalte außerdem den Schalter neben **Twitch-Zielleiste** in der linken Seitenleiste ein (**OBS-Anzeige einschalten**). Solange er aus ist, sind die Leisten in OBS ausgeblendet.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Schritt 2: Ziel festlegen

Alle folgenden Einstellungen gelten für den oben gewählten Zieltyp.

- **Titel**: der auf der Leiste angezeigte Titeltext
- **Ziel**: die Zielzahl (ganze Zahlen, 0 oder mehr)
- **Fortschritt**: zeigt den aktuellen Stand, das Ziel und den Prozentsatz

### So wird der Fortschritt gezählt

| Zieltyp | Was zum Fortschritt beiträgt |
|-----------|----------------------|
| **Follow** | Jeder neue Follow zählt 1. Solange Twitch verbunden ist, wird der Stand außerdem alle 30 Sekunden mit der Gesamtzahl der Follower deines Kanals auf Twitch abgeglichen. Klicke auf **Synchronisieren**, um sofort abzugleichen |
| **Abo** | Neue Abos und verschenkte Abos (ein Geschenk mehrerer Abos zählt die Anzahl der verschenkten Abos). Erneute Abos zählen nur, wenn **Erneute Abos zählen** aktiviert ist |
| **Bits** | Jeder Cheer zählt die Anzahl der gecheerten Bits |

### Abo-Optionen

Nur bei **Abo** sichtbar:

- **Nach Tier gewichtet (T1=+1, T2=+2, T3=+6)**: Wenn aktiviert, zählen Abos höherer Tiers mehr zum Fortschritt. Wenn deaktiviert, zählt jedes Abo 1
- **Erneute Abos zählen**: Wenn aktiviert, zählen auch Resub-Nachrichten zum Fortschritt

### Fortschritt zurücksetzen

**Abo** und **Bits** haben eine Schaltfläche **Fortschritt zurücksetzen**. Klicke darauf und dann auf **Zurücksetzen bestätigen**, um den aktuellen Stand auf 0 zu setzen. Die Zielzahl bleibt erhalten.

**Follow** hat keine Zurücksetzen-Schaltfläche, da der Stand der Gesamtzahl deiner Twitch-Follower folgt.

## Schritt 3: Aussehen anpassen

### Vorschau

Die **Vorschau** oben zeigt die Leiste des gewählten Zieltyps. Mit dem Farbfeld daneben änderst du den Hintergrund der Vorschau. Aktiviere **Vorschau erreicht**, um zu sehen, wie die Leiste nach Erreichen des Ziels aussieht.

### Aussehen-Einstellungen

| Einstellung | Beschreibung |
|---------|-------------|
| **Hintergrundfarbe** | Hintergrund der Leiste |
| **Farbe der Fortschrittsleiste** | Farbe des gefüllten Teils |
| **Farbe bei Zielerreichung** | Füllfarbe, sobald das Ziel erreicht ist |
| **Titeltext** | Schriftart, Farbe und Größe (8–72 px) des Titels |
| **Zieltext** | Schriftart, Farbe und Größe (8–72 px) der Zahlen |
| **Prozent** | Schriftart, Farbe und Größe (8–72 px) des Prozentsatzes |

Klicke auf **Standard wiederherstellen**, um das Aussehen des gewählten Zieltyps zurückzusetzen.

### Eigenes CSS

Klicke auf **Eigenes CSS**, um den Editor aufzuklappen. Jeder Zieltyp hat sein eigenes CSS. Verwende es für Layout und Struktur. Farben, Schriftarten und Größen werden in den Aussehen-Einstellungen oben festgelegt.

- **Standard wiederherstellen**: stellt das Standard-CSS wieder her
- **Assets verwalten**: öffnet die Asset-Verwaltung für Bilder, die in deinem CSS verwendet werden

Überschreibt dein CSS eine Eigenschaft mit `!important`, wird das zugehörige Aussehen-Steuerelement gesperrt, da sich das CSS ohnehin durchsetzen würde.

:::info Einschränkungen der Testversion
- **Eigenes CSS** ist nur in der Vollversion verfügbar
- Das OBS-Overlay zeigt ein Wasserzeichen

Details findest du unter [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
