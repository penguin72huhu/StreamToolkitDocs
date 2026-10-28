---
sidebar_position: 10
---

# Pasek celu Twitch

Wyświetlaj na streamie paski postępu dla celów Twitch dotyczących obserwujących, subskrypcji i Bits. Każdy typ celu ma własny pasek, własne ustawienia i własny adres URL dla OBS.

:::note Zanim zaczniesz
Paski celów zliczają zdarzenia Twitch, więc najpierw połącz swoje konto Twitch. Zobacz [Ustawienia Twitch](../platforms/twitch).
:::

## Krok 1: Wybierz typ celu i dodaj źródło w OBS

U góry strony wybierz typ celu: **Obserwacja**, **Subskrypcje** lub **Bits**. **Adres OBS** pod przyciskami zmienia się odpowiednio. Kliknij **Kopiuj**, aby go skopiować.

| Typ celu | Adres źródła OBS |
|-----------|----------------|
| **Obserwacja** | `http://127.0.0.1:7272/goal/follow` |
| **Subskrypcje** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Każdy pasek, który chcesz pokazać, dodaj w OBS jako osobne źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source). Paski celów nie odtwarzają dźwięku, więc nie musisz włączać opcji „Kontroluj dźwięk przez OBS”.

:::tip
Włącz także przełącznik obok **Pasek celu Twitch** na lewym pasku bocznym (**Włącz wyświetlanie w OBS**). Gdy jest wyłączony, paski są ukryte w OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Krok 2: Ustaw cel

Wszystkie poniższe ustawienia dotyczą typu celu wybranego u góry.

- **Tytuł**: tekst tytułu wyświetlany na pasku
- **Cel**: liczba docelowa (liczby całkowite, 0 lub więcej)
- **Postęp**: pokazuje bieżącą liczbę, cel i procent

### Jak liczony jest postęp

| Typ celu | Co zwiększa postęp |
|-----------|----------------------|
| **Obserwacja** | Każda nowa obserwacja dodaje 1. Gdy Twitch jest połączony, liczba jest też co 30 sekund synchronizowana z łączną liczbą obserwujących Twojego kanału na Twitchu. Kliknij **Synchronizuj**, aby zsynchronizować od razu |
| **Subskrypcje** | Nowe subskrypcje i podarowane subskrypcje (podarowanie kilku subskrypcji dodaje ich liczbę). Ponowne subskrypcje są liczone tylko wtedy, gdy włączona jest opcja **Licz ponowne subskrypcje** |
| **Bits** | Każdy cheer dodaje liczbę przekazanych Bits |

### Opcje subskrypcji

Wyświetlane tylko dla **Subskrypcje**:

- **Ważone wg Tier**: po włączeniu subskrypcje wyższego poziomu dodają więcej do postępu. Po wyłączeniu każda subskrypcja dodaje 1
- **Licz ponowne subskrypcje**: po włączeniu wiadomości o ponownej subskrypcji również zwiększają postęp

### Resetowanie postępu

**Subskrypcje** i **Bits** mają przycisk **Resetuj postęp**. Kliknij go, a następnie kliknij **Resetuj**, aby przywrócić bieżącą liczbę do 0. Liczba docelowa zostaje zachowana.

**Obserwacja** nie ma przycisku resetowania, ponieważ jej liczba odpowiada łącznej liczbie obserwujących na Twitchu.

## Krok 3: Dostosuj wygląd

### Podgląd

**Podgląd** u góry pokazuje pasek dla wybranego typu celu. Użyj pola koloru obok, aby zmienić tło podglądu. Zaznacz **Podgląd osiągnięcia**, aby zobaczyć, jak wygląda pasek po osiągnięciu celu.

### Ustawienia wyglądu

| Ustawienie | Opis |
|---------|-------------|
| **Kolor tła** | Tło paska |
| **Kolor paska postępu** | Kolor wypełnionej części |
| **Kolor po osiągnięciu** | Kolor wypełnienia po osiągnięciu celu |
| **Tekst tytułu** | Czcionka, kolor i rozmiar (8–72 px) tytułu |
| **Tekst celu** | Czcionka, kolor i rozmiar (8–72 px) liczb |
| **Procent** | Czcionka, kolor i rozmiar (8–72 px) procentu |

Kliknij **Przywróć domyślne**, aby przywrócić wygląd wybranego typu celu.

### Własny CSS

Kliknij **Własny CSS**, aby rozwinąć edytor. Każdy typ celu ma własny CSS. Używaj go do układu i struktury. Kolory, czcionki i rozmiary ustawia się w powyższych ustawieniach wyglądu.

- **Przywróć domyślne**: przywraca domyślny CSS
- **Zarządzaj zasobami**: otwiera menedżera zasobów dla obrazów używanych w CSS

Jeśli Twój CSS nadpisuje właściwość za pomocą `!important`, odpowiadająca jej kontrolka wyglądu zostaje zablokowana, ponieważ CSS i tak miałby pierwszeństwo.

:::info Ograniczenia wersji próbnej
- **Własny CSS** jest dostępny tylko w pełnej wersji
- Nakładka OBS wyświetla znak wodny

Szczegóły znajdziesz w [Porównaniu wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
