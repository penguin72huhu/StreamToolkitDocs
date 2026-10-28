---
sidebar_position: 11
---

# Timer

Zeige Countdown-Timer oder Stoppuhren im Stream an. Ein Countdown kann über Schaltflächen, die du anklickst, oder automatisch durch Twitch-Follows, Abos, Bits und Spenden Zeit gewinnen oder verlieren.

Die Seite hat zwei Tabs: **Einstellungen** und **Timer erstellen**. Erstelle zuerst einen Timer und steuere ihn dann über **Einstellungen**.

## Schritt 1: Timer erstellen

1. Öffne **Timer** in der linken Seitenleiste und wechsle zum Tab **Timer erstellen**
2. Klicke unter **Meine Timer** auf **Hinzufügen**. Ein neuer Countdown-Timer wird mit einer Startzeit von 10 Minuten und drei Zeit-Optionen (+30 Sek., +1 Min., +5 Min.) erstellt
3. Klicke auf eine Timer-Karte, um sie zu bearbeiten. Klicke auf das **✕** einer Karte, um diesen Timer zu löschen

Die **Vorschau** zeigt, wie der ausgewählte Timer aussieht. Mit dem Farbfeld daneben änderst du den Hintergrund der Vorschau.

Unter der Vorschau wechselst du zwischen **Timer-Einstellungen** und **Aussehen**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Schritt 2: Timer-Einstellungen

### Zeitmodus

- **Countdown**: zählt von der Startzeit herunter
- **Stoppuhr**: zählt von 0 hoch und kann Runden erfassen. Der Stoppuhr-Modus hat keine Startzeit, keine Warnzeit, keinen Endsound und keine Zeit-Optionen

### Name

Der Name, der in der Timer-Liste, den Dropdown-Listen und im Schnellzugriff angezeigt wird.

### Startzeit

Die Startzeit des Countdowns in Stunden, Minuten und Sekunden. Die Gesamtzahl in Sekunden wird daneben angezeigt.

### Warnzeit

Erreicht die verbleibende Zeit diesen Wert, wechselt der Timertext zur Farbe **Warnung**, die unter **Aussehen** festgelegt ist. Belasse den Wert bei 0, wenn du keine Warnung möchtest.

### Sound bei Countdown-Ende

Der Sound, der abgespielt wird, wenn der Countdown 0 erreicht. Wähle **Keiner** oder einen der integrierten Sounds (**Glockenspiel**, **Münze**, **Glocke**, **Pop**, **Fanfare**). Klicke auf **▶**, um ihn zu testen. Um eine eigene Datei zu verwenden, klicke auf **Sound auswählen** und wähle eine aus der Asset-Verwaltung.

Der Sound wird von der OBS-Browserquelle abgespielt, aktiviere daher für die Timer-Quelle **Audio über OBS steuern**. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source).

### Zeit-Optionen

Zeit-Optionen sind die Schaltflächen zum Hinzufügen/Abziehen von Zeit bei einem Countdown. Jeder Timer kann bis zu 20 davon haben.

Um eine hinzuzufügen, fülle das Formular **Zeit-Option hinzufügen** aus:

1. **Auslöser-Quelle**: Wähle, was diese Option automatisch anwendet
   - **Manuell**: wird nur angewendet, wenn du auf die Schaltfläche klickst
   - **Follow**: wird bei jedem neuen Twitch-Follow angewendet
   - **Twitch Bits**: wird bei Bits-Cheers angewendet
   - **Neues Twitch-Abo**: wird bei Twitch-Abos angewendet
   - **Spende**: wird bei Spenden angewendet. Wähle über **Spendenplattform**, welche von **YouTube**, **O'Pay**, **ECPay** und **PayPal** zählen
2. Lege bei **Twitch Bits** und **Spende** zusätzlich fest:
   - **Auslöseschwelle**: der Bits- oder Spendenbetrag für eine Stufe
   - **Umrechnungsart**: **Auslösen bei ganzzahligem Vielfachen** oder **Proportional umrechnen** (siehe Beispiel unten)
3. **Zeit hinzufügen**: Wähle **＋** oder **－** und lege dann Stunden, Minuten und Sekunden fest
4. Klicke auf **Hinzufügen**

Um eine Option zu ändern, klicke auf ihr **Bearbeiten**, ändere das Formular und klicke dann auf **Speichern** (oder **Abbrechen**). Klicke auf **✕**, um sie zu löschen. Optionen mit automatischem Auslöser sind mit 🔗 und dem Namen des Auslösers gekennzeichnet.

**Umrechnungsbeispiel**: Auslöseschwelle 100 Bits, Zeit hinzufügen +1 Min., und ein Zuschauer cheert 250 Bits:

- **Auslösen bei ganzzahligem Vielfachen**: Nur volle Vielfache der Schwelle zählen → 2 × 1 Min. = **+2 Min.**
- **Proportional umrechnen**: 250 ÷ 100 × 1 Min. → **+2 Min. 30 Sek.**

Bei Spenden wird der Betrag in die in den Einstellungen der App gewählte Währung umgerechnet, bevor er mit der Schwelle verglichen wird.

:::note
- Automatische Auslöser wirken sich nur auf Countdown-Timer aus
- Zeit-Optionen mit automatischem Auslöser erscheinen weiterhin als Schaltflächen in der Steuerung, sodass du sie auch manuell anklicken kannst
- **Neues Twitch-Abo** wird einmal pro Abo-Ereignis angewendet: Ein Geschenk mehrerer Abos wird nur einmal angewendet. Erneute Abos werden nur angewendet, wenn **Erneute Abos zählen** in der [Twitch-Zielleiste](./goal) aktiviert ist
:::

### Steuer-Tastenkürzel

Lege Tastenkürzel für diesen Timer fest:

- **Start / Pause**
- **Runden-Tastenkürzel** (nur Stoppuhr)
- **Zurücksetzen-Tastenkürzel**

Siehe auch [Tastenkürzel](./hotkeys).

## Schritt 3: Aussehen

| Einstellung | Beschreibung |
|---------|-------------|
| **Schriftart** | Schriftart des Zeittexts |
| **Schriftgröße** | 12–300 px |
| **Schriftfarbe** | **Normal**: **Einfarbig** oder **Farbverlauf** (zwei Farben und ein **Winkel**). **Warnung** (nur Countdown): die Farbe, die ab Erreichen der Warnzeit verwendet wird |
| **Hintergrundfarbe** | Hintergrund hinter der Zeit |
| **Rahmen** | Umrissfarbe, **Deckkraft** und **Stärke** (0–20 px) |
| **Schatten** | Schattenfarbe, **Deckkraft**, **Weichzeichnen** und **X**- / **Y**-Versatz |

## Schritt 4: Anzeigemodus wählen und OBS-Quelle hinzufügen

Wechsle zum Tab **Einstellungen**. Wähle unter **Steuerung** einen **Anzeigemodus**:

| Modus | Beschreibung | OBS-Quellen-URL |
|------|-------------|----------------|
| **Einzelner Timer** | OBS zeigt nur den ausgewählten Timer. Wechsle den Timer über die Dropdown-Liste **Aktueller Timer** | `http://127.0.0.1:7272/timer` |
| **Mehrere Timer** | Jeder Timer hat eine eigene URL und kann separat in OBS hinzugefügt werden | `http://127.0.0.1:7272/timer/<timer ID>` |

Wähle im Modus **Mehrere Timer** Timer über **Zur Anzeige hinzufügen** aus. Jeder hinzugefügte Timer erhält eine eigene Karte mit seiner **OBS-Quellen-URL**. Klicke auf **Kopieren**, um sie zu kopieren. Klicke auf **✕** einer Karte, um ihn aus der Anzeige zu entfernen.

Füge die kopierte URL in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source).

:::tip
Schalte außerdem den Schalter neben **Timer** in der linken Seitenleiste ein (**OBS-Anzeige einschalten**). Solange er aus ist, ist der Timer in OBS ausgeblendet.
:::

## Schritt 5: Timer steuern

Jede Timer-Karte im Tab **Einstellungen** hat:

- **Start** / **Pause**: Bei einer Stoppuhr heißt die Pause-Schaltfläche **Stopp**. Ein Countdown, der 0 erreicht hat, kann erst wieder gestartet werden, wenn du ihn zurücksetzt oder Zeit hinzufügst
- **Runde** (nur Stoppuhr): erfasst während des Laufs eine Runde. Runden werden unter der Karte mit der Zeit und der Differenz zur vorherigen Runde aufgelistet
- **Zurücksetzen**: stoppt den Timer und setzt ihn auf die Startzeit zurück (bei einer Stoppuhr auf 0); Runden werden gelöscht
- **Zeit hinzufügen** (nur Countdown): eine Schaltfläche pro Zeit-Option

Die laufende Zeit wird nur im OBS-Overlay angezeigt, nicht auf der Einstellungsseite. Du kannst Timer auch im Fenster [Schnellzugriff](./quick-tools) steuern, das ebenfalls die aktuelle Zeit anzeigt.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Einschränkungen der Testversion
Du kannst nur **1** Timer erstellen. Details findest du unter [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
