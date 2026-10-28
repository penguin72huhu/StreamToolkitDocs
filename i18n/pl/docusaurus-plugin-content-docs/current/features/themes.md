---
sidebar_position: 20
---

# Motywy

Udostępniaj i pobieraj wygląd nakładek przez Steam Workshop. Motyw może zawierać wygląd następujących funkcji:

- [Czat](./chat)
- [Pasek wsparcia](./donate)
- [Powiadomienia o wsparciu](./donate-alert)
- [Powiadomienia o nowych obserwujących](./fan-alert)
- [Urodziny widzów](./birthday-alert)
- [Tablica wsparcia](./sponsors)
- [Ankiety](./vote)
- [Zegar](./clock)
- [Pasek celu Twitch](./goal): **Cel obserwujących**, **Cel subskrypcji**, **Cel Bits**

Otwórz je z poziomu **🎨 Motywy** na dole lewego menu. Strona ma dwie karty: **Moje motywy** i **Pobrane motywy**. Steam musi być uruchomiony.

## Wyszukiwanie i stosowanie motywu na stronie funkcji

W każdej z wymienionych wyżej funkcji otwórz sekcję **Własny CSS** i kliknij **Przeglądaj motywy z Workshop**:

1. **Odkrywaj motywy** pokazuje motywy z Workshop dla tej funkcji. Wpisz tekst w polu **Szukaj nazwy motywu** i kliknij **Szukaj** albo użyj **Poprzednia** / **Następna**, aby przeglądać strony
2. Kliknij miniaturę, aby zobaczyć obraz podglądu
3. Kliknij **Zastosuj**. Motyw zostanie zasubskrybowany, pobrany i zastosowany do tej funkcji
4. **Zasubskrybowane** pokazuje motywy, które już zasubskrybowałeś dla tej funkcji

Gdy motyw jest zastosowany, strona pokazuje **Używany motyw: (nazwa)** oraz przycisk **Przywróć**, a własny CSS jest tylko do odczytu. Kliknij **Przywróć**, aby wrócić do własnych ustawień.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Pobrane motywy

Pokazuje wszystkie motywy zasubskrybowane w Steam. Zasubskrybowane motywy nie są stosowane automatycznie — użyj przycisków na karcie. OBS aktualizuje się od razu.

Każda karta pokazuje podgląd, nazwę, **W użyciu**, jeśli używa go jakakolwiek funkcja, oraz **Zawiera** — funkcje obejmowane przez motyw (✓ oznacza funkcje, które go obecnie używają).

| Przycisk | Działanie |
|------|------|
| **Zastosuj wszystko** | Stosuje motyw do wszystkich funkcji, które zawiera. Jeśli funkcja używa innego motywu, zostaniesz poproszony o potwierdzenie zamiany |
| **Wybierz…** | Wybierz, do których funkcji go zastosować |
| **Przywróć wszystko** | Przywraca wszystkie funkcje używające tego motywu do Twoich własnych ustawień sprzed jego zastosowania |
| **Przywróć…** | Wybierz, które funkcje przywrócić |
| **Anuluj subskrypcję** | Anuluje subskrypcję. Jeśli motyw jest w użyciu, te funkcje zostaną najpierw przywrócone |

Po zastosowaniu na dole przez 30 sekund wyświetla się komunikat o wprowadzonych zmianach wraz z przyciskiem **Przywróć**, aby je cofnąć.

:::note
- Przywracanie wraca do Twoich własnych ustawień, a nie do zastąpionego motywu
- Zmiany wyglądu wprowadzone podczas stosowania motywu nie są zachowywane po przywróceniu
:::

- **Pobieranie…**: nie zamykaj Steam; motyw możesz zastosować po zakończeniu pobierania
- **Usunięty motyw (#id)**: motywu nie ma już w Twoich subskrypcjach Steam, ale niektóre funkcje nadal go używają. Obrazy mogą się nie wyświetlać, więc zalecane jest przywrócenie
- Jeśli Steam nie jest uruchomiony, uruchom Steam i kliknij **Odśwież**

{/* TODO: 截圖 — 下載的主題 */}

## Moje motywy: przesyłanie motywu

1. Skonfiguruj wygląd funkcji, które chcesz udostępnić, na ich własnych stronach
2. W **Moje motywy** kliknij **Prześlij nowy motyw**
3. Wypełnij:
   - **Nazwa motywu** (wymagane)
   - **Opis motywu**
   - **Zawarte funkcje** (co najmniej jedna)
   - **Obraz podglądu** (wymagany, do 1MB): kliknij **Wybierz obraz podglądu**
4. Zaznacz pole potwierdzające, że masz prawo do rozpowszechniania wszystkich obrazów, czcionek i dźwięków w motywie. Zasobów licencjonowanych wyłącznie do użytku osobistego lub niekomercyjnego nie można przesyłać
5. Kliknij **Prześlij motyw**

Jeśli zobaczysz komunikat „Najpierw zaakceptuj warunki Steam Workshop w przeglądarce”, zaakceptuj warunki, aby motyw mógł stać się publiczny.

### Zarządzanie przesłanymi motywami

Każdy przesłany motyw ma:

- **Pobierz i zastosuj**: stosuje opublikowany motyw do Twoich funkcji. Nadpisuje to Twoje bieżące ustawienia wyglądu
- **Edytuj**: ponownie przesyła Twoje bieżące ustawienia wyglądu do tego samego motywu. Jeśli motyw nie został pobrany, istniejący obraz podglądu nie zostanie przeniesiony i trzeba wybrać nowy
- **Zarządzaj w Steam**: otwiera motyw w Steam

:::info Ograniczenia wersji próbnej
Motywy (Steam Workshop) są dostępne tylko w pełnej wersji. W wersji próbnej nie można otworzyć **🎨 Motywy** ani stosować motywów.

Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
