---
sidebar_position: 1
---

# Schnellzugriff

**Schnellzugriff** ist ein kleines Steuerfenster, das du neben deinem Spiel oder OBS geöffnet lassen kannst. Damit schaltest du Funktionen ein und aus und nutzt ihre wichtigsten Bedienelemente, ohne zum Hauptfenster zurückzuwechseln.

## Schnellzugriff öffnen

Verwende eine der beiden Möglichkeiten:

- Klicke im Hauptfenster oben in der linken Seitenleiste auf **⚡ Schnellzugriff**
- Klicke mit der rechten Maustaste auf das Stream-Toolkit-Symbol im Infobereich und wähle **Schnellzugriff öffnen**

Ist das Fenster bereits geöffnet, wird es in den Vordergrund geholt, statt ein zweites zu öffnen.

{/* TODO: 截圖 — 快速工具視窗 */}

## Das Fenster

- **Verschieben**: Ziehe an der Titelleiste
- **📌 Anheften / Lösen**: hält das Fenster über anderen Fenstern. Beim Öffnen des Fensters ist es angeheftet
- **✕**: schließt das Fenster

Das Fenster folgt dem Theme und der Oberflächensprache der App.

## Schnellschalter-Panel

Klicke auf den Pfeil **›** am linken Rand, um das Panel **Schnellschalter** auszuklappen. Es listet alle Funktionen auf:

- Der Schalter schaltet die Funktion ein oder aus (wie der Schalter neben jeder Funktion in der Hauptseitenleiste)
- **⚙** (**Einstellungen öffnen**) öffnet das Hauptfenster auf der Einstellungsseite dieser Funktion

Klicke außerhalb des Panels oder erneut auf den Pfeil, um es zu schließen.

Die Funktionen sind in derselben Reihenfolge wie in der Hauptseitenleiste aufgeführt. Um die Reihenfolge zu ändern, ziehe in der Seitenleiste des Hauptfensters am Griff **⠿** neben einer Funktion.

## Funktionskarten

Jede aktivierte Funktion mit Bedienelementen erscheint als Karte. Karten sind anfangs eingeklappt – klicke auf den Titel einer Karte, um sie auf- oder zuzuklappen. Ist keine dieser Funktionen eingeschaltet, zeigt das Fenster **Noch keine Funktion aktiviert**.

| Funktion | Was die Karte bietet |
|---------|---------------------|
| [OBS-Szenensteuerung](./obs-scene) | Verbindungsstatus sowie eine Schaltfläche pro eingerichtetem Szenenwechsel oder Quellen-Umschalter (die aktuelle Szene ist hervorgehoben). Ohne Verbindung sind die Schaltflächen deaktiviert. Die Karte erscheint erst, wenn mindestens ein Tastenkürzel-Eintrag existiert |
| [Sprachübersetzung](./voice-translate) | Schaltfläche **REC** – gedrückt halten zum Aufnehmen, loslassen zum Übersetzen |
| [Stream-Highlight-Markierung](./highlight) | Schaltfläche **MARK**. Nach einer Markierung werden das Plattformsymbol und der Zeitstempel 5 Sekunden lang angezeigt |
| [Spendenleiste](./donate) | Aktueller Betrag / Zielbetrag mit Fortschrittsleiste, ein Feld **Betrag manuell hinzufügen** mit **Hinzufügen** sowie **Zurücksetzen** |
| [Timer](./timer) | Für jeden angezeigten Timer: Name, Zeit, **Start** / **Pause**, **Zurücksetzen** und die von dir eingerichteten Schaltflächen zum Hinzufügen von Zeit. Stoppuhren zeigen stattdessen **Stopp** und **Runde** |
| [Glücksrad](./turntable) | Für jedes angezeigte Glücksrad: **Starten** und **Zurücksetzen** |
| [Media Board](./multimedia) | Schaltflächen für angeheftete Bilder (anzeigen / ausblenden), angeheftete Videos (abspielen) und angeheftete Sounds (abspielen) |
| [Musikwünsche](./song-request) | **Abspielen** / **Pause**, **Stopp**, **Nächster** |

Ist einem Bedienelement ein Tastenkürzel zugewiesen, wird es auf der Schaltfläche angezeigt.

Funktionen, die hier nichts zu bedienen haben (Chat, Twitch-Zielleiste, Spendenbenachrichtigungen, Spendenübersicht, Uhr, Emote-Wall, Live-Umfragen, Verlosungen, Chat-Bot), haben im Schnellschalter-Panel nur ihren Ein/Aus-Schalter.

:::tip
**Zurücksetzen** auf der Karte der Spendenleiste erfordert zwei Klicks: Beim ersten Klick wird die Schaltfläche zu **Zurücksetzen bestätigen**, ein zweiter Klick innerhalb von 10 Sekunden setzt den Betrag auf null.
:::

:::info
Timer und Glücksräder richten sich nach dem **Anzeigemodus** der jeweiligen Funktion: Bei **Einzelner Timer** / **Einzelnes Glücksrad** wird nur das aktuell ausgewählte angezeigt; bei **Mehrere Timer** / **Mehrere Glücksräder** nur die, die du hinzugefügt hast. Gibt es keine, zeigt die Karte **Noch kein Timer** / **Noch kein Glücksrad**.
:::
