---
sidebar_position: 8
---

# Upozornění na dary

Když někdo přispěje, zobrazí se upozornění s obrázkem, zvukem, jménem přispěvatele, částkou a zprávou.

## URL zdroje pro OBS

```
http://127.0.0.1:7272/donate-alert
```

Zkopírujte URL z horní části stránky nastavení **Upozornění na dary** a přidejte ji do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source).

:::warning
Upozornění přehrávají zvuk. Ve vlastnostech prohlížeče zaškrtněte **Ovládat zvuk přes OBS**, jinak zvuk ve streamu nebude slyšet.
:::

Přepínačem vedle **Upozornění na dary** v levém postranním panelu upozornění zapnete nebo vypnete. Dokud je vypnutý, nezobrazují se žádná upozornění (ani testovací), ale dary se dál zaznamenávají do [Přehledu darů](./sponsors).

Když dorazí několik darů krátce po sobě, upozornění se zařadí do fronty a zobrazují se postupně.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Karta Nastavení

### Napojené platformy

Zaškrtněte platformy, které mají spouštět upozornění: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Zelená tečka znamená, že je platforma připojena; jinak řádek zobrazuje **(nepřipojeno)**. Tato zaškrtávací políčka ovlivňují pouze upozornění, ne Ukazatel cíle darů ani Přehled darů.

**Twitch ⚙️** (zobrazí se, když je Twitch připojen a zaškrtnut):

1. Zvolte **Počítat Bits i předplatné**, **Počítat pouze Bits** nebo **Počítat pouze předplatné**
2. **Započítat obnovené předplatné**: zda obnovená předplatná spouštějí upozornění (zobrazí se, když se počítají předplatná)
3. **Méně než [N] Bits se nezapočítává**: zaškrtněte a zadejte minimum, aby menší cheery nespouštěly upozornění (zobrazí se, když se počítají Bits)
4. Klikněte na **Uložit**

**YouTube ⚙️**:

- **Zobrazovat jména diváků místo @handle**: k dispozici až po přihlášení přes Google.
- **Započítané události**: **Super Chat**, **Super samolepka**, **Nový člen**, **Obnovení členství**, **Darované členství**, **Drahokamy**. **Drahokamy** vyžadují přihlášení přes Google.

Pokud není propojen živý chat YouTube, řádek zobrazuje **URL chatu není připojena** s tlačítky **Připojit automaticky** (vyžaduje přihlášení přes Google) a **Zadat ručně** (přenese vás k poli URL chatu v Nastavení). Pokud je zaškrtnuta událost členství, ale nejsou nastaveny ceny členství, klikněte na **⚠ Ceny členství nenastaveny** a nastavte je. Viz [Nastavení YouTube](../platforms/youtube-settings).

Připojení PayPal, Stripe, O'Pay nebo ECPay viz [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) a [ECPay](../payments/ecpay).

### Nastavení

| Pole | Popis |
|-------|-------------|
| **Automaticky přepočítat na vlastní měnu** | Ve výchozím stavu zapnuto. Zobrazuje částku převedenou na **Měna příspěvků** nastavenou na stránce Nastavení. |
| **Doba zobrazení** | Jak dlouho zůstává každé upozornění na obrazovce, v sekundách. Výchozí: 6. |

## Karta Vzhled

### Náhled

Náhled používá stejnou stránku jako zdroj v OBS. Výběrem barvy vedle **Náhled** změníte pozadí náhledu a kliknutím na **▶ Přehrát animaci** přehrajete animaci upozornění znovu.

### Jednotný vzhled / Zvlášť pro každou platformu

- **Jednotný vzhled**: všechny platformy používají stejný styl upozornění.
- **Zvlášť pro každou platformu**: každá platforma má vlastní styl. Platformu vyberte tlačítky níže (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) a upravte její nastavení. Při prvním přepnutí platformy, které jste ještě neupravili, převezmou aktuální jednotný vzhled, každá s vlastní barvou odpočtu.

**Obnovit výchozí** obnoví výchozí styl pro právě upravovaný vzhled.

### Obrázek

- **Vybrat obrázek**: vyberte obrázek ze správce materiálů. Bez obrázku se zobrazí emoji srdce. **Vymazat** obrázek odebere.
- **Velikost obrázku**: 1–400 px.
- **Pozice obrázku**: **Vlevo**, **Vpravo**, **Nahoře** nebo **Dole**.

### Zvuk

Vyberte vestavěný zvuk: **Žádný**, **Zvonkohra** (výchozí), **Mince**, **Zvonek**, **Prásk**, **Fanfára**. Kliknutím na **▶** si ho poslechnete. Kliknutím na **Vybrat zvuk** použijete vlastní zvukový soubor ze správce materiálů.

### Zobrazení textu

- **Výchozí**: částka, jméno přispěvatele a zpráva se zobrazí na samostatných řádcích.
- **Vlastní text**: napište vlastní řádek. Použijte `{name}` pro jméno přispěvatele a `{amount}` pro částku, např. `Děkuji {name} za příspěvek {amount}!`

### Text a barva

- **Text**: nastavte písmo, velikost a barvu pro **Částka**, **Jméno přispěvatele** a **Zpráva** (a v režimu Vlastní text také **Vlastní text**).
- **Barva**: **Pozadí**, **Stín** a **Odpočet**.

### Vlastní CSS

Rozbalením **Vlastní CSS** upravíte CSS právě upravovaného vzhledu (jednotného nebo vybrané platformy). **Obnovit výchozí** obnoví CSS šablony a **Správa materiálů** otevře správce materiálů. Zde lze také použít motivy ze Steam Workshop. Dokud je motiv použit, CSS je jen pro čtení. Viz [Motivy](./themes).

## Testování upozornění

Na stránce **Nastavení** klikněte na **Test notifikace** vedle **Napojení platforem pro příspěvky**:

1. Vyplňte **Testovací jméno**, **Testovací zpráva** a **Testovací částka** a zvolte **Testovací platforma**
2. Klikněte na **Odeslat testovací notifikaci**

V sekci **Test Super Chat na YouTube** můžete zadat **Textová částka** v původní podobě (např. `$5.00`, `¥500`, `NT$150`) a kliknutím na **Odeslat testovací Super Chat** otestovat rozpoznání částky a převod měny.

:::note
Testovací upozornění se zpracuje jako skutečný dar: přičte se také k [Ukazateli cíle darů](./donate) a do [Přehledu darů](./sponsors), pokud jsou tam dané platformy zaškrtnuté.
:::

:::info Zkušební verze
Vlastní CSS je k dispozici pouze v plné verzi. Skutečné platební brány (PayPal / Stripe / O'Pay / ECPay), události členství YouTube a Drahokamy nelze ve zkušební verzi používat a upozornění v OBS zobrazuje vodoznak. Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::

## Často kladené otázky

**Q: Ve streamu není slyšet zvuk?**
Zkontrolujte, zda je ve vlastnostech prohlížeče zaškrtnuto **Ovládat zvuk přes OBS** a zda zdroj není ztlumený ve směšovači zvuku OBS. Zkontrolujte také, zda **Zvuk** není nastaven na **Žádný**.

**Q: Zdroj do OBS jsem přidal(a) pozdě. Přehraje dřívější upozornění?**
Ne. Nově otevřený zdroj zobrazuje pouze upozornění, která dorazí po jeho připojení.
