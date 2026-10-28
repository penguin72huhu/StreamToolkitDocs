---
sidebar_position: 2
---

# Ovládání scén OBS

**Ovládání scén OBS** umožňuje přepínat scény a zobrazovat/skrývat zdroje ve vašem streamovacím softwaru pomocí globálních klávesových zkratek nebo z [Rychlých nástrojů](./quick-tools). Funguje s **OBS Studio**, **Streamlabs** a **Meld Studio**.

Tato funkce nemá overlay, takže do OBS není potřeba přidávat žádný prohlížeč.

:::info
Klávesové zkratky fungují pouze tehdy, když je v postranním panelu zapnutý přepínač **Ovládání scén OBS**. Fungují i tehdy, když je okno Stream Toolkit minimalizované do systémové lišty.
:::

Stránka nastavení má dvě karty: **Připojení** a **Zkratky**.

## Karta Připojení

### Krok 1: Zvolte svůj software

V sekci **Software** zvolte **OBS Studio**, **Streamlabs** nebo **Meld Studio**. Změnit to lze pouze v odpojeném stavu.

Každý software má vlastní klávesové zkratky a seznam scén, takže po přepnutí softwaru se zobrazí jeho vlastní nastavení.

### Krok 2: Připravte software

#### OBS Studio

1. V OBS otevřete **Tools → WebSocket Server Settings**
2. Zaškrtněte **Enable WebSocket server**
3. Kliknutím na **Show Connect Info** zobrazíte heslo
4. Ve Stream Toolkit vyplňte **Hostitel** (výchozí `localhost`), **Port** (výchozí `4455`) a **Heslo**

#### Streamlabs / Meld Studio

Není potřeba žádné nastavení — stačí mít program spuštěný.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Krok 3: Připojte se

Klikněte na **Připojit**. **Stav** se změní na **Připojeno** (u OBS a Meld se zobrazí také číslo verze). Kliknutím na **Odpojit** připojení ukončíte.

**Připojit při spuštění** (ve výchozím stavu zapnuto): připojí se automaticky při spuštění Stream Toolkit a při zapnutí přepínače funkce. Vypnutím přepínače funkce se připojení ukončí.

### Scény

Sekce **Scény** zobrazuje vaše scény a počet zdrojů v každé z nich; aktuální scéna je zvýrazněna. Po změně scén ve vašem softwaru načtete aktuální seznam kliknutím na **Obnovit**.

V odpojeném stavu se stále zobrazuje naposledy načtený seznam.

## Karta Zkratky

Klávesovou zkratku nastavíte kliknutím na **Klikněte pro nastavení zkratky** a stisknutím kombinace kláves. Klávesou `Esc` zadání zrušíte. Pokud kombinaci již používá jiná funkce, zobrazí se **Konflikt klávesových zkratek** a zkratka se neuloží. Kliknutím na **✕** vedle zkratky ji vymažete.

### Přepnout scénu

1. Klikněte na **Přidat**
2. Nastavte klávesovou zkratku
3. Vyberte scénu, na kterou se má přepnout

Kliknutím na **✕** na konci řádku ho smažete.

### Přepnout zdroje

Jedna klávesová zkratka může ovládat několik zdrojů ve stejné scéně najednou.

1. Klikněte na **Přidat**
2. Nastavte klávesovou zkratku
3. Zadejte **Název** (volitelné — použije se jako popisek tlačítka v Rychlých nástrojích; pokud je prázdný, použije se název scény)
4. Vyberte scénu, do které zdroje patří
5. Klikněte na **Přidat zdroj**, vyberte zdroj a zvolte **Zobrazit**, **Skrýt** nebo **Přepnout** (výchozí **Přepnout**)
6. Pro další zdroje opakujte krok 5

Změnou scény u položky se vymaže její seznam zdrojů.

:::tip
Scéna nebo zdroj, které ve vašem softwaru již neexistují, jsou označeny červeně. Vyberte je znovu z rozbalovacího seznamu.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Použití z Rychlých nástrojů

Když je funkce zapnutá a existuje alespoň jedna položka klávesové zkratky, [Rychlé nástroje](./quick-tools) zobrazí kartu **Ovládání scén OBS** s tlačítkem pro každou položku. Kliknutí na tlačítko má stejný účinek jako stisknutí jeho zkratky.

## Chybové zprávy

Při použití klávesové zkratky nebo tlačítka se mohou zobrazit tyto zprávy:

| Zpráva | Význam |
|---------|---------|
| **Nepřipojeno k OBS** | Není připojeno — přejděte na kartu **Připojení** a klikněte na **Připojit** |
| **Scéna „…“ nenalezena** | Scéna byla ve vašem softwaru přejmenována nebo smazána |
| **Zdroje nenalezeny: …** | Tyto zdroje ve scéně již neexistují |

## Omezení zkušební verze

:::info
Zkušební verze umožňuje celkem **1** položku klávesové zkratky (Přepnout scénu a Přepnout zdroje dohromady). Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::

## Často kladené otázky

**Q: Zobrazilo se, že se nelze spojit s OBS, a po otevření OBS se připojení nezkusilo znovu.**
Pokud se úplně první pokus o připojení nezdaří (například OBS ještě neběželo), Stream Toolkit to dál nezkouší. Otevřete svůj streamovací software a klikněte na **Připojit**. Jakmile se připojení jednou podaří, při jeho výpadku se automaticky připojí znovu.
