---
sidebar_position: 8
---

# Alertas de doações

Exibe um alerta com imagem, som, nome do doador, valor e mensagem quando alguém faz uma doação.

## URL da fonte do OBS

```
http://127.0.0.1:7272/donate-alert
```

Copie a URL no topo da página **Configurações de Alertas de doações** e adicione-a ao OBS como Fonte de Navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source).

:::warning
Os alertas tocam um som. Marque **Controlar áudio via OBS** nas propriedades da fonte de navegador, ou o som não será ouvido na transmissão.
:::

Use o botão ao lado de **Alertas de doações** na barra lateral esquerda para ligar ou desligar os alertas. Enquanto ele estiver desligado, nenhum alerta é exibido (incluindo os alertas de teste), mas as doações continuam sendo registradas no [Painel de doações](./sponsors).

Quando várias doações chegam em sequência, os alertas entram em fila e são exibidos um após o outro.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Aba Configurações

### Plataforma de integração

Marque as plataformas que devem disparar um alerta: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Um ponto verde indica que a plataforma está conectada; caso contrário, a linha mostra **(Não conectado)**. Essas caixas afetam só os alertas, não a Barra de doações nem o Painel de doações.

**Twitch ⚙️** (aparece quando a Twitch está conectada e marcada):

1. Escolha **Contar Bits e inscrições**, **Contar apenas Bits** ou **Contar apenas inscrições**
2. **Contar reinscrições**: se as reinscrições disparam um alerta (aparece quando as inscrições são contadas)
3. **Menos de [N] Bits não são contabilizados**: marque e insira um mínimo para que cheers menores não disparem alerta (aparece quando os Bits são contados)
4. Clique em **Salvar**

**YouTube ⚙️**:

- **Mostrar o nome dos espectadores em vez do @identificador**: só fica disponível depois que você entra com o Google.
- **Eventos contabilizados**: **Super Chat**, **Super Sticker**, **Novo membro**, **Renovação de assinatura**, **Assinatura presenteada**, **Joias**. **Joias** exige login com o Google.

Se o chat ao vivo do YouTube não estiver vinculado, a linha mostra **URL do chat não conectada** com **Conectar automaticamente** (exige login com o Google) e **Inserir manualmente** (leva ao campo de URL do chat nas Configurações). Se um evento de assinatura estiver marcado mas não houver preços de assinatura definidos, clique em **⚠ Sem preços de assinatura** para defini-los. Veja [Configurações do YouTube](../platforms/youtube-settings).

Para conectar PayPal, Stripe, O'Pay ou ECPay, veja [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) e [ECPay](../payments/ecpay).

### Configurações

| Campo | Descrição |
|-------|-----------|
| **Converter automaticamente para a própria moeda** | Ligado por padrão. Mostra o valor convertido para a **Moeda das doações** definida na página Configurações. |
| **Tempo de exibição** | Quanto tempo cada alerta fica na tela, em segundos. Padrão: 6. |

## Aba Aparência

### Pré-visualização

A pré-visualização usa a mesma página da fonte do OBS. Use o seletor de cor ao lado de **Pré-visualizar** para mudar o fundo da pré-visualização e clique em **▶ Repetir animação** para tocar a animação do alerta de novo.

### Estilo unificado / Individual por plataforma

- **Estilo unificado**: todas as plataformas usam o mesmo estilo de alerta.
- **Individual por plataforma**: cada plataforma tem seu próprio estilo. Escolha a plataforma com os botões abaixo (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) e edite as configurações dela. Na primeira troca, as plataformas que você ainda não personalizou copiam o estilo unificado atual, cada uma com sua própria cor da barra de contagem regressiva.

**Restaurar padrão** restaura o estilo padrão do estilo que você está editando.

### Imagem

- **Escolher imagem**: escolha uma imagem no gerenciador de recursos. Sem imagem, aparece um emoji de coração. **Limpar** remove a imagem.
- **Tamanho da imagem**: 1–400 px.
- **Posição da imagem**: **À esquerda**, **À direita**, **Acima** ou **Abaixo**.

### Som

Escolha um som integrado: **Nenhum**, **Sino** (padrão), **Moeda**, **Campainha**, **Pop**, **Fanfarra**. Clique em **▶** para ouvir. Clique em **Escolher som** para usar seu próprio arquivo de som do gerenciador de recursos.

### Exibição de texto

- **Padrão**: valor, nome do doador e mensagem aparecem em linhas separadas.
- **Texto personalizado**: escreva sua própria frase. Use `{name}` para o nome do doador e `{amount}` para o valor, ex.: `Obrigado, {name}, pela doação de {amount}!`

### Texto e cor

- **Texto**: defina fonte, tamanho e cor de **Valor**, **Nome do doador** e **Mensagem** (e de **Texto personalizado** no modo Texto personalizado).
- **Cor**: **Fundo**, **Sombra** e **Barra de contagem regressiva**.

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS do estilo que você está editando (unificado ou a plataforma selecionada). **Restaurar padrão** restaura o CSS do modelo, e **Gerenciar recursos** abre o gerenciador de recursos. Temas do Steam Workshop também podem ser aplicados aqui. Enquanto um tema estiver aplicado, o CSS fica somente leitura. Veja [Temas](./themes).

## Testar alertas

Na página **Configurações**, clique em **Testar notificação** ao lado de **Integração de plataformas de doação**:

1. Preencha **Nome de teste**, **Mensagem de teste** e **Valor de teste** e escolha uma **Plataforma de teste**
2. Clique em **Enviar notificação de teste**

A seção **Teste de Super Chat do YouTube** permite inserir um **Texto do valor** bruto (ex.: `$5.00`, `¥500`, `NT$150`) e clicar em **Enviar Super Chat de teste** para testar a leitura do valor e a conversão de moeda.

:::note
Um alerta de teste é tratado como uma doação real: ele também é somado à [Barra de doações](./donate) e ao [Painel de doações](./sponsors) se essas plataformas estiverem marcadas lá.
:::

:::info Versão de teste
O CSS personalizado só está disponível na versão completa. Os gateways de pagamento reais (PayPal / Stripe / O'Pay / ECPay), os eventos de assinatura do YouTube e as Joias não podem ser usados na versão de teste, e o alerta mostra uma marca d'água no OBS. Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: Não há som na transmissão?**
Verifique se **Controlar áudio via OBS** está marcado nas propriedades da fonte de navegador e se a fonte não está mutada no mixer do OBS. Verifique também se **Som** não está definido como **Nenhum**.

**Q: Adicionei a fonte do OBS depois. Ela vai repetir os alertas anteriores?**
Não. Uma fonte recém-aberta só mostra os alertas que chegam depois que ela se conecta.
