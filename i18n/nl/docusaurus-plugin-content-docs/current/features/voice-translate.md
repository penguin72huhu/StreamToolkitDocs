---
sidebar_position: 4
---

# Spraakvertaling

Houd een sneltoets ingedrukt en spreek. Stream Toolkit zet je spraak om in tekst, vertaalt die en toont beide regels als ondertitels in OBS.

Spraakherkenning draait op je eigen computer met een Whisper-model. De tekst wordt daarna vertaald met MyMemory.

De pagina heeft twee tabbladen: **Instellingen** en **Weergave**.

## Stap 1: Voeg de OBS-bron toe

De OBS-bron-URL staat bovenaan de pagina:

```
http://127.0.0.1:7272/voice-translate
```

Klik op **Kopiëren** en voeg de URL in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source). Spraakvertaling speelt geen geluid af, dus je hoeft "Audio bedienen via OBS" niet aan te zetten.

De ondertitels verschijnen onderaan de bron: de oorspronkelijke tekst bovenaan en de vertaling eronder. Ze vervagen na de **Weergaveduur ondertitels**.

:::tip
Zet de schakelaar naast **Spraakvertaling** in de linkerzijbalk aan (**OBS-weergave inschakelen**). De sneltoets werkt alleen zolang deze aan staat.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Stap 2: Stel de sneltoets in

Onder **Sneltoets (indrukken om op te nemen, loslaten om te herkennen)**:

1. Klik op **Klik om sneltoets in te stellen**
2. Druk op de gewenste toetscombinatie en laat die los. Druk op **Esc** om te annuleren
3. Klik op **Wissen** om de sneltoets te verwijderen

Wordt de combinatie al door een andere functie gebruikt, dan toont de knop **Sneltoetsconflict** en wordt de sneltoets niet opgeslagen.

De sneltoets werkt ook als Stream Toolkit niet het actieve venster is. **Houd** de sneltoets ingedrukt terwijl je spreekt en **laat** hem daarna **los** om te herkennen en te vertalen. Een opname stopt automatisch na 15 seconden.

Je kunt ook de knop **REC** onder de sneltoets met de muis ingedrukt houden. Die werkt hetzelfde: indrukken om op te nemen, loslaten om te vertalen. Het venster [Snelle tools](./quick-tools) heeft dezelfde knop **REC**.

## Stap 3: Herkenningsinstellingen

| Veld | Beschrijving |
|-------|-------------|
| **Modelstatus** | Toont **Laden xx%**, **Gereed** of **Laden van model mislukt**. Je kunt opnemen zodra er **Gereed** staat |
| **Whisper-model** | **Tiny (snelst, ca. 40MB)**, **Base (aanbevolen, ca. 75MB)** (standaard) of **Small (nauwkeurigst, ca. 245MB)**. Het model wordt gedownload de eerste keer dat je het gebruikt. Als je van model wisselt, wordt het opnieuw geladen |
| **Spraaktaal** | De taal die je spreekt. Standaard is Traditioneel Chinees |
| **Microfoon** | De microfoon waarmee wordt opgenomen. **Systeemstandaard** gebruikt het standaardinvoerapparaat van Windows |

## Stap 4: Vertaalinstellingen

| Veld | Beschrijving |
|-------|-------------|
| **Weergaveduur ondertitels** | Hoe lang de ondertitels in beeld blijven, 1–30 seconden. Standaard is 5 |
| **Doeltaal** | De taal waarin wordt vertaald. Standaard is Engels |
| **Whisper-vertaling gebruiken wanneer de doeltaal English is** | Als de doeltaal Engels is, vertaalt Whisper in plaats van MyMemory. (Gratis zonder quotum, maar met meer vertraging.) Bij andere doeltalen heeft dit geen effect |
| **Vertaalservice** | MyMemory |

### E-mail (optioneel)

MyMemory is gratis. Het dagelijkse quotum hangt af van of je een e-mailadres invult:

- Zonder e-mail: 5.000 tekens per dag
- Met e-mail: 50.000 tekens per dag (gratis, geen registratie bij MyMemory nodig)

Vul je e-mailadres in en klik op **Opslaan**. Dit e-mailadres wordt **Gedeeld met chatvertaling**.

De balk eronder toont **Vandaag gebruikt (schatting, dagelijks gereset om 08:00 UTC)**. Als het quotum op is, staat er **Volledig gebruikt**.

## Stap 5: Weergave

Op het tabblad **Weergave** kun je wijzigen hoe de ondertitels eruitzien. Wijzigingen worden direct opgeslagen.

- **Voorbeeld**: toont voorbeeldondertitels. Het kleurvak ernaast wijzigt alleen de achtergrond van het voorbeeld
- **Uitlijning**: **Links** (standaard), **Gecentreerd** of **Rechts**
- **Lettertype**: één rij voor **Oorspronkelijke taal** (de oorspronkelijke tekst) en één voor **Doeltaal** (de vertaling). Elke rij heeft een lettertype, een kleur en een grootte (8–120 px). Standaard is 14 px voor het origineel en 22 px voor de vertaling
- **Schaduw**: de kleur van de tekstschaduw
- **Standaard herstellen**: zet de standaardweergave terug

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Beperkingen van de proefversie
De **Doeltaal** staat vast op Engels. De pagina toont "De demo ondersteunt alleen vertaling naar het Engels".

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison) voor details.
:::

## Veelgestelde vragen

**Q: Ik houd de sneltoets ingedrukt, maar er gebeurt niets.**
Controleer of de schakelaar naast **Spraakvertaling** in de linkerzijbalk aan staat en of **Modelstatus** **Gereed** toont.

**Q: Opnemen werkt, maar er verschijnen geen ondertitels in OBS.**
Als MyMemory niet kan vertalen (bijvoorbeeld omdat het dagelijkse quotum op is), worden er geen ondertitels getoond. Controleer de balk **Vandaag gebruikt**. Als je een e-mailadres invult, wordt het quotum hoger. Is je doeltaal Engels, dan kun je ook **Whisper-vertaling gebruiken wanneer de doeltaal English is** aanzetten; daarvoor geldt geen quotum.
