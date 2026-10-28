---
sidebar_position: 15
---

# Živá hlasování

Spusťte hlasování ve streamu. Diváci hlasují zadáním čísla možnosti do chatu na Twitchi nebo YouTube a výsledky se v overlayi OBS aktualizují v reálném čase.

## URL zdroje pro OBS

```
http://127.0.0.1:7272/vote
```

Klikněte na **Kopírovat** vedle **URL zdroje pro OBS** v horní části stránky a přidejte URL do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source). Živá hlasování nepřehrávají žádný zvuk, takže nemusíte zaškrtávat „Ovládat zvuk přes OBS“.

:::tip
Zapněte také přepínač vedle **Živá hlasování** v levém postranním panelu (**Zapnout zobrazení v OBS**). Dokud je vypnutý, overlay zůstává skrytý.
:::

Stránka má tři karty: **Nastavení**, **Vzhled** a **Historie**.

## Spuštění hlasování (karta Nastavení)

### Platforma hlasování

Kliknutím na **Twitch** nebo **YouTube** zvolíte, chat které platformy může hlasovat. Můžete zvolit obě. Nepřipojená platforma zobrazuje **(nepřipojeno)** u Twitch nebo **URL chatu není připojena** u YouTube. Nejprve ji připojte:

- [Nastavení Twitch](../platforms/twitch)
- [Nastavení YouTube](../platforms/youtube-settings)

### Název hlasování

Volitelné. Například: „Jakou hru dnes večer?“

### Možnosti hlasování (2–10)

- Zadejte alespoň 2 možnosti. Můžete jich mít až 10
- **+ Přidat možnost** přidá řádek a **×** ho smaže
- **Použít z historie** vám umožní vybrat jedno z 15 posledních hlasování a vyplnit jeho název a možnosti

Během úprav zobrazuje overlay v OBS náhled názvu a možností.

### Doba hlasování

Délka hlasování v sekundách. Výchozí hodnota je 60 a minimum je 10.

### Spuštění / zastavení

- **Spustit hlasování**: vyžaduje alespoň 2 vyplněné možnosti a alespoň jednu vybranou platformu, která je připojená
- **Zastavit hlasování**: ukončí hlasování předčasně. Jinak skončí po vypršení času

Během hlasování nelze měnit platformy, název, možnosti ani dobu trvání.

{/* TODO: 截圖 — 投票設定分頁 */}

## Jak diváci hlasují

Během hlasování zobrazuje overlay text „Hlasujte zadáním čísla možnosti do chatu (např.: 1)“.

- Celá zpráva musí být číslo možnosti, například `1` nebo `1.`. Mezery se ignorují. Zpráva s jakýmkoli jiným textem se nepočítá
- Každý divák má jeden hlas. Pokud pošle jiné číslo, jeho hlas se přesune na novou možnost a počítá se poslední hlas před vypršením času

## Průběžné výsledky

Během hlasování se pod nastavením zobrazí **Průběžné výsledky** se zbývajícím časem, počtem hlasů a procentem pro každou možnost a s celkovým počtem hlasů. Po skončení hlasování se změní na **Konečné výsledky**. Kliknutím na **Podrobnosti** zobrazíte, kdo hlasoval pro kterou možnost, rozděleno podle Twitch a YouTube.

## Vzhled

Karta **Vzhled** má nahoře **Náhled**. Výběr barvy vedle něj mění pouze pozadí náhledu, ne overlay v OBS.

- **Písmo**: nastavte písmo, barvu a **Velikost** (px) pro **Název**, **Tip**, **Možnost**, **Odpočet** a **Počet hlasů**
- **Barva ukazatele**: až 5 barev, které se postupně použijí pro pruhy možností. Každá může být **Plná barva** nebo **Přechod**. Přechody mají navíc **Úhel**
- **Barva pozadí**: pozadí karty hlasování
- **Obnovit výchozí**: obnoví výchozí vzhled. Pokud je použit motiv, obnoví vzhled motivu

V sekci **Vlastní CSS** můžete napsat vlastní styly. Sdílení a stahování vzhledů viz [Motivy](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Historie

Karta **Historie** zobrazuje u každého hlasování název, čas, počet možností a celkový počet hlasů. Rozbalením hlasování zobrazíte jeho výsledky, počet hlasů podle platformy a **Podrobnosti**. Uchovává se pouze historie hlasování za posledních 30 dní. Záznam smažete kliknutím na 🗑 a poté na **Potvrdit smazání**.

:::info Omezení zkušební verze
- **Vlastní CSS** je k dispozici pouze v plné verzi
- Overlay v OBS zobrazuje vodoznak

Podrobnosti viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
