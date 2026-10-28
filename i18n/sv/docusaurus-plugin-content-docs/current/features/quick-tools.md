---
sidebar_position: 1
---

# Snabbverktyg

**Snabbverktyg** är ett litet kontrollfönster som du kan ha öppet bredvid ditt spel eller OBS. Med det kan du slå på och av funktioner och använda deras vanligaste kontroller utan att byta tillbaka till huvudfönstret.

## Öppna Snabbverktyg

Använd något av följande:

- Klicka på **⚡ Snabbverktyg** högst upp i vänstermenyn i huvudfönstret
- Högerklicka på Stream Toolkit-ikonen i systemfältet och välj **Öppna snabbverktyg**

Om fönstret redan är öppet läggs det överst i stället för att ett andra fönster öppnas.

{/* TODO: 截圖 — 快速工具視窗 */}

## Fönstret

- **Flytta det**: dra i namnlisten
- **📌 Fäst / Lossa**: håller fönstret ovanpå andra fönster. Fästning är på när fönstret öppnas
- **✕**: stänger fönstret

Fönstret följer appens tema och gränssnittsspråk.

## Panelen Snabbväxling

Klicka på pilen **›** vid vänsterkanten för att skjuta ut panelen **Snabbväxling**. Den listar alla funktioner:

- Reglaget slår på eller av funktionen (samma som reglaget bredvid varje funktion i huvudfönstrets sidomeny)
- **⚙** (**Öppna inställningar**) tar fram huvudfönstret på funktionens inställningssida

Klicka utanför panelen eller klicka på pilen igen för att stänga den.

Funktionerna listas i samma ordning som i huvudfönstrets sidomeny. För att ändra ordningen, dra i handtaget **⠿** bredvid en funktion i huvudfönstrets sidomeny.

## Funktionskort

Varje aktiverad funktion som har kontroller visas som ett kort. Korten är hopfällda från början — klicka på ett korts rubrik för att expandera eller fälla ihop det. Om ingen av dessa funktioner är på visar fönstret **Inga funktioner aktiverade än**.

| Funktion | Vad kortet erbjuder |
|---------|---------------------|
| [OBS-scenkontroll](./obs-scene) | Anslutningsstatus, plus en knapp per konfigurerat scenbyte eller källväxling (den aktuella scenen är markerad). Knapparna är inaktiverade när anslutning saknas. Kortet visas först när det finns minst en kortkommandopost |
| [Rösttolkning](./voice-translate) | Knappen **REC** — håll ned för att spela in, släpp för att översätta |
| [Ström-höjdpunktsmarkör](./highlight) | Knappen **MARK**. Efter en markering visas plattformsikonen och tidsstämpeln i 5 sekunder |
| [Donationsmålfält](./donate) | Aktuellt belopp / målbelopp med förloppsstapel, fältet **Lägg till belopp manuellt** med **Lägg till**, och **Nollställ** |
| [Timer](./timer) | För varje visad timer: namn, tid, **Starta** / **Pausa**, **Återställ** och de knappar för att lägga till tid som du har konfigurerat. Stoppur visar i stället **Stoppa** och **Varv** |
| [Snurrhjul](./turntable) | För varje visat hjul: **Snurra** och **Återställ** |
| [Media Board](./multimedia) | Knappar för fästa bilder (visa / dölj), fästa videor (spela) och fästa ljud (spela) |
| [Låtönskningar](./song-request) | **Spela** / **Pausa**, **Stoppa**, **Nästa** |

Om en kontroll har ett kortkommando visas kortkommandot på dess knapp.

Funktioner som inte har något att styra här (Chatt, Twitch-målfält, Donationsaviseringar, Donationspanel, Klocka, Emote-vägg, Liveomröstningar, Utlottningar, Chattbot) har bara sitt på/av-reglage i panelen Snabbväxling.

:::tip
**Nollställ** på kortet Donationsmålfält kräver två klick: det första klicket ändrar knappen till **Nollställ**-bekräftelsen, och ett andra klick inom 10 sekunder sätter beloppet till noll.
:::

:::info
Timers och hjul följer respektive funktions **Visningsläge**: med **En timer** / **Ett hjul** visas bara den som är vald; med **Flera timers** / **Flera hjul** visas bara de du har lagt till. Om det inte finns några visar kortet **Ingen timer än** / **Inget hjul än**.
:::
