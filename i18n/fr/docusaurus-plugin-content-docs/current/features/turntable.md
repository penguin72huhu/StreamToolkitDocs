---
sidebar_position: 14
---

# Roue

Créez vos propres roues à lots et faites-les tourner sur le stream. Vous pouvez définir le poids de chaque option, les couleurs de la roue et si une option tirée est retirée ensuite.

La page comporte trois onglets : **Réglages**, **Créer une roue** et **Historique**. Créez d'abord une roue, puis faites-la tourner depuis **Réglages**.

## Étape 1 : Créer une roue

1. Ouvrez **Roue** dans la barre latérale gauche et passez à l'onglet **Créer une roue**
2. Sous **Mes roues**, cliquez sur **Ajouter**. Une nouvelle roue nommée « Roue 1 » (puis « Roue 2 », etc.) apparaît
3. Cliquez sur la carte d'une roue pour la modifier. Cliquez sur le **✕** d'une carte pour supprimer cette roue

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Titre de la roue

Saisissez un nom pour la roue. Il est utilisé dans la liste des roues, les listes déroulantes et l'historique.

### Contenu de la roue

1. Cliquez sur **Modifier le contenu**
2. Saisissez les options, **une par ligne**
3. Cliquez sur **Confirmer**

### Poids

Une fois que la roue a des options, chacune reçoit un champ **Poids** (minimum 1, par défaut 1). La taille de la part d'une option et sa probabilité d'être tirée sont toutes deux proportionnelles à son poids. Par exemple, une option de poids 2 a deux fois plus de chances d'être tirée qu'une option de poids 1.

### Couleur du thème de la roue

- **Minimal** : le jeu de couleurs blanc et gris intégré
- **Personnalisé** : créez votre propre jeu de couleurs. Saisissez un **Nom**, choisissez des **Couleurs (3 à 5)** avec **＋** pour ajouter une couleur et **✕** pour en retirer une, puis cliquez sur **Ajouter**

Pour modifier un thème personnalisé, cliquez sur son bouton **✎**. Pour le supprimer, cliquez sur **✕**. Les thèmes personnalisés sont aussi proposés comme jeux de couleurs pour l'animation de roue de [Tirages au sort](./lottery).

### Supprimer l'option après tirage

Lorsque cette option est activée, une option tirée est retirée de la roue avant le tour suivant. Cliquez sur **Réinitialiser** pour remettre toutes les options.

## Étape 2 : Choisir un mode d'affichage et ajouter la source OBS

Passez à l'onglet **Réglages** et choisissez un **Mode d'affichage** :

| Mode | Description | URL de la source OBS |
|------|-------------|----------------|
| **Roue unique** | OBS n'affiche que la roue sélectionnée. Changez de roue avec la liste déroulante **Roue actuellement utilisée** | `http://127.0.0.1:7272/turntable` |
| **Plusieurs roues** | OBS peut afficher plusieurs roues à la fois. Chaque roue a sa propre URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

En mode **Plusieurs roues**, choisissez des roues dans **Ajouter à l'affichage de la roue**. Chaque roue ajoutée obtient sa propre carte avec son **URL de la source OBS**. Cliquez sur **Copier** pour la copier. Cliquez sur **✕** sur une carte pour retirer cette roue de l'affichage.

Ajoutez l'URL copiée dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source). La Roue ne joue aucun son : inutile d'activer « Contrôler l'audio via OBS ».

:::tip
Activez aussi l'interrupteur à côté de **Roue** dans la barre latérale gauche (**Activer l’affichage OBS**). Tant qu'il est désactivé, l'overlay reste masqué.
:::

## Étape 3 : Faire tourner

Sur chaque carte de roue de l'onglet **Réglages** :

- **Lancer** : lance la rotation. À la fin de l'animation, l'overlay affiche le résultat. Le bouton n'est pas cliquable tant que la roue n'a aucune option ou qu'elle tourne encore
- **Réinitialiser** : remet les options retirées, réinitialise la roue et efface la **Liste des gagnants** actuelle

La **Liste des gagnants** de la carte rassemble tous les résultats depuis la dernière **Réinitialisation**.

Vous pouvez aussi utiliser **Lancer** et **Réinitialiser** depuis la fenêtre [Outils rapides](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Historique

L'onglet **Historique** conserve un enregistrement par manche, du premier lancer jusqu'à la **Réinitialisation** suivante. Il liste l'heure, le titre de la roue et les gagnants. Seul l'historique des 30 derniers jours est conservé. Pour supprimer un enregistrement, cliquez sur 🗑 puis sur **Confirmer la suppression**.

:::info Limites de la version d'essai
- Vous ne pouvez créer que **1** roue
- L'overlay OBS affiche un filigrane

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison) pour plus de détails.
:::
