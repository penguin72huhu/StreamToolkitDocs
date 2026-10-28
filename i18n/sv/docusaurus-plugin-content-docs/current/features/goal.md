---
sidebar_position: 10
---

# Twitch-målfält

Visa förloppsstaplar i sändningen för dina Twitch-mål för följare, prenumerationer och Bits. Varje måltyp har en egen stapel, egna inställningar och en egen OBS-URL.

:::note Innan du börjar
Målfälten räknar Twitch-händelser, så anslut ditt Twitch-konto först. Se [Twitch Inställningar](../platforms/twitch).
:::

## Steg 1: Välj en måltyp och lägg till OBS-källan

Välj en måltyp högst upp på sidan: **Följ**, **Prenumeration** eller **Bits**. **OBS-adress** under knapparna ändras därefter. Klicka på **Kopiera** för att kopiera den.

| Måltyp | OBS-källans URL |
|-----------|----------------|
| **Följ** | `http://127.0.0.1:7272/goal/follow` |
| **Prenumeration** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Lägg till varje stapel du vill visa i OBS som en separat webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source). Målfälten spelar inget ljud, så du behöver inte slå på ”Styr ljud via OBS”.

:::tip
Slå också på reglaget bredvid **Twitch-målfält** i vänstermenyn (**Slå på OBS-visning**). När det är av döljs staplarna i OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Steg 2: Ange målet

Alla inställningar nedan gäller den måltyp du valde högst upp.

- **Titel**: titeltexten som visas på stapeln
- **Mål**: målvärdet (heltal, 0 eller mer)
- **Förlopp**: visar aktuellt antal, målet och procentsatsen

### Så räknas förloppet

| Måltyp | Vad som ökar förloppet |
|-----------|----------------------|
| **Följ** | Varje ny följare lägger till 1. Medan Twitch är anslutet synkas antalet också med kanalens totala antal följare från Twitch var 30:e sekund. Klicka på **Synka** för att synka direkt |
| **Prenumeration** | Nya prenumerationer och gåvoprenumerationer (en gåva med flera prenumerationer lägger till antalet skänkta prenumerationer). Återprenumerationer räknas bara när **Räkna återprenumerationer** är på |
| **Bits** | Varje cheer lägger till antalet Bits som skickades |

### Prenumerationsalternativ

Visas bara för **Prenumeration**:

- **Viktat per Tier**: när det är på bidrar prenumerationer på högre nivå mer till förloppet. När det är av lägger varje prenumeration till 1
- **Räkna återprenumerationer**: när det är på bidrar även meddelanden om återprenumeration till förloppet

### Återställ förlopp

**Prenumeration** och **Bits** har knappen **Återställ förlopp**. Klicka på den och sedan på **Återställ** för att sätta tillbaka aktuellt antal till 0. Målvärdet behålls.

**Följ** har ingen återställningsknapp, eftersom antalet följer ditt totala antal följare på Twitch.

## Steg 3: Justera utseendet

### Förhandsvisning

**Förhandsvisa** högst upp visar stapeln för den valda måltypen. Använd färgrutan bredvid för att ändra förhandsvisningens bakgrund. Markera **Förhandsvisa uppnått** för att se hur stapeln ser ut när målet är nått.

### Utseendeinställningar

| Inställning | Beskrivning |
|---------|-------------|
| **Bakgrundsfärg** | Stapelns bakgrund |
| **Färg på förloppsstapel** | Färg på den fyllda delen |
| **Färg vid uppnått mål** | Fyllningsfärg när målet är nått |
| **Titeltext** | Teckensnitt, färg och storlek (8–72 px) för titeln |
| **Måltext** | Teckensnitt, färg och storlek (8–72 px) för siffrorna |
| **Procent** | Teckensnitt, färg och storlek (8–72 px) för procentsatsen |

Klicka på **Återställ standard** för att återställa utseendet för den valda måltypen.

### Anpassad CSS

Klicka på **Anpassad CSS** för att expandera redigeraren. Varje måltyp har sin egen CSS. Använd den för layout och struktur. Färger, teckensnitt och storlekar ställs in i utseendeinställningarna ovan.

- **Återställ standard**: återställer standard-CSS:en
- **Hantera resurser**: öppnar resurshanteraren för bilder som används i din CSS

Om din CSS åsidosätter en egenskap med `!important` låses motsvarande utseendekontroll, eftersom CSS:en ändå skulle vinna.

:::info Begränsningar i testversionen
- **Anpassad CSS** finns bara i fullversionen
- OBS-overlayen visar en vattenstämpel

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison) för mer information.
:::
