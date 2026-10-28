---
sidebar_position: 14
---

# Draairad

Maak je eigen prijsraderen en laat ze draaien op de stream. Je kunt per optie het gewicht instellen, de kleuren van het rad kiezen en bepalen of een getrokken optie daarna wordt verwijderd.

De pagina heeft drie tabbladen: **Instellingen**, **Rad maken** en **Geschiedenis**. Maak eerst een rad en laat het daarna draaien vanuit **Instellingen**.

## Stap 1: Maak een rad

1. Open **Draairad** in de linkerzijbalk en ga naar het tabblad **Rad maken**
2. Klik onder **Mijn raderen** op **Toevoegen**. Er verschijnt een nieuw rad met de naam "Rad 1" (daarna "Rad 2" enzovoort)
3. Klik op een radkaart om die te bewerken. Klik op de **✕** op een kaart om dat rad te verwijderen

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Radtitel

Vul een naam voor het rad in. Deze wordt gebruikt in de radlijst, de keuzelijsten en de geschiedenis.

### Radinhoud

1. Klik op **Inhoud bewerken**
2. Vul de opties in, **één per regel**
3. Klik op **Bevestigen**

### Gewicht

Zodra het rad opties heeft, krijgt elke optie een veld **Gewicht** (minimaal 1, standaard 1). De grootte van het vak en de kans om getrokken te worden schalen allebei mee met het gewicht. Een optie met gewicht 2 heeft bijvoorbeeld twee keer zoveel kans om getrokken te worden als een optie met gewicht 1.

### Themakleur van rad

- **Minimalistisch**: het ingebouwde wit-grijze kleurenschema
- **Aangepast**: maak je eigen kleurenschema. Vul een **Naam** in, kies **Kleuren (3–5 kleuren)** met **＋** om een kleur toe te voegen en **✕** om er een te verwijderen, en klik daarna op **Toevoegen**

Om een aangepast thema te wijzigen, klik je op de knop **✎**. Om het te verwijderen, klik je op **✕**. Aangepaste thema's worden ook aangeboden als kleurenschema's voor de rad-animatie in [Weggeefacties](./lottery).

### Optie verwijderen na trekking

Als dit aan staat, wordt een getrokken optie vóór de volgende draai van het rad gehaald. Klik op **Resetten** om alle opties terug te zetten.

## Stap 2: Kies een weergavemodus en voeg de OBS-bron toe

Ga naar het tabblad **Instellingen** en kies een **Weergavemodus**:

| Modus | Beschrijving | OBS-bron-URL |
|------|-------------|----------------|
| **Eén rad** | OBS toont alleen het gekozen rad. Wissel van rad met de keuzelijst **Actief rad** | `http://127.0.0.1:7272/turntable` |
| **Meerdere raderen** | OBS kan meerdere raderen tegelijk tonen. Elk rad heeft een eigen URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

Kies in de modus **Meerdere raderen** raderen bij **Aan radweergave toevoegen**. Elk toegevoegd rad krijgt een eigen kaart met de bijbehorende **OBS-bron-URL**. Klik op **Kopiëren** om die te kopiëren. Klik op **✕** op een kaart om dat rad uit de weergave te verwijderen.

Voeg de gekopieerde URL in OBS toe als browserbron. Zie [Bronnen toevoegen in OBS](../getting-started/obs-source). Het Draairad speelt geen geluid af, dus je hoeft "Audio bedienen via OBS" niet aan te zetten.

:::tip
Zet ook de schakelaar naast **Draairad** in de linkerzijbalk aan (**OBS-weergave inschakelen**). Zolang deze uit staat, blijft de overlay verborgen.
:::

## Stap 3: Draaien

Op elke radkaart op het tabblad **Instellingen**:

- **Starten**: laat het rad draaien. Als de animatie klaar is, toont de overlay het resultaat. De knop kan niet worden aangeklikt zolang het rad geen opties heeft of nog draait
- **Resetten**: zet verwijderde opties terug, reset het rad en wist de huidige **Winnaarslijst**

De **Winnaarslijst** van de kaart verzamelt alle resultaten sinds de laatste **Resetten**.

Je kunt **Starten** en **Resetten** ook gebruiken vanuit het venster [Snelle tools](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Geschiedenis

Het tabblad **Geschiedenis** bewaart per ronde één record, vanaf de eerste draai tot de volgende **Resetten**. Het toont de tijd, de radtitel en de winnaars. Alleen de geschiedenis van de laatste 30 dagen wordt bewaard. Om een record te verwijderen, klik je op 🗑 en daarna op **Verwijderen bevestigen**.

:::info Beperkingen van de proefversie
- Je kunt maar **1** rad maken
- De OBS-overlay toont een watermerk

Zie [Vergelijking tussen proefversie en volledige versie](../getting-started/trial-comparison) voor details.
:::
