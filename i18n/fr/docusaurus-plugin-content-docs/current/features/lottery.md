---
sidebar_position: 16
---

# Tirages au sort

Les spectateurs participent en tapant un mot-clé dans le chat Twitch ou YouTube. Une fois les inscriptions closes, tirez des gagnants au hasard ; l'animation du tirage s'affiche sur l'overlay OBS.

## URL de la source OBS

```
http://127.0.0.1:7272/lottery
```

Cliquez sur **Copier** à côté de **URL de la source OBS** en haut de la page, puis ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source). Tirages au sort ne joue aucun son : inutile d'activer « Contrôler l'audio via OBS ».

:::tip
Activez aussi l'interrupteur à côté de **Tirages au sort** dans la barre latérale gauche (**Activer l’affichage OBS**). Tant qu'il est désactivé, l'overlay reste masqué.
:::

La page comporte deux onglets : **Réglages** et **Historique**.

## Réglages

### Plateforme de vote

Cliquez sur **Twitch** ou **YouTube** pour choisir le chat de quelle plateforme peut participer. Vous pouvez choisir les deux. Une plateforme non connectée affiche **(Non connecté)** pour Twitch ou **URL du chat non renseignée** pour YouTube. Pour la connecter, voir [Réglages Twitch](../platforms/twitch) et [Réglages YouTube](../platforms/youtube-settings).

### Mot-clé du tirage

Un message du chat contenant ce mot-clé inscrit le spectateur. Chaque spectateur ne peut participer qu'une fois par tirage. **Commencer la collecte** n'est pas cliquable tant que le mot-clé est vide.

### Durée du tirage

Durée pendant laquelle les inscriptions restent ouvertes, en secondes. La valeur par défaut est 300 et la plage va de 10 à 3600.

### Nombre max. de participants

Les inscriptions se ferment plus tôt une fois ce nombre de participants atteint. Saisissez `0` pour aucune limite.

### Supprimer l'option après tirage

Lorsque cette option est activée, un gagnant est retiré des participants avant le tirage suivant : il ne peut donc pas être tiré de nouveau lors de ce tirage au sort.

### Texte d'invite

L'invite affichée sur l'overlay pendant les inscriptions, qui indique aux spectateurs le mot-clé et le nombre de participants. Définissez sa police, sa couleur et sa taille (px).

### Animation du tirage

- **Rotation rapide d'ID** (par défaut) : les noms des participants flottent à l'écran pendant les inscriptions, puis défilent rapidement pendant le tirage
  - **Police de l'écran de collecte** : police, taille de police et couleurs des pastilles de noms (jusqu'à 5)
  - **Police de l'animation de tirage** : police et taille de police des noms qui défilent pendant le tirage
  - **Réinitialiser** : restaure ces réglages
- **Animation de roue** : les participants sont placés sur une roue qui tourne pour désigner le gagnant. Choisissez un jeu de couleurs : **Minimal** ou un thème personnalisé créé dans [Roue](./turntable)

Pendant les inscriptions, vous ne pouvez pas modifier les plateformes, le mot-clé, la durée, le nombre max. de participants, Supprimer l'option après tirage ni le type d'animation.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Lancer un tirage au sort

1. Cliquez sur **Commencer la collecte**. Le panneau affiche **Collecte en cours…**, le temps restant et le nombre de participants
2. Pendant les inscriptions, vous pouvez saisir un nom dans **Saisir manuellement le nom d'un participant** et cliquer sur **Ajouter** (ou appuyer sur Entrée). Un nom déjà dans la liste affiche « Cet ID est déjà dans la liste »
3. Pour clore les inscriptions avant la fin du temps, cliquez sur **Terminer la collecte**. Les inscriptions se ferment aussi lorsque le temps est écoulé ou que **Nombre max. de participants** est atteint. Le panneau affiche alors **Temps écoulé !**
4. Cliquez sur **Lancer le tirage**. L'overlay joue l'animation et, à la fin, le gagnant apparaît sous **Gagnant**
5. Pour tirer un autre gagnant, cliquez sur **Retirer**

Cliquez sur **Annuler le tirage** à tout moment pour effacer tous les participants et gagnants ; l'overlay revient alors en attente.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Historique

L'onglet **Historique** conserve un enregistrement par tirage au sort avec l'heure, le mot-clé et le nombre de participants. Développez un enregistrement pour voir les gagnants et la liste complète des participants. Seul l'historique des 30 derniers jours est conservé. Pour supprimer un enregistrement, cliquez sur 🗑 puis sur **Confirmer la suppression**.

:::info Limites de la version d'essai
L'overlay OBS affiche un filigrane. Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison) pour plus de détails.
:::
