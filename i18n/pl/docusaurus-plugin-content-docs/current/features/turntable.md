---
sidebar_position: 14
---

# Koło fortuny

Twórz własne koła z nagrodami i kręć nimi na streamie. Możesz ustawić wagę każdej opcji, kolory koła oraz to, czy wylosowana opcja ma być potem usuwana.

Strona ma trzy karty: **Ustawienia**, **Utwórz koło** i **Historia**. Najpierw utwórz koło, a następnie kręć nim z karty **Ustawienia**.

## Krok 1: Utwórz koło

1. Otwórz **Koło fortuny** na lewym pasku bocznym i przejdź na kartę **Utwórz koło**
2. W sekcji **Moje koła** kliknij **Dodaj**. Pojawi się nowe koło o nazwie „Koło 1” (potem „Koło 2” i tak dalej)
3. Kliknij kartę koła, aby je edytować. Kliknij **✕** na karcie, aby usunąć to koło

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Tytuł koła

Wpisz nazwę koła. Jest używana na liście kół, w listach rozwijanych i w historii.

### Zawartość koła

1. Kliknij **Edytuj zawartość**
2. Wpisz opcje, **jedną w wierszu**
3. Kliknij **Potwierdź**

### Waga

Gdy koło ma opcje, każda z nich otrzymuje pole **Waga** (minimum 1, domyślnie 1). Wielkość wycinka opcji i szansa na jej wylosowanie rosną proporcjonalnie do wagi. Na przykład opcja z wagą 2 ma dwa razy większą szansę na wylosowanie niż opcja z wagą 1.

### Kolor motywu koła

- **Minimalistyczny**: wbudowany biało-szary schemat
- **Własny**: utwórz własny schemat kolorów. Wpisz **Nazwa**, wybierz **Kolory (3–5 kolorów)**, używając **＋** do dodania koloru i **✕** do jego usunięcia, a następnie kliknij **Dodaj**

Aby zmienić własny motyw, kliknij jego przycisk **✎**. Aby go usunąć, kliknij **✕**. Własne motywy są też dostępne jako schematy kolorów animacji koła w [Losowaniach](./lottery).

### Usuń opcję po wylosowaniu

Gdy ta opcja jest włączona, wylosowana opcja jest usuwana z koła przed kolejnym zakręceniem. Kliknij **Resetuj**, aby przywrócić wszystkie opcje.

## Krok 2: Wybierz tryb wyświetlania i dodaj źródło w OBS

Przejdź na kartę **Ustawienia** i wybierz **Tryb wyświetlania**:

| Tryb | Opis | Adres źródła OBS |
|------|-------------|----------------|
| **Pojedyncze koło** | OBS pokazuje tylko wybrane koło. Koła przełącza się listą rozwijaną **Obecnie używane koło** | `http://127.0.0.1:7272/turntable` |
| **Wiele kół** | OBS może pokazywać kilka kół jednocześnie. Każde koło ma własny adres URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

W trybie **Wiele kół** wybieraj koła z listy **Dodaj do wyświetlania koła**. Każde dodane koło otrzymuje własną kartę z **Adres źródła OBS**. Kliknij **Kopiuj**, aby go skopiować. Kliknij **✕** na karcie, aby usunąć to koło z wyświetlania.

Dodaj skopiowany adres URL w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source). Koło fortuny nie odtwarza dźwięku, więc nie musisz włączać opcji „Kontroluj dźwięk przez OBS”.

:::tip
Włącz także przełącznik obok **Koło fortuny** na lewym pasku bocznym (**Włącz wyświetlanie w OBS**). Gdy jest wyłączony, nakładka pozostaje ukryta.
:::

## Krok 3: Kręć

Na każdej karcie koła na karcie **Ustawienia**:

- **Zakręć**: rozpoczyna kręcenie. Po zakończeniu animacji nakładka pokazuje wynik. Przycisku nie można kliknąć, gdy koło nie ma opcji lub wciąż się kręci
- **Resetuj**: przywraca usunięte opcje, resetuje koło i czyści bieżącą **Lista zwycięzców**

**Lista zwycięzców** na karcie zbiera wszystkie wyniki od ostatniego **Resetuj**.

Możesz też używać **Zakręć** i **Resetuj** w oknie [Szybkie narzędzia](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Historia

Karta **Historia** przechowuje jeden wpis dla każdej rundy, od pierwszego zakręcenia do następnego **Resetuj**. Pokazuje czas, tytuł koła i zwycięzców. Przechowywana jest tylko historia kół z ostatnich 30 dni. Aby usunąć wpis, kliknij 🗑, a następnie **Potwierdź usunięcie**.

:::info Ograniczenia wersji próbnej
- Możesz utworzyć tylko **1** koło
- Nakładka OBS wyświetla znak wodny

Szczegóły znajdziesz w [Porównaniu wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
