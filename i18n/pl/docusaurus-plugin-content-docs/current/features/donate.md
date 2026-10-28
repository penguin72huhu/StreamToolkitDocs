---
sidebar_position: 7
---

# Pasek wsparcia

Wyświetla na streamie pasek postępu w kierunku celu wsparcia. Wsparcia z wybranych platform są automatycznie doliczane do sumy.

## Adres źródła OBS

```
http://127.0.0.1:7272/donate
```

Skopiuj adres URL z góry strony ustawień **Pasek wsparcia** i dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source).

Użyj przełącznika obok **Pasek wsparcia** na lewym pasku bocznym, aby pokazać lub ukryć pasek w OBS. Gdy jest wyłączony, pasek jest ukryty.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Waluta

Pasek używa ustawienia **Waluta wsparć** ze strony **Ustawienia**. Wsparcia w innych walutach są przed doliczeniem przeliczane na tę walutę. Jeśli waluty wsparcia nie da się przeliczyć, nie zostaje ono doliczone do paska (Powiadomienia o wsparciu i Tablica wsparcia nadal pokazują je w oryginalnej walucie).

## Karta Ustawienia

### Integracja platformy

Zaznacz platformy, których wsparcia mają być liczone do paska:

- **Twitch** — Bits i subskrypcje
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Zielona kropka oznacza, że platforma jest połączona; w przeciwnym razie wiersz pokazuje **(niepołączono)**. Te pola wyboru decydują tylko o tym, co liczy pasek. Nie wpływają na Powiadomienia o wsparciu ani Tablicę wsparcia, które mają własne listy platform.

- **YouTube**: jeśli czat na żywo nie jest powiązany, wiersz pokazuje **Brak połączonego adresu czatu** z dwoma przyciskami: **Połącz automatycznie** (wymaga logowania Google) i **Wpisz ręcznie** (przenosi do pola adresu czatu w Ustawieniach). Zobacz [Ustawienia YouTube](../platforms/youtube-settings).
- **YouTube ⚙️**: wybierz, które **Liczone zdarzenia** są doliczane do paska: **Super Czat**, **Super Naklejka**, **Nowy członek**, **Odnowienie członkostwa**, **Podarowane członkostwo**, **Klejnoty**. **Klejnoty** wymagają logowania Google.
- Jeśli zaznaczono którekolwiek zdarzenie członkostwa, ale nie ustawiono cen członkostwa, pojawia się **⚠ Brak cen członkostwa**. Kliknij, aby przejść do Ustawień i wpisać ceny poziomów w **Ustawienia przeliczania** YouTube.
- Wartość Bits i subskrypcji Twitch ustawia się w Ustawienia → Twitch → **Ustawienia przeliczania**. Zobacz [Ustawienia Twitch](../platforms/twitch).
- Aby połączyć PayPal, Stripe, O'Pay lub ECPay, zobacz [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) i [ECPay](../payments/ecpay).

### Bieżący postęp

Pokazuje bieżącą sumę, cel i procent.

| Pole | Opis |
|-------|-------------|
| **Tytuł** | Opcjonalny. Wyświetlany nad paskiem. |
| **Kwota docelowa** | Kwota docelowa w Twojej walucie wsparć. |
| **Dodaj ręcznie** | Wpisz kwotę i kliknij **Dodaj** (lub naciśnij Enter), aby doliczyć ją do sumy. |
| **Wyzeruj** | Przywraca bieżącą sumę do zera. Najpierw pojawia się potwierdzenie. Tej operacji nie można cofnąć. |

## Karta Wygląd

### Podgląd

Podgląd pokazuje pasek z przykładowymi kwotami. Użyj selektora koloru obok **Podgląd**, aby zmienić tło podglądu. Zaznacz **Podgląd osiągnięcia**, aby zobaczyć pasek w stanie ukończenia.

### Czcionka i kolor

Kliknij **Przywróć domyślne**, aby przywrócić domyślny wygląd.

- **Czcionka**: ustaw czcionkę, kolor i rozmiar (8–72 px) dla **Tytuł**, **Kwota** i **Procent**.
- **Kolor**: ustaw **Tło**, **Pasek celu** (kolor wypełnienia) i **Pasek celu osiągnięty** (kolor wypełnienia po osiągnięciu celu).

### Własny CSS

Rozwiń **Własny CSS**, aby edytować CSS paska. **Przywróć domyślne** przywraca domyślny CSS, a **Zarządzaj zasobami** otwiera menedżera zasobów dla obrazów, których chcesz użyć w CSS. Można tu też zastosować motywy Steam Workshop. Gdy motyw jest zastosowany, CSS jest tylko do odczytu, dopóki go nie przywrócisz. Zobacz [Motywy](./themes).

:::info Wersja próbna
Własny CSS jest dostępny tylko w pełnej wersji. Prawdziwych bramek płatności (PayPal / Stripe / O'Pay / ECPay) oraz zdarzeń członkostwa YouTube i Klejnotów nie można używać w wersji próbnej, a nakładka wyświetla znak wodny. Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::

## Najczęściej zadawane pytania

**Q: Suma wzrosła po wysłaniu testowego powiadomienia.**
**Test powiadomienia** na stronie Ustawienia jest liczony jako prawdziwe wsparcie, więc zostaje doliczony do paska (jeśli ta platforma jest zaznaczona). Po zakończeniu testów kliknij **Wyzeruj**, aby przywrócić sumę do zera.
