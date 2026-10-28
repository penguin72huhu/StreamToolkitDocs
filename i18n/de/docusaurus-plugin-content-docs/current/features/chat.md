---
sidebar_position: 3
---

# Chat

**Chat** zeigt deinen Twitch- und YouTube-Chat gemeinsam in einem Overlay an, optional mit automatischer Übersetzung. Außerdem kann der Chat in einem transparenten Desktop-Fenster angezeigt werden, das nur du siehst.

## OBS-Quellen-URL

```
http://127.0.0.1:7272/chat
```

Füge sie als Browserquelle hinzu: [Quellen in OBS hinzufügen](../getting-started/obs-source). Dieses Overlay hat keinen Ton.

:::info
Nachrichten werden nur an das Overlay gesendet, solange der Schalter **Chat** in der Seitenleiste eingeschaltet ist. Auch wenn er aus ist, wird der Chat weiterhin empfangen, sodass Funktionen, die den Chat lesen (Umfragen, Verlosungen, Musikwünsche usw.), weiter funktionieren.
:::

## Bevor du loslegst

Verbinde die Plattformen, die angezeigt werden sollen:

- [Twitch Einstellungen](../platforms/twitch)
- [YouTube Einstellungen](../platforms/youtube-settings)

Die Einstellungsseite hat zwei Tabs: **Einstellungen** und **Aussehen**.

## Tab „Einstellungen“

### Plattform

- **Plattform-Icon anzeigen (Twitch / YouTube)** — zeigt das Symbol <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> vor jeder Nachricht an

Jede Plattform hat eine eigene Karte. Der Punkt neben dem Plattformnamen leuchtet grün, wenn die Plattform verbunden und aktiviert ist; **(Nicht verbunden)** wird angezeigt, wenn Twitch nicht verbunden ist, und **Keine Chat-URL verbunden**, wenn der YouTube-Chat nicht verknüpft ist.

| Option | Beschreibung |
|--------|-------------|
| **Chat aktivieren** | Zeigt die Nachrichten dieser Plattform an |
| **Avatar anzeigen** | Zeigt den Avatar des Zuschauers an |
| **Abzeichen anzeigen** (Twitch) / **Abzeichen anzeigen (Mitglieder-Icon)** (YouTube) | Zeigt Abzeichen an |
| **Zuschauernamen statt @Handles anzeigen** | Nur YouTube. Deaktiviert, bis du dich mit Google anmeldest |

Ist der YouTube-Chat aktiviert, aber nicht verknüpft, erscheinen auf seiner Karte zwei Schaltflächen:

- **Automatisch verbinden** — findet deine aktuelle Übertragung automatisch (erfordert die Google-Anmeldung)
- **Manuell eingeben** — führt dich zur Einstellungsseite, um die Chat-URL einzufügen

**Max. Nachrichtenanzahl**: wie viele Nachrichten auf dem Bildschirm behalten werden (5–200, Standard 50).

### Automatisch übersetzen

1. Aktiviere **Übersetzung aktivieren**
2. **Zielsprache**: die Sprache, in die Nachrichten übersetzt werden. Der Standard **Der Oberflächensprache folgen** verwendet die Oberflächensprache der App
3. **Nicht zu übersetzende Sprachen** (optional): Nachrichten in den aktivierten Sprachen bleiben unverändert. Portugiesisch PT-BR und PT-PT lassen sich nicht unterscheiden, daher werden beim Aktivieren einer der beiden beide übersprungen

Der **Übersetzungsdienst** ist **MyMemory**, das keinen API-Schlüssel benötigt.

- **E-Mail (optional)**: Ohne E-Mail beträgt das Tageskontingent 5.000 Zeichen; gib eine E-Mail-Adresse ein und klicke auf **Speichern**, um es auf 50.000 Zeichen zu erhöhen (kostenlos, keine Registrierung bei MyMemory nötig)
- Die Leiste darunter zeigt die ungefähr heute verbrauchte Menge. Sie wird täglich um 08:00 UTC zurückgesetzt

### Test

- **Testnachricht senden** — sendet eine zufällige Beispielnachricht an das Overlay
- **Löschen** — entfernt alle Nachrichten aus dem Overlay

Erscheint **Verbindung fehlgeschlagen — der Server läuft möglicherweise nicht**, antwortet der lokale Server von Stream Toolkit nicht.

### Desktop-Chatfenster

Zeigt den Chat in einem kleinen, transparenten, immer im Vordergrund liegenden Fenster über deinem Spiel an. Nur du siehst es – praktisch beim Streamen mit nur einem Monitor.

1. Klicke auf **Fenster öffnen** (oder klicke mit der rechten Maustaste auf das Symbol im Infobereich und wähle **Desktop-Chat öffnen**)
2. Solange es entsperrt ist, ziehst du an der oberen Leiste, um das Fenster zu verschieben, und an den Rändern, um die Größe zu ändern
3. Klicke auf **🔒 Sperren**, wenn es richtig sitzt. Klicks gehen dann durch das Fenster hindurch an dein Spiel. Zum Entsperren bewege die Maus über das Fenster und klicke auf das 🔓, das oben rechts erscheint, oder klicke auf der Einstellungsseite auf **🔓 Entsperren**

**Position zurücksetzen** setzt das Fenster an seine Standardposition zurück.

| Einstellung | Beschreibung |
|---------|-------------|
| **Stil** | **Nur Name + Nachricht** (Standard) oder **Wie der OBS-Chat** |
| **Schriftgröße** | 12–32 px, Standard 16. Nur bei **Nur Name + Nachricht** |
| **Text-Deckkraft** | 10–100%, Standard 100% |
| **Hintergrund-Deckkraft** | 0–100%, Standard 40% |
| **Nachrichten ausblenden** | 0–120 Sekunden, Standard 0. Jede Nachricht wird nach so vielen Sekunden ausgeblendet; ausgeblendete Nachrichten können nicht zurückgescrollt werden. Bei 0 wird nichts ausgeblendet, und du kannst im entsperrten Zustand zu früheren Nachrichten hochscrollen (bis zur Max. Nachrichtenanzahl) |
| **In der Stream-Aufnahme ausblenden** | Standardmäßig an. Die OBS-Bildschirmaufnahme erfasst das Fenster nicht, sodass Zuschauer den Chat nicht doppelt sehen. Es erscheint auch nicht in Screenshots oder bei der Bildschirmfreigabe in Discord |

:::tip
Wenn du dieses Fenster im Vollbildmodus des Spiels nicht siehst, stelle das Spiel auf „Rahmenloses Fenster“ oder „Fenstermodus“ um. Mit **Testnachricht senden** kannst du Position und Größe des Fensters prüfen.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Tab „Aussehen“

### Vorschau

Oben im Tab wird eine Live-Vorschau angezeigt. Die Farbauswahl neben **Vorschau** ändert nur den Hintergrund der Vorschau. Die Kontrollkästchen **Avatar**, **Abzeichen** und **Plattform-Icon** ändern nur, was die Vorschau anzeigt.

### Aussehen-Einstellungen

**Standard wiederherstellen** stellt das Standard-Aussehen wieder her (bzw. das Aussehen des angewendeten Themes, falls ein Theme angewendet ist).

- **Einblendrichtung**: **Von oben nach unten**, **Von unten nach oben** (Standard), **Von links nach rechts**, **Von rechts nach links**
- **Text** — separat einstellbar für **Nickname** und **Nachricht**:
  - Schriftart, Größe (px) und Farbe. Für den Nickname kannst du **Originalfarbe** (die Plattformfarbe des Zuschauers) oder **Eigene Farbe** wählen
  - **Umrandung**: Farbe, **Deckkraft**, **Stärke**
  - **Schatten**: Farbe, **Deckkraft**, **Weichzeichnen**, X- / Y-Versatz
- **Icon-Größe**: Skalierung für **Plattform-Icon**, **Avatar** und **Abzeichen** (0.1–5x)
- **Farbe**: **Hintergrundfarbe** jeder Nachricht

### Eigenes CSS

Klappe **Eigenes CSS** auf, um das CSS des Overlays direkt zu bearbeiten. Mit **Assets verwalten** lädst du Bilder hoch, auf die du im CSS verweisen kannst. **Standard wiederherstellen** stellt das Standard-CSS wieder her. Siehe auch [Themes](./themes).

:::tip
Setzt dein eigenes CSS eines der Aussehen-Felder mit `!important`, wird dieses Feld in den Aussehen-Einstellungen ausgegraut („Diese Einstellung wird per eigenem CSS gesteuert“). Ist ein Theme angewendet, ist das CSS schreibgeschützt – setze es vor dem Bearbeiten zurück.
:::

## Einschränkungen der Testversion

:::info
- Das Einschalten der automatischen Übersetzung fügt dem Chat-Overlay ein Wasserzeichen hinzu
- **Eigenes CSS** ist nur in der Vollversion verfügbar
- Das **Desktop-Chatfenster** ist nur in der Vollversion verfügbar

Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
