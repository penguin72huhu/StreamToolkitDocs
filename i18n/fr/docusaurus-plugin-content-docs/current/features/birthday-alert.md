---
sidebar_position: 8.2
---

# Anniversaires des viewers

Ajoutez les anniversaires de vos spectateurs à une liste. Lorsqu'un spectateur de la liste écrit dans le chat pendant votre stream le jour de son anniversaire ou peu après, une alerte d'anniversaire apparaît à l'écran. Chaque spectateur reçoit une alerte par anniversaire.

## URL de la source OBS

```
http://127.0.0.1:7272/birthday-alert
```

Copiez l'URL en haut de la page **Réglages de Anniversaires des viewers** et ajoutez-la dans OBS comme source de navigateur. Voir [Comment ajouter des sources dans OBS](../getting-started/obs-source).

:::warning
Les alertes jouent un son. Cochez **Contrôler l'audio via OBS** dans les propriétés de la source de navigateur, sinon le son ne sera pas entendu sur le stream.
:::

Activez l'interrupteur à côté de **Anniversaires des viewers** dans la barre latérale gauche. L'app ne se connecte au chat et ne vérifie les anniversaires que lorsqu'il est activé. Les boutons **Tester l’alerte** et **Rejouer** fonctionnent même lorsqu'il est désactivé.

La page comporte trois onglets : **Réglages**, **Viewers** et **Apparence**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Fonctionnement

- Un spectateur de la liste qui écrit dans le chat entre son anniversaire et le nombre de jours suivants que vous avez défini reçoit une alerte. Rien ne s'affiche avant l'anniversaire.
- Chaque spectateur reçoit une alerte par anniversaire. Un anniversaire le 12/28 annoncé le 1/2 compte toujours comme l'anniversaire de l'année précédente.
- Les alertes ne se déclenchent que lorsque la plateforme sur laquelle le spectateur a écrit est en direct. Lorsque vous êtes hors ligne, ou tant que l'app ne sait pas encore si vous êtes en direct, écrire dans le chat ne déclenche ni n'enregistre l'alerte ; elle s'affiche la prochaine fois qu'il écrit pendant un stream.
- L'historique du chat chargé lors de la connexion au chat YouTube n'est pas pris en compte : redémarrer l'app n'annoncera donc pas les personnes qui ont écrit pendant qu'elle était fermée.
- Un anniversaire le 2/29 tombe le 2/28 les années non bissextiles.

## Onglet Réglages

### Connexion au chat

Affiché lorsque la fonctionnalité est activée. Chaque plateforme indique si son chat est connecté :

- **Twitch** : si aucune chaîne n'est définie, la ligne affiche **Aucune chaîne Twitch définie — liez d’abord Twitch** avec **Aller aux paramètres**. Connectez d'abord Twitch : [Réglages Twitch](../platforms/twitch).
- **YouTube** : si le chat n'est pas connecté, la ligne affiche **Connexion auto** et **Saisir manuellement** (qui vous amène au champ d'URL du chat dans les Réglages). Si vous utilisez la connexion automatique et êtes connecté avec Google, elle affiche **S’il ne se connecte pas une fois en live, cliquez sur Connecter dans la page Chat**. Voir [Réglages YouTube](../platforms/youtube-settings) et [Chat](./chat).

Une fois une plateforme connectée, elle affiche aussi **En direct**, **Hors ligne** ou **Statut du live inconnu**. Les alertes ne se déclenchent qu'en **En direct**.

### Réglages

| Champ | Description |
|-------|-------------|
| **Jours après l’anniversaire qui comptent encore** | 0 à 30. Par défaut : 7. 0 = le jour de l'anniversaire uniquement. |
| **Durée d'affichage** | Durée d'affichage de chaque alerte à l'écran, en secondes (1 à 60). Par défaut : 6. |

### Tester les alertes

Cliquez sur **Tester l’alerte** pour envoyer une alerte d'exemple à OBS, avec un spectateur de test et la date du jour. Elle n'est affichée que dans OBS, n'est jamais enregistrée et fonctionne même avec l'interrupteur de la barre latérale gauche désactivé. Le bouton affiche brièvement **Envoyé**.

## Onglet Viewers

### Ajouter un spectateur

Il y a deux façons d'ajouter un spectateur :

- **+ Ajouter depuis les participants récents** : choisissez quelqu'un qui a écrit récemment. Le formulaire s'ouvre avec son nom comme note, son compte déjà associé et la date du jour comme anniversaire.
- **+ Ajouter par nom** : saisissez vous-même le nom du compte.

**Participants récents du chat** liste les spectateurs qui ont écrit pendant que le chat était connecté (jusqu'à 200, conservés 30 jours). Cliquez sur **Actualiser** pour mettre la liste à jour. Les spectateurs déjà dans la liste affichent **Ajouté** et ne peuvent pas être choisis de nouveau. Une zone de recherche apparaît lorsque la liste est longue.

Remplissez le formulaire :

1. **Note / surnom** : le nom sous lequel vous le connaissez, par ex. `Alex`. Facultatif.
2. **Anniversaire** : mois et jour (sans l'année).
3. **Comptes** : au moins un compte. Un spectateur peut avoir plusieurs comptes, par ex. Twitch et YouTube.
   - **＋ Saisir un compte** : choisissez **Twitch** ou **YouTube** et saisissez le nom. Pour Twitch, utilisez l'identifiant ou le nom affiché ; pour YouTube, l'@identifiant ou le nom de chaîne.
   - **＋ Parmi les participants récents** : ajoutez un compte déjà associé.
   - **✕** retire un compte.
4. Cliquez sur **Enregistrer** (ou appuyez sur Entrée). **Annuler** (ou Échap) ferme le formulaire.

### Noms saisis et association

Un nom saisi est associé au compte la première fois que ce spectateur écrit dans le chat. La correspondance ignore les majuscules/minuscules et un `@` initial. Les noms peuvent se répéter : choisir parmi les participants récents est donc plus sûr.

Pour YouTube, saisissez l'@identifiant : si **Afficher le nom des spectateurs au lieu du @pseudo** n'est pas activé dans la page Chat, un nom de chaîne risque de ne jamais correspondre.

Chaque compte de la liste affiche :

- **Associé : [nom]** : le compte est associé.
- **En attente de « [nom] » dans le chat** : un nom saisi qui n'est pas encore associé.
- **Nouvellement associé** : l'app a associé ce compte automatiquement lorsque le spectateur a écrit. Vérifiez que c'est bien lui, puis cliquez sur **✓ C’est bien lui**, ou sur **Dissocier** si ce n'est pas le cas.
- **Ce compte est déjà sur « [nom] »** : le nom saisi correspond à un compte qui appartient à un autre spectateur de la liste. Un compte ne peut appartenir qu'à un seul spectateur : modifiez le nom ici ou supprimez l'un des deux.

**Dissocier** ouvre une zone sous le compte. Après la dissociation, c'est le nom de cette zone qui est recherché (vous pouvez le modifier), et le compte est réassocié la prochaine fois que ce spectateur écrit.

### La liste

Les spectateurs dont l'alerte d'anniversaire est due apparaissent en premier, suivis des prochains anniversaires. Une zone de recherche apparaît lorsqu'il y a plus de 5 spectateurs. Chaque spectateur affiche :

- **En attente du chat** : c'est sa période d'anniversaire ; l'alerte s'affiche dès qu'il écrit.
- **🎂 Affiché le [date]** : l'alerte pour cet anniversaire a déjà été affichée.
- **▶ Rejouer** : affiche de nouveau l'alerte de ce spectateur dans OBS. Fonctionne à tout moment et n'est jamais enregistré.
- **Modifier** : modifiez la note, l'anniversaire ou les comptes. Modifier l'anniversaire permet à l'alerte de se déclencher de nouveau pour la nouvelle date.
- **Supprimer** : cliquez sur **Supprimer**, puis sur **Confirmer la suppression**.

## Onglet Apparence

### Aperçu

L'aperçu utilise la même page que la source OBS. Utilisez le sélecteur de couleur à côté de **Aperçu** pour changer le fond de l'aperçu, et cliquez sur **▶ Rejouer l’animation** pour rejouer l'animation de l'alerte.

### Style unifié / Indépendant par plateforme

- **Style unifié** : Twitch et YouTube utilisent le même style d'alerte.
- **Indépendant par plateforme** : chaque plateforme a son propre style. Choisissez **Twitch** ou **YouTube** avec les boutons ci-dessous et modifiez ses réglages. Au premier basculement, les plateformes que vous n'avez pas personnalisées copient le style unifié actuel, chacune avec sa propre couleur de barre de décompte.

**Réinitialiser** restaure le style par défaut du style que vous modifiez.

### Image

- **Choisir une image** : choisissez une image dans le gestionnaire de ressources. Sans image, un emoji de gâteau est affiché. **Effacer** retire l'image.
- **Taille de l'image** : 1 à 400 px.
- **Position de l'image** : **À gauche**, **À droite**, **En haut** ou **En bas**.

### Son

Choisissez un son intégré : **Aucun**, **Carillon** (par défaut), **Pièce**, **Cloche**, **Pop**, **Fanfare**. Cliquez sur **▶** pour l'écouter. Cliquez sur **Choisir un son** pour utiliser votre propre fichier audio depuis le gestionnaire de ressources.

### Texte personnalisé

Rédigez la ligne affichée sur l'alerte. Laissez vide pour utiliser le texte par défaut : `Joyeux anniversaire, {name} !` Vous pouvez utiliser :

| Variable | Remplacée par |
|-------------|---------------|
| `{name}` | Le nom du spectateur dans le chat |
| `{label}` | Votre note / surnom (le nom dans le chat si la note est vide) |
| `{birthday}` | L'anniversaire, par ex. `10/20` |
| `{MM}` `{DD}` | Le mois et le jour sur deux chiffres, pour créer votre propre format, par ex. `{DD}/{MM}` |
| `{date}` | L'anniversaire dans la langue de l'overlay |
| `{platform}` | Le nom de la plateforme |

### Texte et couleur

- **Texte** : définissez la police, la taille et la couleur pour **Texte personnalisé** et **Nom du viewer**.
- **Couleur** : **Fond**, **Ombre** et **Barre de décompte**.

### CSS personnalisé

Développez **CSS personnalisé** pour modifier le CSS du style que vous modifiez (unifié ou la plateforme sélectionnée). **Réinitialiser** restaure le CSS du modèle, et **Gérer les ressources** ouvre le gestionnaire de ressources. Les thèmes Steam Workshop peuvent aussi être appliqués ici. Tant qu'un thème est appliqué, le CSS est en lecture seule. Voir [Thèmes](./themes).

:::info Version d'essai
- Jusqu'à 3 spectateurs dans la liste. Si la liste en contient davantage (par ex. provenant d'une sauvegarde de la version complète), les spectateurs supplémentaires sont affichés verrouillés 🔒 : ils ne déclenchent jamais d'alerte et ne peuvent être ni modifiés ni rejoués.
- Le CSS personnalisé n'est disponible que dans la version complète.
- L'alerte affiche un filigrane dans OBS.

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::

## Questions fréquentes

**Q : Pas de son sur le stream ?**
Vérifiez que **Contrôler l'audio via OBS** est coché dans les propriétés de la source de navigateur et que la source n'est pas coupée dans le mélangeur audio d'OBS. Vérifiez aussi que **Son** n'est pas réglé sur **Aucun**.

**Q : Un spectateur a écrit le jour de son anniversaire mais aucune alerte ne s'est affichée.**
Vérifiez que l'interrupteur de la barre latérale gauche est activé, que la **Connexion au chat** de l'onglet **Réglages** affiche **En direct** pour cette plateforme, et que le compte dans la liste affiche **Associé** ou que le nom saisi correspond à son nom dans le chat. Si l'alerte s'est affichée alors qu'OBS n'était pas ouvert, utilisez **▶ Rejouer**.

**Q : J'ai ajouté la source OBS en retard. Va-t-elle rejouer les alertes précédentes ?**
Non. Une source nouvellement ouverte n'affiche que les alertes qui arrivent après sa connexion. Utilisez **▶ Rejouer** dans l'onglet **Viewers** pour en afficher une de nouveau.
