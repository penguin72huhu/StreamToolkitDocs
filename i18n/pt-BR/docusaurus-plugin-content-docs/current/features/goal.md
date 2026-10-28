---
sidebar_position: 10
---

# Barra de metas do Twitch

Mostra na transmissão barras de progresso para suas metas de seguidores, inscrições e Bits na Twitch. Cada tipo de meta tem sua própria barra, suas próprias configurações e sua própria URL do OBS.

:::note Antes de começar
As barras de meta contam eventos da Twitch, então conecte sua conta da Twitch primeiro. Veja [Configurações do Twitch](../platforms/twitch).
:::

## Passo 1: Escolher um tipo de meta e adicionar a fonte do OBS

No topo da página, escolha um tipo de meta: **Seguir**, **Inscrição** ou **Bits**. A **URL do OBS** abaixo dos botões muda de acordo. Clique em **Copiar** para copiá-la.

| Tipo de meta | URL da fonte do OBS |
|--------------|---------------------|
| **Seguir** | `http://127.0.0.1:7272/goal/follow` |
| **Inscrição** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Adicione cada barra que você quer mostrar ao OBS como uma fonte de navegador separada. Veja [Como adicionar fontes no OBS](../getting-started/obs-source). As barras de meta não tocam som, então não é preciso ativar "Controlar áudio via OBS".

:::tip
Ative também o botão ao lado de **Barra de metas do Twitch** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto ele estiver desligado, as barras ficam ocultas no OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Passo 2: Definir a meta

Todas as configurações abaixo se aplicam ao tipo de meta escolhido no topo.

- **Título**: o texto do título exibido na barra
- **Meta**: o número alvo (números inteiros, 0 ou mais)
- **Progresso**: mostra a contagem atual, a meta e a porcentagem

### Como o progresso é contado

| Tipo de meta | O que soma ao progresso |
|--------------|-------------------------|
| **Seguir** | Cada novo seguidor soma 1. Enquanto a Twitch estiver conectada, a contagem também é sincronizada com o total de seguidores do seu canal na Twitch a cada 30 segundos. Clique em **Sincronizar** para sincronizar na hora |
| **Inscrição** | Novas inscrições e inscrições presenteadas (um presente de várias inscrições soma o número de inscrições presenteadas). As reinscrições só contam quando **Contar reinscrições** está ligado |
| **Bits** | Cada cheer soma o número de Bits enviados |

### Opções de inscrição

Só aparecem para **Inscrição**:

- **Ponderar por Tier (T1=+1, T2=+2, T3=+6)**: quando ligado, inscrições de tier mais alto somam mais ao progresso. Quando desligado, cada inscrição soma 1
- **Contar reinscrições**: quando ligado, as mensagens de reinscrição também somam ao progresso

### Redefinir o progresso

**Inscrição** e **Bits** têm um botão **Redefinir progresso**. Clique nele e depois em **Confirmar redefinição** para voltar a contagem atual a 0. O número da meta é mantido.

**Seguir** não tem botão de redefinir, porque a contagem acompanha o total de seguidores da Twitch.

## Passo 3: Ajustar a aparência

### Pré-visualização

A área **Pré-visualizar** no topo mostra a barra do tipo de meta selecionado. Use a caixa de cor ao lado dela para mudar o fundo da pré-visualização. Marque **Pré-visualizar meta atingida** para ver como a barra fica quando a meta é alcançada.

### Configurações de aparência

| Configuração | Descrição |
|--------------|-----------|
| **Cor de fundo** | Fundo da barra |
| **Cor da barra de progresso** | Cor da parte preenchida |
| **Cor ao atingir a meta** | Cor de preenchimento depois que a meta é alcançada |
| **Fonte do título** | Fonte, cor e tamanho (8–72 px) do título |
| **Fonte da meta** | Fonte, cor e tamanho (8–72 px) dos números |
| **Porcentagem** | Fonte, cor e tamanho (8–72 px) da porcentagem |

Clique em **Restaurar padrão** para restaurar a aparência do tipo de meta selecionado.

### CSS personalizado

Clique em **CSS personalizado** para expandir o editor. Cada tipo de meta tem seu próprio CSS. Use-o para layout e estrutura. Cores, fontes e tamanhos são definidos nas configurações de aparência acima.

- **Restaurar padrão**: restaura o CSS padrão
- **Gerenciar recursos**: abre o gerenciador de recursos para as imagens usadas no seu CSS

Se o seu CSS substituir uma propriedade com `!important`, o controle de aparência correspondente fica bloqueado, porque o CSS prevaleceria de qualquer forma.

:::info Limites da versão de teste
- O **CSS personalizado** só está disponível na versão completa
- O overlay do OBS mostra uma marca d'água

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
