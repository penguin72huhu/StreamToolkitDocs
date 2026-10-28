---
sidebar_position: 8.1
---

# Aviseringar för nya följare

Visar en avisering i sändningen när någon följer dig på Twitch eller prenumererar på din YouTube-kanal.

## OBS-källans URL

```
http://127.0.0.1:7272/fan-alert
```

Kopiera URL-en högst upp på sidan **Aviseringar för nya följare-inställningar** och lägg till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source).

:::warning
Aviseringar spelar upp ett ljud. Markera **Styr ljud via OBS** i webbläsarkällans egenskaper, annars hörs inte ljudet i sändningen.
:::

Använd reglaget bredvid **Aviseringar för nya följare** i vänstermenyn för att slå på eller av aviseringar. När det är av visas eller registreras inga nya följare, och testknapparna fungerar inte heller.

När flera följare kommer tätt efter varandra köas aviseringarna och visas en i taget. Den här overlayen har en egen kö, så den väntar aldrig bakom [Donationsaviseringar](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Fliken Inställningar

### Anslut plattform

Markera de plattformar som ska utlösa en avisering: **Twitch** och **YouTube** (båda markerade som standard). En grön punkt betyder att plattformen är ansluten; annars visar raden **Inte auktoriserad**.

- **Twitch**: varje ny följare utlöser en avisering direkt. Anslut Twitch först: [Twitch Inställningar](../platforms/twitch).
- **YouTube**: nya prenumeranter. Logga in med Google först: [YouTube-inställningar](../platforms/youtube-settings).

Så hittas YouTube-prenumeranter:

- YouTube har ingen livehändelse för ”ny prenumerant”, så appen frågar YouTube efter dina senaste prenumeranter var 1,5 minut.
- Den kontrollerar bara medan du sänder live och din YouTube-livechatt är ansluten till den livesändningen. Den kontrollerar inte i väntrummet eller efter att sändningen har avslutats.
- Personer som prenumererade innan sändningen startade (mer än cirka 5 minuter innan kontrollen började) aviseras inte.
- Som tipset på sidan säger: **YouTube aviserar bara tittare med offentliga prenumerationer, med minuter till timmars fördröjning.**

### Inställningar

| Fält | Beskrivning |
|-------|-------------|
| **Visningstid** | Hur länge varje avisering visas på skärmen, i sekunder (1–60). Standard: 5. |
| **Samma tittare högst en gång per 24 timmar** | Av som standard. När det är på visas eller registreras inte samma tittare som följer igen inom 24 timmar (till exempel genom att sluta följa och följa igen). |

### Testa aviseringar

Klicka på **Testavisering (Twitch)** eller **Testavisering (YouTube)** för att skicka en exempelavisering till OBS. Testaviseringar läggs inte till i historiken.

Om Aviseringar för nya följare är avstängt spelas testet inte upp och sidan visar **Slå först på Aviseringar för nya följare under snabbväxlarna**.

## Fliken Utseende

### Förhandsvisning

Förhandsvisningen använder samma sida som OBS-källan. Använd färgväljaren bredvid **Förhandsvisa** för att ändra förhandsvisningens bakgrund, och klicka på **▶ Spela upp animationen** för att spela upp aviseringsanimationen igen.

### Enhetlig stil / Separat per plattform

- **Enhetlig stil**: Twitch och YouTube använder samma aviseringsstil.
- **Separat per plattform**: varje plattform har en egen stil. Välj **Twitch** eller **YouTube** med knapparna nedanför och redigera dess inställningar. När du byter första gången kopierar plattformar som du inte har anpassat den aktuella enhetliga stilen, var och en med sin egen färg på nedräkningsstapeln.

**Återställ standard** återställer standardstilen för den stil du redigerar.

### Bild

- **Välj bild**: välj en bild från resurshanteraren. Utan bild visas en hjärt-emoji. **Rensa** tar bort bilden.
- **Bildstorlek**: 1–400 px.
- **Bildposition**: **Vänster**, **Höger**, **Upptill** eller **Nedtill**.

### Ljud

Välj ett inbyggt ljud: **Inget**, **Klockspel** (standard), **Mynt**, **Klocka**, **Pop**, **Fanfar**. Klicka på **▶** för att lyssna. Klicka på **Välj ljud** för att använda en egen ljudfil från resurshanteraren.

### Anpassad text

Skriv raden som visas i aviseringen. Använd `{name}` för följarens namn och `{platform}` för plattformens namn. Lämna tomt för att använda standardtexten: `Välkommen {name}, tack för att du följer!`

### Text och färg

- **Text**: ställ in typsnitt, storlek och färg för **Anpassad text** och **Följarens namn**.
- **Färg**: **Bakgrund**, **Skugga** och **Nedräkningsstapel**.

### Anpassad CSS

Expandera **Anpassad CSS** för att redigera CSS för den stil du redigerar (enhetlig eller den valda plattformen). **Återställ standard** återställer mallens CSS, och **Hantera resurser** öppnar resurshanteraren. Steam Workshop-teman kan också tillämpas här. Medan ett tema är tillämpat är CSS skrivskyddad. Se [Teman](./themes).

## Fliken Historik

Listar de senaste nya följarna från båda plattformarna, nyast först: plattform, namn och tid. Historiken visas bara i appen, aldrig i overlayen.

- Upp till 100 följare sparas, och poster äldre än 30 dagar tas bort automatiskt.
- Klicka på **Rensa** för att tömma listan.

:::info Testversion
Anpassad CSS finns bara i fullversionen, och aviseringen visar en vattenstämpel i OBS. Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::

## Vanliga frågor

**Q: Inget ljud i sändningen?**
Kontrollera att **Styr ljud via OBS** är markerat i webbläsarkällans egenskaper och att källan inte är ljudlös i OBS-mixern. Kontrollera också att **Ljud** inte är inställt på **Inget**.

**Q: En YouTube-prenumerant fick ingen avisering.**
Bara offentliga prenumerationer rapporteras, och det kan ta minuter till timmar innan YouTube rapporterar dem. Appen kontrollerar också bara medan du sänder live med YouTube-livechatten ansluten.

**Q: Jag lade till OBS-källan sent. Spelas tidigare aviseringar upp igen?**
Nej. En nyöppnad källa visar bara aviseringar som kommer efter att den har anslutit. Tidigare följare finns kvar på fliken **Historik**.
