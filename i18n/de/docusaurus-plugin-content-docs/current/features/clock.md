---
sidebar_position: 12
---

# Uhr

Zeige die aktuelle Uhrzeit im Stream an, wahlweise mit Datum und Wochentag.

## Schritt 1: OBS-Quelle hinzufügen

Kopiere die **OBS-Quellen-URL** oben auf der Seite:

```
http://127.0.0.1:7272/clock
```

Füge sie in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source). Die Uhr gibt keinen Ton aus, du musst „Audio über OBS steuern“ also nicht aktivieren.

:::tip
Schalte außerdem den Schalter neben **Uhr** in der linken Seitenleiste ein (**OBS-Anzeige einschalten**). Solange er aus ist, ist die Uhr in OBS ausgeblendet.
:::

## Vorschau

Die **Vorschau** oben zeigt das tatsächliche OBS-Overlay und aktualisiert sich, während du Einstellungen änderst. Mit dem Farbfeld daneben änderst du den Hintergrund der Vorschau.

Unter der Vorschau gibt es drei Tabs: **Aussehen**, **Uhrformat** und **Anzeigeeinstellungen**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Aussehen

| Einstellung | Beschreibung |
|---------|-------------|
| **Schriftart** | Schriftart für den gesamten Text der Uhr |
| **Stil** | Wie Uhrzeit, Datum und Wochentag angeordnet sind: **Stack**, **Horizontal**, **One-Top-Two-Bottom** oder **Two-Top-One-Bottom**. **Zeilenabstand** ist in allen Layouts außer **Horizontal** verfügbar, **Abstand** in allen Layouts außer **Stack** (beide −200 bis 200 px) |
| **Reihenfolge** | Ziehe die Blöcke **Uhrzeit**, **Datum** und **Wochentag**, um ihre Reihenfolge zu ändern |
| **Text** | Stelle **Uhrzeit**, **Datum** und **Wochentag** getrennt ein: **Schriftgröße**, Farbe (**Einfarbig** oder **Farbverlauf** mit zwei Farben und einem **Winkel**) sowie Farbe, **Deckkraft** und **Stärke** (0–7 px) des **Rahmen**s |
| **Schatten** | Schattenfarbe, **Deckkraft**, **Weichzeichnen** und **X**- / **Y**-Versatz, gemeinsam für den gesamten Text |

Die Schaltfläche **Standard wiederherstellen** befindet sich oben im Tab.

### Eigenes CSS

Klicke auf **Eigenes CSS**, um den Editor aufzuklappen. Das Standard-CSS listet die Selektoren für jeden Teil der Uhr (Uhrzeit, Datum, Wochentag und ihre Container) mit Kommentaren auf. Verwende es für Layout und Struktur. Farben, Schriftarten und Größen werden in den Aussehen-Einstellungen oben festgelegt.

- **Standard wiederherstellen**: stellt das Standard-CSS wieder her
- **Assets verwalten**: öffnet die Asset-Verwaltung für Bilder, die in deinem CSS verwendet werden

Überschreibt dein CSS eine Eigenschaft mit `!important`, wird das zugehörige Aussehen-Steuerelement gesperrt, da sich das CSS ohnehin durchsetzen würde.

## Uhrformat

- **Zeitformat**: **24 Stunden** oder eine von zwei 12-Stunden-Optionen: **12 Stunden (vorm./nachm.)** zeigt die chinesischen Kennzeichnungen 上午 / 下午, **12 Stunden (AM/PM)** zeigt AM/PM
- **Zeitzone**: UTC−12 bis UTC+14. Standardmäßig entspricht die Zeitzone der deines Computers

## Anzeigeeinstellungen

- **Sekunden anzeigen**
- **Datum anzeigen**: Wenn aktiviert, wähle ein Datumsformat aus der Dropdown-Liste. Mit **Kein Jahr** gekennzeichnete Formate lassen das Jahr weg
  - **Datum mit führender Null**: zeigt einstellige Monate und Tage mit führender Null an (zum Beispiel 2026/05/20)
  - **Jahresformat**: wird bei Formaten angezeigt, die mit dem Jahr beginnen. **Vollständig (2026)** oder **Kurz (26)**

  Diese beiden Optionen gelten für die numerischen Formate (mit `/` oder `-`). Die ausgeschriebenen Formate (zum Beispiel „20. Mai 2026“) richten sich stattdessen nach der Oberflächensprache der App
- **Wochentag anzeigen**: Wenn aktiviert, wähle, wie der Wochentag geschrieben wird (zum Beispiel **Mittwoch**, **MI** oder **Mi**)

:::info Einschränkungen der Testversion
**Eigenes CSS** ist nur in der Vollversion verfügbar. Details findest du unter [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
