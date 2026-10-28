---
sidebar_position: 4
---

# Překlad řeči

Podržte klávesovou zkratku a mluvte. Stream Toolkit převede vaši řeč na text, přeloží ji a oba řádky zobrazí v OBS jako titulky.

Rozpoznávání řeči běží na vašem vlastním počítači pomocí modelu Whisper. Text se poté přeloží pomocí MyMemory.

Stránka má dvě karty: **Nastavení** a **Vzhled**.

## Krok 1: Přidejte zdroj do OBS

URL zdroje pro OBS se zobrazuje v horní části stránky:

```
http://127.0.0.1:7272/voice-translate
```

Klikněte na **Kopírovat** a přidejte URL do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source). Překlad řeči nepřehrává žádný zvuk, takže nemusíte zaškrtávat „Ovládat zvuk přes OBS“.

Titulky se zobrazují v dolní části zdroje: původní text nahoře a překlad pod ním. Po uplynutí **Doba zobrazení titulků** zmizí.

:::tip
Zapněte přepínač vedle **Překlad řeči** v levém postranním panelu (**Zapnout zobrazení v OBS**). Klávesová zkratka funguje pouze tehdy, když je zapnutý.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Krok 2: Nastavte klávesovou zkratku

V sekci **Klávesová zkratka (drž pro nahrávání, pusť pro rozpoznání)**:

1. Klikněte na **Klikněte pro nastavení zkratky**
2. Stiskněte požadovanou kombinaci kláves a uvolněte ji. Klávesou **Esc** zadání zrušíte
3. Zkratku odstraníte kliknutím na **Vymazat**

Pokud kombinaci již používá jiná funkce, tlačítko zobrazí **Konflikt klávesových zkratek** a zkratka se neuloží.

Zkratka funguje, i když Stream Toolkit není aktivní okno. Během mluvení ji **držte** a poté ji **uvolněte**, čímž spustíte rozpoznání a překlad. Nahrávání se automaticky zastaví po 15 sekundách.

Můžete také myší podržet tlačítko **REC** pod zkratkou. Funguje stejně: stisknutím nahráváte, uvolněním přeložíte. Okno [Rychlé nástroje](./quick-tools) má stejné tlačítko **REC**.

## Krok 3: Nastavení rozpoznávání

| Pole | Popis |
|-------|-------------|
| **Stav modelu** | Zobrazuje **Načítání xx%**, **Připraveno** nebo **Načtení modelu selhalo**. Nahrávat můžete, jakmile se zobrazí **Připraveno** |
| **Model Whisper** | **Tiny (nejrychlejší, cca 40 MB)**, **Base (doporučeno, cca 75 MB)** (výchozí) nebo **Small (nejpřesnější, cca 245 MB)**. Model se stáhne při prvním použití. Změna modelu ho znovu načte |
| **Jazyk řeči** | Jazyk, kterým mluvíte. Výchozí je tradiční čínština |
| **Mikrofon** | Mikrofon, ze kterého se nahrává. **Systémový výchozí** používá výchozí vstupní zařízení Windows |

## Krok 4: Nastavení překladu

| Pole | Popis |
|-------|-------------|
| **Doba zobrazení titulků** | Jak dlouho zůstávají titulky na obrazovce, 1–30 sekund. Výchozí je 5 |
| **Cílový jazyk** | Jazyk, do kterého se překládá. Výchozí je angličtina |
| **Při cílovém jazyce English použít překlad Whisper** | Když je cílovým jazykem angličtina, překládá Whisper místo MyMemory. (Zdarma bez kvóty, ale s větším zpožděním.) U jiných cílových jazyků nemá žádný vliv |
| **Překladová služba** | MyMemory |

### Email (volitelné)

MyMemory je zdarma. Jeho denní kvóta závisí na tom, zda zadáte e-mail:

- Bez e-mailu: 5 000 znaků/den
- S e-mailem: 50 000 znaků/den (zdarma, registrace u MyMemory není potřeba)

Zadejte svůj e-mail a klikněte na **Uložit**. Tento e-mail je **Sdíleno s překladem chatu**.

Ukazatel níže zobrazuje **Dnes využito (přibližně, reset denně v 08:00 UTC)**. Po vyčerpání kvóty se zobrazí **Kvóta vyčerpána**.

## Krok 5: Vzhled

Na kartě **Vzhled** můžete změnit vzhled titulků. Změny se ukládají okamžitě.

- **Náhled**: zobrazuje ukázkové titulky. Barevné pole vedle něj mění pouze pozadí náhledu
- **Zarovnání**: **Vlevo** (výchozí), **Na střed** nebo **Vpravo**
- **Písmo**: jeden řádek pro **Původní jazyk** (původní text) a jeden pro **Cílový jazyk** (překlad). Každý řádek má písmo, barvu a velikost (8–120 px). Výchozí hodnoty jsou 14 px pro původní text a 22 px pro překlad
- **Stín**: barva stínu textu
- **Obnovit výchozí**: obnoví výchozí vzhled

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Omezení zkušební verze
**Cílový jazyk** je pevně nastaven na angličtinu. Stránka zobrazuje „Demo verze podporuje pouze překlad do angličtiny“.

Podrobnosti viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::

## Často kladené otázky

**Q: Držím zkratku, ale nic se neděje.**
Zkontrolujte, zda je zapnutý přepínač vedle **Překlad řeči** v levém postranním panelu a zda **Stav modelu** zobrazuje **Připraveno**.

**Q: Nahrávání funguje, ale v OBS se nezobrazují titulky.**
Pokud MyMemory nemůže přeložit (například je vyčerpána denní kvóta), titulky se nezobrazí. Zkontrolujte ukazatel **Dnes využito**. Zadáním e-mailu kvótu zvýšíte. Pokud je cílovým jazykem angličtina, můžete také zapnout **Při cílovém jazyce English použít překlad Whisper**, který kvótu nemá.
