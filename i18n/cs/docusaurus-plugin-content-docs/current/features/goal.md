---
sidebar_position: 10
---

# Ukazatel cíle Twitch

Zobrazte ve streamu ukazatele průběhu pro své cíle sledujících, předplatných a Bits na Twitchi. Každý typ cíle má vlastní ukazatel, vlastní nastavení a vlastní URL pro OBS.

:::note Než začnete
Ukazatele cílů počítají události z Twitche, proto nejprve připojte svůj účet Twitch. Viz [Nastavení Twitch](../platforms/twitch).
:::

## Krok 1: Zvolte typ cíle a přidejte zdroj do OBS

V horní části stránky zvolte typ cíle: **Sledování**, **Předplatné** nebo **Bits**. **URL pro OBS** pod tlačítky se podle toho změní. Kliknutím na **Kopírovat** ji zkopírujete.

| Typ cíle | URL zdroje pro OBS |
|-----------|----------------|
| **Sledování** | `http://127.0.0.1:7272/goal/follow` |
| **Předplatné** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Každý ukazatel, který chcete zobrazit, přidejte do OBS jako samostatný prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source). Ukazatele cílů nepřehrávají žádný zvuk, takže nemusíte zaškrtávat „Ovládat zvuk přes OBS“.

:::tip
Zapněte také přepínač vedle **Ukazatel cíle Twitch** v levém postranním panelu (**Zapnout zobrazení v OBS**). Dokud je vypnutý, ukazatele jsou v OBS skryté.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Krok 2: Nastavte cíl

Všechna níže uvedená nastavení platí pro typ cíle, který jste zvolili nahoře.

- **Název**: text názvu zobrazený na ukazateli
- **Cíl**: cílové číslo (celá čísla, 0 nebo více)
- **Průběh**: zobrazuje aktuální počet, cíl a procento

### Jak se počítá průběh

| Typ cíle | Co zvyšuje průběh |
|-----------|----------------------|
| **Sledování** | Každé nové sledování přidá 1. Když je Twitch připojen, počet se navíc každých 30 sekund synchronizuje s celkovým počtem sledujících vašeho kanálu na Twitchi. Kliknutím na **Synchronizovat** ho synchronizujete okamžitě |
| **Předplatné** | Nová předplatná a darovaná předplatná (dar více předplatných přidá počet darovaných předplatných). Obnovená předplatná se počítají, pouze když je zapnuto **Započítat obnovené předplatné** |
| **Bits** | Každý cheer přidá počet poslaných Bits |

### Možnosti předplatného

Zobrazují se pouze u **Předplatné**:

- **Vážené podle Tier (T1=+1, T2=+2, T3=+6)**: když je zapnuto, předplatná vyšší úrovně přidají k průběhu více. Když je vypnuto, každé předplatné přidá 1
- **Započítat obnovené předplatné**: když je zapnuto, k průběhu se přičítají i zprávy o obnovení předplatného

### Resetování průběhu

**Předplatné** a **Bits** mají tlačítko **Resetovat průběh**. Klikněte na něj a poté na **Potvrdit reset**, čímž aktuální počet nastavíte zpět na 0. Cílové číslo zůstane zachováno.

**Sledování** tlačítko pro reset nemá, protože jeho počet odpovídá celkovému počtu vašich sledujících na Twitchi.

## Krok 3: Upravte vzhled

### Náhled

**Náhled** nahoře zobrazuje ukazatel pro zvolený typ cíle. Barevným polem vedle něj změníte pozadí náhledu. Zaškrtnutím **Náhled dosažení** uvidíte, jak bude ukazatel vypadat po dosažení cíle.

### Nastavení vzhledu

| Nastavení | Popis |
|---------|-------------|
| **Barva pozadí** | Pozadí ukazatele |
| **Barva ukazatele** | Barva vyplněné části |
| **Barva po dosažení** | Barva výplně po dosažení cíle |
| **Text názvu** | Písmo, barva a velikost (8–72 px) názvu |
| **Text cíle** | Písmo, barva a velikost (8–72 px) čísel |
| **Procenta** | Písmo, barva a velikost (8–72 px) procent |

Kliknutím na **Obnovit výchozí** obnovíte vzhled zvoleného typu cíle.

### Vlastní CSS

Kliknutím na **Vlastní CSS** rozbalíte editor. Každý typ cíle má vlastní CSS. Používejte ho pro rozvržení a strukturu. Barvy, písma a velikosti se nastavují ve výše uvedeném nastavení vzhledu.

- **Obnovit výchozí**: obnoví výchozí CSS
- **Správa materiálů**: otevře správce materiálů pro obrázky používané ve vašem CSS

Pokud vaše CSS přepíše některou vlastnost pomocí `!important`, odpovídající ovládací prvek vzhledu se uzamkne, protože CSS by stejně mělo přednost.

:::info Omezení zkušební verze
- **Vlastní CSS** je k dispozici pouze v plné verzi
- Overlay v OBS zobrazuje vodoznak

Podrobnosti viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
