---
sidebar_position: 2
---

# Hur man lägger till källor i OBS

De flesta funktioner i Stream Toolkit kräver att du lägger till en "Webbläsarkälla" i OBS för som ska visas i livesändningen.

## Steg 1: Kopiera funktionens URL

I Stream Toolkit visar varje funktionssida sin motsvarande lokala URL, i formatet:

```
http://127.0.0.1:7272/feature-name
```

Kopiera funktionens URL som du vill lägga till.

## Steg 2: Lägg till en webbläsarkälla i OBS

1. Klicka på **+**-knappen längst ner i sektionen **Källor** i OBS
2. Välj **Webbläsare**
3. Välj **Skapa ny**, ange ett namn på källan (t.ex. "Donationsmålfält") och klicka på **OK**
4. Klistra in URL-en du kopierade i steg 1 i fältet **URL**
5. Justera **Bredd** och **Höjd** efter behov
6. Klicka på **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Följande funktioner kräver att du markerar "Styr ljud via OBS"

Innehåller ljudutgång; du måste markera **Styr ljud via OBS** i webbläsarkällans inställningar för att ljudet ska höras korrekt i livesändningen:

- **Media Board** — Video, Ljud
- **Donationsaviseringar**
- **Låtönskningar**

Hur du markerar:
1. Högerklicka på webbläsarkällan i OBS källista
2. Välj **Egenskaper**
3. Hitta **Styr ljud via OBS** och markera det
4. Klicka på **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Om det fortfarande inte hörs något ljud efter att du har markerat det, kontrollera att källan inte är ljudlös i OBS-ljudmixern.
:::
