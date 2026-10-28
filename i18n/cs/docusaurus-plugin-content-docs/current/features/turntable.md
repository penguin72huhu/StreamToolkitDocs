---
sidebar_position: 14
---

# Kolo štěstí

Vytvořte si vlastní kola s cenami a roztočte je ve streamu. U každé možnosti můžete nastavit váhu, barvy kola a to, zda se vylosovaná možnost poté odstraní.

Stránka má tři karty: **Nastavení**, **Vytvořit kolo** a **Historie**. Nejprve vytvořte kolo, potom ho roztočte na kartě **Nastavení**.

## Krok 1: Vytvořte kolo

1. V levém postranním panelu otevřete **Kolo štěstí** a přepněte na kartu **Vytvořit kolo**
2. V sekci **Moje kola** klikněte na **Přidat**. Objeví se nové kolo s názvem „Kolo 1“ (dále „Kolo 2“ atd.)
3. Kliknutím na kartu kola ho upravíte. Kliknutím na **✕** na kartě dané kolo smažete

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Název kola

Zadejte název kola. Používá se v seznamu kol, v rozbalovacích seznamech a v historii.

### Obsah kola

1. Klikněte na **Upravit obsah**
2. Zadejte možnosti, **jednu na řádek**
3. Klikněte na **Potvrdit**

### Váha

Jakmile má kolo možnosti, každá z nich dostane pole **Váha** (minimum 1, výchozí 1). Velikost výseče i šance na vylosování se řídí váhou. Například možnost s váhou 2 má dvakrát větší šanci na vylosování než možnost s váhou 1.

### Barva motivu kola

- **Minimalistický**: vestavěné bílo-šedé barevné schéma
- **Vlastní**: vytvořte si vlastní barevné schéma. Zadejte **Název**, vyberte **Barvy (3–5)** – tlačítkem **＋** barvu přidáte a **✕** ji odeberete – a klikněte na **Přidat**

Vlastní motiv změníte tlačítkem **✎**. Smažete ho tlačítkem **✕**. Vlastní motivy jsou k dispozici také jako barevná schémata pro animaci kola v [Losování](./lottery).

### Po vylosování odstranit možnost

Když je tato volba zapnutá, vylosovaná možnost se před dalším roztočením z kola odebere. Kliknutím na **Resetovat** vrátíte všechny možnosti zpět.

## Krok 2: Zvolte režim zobrazení a přidejte zdroj do OBS

Přepněte na kartu **Nastavení** a zvolte **Režim zobrazení**:

| Režim | Popis | URL zdroje pro OBS |
|------|-------------|----------------|
| **Jedno kolo** | OBS zobrazuje pouze vybrané kolo. Kola přepínáte rozbalovacím seznamem **Aktuálně použité kolo** | `http://127.0.0.1:7272/turntable` |
| **Více kol** | OBS může zobrazovat několik kol najednou. Každé kolo má vlastní URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

V režimu **Více kol** vyberte kola v **Přidat do zobrazení kola**. Každé přidané kolo dostane vlastní kartu se svou **URL zdroje pro OBS**. Kliknutím na **Kopírovat** ji zkopírujete. Kliknutím na **✕** na kartě kolo ze zobrazení odeberete.

Zkopírovanou URL přidejte do OBS jako prohlížeč. Viz [Jak přidat zdroje v OBS](../getting-started/obs-source). Kolo štěstí nepřehrává žádný zvuk, takže nemusíte zaškrtávat „Ovládat zvuk přes OBS“.

:::tip
Zapněte také přepínač vedle **Kolo štěstí** v levém postranním panelu (**Zapnout zobrazení v OBS**). Dokud je vypnutý, overlay zůstává skrytý.
:::

## Krok 3: Roztočte kolo

Na každé kartě kola na kartě **Nastavení**:

- **Spustit**: roztočí kolo. Po skončení animace zobrazí overlay výsledek. Na tlačítko nelze kliknout, dokud kolo nemá žádné možnosti nebo se ještě točí
- **Resetovat**: vrátí odebrané možnosti, resetuje kolo a vymaže aktuální **Seznam výherců**

**Seznam výherců** na kartě shromažďuje všechny výsledky od posledního **Resetovat**.

**Spustit** a **Resetovat** můžete použít také v okně [Rychlé nástroje](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Historie

Karta **Historie** uchovává jeden záznam pro každé kolo hry, od prvního roztočení až po další **Resetovat**. Zobrazuje čas, název kola a výherce. Uchovává se pouze historie kol za posledních 30 dní. Záznam smažete kliknutím na 🗑 a poté na **Potvrdit smazání**.

:::info Omezení zkušební verze
- Můžete vytvořit pouze **1** kolo
- Overlay v OBS zobrazuje vodoznak

Podrobnosti viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
