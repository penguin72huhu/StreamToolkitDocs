---
sidebar_position: 18
---

# Chatovací bot

Automaticky odesílá zprávy do vašeho chatu: pravidelné zprávy v nastaveném intervalu a odpovědi na klíčová slova, když divák napíše příkaz. Bot píše z vašeho vlastního účtu.

Chatovací bot nemá overlay pro OBS, takže není potřeba přidávat žádnou URL.

:::tip
Zapněte přepínač vedle **Chatovací bot** v levém menu. Dokud je vypnutý, bot nic neodesílá.
:::

Stránka má tři karty: **Nastavení**, **Pravidelné zprávy** a **Odpovědi na klíčová slova**.

## Karta Nastavení

V sekci **Platformy** klikněte na **Twitch** pro zapnutí (dalším kliknutím ho vypnete). Tečka vedle se rozsvítí, když je Twitch připojen; jinak se zobrazí **(nepřipojeno)**. Nejprve připojte Twitch: [Nastavení Twitch](../platforms/twitch).

**YouTube** je označen jako **Již brzy** a zatím ho nelze zapnout.

Pokud není připojena žádná platforma, ostatní dvě karty zobrazí „Není připojena žádná platforma, takže bot nic neodešle.“ s tlačítkem **Přejít do nastavení**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Pravidelné zprávy

Během vysílání odesílá zprávu v pravidelných intervalech.

1. Klikněte na **+ Přidat**
2. Vyplňte:
   - **Zpráva**: text k odeslání (na Twitchi až 500 znaků). Je vždy na jednom řádku: Enter nic nedělá a vložená zalomení řádků se změní na mezery
   - **Interval**: počet minut mezi zprávami (5–240, výchozí 15)
   - **Min. zpráv**: kolik nových řádků chatu musí přibýt od posledního odeslání, než se zpráva odešle znovu (0–100, výchozí 2), aby bot nepsal stále dokola do prázdného chatu
   - **Platformy**: kam zprávu odeslat
3. Klikněte na **Uložit**

Jak odesílání funguje:

- Pouze když vysíláte živě. První zpráva přijde jeden celý interval po zahájení vysílání, ne v okamžiku, kdy stream začne
- Pokud je ve stejnou chvíli na řadě více pravidelných zpráv, rozloží se v čase, místo aby se odeslaly najednou

## Odpovědi na klíčová slova

Odpoví, když zpráva diváka začíná příkazem.

1. Klikněte na **+ Přidat**
2. Vyplňte:
   - **Příkaz**: vyberte předponu (`! @ # $ % & ~`) a napište jedno slovo bez mezer, např. `!dc`. Porovnává se s prvním slovem zprávy v chatu bez ohledu na velká a malá písmena
   - **Odpověď**: text k odeslání. `{user}` se nahradí jménem diváka, který příkaz použil
   - **Prodleva**: počet sekund, než může stejný příkaz odpovědět znovu (0–3600, výchozí 5)
   - **Platformy**: kde odpovídat
3. Klikněte na **Uložit**

Odpovědi na klíčová slova fungují kdykoli, ať vysíláte, nebo ne.

Příkaz nesmí být stejný jako u jiné odpovědi na klíčové slovo ani jako příkaz, který již používá [Hudební přání](./song-request) nebo klíčové slovo funkce [Losování](./lottery).

## Správa seznamu

Na obou kartách má každá položka:

- Zaškrtávací políčko vlevo, kterým položku zapnete nebo vypnete, aniž byste ji mazali
- Štítky platforem; ztlumený štítek znamená, že je daná platforma na kartě Nastavení vypnutá
- **Upravit** a **Smazat**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Omezení zkušební verze
- 1 pravidelná zpráva a 1 odpověď na klíčové slovo
- Každá zpráva končí textem ` (by StreamToolkit)`, takže maximální délka zprávy je kratší

Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
