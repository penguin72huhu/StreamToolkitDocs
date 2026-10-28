---
sidebar_position: 17
---

# Zamawianie utworów

Widzowie zamawiają utwory z YouTube komendą na czacie, a utwory są odtwarzane w OBS jeden po drugim. Możesz też samodzielnie dodawać utwory i ustawić domyślną playlistę, która gra, gdy nie ma zamówień.

## Adres źródła OBS

```
http://127.0.0.1:7272/song-request
```

Kliknij **Kopiuj** obok **Adres źródła OBS** u góry strony, a następnie dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source).

:::warning
Zamawianie utworów odtwarza dźwięk. We właściwościach źródła przeglądarki zaznacz **Kontroluj dźwięk przez OBS**, w przeciwnym razie muzyka nie trafi na stream.
:::

:::tip
Włącz także przełącznik obok **Zamawianie utworów** w lewym menu. Komendy czatu są obsługiwane tylko wtedy, gdy przełącznik jest włączony.
:::

Strona ma dwie karty: **Ustawienia** i **Playlista**.

## Karta Ustawienia

### Platforma

Każda platforma ma własną kartę:

- **Zezwól na zamawianie utworów z tej platformy**: pozwala widzom na tym czacie zamawiać utwory
- **Włącz odpowiedzi bota czatu** (tylko Twitch, domyślnie włączone): odpowiada na czacie Twitch wynikiem każdej komendy, używając połączonego konta Twitch. Wyświetlane tylko wtedy, gdy Twitch jest włączony i połączony

Niepołączona platforma pokazuje **(niepołączono)** (Twitch) lub **Brak połączonego adresu czatu** (YouTube). Najpierw ją połącz:

- [Ustawienia Twitch](../platforms/twitch)
- [Ustawienia YouTube](../platforms/youtube-settings)

### Komendy czatu

| Pole | Domyślnie |
|------|--------|
| **Prefiks komendy** | `!` (do wyboru z `! @ # $ % & ~`) |
| **Komenda zamówienia utworu** | `sr` |
| **Usuń zamówienie** | `remove` |
| **Zobacz listę zamówień** | `queue` |
| **Sprawdź bieżący utwór** | `song` |
| **Czas odnowienia zamawiania** | 3000 ms |

Czas odnowienia jest liczony dla każdego widza osobno: po udanym zamówieniu ten sam widz musi odczekać tyle czasu, zanim zamówi ponownie.

### Ustawienia

- **Pokaż film na ekranie** (domyślnie włączone): po wyłączeniu film jest ukryty w OBS, ale dźwięk nadal jest odtwarzany
- **Limit listy** (1–100, domyślnie 20): maksymalna liczba zamówionych utworów na liście. Utwory z domyślnej playlisty nie są liczone
- **Pokaż powiadomienie o zamówieniu** (domyślnie włączone): pokazuje w OBS kartę powiadomienia, gdy widz zamówi utwór, usunie go lub zamówienie się nie powiedzie. Po włączeniu możesz ustawić:
  - **X** / **Y**: pozycja powiadomienia liczona od lewego górnego rogu (px, domyślnie 16 / 16)
  - **Skala powiadomienia**: mnożnik rozmiaru (domyślnie 1.0)
  - **Testuj wygląd powiadomienia**: wysyła testowe powiadomienie do OBS

Każde powiadomienie jest wyświetlane przez 5 sekund; jednocześnie widoczne są maksymalnie 3.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Jak korzystają z tego widzowie

Przy ustawieniach domyślnych:

| Komenda | Działanie |
|------|------|
| `!sr <link YouTube>` | Zamawia ten film |
| `!sr <słowa wyszukiwania>` | Wyszukuje w YouTube i zamawia pierwszy wynik |
| `!remove` | Usuwa ostatnie zamówienie widza (nie utwór, który jest odtwarzany) |
| `!queue` | Odpowiada 3 następnymi zamówionymi utworami |
| `!song` | Odpowiada utworem, który jest odtwarzany |

- Akceptowane linki: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…` lub 11-znakowy identyfikator filmu
- Linki do playlist nie są akceptowane
- Zamówienie nie powiedzie się, gdy lista osiągnęła **Limit listy**
- Nowe zamówienia trafiają do kolejki za zamówieniami innych widzów, ale przed utworami z domyślnej playlisty
- `!queue` i `!song` działają tylko na czacie Twitch przy włączonej opcji **Włącz odpowiedzi bota czatu**

## Karta Playlista

### Sterowanie odtwarzaniem

Górny wiersz pokazuje, kto zamówił bieżący utwór, oraz jego tytuł. Przyciski:

- **Odtwórz** / **Pauza**: jeśli nic nie jest odtwarzane, zaczyna od pierwszego utworu na liście
- **Zatrzymaj**: zatrzymuje odtwarzanie
- **Następny**: przechodzi do następnego utworu

Podczas odtwarzania utworu pojawia się pasek postępu; przeciągnij go, aby przejść do wybranego miejsca. Po zakończeniu utworu automatycznie rozpoczyna się następny.

:::note
Po uruchomieniu aplikacji nic nie jest odtwarzane automatycznie. Naciśnij **Odtwórz**, aby rozpocząć.
:::

### Domyślna playlista

Wklej adres URL playlisty YouTube i wybierz **Odtwarzanie w pętli** lub **Odtwarzanie losowe**. Gdy lista się wyczerpie, utwór z tej playlisty zostanie dodany i odtworzony automatycznie. Takie utwory są oznaczone na liście jako **Lista domyślna**.

Domyślna playlista jest odczytywana przez Twoje konto YouTube, więc najpierw musisz zalogować się przez Google w [Ustawieniach YouTube](../platforms/youtube-settings).

### Ręczne zamówienie utworu

Wklej adres URL filmu YouTube i kliknij **Dodaj do listy** (lub naciśnij Enter). Ręczne zamówienia nie obsługują słów wyszukiwania.

### Lista

**Lista (n)** pokazuje wszystkie utwory: platformę, zamawiającego, tytuł i identyfikator filmu (kliknij, aby otworzyć w YouTube). Kliknij **Usuń**, aby usunąć utwór; usunięcie odtwarzanego utworu powoduje przejście do następnego. **Wyczyść** opróżnia całą listę.

{/* TODO: 截圖 — 播放清單分頁 */}

## Najczęściej zadawane pytania

**Q: Widzowie wpisują komendę, ale nic się nie dzieje?**
Sprawdź, czy:
- Przełącznik **Zamawianie utworów** w lewym menu jest włączony
- Opcja **Zezwól na zamawianie utworów z tej platformy** jest zaznaczona dla danej platformy
- W przypadku Twitcha: czat Twitch jest odczytywany przez funkcję [Czat](./chat). Jeśli wyłączyłeś Twitch na stronie Czatu (a [Bot czatu](./chat-bot) nie korzysta z Twitcha), komendy z Twitcha nie są odbierane

**Q: Domyślna playlista nie gra?**
Upewnij się, że jesteś zalogowany przez Google w Ustawieniach, a adres URL jest linkiem do playlisty (zawiera `list=`).

:::info Ograniczenia wersji próbnej
- Zamawianie utworów przez widzów na czacie jest dostępne tylko w pełnej wersji. W wersji próbnej zamówienie z czatu kończy się niepowodzeniem z komunikatem „W wersji próbnej zamawianie utworów jest niedostępne”. **Ręczne zamówienie utworu** i domyślna playlista nadal działają
- Nakładka OBS wyświetla znak wodny

Zobacz [Porównanie wersji próbnej i pełnej](../getting-started/trial-comparison).
:::
