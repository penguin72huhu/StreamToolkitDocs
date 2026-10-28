---
sidebar_position: 8.1
---

# Meldingen nieuwe volgers

Toont een melding op de stream wanneer iemand je volgt op Twitch of zich abonneert op je YouTube-kanaal.

## OBS-bron-URL

```
http://127.0.0.1:7272/fan-alert
```

Kopieer de URL bovenaan de pagina **Instellingen voor Meldingen nieuwe volgers** en voeg deze in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source).

:::warning
Meldingen spelen een geluid af. Vink **Audio bedienen via OBS** aan in de eigenschappen van de browserbron, anders is het geluid niet te horen op de stream.
:::

Gebruik de schakelaar naast **Meldingen nieuwe volgers** in de linkerzijbalk om meldingen aan of uit te zetten. Zolang deze uit staat, worden nieuwe volgers niet getoond en niet vastgelegd, en werken ook de testknoppen niet.

Komen er meerdere volgers kort na elkaar binnen, dan worden de meldingen in een wachtrij gezet en na elkaar getoond. Deze overlay heeft een eigen wachtrij en wacht dus nooit op [Donatiemeldingen](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Tabblad Instellingen

### Platform koppelen

Vink de platforms aan die een melding moeten activeren: **Twitch** en **YouTube** (beide standaard aangevinkt). Een groen bolletje betekent dat het platform verbonden is; anders toont de rij **Niet geautoriseerd**.

- **Twitch**: elke nieuwe volger activeert direct een melding. Koppel eerst Twitch: [Twitch-instellingen](../platforms/twitch).
- **YouTube**: nieuwe abonnees. Meld je eerst aan met Google: [YouTube-instellingen](../platforms/youtube-settings).

Hoe YouTube-abonnees worden gevonden:

- YouTube heeft geen live-gebeurtenis voor "nieuwe abonnee", dus de app vraagt YouTube elke 1,5 minuut om je meest recente abonnees.
- Er wordt alleen gecontroleerd terwijl je live bent en je YouTube-livechat verbonden is met die live-uitzending. In de wachtruimte of nadat de stream is afgelopen wordt niet gecontroleerd.
- Mensen die zich vóór het begin van de stream hebben geabonneerd (meer dan ongeveer 5 minuten voordat het controleren begon), worden niet gemeld.
- Zoals de hint op de pagina zegt: **YouTube meldt alleen kijkers met openbare abonnementen, met minuten tot uren vertraging.**

### Instellingen

| Veld | Beschrijving |
|-------|-------------|
| **Weergaveduur** | Hoe lang elke melding in beeld blijft, in seconden (1–60). Standaard: 5. |
| **Dezelfde kijker hoogstens één keer per 24 uur** | Standaard uit. Als dit aan staat, wordt dezelfde kijker die binnen 24 uur opnieuw volgt (bijvoorbeeld door te ontvolgen en opnieuw te volgen) niet getoond en niet vastgelegd. |

### Meldingen testen

Klik op **Testmelding (Twitch)** of **Testmelding (YouTube)** om een voorbeeldmelding naar OBS te sturen. Testmeldingen worden niet aan de geschiedenis toegevoegd.

Staat Meldingen nieuwe volgers uit, dan wordt de test niet afgespeeld en toont de pagina **Zet eerst Meldingen nieuwe volgers aan bij de snelknoppen**.

## Tabblad Weergave

### Voorbeeld

Het voorbeeld gebruikt dezelfde pagina als de OBS-bron. Gebruik de kleurkiezer naast **Voorbeeld** om de achtergrond van het voorbeeld te wijzigen en klik op **▶ Animatie opnieuw** om de meldingsanimatie opnieuw af te spelen.

### Uniforme stijl / Per platform apart

- **Uniforme stijl**: Twitch en YouTube gebruiken dezelfde meldingsstijl.
- **Per platform apart**: elk platform heeft een eigen stijl. Kies met de knoppen eronder **Twitch** of **YouTube** en bewerk de instellingen. Bij de eerste keer overschakelen nemen platforms die je nog niet hebt aangepast de huidige uniforme stijl over, elk met een eigen kleur voor de aftelbalk.

**Standaard herstellen** zet de stijl die je bewerkt terug naar de standaardstijl.

### Afbeelding

- **Afbeelding kiezen**: kies een afbeelding uit het assetbeheer. Zonder afbeelding wordt een hartje-emoji getoond. **Wissen** verwijdert de afbeelding.
- **Afbeeldingsgrootte**: 1–400 px.
- **Afbeeldingspositie**: **Links**, **Rechts**, **Boven** of **Onder**.

### Geluid

Kies een ingebouwd geluid: **Geen**, **Belletje** (standaard), **Munt**, **Bel**, **Plop**, **Fanfare**. Klik op **▶** om te luisteren. Klik op **Geluid kiezen** om je eigen geluidsbestand uit het assetbeheer te gebruiken.

### Aangepaste tekst

Schrijf de regel die op de melding wordt getoond. Gebruik `{name}` voor de naam van de volger en `{platform}` voor de naam van het platform. Laat het leeg om de standaardtekst te gebruiken: `Welcome {name}, thanks for the follow!`

### Tekst en kleur

- **Tekst**: stel lettertype, grootte en kleur in voor **Aangepaste tekst** en **Naam van volger**.
- **Kleur**: **Achtergrond**, **Schaduw** en **Aftelbalk**.

### Aangepaste CSS

Klap **Aangepaste CSS** uit om de CSS te bewerken van de stijl die je bewerkt (uniform of het gekozen platform). **Standaard herstellen** zet de sjabloon-CSS terug en **Assets beheren** opent het assetbeheer. Hier kun je ook Steam Workshop-thema's toepassen. Zolang een thema is toegepast, is de CSS alleen-lezen. Zie [Thema's](./themes).

## Tabblad Geschiedenis

Toont recente nieuwe volgers van beide platforms, nieuwste eerst: platform, naam en tijd. De geschiedenis wordt alleen in de app getoond, nooit op de overlay.

- Er worden maximaal 100 volgers bewaard, en items ouder dan 30 dagen worden automatisch verwijderd.
- Klik op **Wissen** om de lijst leeg te maken.

:::info Proefversie
Aangepaste CSS is alleen beschikbaar in de volledige versie, en de melding toont een watermerk in OBS. Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison).
:::

## Veelgestelde vragen

**Q: Geen geluid op de stream?**
Controleer of **Audio bedienen via OBS** is aangevinkt in de eigenschappen van de browserbron en of de bron niet is gedempt in de OBS-mixer. Controleer ook of **Geluid** niet op **Geen** staat.

**Q: Een YouTube-abonnee kreeg geen melding.**
Alleen openbare abonnementen worden doorgegeven, en het kan bij YouTube minuten tot uren duren voordat ze worden doorgegeven. De app controleert ook alleen terwijl je live bent en de YouTube-livechat verbonden is.

**Q: Ik heb de OBS-bron later toegevoegd. Worden eerdere meldingen opnieuw afgespeeld?**
Nee. Een nieuw geopende bron toont alleen meldingen die binnenkomen nadat hij verbinding heeft gemaakt. Eerdere volgers staan nog op het tabblad **Geschiedenis**.
