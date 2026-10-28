---
sidebar_position: 6
---

# Ström-höjdpunktsmarkör

Tryck på ett kortkommando under sändningen för att registrera ”hur långt in i sändningen” en höjdpunkt inträffade. Senare kan du använda listan med tider för att hitta höjdpunkterna i din VOD när du redigerar.

Markeringar sparas i Stream Toolkit. Den här funktionen har ingen OBS-overlay, så du behöver inte lägga till någon OBS-källa.

Sidan har två flikar: **Inställningar** och **Höjdpunkter**.

:::tip
Slå på reglaget bredvid **Ström-höjdpunktsmarkör** i vänstermenyn. När det är av lägger varken kortkommandot eller knappen **MARK** till någon markering.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Steg 1: Välj källa

**Källa** avgör hur sändningstiden räknas ut:

| Källa | Hur tiden räknas ut | Krav |
|--------|----------------------------|-------------|
| **Twitch** | Tid sedan din aktuella Twitch-sändning startade | Twitch anslutet. Se [Twitch Inställningar](../platforms/twitch) |
| **YouTube** | Tid sedan din aktuella YouTube-livesändning startade | Google-inloggning. Se [YouTube-inställningar](../platforms/youtube-settings) |
| **Manuell justering** (standard) | Värdet på den manuella timern på den här sidan | Inga |

En punkt bredvid **Twitch** och **YouTube** visar om de är anslutna. Om inte visar alternativet **(Ej ansluten)** eller **(Inte inloggad med Google)**.

Om du markerar när du inte sänder live (eller, för **Manuell justering**, när timern är stoppad) registreras tiden som **Ingen sändning**. Med källan **Twitch** kan det ta cirka 20 sekunder innan resultatet visas, eftersom Stream Toolkit försöker några gånger ifall Twitch ännu inte har registrerat en sändning som just har startat.

### Manuell timer

När **Manuell justering** är vald visas **Manuell timer**:

1. Ange aktuell sändningstid som `HH:MM:SS` (till exempel `00:00:00` precis när du går live)
2. Klicka på **Starta synkroniserad timer**. Timern börjar räkna uppåt från det värdet
3. Varje markering använder timerns aktuella värde
4. Klicka på **Stoppa** för att stoppa timern

### Skapa Twitch-klipp vid markering

Det här alternativet visas bara när källan är **Twitch**. När det är på skapar varje markering också ett Twitch-klipp.

- Du måste sända live. Klippet är cirka 30 sekunder långt
- Klipp sparas i Creator Dashboard → Content → Clips
- Efter markeringen visar sidan **Twitch-klipp skapat**, eller varför det misslyckades: **Inte live**, **Behörighet saknas; återanslut Twitch**, **Twitch inte ansluten** eller **Misslyckades; försök igen**

## Steg 2: Ställ in kortkommandot

Standardkortkommandot är `Ctrl+Shift+M`. Så här ändrar du det:

1. Klicka på kortkommandoknappen
2. Tryck på den tangentkombination du vill ha och släpp den sedan. Tryck på **Esc** för att avbryta
3. För att ta bort det, klicka på **Rensa**

Om kombinationen redan används av en annan funktion visar knappen **Detta kortkommando används redan** och kortkommandot sparas inte. Kortkommandot fungerar även när Stream Toolkit inte är det aktiva fönstret.

Du kan också klicka på knappen **MARK** under kortkommandot. Den gör samma sak som kortkommandot. Fönstret [Snabbverktyg](./quick-tools) har också en **MARK**-knapp.

## Steg 3: Markera under sändningen

1. (Valfritt) Skriv ett namn i **Markeringsnamn** innan du markerar. Om du lämnar det tomt numreras markeringarna automatiskt (`精華標記_1`, `精華標記_2`, …)
2. Tryck på kortkommandot eller klicka på **MARK**

Namnet du skrev används bara för nästa markering, och fältet töms efteråt.

## Höjdpunkter

Fliken **Höjdpunkter** listar alla markeringar, nyast först. Varje rad visar sändningstiden, namnet, källan samt datum och tid då du markerade.

- **Kopiera**: kopierar markeringen som text, i formatet `[date] name 🎬 stream time (source)`
- **🗑️**: klicka på den och sedan på **Bekräfta borttagning** för att ta bort markeringen
- **Öppna Twitch-klipp**: visas när ett Twitch-klipp har skapats för markeringen. Öppnar klippet på Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Begränsningar i testversionen
**Skapa Twitch-klipp vid markering** är inte tillgängligt. Det visas som ”Aktivera i fullversionen”.

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison) för mer information.
:::
