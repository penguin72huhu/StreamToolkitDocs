---
sidebar_position: 13
---

# Emote-Wall

Wenn Zuschauer im Chat Emotes verwenden, schweben diese über deinen Stream.

:::note Bevor du loslegst
Die Emote-Wall liest Emotes aus dem Chat, verbinde also zuerst die Plattformen, die du nutzt. Siehe [Twitch Einstellungen](../platforms/twitch) und [YouTube Einstellungen](../platforms/youtube-settings).
:::

## Schritt 1: OBS-Quelle hinzufügen

Kopiere die **OBS-Quellen-URL** oben auf der Seite:

```
http://127.0.0.1:7272/emote-wall
```

Füge sie in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source). Die Emote-Wall gibt keinen Ton aus, du musst „Audio über OBS steuern“ also nicht aktivieren.

:::tip
Schalte außerdem den Schalter neben **Emote-Wall** in der linken Seitenleiste ein (**OBS-Anzeige einschalten**). Solange er aus ist, werden Emotes aus dem Chat nicht an das Overlay gesendet.
:::

## Schritt 2: Quellen wählen

Unter **Quelle** gibt es je eine Karte für **Twitch** und **YouTube**. Jede Karte zeigt den Verbindungsstatus:

- Twitch zeigt **(Nicht verbunden)**, wenn dein Twitch-Konto nicht verbunden ist
- YouTube zeigt **Keine Chat-URL verbunden**, wenn der YouTube-Chat nicht verbunden ist

Aktiviere **Emote-Wand aktivieren** auf einer Karte, um Emotes aus dem Chat dieser Plattform anzuzeigen. Deaktiviere es, um diese Plattform zu ignorieren.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Schritt 3: Animationseinstellungen

| Einstellung | Beschreibung |
|---------|-------------|
| **Emote-Größe** | Größe jedes Emotes, 16–256 px |
| **Max. Emotes pro Nachricht** | Höchstens so viele Emotes werden aus einer Chatnachricht übernommen (1–20) |
| **Schwebedauer** | Wie lange jedes Emote schwebt, 1–30 Sekunden |
| **Schwebegeschwindigkeit** | 50–500 px/s |

Klicke auf **Standard wiederherstellen** neben dem Abschnittstitel, um alle vier Werte zurückzusetzen.

## Schritt 4: Testen

Klicke auf **Testen (in OBS anzeigen)**, um Beispiel-Emotes von Twitch mit deinen aktuellen Einstellungen an das Overlay zu senden. Die Anzahl der Test-Emotes richtet sich nach **Max. Emotes pro Nachricht**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Einschränkungen der Testversion
Das OBS-Overlay zeigt ein Wasserzeichen, solange Emotes auf dem Bildschirm sind. Details findest du unter [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
