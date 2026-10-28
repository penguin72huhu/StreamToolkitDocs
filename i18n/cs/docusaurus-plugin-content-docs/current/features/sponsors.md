---
sidebar_position: 9
---

# Přehled darů

Zobrazuje ve streamu seznam nedávných darů: ikonu platformy, jméno přispěvatele, částku a zprávu.

## URL zdroje pro OBS

```
http://127.0.0.1:7272/sponsors
```

Zkopírujte URL z horní části stránky nastavení **Přehled darů** a přidejte ji do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source).

Přepínačem vedle **Přehled darů** v levém postranním panelu přehled v OBS zobrazíte nebo skryjete. Když je vypnutý, přehled postupně zmizí. Dary se zaznamenávají i tehdy, když je vypnutý.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Karta Nastavení

### Napojené platformy

Zaškrtněte platformy, jejichž dary se mají zaznamenávat: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Zelená tečka znamená, že je platforma připojena; jinak řádek zobrazuje **(nepřipojeno)**. Tato zaškrtávací políčka ovlivňují pouze přehled, ne Ukazatel cíle darů ani Upozornění na dary.

**Twitch ⚙️** (zobrazí se, když je Twitch připojen a zaškrtnut):

1. Zvolte **Počítat Bits i předplatné**, **Počítat pouze Bits** nebo **Počítat pouze předplatné**
2. **Započítat obnovené předplatné**: zda se zaznamenávají obnovená předplatná (zobrazí se, když se počítají předplatná)
3. **Méně než [N] Bits se nezapočítává**: zaškrtněte a zadejte minimum, aby se menší cheery nezaznamenávaly (zobrazí se, když se počítají Bits)
4. Klikněte na **Uložit**

**YouTube ⚙️**:

- **Zobrazovat jména diváků místo @handle**: k dispozici až po přihlášení přes Google.
- **Započítané události**: **Super Chat**, **Super samolepka**, **Nový člen**, **Obnovení členství**, **Darované členství**, **Drahokamy**. **Drahokamy** vyžadují přihlášení přes Google. Dary Drahokamů se zobrazují jako ikona drahokamu s počtem drahokamů místo peněžní částky.

Pokud není propojen živý chat YouTube, řádek zobrazuje **URL chatu není připojena** s tlačítky **Připojit automaticky** (vyžaduje přihlášení přes Google) a **Zadat ručně** (přenese vás k poli URL chatu v Nastavení). Pokud je zaškrtnuta událost členství, ale nejsou nastaveny ceny členství, klikněte na **⚠ Ceny členství nenastaveny** a nastavte je. Viz [Nastavení YouTube](../platforms/youtube-settings).

Připojení PayPal, Stripe, O'Pay nebo ECPay viz [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) a [ECPay](../payments/ecpay).

### Nastavení

| Pole | Popis |
|-------|-------------|
| **Automaticky přepočítat na vlastní měnu** | Ve výchozím stavu zapnuto. Zobrazuje částky převedené na **Měna příspěvků** nastavenou na stránce Nastavení. |
| **Max. zobrazení** | Kolik záznamů se uchovává (1–100). Výchozí: 20. Když po dosažení tohoto limitu dorazí nový dar, nejstarší záznam se odstraní. |

## Karta Vzhled

### Náhled

Výběrem barvy vedle **Náhled** změníte pozadí náhledu. Kliknutím na **Test animace přidání** přehrajete animaci příchodu s ukázkovým záznamem. Ukázka se do historie neukládá.

Kliknutím na **Obnovit výchozí** obnovíte výchozí vzhled.

### Nastavení zobrazení

- **Zobrazit ikonu platformy**: zobrazí u každého záznamu ikonu platformy.
- **Směr příchodu**: **Shora dolů** (výchozí), **Zdola nahoru**, **Zleva doprava** nebo **Zprava doleva**.

### Písmo

Nastavte písmo, barvu a velikost (8–72 px) pro **Název** (jméno přispěvatele), **Text** (zpráva) a **Částka**.

### Barva pozadí

- **Výchozí**: barva pozadí pro každý záznam.
- **+ Přidat rozsah**: přidá barvu s rozsahem **Částka** (**Minimum** ~ **Maximum**). Záznamy, jejichž částka spadá do rozsahu, použijí místo toho tuto barvu. Necháte-li Minimum nebo Maximum prázdné, na dané straně není žádný limit. Kliknutím na **✕** rozsah odeberete.

Když je zapnuto **Automaticky přepočítat na vlastní měnu**, rozsah se porovnává s přepočtenou částkou.

### Vlastní CSS

Rozbalením **Vlastní CSS** upravíte CSS přehledu. **Obnovit výchozí** obnoví výchozí CSS a **Správa materiálů** otevře správce materiálů. Zde lze také použít motivy ze Steam Workshop. Dokud je motiv použit, CSS je jen pro čtení. Viz [Motivy](./themes).

## Karta Historie

### Ruční přidání (pro test)

Zvolte platformu, zadejte **Jméno**, **Částka** a případně **Zpráva (volitelné)** a klikněte na **Přidat**. Záznam se přidá pouze tehdy, je-li daná platforma zaškrtnuta v **Napojené platformy**. Částka se bere v měně příspěvků.

### Historie

Zobrazuje uložené záznamy s jejich počtem.

- Jeden záznam smažete kliknutím na **🗑** a poté na **Potvrdit smazání**.
- Kliknutím na **Vymazat** smažete všechny záznamy. Nejprve se zobrazí potvrzení. Tuto akci nelze vrátit zpět.

:::info Zkušební verze
Vlastní CSS je k dispozici pouze v plné verzi. Skutečné platební brány (PayPal / Stripe / O'Pay / ECPay), události členství YouTube a Drahokamy nelze ve zkušební verzi používat a přehled v OBS zobrazuje vodoznak. Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::

## Často kladené otázky

**Q: V přehledu se zobrazují testovací upozornění.**
**Test notifikace** na stránce Nastavení se zpracuje jako skutečný dar, takže se sem také zaznamená, pokud je daná platforma zaškrtnutá. Smažte ho na kartě **Historie**.
