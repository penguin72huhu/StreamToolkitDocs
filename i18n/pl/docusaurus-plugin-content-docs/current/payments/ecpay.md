---
sidebar_position: 2
---

# Ustawienia ECPay

Ten samouczek wyjaśnia, jak uzyskać **HashKey** i **HashIV** z ECPay i wprowadzić je w Stream Toolkit.

## Krok 1: Zaloguj się do panelu sprzedawcy ECPay

1. Przejdź na [oficjalną stronę ECPay](https://www.ecpay.com.tw/)
2. Kliknij w prawym górnym rogu **Logowanie sprzedawcy** → **Strefa sprzedawcy**

## Krok 2: Przejdź do Ustawienia integracji systemu

1. Kliknij **Ustawienia systemowe** w menu po lewej stronie
2. Wybierz **Ustawienia integracji systemu**

   ![System interface setup in system settings menu](./ecpay-img/step2-2.png)

3. Znajdź **Hash Key integracji** oraz **Hash IV integracji**

   ![HashKey and HashIV](./ecpay-img/step2-3.png)

## Krok 3: Wprowadź w Stream Toolkit

1. Otwórz Stream Toolkit
2. Kliknij **Ustawienia** w lewym dolnym menu
3. Znajdź **ECPay** w **Integracja platform wsparć**
4. Wklej **HashKey integracji** oraz **HashIV integracji** z **Ustawienia integracji systemu** odpowiednio w pola **Hash Key** i **Hash IV**
5. Kliknij **Zapisz**

![ECPay settings in Stream Toolkit](./ecpay-img/step3.png)

## Krok 4: Skonfiguruj adres URL powiadomień

1. Skopiuj **Adres powiadomień zaplecza** ECPay

   ![Copy the notification URL](./ecpay-img/step4-1.png)

2. W panelu sprzedawcy ECPay znajdź **Narzędzia płatnicze** → **Płatności streamera**

   ![Streamer payment in payment tools menu](./ecpay-img/step4-2.png)

3. Wklej **Adres powiadomień zaplecza** w pole **Adres URL powiadomienia o zakończeniu płatności**

   ![Payment completion notification URL field](./ecpay-img/step4-3.png)

4. Kliknij **Zapisz ustawienia**

## Najczęściej zadawane pytania

**Q: Nie widzisz "Ustawienia systemowe" po zalogowaniu?**
Twoje konto może nie zakończyć jeszcze procesu weryfikacji. Przejdź do "Zarządzanie danymi sprzedawcy", aby sprawdzić status.

**Q: Czy HashKey może być publiczny?**
Nie. HashKey i HashIV to klucze prywatne; nie udostępniaj zrzutów ekranu ani nie publikuj ich w miejscach publicznych.
