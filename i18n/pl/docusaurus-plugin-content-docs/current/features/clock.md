---
sidebar_position: 12
---

# Zegar

Wyświetlaj na streamie aktualną godzinę, opcjonalnie z datą i dniem tygodnia.

## Krok 1: Dodaj źródło w OBS

Skopiuj **Adres źródła OBS** u góry strony:

```
http://127.0.0.1:7272/clock
```

Dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source). Zegar nie odtwarza dźwięku, więc nie musisz włączać opcji „Kontroluj dźwięk przez OBS”.

:::tip
Włącz także przełącznik obok **Zegar** na lewym pasku bocznym (**Włącz wyświetlanie w OBS**). Gdy jest wyłączony, zegar jest ukryty w OBS.
:::

## Podgląd

**Podgląd** u góry pokazuje rzeczywistą nakładkę OBS i aktualizuje się w miarę zmiany ustawień. Użyj pola koloru obok, aby zmienić tło podglądu.

Pod podglądem znajdują się trzy karty: **Wygląd**, **Format zegara** i **Ustawienia wyświetlania**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Wygląd

| Ustawienie | Opis |
|---------|-------------|
| **Czcionka** | Czcionka całego tekstu zegara |
| **Układ** | Sposób rozmieszczenia godziny, daty i dnia tygodnia: **Stack**, **Horizontal**, **One-Top-Two-Bottom** lub **Two-Top-One-Bottom**. **Odstęp między wierszami** jest dostępny we wszystkich układach oprócz **Horizontal**, a **Odstęp** we wszystkich układach oprócz **Stack** (oba od −200 do 200 px) |
| **Kolejność** | Przeciągaj bloki **Godzina**, **Data** i **Dzień tygodnia**, aby zmienić ich kolejność |
| **Tekst** | Ustaw osobno dla **Godzina**, **Data** i **Dzień tygodnia**: **Rozmiar czcionki**, kolor (**Jednolity** lub **Gradient** z dwoma kolorami i **Kąt**) oraz kolor **Obramowanie**, **Przezroczystość** i **Grubość** (0–7 px) |
| **Cień** | Kolor cienia, **Przezroczystość**, **Rozmycie** i przesunięcie **X** / **Y**, wspólne dla całego tekstu |

Przycisk **Przywróć domyślne** znajduje się u góry karty.

### Własny CSS

Kliknij **Własny CSS**, aby rozwinąć edytor. Domyślny CSS zawiera selektory dla każdej części zegara (godziny, daty, dnia tygodnia i ich kontenerów) wraz z komentarzami. Używaj go do układu i struktury. Kolory, czcionki i rozmiary ustawia się w powyższych ustawieniach wyglądu.

- **Przywróć domyślne**: przywraca domyślny CSS
- **Zarządzaj zasobami**: otwiera menedżera zasobów dla obrazów używanych w CSS

Jeśli Twój CSS nadpisuje właściwość za pomocą `!important`, odpowiadająca jej kontrolka wyglądu zostaje zablokowana, ponieważ CSS i tak miałby pierwszeństwo.

## Format zegara

- **System czasu**: **24-godzinny** lub jedna z dwóch opcji 12-godzinnych. **12-godzinny (AM/PM)** pokazuje AM/PM, a **12-godzinny (rano/po południu)** pokazuje chińskie oznaczenia 上午 / 下午
- **Strefa czasowa**: od UTC−12 do UTC+14. Domyślnie strefa czasowa jest zgodna z ustawieniem Twojego komputera

## Ustawienia wyświetlania

- **Pokaż sekundy**
- **Pokaż datę**: po włączeniu wybierz format daty z listy rozwijanej. Formaty oznaczone **Bez roku** pomijają rok
  - **Zero wiodące w dacie**: pokazuje jednocyfrowe miesiące i dni z zerem na początku (na przykład 2026/05/20)
  - **Format roku**: wyświetlany dla formatów zaczynających się od roku. **Pełny (2026)** lub **Skrócony (26)**

  Te dwie opcje dotyczą formatów liczbowych (z `/` lub `-`). Formaty słowne (na przykład „20 maja 2026”) zależą od języka interfejsu aplikacji
- **Pokaż dzień tygodnia**: po włączeniu wybierz sposób zapisu dnia tygodnia (na przykład **środa**, **Wednesday**, **WED** lub **Wed**)

:::info Ograniczenia wersji próbnej
**Własny CSS** jest dostępny tylko w pełnej wersji. Szczegóły znajdziesz w [Porównaniu wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
