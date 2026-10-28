---
sidebar_position: 19
---

# Configurações

Clique em **⚙️ Configurações** na parte inferior do menu à esquerda. Esta página reúne as opções gerais do app, as conexões de plataformas e os gateways de pagamento de doações.

## Geral

| Opção | O que faz | Padrão |
|------|------|------|
| **Tema** | Modo de exibição da interface: **Escuro** ou **Claro** | Escuro |
| **Idioma** | Idioma da interface; muda na hora | — |
| **Minimizar para a bandeja ao clicar em X** | Fechar a janela a minimiza para a bandeja em vez de encerrar o app | Ligado |
| **Moeda das doações** | Unidade monetária global, usada pela barra de doações, pelos alertas e por todas as outras exibições de valor | Definida na primeira inicialização a partir do idioma do sistema (ex.: chinês tradicional (Taiwan) → TWD, japonês → JPY, outros → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Conexão de plataformas

### Twitch

Clique em **Conectar conta** e autorize no navegador. Depois de conectado, aparece **Conectado @seu-nome** e um botão **Desconectar**. Passo a passo completo: [Configurações do Twitch](../platforms/twitch).

Depois de conectar, **▸ Configuração de conversão** define quanto valem os Bits e as inscrições na sua moeda das doações:

- **Modelo de repartição de receita**: **50 / 50** ou **70 / 30**
- **A cada 100 Bits**, **Inscrição Tier 1**, **Inscrição Tier 2**, **Inscrição Tier 3**
- **Salvar** guarda os valores da moeda atual; **Restaurar padrão** preenche os valores integrados daquela moeda

### YouTube

1. Clique em **Conectar conta** e entre com o Google. Passo a passo: [Configurações do YouTube](../platforms/youtube-settings)
2. Depois de conectado, aparece **Conectado: nome do canal**. **Desconectar** desvincula a conta
3. Escolha como encontrar o chat ao vivo:
   - **Detectar a transmissão atual**: exige login com o Google. Clique em **Conectar** para procurar no seu canal a transmissão atual ou a próxima. Se houver várias, escolha uma na lista
   - **Inserir uma URL manualmente**: cole a **URL do chat**
4. **Solicitar a URL do chat sempre que o programa iniciar**: opcional

**▸ Configuração de conversão** do YouTube define quanto valem as assinaturas de membro (o YouTube não envia um valor para as assinaturas):

- **Configurações de níveis de assinatura**: adicione o nome de cada nível e o valor dele. Os nomes dos níveis devem ser idênticos aos do seu canal do YouTube
- **Níveis não listados**: valor usado para um nível que não está na tabela
- **Nível das assinaturas presenteadas**: como qual nível as assinaturas presenteadas contam
- Os níveis vistos em eventos mas ausentes da tabela aparecem com **Adicionar à tabela** / **Ignorar**

## Integração de plataformas de doação

Clique em um gateway para expandi-lo. Cada um tem um link **Ver tutorial** para o guia de configuração:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Testar notificação

O botão **Testar notificação** ao lado do título abre uma janela de teste:

- Preencha **Nome de teste**, **Mensagem de teste** e **Valor de teste**, escolha a **Plataforma de teste** e clique em **Enviar notificação de teste**
- **Teste de Super Chat do YouTube**: insira um **Texto do valor** como `$5.00` ou `NT$150` e clique em **Enviar Super Chat de teste** para testar a leitura do valor e a conversão de moeda

## Sobre

Clique no botão **i** ao lado de "Stream Toolkit" no topo do menu à esquerda para ver a versão, o autor e um link para a documentação oficial.

:::info Limites da versão de teste
- A **Integração de plataformas de doação** só está disponível na versão completa
- A **Configuração de conversão** das assinaturas do YouTube só está disponível na versão completa

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::
