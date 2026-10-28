---
sidebar_position: 3
---

# Chatt

**Chatt** visar din Twitch- och YouTube-chatt tillsammans i en overlay, med valfri automatisk översättning. Den kan också visa chatten i ett transparent skrivbordsfönster som bara du kan se.

## OBS-källans URL

```
http://127.0.0.1:7272/chat
```

Lägg till den som en webbläsarkälla: [Hur man lägger till källor i OBS](../getting-started/obs-source). Den här overlayen har inget ljud.

:::info
Meddelanden skickas bara till overlayen medan reglaget **Chatt** i sidomenyn är på. Chatten tas fortfarande emot när det är av, så funktioner som läser chatten (omröstningar, utlottningar, låtönskningar osv.) fortsätter att fungera.
:::

## Innan du börjar

Anslut de plattformar du vill visa:

- [Twitch Inställningar](../platforms/twitch)
- [YouTube-inställningar](../platforms/youtube-settings)

Inställningssidan har två flikar: **Inställningar** och **Utseende**.

## Fliken Inställningar

### Plattformar

- **Visa plattformsikon (Twitch / YouTube)** — visar ikonen <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> framför varje meddelande

Varje plattform har ett eget kort. Punkten bredvid plattformens namn lyser grönt när den är ansluten och aktiverad; **(Ej ansluten)** visas om Twitch inte är anslutet, och **Ingen chattadress ansluten** om YouTube-chatten inte är länkad.

| Alternativ | Beskrivning |
|--------|-------------|
| **Aktivera chatt** | Visa den här plattformens meddelanden |
| **Visa avatar** | Visa tittarens avatar |
| **Visa märken** (Twitch) / **Visa märken (medlemsikoner)** (YouTube) | Visa märken |
| **Visa tittarnas namn i stället för @handtag** | Endast YouTube. Inaktiverat tills du loggar in med Google |

När YouTube-chatten är aktiverad men inte länkad visas två knappar på dess kort:

- **Anslut automatiskt** — hittar din aktuella sändning automatiskt (kräver Google-inloggning)
- **Ange manuellt** — tar dig till inställningssidan för att klistra in chattens URL

**Max antal meddelanden**: hur många meddelanden som behålls på skärmen (5–200, standard 50).

### Automatisk översättning

1. Markera **Aktivera översättning**
2. **Målspråk**: språket som meddelanden översätts till. Standardvalet, **Följ gränssnittsspråk**, använder appens gränssnittsspråk
3. **Språk som inte översätts** (valfritt): meddelanden på de markerade språken lämnas som de är. Portugisiska PT-BR och PT-PT kan inte skiljas åt, så om du markerar det ena hoppas båda över

**Översättningstjänst** är **MyMemory**, som inte kräver någon API-nyckel.

- **E-post (valfritt)**: utan e-post är den dagliga kvoten 5 000 tecken; ange en e-postadress och klicka på **Spara** för att höja den till 50 000 tecken (gratis, kräver ingen registrering på MyMemory)
- Stapeln nedanför visar ungefär hur mycket som har använts i dag. Den återställs dagligen kl. 08:00 UTC

### Test

- **Skicka testmeddelande** — skickar ett slumpmässigt exempelmeddelande till overlayen
- **Rensa** — rensar alla meddelanden från overlayen

Om **Anslutningen misslyckades — servern kanske inte körs** visas svarar inte Stream Toolkits lokala server.

### Chattfönster på skrivbordet

Visar chatten i ett litet transparent fönster som alltid ligger överst, ovanpå ditt spel. Bara du kan se det — praktiskt när du streamar med en enda skärm.

1. Klicka på **Öppna fönster** (eller högerklicka på ikonen i systemfältet och välj **Öppna skrivbordschatt**)
2. När fönstret är upplåst drar du i det övre fältet för att flytta det och drar i kanterna för att ändra storlek
3. Klicka på **🔒 Lås** när det är på plats. Klick går då igenom fönstret till ditt spel. För att låsa upp, för musen över fönstret och klicka på 🔓 som visas i det övre högra hörnet, eller klicka på **🔓 Lås upp** på inställningssidan

**Återställ position** flyttar tillbaka fönstret till standardpositionen.

| Inställning | Beskrivning |
|---------|-------------|
| **Stil** | **Endast namn och meddelande** (standard) eller **Samma som OBS-chatten** |
| **Teckenstorlek** | 12–32 px, standard 16. Endast för **Endast namn och meddelande** |
| **Textens opacitet** | 10–100 %, standard 100 % |
| **Bakgrundens opacitet** | 0–100 %, standard 40 % |
| **Tona ut meddelanden** | 0–120 sekunder, standard 0. Varje meddelande tonas ut efter så många sekunder, och utonade meddelanden går inte att skrolla tillbaka till. Vid 0 tonas inget ut, och du kan skrolla upp till tidigare meddelanden när fönstret är upplåst (upp till Max antal meddelanden) |
| **Dölj från streamfångst** | På som standard. OBS Skärminspelning fångar inte fönstret, så tittarna ser inte chatten två gånger. Det syns inte heller i skärmbilder eller vid skärmdelning i Discord |

:::tip
Om du inte ser fönstret när spelet körs i helskärm, byt spelet till kantlöst fönster eller fönsterläge. Använd **Skicka testmeddelande** för att kontrollera fönstrets position och storlek.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Fliken Utseende

### Förhandsvisning

Högst upp på fliken visas en liveförhandsvisning. Färgväljaren bredvid **Förhandsvisa** ändrar bara förhandsvisningens bakgrund. Kryssrutorna **Avatar**, **Märken** och **Plattformsikon** ändrar bara vad förhandsvisningen visar.

### Utseendeinställningar

**Återställ standard** återställer standardutseendet (eller det tillämpade temats utseende, om ett tema är tillämpat).

- **Inmatningsriktning**: **Uppifrån och ned**, **Nedifrån och upp** (standard), **Från vänster till höger**, **Från höger till vänster**
- **Text** — ställs in separat för **Smeknamn** och **Meddelande**:
  - Typsnitt, storlek (px) och färg. För smeknamnet kan du välja **Originalfärg** (tittarens plattformsfärg) eller **Anpassad färg**
  - **Kontur**: färg, **Opacitet**, **Tjocklek**
  - **Skugga**: färg, **Opacitet**, **Oskärpa**, X-/Y-förskjutning
- **Ikonstorlek**: skala för **Plattformsikon**, **Avatar** och **Märken** (0,1–5x)
- **Färg**: **Bakgrundsfärg** för varje meddelande

### Anpassad CSS

Expandera **Anpassad CSS** för att redigera overlayens CSS direkt. Använd **Hantera resurser** för att ladda upp bilder att referera till i CSS. **Återställ standard** återställer standard-CSS. Se även [Teman](./themes).

:::tip
Om din anpassade CSS anger ett av utseendefälten med `!important` blir det fältet nedtonat i utseendeinställningarna (”Den här inställningen styrs av anpassad CSS”). När ett tema är tillämpat är CSS skrivskyddad — återställ den innan du redigerar.
:::

## Begränsningar i testversionen

:::info
- Om du slår på automatisk översättning läggs en vattenstämpel till i chatt-overlayen
- **Anpassad CSS** finns bara i fullversionen
- **Chattfönster på skrivbordet** finns bara i fullversionen

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::
