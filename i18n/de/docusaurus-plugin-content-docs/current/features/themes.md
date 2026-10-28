---
sidebar_position: 20
---

# Themes

Teile und lade Overlay-Designs über den Steam Workshop herunter. Ein Theme kann das Aussehen folgender Funktionen enthalten:

- [Chat](./chat)
- [Spendenleiste](./donate)
- [Spendenbenachrichtigungen](./donate-alert)
- [Benachrichtigungen für neue Follower](./fan-alert)
- [Zuschauer-Geburtstage](./birthday-alert)
- [Spendenübersicht](./sponsors)
- [Live-Umfragen](./vote)
- [Uhr](./clock)
- [Twitch-Zielleiste](./goal): **Follow-Ziel**, **Abo-Ziel**, **Bits-Ziel**

Öffne die Seite über **🎨 Themes** unten im linken Menü. Die Seite hat zwei Tabs: **Meine Themes** und **Heruntergeladene Themes**. Steam muss laufen.

## Ein Theme auf einer Funktionsseite finden und anwenden

Öffne bei jeder oben aufgeführten Funktion den Abschnitt **Eigenes CSS** und klicke auf **Workshop-Themes durchsuchen**:

1. **Themes entdecken** listet Workshop-Themes für diese Funktion auf. Gib einen Begriff in **Theme-Namen suchen** ein und klicke auf **Suchen**, oder blättere mit **Vorherige Seite** / **Nächste Seite**
2. Klicke auf eine Miniatur, um das Vorschaubild anzusehen
3. Klicke auf **Anwenden**. Das Theme wird abonniert, heruntergeladen und auf diese Funktion angewendet
4. **Abonniert** listet die Themes auf, die du für diese Funktion bereits abonniert hast

Solange ein Theme angewendet ist, zeigt die Seite **Aktives Theme: (Name)** und eine Schaltfläche **Zurücksetzen**, und das eigene CSS ist schreibgeschützt. Klicke auf **Zurücksetzen**, um zu deinen eigenen Einstellungen zurückzukehren.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Heruntergeladene Themes

Listet alle Themes auf, die du auf Steam abonniert hast. Abonnierte Themes werden nicht automatisch angewendet – verwende die Schaltflächen auf der Karte. OBS wird sofort aktualisiert.

Jede Karte zeigt die Vorschau, den Namen, **Aktiv**, wenn eine Funktion es verwendet, und unter **Enthält:** die Funktionen, die das Theme abdeckt (✓ kennzeichnet Funktionen, die es aktuell verwenden).

| Schaltfläche | Funktion |
|------|------|
| **Alle anwenden** | Wendet das Theme auf alle enthaltenen Funktionen an. Verwendet eine Funktion ein anderes Theme, wirst du gebeten, das Ersetzen zu bestätigen |
| **Auswählen…** | Wähle, auf welche Funktionen es angewendet werden soll |
| **Alle zurücksetzen** | Setzt alle Funktionen, die dieses Theme verwenden, auf deine eigenen Einstellungen von vor dem Anwenden zurück |
| **Zurücksetzen…** | Wähle, welche Funktionen zurückgesetzt werden sollen |
| **Abo kündigen** | Kündigt das Abo. Ist das Theme in Verwendung, werden diese Funktionen zuerst zurückgesetzt |

Nach dem Anwenden zeigt eine Meldung unten 30 Sekunden lang, was geändert wurde, mit einer Schaltfläche **Zurücksetzen** zum Rückgängigmachen.

:::note
- Das Zurücksetzen kehrt zu deinen eigenen Einstellungen zurück, nicht zu einem ersetzten Theme
- Änderungen am Aussehen, die du vornimmst, während ein Theme angewendet ist, bleiben nach dem Zurücksetzen nicht erhalten
:::

- **Lädt herunter…**: Lass Steam laufen; nach Abschluss des Downloads kannst du das Theme anwenden
- **Entferntes Theme (#id)**: Das Theme ist nicht mehr in deinen Steam-Abonnements, wird aber noch von einigen Funktionen verwendet. Bilder werden möglicherweise nicht angezeigt, daher wird ein Zurücksetzen empfohlen
- Läuft Steam nicht, starte Steam und klicke auf **Aktualisieren**

{/* TODO: 截圖 — 下載的主題 */}

## Meine Themes: Ein Theme hochladen

1. Richte das Aussehen der Funktionen, die du teilen möchtest, auf deren eigenen Seiten ein
2. Klicke in **Meine Themes** auf **Neues Theme hochladen**
3. Fülle aus:
   - **Theme-Name** (erforderlich)
   - **Theme-Beschreibung**
   - **Enthaltene Funktionen** (mindestens eine)
   - **Vorschaubild** (erforderlich, bis zu 1MB): Klicke auf **Vorschaubild auswählen**
4. Aktiviere das Kontrollkästchen, mit dem du bestätigst, dass du das Recht hast, alle Bilder, Schriftarten und Sounds im Theme zu verbreiten. Assets, die nur für den persönlichen oder nicht-kommerziellen Gebrauch lizenziert sind, dürfen nicht hochgeladen werden
5. Klicke auf **Theme hochladen**

Siehst du „Bitte stimme zuerst im Browser den Bedingungen des Steam Workshops zu, damit dein Theme öffentlich wird“, stimme den Bedingungen zu, damit das Theme öffentlich werden kann.

### Deine hochgeladenen Themes verwalten

Jedes hochgeladene Theme hat:

- **Herunterladen und anwenden**: wendet das veröffentlichte Theme auf deine Funktionen an. Dabei werden deine aktuellen Aussehen-Einstellungen überschrieben
- **Bearbeiten**: lädt deine aktuellen Aussehen-Einstellungen erneut in dasselbe Theme hoch. Hast du das Theme nicht heruntergeladen, wird das vorhandene Vorschaubild nicht übernommen und du musst ein neues auswählen
- **In Steam verwalten**: öffnet das Theme in Steam

:::info Einschränkungen der Testversion
Themes (Steam Workshop) sind nur in der Vollversion verfügbar. In der Testversion kann **🎨 Themes** nicht geöffnet werden und Themes können nicht angewendet werden.

Siehe [Vergleich zwischen Testversion und Vollversion](../getting-started/trial-comparison).
:::
