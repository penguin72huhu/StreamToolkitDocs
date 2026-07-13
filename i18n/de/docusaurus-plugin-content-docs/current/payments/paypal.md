---
sidebar_position: 3
---

# PayPal-Einstellungen

Stream Toolkit verwendet Webhooks, um PayPal-Zahlungsbenachrichtigungen zu erhalten, sodass kein API-Schlüssel eingegeben werden muss.

## Schritt 1: Webhook-URL in Stream Toolkit abrufen

1. Öffnen Sie Stream Toolkit
2. Klicken Sie im linken unteren Menü auf **Einstellungen**
3. Suchen Sie **Spendenplattform-Anbindung** → **PayPal**
4. Klicken Sie auf die Schaltfläche **URL abrufen**
5. Sobald die URL generiert wurde, klicken Sie auf die Schaltfläche **Kopieren**

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Achtung
Die Webhook-URL enthält ein exklusives token, bitte teilen Sie diese nicht öffentlich. Wenn Sie den Verdacht haben, dass sie durchgesickert ist, können Sie auf **URL neu abrufen** klicken, um eine neue auszustellen (die alte URL wird sofort ungültig).
:::

## Schritt 2: Im PayPal Developer Dashboard anmelden

1. Rufen Sie [PayPal Developer](https://developer.paypal.com) auf
2. Klicken Sie oben rechts auf **Log in to Dashboard** und melden Sie sich mit Ihrem PayPal-Konto an
3. Nach dem Login klicken Sie auf die Schaltfläche **`</>`** oben rechts, um das Developer Backend zu öffnen

![PayPal developer button at top right](./paypal-img/step2.png)

## Schritt 3: In den Live-Modus wechseln

Stellen Sie sicher, dass der Modusschalter über dem linken Menü auf **Live** eingestellt ist. Sie müssen nur wechseln, wenn **Sandbox** (Testmodus) angezeigt wird:

1. Suchen Sie den Kippschalter über dem linken Menü
2. Klicken Sie darauf, um in den **Live**-Modus zu wechseln

![Sandbox/Live toggle](./paypal-img/step3.png)

## Schritt 4: Zu den Webhooks-Einstellungen gehen

1. Klicken Sie im linken Menü auf **Apps & Credentials**

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Suchen Sie auf der Seite nach der Schaltfläche **Manage Webhooks** und klicken Sie darauf

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Scrollen Sie ganz nach unten auf der Seite und klicken Sie auf **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Schritt 5: Webhook hinzufügen

1. Fügen Sie die soeben aus Stream Toolkit kopierte URL in das Feld **Webhook URL** ein
2. Suchen Sie unter **Event types** nach der Kategorie **Payments & payouts** und kreuzen Sie Folgendes an:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Auf **Save** klicken

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Sobald die Einstellungen abgeschlossen sind und Zuschauer über PayPal bezahlen, erhält Stream Toolkit Benachrichtigungen in Echtzeit.

## Häufig gestellte Fragen (FAQ)

**Q: Kann ich im Sandbox-Modus testen?**
Ja. Im Sandbox-Modus können Sie ebenfalls ein Webhook hinzufügen, um den Zahlungsablauf zu testen, es werden jedoch keine echten Zahlungen empfangen.

**Q: Was tun, wenn die Webhook-URL neu abgerufen wurde?**
Sie müssen in das PayPal Dashboard zurückkehren und die alte Webhook-URL durch die neue ersetzen.
