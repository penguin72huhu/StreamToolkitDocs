---
sidebar_position: 20
---

# Motivy

Sdílejte a stahujte vzhledy overlayí prostřednictvím Steam Workshop. Motiv může obsahovat vzhled těchto funkcí:

- [Chat](./chat)
- [Ukazatel cíle darů](./donate)
- [Upozornění na dary](./donate-alert)
- [Upozornění na nové sledující](./fan-alert)
- [Narozeniny diváků](./birthday-alert)
- [Přehled darů](./sponsors)
- [Živá hlasování](./vote)
- [Hodiny](./clock)
- [Ukazatel cíle Twitch](./goal): **Cíl sledujících**, **Cíl předplatného**, **Cíl Bits**

Otevřete je přes **🎨 Motivy** v dolní části levého menu. Stránka má dvě karty: **Moje motivy** a **Stažené motivy**. Steam musí být spuštěný.

## Vyhledání a použití motivu na stránce funkce

U každé výše uvedené funkce otevřete sekci **Vlastní CSS** a klikněte na **Procházet motivy ve Workshopu**:

1. **Procházet motivy** zobrazuje motivy ze Workshopu pro tuto funkci. Zadejte text do pole **Hledat název motivu** a klikněte na **Hledat**, nebo procházejte stránky tlačítky **Předchozí** / **Další**
2. Kliknutím na miniaturu zobrazíte náhledový obrázek
3. Klikněte na **Použít**. Motiv se přihlásí k odběru, stáhne a použije pro tuto funkci
4. **Odebírané** zobrazuje motivy, které pro tuto funkci již odebíráte

Dokud je motiv použit, stránka zobrazuje **Používaný motiv: (název)** a tlačítko **Obnovit** a vlastní CSS je jen pro čtení. Kliknutím na **Obnovit** se vrátíte ke svému vlastnímu nastavení.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Stažené motivy

Zobrazuje všechny motivy, které odebíráte na Steamu. Odebírané motivy se nepoužijí automaticky — použijte tlačítka na kartě. OBS se aktualizuje okamžitě.

Každá karta zobrazuje náhled, název, **Používá se**, pokud ho některá funkce používá, a **Obsahuje**: funkce, které motiv pokrývá (✓ označuje funkce, které ho právě používají).

| Tlačítko | Co dělá |
|------|------|
| **Použít vše** | Použije motiv pro všechny funkce, které obsahuje. Pokud funkce používá jiný motiv, budete požádáni o potvrzení nahrazení |
| **Vybrat** | Vyberte, pro které funkce se má motiv použít |
| **Obnovit vše** | Vrátí všechny funkce používající tento motiv k vašemu vlastnímu nastavení z doby před jeho použitím |
| **Obnovit** | Vyberte, které funkce se mají obnovit |
| **Zrušit odběr** | Zruší odběr. Pokud se motiv používá, dané funkce se nejprve obnoví |

Po použití se dole na 30 sekund zobrazí zpráva o tom, co se změnilo, s tlačítkem **Obnovit** pro vrácení změn.

:::note
- Obnovení vrací vaše vlastní nastavení, ne motiv, který byl nahrazen
- Změny vzhledu provedené během použití motivu se po obnovení nezachovají
:::

- **Stahování…**: nechte Steam spuštěný; motiv můžete použít, jakmile se stahování dokončí
- **Odebraný motiv (#id)**: motiv již není mezi vašimi odběry na Steamu, ale některé funkce ho stále používají. Obrázky se nemusí zobrazovat, proto doporučujeme obnovení
- Pokud Steam neběží, spusťte ho a klikněte na **Obnovit**

{/* TODO: 截圖 — 下載的主題 */}

## Moje motivy: Nahrání motivu

1. Na stránkách jednotlivých funkcí nastavte vzhled funkcí, které chcete sdílet
2. Na kartě **Moje motivy** klikněte na **Nahrát nový motiv**
3. Vyplňte:
   - **Název motivu** (povinné)
   - **Popis motivu**
   - **Obsažené funkce** (alespoň jedna)
   - **Náhledový obrázek** (povinné, až 1MB): klikněte na **Vybrat náhled**
4. Zaškrtněte políčko, kterým potvrzujete, že máte právo šířit všechny obrázky, písma a zvuky v motivu. Materiály licencované pouze pro osobní nebo nekomerční použití nesmí být nahrány
5. Klikněte na **Nahrát motiv**

Pokud se zobrazí „Nahrání proběhlo úspěšně! Nejprve v prohlížeči odsouhlaste podmínky Steam Workshop, aby byl váš motiv zveřejněn“, odsouhlaste podmínky, aby mohl být motiv zveřejněn.

### Správa nahraných motivů

Každý nahraný motiv má:

- **Stáhnout a použít**: použije zveřejněný motiv pro vaše funkce. Tím se přepíše vaše aktuální nastavení vzhledu
- **Upravit**: znovu nahraje vaše aktuální nastavení vzhledu do stejného motivu. Pokud jste motiv nestáhli, stávající náhledový obrázek se nepřenese a musíte vybrat nový
- **Spravovat ve Steam**: otevře motiv ve Steamu

:::info Omezení zkušební verze
Motivy (Steam Workshop) jsou k dispozici pouze v plné verzi. Ve zkušební verzi nelze otevřít **🎨 Motivy** ani používat motivy.

Viz [Porovnání zkušební a plné verze](../getting-started/trial-comparison).
:::
