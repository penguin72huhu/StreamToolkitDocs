---
sidebar_position: 1
---

# Impostazioni O'Pay

Questo tutorial spiega come ottenere **HashKey** e **HashIV** da O'Pay e inserirli in Stream Toolkit.

## Passaggio 1: Accedi alla dashboard commerciante O'Pay

1. Vai al [sito ufficiale di O'Pay](https://www.opay.tw/) ed effettua il login
2. Dopo l'accesso, clicca nell'angolo in alto a destra per entrare nella dashboard commerciante

   ![O'Pay merchant portal button at top right](./opay-img/step1.png)

:::note
Se non hai ancora un account O'Pay, devi prima completare la richiesta del negozio e la verifica dell'identità.
:::

## Adım 2: Sistem Geliştirme Yönetimi

1. Trova **Gestione sviluppo sistema** nel menu a sinistra
2. Clicca su **Impostazioni integrazione sistema**

![System interface setup in system development menu](./opay-img/step2.png)

## Passaggio 3: Inserisci in Stream Toolkit

1. Apri Stream Toolkit
2. Clicca su **Impostazioni** nel menu in basso a sinistra
3. Trova **O'Pay** in **Integrazione piattaforme di donazione**
4. Incolla **ALL IN ONE HashKey di integrazione** e **ALL IN ONE HashIV di integrazione** dalle **Impostazioni integrazione sistema** nei rispettivi campi **Hash Key** e **Hash IV**

   ![O'Pay interface info](./opay-img/step3-4.png)

5. Clicca su **Salva**

   ![O'Pay settings in Stream Toolkit](./opay-img/step3-5.png)

## Passaggio 4: Imposta l'URL di notifica

1. Copia l'**URL di notifica backend** di O'Pay

   ![Copy the notification URL](./opay-img/step4-1.png)

2. Torna al [sito ufficiale di O'Pay](https://www.opay.tw/) e clicca su **Ricevi pagamenti** → **Impostazioni pagamento streamer**

   ![Streamer payment settings in payment menu](./opay-img/step4-2.png)

3. Incolla l'**URL di notifica backend** nel campo **URL di notifica di pagamento donazione riuscito**

   ![Donation payment notification URL field](./opay-img/step4-3.png)

4. Clicca su **Salva impostazioni**

## Domande frequenti

**Q: Non riesci a trovare il menu "Gestione sviluppo sistema"?**
Ciò significa che il tuo account non è ancora stato approvato o che le relative funzioni di pagamento non sono state abilitate. Si prega di contattare il servizio clienti O'Pay.

**Q: Il HashKey può essere reso pubblico?**
No. HashKey e HashIV sono chiavi private; si prega di non condividere screenshot o pubblicarle in luoghi pubblici.
