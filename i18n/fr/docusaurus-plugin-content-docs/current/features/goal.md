---
sidebar_position: 10
---

# Barre d'objectif Twitch

Affichez sur le stream des barres de progression pour vos objectifs Twitch de followers, d'abonnements et de Bits. Chaque type d'objectif a sa propre barre, ses propres réglages et sa propre URL OBS.

:::note Avant de commencer
Les barres d'objectif comptent les événements Twitch : connectez d'abord votre compte Twitch. Voir [Réglages Twitch](../platforms/twitch).
:::

## Étape 1 : Choisir un type d'objectif et ajouter la source OBS

En haut de la page, choisissez un type d'objectif : **Suivi**, **Abonnements** ou **Bits**. L'**URL OBS** sous les boutons change en conséquence. Cliquez sur **Copier** pour la copier.

| Type d'objectif | URL de la source OBS |
|-----------|----------------|
| **Suivi** | `http://127.0.0.1:7272/goal/follow` |
| **Abonnements** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Ajoutez chaque barre que vous souhaitez afficher dans OBS comme source de navigateur distincte. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source). Les barres d'objectif ne jouent aucun son : inutile d'activer « Contrôler l'audio via OBS ».

:::tip
Activez aussi l'interrupteur à côté de **Barre d'objectif Twitch** dans la barre latérale gauche (**Activer l’affichage OBS**). Tant qu'il est désactivé, les barres sont masquées dans OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Étape 2 : Définir l'objectif

Tous les réglages ci-dessous s'appliquent au type d'objectif choisi en haut.

- **Titre** : le texte du titre affiché sur la barre
- **Objectif** : le nombre visé (nombres entiers, 0 ou plus)
- **Progression** : affiche le compte actuel, l'objectif et le pourcentage

### Comment la progression est comptée

| Type d'objectif | Ce qui fait avancer la progression |
|-----------|----------------------|
| **Suivi** | Chaque nouveau suivi ajoute 1. Tant que Twitch est connecté, le compte est aussi synchronisé toutes les 30 secondes avec le nombre total de followers de votre chaîne sur Twitch. Cliquez sur **Synchroniser** pour le synchroniser immédiatement |
| **Abonnements** | Nouveaux abonnements et abonnements offerts (un don de plusieurs abonnements ajoute le nombre d'abonnements offerts). Les réabonnements ne comptent que si **Compter les réabonnements** est activé |
| **Bits** | Chaque cheer ajoute le nombre de Bits envoyés |

### Options d'abonnement

Affichées uniquement pour **Abonnements** :

- **Pondéré par Tier (T1=+1, T2=+2, T3=+6)** : lorsqu'il est activé, les abonnements de niveau supérieur font davantage avancer la progression. Lorsqu'il est désactivé, chaque abonnement ajoute 1
- **Compter les réabonnements** : lorsqu'il est activé, les messages de réabonnement font aussi avancer la progression

### Réinitialiser la progression

**Abonnements** et **Bits** ont un bouton **Réinitialiser la progression**. Cliquez dessus, puis sur **Confirmer la réinitialisation** pour remettre le compte actuel à 0. L'objectif est conservé.

**Suivi** n'a pas de bouton de réinitialisation, car son compte suit le total de vos followers Twitch.

## Étape 3 : Ajuster l'apparence

### Aperçu

L'**Aperçu** en haut affiche la barre du type d'objectif sélectionné. Utilisez la case de couleur à côté pour changer le fond de l'aperçu. Cochez **Aperçu atteint** pour voir à quoi ressemble la barre une fois l'objectif atteint.

### Réglages d'apparence

| Réglage | Description |
|---------|-------------|
| **Couleur de fond** | Fond de la barre |
| **Couleur de la barre de progression** | Couleur de la partie remplie |
| **Couleur une fois atteint** | Couleur de remplissage une fois l'objectif atteint |
| **Texte du titre** | Police, couleur et taille (8 à 72 px) du titre |
| **Texte de l'objectif** | Police, couleur et taille (8 à 72 px) des nombres |
| **Pourcentage** | Police, couleur et taille (8 à 72 px) du pourcentage |

Cliquez sur **Réinitialiser** pour restaurer l'apparence du type d'objectif sélectionné.

### CSS personnalisé

Cliquez sur **CSS personnalisé** pour développer l'éditeur. Chaque type d'objectif a son propre CSS. Utilisez-le pour la mise en page et la structure. Les couleurs, polices et tailles se règlent dans les réglages d'apparence ci-dessus.

- **Réinitialiser** : restaure le CSS par défaut
- **Gérer les ressources** : ouvre le gestionnaire de ressources pour les images utilisées dans votre CSS

Si votre CSS remplace une propriété avec `!important`, le contrôle d'apparence correspondant est verrouillé, car le CSS l'emporterait de toute façon.

:::info Limites de la version d'essai
- **CSS personnalisé** n'est disponible que dans la version complète
- L'overlay OBS affiche un filigrane

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison) pour plus de détails.
:::
