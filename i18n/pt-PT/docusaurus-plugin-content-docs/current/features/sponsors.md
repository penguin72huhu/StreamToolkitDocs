---
sidebar_position: 9
---

# Painel de donativos

Mostra na transmissão uma lista dos donativos recentes: ícone da plataforma, nome do apoiante, valor e mensagem.

## URL da fonte do OBS

```
http://127.0.0.1:7272/sponsors
```

Copie o URL no topo da página **Definições de Painel de donativos** e adicione-o ao OBS como Fonte de Navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source).

Use o interruptor junto a **Painel de donativos** na barra lateral esquerda para mostrar ou ocultar o painel no OBS. Quando está desligado, o painel desvanece-se. Os donativos continuam a ser registados enquanto está desligado.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Separador Definições

### Plataforma de integração

Marque as plataformas cujos donativos devem ser registados: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Um ponto verde significa que a plataforma está ligada; caso contrário, a linha mostra **(não ligado)**. Estas caixas de verificação só afetam o painel, não a Barra de donativos nem os Alertas de donativos.

**Twitch ⚙️** (aparece quando a Twitch está ligada e marcada):

1. Escolha **Contar Bits e subscrições**, **Contar apenas Bits** ou **Contar apenas subscrições**
2. **Contar resubscrições**: se as resubscrições são registadas (aparece quando as subscrições são contadas)
3. **Abaixo de [N] Bits não são contabilizados**: marque e introduza um mínimo para que cheers mais pequenos não sejam registados (aparece quando os Bits são contados)
4. Clique em **Guardar**

**YouTube ⚙️**:

- **Mostrar o nome dos espectadores em vez do @identificador**: só disponível depois de iniciar sessão com a Google.
- **Eventos contabilizados**: **Super Chat**, **Super Sticker**, **Novo membro**, **Renovação de subscrição**, **Subscrição oferecida**, **Joias**. **Joias** requer início de sessão com a Google. As ofertas de Joias aparecem como um ícone de joia com o número de joias em vez de um valor em dinheiro.

Se o chat em direto do YouTube não estiver associado, a linha mostra **URL do chat não ligado** com **Ligar automaticamente** (requer início de sessão com a Google) e **Introduzir manualmente** (leva-o ao campo do URL do chat nas Definições). Se um evento de subscrição estiver marcado mas não houver preços de subscrição definidos, clique em **⚠ Sem preços de subscrição** para os definir. Consulte [Definições do YouTube](../platforms/youtube-settings).

Para ligar PayPal, Stripe, O'Pay ou ECPay, consulte [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) e [ECPay](../payments/ecpay).

### Definições

| Campo | Descrição |
|-------|-------------|
| **Converter automaticamente para a minha moeda** | Ativo por predefinição. Mostra os valores convertidos para a **Moeda dos donativos** definida na página Definições. |
| **Máximo a mostrar** | Quantos registos manter (1–100). Predefinição: 20. Quando chega um novo donativo para além deste limite, o registo mais antigo é removido. |

## Separador Aspeto

### Pré-visualização

Use o seletor de cor junto a **Pré-visualizar** para mudar o fundo da pré-visualização. Clique em **Testar animação de adição** para reproduzir a animação de entrada com um registo de exemplo. O exemplo não é guardado no histórico.

Clique em **Repor predefinição** para restaurar o aspeto predefinido.

### Definições de visualização

- **Mostrar ícone da plataforma**: mostra o ícone da plataforma em cada registo.
- **Direção de entrada**: **De cima para baixo** (predefinição), **De baixo para cima**, **Da esquerda para a direita** ou **Da direita para a esquerda**.

### Tipo de letra

Defina o tipo de letra, a cor e o tamanho (8–72 px) de **Título** (nome do apoiante), **Corpo do texto** (mensagem) e **Valor**.

### Cor de fundo

- **Predefinido**: cor de fundo de todos os registos.
- **+ Adicionar intervalo**: adicione uma cor com um intervalo de **Valor** (**Mínimo** ~ **Máximo**). Os registos cujo valor esteja dentro do intervalo usam essa cor. Deixe Mínimo ou Máximo vazio para não ter limite desse lado. Clique em **✕** para remover um intervalo.

Quando **Converter automaticamente para a minha moeda** está ativo, o intervalo é comparado com o valor convertido.

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS do painel. **Repor predefinição** restaura o CSS predefinido e **Gerir recursos** abre o gestor de recursos. Também pode aplicar aqui temas do Steam Workshop. Enquanto um tema estiver aplicado, o CSS fica só de leitura. Consulte [Temas](./themes).

## Separador Histórico

### Adicionar manualmente (para teste)

Escolha uma plataforma, introduza **Nome**, **Valor** e, opcionalmente, **Mensagem (opcional)**, e clique em **Adicionar**. O registo só é adicionado se essa plataforma estiver marcada em **Plataforma de integração**. O valor é tratado como estando na sua moeda dos donativos.

### Histórico

Lista os registos guardados com o número de registos.

- Clique em **🗑** e depois em **Confirmar eliminação** para eliminar um registo.
- Clique em **Limpar** para eliminar todos os registos. Aparece primeiro uma confirmação. Não pode ser revertido.

:::info Versão de teste
O CSS personalizado só está disponível na versão completa. Os gateways de pagamento reais (PayPal / Stripe / O'Pay / ECPay), bem como os eventos de subscrição e as Joias do YouTube, não podem ser usados na versão de teste, e o painel mostra uma marca de água no OBS. Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: Os alertas de teste aparecem no painel.**
O **Testar notificação** na página Definições é tratado como um donativo real, por isso também é registado aqui se essa plataforma estiver marcada. Elimine-o no separador **Histórico**.
