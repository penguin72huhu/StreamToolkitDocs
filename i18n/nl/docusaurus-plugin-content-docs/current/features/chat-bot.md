---
sidebar_position: 18
---

# Chatbot

Plaatst automatisch berichten in je chat: getimede berichten met een vast interval en antwoorden op trefwoorden wanneer een kijker een commando typt. De bot plaatst berichten vanaf je eigen account.

De chatbot heeft geen OBS-overlay, dus er is geen URL om toe te voegen.

:::tip
Zet de schakelaar naast **Chatbot** in het linkermenu aan. Zolang deze uit staat, verstuurt de bot niets.
:::

De pagina heeft drie tabbladen: **Instellingen**, **Getimede berichten** en **Antwoorden op trefwoorden**.

## Tabblad Instellingen

Klik onder **Platforms** op **Twitch** om het aan te zetten (klik nogmaals om het uit te zetten). Het bolletje ernaast licht op als Twitch verbonden is; anders staat er **(niet verbonden)**. Koppel eerst Twitch: [Twitch-instellingen](../platforms/twitch).

**YouTube** wordt getoond als **Binnenkort beschikbaar** en kan nog niet worden aangezet.

Als er geen platform verbonden is, tonen de andere twee tabbladen "Geen platform verbonden, dus de bot verstuurt niets." met een knop **Naar instellingen**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Getimede berichten

Plaatst regelmatig een bericht terwijl je live bent.

1. Klik op **+ Toevoegen**
2. Vul in:
   - **Bericht**: de tekst die wordt geplaatst (maximaal 500 tekens op Twitch). Het is altijd één regel: Enter doet niets en geplakte regeleinden worden spaties
   - **Interval**: minuten tussen berichten (5–240, standaard 15)
   - **Min. chatregels**: hoeveel nieuwe chatregels er sinds het laatste bericht nodig zijn voordat het opnieuw wordt geplaatst (0–100, standaard 2), zodat de bot niet blijft posten in een lege chat
   - **Platforms**: waar het bericht wordt geplaatst
3. Klik op **Opslaan**

Hoe er wordt gepost:

- Alleen terwijl je stream live is. Het eerste bericht komt één volledig interval nadat je live gaat, niet op het moment dat de stream begint
- Als meerdere getimede berichten tegelijk aan de beurt zijn, worden ze gespreid in plaats van samen geplaatst

## Antwoorden op trefwoorden

Antwoordt wanneer het bericht van een kijker met een commando begint.

1. Klik op **+ Toevoegen**
2. Vul in:
   - **Commando**: kies het voorvoegsel (`! @ # $ % & ~`) en typ daarna één woord zonder spaties, bijv. `!dc`. Het wordt vergeleken met het eerste woord van een chatbericht, zonder op hoofdletters/kleine letters te letten
   - **Antwoord**: de tekst die wordt geplaatst. `{user}` wordt vervangen door de naam van de kijker die het commando gebruikte
   - **Afkoeltijd**: seconden voordat hetzelfde commando opnieuw kan antwoorden (0–3600, standaard 5)
   - **Platforms**: waar wordt geantwoord
3. Klik op **Opslaan**

Antwoorden op trefwoorden werken altijd, of je nu live bent of niet.

Een commando mag niet hetzelfde zijn als een ander antwoord op trefwoord, of als een commando dat al wordt gebruikt door [Muziekverzoeken](./song-request) of het trefwoord van [Weggeefacties](./lottery).

## De lijst beheren

In beide tabbladen heeft elk item:

- Een selectievakje links om het item aan of uit te zetten zonder het te verwijderen
- Platformlabels; een gedimd label betekent dat dat platform is uitgezet op het tabblad Instellingen
- **Bewerken** en **Verwijderen**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Beperkingen van de proefversie
- 1 getimed bericht en 1 antwoord op trefwoord
- Elk bericht eindigt met ` (by StreamToolkit)`, dus de maximale berichtlengte is korter

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison).
:::
