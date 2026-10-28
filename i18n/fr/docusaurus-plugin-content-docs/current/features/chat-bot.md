---
sidebar_position: 18
---

# Bot de chat

Publie automatiquement des messages dans votre chat : des messages programmés à intervalle régulier, et des réponses par mot-clé lorsqu'un spectateur tape une commande. Le bot publie depuis votre propre compte.

Le bot de chat n'a pas d'overlay OBS : il n'y a donc aucune URL à ajouter.

:::tip
Activez l'interrupteur à côté de **Bot de chat** dans le menu de gauche. Tant qu'il est désactivé, le bot n'envoie rien.
:::

La page comporte trois onglets : **Réglages**, **Messages programmés** et **Réponses par mot-clé**.

## Onglet Réglages

Sous **Plateformes**, cliquez sur **Twitch** pour l'activer (cliquez de nouveau pour le désactiver). Le point à côté s'allume lorsque Twitch est connecté ; sinon, **(Non connecté)** s'affiche. Connectez d'abord Twitch : [Réglages Twitch](../platforms/twitch).

**YouTube** est affiché comme **Bientôt disponible** et ne peut pas encore être activé.

Si aucune plateforme n'est connectée, les deux autres onglets affichent « Aucune plateforme connectée : le bot n’enverra rien. » avec un bouton **Aller aux paramètres**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Messages programmés

Publie un message à intervalles réguliers pendant que vous êtes en direct.

1. Cliquez sur **+ Ajouter**
2. Remplissez :
   - **Message** : le texte à publier (jusqu'à 500 caractères sur Twitch). Il tient toujours sur une seule ligne : Entrée ne fait rien et les sauts de ligne collés deviennent des espaces
   - **Intervalle** : minutes entre deux publications (5 à 240, par défaut 15)
   - **Min. de messages** : nombre de nouveaux messages de chat nécessaires depuis la dernière publication avant de publier à nouveau (0 à 100, par défaut 2), pour éviter de publier en boucle dans un chat vide
   - **Plateformes** : où publier
3. Cliquez sur **Enregistrer**

Fonctionnement de la publication :

- Uniquement pendant que votre stream est en direct. La première publication a lieu un intervalle complet après le début du live, et non au moment où le stream démarre
- Si plusieurs messages programmés sont dus en même temps, ils sont échelonnés au lieu d'être publiés ensemble

## Réponses par mot-clé

Répond lorsque le message d'un spectateur commence par une commande.

1. Cliquez sur **+ Ajouter**
2. Remplissez :
   - **Commande** : choisissez le préfixe (`! @ # $ % & ~`), puis tapez un seul mot sans espace, par ex. `!dc`. Il est comparé au premier mot d'un message du chat, sans tenir compte des majuscules/minuscules
   - **Réponse** : le texte à publier. `{user}` est remplacé par le nom du spectateur qui a utilisé la commande
   - **Délai** : secondes avant que la même commande puisse répondre de nouveau (0 à 3600, par défaut 5)
   - **Plateformes** : où répondre
3. Cliquez sur **Enregistrer**

Les réponses par mot-clé fonctionnent à tout moment, en direct ou non.

Une commande ne peut pas être identique à une autre réponse par mot-clé, ni à une commande déjà utilisée par [Demandes musicales](./song-request) ou par le mot-clé de [Tirages au sort](./lottery).

## Gérer la liste

Dans les deux onglets, chaque élément comporte :

- Une case à cocher à gauche pour activer ou désactiver l'élément sans le supprimer
- Des étiquettes de plateforme ; une étiquette grisée signifie que cette plateforme est désactivée dans l'onglet Réglages
- **Modifier** et **Supprimer**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Limites de la version d'essai
- 1 message programmé et 1 réponse par mot-clé
- Chaque message se termine par ` (by StreamToolkit)`, la longueur maximale du message est donc plus courte

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::
