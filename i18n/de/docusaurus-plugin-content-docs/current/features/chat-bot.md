---
sidebar_position: 18
---

# Chat-Bot

Postet automatisch Nachrichten in deinen Chat: zeitgesteuerte Nachrichten in einem festen Intervall und Schlüsselwort-Antworten, wenn ein Zuschauer einen Befehl eingibt. Der Bot postet mit deinem eigenen Konto.

Der Chat-Bot hat kein OBS-Overlay, es muss also keine URL hinzugefügt werden.

:::tip
Schalte den Schalter neben **Chat-Bot** im linken Menü ein. Solange er aus ist, sendet der Bot nichts.
:::

Die Seite hat drei Tabs: **Einstellungen**, **Zeitgesteuerte Nachrichten** und **Schlüsselwort-Antworten**.

## Tab „Einstellungen“

Klicke unter **Plattformen** auf **Twitch**, um es einzuschalten (erneut klicken schaltet es aus). Der Punkt daneben leuchtet, wenn Twitch verbunden ist; andernfalls wird **(Nicht verbunden)** angezeigt. Verbinde zuerst Twitch: [Twitch Einstellungen](../platforms/twitch).

**YouTube** wird als **Demnächst verfügbar** angezeigt und kann noch nicht eingeschaltet werden.

Ist keine Plattform verbunden, zeigen die beiden anderen Tabs „Keine Plattform verbunden, daher sendet der Bot nichts.“ mit der Schaltfläche **Zu den Einstellungen** an.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Zeitgesteuerte Nachrichten

Postet in regelmäßigen Abständen eine Nachricht, während du live bist.

1. Klicke auf **+ Hinzufügen**
2. Fülle aus:
   - **Nachricht**: der zu postende Text (auf Twitch bis zu 500 Zeichen). Er ist immer einzeilig: Enter bewirkt nichts und eingefügte Zeilenumbrüche werden zu Leerzeichen
   - **Intervall**: Minuten zwischen den Posts (5–240, Standard 15)
   - **Min. Chatzeilen**: wie viele neue Chatzeilen seit dem letzten Post nötig sind, bevor erneut gepostet wird (0–100, Standard 2), damit nicht ständig in einen leeren Chat gepostet wird
   - **Plattformen**: wo gepostet wird
3. Klicke auf **Speichern**

So wird gepostet:

- Nur während dein Stream live ist. Der erste Post erfolgt ein volles Intervall nach Streambeginn, nicht direkt beim Start
- Sind mehrere zeitgesteuerte Nachrichten gleichzeitig fällig, werden sie zeitlich verteilt statt gemeinsam gepostet

## Schlüsselwort-Antworten

Antwortet, wenn die Nachricht eines Zuschauers mit einem Befehl beginnt.

1. Klicke auf **+ Hinzufügen**
2. Fülle aus:
   - **Befehl**: Wähle das Präfix (`! @ # $ % & ~`) und gib dann ein Wort ohne Leerzeichen ein, z. B. `!dc`. Es wird mit dem ersten Wort einer Chatnachricht verglichen, Groß-/Kleinschreibung wird ignoriert
   - **Antwort**: der zu postende Text. `{user}` wird durch den Namen des Zuschauers ersetzt, der den Befehl verwendet hat
   - **Abklingzeit**: Sekunden, bevor derselbe Befehl erneut antworten kann (0–3600, Standard 5)
   - **Plattformen**: wo geantwortet wird
3. Klicke auf **Speichern**

Schlüsselwort-Antworten funktionieren jederzeit, ob live oder nicht.

Ein Befehl darf nicht mit einer anderen Schlüsselwort-Antwort übereinstimmen und auch nicht mit einem Befehl, der bereits von [Musikwünsche](./song-request) oder dem Schlüsselwort der [Verlosungen](./lottery) verwendet wird.

## Liste verwalten

In beiden Tabs hat jedes Element:

- Links ein Kontrollkästchen, um das Element ein- oder auszuschalten, ohne es zu löschen
- Plattform-Tags; ein abgeblendetes Tag bedeutet, dass diese Plattform im Tab „Einstellungen“ ausgeschaltet ist
- **Bearbeiten** und **Entfernen**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Einschränkungen der Testversion
- 1 zeitgesteuerte Nachricht und 1 Schlüsselwort-Antwort
- Jede Nachricht endet mit ` (by StreamToolkit)`, daher ist die maximale Nachrichtenlänge kürzer

Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
