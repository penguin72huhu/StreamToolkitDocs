---
sidebar_position: 12
---

# Klok

Toon de huidige tijd op de stream, eventueel met datum en weekdag.

## Stap 1: Voeg de OBS-bron toe

Kopieer de **OBS-bron-URL** bovenaan de pagina:

```
http://127.0.0.1:7272/clock
```

Voeg deze in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source). De klok speelt geen geluid af, dus je hoeft "Audio bedienen via OBS" niet aan te zetten.

:::tip
Zet ook de schakelaar naast **Klok** in de linkerzijbalk aan (**OBS-weergave inschakelen**). Zolang deze uit staat, is de klok in OBS verborgen.
:::

## Voorbeeld

Het **Voorbeeld** bovenaan toont de echte OBS-overlay en wordt bijgewerkt terwijl je instellingen wijzigt. Gebruik het kleurvak ernaast om de achtergrond van het voorbeeld te wijzigen.

Onder het voorbeeld staan drie tabbladen: **Weergave**, **Klokindeling** en **Weergave-instellingen**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Weergave

| Instelling | Beschrijving |
|---------|-------------|
| **Lettertype** | Lettertype voor alle tekst van de klok |
| **Stijl** | Hoe tijd, datum en weekdag worden geschikt: **Stack**, **Horizontal**, **One-Top-Two-Bottom** of **Two-Top-One-Bottom**. **Regelafstand** is beschikbaar in elke indeling behalve **Horizontal**, en **Tussenruimte** in elke indeling behalve **Stack** (beide −200 tot 200 px) |
| **Volgorde** | Sleep de blokken **Tijd**, **Datum** en **Weekdag** om de volgorde te wijzigen |
| **Tekst** | Stel **Tijd**, **Datum** en **Weekdag** apart in: **Tekengrootte**, kleur (**Effen**, of **Verloop** met twee kleuren en een **Hoek**), en kleur, **Transparantie** en **Dikte** (0–7 px) van de **Rand** |
| **Schaduw** | Schaduwkleur, **Transparantie**, **Vervaging** en X/Y-verschuiving, gedeeld door alle tekst |

De knop **Standaard herstellen** staat bovenaan het tabblad.

### Aangepaste CSS

Klik op **Aangepaste CSS** om de editor uit te klappen. De standaard-CSS bevat de selectors voor elk onderdeel van de klok (tijd, datum, weekdag en hun containers) met opmerkingen. Gebruik deze voor indeling en structuur. Kleuren, lettertypen en groottes stel je in bij de weergave-instellingen hierboven.

- **Standaard herstellen**: zet de standaard-CSS terug
- **Assets beheren**: opent het assetbeheer voor afbeeldingen die je in je CSS gebruikt

Als je CSS een eigenschap overschrijft met `!important`, wordt de bijbehorende weergave-instelling vergrendeld, omdat de CSS toch voorrang zou krijgen.

## Klokindeling

- **Tijdnotatie**: **24-uurs**, of een van de twee 12-uursopties: **12-uurs (AM/PM)** toont AM/PM, en **12-uurs (v.m./n.m.)** toont de Chinese aanduidingen 上午 / 下午
- **Tijdzone**: UTC−12 tot UTC+14. Standaard komt de tijdzone overeen met die van je computer

## Weergave-instellingen

- **Seconden tonen**
- **Datum tonen**: kies als deze aan staat een datumnotatie in de keuzelijst. Notaties gemarkeerd met **Geen jaar** laten het jaar weg
  - **Voorloopnul bij datum**: toont maanden en dagen van één cijfer met een voorloopnul (bijvoorbeeld 2026/05/20)
  - **Jaarnotatie**: wordt getoond bij notaties die met het jaar beginnen. **Volledig (2026)** of **Afgekort (26)**

  Deze twee opties gelden voor de numerieke notaties (met `/` of `-`). De uitgeschreven notaties (bijvoorbeeld "20 mei 2026") volgen in plaats daarvan de interfacetaal van de app
- **Weekdag tonen**: kies als deze aan staat hoe de weekdag wordt geschreven (bijvoorbeeld **woensdag**, **Wednesday**, **WED** of **Wed**)

:::info Beperkingen van de proefversie
**Aangepaste CSS** is alleen beschikbaar in de volledige versie. Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison) voor details.
:::
