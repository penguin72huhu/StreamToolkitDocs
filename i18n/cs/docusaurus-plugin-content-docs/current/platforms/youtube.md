---
sidebar_position: 1
---

# Nastavení YouTube API

Tento návod vysvětluje, jak získat **API Key** a **ID kanálu** pro YouTube Data API, které se používají pro funkci `Značka nejlepších okamžiků streamu`.

## YouTube Data API

### Krok 1: Otevřete Google Cloud Console

1. Přejděte do [Google Cloud Console](https://console.cloud.google.com)
2. Přihlaste se pomocí svého účtu Google

### Krok 2: Povolte YouTube Data API v3

1. V horním vyhledávacím panelu vyhledejte `YouTube Data API v3`

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. Klikněte na výsledek vyhledávání
3. Klikněte na **Enable**

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### Krok 3: Vytvořte klíč API

1. Klikněte na **Credentials** vlevo

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. Vyberte **Create credentials** → **API Key**

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### Krok 4: Nakonfigurujte klíč API

1. **Name** vyplňte libovolně (například: `StreamToolkit`)
2. V **Select API restrictions** zaškrtněte `YouTube Data API v3` a klikněte na **OK**

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. **Authenticate API calls through a service account** nezaškrtávejte
4. V **Application restrictions** vyberte **None**

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. Klikněte na **Create**

### Krok 5: Vyplňte do App

1. Vložte získaný API Key do pole **YouTube API** v App

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## ID kanálu

### Krok 1: Otevřete nastavení YouTube

1. Přejděte na [YouTube](https://www.youtube.com)
2. Klikněte na svůj profilový obrázek v pravém horním rohu
3. Vyberte **Nastavení**

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### Krok 2: Získejte ID kanálu

1. V levém menu vyberte **Pokročilá nastavení**

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. Zkopírujte **ID kanálu** a vložte jej zpět do App

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## Často kladené otázky

**Q: Má klíč API limity použití?**
Ano. YouTube Data API v3 má bezplatný denní limit 10 000 jednotek. Běžné používání při streamování jej nepřekročí.

**Q: Zobrazuje se chyba „Neplatný API Key“?**
Ujistěte se, že je služba YouTube Data API v3 povolená a že používáte klíč ze správného projektu.

**Q: Může být klíč veřejný?**
Nedoporučuje se. Pokud váš klíč unikne a bude zneužit, váš denní limit se rychle vyčerpá.
