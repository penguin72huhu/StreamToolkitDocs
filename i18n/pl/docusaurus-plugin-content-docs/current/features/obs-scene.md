---
sidebar_position: 2
---

# Sterowanie scenami OBS

**Sterowanie scenami OBS** pozwala przełączać sceny oraz pokazywać/ukrywać źródła w programie do streamowania za pomocą globalnych skrótów klawiszowych lub z poziomu [Szybkich narzędzi](./quick-tools). Działa z **OBS Studio**, **Streamlabs** i **Meld Studio**.

Ta funkcja nie ma nakładki, więc nie trzeba niczego dodawać w OBS jako źródła przeglądarki.

:::info
Skróty działają tylko wtedy, gdy przełącznik **Sterowanie scenami OBS** na pasku bocznym jest włączony. Działają nawet wtedy, gdy okno Stream Toolkit jest zminimalizowane do zasobnika.
:::

Strona ustawień ma dwie karty: **Połączenie** i **Skróty**.

## Karta Połączenie

### Krok 1: Wybierz program

W sekcji **Program** wybierz **OBS Studio**, **Streamlabs** lub **Meld Studio**. Można to zmienić tylko wtedy, gdy nie ma połączenia.

Każdy program ma własne skróty i listę scen, więc po zmianie programu wyświetlane są jego własne ustawienia.

### Krok 2: Przygotuj program

#### OBS Studio

1. W OBS otwórz **Narzędzia → Ustawienia serwera WebSocket**
2. Zaznacz **Włącz serwer WebSocket**
3. Kliknij **Pokaż informacje o połączeniu**, aby zobaczyć hasło
4. W Stream Toolkit wypełnij **Host** (domyślnie `localhost`), **Port** (domyślnie `4455`) i **Hasło**

#### Streamlabs / Meld Studio

Nie jest wymagana żadna konfiguracja — wystarczy, że program jest uruchomiony.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Krok 3: Połącz

Kliknij **Połącz**. **Status** zmieni się na **Połączono** (w przypadku OBS i Meld wyświetlany jest też numer wersji). Kliknij **Rozłącz**, aby zakończyć połączenie.

**Łącz przy starcie** (domyślnie włączone): łączy automatycznie po uruchomieniu Stream Toolkit oraz po włączeniu przełącznika funkcji. Wyłączenie przełącznika funkcji rozłącza połączenie.

### Sceny

Sekcja **Sceny** pokazuje Twoje sceny i liczbę źródeł w każdej z nich; bieżąca scena jest wyróżniona. Kliknij **Odśwież**, aby pobrać najnowszą listę po zmianie scen w programie.

Po rozłączeniu nadal wyświetlana jest ostatnio pobrana lista.

## Karta Skróty

Aby ustawić skrót, kliknij **Kliknij, aby ustawić skrót**, a następnie naciśnij kombinację klawiszy. Naciśnij `Esc`, aby anulować. Jeśli kombinacja jest już używana przez inną funkcję, wyświetla się **Konflikt skrótów** i skrót nie zostaje zapisany. Kliknij **✕** obok skrótu, aby go wyczyścić.

### Zmień scenę

1. Kliknij **Dodaj**
2. Ustaw skrót
3. Wybierz scenę, na którą ma nastąpić przełączenie

Kliknij **✕** na końcu wiersza, aby go usunąć.

### Przełącz źródła

Jeden skrót może jednocześnie sterować kilkoma źródłami w tej samej scenie.

1. Kliknij **Dodaj**
2. Ustaw skrót
3. Wpisz **Nazwa** (opcjonalnie — używana jako etykieta przycisku w Szybkich narzędziach; jeśli pole jest puste, używana jest nazwa sceny)
4. Wybierz scenę, do której należą źródła
5. Kliknij **Dodaj źródło**, wybierz źródło i wybierz **Pokaż**, **Ukryj** lub **Przełącz** (domyślnie **Przełącz**)
6. Powtórz krok 5 dla kolejnych źródeł

Zmiana sceny we wpisie czyści jego listę źródeł.

:::tip
Scena lub źródło, które już nie istnieje w programie, jest oznaczone na czerwono. Wybierz je ponownie z listy rozwijanej.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Używanie z Szybkich narzędzi

Gdy funkcja jest włączona i istnieje co najmniej jeden wpis skrótu, [Szybkie narzędzia](./quick-tools) pokazują kartę **Sterowanie scenami OBS** z przyciskiem dla każdego wpisu. Kliknięcie przycisku działa tak samo jak naciśnięcie jego skrótu.

## Komunikaty o błędach

Podczas używania skrótu lub przycisku mogą pojawić się następujące komunikaty:

| Komunikat | Znaczenie |
|---------|---------|
| **Brak połączenia z OBS** | Brak połączenia — przejdź na kartę **Połączenie** i kliknij **Połącz** |
| **Nie znaleziono sceny „…”** | Scena została przemianowana lub usunięta w programie |
| **Nie znaleziono źródeł: …** | Tych źródeł nie ma już w scenie |

## Ograniczenia wersji próbnej

:::info
Wersja próbna pozwala łącznie na **1** wpis skrótu (Zmień scenę i Przełącz źródła razem). Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::

## Najczęściej zadawane pytania

**Q: Pojawił się komunikat, że nie można połączyć się z OBS, i po otwarciu OBS nie było ponownej próby.**
Jeśli pierwsza próba połączenia się nie powiedzie (na przykład OBS nie był jeszcze uruchomiony), Stream Toolkit nie ponawia prób. Otwórz program do streamowania, a następnie kliknij **Połącz**. Gdy połączenie raz się powiedzie, w razie jego zerwania nastąpi automatyczne ponowne połączenie.
