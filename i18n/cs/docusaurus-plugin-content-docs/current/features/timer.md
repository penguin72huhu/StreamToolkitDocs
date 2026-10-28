---
sidebar_position: 11
---

# Časovač

Zobrazujte ve streamu odpočty nebo stopky. Odpočtu lze přidávat nebo ubírat čas tlačítky, na která kliknete, nebo automaticky při sledování, předplatném a Bits na Twitchi a při darech.

Stránka má dvě karty: **Nastavení** a **Vytvořit časovač**. Nejprve vytvořte časovač, potom ho ovládejte na kartě **Nastavení**.

## Krok 1: Vytvořte časovač

1. V levém postranním panelu otevřete **Časovač** a přepněte na kartu **Vytvořit časovač**
2. V sekci **Moje časovače** klikněte na **Přidat**. Vytvoří se nový odpočet s výchozím časem 10 minut a třemi možnostmi času (+30 s, +1 min, +5 min)
3. Kliknutím na kartu časovače ho upravíte. Kliknutím na **✕** na kartě daný časovač smažete

**Náhled** ukazuje, jak vybraný časovač vypadá. Barevným polem vedle něj změníte pozadí náhledu.

Pod náhledem přepínáte mezi **Nastavení časovače** a **Vzhled**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Krok 2: Nastavení časovače

### Režim měření

- **Odpočet**: odpočítává od výchozího času
- **Stopky**: počítají od 0 nahoru a umí zaznamenávat mezičasy. Režim stopek nemá výchozí čas, čas upozornění, zvuk na konci ani možnosti času

### Název

Název zobrazený v seznamu časovačů, v rozbalovacích seznamech a v Rychlých nástrojích.

### Výchozí čas

Počáteční čas odpočtu v hodinách, minutách a sekundách. Vedle se zobrazuje celkový počet sekund.

### Čas upozornění

Když zbývající čas dosáhne této hodnoty, text časovače se přepne na barvu **Upozornění** nastavenou ve **Vzhled**. Ponecháte-li 0, upozornění nebude.

### Zvuk na konci odpočtu

Zvuk přehraný, když odpočet dosáhne 0. Zvolte **Žádný** nebo jeden z vestavěných zvuků (**Zvonkohra**, **Mince**, **Zvonek**, **Prásk**, **Fanfára**). Kliknutím na **▶** ho vyzkoušíte. Chcete-li použít vlastní soubor, klikněte na **Vybrat zvuk** a vyberte ho ze správce materiálů.

Zvuk přehrává prohlížeč v OBS, proto u zdroje časovače zaškrtněte **Ovládat zvuk přes OBS**. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source).

### Možnosti času

Možnosti času jsou tlačítka pro přidání/ubrání času u odpočtu. Každý časovač jich může mít až 20.

Novou přidáte vyplněním formuláře **Přidat možnost času**:

1. **Zdroj spuštění**: zvolte, co tuto možnost použije automaticky
   - **Ručně**: použije se pouze po kliknutí na tlačítko
   - **Sledování**: použije se při každém novém sledování na Twitchi
   - **Twitch Bits**: použije se při cheerech s Bits
   - **Nové předplatné Twitch**: použije se při předplatném na Twitchi
   - **Příspěvek**: použije se při darech. V **Platformy příspěvků** zvolte, které z **YouTube**, **O'Pay**, **ECPay** a **PayPal** se počítají
2. U **Twitch Bits** a **Příspěvek** nastavte také:
   - **Práh spuštění**: počet Bits nebo částka daru pro jeden krok
   - **Způsob přepočtu**: **Spuštění po celých násobcích** nebo **Poměrný přepočet** (viz příklad níže)
3. **Přidat čas**: zvolte **＋** nebo **－** a nastavte hodiny, minuty a sekundy
4. Klikněte na **Přidat**

Možnost změníte kliknutím na její **Upravit**, úpravou formuláře a kliknutím na **Uložit** (nebo **Zrušit**). Kliknutím na **✕** ji smažete. Možnosti s automatickým spuštěním jsou označeny 🔗 a názvem spouštěče.

**Příklad přepočtu**: Práh spuštění 100 bits, Přidat čas +1 min a divák pošle cheer 250 bits:

- **Spuštění po celých násobcích**: počítají se pouze celé násobky prahu → 2 × 1 min = **+2 min**
- **Poměrný přepočet**: 250 ÷ 100 × 1 min → **+2 min 30 s**

U darů se částka před porovnáním s prahem převede na měnu zvolenou v Nastavení aplikace.

:::note
- Automatické spouštění ovlivňuje pouze odpočty
- Možnosti času s automatickým spuštěním se v ovládacím panelu stále zobrazují jako tlačítka, takže na ně můžete kliknout i ručně
- **Nové předplatné Twitch** se použije jednou za každou událost předplatného: dar více předplatných ho použije jednou. Obnovená předplatná ho použijí pouze tehdy, když je v [Ukazateli cíle Twitch](./goal) zapnuto **Započítat obnovené předplatné**
:::

### Ovládací zkratky

Nastavte pro tento časovač klávesové zkratky:

- **Spustit / pozastavit**
- **Zkratka mezičasu** (pouze stopky)
- **Zkratka resetu**

Viz také [Klávesové zkratky](./hotkeys).

## Krok 3: Vzhled

| Nastavení | Popis |
|---------|-------------|
| **Písmo** | Písmo textu času |
| **Velikost písma** | 12–300 px |
| **Barva písma** | **Normální**: **Plná barva** nebo **Přechod** (dvě barvy a **Úhel**). **Upozornění** (pouze odpočet): barva použitá po dosažení času upozornění |
| **Barva pozadí** | Pozadí za časem |
| **Okraj** | Barva obrysu, **Průhlednost** a **Tloušťka** (0–20 px) |
| **Stín** | Barva stínu, **Průhlednost**, **Rozostření** a posun **X** / **Y** |

## Krok 4: Zvolte režim zobrazení a přidejte zdroj do OBS

Přepněte na kartu **Nastavení**. V sekci **Ovládání** zvolte **Režim zobrazení**:

| Režim | Popis | URL zdroje pro OBS |
|------|-------------|----------------|
| **Jeden časovač** | OBS zobrazuje pouze vybraný časovač. Časovače přepínáte rozbalovacím seznamem **Aktuální časovač** | `http://127.0.0.1:7272/timer` |
| **Více časovačů** | Každý časovač má vlastní URL a lze ho do OBS přidat samostatně | `http://127.0.0.1:7272/timer/<timer ID>` |

V režimu **Více časovačů** vyberte časovače v **Přidat do zobrazení**. Každý přidaný časovač dostane vlastní kartu se svou **URL zdroje pro OBS**. Kliknutím na **Kopírovat** ji zkopírujete. Kliknutím na **✕** na kartě časovač ze zobrazení odeberete.

Zkopírovanou URL přidejte do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source).

:::tip
Zapněte také přepínač vedle **Časovač** v levém postranním panelu (**Zapnout zobrazení v OBS**). Dokud je vypnutý, časovač je v OBS skrytý.
:::

## Krok 5: Ovládejte časovač

Každá karta časovače na kartě **Nastavení** obsahuje:

- **Spustit** / **Pozastavit**: u stopek má tlačítko pozastavení popisek **Zastavit**. Odpočet, který dosáhl 0, nelze spustit, dokud ho neresetujete nebo nepřidáte čas
- **Mezičas** (pouze stopky): během běhu zaznamená mezičas. Mezičasy se zobrazují pod kartou s časem a rozdílem oproti předchozímu mezičasu
- **Resetovat**: zastaví časovač, vrátí ho na výchozí čas (u stopek na 0) a vymaže mezičasy
- **Přidat čas** (pouze odpočet): jedno tlačítko pro každou možnost času

Běžící čas se zobrazuje pouze v overlayi OBS, ne na stránce nastavení. Časovače můžete ovládat také z okna [Rychlé nástroje](./quick-tools), které zobrazuje i aktuální čas.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Omezení zkušební verze
Můžete vytvořit pouze **1** časovač. Podrobnosti viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
