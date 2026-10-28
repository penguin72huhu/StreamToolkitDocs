---
sidebar_position: 8.2
---

# Urodziny widzów

Dodaj urodziny swoich widzów do listy. Gdy widz z listy napisze na czacie podczas Twojego streamu w dniu urodzin lub krótko po nich, na streamie pojawi się powiadomienie urodzinowe. Każdy widz otrzymuje jedno powiadomienie na urodziny.

## Adres źródła OBS

```
http://127.0.0.1:7272/birthday-alert
```

Skopiuj adres URL z góry strony ustawień **Urodziny widzów** i dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source).

:::warning
Powiadomienia odtwarzają dźwięk. Zaznacz **Kontroluj dźwięk przez OBS** we właściwościach źródła przeglądarki, w przeciwnym razie dźwięk nie będzie słyszalny na streamie.
:::

Włącz przełącznik obok **Urodziny widzów** na lewym pasku bocznym. Tylko wtedy, gdy jest włączony, aplikacja łączy się z czatem i sprawdza urodziny. Przyciski **Testowe powiadomienie** i **Powtórz** działają nawet wtedy, gdy jest wyłączony.

Strona ma trzy karty: **Ustawienia**, **Widzowie** i **Wygląd**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Jak to działa

- Widz z listy, który napisze na czacie od dnia urodzin do ustawionej liczby dni po nich, otrzymuje powiadomienie. Przed urodzinami nic się nie pojawia.
- Każdy widz otrzymuje jedno powiadomienie na urodziny. Urodziny 12/28 ogłoszone 1/2 nadal liczą się jako urodziny z poprzedniego roku.
- Powiadomienia pojawiają się tylko wtedy, gdy platforma, na której widz napisał, nadaje na żywo. Gdy jesteś offline lub aplikacja nie może jeszcze ustalić, czy jesteś na żywo, pisanie na czacie nie uruchamia ani nie zapisuje powiadomienia; pojawi się ono przy następnej wiadomości widza w trakcie streamu.
- Historia czatu wczytywana przy łączeniu z czatem YouTube nie jest liczona, więc ponowne uruchomienie aplikacji nie ogłosi osób, które pisały, gdy była zamknięta.
- Urodziny 2/29 w latach nieprzestępnych przypadają na 2/28.

## Karta Ustawienia

### Połączenie z czatem

Wyświetlane, gdy funkcja jest włączona. Dla każdej platformy widać, czy jej czat jest połączony:

- **Twitch**: jeśli nie ustawiono kanału, wiersz pokazuje **Nie ustawiono kanału Twitch — najpierw połącz Twitch** z przyciskiem **Przejdź do ustawień**. Najpierw połącz Twitch: [Ustawienia Twitch](../platforms/twitch).
- **YouTube**: jeśli czat nie jest połączony, wiersz pokazuje **Połącz automatycznie** i **Wpisz ręcznie** (przenosi do pola adresu czatu w Ustawieniach). Jeśli używasz automatycznego łączenia i jesteś zalogowany przez Google, wyświetla się **Jeśli po rozpoczęciu transmisji nie ma połączenia, kliknij Połącz na stronie Czat**. Zobacz [Ustawienia YouTube](../platforms/youtube-settings) i [Czat](./chat).

Gdy platforma jest połączona, wyświetla się też **Na żywo**, **Offline** lub **Nie wiadomo, czy trwa transmisja**. Powiadomienia pojawiają się tylko przy stanie **Na żywo**.

### Ustawienia

| Pole | Opis |
|-------|-------------|
| **Ile dni po urodzinach się liczy** | 0–30. Domyślnie: 7. 0 = tylko w dniu urodzin. |
| **Czas wyświetlania** | Jak długo każde powiadomienie pozostaje na ekranie, w sekundach (1–60). Domyślnie: 6. |

### Testowanie powiadomień

Kliknij **Testowe powiadomienie**, aby wysłać do OBS przykładowe powiadomienie z testowym widzem i dzisiejszą datą. Pojawia się tylko w OBS, nigdy nie jest zapisywane i działa nawet przy wyłączonym przełączniku na lewym pasku bocznym. Przycisk na chwilę zmienia się w **Wysłano**.

## Karta Widzowie

### Dodawanie widza

Widza można dodać na dwa sposoby:

- **+ Dodaj z ostatnio piszących**: wybierz osobę, która niedawno pisała na czacie. Formularz otworzy się z jej nazwą jako notatką, z już powiązanym kontem i dzisiejszą datą jako urodzinami.
- **+ Dodaj po nazwie**: wpisz nazwę konta samodzielnie.

**Ostatnio piszący na czacie** pokazuje widzów, którzy pisali, gdy czat był połączony (do 200, przechowywanych przez 30 dni). Kliknij **Odśwież**, aby zaktualizować listę. Widzowie, którzy już są na liście, mają oznaczenie **Dodano** i nie można ich wybrać ponownie. Przy długiej liście pojawia się pole wyszukiwania.

Wypełnij formularz:

1. **Notatka / pseudonim**: nazwa, pod którą znasz widza, np. `Ola`. Opcjonalnie.
2. **Urodziny**: miesiąc i dzień (bez roku).
3. **Konta**: co najmniej jedno konto. Jeden widz może mieć kilka kont, np. zarówno Twitch, jak i YouTube.
   - **＋ Wpisz konto**: wybierz **Twitch** lub **YouTube** i wpisz nazwę. Dla Twitcha użyj loginu lub nazwy wyświetlanej; dla YouTube @uchwytu lub nazwy kanału.
   - **＋ Z ostatnio piszących**: dodaj konto, które jest już powiązane.
   - **✕** usuwa konto.
4. Kliknij **Zapisz** (lub naciśnij Enter). **Anuluj** (lub Esc) zamyka formularz.

### Wpisane nazwy i powiązywanie

Wpisana nazwa zostanie powiązana z kontem, gdy ten widz po raz pierwszy napisze na czacie. Dopasowanie ignoruje wielkość liter i początkowy znak `@`. Nazwy mogą się powtarzać, więc bezpieczniej wybrać z ostatnio piszących.

W YouTube wpisz @uchwyt: jeśli na stronie Czat nie włączono **Pokazuj nazwy widzów zamiast @identyfikatorów**, nazwa kanału może nigdy nie pasować.

Każde konto na liście pokazuje:

- **Powiązano: [nazwa]**: konto jest powiązane.
- **Czeka, aż „[nazwa]” napisze**: wpisana nazwa, która nie została jeszcze powiązana.
- **Nowo powiązane**: aplikacja automatycznie powiązała to konto, gdy widz napisał na czacie. Sprawdź, czy to naprawdę ta osoba, a następnie kliknij **✓ Zgadza się** lub **Odłącz**, jeśli to nie ona.
- **To konto jest już przy „[nazwa]”**: wpisana nazwa pasuje do konta należącego do innego widza z listy. Jedno konto może należeć tylko do jednego widza, więc zmień tu nazwę albo usuń jeden z wpisów.

**Odłącz** otwiera pole pod kontem. Po odłączeniu dopasowywana jest nazwa z tego pola (możesz ją zmienić), a konto zostanie ponownie powiązane, gdy ten widz znów napisze.

### Lista

Najpierw wyświetlani są widzowie, dla których przypada powiadomienie urodzinowe, a potem najbliższe nadchodzące urodziny. Gdy widzów jest więcej niż 5, pojawia się pole wyszukiwania. Przy każdym widzu widać:

- **Czeka na wiadomość**: to czas urodzin widza; powiadomienie pojawi się, gdy tylko napisze na czacie.
- **🎂 Pokazano [data]**: powiadomienie dla tych urodzin zostało już wyświetlone.
- **▶ Powtórz**: ponownie pokazuje powiadomienie tego widza w OBS. Działa zawsze i nigdy nie jest zapisywane.
- **Edytuj**: zmienia notatkę, urodziny lub konta. Zmiana daty urodzin pozwala na ponowne powiadomienie dla nowej daty.
- **Usuń**: kliknij **Usuń**, a następnie **Potwierdź usunięcie**.

## Karta Wygląd

### Podgląd

Podgląd korzysta z tej samej strony co źródło OBS. Użyj selektora koloru obok **Podgląd**, aby zmienić tło podglądu, i kliknij **▶ Powtórz animację**, aby ponownie odtworzyć animację powiadomienia.

### Jednolity styl / Osobno dla każdej platformy

- **Jednolity styl**: Twitch i YouTube używają tego samego stylu powiadomienia.
- **Osobno dla każdej platformy**: każda platforma ma własny styl. Wybierz **Twitch** lub **YouTube** przyciskami poniżej i edytuj ustawienia. Przy pierwszym przełączeniu platformy, których jeszcze nie dostosowano, kopiują bieżący jednolity styl, każda z własnym kolorem paska odliczania.

**Przywróć domyślne** przywraca domyślny styl dla edytowanego stylu.

### Obraz

- **Wybierz obraz**: wybierz obraz z menedżera zasobów. Bez obrazu wyświetlane jest emoji tortu. **Wyczyść** usuwa obraz.
- **Rozmiar obrazu**: 1–400 px.
- **Pozycja obrazu**: **Do lewej**, **Do prawej**, **U góry** lub **U dołu**.

### Dźwięk

Wybierz wbudowany dźwięk: **Brak**, **Dzwoneczek** (domyślnie), **Moneta**, **Dzwon**, **Pyk**, **Fanfary**. Kliknij **▶**, aby posłuchać. Kliknij **Wybierz dźwięk**, aby użyć własnego pliku dźwiękowego z menedżera zasobów.

### Własny tekst

Napisz wiersz wyświetlany w powiadomieniu. Pozostaw puste, aby użyć domyślnego tekstu: `Wszystkiego najlepszego, {name}!` Możesz użyć:

| Symbol zastępczy | Zastępowany przez |
|-------------|---------------|
| `{name}` | Nazwę widza na czacie |
| `{label}` | Twoją notatkę / pseudonim (nazwę z czatu, jeśli notatka jest pusta) |
| `{birthday}` | Datę urodzin, np. `10/20` |
| `{MM}` `{DD}` | Dwucyfrowy miesiąc i dzień, aby utworzyć własny format, np. `{DD}/{MM}` |
| `{date}` | Datę urodzin w języku nakładki |
| `{platform}` | Nazwę platformy |

### Tekst i kolor

- **Tekst**: ustaw czcionkę, rozmiar i kolor dla **Własny tekst** i **Nazwa widza**.
- **Kolor**: **Tło**, **Cień** i **Pasek odliczania**.

### Własny CSS

Rozwiń **Własny CSS**, aby edytować CSS edytowanego stylu (jednolitego lub wybranej platformy). **Przywróć domyślne** przywraca CSS z szablonu, a **Zarządzaj zasobami** otwiera menedżera zasobów. Można tu też zastosować motywy Steam Workshop. Gdy motyw jest zastosowany, CSS jest tylko do odczytu. Zobacz [Motywy](./themes).

:::info Wersja próbna
- Do 3 widzów na liście. Jeśli lista zawiera ich więcej (np. z zapisu pełnej wersji), dodatkowi widzowie są wyświetlani jako zablokowani 🔒: nigdy nie wywołują powiadomienia i nie można ich edytować ani powtórzyć.
- Własny CSS jest dostępny tylko w pełnej wersji.
- Powiadomienie wyświetla w OBS znak wodny.

Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::

## Najczęściej zadawane pytania

**Q: Brak dźwięku na streamie?**
Sprawdź, czy opcja **Kontroluj dźwięk przez OBS** jest zaznaczona we właściwościach źródła przeglądarki i czy źródło nie jest wyciszone w mikserze OBS. Sprawdź też, czy **Dźwięk** nie jest ustawiony na **Brak**.

**Q: Widz napisał na czacie w dniu urodzin, ale powiadomienie się nie pojawiło.**
Sprawdź, czy przełącznik na lewym pasku bocznym jest włączony, czy **Połączenie z czatem** na karcie **Ustawienia** pokazuje dla tej platformy **Na żywo** oraz czy konto na liście ma oznaczenie **Powiązano** albo wpisana nazwa pasuje do jego nazwy na czacie. Jeśli powiadomienie pojawiło się, gdy OBS nie był otwarty, użyj **▶ Powtórz**.

**Q: Dodałem źródło OBS z opóźnieniem. Czy wcześniejsze powiadomienia zostaną odtworzone ponownie?**
Nie. Nowo otwarte źródło pokazuje tylko powiadomienia, które nadejdą po jego połączeniu. Użyj **▶ Powtórz** na karcie **Widzowie**, aby pokazać powiadomienie ponownie.
