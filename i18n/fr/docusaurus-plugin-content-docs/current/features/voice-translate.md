---
sidebar_position: 4
---

# Traduction vocale

Maintenez un raccourci et parlez. Stream Toolkit transforme votre parole en texte, la traduit et affiche les deux lignes sous forme de sous-titres dans OBS.

La reconnaissance vocale s'exécute sur votre propre ordinateur avec un modèle Whisper. Le texte est ensuite traduit avec MyMemory.

La page comporte deux onglets : **Réglages** et **Apparence**.

## Étape 1 : Ajouter la source OBS

L'URL de la source OBS est affichée en haut de la page :

```
http://127.0.0.1:7272/voice-translate
```

Cliquez sur **Copier** et ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source). Traduction vocale ne joue aucun son : inutile d'activer « Contrôler l'audio via OBS ».

Les sous-titres apparaissent en bas de la source : le texte d'origine en haut et la traduction en dessous. Ils disparaissent en fondu après la **Durée d'affichage des sous-titres**.

:::tip
Activez l'interrupteur à côté de **Traduction vocale** dans la barre latérale gauche (**Activer l’affichage OBS**). Le raccourci ne fonctionne que lorsqu'il est activé.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Étape 2 : Définir le raccourci

Sous **Raccourci (maintenir pour enregistrer, relâcher pour reconnaître)** :

1. Cliquez sur **Cliquez pour définir un raccourci**
2. Appuyez sur la combinaison de touches souhaitée, puis relâchez-la. Appuyez sur **Esc** pour annuler
3. Pour supprimer le raccourci, cliquez sur **Effacer**

Si la combinaison est déjà utilisée par une autre fonctionnalité, le bouton affiche **Conflit de raccourci** et le raccourci n'est pas enregistré.

Le raccourci fonctionne même lorsque Stream Toolkit n'est pas la fenêtre active. **Maintenez-le** pendant que vous parlez, puis **relâchez-le** pour lancer la reconnaissance et la traduction. Un enregistrement s'arrête automatiquement au bout de 15 secondes.

Vous pouvez aussi maintenir le bouton **REC** sous le raccourci avec la souris. Il fonctionne de la même façon : appuyez pour enregistrer, relâchez pour traduire. La fenêtre [Outils rapides](./quick-tools) dispose du même bouton **REC**.

## Étape 3 : Réglages de reconnaissance

| Champ | Description |
|-------|-------------|
| **État du modèle** | Affiche **Chargement xx %**, **Prêt** ou **Échec du chargement du modèle**. Vous pouvez enregistrer une fois **Prêt** affiché |
| **Modèle Whisper** | **Tiny (le plus rapide, env. 40 Mo)**, **Base (recommandé, env. 75 Mo)** (par défaut) ou **Small (le plus précis, env. 245 Mo)**. Le modèle est téléchargé lors de sa première utilisation. Changer de modèle le recharge |
| **Langue de la parole** | La langue que vous parlez. Par défaut : chinois traditionnel |
| **Microphone** | Le microphone utilisé pour l'enregistrement. **Par défaut du système** utilise le périphérique d'entrée par défaut de Windows |

## Étape 4 : Réglages de traduction

| Champ | Description |
|-------|-------------|
| **Durée d'affichage des sous-titres** | Durée d'affichage des sous-titres à l'écran, de 1 à 30 secondes. Par défaut : 5 |
| **Langue cible** | La langue de traduction. Par défaut : anglais |
| **Utiliser la traduction Whisper quand la langue cible est l'anglais** | Lorsque la langue cible est l'anglais, Whisper traduit à la place de MyMemory. (Gratuit et sans quota, mais latence plus élevée.) Sans effet pour les autres langues cibles |
| **Service de traduction** | MyMemory |

### E-mail (facultatif)

MyMemory est gratuit. Son quota quotidien dépend de la saisie d'un e-mail :

- Sans e-mail : 5 000 caractères/jour
- Avec e-mail : 50 000 caractères/jour (gratuit, sans inscription sur MyMemory)

Saisissez votre e-mail et cliquez sur **Enregistrer**. Cet e-mail est **Partagé avec la traduction du chat**.

La barre en dessous affiche **Utilisé aujourd'hui (approx., réinitialisé chaque jour à 08:00 UTC)**. Lorsque le quota est épuisé, elle affiche **Quota épuisé**.

## Étape 5 : Apparence

Dans l'onglet **Apparence**, vous pouvez modifier l'apparence des sous-titres. Les modifications sont enregistrées immédiatement.

- **Aperçu** : affiche des sous-titres d'exemple. La case de couleur à côté ne change que le fond de l'aperçu
- **Alignement** : **À gauche** (par défaut), **Au centre** ou **À droite**
- **Police** : une ligne pour **Langue d'origine** (le texte d'origine) et une pour **Langue cible** (la traduction). Chaque ligne a une police, une couleur et une taille (8 à 120 px). Par défaut : 14 px pour l'original et 22 px pour la traduction
- **Ombre** : la couleur de l'ombre du texte
- **Réinitialiser** : restaure l'apparence par défaut

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Limites de la version d'essai
La **Langue cible** est fixée sur l'anglais. La page affiche « La version Démo ne prend en charge que la traduction vers l'anglais ».

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison) pour plus de détails.
:::

## Questions fréquentes

**Q : Je maintiens le raccourci mais rien ne se passe.**
Vérifiez que l'interrupteur à côté de **Traduction vocale** dans la barre latérale gauche est activé, et que **État du modèle** affiche **Prêt**.

**Q : L'enregistrement fonctionne, mais aucun sous-titre n'apparaît dans OBS.**
Si MyMemory ne peut pas traduire (par exemple parce que le quota quotidien est épuisé), aucun sous-titre n'est affiché. Vérifiez la barre **Utilisé aujourd'hui**. Saisir un e-mail augmente le quota. Si votre langue cible est l'anglais, vous pouvez aussi activer **Utiliser la traduction Whisper quand la langue cible est l'anglais**, qui n'a pas de quota.
