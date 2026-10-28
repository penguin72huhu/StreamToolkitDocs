---
sidebar_position: 8.2
---

# Zuschauer-Geburtstage

Trage die Geburtstage deiner Zuschauer in eine Liste ein. Chattet ein eingetragener Zuschauer an seinem Geburtstag oder kurz danach während deines Streams, erscheint im Stream eine Geburtstagsbenachrichtigung. Jeder Zuschauer erhält eine Benachrichtigung pro Geburtstag.

## OBS-Quellen-URL

```
http://127.0.0.1:7272/birthday-alert
```

Kopiere die URL oben auf der Einstellungsseite der **Zuschauer-Geburtstage** und füge sie in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source).

:::warning
Benachrichtigungen spielen einen Sound ab. Aktiviere in den Eigenschaften der Browserquelle **Audio über OBS steuern**, sonst ist der Sound im Stream nicht zu hören.
:::

Schalte den Schalter neben **Zuschauer-Geburtstage** in der linken Seitenleiste ein. Nur solange er eingeschaltet ist, verbindet sich die App mit dem Chat und prüft Geburtstage. Die Schaltflächen **Testbenachrichtigung** und **Wiederholen** funktionieren auch, wenn er aus ist.

Die Seite hat drei Tabs: **Einstellungen**, **Zuschauer** und **Aussehen**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## So funktioniert es

- Ein Zuschauer auf der Liste, der von seinem Geburtstag bis zur eingestellten Anzahl von Tagen danach chattet, erhält eine Benachrichtigung. Vor dem Geburtstag wird nichts angezeigt.
- Jeder Zuschauer erhält eine Benachrichtigung pro Geburtstag. Ein Geburtstag am 28.12., der am 2.1. angekündigt wird, zählt weiterhin als Geburtstag des Vorjahres.
- Benachrichtigungen werden nur ausgelöst, während die Plattform, auf der der Zuschauer gechattet hat, live ist. Bist du offline oder kann die App noch nicht feststellen, ob du live bist, löst Chatten die Benachrichtigung weder aus noch wird sie gespeichert; sie erscheint, wenn die Person das nächste Mal während eines Streams chattet.
- Der Chatverlauf, der beim Verbinden des YouTube-Chats geladen wird, zählt nicht. Ein Neustart der App kündigt also keine Personen an, die gechattet haben, während sie geschlossen war.
- Ein Geburtstag am 29.2. fällt in Nicht-Schaltjahren auf den 28.2.

## Tab „Einstellungen“

### Chat-Verbindung

Wird angezeigt, wenn die Funktion eingeschaltet ist. Jede Plattform zeigt, ob ihr Chat verbunden ist:

- **Twitch**: Ist kein Kanal festgelegt, zeigt die Zeile **Kein Twitch-Kanal festgelegt – verbinde zuerst Twitch** mit **Zu den Einstellungen**. Verbinde zuerst Twitch: [Twitch Einstellungen](../platforms/twitch).
- **YouTube**: Ist der Chat nicht verbunden, zeigt die Zeile **Automatisch verbinden** und **Manuell eingeben** (führt zum Chat-URL-Feld in den Einstellungen). Nutzt du die automatische Verbindung und bist mit Google angemeldet, wird **Falls nach dem Start des Streams keine Verbindung besteht, klicke auf der Chat-Seite auf Verbinden** angezeigt. Siehe [YouTube Einstellungen](../platforms/youtube-settings) und [Chat](./chat).

Sobald eine Plattform verbunden ist, wird außerdem **Live**, **Offline** oder **Live-Status unbekannt** angezeigt. Benachrichtigungen werden nur bei **Live** ausgelöst.

### Einstellungen

| Feld | Beschreibung |
|-------|-------------|
| **Wie viele Tage nach dem Geburtstag zählen** | 0–30. Standard: 7. 0 = nur am Geburtstag selbst. |
| **Anzeigedauer** | Wie lange jede Benachrichtigung auf dem Bildschirm bleibt, in Sekunden (1–60). Standard: 6. |

### Benachrichtigungen testen

Klicke auf **Testbenachrichtigung**, um eine Beispielbenachrichtigung mit einem Testzuschauer und dem heutigen Datum an OBS zu senden. Sie wird nur in OBS angezeigt und nie gespeichert und funktioniert auch, wenn der Schalter in der linken Seitenleiste aus ist. Die Schaltfläche wechselt kurz zu **Gesendet**.

## Tab „Zuschauer“

### Einen Zuschauer hinzufügen

Es gibt zwei Möglichkeiten, einen Zuschauer hinzuzufügen:

- **+ Aus letzten Chattern hinzufügen**: Wähle jemanden, der kürzlich gechattet hat. Das Formular öffnet sich mit seinem Namen als Notiz, seinem bereits verknüpften Konto und dem heutigen Datum als Geburtstag.
- **+ Per Name hinzufügen**: Gib den Kontonamen selbst ein.

**Letzte Chatter** listet Zuschauer auf, die bei verbundenem Chat gechattet haben (bis zu 200, 30 Tage lang gespeichert). Klicke auf **Aktualisieren**, um die Liste zu aktualisieren. Zuschauer, die bereits auf der Liste stehen, zeigen **Hinzugefügt** und können nicht erneut ausgewählt werden. Bei einer langen Liste erscheint ein Suchfeld.

Fülle das Formular aus:

1. **Notiz / Spitzname**: der Name, unter dem du die Person kennst, z. B. `Alex`. Optional.
2. **Geburtstag**: Monat und Tag (ohne Jahr).
3. **Konten**: mindestens ein Konto. Ein Zuschauer kann mehrere Konten haben, z. B. sowohl Twitch als auch YouTube.
   - **＋ Konto eintippen**: Wähle **Twitch** oder **YouTube** und gib den Namen ein. Für Twitch den Login- oder Anzeigenamen, für YouTube den @Handle oder Kanalnamen.
   - **＋ Aus den letzten Chattern**: Füge ein bereits verknüpftes Konto hinzu.
   - **✕** entfernt ein Konto.
4. Klicke auf **Speichern** (oder drücke Enter). **Abbrechen** (oder Esc) schließt das Formular.

### Eingetippte Namen und Verknüpfung

Ein eingetippter Name wird mit dem Konto verknüpft, sobald dieser Zuschauer zum ersten Mal chattet. Beim Abgleich werden Groß-/Kleinschreibung und ein vorangestelltes `@` ignoriert. Namen können doppelt vorkommen, daher ist die Auswahl aus den letzten Chattern sicherer.

Gib für YouTube den @Handle ein: Ist **Zuschauernamen statt @Handles anzeigen** auf der Chat-Seite nicht eingeschaltet, passt ein Kanalname womöglich nie.

Jedes Konto auf der Liste zeigt:

- **Verknüpft: [Name]**: Das Konto ist verknüpft.
- **Warte auf „[Name]“ im Chat**: ein eingetippter Name, der noch nicht verknüpft wurde.
- **Neu verknüpft**: Die App hat dieses Konto automatisch verknüpft, als der Zuschauer gechattet hat. Prüfe, ob es wirklich die Person ist, und klicke dann auf **✓ Stimmt so** oder, falls nicht, auf **Verknüpfung lösen**.
- **Dieses Konto gehört schon zu „[Name]“**: Der eingetippte Name passt zu einem Konto, das einem anderen Zuschauer auf der Liste gehört. Ein Konto kann nur zu einem Zuschauer gehören; ändere also hier den Namen oder lösche einen der beiden.

**Verknüpfung lösen** öffnet ein Feld unter dem Konto. Nach dem Lösen wird stattdessen der Name in diesem Feld abgeglichen (du kannst ihn ändern), und das Konto wird neu verknüpft, sobald dieser Zuschauer wieder chattet.

### Die Liste

Zuschauer, deren Geburtstagsbenachrichtigung fällig ist, stehen oben, danach die nächsten anstehenden Geburtstage. Bei mehr als 5 Zuschauern erscheint ein Suchfeld. Jeder Zuschauer zeigt:

- **Wartet auf Chat**: Die Person hat gerade Geburtstag; die Benachrichtigung erscheint, sobald sie chattet.
- **🎂 Angezeigt am [Datum]**: Die Benachrichtigung für diesen Geburtstag wurde bereits angezeigt.
- **▶ Wiederholen**: zeigt die Benachrichtigung dieses Zuschauers erneut in OBS an. Funktioniert jederzeit und wird nie gespeichert.
- **Bearbeiten**: ändert Notiz, Geburtstag oder Konten. Wird der Geburtstag geändert, kann die Benachrichtigung für das neue Datum erneut ausgelöst werden.
- **Entfernen**: Klicke auf **Entfernen** und dann auf **Löschen bestätigen**.

## Tab „Aussehen“

### Vorschau

Die Vorschau verwendet dieselbe Seite wie die OBS-Quelle. Mit der Farbauswahl neben **Vorschau** änderst du den Hintergrund der Vorschau; klicke auf **▶ Animation wiederholen**, um die Benachrichtigungsanimation erneut abzuspielen.

### Einheitlicher Stil / Pro Plattform separat

- **Einheitlicher Stil**: Twitch und YouTube verwenden denselben Benachrichtigungsstil.
- **Pro Plattform separat**: Jede Plattform hat ihren eigenen Stil. Wähle **Twitch** oder **YouTube** mit den Schaltflächen darunter und bearbeite ihre Einstellungen. Beim ersten Wechsel übernehmen Plattformen, die du noch nicht angepasst hast, den aktuellen einheitlichen Stil, jeweils mit eigener Farbe der Countdown-Leiste.

**Standard wiederherstellen** stellt den Standardstil für den gerade bearbeiteten Stil wieder her.

### Bild

- **Bild auswählen**: Wähle ein Bild aus der Asset-Verwaltung. Ohne Bild wird ein Kuchen-Emoji angezeigt. **Löschen** entfernt das Bild.
- **Bildgröße**: 1–400 px.
- **Bildposition**: **Links**, **Rechts**, **Oben** oder **Unten**.

### Sound

Wähle einen integrierten Sound: **Keiner**, **Glockenspiel** (Standard), **Münze**, **Glocke**, **Pop**, **Fanfare**. Klicke auf **▶**, um ihn anzuhören. Klicke auf **Sound auswählen**, um eine eigene Sounddatei aus der Asset-Verwaltung zu verwenden.

### Eigener Text

Schreibe die Zeile, die in der Benachrichtigung angezeigt wird. Lass das Feld leer, um den Standardtext zu verwenden: `Alles Gute zum Geburtstag, {name}!` Du kannst Folgendes verwenden:

| Platzhalter | Wird ersetzt durch |
|-------------|---------------|
| `{name}` | Den Namen des Zuschauers im Chat |
| `{label}` | Deine Notiz / deinen Spitznamen (den Chatnamen, wenn die Notiz leer ist) |
| `{birthday}` | Den Geburtstag, z. B. `10/20` |
| `{MM}` `{DD}` | Monat und Tag zweistellig, um ein eigenes Format zu bauen, z. B. `{DD}/{MM}` |
| `{date}` | Den Geburtstag in der Overlay-Sprache |
| `{platform}` | Den Plattformnamen |

### Text und Farbe

- **Text**: Lege Schriftart, Größe und Farbe für **Eigener Text** und **Zuschauername** fest.
- **Farbe**: **Hintergrund**, **Schatten** und **Countdown-Leiste**.

### Eigenes CSS

Klappe **Eigenes CSS** auf, um das CSS des gerade bearbeiteten Stils (einheitlich oder der ausgewählten Plattform) zu bearbeiten. **Standard wiederherstellen** stellt das Vorlagen-CSS wieder her, und **Assets verwalten** öffnet die Asset-Verwaltung. Hier können auch Steam-Workshop-Themes angewendet werden. Solange ein Theme angewendet ist, ist das CSS schreibgeschützt. Siehe [Themes](./themes).

:::info Testversion
- Bis zu 3 Zuschauer auf der Liste. Enthält die Liste mehr (z. B. aus einem Speicherstand der Vollversion), werden die zusätzlichen Zuschauer gesperrt 🔒 angezeigt: Sie lösen nie eine Benachrichtigung aus und können weder bearbeitet noch wiederholt werden.
- Eigenes CSS ist nur in der Vollversion verfügbar.
- Die Benachrichtigung zeigt in OBS ein Wasserzeichen.

Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::

## Häufig gestellte Fragen (FAQ)

**Q: Kein Ton im Stream?**
Prüfe, ob **Audio über OBS steuern** in den Eigenschaften der Browserquelle aktiviert ist und die Quelle im OBS-Audio-Mixer nicht stummgeschaltet ist. Prüfe außerdem, ob **Sound** nicht auf **Keiner** steht.

**Q: Ein Zuschauer hat an seinem Geburtstag gechattet, aber es erschien keine Benachrichtigung.**
Prüfe, ob der Schalter in der linken Seitenleiste eingeschaltet ist, ob die **Chat-Verbindung** im Tab **Einstellungen** für diese Plattform **Live** anzeigt und ob das Konto auf der Liste **Verknüpft** anzeigt oder der eingetippte Name zu seinem Chatnamen passt. Wurde die Benachrichtigung angezeigt, während OBS nicht geöffnet war, verwende **▶ Wiederholen**.

**Q: Ich habe die OBS-Quelle erst später hinzugefügt. Werden frühere Benachrichtigungen erneut abgespielt?**
Nein. Eine neu geöffnete Quelle zeigt nur Benachrichtigungen, die nach ihrer Verbindung eintreffen. Verwende **▶ Wiederholen** im Tab **Zuschauer**, um eine erneut anzuzeigen.
