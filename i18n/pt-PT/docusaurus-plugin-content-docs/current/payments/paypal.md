---
sidebar_position: 3
---

# Definições do PayPal

O Stream Toolkit usa Webhooks para receber notificações de pagamento do PayPal, não sendo necessário inserir uma chave API.

## Passo 1: Obter o URL do Webhook no Stream Toolkit

1. Abra o Stream Toolkit
2. Clique em **Definições** no menu inferior esquerdo
3. Encontre **Integração de plataformas de donativo** → **PayPal**
4. Clique no botão **Obter URL**
5. Após o URL ser gerado, clique no botão **Copiar**

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Aviso
O URL do Webhook contém um token exclusivo, não o partilhe publicamente. Se suspeitar de fuga de informação, pode clicar em **Obter novo URL** para gerar um novo URL (o antigo será invalidado imediatamente).
:::

## Passo 2: Iniciar sessão no Painel de Desenvolvedor do PayPal

1. Aceda ao [PayPal Developer](https://developer.paypal.com)
2. Clique em **Log in to Dashboard** no canto superior direito e inicie sessão com a sua conta do PayPal
3. Após iniciar sessão, clique no botão **`</>`** no canto superior direito para entrar no painel do desenvolvedor

![PayPal developer button at top right](./paypal-img/step2.png)

## Passo 3: Mudar para o modo Live

Certifique-se de que o interruptor de modo acima do menu esquerdo está definido como **Live**. Só precisa de mudar se mostrar **Sandbox** (modo de teste):

1. Localize o interruptor de alternância acima do menu esquerdo
2. Clique para mudar para **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## Passo 4: Ir para as Definições de Webhooks

1. Clique em **Apps & Credentials** no menu esquerdo

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Localize o botão **Manage Webhooks** na página e clique para entrar

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Desloque-se até ao fundo da página e clique em **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Passo 5: Adicionar Webhook

1. Cole o URL que acabou de copiar do Stream Toolkit no campo **Webhook URL**
2. Em **Event types**, encontre a categoria **Payments & payouts** e marque:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Clique em **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Após a conclusão das definições, quando os espectadores pagarem via PayPal, o Stream Toolkit receberá as notificações em tempo real.

## Perguntas Frequentes

**Q: É possível testar no modo Sandbox?**
Sim. No modo Sandbox também pode adicionar um Webhook para testar o fluxo de pagamento, mas não receberá fundos reais.

**Q: O que fazer se o URL do Webhook for gerado novamente?**
Precisa de voltar ao painel do PayPal e alterar o URL antigo do Webhook para o novo.
