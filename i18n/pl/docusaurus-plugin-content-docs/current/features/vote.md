---
sidebar_position: 15
---

# Ankiety

Przeprowadź ankietę na streamie. Widzowie głosują, wpisując numer opcji na czacie Twitch lub YouTube, a wyniki aktualizują się na żywo w nakładce OBS.

## Adres źródła OBS

```
http://127.0.0.1:7272/vote
```

Kliknij **Kopiuj** obok **Adres źródła OBS** u góry strony, a następnie dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source). Ankiety nie odtwarzają dźwięku, więc nie musisz włączać opcji „Kontroluj dźwięk przez OBS”.

:::tip
Włącz także przełącznik obok **Ankiety** na lewym pasku bocznym (**Włącz wyświetlanie w OBS**). Gdy jest wyłączony, nakładka pozostaje ukryta.
:::

Strona ma trzy karty: **Ustawienia**, **Wygląd** i **Historia**.

## Rozpoczynanie ankiety (karta Ustawienia)

### Platforma głosowania

Kliknij **Twitch** lub **YouTube**, aby wybrać, czat której platformy może głosować. Możesz wybrać obie. Niepołączona platforma pokazuje **(niepołączono)** w przypadku Twitcha lub **Brak połączonego adresu czatu** w przypadku YouTube. Najpierw ją połącz:

- [Ustawienia Twitch](../platforms/twitch)
- [Ustawienia YouTube](../platforms/youtube-settings)

### Tytuł głosowania

Opcjonalny. Na przykład: „W którą grę gramy dziś wieczorem?”

### Opcje głosowania (2–10 pozycji)

- Wpisz co najmniej 2 opcje. Możesz mieć ich maksymalnie 10
- **+ Dodaj opcję** dodaje wiersz, a **×** usuwa wiersz
- **Zastosuj historię** pozwala wybrać jedną z 15 ostatnich ankiet i wypełnić jej tytuł oraz opcje

Podczas edycji nakładka OBS pokazuje podgląd tytułu i opcji.

### Czas głosowania

Długość ankiety w sekundach. Domyślnie 60, minimum 10.

### Start / Stop

- **Rozpocznij głosowanie**: wymaga co najmniej 2 wypełnionych opcji i co najmniej jednej wybranej, połączonej platformy
- **Zatrzymaj głosowanie**: kończy ankietę wcześniej. W przeciwnym razie kończy się ona po upływie czasu

W trakcie ankiety nie można zmieniać platform, tytułu, opcji ani czasu trwania.

{/* TODO: 截圖 — 投票設定分頁 */}

## Jak głosują widzowie

W trakcie ankiety nakładka pokazuje „Wpisz numer opcji na czacie, aby zagłosować (np. 1)”.

- Cała wiadomość musi być numerem opcji, np. `1` lub `1.`. Spacje są ignorowane. Wiadomość zawierająca jakikolwiek inny tekst nie jest liczona
- Każdy widz ma jeden głos. Jeśli wyśle inny numer, jego głos przechodzi na nową opcję, a liczy się ostatni głos oddany przed upływem czasu

## Wyniki na żywo

W trakcie ankiety pod ustawieniami pojawiają się **Wyniki na żywo** z pozostałym czasem, liczbą głosów i procentem dla każdej opcji oraz łączną liczbą głosów. Po zakończeniu ankiety zmieniają się w **Wyniki końcowe**. Kliknij **Szczegóły**, aby zobaczyć, kto głosował na każdą opcję, z podziałem na Twitch i YouTube.

## Wygląd

Karta **Wygląd** ma u góry **Podgląd**. Selektor koloru obok zmienia tylko tło podglądu, a nie nakładkę OBS.

- **Czcionka**: ustaw czcionkę, kolor i **Rozmiar** (px) dla **Tytuł**, **Wskazówka**, **Opcja**, **Odliczane sekundy** i **Liczba głosów**
- **Kolor paska postępu**: do 5 kolorów, używanych kolejno dla pasków opcji. Każdy może być **Jednolity** lub **Gradient**. Gradienty mają też **Kąt**
- **Kolor tła**: tło karty ankiety
- **Przywróć domyślne**: przywraca domyślny wygląd. Jeśli zastosowano motyw, przywraca wygląd motywu

W sekcji **Własny CSS** możesz pisać własne style. Aby udostępniać lub pobierać wygląd, zobacz [Motywy](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Historia

Karta **Historia** pokazuje tytuł, czas, liczbę opcji i łączną liczbę głosów każdej ankiety. Rozwiń ankietę, aby zobaczyć jej wyniki, liczbę głosów na każdej platformie i **Szczegóły**. Przechowywana jest tylko historia ankiet z ostatnich 30 dni. Aby usunąć wpis, kliknij 🗑, a następnie **Potwierdź usunięcie**.

:::info Ograniczenia wersji próbnej
- **Własny CSS** jest dostępny tylko w pełnej wersji
- Nakładka OBS wyświetla znak wodny

Szczegóły znajdziesz w [Porównaniu wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
