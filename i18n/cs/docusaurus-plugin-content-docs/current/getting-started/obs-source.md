---
sidebar_position: 2
---

# Jak přidat zdroje v OBS

Většina funkcí Stream Toolkit vyžaduje přidání „Prohlížeče“ (Browser Source) v OBS, aby se mohly zobrazit v živém vysílání.

## Krok 1: Zkopírujte URL adresu funkce

Ve Stream Toolkit se na stránce každé funkce zobrazuje odpovídající lokální URL adresa ve formátu:

```
http://127.0.0.1:7272/feature-name
```

Zkopírujte URL adresu funkce, kterou chcete přidat.

## Krok 2: Přidejte prohlížeč v OBS

1. V sekci **Zdroje** v OBS klikněte na tlačítko **+** dole
2. Vyberte **Prohlížeč**
3. Vyberte **Vytvořit nový**, zadejte název zdroje (např. „Ukazatel cíle darů“) a klikněte na **OK**
4. Do pole **URL** vložte URL adresu zkopírovaną v kroku 1
5. Podle potřeby upravte **Šířku** a **Výšku**
6. Klikněte na **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Níže uvedené funkce vyžadují zaškrtnutí políčka „Ovládat zvuk přes OBS“

Zahrnuje zvukový výstup; v nastavení prohlížeče musíte zaškrtnout políčko **Ovládat zvuk přes OBS**, aby se zvuk správně přehrával v živém vysílání:

- **Media Board** — Video, Zvuk
- **Upozornění na dary**
- **Hudební přání**

Jak zaškrtnout:
1. V seznamu zdrojů v OBS klikněte pravým tlačítkem na daný prohlížeč
2. Vyberte **Vlastnosti**
3. Najděte políčko **Ovládat zvuk přes OBS** a zaškrtněte ho
4. Klikněte na **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Pokud po zaškrtnutí stále není slyšet žádný zvuk, zkontrolujte, zda není daný zdroj ztlumen ve směšovači zvuku OBS.
:::
