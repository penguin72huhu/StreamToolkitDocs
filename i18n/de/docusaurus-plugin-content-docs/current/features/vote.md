---
sidebar_position: 15
---

# Live-Umfragen

Führe im Stream eine Umfrage durch. Zuschauer stimmen ab, indem sie eine Optionsnummer in den Twitch- oder YouTube-Chat schreiben, und die Ergebnisse werden live im OBS-Overlay aktualisiert.

## OBS-Quellen-URL

```
http://127.0.0.1:7272/vote
```

Klicke oben auf der Seite neben **OBS-Quellen-URL** auf **Kopieren** und füge die URL dann in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source). Live-Umfragen geben keinen Ton aus, du musst „Audio über OBS steuern“ also nicht aktivieren.

:::tip
Schalte außerdem den Schalter neben **Live-Umfragen** in der linken Seitenleiste ein (**OBS-Anzeige einschalten**). Solange er aus ist, bleibt das Overlay ausgeblendet.
:::

Die Seite hat drei Tabs: **Einstellungen**, **Aussehen** und **Verlauf**.

## Eine Umfrage starten (Tab „Einstellungen“)

### Abstimmungsplattform

Klicke auf **Twitch** oder **YouTube**, um festzulegen, aus welchem Chat abgestimmt werden kann. Du kannst beide wählen. Eine nicht verbundene Plattform zeigt **(Nicht verbunden)** bei Twitch bzw. **Keine Chat-URL verbunden** bei YouTube. Verbinde sie zuerst:

- [Twitch Einstellungen](../platforms/twitch)
- [YouTube Einstellungen](../platforms/youtube-settings)

### Abstimmungstitel

Optional. Zum Beispiel: „Welches Spiel heute Abend?“

### Abstimmungsoptionen (2–10)

- Gib mindestens 2 Optionen ein. Es sind bis zu 10 möglich
- **+ Option hinzufügen** fügt eine Zeile hinzu, **×** löscht eine
- Mit **Verlauf anwenden** kannst du eine deiner 15 letzten Umfragen auswählen und deren Titel und Optionen übernehmen

Während du bearbeitest, zeigt das OBS-Overlay eine Vorschau von Titel und Optionen.

### Abstimmungsdauer

Die Dauer der Umfrage in Sekunden. Standard ist 60, das Minimum 10.

### Starten / Stoppen

- **Abstimmung starten**: erfordert mindestens 2 ausgefüllte Optionen und mindestens eine ausgewählte, verbundene Plattform
- **Abstimmung stoppen**: beendet die Umfrage vorzeitig. Andernfalls endet sie, wenn die Zeit abläuft

Während eine Umfrage läuft, kannst du Plattformen, Titel, Optionen und Dauer nicht ändern.

{/* TODO: 截圖 — 投票設定分頁 */}

## Wie Zuschauer abstimmen

Während die Umfrage läuft, zeigt das Overlay „Gib die Optionsnummer im Chat ein, um abzustimmen (z. B.: 1)“.

- Die gesamte Nachricht muss die Optionsnummer sein, z. B. `1` oder `1.`. Leerzeichen werden ignoriert. Eine Nachricht mit anderem Text zählt nicht
- Jeder Zuschauer hat eine Stimme. Sendet er eine andere Nummer, wechselt seine Stimme zur neuen Option; es zählt die letzte Stimme vor Ablauf der Zeit

## Live-Ergebnis

Während der Umfrage erscheint unter den Einstellungen **Live-Ergebnis** mit der verbleibenden Zeit, Stimmenzahl und Prozentsatz jeder Option sowie der Gesamtzahl der Stimmen. Nach dem Ende der Umfrage wechselt es zu **Endergebnis**. Klicke auf **Details**, um zu sehen, wer für welche Option gestimmt hat, gruppiert nach Twitch und YouTube.

## Aussehen

Der Tab **Aussehen** hat oben eine **Vorschau**. Die Farbauswahl daneben ändert nur den Hintergrund der Vorschau, nicht das OBS-Overlay.

- **Schrift**: Lege Schriftart, Farbe und **Größe** (px) für **Titel**, **Hinweis**, **Option**, **Countdown-Sekunden** und **Stimmenzahl** fest
- **Farbe der Fortschrittsleiste**: bis zu 5 Farben, die der Reihe nach für die Optionsbalken verwendet werden. Jede kann **Einfarbig** oder **Farbverlauf** sein. Farbverläufe haben zusätzlich einen **Winkel**
- **Hintergrundfarbe**: der Hintergrund der Umfragekarte
- **Standard wiederherstellen**: stellt das Standard-Aussehen wieder her. Ist ein Theme angewendet, wird das Aussehen des Themes wiederhergestellt

Unter **Eigenes CSS** kannst du eigene Stile schreiben. Zum Teilen oder Herunterladen von Designs siehe [Themes](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Verlauf

Der Tab **Verlauf** listet Titel, Uhrzeit, Anzahl der Optionen und Gesamtstimmen jeder Umfrage. Klappe eine Umfrage auf, um ihre Ergebnisse, die Stimmenzahl pro Plattform und **Details** zu sehen. Nur der Umfrageverlauf der letzten 30 Tage wird gespeichert. Um einen Eintrag zu löschen, klicke auf 🗑 und dann auf **Löschen bestätigen**.

:::info Einschränkungen der Testversion
- **Eigenes CSS** ist nur in der Vollversion verfügbar
- Das OBS-Overlay zeigt ein Wasserzeichen

Details findest du unter [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
