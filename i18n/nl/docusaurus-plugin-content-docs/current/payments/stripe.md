---
sidebar_position: 3
---

# Stripe-instellingen

Stream Toolkit ontvangt Stripe-betalingsmeldingen via Webhooks. De installatie bestaat uit twee delen: de Webhook-URL ophalen uit de app en de koppeling voltooien in het Stripe-dashboard.

## Stap 1: De Webhook-URL ophalen in Stream Toolkit

1. Open Stream Toolkit
2. Klik op **Instellingen** in het menu linksonder → **Donatieplatformkoppeling** → **Stripe** (Klik om uit te vouwen)
3. U ziet de **Webhook URL**, met de volgende indeling:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. Klik op de knop **Kopiëren** und bewaar deze URL voor later gebruik

![Get webhook URL](./stripe-img/step1.png)

## Stap 2: Een Webhook toevoegen in het Stripe-dashboard

1. Ga naar [Stripe Dashboard](https://dashboard.stripe.com) en log in op uw account
2. Klik linksonder na **Ontwikkelaars** → **Webhooks**

![Stripe webhook list page](./stripe-img/step2-1.png)

3. Klik op **Eindpunt toevoegen**

![Add destination](./stripe-img/step2-2.png)

4. Vul de volgende informatie in:
   - **Gebeurtenissen**: Zoek naar `checkout.session.completed` en vink dit aan (alleen deze is nodig)

   ![Select events](./stripe-img/step2-3.png)

   - **Eindpunkttype**: Selecteer **Webhook-eindpunt**

   ![Select destination type](./stripe-img/step2-4.png)

   - **Eindpuntnaam**: Vul een naam naar keuze in (bijv. `Stream Toolkit`)
   - **Eindpunt-URL**: Plak de Webhook-URL die u in Stap 1 hebt gekopieerd

   ![Enter name and URL](./stripe-img/step2-5.png)

5. Klik op **Eindpunt toevoegen**

## Stap 3: De ondertekeningssleutel invoeren

1. Zodra de Webhook is aangemaakt, toont de pagina de **ondertekeningssleutel** met de indeling `whsec_...`
2. Kopieer deze sleutel
3. Ga terug naar het Stripe-instellingengedeelte in Stream Toolkit
4. Plak de sleutel in het veld **Webhook-ondertekeningssleutel**
5. Klik op **Opslaan**

Als de verbindingsstatus groen wordt, is de instelling geslaagd.

![Paste signing secret](./stripe-img/step3.png)

## Voltooid

Zodra de instelling is voltooid en kijkers betalen via uw Stripe **Payment Link**, ontvangt Stream Toolkit direct meldingen en wordt de donatie weergegeven.

## Veelgestelde vragen

**Q: Waar kan ik een Payment Link aanmaken?**
Ga naar Stripe Dashboard → **Payment Links** → **Payment Link aanmaken**, stel het bedrag in en deel de link met uw kijkers.

**Q: Verbindingsstatus niet groen geworden?**
Zorg ervoor dat de Webhook-ondertekeningssleutel correct is geplakt en opgeslagen, en dat de eindpunt-URL in het Stripe-dashboard exact overeenkomt met de URL die in de app wordt weergegeven.
