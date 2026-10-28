---
sidebar_position: 2
---

# Contrôle des scènes OBS

**Contrôle des scènes OBS** vous permet de changer de scène et d'afficher/masquer des sources dans votre logiciel de streaming à l'aide de raccourcis globaux ou depuis les [Outils rapides](./quick-tools). Compatible avec **OBS Studio**, **Streamlabs** et **Meld Studio**.

Cette fonctionnalité n'a pas d'overlay : il n'y a rien à ajouter dans OBS comme source de navigateur.

:::info
Les raccourcis ne fonctionnent que lorsque l'interrupteur **Contrôle des scènes OBS** de la barre latérale est activé. Ils fonctionnent même lorsque la fenêtre de Stream Toolkit est réduite dans la zone de notification.
:::

La page de réglages comporte deux onglets : **Connexion** et **Raccourcis**.

## Onglet Connexion

### Étape 1 : Choisir votre logiciel

Sous **Logiciel**, choisissez **OBS Studio**, **Streamlabs** ou **Meld Studio**. Ce choix ne peut être modifié qu'une fois déconnecté.

Chaque logiciel conserve ses propres raccourcis et sa propre liste de scènes : changer de logiciel affiche donc les réglages propres à ce logiciel.

### Étape 2 : Préparer le logiciel

#### OBS Studio

1. Dans OBS, ouvrez **Outils → Paramètres du serveur WebSocket**
2. Cochez **Activer le serveur WebSocket**
3. Cliquez sur **Afficher les informations de connexion** pour voir le mot de passe
4. Dans Stream Toolkit, renseignez **Hôte** (par défaut `localhost`), **Port** (par défaut `4455`) et **Mot de passe**

#### Streamlabs / Meld Studio

Aucune configuration n'est nécessaire : il suffit que le programme soit lancé.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Étape 3 : Se connecter

Cliquez sur **Se connecter**. **Statut** passe à **Connecté** (pour OBS et Meld, le numéro de version est aussi affiché). Cliquez sur **Se déconnecter** pour couper la connexion.

**Se connecter au démarrage** (activé par défaut) : se connecte automatiquement au démarrage de Stream Toolkit et lorsque vous activez l'interrupteur de la fonctionnalité. Désactiver l'interrupteur de la fonctionnalité déconnecte.

### Scènes

La section **Scènes** liste vos scènes et le nombre de sources de chacune ; la scène actuelle est mise en évidence. Cliquez sur **Actualiser** pour récupérer la liste la plus récente après avoir modifié des scènes dans votre logiciel.

Une fois déconnecté, la dernière liste récupérée reste affichée.

## Onglet Raccourcis

Pour définir un raccourci, cliquez sur **Cliquez pour définir un raccourci**, puis appuyez sur la combinaison de touches. Appuyez sur `Esc` pour annuler. Si la combinaison est déjà utilisée par une autre fonctionnalité, **Conflit de raccourci** s'affiche et elle n'est pas enregistrée. Cliquez sur **✕** à côté d'un raccourci pour l'effacer.

### Changer de scène

1. Cliquez sur **Ajouter**
2. Définissez un raccourci
3. Choisissez la scène vers laquelle basculer

Cliquez sur **✕** en fin de ligne pour la supprimer.

### Basculer les sources

Un raccourci peut contrôler plusieurs sources d'une même scène à la fois.

1. Cliquez sur **Ajouter**
2. Définissez un raccourci
3. Saisissez un **Nom** (facultatif — utilisé comme libellé du bouton dans les Outils rapides ; le nom de la scène est utilisé s'il est vide)
4. Choisissez la scène à laquelle appartiennent les sources
5. Cliquez sur **Ajouter une source**, choisissez une source et choisissez **Afficher**, **Masquer** ou **Basculer** (par défaut **Basculer**)
6. Répétez l'étape 5 pour d'autres sources

Changer la scène d'une entrée efface sa liste de sources.

:::tip
Une scène ou une source qui n'existe plus dans votre logiciel est signalée en rouge. Choisissez-la de nouveau dans la liste déroulante.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Utilisation depuis les Outils rapides

Lorsque la fonctionnalité est activée et qu'au moins une entrée de raccourci existe, les [Outils rapides](./quick-tools) affichent une carte **Contrôle des scènes OBS** avec un bouton pour chaque entrée. Cliquer sur un bouton revient à appuyer sur son raccourci.

## Messages d'erreur

Lorsqu'un raccourci ou un bouton est utilisé, ces messages peuvent apparaître :

| Message | Signification |
|---------|---------|
| **Non connecté à OBS** | Non connecté — allez dans l'onglet **Connexion** et cliquez sur **Se connecter** |
| **Scène « … » introuvable** | La scène a été renommée ou supprimée dans votre logiciel |
| **Sources introuvables : …** | Ces sources n'existent plus dans la scène |

## Limites de la version d'essai

:::info
La version d'essai autorise **1** entrée de raccourci au total (Changer de scène et Basculer les sources confondus). Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::

## Questions fréquentes

**Q : Un message indiquait qu'OBS était injoignable, et la connexion n'a pas été retentée après l'ouverture d'OBS.**
Si la toute première tentative de connexion échoue (par exemple parce qu'OBS n'était pas encore lancé), Stream Toolkit ne réessaie pas en boucle. Ouvrez votre logiciel de streaming, puis cliquez sur **Se connecter**. Une fois une connexion réussie, la reconnexion est automatique si la connexion est coupée.
