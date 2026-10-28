---
sidebar_position: 19
---

# Réglages

Cliquez sur **⚙️ Réglages** en bas du menu de gauche. Cette page regroupe les options globales de l'app, les connexions aux plateformes et les passerelles de paiement des dons.

## Général

| Option | Effet | Par défaut |
|------|------|------|
| **Thème** | Mode d'affichage de l'interface : **Gris sombre** ou **Clair** | Gris sombre |
| **Langue** | Langue de l'interface ; change immédiatement | — |
| **Réduire dans la barre des tâches en cliquant sur X** | Fermer la fenêtre la réduit dans la zone de notification au lieu de quitter | Activé |
| **Devise des dons** | Devise globale, utilisée par la barre de dons, les alertes et tous les autres affichages de montants | Définie au premier lancement selon la langue du système (par ex. chinois traditionnel (Taïwan) → TWD, japonais → JPY, autres → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Connexion des plateformes

### Twitch

Cliquez sur **Connecter le compte** et autorisez l'accès dans le navigateur. Une fois connecté, **Connecté à @votre-nom** s'affiche avec un bouton **Déconnecter**. Étapes complètes : [Réglages Twitch](../platforms/twitch).

Après la connexion, **▸ Réglages de conversion** définit la valeur des Bits et des abonnements dans votre devise des dons :

- **Partage des revenus** : **50 / 50** ou **70 / 30**
- **Pour 100 Bits**, **Abonnement Tier 1**, **Abonnement Tier 2**, **Abonnement Tier 3**
- **Enregistrer** enregistre les valeurs pour la devise actuelle ; **Réinitialiser** remplit les valeurs intégrées pour cette devise

### YouTube

1. Cliquez sur **Connecter le compte** et connectez-vous avec Google. Étape par étape : [Réglages YouTube](../platforms/youtube-settings)
2. Une fois connecté, **Connecté : nom de la chaîne** s'affiche. **Déconnecter** dissocie le compte
3. Choisissez comment trouver le chat en direct :
   - **Détecter le direct en cours** : nécessite la connexion Google. Cliquez sur **Connecter** pour rechercher sur votre chaîne le stream en cours ou à venir. S'il y en a plusieurs, choisissez-en un dans la liste
   - **Saisir une URL manuellement** : collez l'**URL du chat**
4. **Demander l'URL du chat à chaque démarrage du programme** : facultatif

**▸ Réglages de conversion** sous YouTube définit la valeur des adhésions (YouTube n'envoie pas de montant pour les adhésions) :

- **Paramètres des niveaux d’abonnement** : ajoutez le nom de chaque niveau et sa valeur. Les noms de niveau doivent correspondre exactement à ceux de votre chaîne YouTube
- **Niveaux non listés** : valeur utilisée pour un niveau absent du tableau
- **Niveau des adhésions offertes** : le niveau auquel correspondent les adhésions offertes
- Les niveaux rencontrés dans des événements mais absents du tableau sont listés avec **Ajouter au tableau** / **Ignorer**

## Intégration des plateformes de dons

Cliquez sur une passerelle pour la développer. Chacune dispose d'un lien **Tutoriel ici** vers son guide de configuration :

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Tester la notification

Le bouton **Tester la notification** à côté du titre ouvre une fenêtre de test :

- Remplissez **Nom de test**, **Message de test**, **Montant de test**, choisissez la **Plateforme de test**, puis cliquez sur **Envoyer une notification de test**
- **Test de Super Chat YouTube** : saisissez une **Chaîne du montant** comme `$5.00` ou `NT$150` et cliquez sur **Envoyer un Super Chat de test** pour tester l'analyse du montant et la conversion de devise

## À propos

Cliquez sur le bouton **i** à côté de « Stream Toolkit » en haut du menu de gauche pour voir la version, l'auteur et un lien vers la documentation officielle.

:::info Limites de la version d'essai
- **Intégration des plateformes de dons** n'est disponible que dans la version complète
- Les **Réglages de conversion** des adhésions YouTube ne sont disponibles que dans la version complète

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::
