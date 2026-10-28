---
sidebar_position: 9
---

# Tableau des dons

Affiche sur le stream une liste des dons récents : icône de la plateforme, nom du donateur, montant et message.

## URL de la source OBS

```
http://127.0.0.1:7272/sponsors
```

Copiez l'URL en haut de la page **Réglages de Tableau des dons** et ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source).

Utilisez l'interrupteur à côté de **Tableau des dons** dans la barre latérale gauche pour afficher ou masquer le tableau dans OBS. Lorsqu'il est désactivé, le tableau disparaît en fondu. Les dons sont toujours enregistrés lorsqu'il est désactivé.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Onglet Réglages

### Plateforme d'intégration

Cochez les plateformes dont les dons doivent être enregistrés : **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Un point vert signifie que la plateforme est connectée ; sinon, la ligne affiche **(Non connecté)**. Ces cases ne concernent que le tableau, pas la Barre de dons ni les Alertes de dons.

**Twitch ⚙️** (affiché lorsque Twitch est connecté et coché) :

1. Choisissez **Compter les Bits et les abonnements**, **Compter uniquement les Bits** ou **Compter uniquement les abonnements**
2. **Compter les réabonnements** : indique si les réabonnements sont enregistrés (affiché lorsque les abonnements sont comptés)
3. **En dessous de [N] Bits non comptabilisés** : cochez cette option et saisissez un minimum pour que les cheers plus petits ne soient pas enregistrés (affiché lorsque les Bits sont comptés)
4. Cliquez sur **Enregistrer**

**YouTube ⚙️** :

- **Afficher le nom des spectateurs au lieu du @pseudo** : disponible uniquement une fois connecté avec Google.
- **Événements comptés** : **Super Chat**, **Super Sticker**, **Nouveau membre**, **Renouvellement d'adhésion**, **Adhésion offerte**, **Joyaux**. **Joyaux** nécessite la connexion Google. Les cadeaux en Joyaux sont affichés avec une icône de joyau et le nombre de joyaux au lieu d'un montant en argent.

Si le chat en direct YouTube n'est pas lié, la ligne affiche **URL du chat non renseignée** avec **Connexion auto** (nécessite la connexion Google) et **Saisir manuellement** (qui vous amène au champ d'URL du chat dans les Réglages). Si un événement d'adhésion est coché mais qu'aucun prix d'adhésion n'est défini, cliquez sur **⚠ Prix d'adhésion non définis** pour les définir. Voir [Réglages YouTube](../platforms/youtube-settings).

Pour connecter PayPal, Stripe, O'Pay ou ECPay, voir [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) et [ECPay](../payments/ecpay).

### Réglages

| Champ | Description |
|-------|-------------|
| **Convertir automatiquement dans votre devise** | Activé par défaut. Affiche les montants convertis dans la **Devise des dons** définie dans la page Réglages. |
| **Affichage maximal** | Nombre d'entrées à conserver (1 à 100). Par défaut : 20. Lorsqu'un nouveau don arrive au-delà de cette limite, l'entrée la plus ancienne est supprimée. |

## Onglet Apparence

### Aperçu

Utilisez le sélecteur de couleur à côté de **Aperçu** pour changer le fond de l'aperçu. Cliquez sur **Tester l'animation d'ajout** pour jouer l'animation d'apparition avec une entrée d'exemple. L'exemple n'est pas enregistré dans l'historique.

Cliquez sur **Réinitialiser** pour restaurer l'apparence par défaut.

### Réglages d'affichage

- **Afficher l'icône de plateforme** : affiche l'icône de la plateforme sur chaque entrée.
- **Sens d'apparition** : **De haut en bas** (par défaut), **De bas en haut**, **De gauche à droite** ou **De droite à gauche**.

### Police

Définissez la police, la couleur et la taille (8 à 72 px) pour **Titre** (nom du donateur), **Corps du texte** (message) et **Montant**.

### Couleur de fond

- **Par défaut** : couleur de fond de toutes les entrées.
- **+ Ajouter une plage** : ajoute une couleur avec une plage de **Montant** (**Minimum** ~ **Maximum**). Les entrées dont le montant se situe dans la plage utilisent cette couleur à la place. Laissez Minimum ou Maximum vide pour ne pas fixer de limite de ce côté. Cliquez sur **✕** pour supprimer une plage.

Lorsque **Convertir automatiquement dans votre devise** est activé, la plage est comparée au montant converti.

### CSS personnalisé

Développez **CSS personnalisé** pour modifier le CSS du tableau. **Réinitialiser** restaure le CSS par défaut, et **Gérer les ressources** ouvre le gestionnaire de ressources. Les thèmes Steam Workshop peuvent aussi être appliqués ici. Tant qu'un thème est appliqué, le CSS est en lecture seule. Voir [Thèmes](./themes).

## Onglet Historique

### Ajout manuel (pour test)

Choisissez une plateforme, saisissez **Nom**, **Montant** et éventuellement **Message (facultatif)**, puis cliquez sur **Ajouter**. L'entrée n'est ajoutée que si cette plateforme est cochée sous **Plateforme d'intégration**. Le montant est considéré comme étant dans votre devise des dons.

### Historique

Liste les entrées enregistrées avec leur nombre.

- Cliquez sur **🗑** puis sur **Confirmer la suppression** pour supprimer une entrée.
- Cliquez sur **Vider** pour supprimer toutes les entrées. Une confirmation s'affiche d'abord. Cette action est irréversible.

:::info Version d'essai
Le CSS personnalisé n'est disponible que dans la version complète. Les vraies passerelles de paiement (PayPal / Stripe / O'Pay / ECPay) ainsi que les événements d'adhésion YouTube et les Joyaux ne sont pas utilisables dans la version d'essai, et le tableau affiche un filigrane dans OBS. Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::

## Questions fréquentes

**Q : Les alertes de test apparaissent dans le tableau.**
**Tester la notification** dans la page Réglages est traité comme un vrai don : il est donc aussi enregistré ici si cette plateforme est cochée. Supprimez-le dans l'onglet **Historique**.
