---
sidebar_position: 2
---

# Paramètres ECPay

Ce tutoriel explique comment obtenir le **HashKey** et le **HashIV** d'ECPay et les saisir dans Stream Toolkit.

## Étape 1 : Se connecter au tableau de bord marchand ECPay

1. Accédez au [site officiel d'ECPay](https://www.ecpay.com.tw/)
2. Cliquez en haut à droite sur **Connexion vendeur** → **Espace marchand**

## Étape 2 : Accéder aux Paramètres d'intégration système

1. Cliquez sur **Paramètres système** dans le menu de gauche
2. Sélectionnez **Paramètres d'intégration système**

   ![System interface setup in system settings menu](./ecpay-img/step2-2.png)

3. Trouvez le **Hash Key d'intégration** et le **Hash IV d'intégration**

   ![HashKey and HashIV](./ecpay-img/step2-3.png)

## Étape 3 : Saisir dans Stream Toolkit

1. Ouvrez Stream Toolkit
2. Cliquez sur **Réglages** dans le menu en bas à gauche
3. Trouvez **ECPay** dans **Intégration des plateformes de dons**
4. Collez les **HashKey d'intégration** et **HashIV d'intégration** des **Paramètres d'intégration système** dans les champs **Hash Key** et **Hash IV** respectivement
5. Cliquez sur **Enregistrer**

![ECPay settings in Stream Toolkit](./ecpay-img/step3.png)

## Étape 4 : Configurer l'URL de notification

1. Copiez l'**URL de notification en arrière-plan** d'ECPay

   ![Copy the notification URL](./ecpay-img/step4-1.png)

2. Dans le tableau de bord marchand ECPay, trouvez **Outils de paiement** → **Paiements du streamer**

   ![Streamer payment in payment tools menu](./ecpay-img/step4-2.png)

3. Collez l'**URL de notification en arrière-plan** dans le champ **URL de retour de notification de paiement terminé**

   ![Payment completion notification URL field](./ecpay-img/step4-3.png)

4. Cliquez sur **Enregistrer les paramètres**

## Questions fréquentes

**Q : "Paramètres système" invisible après connexion ?**
Il est possible que votre compte n'ait pas terminé le processus de vérification. Veuillez aller dans "Gestion des données marchand" pour vérifier le statut.

**Q : Le HashKey peut-il être rendu public ?**
Non. HashKey et HashIV sont des clés privées ; veuillez ne pas partager de captures d'écran ni les publier dans des lieux publics.
