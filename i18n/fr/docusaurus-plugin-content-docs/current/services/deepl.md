---
sidebar_position: 1
---

# Obtention de la clé API DeepL

La clé API DeepL est utilisée pour la traduction automatique des fonctionnalités suivantes :
- **Traduction vocale** — Traduction automatique après conversion de la parole en texte
- **Chat** — Traduction automatique des messages des spectateurs

## Étape 1 : Se connecter à votre compte DeepL

Allez sur [DeepL](https://www.deepl.com) et connectez-vous à votre compte. Si vous n'avez pas encore de compte, vous devez d'abord vous inscrire.

## Étape 2 : Accéder aux paramètres du compte (Account)

Cliquez sur l'**icône de profil** en haut à droite et sélectionnez **Account**.

![Open Account settings](./deepl-api-img/step2.png)

## Étape 3 : Basculer vers l'onglet API Keys & limits

Cliquez sur l'onglet **API Keys & limits**.

![API Keys & limits tab](./deepl-api-img/step3.png)

## Étape 4 : Créer une nouvelle API Key

1. Cliquez sur **Create key +**
2. **Name your key** : Entrez n'importe quel nom (par exemple, `Stream Toolkit`)
3. **Permissions** : Sélectionnez **All access**
4. Cliquez sur **Create Key**

![Create API Key](./deepl-api-img/step4.png)

![API Key created](./deepl-api-img/step4-1.png)

## Étape 5 : Copier et coller dans l'App

1. Copiez l'API Key générée
2. Retournez dans Stream Toolkit et collez-le dans le champ **DeepL API Key** correspondant

![Paste API Key](./deepl-api-img/step5.png)

## Questions fréquentes

**Q : La version d'essai gratuite de DeepL a-t-elle des limites d'utilisation ?**
Oui. La version d'essai gratuite offre un quota de 1 000 000 de caractères et est limitée à un mois. Pour continuer à bénéficier de traductions de haute qualité, veuillez souscrire à un abonnement payant DeepL.

**Q : Que faire si ma clé API (API Key) a été divulguée ?**
Retournez dans DeepL Account → API Keys & limits, supprimez l'ancienne Key et créez-en une nouvelle.
