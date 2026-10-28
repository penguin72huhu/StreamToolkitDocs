---
sidebar_position: 8
---

# Alertes de dons

Affiche une alerte avec une image, un son, le nom du donateur, le montant et le message lorsque quelqu'un fait un don.

## URL de la source OBS

```
http://127.0.0.1:7272/donate-alert
```

Copiez l'URL en haut de la page **Réglages de Alertes de dons** et ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source).

:::warning
Les alertes jouent un son. Cochez **Contrôler l'audio via OBS** dans les propriétés de la source de navigateur, sinon le son ne sera pas entendu sur le stream.
:::

Utilisez l'interrupteur à côté de **Alertes de dons** dans la barre latérale gauche pour activer ou désactiver les alertes. Lorsqu'il est désactivé, aucune alerte n'est affichée (alertes de test comprises), mais les dons sont toujours enregistrés dans le [Tableau des dons](./sponsors).

Lorsque plusieurs dons arrivent à peu d'intervalle, les alertes sont mises en file d'attente et affichées l'une après l'autre.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Onglet Réglages

### Plateforme d'intégration

Cochez les plateformes qui doivent déclencher une alerte : **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Un point vert signifie que la plateforme est connectée ; sinon, la ligne affiche **(Non connecté)**. Ces cases ne concernent que les alertes, pas la Barre de dons ni le Tableau des dons.

**Twitch ⚙️** (affiché lorsque Twitch est connecté et coché) :

1. Choisissez **Compter les Bits et les abonnements**, **Compter uniquement les Bits** ou **Compter uniquement les abonnements**
2. **Compter les réabonnements** : indique si les réabonnements déclenchent une alerte (affiché lorsque les abonnements sont comptés)
3. **En dessous de [N] Bits non comptabilisés** : cochez cette option et saisissez un minimum pour que les cheers plus petits ne déclenchent pas d'alerte (affiché lorsque les Bits sont comptés)
4. Cliquez sur **Enregistrer**

**YouTube ⚙️** :

- **Afficher le nom des spectateurs au lieu du @pseudo** : disponible uniquement une fois connecté avec Google.
- **Événements comptés** : **Super Chat**, **Super Sticker**, **Nouveau membre**, **Renouvellement d'adhésion**, **Adhésion offerte**, **Joyaux**. **Joyaux** nécessite la connexion Google.

Si le chat en direct YouTube n'est pas lié, la ligne affiche **URL du chat non renseignée** avec **Connexion auto** (nécessite la connexion Google) et **Saisir manuellement** (qui vous amène au champ d'URL du chat dans les Réglages). Si un événement d'adhésion est coché mais qu'aucun prix d'adhésion n'est défini, cliquez sur **⚠ Prix d'adhésion non définis** pour les définir. Voir [Réglages YouTube](../platforms/youtube-settings).

Pour connecter PayPal, Stripe, O'Pay ou ECPay, voir [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) et [ECPay](../payments/ecpay).

### Réglages

| Champ | Description |
|-------|-------------|
| **Convertir automatiquement dans votre devise** | Activé par défaut. Affiche le montant converti dans la **Devise des dons** définie dans la page Réglages. |
| **Durée d'affichage** | Durée d'affichage de chaque alerte à l'écran, en secondes. Par défaut : 6. |

## Onglet Apparence

### Aperçu

L'aperçu utilise la même page que la source OBS. Utilisez le sélecteur de couleur à côté de **Aperçu** pour changer le fond de l'aperçu, et cliquez sur **▶ Rejouer l’animation** pour rejouer l'animation de l'alerte.

### Style unifié / Indépendant par plateforme

- **Style unifié** : toutes les plateformes utilisent le même style d'alerte.
- **Indépendant par plateforme** : chaque plateforme a son propre style. Choisissez la plateforme avec les boutons ci-dessous (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) et modifiez ses réglages. Au premier basculement, les plateformes que vous n'avez pas personnalisées copient le style unifié actuel, chacune avec sa propre couleur de barre de décompte.

**Réinitialiser** restaure le style par défaut du style que vous modifiez.

### Image

- **Choisir une image** : choisissez une image dans le gestionnaire de ressources. Sans image, un emoji de cœur est affiché. **Effacer** retire l'image.
- **Taille de l'image** : 1 à 400 px.
- **Position de l'image** : **À gauche**, **À droite**, **En haut** ou **En bas**.

### Son

Choisissez un son intégré : **Aucun**, **Carillon** (par défaut), **Pièce**, **Cloche**, **Pop**, **Fanfare**. Cliquez sur **▶** pour l'écouter. Cliquez sur **Choisir un son** pour utiliser votre propre fichier audio depuis le gestionnaire de ressources.

### Affichage du texte

- **Par défaut** : le montant, le nom du donateur et le message sont affichés sur des lignes séparées.
- **Texte personnalisé** : rédigez votre propre ligne. Utilisez `{name}` pour le nom du donateur et `{amount}` pour le montant, par ex. `Merci à {name} pour son don de {amount} !`

### Texte et couleur

- **Texte** : définissez la police, la taille et la couleur pour **Montant**, **Nom du donateur** et **Message** (ainsi que **Texte personnalisé** en mode Texte personnalisé).
- **Couleur** : **Fond**, **Ombre** et **Barre de décompte**.

### CSS personnalisé

Développez **CSS personnalisé** pour modifier le CSS du style que vous modifiez (unifié ou la plateforme sélectionnée). **Réinitialiser** restaure le CSS du modèle, et **Gérer les ressources** ouvre le gestionnaire de ressources. Les thèmes Steam Workshop peuvent aussi être appliqués ici. Tant qu'un thème est appliqué, le CSS est en lecture seule. Voir [Thèmes](./themes).

## Tester les alertes

Dans la page **Réglages**, cliquez sur **Tester la notification** à côté de **Intégration des plateformes de dons** :

1. Remplissez **Nom de test**, **Message de test** et **Montant de test**, puis choisissez une **Plateforme de test**
2. Cliquez sur **Envoyer une notification de test**

La section **Test de Super Chat YouTube** vous permet de saisir une **Chaîne du montant** brute (par ex. `$5.00`, `¥500`, `NT$150`) et de cliquer sur **Envoyer un Super Chat de test** pour tester l'analyse du montant et la conversion de devise.

:::note
Une alerte de test est traitée comme un vrai don : elle est aussi ajoutée à la [Barre de dons](./donate) et au [Tableau des dons](./sponsors) si ces plateformes y sont cochées.
:::

:::info Version d'essai
Le CSS personnalisé n'est disponible que dans la version complète. Les vraies passerelles de paiement (PayPal / Stripe / O'Pay / ECPay) ainsi que les événements d'adhésion YouTube et les Joyaux ne sont pas utilisables dans la version d'essai, et l'alerte affiche un filigrane dans OBS. Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::

## Questions fréquentes

**Q : Pas de son sur le stream ?**
Vérifiez que **Contrôler l'audio via OBS** est coché dans les propriétés de la source de navigateur et que la source n'est pas coupée dans le mélangeur audio d'OBS. Vérifiez aussi que **Son** n'est pas réglé sur **Aucun**.

**Q : J'ai ajouté la source OBS en retard. Va-t-elle rejouer les alertes précédentes ?**
Non. Une source nouvellement ouverte n'affiche que les alertes qui arrivent après sa connexion.
