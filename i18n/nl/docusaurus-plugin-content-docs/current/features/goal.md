---
sidebar_position: 10
---

# Twitch-doelbalk

Toon op de stream voortgangsbalken voor je Twitch-doelen voor volgers, abonnementen en Bits. Elk type doel heeft een eigen balk, eigen instellingen en een eigen OBS-URL.

:::note Voordat je begint
De doelbalken tellen Twitch-gebeurtenissen, dus koppel eerst je Twitch-account. Zie [Twitch-instellingen](../platforms/twitch).
:::

## Stap 1: Kies een type doel en voeg de OBS-bron toe

Kies bovenaan de pagina een type doel: **Volgen**, **Abonnement** of **Bits**. De **OBS-URL** onder de knoppen verandert mee. Klik op **Kopiëren** om de URL te kopiëren.

| Type doel | OBS-bron-URL |
|-----------|----------------|
| **Volgen** | `http://127.0.0.1:7272/goal/follow` |
| **Abonnement** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Voeg elke balk die je wilt tonen als aparte browserbron toe in OBS. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source). De doelbalken spelen geen geluid af, dus je hoeft "Audio bedienen via OBS" niet aan te zetten.

:::tip
Zet ook de schakelaar naast **Twitch-doelbalk** in de linkerzijbalk aan (**OBS-weergave inschakelen**). Zolang deze uit staat, zijn de balken in OBS verborgen.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Stap 2: Stel het doel in

Alle onderstaande instellingen gelden voor het type doel dat je bovenaan hebt gekozen.

- **Titel**: de titeltekst die op de balk wordt getoond
- **Doel**: het doelgetal (hele getallen, 0 of meer)
- **Voortgang**: toont de huidige telling, het doel en het percentage

### Hoe de voortgang wordt geteld

| Type doel | Wat telt mee voor de voortgang |
|-----------|----------------------|
| **Volgen** | Elke nieuwe volger telt 1. Zolang Twitch verbonden is, wordt de telling ook elke 30 seconden gesynchroniseerd met het totale aantal volgers van je kanaal op Twitch. Klik op **Synchroniseren** om direct te synchroniseren |
| **Abonnement** | Nieuwe abonnementen en cadeauabonnementen (een cadeau van meerdere abonnementen telt het aantal gegeven abonnementen). Herabonnementen tellen alleen mee als **Herabonnementen meetellen** aan staat |
| **Bits** | Elke cheer telt het aantal gecheerde Bits |

### Opties voor abonnementen

Alleen zichtbaar bij **Abonnement**:

- **Gewogen per Tier (T1=+1, T2=+2, T3=+6)**: als dit aan staat, tellen abonnementen van een hogere tier zwaarder mee. Als het uit staat, telt elk abonnement 1
- **Herabonnementen meetellen**: als dit aan staat, tellen ook herabonnementsberichten mee voor de voortgang

### Voortgang resetten

**Abonnement** en **Bits** hebben een knop **Voortgang resetten**. Klik erop en daarna op **Resetten bevestigen** om de huidige telling terug te zetten op 0. Het doelgetal blijft behouden.

**Volgen** heeft geen resetknop, omdat de telling je totale aantal Twitch-volgers volgt.

## Stap 3: Pas de weergave aan

### Voorbeeld

Het **Voorbeeld** bovenaan toont de balk voor het gekozen type doel. Gebruik het kleurvak ernaast om de achtergrond van het voorbeeld te wijzigen. Vink **Voorbeeld bereikt** aan om te zien hoe de balk eruitziet zodra het doel is bereikt.

### Weergave-instellingen

| Instelling | Beschrijving |
|---------|-------------|
| **Achtergrondkleur** | Achtergrond van de balk |
| **Kleur voortgangsbalk** | Kleur van het gevulde deel |
| **Kleur bij bereikt doel** | Vulkleur zodra het doel is bereikt |
| **Titeltekst** | Lettertype, kleur en grootte (8–72 px) van de titel |
| **Doeltekst** | Lettertype, kleur en grootte (8–72 px) van de getallen |
| **Percentage** | Lettertype, kleur en grootte (8–72 px) van het percentage |

Klik op **Standaard herstellen** om de weergave van het gekozen type doel terug te zetten.

### Aangepaste CSS

Klik op **Aangepaste CSS** om de editor uit te klappen. Elk type doel heeft een eigen CSS. Gebruik deze voor indeling en structuur. Kleuren, lettertypen en groottes stel je in bij de weergave-instellingen hierboven.

- **Standaard herstellen**: zet de standaard-CSS terug
- **Assets beheren**: opent het assetbeheer voor afbeeldingen die je in je CSS gebruikt

Als je CSS een eigenschap overschrijft met `!important`, wordt de bijbehorende weergave-instelling vergrendeld, omdat de CSS toch voorrang zou krijgen.

:::info Beperkingen van de proefversie
- **Aangepaste CSS** is alleen beschikbaar in de volledige versie
- De OBS-overlay toont een watermerk

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison) voor details.
:::
