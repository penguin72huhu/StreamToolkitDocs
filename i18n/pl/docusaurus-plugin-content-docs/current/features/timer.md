---
sidebar_position: 11
---

# Timer

Wyświetlaj na streamie timery odliczające lub stopery. Do odliczania można dodawać lub odejmować czas przyciskami albo automatycznie za obserwacje, subskrypcje, Bits na Twitchu oraz wsparcia.

Strona ma dwie karty: **Ustawienia** i **Utwórz stoper**. Najpierw utwórz timer, a następnie steruj nim z karty **Ustawienia**.

## Krok 1: Utwórz timer

1. Otwórz **Timer** na lewym pasku bocznym i przejdź na kartę **Utwórz stoper**
2. W sekcji **Moje stopery** kliknij **Dodaj**. Zostanie utworzony nowy timer odliczający z czasem początkowym 10 minut i trzema opcjami czasu (+30 s, +1 min, +5 min)
3. Kliknij kartę timera, aby go edytować. Kliknij **✕** na karcie, aby usunąć ten timer

**Podgląd** pokazuje, jak wygląda wybrany timer. Użyj pola koloru obok, aby zmienić tło podglądu.

Pod podglądem przełączaj się między **Ustawienia stopera** a **Wygląd**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Krok 2: Ustawienia timera

### Tryb odliczania

- **Odliczanie**: odlicza w dół od czasu początkowego
- **Stoper**: liczy w górę od 0 i może zapisywać międzyczasy. Tryb stopera nie ma czasu początkowego, czasu ostrzeżenia, dźwięku zakończenia ani opcji czasu

### Nazwa

Nazwa wyświetlana na liście timerów, w listach rozwijanych i w Szybkich narzędziach.

### Czas początkowy

Czas startowy odliczania w godzinach, minutach i sekundach. Obok wyświetlana jest łączna liczba sekund.

### Czas ostrzeżenia

Gdy pozostały czas osiągnie tę wartość, tekst timera zmienia kolor na kolor **Ostrzeżenie** ustawiony w sekcji **Wygląd**. Pozostaw 0, aby wyłączyć ostrzeżenie.

### Dźwięk zakończenia odliczania

Dźwięk odtwarzany, gdy odliczanie dojdzie do 0. Wybierz **Brak** lub jeden z wbudowanych dźwięków (**Dzwoneczek**, **Moneta**, **Dzwon**, **Pyk**, **Fanfary**). Kliknij **▶**, aby go przetestować. Aby użyć własnego pliku, kliknij **Wybierz dźwięk** i wybierz plik w menedżerze zasobów.

Dźwięk jest odtwarzany przez źródło przeglądarki OBS, więc dla źródła timera włącz **Kontroluj dźwięk przez OBS**. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source).

### Opcje czasu

Opcje czasu to przyciski dodawania/odejmowania czasu w odliczaniu. Każdy timer może mieć ich do 20.

Aby dodać opcję, wypełnij formularz **Dodaj opcję czasu**:

1. **Źródło wyzwalacza**: wybierz, co automatycznie uruchamia tę opcję
   - **Ręcznie**: stosowana tylko po kliknięciu przycisku
   - **Obserwacja**: stosowana przy każdej nowej obserwacji na Twitchu
   - **Twitch Bits**: stosowana przy cheerach Bits
   - **Nowa subskrypcja Twitch**: stosowana przy subskrypcjach Twitch
   - **Wsparcie**: stosowana przy wsparciach. W **Platformy wsparć** wybierz, które z platform **YouTube**, **O'Pay**, **ECPay** i **PayPal** są liczone
2. Dla **Twitch Bits** i **Wsparcie** ustaw też:
   - **Próg wyzwalacza**: liczba Bits lub kwota wsparcia na jeden krok
   - **Sposób przeliczania**: **Wyzwalanie przy całkowitych wielokrotnościach** lub **Przeliczanie proporcjonalne** (zobacz przykład poniżej)
3. **Dodaj czas**: wybierz **＋** lub **－**, a następnie ustaw godziny, minuty i sekundy
4. Kliknij **Dodaj**

Aby zmienić opcję, kliknij jej **Edytuj**, zmień formularz, a następnie kliknij **Zapisz** (lub **Anuluj**). Kliknij **✕**, aby ją usunąć. Opcje z automatycznym wyzwalaczem są oznaczone 🔗 i nazwą wyzwalacza.

**Przykład przeliczania**: Próg wyzwalacza 100 bits, Dodaj czas +1 min, a widz przekazuje 250 bits:

- **Wyzwalanie przy całkowitych wielokrotnościach**: liczą się tylko pełne wielokrotności progu → 2 × 1 min = **+2 min**
- **Przeliczanie proporcjonalne**: 250 ÷ 100 × 1 min → **+2 min 30 s**

W przypadku wsparć kwota jest przed porównaniem z progiem przeliczana na walutę wybraną w Ustawieniach aplikacji.

:::note
- Automatyczne wyzwalacze działają tylko na timery odliczające
- Opcje czasu z automatycznym wyzwalaczem nadal pojawiają się jako przyciski w panelu sterowania, więc możesz je też klikać ręcznie
- **Nowa subskrypcja Twitch** jest stosowana raz na zdarzenie subskrypcji: podarowanie kilku subskrypcji stosuje ją raz. Ponowne subskrypcje stosują ją tylko wtedy, gdy w [Pasku celu Twitch](./goal) włączona jest opcja **Licz ponowne subskrypcje**
:::

### Skróty sterowania

Ustaw skróty klawiszowe dla tego timera:

- **Start / pauza**
- **Skrót międzyczasu** (tylko stoper)
- **Skrót resetowania**

Zobacz też [Skróty klawiszowe](./hotkeys).

## Krok 3: Wygląd

| Ustawienie | Opis |
|---------|-------------|
| **Czcionka** | Czcionka tekstu czasu |
| **Rozmiar czcionki** | 12–300 px |
| **Kolor tekstu** | **Normalny**: **Jednolity** lub **Gradient** (dwa kolory i **Kąt**). **Ostrzeżenie** (tylko odliczanie): kolor używany po osiągnięciu czasu ostrzeżenia |
| **Kolor tła** | Tło za czasem |
| **Obramowanie** | Kolor obrysu, **Przezroczystość** i **Grubość** (0–20 px) |
| **Cień** | Kolor cienia, **Przezroczystość**, **Rozmycie** i przesunięcie **X** / **Y** |

## Krok 4: Wybierz tryb wyświetlania i dodaj źródło w OBS

Przejdź na kartę **Ustawienia**. W sekcji **Panel sterowania** wybierz **Tryb wyświetlania**:

| Tryb | Opis | Adres źródła OBS |
|------|-------------|----------------|
| **Pojedynczy stoper** | OBS pokazuje tylko wybrany timer. Timery przełącza się listą rozwijaną **Bieżący stoper** | `http://127.0.0.1:7272/timer` |
| **Wiele stoperów** | Każdy timer ma własny adres URL i można go dodać do OBS osobno | `http://127.0.0.1:7272/timer/<timer ID>` |

W trybie **Wiele stoperów** wybieraj timery z listy **Dodaj do wyświetlania**. Każdy dodany timer otrzymuje własną kartę z **Adres źródła OBS**. Kliknij **Kopiuj**, aby go skopiować. Kliknij **✕** na karcie, aby usunąć go z wyświetlania.

Dodaj skopiowany adres URL w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source).

:::tip
Włącz także przełącznik obok **Timer** na lewym pasku bocznym (**Włącz wyświetlanie w OBS**). Gdy jest wyłączony, timer jest ukryty w OBS.
:::

## Krok 5: Sterowanie timerem

Każda karta timera na karcie **Ustawienia** ma:

- **Start** / **Pauza**: w przypadku stopera przycisk pauzy ma etykietę **Zatrzymaj**. Odliczania, które doszło do 0, nie można uruchomić, dopóki go nie zresetujesz lub nie dodasz czasu
- **Międzyczas** (tylko stoper): zapisuje międzyczas podczas działania. Międzyczasy są wyświetlane pod kartą wraz z czasem i różnicą względem poprzedniego międzyczasu
- **Resetuj**: zatrzymuje timer i przywraca czas początkowy (0 dla stopera), czyszcząc międzyczasy
- **Dodaj czas** (tylko odliczanie): po jednym przycisku dla każdej opcji czasu

Bieżący czas jest wyświetlany tylko w nakładce OBS, a nie na stronie ustawień. Timerami możesz też sterować z okna [Szybkie narzędzia](./quick-tools), które również pokazuje bieżący czas.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Ograniczenia wersji próbnej
Możesz utworzyć tylko **1** timer. Szczegóły znajdziesz w [Porównaniu wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
