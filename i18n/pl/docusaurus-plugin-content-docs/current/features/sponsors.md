---
sidebar_position: 9
---

# Tablica wsparcia

Wyświetla na streamie listę ostatnich wsparć: ikonę platformy, nazwę wspierającego, kwotę i wiadomość.

## Adres źródła OBS

```
http://127.0.0.1:7272/sponsors
```

Skopiuj adres URL z góry strony ustawień **Tablica wsparcia** i dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source).

Użyj przełącznika obok **Tablica wsparcia** na lewym pasku bocznym, aby pokazać lub ukryć tablicę w OBS. Gdy jest wyłączony, tablica zanika. Wsparcia są nadal zapisywane, gdy przełącznik jest wyłączony.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Karta Ustawienia

### Integracja platformy

Zaznacz platformy, których wsparcia mają być zapisywane: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Zielona kropka oznacza, że platforma jest połączona; w przeciwnym razie wiersz pokazuje **(niepołączono)**. Te pola wyboru dotyczą tylko tablicy, a nie Paska wsparcia ani Powiadomień o wsparciu.

**Twitch ⚙️** (wyświetlane, gdy Twitch jest połączony i zaznaczony):

1. Wybierz **Licz Bits i subskrypcje**, **Licz tylko Bits** lub **Licz tylko subskrypcje**
2. **Licz ponowne subskrypcje**: czy zapisywać ponowne subskrypcje (wyświetlane, gdy liczone są subskrypcje)
3. **Poniżej [N] Bits nie jest liczone**: zaznacz i wpisz minimum, aby mniejsze cheery nie były zapisywane (wyświetlane, gdy liczone są Bits)
4. Kliknij **Zapisz**

**YouTube ⚙️**:

- **Pokazuj nazwy widzów zamiast @identyfikatorów**: dostępne dopiero po zalogowaniu przez Google.
- **Liczone zdarzenia**: **Super Czat**, **Super Naklejka**, **Nowy członek**, **Odnowienie członkostwa**, **Podarowane członkostwo**, **Klejnoty**. **Klejnoty** wymagają logowania Google. Prezenty w Klejnotach są wyświetlane jako ikona klejnotu z liczbą klejnotów zamiast kwoty pieniężnej.

Jeśli czat na żywo YouTube nie jest powiązany, wiersz pokazuje **Brak połączonego adresu czatu** z przyciskami **Połącz automatycznie** (wymaga logowania Google) i **Wpisz ręcznie** (przenosi do pola adresu czatu w Ustawieniach). Jeśli zaznaczono zdarzenie członkostwa, ale nie ustawiono cen członkostwa, kliknij **⚠ Brak cen członkostwa**, aby je ustawić. Zobacz [Ustawienia YouTube](../platforms/youtube-settings).

Aby połączyć PayPal, Stripe, O'Pay lub ECPay, zobacz [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) i [ECPay](../payments/ecpay).

### Ustawienia

| Pole | Opis |
|-------|-------------|
| **Automatycznie przelicz na własną walutę** | Domyślnie włączone. Pokazuje kwoty przeliczone na **Waluta wsparć** ustawioną na stronie Ustawienia. |
| **Maks. wyświetlanych** | Ile wpisów przechowywać (1–100). Domyślnie: 20. Gdy nadejdzie nowe wsparcie ponad ten limit, najstarszy wpis zostanie usunięty. |

## Karta Wygląd

### Podgląd

Użyj selektora koloru obok **Podgląd**, aby zmienić tło podglądu. Kliknij **Testuj animację dodania**, aby odtworzyć animację pojawiania się z przykładowym wpisem. Przykład nie jest zapisywany w historii.

Kliknij **Przywróć domyślne**, aby przywrócić domyślny wygląd.

### Ustawienia wyświetlania

- **Pokaż ikonę platformy**: pokazuje ikonę platformy przy każdym wpisie.
- **Kierunek pojawiania się**: **Z góry na dół** (domyślnie), **Z dołu do góry**, **Z lewej do prawej** lub **Z prawej do lewej**.

### Czcionka

Ustaw czcionkę, kolor i rozmiar (8–72 px) dla **Tytuł** (nazwa wspierającego), **Tekst** (wiadomość) i **Kwota**.

### Kolor tła

- **Domyślne**: kolor tła każdego wpisu.
- **+ Dodaj zakres**: dodaj kolor z zakresem **Kwota** (**Minimum** ~ **Maksimum**). Wpisy, których kwota mieści się w zakresie, używają zamiast tego tego koloru. Pozostaw Minimum lub Maksimum puste, aby nie ograniczać zakresu z danej strony. Kliknij **✕**, aby usunąć zakres.

Gdy włączona jest opcja **Automatycznie przelicz na własną walutę**, zakres jest porównywany z przeliczoną kwotą.

### Własny CSS

Rozwiń **Własny CSS**, aby edytować CSS tablicy. **Przywróć domyślne** przywraca domyślny CSS, a **Zarządzaj zasobami** otwiera menedżera zasobów. Można tu też zastosować motywy Steam Workshop. Gdy motyw jest zastosowany, CSS jest tylko do odczytu. Zobacz [Motywy](./themes).

## Karta Historia

### Dodaj ręcznie (testowo)

Wybierz platformę, wpisz **Nazwa**, **Kwota** i opcjonalnie **Wiadomość (opcjonalnie)**, a następnie kliknij **Dodaj**. Wpis zostanie dodany tylko wtedy, gdy ta platforma jest zaznaczona w **Integracja platformy**. Kwota jest traktowana jako kwota w Twojej walucie wsparć.

### Historia

Pokazuje zapisane wpisy wraz z ich liczbą.

- Kliknij **🗑**, a następnie **Potwierdź usunięcie**, aby usunąć jeden wpis.
- Kliknij **Wyczyść**, aby usunąć wszystkie wpisy. Najpierw pojawia się potwierdzenie. Tej operacji nie można cofnąć.

:::info Wersja próbna
Własny CSS jest dostępny tylko w pełnej wersji. Prawdziwych bramek płatności (PayPal / Stripe / O'Pay / ECPay) oraz zdarzeń członkostwa YouTube i Klejnotów nie można używać w wersji próbnej, a tablica wyświetla w OBS znak wodny. Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::

## Najczęściej zadawane pytania

**Q: Testowe powiadomienia pojawiają się na tablicy.**
**Test powiadomienia** na stronie Ustawienia jest obsługiwany jak prawdziwe wsparcie, więc jest tu również zapisywany, jeśli ta platforma jest zaznaczona. Usuń go na karcie **Historia**.
