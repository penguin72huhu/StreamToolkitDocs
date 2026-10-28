---
sidebar_position: 8.1
---

# Upozornění na nové sledující

Zobrazí ve streamu upozornění, když vás někdo začne sledovat na Twitchi nebo se přihlásí k odběru vašeho kanálu YouTube.

## URL zdroje pro OBS

```
http://127.0.0.1:7272/fan-alert
```

Zkopírujte URL z horní části stránky nastavení **Upozornění na nové sledující** a přidejte ji do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source).

:::warning
Upozornění přehrávají zvuk. Ve vlastnostech prohlížeče zaškrtněte **Ovládat zvuk přes OBS**, jinak zvuk ve streamu nebude slyšet.
:::

Přepínačem vedle **Upozornění na nové sledující** v levém postranním panelu upozornění zapnete nebo vypnete. Dokud je vypnutý, noví sledující se nezobrazují ani nezaznamenávají a nefungují ani testovací tlačítka.

Když přibude několik sledujících krátce po sobě, upozornění se zařadí do fronty a zobrazují se postupně. Tento overlay má vlastní frontu, takže nikdy nečeká za [Upozorněními na dary](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Karta Nastavení

### Napojené platformy

Zaškrtněte platformy, které mají spouštět upozornění: **Twitch** a **YouTube** (ve výchozím stavu jsou zaškrtnuté obě). Zelená tečka znamená, že je platforma připojena; jinak řádek zobrazuje **Neautorizováno**.

- **Twitch**: každé nové sledování okamžitě spustí upozornění. Nejprve připojte Twitch: [Nastavení Twitch](../platforms/twitch).
- **YouTube**: noví odběratelé. Nejprve se přihlaste přes Google: [Nastavení YouTube](../platforms/youtube-settings).

Jak se zjišťují odběratelé na YouTube:

- YouTube nemá živou událost „nový odběratel“, proto se aplikace každých 1,5 minuty ptá YouTube na vaše nejnovější odběratele.
- Kontroluje to pouze tehdy, když vysíláte živě a váš živý chat YouTube je připojen k danému vysílání. Nekontroluje v čekárně ani po skončení streamu.
- Lidé, kteří se přihlásili k odběru před začátkem streamu (déle než asi 5 minut před zahájením kontroly), se neoznamují.
- Jak uvádí nápověda na stránce: **YouTube upozorní jen na diváky s veřejnými odběry, se zpožděním minut až hodin.**

### Nastavení

| Pole | Popis |
|-------|-------------|
| **Doba zobrazení** | Jak dlouho zůstává každé upozornění na obrazovce, v sekundách (1–60). Výchozí: 5. |
| **Stejný divák nejvýše jednou za 24 hodin** | Ve výchozím stavu vypnuto. Když je zapnuto, opětovné sledování stejného diváka do 24 hodin (například když přestane sledovat a začne znovu) se nezobrazí ani nezaznamená. |

### Testování upozornění

Kliknutím na **Testovací upozornění (Twitch)** nebo **Testovací upozornění (YouTube)** odešlete do OBS ukázkové upozornění. Testovací upozornění se do historie nepřidávají.

Pokud je Upozornění na nové sledující vypnuté, test se nepřehraje a stránka zobrazí **Nejprve zapněte upozornění na nové sledující v rychlých přepínačích**.

## Karta Vzhled

### Náhled

Náhled používá stejnou stránku jako zdroj v OBS. Výběrem barvy vedle **Náhled** změníte pozadí náhledu a kliknutím na **▶ Přehrát animaci** přehrajete animaci upozornění znovu.

### Jednotný vzhled / Zvlášť pro každou platformu

- **Jednotný vzhled**: Twitch a YouTube používají stejný styl upozornění.
- **Zvlášť pro každou platformu**: každá platforma má vlastní styl. Tlačítky níže vyberte **Twitch** nebo **YouTube** a upravte jeho nastavení. Při prvním přepnutí platformy, které jste ještě neupravili, převezmou aktuální jednotný vzhled, každá s vlastní barvou odpočtu.

**Obnovit výchozí** obnoví výchozí styl pro právě upravovaný vzhled.

### Obrázek

- **Vybrat obrázek**: vyberte obrázek ze správce materiálů. Bez obrázku se zobrazí emoji srdce. **Vymazat** obrázek odebere.
- **Velikost obrázku**: 1–400 px.
- **Pozice obrázku**: **Vlevo**, **Vpravo**, **Nahoře** nebo **Dole**.

### Zvuk

Vyberte vestavěný zvuk: **Žádný**, **Zvonkohra** (výchozí), **Mince**, **Zvonek**, **Prásk**, **Fanfára**. Kliknutím na **▶** si ho poslechnete. Kliknutím na **Vybrat zvuk** použijete vlastní zvukový soubor ze správce materiálů.

### Vlastní text

Napište řádek zobrazený v upozornění. Použijte `{name}` pro jméno sledujícího a `{platform}` pro název platformy. Pokud pole necháte prázdné, použije se výchozí text: `Vítej, {name}! Díky za sledování!`

### Text a barva

- **Text**: nastavte písmo, velikost a barvu pro **Vlastní text** a **Jméno sledujícího**.
- **Barva**: **Pozadí**, **Stín** a **Odpočet**.

### Vlastní CSS

Rozbalením **Vlastní CSS** upravíte CSS právě upravovaného vzhledu (jednotného nebo vybrané platformy). **Obnovit výchozí** obnoví CSS šablony a **Správa materiálů** otevře správce materiálů. Zde lze také použít motivy ze Steam Workshop. Dokud je motiv použit, CSS je jen pro čtení. Viz [Motivy](./themes).

## Karta Historie

Zobrazuje nedávné nové sledující z obou platforem, od nejnovějších: platformu, jméno a čas. Historie se zobrazuje pouze v aplikaci, nikdy v overlayi.

- Uchovává se až 100 sledujících a záznamy starší než 30 dní se automaticky odstraňují.
- Kliknutím na **Vymazat** seznam vyprázdníte.

:::info Zkušební verze
Vlastní CSS je k dispozici pouze v plné verzi a upozornění v OBS zobrazuje vodoznak. Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::

## Často kladené otázky

**Q: Ve streamu není slyšet zvuk?**
Zkontrolujte, zda je ve vlastnostech prohlížeče zaškrtnuto **Ovládat zvuk přes OBS** a zda zdroj není ztlumený ve směšovači zvuku OBS. Zkontrolujte také, zda **Zvuk** není nastaven na **Žádný**.

**Q: Odběratel na YouTube nedostal upozornění.**
Hlásí se pouze veřejné odběry a YouTube je může nahlásit se zpožděním minut až hodin. Aplikace navíc kontroluje pouze tehdy, když vysíláte živě s připojeným živým chatem YouTube.

**Q: Zdroj do OBS jsem přidal(a) pozdě. Přehraje dřívější upozornění?**
Ne. Nově otevřený zdroj zobrazuje pouze upozornění, která dorazí po jeho připojení. Dřívější sledující najdete na kartě **Historie**.
