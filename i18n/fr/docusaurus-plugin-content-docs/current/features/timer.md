---
sidebar_position: 11
---

# Minuteur

Affichez des comptes à rebours ou des chronomètres sur le stream. Un compte à rebours peut gagner ou perdre du temps via des boutons sur lesquels vous cliquez, ou automatiquement grâce aux suivis, abonnements et Bits Twitch et aux dons.

La page comporte deux onglets : **Réglages** et **Créer un minuteur**. Créez d'abord un minuteur, puis contrôlez-le depuis **Réglages**.

## Étape 1 : Créer un minuteur

1. Ouvrez **Minuteur** dans la barre latérale gauche et passez à l'onglet **Créer un minuteur**
2. Sous **Mes minuteurs**, cliquez sur **Ajouter**. Un nouveau compte à rebours est créé avec un temps initial de 10 minutes et trois options de temps (+30 s, +1 min, +5 min)
3. Cliquez sur la carte d'un minuteur pour le modifier. Cliquez sur le **✕** d'une carte pour supprimer ce minuteur

L'**Aperçu** montre l'apparence du minuteur sélectionné. Utilisez la case de couleur à côté pour changer le fond de l'aperçu.

Sous l'aperçu, basculez entre **Réglages du minuteur** et **Apparence**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Étape 2 : Réglages du minuteur

### Mode de chronométrage

- **Compte à rebours** : décompte à partir du temps initial
- **Chronomètre** : compte à partir de 0 et peut enregistrer des tours. Le mode chronomètre n'a ni temps initial, ni temps d'alerte, ni son de fin, ni options de temps

### Nom

Le nom affiché dans la liste des minuteurs, les listes déroulantes et les Outils rapides.

### Temps initial

Le temps de départ du compte à rebours, en heures, minutes et secondes. Le total en secondes est affiché à côté.

### Temps d'alerte

Lorsque le temps restant atteint cette valeur, le texte du minuteur passe à la couleur **Alerte** définie sous **Apparence**. Laissez 0 pour aucune alerte.

### Son de fin du compte à rebours

Le son joué lorsque le compte à rebours atteint 0. Choisissez **Aucun** ou l'un des sons intégrés (**Carillon**, **Pièce**, **Cloche**, **Pop**, **Fanfare**). Cliquez sur **▶** pour l'essayer. Pour utiliser votre propre fichier, cliquez sur **Choisir un son** et choisissez-en un dans le gestionnaire de ressources.

Le son est joué par la source de navigateur OBS : activez donc **Contrôler l'audio via OBS** pour la source du minuteur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source).

### Options de temps

Les options de temps sont les boutons d'ajout/retrait de temps d'un compte à rebours. Chaque minuteur peut en avoir jusqu'à 20.

Pour en ajouter une, remplissez le formulaire **Ajouter une option de temps** :

1. **Source de déclenchement** : choisissez ce qui applique automatiquement cette option
   - **Manuel** : appliquée uniquement lorsque vous cliquez sur le bouton
   - **Suivi** : appliquée à chaque nouveau suivi Twitch
   - **Twitch Bits** : appliquée lors des cheers de Bits
   - **Nouvel abonnement Twitch** : appliquée lors des abonnements Twitch
   - **Don** : appliquée lors des dons. Utilisez **Plateforme de dons** pour choisir lesquels parmi **YouTube**, **O'Pay**, **ECPay** et **PayPal** comptent
2. Pour **Twitch Bits** et **Don**, définissez aussi :
   - **Seuil de déclenchement** : le nombre de Bits ou le montant de don correspondant à un palier
   - **Mode de conversion** : **Déclenchement par multiples entiers** ou **Conversion proportionnelle** (voir l'exemple ci-dessous)
3. **Ajouter du temps** : choisissez **＋** ou **－**, puis définissez les heures, minutes et secondes
4. Cliquez sur **Ajouter**

Pour modifier une option, cliquez sur son bouton **Modifier**, modifiez le formulaire, puis cliquez sur **Enregistrer** (ou **Annuler**). Cliquez sur **✕** pour la supprimer. Les options avec un déclenchement automatique sont marquées de 🔗 et du nom du déclencheur.

**Exemple de conversion** : Seuil de déclenchement 100 bits, Ajouter du temps +1 min, et un spectateur envoie 250 bits :

- **Déclenchement par multiples entiers** : seuls les multiples entiers du seuil comptent → 2 × 1 min = **+2 min**
- **Conversion proportionnelle** : 250 ÷ 100 × 1 min → **+2 min 30 s**

Pour les dons, le montant est converti dans la devise sélectionnée dans les Réglages de l'app avant d'être comparé au seuil.

:::note
- Les déclenchements automatiques n'affectent que les comptes à rebours
- Les options de temps avec un déclenchement automatique apparaissent toujours sous forme de boutons dans le panneau de contrôle : vous pouvez donc aussi cliquer dessus manuellement
- **Nouvel abonnement Twitch** s'applique une fois par événement d'abonnement : un don de plusieurs abonnements l'applique une seule fois. Les réabonnements ne l'appliquent que si **Compter les réabonnements** est activé dans [Barre d'objectif Twitch](./goal)
:::

### Raccourcis de contrôle

Définissez des raccourcis clavier pour ce minuteur :

- **Démarrer / Pause**
- **Raccourci de tour** (chronomètre uniquement)
- **Raccourci de réinitialisation**

Voir aussi [Raccourcis](./hotkeys).

## Étape 3 : Apparence

| Réglage | Description |
|---------|-------------|
| **Police** | Police du texte du temps |
| **Taille de police** | 12 à 300 px |
| **Couleur du texte** | **Normal** : **Uni** ou **Dégradé** (deux couleurs et un **Angle**). **Alerte** (compte à rebours uniquement) : la couleur utilisée une fois le temps d'alerte atteint |
| **Couleur de fond** | Fond derrière le temps |
| **Bordure** | Couleur du contour, **Opacité** et **Épaisseur** (0 à 20 px) |
| **Ombre** | Couleur de l'ombre, **Opacité**, **Flou** et décalage **X** / **Y** |

## Étape 4 : Choisir un mode d'affichage et ajouter la source OBS

Passez à l'onglet **Réglages**. Sous **Panneau de contrôle**, choisissez un **Mode d'affichage** :

| Mode | Description | URL de la source OBS |
|------|-------------|----------------|
| **Minuteur unique** | OBS n'affiche que le minuteur sélectionné. Changez de minuteur avec la liste déroulante **Minuteur actuel** | `http://127.0.0.1:7272/timer` |
| **Plusieurs minuteurs** | Chaque minuteur a sa propre URL et peut être ajouté séparément dans OBS | `http://127.0.0.1:7272/timer/<timer ID>` |

En mode **Plusieurs minuteurs**, choisissez des minuteurs dans **Ajouter à l'affichage**. Chaque minuteur ajouté obtient sa propre carte avec son **URL de la source OBS**. Cliquez sur **Copier** pour la copier. Cliquez sur **✕** sur une carte pour la retirer de l'affichage.

Ajoutez l'URL copiée dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source).

:::tip
Activez aussi l'interrupteur à côté de **Minuteur** dans la barre latérale gauche (**Activer l’affichage OBS**). Tant qu'il est désactivé, le minuteur est masqué dans OBS.
:::

## Étape 5 : Contrôler le minuteur

Chaque carte de minuteur de l'onglet **Réglages** comporte :

- **Démarrer** / **Pause** : pour un chronomètre, le bouton pause affiche **Arrêter**. Un compte à rebours arrivé à 0 ne peut pas être redémarré tant que vous ne l'avez pas réinitialisé ou que vous n'avez pas ajouté de temps
- **Tour** (chronomètre uniquement) : enregistre un tour pendant le fonctionnement. Les tours sont listés sous la carte avec le temps et l'écart par rapport au tour précédent
- **Réinitialiser** : arrête le minuteur et le ramène au temps initial (0 pour un chronomètre), en effaçant les tours
- **Ajouter du temps** (compte à rebours uniquement) : un bouton pour chaque option de temps

Le temps en cours n'est affiché que dans l'overlay OBS, pas dans la page de réglages. Vous pouvez aussi contrôler les minuteurs depuis la fenêtre [Outils rapides](./quick-tools), qui affiche également le temps actuel.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Limites de la version d'essai
Vous ne pouvez créer que **1** minuteur. Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison) pour plus de détails.
:::
