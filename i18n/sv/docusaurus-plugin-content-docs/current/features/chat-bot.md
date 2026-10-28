---
sidebar_position: 18
---

# Chattbot

Skriver meddelanden i din chatt automatiskt: tidsinställda meddelanden med ett angivet intervall och svar på nyckelord när en tittare skriver ett kommando. Boten skriver från ditt eget konto.

Chattboten har ingen OBS-overlay, så det finns ingen URL att lägga till.

:::tip
Slå på reglaget bredvid **Chattbot** i vänstermenyn. När det är av skickar boten ingenting.
:::

Sidan har tre flikar: **Inställningar**, **Tidsinställda meddelanden** och **Svar på nyckelord**.

## Fliken Inställningar

Under **Plattformar** klickar du på **Twitch** för att slå på den (klicka igen för att slå av den). Punkten bredvid lyser när Twitch är anslutet; annars visas **(Ej ansluten)**. Anslut Twitch först: [Twitch Inställningar](../platforms/twitch).

**YouTube** visas som **Kommer snart** och kan inte slås på än.

Om ingen plattform är ansluten visar de andra två flikarna ”Ingen plattform är ansluten, så boten skickar ingenting.” med knappen **Gå till inställningar**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Tidsinställda meddelanden

Skriver ett meddelande med jämna mellanrum medan du sänder live.

1. Klicka på **+ Lägg till**
2. Fyll i:
   - **Meddelande**: texten som ska skrivas (upp till 500 tecken på Twitch). Det är alltid en rad: Enter gör ingenting och inklistrade radbrytningar blir mellanslag
   - **Intervall**: minuter mellan inläggen (5–240, standard 15)
   - **Min. chattrader**: hur många nya chattrader som krävs sedan förra inlägget innan det skrivs igen (0–100, standard 2), så att boten inte fortsätter skriva i en tom chatt
   - **Plattformar**: var meddelandet ska skrivas
3. Klicka på **Spara**

Så skrivs meddelandena:

- Bara medan din sändning är live. Det första inlägget kommer ett helt intervall efter att du gått live, inte i samma ögonblick som sändningen startar
- Om flera tidsinställda meddelanden ska skickas samtidigt sprids de ut i stället för att skrivas på en gång

## Svar på nyckelord

Svarar när en tittares meddelande börjar med ett kommando.

1. Klicka på **+ Lägg till**
2. Fyll i:
   - **Kommando**: välj prefix (`! @ # $ % & ~`) och skriv sedan ett ord utan mellanslag, t.ex. `!dc`. Det matchas mot det första ordet i ett chattmeddelande, utan hänsyn till versaler/gemener
   - **Svar**: texten som ska skrivas. `{user}` ersätts med namnet på tittaren som använde kommandot
   - **Nedkylning**: sekunder innan samma kommando kan svara igen (0–3600, standard 5)
   - **Plattformar**: var svaret ska skrivas
3. Klicka på **Spara**

Svar på nyckelord fungerar när som helst, oavsett om du sänder live eller inte.

Ett kommando får inte vara detsamma som ett annat svar på nyckelord, eller som ett kommando som redan används av [Låtönskningar](./song-request) eller nyckelordet för [Utlottningar](./lottery).

## Hantera listan

På båda flikarna har varje objekt:

- En kryssruta till vänster för att slå på eller av objektet utan att ta bort det
- Plattformstaggar; en nedtonad tagg betyder att plattformen är avstängd på fliken Inställningar
- **Redigera** och **Ta bort**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Begränsningar i testversionen
- 1 tidsinställt meddelande och 1 svar på nyckelord
- Varje meddelande avslutas med ` (by StreamToolkit)`, så den maximala meddelandelängden blir kortare

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::
