---
sidebar_position: 3
---

# Definições do Stripe

O Stream Toolkit recebe notificações de pagamento do Stripe via Webhooks. A configuração está dividida em duas partes: obter o URL do Webhook na app e concluir a integração no painel do Stripe.

## Passo 1: Obter o URL do Webhook no Stream Toolkit

1. Abra o Stream Toolkit
2. Clique em **Definições** no menu inferior esquerdo → **Integração de plataformas de donativo** → **Stripe** (Clique para expandir)
3. Verá o **Webhook URL**, formatado da seguinte maneira:
   ```
   https://<worker>/stripe/webhook/<your userId>
   ```
4. Clique no botão **Copiar** e guarde este URL para utilização posterior

![Get webhook URL](./stripe-img/step1.png)

## Passo 2: Adicionar um Webhook no painel do Stripe

1. Aceda ao [Stripe Dashboard](https://dashboard.stripe.com) e inicie sessão na sua conta
2. Clique em **Programadores** → **Webhooks** no canto inferior esquerdo

![Stripe webhook list page](./stripe-img/step2-1.png)

3. Clique em **Adicionar endpoint**

![Add destination](./stripe-img/step2-2.png)

4. Preencha as seguintes informações:
   - **Eventos**: Pesquise e marque `checkout.session.completed` (apenas este é necessário)

   ![Select events](./stripe-img/step2-3.png)

   - **Tipo de endpoint**: Selecione **Endpoint de Webhook**

   ![Select destination type](./stripe-img/step2-4.png)

   - **Nome do endpoint**: Preencha como desejar (por exemplo, `Stream Toolkit`)
   - **URL do endpoint**: Cole o URL do Webhook copiado no Passo 1

   ![Enter name and URL](./stripe-img/step2-5.png)

5. Clique em **Adicionar endpoint**

## Passo 3: Inserir o segredo de assinatura

1. Assim que o Webhook for criado, a página exibirá o **segredo de assinatura** no formato `whsec_...`
2. Copie este segredo
3. Volte para a secção de configurações do Stripe no Stream Toolkit
4. Cole o segredo no campo **Segredo de assinatura do Webhook**
5. Clique em **Guardar**

Se o estado da ligação ficar verde, a configuração foi bem-sucedida.

![Paste signing secret](./stripe-img/step3.png)

## Concluído

Assim que a configuração estiver concluída, quando os espectadores pagarem através do seu **Payment Link** do Stripe, o Stream Toolkit receberá notificações em tempo real e exibirá a doação.

## Perguntas Frequentes

**Q: Onde posso criar um Payment Link?**
Aceda ao Stripe Dashboard → **Payment Links** → **Criar Payment Link**, defina o valor e partilhe o link com os seus espectadores.

**Q: O estado da ligação não ficou verde?**
Certifique-se de que o Segredo de assinatura do Webhook tenha sido colado e guardado corretamente, e que o URL do endpoint no painel do Stripe corresponda exatamente ao exibido na app.
