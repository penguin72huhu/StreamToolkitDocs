---
sidebar_position: 19
---

# Einstellungen

Klicke unten im linken Menü auf **⚙️ Einstellungen**. Diese Seite enthält App-weite Optionen, Plattformverbindungen und Zahlungsanbieter für Spenden.

## Allgemein

| Option | Funktion | Standard |
|------|------|------|
| **Theme** | Anzeigemodus der Oberfläche: **Gedämpft** oder **Hell** | Gedämpft |
| **Sprache** | Oberflächensprache; wechselt sofort | — |
| **Bei X in die Taskleiste minimieren** | Beim Schließen des Fensters wird es in den Infobereich minimiert, statt die App zu beenden | Ein |
| **Spendenwährung** | Globale Währungseinheit, verwendet von Spendenleiste, Benachrichtigungen und allen anderen Betragsanzeigen | Wird beim ersten Start anhand deiner Systemsprache festgelegt (z. B. Traditionelles Chinesisch (Taiwan) → TWD, Japanisch → JPY, andere → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Plattformverbindung

### Twitch

Klicke auf **Konto verbinden** und autorisiere im Browser. Nach dem Verbinden wird **Verbunden als @dein-name** und eine Schaltfläche **Trennen** angezeigt. Vollständige Schritte: [Twitch Einstellungen](../platforms/twitch).

Nach dem Verbinden legst du unter **▸ Umrechnungseinstellung** fest, was Bits und Abos in deiner Spendenwährung wert sind:

- **Umsatzbeteiligung**: **50 / 50** oder **70 / 30**
- **Pro 100 Bits**, **Tier 1-Abo**, **Tier 2-Abo**, **Tier 3-Abo**
- **Speichern** speichert die Werte für die aktuelle Währung; **Standard wiederherstellen** trägt die integrierten Werte für diese Währung ein

### YouTube

1. Klicke auf **Konto verbinden** und melde dich mit Google an. Schritt für Schritt: [YouTube Einstellungen](../platforms/youtube-settings)
2. Nach dem Verbinden wird **Verbunden: Kanalname** angezeigt. **Trennen** hebt die Verknüpfung des Kontos auf
3. Wähle, wie der Livechat gefunden wird:
   - **Aktuellen Stream automatisch erkennen**: erfordert die Google-Anmeldung. Klicke auf **Verbinden**, um deinen Kanal nach dem aktuellen oder bevorstehenden Stream zu durchsuchen. Gibt es mehrere, wähle einen aus der Liste
   - **URL manuell eingeben**: Füge die **Chat-URL** ein
4. **Bei jedem Programmstart zur Eingabe der Chat-URL auffordern**: optional

**▸ Umrechnungseinstellung** unter YouTube legt fest, was Mitgliedschaften wert sind (YouTube sendet für Mitgliedschaften keinen Betrag):

- **Mitgliedschaftsstufen**: Füge jeden Stufennamen und seinen Wert hinzu. Stufennamen müssen exakt mit deinem YouTube-Kanal übereinstimmen
- **Nicht gelistete Stufen**: Wert für eine Stufe, die nicht in der Tabelle steht
- **Stufe für geschenkte Mitgliedschaften**: als welche Stufe geschenkte Mitgliedschaften zählen
- Stufen, die in Ereignissen vorkamen, aber in der Tabelle fehlen, werden mit **Zur Tabelle hinzufügen** / **Ignorieren** aufgelistet

## Spendenplattform-Anbindung

Klicke auf einen Zahlungsanbieter, um ihn aufzuklappen. Jeder hat einen Link **Hier klicken für Anleitung** zu seiner Einrichtungsanleitung:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Benachrichtigung testen

Die Schaltfläche **Benachrichtigung testen** neben der Überschrift öffnet ein Testfenster:

- Fülle **Testname**, **Testnachricht** und **Testbetrag** aus, wähle die **Testplattform** und klicke dann auf **Testbenachrichtigung senden**
- **YouTube Super Chat-Test**: Gib einen **Betragstext** wie `$5.00` oder `NT$150` ein und klicke auf **Test-Super Chat senden**, um die Betragserkennung und die Währungsumrechnung zu testen

## Über

Klicke oben im linken Menü auf die Schaltfläche **i** neben „Stream Toolkit“, um die Version, den Autor und einen Link zur offiziellen Dokumentation zu sehen.

:::info Einschränkungen der Testversion
- **Spendenplattform-Anbindung** ist nur in der Vollversion verfügbar
- Die **Umrechnungseinstellung** für YouTube-Mitgliedschaften ist nur in der Vollversion verfügbar

Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
