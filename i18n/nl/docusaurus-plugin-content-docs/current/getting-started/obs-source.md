---
sidebar_position: 2
---

# Bronnen toevoegen in OBS

De meeste functies van Stream Toolkit vereisen het toevoegen van een "Browserbron" in OBS om op de live-stream te worden weergegeven.

## Stap 1: Kopieer de functie-URL

In Stream Toolkit wengt elke functiepagina de bijbehorende lokale URL, in de indeling:

```
http://127.0.0.1:7272/feature-name
```

Kopieer de functie-URL die u wilt toevoegen.

## Stap 2: Voeg een browserbron toe in OBS

1. Klik in het gedeelte **Bronnen** in OBS op de knop **+** onderaan
2. Selecteer **Browser**
3. Selecteer **Nieuw maken**, voer een naam in voor de bron (bijv. "Donatiebalk") en klik op **OK**
4. Plak de in stap 1 gekopieerde URL in het veld **URL**
5. Pas de **Breedte** und **Hoogte** naar wens aan
6. Klik op **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Hieronder functies waarvoor "Audio bedienen via OBS" moet worden aangevinkt

Inclusief audio-uitvoer; u moet **Audio bedienen via OBS** aanvinken in de instellingen van de browserbron zodat het geluid correct in de live-stream te horen is:

- **Media Board** — Video, Geluid
- **Donatiemeldingen**
- **Muziekverzoeken**

Hoe aan te vinken:
1. Klik in de bronnenlijst van OBS met de rechtermuisknop auf de browserbron
2. Selecteer **Eigenschappen**
3. Zoek **Audio bedienen via OBS** en vink dit aan
4. Klik op **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Als er na het aanvinken nog steeds geen geluid is, controleer dan of de bron niet is gedempt in de OBS-audiomixer.
:::
