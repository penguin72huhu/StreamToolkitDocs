---
sidebar_position: 3
---

# Nastavení Stripe

Stream Toolkit přijímá oznámení o platbách Stripe prostřednictwem Webhooků. Nastavení se skládá ze dvou částí: získání URL Webhooku z app a dokončení propojení ve vývojářském centru Stripe.

## Krok 1: Získejte URL Webhooku v Stream Toolkit

1. Otevřete Stream Toolkit
2. Klikněte na **Nastavení** v levém dolním menu → **Napojení platforem pro příspěvky** → **Stripe** (Kliknutím rozbalíte)
3. Uvidíte **Webhook URL** v následujícím formátu:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. Klikněte na tlačítko **Kopírovat** a uložte tuto URL pro pozdější použití

![Get webhook URL](./stripe-img/step1.png)

## Krok 2: Přidejte Webhook ve vývojářském centru Stripe

1. Přejdete na [Stripe Dashboard](https://dashboard.stripe.com) a přihlaste se ke svému účtu
2. Klikněte v levém dolním rohu na **Vývojáři** → **Webhooky**

![Stripe webhook list page](./stripe-img/step2-1.png)

3. Klikněte na **Přidat koncový bod**

![Add destination](./stripe-img/step2-2.png)

4. Vyplňte následující informace:
   - **Události**: Vyhledejte a zaškrtněte `checkout.session.completed` (stačí pouze tato jedna)

   ![Select events](./stripe-img/step2-3.png)

   - **Typ koncového bodu**: Vyberte **Koncový bod Webhooku**

   ![Select destination type](./stripe-img/step2-4.png)

   - **Název koncového bodu**: Vyplňte libovolný název (např. `Stream Toolkit`)
   - **URL koncového bodu**: Vložte URL Webhooku zkopírovanou z kroku 1

   ![Enter name and URL](./stripe-img/step2-5.png)

5. Klikněte na **Přidat koncový bod**

## Krok 3: Zadejte podpisový klíč

1. Po vytvoření Webhooku se na stránce zobrazí **podpisový klíč** ve formátu `whsec_...`
2. Zkopírujte tento klíč
3. Vraťte se do sekce nastavení Stripe v aplikaci Stream Toolkit
4. Vložte klíč do pole **Podpisový klíč webhooku**
5. Klikněte na **Uložit**

Jakmile se stav připojení změní na zelený, nastavení bylo úspěšné.

![Paste signing secret](./stripe-img/step3.png)

## Hotovo

Jakmile je nastavení dokončeno, diváci provedou platbu přes váš Stripe **Payment Link**, Stream Toolkit okamžitě obdrží upozornění a zobrazí příspěvek.

## Často kladené otázky

**Q: Kde mohu vytvořit Payment Link?**
Přejděte do Stripe Dashboard → **Payment Links** → **Vytvořit Payment Link**, nastavte částku a sdílejte odkaz se svými diváky.

**Q: Stav připojení se nezměnil na zelený?**
Ujistěte se, že Podpisový klíč webhooku byl správně vložen a uložen a že URL koncového bodu ve vývojářském centru Stripe přesně odpovídá URL zobrazené v aplikaci.
