---
sidebar_position: 21
---

# Kortkommandon

**⌨️ Kortkommandon** längst ner i vänstermenyn listar alla kortkommandon du har ställt in, på ett ställe.

## Översikt över kortkommandon

Varje rad visar tangentkombinationen och vad den utlöser, t.ex. `Timer › (timerns namn) › Starta / Pausa`. Klicka på en rad för att öppna den funktionens inställningssida och ändra det där. Kortkommandon redigeras inte på den här sidan.

Om inget är inställt än visas ”Inga kortkommandon har konfigurerats ännu.”

{/* TODO: 截圖 — 快捷鍵總覽 */}

## Funktioner med kortkommandon

| Funktion | Vad kortkommandot gör |
|------|------|
| [Ström-höjdpunktsmarkör](./highlight) | Lägger till en markering |
| [Media Board](./multimedia) | Spelar ett ljud / visar en bild / spelar en video (ett kortkommando per objekt) |
| [Rösttolkning](./voice-translate) | Kortkommandot för rösttolkning |
| [OBS-scenkontroll](./obs-scene) | **Byt scen** / **Växla källor** |
| [Timer](./timer) | **Starta / Pausa**, **Varv**, **Återställ** (per timer) |

## Ställa in ett kortkommando

[Ström-höjdpunktsmarkör](./highlight), [OBS-scenkontroll](./obs-scene) och [Timer](./timer) använder samma kortkommandofält. För Media Board och Rösttolkning, se deras egna sidor.

1. Klicka på kortkommandoknappen
2. Tryck på tangentkombinationen, t.ex. `Ctrl+Shift+F1`
3. Släpp alla tangenter för att spara

- Tryck på **Esc** under inspelningen för att avbryta
- Om kombinationen redan används av ett annat kortkommando visas ett konfliktmeddelande och den sparas inte. Välj en annan kombination
- Klicka på **✕** (eller rensningsknappen) bredvid för att ta bort kortkommandot
- Tangenterna på det numeriska tangentbordet är skilda från siffertangenterna på huvudraden: `Num1` och `1` är olika kortkommandon

Kortkommandon fungerar även när Stream Toolkit körs i bakgrunden, t.ex. medan du spelar.
