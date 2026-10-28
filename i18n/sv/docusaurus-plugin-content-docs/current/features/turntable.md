---
sidebar_position: 14
---

# Snurrhjul

Skapa egna prishjul och snurra dem i sändningen. Du kan ställa in varje alternativs vikt, hjulets färger och om ett draget alternativ ska tas bort efteråt.

Sidan har tre flikar: **Inställningar**, **Skapa hjul** och **Historik**. Skapa först ett hjul och snurra det sedan från **Inställningar**.

## Steg 1: Skapa ett hjul

1. Öppna **Snurrhjul** i vänstermenyn och byt till fliken **Skapa hjul**
2. Under **Mina hjul** klickar du på **Lägg till**. Ett nytt hjul med namnet ”Hjul 1” (sedan ”Hjul 2” och så vidare) visas
3. Klicka på ett hjulkort för att redigera det. Klicka på **✕** på ett kort för att ta bort hjulet

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Hjultitel

Ange ett namn på hjulet. Det används i hjullistan, listrutorna och historiken.

### Hjulinnehåll

1. Klicka på **Redigera innehåll**
2. Ange alternativen, **ett per rad**
3. Klicka på **Bekräfta**

### Vikt

När hjulet har alternativ får vart och ett ett fält för **Vikt** (minst 1, standard 1). Ett alternativs sektorstorlek och dess chans att dras skalas båda med vikten. Till exempel är ett alternativ med vikt 2 dubbelt så sannolikt att dras som ett alternativ med vikt 1.

### Hjulets temafärg

- **Minimalistisk**: det inbyggda vita och grå färgschemat
- **Anpassa**: skapa ett eget färgschema. Ange ett **Namn**, välj **Färger (3–5 st)** med **＋** för att lägga till en färg och **✕** för att ta bort en, och klicka sedan på **Lägg till**

För att ändra ett anpassat tema, klicka på dess **✎**-knapp. För att ta bort det, klicka på **✕**. Anpassade teman erbjuds även som färgscheman för hjulanimationen i [Utlottningar](./lottery).

### Ta bort alternativ efter dragning

När det här är på tas ett draget alternativ bort från hjulet före nästa snurr. Klicka på **Återställ** för att lägga tillbaka alla alternativ.

## Steg 2: Välj visningsläge och lägg till OBS-källan

Byt till fliken **Inställningar** och välj ett **Visningsläge**:

| Läge | Beskrivning | OBS-källans URL |
|------|-------------|----------------|
| **Ett hjul** | OBS visar bara det valda hjulet. Byt hjul med listrutan **Hjul som används nu** | `http://127.0.0.1:7272/turntable` |
| **Flera hjul** | OBS kan visa flera hjul samtidigt. Varje hjul har en egen URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

I läget **Flera hjul** väljer du hjul under **Lägg till i hjulvisning**. Varje tillagt hjul får ett eget kort med sin **OBS-källadress**. Klicka på **Kopiera** för att kopiera den. Klicka på **✕** på ett kort för att ta bort hjulet från visningen.

Lägg till den kopierade URL-en i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source). Snurrhjul spelar inget ljud, så du behöver inte slå på ”Styr ljud via OBS”.

:::tip
Slå också på reglaget bredvid **Snurrhjul** i vänstermenyn (**Slå på OBS-visning**). När det är av förblir overlayen dold.
:::

## Steg 3: Snurra

På varje hjulkort på fliken **Inställningar**:

- **Snurra**: startar snurrningen. När animationen är klar visar overlayen resultatet. Det går inte att klicka på knappen när hjulet saknar alternativ eller fortfarande snurrar
- **Återställ**: tar tillbaka borttagna alternativ, återställer hjulet och rensar den aktuella **Vinnarlista**

Kortets **Vinnarlista** samlar alla resultat sedan senaste **Återställ**.

Du kan också använda **Snurra** och **Återställ** från fönstret [Snabbverktyg](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Historik

Fliken **Historik** sparar en post för varje omgång, från första snurret fram till nästa **Återställ**. Den listar tid, hjultitel och vinnare. Endast de senaste 30 dagarnas hjulhistorik sparas. För att ta bort en post, klicka på 🗑 och sedan på **Bekräfta borttagning**.

:::info Begränsningar i testversionen
- Du kan bara skapa **1** hjul
- OBS-overlayen visar en vattenstämpel

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison) för mer information.
:::
