---
sidebar_position: 17
---

# Låtönskningar

Tittarna önskar YouTube-låtar med ett chattkommando, och låtarna spelas upp i OBS en efter en. Du kan också lägga till låtar själv och ange en standardspellista som spelas när det inte finns några önskningar.

## OBS-källans URL

```
http://127.0.0.1:7272/song-request
```

Klicka på **Kopiera** bredvid **OBS-källadress** högst upp på sidan och lägg sedan till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source).

:::warning
Låtönskningar spelar upp ljud. Markera **Styr ljud via OBS** i webbläsarkällans egenskaper, annars når musiken inte din sändning.
:::

:::tip
Slå också på reglaget bredvid **Låtönskningar** i vänstermenyn. Chattkommandon hanteras bara när reglaget är på.
:::

Sidan har två flikar: **Inställningar** och **Spellista**.

## Fliken Inställningar

### Plattform

Varje plattform har ett eget kort:

- **Tillåt låtönskningar från denna plattform**: låter tittare i den chatten önska låtar
- **Aktivera chattbotsvar** (endast Twitch, på som standard): svarar i Twitch-chatten med resultatet av varje kommando, via ditt anslutna Twitch-konto. Visas bara när Twitch är aktiverat och anslutet

En plattform som inte är ansluten visar **(Ej ansluten)** (Twitch) eller **Ingen chattadress ansluten** (YouTube). Anslut den först:

- [Twitch Inställningar](../platforms/twitch)
- [YouTube-inställningar](../platforms/youtube-settings)

### Chattkommandon

| Fält | Standard |
|------|--------|
| **Kommandoprefix** | `!` (välj bland `! @ # $ % & ~`) |
| **Önska låt-kommando** | `sr` |
| **Ta bort låtönskning** | `remove` |
| **Visa låtlista** | `queue` |
| **Fråga vilken låt som spelas** | `song` |
| **Nedkylningstid för låtönskning** | 3000 ms |

Nedkylningen räknas per tittare: efter en lyckad önskning måste samma tittare vänta så här länge innan hen kan önska igen.

### Inställningar

- **Visa video på skärmen** (på som standard): när det är av döljs videon i OBS men ljudet spelas fortfarande
- **Listgräns** (1–100, standard 20): det högsta antalet önskade låtar i listan. Låtar från standardspellistan räknas inte
- **Visa avisering för låtönskning** (på som standard): visar ett aviseringskort i OBS när en tittare önskar, tar bort eller misslyckas med att önska en låt. När det är på kan du ställa in:
  - **X** / **Y**: aviseringens position från det övre vänstra hörnet (px, standard 16 / 16)
  - **Aviseringsskala**: storleksfaktor (standard 1.0)
  - **Testa aviseringens utseende**: skickar en testavisering till OBS

Varje avisering visas i 5 sekunder; upp till 3 visas samtidigt.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Så använder tittarna det

Med standardinställningarna:

| Kommando | Vad det gör |
|------|------|
| `!sr <YouTube link>` | Önskar den videon |
| `!sr <search words>` | Söker på YouTube och önskar det första resultatet |
| `!remove` | Tar bort tittarens senaste önskning (inte låten som spelas) |
| `!queue` | Svarar med de 3 nästa önskade låtarna |
| `!song` | Svarar med låten som spelas |

- Godkända länkar: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…`, eller ett video-ID på 11 tecken
- Spellistelänkar godkänns inte
- En önskning misslyckas när listan har nått **Listgräns**
- Nya önskningar köas efter de andra tittarnas önskningar, före låtar från standardspellistan
- `!queue` och `!song` fungerar bara i Twitch-chatten med **Aktivera chattbotsvar** påslaget

## Fliken Spellista

### Uppspelningskontroller

Den översta raden visar vem som önskade den aktuella låten och dess titel. Knappar:

- **Spela** / **Pausa**: om inget spelas startar uppspelningen från den första låten i listan
- **Stoppa**: stoppar uppspelningen
- **Nästa**: hoppar till nästa låt

Medan en låt spelas visas en förloppsstapel; dra i den för att hoppa till en position. När en låt tar slut startar nästa automatiskt.

:::note
Inget spelas automatiskt när appen startar. Tryck på **Spela** för att börja.
:::

### Standardspellista

Klistra in en URL till en YouTube-spellista och välj **Spela i loop** eller **Slumpvis uppspelning**. När listan tar slut läggs en låt från den här spellistan till och spelas automatiskt. Dessa låtar visas som **Standardlista** i listan.

Standardspellistan läses via ditt YouTube-konto, så du måste först logga in med Google i [YouTube-inställningar](../platforms/youtube-settings).

### Önska låt manuellt

Klistra in en URL till en YouTube-video och klicka på **Lägg till i listan** (eller tryck på Enter). Manuella önskningar stöder inte sökord.

### Lista

**Lista (n)** visar alla låtar: plattform, den som önskade, titel och video-ID (klicka för att öppna på YouTube). Klicka på **Ta bort** för att ta bort en låt; om du tar bort låten som spelas hoppar uppspelningen till nästa. **Töm** tömmer hela listan.

{/* TODO: 截圖 — 播放清單分頁 */}

## Vanliga frågor

**Q: Tittarna skriver kommandot men inget händer?**
Kontrollera att:
- Reglaget **Låtönskningar** i vänstermenyn är på
- **Tillåt låtönskningar från denna plattform** är markerat för den plattformen
- För Twitch: Twitch-chatten läses av funktionen [Chatt](./chat). Om du har slagit av Twitch på chattsidan (och [Chattbot](./chat-bot) inte använder Twitch) tas Twitch-kommandon inte emot

**Q: Standardspellistan spelas inte?**
Se till att du är inloggad med Google i Inställningar och att URL-en är en spellistelänk (den innehåller `list=`).

:::info Begränsningar i testversionen
- Låtönskningar från tittare i chatten finns bara i fullversionen. I testversionen misslyckas en önskning från chatten med meddelandet ”Låtönskningar finns inte i testversionen”. **Önska låt manuellt** och standardspellistan fungerar fortfarande
- OBS-overlayen visar en vattenstämpel

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::
