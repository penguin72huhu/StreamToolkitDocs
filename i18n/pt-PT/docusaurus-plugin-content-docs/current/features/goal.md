---
sidebar_position: 10
---

# Barra de objetivos do Twitch

Mostre na transmissão barras de progresso para as suas metas de seguidores, subscrições e Bits da Twitch. Cada tipo de meta tem a sua própria barra, as suas próprias definições e o seu próprio URL do OBS.

:::note Antes de começar
As barras de objetivos contam eventos da Twitch, por isso ligue primeiro a sua conta da Twitch. Consulte [Definições do Twitch](../platforms/twitch).
:::

## Passo 1: Escolher um tipo de meta e adicionar a fonte do OBS

No topo da página, escolha um tipo de meta: **Seguidor**, **Subscrições** ou **Bits**. O **URL do OBS** por baixo dos botões muda em conformidade. Clique em **Copiar** para o copiar.

| Tipo de meta | URL da fonte do OBS |
|-----------|----------------|
| **Seguidor** | `http://127.0.0.1:7272/goal/follow` |
| **Subscrições** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Adicione cada barra que quer mostrar ao OBS como uma fonte de navegador separada. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source). As barras de objetivos não reproduzem som, por isso não precisa de ativar "Controlar áudio via OBS".

:::tip
Ative também o interruptor junto a **Barra de objetivos do Twitch** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto estiver desligado, as barras ficam ocultas no OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Passo 2: Definir a meta

Todas as definições abaixo aplicam-se ao tipo de meta escolhido no topo.

- **Título**: o texto do título mostrado na barra
- **Meta**: o número-alvo (números inteiros, 0 ou mais)
- **Progresso**: mostra a contagem atual, a meta e a percentagem

### Como o progresso é contado

| Tipo de meta | O que soma ao progresso |
|-----------|----------------------|
| **Seguidor** | Cada novo seguidor soma 1. Enquanto a Twitch estiver ligada, a contagem também é sincronizada com o total de seguidores do seu canal na Twitch a cada 30 segundos. Clique em **Sincronizar** para sincronizar de imediato |
| **Subscrições** | Novas subscrições e subscrições oferecidas (uma oferta de várias subscrições soma o número de subscrições oferecidas). As resubscrições só contam quando **Contar resubscrições** está ativo |
| **Bits** | Cada cheer soma o número de Bits enviados |

### Opções de subscrição

Só aparecem para **Subscrições**:

- **Ponderado por Tier (T1=+1, T2=+2, T3=+6)**: quando ativo, as subscrições de nível superior somam mais ao progresso. Quando desativado, cada subscrição soma 1
- **Contar resubscrições**: quando ativo, as mensagens de resubscrição também somam ao progresso

### Repor o progresso

**Subscrições** e **Bits** têm um botão **Repor progresso**. Clique nele e depois em **Confirmar reposição** para voltar a colocar a contagem atual a 0. O número da meta é mantido.

**Seguidor** não tem botão de reposição, porque a contagem acompanha o total de seguidores da Twitch.

## Passo 3: Ajustar o aspeto

### Pré-visualização

A **Pré-visualizar** no topo mostra a barra do tipo de meta selecionado. Use a caixa de cor ao lado para mudar o fundo da pré-visualização. Marque **Pré-visualizar concluído** para ver o aspeto da barra quando a meta é alcançada.

### Definições de aspeto

| Definição | Descrição |
|---------|-------------|
| **Cor de fundo** | Fundo da barra |
| **Cor da barra de progresso** | Cor da parte preenchida |
| **Cor ao atingir a meta** | Cor de preenchimento quando a meta é alcançada |
| **Texto do título** | Tipo de letra, cor e tamanho (8–72 px) do título |
| **Texto da meta** | Tipo de letra, cor e tamanho (8–72 px) dos números |
| **Percentagem** | Tipo de letra, cor e tamanho (8–72 px) da percentagem |

Clique em **Repor predefinição** para restaurar o aspeto do tipo de meta selecionado.

### CSS personalizado

Clique em **CSS personalizado** para expandir o editor. Cada tipo de meta tem o seu próprio CSS. Use-o para a disposição e a estrutura. As cores, os tipos de letra e os tamanhos definem-se nas definições de aspeto acima.

- **Repor predefinição**: restaura o CSS predefinido
- **Gerir recursos**: abre o gestor de recursos para as imagens usadas no seu CSS

Se o seu CSS substituir uma propriedade com `!important`, o controlo de aspeto correspondente fica bloqueado, porque o CSS prevaleceria de qualquer forma.

:::info Limites da versão de teste
- O **CSS personalizado** só está disponível na versão completa
- O overlay do OBS mostra uma marca de água

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
