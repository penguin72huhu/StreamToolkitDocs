---
sidebar_position: 3
---

# Paramètres PayPal

Stream Toolkit utilise des Webhooks pour recevoir les notifications de paiement PayPal, il n'est donc pas nécessaire de saisir une clé API.

## Étape 1 : Obtenir l'URL du Webhook dans Stream Toolkit

1. Ouvrez Stream Toolkit
2. Cliquez sur **Réglages** dans le menu en bas à gauche
3. Trouvez **Intégration des plateformes de dons** → **PayPal**
4. Cliquez sur le bouton **Obtenir l'URL**
5. Une fois l'URL générée, cliquez sur le bouton **Copier**

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Attention
L'URL du Webhook contient un token exclusif, veuillez ne pas la partager publiquement. Si vous soupçonnez une fuite, vous pouvez cliquer sur **Régénérer l'URL** para en générer une nouvelle (l'ancienne URL deviendra immédiatement invalide).
:::

## Étape 2 : Se connecter au tableau de bord des développeurs PayPal

1. Accédez à [PayPal Developer](https://developer.paypal.com)
2. Cliquez sur **Log in to Dashboard** en haut à droite et connectez-vous avec votre compte PayPal
3. Après vous être connecté, cliquez sur le bouton **`</>`** en haut à droite pour accéder à l'espace développeur

![PayPal developer button at top right](./paypal-img/step2.png)

## Étape 3 : Passer en mode Live

Vérifiez que le sélecteur de mode situé au-dessus du menu de gauche est bien sur **Live**. Vous n'avez besoin de changer que s'il affiche **Sandbox** (mode test) :

1. Repérez le commutateur au-dessus du menu de gauche
2. Cliquez pour passer sur **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## Étape 4 : Accéder aux paramètres des Webhooks

1. Cliquez sur **Apps & Credentials** dans le menu de gauche

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Repérez le bouton **Manage Webhooks** sur la page et cliquez dessus pour y accéder

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Faites défiler la page tout en bas et cliquez sur **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Étape 5 : Ajouter un Webhook

1. Collez l'URL que vous venez de copier depuis Stream Toolkit dans le champ **Webhook URL**
2. Dans **Event types**, recherchez la catégorie **Payments & payouts** et cochez :
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Cliquez sur **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Une fois les paramètres configurés, lorsque les spectateurs effectuent un paiement via PayPal, Stream Toolkit reçoit les notifications en temps réel.

## Questions fréquentes

**Q : Peut-on faire des tests en mode Sandbox ?**
Oui. En mode Sandbox, vous pouvez également ajouter un Webhook pour tester le processus de paiement, mais aucun argent réel ne sera reçu.

**Q : Que faire si l'URL du Webhook est régénérée ?**
Vous devez retourner sur l'espace PayPal et remplacer l'ancienne URL du Webhook par la nouvelle.
