---
sidebar_position: 6
---

# Značka nejlepších okamžiků streamu

Stisknutím klávesové zkratky během streamu zaznamenáte, „v kolikáté minutě streamu“ nastal zajímavý okamžik. Podle seznamu časů pak můžete při střihu snadno najít nejlepší okamžiky ve svém záznamu (VOD).

Značky se ukládají ve Stream Toolkit. Tato funkce nemá overlay pro OBS, takže nemusíte přidávat zdroj do OBS.

Stránka má dvě karty: **Nastavení** a **Záznamy sestřihů**.

:::tip
Zapněte přepínač vedle **Značka nejlepších okamžiků streamu** v levém postranním panelu. Dokud je vypnutý, značku nepřidá ani klávesová zkratka, ani tlačítko **MARK**.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Krok 1: Zvolte zdroj

**Zdroj** určuje, jak se počítá čas streamu:

| Zdroj | Jak se počítá čas | Požadavek |
|--------|----------------------------|-------------|
| **Twitch** | Čas od začátku vašeho aktuálního streamu na Twitchi | Připojený Twitch. Viz [Nastavení Twitch](../platforms/twitch) |
| **YouTube** | Čas od začátku vašeho aktuálního živého vysílání na YouTube | Přihlášení přes Google. Viz [Nastavení YouTube](../platforms/youtube-settings) |
| **Ruční zarovnání** (výchozí) | Hodnota ručního časovače na této stránce | Žádný |

Tečka vedle **Twitch** a **YouTube** ukazuje, zda je platforma připojena. Pokud ne, možnost zobrazuje **(nepřipojeno)** nebo **(nejste přihlášeni přes Google)**.

Pokud označíte okamžik, když nevysíláte (nebo u **Ruční zarovnání**, když je časovač zastavený), čas se zaznamená jako **Nevysíláte**. U zdroje **Twitch** může zobrazení tohoto výsledku trvat asi 20 sekund, protože Stream Toolkit to několikrát zkusí znovu pro případ, že Twitch ještě nezaregistroval právě zahájený stream.

### Ruční časovač

Když je zvoleno **Ruční zarovnání**, zobrazí se **Ruční časovač**:

1. Zadejte aktuální čas streamu ve formátu `HH:MM:SS` (například `00:00:00` přesně ve chvíli, kdy začnete vysílat)
2. Klikněte na **Spustit synchronizované měření**. Časovač začne počítat od této hodnoty
3. Každá značka použije aktuální hodnotu časovače
4. Kliknutím na **Zastavit** časovač zastavíte

### Vytvořit klip Twitch při označení

Tato možnost se zobrazí pouze tehdy, když je zdrojem **Twitch**. Když je zapnutá, každá značka zároveň vytvoří klip na Twitchi.

- Musíte vysílat živě. Klip je dlouhý asi 30 sekund
- Klipy se ukládají v Creator Dashboard → Content → Clips
- Po označení stránka zobrazí **Klip Twitch vytvořen** nebo důvod selhání: **Nevysíláte živě**, **Chybí oprávnění; znovu připojte Twitch**, **Twitch nepřipojen** nebo **Selhalo; zkuste znovu**

## Krok 2: Nastavte klávesovou zkratku

Výchozí zkratka je `Ctrl+Shift+M`. Postup změny:

1. Klikněte na tlačítko zkratky
2. Stiskněte požadovanou kombinaci kláves a uvolněte ji. Klávesou **Esc** zadání zrušíte
3. Zkratku odstraníte kliknutím na **Vymazat**

Pokud kombinaci již používá jiná funkce, tlačítko zobrazí **Tato zkratka je již použita** a zkratka se neuloží. Zkratka funguje, i když Stream Toolkit není aktivní okno.

Můžete také kliknout na tlačítko **MARK** pod zkratkou. Dělá totéž co zkratka. Tlačítko **MARK** má i okno [Rychlé nástroje](./quick-tools).

## Krok 3: Označujte během streamu

1. (Volitelné) Před označením zadejte název do pole **Název značky**. Pokud ho necháte prázdné, značky se číslují automaticky (`精華標記_1`, `精華標記_2`, …)
2. Stiskněte zkratku nebo klikněte na **MARK**

Zadaný název se použije pouze pro další značku a pole se poté vymaže.

## Záznamy sestřihů

Karta **Záznamy sestřihů** obsahuje všechny značky, od nejnovější. Každý řádek zobrazuje čas streamu, název, zdroj a datum a čas, kdy jste okamžik označili.

- **Kopírovat**: zkopíruje značku jako text ve formátu `[date] name 🎬 stream time (source)`
- **🗑️**: klikněte na něj a poté na **Potvrdit smazání**, čímž značku smažete
- **Otevřít klip Twitch**: zobrazí se, když byl pro tuto značku vytvořen klip na Twitchi. Otevře klip na Twitchi

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Omezení zkušební verze
**Vytvořit klip Twitch při označení** není k dispozici. Zobrazuje se jako „Dostupné v plné verzi“.

Podrobnosti viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
