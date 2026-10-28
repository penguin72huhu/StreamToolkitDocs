---
sidebar_position: 4
---

# Rösttolkning

Håll ned ett kortkommando och prata. Stream Toolkit omvandlar ditt tal till text, översätter det och visar båda raderna som undertexter i OBS.

Taligenkänningen körs på din egen dator med en Whisper-modell. Texten översätts sedan med MyMemory.

Sidan har två flikar: **Inställningar** och **Utseende**.

## Steg 1: Lägg till OBS-källan

OBS-källans URL visas högst upp på sidan:

```
http://127.0.0.1:7272/voice-translate
```

Klicka på **Kopiera** och lägg till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source). Rösttolkning spelar inget ljud, så du behöver inte slå på ”Styr ljud via OBS”.

Undertexterna visas längst ner i källan: originaltexten överst och översättningen under. De tonas ut efter **Undertextens visningstid**.

:::tip
Slå på reglaget bredvid **Rösttolkning** i vänstermenyn (**Slå på OBS-visning**). Kortkommandot fungerar bara när det är på.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Steg 2: Ställ in kortkommandot

Under **Kortkommando (håll för att spela in, släpp för att tolka)**:

1. Klicka på **Klicka för att ställa in kortkommando**
2. Tryck på den tangentkombination du vill ha och släpp den sedan. Tryck på **Esc** för att avbryta
3. För att ta bort kortkommandot, klicka på **Rensa**

Om kombinationen redan används av en annan funktion visar knappen **Konflikt med kortkommando** och kortkommandot sparas inte.

Kortkommandot fungerar även när Stream Toolkit inte är det aktiva fönstret. **Håll ned** det medan du pratar och **släpp** det sedan för att tolka och översätta. En inspelning stoppas automatiskt efter 15 sekunder.

Du kan också hålla ned knappen **REC** under kortkommandot med musen. Den fungerar på samma sätt: tryck för att spela in, släpp för att översätta. Fönstret [Snabbverktyg](./quick-tools) har samma **REC**-knapp.

## Steg 3: Inställningar för taligenkänning

| Fält | Beskrivning |
|-------|-------------|
| **Modellstatus** | Visar **Laddar xx%**, **Klar** eller **Modellen kunde inte laddas**. Du kan spela in när den visar **Klar** |
| **Whisper-modell** | **Tiny (snabbast, ca 40 MB)**, **Base (rekommenderas, ca 75 MB)** (standard) eller **Small (mest exakt, ca 245 MB)**. Modellen laddas ner första gången du använder den. Om du byter modell laddas den om |
| **Talspråk** | Språket du talar. Standard är traditionell kinesiska |
| **Mikrofon** | Mikrofonen som ska spela in. **Systemstandard** använder Windows standardinmatningsenhet |

## Steg 4: Översättningsinställningar

| Fält | Beskrivning |
|-------|-------------|
| **Undertextens visningstid** | Hur länge undertexterna visas på skärmen, 1–30 sekunder. Standard är 5 |
| **Målspråk** | Språket som ska översättas till. Standard är engelska |
| **Använd Whisper-översättning när målspråket är English** | När målspråket är engelska översätter Whisper i stället för MyMemory. (Gratis utan kvot, men med längre fördröjning.) Det har ingen effekt för andra målspråk |
| **Översättningstjänst** | MyMemory |

### E-post (valfritt)

MyMemory är gratis. Den dagliga kvoten beror på om du anger en e-postadress:

- Utan e-post: 5 000 tecken/dygn
- Med e-post: 50 000 tecken/dygn (gratis, kräver ingen registrering på MyMemory)

Ange din e-postadress och klicka på **Spara**. Den här e-postadressen **Delas med chattöversättning**.

Stapeln nedanför visar **Använt idag (uppskattat, återställs kl. 08:00 UTC varje dygn)**. När kvoten är förbrukad visas **Kvoten är slut**.

## Steg 5: Utseende

På fliken **Utseende** kan du ändra hur undertexterna ser ut. Ändringar sparas direkt.

- **Förhandsvisa**: visar exempel på undertexter. Färgrutan bredvid ändrar bara förhandsvisningens bakgrund
- **Justering**: **Vänster** (standard), **Centrerad** eller **Höger**
- **Teckensnitt**: en rad för **Originalspråk** (originaltexten) och en för **Målspråk** (översättningen). Varje rad har ett teckensnitt, en färg och en storlek (8–120 px). Standard är 14 px för originalet och 22 px för översättningen
- **Skugga**: textskuggans färg
- **Återställ standard**: återställer standardutseendet

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Begränsningar i testversionen
**Målspråk** är låst till engelska. Sidan visar ”Demoversionen stöder endast översättning till engelska”.

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison) för mer information.
:::

## Vanliga frågor

**Q: Jag håller ned kortkommandot men inget händer.**
Kontrollera att reglaget bredvid **Rösttolkning** i vänstermenyn är på och att **Modellstatus** visar **Klar**.

**Q: Inspelningen fungerar, men inga undertexter visas i OBS.**
Om MyMemory inte kan översätta (till exempel om den dagliga kvoten är förbrukad) visas inga undertexter. Kontrollera stapeln **Använt idag**. Om du anger en e-postadress höjs kvoten. Om ditt målspråk är engelska kan du också slå på **Använd Whisper-översättning när målspråket är English**, som inte har någon kvot.
