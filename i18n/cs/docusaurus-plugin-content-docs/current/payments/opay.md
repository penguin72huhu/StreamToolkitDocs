---
sidebar_position: 1
---

# Nastavení O'Pay

Tento návod vysvětluje, jak získat **HashKey** a **HashIV** od O'Pay a zadat je do Stream Toolkit.

## Krok 1: Přihlaste se do obchodního centra O'Pay

1. Přejdete na [oficiální web O'Pay](https://www.opay.tw/) a přihlaste se
2. Po přihlášení klikněte v pravém horním rohu pro vstup do obchodního centra

   ![O'Pay merchant portal button at top right](./opay-img/step1.png)

:::note
Pokud ještě nemáte účet O'Pay, musíte nejprve dokončit žádost o obchod a ověření totožnosti.
:::

## Krok 2: Přejděte do 系統開發管理

1. V levém menu najděte **Správa vývoje systému**
2. Klikněte na **Nastavení systémové integrace**

![System interface setup in system development menu](./opay-img/step2.png)

## Krok 3: Zadejte do Stream Toolkit

1. Otevřete Stream Toolkit
2. Klikněte na **Nastavení** v levém dolním menu
3. V **Napojení platforem pro příspěvky** najděte **O'Pay**
4. Vložte **ALL IN ONE Integrační HashKey** a **ALL IN ONE Integrační HashIV** z **Nastavení systémové integrace** do polí **Hash Key** a **Hash IV**

   ![O'Pay interface info](./opay-img/step3-4.png)

5. Klikněte na **Uložit**

   ![O'Pay settings in Stream Toolkit](./opay-img/step3-5.png)

## Krok 4: Nastavení notifikační URL

1. Zkopírujte **URL pro notifikace na pozadí** od O'Pay

   ![Copy the notification URL](./opay-img/step4-1.png)

2. Vraťte se na [oficiální web O'Pay](https://www.opay.tw/) a klikněte na **Přijímat platby** → **Nastavení plateb pro streamery**

   ![Streamer payment settings in payment menu](./opay-img/step4-2.png)

3. Vložte **URL pro notifikace na pozadí** do pole **URL pro oznámení o úspěšné platbě příspěvku**

   ![Donation payment notification URL field](./opay-img/step4-3.png)

4. Klikněte na **Uložit nastavení**

## Často kladené otázky

**Q: Nemůžete najít nabídku "Správa vývoje systému"?**
To znamená, že váš účet ještě nebyl schválen nebo nebyly aktivovány příslušné platební funkce. Kontaktujte prosím zákaznickou podporu O'Pay.

**Q: Může být HashKey veřejný?**
Ne. HashKey a HashIV jsou soukromé klíče; nesdílejte prosím snímky obrazovky ani je nezveřejňujte na veřejných místech.
