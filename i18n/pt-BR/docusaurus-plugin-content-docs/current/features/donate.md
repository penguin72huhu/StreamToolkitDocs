---
sidebar_position: 7
---

# Barra de doações

Mostra na transmissão uma barra de progresso rumo a uma meta de doações. As doações das plataformas que você escolher são somadas ao total automaticamente.

## URL da fonte do OBS

```
http://127.0.0.1:7272/donate
```

Copie a URL no topo da página **Configurações de Barra de doações** e adicione-a ao OBS como Fonte de Navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source).

Use o botão ao lado de **Barra de doações** na barra lateral esquerda para mostrar ou ocultar a barra no OBS. Quando ele está desligado, a barra fica oculta.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Moeda

A barra usa a **Moeda das doações** definida na página **Configurações**. Doações em outras moedas são convertidas para essa moeda antes de serem somadas. Se a moeda de uma doação não puder ser convertida, ela não é somada à barra (os Alertas de doações e o Painel de doações ainda a mostram na moeda original).

## Aba Configurações

### Plataforma de integração

Marque as plataformas cujas doações devem contar para a barra:

- **Twitch** — Bits e inscrições
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Um ponto verde indica que a plataforma está conectada; caso contrário, a linha mostra **(Não conectado)**. Essas caixas decidem só o que a barra conta. Elas não afetam os Alertas de doações nem o Painel de doações, que têm suas próprias listas de plataformas.

- **YouTube**: se o chat ao vivo não estiver vinculado, a linha mostra **URL do chat não conectada** com dois botões: **Conectar automaticamente** (exige login com o Google) e **Inserir manualmente** (leva ao campo de URL do chat nas Configurações). Veja [Configurações do YouTube](../platforms/youtube-settings).
- **YouTube ⚙️**: escolha quais **Eventos contabilizados** são somados à barra: **Super Chat**, **Super Sticker**, **Novo membro**, **Renovação de assinatura**, **Assinatura presenteada**, **Joias**. **Joias** exige login com o Google.
- Se algum evento de assinatura estiver marcado mas não houver preços de assinatura definidos, aparece **⚠ Sem preços de assinatura**. Clique nele para ir às Configurações e inserir os preços dos níveis em **Configuração de conversão** do YouTube.
- Quanto valem os Bits e as inscrições da Twitch é definido em Configurações → Twitch → **Configuração de conversão**. Veja [Configurações do Twitch](../platforms/twitch).
- Para conectar PayPal, Stripe, O'Pay ou ECPay, veja [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) e [ECPay](../payments/ecpay).

### Progresso atual

Mostra o total atual, a meta e a porcentagem.

| Campo | Descrição |
|-------|-----------|
| **Título** | Opcional. Aparece acima da barra. |
| **Valor da meta** | O valor alvo, na sua moeda das doações. |
| **Adicionar manualmente** | Insira um valor e clique em **Adicionar** (ou pressione Enter) para somá-lo ao total. |
| **Zerar** | Volta o total atual para zero. Uma confirmação aparece antes. Isso não pode ser desfeito. |

## Aba Aparência

### Pré-visualização

A pré-visualização mostra a barra com valores de exemplo. Use o seletor de cor ao lado de **Pré-visualizar** para mudar o fundo da pré-visualização. Marque **Pré-visualizar meta atingida** para ver a barra no estado concluído.

### Fonte e cor

Clique em **Restaurar padrão** para restaurar a aparência padrão.

- **Fonte**: defina a fonte, a cor e o tamanho (8–72 px) de **Título**, **Valor** e **Porcentagem**.
- **Cor**: defina **Fundo**, **Barra de meta** (cor de preenchimento) e **Barra de meta atingida** (cor de preenchimento depois que a meta é alcançada).

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS da barra. **Restaurar padrão** restaura o CSS padrão, e **Gerenciar recursos** abre o gerenciador de recursos para as imagens que você quiser usar no CSS. Temas do Steam Workshop também podem ser aplicados aqui. Enquanto um tema estiver aplicado, o CSS fica somente leitura até você restaurá-lo. Veja [Temas](./themes).

:::info Versão de teste
O CSS personalizado só está disponível na versão completa. Os gateways de pagamento reais (PayPal / Stripe / O'Pay / ECPay), os eventos de assinatura do YouTube e as Joias não podem ser usados na versão de teste, e o overlay mostra uma marca d'água. Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: O total aumentou depois que enviei um alerta de teste.**
O **Testar notificação** da página Configurações conta como uma doação real, então é somado à barra (se aquela plataforma estiver marcada). Depois de testar, clique em **Zerar** para voltar o total a zero.
