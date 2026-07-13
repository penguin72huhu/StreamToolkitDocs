---
sidebar_position: 2
---

# Definições do ECPay

Este tutorial explica como obter o **HashKey** e o **HashIV** do ECPay e inseri-los no Stream Toolkit.

## Passo 1: Iniciar sessão no painel de comerciante do ECPay

1. Aceda ao [site oficial do ECPay](https://www.ecpay.com.tw/)
2. Clique em **Login do Vendedor** → **Área do Comerciante** no canto superior direito

## Passo 2: Ir para Configurações de integração de sistemas

1. Clique em **Configurações do sistema** no menu lateral esquerdo
2. Selecione **Configurações de integração de sistemas**

   ![System interface setup in system settings menu](./ecpay-img/step2-2.png)

3. Encontre o **Hash Key de integração** e o **Hash IV de integração**

   ![HashKey and HashIV](./ecpay-img/step2-3.png)

## Passo 3: Inserir no Stream Toolkit

1. Abra o Stream Toolkit
2. Clique em **Definições** no menu inferior esquerdo
3. Encontre **ECPay** em **Integração de plataformas de donativo**
4. Cole o **HashKey de integração** e o **HashIV de integração** das **Configurações de integração de sistemas** nos campos **Hash Key** e **Hash IV**, respectivamente
5. Clique em **Guardar**

![ECPay settings in Stream Toolkit](./ecpay-img/step3.png)

## Passo 4: Configurar o URL de notificação

1. Copie o **URL de notificação em segundo plano** do ECPay

   ![Copy the notification URL](./ecpay-img/step4-1.png)

2. No painel do comerciante ECPay, encontre **Ferramentas de pagamento** → **Pagamentos de streamer**

   ![Streamer payment in payment tools menu](./ecpay-img/step4-2.png)

3. Cole o **URL de notificação em segundo plano** no campo **URL de retorno de notificação de pagamento concluído**

   ![Payment completion notification URL field](./ecpay-img/step4-3.png)

4. Clique em **Guardar configurações**

## Perguntas Frequentes

**Q: Não consegue ver "Configurações do sistema" após o login?**
A sua conta poderá ainda não ter concluído o processo de verificação. Por favor, vá a "Gestão de dados do comerciante" para verificar o estado.

**Q: O HashKey pode ser tornado público?**
Não. HashKey e HashIV são chaves privadas; por favor, não partilhe capturas de ecrã nem as publique em locais públicos.
