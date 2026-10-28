---
sidebar_position: 13
---

# Mur d'emotes

Lorsque les spectateurs utilisent des emotes dans le chat, celles-ci flottent sur votre stream.

:::note Avant de commencer
Le Mur d'emotes lit les emotes du chat : connectez d'abord les plateformes que vous utilisez. Voir [Réglages Twitch](../platforms/twitch) et [Réglages YouTube](../platforms/youtube-settings).
:::

## Étape 1 : Ajouter la source OBS

Copiez l'**URL de la source OBS** en haut de la page :

```
http://127.0.0.1:7272/emote-wall
```

Ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source). Le Mur d'emotes ne joue aucun son : inutile d'activer « Contrôler l'audio via OBS ».

:::tip
Activez aussi l'interrupteur à côté de **Mur d'emotes** dans la barre latérale gauche (**Activer l’affichage OBS**). Tant qu'il est désactivé, les emotes du chat ne sont pas envoyées à l'overlay.
:::

## Étape 2 : Choisir les sources

Sous **Source**, il y a une carte pour **Twitch** et une pour **YouTube**. Chaque carte indique l'état de la connexion :

- Twitch affiche **(Non connecté)** lorsque votre compte Twitch n'est pas connecté
- YouTube affiche **URL du chat non renseignée** lorsque le chat YouTube n'est pas connecté

Cochez **Activer le mur d'emotes** sur une carte pour afficher les emotes du chat de cette plateforme. Décochez-la pour ignorer cette plateforme.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Étape 3 : Réglages d'animation

| Réglage | Description |
|---------|-------------|
| **Taille des emotes** | Taille de chaque emote, de 16 à 256 px |
| **Nombre max. d'emotes par message** | Jusqu'à ce nombre d'emotes est repris d'un même message du chat (1 à 20) |
| **Durée de flottement** | Durée pendant laquelle chaque emote flotte, de 1 à 30 secondes |
| **Vitesse de flottement** | De 50 à 500 px/s |

Cliquez sur **Réinitialiser** à côté du titre de la section pour restaurer les quatre valeurs.

## Étape 4 : Tester

Cliquez sur **Tester (afficher dans OBS)** pour envoyer des emotes Twitch d'exemple à l'overlay avec vos réglages actuels. Le nombre d'emotes de test suit **Nombre max. d'emotes par message**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Limites de la version d'essai
L'overlay OBS affiche un filigrane lorsque des emotes sont à l'écran. Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison) pour plus de détails.
:::
