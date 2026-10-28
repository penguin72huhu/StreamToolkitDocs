---
sidebar_position: 8.2
---

# Tittarfödelsedagar

Lägg till dina tittares födelsedagar i en lista. När en tittare på listan chattar under din sändning på eller strax efter sin födelsedag visas en födelsedagsavisering i sändningen. Varje tittare får en avisering per födelsedag.

## OBS-källans URL

```
http://127.0.0.1:7272/birthday-alert
```

Kopiera URL-en högst upp på sidan **Tittarfödelsedagar-inställningar** och lägg till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source).

:::warning
Aviseringar spelar upp ett ljud. Markera **Styr ljud via OBS** i webbläsarkällans egenskaper, annars hörs inte ljudet i sändningen.
:::

Slå på reglaget bredvid **Tittarfödelsedagar** i vänstermenyn. Bara när det är på ansluter appen till chatten och kontrollerar födelsedagar. Knapparna **Testavisering** och **Spela igen** fungerar även när det är av.

Sidan har tre flikar: **Inställningar**, **Tittare** och **Utseende**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Så fungerar det

- En tittare på listan som chattar från sin födelsedag och upp till det antal dagar efteråt som du har angett får en avisering. Inget visas före födelsedagen.
- Varje tittare får en avisering per födelsedag. En födelsedag den 12/28 som aviseras den 1/2 räknas fortfarande som föregående års födelsedag.
- Aviseringar utlöses bara när den plattform tittaren chattade på sänder live. När du är offline, eller när appen ännu inte kan avgöra om du sänder, utlöser eller sparar chatt inte aviseringen; den visas nästa gång tittaren chattar under en sändning.
- Chatthistorik som läses in när YouTube-chatten ansluter räknas inte, så en omstart av appen aviserar inte personer som chattade medan den var stängd.
- En födelsedag den 2/29 infaller den 2/28 under år som inte är skottår.

## Fliken Inställningar

### Chattanslutning

Visas när funktionen är påslagen. Varje plattform visar om dess chatt är ansluten:

- **Twitch**: om ingen kanal är angiven visar raden **Ingen Twitch-kanal angiven – länka Twitch först** med **Gå till inställningar**. Anslut Twitch först: [Twitch Inställningar](../platforms/twitch).
- **YouTube**: om chatten inte är ansluten visar raden **Anslut automatiskt** och **Ange manuellt** (tar dig till fältet för chatt-URL i Inställningar). Om du använder automatisk anslutning och är inloggad med Google visas **Om den inte ansluter när du sänder, tryck på Anslut på chattsidan**. Se [YouTube-inställningar](../platforms/youtube-settings) och [Chatt](./chat).

När en plattform är ansluten visas även **Live**, **Offline** eller **Okänt om du sänder**. Aviseringar utlöses bara vid **Live**.

### Inställningar

| Fält | Beskrivning |
|-------|-------------|
| **Dagar efter födelsedagen som räknas** | 0–30. Standard: 7. 0 = endast själva födelsedagen. |
| **Visningstid** | Hur länge varje avisering visas på skärmen, i sekunder (1–60). Standard: 6. |

### Testa aviseringar

Klicka på **Testavisering** för att skicka en exempelavisering till OBS, med en testtittare och dagens datum. Den visas bara i OBS och sparas aldrig, och den fungerar även när reglaget i vänstermenyn är avstängt. Knappen ändras en kort stund till **Skickat**.

## Fliken Tittare

### Lägga till en tittare

Det finns två sätt att lägga till en tittare:

- **+ Lägg till från senaste chattare**: välj någon som chattat nyligen. Formuläret öppnas med deras namn som anteckning, deras konto redan kopplat och dagens datum som födelsedag.
- **+ Lägg till med namn**: skriv kontonamnet själv.

**Senaste chattare** listar tittare som chattade medan chatten var ansluten (upp till 200, sparas i 30 dagar). Klicka på **Uppdatera** för att uppdatera listan. Tittare som redan finns på listan visar **Tillagd** och kan inte väljas igen. En sökruta visas när listan är lång.

Fyll i formuläret:

1. **Anteckning / smeknamn**: namnet du känner dem under, t.ex. `Alex`. Valfritt.
2. **Födelsedag**: månad och dag (inget år).
3. **Konton**: minst ett konto. En tittare kan ha flera konton, t.ex. både Twitch och YouTube.
   - **＋ Skriv ett konto**: välj **Twitch** eller **YouTube** och skriv namnet. För Twitch, använd inloggnings- eller visningsnamnet; för YouTube, @handtaget eller kanalnamnet.
   - **＋ Från senaste chattare**: lägg till ett konto som redan är kopplat.
   - **✕** tar bort ett konto.
4. Klicka på **Spara** (eller tryck på Enter). **Avbryt** (eller Esc) stänger formuläret.

### Inskrivna namn och koppling

Ett inskrivet namn kopplas till kontot första gången tittaren chattar. Matchningen ignorerar versaler/gemener och ett inledande `@`. Namn kan förekomma flera gånger, så det är säkrare att välja bland senaste chattare.

För YouTube, skriv @handtaget: om **Visa tittarnas namn i stället för @handtag** inte är påslaget på chattsidan kanske ett kanalnamn aldrig matchar.

Varje konto på listan visar:

- **Kopplad: [namn]**: kontot är kopplat.
- **Väntar på att ”[namn]” chattar**: ett inskrivet namn som ännu inte har kopplats.
- **Nyss kopplad**: appen kopplade kontot automatiskt när tittaren chattade. Kontrollera att det verkligen är hen och klicka sedan på **✓ Stämmer**, eller klicka på **Koppla från** om det inte är det.
- **Kontot finns redan hos ”[namn]”**: det inskrivna namnet matchade ett konto som tillhör en annan tittare på listan. Ett konto kan bara tillhöra en tittare, så ändra namnet här eller ta bort en av de två.

**Koppla från** öppnar en ruta under kontot. Efter frånkopplingen matchas i stället namnet i rutan (du kan ändra det), och kontot kopplas igen nästa gång tittaren chattar.

### Listan

Tittare vars födelsedagsavisering är aktuell visas först, därefter de kommande födelsedagarna. En sökruta visas när det finns fler än 5 tittare. Varje tittare visar:

- **Väntar på chatt**: det är deras födelsedagsperiod; aviseringen visas så snart de chattar.
- **🎂 Visad [datum]**: aviseringen för den här födelsedagen har redan visats.
- **▶ Spela igen**: visa tittarens avisering i OBS igen. Fungerar när som helst och sparas aldrig.
- **Redigera**: ändra anteckning, födelsedag eller konton. Om du ändrar födelsedagen kan aviseringen utlösas igen för det nya datumet.
- **Ta bort**: klicka på **Ta bort** och sedan på **Bekräfta borttagning**.

## Fliken Utseende

### Förhandsvisning

Förhandsvisningen använder samma sida som OBS-källan. Använd färgväljaren bredvid **Förhandsvisa** för att ändra förhandsvisningens bakgrund, och klicka på **▶ Spela upp animationen** för att spela upp aviseringsanimationen igen.

### Enhetlig stil / Separat per plattform

- **Enhetlig stil**: Twitch och YouTube använder samma aviseringsstil.
- **Separat per plattform**: varje plattform har en egen stil. Välj **Twitch** eller **YouTube** med knapparna nedanför och redigera dess inställningar. När du byter första gången kopierar plattformar som du inte har anpassat den aktuella enhetliga stilen, var och en med sin egen färg på nedräkningsstapeln.

**Återställ standard** återställer standardstilen för den stil du redigerar.

### Bild

- **Välj bild**: välj en bild från resurshanteraren. Utan bild visas en tårt-emoji. **Rensa** tar bort bilden.
- **Bildstorlek**: 1–400 px.
- **Bildposition**: **Vänster**, **Höger**, **Upptill** eller **Nedtill**.

### Ljud

Välj ett inbyggt ljud: **Inget**, **Klockspel** (standard), **Mynt**, **Klocka**, **Pop**, **Fanfar**. Klicka på **▶** för att lyssna. Klicka på **Välj ljud** för att använda en egen ljudfil från resurshanteraren.

### Anpassad text

Skriv raden som visas i aviseringen. Lämna tomt för att använda standardtexten: `Grattis på födelsedagen, {name}!` Du kan använda:

| Platshållare | Ersätts med |
|-------------|---------------|
| `{name}` | Tittarens namn i chatten |
| `{label}` | Din anteckning / ditt smeknamn (chattnamnet om anteckningen är tom) |
| `{birthday}` | Födelsedagen, t.ex. `10/20` |
| `{MM}` `{DD}` | Månad och dag med två siffror, för att bygga ditt eget format, t.ex. `{DD}/{MM}` |
| `{date}` | Födelsedagen på overlayens språk |
| `{platform}` | Plattformens namn |

### Text och färg

- **Text**: ställ in typsnitt, storlek och färg för **Anpassad text** och **Tittarens namn**.
- **Färg**: **Bakgrund**, **Skugga** och **Nedräkningsstapel**.

### Anpassad CSS

Expandera **Anpassad CSS** för att redigera CSS för den stil du redigerar (enhetlig eller den valda plattformen). **Återställ standard** återställer mallens CSS, och **Hantera resurser** öppnar resurshanteraren. Steam Workshop-teman kan också tillämpas här. Medan ett tema är tillämpat är CSS skrivskyddad. Se [Teman](./themes).

:::info Testversion
- Upp till 3 tittare på listan. Om listan innehåller fler (t.ex. från en sparfil från fullversionen) visas de extra tittarna som låsta 🔒: de utlöser aldrig någon avisering och kan inte redigeras eller spelas upp igen.
- Anpassad CSS finns bara i fullversionen.
- Aviseringen visar en vattenstämpel i OBS.

Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison).
:::

## Vanliga frågor

**Q: Inget ljud i sändningen?**
Kontrollera att **Styr ljud via OBS** är markerat i webbläsarkällans egenskaper och att källan inte är ljudlös i OBS-mixern. Kontrollera också att **Ljud** inte är inställt på **Inget**.

**Q: En tittare chattade på sin födelsedag men ingen avisering visades.**
Kontrollera att reglaget i vänstermenyn är på, att **Chattanslutning** på fliken **Inställningar** visar **Live** för den plattformen, och att kontot på listan visar **Kopplad** eller att det inskrivna namnet matchar tittarens chattnamn. Om aviseringen visades medan OBS inte var öppet, använd **▶ Spela igen**.

**Q: Jag lade till OBS-källan sent. Spelas tidigare aviseringar upp igen?**
Nej. En nyöppnad källa visar bara aviseringar som kommer efter att den har anslutit. Använd **▶ Spela igen** på fliken **Tittare** för att visa en igen.
