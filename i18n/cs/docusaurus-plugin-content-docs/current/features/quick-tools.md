---
sidebar_position: 1
---

# Rychlé nástroje

**Rychlé nástroje** jsou malé ovládací okno, které můžete mít otevřené vedle hry nebo OBS. Umožňuje zapínat a vypínat funkce a používat jejich nejčastější ovládací prvky bez přepínání zpět do hlavního okna.

## Otevření Rychlých nástrojů

Použijte jeden z těchto způsobů:

- Klikněte na **⚡ Rychlé nástroje** v horní části levého postranního panelu v hlavním okně
- Klikněte pravým tlačítkem na ikonu Stream Toolkit v systémové liště a zvolte **Otevřít rychlé nástroje**

Pokud je okno již otevřené, přesune se do popředí, místo aby se otevřelo druhé.

{/* TODO: 截圖 — 快速工具視窗 */}

## Okno

- **Přesunutí**: přetáhněte záhlaví okna
- **📌 Připnout / Odepnout**: udržuje okno nad ostatními okny. Při otevření okna je připnutí zapnuté
- **✕**: zavře okno

Okno se řídí motivem a jazykem rozhraní aplikace.

## Panel Rychlé přepínání

Kliknutím na šipku **›** na levém okraji vysunete panel **Rychlé přepínání**. Obsahuje všechny funkce:

- Přepínač funkci zapíná nebo vypíná (stejně jako přepínač vedle každé funkce v hlavním postranním panelu)
- **⚙** (**Otevřít nastavení**) zobrazí hlavní okno se stránkou nastavení dané funkce

Panel zavřete kliknutím mimo něj nebo dalším kliknutím na šipku.

Funkce jsou seřazeny ve stejném pořadí jako v hlavním postranním panelu. Pořadí změníte přetažením úchytu **⠿** vedle funkce v postranním panelu hlavního okna.

## Karty funkcí

Každá zapnutá funkce, která má ovládací prvky, se zobrazí jako karta. Karty jsou zpočátku sbalené — kliknutím na název karty ji rozbalíte nebo sbalíte. Pokud není zapnutá žádná z těchto funkcí, okno zobrazí **Zatím není zapnutá žádná funkce**.

| Funkce | Co karta nabízí |
|---------|---------------------|
| [Ovládání scén OBS](./obs-scene) | Stav připojení a jedno tlačítko pro každé nastavené přepnutí scény nebo přepnutí zdrojů (aktuální scéna je zvýrazněna). Bez připojení jsou tlačítka neaktivní. Karta se zobrazí, až když existuje alespoň jedna položka klávesové zkratky |
| [Překlad řeči](./voice-translate) | Tlačítko **REC** — podržením nahráváte, uvolněním přeložíte |
| [Značka nejlepších okamžiků streamu](./highlight) | Tlačítko **MARK**. Po označení se na 5 sekund zobrazí ikona platformy a časová značka |
| [Ukazatel cíle darů](./donate) | Aktuální / cílová částka s ukazatelem průběhu, pole **Ručně přidat částku** s tlačítkem **Přidat** a **Vynulovat** |
| [Časovač](./timer) | Pro každý zobrazený časovač: název, čas, **Spustit** / **Pozastavit**, **Resetovat** a tlačítka pro přidání času, která jste nastavili. Stopky místo toho zobrazují **Zastavit** a **Kolo** |
| [Kolo štěstí](./turntable) | Pro každé zobrazené kolo: **Spustit** a **Resetovat** |
| [Media Board](./multimedia) | Tlačítka pro připnuté obrázky (zobrazit / skrýt), připnutá videa (přehrát) a připnuté zvuky (přehrát) |
| [Hudební přání](./song-request) | **Přehrát** / **Pozastavit**, **Zastavit**, **Další** |

Pokud má ovládací prvek přiřazenou klávesovou zkratku, zobrazí se na jeho tlačítku.

Funkce, které zde nemají co ovládat (Chat, Ukazatel cíle Twitch, Upozornění na dary, Přehled darů, Hodiny, Stěna emotikonů, Živá hlasování, Losování, Chatovací bot), mají v panelu Rychlé přepínání pouze svůj přepínač.

:::tip
**Vynulovat** na kartě Ukazatel cíle darů vyžaduje dvě kliknutí: první kliknutí změní tlačítko na **Potvrdit vynulování** a druhé kliknutí do 10 sekund nastaví částku na nulu.
:::

:::info
Časovače a kola se řídí **Režimem zobrazení** dané funkce: při **Jeden časovač** / **Jedno kolo** se zobrazí pouze aktuálně vybrané; při **Více časovačů** / **Více kol** se zobrazí pouze ty, které jste přidali. Pokud žádné nejsou, karta zobrazí **Zatím žádný časovač** / **Zatím žádné kolo**.
:::
