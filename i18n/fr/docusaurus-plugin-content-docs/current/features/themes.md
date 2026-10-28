---
sidebar_position: 20
---

# Thèmes

Partagez et téléchargez des apparences d'overlay via le Steam Workshop. Un thème peut inclure l'apparence des fonctionnalités suivantes :

- [Chat](./chat)
- [Barre de dons](./donate)
- [Alertes de dons](./donate-alert)
- [Alertes nouveaux abonnés](./fan-alert)
- [Anniversaires des viewers](./birthday-alert)
- [Tableau des dons](./sponsors)
- [Sondages en direct](./vote)
- [Horloge](./clock)
- [Barre d'objectif Twitch](./goal) : **Objectif de followers**, **Objectif d'abonnements**, **Objectif de Bits**

Ouvrez-les depuis **🎨 Thèmes** en bas du menu de gauche. La page comporte deux onglets : **Mes thèmes** et **Thèmes téléchargés**. Steam doit être lancé.

## Trouver et appliquer un thème depuis une page de fonctionnalité

Sur chaque fonctionnalité listée ci-dessus, ouvrez sa section **CSS personnalisé** et cliquez sur **Parcourir les thèmes du Workshop** :

1. **Explorer les thèmes** liste les thèmes du Workshop pour cette fonctionnalité. Saisissez du texte dans **Rechercher un nom de thème** et cliquez sur **Rechercher**, ou utilisez **Page précédente** / **Page suivante** pour parcourir les pages
2. Cliquez sur une miniature pour voir l'image d'aperçu
3. Cliquez sur **Appliquer**. Le thème est ajouté à vos abonnements, téléchargé et appliqué à cette fonctionnalité
4. **Abonnés** liste les thèmes auxquels vous êtes déjà abonné pour cette fonctionnalité

Tant qu'un thème est appliqué, la page affiche **Thème utilisé : (nom)** et un bouton **Restaurer**, et le CSS personnalisé est en lecture seule. Cliquez sur **Restaurer** pour revenir à vos propres réglages.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Thèmes téléchargés

Liste tous les thèmes auxquels vous êtes abonné sur Steam. Les thèmes abonnés ne sont pas appliqués automatiquement — utilisez les boutons de la carte. OBS se met à jour immédiatement.

Chaque carte affiche l'aperçu, le nom, **Utilisé** si une fonctionnalité l'utilise, et **Contient :** les fonctionnalités couvertes par le thème (✓ indique les fonctionnalités qui l'utilisent actuellement).

| Bouton | Effet |
|------|------|
| **Tout appliquer** | Applique le thème à toutes les fonctionnalités qu'il contient. Si une fonctionnalité utilise un autre thème, une confirmation du remplacement vous est demandée |
| **Choisir…** | Choisissez les fonctionnalités auxquelles l'appliquer |
| **Tout restaurer** | Ramène chaque fonctionnalité utilisant ce thème à vos propres réglages d'avant son application |
| **Restaurer…** | Choisissez les fonctionnalités à restaurer |
| **Se désabonner** | Se désabonne. Si le thème est utilisé, ces fonctionnalités sont d'abord restaurées |

Après l'application, un message en bas indique ce qui a changé pendant 30 secondes, avec un bouton **Restaurer** pour annuler.

:::note
- La restauration ramène vos propres réglages, pas un thème qui a été remplacé
- Les modifications d'apparence faites pendant qu'un thème est appliqué ne sont pas conservées après la restauration
:::

- **Téléchargement…** : laissez Steam ouvert ; vous pourrez l'appliquer une fois le téléchargement terminé
- **Thème supprimé (#id)** : le thème ne fait plus partie de vos abonnements Steam, mais certaines fonctionnalités l'utilisent encore. Les images peuvent ne pas s'afficher : il est donc conseillé de les restaurer
- Si Steam n'est pas lancé, lancez Steam et cliquez sur **Actualiser**

{/* TODO: 截圖 — 下載的主題 */}

## Mes thèmes : téléverser un thème

1. Configurez l'apparence des fonctionnalités que vous souhaitez partager sur leurs propres pages
2. Dans **Mes thèmes**, cliquez sur **Téléverser un nouveau thème**
3. Remplissez :
   - **Nom du thème** (obligatoire)
   - **Description du thème**
   - **Fonctions incluses** (au moins une)
   - **Image d'aperçu** (obligatoire, 1MB maximum) : cliquez sur **Choisir une image d'aperçu**
4. Cochez la case confirmant que vous avez le droit de distribuer chaque image, police et son du thème. Les ressources sous licence d'usage personnel ou non commercial uniquement ne peuvent pas être téléversées
5. Cliquez sur **Téléverser le thème**

Si vous voyez « Acceptez d'abord les conditions du Steam Workshop dans le navigateur pour que votre thème soit publié », acceptez les conditions pour que le thème puisse être rendu public.

### Gérer vos thèmes téléversés

Chaque thème téléversé dispose de :

- **Télécharger et appliquer** : applique le thème publié à vos fonctionnalités. Cela écrase vos réglages d'apparence actuels
- **Modifier** : téléverse à nouveau vos réglages d'apparence actuels dans le même thème. Si vous n'avez pas téléchargé le thème, l'image d'aperçu existante n'est pas conservée et vous devez en choisir une nouvelle
- **Gérer sur Steam** : ouvre le thème dans Steam

:::info Limites de la version d'essai
Les thèmes (Steam Workshop) ne sont disponibles que dans la version complète. Dans la version d'essai, **🎨 Thèmes** ne peut pas être ouvert et les thèmes ne peuvent pas être appliqués.

Voir [Comparaison version d'essai / version complète](../getting-started/trial-comparison).
:::
