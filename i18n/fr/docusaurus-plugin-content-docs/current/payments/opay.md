---
sidebar_position: 1
---

# Paramètres O'Pay

Ce tutoriel explique comment obtenir le **HashKey** et le **HashIV** d'O'Pay et les saisir dans Stream Toolkit.

## Étape 1 : Se connecter au tableau de bord marchand O'Pay

1. Accédez au [site officiel d'O'Pay](https://www.opay.tw/) et connectez-vous
2. Après vous être connecté, cliquez en haut à droite pour accéder au tableau de bord marchand

   ![O'Pay merchant portal button at top right](./opay-img/step1.png)

:::note
Si vous n'avez pas encore de compte O'Pay, vous devez d'abord terminer la demande de boutique et la vérification d'identité.
:::

## Krok 2: Zarządzanie rozwojem systemu

1. Trouvez **Gestion du développement système** dans le menu de gauche
2. Cliquez sur **Paramètres d'intégration système**

![System interface setup in system development menu](./opay-img/step2.png)

## Étape 3 : Saisir dans Stream Toolkit

1. Ouvrez Stream Toolkit
2. Cliquez sur **Réglages** dans le menu en bas à gauche
3. Trouvez **O'Pay** dans **Intégration des plateformes de dons**
4. Collez les **ALL IN ONE HashKey d'intégration** et **ALL IN ONE HashIV d'intégration** des **Paramètres d'intégration système** dans les champs **Hash Key** et **Hash IV** respectivement

   ![O'Pay interface info](./opay-img/step3-4.png)

5. Cliquez sur **Enregistrer**

   ![O'Pay settings in Stream Toolkit](./opay-img/step3-5.png)

## Étape 4 : Configurer l'URL de notification

1. Copiez l'**URL de notification en arrière-plan** d'O'Pay

   ![Copy the notification URL](./opay-img/step4-1.png)

2. Retournez sur le [site officiel d'O'Pay](https://www.opay.tw/) et cliquez sur **Recevoir des paiements** → **Paramètres de paiement du streamer**

   ![Streamer payment settings in payment menu](./opay-img/step4-2.png)

3. Collez l'**URL de notification en arrière-plan** dans le champ **URL de notification de succès du paiement de don**

   ![Donation payment notification URL field](./opay-img/step4-3.png)

4. Cliquez sur **Enregistrer les paramètres**

## Questions fréquentes

**Q : Impossible de trouver le menu "Gestion du développement système" ?**
Cela signifie que votre compte n'a pas encore été approuvé ou que les fonctionnalités de paiement correspondantes n'ont pas été activées. Veuillez contacter le service client d'O'Pay.

**Q : Le HashKey peut-il être rendu public ?**
Non. HashKey et HashIV sont des clés privées ; veuillez ne pas partager de captures d'écran ni les publier dans des lieux publics.
