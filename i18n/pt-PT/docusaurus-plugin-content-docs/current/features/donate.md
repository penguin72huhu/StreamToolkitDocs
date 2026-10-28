---
sidebar_position: 7
---

# Barra de donativos

Mostra na transmissão uma barra de progresso rumo a uma meta de donativos. Os donativos das plataformas que escolher são somados automaticamente ao total.

## URL da fonte do OBS

```
http://127.0.0.1:7272/donate
```

Copie o URL no topo da página **Definições de Barra de donativos** e adicione-o ao OBS como Fonte de Navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source).

Use o interruptor junto a **Barra de donativos** na barra lateral esquerda para mostrar ou ocultar a barra no OBS. Quando está desligado, a barra fica oculta.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Moeda

A barra usa a **Moeda dos donativos** definida na página **Definições**. Os donativos noutras moedas são convertidos para esta moeda antes de serem somados. Se não for possível converter a moeda de um donativo, este não é somado à barra (os Alertas de donativos e o Painel de donativos continuam a mostrá-lo na moeda original).

## Separador Definições

### Plataforma de integração

Marque as plataformas cujos donativos devem contar para a barra:

- **Twitch** — Bits e subscrições
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Um ponto verde significa que a plataforma está ligada; caso contrário, a linha mostra **(não ligado)**. Estas caixas de verificação decidem apenas o que a barra conta. Não afetam os Alertas de donativos nem o Painel de donativos, que têm as suas próprias listas de plataformas.

- **YouTube**: se o chat em direto não estiver associado, a linha mostra **URL do chat não ligado** com dois botões: **Ligar automaticamente** (requer início de sessão com a Google) e **Introduzir manualmente** (leva-o ao campo do URL do chat nas Definições). Consulte [Definições do YouTube](../platforms/youtube-settings).
- **YouTube ⚙️**: escolha que **Eventos contabilizados** são somados à barra: **Super Chat**, **Super Sticker**, **Novo membro**, **Renovação de subscrição**, **Subscrição oferecida**, **Joias**. **Joias** requer início de sessão com a Google.
- Se algum evento de subscrição estiver marcado mas não houver preços de subscrição definidos, aparece **⚠ Sem preços de subscrição**. Clique nele para ir às Definições e introduzir os preços dos níveis em **Definições de conversão** do YouTube.
- O valor dos Bits e das subscrições da Twitch define-se em Definições → Twitch → **Definições de conversão**. Consulte [Definições do Twitch](../platforms/twitch).
- Para ligar PayPal, Stripe, O'Pay ou ECPay, consulte [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) e [ECPay](../payments/ecpay).

### Progresso atual

Mostra o total atual, a meta e a percentagem.

| Campo | Descrição |
|-------|-------------|
| **Título** | Opcional. Aparece por cima da barra. |
| **Valor da meta** | O valor-alvo, na sua moeda dos donativos. |
| **Adicionar manualmente** | Introduza um valor e clique em **Adicionar** (ou prima Enter) para o somar ao total. |
| **Repor a zero** | Repõe o total atual a zero. Aparece primeiro uma confirmação. Não pode ser revertido. |

## Separador Aspeto

### Pré-visualização

A pré-visualização mostra a barra com valores de exemplo. Use o seletor de cor junto a **Pré-visualizar** para mudar o fundo da pré-visualização. Marque **Pré-visualizar concluído** para ver a barra no estado de meta alcançada.

### Tipo de letra e cor

Clique em **Repor predefinição** para restaurar o aspeto predefinido.

- **Tipo de letra**: defina o tipo de letra, a cor e o tamanho (8–72 px) de **Título**, **Valor** e **Percentagem**.
- **Cor**: defina **Fundo**, **Barra de meta** (cor de preenchimento) e **Barra de meta concluída** (cor de preenchimento depois de a meta ser alcançada).

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS da barra. **Repor predefinição** restaura o CSS predefinido e **Gerir recursos** abre o gestor de recursos para as imagens que quer usar no seu CSS. Também pode aplicar aqui temas do Steam Workshop. Enquanto um tema estiver aplicado, o CSS fica só de leitura até o repor. Consulte [Temas](./themes).

:::info Versão de teste
O CSS personalizado só está disponível na versão completa. Os gateways de pagamento reais (PayPal / Stripe / O'Pay / ECPay), bem como os eventos de subscrição e as Joias do YouTube, não podem ser usados na versão de teste, e o overlay mostra uma marca de água. Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: O total subiu depois de enviar um alerta de teste.**
O **Testar notificação** na página Definições conta como um donativo real, por isso é somado à barra (se essa plataforma estiver marcada). Depois de testar, clique em **Repor a zero** para voltar a colocar o total a zero.
