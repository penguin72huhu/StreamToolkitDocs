---
sidebar_position: 2
---

# Jak dodać źródła w OBS

Większość funkcji Stream Toolkit wymaga dodania „Źródła przeglądarki” w OBS, aby mogły być wyświetlane na streamie.

## Krok 1: Skopiuj adres URL funkcji

W Stream Toolkit każda strona funkcji wyświetla odpowiedni lokalny adres URL w formacie:

```
http://127.0.0.1:7272/feature-name
```

Skopiuj adres URL funkcji, którą chcesz dodać.

## Krok 2: Dodaj źródło przeglądarki w OBS

1. W sekcji **Źródła** w OBS kliknij przycisk **+** na dole
2. Wybierz **Przeglądarka**
3. Wybierz **Stwórz nową**, wprowadź nazwę źródła (np. „Pasek wsparcia”) i kliknij **OK**
4. Wklej skopiowany adres URL z kroku 1 w polu **URL**
5. Dostosuj **Szerokość** i **Wysokość** według potrzeb
6. Kliknij **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Poniższe funkcje wymagają zaznaczenia opcji „Kontroluj dźwięk przez OBS”

Zawiera wyjście audio; musisz zaznaczyć opcję **Kontroluj dźwięk przez OBS** w ustawieniach źródła przeglądarki, aby dźwięk pojawił się poprawnie na streamie:

- **Media Board** — Film, Dźwięk
- **Powiadomienia o wsparciu**
- **Zamawianie utworów**

Jak zaznaczyć:
1. Na liście źródeł OBS kliknij prawym przyciskiem myszy na to źródło przeglądarki
2. Wybierz **Właściwości**
3. Znajdź opcję **Kontroluj dźwięk przez OBS** i zaznacz ją
4. Kliknij **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Jeśli po zaznaczeniu nadal nie ma dźwięku, upewnij się, że źródło nie zostało wyciszone w mikserze audio OBS.
:::
