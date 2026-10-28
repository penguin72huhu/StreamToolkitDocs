---
sidebar_position: 5
---

# Media Board

Zeige Bilder an, spiele Videos und Soundeffekte im Stream ab – per Klick oder Tastenkürzel.

Die Seite hat drei Tabs: **Bild**, **Video** und **Sound**. Jeder Tab hat eine eigene OBS-Quellen-URL.

| Tab | OBS-Quellen-URL | Audio über OBS steuern |
|-----|----------------|-----------------------|
| **Bild** | `http://127.0.0.1:7272/imageboard` | Nicht nötig |
| **Video** | `http://127.0.0.1:7272/videoboard` | Erforderlich |
| **Sound** | `http://127.0.0.1:7272/soundboard` | Erforderlich |

Klicke neben jeder URL auf **Kopieren** und füge sie in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source). Videos und Sounds werden in der OBS-Quelle abgespielt, nicht in Stream Toolkit. Du musst daher für diese beiden Quellen **Audio über OBS steuern** aktivieren, sonst hören die Zuschauer nichts.

:::tip
Schalte den Schalter neben **Media Board** in der linken Seitenleiste ein (**OBS-Anzeige einschalten**). Solange er aus ist, können keine Bilder angezeigt und keine Videos oder Sounds abgespielt werden – weder per Schaltfläche noch per Tastenkürzel.
:::

## Allgemeine Bedienung

Bilder, Videos und Sounds werden alle als Karten aufgelistet:

- Klicke auf eine Karte, um ihre Einstellungen auf- oder zuzuklappen
- Das Kontrollkästchen rechts auf einer Karte: Wenn aktiviert, erscheint das Element in den Starttools des [Schnellzugriffs](./quick-tools). Neue Elemente sind standardmäßig aktiviert
- **✕** löscht das Element
- Wurde eine lokale Datei verschoben oder gelöscht, zeigt die Karte **Datei nicht gefunden**

### Tastenkürzel

Jedes Element kann ein eigenes Tastenkürzel haben:

1. Klappe die Karte auf und klicke auf die Tastenkürzel-Schaltfläche
2. Drücke die gewünschte Tastenkombination und lass sie dann los. Drücke **Esc**, um abzubrechen
3. Zum Entfernen des Tastenkürzels klicke auf **Löschen**

Wird die Kombination bereits von einer anderen Funktion verwendet, wird sie nicht gespeichert und die Schaltfläche zeigt einen Konflikthinweis. Das Tastenkürzel funktioniert auch, wenn Stream Toolkit nicht das aktive Fenster ist. Alle Tastenkürzel sind außerdem auf der Seite [Tastenkürzel](./hotkeys) aufgelistet.

## Bild

{/* TODO: 截圖 — 圖片分頁 */}

### Bild hinzufügen

1. Klicke auf **Bild hinzufügen**
2. Wähle eine Datei (jpg, jpeg, png oder gif). Der Dateiname wird zum Bildnamen

Beim Aufklappen der Karte werden eine Miniatur und folgende Einstellungen angezeigt:

- **Name**: der Bildname
- **Dateipfad**: Klicke auf **Neu auswählen**, um eine andere Datei zu wählen
- **Tastenkürzel**: einmal drücken zeigt das Bild an, erneut drücken blendet es aus
- **Position und Größe festlegen**: siehe unten
- **Bild entfernen**: löscht das Bild

### Anzeigen und Ausblenden

Klicke auf die Schaltfläche **○** einer Karte, um das Bild in OBS anzuzeigen. Sie wird zu **◉**. Klicke erneut darauf, um das Bild auszublenden.

### Anzeigeeinstellungen

**Mehrere Bilder gleichzeitig anzeigen erlauben** ist standardmäßig aus. Solange es aus ist, blendet das Anzeigen eines Bildes das gerade angezeigte aus. Schalte es ein, um mehrere Bilder gleichzeitig anzuzeigen.

### Position und Größe festlegen

- **X-Position** / **Y-Position**: in px. 0/0 ist die Mitte der Quelle. Positive Werte verschieben nach rechts/unten, negative nach links/oben
- **Breite** / **Höhe**: in % der Originalgröße. 100 = Originalgröße. Die Schaltfläche 🔗 sperrt das Seitenverhältnis (standardmäßig an). Klicke darauf, um frei zu skalieren
- Während das Bild angezeigt wird, werden Änderungen live in OBS als Vorschau angezeigt
- **Speichern** übernimmt die Änderungen, **Zurücksetzen** kehrt zu den Werten beim Öffnen des Fensters zurück, **Abbrechen** schließt ohne Speichern

## Video

{/* TODO: 截圖 — 影片分頁 */}

Klicke auf **Video hinzufügen**, um eine Karte hinzuzufügen, und klappe sie dann auf:

- **Videoname**: der auf der Karte angezeigte Name
- **Quelle**: **YouTube** oder **Lokal**
  - **YouTube**: Füge den Videolink in **YouTube-URL** ein. Klicke auf **Auflösung testen**, um ihn zu prüfen. Bei Erfolg wird „Aufgelöst, wird beim Abspielen automatisch angewendet“ angezeigt
  - **Lokal**: Klicke auf **Datei auswählen**, um eine mp4-, webm- oder ogg-Datei zu wählen. Die Größenbegrenzung liegt bei 200MB; größere Dateien bedeuten mehr Verzögerung. Für einen transparenten Hintergrund verwende ein WebM-Video (VP9 Alpha)
- **In Schleife abspielen**: wiederholt das Video
- **Abspielzeit**: Lege **Von** und **Bis** fest (Stunden, Minuten, Sekunden, ms). Belasse **Bis** bei 00:00, um bis zum Ende abzuspielen
- **Lautstärke**: 0–100%
- **Tastenkürzel**: drücken spielt das Video ab. Erneut drücken, während das Video läuft, stoppt es
- **Position und Größe festlegen**: dieselben Positions- und Größenfelder wie bei Bildern. Klicke auf **Vorschau-Schleife**, um das Video während der Anpassung in OBS in Schleife abzuspielen, und auf **Vorschau stoppen**, um es zu beenden. Klicke abschließend auf **Speichern** oder **Abbrechen**

Klicke auf **▶** einer Karte, um das Video in OBS abzuspielen. Klicke auf **■**, um es zu stoppen.

## Sound

{/* TODO: 截圖 — 音效分頁 */}

Klicke auf **Sound hinzufügen**, um eine Karte hinzuzufügen, und klappe sie dann auf:

- **Soundname**: der auf der Karte angezeigte Name
- **Quelle**: **YouTube-URL** oder **Lokale Datei**
  - **YouTube-URL**: Füge den Link ein und klicke auf **Auflösung testen**, um ihn zu prüfen
  - **Lokale Datei**: Klicke auf **Datei auswählen**, um eine mp3-, wav-, ogg-, flac-, m4a-, aac- oder opus-Datei zu wählen
- **Abspielzeit**: Lege **Von** und **Bis** fest. Belasse **Bis** bei 00:00, um bis zum Ende abzuspielen
- **Lautstärke**: 0–100%
- **Tastenkürzel**: drücken spielt den Sound ab

Klicke auf **▶** einer Karte, um den Sound in OBS abzuspielen. Klicke auf **■**, um ihn zu stoppen. Es wird immer nur ein Sound gleichzeitig abgespielt. Das Starten eines anderen Sounds stoppt den aktuellen.

:::info Einschränkungen der Testversion
- Du kannst nur **1** Bild, **1** Video und **1** Sound hinzufügen
- Die Bild- und Video-Overlays zeigen ein Wasserzeichen

Details findest du unter [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::

## Häufig gestellte Fragen (FAQ)

**Q: Videos oder Sounds werden abgespielt, aber im Stream ist kein Ton zu hören.**
Stelle sicher, dass **Audio über OBS steuern** für die Quellen `/videoboard` und `/soundboard` aktiviert ist und die Quellen im OBS-Audio-Mixer nicht stummgeschaltet sind.

**Q: Ich kann meine Videodatei nicht auswählen.**
Nur mp4-, webm- und ogg-Dateien bis 200MB können ausgewählt werden. Ist eine Datei größer, zeigt eine Meldung die Begrenzung an und die Datei wird nicht hinzugefügt.
