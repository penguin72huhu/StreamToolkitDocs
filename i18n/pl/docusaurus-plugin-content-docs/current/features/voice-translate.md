---
sidebar_position: 4
---

# Tłumaczenie głosu

Przytrzymaj skrót i mów. Stream Toolkit zamienia Twoją mowę na tekst, tłumaczy go i wyświetla oba wiersze jako napisy w OBS.

Rozpoznawanie mowy działa na Twoim komputerze z użyciem modelu Whisper. Tekst jest następnie tłumaczony przez MyMemory.

Strona ma dwie karty: **Ustawienia** i **Wygląd**.

## Krok 1: Dodaj źródło w OBS

Adres źródła OBS jest wyświetlany u góry strony:

```
http://127.0.0.1:7272/voice-translate
```

Kliknij **Kopiuj** i dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source). Tłumaczenie głosu nie odtwarza dźwięku, więc nie musisz włączać opcji „Kontroluj dźwięk przez OBS”.

Napisy pojawiają się na dole źródła: tekst oryginalny u góry, a tłumaczenie pod nim. Znikają po upływie **Czas wyświetlania napisów**.

:::tip
Włącz przełącznik obok **Tłumaczenie głosu** na lewym pasku bocznym (**Włącz wyświetlanie w OBS**). Skrót działa tylko wtedy, gdy jest on włączony.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Krok 2: Ustaw skrót

W sekcji **Skrót klawiszowy (przytrzymaj, aby nagrywać, puść, aby rozpoznać)**:

1. Kliknij **Kliknij, aby ustawić skrót**
2. Naciśnij wybraną kombinację klawiszy, a następnie ją puść. Naciśnij **Esc**, aby anulować
3. Aby usunąć skrót, kliknij **Wyczyść**

Jeśli kombinacja jest już używana przez inną funkcję, przycisk pokazuje **Konflikt skrótów** i skrót nie zostaje zapisany.

Skrót działa nawet wtedy, gdy Stream Toolkit nie jest aktywnym oknem. **Przytrzymaj** go podczas mówienia, a następnie **puść**, aby rozpoznać i przetłumaczyć. Nagrywanie zatrzymuje się automatycznie po 15 sekundach.

Możesz też przytrzymać myszą przycisk **REC** pod skrótem. Działa tak samo: naciśnij, aby nagrywać, puść, aby przetłumaczyć. Okno [Szybkie narzędzia](./quick-tools) ma taki sam przycisk **REC**.

## Krok 3: Ustawienia rozpoznawania

| Pole | Opis |
|-------|-------------|
| **Stan modelu** | Pokazuje **Ładowanie xx%**, **Gotowy** lub **Ładowanie modelu nie powiodło się**. Możesz nagrywać, gdy pokazuje **Gotowy** |
| **Model Whisper** | **Tiny (najszybszy, ok. 40MB)**, **Base (zalecany, ok. 75MB)** (domyślnie) lub **Small (najdokładniejszy, ok. 245MB)**. Model jest pobierany przy pierwszym użyciu. Zmiana modelu powoduje jego ponowne załadowanie |
| **Język mowy** | Język, w którym mówisz. Domyślnie chiński tradycyjny |
| **Mikrofon** | Mikrofon, z którego odbywa się nagrywanie. **Domyślny systemu** używa domyślnego urządzenia wejściowego Windows |

## Krok 4: Ustawienia tłumaczenia

| Pole | Opis |
|-------|-------------|
| **Czas wyświetlania napisów** | Jak długo napisy pozostają na ekranie, 1–30 sekund. Domyślnie 5 |
| **Język docelowy** | Język, na który odbywa się tłumaczenie. Domyślnie angielski |
| **Gdy językiem docelowym jest English, używaj tłumaczenia Whisper** | Gdy językiem docelowym jest angielski, tłumaczy Whisper zamiast MyMemory. (Bezpłatnie i bez limitu, ale z większym opóźnieniem.) Nie ma wpływu na inne języki docelowe |
| **Usługa tłumaczenia** | MyMemory |

### Email (opcjonalnie)

MyMemory jest bezpłatne. Dzienny limit zależy od tego, czy podasz adres email:

- Bez adresu email: 5 000 znaków dziennie
- Z adresem email: 50 000 znaków dziennie (bezpłatnie, bez rejestracji w MyMemory)

Wpisz swój adres email i kliknij **Zapisz**. Ten adres jest **Współdzielone z tłumaczeniem czatu**.

Pasek poniżej pokazuje **Wykorzystano dziś (szacunkowo, reset codziennie o 08:00 UTC)**. Po wyczerpaniu limitu wyświetla **Limit wyczerpany**.

## Krok 5: Wygląd

Na karcie **Wygląd** możesz zmienić wygląd napisów. Zmiany są zapisywane od razu.

- **Podgląd**: pokazuje przykładowe napisy. Pole koloru obok zmienia tylko tło podglądu
- **Wyrównanie**: **Do lewej** (domyślnie), **Do środka** lub **Do prawej**
- **Czcionka**: jeden wiersz dla **Język oryginalny** (tekst oryginalny) i jeden dla **Język docelowy** (tłumaczenie). Każdy wiersz ma czcionkę, kolor i rozmiar (8–120 px). Domyślnie 14 px dla oryginału i 22 px dla tłumaczenia
- **Cień**: kolor cienia tekstu
- **Przywróć domyślne**: przywraca domyślny wygląd

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Ograniczenia wersji próbnej
**Język docelowy** jest ustawiony na stałe na angielski. Strona pokazuje komunikat „Demo obsługuje tłumaczenie tylko na angielski”.

Szczegóły znajdziesz w [Porównaniu wersji próbnej i pełnej](../getting-started/trial-comparison).
:::

## Najczęściej zadawane pytania

**Q: Przytrzymuję skrót, ale nic się nie dzieje.**
Sprawdź, czy przełącznik obok **Tłumaczenie głosu** na lewym pasku bocznym jest włączony i czy **Stan modelu** pokazuje **Gotowy**.

**Q: Nagrywanie działa, ale w OBS nie pojawiają się napisy.**
Jeśli MyMemory nie może przetłumaczyć tekstu (na przykład wyczerpano dzienny limit), napisy nie są wyświetlane. Sprawdź pasek **Wykorzystano dziś**. Podanie adresu email zwiększa limit. Jeśli Twoim językiem docelowym jest angielski, możesz też włączyć **Gdy językiem docelowym jest English, używaj tłumaczenia Whisper**, co nie ma limitu.
