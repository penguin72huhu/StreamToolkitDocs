---
sidebar_position: 8
---

# Spendenbenachrichtigungen

Blendet eine Benachrichtigung mit Bild, Sound, Name des Spenders, Betrag und Nachricht ein, wenn jemand spendet.

## OBS-Quellen-URL

```
http://127.0.0.1:7272/donate-alert
```

Kopiere die URL oben auf der Einstellungsseite der **Spendenbenachrichtigungen** und füge sie in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source).

:::warning
Benachrichtigungen spielen einen Sound ab. Aktiviere in den Eigenschaften der Browserquelle **Audio über OBS steuern**, sonst ist der Sound im Stream nicht zu hören.
:::

Mit dem Schalter neben **Spendenbenachrichtigungen** in der linken Seitenleiste schaltest du Benachrichtigungen ein oder aus. Solange er aus ist, werden keine Benachrichtigungen angezeigt (auch keine Testbenachrichtigungen), Spenden werden aber weiterhin in der [Spendenübersicht](./sponsors) erfasst.

Treffen mehrere Spenden kurz nacheinander ein, werden die Benachrichtigungen in eine Warteschlange gestellt und nacheinander angezeigt.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Tab „Einstellungen“

### Plattform anbinden

Aktiviere die Plattformen, die eine Benachrichtigung auslösen sollen: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Ein grüner Punkt bedeutet, dass die Plattform verbunden ist; andernfalls zeigt die Zeile **(Nicht verbunden)**. Diese Kontrollkästchen wirken sich nur auf Benachrichtigungen aus, nicht auf die Spendenleiste oder die Spendenübersicht.

**Twitch ⚙️** (wird angezeigt, wenn Twitch verbunden und aktiviert ist):

1. Wähle **Bits und Abos zählen**, **Nur Bits zählen** oder **Nur Abos zählen**
2. **Erneute Abos zählen**: ob erneute Abos eine Benachrichtigung auslösen (wird angezeigt, wenn Abos gezählt werden)
3. **Unter [N] Bits** nicht zählen: Aktiviere es und gib ein Minimum ein, damit kleinere Cheers keine Benachrichtigung auslösen (wird angezeigt, wenn Bits gezählt werden)
4. Klicke auf **Speichern**

**YouTube ⚙️**:

- **Zuschauernamen statt @Handles anzeigen**: erst verfügbar, nachdem du dich mit Google angemeldet hast.
- **Gezählte Ereignisse**: **Super Chat**, **Super Sticker**, **Neues Mitglied**, **Mitgliedschaftsverlängerung**, **Geschenkte Mitgliedschaft**, **Juwelen**. **Juwelen** erfordert die Google-Anmeldung.

Ist der YouTube-Livechat nicht verknüpft, zeigt die Zeile **Keine Chat-URL verbunden** mit **Automatisch verbinden** (erfordert die Google-Anmeldung) und **Manuell eingeben** (führt zum Chat-URL-Feld in den Einstellungen). Ist ein Mitgliedschaftsereignis aktiviert, aber keine Mitgliedspreise festgelegt, klicke auf **⚠ Keine Mitgliedspreise**, um sie festzulegen. Siehe [YouTube Einstellungen](../platforms/youtube-settings).

Zum Verbinden von PayPal, Stripe, O'Pay oder ECPay siehe [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) und [ECPay](../payments/ecpay).

### Einstellungen

| Feld | Beschreibung |
|-------|-------------|
| **Automatisch in eigene Währung umrechnen** | Standardmäßig an. Zeigt den Betrag umgerechnet in die auf der Einstellungsseite festgelegte **Spendenwährung** an. |
| **Anzeigedauer** | Wie lange jede Benachrichtigung auf dem Bildschirm bleibt, in Sekunden. Standard: 6. |

## Tab „Aussehen“

### Vorschau

Die Vorschau verwendet dieselbe Seite wie die OBS-Quelle. Mit der Farbauswahl neben **Vorschau** änderst du den Hintergrund der Vorschau; klicke auf **▶ Animation wiederholen**, um die Benachrichtigungsanimation erneut abzuspielen.

### Einheitlicher Stil / Pro Plattform separat

- **Einheitlicher Stil**: Alle Plattformen verwenden denselben Benachrichtigungsstil.
- **Pro Plattform separat**: Jede Plattform hat ihren eigenen Stil. Wähle die Plattform mit den Schaltflächen darunter (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) und bearbeite ihre Einstellungen. Beim ersten Wechsel übernehmen Plattformen, die du noch nicht angepasst hast, den aktuellen einheitlichen Stil, jeweils mit eigener Farbe der Countdown-Leiste.

**Standard wiederherstellen** stellt den Standardstil für den gerade bearbeiteten Stil wieder her.

### Bild

- **Bild auswählen**: Wähle ein Bild aus der Asset-Verwaltung. Ohne Bild wird ein Herz-Emoji angezeigt. **Löschen** entfernt das Bild.
- **Bildgröße**: 1–400 px.
- **Bildposition**: **Links**, **Rechts**, **Oben** oder **Unten**.

### Sound

Wähle einen integrierten Sound: **Keiner**, **Glockenspiel** (Standard), **Münze**, **Glocke**, **Pop**, **Fanfare**. Klicke auf **▶**, um ihn anzuhören. Klicke auf **Sound auswählen**, um eine eigene Sounddatei aus der Asset-Verwaltung zu verwenden.

### Textanzeige

- **Standard**: Betrag, Name des Spenders und Nachricht werden in separaten Zeilen angezeigt.
- **Eigener Text**: Schreibe deine eigene Zeile. Verwende `{name}` für den Namen des Spenders und `{amount}` für den Betrag, z. B. `Thanks {name} for donating {amount}!`

### Text und Farbe

- **Text**: Lege Schriftart, Größe und Farbe für **Betrag**, **Name des Spenders** und **Nachricht** fest (im Modus „Eigener Text“ zusätzlich für **Eigener Text**).
- **Farbe**: **Hintergrund**, **Schatten** und **Countdown-Leiste**.

### Eigenes CSS

Klappe **Eigenes CSS** auf, um das CSS des gerade bearbeiteten Stils (einheitlich oder der ausgewählten Plattform) zu bearbeiten. **Standard wiederherstellen** stellt das Vorlagen-CSS wieder her, und **Assets verwalten** öffnet die Asset-Verwaltung. Hier können auch Steam-Workshop-Themes angewendet werden. Solange ein Theme angewendet ist, ist das CSS schreibgeschützt. Siehe [Themes](./themes).

## Benachrichtigungen testen

Klicke auf der Seite **Einstellungen** neben **Spendenplattform-Anbindung** auf **Benachrichtigung testen**:

1. Fülle **Testname**, **Testnachricht** und **Testbetrag** aus und wähle eine **Testplattform**
2. Klicke auf **Testbenachrichtigung senden**

Im Abschnitt **YouTube Super Chat-Test** kannst du einen unformatierten **Betragstext** (z. B. `$5.00`, `¥500`, `NT$150`) eingeben und auf **Test-Super Chat senden** klicken, um die Betragserkennung und die Währungsumrechnung zu testen.

:::note
Eine Testbenachrichtigung wird wie eine echte Spende behandelt: Sie wird auch zur [Spendenleiste](./donate) und zur [Spendenübersicht](./sponsors) hinzugefügt, wenn die Plattform dort aktiviert ist.
:::

:::info Testversion
Eigenes CSS ist nur in der Vollversion verfügbar. Echte Zahlungsanbieter (PayPal / Stripe / O'Pay / ECPay) sowie YouTube-Mitgliedschaftsereignisse und Juwelen können in der Testversion nicht genutzt werden, und die Benachrichtigung zeigt in OBS ein Wasserzeichen. Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::

## Häufig gestellte Fragen (FAQ)

**Q: Kein Ton im Stream?**
Prüfe, ob **Audio über OBS steuern** in den Eigenschaften der Browserquelle aktiviert ist und die Quelle im OBS-Audio-Mixer nicht stummgeschaltet ist. Prüfe außerdem, ob **Sound** nicht auf **Keiner** steht.

**Q: Ich habe die OBS-Quelle erst später hinzugefügt. Werden frühere Benachrichtigungen erneut abgespielt?**
Nein. Eine neu geöffnete Quelle zeigt nur Benachrichtigungen, die nach ihrer Verbindung eintreffen.
