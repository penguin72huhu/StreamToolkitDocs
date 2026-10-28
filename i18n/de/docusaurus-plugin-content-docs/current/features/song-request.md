---
sidebar_position: 17
---

# Musikwünsche

Zuschauer wünschen sich YouTube-Songs per Chat-Befehl, und die Songs werden nacheinander in OBS abgespielt. Du kannst auch selbst Songs hinzufügen und eine Standard-Playlist festlegen, die läuft, wenn keine Wünsche vorliegen.

## OBS-Quellen-URL

```
http://127.0.0.1:7272/song-request
```

Klicke oben auf der Seite neben **OBS-Quellen-URL** auf **Kopieren** und füge die URL dann in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source).

:::warning
Musikwünsche geben Ton aus. Aktiviere in den Eigenschaften der Browserquelle **Audio über OBS steuern**, sonst kommt die Musik nicht in deinem Stream an.
:::

:::tip
Schalte außerdem den Schalter neben **Musikwünsche** im linken Menü ein. Chat-Befehle werden nur verarbeitet, solange der Schalter eingeschaltet ist.
:::

Die Seite hat zwei Tabs: **Einstellungen** und **Playlist**.

## Tab „Einstellungen“

### Plattform

Jede Plattform hat eine eigene Karte:

- **Songwünsche für diese Plattform zulassen**: Zuschauer in diesem Chat können sich Songs wünschen
- **Chatbot-Antworten aktivieren** (nur Twitch, standardmäßig ein): antwortet im Twitch-Chat mit dem Ergebnis jedes Befehls, über dein verbundenes Twitch-Konto. Wird nur angezeigt, wenn Twitch aktiviert und verbunden ist

Eine nicht verbundene Plattform zeigt **(Nicht verbunden)** (Twitch) bzw. **Keine Chat-URL verbunden** (YouTube). Verbinde sie zuerst:

- [Twitch Einstellungen](../platforms/twitch)
- [YouTube Einstellungen](../platforms/youtube-settings)

### Chat-Befehle

| Feld | Standard |
|------|--------|
| **Befehlspräfix** | `!` (Auswahl aus `! @ # $ % & ~`) |
| **Songwunsch-Befehl** | `sr` |
| **Songwunsch entfernen** | `remove` |
| **Songwunschliste ansehen** | `queue` |
| **Aktuellen Song abfragen** | `song` |
| **Songwunsch-Abklingzeit** | 3000 ms |

Die Abklingzeit gilt pro Zuschauer: Nach einem erfolgreichen Wunsch muss derselbe Zuschauer so lange warten, bevor er sich erneut etwas wünschen kann.

### Einstellungen

- **Video im Bild anzeigen** (standardmäßig ein): Wenn aus, ist das Video in OBS ausgeblendet, der Ton wird aber weiter abgespielt
- **Listenlimit** (1–100, Standard 20): die maximale Anzahl gewünschter Songs in der Liste. Songs der Standard-Playlist zählen nicht mit
- **Songwunsch-Benachrichtigung anzeigen** (standardmäßig ein): zeigt in OBS eine Benachrichtigungskarte, wenn ein Zuschauer einen Song wünscht, entfernt oder der Wunsch fehlschlägt. Wenn aktiviert, kannst du festlegen:
  - **X** / **Y**: Position der Benachrichtigung ab der oberen linken Ecke (px, Standard 16 / 16)
  - **Benachrichtigungsskalierung**: Größenfaktor (Standard 1.0)
  - **Benachrichtigungsaussehen testen**: sendet eine Testbenachrichtigung an OBS

Jede Benachrichtigung bleibt 5 Sekunden sichtbar; bis zu 3 werden gleichzeitig angezeigt.

{/* TODO: 截圖 — 點歌設定分頁 */}

## So nutzen es Zuschauer

Mit den Standardeinstellungen:

| Befehl | Funktion |
|------|------|
| `!sr <YouTube link>` | Wünscht sich dieses Video |
| `!sr <search words>` | Sucht auf YouTube und wünscht sich das erste Ergebnis |
| `!remove` | Entfernt den letzten Wunsch des Zuschauers (nicht den gerade laufenden Song) |
| `!queue` | Antwortet mit den nächsten 3 gewünschten Songs |
| `!song` | Antwortet mit dem gerade laufenden Song |

- Akzeptierte Links: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…` oder eine 11-stellige Video-ID
- Playlist-Links werden nicht akzeptiert
- Ein Wunsch schlägt fehl, wenn die Liste das **Listenlimit** erreicht hat
- Neue Wünsche werden hinter den Wünschen anderer Zuschauer eingereiht, aber vor den Songs der Standard-Playlist
- `!queue` und `!song` funktionieren nur im Twitch-Chat bei aktivierten **Chatbot-Antworten aktivieren**

## Tab „Playlist“

### Wiedergabesteuerung

Die oberste Zeile zeigt, wer den aktuellen Song gewünscht hat, und seinen Titel. Schaltflächen:

- **Abspielen** / **Pause**: Läuft nichts, startet die Wiedergabe mit dem ersten Song der Liste
- **Stopp**: stoppt die Wiedergabe
- **Nächster**: springt zum nächsten Song

Während ein Song läuft, erscheint eine Fortschrittsleiste; ziehe daran, um zu einer Position zu springen. Endet ein Song, startet der nächste automatisch.

:::note
Beim Start der App wird nichts automatisch abgespielt. Drücke **Abspielen**, um zu beginnen.
:::

### Standard-Playlist

Füge eine YouTube-Playlist-URL ein und wähle **In Schleife abspielen** oder **Zufällig abspielen**. Ist die Liste leer, wird automatisch ein Song aus dieser Playlist hinzugefügt und abgespielt. Diese Songs werden in der Liste als **Standardliste** angezeigt.

Die Standard-Playlist wird über dein YouTube-Konto gelesen, daher musst du dich zuerst in den [YouTube Einstellungen](../platforms/youtube-settings) mit Google anmelden.

### Song manuell hinzufügen

Füge eine YouTube-Video-URL ein und klicke auf **Zur Liste hinzufügen** (oder drücke Enter). Manuelle Wünsche unterstützen keine Suchbegriffe.

### Liste

**Liste (n)** zeigt alle Songs: Plattform, Wünschender, Titel und Video-ID (anklicken, um sie auf YouTube zu öffnen). Klicke auf **Entfernen**, um einen Song zu entfernen; wird der laufende Song gelöscht, wird zum nächsten gesprungen. **Leeren** leert die gesamte Liste.

{/* TODO: 截圖 — 播放清單分頁 */}

## Häufig gestellte Fragen (FAQ)

**Q: Zuschauer geben den Befehl ein, aber nichts passiert?**
Prüfe Folgendes:
- Der Schalter **Musikwünsche** im linken Menü ist eingeschaltet
- **Songwünsche für diese Plattform zulassen** ist für diese Plattform aktiviert
- Für Twitch: Der Twitch-Chat wird von der Funktion [Chat](./chat) gelesen. Hast du Twitch auf der Chat-Seite ausgeschaltet (und der [Chat-Bot](./chat-bot) nutzt Twitch nicht), werden Twitch-Befehle nicht empfangen

**Q: Die Standard-Playlist wird nicht abgespielt?**
Stelle sicher, dass du in den Einstellungen mit Google angemeldet bist und die URL ein Playlist-Link ist (sie enthält `list=`).

:::info Einschränkungen der Testversion
- Songwünsche von Zuschauern über den Chat sind nur in der Vollversion verfügbar. In der Testversion schlägt ein Wunsch aus dem Chat mit der Meldung „In der Testversion sind Song-Wünsche nicht verfügbar“ fehl. **Song manuell hinzufügen** und die Standard-Playlist funktionieren weiterhin
- Das OBS-Overlay zeigt ein Wasserzeichen

Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
