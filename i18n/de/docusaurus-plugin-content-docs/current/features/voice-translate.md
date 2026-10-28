---
sidebar_position: 4
---

# Sprachübersetzung

Halte ein Tastenkürzel gedrückt und sprich. Stream Toolkit wandelt deine Sprache in Text um, übersetzt ihn und zeigt beide Zeilen als Untertitel in OBS an.

Die Spracherkennung läuft mit einem Whisper-Modell auf deinem eigenen Computer. Der Text wird anschließend mit MyMemory übersetzt.

Die Seite hat zwei Tabs: **Einstellungen** und **Aussehen**.

## Schritt 1: OBS-Quelle hinzufügen

Die OBS-Quellen-URL wird oben auf der Seite angezeigt:

```
http://127.0.0.1:7272/voice-translate
```

Klicke auf **Kopieren** und füge sie in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source). Die Sprachübersetzung gibt keinen Ton aus, du musst „Audio über OBS steuern“ also nicht aktivieren.

Die Untertitel erscheinen unten in der Quelle: oben der Originaltext, darunter die Übersetzung. Sie werden nach der **Anzeigedauer der Untertitel** ausgeblendet.

:::tip
Schalte den Schalter neben **Sprachübersetzung** in der linken Seitenleiste ein (**OBS-Anzeige einschalten**). Das Tastenkürzel funktioniert nur, solange er eingeschaltet ist.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Schritt 2: Tastenkürzel festlegen

Unter **Tastenkürzel (gedrückt halten zum Aufnehmen, loslassen zum Erkennen)**:

1. Klicke auf **Klicken, um Tastenkürzel festzulegen**
2. Drücke die gewünschte Tastenkombination und lass sie dann los. Drücke **Esc**, um abzubrechen
3. Zum Entfernen des Tastenkürzels klicke auf **Löschen**

Wird die Kombination bereits von einer anderen Funktion verwendet, zeigt die Schaltfläche **Tastenkürzel-Konflikt** und das Tastenkürzel wird nicht gespeichert.

Das Tastenkürzel funktioniert auch, wenn Stream Toolkit nicht das aktive Fenster ist. **Halte** es gedrückt, während du sprichst, und **lass es los**, um zu erkennen und zu übersetzen. Eine Aufnahme stoppt automatisch nach 15 Sekunden.

Du kannst auch die Schaltfläche **REC** unter dem Tastenkürzel mit der Maus gedrückt halten. Sie funktioniert genauso: drücken zum Aufnehmen, loslassen zum Übersetzen. Das Fenster [Schnellzugriff](./quick-tools) hat dieselbe Schaltfläche **REC**.

## Schritt 3: Erkennungseinstellungen

| Feld | Beschreibung |
|-------|-------------|
| **Modellstatus** | Zeigt **Lädt xx%**, **Bereit** oder **Laden des Modells fehlgeschlagen**. Du kannst aufnehmen, sobald **Bereit** angezeigt wird |
| **Whisper-Modell** | **Tiny (am schnellsten, ca. 40 MB)**, **Base (empfohlen, ca. 75 MB)** (Standard) oder **Small (am genauesten, ca. 245 MB)**. Das Modell wird bei der ersten Verwendung heruntergeladen. Ein Wechsel des Modells lädt es neu |
| **Sprechsprache** | Die Sprache, die du sprichst. Standard ist traditionelles Chinesisch |
| **Mikrofon** | Das Mikrofon für die Aufnahme. **Systemstandard** verwendet das Standard-Eingabegerät von Windows |

## Schritt 4: Übersetzungseinstellungen

| Feld | Beschreibung |
|-------|-------------|
| **Anzeigedauer der Untertitel** | Wie lange die Untertitel auf dem Bildschirm bleiben, 1–30 Sekunden. Standard ist 5 |
| **Zielsprache** | Die Sprache, in die übersetzt wird. Standard ist Englisch |
| **Whisper zur Übersetzung verwenden, wenn das Ziel English ist** | Ist die Zielsprache Englisch, übersetzt Whisper statt MyMemory. (Kostenlos und ohne Kontingent, aber mit höherer Verzögerung.) Bei anderen Zielsprachen hat dies keine Wirkung |
| **Übersetzungsdienst** | MyMemory |

### E-Mail (optional)

MyMemory ist kostenlos. Das Tageskontingent hängt davon ab, ob du eine E-Mail-Adresse angibst:

- Ohne E-Mail: 5.000 Zeichen/Tag
- Mit E-Mail: 50.000 Zeichen/Tag (kostenlos, keine Registrierung bei MyMemory nötig)

Gib deine E-Mail-Adresse ein und klicke auf **Speichern**. Diese E-Mail wird **Gemeinsam mit der Chat-Übersetzung genutzt**.

Die Leiste darunter zeigt **Heute verbraucht (grobe Schätzung, wird täglich um 08:00 UTC zurückgesetzt)**. Ist das Kontingent aufgebraucht, wird **Aufgebraucht** angezeigt.

## Schritt 5: Aussehen

Im Tab **Aussehen** kannst du das Aussehen der Untertitel ändern. Änderungen werden sofort gespeichert.

- **Vorschau**: zeigt Beispiel-Untertitel. Das Farbfeld daneben ändert nur den Hintergrund der Vorschau
- **Ausrichtung**: **Links** (Standard), **Zentriert** oder **Rechts**
- **Schriftart**: eine Zeile für **Originalsprache** (den Originaltext) und eine für **Zielsprache** (die Übersetzung). Jede Zeile hat Schriftart, Farbe und Größe (8–120 px). Standard sind 14 px für das Original und 22 px für die Übersetzung
- **Schatten**: die Farbe des Textschattens
- **Standard wiederherstellen**: stellt das Standard-Aussehen wieder her

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Einschränkungen der Testversion
Die **Zielsprache** ist auf Englisch festgelegt. Die Seite zeigt „Die Demo unterstützt nur die Übersetzung ins Englische“.

Details findest du unter [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::

## Häufig gestellte Fragen (FAQ)

**Q: Ich halte das Tastenkürzel gedrückt, aber nichts passiert.**
Prüfe, ob der Schalter neben **Sprachübersetzung** in der linken Seitenleiste eingeschaltet ist und **Modellstatus** **Bereit** anzeigt.

**Q: Die Aufnahme funktioniert, aber in OBS erscheinen keine Untertitel.**
Kann MyMemory nicht übersetzen (zum Beispiel, weil das Tageskontingent aufgebraucht ist), werden keine Untertitel angezeigt. Prüfe die Leiste **Heute verbraucht**. Mit einer E-Mail-Adresse erhöht sich das Kontingent. Ist deine Zielsprache Englisch, kannst du auch **Whisper zur Übersetzung verwenden, wenn das Ziel English ist** einschalten – dafür gibt es kein Kontingent.
