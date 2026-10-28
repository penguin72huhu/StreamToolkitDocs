---
sidebar_position: 20
---

# Teman

Dela och ladda ner utseenden för overlayer via Steam Workshop. Ett tema kan innehålla utseendet för följande funktioner:

- [Chatt](./chat)
- [Donationsmålfält](./donate)
- [Donationsaviseringar](./donate-alert)
- [Aviseringar för nya följare](./fan-alert)
- [Tittarfödelsedagar](./birthday-alert)
- [Donationspanel](./sponsors)
- [Liveomröstningar](./vote)
- [Klocka](./clock)
- [Twitch-målfält](./goal): **Följarmål**, **Prenumerationsmål**, **Bits-mål**

Öppna det via **🎨 Teman** längst ner i vänstermenyn. Sidan har två flikar: **Mina teman** och **Nedladdade teman**. Steam måste vara igång.

## Hitta och tillämpa ett tema på en funktionssida

På var och en av funktionerna ovan öppnar du avsnittet **Anpassad CSS** och klickar på **Bläddra bland Workshop-teman**:

1. **Utforska teman** listar Workshop-teman för funktionen. Skriv i **Sök temanamn** och klicka på **Sök**, eller använd **Föregående** / **Nästa** för att bläddra
2. Klicka på en miniatyr för att se förhandsvisningsbilden
3. Klicka på **Använd**. Temat prenumereras på, laddas ner och tillämpas på funktionen
4. **Prenumererade** listar de teman du redan prenumererar på för funktionen

Medan ett tema är tillämpat visar sidan **Tema som används: (namn)** och knappen **Återställ**, och den anpassade CSS:en är skrivskyddad. Klicka på **Återställ** för att gå tillbaka till dina egna inställningar.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Nedladdade teman

Listar alla teman du prenumererar på i Steam. Teman du prenumererar på tillämpas inte automatiskt — använd knapparna på kortet. OBS uppdateras direkt.

Varje kort visar förhandsvisningen, namnet, **Används** om någon funktion använder det, och **Innehåller:** de funktioner som temat omfattar (✓ markerar funktioner som för närvarande använder det).

| Knapp | Vad den gör |
|------|------|
| **Använd alla** | Tillämpar temat på alla funktioner det innehåller. Om en funktion använder ett annat tema ombeds du bekräfta ersättningen |
| **Välj…** | Välj vilka funktioner det ska tillämpas på |
| **Återställ alla** | Återställer alla funktioner som använder temat till dina egna inställningar från innan det tillämpades |
| **Återställ…** | Välj vilka funktioner som ska återställas |
| **Avsluta prenumeration** | Avslutar prenumerationen. Om temat används återställs först de funktionerna |

Efter tillämpningen visar ett meddelande längst ner vad som ändrades i 30 sekunder, med knappen **Återställ** för att ångra.

:::note
- Återställning går tillbaka till dina egna inställningar, inte till ett tema som ersattes
- Utseendeändringar som görs medan ett tema är tillämpat behålls inte efter återställning
:::

- **Laddar ner…**: låt Steam vara igång; du kan tillämpa temat när nedladdningen är klar
- **Borttaget tema (#id)**: temat finns inte längre bland dina Steam-prenumerationer men vissa funktioner använder det fortfarande. Bilder kanske inte visas, så återställning rekommenderas
- Om Steam inte är igång, starta Steam och klicka på **Uppdatera**

{/* TODO: 截圖 — 下載的主題 */}

## Mina teman: Ladda upp ett tema

1. Ställ in utseendet för de funktioner du vill dela på deras egna sidor
2. Klicka på **Ladda upp nytt tema** under **Mina teman**
3. Fyll i:
   - **Temanamn** (obligatoriskt)
   - **Tembeskrivning**
   - **Inkluderade funktioner** (minst en)
   - **Förhandsvisningsbild** (obligatoriskt, högst 1MB): klicka på **Välj förhandsvisningsbild**
4. Markera rutan som bekräftar att du har rätt att distribuera alla bilder, typsnitt och ljud i temat. Resurser som är licensierade endast för personlig eller icke-kommersiell användning får inte laddas upp
5. Klicka på **Ladda upp tema**

Om du ser ”Godkänn först villkoren för Steam Workshop i webbläsaren” behöver du godkänna villkoren för att temat ska kunna bli offentligt.

### Hantera dina uppladdade teman

Varje uppladdat tema har:

- **Ladda ner och tillämpa**: tillämpar det publicerade temat på dina funktioner. Detta skriver över dina nuvarande utseendeinställningar
- **Redigera**: laddar upp dina nuvarande utseendeinställningar på nytt till samma tema. Om du inte har laddat ner temat följer den befintliga förhandsvisningsbilden inte med, och du behöver välja en ny
- **Hantera i Steam**: öppnar temat i Steam

:::info Begränsningar i testversionen
Teman (Steam Workshop) finns bara i fullversionen. I testversionen går det inte att öppna **🎨 Teman** och teman kan inte tillämpas.

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::
