---
sidebar_position: 12
---

# Hodiny

Zobrazte ve streamu aktuální čas, volitelně s datem a dnem v týdnu.

## Krok 1: Přidejte zdroj do OBS

Zkopírujte **URL zdroje pro OBS** v horní části stránky:

```
http://127.0.0.1:7272/clock
```

Přidejte ji do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source). Hodiny nepřehrávají žádný zvuk, takže nemusíte zaškrtávat „Ovládat zvuk přes OBS“.

:::tip
Zapněte také přepínač vedle **Hodiny** v levém postranním panelu (**Zapnout zobrazení v OBS**). Dokud je vypnutý, hodiny jsou v OBS skryté.
:::

## Náhled

**Náhled** nahoře ukazuje skutečný overlay v OBS a aktualizuje se při změnách nastavení. Barevným polem vedle něj změníte pozadí náhledu.

Pod náhledem jsou tři karty: **Vzhled**, **Formát hodin** a **Nastavení zobrazení**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Vzhled

| Nastavení | Popis |
|---------|-------------|
| **Písmo** | Písmo pro veškerý text hodin |
| **Rozvržení** | Uspořádání času, data a dne v týdnu: **Stack**, **Horizontal**, **One-Top-Two-Bottom** nebo **Two-Top-One-Bottom**. **Řádkování** je k dispozici ve všech rozvrženích kromě **Horizontal** a **Mezera** ve všech rozvrženích kromě **Stack** (obojí −200 až 200 px) |
| **Pořadí** | Přetažením bloků **Čas**, **Datum** a **Den v týdnu** změníte jejich pořadí |
| **Text** | Nastavte zvlášť **Čas**, **Datum** a **Den v týdnu**: **Velikost písma**, barvu (**Plná barva**, nebo **Přechod** se dvěma barvami a **Úhel**) a barvu **Okraj**, **Průhlednost** a **Tloušťka** (0–7 px) |
| **Stín** | Barva stínu, **Průhlednost**, **Rozostření** a posun **X** / **Y**, společné pro veškerý text |

Tlačítko **Obnovit výchozí** je v horní části karty.

### Vlastní CSS

Kliknutím na **Vlastní CSS** rozbalíte editor. Výchozí CSS obsahuje selektory pro jednotlivé části hodin (čas, datum, den v týdnu a jejich kontejnery) s komentáři. Používejte ho pro rozvržení a strukturu. Barvy, písma a velikosti se nastavují ve výše uvedeném nastavení vzhledu.

- **Obnovit výchozí**: obnoví výchozí CSS
- **Správa materiálů**: otevře správce materiálů pro obrázky používané ve vašem CSS

Pokud vaše CSS přepíše některou vlastnost pomocí `!important`, odpovídající ovládací prvek vzhledu se uzamkne, protože CSS by stejně mělo přednost.

## Formát hodin

- **Formát času**: **24 hodin**, nebo jedna ze dvou 12hodinových možností: **12 hodin (AM/PM)** zobrazuje AM/PM, zatímco **12 hodin (dop./odp.)** zobrazuje čínské označení 上午 / 下午
- **Časové pásmo**: UTC−12 až UTC+14. Ve výchozím stavu odpovídá časovému pásmu vašeho počítače

## Nastavení zobrazení

- **Zobrazit sekundy**
- **Zobrazit datum**: po zapnutí vyberte formát data z rozbalovacího seznamu. Formáty označené **Bez roku** rok vynechávají
  - **Doplnit nuly u data**: zobrazí jednociferné měsíce a dny s úvodní nulou (například 2026/05/20)
  - **Formát roku**: zobrazí se u formátů, které začínají rokem. **Úplný (2026)** nebo **Zkrácený (26)**

  Tyto dvě možnosti platí pro číselné formáty (s `/` nebo `-`). Slovně vypsané formáty (například „20. května 2026“) se místo toho řídí jazykem rozhraní aplikace
- **Zobrazit den v týdnu**: po zapnutí vyberte, jak se má den v týdnu zapsat (například **středa**, **Wednesday**, **WED** nebo **Wed**)

:::info Omezení zkušební verze
**Vlastní CSS** je k dispozici pouze v plné verzi. Podrobnosti viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
