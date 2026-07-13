---
sidebar_position: 1
---

# YouTube API-Einstellungen

Dieses Tutorial erklärt, wie Sie den **API Key** und die **Kanal-ID** für die YouTube Data API abrufen, die für die Funktion `Stream-Highlight-Markierung` verwendet werden.

## YouTube Data API

### Schritt 1: Google Cloud Console öffnen

1. Rufen Sie die [Google Cloud Console](https://console.cloud.google.com) auf
2. Melden Sie sich mit Ihrem Google-Konto an

### Schritt 2: YouTube Data API v3 aktivieren

1. Suchen Sie in der oberen Suchleiste nach `YouTube Data API v3`

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. Klicken Sie auf das Suchergebnis
3. Klicken Sie auf **Enable**

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### Schritt 3: API-Schlüssel erstellen

1. Klicken Sie links auf **Credentials**

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. Wählen Sie **Create credentials** → **API Key**

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### Schritt 4: API-Schlüssel konfigurieren

1. **Name** beliebig ausfüllen (z. B. `StreamToolkit`)
2. Unter **Select API restrictions** `YouTube Data API v3` ankreuzen und auf **OK** klicken

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. **Authenticate API calls through a service account** nicht ankreuzen
4. Bei **Application restrictions** **None** auswählen

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. Auf **Create** klicken

### Schritt 5: In die App eintragen

1. Fügen Sie den erhaltenen API Key in das Feld **YouTube API** in der App ein

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## Kanal-ID

### Schritt 1: YouTube-Einstellungen öffnen

1. Rufen Sie [YouTube](https://www.youtube.com) auf
2. Klicken Sie oben rechts auf Ihr Profilbild
3. Wählen Sie **Einstellungen**

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### Schritt 2: Kanal-ID abrufen

1. Wählen Sie im linken Menü **Erweiterte Einstellungen**

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. Kopieren Sie die **Kanal-ID** und fügen Sie sie wieder in der App ein

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## Häufig gestellte Fragen (FAQ)

**Q: Gibt es Nutzungslimits für den API-Schlüssel?**
Ja. Die YouTube Data API v3 hat ein kostenloses tägliches Kontingent von 10.000 Einheiten. Die normale Streaming-Nutzung wird dies nicht überschreiten.

**Q: Fehler „Ungültiger API Key“ wird angezeigt?**
Stellen Sie sicher, dass die YouTube Data API v3 aktiviert ist und Sie den Schlüssel des richtigen Projekts verwenden.

**Q: Kann der Schlüssel öffentlich gemacht werden?**
Nicht empfohlen. Wenn Ihr Schlüssel durchsickert und missbraucht wird, ist Ihr tägliches Kontingent schnell aufgebraucht.
