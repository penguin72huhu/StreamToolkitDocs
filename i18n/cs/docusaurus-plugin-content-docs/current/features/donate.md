---
sidebar_position: 7
---

# Ukazatel cíle darů

Zobrazuje ve streamu ukazatel průběhu směrem k cíli darů. Dary z platforem, které zvolíte, se automaticky přičítají k celkové částce.

## URL zdroje pro OBS

```
http://127.0.0.1:7272/donate
```

Zkopírujte URL z horní části stránky nastavení **Ukazatel cíle darů** a přidejte ji do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source).

Přepínačem vedle **Ukazatel cíle darů** v levém postranním panelu ukazatel v OBS zobrazíte nebo skryjete. Když je vypnutý, ukazatel je skrytý.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Měna

Ukazatel používá **Měna příspěvků** nastavenou na stránce **Nastavení**. Dary v jiných měnách se před přičtením převedou do této měny. Pokud měnu daru nelze převést, k ukazateli se nepřičte (Upozornění na dary a Přehled darů ho přesto zobrazí v původní měně).

## Karta Nastavení

### Napojené platformy

Zaškrtněte platformy, jejichž dary se mají započítávat do ukazatele:

- **Twitch** — Bits a předplatná
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Zelená tečka znamená, že je platforma připojena; jinak řádek zobrazuje **(nepřipojeno)**. Tato zaškrtávací políčka určují pouze to, co ukazatel započítává. Neovlivňují Upozornění na dary ani Přehled darů, které mají vlastní seznamy platforem.

- **YouTube**: pokud není propojen živý chat, řádek zobrazuje **URL chatu není připojena** se dvěma tlačítky: **Připojit automaticky** (vyžaduje přihlášení přes Google) a **Zadat ručně** (přenese vás k poli URL chatu v Nastavení). Viz [Nastavení YouTube](../platforms/youtube-settings).
- **YouTube ⚙️**: zvolte, které **Započítané události** se přičítají k ukazateli: **Super Chat**, **Super samolepka**, **Nový člen**, **Obnovení členství**, **Darované členství**, **Drahokamy**. **Drahokamy** vyžadují přihlášení přes Google.
- Pokud je zaškrtnuta některá událost členství, ale nejsou nastaveny ceny členství, zobrazí se **⚠ Ceny členství nenastaveny**. Kliknutím přejdete do Nastavení, kde zadáte ceny úrovní v **Nastavení přepočtu** u YouTube.
- Hodnota Bits a předplatných na Twitchi se nastavuje v Nastavení → Twitch → **Nastavení přepočtu**. Viz [Nastavení Twitch](../platforms/twitch).
- Připojení PayPal, Stripe, O'Pay nebo ECPay viz [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) a [ECPay](../payments/ecpay).

### Aktuální průběh

Zobrazuje aktuální celkovou částku, cíl a procento.

| Pole | Popis |
|-------|-------------|
| **Název** | Volitelné. Zobrazuje se nad ukazatelem. |
| **Cílová částka** | Cílová částka v měně příspěvků. |
| **Ruční přidání** | Zadejte částku a kliknutím na **Přidat** (nebo stisknutím Enter) ji přičtete k celkové částce. |
| **Vynulovat** | Nastaví aktuální celkovou částku zpět na nulu. Nejprve se zobrazí potvrzení. Tuto akci nelze vrátit zpět. |

## Karta Vzhled

### Náhled

Náhled zobrazuje ukazatel s ukázkovými částkami. Výběrem barvy vedle **Náhled** změníte pozadí náhledu. Zaškrtnutím **Náhled dosažení** zobrazíte ukazatel ve stavu po dosažení cíle.

### Písmo a barva

Kliknutím na **Obnovit výchozí** obnovíte výchozí vzhled.

- **Písmo**: nastavte písmo, barvu a velikost (8–72 px) pro **Název**, **Částka** a **Procenta**.
- **Barva**: nastavte **Pozadí**, **Panel cíle** (barva výplně) a **Panel cíle po dosažení** (barva výplně po dosažení cíle).

### Vlastní CSS

Rozbalením **Vlastní CSS** upravíte CSS ukazatele. **Obnovit výchozí** obnoví výchozí CSS a **Správa materiálů** otevře správce materiálů pro obrázky, které chcete v CSS použít. Zde lze také použít motivy ze Steam Workshop. Dokud je motiv použit, CSS je jen pro čtení, dokud ho neobnovíte. Viz [Motivy](./themes).

:::info Zkušební verze
Vlastní CSS je k dispozici pouze v plné verzi. Skutečné platební brány (PayPal / Stripe / O'Pay / ECPay), události členství YouTube a Drahokamy nelze ve zkušební verzi používat a overlay zobrazuje vodoznak. Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::

## Často kladené otázky

**Q: Po odeslání testovacího upozornění se celková částka zvýšila.**
**Test notifikace** na stránce Nastavení se počítá jako skutečný dar, takže se přičte k ukazateli (pokud je daná platforma zaškrtnutá). Po testování kliknutím na **Vynulovat** nastavíte celkovou částku zpět na nulu.
