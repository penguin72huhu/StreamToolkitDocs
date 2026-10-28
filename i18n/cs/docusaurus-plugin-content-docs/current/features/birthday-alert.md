---
sidebar_position: 8.2
---

# Narozeniny diváků

Přidejte narozeniny svých diváků do seznamu. Když divák ze seznamu napíše do chatu během vašeho streamu v den svých narozenin nebo krátce po nich, zobrazí se ve streamu narozeninové upozornění. Každý divák dostane jedno upozornění na jedny narozeniny.

## URL zdroje pro OBS

```
http://127.0.0.1:7272/birthday-alert
```

Zkopírujte URL z horní části stránky nastavení **Narozeniny diváků** a přidejte ji do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source).

:::warning
Upozornění přehrávají zvuk. Ve vlastnostech prohlížeče zaškrtněte **Ovládat zvuk přes OBS**, jinak zvuk ve streamu nebude slyšet.
:::

Zapněte přepínač vedle **Narozeniny diváků** v levém postranním panelu. Pouze když je zapnutý, aplikace se připojuje k chatu a kontroluje narozeniny. Tlačítka **Testovací upozornění** a **Přehrát znovu** fungují i při vypnutém přepínači.

Stránka má tři karty: **Nastavení**, **Diváci** a **Vzhled**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Jak to funguje

- Divák ze seznamu, který napíše do chatu v období od svých narozenin až po nastavený počet dní po nich, dostane upozornění. Před narozeninami se nic nezobrazí.
- Každý divák dostane jedno upozornění na jedny narozeniny. Narozeniny 12/28, které se oznámí 1/2, se stále počítají jako narozeniny předchozího roku.
- Upozornění se spouštějí pouze tehdy, když platforma, na které divák napsal, právě vysílá. Když nevysíláte nebo aplikace zatím nedokáže zjistit, zda vysíláte, psaní do chatu upozornění nespustí ani nezaznamená; zobrazí se, až divák příště napíše během streamu.
- Historie chatu načtená při připojení chatu YouTube se nepočítá, takže restart aplikace neoznámí lidi, kteří psali, když byla zavřená.
- Narozeniny 2/29 připadají v nepřestupných letech na 2/28.

## Karta Nastavení

### Připojení k chatu

Zobrazí se, když je funkce zapnutá. U každé platformy je vidět, zda je její chat připojen:

- **Twitch**: pokud není nastaven žádný kanál, řádek zobrazuje **Není nastaven kanál Twitch — nejprve propojte Twitch** s tlačítkem **Přejít do nastavení**. Nejprve připojte Twitch: [Nastavení Twitch](../platforms/twitch).
- **YouTube**: pokud chat není připojen, řádek zobrazuje **Připojit automaticky** a **Zadat ručně** (přenese vás k poli URL chatu v Nastavení). Pokud používáte automatické připojení a jste přihlášeni přes Google, zobrazí se **Pokud se po zahájení vysílání nepřipojí, klikněte na stránce Chat na Připojit**. Viz [Nastavení YouTube](../platforms/youtube-settings) a [Chat](./chat).

Jakmile je platforma připojena, zobrazuje také **Živě**, **Offline** nebo **Nelze zjistit, zda se vysílá**. Upozornění se spouštějí pouze při stavu **Živě**.

### Nastavení

| Pole | Popis |
|-------|-------------|
| **Kolik dní po narozeninách se počítá** | 0–30. Výchozí: 7. 0 = pouze samotný den narozenin. |
| **Doba zobrazení** | Jak dlouho zůstává každé upozornění na obrazovce, v sekundách (1–60). Výchozí: 6. |

### Testování upozornění

Kliknutím na **Testovací upozornění** odešlete do OBS ukázkové upozornění s testovacím divákem a dnešním datem. Zobrazí se jen v OBS a nikdy se nezaznamená a funguje i při vypnutém přepínači v levém postranním panelu. Tlačítko se krátce změní na **Odesláno**.

## Karta Diváci

### Přidání diváka

Diváka lze přidat dvěma způsoby:

- **+ Přidat z nedávno píšících**: vyberte někoho, kdo nedávno psal do chatu. Otevře se formulář s jeho jménem jako poznámkou, již propojeným účtem a dnešním datem jako narozeninami.
- **+ Přidat podle jména**: zadejte název účtu sami.

**Nedávno píšící v chatu** zobrazuje diváky, kteří psali do chatu, když byl chat připojen (až 200, uchovávají se 30 dní). Kliknutím na **Obnovit** seznam aktualizujete. Diváci, kteří už jsou v seznamu, mají označení **Přidáno** a nelze je vybrat znovu. U dlouhého seznamu se zobrazí vyhledávací pole.

Vyplňte formulář:

1. **Poznámka / přezdívka**: jméno, pod kterým diváka znáte, např. `Honza`. Volitelné.
2. **Narozeniny**: měsíc a den (bez roku).
3. **Účty**: alespoň jeden účet. Jeden divák může mít více účtů, např. Twitch i YouTube.
   - **＋ Zadat účet**: zvolte **Twitch** nebo **YouTube** a zadejte jméno. U Twitche použijte přihlašovací nebo zobrazované jméno; u YouTube @identifikátor nebo název kanálu.
   - **＋ Z nedávno píšících**: přidá účet, který je už propojený.
   - **✕** účet odebere.
4. Klikněte na **Uložit** (nebo stiskněte Enter). **Zrušit** (nebo Esc) formulář zavře.

### Zadaná jména a propojování

Zadané jméno se propojí s účtem, až divák poprvé napíše do chatu. Při porovnávání se nerozlišují velká a malá písmena a ignoruje se úvodní `@`. Jména se mohou opakovat, proto je bezpečnější vybrat z nedávno píšících.

U YouTube zadejte @identifikátor: pokud na stránce Chat není zapnuto **Zobrazovat jména diváků místo @handle**, název kanálu se nemusí nikdy shodovat.

Každý účet v seznamu zobrazuje:

- **Propojeno: [jméno]**: účet je propojen.
- **Čeká se, až „[jméno]“ napíše**: zadané jméno, které ještě nebylo propojeno.
- **Nově propojeno**: aplikace tento účet propojila automaticky, když divák napsal do chatu. Ověřte, že je to opravdu on, a klikněte na **✓ Souhlasí**, nebo pokud ne, klikněte na **Odpojit**.
- **Tento účet už je u „[jméno]“**: zadané jméno se shodovalo s účtem, který patří jinému divákovi v seznamu. Jeden účet může patřit jen jednomu divákovi, proto zde změňte jméno, nebo jeden ze dvou záznamů smažte.

**Odpojit** otevře pod účtem pole. Po odpojení se místo toho bude hledat jméno v poli (můžete ho změnit) a účet se znovu propojí, až divák příště napíše do chatu.

### Seznam

Nejprve jsou uvedeni diváci, jejichž narozeninové upozornění je na řadě, potom nejbližší nadcházející narozeniny. Pokud je v seznamu více než 5 diváků, zobrazí se vyhledávací pole. U každého diváka se zobrazuje:

- **Čeká na zprávu**: divák má právě narozeninové období; upozornění se zobrazí, jakmile napíše do chatu.
- **🎂 Zobrazeno [datum]**: upozornění na tyto narozeniny už bylo zobrazeno.
- **▶ Přehrát znovu**: znovu zobrazí upozornění tohoto diváka v OBS. Funguje kdykoli a nikdy se nezaznamená.
- **Upravit**: změní poznámku, narozeniny nebo účty. Změna narozenin umožní, aby se upozornění pro nové datum spustilo znovu.
- **Smazat**: klikněte na **Smazat** a poté na **Potvrdit smazání**.

## Karta Vzhled

### Náhled

Náhled používá stejnou stránku jako zdroj v OBS. Výběrem barvy vedle **Náhled** změníte pozadí náhledu a kliknutím na **▶ Přehrát animaci** přehrajete animaci upozornění znovu.

### Jednotný vzhled / Zvlášť pro každou platformu

- **Jednotný vzhled**: Twitch a YouTube používají stejný styl upozornění.
- **Zvlášť pro každou platformu**: každá platforma má vlastní styl. Tlačítky níže vyberte **Twitch** nebo **YouTube** a upravte jeho nastavení. Při prvním přepnutí platformy, které jste ještě neupravili, převezmou aktuální jednotný vzhled, každá s vlastní barvou odpočtu.

**Obnovit výchozí** obnoví výchozí styl pro právě upravovaný vzhled.

### Obrázek

- **Vybrat obrázek**: vyberte obrázek ze správce materiálů. Bez obrázku se zobrazí emoji dortu. **Vymazat** obrázek odebere.
- **Velikost obrázku**: 1–400 px.
- **Pozice obrázku**: **Vlevo**, **Vpravo**, **Nahoře** nebo **Dole**.

### Zvuk

Vyberte vestavěný zvuk: **Žádný**, **Zvonkohra** (výchozí), **Mince**, **Zvonek**, **Prásk**, **Fanfára**. Kliknutím na **▶** si ho poslechnete. Kliknutím na **Vybrat zvuk** použijete vlastní zvukový soubor ze správce materiálů.

### Vlastní text

Napište řádek zobrazený v upozornění. Pokud pole necháte prázdné, použije se výchozí text: `Všechno nejlepší k narozeninám, {name}!` Můžete použít:

| Zástupný symbol | Nahradí se |
|-------------|---------------|
| `{name}` | Jméno diváka v chatu |
| `{label}` | Vaše poznámka / přezdívka (jméno z chatu, pokud je poznámka prázdná) |
| `{birthday}` | Narozeniny, např. `10/20` |
| `{MM}` `{DD}` | Měsíc a den dvoumístně pro vlastní formát, např. `{DD}/{MM}` |
| `{date}` | Narozeniny v jazyce overlaye |
| `{platform}` | Název platformy |

### Text a barva

- **Text**: nastavte písmo, velikost a barvu pro **Vlastní text** a **Jméno diváka**.
- **Barva**: **Pozadí**, **Stín** a **Odpočet**.

### Vlastní CSS

Rozbalením **Vlastní CSS** upravíte CSS právě upravovaného vzhledu (jednotného nebo vybrané platformy). **Obnovit výchozí** obnoví CSS šablony a **Správa materiálů** otevře správce materiálů. Zde lze také použít motivy ze Steam Workshop. Dokud je motiv použit, CSS je jen pro čtení. Viz [Motivy](./themes).

:::info Zkušební verze
- V seznamu mohou být nejvýše 3 diváci. Pokud jich seznam obsahuje více (např. z uložených dat plné verze), další diváci se zobrazí jako uzamčení 🔒: nikdy nespustí upozornění a nelze je upravovat ani přehrát znovu.
- Vlastní CSS je k dispozici pouze v plné verzi.
- Upozornění v OBS zobrazuje vodoznak.

Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::

## Často kladené otázky

**Q: Ve streamu není slyšet zvuk?**
Zkontrolujte, zda je ve vlastnostech prohlížeče zaškrtnuto **Ovládat zvuk přes OBS** a zda zdroj není ztlumený ve směšovači zvuku OBS. Zkontrolujte také, zda **Zvuk** není nastaven na **Žádný**.

**Q: Divák napsal do chatu v den svých narozenin, ale upozornění se nezobrazilo.**
Zkontrolujte, zda je zapnutý přepínač v levém postranním panelu, zda **Připojení k chatu** na kartě **Nastavení** zobrazuje u dané platformy **Živě** a zda účet v seznamu zobrazuje **Propojeno** nebo zda se zadané jméno shoduje s jeho jménem v chatu. Pokud se upozornění zobrazilo, když OBS nebylo otevřené, použijte **▶ Přehrát znovu**.

**Q: Zdroj do OBS jsem přidal(a) pozdě. Přehraje dřívější upozornění?**
Ne. Nově otevřený zdroj zobrazuje pouze upozornění, která dorazí po jeho připojení. Upozornění znovu zobrazíte pomocí **▶ Přehrát znovu** na kartě **Diváci**.
