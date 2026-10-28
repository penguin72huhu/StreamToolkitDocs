---
sidebar_position: 16
---

# Losování

Diváci se zapojí napsáním klíčového slova do chatu na Twitchi nebo YouTube. Po uzavření přihlašování vylosujte náhodně výherce a v overlayi OBS se přehraje animace losování.

## URL zdroje pro OBS

```
http://127.0.0.1:7272/lottery
```

Klikněte na **Kopírovat** vedle **URL zdroje pro OBS** v horní části stránky a přidejte URL do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source). Losování nepřehrává žádný zvuk, takže nemusíte zaškrtávat „Ovládat zvuk přes OBS“.

:::tip
Zapněte také přepínač vedle **Losování** v levém postranním panelu (**Zapnout zobrazení v OBS**). Dokud je vypnutý, overlay zůstává skrytý.
:::

Stránka má dvě karty: **Nastavení** a **Historie**.

## Nastavení

### Platforma hlasování

Kliknutím na **Twitch** nebo **YouTube** zvolíte, z chatu které platformy se lze zapojit. Můžete zvolit obě. Nepřipojená platforma zobrazuje **(nepřipojeno)** u Twitch nebo **URL chatu není připojena** u YouTube. Připojení viz [Nastavení Twitch](../platforms/twitch) a [Nastavení YouTube](../platforms/youtube-settings).

### Klíčové slovo slosování

Zpráva v chatu, která obsahuje toto klíčové slovo, diváka přihlásí. Každý divák se může do jednoho losování přihlásit pouze jednou. Dokud je klíčové slovo prázdné, nelze kliknout na **Spustit sběr**.

### Doba slosování

Jak dlouho zůstává přihlašování otevřené, v sekundách. Výchozí hodnota je 300 a rozsah je 10–3600.

### Max. účastníků

Přihlašování se uzavře předčasně, jakmile se zapojí tento počet lidí. Zadejte `0` pro neomezený počet.

### Po vylosování odstranit možnost

Když je tato volba zapnutá, výherce se před dalším losováním odebere z účastníků, takže v daném losování nemůže být vylosován znovu.

### Text nápovědy

Nápověda zobrazená v overlayi během přihlašování, která divákům sděluje klíčové slovo a počet účastníků. Nastavte její písmo, barvu a velikost (px).

### Animace slosování

- **Rychlé střídání ID** (výchozí): jména účastníků během přihlašování plují po obrazovce a při losování se rychle střídají
  - **Písmo obrazovky sběru**: písmo, velikost písma a barvy štítků se jmény (až 5)
  - **Písmo animace losování**: písmo a velikost písma střídajících se jmen při losování
  - **Obnovit výchozí**: obnoví tato nastavení
- **Animace rulety**: účastníci jsou rozmístěni na kole, které se roztočí a vybere výherce. Zvolte barevné schéma: **Minimalistický** nebo vlastní motiv, který jste vytvořili v [Kole štěstí](./turntable)

Během přihlašování nelze měnit platformy, klíčové slovo, dobu, maximální počet účastníků, Po vylosování odstranit možnost ani typ animace.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Průběh losování

1. Klikněte na **Spustit sběr**. Panel zobrazí **Sbírání…**, zbývající čas a počet účastníků
2. Během přihlašování můžete zadat jméno do pole **Ručně zadejte jméno účastníka** a kliknout na **Přidat** (nebo stisknout Enter). U jména, které už na seznamu je, se zobrazí „Toto ID je již na seznamu“
3. Chcete-li přihlašování uzavřít před vypršením času, klikněte na **Ukončit sběr**. Přihlašování se uzavře také po vypršení času nebo při dosažení hodnoty **Max. účastníků**. Panel pak zobrazí **Čas vypršel!**
4. Klikněte na **Spustit losování**. Overlay přehraje animaci a po jejím skončení se výherce zobrazí pod **Výherce**
5. Dalšího výherce vylosujete kliknutím na **Losovat znovu**

Kliknutím na **Zrušit losování** v jakékoli fázi vymažete všechny účastníky i výherce a overlay se vrátí do stavu čekání.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Historie

Karta **Historie** uchovává jeden záznam pro každé losování s časem, klíčovým slovem a počtem účastníků. Rozbalením záznamu zobrazíte výherce a úplný seznam účastníků. Uchovává se pouze historie losování za posledních 30 dní. Záznam smažete kliknutím na 🗑 a poté na **Potvrdit smazání**.

:::info Omezení zkušební verze
Overlay v OBS zobrazuje vodoznak. Podrobnosti viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
