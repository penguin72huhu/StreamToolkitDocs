---
sidebar_position: 6
---

# Marqueur de temps fort du stream

Appuyez sur un raccourci pendant votre stream pour enregistrer « à quel moment du stream » un temps fort s'est produit. Vous pourrez ensuite utiliser la liste des horodatages pour retrouver les temps forts dans votre VOD lors du montage.

Les marqueurs sont enregistrés dans Stream Toolkit. Cette fonctionnalité n'a pas d'overlay OBS : inutile d'ajouter une source OBS.

La page comporte deux onglets : **Réglages** et **Temps forts**.

:::tip
Activez l'interrupteur à côté de **Marqueur de temps fort du stream** dans la barre latérale gauche. Tant qu'il est désactivé, ni le raccourci ni le bouton **MARK** n'ajoutent de marqueur.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Étape 1 : Choisir la source

**Source** détermine comment le temps du stream est calculé :

| Source | Calcul du temps | Prérequis |
|--------|----------------------------|-------------|
| **Twitch** | Temps écoulé depuis le début de votre stream Twitch en cours | Twitch connecté. Voir [Réglages Twitch](../platforms/twitch) |
| **YouTube** | Temps écoulé depuis le début de votre live YouTube en cours | Connexion Google. Voir [Réglages YouTube](../platforms/youtube-settings) |
| **Alignement manuel** (par défaut) | La valeur du minuteur manuel de cette page | Aucun |

Un point à côté de **Twitch** et **YouTube** indique s'ils sont connectés. Sinon, l'option affiche **(Non connecté)** ou **(non connecté à Google)**.

Si vous marquez alors que vous n'êtes pas en direct (ou, pour **Alignement manuel**, alors que le minuteur est arrêté), le temps est enregistré comme **Aucun stream en cours**. Avec la source **Twitch**, ce résultat peut mettre environ 20 secondes à s'afficher, car Stream Toolkit réessaie plusieurs fois au cas où Twitch n'aurait pas encore enregistré un stream qui vient de commencer.

### Minuteur manuel

Lorsque **Alignement manuel** est sélectionné, un **Minuteur manuel** apparaît :

1. Saisissez le temps actuel du stream au format `HH:MM:SS` (par exemple `00:00:00` au moment où vous passez en direct)
2. Cliquez sur **Démarrer la synchronisation**. Le minuteur commence à compter à partir de cette valeur
3. Chaque marqueur utilise la valeur actuelle du minuteur
4. Cliquez sur **Arrêter** pour arrêter le minuteur

### Créer un clip Twitch lors du marquage

Cette option n'apparaît que lorsque la source est **Twitch**. Lorsqu'elle est activée, chaque marqueur crée aussi un clip Twitch.

- Vous devez être en direct. Le clip dure environ 30 secondes
- Les clips sont enregistrés dans Tableau de bord des créateurs → Contenu → Clips
- Après le marquage, la page affiche **Clip Twitch créé**, ou la raison de l'échec : **Vous n'êtes pas en direct**, **Autorisation manquante ; reconnectez Twitch**, **Twitch non connecté** ou **Échec ; réessayez**

## Étape 2 : Définir le raccourci

Le raccourci par défaut est `Ctrl+Shift+M`. Pour le modifier :

1. Cliquez sur le bouton du raccourci
2. Appuyez sur la combinaison de touches souhaitée, puis relâchez-la. Appuyez sur **Esc** pour annuler
3. Pour le supprimer, cliquez sur **Effacer**

Si la combinaison est déjà utilisée par une autre fonctionnalité, le bouton affiche **Ce raccourci est déjà utilisé** et le raccourci n'est pas enregistré. Le raccourci fonctionne même lorsque Stream Toolkit n'est pas la fenêtre active.

Vous pouvez aussi cliquer sur le bouton **MARK** sous le raccourci. Il fait la même chose que le raccourci. La fenêtre [Outils rapides](./quick-tools) dispose aussi d'un bouton **MARK**.

## Étape 3 : Marquer pendant le stream

1. (Facultatif) Saisissez un nom dans **Nom du marqueur** avant de marquer. Si vous le laissez vide, les marqueurs sont numérotés automatiquement (`精華標記_1`, `精華標記_2`, …)
2. Appuyez sur le raccourci ou cliquez sur **MARK**

Le nom saisi n'est utilisé que pour le marqueur suivant, et le champ est vidé ensuite.

## Temps forts

L'onglet **Temps forts** liste tous les marqueurs, du plus récent au plus ancien. Chaque ligne affiche le temps du stream, le nom, la source ainsi que la date et l'heure du marquage.

- **Copier** : copie le marqueur sous forme de texte, au format `[date] nom 🎬 temps du stream (source)`
- **🗑️** : cliquez dessus, puis sur **Confirmer la suppression** pour supprimer le marqueur
- **Ouvrir le clip Twitch** : apparaît lorsqu'un clip Twitch a été créé pour ce marqueur. Ouvre le clip sur Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Limites de la version d'essai
**Créer un clip Twitch lors du marquage** n'est pas disponible. L'option est affichée comme « Activé dans la version complète ».

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison) pour plus de détails.
:::
