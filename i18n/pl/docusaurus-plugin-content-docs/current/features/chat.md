---
sidebar_position: 3
---

# Czat

**Czat** wyświetla czaty Twitch i YouTube razem w jednej nakładce, z opcjonalnym automatycznym tłumaczeniem. Może też pokazywać czat w przezroczystym oknie na pulpicie, które widzisz tylko Ty.

## Adres źródła OBS

```
http://127.0.0.1:7272/chat
```

Dodaj go jako źródło przeglądarki: [Jak dodać źródła w OBS](../getting-started/obs-source). Ta nakładka nie ma dźwięku.

:::info
Wiadomości są wysyłane do nakładki tylko wtedy, gdy przełącznik **Czat** na pasku bocznym jest włączony. Czat jest nadal odbierany, gdy przełącznik jest wyłączony, więc funkcje odczytujące czat (ankiety, losowania, zamawianie utworów itp.) nadal działają.
:::

## Zanim zaczniesz

Połącz platformy, które chcesz wyświetlać:

- [Ustawienia Twitch](../platforms/twitch)
- [Ustawienia YouTube](../platforms/youtube-settings)

Strona ustawień ma dwie karty: **Ustawienia** i **Wygląd**.

## Karta Ustawienia

### Platformy

- **Pokaż ikonę platformy (Twitch / YouTube)** — pokazuje ikonę <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> przed każdą wiadomością

Każda platforma ma własną kartę. Kropka obok nazwy platformy świeci na zielono, gdy platforma jest połączona i włączona; **(niepołączono)** wyświetla się, gdy Twitch nie jest połączony, a **Brak połączonego adresu czatu**, gdy czat YouTube nie jest powiązany.

| Opcja | Opis |
|--------|-------------|
| **Włącz czat** | Pokazuje wiadomości z tej platformy |
| **Pokaż awatar** | Pokazuje awatar widza |
| **Pokaż odznaki** (Twitch) / **Pokaż odznaki (ikony członkostwa)** (YouTube) | Pokazuje odznaki |
| **Pokazuj nazwy widzów zamiast @identyfikatorów** | Tylko YouTube. Nieaktywne do czasu zalogowania przez Google |

Gdy czat YouTube jest włączony, ale nie powiązany, na jego karcie pojawiają się dwa przyciski:

- **Połącz automatycznie** — automatycznie znajduje bieżącą transmisję (wymaga logowania Google)
- **Wpisz ręcznie** — przenosi do strony ustawień, gdzie można wkleić adres czatu

**Maks. liczba wiadomości**: ile wiadomości jest przechowywanych na ekranie (5–200, domyślnie 50).

### Automatyczne tłumaczenie

1. Zaznacz **Włącz tłumaczenie**
2. **Język docelowy**: język, na który tłumaczone są wiadomości. Domyślna opcja, **Zgodnie z językiem interfejsu**, używa języka interfejsu aplikacji
3. **Języki bez tłumaczenia** (opcjonalnie): wiadomości w zaznaczonych językach pozostają bez zmian. Portugalskiego PT-BR i PT-PT nie da się rozróżnić, więc zaznaczenie jednego z nich pomija oba

**Usługa tłumaczenia** to **MyMemory**, która nie wymaga klucza API.

- **Email (opcjonalnie)**: bez adresu email dzienny limit wynosi 5 000 znaków; wpisz adres email i kliknij **Zapisz**, aby zwiększyć go do 50 000 znaków (bezpłatnie, bez rejestracji w MyMemory)
- Pasek poniżej pokazuje przybliżone dzisiejsze wykorzystanie. Resetuje się codziennie o 08:00 UTC

### Test

- **Wyślij wiadomość testową** — wysyła do nakładki losową przykładową wiadomość
- **Wyczyść** — usuwa wszystkie wiadomości z nakładki

Jeśli pojawi się **Połączenie nieudane — serwer może nie działać**, lokalny serwer Stream Toolkit nie odpowiada.

### Okno czatu na pulpicie

Pokazuje czat w małym, przezroczystym oknie, które zawsze jest na wierzchu nad grą. Widzisz je tylko Ty — przydatne przy streamowaniu na jednym monitorze.

1. Kliknij **Otwórz okno** (lub kliknij prawym przyciskiem myszy ikonę w zasobniku i wybierz **Otwórz czat na pulpicie**)
2. Gdy okno jest odblokowane, przeciągnij górny pasek, aby je przenieść, i przeciągnij krawędzie, aby zmienić jego rozmiar
3. Gdy okno jest na miejscu, kliknij **🔒 Zablokuj**. Kliknięcia przechodzą wtedy przez okno do gry. Aby odblokować, najedź myszą na okno i kliknij 🔓, który pojawi się w prawym górnym rogu, lub kliknij **🔓 Odblokuj** na stronie ustawień

**Resetuj pozycję** przenosi okno z powrotem do domyślnego położenia.

| Ustawienie | Opis |
|---------|-------------|
| **Styl** | **Tylko nazwa i wiadomość** (domyślnie) lub **Jak czat w OBS** |
| **Rozmiar czcionki** | 12–32 px, domyślnie 16. Tylko dla **Tylko nazwa i wiadomość** |
| **Krycie tekstu** | 10–100%, domyślnie 100% |
| **Krycie tła** | 0–100%, domyślnie 40% |
| **Wygaszanie wiadomości** | 0–120 sekund, domyślnie 0. Każda wiadomość zanika po tylu sekundach, a do wygaszonych wiadomości nie można wrócić przewijaniem. Przy 0 nic nie zanika i gdy okno jest odblokowane, możesz przewijać do wcześniejszych wiadomości (maksymalnie do wartości Maks. liczba wiadomości) |
| **Ukryj w przechwytywaniu streamu** | Domyślnie włączone. Przechwytywanie ekranu w OBS nie wychwyci okna, więc widzowie nie zobaczą czatu podwójnie. Okno nie pojawi się też na zrzutach ekranu ani podczas udostępniania ekranu na Discordzie |

:::tip
Jeśli nie widzisz okna, gdy gra działa na pełnym ekranie, przełącz grę w tryb „okno bez ramki” lub „okno”. Użyj **Wyślij wiadomość testową**, aby sprawdzić położenie i rozmiar okna.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Karta Wygląd

### Podgląd

U góry karty widoczny jest podgląd na żywo. Selektor koloru obok **Podgląd** zmienia tylko tło podglądu. Pola wyboru **Awatar**, **Odznaki** i **Ikona platformy** zmieniają tylko to, co pokazuje podgląd.

### Ustawienia wyglądu

**Przywróć domyślne** przywraca domyślny wygląd (lub wygląd zastosowanego motywu, jeśli motyw jest zastosowany).

- **Kierunek pojawiania**: **Z góry na dół**, **Z dołu do góry** (domyślnie), **Od lewej do prawej**, **Od prawej do lewej**
- **Tekst** — ustawiany osobno dla **Pseudonim** i **Wiadomość**:
  - Czcionka, rozmiar (px) i kolor. Dla pseudonimu możesz wybrać **Oryginalny kolor** (kolor widza na platformie) lub **Własny kolor**
  - **Obrys**: kolor, **Przezroczystość**, **Grubość**
  - **Cień**: kolor, **Przezroczystość**, **Rozmycie**, przesunięcie X / Y
- **Rozmiar ikon**: skala dla **Ikona platformy**, **Awatar** i **Odznaki** (0.1–5x)
- **Kolor**: **Kolor tła** każdej wiadomości

### Własny CSS

Rozwiń **Własny CSS**, aby bezpośrednio edytować CSS nakładki. Użyj **Zarządzaj zasobami**, aby przesłać obrazy, do których można się odwołać w CSS. **Przywróć domyślne** przywraca domyślny CSS. Zobacz też [Motywy](./themes).

:::tip
Jeśli Twój własny CSS ustawia jedno z pól wyglądu za pomocą `!important`, to pole jest wyszarzone w ustawieniach wyglądu („To ustawienie jest kontrolowane przez własny CSS”). Gdy motyw jest zastosowany, CSS jest tylko do odczytu — przywróć go przed edycją.
:::

## Ograniczenia wersji próbnej

:::info
- Włączenie automatycznego tłumaczenia dodaje znak wodny do nakładki czatu
- **Własny CSS** jest dostępny tylko w pełnej wersji
- **Okno czatu na pulpicie** jest dostępne tylko w pełnej wersji

Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
