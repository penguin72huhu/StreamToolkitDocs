---
sidebar_position: 5
---

# Media Board

Wyświetlaj obrazy, odtwarzaj filmy i efekty dźwiękowe na streamie jednym kliknięciem lub skrótem.

Strona ma trzy karty: **Obraz**, **Film** i **Dźwięk**. Każda karta ma własny adres źródła OBS.

| Karta | Adres źródła OBS | Kontroluj dźwięk przez OBS |
|-----|----------------|-----------------------|
| **Obraz** | `http://127.0.0.1:7272/imageboard` | Niepotrzebne |
| **Film** | `http://127.0.0.1:7272/videoboard` | Wymagane |
| **Dźwięk** | `http://127.0.0.1:7272/soundboard` | Wymagane |

Kliknij **Kopiuj** obok każdego adresu URL i dodaj go w OBS jako źródło przeglądarki. Zobacz [Jak dodać źródła w OBS](../getting-started/obs-source). Filmy i dźwięki są odtwarzane w źródle OBS, a nie w Stream Toolkit, więc dla tych dwóch źródeł musisz włączyć **Kontroluj dźwięk przez OBS**, w przeciwnym razie widzowie ich nie usłyszą.

:::tip
Włącz przełącznik obok **Media Board** na lewym pasku bocznym (**Włącz wyświetlanie w OBS**). Gdy jest wyłączony, obrazów nie można wyświetlać, a filmy i dźwięki nie są odtwarzane — niezależnie od tego, czy używasz przycisków, czy skrótów.
:::

## Wspólne elementy sterujące

Obrazy, filmy i dźwięki są wyświetlane jako karty:

- Kliknij kartę, aby rozwinąć lub zwinąć jej ustawienia
- Pole wyboru po prawej stronie karty: gdy jest zaznaczone, element pojawia się w narzędziach uruchamiania [Szybkich narzędzi](./quick-tools). Nowe elementy są domyślnie zaznaczone
- **✕** usuwa element
- Jeśli plik lokalny został przeniesiony lub usunięty, karta pokazuje **Nie znaleziono pliku**

### Skróty

Każdy element może mieć własny skrót:

1. Rozwiń kartę i kliknij przycisk skrótu
2. Naciśnij wybraną kombinację klawiszy, a następnie ją puść. Naciśnij **Esc**, aby anulować
3. Aby usunąć skrót, kliknij **Wyczyść**

Jeśli kombinacja jest już używana przez inną funkcję, nie zostanie zapisana, a przycisk pokaże komunikat o konflikcie. Skrót działa nawet wtedy, gdy Stream Toolkit nie jest aktywnym oknem. Wszystkie skróty są też wymienione na stronie [Skróty klawiszowe](./hotkeys).

## Obraz

{/* TODO: 截圖 — 圖片分頁 */}

### Dodawanie obrazu

1. Kliknij **Dodaj obraz**
2. Wybierz plik (jpg, jpeg, png lub gif). Nazwa pliku staje się nazwą obrazu

Po rozwinięciu karty widoczna jest miniatura i następujące ustawienia:

- **Nazwa**: nazwa obrazu
- **Ścieżka pliku**: kliknij **Wybierz ponownie**, aby wybrać inny plik
- **Skrót klawiszowy**: naciśnij raz, aby pokazać obraz, naciśnij ponownie, aby go ukryć
- **Ustaw pozycję i rozmiar**: zobacz poniżej
- **Usuń obraz**: usuwa obraz

### Pokazywanie i ukrywanie

Kliknij przycisk **○** na karcie, aby pokazać obraz w OBS. Zmieni się on w **◉**. Kliknij ponownie, aby ukryć obraz.

### Ustawienia wyświetlania

**Zezwól na jednoczesne wyświetlanie wielu obrazów** jest domyślnie wyłączone. Gdy ta opcja jest wyłączona, pokazanie obrazu ukrywa obraz aktualnie wyświetlany. Włącz ją, aby pokazywać kilka obrazów jednocześnie.

### Ustaw pozycję i rozmiar

- **Pozycja X** / **Pozycja Y**: w px. 0/0 to środek źródła. Wartości dodatnie przesuwają w prawo/w dół, ujemne w lewo/w górę
- **Szer.** / **Wys.**: w % rozmiaru oryginalnego. 100 = rozmiar oryginalny. Przycisk 🔗 blokuje proporcje (domyślnie włączone). Kliknij go, aby skalować swobodnie
- Gdy obraz jest wyświetlany, zmiany są na bieżąco widoczne w OBS
- **Zapisz** zachowuje zmiany, **Resetuj** przywraca wartości z chwili otwarcia okna, **Anuluj** zamyka bez zapisywania

## Film

{/* TODO: 截圖 — 影片分頁 */}

Kliknij **Dodaj film**, aby dodać kartę, a następnie ją rozwiń:

- **Nazwa filmu**: nazwa wyświetlana na karcie
- **Źródło**: **YouTube** lub **Lokalny**
  - **YouTube**: wklej link do filmu w polu **Adres YouTube**. Kliknij **Testuj analizę**, aby go sprawdzić. Po powodzeniu wyświetla się „Przeanalizowano, zostanie zastosowane automatycznie przy odtwarzaniu”
  - **Lokalny**: kliknij **Wybierz plik**, aby wybrać plik mp4, webm lub ogg. Limit rozmiaru to 200MB, a większe pliki oznaczają większe opóźnienie. Aby uzyskać przezroczyste tło, użyj filmu WebM (VP9 Alpha)
- **Odtwarzanie w pętli**: powtarza film
- **Czas odtwarzania**: ustaw **Od** i **Do** (godziny, minuty, sekundy, ms). Pozostaw **Do** na 00:00, aby odtwarzać do końca
- **Głośność**: 0–100%
- **Skrót klawiszowy**: naciśnij, aby odtworzyć film. Naciśnij ponownie w trakcie odtwarzania, aby go zatrzymać
- **Ustaw pozycję i rozmiar**: te same pola pozycji i rozmiaru co dla obrazów. Kliknij **Zapętl podgląd**, aby odtwarzać film w pętli w OBS podczas dostosowywania, oraz **Zatrzymaj podgląd**, aby zatrzymać. Na koniec kliknij **Zapisz** lub **Anuluj**

Kliknij **▶** na karcie, aby odtworzyć film w OBS. Kliknij **■**, aby go zatrzymać.

## Dźwięk

{/* TODO: 截圖 — 音效分頁 */}

Kliknij **Dodaj dźwięk**, aby dodać kartę, a następnie ją rozwiń:

- **Nazwa dźwięku**: nazwa wyświetlana na karcie
- **Źródło**: **Adres YouTube** lub **Plik lokalny**
  - **Adres YouTube**: wklej link i kliknij **Testuj analizę**, aby go sprawdzić
  - **Plik lokalny**: kliknij **Wybierz plik**, aby wybrać plik mp3, wav, ogg, flac, m4a, aac lub opus
- **Czas odtwarzania**: ustaw **Od** i **Do**. Pozostaw **Do** na 00:00, aby odtwarzać do końca
- **Głośność**: 0–100%
- **Skrót klawiszowy**: naciśnij, aby odtworzyć dźwięk

Kliknij **▶** na karcie, aby odtworzyć dźwięk w OBS. Kliknij **■**, aby go zatrzymać. Jednocześnie odtwarzany jest tylko jeden dźwięk. Uruchomienie innego dźwięku zatrzymuje bieżący.

:::info Ograniczenia wersji próbnej
- Możesz dodać tylko **1** obraz, **1** film i **1** dźwięk
- Nakładki obrazów i filmów wyświetlają znak wodny

Szczegóły znajdziesz w [Porównaniu wersji próbnej i pełnej](../getting-started/trial-comparison).
:::

## Najczęściej zadawane pytania

**Q: Filmy lub dźwięki są odtwarzane, ale na streamie nie ma dźwięku.**
Upewnij się, że opcja **Kontroluj dźwięk przez OBS** jest zaznaczona dla źródeł `/videoboard` i `/soundboard` oraz że źródła nie są wyciszone w mikserze OBS.

**Q: Nie mogę wybrać pliku filmu.**
Można wybrać tylko pliki mp4, webm i ogg o rozmiarze do 200MB. Jeśli plik jest większy, pojawi się komunikat z limitem, a plik nie zostanie dodany.
