---
sidebar_position: 1
---

# Ustawienia YouTube API

Ten samouczek wyjaśnia, jak uzyskać **API Key** i **identyfikator kanału** dla YouTube Data API, używane w funkcji `Znacznik najlepszych momentów streamu`.

## YouTube Data API

### Krok 1: Otwórz Google Cloud Console

1. Przejdź do [Google Cloud Console](https://console.cloud.google.com)
2. Zaloguj się za pomocą swojego konta Google

### Krok 2: Włącz YouTube Data API v3

1. Wyszukaj `YouTube Data API v3` w górnym pasku wyszukiwania

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. Kliknij wynik wyszukiwania
3. Kliknij **Enable**

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### Krok 3: Utwórz klucz API

1. Kliknij **Credentials** po lewej stronie

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. Wybierz **Create credentials** → **API Key**

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### Krok 4: Skonfiguruj klucz API

1. Wpisz dowolną **Name** (np. `StreamToolkit`)
2. W **Select API restrictions** zaznacz `YouTube Data API v3` i kliknij **OK**

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. Nie zaznaczaj **Authenticate API calls through a service account**
4. W **Application restrictions** wybierz **None**

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. Kliknij **Create**

### Krok 5: Wprowadź w App

1. Wklej uzyskany API Key w pole **YouTube API** w App

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## Identyfikator kanału

### Krok 1: Otwórz ustawienia YouTube

1. Przejdź do [YouTube](https://www.youtube.com)
2. Kliknij zdjęcie profilowe w prawym górnym rogu
3. Wybierz **Ustawienia**

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### Krok 2: Pobierz identyfikator kanału

1. W menu po lewej stronie wybierz **Zaawansowane ustawienia**

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. Skopiuj **identyfikator kanału** i wklej go z powrotem do App

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## Najczęściej zadawane pytania

**Q: Czy klucz API ma limity użycia?**
Tak. YouTube Data API v3 ma bezpłatny dzienny limit 10 000 jednostek. Zwykłe użycie podczas streamowania nie powinno go przekroczyć.

**Q: Pojawia się błąd „Nieprawidłowy API Key”?**
Upewnij się, że usługa YouTube Data API v3 jest włączona i używasz klucza z właściwego projektu.

**Q: Czy klucz może być publiczny?**
Niezalecane. Jeśli Twój klucz wycieknie i zostanie nadużyty, Twój dzienny limit szybko się wyczerpie.
