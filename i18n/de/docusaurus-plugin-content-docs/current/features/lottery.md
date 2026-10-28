---
sidebar_position: 16
---

# Verlosungen

Zuschauer nehmen teil, indem sie ein Stichwort in den Twitch- oder YouTube-Chat schreiben. Nach Ende der Teilnahmephase werden Gewinner zufällig gezogen, und die Ziehungsanimation läuft im OBS-Overlay.

## OBS-Quellen-URL

```
http://127.0.0.1:7272/lottery
```

Klicke oben auf der Seite neben **OBS-Quellen-URL** auf **Kopieren** und füge die URL dann in OBS als Browserquelle hinzu. Siehe [Quellen in OBS hinzufügen](../getting-started/obs-source). Verlosungen geben keinen Ton aus, du musst „Audio über OBS steuern“ also nicht aktivieren.

:::tip
Schalte außerdem den Schalter neben **Verlosungen** in der linken Seitenleiste ein (**OBS-Anzeige einschalten**). Solange er aus ist, bleibt das Overlay ausgeblendet.
:::

Die Seite hat zwei Tabs: **Einstellungen** und **Verlauf**.

## Einstellungen

### Abstimmungsplattform

Klicke auf **Twitch** oder **YouTube**, um festzulegen, aus welchem Chat teilgenommen werden kann. Du kannst beide wählen. Eine nicht verbundene Plattform zeigt **(Nicht verbunden)** bei Twitch bzw. **Keine Chat-URL verbunden** bei YouTube. Zum Verbinden siehe [Twitch Einstellungen](../platforms/twitch) und [YouTube Einstellungen](../platforms/youtube-settings).

### Gewinnspiel-Stichwort

Eine Chatnachricht, die dieses Stichwort enthält, meldet den Zuschauer an. Jeder Zuschauer kann pro Verlosung nur einmal teilnehmen. **Sammeln starten** kann nicht angeklickt werden, solange das Stichwort leer ist.

### Gewinnspiel-Dauer

Wie lange die Teilnahme offen bleibt, in Sekunden. Standard ist 300, der Bereich 10–3600.

### Max. Teilnehmer

Die Teilnahme endet vorzeitig, sobald so viele Personen teilgenommen haben. Gib `0` für unbegrenzt ein.

### Option nach Ziehung entfernen

Wenn aktiviert, wird ein Gewinner vor der nächsten Ziehung aus den Teilnehmern entfernt, sodass er in dieser Verlosung nicht erneut gezogen werden kann.

### Hinweistext

Der Hinweis, der während der Teilnahmephase im Overlay angezeigt wird und den Zuschauern das Stichwort und die Teilnehmerzahl mitteilt. Lege Schriftart, Farbe und Größe (px) fest.

### Gewinnspiel-Animation

- **Schnelles ID-Durchlaufen** (Standard): Die Namen der Teilnehmer schweben während der Teilnahmephase über den Bildschirm und wechseln bei der Ziehung schnell durch
  - **Schrift für Sammelanzeige**: Schriftart, Schriftgröße und die Farben der Namens-Chips (bis zu 5)
  - **Schriftart der Verlosungsanimation**: Schriftart und Schriftgröße der durchlaufenden Namen bei der Ziehung
  - **Standard wiederherstellen**: setzt diese Einstellungen zurück
- **Glücksrad-Animation**: Die Teilnehmer werden auf ein Rad gesetzt, das sich dreht, um den Gewinner zu bestimmen. Wähle ein Farbschema: **Minimal** oder ein eigenes Theme, das du im [Glücksrad](./turntable) erstellt hast

Während die Teilnahme offen ist, kannst du Plattformen, Stichwort, Dauer, Max. Teilnehmer, Option nach Ziehung entfernen und den Animationstyp nicht ändern.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Eine Verlosung durchführen

1. Klicke auf **Sammeln starten**. Das Panel zeigt **Wird gesammelt…**, die verbleibende Zeit und die Teilnehmerzahl
2. Während die Teilnahme offen ist, kannst du einen Namen in **Teilnehmernamen manuell eingeben** eintippen und auf **Hinzufügen** klicken (oder Enter drücken). Steht ein Name bereits auf der Liste, wird „Diese ID steht bereits auf der Liste“ angezeigt
3. Um die Teilnahme vor Ablauf der Zeit zu beenden, klicke auf **Sammeln beenden**. Die Teilnahme endet auch, wenn die Zeit abläuft oder **Max. Teilnehmer** erreicht ist. Das Panel zeigt dann **Zeit abgelaufen!**
4. Klicke auf **Ziehung starten**. Das Overlay spielt die Animation ab, und danach erscheint der Gewinner unter **Gewinner**
5. Um einen weiteren Gewinner zu ziehen, klicke auf **Erneut ziehen**

Klicke jederzeit auf **Gewinnspiel abbrechen**, um alle Teilnehmer und Gewinner zu löschen; das Overlay kehrt dann in den Wartezustand zurück.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Verlauf

Der Tab **Verlauf** speichert pro Verlosung einen Eintrag mit Uhrzeit, Stichwort und Teilnehmerzahl. Klappe einen Eintrag auf, um die Gewinner und die vollständige Teilnehmerliste zu sehen. Nur der Verlosungsverlauf der letzten 30 Tage wird gespeichert. Um einen Eintrag zu löschen, klicke auf 🗑 und dann auf **Löschen bestätigen**.

:::info Einschränkungen der Testversion
Das OBS-Overlay zeigt ein Wasserzeichen. Details findest du unter [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
