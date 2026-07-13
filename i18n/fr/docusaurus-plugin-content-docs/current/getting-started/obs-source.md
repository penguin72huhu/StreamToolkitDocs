---
sidebar_position: 2
---

# Comment ajouter des sources dans OBS

La plupart des fonctionnalités de Stream Toolkit nécessitent l'ajout d'une « Source de navigateur » dans OBS pour s'afficher sur votre flux en direct.

## Étape 1 : Copier l'URL de la fonctionnalité

Dans Stream Toolkit, chaque page de fonctionnalité affiche son URL locale correspondante, au format suivant :

```
http://127.0.0.1:7272/feature-name
```

Copiez l'URL de la fonctionnalité que vous souhaitez ajouter.

## Étape 2 : Ajouter une source de navigateur dans OBS

1. Dans la section **Sources** d'OBS, cliquez sur le bouton **+** en bas
2. Sélectionnez **Navigateur**
3. Sélectionnez **Créer une nouvelle source**, saisissez un nom pour la source (par exemple, « Barre de dons »), puis cliquez sur **OK**
4. Collez l'URL copiée à l'étape 1 dans le champ **URL**
5. Ajustez la **Largeur** et la **Hauteur** selon vos besoins
6. Cliquez sur **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Fonctionnalités ci-dessous nécessitant de cocher « Contrôler l'audio via OBS »

Comprend une sortie audio ; vous devez cocher **Contrôler l'audio via OBS** dans les paramètres de la source de navigateur để le son apparaisse correctement dans le flux en direct :

- **Media Board** — Vidéo, Son
- **Alertes de dons**
- **Demandes musicales**

Comment cocher :
1. Dans la liste des sources d'OBS, faites un clic droit sur la source de navigateur
2. Sélectionnez **Propriétés**
3. Recherchez **Contrôler l'audio via OBS** et cochez-le
4. Cliquez sur **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Si vous n'entendez toujours aucun son après avoir coché l'option, vérifiez que la source n'est pas coupée dans le mélangeur d'audio d'OBS.
:::
