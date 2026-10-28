---
sidebar_position: 17
---

# Demandes musicales

Les spectateurs demandent des chansons YouTube avec une commande dans le chat, et les chansons sont lues dans OBS les unes après les autres. Vous pouvez aussi ajouter des chansons vous-même et définir une liste de lecture par défaut qui est lue lorsqu'il n'y a pas de demandes.

## URL de la source OBS

```
http://127.0.0.1:7272/song-request
```

Cliquez sur **Copier** à côté de **URL de la source OBS** en haut de la page, puis ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source).

:::warning
Les demandes musicales jouent du son. Dans les propriétés de la source de navigateur, cochez **Contrôler l'audio via OBS**, sinon la musique n'atteindra pas votre stream.
:::

:::tip
Activez aussi l'interrupteur à côté de **Demandes musicales** dans le menu de gauche. Les commandes du chat ne sont traitées que lorsque l'interrupteur est activé.
:::

La page comporte deux onglets : **Réglages** et **Liste de lecture**.

## Onglet Réglages

### Plateforme

Chaque plateforme a sa propre carte :

- **Autoriser les demandes de chanson sur cette plateforme** : permet aux spectateurs de ce chat de demander des chansons
- **Activer les réponses du bot de chat** (Twitch uniquement, activé par défaut) : répond dans le chat Twitch avec le résultat de chaque commande, en utilisant votre compte Twitch connecté. Affiché uniquement lorsque Twitch est activé et connecté

Une plateforme non connectée affiche **(Non connecté)** (Twitch) ou **URL du chat non renseignée** (YouTube). Connectez-la d'abord :

- [Réglages Twitch](../platforms/twitch)
- [Réglages YouTube](../platforms/youtube-settings)

### Commandes du chat

| Champ | Par défaut |
|------|--------|
| **Préfixe de commande** | `!` (au choix parmi `! @ # $ % & ~`) |
| **Commande de demande** | `sr` |
| **Supprimer une demande** | `remove` |
| **Voir la liste des demandes** | `queue` |
| **Voir la chanson en cours** | `song` |
| **Délai entre les demandes** | 3000 ms |

Le délai est compté par spectateur : après une demande réussie, le même spectateur doit attendre ce délai avant de faire une nouvelle demande.

### Réglages

- **Afficher la vidéo à l'écran** (activé par défaut) : lorsqu'il est désactivé, la vidéo est masquée dans OBS mais l'audio est toujours lu
- **Limite de la liste** (1 à 100, par défaut 20) : le nombre maximal de chansons demandées dans la liste. Les chansons de la liste de lecture par défaut ne comptent pas
- **Afficher la notification de demande** (activé par défaut) : affiche une carte de notification dans OBS lorsqu'un spectateur demande, retire ou échoue à demander une chanson. Lorsqu'il est activé, vous pouvez définir :
  - **X** / **Y** : position de la notification depuis le coin supérieur gauche (px, par défaut 16 / 16)
  - **Échelle de la notification** : multiplicateur de taille (par défaut 1.0)
  - **Tester l'apparence de la notification** : envoie une notification de test à OBS

Chaque notification reste affichée 5 secondes ; jusqu'à 3 sont affichées en même temps.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Utilisation par les spectateurs

Avec les réglages par défaut :

| Commande | Effet |
|------|------|
| `!sr <YouTube link>` | Demande cette vidéo |
| `!sr <search words>` | Recherche sur YouTube et demande le premier résultat |
| `!remove` | Retire la demande la plus récente du spectateur (pas la chanson en cours de lecture) |
| `!queue` | Répond avec les 3 prochaines chansons demandées |
| `!song` | Répond avec la chanson en cours de lecture |

- Liens acceptés : `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…`, ou un identifiant de vidéo de 11 caractères
- Les liens de playlist ne sont pas acceptés
- Une demande échoue lorsque la liste a atteint la **Limite de la liste**
- Les nouvelles demandes sont placées après celles des autres spectateurs, avant les chansons de la liste de lecture par défaut
- `!queue` et `!song` ne fonctionnent que dans le chat Twitch avec **Activer les réponses du bot de chat** activé

## Onglet Liste de lecture

### Commandes de lecture

La ligne du haut indique qui a demandé la chanson en cours et son titre. Boutons :

- **Lire** / **Pause** : si rien n'est en cours de lecture, démarre à partir de la première chanson de la liste
- **Arrêter** : arrête la lecture
- **Suivant** : passe à la chanson suivante

Pendant la lecture d'une chanson, une barre de progression apparaît ; faites-la glisser pour aller à une position. Lorsqu'une chanson se termine, la suivante démarre automatiquement.

:::note
Rien n'est lu automatiquement au démarrage de l'app. Appuyez sur **Lire** pour commencer.
:::

### Liste de lecture par défaut

Collez l'URL d'une playlist YouTube et choisissez **Lecture en boucle** ou **Lecture aléatoire**. Lorsque la liste est épuisée, une chanson de cette playlist est ajoutée et lue automatiquement. Ces chansons apparaissent comme **Liste par défaut** dans la liste.

La liste de lecture par défaut est lue via votre compte YouTube : vous devez donc d'abord vous connecter avec Google dans [Réglages YouTube](../platforms/youtube-settings).

### Demande manuelle

Collez l'URL d'une vidéo YouTube et cliquez sur **Ajouter à la liste** (ou appuyez sur Entrée). Les demandes manuelles ne prennent pas en charge les mots de recherche.

### Liste

**Liste (n)** affiche toutes les chansons : plateforme, demandeur, titre et identifiant de la vidéo (cliquez pour l'ouvrir sur YouTube). Cliquez sur **Supprimer** pour retirer une chanson ; supprimer la chanson en cours de lecture passe à la suivante. **Vider** vide toute la liste.

{/* TODO: 截圖 — 播放清單分頁 */}

## Questions fréquentes

**Q : Les spectateurs tapent la commande mais rien ne se passe ?**
Vérifiez que :
- L'interrupteur **Demandes musicales** du menu de gauche est activé
- **Autoriser les demandes de chanson sur cette plateforme** est coché pour cette plateforme
- Pour Twitch : le chat Twitch est lu par la fonctionnalité [Chat](./chat). Si vous avez désactivé Twitch dans la page Chat (et que le [Bot de chat](./chat-bot) n'utilise pas Twitch), les commandes Twitch ne sont pas reçues

**Q : La liste de lecture par défaut n'est pas lue ?**
Vérifiez que vous êtes connecté avec Google dans les Réglages et que l'URL est un lien de playlist (elle contient `list=`).

:::info Limites de la version d'essai
- Les demandes des spectateurs via le chat ne sont disponibles que dans la version complète. Dans la version d'essai, une demande depuis le chat échoue avec le message « Les demandes de chansons ne sont pas disponibles dans la version d'essai ». **Demande manuelle** et la liste de lecture par défaut fonctionnent toujours
- L'overlay OBS affiche un filigrane

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::
