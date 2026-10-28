---
sidebar_position: 12
---

# Klocka

Visa aktuell tid i sändningen, eventuellt med datum och veckodag.

## Steg 1: Lägg till OBS-källan

Kopiera **OBS-källadress** högst upp på sidan:

```
http://127.0.0.1:7272/clock
```

Lägg till den i OBS som en webbläsarkälla. Se [Hur man lägger till källor i OBS](../getting-started/obs-source). Klockan spelar inget ljud, så du behöver inte slå på ”Styr ljud via OBS”.

:::tip
Slå också på reglaget bredvid **Klocka** i vänstermenyn (**Slå på OBS-visning**). När det är av döljs klockan i OBS.
:::

## Förhandsvisning

**Förhandsvisa** högst upp visar den faktiska OBS-overlayen och uppdateras när du ändrar inställningar. Använd färgrutan bredvid för att ändra förhandsvisningens bakgrund.

Under förhandsvisningen finns tre flikar: **Utseende**, **Klockformat** och **Visningsinställningar**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Utseende

| Inställning | Beskrivning |
|---------|-------------|
| **Teckensnitt** | Teckensnitt för all klocktext |
| **Layout** | Hur tid, datum och veckodag är ordnade: **Stack**, **Horizontal**, **One-Top-Two-Bottom** eller **Two-Top-One-Bottom**. **Radavstånd** finns i alla layouter utom **Horizontal**, och **Mellanrum** i alla layouter utom **Stack** (båda −200 till 200 px) |
| **Ordning** | Dra blocken **Tid**, **Datum** och **Veckodag** för att ändra deras ordning |
| **Text** | Ställ in **Tid**, **Datum** och **Veckodag** separat: **Textstorlek**, färg (**Enfärgad**, eller **Gradient** med två färger och en **Vinkel**), samt färg, **Opacitet** och **Tjocklek** (0–7 px) för **Ram** |
| **Skugga** | Skuggans färg, **Opacitet**, **Oskärpa** och **X**-/**Y**-förskjutning, gemensamt för all text |

Knappen **Återställ standard** finns högst upp på fliken.

### Anpassad CSS

Klicka på **Anpassad CSS** för att expandera redigeraren. Standard-CSS:en listar selektorerna för varje del av klockan (tid, datum, veckodag och deras behållare) med kommentarer. Använd den för layout och struktur. Färger, teckensnitt och storlekar ställs in i utseendeinställningarna ovan.

- **Återställ standard**: återställer standard-CSS:en
- **Hantera resurser**: öppnar resurshanteraren för bilder som används i din CSS

Om din CSS åsidosätter en egenskap med `!important` låses motsvarande utseendekontroll, eftersom CSS:en ändå skulle vinna.

## Klockformat

- **Tidsformat**: **24-timmars**, eller ett av två 12-timmarsalternativ: **12-timmars (fm/em)** visar de kinesiska markörerna 上午 / 下午, medan **12-timmars (AM/PM)** visar AM/PM
- **Tidszon**: UTC−12 till UTC+14. Som standard följer tidszonen din dators

## Visningsinställningar

- **Visa sekunder**
- **Visa datum**: när det är på väljer du ett datumformat i listrutan. Format markerade **Utan år** utelämnar året
  - **Nolla i datum**: visar ensiffriga månader och dagar med en inledande nolla (till exempel 2026/05/20)
  - **Årsformat**: visas för format som börjar med året. **Fullständigt (2026)** eller **Förkortat (26)**

  Dessa två alternativ gäller de numeriska formaten (med `/` eller `-`). De utskrivna formaten (till exempel ”20 maj 2026”) följer i stället appens gränssnittsspråk
- **Visa veckodag**: när det är på väljer du hur veckodagen skrivs (till exempel **onsdag**, **ONS** eller **ons**)

:::info Begränsningar i testversionen
**Anpassad CSS** finns bara i fullversionen. Se [Jämförelse mellan testversion och fullständig version](../getting-started/trial-comparison) för mer information.
:::
