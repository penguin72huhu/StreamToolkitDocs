---
sidebar_position: 1
---

# Outils rapides

**Outils rapides** est une petite fenêtre de contrôle que vous pouvez garder ouverte à côté de votre jeu ou d'OBS. Elle vous permet d'activer et de désactiver les fonctionnalités et d'utiliser leurs commandes les plus courantes sans revenir à la fenêtre principale.

## Ouvrir les Outils rapides

Utilisez l'une de ces méthodes :

- Cliquez sur **⚡ Outils rapides** en haut de la barre latérale gauche de la fenêtre principale
- Faites un clic droit sur l'icône de Stream Toolkit dans la zone de notification et choisissez **Ouvrir les outils rapides**

Si la fenêtre est déjà ouverte, elle passe au premier plan au lieu d'en ouvrir une seconde.

{/* TODO: 截圖 — 快速工具視窗 */}

## La fenêtre

- **La déplacer** : faites glisser la barre de titre
- **📌 Épingler / Désépingler** : garde la fenêtre au-dessus des autres fenêtres. L'épinglage est activé à l'ouverture de la fenêtre
- **✕** : ferme la fenêtre

La fenêtre suit le thème et la langue de l'interface de l'app.

## Panneau Interrupteurs rapides

Cliquez sur la flèche **›** sur le bord gauche pour faire glisser le panneau **Interrupteurs rapides**. Il liste toutes les fonctionnalités :

- L'interrupteur active ou désactive la fonctionnalité (comme l'interrupteur à côté de chaque fonctionnalité dans la barre latérale principale)
- **⚙** (**Ouvrir les réglages**) affiche la fenêtre principale sur la page de réglages de cette fonctionnalité

Cliquez en dehors du panneau ou de nouveau sur la flèche pour le fermer.

Les fonctionnalités sont listées dans le même ordre que dans la barre latérale principale. Pour changer l'ordre, faites glisser la poignée **⠿** à côté d'une fonctionnalité dans la barre latérale de la fenêtre principale.

## Cartes des fonctionnalités

Chaque fonctionnalité activée qui dispose de commandes apparaît sous forme de carte. Les cartes sont d'abord réduites — cliquez sur le titre d'une carte pour la développer ou la réduire. Si aucune de ces fonctionnalités n'est activée, la fenêtre affiche **Aucune fonction activée**.

| Fonctionnalité | Ce que propose la carte |
|---------|---------------------|
| [Contrôle des scènes OBS](./obs-scene) | L'état de la connexion, plus un bouton par changement de scène ou bascule de sources configuré (la scène actuelle est mise en évidence). Les boutons sont désactivés en l'absence de connexion. La carte n'apparaît qu'une fois au moins une entrée de raccourci créée |
| [Traduction vocale](./voice-translate) | Bouton **REC** — maintenez-le pour enregistrer, relâchez pour traduire |
| [Marqueur de temps fort du stream](./highlight) | Bouton **MARK**. Après un marquage, l'icône de la plateforme et l'horodatage sont affichés pendant 5 secondes |
| [Barre de dons](./donate) | Montant actuel / cible avec une barre de progression, un champ **Ajouter un montant manuellement** avec **Ajouter**, et **Remettre à zéro** |
| [Minuteur](./timer) | Pour chaque minuteur affiché : nom, temps, **Démarrer** / **Pause**, **Réinitialiser**, et les boutons d'ajout de temps que vous avez configurés. Les chronomètres affichent plutôt **Arrêter** et **Tour** |
| [Roue](./turntable) | Pour chaque roue affichée : **Lancer** et **Réinitialiser** |
| [Media Board](./multimedia) | Boutons pour les images épinglées (afficher / masquer), les vidéos épinglées (lire) et les sons épinglés (jouer) |
| [Demandes musicales](./song-request) | **Lire** / **Pause**, **Arrêter**, **Suivant** |

Si un raccourci est attribué à une commande, il est affiché sur son bouton.

Les fonctionnalités sans commande à utiliser ici (Chat, Barre d'objectif Twitch, Alertes de dons, Tableau des dons, Horloge, Mur d'emotes, Sondages en direct, Tirages au sort, Bot de chat) n'ont que leur interrupteur dans le panneau Interrupteurs rapides.

:::tip
**Remettre à zéro** sur la carte Barre de dons nécessite deux clics : le premier transforme le bouton en **Confirmer la remise à zéro**, et un second clic dans les 10 secondes remet le montant à zéro.
:::

:::info
Les minuteurs et les roues suivent le **Mode d'affichage** de chaque fonctionnalité : avec **Minuteur unique** / **Roue unique**, seul celui ou celle actuellement sélectionné(e) est affiché(e) ; avec **Plusieurs minuteurs** / **Plusieurs roues**, seuls ceux que vous avez ajoutés sont affichés. S'il n'y en a aucun, la carte affiche **Aucun minuteur** / **Aucune roue**.
:::
