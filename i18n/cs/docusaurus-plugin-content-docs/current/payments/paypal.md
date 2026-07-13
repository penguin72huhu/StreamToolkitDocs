---
sidebar_position: 3
---

# Nastavení PayPal

Stream Toolkit využívá Webhooky k přijímání oznámení o platbách PayPal, takže není nutné zadávat klíč API.

## Krok 1: Získejte URL Webhooku v Stream Toolkit

1. Otevřete Stream Toolkit
2. Klikněte na **Nastavení** v levém dolním menu
3. V sekci **Napojení platforem pro příspěvky** najděte **PayPal**
4. Klikněte na tlačítko **Získat URL**
5. Po vygenerování URL klikněte na tlačítko **Kopírovat**

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Upozornění
URL Webhooku obsahuje exkluzivní token, nesdílejte jej veřejně. Pokud máte podezření na únik, můžete kliknutím na **Získat URL znovu** vygenerovat novou URL (stará URL okamžitě ztratí platnost).
:::

## Krok 2: Přihlaste se do vývojářského centra PayPal

1. Přejdete na [PayPal Developer](https://developer.paypal.com)
2. Klikněte na **Log in to Dashboard** v pravém horním rohu a přihlaste se pomocí svého PayPal účtu
3. Po přihlášení klikněte na tlačítko **`</>`** v pravém horním rohu pro vstup do vývojářského centra

![PayPal developer button at top right](./paypal-img/step2.png)

## Krok 3: Přepněte do režimu Live

Ujistěte se, že je přepínač režimů nad levým menu nastaven na **Live**. Přepínat musíte pouze v případě, že se zobrazuje **Sandbox** (testovací režim):

1. Najděte přepínač nad levým menu
2. Kliknutím přepněte na **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## Krok 4: Přejděte do nastavení Webhooků

1. V levém menu klikněte na **Apps & Credentials**

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Na stránce najděte tlačítko **Manage Webhooks** a kliknutím na něj vstupte

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Přejděte na úplný konec stránky a klikněte na **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Krok 5: Přidat Webhook

1. Vložte URL, kterou jste právě zkopírovali z Stream Toolkit, do pole **Webhook URL**
2. V **Event types** najděte kategorii **Payments & payouts** a zaškrtněte:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Klikněte na **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Po dokončení nastavení Stream Toolkit okamžitě obdrží oznámení, jakmile diváci provedou platbu přes PayPal.

## Často kladené otázky

**Q: Lze testovat v režimu Sandbox?**
Ano. V režimu Sandbox můžete také přidat Webhook pro testování platebního procesu, ale neobdržíte skutečné peníze.

**Q: Co dělat, když je URL Webhooku vygenerována znovu?**
Musíte se vrátit do vývojářského centra PayPal a změnit starou URL Webhooku na novou.
