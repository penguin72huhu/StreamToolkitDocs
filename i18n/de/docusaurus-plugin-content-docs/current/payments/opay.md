---
sidebar_position: 1
---

# O'Pay-Einstellungen

Dieses Tutorial erklärt, wie Sie den **HashKey** und den **HashIV** von O'Pay erhalten und in Stream Toolkit eingeben.

## Schritt 1: Im O'Pay Händler-Dashboard anmelden

1. Besuchen Sie die [offizielle O'Pay-Website](https://www.opay.tw/) und melden Sie sich an
2. Klicken Sie nach der Anmeldung oben rechts, um das Händler-Dashboard aufzurufen

   ![O'Pay merchant portal button at top right](./opay-img/step1.png)

:::note
Wenn Sie noch kein O'Pay-Konto haben, müssen Sie zuerst die Shop-Anmeldung und die Identitätsprüfung abschließen.
:::

## 2단계: 시스템 개발 관리

1. Finden Sie **Systementwicklungsverwaltung** im linken Menü
2. Klicken Sie auf **Systemintegrations-Einstellungen**

![System interface setup in system development menu](./opay-img/step2.png)

## Schritt 3: In Stream Toolkit eingeben

1. Öffnen Sie Stream Toolkit
2. Klicken Sie im linken unteren Menü auf **Einstellungen**
3. Finden Sie **O'Pay** unter **Spendenplattform-Anbindung**
4. Fügen Sie den **ALL IN ONE Integrations-HashKey** und den **ALL IN ONE Integrations-HashIV** aus den **Systemintegrations-Einstellungen** in die entsprechenden **Hash Key**- und **Hash IV**-Felder ein

   ![O'Pay interface info](./opay-img/step3-4.png)

5. Klicken Sie auf **Speichern**

   ![O'Pay settings in Stream Toolkit](./opay-img/step3-5.png)

## Schritt 4: Benachrichtigungs-URL einrichten

1. Kopieren Sie die **Benachrichtigungs-URL** von O'Pay

   ![Copy the notification URL](./opay-img/step4-1.png)

2. Gehen Sie zurück zur [offiziellen O'Pay-Website](https://www.opay.tw/) und klicken Sie auf **Zahlungen empfangen** → **Streamer-Zahlungseinstellungen**

   ![Streamer payment settings in payment menu](./opay-img/step4-2.png)

3. Fügen Sie die **Benachrichtigungs-URL** in das Feld **URL für erfolgreiche Spendenbenachrichtigung** ein

   ![Donation payment notification URL field](./opay-img/step4-3.png)

4. Klicken Sie auf **Einstellungen speichern**

## Häufig gestellte Fragen (FAQ)

**Q: Menü "Systementwicklungsverwaltung" nicht gefunden?**
Dies bedeutet, dass Ihr Konto noch nicht genehmigt wurde oder die entsprechenden Zahlungsfunktionen noch nicht aktiviert sind. Bitte kontaktieren Sie den O'Pay-Kundensupport.

**Q: Kann der HashKey öffentlich gemacht werden?**
Nein. HashKey und HashIV sind private Schlüssel; bitte geben Sie keine Screenshots weiter und veröffentlichen Sie diese nicht öffentlich.
