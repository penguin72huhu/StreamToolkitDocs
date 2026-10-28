---
sidebar_position: 17
---

# Hudební přání

Diváci si příkazem v chatu přejí skladby z YouTube a ty se v OBS přehrávají jedna po druhé. Skladby můžete přidávat i sami a nastavit výchozí playlist, který hraje, když nejsou žádná přání.

## URL zdroje pro OBS

```
http://127.0.0.1:7272/song-request
```

Klikněte na **Kopírovat** vedle **URL zdroje pro OBS** v horní části stránky a přidejte URL do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source).

:::warning
Hudební přání přehrávají zvuk. Ve vlastnostech prohlížeče zaškrtněte **Ovládat zvuk přes OBS**, jinak se hudba do streamu nedostane.
:::

:::tip
Zapněte také přepínač vedle **Hudební přání** v levém menu. Příkazy z chatu se zpracovávají pouze tehdy, když je přepínač zapnutý.
:::

Stránka má dvě karty: **Nastavení** a **Playlist**.

## Karta Nastavení

### Platforma

Každá platforma má vlastní kartu:

- **Povolit přání skladeb z této platformy**: umožní divákům v daném chatu přát si skladby
- **Povolit odpovědi chat bota** (pouze Twitch, ve výchozím stavu zapnuto): odpovídá v chatu na Twitchi s výsledkem každého příkazu pomocí vašeho připojeného účtu Twitch. Zobrazí se pouze tehdy, když je Twitch zapnutý a připojený

Nepřipojená platforma zobrazuje **(nepřipojeno)** (Twitch) nebo **URL chatu není připojena** (YouTube). Nejprve ji připojte:

- [Nastavení Twitch](../platforms/twitch)
- [Nastavení YouTube](../platforms/youtube-settings)

### Příkazy chatu

| Pole | Výchozí |
|------|--------|
| **Předpona příkazu** | `!` (vyberte z `! @ # $ % & ~`) |
| **Příkaz pro přání skladby** | `sr` |
| **Odstranit skladbu** | `remove` |
| **Zobrazit seznam přání** | `queue` |
| **Zjistit aktuální skladbu** | `song` |
| **Prodleva mezi přáními** | 3000 ms |

Prodleva se počítá pro každého diváka zvlášť: po úspěšném přání musí stejný divák počkat tuto dobu, než si může přát znovu.

### Nastavení

- **Zobrazit video na obrazovce** (ve výchozím stavu zapnuto): když je vypnuto, video je v OBS skryté, ale zvuk se dál přehrává
- **Limit seznamu** (1–100, výchozí 20): maximální počet přaných skladeb v seznamu. Skladby z výchozího playlistu se nezapočítávají
- **Zobrazit notifikaci přání skladby** (ve výchozím stavu zapnuto): zobrazí v OBS kartu s notifikací, když si divák skladbu přeje, odstraní ji nebo když se přání nezdaří. Když je zapnuto, můžete nastavit:
  - **X** / **Y**: pozice notifikace od levého horního rohu (px, výchozí 16 / 16)
  - **Zvětšení notifikace**: násobek velikosti (výchozí 1.0)
  - **Otestovat vzhled notifikace**: odešle do OBS testovací notifikaci

Každá notifikace zůstane zobrazená 5 sekund; najednou se zobrazí nejvýše 3.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Jak to diváci používají

Při výchozím nastavení:

| Příkaz | Co dělá |
|------|------|
| `!sr <YouTube link>` | Přeje si dané video |
| `!sr <search words>` | Vyhledá na YouTube a přeje si první výsledek |
| `!remove` | Odstraní divákovo poslední přání (ne skladbu, která právě hraje) |
| `!queue` | Odpoví dalšími 3 přanými skladbami |
| `!song` | Odpoví skladbou, která právě hraje |

- Přijímané odkazy: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…` nebo 11znakové ID videa
- Odkazy na playlisty se nepřijímají
- Přání se nezdaří, když seznam dosáhl hodnoty **Limit seznamu**
- Nová přání se zařadí za přání ostatních diváků, ale před skladby z výchozího playlistu
- `!queue` a `!song` fungují pouze v chatu na Twitchi se zapnutým **Povolit odpovědi chat bota**

## Karta Playlist

### Ovládání přehrávání

Horní řádek ukazuje, kdo si aktuální skladbu přál, a její název. Tlačítka:

- **Přehrát** / **Pozastavit**: pokud nic nehraje, spustí přehrávání od první skladby v seznamu
- **Zastavit**: zastaví přehrávání
- **Další**: přeskočí na další skladbu

Během přehrávání se zobrazí ukazatel průběhu; přetažením přeskočíte na jiné místo. Po skončení skladby se automaticky spustí další.

:::note
Při spuštění aplikace se nic nepřehrává automaticky. Přehrávání zahájíte tlačítkem **Přehrát**.
:::

### Výchozí playlist

Vložte URL playlistu YouTube a zvolte **Přehrávat ve smyčce** nebo **Náhodné přehrávání**. Když seznam dojde, automaticky se přidá a přehraje skladba z tohoto playlistu. Tyto skladby se v seznamu zobrazují jako **Výchozí seznam**.

Výchozí playlist se načítá přes váš účet YouTube, proto se musíte nejprve přihlásit přes Google v [Nastavení YouTube](../platforms/youtube-settings).

### Ruční přidání skladby

Vložte URL videa YouTube a klikněte na **Přidat do seznamu** (nebo stiskněte Enter). Ruční přidání nepodporuje vyhledávací slova.

### Seznam

**Seznam (n)** zobrazuje všechny skladby: platformu, žadatele, název a ID videa (kliknutím ho otevřete na YouTube). Kliknutím na **Smazat** skladbu odstraníte; smazání právě hrající skladby přeskočí na další. **Vyprázdnit** vyprázdní celý seznam.

{/* TODO: 截圖 — 播放清單分頁 */}

## Často kladené otázky

**Q: Diváci píší příkaz, ale nic se neděje?**
Zkontrolujte, zda:
- Je zapnutý přepínač **Hudební přání** v levém menu
- Je u dané platformy zaškrtnuto **Povolit přání skladeb z této platformy**
- U Twitche: chat Twitche čte funkce [Chat](./chat). Pokud jste na stránce Chat vypnuli Twitch (a [Chatovací bot](./chat-bot) Twitch nepoužívá), příkazy z Twitche se nepřijímají

**Q: Výchozí playlist se nepřehrává?**
Ujistěte se, že jste v Nastavení přihlášeni přes Google a že URL je odkaz na playlist (obsahuje `list=`).

:::info Omezení zkušební verze
- Přání skladeb od diváků z chatu jsou k dispozici pouze v plné verzi. Ve zkušební verzi přání z chatu selže se zprávou „Ve zkušební verzi nejsou přání skladeb dostupná“. **Ruční přidání skladby** a výchozí playlist fungují i nadále
- Overlay v OBS zobrazuje vodoznak

Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
