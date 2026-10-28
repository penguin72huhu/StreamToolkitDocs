---
sidebar_position: 8.1
---

# Powiadomienia o nowych obserwujących

Wyświetla na streamie powiadomienie, gdy ktoś zacznie Cię obserwować na Twitchu lub zasubskrybuje Twój kanał YouTube.

## Adres źródła OBS

```
http://127.0.0.1:7272/fan-alert
```

Skopiuj adres URL z góry strony ustawień **Powiadomienia o nowych obserwujących** i dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source).

:::warning
Powiadomienia odtwarzają dźwięk. Zaznacz **Kontroluj dźwięk przez OBS** we właściwościach źródła przeglądarki, w przeciwnym razie dźwięk nie będzie słyszalny na streamie.
:::

Użyj przełącznika obok **Powiadomienia o nowych obserwujących** na lewym pasku bocznym, aby włączyć lub wyłączyć powiadomienia. Gdy jest wyłączony, nowi obserwujący nie są ani wyświetlani, ani zapisywani, a przyciski testowe również nie działają.

Gdy kilku obserwujących pojawi się w krótkim odstępie, powiadomienia trafiają do kolejki i są wyświetlane jedno po drugim. Ta nakładka ma własną kolejkę, więc nigdy nie czeka na [Powiadomienia o wsparciu](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Karta Ustawienia

### Integracja platformy

Zaznacz platformy, które mają wywoływać powiadomienie: **Twitch** i **YouTube** (obie domyślnie zaznaczone). Zielona kropka oznacza, że platforma jest połączona; w przeciwnym razie wiersz pokazuje **Brak autoryzacji**.

- **Twitch**: każda nowa obserwacja od razu wywołuje powiadomienie. Najpierw połącz Twitch: [Ustawienia Twitch](../platforms/twitch).
- **YouTube**: nowi subskrybenci. Najpierw zaloguj się przez Google: [Ustawienia YouTube](../platforms/youtube-settings).

Jak wykrywani są subskrybenci YouTube:

- YouTube nie udostępnia zdarzenia „nowy subskrybent” na żywo, więc aplikacja co 1,5 minuty pobiera z YouTube listę Twoich najnowszych subskrybentów.
- Sprawdzanie odbywa się tylko wtedy, gdy jesteś na żywo, a czat na żywo YouTube jest połączony z tą transmisją. Nie odbywa się w poczekalni ani po zakończeniu streamu.
- Osoby, które zasubskrybowały przed rozpoczęciem streamu (ponad około 5 minut przed rozpoczęciem sprawdzania), nie są ogłaszane.
- Jak mówi podpowiedź na stronie: **YouTube powiadamia tylko o widzach z publicznymi subskrypcjami, z opóźnieniem od minut do godzin.**

### Ustawienia

| Pole | Opis |
|-------|-------------|
| **Czas wyświetlania** | Jak długo każde powiadomienie pozostaje na ekranie, w sekundach (1–60). Domyślnie: 5. |
| **Ten sam widz najwyżej raz na 24 godziny** | Domyślnie wyłączone. Po włączeniu ponowna obserwacja tego samego widza w ciągu 24 godzin (na przykład po przestaniu obserwowania i ponownym obserwowaniu) nie jest wyświetlana ani zapisywana. |

### Testowanie powiadomień

Kliknij **Testowe powiadomienie (Twitch)** lub **Testowe powiadomienie (YouTube)**, aby wysłać przykładowe powiadomienie do OBS. Testowe powiadomienia nie są dodawane do historii.

Jeśli Powiadomienia o nowych obserwujących są wyłączone, test nie zostanie odtworzony, a strona pokaże **Najpierw włącz powiadomienia o nowych obserwujących w szybkich przełącznikach**.

## Karta Wygląd

### Podgląd

Podgląd korzysta z tej samej strony co źródło OBS. Użyj selektora koloru obok **Podgląd**, aby zmienić tło podglądu, i kliknij **▶ Powtórz animację**, aby ponownie odtworzyć animację powiadomienia.

### Jednolity styl / Osobno dla każdej platformy

- **Jednolity styl**: Twitch i YouTube używają tego samego stylu powiadomienia.
- **Osobno dla każdej platformy**: każda platforma ma własny styl. Wybierz **Twitch** lub **YouTube** przyciskami poniżej i edytuj ustawienia. Przy pierwszym przełączeniu platformy, których jeszcze nie dostosowano, kopiują bieżący jednolity styl, każda z własnym kolorem paska odliczania.

**Przywróć domyślne** przywraca domyślny styl dla edytowanego stylu.

### Obraz

- **Wybierz obraz**: wybierz obraz z menedżera zasobów. Bez obrazu wyświetlane jest emoji serca. **Wyczyść** usuwa obraz.
- **Rozmiar obrazu**: 1–400 px.
- **Pozycja obrazu**: **Do lewej**, **Do prawej**, **U góry** lub **U dołu**.

### Dźwięk

Wybierz wbudowany dźwięk: **Brak**, **Dzwoneczek** (domyślnie), **Moneta**, **Dzwon**, **Pyk**, **Fanfary**. Kliknij **▶**, aby posłuchać. Kliknij **Wybierz dźwięk**, aby użyć własnego pliku dźwiękowego z menedżera zasobów.

### Własny tekst

Napisz wiersz wyświetlany w powiadomieniu. Użyj `{name}` dla nazwy obserwującego i `{platform}` dla nazwy platformy. Pozostaw puste, aby użyć domyślnego tekstu: `Witaj, {name}! Dzięki za obserwowanie`

### Tekst i kolor

- **Tekst**: ustaw czcionkę, rozmiar i kolor dla **Własny tekst** i **Nazwa obserwującego**.
- **Kolor**: **Tło**, **Cień** i **Pasek odliczania**.

### Własny CSS

Rozwiń **Własny CSS**, aby edytować CSS edytowanego stylu (jednolitego lub wybranej platformy). **Przywróć domyślne** przywraca CSS z szablonu, a **Zarządzaj zasobami** otwiera menedżera zasobów. Można tu też zastosować motywy Steam Workshop. Gdy motyw jest zastosowany, CSS jest tylko do odczytu. Zobacz [Motywy](./themes).

## Karta Historia

Pokazuje ostatnich nowych obserwujących z obu platform, od najnowszych: platformę, nazwę i czas. Historia jest wyświetlana tylko w aplikacji, nigdy w nakładce.

- Przechowywanych jest maksymalnie 100 obserwujących, a wpisy starsze niż 30 dni są usuwane automatycznie.
- Kliknij **Wyczyść**, aby opróżnić listę.

:::info Wersja próbna
Własny CSS jest dostępny tylko w pełnej wersji, a powiadomienie wyświetla w OBS znak wodny. Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::

## Najczęściej zadawane pytania

**Q: Brak dźwięku na streamie?**
Sprawdź, czy opcja **Kontroluj dźwięk przez OBS** jest zaznaczona we właściwościach źródła przeglądarki i czy źródło nie jest wyciszone w mikserze OBS. Sprawdź też, czy **Dźwięk** nie jest ustawiony na **Brak**.

**Q: Subskrybent YouTube nie otrzymał powiadomienia.**
Zgłaszane są tylko publiczne subskrypcje, a YouTube może je zgłaszać z opóźnieniem od kilku minut do kilku godzin. Aplikacja sprawdza też tylko wtedy, gdy jesteś na żywo z połączonym czatem na żywo YouTube.

**Q: Dodałem źródło OBS z opóźnieniem. Czy wcześniejsze powiadomienia zostaną odtworzone ponownie?**
Nie. Nowo otwarte źródło pokazuje tylko powiadomienia, które nadejdą po jego połączeniu. Wcześniejsi obserwujący nadal są widoczni na karcie **Historia**.
