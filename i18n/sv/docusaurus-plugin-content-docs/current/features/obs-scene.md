---
sidebar_position: 2
---

# OBS-scenkontroll

Med **OBS-scenkontroll** kan du byta scener och visa/dölja källor i din streamingprogramvara med globala kortkommandon eller från [Snabbverktyg](./quick-tools). Det fungerar med **OBS Studio**, **Streamlabs** och **Meld Studio**.

Den här funktionen har ingen overlay, så det finns inget att lägga till i OBS som webbläsarkälla.

:::info
Kortkommandon fungerar bara när reglaget **OBS-scenkontroll** i sidomenyn är på. De fungerar även när Stream Toolkit-fönstret är minimerat till systemfältet.
:::

Inställningssidan har två flikar: **Anslutning** och **Kortkommandon**.

## Fliken Anslutning

### Steg 1: Välj programvara

Under **Programvara** väljer du **OBS Studio**, **Streamlabs** eller **Meld Studio**. Detta kan bara ändras när anslutningen är frånkopplad.

Varje programvara har egna kortkommandon och en egen scenlista, så när du byter programvara visas den programvarans egna inställningar.

### Steg 2: Förbered programvaran

#### OBS Studio

1. Öppna **Tools → WebSocket Server Settings** i OBS
2. Markera **Enable WebSocket server**
3. Klicka på **Show Connect Info** för att se lösenordet
4. Fyll i **Värd** (standard `localhost`), **Port** (standard `4455`) och **Lösenord** i Stream Toolkit

#### Streamlabs / Meld Studio

Ingen konfiguration behövs — programmet behöver bara vara igång.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Steg 3: Anslut

Klicka på **Anslut**. **Status** ändras till **Ansluten** (för OBS och Meld visas även versionsnumret). Klicka på **Koppla från** för att avbryta anslutningen.

**Anslut vid start** (på som standard): ansluter automatiskt när Stream Toolkit startar och när du slår på funktionens reglage. Om du slår av funktionens reglage kopplas anslutningen från.

### Scener

Avsnittet **Scener** listar dina scener och hur många källor var och en har; den aktuella scenen är markerad. Klicka på **Uppdatera** för att hämta den senaste listan efter att du har ändrat scener i programvaran.

När anslutningen är frånkopplad visas fortfarande den senast hämtade listan.

## Fliken Kortkommandon

För att ställa in ett kortkommando, klicka på **Klicka för att ställa in kortkommando** och tryck sedan på tangentkombinationen. Tryck på `Esc` för att avbryta. Om kombinationen redan används av en annan funktion visas **Konflikt med kortkommando** och den sparas inte. Klicka på **✕** bredvid ett kortkommando för att rensa det.

### Byt scen

1. Klicka på **Lägg till**
2. Ställ in ett kortkommando
3. Välj den scen som ska visas

Klicka på **✕** i slutet av raden för att ta bort den.

### Växla källor

Ett kortkommando kan styra flera källor i samma scen samtidigt.

1. Klicka på **Lägg till**
2. Ställ in ett kortkommando
3. Ange ett **Namn** (valfritt — används som knappetikett i Snabbverktyg; om det är tomt används scenens namn)
4. Välj den scen som källorna tillhör
5. Klicka på **Lägg till källa**, välj en källa och välj **Visa**, **Dölj** eller **Växla** (standard **Växla**)
6. Upprepa steg 5 för fler källor

Om du ändrar scenen för en post rensas dess källista.

:::tip
En scen eller källa som inte längre finns i programvaran markeras med rött. Välj den igen i listrutan.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Använda det från Snabbverktyg

När funktionen är på och det finns minst en kortkommandopost visar [Snabbverktyg](./quick-tools) ett kort för **OBS-scenkontroll** med en knapp för varje post. Att klicka på en knapp gör samma sak som att trycka på dess kortkommando.

## Felmeddelanden

När ett kortkommando eller en knapp används kan följande meddelanden visas:

| Meddelande | Betydelse |
|---------|---------|
| **Inte ansluten till OBS** | Inte ansluten — gå till fliken **Anslutning** och klicka på **Anslut** |
| **Scenen ”…” hittades inte** | Scenen har bytt namn eller tagits bort i programvaran |
| **Källor hittades inte: …** | De källorna finns inte längre i scenen |

## Begränsningar i testversionen

:::info
Testversionen tillåter totalt **1** kortkommandopost (Byt scen och Växla källor sammanlagt). Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::

## Vanliga frågor

**Q: Det stod att OBS inte gick att nå, och det försökte inte igen efter att jag öppnade OBS.**
Om det allra första anslutningsförsöket misslyckas (till exempel om OBS inte var igång än) fortsätter Stream Toolkit inte att försöka. Öppna din streamingprogramvara och klicka sedan på **Anslut**. När en anslutning väl har lyckats återansluter den automatiskt om anslutningen bryts.
