---
sidebar_position: 9
---

# Painel de doações

Mostra na transmissão uma lista das doações recentes: ícone da plataforma, nome do doador, valor e mensagem.

## URL da fonte do OBS

```
http://127.0.0.1:7272/sponsors
```

Copie a URL no topo da página **Configurações de Painel de doações** e adicione-a ao OBS como Fonte de Navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source).

Use o botão ao lado de **Painel de doações** na barra lateral esquerda para mostrar ou ocultar o painel no OBS. Quando ele está desligado, o painel desaparece gradualmente. As doações continuam sendo registradas com ele desligado.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Aba Configurações

### Plataforma de integração

Marque as plataformas cujas doações devem ser registradas: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Um ponto verde indica que a plataforma está conectada; caso contrário, a linha mostra **(Não conectado)**. Essas caixas afetam só o painel, não a Barra de doações nem os Alertas de doações.

**Twitch ⚙️** (aparece quando a Twitch está conectada e marcada):

1. Escolha **Contar Bits e inscrições**, **Contar apenas Bits** ou **Contar apenas inscrições**
2. **Contar reinscrições**: se as reinscrições são registradas (aparece quando as inscrições são contadas)
3. **Menos de [N] Bits não são contabilizados**: marque e insira um mínimo para que cheers menores não sejam registrados (aparece quando os Bits são contados)
4. Clique em **Salvar**

**YouTube ⚙️**:

- **Mostrar o nome dos espectadores em vez do @identificador**: só fica disponível depois que você entra com o Google.
- **Eventos contabilizados**: **Super Chat**, **Super Sticker**, **Novo membro**, **Renovação de assinatura**, **Assinatura presenteada**, **Joias**. **Joias** exige login com o Google. Os presentes de Joias aparecem como um ícone de joia com o número de joias em vez de um valor em dinheiro.

Se o chat ao vivo do YouTube não estiver vinculado, a linha mostra **URL do chat não conectada** com **Conectar automaticamente** (exige login com o Google) e **Inserir manualmente** (leva ao campo de URL do chat nas Configurações). Se um evento de assinatura estiver marcado mas não houver preços de assinatura definidos, clique em **⚠ Sem preços de assinatura** para defini-los. Veja [Configurações do YouTube](../platforms/youtube-settings).

Para conectar PayPal, Stripe, O'Pay ou ECPay, veja [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) e [ECPay](../payments/ecpay).

### Configurações

| Campo | Descrição |
|-------|-----------|
| **Converter automaticamente para a própria moeda** | Ligado por padrão. Mostra os valores convertidos para a **Moeda das doações** definida na página Configurações. |
| **Máximo exibido** | Quantos registros manter (1–100). Padrão: 20. Quando chega uma nova doação além desse limite, o registro mais antigo é removido. |

## Aba Aparência

### Pré-visualização

Use o seletor de cor ao lado de **Pré-visualizar** para mudar o fundo da pré-visualização. Clique em **Testar animação de adição** para tocar a animação de entrada com um registro de exemplo. O exemplo não é salvo no histórico.

Clique em **Restaurar padrão** para restaurar a aparência padrão.

### Configurações de exibição

- **Mostrar ícone da plataforma**: mostra o ícone da plataforma em cada registro.
- **Direção de entrada**: **De cima para baixo** (padrão), **De baixo para cima**, **Da esquerda para a direita** ou **Da direita para a esquerda**.

### Fonte

Defina a fonte, a cor e o tamanho (8–72 px) de **Título** (nome do doador), **Corpo do texto** (mensagem) e **Valor**.

### Cor de fundo

- **Padrão**: cor de fundo de todos os registros.
- **+ Adicionar faixa**: adiciona uma cor com uma faixa de **Valor** (**Mínimo** ~ **Máximo**). Os registros cujo valor cai na faixa usam essa cor. Deixe Mínimo ou Máximo vazio para não ter limite daquele lado. Clique em **✕** para remover uma faixa.

Quando **Converter automaticamente para a própria moeda** está ligado, a faixa é comparada com o valor convertido.

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS do painel. **Restaurar padrão** restaura o CSS padrão, e **Gerenciar recursos** abre o gerenciador de recursos. Temas do Steam Workshop também podem ser aplicados aqui. Enquanto um tema estiver aplicado, o CSS fica somente leitura. Veja [Temas](./themes).

## Aba Histórico

### Adicionar manualmente (para teste)

Escolha uma plataforma, insira **Nome**, **Valor** e, se quiser, **Mensagem (opcional)**, e clique em **Adicionar**. O registro só é adicionado se aquela plataforma estiver marcada em **Plataforma de integração**. O valor é tratado como estando na sua moeda das doações.

### Histórico

Lista os registros salvos com a contagem de registros.

- Clique em **🗑** e depois em **Confirmar exclusão** para excluir um registro.
- Clique em **Limpar** para excluir todos os registros. Uma confirmação aparece antes. Isso não pode ser desfeito.

:::info Versão de teste
O CSS personalizado só está disponível na versão completa. Os gateways de pagamento reais (PayPal / Stripe / O'Pay / ECPay), os eventos de assinatura do YouTube e as Joias não podem ser usados na versão de teste, e o painel mostra uma marca d'água no OBS. Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: Os alertas de teste aparecem no painel.**
O **Testar notificação** da página Configurações é tratado como uma doação real, então também é registrado aqui se aquela plataforma estiver marcada. Exclua-o na aba **Histórico**.
