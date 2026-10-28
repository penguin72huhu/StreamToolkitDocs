---
sidebar_position: 5
---

# Media Board

Affichez des images, lisez des vidéos et jouez des effets sonores sur le stream d'un clic ou d'un raccourci.

La page comporte trois onglets : **Image**, **Vidéo** et **Son**. Chaque onglet a sa propre URL de source OBS.

| Onglet | URL de la source OBS | Contrôler l'audio via OBS |
|-----|----------------|-----------------------|
| **Image** | `http://127.0.0.1:7272/imageboard` | Inutile |
| **Vidéo** | `http://127.0.0.1:7272/videoboard` | Obligatoire |
| **Son** | `http://127.0.0.1:7272/soundboard` | Obligatoire |

Cliquez sur **Copier** à côté de chaque URL et ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source). Les vidéos et les sons sont lus dans la source OBS, et non dans Stream Toolkit : vous devez donc activer **Contrôler l'audio via OBS** pour ces deux sources, sinon les spectateurs ne les entendront pas.

:::tip
Activez l'interrupteur à côté de **Media Board** dans la barre latérale gauche (**Activer l’affichage OBS**). Tant qu'il est désactivé, les images ne peuvent pas être affichées et les vidéos et sons ne sont pas lus, que vous utilisiez les boutons ou les raccourcis.
:::

## Commandes communes

Les images, vidéos et sons sont tous présentés sous forme de cartes :

- Cliquez sur une carte pour développer ou réduire ses réglages
- La case à cocher à droite d'une carte : lorsqu'elle est cochée, l'élément apparaît dans les outils de lancement des [Outils rapides](./quick-tools). Les nouveaux éléments sont cochés par défaut
- **✕** supprime l'élément
- Si un fichier local a été déplacé ou supprimé, la carte affiche **Fichier introuvable**

### Raccourcis

Chaque élément peut avoir son propre raccourci :

1. Développez la carte et cliquez sur le bouton du raccourci
2. Appuyez sur la combinaison de touches souhaitée, puis relâchez-la. Appuyez sur **Esc** pour annuler
3. Pour supprimer le raccourci, cliquez sur **Effacer**

Si la combinaison est déjà utilisée par une autre fonctionnalité, elle n'est pas enregistrée et le bouton affiche un message de conflit. Le raccourci fonctionne même lorsque Stream Toolkit n'est pas la fenêtre active. Tous les raccourcis sont aussi listés dans la page [Raccourcis](./hotkeys).

## Image

{/* TODO: 截圖 — 圖片分頁 */}

### Ajouter une image

1. Cliquez sur **Ajouter une image**
2. Choisissez un fichier (jpg, jpeg, png ou gif). Le nom du fichier devient le nom de l'image

En développant la carte, vous voyez une miniature et ces réglages :

- **Nom** : le nom de l'image
- **Chemin du fichier** : cliquez sur **Rechoisir** pour choisir un autre fichier
- **Raccourci** : appuyez une fois pour afficher l'image, appuyez de nouveau pour la masquer
- **Définir la position et la taille** : voir ci-dessous
- **Supprimer l'image** : supprime l'image

### Afficher et masquer

Cliquez sur le bouton **○** d'une carte pour afficher l'image dans OBS. Il devient **◉**. Cliquez de nouveau pour masquer l'image.

### Réglages d'affichage

**Autoriser l'affichage de plusieurs images à la fois** est désactivé par défaut. Tant qu'il est désactivé, afficher une image masque celle actuellement affichée. Activez-le pour afficher plusieurs images en même temps.

### Définir la position et la taille

- **Position X** / **Position Y** : en px. 0/0 correspond au centre de la source. Les valeurs positives déplacent vers la droite/le bas, les valeurs négatives vers la gauche/le haut
- **Largeur** / **Hauteur** : en % de la taille d'origine. 100 = taille d'origine. Le bouton 🔗 verrouille les proportions (activé par défaut). Cliquez dessus pour redimensionner librement
- Tant que l'image est affichée, les modifications sont prévisualisées en direct dans OBS
- **Enregistrer** conserve les modifications, **Réinitialiser** revient aux valeurs présentes à l'ouverture de la fenêtre, **Annuler** ferme sans enregistrer

## Vidéo

{/* TODO: 截圖 — 影片分頁 */}

Cliquez sur **Ajouter une vidéo** pour ajouter une carte, puis développez-la :

- **Nom de la vidéo** : le nom affiché sur la carte
- **Source** : **YouTube** ou **Local**
  - **YouTube** : collez le lien de la vidéo dans **URL YouTube**. Cliquez sur **Tester l'analyse** pour le vérifier. En cas de succès, « Analysé, appliqué automatiquement à la lecture » s'affiche
  - **Local** : cliquez sur **Choisir un fichier** pour choisir un fichier mp4, webm ou ogg. La taille est limitée à 200MB, et plus le fichier est gros, plus la latence est importante. Pour un fond transparent, utilisez une vidéo WebM (VP9 Alpha)
- **Lecture en boucle** : répète la vidéo
- **Durée de lecture** : définissez **De** et **À** (heures, minutes, secondes, ms). Laissez **À** sur 00:00 pour lire jusqu'à la fin
- **Volume** : 0 à 100 %
- **Raccourci** : appuyez dessus pour lire la vidéo. Appuyez de nouveau pendant la lecture pour l'arrêter
- **Définir la position et la taille** : les mêmes champs de position et de taille que pour les images. Cliquez sur **Aperçu en boucle** pour lire la vidéo en boucle dans OBS pendant que vous l'ajustez, et sur **Arrêter l'aperçu** pour l'arrêter. Cliquez sur **Enregistrer** ou **Annuler** une fois terminé

Cliquez sur **▶** sur une carte pour lire la vidéo dans OBS. Cliquez sur **■** pour l'arrêter.

## Son

{/* TODO: 截圖 — 音效分頁 */}

Cliquez sur **Ajouter un son** pour ajouter une carte, puis développez-la :

- **Nom du son** : le nom affiché sur la carte
- **Source** : **URL YouTube** ou **Fichier local**
  - **URL YouTube** : collez le lien et cliquez sur **Tester l'analyse** pour le vérifier
  - **Fichier local** : cliquez sur **Choisir un fichier** pour choisir un fichier mp3, wav, ogg, flac, m4a, aac ou opus
- **Durée de lecture** : définissez **De** et **À**. Laissez **À** sur 00:00 pour lire jusqu'à la fin
- **Volume** : 0 à 100 %
- **Raccourci** : appuyez dessus pour jouer le son

Cliquez sur **▶** sur une carte pour jouer le son dans OBS. Cliquez sur **■** pour l'arrêter. Un seul son est joué à la fois. Lancer un autre son arrête le son en cours.

:::info Limites de la version d'essai
- Vous ne pouvez ajouter que **1** image, **1** vidéo et **1** son
- Les overlays d'image et de vidéo affichent un filigrane

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison) pour plus de détails.
:::

## Questions fréquentes

**Q : Les vidéos ou les sons sont lus, mais il n'y a pas de son sur le stream.**
Vérifiez que **Contrôler l'audio via OBS** est coché pour les sources `/videoboard` et `/soundboard`, et que les sources ne sont pas coupées dans le mélangeur audio d'OBS.

**Q : Je ne peux pas choisir mon fichier vidéo.**
Seuls les fichiers mp4, webm et ogg peuvent être choisis, jusqu'à 200MB. Si un fichier est plus volumineux, un message indique la limite et le fichier n'est pas ajouté.
