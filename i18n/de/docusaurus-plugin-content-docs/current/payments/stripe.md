---
sidebar_position: 3
---

# Stripe-Einstellungen

Stream Toolkit empfängt Stripe-Zahlungsbenachrichtigungen über Webhooks. Die Einrichtung ist in zwei Teile unterteilt: das Abrufen der Webhook-URL aus der app und das Abschließen der Anbindung im Stripe-Backend.

## Schritt 1: Webhook-URL in Stream Toolkit abrufen

1. Öffnen Sie Stream Toolkit
2. Klicken Sie im linken unteren Menü auf **Einstellungen** → **Spendenplattform-Anbindung** → **Stripe** (Zum Erweitern klicken)
3. Sie sehen die **Webhook URL** im folgenden Format:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. Klicken Sie auf die Schaltfläche **Kopieren** und speichern Sie diese URL zur späteren Verwendung

![Get webhook URL](./stripe-img/step1.png)

## Schritt 2: Webhook im Stripe-Backend hinzufügen

1. Rufen Sie [Stripe Dashboard](https://dashboard.stripe.com) auf und melden Sie sich an
2. Klicken Sie unten links auf **Entwickler** → **Webhooks**

![Stripe webhook list page](./stripe-img/step2-1.png)

3. Auf **Endpunkt hinzufügen** klicken

![Add destination](./stripe-img/step2-2.png)

4. Füllen Sie die folgenden Informationen aus:
   - **Ereignisse**: Suchen Sie nach `checkout.session.completed` und kreuzen Sie es an (nur dieses eine ist erforderlich)

   ![Select events](./stripe-img/step2-3.png)

   - **Endpunkttyp**: Wählen Sie **Webhook-Endpunkt**

   ![Select destination type](./stripe-img/step2-4.png)

   - **Endpunktname**: Beliebig ausfüllen (z. B. `Stream Toolkit`)
   - **Endpunkt-URL**: Fügen Sie die in Schritt 1 kopierte Webhook-URL ein

   ![Enter name and URL](./stripe-img/step2-5.png)

5. Auf **Endpunkt hinzufügen** klicken

## Schritt 3: Signaturschlüssel eingeben

1. Nach dem Erstellen des Webhooks wird der **Signaturschlüssel** im Format `whsec_...` auf der Seite angezeigt
2. Kopieren Sie diesen Schlüssel
3. Gehen Sie zurück zum Stripe-Einstellungsbereich von Stream Toolkit
4. Fügen Sie den Schlüssel in das Feld **Webhook-Signaturschlüssel** ein
5. Auf **Speichern** klicken

Wenn der Verbindungsstatus auf Grün wechselt, war die Einrichtung erfolgreich.

![Paste signing secret](./stripe-img/step3.png)

## Fertig

Nach Abschluss der Einrichtung erhält Stream Toolkit Echtzeit-Benachrichtigungen und zeigt die Spende an, sobald Zuschauer über Ihren Stripe-**Payment Link** bezahlen.

## Häufig gestellte Fragen (FAQ)

**Q: Wo kann ich einen Payment Link erstellen?**
Gehen Sie zum Stripe Dashboard → **Payment Links** → **Payment Link erstellen**, legen Sie den Betrag fest und teilen Sie den Link mit Ihren Zuschauern.

**Q: Verbindungsstatus nicht grün?**
Stellen Sie sicher, dass der Webhook-Signaturschlüssel korrekt eingefügt und gespeichert wurde und dass die Endpunkt-URL im Stripe-Backend exakt mit der in der app angezeigten URL übereinstimmt.
