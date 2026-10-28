---
sidebar_position: 18
---

# Bot czatu

Automatycznie publikuje wiadomości na Twoim czacie: wiadomości cykliczne w ustalonych odstępach oraz odpowiedzi na słowa kluczowe, gdy widz wpisze komendę. Bot pisze z Twojego własnego konta.

Bot czatu nie ma nakładki OBS, więc nie trzeba dodawać żadnego adresu URL.

:::tip
Włącz przełącznik obok **Bot czatu** w lewym menu. Gdy jest wyłączony, bot nic nie wysyła.
:::

Strona ma trzy karty: **Ustawienia**, **Wiadomości cykliczne** i **Odpowiedzi na słowa kluczowe**.

## Karta Ustawienia

W sekcji **Platformy** kliknij **Twitch**, aby go włączyć (kliknij ponownie, aby wyłączyć). Kropka obok zapala się, gdy Twitch jest połączony; w przeciwnym razie wyświetla się **(niepołączono)**. Najpierw połącz Twitch: [Ustawienia Twitch](../platforms/twitch).

**YouTube** jest oznaczony jako **Wkrótce** i nie można go jeszcze włączyć.

Jeśli żadna platforma nie jest połączona, pozostałe dwie karty pokazują „Brak połączonej platformy, więc bot nic nie wyśle.” wraz z przyciskiem **Przejdź do ustawień**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Wiadomości cykliczne

Publikuje wiadomość co jakiś czas, gdy jesteś na żywo.

1. Kliknij **+ Dodaj**
2. Wypełnij:
   - **Treść**: tekst do opublikowania (do 500 znaków na Twitchu). Zawsze jest to jedna linia: Enter nic nie robi, a wklejone podziały wierszy zamieniają się w spacje
   - **Odstęp**: liczba minut między publikacjami (5–240, domyślnie 15)
   - **Min. wiadomości**: ile nowych wiadomości na czacie musi pojawić się od ostatniej publikacji, zanim bot opublikuje ponownie (0–100, domyślnie 2), aby nie pisał ciągle do pustego czatu
   - **Platformy**: gdzie publikować
3. Kliknij **Zapisz**

Jak odbywa się publikacja:

- Tylko podczas transmisji na żywo. Pierwsza wiadomość pojawia się po upływie pełnego odstępu od rozpoczęcia transmisji, a nie w chwili jej startu
- Jeśli kilka wiadomości cyklicznych przypada na ten sam moment, są one rozłożone w czasie zamiast publikowane razem

## Odpowiedzi na słowa kluczowe

Odpowiada, gdy wiadomość widza zaczyna się od komendy.

1. Kliknij **+ Dodaj**
2. Wypełnij:
   - **Komenda**: wybierz prefiks (`! @ # $ % & ~`), a następnie wpisz jedno słowo bez spacji, np. `!dc`. Jest porównywane z pierwszym słowem wiadomości na czacie, bez rozróżniania wielkości liter
   - **Odpowiedź**: tekst do opublikowania. `{user}` zostaje zastąpione nazwą widza, który użył komendy
   - **Odstęp**: liczba sekund, po których ta sama komenda może odpowiedzieć ponownie (0–3600, domyślnie 5)
   - **Platformy**: gdzie odpowiadać
3. Kliknij **Zapisz**

Odpowiedzi na słowa kluczowe działają zawsze, niezależnie od tego, czy jesteś na żywo.

Komenda nie może być taka sama jak w innej odpowiedzi na słowo kluczowe ani jak komenda używana już przez [Zamawianie utworów](./song-request) lub słowo kluczowe [Losowań](./lottery).

## Zarządzanie listą

Na obu kartach każdy element ma:

- Pole wyboru po lewej, aby włączyć lub wyłączyć element bez usuwania go
- Tagi platform; przygaszony tag oznacza, że dana platforma jest wyłączona na karcie Ustawienia
- **Edytuj** i **Usuń**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Ograniczenia wersji próbnej
- 1 wiadomość cykliczna i 1 odpowiedź na słowo kluczowe
- Każda wiadomość kończy się dopiskiem ` (by StreamToolkit)`, więc maksymalna długość wiadomości jest krótsza

Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
