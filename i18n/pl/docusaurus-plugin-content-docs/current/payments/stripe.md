---
sidebar_position: 3
---

# Ustawienia Stripe

Stream Toolkit odbiera powiadomienia o płatnościach Stripe za pośrednictwem Webhooków. Konfiguracja składa się z dwóch części: uzyskania adresu URL Webhooka z app oraz ukończenia integracji w panelu Stripe.

## Krok 1: Uzyskaj adres URL Webhooka w Stream Toolkit

1. Otwórz Stream Toolkit
2. Kliknij **Ustawienia** w lewym dolnym menu → **Integracja platform wsparć** → **Stripe** (Kliknij, aby rozwinąć)
3. Zobaczysz **Webhook URL** w następującym formacie:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. Kliknij przycisk **Kopiuj** i zapisz ten adres URL do późniejszego użycia

![Get webhook URL](./stripe-img/step1.png)

## Krok 2: Dodaj Webhook w panelu Stripe

1. Przejdź do [Stripe Dashboard](https://dashboard.stripe.com) i zaloguj się na swoje konto
2. Kliknij **Deweloperzy** → **Webhooki** w lewym dolnym rogu

![Stripe webhook list page](./stripe-img/step2-1.png)

3. Kliknij **Dodaj punkt końcowy**

![Add destination](./stripe-img/step2-2.png)

4. Wypełnij poniższe informacje:
   - **Zdarzenia**: Wyszukaj i zaznacz `checkout.session.completed` (wymagane jest tylko to jedno)

   ![Select events](./stripe-img/step2-3.png)

   - **Typ punktu końcowego**: Wybierz **Punkt końcowy Webhooka**

   ![Select destination type](./stripe-img/step2-4.png)

   - **Nazwa punktu końcowego**: Wpisz cokolwiek (np. `Stream Toolkit`)
   - **Adres URL punktu końcowego**: Wklej adres URL Webhooka skopiowany w Kroku 1

   ![Enter name and URL](./stripe-img/step2-5.png)

5. Kliknij **Dodaj punkt końcowy**

## Krok 3: Wprowadź klucz podpisu

1. Po utworzeniu Webhooka na stronie pojawi się **klucz podpisu** w formacie `whsec_...`
2. Skopiuj ten klucz
3. Wróć do sekcji ustawień Stripe w Stream Toolkit
4. Wklej klucz w pole **Klucz podpisu Webhook**
5. Kliknij **Zapisz**

Gdy status połączenia zmieni się na zielony, oznacza to, że konfiguracja powiodła się.

![Paste signing secret](./stripe-img/step3.png)

## Gotowe

Po zakończeniu konfiguracji, gdy widzowie dokonają płatności za pośrednictwem Twojego Stripe **Payment Link**, Stream Toolkit natychmiast otrzyma powiadomienie i wyświetli donację.

## Najczęściej zadawane pytania

**Q: Gdzie mogę utworzyć Payment Link?**
Przejdź do Stripe Dashboard → **Payment Links** → **Utwórz Payment Link**, ustaw kwotę i udostępnij link widzom.

**Q: Status połączenia nie zmienił się na zielony?**
Upewnij się, że Klucz podpisu Webhook został poprawnie wklejony i zapisany, a adres URL punktu końcowego w panelu Stripe jest dokładnie taki sam, jak wyświetlany w app.
