---
sidebar_position: 11
---

# Timer

Visa nedräkningstimers eller stoppur i sändningen. En nedräkning kan få mer eller mindre tid via knappar du klickar på, eller automatiskt från Twitch-följare, prenumerationer, Bits och donationer.

Sidan har två flikar: **Inställningar** och **Skapa timer**. Skapa först en timer och styr den sedan från **Inställningar**.

## Steg 1: Skapa en timer

1. Öppna **Timer** i vänstermenyn och byt till fliken **Skapa timer**
2. Under **Mina timers** klickar du på **Lägg till**. En ny nedräkningstimer skapas med en starttid på 10 minuter och tre tidsalternativ (+30 sek, +1 min, +5 min)
3. Klicka på ett timerkort för att redigera det. Klicka på **✕** på ett kort för att ta bort timern

**Förhandsvisa** visar hur den valda timern ser ut. Använd färgrutan bredvid för att ändra förhandsvisningens bakgrund.

Under förhandsvisningen växlar du mellan **Timerinställningar** och **Utseende**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Steg 2: Timerinställningar

### Timerläge

- **Nedräkning**: räknar ned från starttiden
- **Stoppur**: räknar upp från 0 och kan registrera varv. Stoppurläget har ingen starttid, varningstid, slutljud eller tidsalternativ

### Namn

Namnet som visas i timerlistan, listrutorna och Snabbverktyg.

### Starttid

Nedräkningens starttid, i timmar, minuter och sekunder. Totalen i sekunder visas bredvid.

### Varningstid

När återstående tid når det här värdet byter timertexten till färgen **Varning** som är inställd under **Utseende**. Lämna på 0 för ingen varning.

### Ljud vid nedräkningens slut

Ljudet som spelas när nedräkningen når 0. Välj **Inget** eller ett av de inbyggda ljuden (**Klockspel**, **Mynt**, **Klocka**, **Pop**, **Fanfar**). Klicka på **▶** för att testa. För att använda en egen fil, klicka på **Välj ljud** och välj en från resurshanteraren.

Ljudet spelas av OBS-webbläsarkällan, så slå på **Styr ljud via OBS** för timerkällan. Se [Hur man lägger till källor i OBS](../getting-started/obs-source).

### Tidsalternativ

Tidsalternativ är knapparna för att lägga till/dra av tid för en nedräkning. Varje timer kan ha upp till 20.

För att lägga till ett fyller du i formuläret **Lägg till tidsalternativ**:

1. **Utlösarkälla**: välj vad som tillämpar alternativet automatiskt
   - **Manuell**: tillämpas bara när du klickar på knappen
   - **Följ**: tillämpas vid varje ny Twitch-följare
   - **Twitch Bits**: tillämpas vid Bits-cheers
   - **Ny Twitch-prenumeration**: tillämpas vid Twitch-prenumerationer
   - **Donation**: tillämpas vid donationer. Använd **Donationsplattform** för att välja vilka av **YouTube**, **O'Pay**, **ECPay** och **PayPal** som räknas
2. För **Twitch Bits** och **Donation** anger du också:
   - **Utlösartröskel**: antalet Bits eller donationsbeloppet för ett steg
   - **Omräkningssätt**: **Utlös i heltalssteg** eller **Omräkna proportionellt** (se exemplet nedan)
3. **Lägg till tid**: välj **＋** eller **－** och ange sedan timmar, minuter och sekunder
4. Klicka på **Lägg till**

För att ändra ett alternativ klickar du på dess **Redigera**, ändrar formuläret och klickar sedan på **Spara** (eller **Avbryt**). Klicka på **✕** för att ta bort det. Alternativ med en automatisk utlösare är markerade med 🔗 och utlösarens namn.

**Omräkningsexempel**: Utlösartröskel 100 bits, Lägg till tid +1 min, och en tittare skickar 250 bits:

- **Utlös i heltalssteg**: bara hela multiplar av tröskeln räknas → 2 × 1 min = **+2 min**
- **Omräkna proportionellt**: 250 ÷ 100 × 1 min → **+2 min 30 sek**

För donationer räknas beloppet om till den valuta som är vald i appens Inställningar innan det jämförs med tröskeln.

:::note
- Automatiska utlösare påverkar bara nedräkningstimers
- Tidsalternativ med automatisk utlösare visas fortfarande som knappar i kontrollpanelen, så du kan också klicka på dem för hand
- **Ny Twitch-prenumeration** tillämpas en gång per prenumerationshändelse: en gåva med flera prenumerationer tillämpar det en gång. Återprenumerationer tillämpar det bara när **Räkna återprenumerationer** är på i [Twitch-målfält](./goal)
:::

### Kontrollkortkommandon

Ställ in kortkommandon för den här timern:

- **Starta／pausa**
- **Kortkommando för varv** (endast stoppur)
- **Kortkommando för återställning**

Se även [Kortkommandon](./hotkeys).

## Steg 3: Utseende

| Inställning | Beskrivning |
|---------|-------------|
| **Teckensnitt** | Teckensnitt för tidstexten |
| **Textstorlek** | 12–300 px |
| **Textfärg** | **Normal**: **Enfärgad** eller **Gradient** (två färger och en **Vinkel**). **Varning** (endast nedräkning): färgen som används när varningstiden har nåtts |
| **Bakgrundsfärg** | Bakgrunden bakom tiden |
| **Ram** | Konturfärg, **Opacitet** och **Tjocklek** (0–20 px) |
| **Skugga** | Skuggans färg, **Opacitet**, **Oskärpa** och **X**-/**Y**-förskjutning |

## Steg 4: Välj visningsläge och lägg till OBS-källan

Byt till fliken **Inställningar**. Under **Kontrollpanel** väljer du ett **Visningsläge**:

| Läge | Beskrivning | OBS-källans URL |
|------|-------------|----------------|
| **En timer** | OBS visar bara den valda timern. Byt timer med listrutan **Aktuell timer** | `http://127.0.0.1:7272/timer` |
| **Flera timers** | Varje timer har en egen URL och kan läggas till i OBS separat | `http://127.0.0.1:7272/timer/<timer ID>` |

I läget **Flera timers** väljer du timers under **Lägg till i visning**. Varje tillagd timer får ett eget kort med sin **OBS-källadress**. Klicka på **Kopiera** för att kopiera den. Klicka på **✕** på ett kort för att ta bort det från visningen.

Lägg till den kopierade URL-en i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source).

:::tip
Slå också på reglaget bredvid **Timer** i vänstermenyn (**Slå på OBS-visning**). När det är av döljs timern i OBS.
:::

## Steg 5: Styr timern

Varje timerkort på fliken **Inställningar** har:

- **Starta** / **Pausa**: för ett stoppur visar pausknappen **Stoppa**. En nedräkning som har nått 0 kan inte startas förrän du återställer den eller lägger till tid
- **Varv** (endast stoppur): registrerar ett varv medan timern går. Varven listas under kortet med tiden och skillnaden mot föregående varv
- **Återställ**: stoppar timern och återställer den till starttiden (0 för ett stoppur) och rensar varven
- **Lägg till tid** (endast nedräkning): en knapp för varje tidsalternativ

Den löpande tiden visas bara i OBS-overlayen, inte på inställningssidan. Du kan också styra timers från fönstret [Snabbverktyg](./quick-tools), som även visar aktuell tid.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Begränsningar i testversionen
Du kan bara skapa **1** timer. Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison) för mer information.
:::
