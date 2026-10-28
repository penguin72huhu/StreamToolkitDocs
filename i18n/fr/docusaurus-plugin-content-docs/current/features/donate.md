---
sidebar_position: 7
---

# Barre de dons

Affiche sur le stream une barre de progression vers un objectif de dons. Les dons provenant des plateformes que vous choisissez sont automatiquement ajoutés au total.

## URL de la source OBS

```
http://127.0.0.1:7272/donate
```

Copiez l'URL en haut de la page **Réglages de Barre de dons** et ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source).

Utilisez l'interrupteur à côté de **Barre de dons** dans la barre latérale gauche pour afficher ou masquer la barre dans OBS. Lorsqu'il est désactivé, la barre est masquée.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Devise

La barre utilise la **Devise des dons** définie dans la page **Réglages**. Les dons dans d'autres devises sont convertis dans cette devise avant d'être ajoutés. Si la devise d'un don ne peut pas être convertie, il n'est pas ajouté à la barre (Alertes de dons et Tableau des dons l'affichent toujours dans sa devise d'origine).

## Onglet Réglages

### Plateforme d'intégration

Cochez les plateformes dont les dons doivent compter pour la barre :

- **Twitch** — Bits et abonnements
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Un point vert signifie que la plateforme est connectée ; sinon, la ligne affiche **(Non connecté)**. Ces cases déterminent uniquement ce que compte la barre. Elles n'affectent pas Alertes de dons ni Tableau des dons, qui ont leurs propres listes de plateformes.

- **YouTube** : si le chat en direct n'est pas lié, la ligne affiche **URL du chat non renseignée** avec deux boutons : **Connexion auto** (nécessite la connexion Google) et **Saisir manuellement** (qui vous amène au champ d'URL du chat dans les Réglages). Voir [Réglages YouTube](../platforms/youtube-settings).
- **YouTube ⚙️** : choisissez quels **Événements comptés** sont ajoutés à la barre : **Super Chat**, **Super Sticker**, **Nouveau membre**, **Renouvellement d'adhésion**, **Adhésion offerte**, **Joyaux**. **Joyaux** nécessite la connexion Google.
- Si un événement d'adhésion est coché mais qu'aucun prix d'adhésion n'est défini, **⚠ Prix d'adhésion non définis** apparaît. Cliquez dessus pour aller dans les Réglages et saisir les prix des niveaux sous **Réglages de conversion** de YouTube.
- La valeur des Bits et des abonnements Twitch se définit dans Réglages → Twitch → **Réglages de conversion**. Voir [Réglages Twitch](../platforms/twitch).
- Pour connecter PayPal, Stripe, O'Pay ou ECPay, voir [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) et [ECPay](../payments/ecpay).

### Progression actuelle

Affiche le total actuel, l'objectif et le pourcentage.

| Champ | Description |
|-------|-------------|
| **Titre** | Facultatif. Affiché au-dessus de la barre. |
| **Montant cible** | Le montant visé, dans votre devise des dons. |
| **Ajout manuel** | Saisissez un montant et cliquez sur **Ajouter** (ou appuyez sur Entrée) pour l'ajouter au total. |
| **Remettre à zéro** | Remet le total actuel à zéro. Une confirmation s'affiche d'abord. Cette action est irréversible. |

## Onglet Apparence

### Aperçu

L'aperçu affiche la barre avec des montants d'exemple. Utilisez le sélecteur de couleur à côté de **Aperçu** pour changer le fond de l'aperçu. Cochez **Aperçu atteint** pour voir la barre dans son état terminé.

### Police et couleur

Cliquez sur **Réinitialiser** pour restaurer l'apparence par défaut.

- **Police** : définissez la police, la couleur et la taille (8 à 72 px) pour **Titre**, **Montant** et **Pourcentage**.
- **Couleur** : définissez **Fond**, **Barre de progression** (couleur de remplissage) et **Barre atteinte** (couleur de remplissage une fois l'objectif atteint).

### CSS personnalisé

Développez **CSS personnalisé** pour modifier le CSS de la barre. **Réinitialiser** restaure le CSS par défaut, et **Gérer les ressources** ouvre le gestionnaire de ressources pour les images que vous souhaitez utiliser dans votre CSS. Les thèmes Steam Workshop peuvent aussi être appliqués ici. Tant qu'un thème est appliqué, le CSS est en lecture seule jusqu'à ce que vous le restauriez. Voir [Thèmes](./themes).

:::info Version d'essai
Le CSS personnalisé n'est disponible que dans la version complète. Les vraies passerelles de paiement (PayPal / Stripe / O'Pay / ECPay) ainsi que les événements d'adhésion YouTube et les Joyaux ne sont pas utilisables dans la version d'essai, et l'overlay affiche un filigrane. Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::

## Questions fréquentes

**Q : Le total a augmenté après l'envoi d'une alerte de test.**
**Tester la notification** dans la page Réglages compte comme un vrai don : il est donc ajouté à la barre (si cette plateforme est cochée). Après le test, cliquez sur **Remettre à zéro** pour remettre le total à zéro.
