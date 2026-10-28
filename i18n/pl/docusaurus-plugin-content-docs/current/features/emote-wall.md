---
sidebar_position: 13
---

# Ściana emotek

Gdy widzowie używają emotek na czacie, emotki przepływają przez Twój stream.

:::note Zanim zaczniesz
Ściana emotek odczytuje emotki z czatu, więc najpierw połącz używane platformy. Zobacz [Ustawienia Twitch](../platforms/twitch) i [Ustawienia YouTube](../platforms/youtube-settings).
:::

## Krok 1: Dodaj źródło w OBS

Skopiuj **Adres źródła OBS** u góry strony:

```
http://127.0.0.1:7272/emote-wall
```

Dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source). Ściana emotek nie odtwarza dźwięku, więc nie musisz włączać opcji „Kontroluj dźwięk przez OBS”.

:::tip
Włącz także przełącznik obok **Ściana emotek** na lewym pasku bocznym (**Włącz wyświetlanie w OBS**). Gdy jest wyłączony, emotki z czatu nie są wysyłane do nakładki.
:::

## Krok 2: Wybierz źródła

W sekcji **Źródło** znajdują się karty **Twitch** i **YouTube**. Każda karta pokazuje stan połączenia:

- Twitch pokazuje **(niepołączono)**, gdy Twoje konto Twitch nie jest połączone
- YouTube pokazuje **Brak połączonego adresu czatu**, gdy czat YouTube nie jest połączony

Zaznacz **Włącz ścianę emotek** na karcie, aby wyświetlać emotki z czatu danej platformy. Odznacz, aby ignorować tę platformę.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Krok 3: Ustawienia animacji

| Ustawienie | Opis |
|---------|-------------|
| **Rozmiar emotki** | Rozmiar każdej emotki, 16–256 px |
| **Maks. emotek na wiadomość** | Z jednej wiadomości na czacie pobieranych jest maksymalnie tyle emotek (1–20) |
| **Czas trwania unoszenia** | Jak długo unosi się każda emotka, 1–30 sekund |
| **Prędkość unoszenia** | 50–500 px/s |

Kliknij **Przywróć domyślne** obok tytułu sekcji, aby przywrócić wszystkie cztery wartości.

## Krok 4: Test

Kliknij **Test (pokaż w OBS)**, aby wysłać do nakładki przykładowe emotki Twitch z bieżącymi ustawieniami. Liczba testowych emotek zależy od ustawienia **Maks. emotek na wiadomość**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Ograniczenia wersji próbnej
Nakładka OBS wyświetla znak wodny, gdy emotki są na ekranie. Szczegóły znajdziesz w [Porównaniu wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
