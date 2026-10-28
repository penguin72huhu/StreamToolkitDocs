---
sidebar_position: 8.1
---

# Benachrichtigungen für neue Follower

Blendet im Stream eine Benachrichtigung ein, wenn dir jemand auf Twitch folgt oder deinen YouTube-Kanal abonniert.

## OBS-Quellen-URL

```
http://127.0.0.1:7272/fan-alert
```

Kopiere die URL oben auf der Einstellungsseite der **Benachrichtigungen für neue Follower** und füge sie in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source).

:::warning
Benachrichtigungen spielen einen Sound ab. Aktiviere in den Eigenschaften der Browserquelle **Audio über OBS steuern**, sonst ist der Sound im Stream nicht zu hören.
:::

Mit dem Schalter neben **Benachrichtigungen für neue Follower** in der linken Seitenleiste schaltest du Benachrichtigungen ein oder aus. Solange er aus ist, werden neue Follower weder angezeigt noch erfasst, und auch die Test-Schaltflächen funktionieren nicht.

Kommen mehrere Follower kurz nacheinander hinzu, werden die Benachrichtigungen in eine Warteschlange gestellt und nacheinander angezeigt. Dieses Overlay hat eine eigene Warteschlange und wartet daher nie hinter den [Spendenbenachrichtigungen](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Tab „Einstellungen“

### Plattform anbinden

Aktiviere die Plattformen, die eine Benachrichtigung auslösen sollen: **Twitch** und **YouTube** (beide standardmäßig aktiviert). Ein grüner Punkt bedeutet, dass die Plattform verbunden ist; andernfalls zeigt die Zeile **Nicht autorisiert**.

- **Twitch**: Jeder neue Follow löst sofort eine Benachrichtigung aus. Verbinde zuerst Twitch: [Twitch Einstellungen](../platforms/twitch).
- **YouTube**: neue Abonnenten. Melde dich zuerst mit Google an: [YouTube Einstellungen](../platforms/youtube-settings).

So werden YouTube-Abonnenten ermittelt:

- YouTube hat kein Live-Ereignis für „neuer Abonnent“, daher fragt die App alle 1,5 Minuten deine neuesten Abonnenten bei YouTube ab.
- Es wird nur geprüft, während du live bist und dein YouTube-Livechat mit dieser Liveübertragung verbunden ist. Im Warteraum oder nach Ende des Streams wird nicht geprüft.
- Wer vor Streambeginn abonniert hat (mehr als etwa 5 Minuten vor Beginn der Prüfung), wird nicht angekündigt.
- Wie der Hinweis auf der Seite sagt: **YouTube meldet nur Zuschauer mit öffentlichen Abos, mit Minuten bis Stunden Verzögerung.**

### Einstellungen

| Feld | Beschreibung |
|-------|-------------|
| **Anzeigedauer** | Wie lange jede Benachrichtigung auf dem Bildschirm bleibt, in Sekunden (1–60). Standard: 5. |
| **Denselben Zuschauer höchstens einmal in 24 Stunden** | Standardmäßig aus. Wenn aktiviert, wird derselbe Zuschauer, der innerhalb von 24 Stunden erneut folgt (zum Beispiel nach Entfolgen und erneutem Folgen), weder angezeigt noch erfasst. |

### Benachrichtigungen testen

Klicke auf **Testbenachrichtigung (Twitch)** oder **Testbenachrichtigung (YouTube)**, um eine Beispielbenachrichtigung an OBS zu senden. Testbenachrichtigungen werden nicht in den Verlauf aufgenommen.

Sind die Benachrichtigungen für neue Follower ausgeschaltet, wird der Test nicht abgespielt und die Seite zeigt **Aktiviere zuerst „Benachrichtigungen für neue Follower“ in den Schnellschaltern**.

## Tab „Aussehen“

### Vorschau

Die Vorschau verwendet dieselbe Seite wie die OBS-Quelle. Mit der Farbauswahl neben **Vorschau** änderst du den Hintergrund der Vorschau; klicke auf **▶ Animation wiederholen**, um die Benachrichtigungsanimation erneut abzuspielen.

### Einheitlicher Stil / Pro Plattform separat

- **Einheitlicher Stil**: Twitch und YouTube verwenden denselben Benachrichtigungsstil.
- **Pro Plattform separat**: Jede Plattform hat ihren eigenen Stil. Wähle **Twitch** oder **YouTube** mit den Schaltflächen darunter und bearbeite ihre Einstellungen. Beim ersten Wechsel übernehmen Plattformen, die du noch nicht angepasst hast, den aktuellen einheitlichen Stil, jeweils mit eigener Farbe der Countdown-Leiste.

**Standard wiederherstellen** stellt den Standardstil für den gerade bearbeiteten Stil wieder her.

### Bild

- **Bild auswählen**: Wähle ein Bild aus der Asset-Verwaltung. Ohne Bild wird ein Herz-Emoji angezeigt. **Löschen** entfernt das Bild.
- **Bildgröße**: 1–400 px.
- **Bildposition**: **Links**, **Rechts**, **Oben** oder **Unten**.

### Sound

Wähle einen integrierten Sound: **Keiner**, **Glockenspiel** (Standard), **Münze**, **Glocke**, **Pop**, **Fanfare**. Klicke auf **▶**, um ihn anzuhören. Klicke auf **Sound auswählen**, um eine eigene Sounddatei aus der Asset-Verwaltung zu verwenden.

### Eigener Text

Schreibe die Zeile, die in der Benachrichtigung angezeigt wird. Verwende `{name}` für den Namen des Followers und `{platform}` für den Plattformnamen. Lass das Feld leer, um den Standardtext zu verwenden: `Willkommen, {name}! Danke fürs Folgen`

### Text und Farbe

- **Text**: Lege Schriftart, Größe und Farbe für **Eigener Text** und **Name des Followers** fest.
- **Farbe**: **Hintergrund**, **Schatten** und **Countdown-Leiste**.

### Eigenes CSS

Klappe **Eigenes CSS** auf, um das CSS des gerade bearbeiteten Stils (einheitlich oder der ausgewählten Plattform) zu bearbeiten. **Standard wiederherstellen** stellt das Vorlagen-CSS wieder her, und **Assets verwalten** öffnet die Asset-Verwaltung. Hier können auch Steam-Workshop-Themes angewendet werden. Solange ein Theme angewendet ist, ist das CSS schreibgeschützt. Siehe [Themes](./themes).

## Tab „Verlauf“

Listet die letzten neuen Follower beider Plattformen auf, die neuesten zuerst: Plattform, Name und Uhrzeit. Der Verlauf wird nur in der App angezeigt, nie im Overlay.

- Bis zu 100 Follower werden gespeichert, Einträge älter als 30 Tage werden automatisch entfernt.
- Klicke auf **Leeren**, um die Liste zu leeren.

:::info Testversion
Eigenes CSS ist nur in der Vollversion verfügbar, und die Benachrichtigung zeigt in OBS ein Wasserzeichen. Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::

## Häufig gestellte Fragen (FAQ)

**Q: Kein Ton im Stream?**
Prüfe, ob **Audio über OBS steuern** in den Eigenschaften der Browserquelle aktiviert ist und die Quelle im OBS-Audio-Mixer nicht stummgeschaltet ist. Prüfe außerdem, ob **Sound** nicht auf **Keiner** steht.

**Q: Ein YouTube-Abonnent hat keine Benachrichtigung bekommen.**
Nur öffentliche Abos werden gemeldet, und YouTube kann Minuten bis Stunden dafür brauchen. Außerdem prüft die App nur, während du mit verbundenem YouTube-Livechat live bist.

**Q: Ich habe die OBS-Quelle erst später hinzugefügt. Werden frühere Benachrichtigungen erneut abgespielt?**
Nein. Eine neu geöffnete Quelle zeigt nur Benachrichtigungen, die nach ihrer Verbindung eintreffen. Frühere Follower findest du weiterhin im Tab **Verlauf**.
