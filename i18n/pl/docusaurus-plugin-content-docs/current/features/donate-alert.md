---
sidebar_position: 8
---

# Powiadomienia o wsparciu

Gdy ktoś wesprze kanał, wyświetla powiadomienie z obrazem, dźwiękiem, nazwą wspierającego, kwotą i wiadomością.

## Adres źródła OBS

```
http://127.0.0.1:7272/donate-alert
```

Skopiuj adres URL z góry strony ustawień **Powiadomienia o wsparciu** i dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source).

:::warning
Powiadomienia odtwarzają dźwięk. Zaznacz **Kontroluj dźwięk przez OBS** we właściwościach źródła przeglądarki, w przeciwnym razie dźwięk nie będzie słyszalny na streamie.
:::

Użyj przełącznika obok **Powiadomienia o wsparciu** na lewym pasku bocznym, aby włączyć lub wyłączyć powiadomienia. Gdy jest wyłączony, żadne powiadomienia nie są wyświetlane (łącznie z testowymi), ale wsparcia są nadal zapisywane na [Tablicy wsparcia](./sponsors).

Gdy kilka wsparć nadejdzie w krótkim odstępie, powiadomienia trafiają do kolejki i są wyświetlane jedno po drugim.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Karta Ustawienia

### Integracja platformy

Zaznacz platformy, które mają wywoływać powiadomienie: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Zielona kropka oznacza, że platforma jest połączona; w przeciwnym razie wiersz pokazuje **(niepołączono)**. Te pola wyboru dotyczą tylko powiadomień, a nie Paska wsparcia ani Tablicy wsparcia.

**Twitch ⚙️** (wyświetlane, gdy Twitch jest połączony i zaznaczony):

1. Wybierz **Licz Bits i subskrypcje**, **Licz tylko Bits** lub **Licz tylko subskrypcje**
2. **Licz ponowne subskrypcje**: czy ponowne subskrypcje wywołują powiadomienie (wyświetlane, gdy liczone są subskrypcje)
3. **Poniżej [N] Bits nie jest liczone**: zaznacz i wpisz minimum, aby mniejsze cheery nie wywoływały powiadomienia (wyświetlane, gdy liczone są Bits)
4. Kliknij **Zapisz**

**YouTube ⚙️**:

- **Pokazuj nazwy widzów zamiast @identyfikatorów**: dostępne dopiero po zalogowaniu przez Google.
- **Liczone zdarzenia**: **Super Czat**, **Super Naklejka**, **Nowy członek**, **Odnowienie członkostwa**, **Podarowane członkostwo**, **Klejnoty**. **Klejnoty** wymagają logowania Google.

Jeśli czat na żywo YouTube nie jest powiązany, wiersz pokazuje **Brak połączonego adresu czatu** z przyciskami **Połącz automatycznie** (wymaga logowania Google) i **Wpisz ręcznie** (przenosi do pola adresu czatu w Ustawieniach). Jeśli zaznaczono zdarzenie członkostwa, ale nie ustawiono cen członkostwa, kliknij **⚠ Brak cen członkostwa**, aby je ustawić. Zobacz [Ustawienia YouTube](../platforms/youtube-settings).

Aby połączyć PayPal, Stripe, O'Pay lub ECPay, zobacz [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) i [ECPay](../payments/ecpay).

### Ustawienia

| Pole | Opis |
|-------|-------------|
| **Automatycznie przelicz na własną walutę** | Domyślnie włączone. Pokazuje kwotę przeliczoną na **Waluta wsparć** ustawioną na stronie Ustawienia. |
| **Czas wyświetlania** | Jak długo każde powiadomienie pozostaje na ekranie, w sekundach. Domyślnie: 6. |

## Karta Wygląd

### Podgląd

Podgląd korzysta z tej samej strony co źródło OBS. Użyj selektora koloru obok **Podgląd**, aby zmienić tło podglądu, i kliknij **▶ Powtórz animację**, aby ponownie odtworzyć animację powiadomienia.

### Jednolity styl / Osobno dla każdej platformy

- **Jednolity styl**: wszystkie platformy używają tego samego stylu powiadomienia.
- **Osobno dla każdej platformy**: każda platforma ma własny styl. Wybierz platformę przyciskami poniżej (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) i edytuj jej ustawienia. Przy pierwszym przełączeniu platformy, których jeszcze nie dostosowano, kopiują bieżący jednolity styl, każda z własnym kolorem paska odliczania.

**Przywróć domyślne** przywraca domyślny styl dla edytowanego stylu.

### Obraz

- **Wybierz obraz**: wybierz obraz z menedżera zasobów. Bez obrazu wyświetlane jest emoji serca. **Wyczyść** usuwa obraz.
- **Rozmiar obrazu**: 1–400 px.
- **Pozycja obrazu**: **Do lewej**, **Do prawej**, **U góry** lub **U dołu**.

### Dźwięk

Wybierz wbudowany dźwięk: **Brak**, **Dzwoneczek** (domyślnie), **Moneta**, **Dzwon**, **Pyk**, **Fanfary**. Kliknij **▶**, aby posłuchać. Kliknij **Wybierz dźwięk**, aby użyć własnego pliku dźwiękowego z menedżera zasobów.

### Wyświetlanie tekstu

- **Domyślne**: kwota, nazwa wspierającego i wiadomość są wyświetlane w osobnych wierszach.
- **Własny tekst**: napisz własny wiersz. Użyj `{name}` dla nazwy wspierającego i `{amount}` dla kwoty, np. `Dzięki {name} za wsparcie {amount}!`

### Tekst i kolor

- **Tekst**: ustaw czcionkę, rozmiar i kolor dla **Kwota**, **Nazwa wspierającego** i **Wiadomość** (oraz **Własny tekst** w trybie Własny tekst).
- **Kolor**: **Tło**, **Cień** i **Pasek odliczania**.

### Własny CSS

Rozwiń **Własny CSS**, aby edytować CSS edytowanego stylu (jednolitego lub wybranej platformy). **Przywróć domyślne** przywraca CSS z szablonu, a **Zarządzaj zasobami** otwiera menedżera zasobów. Można tu też zastosować motywy Steam Workshop. Gdy motyw jest zastosowany, CSS jest tylko do odczytu. Zobacz [Motywy](./themes).

## Testowanie powiadomień

Na stronie **Ustawienia** kliknij **Test powiadomienia** obok **Integracja platform wsparć**:

1. Wypełnij **Nazwa testowa**, **Wiadomość testowa** i **Kwota testowa**, wybierz **Platforma testowa**
2. Kliknij **Wyślij powiadomienie testowe**

Sekcja **Test Super Chat YouTube** pozwala wpisać surowy **Ciąg kwoty** (np. `$5.00`, `¥500`, `NT$150`) i kliknąć **Wyślij testowy Super Chat**, aby przetestować odczytywanie kwoty i przeliczanie walut.

:::note
Testowe powiadomienie jest obsługiwane jak prawdziwe wsparcie: jest też doliczane do [Paska wsparcia](./donate) i [Tablicy wsparcia](./sponsors), jeśli te platformy są tam zaznaczone.
:::

:::info Wersja próbna
Własny CSS jest dostępny tylko w pełnej wersji. Prawdziwych bramek płatności (PayPal / Stripe / O'Pay / ECPay) oraz zdarzeń członkostwa YouTube i Klejnotów nie można używać w wersji próbnej, a powiadomienie wyświetla w OBS znak wodny. Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::

## Najczęściej zadawane pytania

**Q: Brak dźwięku na streamie?**
Sprawdź, czy opcja **Kontroluj dźwięk przez OBS** jest zaznaczona we właściwościach źródła przeglądarki i czy źródło nie jest wyciszone w mikserze OBS. Sprawdź też, czy **Dźwięk** nie jest ustawiony na **Brak**.

**Q: Dodałem źródło OBS z opóźnieniem. Czy wcześniejsze powiadomienia zostaną odtworzone ponownie?**
Nie. Nowo otwarte źródło pokazuje tylko powiadomienia, które nadejdą po jego połączeniu.
