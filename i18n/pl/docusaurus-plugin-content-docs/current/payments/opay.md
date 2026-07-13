---
sidebar_position: 1
---

# Ustawienia O'Pay

Ten samouczek wyjaśnia, jak uzyskać **HashKey** i **HashIV** z O'Pay i wprowadzić je w Stream Toolkit.

## Krok 1: Zaloguj się do panelu sprzedawcy O'Pay

1. Przejdź na [oficjalną stronę O'Pay](https://www.opay.tw/) i zaloguj się
2. Po zalogowaniu kliknij w prawym górnym rogu, aby przejść do panelu sprzedawcy

   ![O'Pay merchant portal button at top right](./opay-img/step1.png)

:::note
Jeśli nie masz jeszcze konta O'Pay, musisz najpierw ukończyć proces zgłoszenia sklepu i weryfikacji tożsamości.
:::

## Stap 2: Systeemontwikkelingsbeheer

1. Znajdź **Zarządzanie rozwojem systemu** w menu po lewej stronie
2. Kliknij **Ustawienia integracji systemu**

![System interface setup in system development menu](./opay-img/step2.png)

## Krok 3: Wprowadź w Stream Toolkit

1. Otwórz Stream Toolkit
2. Kliknij **Ustawienia** w lewym dolnym menu
3. Znajdź **O'Pay** w **Integracja platform wsparć**
4. Wklej **ALL IN ONE HashKey integracji** oraz **ALL IN ONE HashIV integracji** z **Ustawienia integracji systemu** odpowiednio w pola **Hash Key** i **Hash IV**

   ![O'Pay interface info](./opay-img/step3-4.png)

5. Kliknij **Zapisz**

   ![O'Pay settings in Stream Toolkit](./opay-img/step3-5.png)

## Krok 4: Skonfiguruj adres URL powiadomień

1. Skopiuj **Adres powiadomień zaplecza** O'Pay

   ![Copy the notification URL](./opay-img/step4-1.png)

2. Wróć na [oficjalną stronę O'Pay](https://www.opay.tw/) i kliknij **Odbierz płatności** → **Ustawienia płatności streamera**

   ![Streamer payment settings in payment menu](./opay-img/step4-2.png)

3. Wklej **Adres powiadomień zaplecza** w pole **Adres URL powiadomienia o udanej wpłacie darowizny**

   ![Donation payment notification URL field](./opay-img/step4-3.png)

4. Kliknij **Zapisz ustawienia**

## Najczęściej zadawane pytania

**Q: Nie możesz znaleźć menu "Zarządzanie rozwojem systemu"?**
Oznacza to, że Twoje konto nie zostało jeszcze zatwierdzone lub odpowiednie funkcje płatności nie zostały włączone. Skontaktuj się z obsługą klienta O'Pay.

**Q: Czy HashKey może być publiczny?**
Nie. HashKey i HashIV to klucze prywatne; nie udostępniaj zrzutów ekranu ani nie publikuj ich w miejscach publicznych.
