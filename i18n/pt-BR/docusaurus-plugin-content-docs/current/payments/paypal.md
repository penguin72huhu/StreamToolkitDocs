---
sidebar_position: 3
---

# Configurações do PayPal

O Stream Toolkit usa Webhooks para receber notificações de pagamento do PayPal, não sendo necessário inserir uma chave API.

## Passo 1: Obter a URL do Webhook no Stream Toolkit

1. Abra o Stream Toolkit
2. Clique em **Configurações** no menu inferior esquerdo
3. Encontre **Integração de plataformas de doação** → **PayPal**
4. Clique no botão **Obter URL**
5. Após a URL ser gerada, clique no botão **Copiar**

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Atenção
A URL do Webhook contém um token exclusivo, não a compartilhe publicamente. Se suspeitar de vazamento, clique em **Obter URL novamente** para gerar uma nova URL (a antiga será invalidada imediatamente).
:::

## Passo 2: Fazer login no Painel do Desenvolvedor do PayPal

1. Acesse o [PayPal Developer](https://developer.paypal.com)
2. Clique em **Log in to Dashboard** no canto superior direito e faça login com sua conta do PayPal
3. Após o login, clique no botão **`</>`** no canto superior direito para entrar no painel do desenvolvedor

![PayPal developer button at top right](./paypal-img/step2.png)

## Passo 3: Mudar para o modo Live

Certifique-se de que o interruptor de modo acima do menu lateral esquerdo esteja definido como **Live**. Você só precisa mudar se ele mostrar **Sandbox** (modo de teste):

1. Localize o interruptor de alternância acima do menu lateral esquerdo
2. Clique para mudar para **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## Passo 4: Ir para as Configurações de Webhooks

1. Clique em **Apps & Credentials** no menu lateral esquerdo

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Localize o botão **Manage Webhooks** na página e clique nele para entrar

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Role até o final da página e clique em **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Passo 5: Adicionar Webhook

1. Cole a URL que você acabou de copiar do Stream Toolkit no campo **Webhook URL**
2. Em **Event types**, encontre a categoria **Payments & payouts** e marque:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Clique em **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Após a conclusão das configurações, quando os espectadores pagarem via PayPal, o Stream Toolkit receberá as notificações em tempo real.

## Perguntas Frequentes

**Q: É possível testar no modo Sandbox?**
Sim. No modo Sandbox você também pode adicionar um Webhook para testar o fluxo de pagamento, mas não receberá fundos reais.

**Q: O que fazer se a URL do Webhook for gerada novamente?**
Você precisa voltar ao painel do PayPal e alterar a URL antiga do Webhook para a nova.
