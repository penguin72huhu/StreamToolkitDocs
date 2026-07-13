---
sidebar_position: 1
---

# YouTube API-instellingen

In deze handleiding wordt uitgelegd hoe u de **API Key** en **Kanaal-ID** voor de YouTube Data API kunt verkrijgen, die worden gebruikt voor de functie `Stream-hoogtepuntmarkering`.

## YouTube Data API

### Stap 1: Open Google Cloud Console

1. Ga naar [Google Cloud Console](https://console.cloud.google.com)
2. Log in met je Google-account

### Stap 2: Schakel YouTube Data API v3 in

1. Zoek naar `YouTube Data API v3` in de bovenste zoekbalk

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. Klik op het zoekresultaat
3. Klik op **Enable**

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### Stap 3: API-sleutel maken

1. Klik links op **Credentials**

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. Selecteer **Create credentials** → **API Key**

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### Stap 4: API-sleutel configureren

1. **Name** naar wens invullen (bijv.: `StreamToolkit`)
2. Vink onder **Select API restrictions** `YouTube Data API v3` aan en klik op **OK**

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. **Authenticate API calls through a service account** niet aanvinken
4. Selecteer **None** bij **Application restrictions**

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. Klik op **Create**

### Stap 5: Invullen in de App

1. Plak de verkregen API Key in het **YouTube API**-veld in de App

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## Kanaal-ID

### Stap 1: Open YouTube-instellingen

1. Ga naar [YouTube](https://www.youtube.com)
2. Klik op je profielfoto in de rechterbovenhoek
3. Selecteer **Instellingen**

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### Stap 2: Kanaal-ID ophalen

1. Selecteer **Geavanceerde instellingen** in het linkermenu

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. Kopieer de **Kanaal-ID** en plak deze terug in de App

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## Veelgestelde vragen

**Q: Zijn er gebruikslimieten voor de API-sleutel?**
Ja. De YouTube Data API v3 heeft un gratis dagelijks quotum van 10.000 eenheden. Normaal streaminggebruik zal dit niet overschrijden.

**Q: Krijgt u de melding "API Key ongeldig"?**
Zorg ervoor dat de YouTube Data API v3 is ingeschakeld en dat u de sleutel van het juiste project gebruikt.

**Q: Mag de sleutel openbaar worden gemaakt?**
Niet aanbevolen. Als uw sleutel lekt en wordt misbruikt, is uw dagelijkse quotum snel opgebruikt.
