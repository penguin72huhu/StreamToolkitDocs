---
sidebar_position: 7
---

# Spendenleiste

Zeigt im Stream eine Fortschrittsleiste zu einem Spendenziel. Spenden von den ausgewählten Plattformen werden automatisch zur Summe addiert.

## OBS-Quellen-URL

```
http://127.0.0.1:7272/donate
```

Kopiere die URL oben auf der Einstellungsseite der **Spendenleiste** und füge sie in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source).

Mit dem Schalter neben **Spendenleiste** in der linken Seitenleiste blendest du die Leiste in OBS ein oder aus. Ist er aus, ist die Leiste ausgeblendet.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Währung

Die Leiste verwendet die auf der Seite **Einstellungen** festgelegte **Spendenwährung**. Spenden in anderen Währungen werden vor dem Addieren in diese Währung umgerechnet. Kann die Währung einer Spende nicht umgerechnet werden, wird sie nicht zur Leiste addiert (Spendenbenachrichtigungen und Spendenübersicht zeigen sie weiterhin in der Originalwährung an).

## Tab „Einstellungen“

### Plattform anbinden

Aktiviere die Plattformen, deren Spenden zur Leiste zählen sollen:

- **Twitch** — Bits und Abos
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Ein grüner Punkt bedeutet, dass die Plattform verbunden ist; andernfalls zeigt die Zeile **(Nicht verbunden)**. Diese Kontrollkästchen legen nur fest, was die Leiste zählt. Sie wirken sich nicht auf Spendenbenachrichtigungen oder die Spendenübersicht aus, die eigene Plattformlisten haben.

- **YouTube**: Ist der Livechat nicht verknüpft, zeigt die Zeile **Keine Chat-URL verbunden** mit zwei Schaltflächen: **Automatisch verbinden** (erfordert die Google-Anmeldung) und **Manuell eingeben** (führt zum Chat-URL-Feld in den Einstellungen). Siehe [YouTube Einstellungen](../platforms/youtube-settings).
- **YouTube ⚙️**: Wähle, welche **Gezählte Ereignisse** zur Leiste addiert werden: **Super Chat**, **Super Sticker**, **Neues Mitglied**, **Mitgliedschaftsverlängerung**, **Geschenkte Mitgliedschaft**, **Juwelen**. **Juwelen** erfordert die Google-Anmeldung.
- Ist ein Mitgliedschaftsereignis aktiviert, aber keine Mitgliedspreise festgelegt, erscheint **⚠ Keine Mitgliedspreise**. Klicke darauf, um zu den Einstellungen zu gelangen und die Stufenpreise unter YouTube → **Umrechnungseinstellung** einzutragen.
- Was Twitch-Bits und -Abos wert sind, legst du unter Einstellungen → Twitch → **Umrechnungseinstellung** fest. Siehe [Twitch Einstellungen](../platforms/twitch).
- Zum Verbinden von PayPal, Stripe, O'Pay oder ECPay siehe [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) und [ECPay](../payments/ecpay).

### Aktueller Fortschritt

Zeigt die aktuelle Summe, das Ziel und den Prozentsatz.

| Feld | Beschreibung |
|-------|-------------|
| **Titel** | Optional. Wird über der Leiste angezeigt. |
| **Zielbetrag** | Der Zielbetrag in deiner Spendenwährung. |
| **Manuell hinzufügen** | Gib einen Betrag ein und klicke auf **Hinzufügen** (oder drücke Enter), um ihn zur Summe zu addieren. |
| **Zurücksetzen** | Setzt die aktuelle Summe auf null zurück. Zuvor erscheint eine Bestätigung. Dies kann nicht rückgängig gemacht werden. |

## Tab „Aussehen“

### Vorschau

Die Vorschau zeigt die Leiste mit Beispielbeträgen. Mit der Farbauswahl neben **Vorschau** änderst du den Hintergrund der Vorschau. Aktiviere **Vorschau erreicht**, um die Leiste im abgeschlossenen Zustand zu sehen.

### Schrift und Farbe

Klicke auf **Standard wiederherstellen**, um das Standard-Aussehen wiederherzustellen.

- **Schriftart**: Lege Schriftart, Farbe und Größe (8–72 px) für **Titel**, **Betrag** und **Prozent** fest.
- **Farbe**: Lege **Hintergrund**, **Zielleiste** (Füllfarbe) und **Zielleiste erreicht** (Füllfarbe nach Erreichen des Ziels) fest.

### Eigenes CSS

Klappe **Eigenes CSS** auf, um das CSS der Leiste zu bearbeiten. **Standard wiederherstellen** stellt das Standard-CSS wieder her, und **Assets verwalten** öffnet die Asset-Verwaltung für Bilder, die du in deinem CSS verwenden möchtest. Hier können auch Steam-Workshop-Themes angewendet werden. Solange ein Theme angewendet ist, ist das CSS schreibgeschützt, bis du es zurücksetzt. Siehe [Themes](./themes).

:::info Testversion
Eigenes CSS ist nur in der Vollversion verfügbar. Echte Zahlungsanbieter (PayPal / Stripe / O'Pay / ECPay) sowie YouTube-Mitgliedschaftsereignisse und Juwelen können in der Testversion nicht genutzt werden, und das Overlay zeigt ein Wasserzeichen. Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::

## Häufig gestellte Fragen (FAQ)

**Q: Die Summe ist gestiegen, nachdem ich eine Testbenachrichtigung gesendet habe.**
**Benachrichtigung testen** auf der Einstellungsseite zählt wie eine echte Spende und wird daher zur Leiste addiert (sofern diese Plattform aktiviert ist). Klicke nach dem Testen auf **Zurücksetzen**, um die Summe auf null zurückzusetzen.
