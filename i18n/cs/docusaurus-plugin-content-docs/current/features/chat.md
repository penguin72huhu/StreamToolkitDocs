---
sidebar_position: 3
---

# Chat

**Chat** zobrazuje chat z Twitche a YouTube společně v jednom overlayi, volitelně s automatickým překladem. Chat může také zobrazovat v průhledném okně na ploše, které vidíte jen vy.

## URL zdroje pro OBS

```
http://127.0.0.1:7272/chat
```

Přidejte ji jako prohlížeč: [Jak přidat zdroje v OBS](../getting-started/obs-source). Tento overlay nemá zvuk.

:::info
Zprávy se do overlaye odesílají pouze tehdy, když je v postranním panelu zapnutý přepínač **Chat**. Chat se přijímá i při vypnutém přepínači, takže funkce, které čtou chat (hlasování, losování, hudební přání atd.), fungují dál.
:::

## Než začnete

Připojte platformy, které chcete zobrazovat:

- [Nastavení Twitch](../platforms/twitch)
- [Nastavení YouTube](../platforms/youtube-settings)

Stránka nastavení má dvě karty: **Nastavení** a **Vzhled**.

## Karta Nastavení

### Platformy

- **Zobrazit ikonu platformy (Twitch / YouTube)** — zobrazí před každou zprávou ikonu <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" />

Každá platforma má vlastní kartu. Tečka vedle názvu platformy se rozsvítí zeleně, když je platforma připojena a povolena; pokud Twitch není připojen, zobrazí se **(nepřipojeno)**, a pokud chat YouTube není propojen, zobrazí se **URL chatu není připojena**.

| Volba | Popis |
|--------|-------------|
| **Povolit chat** | Zobrazovat zprávy z této platformy |
| **Zobrazit avatar** | Zobrazit avatar diváka |
| **Zobrazit odznaky** (Twitch) / **Zobrazit odznaky (ikona člena)** (YouTube) | Zobrazit odznaky |
| **Zobrazovat jména diváků místo @handle** | Pouze YouTube. Neaktivní, dokud se nepřihlásíte přes Google |

Když je chat YouTube povolen, ale není propojen, na jeho kartě se zobrazí dvě tlačítka:

- **Připojit automaticky** — automaticky najde vaše aktuální vysílání (vyžaduje přihlášení přes Google)
- **Zadat ručně** — přenese vás na stránku nastavení, kde vložíte URL chatu

**Max. počet zpráv**: kolik zpráv zůstává na obrazovce (5–200, výchozí 50).

### Automatický překlad

1. Zaškrtněte **Povolit překlad**
2. **Cílový jazyk**: jazyk, do kterého se zprávy překládají. Výchozí volba **Podle jazyka rozhraní** používá jazyk rozhraní aplikace
3. **Nepřekládané jazyky** (volitelné): zprávy v zaškrtnutých jazycích zůstanou beze změny. Portugalštinu PT-BR a PT-PT nelze rozlišit, takže zaškrtnutí kterékoli z nich přeskočí obě

**Překladová služba** je **MyMemory**, která nevyžaduje klíč API.

- **Email (volitelné)**: bez e-mailu je denní kvóta 5 000 znaků; zadáním e-mailu a kliknutím na **Uložit** ji zvýšíte na 50 000 znaků (zdarma, registrace u MyMemory není potřeba)
- Ukazatel níže zobrazuje přibližné dnešní využití. Resetuje se denně v 08:00 UTC

### Test

- **Odeslat testovací zprávu** — odešle do overlaye náhodnou ukázkovou zprávu
- **Vymazat** — vymaže z overlaye všechny zprávy

Pokud se zobrazí **Připojení selhalo — server zřejmě neběží**, místní server Stream Toolkit neodpovídá.

### Okno chatu na ploše

Zobrazuje chat v malém průhledném okně, které je vždy navrchu nad vaší hrou. Vidíte ho jen vy — hodí se pro streamování s jedním monitorem.

1. Klikněte na **Otevřít okno** (nebo klikněte pravým tlačítkem na ikonu v systémové liště a zvolte **Otevřít chat na ploše**)
2. V odemčeném stavu přesunete okno přetažením horní lišty a jeho velikost změníte přetažením okrajů
3. Když je okno na místě, klikněte na **🔒 Zamknout**. Kliknutí pak procházejí oknem do vaší hry. Pro odemčení najeďte myší na okno a klikněte na 🔓, který se objeví v pravém horním rohu, nebo klikněte na **🔓 Odemknout** na stránce nastavení

**Obnovit pozici** vrátí okno do výchozí pozice.

| Nastavení | Popis |
|---------|-------------|
| **Styl** | **Jen jméno a zpráva** (výchozí) nebo **Stejné jako chat v OBS** |
| **Velikost písma** | 12–32 px, výchozí 16. Pouze pro **Jen jméno a zpráva** |
| **Krytí textu** | 10–100 %, výchozí 100 % |
| **Krytí pozadí** | 0–100 %, výchozí 40 % |
| **Mizení zpráv** | 0–120 sekund, výchozí 0. Každá zpráva po tomto počtu sekund zmizí a k zmizelým zprávám se nelze posunout zpět. Při hodnotě 0 nic nemizí a v odemčeném stavu se můžete posunout nahoru k dřívějším zprávám (až do Max. počet zpráv) |
| **Skrýt ze záznamu streamu** | Ve výchozím stavu zapnuto. Zachytávání obrazovky v OBS okno nezachytí, takže diváci nevidí chat dvakrát. Okno se také nezobrazí na snímcích obrazovky ani při sdílení obrazovky na Discordu |

:::tip
Pokud okno nevidíte, když hra běží na celou obrazovku, přepněte hru do režimu okna bez okrajů nebo okna. Pozici a velikost okna si ověříte pomocí **Odeslat testovací zprávu**.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Karta Vzhled

### Náhled

V horní části karty je živý náhled. Výběr barvy vedle **Náhled** mění pouze pozadí náhledu. Zaškrtávací políčka **Avatar**, **Odznaky** a **Ikona platformy** mění pouze to, co zobrazuje náhled.

### Nastavení vzhledu

**Obnovit výchozí** obnoví výchozí vzhled (nebo vzhled použitého motivu, pokud je motiv použit).

- **Směr příchodu**: **Shora dolů**, **Zdola nahoru** (výchozí), **Zleva doprava**, **Zprava doleva**
- **Text** — nastavuje se zvlášť pro **Přezdívka** a **Zpráva**:
  - Písmo, velikost (px) a barva. U přezdívky můžete zvolit **Původní barva** (barva diváka na platformě) nebo **Vlastní barva**
  - **Obrys**: barva, **Průhlednost**, **Tloušťka**
  - **Stín**: barva, **Průhlednost**, **Rozostření**, posun X / Y
- **Velikost ikon**: měřítko pro **Ikona platformy**, **Avatar** a **Odznaky** (0,1–5x)
- **Barva**: **Barva pozadí** každé zprávy

### Vlastní CSS

Rozbalením **Vlastní CSS** můžete přímo upravovat CSS overlaye. Pomocí **Správa materiálů** nahrajete obrázky, na které lze v CSS odkazovat. **Obnovit výchozí** obnoví výchozí CSS. Viz také [Motivy](./themes).

:::tip
Pokud vaše vlastní CSS nastavuje některé z polí vzhledu pomocí `!important`, je toto pole v nastavení vzhledu zašedlé („Toto nastavení řídí vlastní CSS“). Když je použit motiv, CSS je jen pro čtení — před úpravami ho obnovte.
:::

## Omezení zkušební verze

:::info
- Zapnutí automatického překladu přidá do overlaye chatu vodoznak
- **Vlastní CSS** je k dispozici pouze v plné verzi
- **Okno chatu na ploše** je k dispozici pouze v plné verzi

Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
