---
sidebar_position: 1
---

# Inställningar för YouTube API

Den här guiden förklarar hur du skaffar **API Key** och **kanal-ID** för YouTube Data API, som används för funktionen `Ström-höjdpunktsmarkör`.

## YouTube Data API

### Steg 1: Öppna Google Cloud Console

1. Gå till [Google Cloud Console](https://console.cloud.google.com)
2. Logga in med ditt Google-konto

### Steg 2: Aktivera YouTube Data API v3

1. Sök efter `YouTube Data API v3` i det övre sökfältet

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. Klicka på sökresultatet
3. Klicka på **Enable**

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### Steg 3: Skapa API-nyckel

1. Klicka på **Credentials** till vänster

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. Välj **Create credentials** → **API Key**

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### Steg 4: Konfigurera API-nyckel

1. Fyll i valfritt **Name** (t.ex. `StreamToolkit`)
2. Under **Select API restrictions**, kryssa i `YouTube Data API v3` och klicka på **OK**

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. Lämna **Authenticate API calls through a service account** okryssad
4. Välj **None** under **Application restrictions**

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. Klicka på **Create**

### Steg 5: Fyll i Appen

1. Klistra in den erhållna API Key i fältet **YouTube API** i Appen

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## Kanal-ID

### Steg 1: Öppna YouTube-inställningar

1. Gå till [YouTube](https://www.youtube.com)
2. Klicka på din profilbild i övre högra hörnet
3. Välj **Inställningar**

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### Steg 2: Skaffa Kanal-ID

1. Välj **Avancerade inställningar** i vänstermenyn

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. Kopiera **Kanal-ID** och klistra in det i Appen

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## Vanliga frågor

**Q: Finns det användningsgränser för API-nyckeln?**
Ja. YouTube Data API v3 har en kostnadsfri daglig kvot på 10 000 enheter. Normal streaminganvändning kommer inte att överskrida detta.

**Q: Visas felet "Ogiltig API Key"?**
Se till vad YouTube Data API v3 är aktiverat och att du använder nyckeln från rätt projekt.

**Q: Kan nyckeln göras offentlig?**
Rekommenderas inte. Om din nyckel läcker ut och missbrukas kommer din dagliga kvot att tömmas snabbt.
