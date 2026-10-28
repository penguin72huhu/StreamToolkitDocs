---
sidebar_position: 15
---

# Sondages en direct

Lancez un sondage pendant le stream. Les spectateurs votent en tapant le numéro d'une option dans le chat Twitch ou YouTube, et les résultats se mettent à jour en direct sur l'overlay OBS.

## URL de la source OBS

```
http://127.0.0.1:7272/vote
```

Cliquez sur **Copier** à côté de **URL de la source OBS** en haut de la page, puis ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source). Sondages en direct ne joue aucun son : inutile d'activer « Contrôler l'audio via OBS ».

:::tip
Activez aussi l'interrupteur à côté de **Sondages en direct** dans la barre latérale gauche (**Activer l’affichage OBS**). Tant qu'il est désactivé, l'overlay reste masqué.
:::

La page comporte trois onglets : **Réglages**, **Apparence** et **Historique**.

## Lancer un sondage (onglet Réglages)

### Plateforme de vote

Cliquez sur **Twitch** ou **YouTube** pour choisir le chat de quelle plateforme peut voter. Vous pouvez choisir les deux. Une plateforme non connectée affiche **(Non connecté)** pour Twitch ou **URL du chat non renseignée** pour YouTube. Connectez-la d'abord :

- [Réglages Twitch](../platforms/twitch)
- [Réglages YouTube](../platforms/youtube-settings)

### Titre du vote

Facultatif. Par exemple : « À quel jeu joue-t-on ce soir ? »

### Options de vote (2 à 10)

- Saisissez au moins 2 options. Vous pouvez en avoir jusqu'à 10
- **+ Ajouter une option** ajoute une ligne et **×** en supprime une
- **Appliquer l'historique** vous permet de choisir l'un de vos 15 sondages les plus récents et d'en reprendre le titre et les options

Pendant la modification, l'overlay OBS affiche un aperçu du titre et des options.

### Durée du vote

La durée du sondage en secondes. La valeur par défaut est 60 et le minimum est 10.

### Lancer / Arrêter

- **Lancer le vote** : nécessite au moins 2 options remplies et au moins une plateforme sélectionnée et connectée
- **Arrêter le vote** : termine le sondage avant la fin. Sinon, il se termine à l'expiration du temps

Pendant un sondage, vous ne pouvez pas modifier les plateformes, le titre, les options ni la durée.

{/* TODO: 截圖 — 投票設定分頁 */}

## Comment les spectateurs votent

Pendant le sondage, l'overlay affiche « Saisissez le numéro de l'option dans le chat pour voter (ex. : 1) ».

- Le message entier doit être le numéro de l'option, comme `1` ou `1.`. Les espaces sont ignorés. Un message contenant un autre texte n'est pas compté
- Chaque spectateur dispose d'une voix. S'il envoie un autre numéro, son vote passe à la nouvelle option ; c'est le dernier vote avant la fin du temps qui compte

## Résultats en direct

Pendant le sondage, **Résultats en direct** apparaît sous les réglages avec le temps restant, le nombre de votes et le pourcentage de chaque option, ainsi que le total des votes. Une fois le sondage terminé, il devient **Résultats finaux**. Cliquez sur **Détails** pour voir qui a voté pour chaque option, regroupé par Twitch et YouTube.

## Apparence

L'onglet **Apparence** comporte un **Aperçu** en haut. Le sélecteur de couleur à côté ne change que le fond de l'aperçu, pas l'overlay OBS.

- **Police** : définissez la police, la couleur et la **Taille** (px) pour **Titre**, **Astuce**, **Option**, **Décompte** et **Nombre de votes**
- **Couleur de la barre de progression** : jusqu'à 5 couleurs, utilisées dans l'ordre pour les barres des options. Chacune peut être **Uni** ou **Dégradé**. Les dégradés ont aussi un **Angle**
- **Couleur de fond** : le fond de la carte du sondage
- **Réinitialiser** : restaure l'apparence par défaut. Si un thème est appliqué, restaure l'apparence du thème

Dans **CSS personnalisé**, vous pouvez écrire vos propres styles. Pour partager ou télécharger des apparences, voir [Thèmes](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Historique

L'onglet **Historique** liste le titre, l'heure, le nombre d'options et le total des votes de chaque sondage. Développez un sondage pour voir ses résultats, le nombre de votes par plateforme et **Détails**. Seul l'historique des 30 derniers jours est conservé. Pour supprimer un enregistrement, cliquez sur 🗑 puis sur **Confirmer la suppression**.

:::info Limites de la version d'essai
- **CSS personnalisé** n'est disponible que dans la version complète
- L'overlay OBS affiche un filigrane

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison) pour plus de détails.
:::
