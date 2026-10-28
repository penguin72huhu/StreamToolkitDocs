---
sidebar_position: 19
---

# Definições

Clique em **⚙️ Definições** no fundo do menu esquerdo. Esta página reúne as opções gerais da aplicação, as ligações às plataformas e os gateways de pagamento de donativos.

## Geral

| Opção | O que faz | Predefinição |
|------|------|------|
| **Tema** | Modo de apresentação da interface: **Escuro** ou **Claro** | Escuro |
| **Idioma** | Idioma da interface; muda de imediato | — |
| **Minimizar para a barra de tarefas ao premir X** | Fechar a janela minimiza-a para a área de notificação em vez de sair | Ativo |
| **Moeda dos donativos** | Unidade monetária global, usada pela barra de donativos, pelos alertas e por todas as outras apresentações de valores | Definida no primeiro arranque a partir do idioma do sistema (por exemplo, chinês tradicional (Taiwan) → TWD, japonês → JPY, outros → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Ligações de plataforma

### Twitch

Clique em **Ligar conta** e autorize no navegador. Depois de ligada, mostra **Ligado @o-seu-nome** e um botão **Desligar**. Passos completos: [Definições do Twitch](../platforms/twitch).

Depois de ligar, **▸ Definições de conversão** define quanto valem os Bits e as subscrições na sua moeda dos donativos:

- **Partilha de receita**: **50 / 50** ou **70 / 30**
- **Por 100 Bits**, **Subscrição Tier 1**, **Subscrição Tier 2**, **Subscrição Tier 3**
- **Guardar** guarda os valores para a moeda atual; **Repor predefinição** preenche os valores incorporados para essa moeda

### YouTube

1. Clique em **Ligar conta** e inicie sessão com a Google. Passo a passo: [Definições do YouTube](../platforms/youtube-settings)
2. Depois de ligada, mostra **Ligado: nome do canal**. **Desligar** desassocia a conta
3. Escolha como encontrar o chat em direto:
   - **Detetar a transmissão atual**: requer início de sessão com a Google. Clique em **Ligar** para procurar no seu canal a transmissão atual ou a próxima. Se houver várias, escolha uma da lista
   - **Introduzir um URL manualmente**: cole o **URL do chat**
4. **Pedir o URL do chat sempre que o programa abre**: opcional

**▸ Definições de conversão** no YouTube define quanto valem as subscrições de membro (o YouTube não envia um valor para as subscrições):

- **Níveis de subscrição**: adicione o nome de cada nível e o respetivo valor. Os nomes dos níveis têm de corresponder exatamente aos do seu canal do YouTube
- **Níveis não listados**: valor usado para um nível que não está na tabela
- **Nível das subscrições oferecidas**: o nível a que correspondem as subscrições oferecidas
- Os níveis vistos em eventos mas ausentes da tabela aparecem com **Adicionar à tabela** / **Ignorar**

## Integração de plataformas de donativo

Clique num gateway para o expandir. Cada um tem uma ligação **Tutorial aqui** para o respetivo guia de configuração:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Testar notificação

O botão **Testar notificação** junto ao título abre uma janela de teste:

- Preencha **Nome de teste**, **Mensagem de teste**, **Valor de teste**, escolha a **Plataforma de teste** e clique em **Enviar notificação de teste**
- **Teste de Super Chat do YouTube**: introduza uma **Cadeia do valor** como `$5.00` ou `NT$150` e clique em **Enviar Super Chat de teste** para testar a análise do valor e a conversão de moeda

## Acerca de

Clique no botão **i** junto a "Stream Toolkit" no topo do menu esquerdo para ver a versão, o autor e uma ligação para a documentação oficial.

:::info Limites da versão de teste
- A **Integração de plataformas de donativo** só está disponível na versão completa
- As **Definições de conversão** das subscrições do YouTube só estão disponíveis na versão completa

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::
