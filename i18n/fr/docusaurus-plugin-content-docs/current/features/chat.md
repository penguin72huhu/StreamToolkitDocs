---
sidebar_position: 3
---

# Chat

**Chat** affiche vos chats Twitch et YouTube réunis dans un seul overlay, avec traduction automatique en option. Il peut aussi afficher le chat dans une fenêtre transparente sur le bureau, visible par vous seul.

## URL de la source OBS

```
http://127.0.0.1:7272/chat
```

Ajoutez-la comme source de navigateur : [Comment ajouter des sources dans OBS](../getting-started/obs-source). Cet overlay n'a pas de son.

:::info
Les messages ne sont envoyés à l'overlay que lorsque l'interrupteur **Chat** de la barre latérale est activé. Le chat est toujours reçu lorsqu'il est désactivé : les fonctionnalités qui lisent le chat (sondages, tirages au sort, demandes musicales, etc.) continuent de fonctionner.
:::

## Avant de commencer

Connectez les plateformes que vous souhaitez afficher :

- [Réglages Twitch](../platforms/twitch)
- [Réglages YouTube](../platforms/youtube-settings)

La page de réglages comporte deux onglets : **Réglages** et **Apparence**.

## Onglet Réglages

### Plateformes

- **Afficher l'icône de plateforme (Twitch / YouTube)** — affiche l'icône <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> devant chaque message

Chaque plateforme a sa propre carte. Le point à côté du nom de la plateforme s'allume en vert lorsqu'elle est connectée et activée ; **(Non connecté)** s'affiche si Twitch n'est pas connecté, et **URL du chat non renseignée** si le chat YouTube n'est pas lié.

| Option | Description |
|--------|-------------|
| **Activer le chat** | Affiche les messages de cette plateforme |
| **Afficher l'avatar** | Affiche l'avatar du spectateur |
| **Afficher les badges** (Twitch) / **Afficher les badges (icônes de membre)** (YouTube) | Affiche les badges |
| **Afficher le nom des spectateurs au lieu du @pseudo** | YouTube uniquement. Désactivé tant que vous n'êtes pas connecté avec Google |

Lorsque le chat YouTube est activé mais non lié, deux boutons apparaissent sur sa carte :

- **Connexion auto** — trouve automatiquement votre diffusion en cours (nécessite la connexion Google)
- **Saisir manuellement** — vous amène à la page de réglages pour coller l'URL du chat

**Nombre maximal de messages** : nombre de messages conservés à l'écran (5 à 200, par défaut 50).

### Traduction automatique

1. Cochez **Activer la traduction**
2. **Langue cible** : la langue dans laquelle les messages sont traduits. La valeur par défaut, **Suivre la langue de l'interface**, utilise la langue de l'interface de l'app
3. **Langues à ne pas traduire** (facultatif) : les messages dans les langues cochées sont laissés tels quels. Le portugais PT-BR et PT-PT ne peuvent pas être distingués : cocher l'un des deux ignore les deux

Le **Service de traduction** est **MyMemory**, qui ne nécessite aucune clé API.

- **E-mail (facultatif)** : sans e-mail, le quota quotidien est de 5 000 caractères ; saisissez un e-mail et cliquez sur **Enregistrer** pour le porter à 50 000 caractères (gratuit, sans inscription sur MyMemory)
- La barre en dessous indique la quantité approximative utilisée aujourd'hui. Elle est réinitialisée chaque jour à 08:00 UTC

### Test

- **Envoyer un message de test** — envoie un message d'exemple aléatoire à l'overlay
- **Effacer** — efface tous les messages de l'overlay

Si **Échec de la connexion — le serveur n'est peut-être pas démarré** apparaît, le serveur local de Stream Toolkit ne répond pas.

### Fenêtre de chat sur le bureau

Affiche le chat dans une petite fenêtre transparente, toujours au premier plan, par-dessus votre jeu. Vous seul pouvez la voir — pratique pour streamer avec un seul écran.

1. Cliquez sur **Ouvrir la fenêtre** (ou faites un clic droit sur l'icône de la zone de notification et choisissez **Ouvrir le chat sur le bureau**)
2. Tant qu'elle est déverrouillée, faites glisser la barre supérieure pour déplacer la fenêtre et ses bords pour la redimensionner
3. Cliquez sur **🔒 Verrouiller** une fois qu'elle est en place. Les clics traversent alors la fenêtre jusqu'à votre jeu. Pour déverrouiller, placez la souris sur la fenêtre et cliquez sur le 🔓 qui apparaît dans le coin supérieur droit, ou cliquez sur **🔓 Déverrouiller** dans la page de réglages

**Réinitialiser la position** remet la fenêtre à sa position par défaut.

| Réglage | Description |
|---------|-------------|
| **Style** | **Nom et message uniquement** (par défaut) ou **Identique au chat OBS** |
| **Taille de police** | 12 à 32 px, par défaut 16. Uniquement pour **Nom et message uniquement** |
| **Opacité du texte** | 10 à 100 %, par défaut 100 % |
| **Opacité du fond** | 0 à 100 %, par défaut 40 % |
| **Faire disparaître les messages** | 0 à 120 secondes, par défaut 0. Chaque message disparaît après ce nombre de secondes, et les messages disparus ne peuvent plus être consultés en faisant défiler. À 0, rien ne disparaît, et vous pouvez remonter vers les messages précédents lorsque la fenêtre est déverrouillée (jusqu'au Nombre maximal de messages) |
| **Masquer de la capture du stream** | Activé par défaut. La Capture d'écran d'OBS ne capte pas la fenêtre : les spectateurs ne voient donc pas le chat en double. Elle n'apparaît pas non plus dans les captures d'écran ni dans le partage d'écran Discord |

:::tip
Si vous ne voyez pas la fenêtre lorsque votre jeu est en plein écran, passez le jeu en mode Fenêtré sans bordure ou Fenêtré. Utilisez **Envoyer un message de test** pour vérifier la position et la taille de la fenêtre.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Onglet Apparence

### Aperçu

Le haut de l'onglet affiche un aperçu en direct. Le sélecteur de couleur à côté de **Aperçu** ne change que le fond de l'aperçu. Les cases **Avatar**, **Badges** et **Icône de plateforme** ne changent que ce qu'affiche l'aperçu.

### Réglages d'apparence

**Réinitialiser** restaure l'apparence par défaut (ou celle du thème appliqué, si un thème est appliqué).

- **Sens d’apparition** : **De haut en bas**, **De bas en haut** (par défaut), **De gauche à droite**, **De droite à gauche**
- **Texte** — réglé séparément pour **Pseudo** et **Message** :
  - Police, taille (px) et couleur. Pour le pseudo, vous pouvez choisir **Couleur d'origine** (la couleur du spectateur sur la plateforme) ou **Couleur personnalisée**
  - **Contour** : couleur, **Opacité**, **Épaisseur**
  - **Ombre** : couleur, **Opacité**, **Flou**, décalage X / Y
- **Taille des icônes** : échelle pour **Icône de plateforme**, **Avatar** et **Badges** (0,1 à 5x)
- **Couleur** : **Couleur de fond** de chaque message

### CSS personnalisé

Développez **CSS personnalisé** pour modifier directement le CSS de l'overlay. Utilisez **Gérer les ressources** pour importer des images à référencer dans le CSS. **Réinitialiser** restaure le CSS par défaut. Voir aussi [Thèmes](./themes).

:::tip
Si votre CSS personnalisé définit l'un des champs d'apparence avec `!important`, ce champ est grisé dans les réglages d'apparence (« Ce réglage est contrôlé par le CSS personnalisé »). Lorsqu'un thème est appliqué, le CSS est en lecture seule — restaurez-le avant de le modifier.
:::

## Limites de la version d'essai

:::info
- Activer la traduction automatique ajoute un filigrane à l'overlay du chat
- **CSS personnalisé** n'est disponible que dans la version complète
- La **Fenêtre de chat sur le bureau** n'est disponible que dans la version complète

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::
