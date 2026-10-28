---
sidebar_position: 9
---

# Spendenübersicht

Zeigt im Stream eine Liste der letzten Spenden: Plattformsymbol, Name des Spenders, Betrag und Nachricht.

## OBS-Quellen-URL

```
http://127.0.0.1:7272/sponsors
```

Kopiere die URL oben auf der Einstellungsseite der **Spendenübersicht** und füge sie in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source).

Mit dem Schalter neben **Spendenübersicht** in der linken Seitenleiste blendest du die Übersicht in OBS ein oder aus. Ist er aus, wird die Übersicht ausgeblendet. Spenden werden auch dann weiterhin erfasst.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Tab „Einstellungen“

### Plattform anbinden

Aktiviere die Plattformen, deren Spenden erfasst werden sollen: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Ein grüner Punkt bedeutet, dass die Plattform verbunden ist; andernfalls zeigt die Zeile **(Nicht verbunden)**. Diese Kontrollkästchen wirken sich nur auf die Übersicht aus, nicht auf die Spendenleiste oder die Spendenbenachrichtigungen.

**Twitch ⚙️** (wird angezeigt, wenn Twitch verbunden und aktiviert ist):

1. Wähle **Bits und Abos zählen**, **Nur Bits zählen** oder **Nur Abos zählen**
2. **Erneute Abos zählen**: ob erneute Abos erfasst werden (wird angezeigt, wenn Abos gezählt werden)
3. **Unter [N] Bits** nicht zählen: Aktiviere es und gib ein Minimum ein, damit kleinere Cheers nicht erfasst werden (wird angezeigt, wenn Bits gezählt werden)
4. Klicke auf **Speichern**

**YouTube ⚙️**:

- **Zuschauernamen statt @Handles anzeigen**: erst verfügbar, nachdem du dich mit Google angemeldet hast.
- **Gezählte Ereignisse**: **Super Chat**, **Super Sticker**, **Neues Mitglied**, **Mitgliedschaftsverlängerung**, **Geschenkte Mitgliedschaft**, **Juwelen**. **Juwelen** erfordert die Google-Anmeldung. Juwelen-Geschenke werden als Juwelsymbol mit der Anzahl der Juwelen statt eines Geldbetrags angezeigt.

Ist der YouTube-Livechat nicht verknüpft, zeigt die Zeile **Keine Chat-URL verbunden** mit **Automatisch verbinden** (erfordert die Google-Anmeldung) und **Manuell eingeben** (führt zum Chat-URL-Feld in den Einstellungen). Ist ein Mitgliedschaftsereignis aktiviert, aber keine Mitgliedspreise festgelegt, klicke auf **⚠ Keine Mitgliedspreise**, um sie festzulegen. Siehe [YouTube Einstellungen](../platforms/youtube-settings).

Zum Verbinden von PayPal, Stripe, O'Pay oder ECPay siehe [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) und [ECPay](../payments/ecpay).

### Einstellungen

| Feld | Beschreibung |
|-------|-------------|
| **Automatisch in eigene Währung umrechnen** | Standardmäßig an. Zeigt Beträge umgerechnet in die auf der Einstellungsseite festgelegte **Spendenwährung** an. |
| **Max. Anzeige** | Wie viele Einträge behalten werden (1–100). Standard: 20. Kommt eine neue Spende über dieses Limit hinaus hinzu, wird der älteste Eintrag entfernt. |

## Tab „Aussehen“

### Vorschau

Mit der Farbauswahl neben **Vorschau** änderst du den Hintergrund der Vorschau. Klicke auf **Hinzufügen-Animation testen**, um die Einblendanimation mit einem Beispieleintrag abzuspielen. Das Beispiel wird nicht im Verlauf gespeichert.

Klicke auf **Standard wiederherstellen**, um das Standard-Aussehen wiederherzustellen.

### Anzeigeeinstellungen

- **Plattform-Icon anzeigen**: zeigt das Symbol der Plattform bei jedem Eintrag an.
- **Erscheinungsrichtung**: **Von oben nach unten** (Standard), **Von unten nach oben**, **Von links nach rechts** oder **Von rechts nach links**.

### Schriftart

Lege Schriftart, Farbe und Größe (8–72 px) für **Titel** (Name des Spenders), **Fließtext** (Nachricht) und **Betrag** fest.

### Hintergrundfarbe

- **Standard**: Hintergrundfarbe für jeden Eintrag.
- **+ Bereich hinzufügen**: Füge eine Farbe mit einem **Betrag**-Bereich (**Minimum** ~ **Maximum**) hinzu. Einträge, deren Betrag in den Bereich fällt, verwenden stattdessen diese Farbe. Lass Minimum oder Maximum leer, um auf dieser Seite keine Grenze zu setzen. Klicke auf **✕**, um einen Bereich zu entfernen.

Ist **Automatisch in eigene Währung umrechnen** aktiviert, wird der Bereich mit dem umgerechneten Betrag verglichen.

### Eigenes CSS

Klappe **Eigenes CSS** auf, um das CSS der Übersicht zu bearbeiten. **Standard wiederherstellen** stellt das Standard-CSS wieder her, und **Assets verwalten** öffnet die Asset-Verwaltung. Hier können auch Steam-Workshop-Themes angewendet werden. Solange ein Theme angewendet ist, ist das CSS schreibgeschützt. Siehe [Themes](./themes).

## Tab „Verlauf“

### Manuell hinzufügen (zum Testen)

Wähle eine Plattform, gib **Name**, **Betrag** und optional **Nachricht (optional)** ein und klicke dann auf **Hinzufügen**. Der Eintrag wird nur hinzugefügt, wenn diese Plattform unter **Plattform anbinden** aktiviert ist. Der Betrag wird als deine Spendenwährung behandelt.

### Verlauf

Listet die gespeicherten Einträge mit der Anzahl der Einträge auf.

- Klicke auf **🗑** und dann auf **Löschen bestätigen**, um einen Eintrag zu löschen.
- Klicke auf **Leeren**, um alle Einträge zu löschen. Zuvor erscheint eine Bestätigung. Dies kann nicht rückgängig gemacht werden.

:::info Testversion
Eigenes CSS ist nur in der Vollversion verfügbar. Echte Zahlungsanbieter (PayPal / Stripe / O'Pay / ECPay) sowie YouTube-Mitgliedschaftsereignisse und Juwelen können in der Testversion nicht genutzt werden, und die Übersicht zeigt in OBS ein Wasserzeichen. Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::

## Häufig gestellte Fragen (FAQ)

**Q: Testbenachrichtigungen erscheinen in der Übersicht.**
**Benachrichtigung testen** auf der Einstellungsseite wird wie eine echte Spende behandelt und daher auch hier erfasst, wenn diese Plattform aktiviert ist. Lösche sie im Tab **Verlauf**.
