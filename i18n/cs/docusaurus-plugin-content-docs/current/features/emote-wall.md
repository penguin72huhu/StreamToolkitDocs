---
sidebar_position: 13
---

# Stěna emotikonů

Když diváci použijí v chatu emotikony, proletí přes váš stream.

:::note Než začnete
Stěna emotikonů čte emotikony z chatu, proto nejprve připojte platformy, které používáte. Viz [Nastavení Twitch](../platforms/twitch) a [Nastavení YouTube](../platforms/youtube-settings).
:::

## Krok 1: Přidejte zdroj do OBS

Zkopírujte **URL zdroje pro OBS** v horní části stránky:

```
http://127.0.0.1:7272/emote-wall
```

Přidejte ji do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source). Stěna emotikonů nepřehrává žádný zvuk, takže nemusíte zaškrtávat „Ovládat zvuk přes OBS“.

:::tip
Zapněte také přepínač vedle **Stěna emotikonů** v levém postranním panelu (**Zapnout zobrazení v OBS**). Dokud je vypnutý, emotikony z chatu se do overlaye neodesílají.
:::

## Krok 2: Vyberte zdroje

V sekci **Zdroj** je karta pro **Twitch** a karta pro **YouTube**. Každá karta zobrazuje stav připojení:

- Twitch zobrazuje **(nepřipojeno)**, pokud váš účet Twitch není připojen
- YouTube zobrazuje **URL chatu není připojena**, pokud chat YouTube není připojen

Zaškrtnutím **Povolit zeď emotikonů** na kartě budete zobrazovat emotikony z chatu dané platformy. Zrušením zaškrtnutí danou platformu ignorujete.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Krok 3: Nastavení animace

| Nastavení | Popis |
|---------|-------------|
| **Velikost emotikonů** | Velikost každého emotikonu, 16–256 px |
| **Max. počet emotikonů na zprávu** | Z jedné zprávy v chatu se použije nejvýše tolik emotikonů (1–20) |
| **Doba plynutí** | Jak dlouho každý emotikon plyne, 1–30 sekund |
| **Rychlost plynutí** | 50–500 px/s |

Kliknutím na **Obnovit výchozí** vedle názvu sekce obnovíte všechny čtyři hodnoty.

## Krok 4: Test

Kliknutím na **Test (zobrazit v OBS)** odešlete do overlaye ukázkové emotikony Twitch s aktuálním nastavením. Počet testovacích emotikonů se řídí hodnotou **Max. počet emotikonů na zprávu**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Omezení zkušební verze
Overlay v OBS zobrazuje vodoznak, dokud jsou na obrazovce emotikony. Podrobnosti viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
