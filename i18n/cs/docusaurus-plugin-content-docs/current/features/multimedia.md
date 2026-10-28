---
sidebar_position: 5
---

# Media Board

Zobrazujte ve streamu obrázky, přehrávejte videa a zvukové efekty jedním kliknutím nebo klávesovou zkratkou.

Stránka má tři karty: **Obrázek**, **Video** a **Zvuk**. Každá karta má vlastní URL zdroje pro OBS.

| Karta | URL zdroje pro OBS | Ovládat zvuk přes OBS |
|-----|----------------|-----------------------|
| **Obrázek** | `http://127.0.0.1:7272/imageboard` | Není potřeba |
| **Video** | `http://127.0.0.1:7272/videoboard` | Povinné |
| **Zvuk** | `http://127.0.0.1:7272/soundboard` | Povinné |

Klikněte na **Kopírovat** vedle každé URL a přidejte ji do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source). Videa a zvuky se přehrávají ve zdroji OBS, ne ve Stream Toolkit, proto u těchto dvou zdrojů musíte zaškrtnout **Ovládat zvuk přes OBS**, jinak je diváci neuslyší.

:::tip
Zapněte přepínač vedle **Media Board** v levém postranním panelu (**Zapnout zobrazení v OBS**). Dokud je vypnutý, nelze zobrazovat obrázky a videa ani zvuky se nepřehrávají, ať použijete tlačítka, nebo klávesové zkratky.
:::

## Společné ovládání

Obrázky, videa i zvuky se zobrazují jako karty:

- Kliknutím na kartu rozbalíte nebo sbalíte její nastavení
- Zaškrtávací políčko vpravo na kartě: když je zaškrtnuté, položka se zobrazí ve spouštěcích nástrojích v [Rychlých nástrojích](./quick-tools). Nové položky jsou ve výchozím stavu zaškrtnuté
- **✕** položku smaže
- Pokud byl místní soubor přesunut nebo smazán, karta zobrazí **Soubor nenalezen**

### Klávesové zkratky

Každá položka může mít vlastní klávesovou zkratku:

1. Rozbalte kartu a klikněte na tlačítko zkratky
2. Stiskněte požadovanou kombinaci kláves a uvolněte ji. Klávesou **Esc** zadání zrušíte
3. Zkratku odstraníte kliknutím na **Vymazat**

Pokud kombinaci již používá jiná funkce, neuloží se a tlačítko zobrazí zprávu o konfliktu. Zkratka funguje, i když Stream Toolkit není aktivní okno. Všechny zkratky jsou také uvedeny na stránce [Klávesové zkratky](./hotkeys).

## Obrázek

{/* TODO: 截圖 — 圖片分頁 */}

### Přidání obrázku

1. Klikněte na **Přidat obrázek**
2. Vyberte soubor (jpg, jpeg, png nebo gif). Název souboru se stane názvem obrázku

Po rozbalení karty se zobrazí náhled a tato nastavení:

- **Název**: název obrázku
- **Cesta k souboru**: kliknutím na **Vybrat znovu** zvolíte jiný soubor
- **Klávesová zkratka**: jedním stisknutím obrázek zobrazíte, dalším ho skryjete
- **Nastavit pozici a velikost**: viz níže
- **Smazat obrázek**: smaže obrázek

### Zobrazení a skrytí

Kliknutím na tlačítko **○** na kartě zobrazíte obrázek v OBS. Tlačítko se změní na **◉**. Dalším kliknutím obrázek skryjete.

### Nastavení zobrazení

**Povolit současné zobrazení více obrázků** je ve výchozím stavu vypnuto. Dokud je vypnuto, zobrazení obrázku skryje ten, který je právě zobrazen. Zapnutím můžete zobrazit několik obrázků současně.

### Nastavit pozici a velikost

- **Pozice X** / **Pozice Y**: v px. 0/0 je střed zdroje. Kladné hodnoty posouvají doprava/dolů, záporné doleva/nahoru
- **Šířka** / **Výška**: v % původní velikosti. 100 = původní velikost. Tlačítko 🔗 zamyká poměr stran (ve výchozím stavu zapnuto). Kliknutím na něj můžete měnit velikost volně
- Když je obrázek zobrazen, změny se v OBS zobrazují v reálném čase
- **Uložit** změny zachová, **Resetovat** vrátí hodnoty z doby otevření okna, **Zrušit** okno zavře bez uložení

## Video

{/* TODO: 截圖 — 影片分頁 */}

Kliknutím na **Přidat video** přidáte kartu, kterou poté rozbalte:

- **Název videa**: název zobrazený na kartě
- **Zdroj**: **YouTube** nebo **Místní**
  - **YouTube**: vložte odkaz na video do pole **URL YouTube**. Kliknutím na **Otestovat zpracování** ho ověříte. Při úspěchu se zobrazí „Zpracováno, při přehrávání se automaticky použije“
  - **Místní**: kliknutím na **Vybrat soubor** zvolte soubor mp4, webm nebo ogg. Limit velikosti je 200MB a větší soubory znamenají větší zpoždění. Pro průhledné pozadí použijte video WebM (VP9 Alpha)
- **Přehrávat ve smyčce**: opakuje video
- **Doba přehrávání**: nastavte **Od** a **Do** (hodiny, minuty, sekundy, ms). Ponecháte-li **Do** na 00:00, přehraje se do konce
- **Hlasitost**: 0–100 %
- **Klávesová zkratka**: stisknutím video přehrajete. Dalším stisknutím během přehrávání ho zastavíte
- **Nastavit pozici a velikost**: stejná pole pozice a velikosti jako u obrázků. Kliknutím na **Náhled ve smyčce** se video během úprav přehrává v OBS ve smyčce a kliknutím na **Zastavit náhled** ho zastavíte. Po dokončení klikněte na **Uložit** nebo **Zrušit**

Kliknutím na **▶** na kartě přehrajete video v OBS. Kliknutím na **■** ho zastavíte.

## Zvuk

{/* TODO: 截圖 — 音效分頁 */}

Kliknutím na **Přidat zvuk** přidáte kartu, kterou poté rozbalte:

- **Název zvuku**: název zobrazený na kartě
- **Zdroj**: **URL YouTube** nebo **Místní soubor**
  - **URL YouTube**: vložte odkaz a kliknutím na **Otestovat zpracování** ho ověřte
  - **Místní soubor**: kliknutím na **Vybrat soubor** zvolte soubor mp3, wav, ogg, flac, m4a, aac nebo opus
- **Doba přehrávání**: nastavte **Od** a **Do**. Ponecháte-li **Do** na 00:00, přehraje se do konce
- **Hlasitost**: 0–100 %
- **Klávesová zkratka**: stisknutím zvuk přehrajete

Kliknutím na **▶** na kartě přehrajete zvuk v OBS. Kliknutím na **■** ho zastavíte. Současně se přehrává pouze jeden zvuk. Spuštění dalšího zvuku zastaví ten aktuální.

:::info Omezení zkušební verze
- Můžete přidat pouze **1** obrázek, **1** video a **1** zvuk
- Overlaye obrázků a videí zobrazují vodoznak

Podrobnosti viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::

## Často kladené otázky

**Q: Videa nebo zvuky se přehrávají, ale ve streamu není slyšet zvuk.**
Ujistěte se, že je u zdrojů `/videoboard` a `/soundboard` zaškrtnuto **Ovládat zvuk přes OBS** a že zdroje nejsou ztlumené ve směšovači zvuku OBS.

**Q: Nemohu vybrat svůj videosoubor.**
Vybrat lze pouze soubory mp4, webm a ogg do 200MB. Pokud je soubor větší, zobrazí se zpráva s limitem a soubor se nepřidá.
