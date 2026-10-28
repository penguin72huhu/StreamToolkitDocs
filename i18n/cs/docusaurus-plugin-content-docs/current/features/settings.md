---
sidebar_position: 19
---

# Nastavení

Klikněte na **⚙️ Nastavení** v dolní části levého menu. Tato stránka obsahuje volby pro celou aplikaci, připojení platforem a platební brány pro příspěvky.

## Obecné

| Volba | Co dělá | Výchozí |
|------|------|------|
| **Motiv** | Režim zobrazení rozhraní: **Ztlumená** nebo **Světlá** | Ztlumená |
| **Jazyk** | Jazyk rozhraní; přepne se okamžitě | — |
| **Při zavření (X) minimalizovat do lišty** | Zavřením okna se aplikace minimalizuje do systémové lišty místo ukončení | Zapnuto |
| **Měna příspěvků** | Globální jednotka měny, kterou používá ukazatel příspěvků, upozornění a všechna další zobrazení částek | Nastaví se při prvním spuštění podle jazyka systému (např. tradiční čínština (Tchaj-wan) → TWD, japonština → JPY, ostatní → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Připojení platforem

### Twitch

Klikněte na **Připojit účet** a autorizujte aplikaci v prohlížeči. Po připojení se zobrazí **Připojeno @vaše-jméno** a tlačítko **Odpojit**. Podrobný postup: [Nastavení Twitch](../platforms/twitch).

Po připojení můžete v **▸ Nastavení přepočtu** určit, jakou hodnotu mají Bits a předplatná ve vaší měně příspěvků:

- **Rozdělení příjmů**: **50 / 50** nebo **70 / 30**
- **Za 100 Bits**, **Předplatné Tier 1**, **Předplatné Tier 2**, **Předplatné Tier 3**
- **Uložit** uloží hodnoty pro aktuální měnu; **Obnovit výchozí** vyplní vestavěné hodnoty pro danou měnu

### YouTube

1. Klikněte na **Připojit účet** a přihlaste se přes Google. Postup krok za krokem: [Nastavení YouTube](../platforms/youtube-settings)
2. Po připojení se zobrazí **Připojeno: název kanálu**. **Odpojit** účet odpojí
3. Zvolte, jak najít živý chat:
   - **Zjistit aktuální vysílání**: vyžaduje přihlášení přes Google. Kliknutím na **Připojit** vyhledáte na svém kanálu aktuální nebo nadcházející vysílání. Pokud jich je více, vyberte jedno ze seznamu
   - **Zadat URL ručně**: vložte **URL chatu**
4. **Při každém spuštění programu vyžádat URL chatu**: volitelné

**▸ Nastavení přepočtu** u YouTube určuje, jakou hodnotu mají členství (YouTube u členství neposílá částku):

- **Nastavení úrovní členství**: přidejte název každé úrovně a její hodnotu. Názvy úrovní se musí přesně shodovat s vaším kanálem YouTube
- **Neuvedené úrovně**: hodnota použitá pro úroveň, která není v tabulce
- **Úroveň darovaných členství**: jako která úroveň se počítají darovaná členství
- Úrovně, které se objevily v událostech, ale chybí v tabulce, se zobrazí s tlačítky **Přidat do tabulky** / **Ignorovat**

## Napojení platforem pro příspěvky

Kliknutím na bránu ji rozbalíte. Každá má odkaz **Návod zde** na svůj návod k nastavení:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Test notifikace

Tlačítko **Test notifikace** vedle nadpisu otevře testovací okno:

- Vyplňte **Testovací jméno**, **Testovací zpráva**, **Testovací částka**, zvolte **Testovací platforma** a klikněte na **Odeslat testovací notifikaci**
- **Test Super Chat na YouTube**: zadejte **Textová částka**, např. `$5.00` nebo `NT$150`, a klikněte na **Odeslat testovací Super Chat** pro otestování rozpoznání částky a převodu měny

## O aplikaci

Kliknutím na tlačítko **i** vedle „Stream Toolkit“ v horní části levého menu zobrazíte verzi, autora a odkaz na oficiální dokumentaci.

:::info Omezení zkušební verze
- **Napojení platforem pro příspěvky** je k dispozici pouze v plné verzi
- **Nastavení přepočtu** členství YouTube je k dispozici pouze v plné verzi

Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
