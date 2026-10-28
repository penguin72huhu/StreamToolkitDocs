---
sidebar_position: 6
---

# Znacznik najlepszych momentów streamu

Naciśnij skrót podczas streamu, aby zapisać, „w którym momencie streamu” wydarzył się najlepszy moment. Później możesz użyć listy czasów, aby odnaleźć te momenty w VOD podczas montażu.

Znaczniki są zapisywane w Stream Toolkit. Ta funkcja nie ma nakładki OBS, więc nie musisz dodawać źródła w OBS.

Strona ma dwie karty: **Ustawienia** i **Zapisy najlepszych momentów**.

:::tip
Włącz przełącznik obok **Znacznik najlepszych momentów streamu** na lewym pasku bocznym. Gdy jest wyłączony, ani skrót, ani przycisk **MARK** nie dodają znacznika.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Krok 1: Wybierz źródło

**Źródło** określa sposób obliczania czasu streamu:

| Źródło | Sposób obliczania czasu | Wymaganie |
|--------|----------------------------|-------------|
| **Twitch** | Czas od rozpoczęcia bieżącego streamu na Twitchu | Połączony Twitch. Zobacz [Ustawienia Twitch](../platforms/twitch) |
| **YouTube** | Czas od rozpoczęcia bieżącej transmisji na żywo na YouTube | Logowanie Google. Zobacz [Ustawienia YouTube](../platforms/youtube-settings) |
| **Ręczne wyrównanie** (domyślnie) | Wartość ręcznego stopera na tej stronie | Brak |

Kropka obok **Twitch** i **YouTube** pokazuje, czy platforma jest połączona. Jeśli nie, opcja pokazuje **(niepołączono)** lub **(brak logowania Google)**.

Jeśli oznaczysz moment, gdy nie jesteś na żywo (lub, w przypadku **Ręczne wyrównanie**, gdy stoper jest zatrzymany), czas zostanie zapisany jako **Brak transmisji**. Przy źródle **Twitch** ten wynik może pojawić się dopiero po około 20 sekundach, ponieważ Stream Toolkit ponawia próbę kilka razy na wypadek, gdyby Twitch jeszcze nie zarejestrował właśnie rozpoczętego streamu.

### Ręczny stoper

Gdy wybrano **Ręczne wyrównanie**, pojawia się **Ręczny stoper**:

1. Wpisz bieżący czas streamu w formacie `HH:MM:SS` (na przykład `00:00:00` dokładnie w chwili rozpoczęcia transmisji)
2. Kliknij **Rozpocznij synchronizację**. Stoper zaczyna liczyć w górę od tej wartości
3. Każdy znacznik używa bieżącej wartości stopera
4. Kliknij **Zatrzymaj**, aby zatrzymać stoper

### Utwórz klip Twitch przy oznaczaniu

Ta opcja pojawia się tylko wtedy, gdy źródłem jest **Twitch**. Gdy jest włączona, każdy znacznik tworzy także klip na Twitchu.

- Musisz być na żywo. Klip ma około 30 sekund
- Klipy są zapisywane w Panelu twórcy → Zawartość → Klipy
- Po oznaczeniu strona pokazuje **Utworzono klip Twitch** lub przyczynę niepowodzenia: **Nie jesteś na żywo**, **Brak uprawnień; połącz Twitch ponownie**, **Twitch niepołączony** lub **Niepowodzenie; spróbuj ponownie**

## Krok 2: Ustaw skrót

Domyślny skrót to `Ctrl+Shift+M`. Aby go zmienić:

1. Kliknij przycisk skrótu
2. Naciśnij wybraną kombinację klawiszy, a następnie ją puść. Naciśnij **Esc**, aby anulować
3. Aby go usunąć, kliknij **Wyczyść**

Jeśli kombinacja jest już używana przez inną funkcję, przycisk pokazuje **Ten skrót jest już używany** i skrót nie zostaje zapisany. Skrót działa nawet wtedy, gdy Stream Toolkit nie jest aktywnym oknem.

Możesz też kliknąć przycisk **MARK** pod skrótem. Działa tak samo jak skrót. Okno [Szybkie narzędzia](./quick-tools) również ma przycisk **MARK**.

## Krok 3: Oznaczaj podczas streamu

1. (Opcjonalnie) Przed oznaczeniem wpisz nazwę w polu **Nazwa znacznika**. Jeśli zostawisz je puste, znaczniki są numerowane automatycznie (`精華標記_1`, `精華標記_2`, …)
2. Naciśnij skrót lub kliknij **MARK**

Wpisana nazwa jest używana tylko dla następnego znacznika, a pole jest potem czyszczone.

## Zapisy najlepszych momentów

Karta **Zapisy najlepszych momentów** pokazuje wszystkie znaczniki, od najnowszych. Każdy wiersz pokazuje czas streamu, nazwę, źródło oraz datę i godzinę oznaczenia.

- **Kopiuj**: kopiuje znacznik jako tekst w formacie `[data] nazwa 🎬 czas streamu (źródło)`
- **🗑️**: kliknij, a następnie **Potwierdź usunięcie**, aby usunąć znacznik
- **Otwórz klip Twitch**: pojawia się, gdy dla tego znacznika utworzono klip Twitch. Otwiera klip na Twitchu

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Ograniczenia wersji próbnej
**Utwórz klip Twitch przy oznaczaniu** jest niedostępne. Wyświetla się jako „Dostępne w pełnej wersji”.

Szczegóły znajdziesz w [Porównaniu wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
