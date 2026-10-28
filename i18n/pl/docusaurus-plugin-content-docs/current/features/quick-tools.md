---
sidebar_position: 1
---

# Szybkie narzędzia

**Szybkie narzędzia** to małe okno sterowania, które możesz trzymać otwarte obok gry lub OBS. Pozwala włączać i wyłączać funkcje oraz korzystać z ich najczęściej używanych elementów sterujących bez przełączania się do okna głównego.

## Otwieranie Szybkich narzędzi

Użyj jednego z poniższych sposobów:

- Kliknij **⚡ Szybkie narzędzia** u góry lewego paska bocznego w oknie głównym
- Kliknij prawym przyciskiem myszy ikonę Stream Toolkit w zasobniku i wybierz **Otwórz szybkie narzędzia**

Jeśli okno jest już otwarte, zostanie przeniesione na wierzch zamiast otwierania drugiego.

{/* TODO: 截圖 — 快速工具視窗 */}

## Okno

- **Przenoszenie**: przeciągnij pasek tytułu
- **📌 Przypnij / Odepnij**: utrzymuje okno nad innymi oknami. Przypięcie jest włączone po otwarciu okna
- **✕**: zamyka okno

Okno korzysta z motywu i języka interfejsu aplikacji.

## Panel Szybkich przełączników

Kliknij strzałkę **›** przy lewej krawędzi, aby wysunąć panel **Szybkie przełączniki**. Zawiera on listę wszystkich funkcji:

- Przełącznik włącza lub wyłącza funkcję (tak samo jak przełącznik obok każdej funkcji na głównym pasku bocznym)
- **⚙** (**Otwórz ustawienia**) przywołuje okno główne na stronie ustawień tej funkcji

Kliknij poza panelem lub ponownie kliknij strzałkę, aby go zamknąć.

Funkcje są wyświetlane w tej samej kolejności co na głównym pasku bocznym. Aby zmienić kolejność, przeciągnij uchwyt **⠿** obok funkcji na pasku bocznym okna głównego.

## Karty funkcji

Każda włączona funkcja, która ma elementy sterujące, pojawia się jako karta. Karty są początkowo zwinięte — kliknij tytuł karty, aby ją rozwinąć lub zwinąć. Jeśli żadna z tych funkcji nie jest włączona, okno pokazuje **Nie włączono żadnej funkcji**.

| Funkcja | Co oferuje karta |
|---------|---------------------|
| [Sterowanie scenami OBS](./obs-scene) | Stan połączenia oraz po jednym przycisku dla każdego skonfigurowanego przełączenia sceny lub źródła (bieżąca scena jest wyróżniona). Przyciski są nieaktywne, gdy nie ma połączenia. Karta pojawia się dopiero, gdy istnieje co najmniej jeden wpis skrótu |
| [Tłumaczenie głosu](./voice-translate) | Przycisk **REC** — przytrzymaj, aby nagrywać, puść, aby przetłumaczyć |
| [Znacznik najlepszych momentów streamu](./highlight) | Przycisk **MARK**. Po oznaczeniu przez 5 sekund wyświetlana jest ikona platformy i znacznik czasu |
| [Pasek wsparcia](./donate) | Bieżąca / docelowa kwota z paskiem postępu, pole **Dodaj kwotę ręcznie** z przyciskiem **Dodaj** oraz **Wyzeruj** |
| [Timer](./timer) | Dla każdego wyświetlanego timera: nazwa, czas, **Start** / **Pauza**, **Resetuj** i skonfigurowane przyciski dodawania czasu. Stopery pokazują zamiast tego **Zatrzymaj** i **Międzyczas** |
| [Koło fortuny](./turntable) | Dla każdego wyświetlanego koła: **Zakręć** i **Resetuj** |
| [Media Board](./multimedia) | Przyciski dla przypiętych obrazów (pokaż / ukryj), przypiętych filmów (odtwórz) i przypiętych dźwięków (odtwórz) |
| [Zamawianie utworów](./song-request) | **Odtwórz** / **Pauza**, **Zatrzymaj**, **Następny** |

Jeśli do elementu sterującego przypisano skrót klawiszowy, jest on wyświetlany na przycisku.

Funkcje, którymi nie można tu sterować (Czat, Pasek celu Twitch, Powiadomienia o wsparciu, Tablica wsparcia, Zegar, Ściana emotek, Ankiety, Losowania, Bot czatu), mają w panelu Szybkich przełączników tylko przełącznik włącz/wyłącz.

:::tip
**Wyzeruj** na karcie Paska wsparcia wymaga dwóch kliknięć: pierwsze kliknięcie zmienia przycisk w przycisk potwierdzenia **Wyzeruj**, a drugie kliknięcie w ciągu 10 sekund ustawia kwotę na zero.
:::

:::info
Timery i koła działają zgodnie z ustawieniem **Tryb wyświetlania** danej funkcji: przy **Pojedynczy stoper** / **Pojedyncze koło** wyświetlany jest tylko aktualnie wybrany element; przy **Wiele stoperów** / **Wiele kół** wyświetlane są tylko dodane przez Ciebie elementy. Jeśli nie ma żadnego, karta pokazuje **Brak stopera** / **Brak koła**.
:::
