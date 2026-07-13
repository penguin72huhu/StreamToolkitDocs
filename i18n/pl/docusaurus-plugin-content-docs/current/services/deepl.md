---
sidebar_position: 1
---

# Uzyskanie klucza API DeepL

Klucz API DeepL jest używany do automatycznego tłumaczenia następujących funkcji:
- **Tłumaczenie głosu** — Automatyczne tłumaczenie po konwersji mowy na tekst
- **Czat** — Automatyczne tłumaczenie wiadomości widzów

## Krok 1: Zaloguj się do swojego konta DeepL

Przejdź do [DeepL](https://www.deepl.com) i zaloguj się na swoje konto. Jeśli nie masz jeszcze konta, musisz się najpierw zarejestrować.

## Krok 2: Przejdź do ustawień Account

Kliknij **ikonę profilu** w prawym górnym rogu i wybierz **Account**.

![Open Account settings](./deepl-api-img/step2.png)

## Krok 3: Przełącz na kartę API Keys & limits

Kliknij kartę **API Keys & limits**.

![API Keys & limits tab](./deepl-api-img/step3.png)

## Krok 4: Utwórz nowy API Key

1. Kliknij **Create key +**
2. **Name your key**: Wpisz dowolną nazwę (np. `Stream Toolkit`)
3. **Permissions**: Wybierz **All access**
4. Kliknij **Create Key**

![Create API Key](./deepl-api-img/step4.png)

![API Key created](./deepl-api-img/step4-1.png)

## Krok 5: Skopiuj i wklej do App

1. Skopiuj wygenerowany API Key
2. Wróć do Stream Toolkit i wklej w odpowiednie pole **DeepL API Key**

![Paste API Key](./deepl-api-img/step5.png)

## Najczęściej zadawane pytania

**Q: Czy bezpłatna wersja próbna DeepL ma limity użycia?**
Tak. Bezpłatna wersja próbna zapewnia limit 1 000 000 znaków i jest ograniczona do jednego miesiąca. Aby kontynuować korzystanie z wysokiej jakości tłumaczeń, zasubskrybuj płatny plan DeepL.

**Q: Co zrobić, jeśli mój API Key wycieknie?**
Wróć do DeepL Account → API Keys & limits, usuń stary Key i utwórz nowy.
