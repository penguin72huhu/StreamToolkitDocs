---
sidebar_position: 8
---

# Alertas de donativos

Mostra um alerta com imagem, som, nome do apoiante, valor e mensagem quando alguém faz um donativo.

## URL da fonte do OBS

```
http://127.0.0.1:7272/donate-alert
```

Copie o URL no topo da página **Definições de Alertas de donativos** e adicione-o ao OBS como Fonte de Navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source).

:::warning
Os alertas reproduzem um som. Marque **Controlar áudio via OBS** nas propriedades da fonte de navegador, caso contrário o som não se ouvirá na transmissão.
:::

Use o interruptor junto a **Alertas de donativos** na barra lateral esquerda para ativar ou desativar os alertas. Enquanto estiver desligado, não são mostrados alertas (incluindo os de teste), mas os donativos continuam a ser registados no [Painel de donativos](./sponsors).

Quando vários donativos chegam quase ao mesmo tempo, os alertas ficam em fila e são mostrados um após o outro.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Separador Definições

### Plataforma de integração

Marque as plataformas que devem disparar um alerta: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Um ponto verde significa que a plataforma está ligada; caso contrário, a linha mostra **(não ligado)**. Estas caixas de verificação só afetam os alertas, não a Barra de donativos nem o Painel de donativos.

**Twitch ⚙️** (aparece quando a Twitch está ligada e marcada):

1. Escolha **Contar Bits e subscrições**, **Contar apenas Bits** ou **Contar apenas subscrições**
2. **Contar resubscrições**: se as resubscrições disparam um alerta (aparece quando as subscrições são contadas)
3. **Abaixo de [N] Bits não são contabilizados**: marque e introduza um mínimo para que cheers mais pequenos não disparem um alerta (aparece quando os Bits são contados)
4. Clique em **Guardar**

**YouTube ⚙️**:

- **Mostrar o nome dos espectadores em vez do @identificador**: só disponível depois de iniciar sessão com a Google.
- **Eventos contabilizados**: **Super Chat**, **Super Sticker**, **Novo membro**, **Renovação de subscrição**, **Subscrição oferecida**, **Joias**. **Joias** requer início de sessão com a Google.

Se o chat em direto do YouTube não estiver associado, a linha mostra **URL do chat não ligado** com **Ligar automaticamente** (requer início de sessão com a Google) e **Introduzir manualmente** (leva-o ao campo do URL do chat nas Definições). Se um evento de subscrição estiver marcado mas não houver preços de subscrição definidos, clique em **⚠ Sem preços de subscrição** para os definir. Consulte [Definições do YouTube](../platforms/youtube-settings).

Para ligar PayPal, Stripe, O'Pay ou ECPay, consulte [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) e [ECPay](../payments/ecpay).

### Definições

| Campo | Descrição |
|-------|-------------|
| **Converter automaticamente para a minha moeda** | Ativo por predefinição. Mostra o valor convertido para a **Moeda dos donativos** definida na página Definições. |
| **Tempo de exibição** | Quanto tempo cada alerta fica no ecrã, em segundos. Predefinição: 6. |

## Separador Aspeto

### Pré-visualização

A pré-visualização usa a mesma página que a fonte do OBS. Use o seletor de cor junto a **Pré-visualizar** para mudar o fundo da pré-visualização e clique em **▶ Repetir animação** para reproduzir novamente a animação do alerta.

### Estilo unificado / Independente por plataforma

- **Estilo unificado**: todas as plataformas usam o mesmo estilo de alerta.
- **Independente por plataforma**: cada plataforma tem o seu próprio estilo. Escolha a plataforma com os botões abaixo (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) e edite as respetivas definições. Quando muda pela primeira vez, as plataformas que ainda não personalizou copiam o estilo unificado atual, cada uma com a sua própria cor da barra de contagem.

**Repor predefinição** restaura o estilo predefinido do estilo que está a editar.

### Imagem

- **Escolher imagem**: escolha uma imagem no gestor de recursos. Sem imagem, é mostrado um emoji de coração. **Limpar** remove a imagem.
- **Tamanho da imagem**: 1–400 px.
- **Posição da imagem**: **À esquerda**, **À direita**, **Em cima** ou **Em baixo**.

### Som

Escolha um som incorporado: **Nenhum**, **Sino** (predefinição), **Moeda**, **Campainha**, **Pop**, **Fanfarra**. Clique em **▶** para ouvir. Clique em **Escolher som** para usar o seu próprio ficheiro de som do gestor de recursos.

### Apresentação de texto

- **Predefinido**: o valor, o nome do apoiante e a mensagem aparecem em linhas separadas.
- **Texto personalizado**: escreva a sua própria frase. Use `{name}` para o nome do apoiante e `{amount}` para o valor, por exemplo `Obrigado {name} pelo donativo de {amount}!`

### Texto e cor

- **Texto**: defina o tipo de letra, o tamanho e a cor de **Valor**, **Nome do apoiante** e **Mensagem** (e de **Texto personalizado** no modo Texto personalizado).
- **Cor**: **Fundo**, **Sombra** e **Barra de contagem**.

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS do estilo que está a editar (unificado ou da plataforma selecionada). **Repor predefinição** restaura o CSS do modelo e **Gerir recursos** abre o gestor de recursos. Também pode aplicar aqui temas do Steam Workshop. Enquanto um tema estiver aplicado, o CSS fica só de leitura. Consulte [Temas](./themes).

## Testar alertas

Na página **Definições**, clique em **Testar notificação** junto a **Integração de plataformas de donativo**:

1. Preencha **Nome de teste**, **Mensagem de teste** e **Valor de teste** e escolha uma **Plataforma de teste**
2. Clique em **Enviar notificação de teste**

A secção **Teste de Super Chat do YouTube** permite introduzir uma **Cadeia do valor** em bruto (por exemplo `$5.00`, `¥500`, `NT$150`) e clicar em **Enviar Super Chat de teste** para testar a análise do valor e a conversão de moeda.

:::note
Um alerta de teste é tratado como um donativo real: também é adicionado à [Barra de donativos](./donate) e ao [Painel de donativos](./sponsors) se essas plataformas estiverem marcadas lá.
:::

:::info Versão de teste
O CSS personalizado só está disponível na versão completa. Os gateways de pagamento reais (PayPal / Stripe / O'Pay / ECPay), bem como os eventos de subscrição e as Joias do YouTube, não podem ser usados na versão de teste, e o alerta mostra uma marca de água no OBS. Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: Não há som na transmissão?**
Verifique se **Controlar áudio via OBS** está marcado nas propriedades da fonte de navegador e se a fonte não está sem som no misturador do OBS. Verifique também se **Som** não está definido como **Nenhum**.

**Q: Adicionei a fonte do OBS mais tarde. Os alertas anteriores voltam a aparecer?**
Não. Uma fonte acabada de abrir só mostra os alertas que chegam depois de se ligar.
