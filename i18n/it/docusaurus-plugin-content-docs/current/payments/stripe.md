---
sidebar_position: 3
---

# Impostazioni Stripe

Stream Toolkit riceve le notifiche di pagamento di Stripe tramite Webhook. La configurazione si divide in due parti: ottenere l'URL del Webhook dall'app e completare il collegamento nella dashboard di Stripe.

## Passaggio 1: Ottieni l'URL del Webhook in Stream Toolkit

1. Apri Stream Toolkit
2. Clicca su **Impostazioni** nel menu in basso a sinistra → **Integrazione piattaforme di donazione** → **Stripe** (Clicca per espandere)
3. Vedrai l'**Webhook URL**, nel formato seguente:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. Clicca sul pulsante **Copia** e salva questo URL per un uso successivo

![Get webhook URL](./stripe-img/step1.png)

## Passaggio 2: Aggiungi un Webhook nella dashboard di Stripe

1. Vai su [Stripe Dashboard](https://dashboard.stripe.com) e accedi al tuo account
2. Clicca su **Sviluppatori** → **Webhook** in basso a sinistra

![Stripe webhook list page](./stripe-img/step2-1.png)

3. Clicca su **Aggiungi endpoint**

![Add destination](./stripe-img/step2-2.png)

4. Compila le seguenti informazioni:
   - **Eventi**: Cerca e seleziona `checkout.session.completed` (è necessario solo questo)

   ![Select events](./stripe-img/step2-3.png)

   - **Tipo di endpoint**: Seleziona **Endpoint del Webhook**

   ![Select destination type](./stripe-img/step2-4.png)

   - **Nome dell'endpoint**: Inserisci un nome a piacere (ad es. `Stream Toolkit`)
   - **URL dell'endpoint**: Incolla l'URL del Webhook copiato nel Passaggio 1

   ![Enter name and URL](./stripe-img/step2-5.png)

5. Clicca su **Aggiungi endpoint**

## Passaggio 3: Inserisci la chiave segreta di firma

1. Una volta creato il Webhook, la pagina mostrerá la **chiave segreta di firma** nel formato `whsec_...`
2. Copia questa chiave segreta
3. Torna alla sezione delle impostazioni di Stripe su Stream Toolkit
4. Incolla la chiave segreta nel campo **Chiave segreta di firma Webhook**
5. Clicca su **Salva**

Se lo stato della connessione diventa verde, la configurazione è andata a buon fine.

![Paste signing secret](./stripe-img/step3.png)

## Completato

Una volta completata la configurazione, quando gli spettatori pagheranno tramite il tuo **Payment Link** di Stripe, Stream Toolkit riceverà notifiche en tempo reale e mostrerà la donazione.

## Domande frequenti

**Q: Dove posso creare un Payment Link?**
Vai su Stripe Dashboard → **Payment Links** → **Crea Payment Link**, imposta l'importo e condividi il link con i tuoi spettatori.

**Q: Lo stato della connessione non è diventato verde?**
Assicurati che la Chiave segreta di firma Webhook sia stata incollata e salvata correttamente e che l'URL dell'endpoint nella dashboard di Stripe corrisponda esattamente a quello visualizzato nell'app.
