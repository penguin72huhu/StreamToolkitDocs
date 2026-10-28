---
sidebar_position: 12
---

# Horloge

Affichez l'heure actuelle sur le stream, avec la date et le jour de la semaine en option.

## Étape 1 : Ajouter la source OBS

Copiez l'**URL de la source OBS** en haut de la page :

```
http://127.0.0.1:7272/clock
```

Ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source). L'horloge ne joue aucun son : inutile d'activer « Contrôler l'audio via OBS ».

:::tip
Activez aussi l'interrupteur à côté de **Horloge** dans la barre latérale gauche (**Activer l’affichage OBS**). Tant qu'il est désactivé, l'horloge est masquée dans OBS.
:::

## Aperçu

L'**Aperçu** en haut affiche l'overlay OBS réel et se met à jour à mesure que vous modifiez les réglages. Utilisez la case de couleur à côté pour changer le fond de l'aperçu.

Sous l'aperçu se trouvent trois onglets : **Apparence**, **Format de l'horloge** et **Réglages d'affichage**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Apparence

| Réglage | Description |
|---------|-------------|
| **Police** | Police de tout le texte de l'horloge |
| **Disposition** | Agencement de l'heure, de la date et du jour de la semaine : **Stack**, **Horizontal**, **One-Top-Two-Bottom** ou **Two-Top-One-Bottom**. **Interligne** est disponible dans toutes les dispositions sauf **Horizontal**, et **Espacement** dans toutes sauf **Stack** (tous deux de −200 à 200 px) |
| **Ordre** | Faites glisser les blocs **Heure**, **Date** et **Jour de la semaine** pour changer leur ordre |
| **Texte** | Réglez séparément **Heure**, **Date** et **Jour de la semaine** : **Taille de police**, couleur (**Uni**, ou **Dégradé** avec deux couleurs et un **Angle**), ainsi que la couleur, l'**Opacité** et l'**Épaisseur** (0 à 7 px) de la **Bordure** |
| **Ombre** | Couleur de l'ombre, **Opacité**, **Flou** et décalage **X** / **Y**, communs à tout le texte |

Le bouton **Réinitialiser** se trouve en haut de l'onglet.

### CSS personnalisé

Cliquez sur **CSS personnalisé** pour développer l'éditeur. Le CSS par défaut liste, avec des commentaires, les sélecteurs de chaque partie de l'horloge (heure, date, jour de la semaine et leurs conteneurs). Utilisez-le pour la mise en page et la structure. Les couleurs, polices et tailles se règlent dans les réglages d'apparence ci-dessus.

- **Réinitialiser** : restaure le CSS par défaut
- **Gérer les ressources** : ouvre le gestionnaire de ressources pour les images utilisées dans votre CSS

Si votre CSS remplace une propriété avec `!important`, le contrôle d'apparence correspondant est verrouillé, car le CSS l'emporterait de toute façon.

## Format de l'horloge

- **Format horaire** : **24 heures**, ou l'une des deux options 12 heures : **12 heures (AM/PM)** affiche AM/PM, tandis que **12 heures (matin/après-midi)** affiche les indicateurs chinois 上午 / 下午
- **Fuseau horaire** : de UTC−12 à UTC+14. Par défaut, le fuseau horaire correspond à celui de votre ordinateur

## Réglages d'affichage

- **Afficher les secondes**
- **Afficher la date** : lorsqu'elle est activée, choisissez un format de date dans la liste déroulante. Les formats marqués **Sans année** n'affichent pas l'année
  - **Zéro initial pour la date** : affiche les mois et jours à un chiffre avec un zéro devant (par exemple 2026/05/20)
  - **Format de l'année** : affiché pour les formats qui commencent par l'année. **Complet (2026)** ou **Abrégé (26)**

  Ces deux options s'appliquent aux formats numériques (avec `/` ou `-`). Les formats écrits en toutes lettres (par exemple « 20 mai 2026 ») suivent plutôt la langue de l'interface de l'app
- **Afficher le jour de la semaine** : lorsqu'il est activé, choisissez comment le jour est écrit (par exemple **mercredi**, **MER.** ou **mer.**)

:::info Limites de la version d'essai
**CSS personnalisé** n'est disponible que dans la version complète. Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison) pour plus de détails.
:::
