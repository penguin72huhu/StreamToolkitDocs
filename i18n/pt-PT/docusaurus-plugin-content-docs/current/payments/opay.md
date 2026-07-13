---
sidebar_position: 1
---

# Definições do O'Pay

Este tutorial explica como obter o **HashKey** e o **HashIV** do O'Pay e inseri-los no Stream Toolkit.

## Passo 1: Iniciar sessão no painel de comerciante do O'Pay

1. Aceda ao [site oficial do O'Pay](https://www.opay.tw/) e inicie sessão
2. Após iniciar sessão, clique no canto superior direito para aceder ao painel de comerciante

   ![O'Pay merchant portal button at top right](./opay-img/step1.png)

:::note
Se ainda não tem uma conta O'Pay, primeiro precisa de concluir a solicitação de loja e a verificação de identidade.
:::

## Шаг 2: Управление разработкой системы

1. Localize **Gerenciamento de desenvolvimento de sistemas** no menu lateral esquerdo
2. Clique em **Configurações de integração de sistemas**

![System interface setup in system development menu](./opay-img/step2.png)

## Passo 3: Inserir no Stream Toolkit

1. Abra o Stream Toolkit
2. Clique em **Definições** no menu inferior esquerdo
3. Encontre **O'Pay** em **Integração de plataformas de donativo**
4. Cole o **ALL IN ONE HashKey de integração** e o **ALL IN ONE HashIV de integração** das **Configurações de integração de sistemas** nos campos **Hash Key** e **Hash IV**, respectivamente

   ![O'Pay interface info](./opay-img/step3-4.png)

5. Clique em **Guardar**

   ![O'Pay settings in Stream Toolkit](./opay-img/step3-5.png)

## Passo 4: Configurar o URL de notificação

1. Copie o **URL de notificação em segundo plano** do O'Pay

   ![Copy the notification URL](./opay-img/step4-1.png)

2. Volte para o [site oficial do O'Pay](https://www.opay.tw/) e clique em **Receber pagamentos** → **Configurações de pagamento do streamer**

   ![Streamer payment settings in payment menu](./opay-img/step4-2.png)

3. Cole o **URL de notificação em segundo plano** no campo **URL de notificação de pagamento de doação bem-sucedido**

   ![Donation payment notification URL field](./opay-img/step4-3.png)

4. Clique em **Guardar configurações**

## Perguntas Frequentes

**Q: Não consegue encontrar o menu "Gerenciamento de desenvolvimento de sistemas"?**
Isso significa que a sua conta ainda não foi aprovada, ou que as funcionalidades de pagamento relevantes não foram ativadas. Por favor, contacte o apoio ao cliente da O'Pay.

**Q: O HashKey pode ser tornado público?**
Não. HashKey e HashIV são chaves privadas; por favor, não partilhe capturas de ecrã nem as publique em locais públicos.
