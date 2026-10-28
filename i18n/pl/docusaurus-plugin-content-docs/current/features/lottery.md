---
sidebar_position: 16
---

# Losowania

Widzowie dołączają, wpisując słowo kluczowe na czacie Twitch lub YouTube. Po zamknięciu zapisów losujesz zwycięzców, a animacja losowania jest odtwarzana w nakładce OBS.

## Adres źródła OBS

```
http://127.0.0.1:7272/lottery
```

Kliknij **Kopiuj** obok **Adres źródła OBS** u góry strony, a następnie dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source). Losowania nie odtwarzają dźwięku, więc nie musisz włączać opcji „Kontroluj dźwięk przez OBS”.

:::tip
Włącz także przełącznik obok **Losowania** na lewym pasku bocznym (**Włącz wyświetlanie w OBS**). Gdy jest wyłączony, nakładka pozostaje ukryta.
:::

Strona ma dwie karty: **Ustawienia** i **Historia**.

## Ustawienia

### Platforma głosowania

Kliknij **Twitch** lub **YouTube**, aby wybrać, czat której platformy może brać udział. Możesz wybrać obie. Niepołączona platforma pokazuje **(niepołączono)** w przypadku Twitcha lub **Brak połączonego adresu czatu** w przypadku YouTube. Aby połączyć, zobacz [Ustawienia Twitch](../platforms/twitch) i [Ustawienia YouTube](../platforms/youtube-settings).

### Słowo kluczowe losowania

Wiadomość na czacie zawierająca to słowo kluczowe zapisuje widza. Każdy widz może zapisać się tylko raz na losowanie. Przycisku **Rozpocznij zbieranie** nie można kliknąć, gdy słowo kluczowe jest puste.

### Czas losowania

Jak długo trwają zapisy, w sekundach. Domyślnie 300, zakres 10–3600.

### Maks. uczestników

Zapisy kończą się wcześniej, gdy dołączy tyle osób. Wpisz `0`, aby nie ustawiać limitu.

### Usuń opcję po wylosowaniu

Gdy ta opcja jest włączona, zwycięzca jest usuwany z listy uczestników przed kolejnym losowaniem, więc nie może zostać wylosowany ponownie w tym losowaniu.

### Tekst podpowiedzi

Podpowiedź wyświetlana w nakładce podczas zapisów, która informuje widzów o słowie kluczowym i liczbie uczestników. Ustaw jej czcionkę, kolor i rozmiar (px).

### Animacja losowania

- **Szybka rotacja ID** (domyślnie): nazwy uczestników unoszą się na ekranie w trakcie zapisów, a następnie szybko się zmieniają podczas losowania
  - **Czcionka ekranu zbierania**: czcionka, rozmiar czcionki i kolory etykiet z nazwami (do 5)
  - **Czcionka animacji losowania**: czcionka i rozmiar czcionki nazw zmieniających się podczas losowania
  - **Przywróć domyślne**: przywraca te ustawienia
- **Animacja koła**: uczestnicy są umieszczani na kole, które kręci się, aby wybrać zwycięzcę. Wybierz schemat kolorów: **Minimalistyczny** lub własny motyw utworzony w [Kole fortuny](./turntable)

W trakcie zapisów nie można zmieniać platform, słowa kluczowego, czasu, maksymalnej liczby uczestników, opcji Usuń opcję po wylosowaniu ani typu animacji.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Przeprowadzanie losowania

1. Kliknij **Rozpocznij zbieranie**. Panel pokazuje **Zbieranie…**, pozostały czas i liczbę uczestników
2. W trakcie zapisów możesz wpisać nazwę w polu **Wpisz ręcznie nazwę uczestnika** i kliknąć **Dodaj** (lub nacisnąć Enter). Dla nazwy, która już jest na liście, wyświetla się „To ID jest już na liście”
3. Aby zamknąć zapisy przed upływem czasu, kliknij **Zakończ zbieranie**. Zapisy zamykają się też po upływie czasu lub po osiągnięciu wartości **Maks. uczestników**. Panel pokazuje wtedy **Czas minął!**
4. Kliknij **Rozpocznij losowanie**. Nakładka odtwarza animację, a po jej zakończeniu zwycięzca pojawia się w sekcji **Zwycięzca**
5. Aby wylosować kolejnego zwycięzcę, kliknij **Losuj ponownie**

Kliknij **Anuluj losowanie** na dowolnym etapie, aby wyczyścić wszystkich uczestników i zwycięzców; nakładka wraca wtedy do stanu oczekiwania.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Historia

Karta **Historia** przechowuje jeden wpis na losowanie z czasem, słowem kluczowym i liczbą uczestników. Rozwiń wpis, aby zobaczyć zwycięzców i pełną listę uczestników. Przechowywana jest tylko historia losowań z ostatnich 30 dni. Aby usunąć wpis, kliknij 🗑, a następnie **Potwierdź usunięcie**.

:::info Ograniczenia wersji próbnej
Nakładka OBS wyświetla znak wodny. Szczegóły znajdziesz w [Porównaniu wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
