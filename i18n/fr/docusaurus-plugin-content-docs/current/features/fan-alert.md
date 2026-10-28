---
sidebar_position: 8.1
---

# Alertes nouveaux abonnés

Affiche une alerte sur le stream lorsque quelqu'un vous suit sur Twitch ou s'abonne à votre chaîne YouTube.

## URL de la source OBS

```
http://127.0.0.1:7272/fan-alert
```

Copiez l'URL en haut de la page **Réglages de Alertes nouveaux abonnés** et ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source).

:::warning
Les alertes jouent un son. Cochez **Contrôler l'audio via OBS** dans les propriétés de la source de navigateur, sinon le son ne sera pas entendu sur le stream.
:::

Utilisez l'interrupteur à côté de **Alertes nouveaux abonnés** dans la barre latérale gauche pour activer ou désactiver les alertes. Lorsqu'il est désactivé, les nouveaux abonnés ne sont ni affichés ni enregistrés, et les boutons de test ne fonctionnent pas non plus.

Lorsque plusieurs abonnés arrivent à peu d'intervalle, les alertes sont mises en file d'attente et affichées l'une après l'autre. Cet overlay a sa propre file d'attente : il n'attend donc jamais derrière [Alertes de dons](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Onglet Réglages

### Plateforme d'intégration

Cochez les plateformes qui doivent déclencher une alerte : **Twitch** et **YouTube** (toutes deux cochées par défaut). Un point vert signifie que la plateforme est connectée ; sinon, la ligne affiche **Non autorisé**.

- **Twitch** : chaque nouveau suivi déclenche immédiatement une alerte. Connectez d'abord Twitch : [Réglages Twitch](../platforms/twitch).
- **YouTube** : nouveaux abonnés. Connectez-vous d'abord avec Google : [Réglages YouTube](../platforms/youtube-settings).

Comment les abonnés YouTube sont détectés :

- YouTube ne propose pas d'événement « nouvel abonné » en temps réel : l'app demande donc à YouTube vos abonnés les plus récents toutes les 1,5 minute.
- La vérification n'a lieu que lorsque vous êtes en direct et que votre chat en direct YouTube est connecté à cette diffusion. Elle n'a pas lieu dans la salle d'attente ni après la fin du stream.
- Les personnes abonnées avant le début du stream (plus d'environ 5 minutes avant le début de la vérification) ne sont pas annoncées.
- Comme l'indique la page, **YouTube n’alerte que pour les abonnés aux abonnements publics, avec un délai de quelques minutes à quelques heures.**

### Réglages

| Champ | Description |
|-------|-------------|
| **Durée d'affichage** | Durée d'affichage de chaque alerte à l'écran, en secondes (1 à 60). Par défaut : 5. |
| **Même spectateur : une alerte max. toutes les 24 h** | Désactivé par défaut. Lorsqu'il est activé, un même spectateur qui vous suit de nouveau dans les 24 heures (par exemple après s'être désabonné puis réabonné) n'est ni affiché ni enregistré. |

### Tester les alertes

Cliquez sur **Tester l’alerte (Twitch)** ou **Tester l’alerte (YouTube)** pour envoyer une alerte d'exemple à OBS. Les alertes de test ne sont pas ajoutées à l'historique.

Si Alertes nouveaux abonnés est désactivé, le test ne se lance pas et la page affiche **Activez d’abord les alertes nouveaux abonnés dans les raccourcis**.

## Onglet Apparence

### Aperçu

L'aperçu utilise la même page que la source OBS. Utilisez le sélecteur de couleur à côté de **Aperçu** pour changer le fond de l'aperçu, et cliquez sur **▶ Rejouer l’animation** pour rejouer l'animation de l'alerte.

### Style unifié / Indépendant par plateforme

- **Style unifié** : Twitch et YouTube utilisent le même style d'alerte.
- **Indépendant par plateforme** : chaque plateforme a son propre style. Choisissez **Twitch** ou **YouTube** avec les boutons ci-dessous et modifiez ses réglages. Au premier basculement, les plateformes que vous n'avez pas personnalisées copient le style unifié actuel, chacune avec sa propre couleur de barre de décompte.

**Réinitialiser** restaure le style par défaut du style que vous modifiez.

### Image

- **Choisir une image** : choisissez une image dans le gestionnaire de ressources. Sans image, un emoji de cœur est affiché. **Effacer** retire l'image.
- **Taille de l'image** : 1 à 400 px.
- **Position de l'image** : **À gauche**, **À droite**, **En haut** ou **En bas**.

### Son

Choisissez un son intégré : **Aucun**, **Carillon** (par défaut), **Pièce**, **Cloche**, **Pop**, **Fanfare**. Cliquez sur **▶** pour l'écouter. Cliquez sur **Choisir un son** pour utiliser votre propre fichier audio depuis le gestionnaire de ressources.

### Texte personnalisé

Rédigez la ligne affichée sur l'alerte. Utilisez `{name}` pour le nom de l'abonné et `{platform}` pour le nom de la plateforme. Laissez vide pour utiliser le texte par défaut : `Bienvenue {name}, merci pour le suivi !`

### Texte et couleur

- **Texte** : définissez la police, la taille et la couleur pour **Texte personnalisé** et **Nom de l’abonné**.
- **Couleur** : **Fond**, **Ombre** et **Barre de décompte**.

### CSS personnalisé

Développez **CSS personnalisé** pour modifier le CSS du style que vous modifiez (unifié ou la plateforme sélectionnée). **Réinitialiser** restaure le CSS du modèle, et **Gérer les ressources** ouvre le gestionnaire de ressources. Les thèmes Steam Workshop peuvent aussi être appliqués ici. Tant qu'un thème est appliqué, le CSS est en lecture seule. Voir [Thèmes](./themes).

## Onglet Historique

Liste les nouveaux abonnés récents des deux plateformes, du plus récent au plus ancien : plateforme, nom et heure. L'historique n'est affiché que dans l'app, jamais sur l'overlay.

- Jusqu'à 100 abonnés sont conservés, et les entrées de plus de 30 jours sont supprimées automatiquement.
- Cliquez sur **Effacer** pour vider la liste.

:::info Version d'essai
Le CSS personnalisé n'est disponible que dans la version complète, et l'alerte affiche un filigrane dans OBS. Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::

## Questions fréquentes

**Q : Pas de son sur le stream ?**
Vérifiez que **Contrôler l'audio via OBS** est coché dans les propriétés de la source de navigateur et que la source n'est pas coupée dans le mélangeur audio d'OBS. Vérifiez aussi que **Son** n'est pas réglé sur **Aucun**.

**Q : Un abonné YouTube n'a pas reçu d'alerte.**
Seuls les abonnements publics sont signalés, et YouTube peut mettre de quelques minutes à quelques heures pour les signaler. L'app ne vérifie en outre que lorsque vous êtes en direct avec le chat en direct YouTube connecté.

**Q : J'ai ajouté la source OBS en retard. Va-t-elle rejouer les alertes précédentes ?**
Non. Une source nouvellement ouverte n'affiche que les alertes qui arrivent après sa connexion. Les abonnés précédents figurent toujours dans l'onglet **Historique**.
