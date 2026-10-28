---
sidebar_position: 19
---

# Ustawienia

Kliknij **⚙️ Ustawienia** na dole lewego menu. Ta strona zawiera opcje dotyczące całej aplikacji, połączenia platform oraz bramki płatności dla wsparć.

## Ogólne

| Opcja | Działanie | Domyślnie |
|------|------|------|
| **Motyw** | Tryb wyświetlania interfejsu: **Ciemnoszary** lub **Jasny** | Ciemnoszary |
| **Język** | Język interfejsu; zmienia się natychmiast | — |
| **Minimalizuj do zasobnika po kliknięciu X** | Zamknięcie okna minimalizuje je do zasobnika zamiast zamykać program | Włączone |
| **Waluta wsparć** | Globalna jednostka waluty, używana przez pasek wsparcia, powiadomienia i wszystkie inne wyświetlane kwoty | Ustawiana przy pierwszym uruchomieniu na podstawie języka systemu (np. chiński tradycyjny (Tajwan) → TWD, japoński → JPY, pozostałe → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Połączenia platform

### Twitch

Kliknij **Połącz konto** i autoryzuj w przeglądarce. Po połączeniu wyświetla się **Połączono @twoja-nazwa** oraz przycisk **Rozłącz**. Pełna instrukcja: [Ustawienia Twitch](../platforms/twitch).

Po połączeniu **▸ Ustawienia przeliczania** określają, ile warte są Bits i subskrypcje w Twojej walucie wsparć:

- **Podział przychodów**: **50 / 50** lub **70 / 30**
- **Za 100 Bits**, **Subskrypcja Tier 1**, **Subskrypcja Tier 2**, **Subskrypcja Tier 3**
- **Zapisz** zachowuje wartości dla bieżącej waluty; **Przywróć domyślne** wpisuje wbudowane wartości dla tej waluty

### YouTube

1. Kliknij **Połącz konto** i zaloguj się przez Google. Instrukcja krok po kroku: [Ustawienia YouTube](../platforms/youtube-settings)
2. Po połączeniu wyświetla się **Połączono: nazwa kanału**. **Rozłącz** odłącza konto
3. Wybierz sposób wyszukiwania czatu na żywo:
   - **Wykryj bieżącą transmisję**: wymaga logowania Google. Kliknij **Połącz**, aby wyszukać na swoim kanale bieżącą lub nadchodzącą transmisję. Jeśli jest ich kilka, wybierz jedną z listy
   - **Podaj adres URL ręcznie**: wklej **Adres czatu**
4. **Pytaj o adres czatu przy każdym uruchomieniu programu**: opcjonalnie

**▸ Ustawienia przeliczania** w sekcji YouTube określają wartość członkostw (YouTube nie przesyła kwoty dla członkostw):

- **Ustawienia poziomów wspierania**: dodaj nazwę każdego poziomu i jego wartość. Nazwy poziomów muszą dokładnie odpowiadać ustawieniom Twojego kanału YouTube
- **Poziomy spoza listy**: wartość używana dla poziomu, którego nie ma w tabeli
- **Poziom podarowanych członkostw**: jako który poziom liczone są podarowane członkostwa
- Poziomy, które pojawiły się w zdarzeniach, ale brakuje ich w tabeli, są wyświetlane z przyciskami **Dodaj do tabeli** / **Ignoruj**

## Integracja platform wsparć

Kliknij bramkę płatności, aby ją rozwinąć. Każda ma link **Poradnik tutaj** do instrukcji konfiguracji:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Test powiadomienia

Przycisk **Test powiadomienia** obok nagłówka otwiera okno testowe:

- Wypełnij **Nazwa testowa**, **Wiadomość testowa**, **Kwota testowa**, wybierz **Platforma testowa**, a następnie kliknij **Wyślij powiadomienie testowe**
- **Test Super Chat YouTube**: wpisz **Ciąg kwoty**, np. `$5.00` lub `NT$150`, i kliknij **Wyślij testowy Super Chat**, aby przetestować odczytywanie kwoty i przeliczanie walut

## O programie

Kliknij przycisk **i** obok „Stream Toolkit” u góry lewego menu, aby zobaczyć wersję, autora oraz link do oficjalnej dokumentacji.

:::info Ograniczenia wersji próbnej
- **Integracja platform wsparć** jest dostępna tylko w pełnej wersji
- **Ustawienia przeliczania** członkostw YouTube są dostępne tylko w pełnej wersji

Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
