---
sidebar_position: 6
---

# Marcador de destaques da stream

Pressione um atalho durante a live para registrar "em que ponto da transmissão" um destaque aconteceu. Depois, você pode usar a lista de tempos para encontrar os destaques no VOD na hora de editar.

As marcações são salvas no Stream Toolkit. Este recurso não tem overlay no OBS, então não é preciso adicionar uma fonte do OBS.

A página tem duas abas: **Configurações** e **Registros de destaques**.

:::tip
Ative o botão ao lado de **Marcador de destaques da stream** na barra lateral esquerda. Enquanto ele estiver desligado, nem o atalho nem o botão **MARK** adicionam marcações.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Passo 1: Escolher a fonte

A **Fonte** decide como o tempo da transmissão é calculado:

| Fonte | Como o tempo é calculado | Requisito |
|-------|--------------------------|-----------|
| **Twitch** | Tempo desde o início da sua live atual na Twitch | Twitch conectada. Veja [Configurações do Twitch](../platforms/twitch) |
| **YouTube** | Tempo desde o início da sua live atual no YouTube | Login com o Google. Veja [Configurações do YouTube](../platforms/youtube-settings) |
| **Alinhamento manual** (padrão) | O valor do cronômetro manual desta página | Nenhum |

Um ponto ao lado de **Twitch** e **YouTube** mostra se estão conectados. Caso não estejam, a opção mostra **(Não conectado)** ou **(sem login no Google)**.

Se você marcar sem estar ao vivo (ou, em **Alinhamento manual**, com o cronômetro parado), o tempo é registrado como **Sem transmissão**. Com a fonte **Twitch**, esse resultado pode levar cerca de 20 segundos para aparecer, porque o Stream Toolkit tenta algumas vezes caso a Twitch ainda não tenha registrado uma live que acabou de começar.

### Cronômetro manual

Quando **Alinhamento manual** está selecionado, aparece um **Cronômetro manual**:

1. Insira o tempo atual da transmissão como `HH:MM:SS` (por exemplo, `00:00:00` no momento em que você entra ao vivo)
2. Clique em **Iniciar sincronização**. O cronômetro começa a contar a partir desse valor
3. Cada marcação usa o valor atual do cronômetro
4. Clique em **Parar** para parar o cronômetro

### Criar clipe do Twitch ao marcar

Esta opção só aparece quando a fonte é **Twitch**. Quando está ligada, cada marcação também cria um clipe na Twitch.

- Você precisa estar ao vivo. O clipe dura cerca de 30 segundos
- Os clipes ficam em Painel do criador → Conteúdo → Clipes
- Depois de marcar, a página mostra **Clipe do Twitch criado** ou o motivo da falha: **Você não está ao vivo**, **Permissão ausente; reconecte o Twitch**, **Twitch não conectado** ou **Falhou; tente novamente**

## Passo 2: Definir o atalho

O atalho padrão é `Ctrl+Shift+M`. Para mudá-lo:

1. Clique no botão do atalho
2. Pressione a combinação de teclas desejada e solte. Pressione **Esc** para cancelar
3. Para removê-lo, clique em **Limpar**

Se a combinação já estiver em uso por outro recurso, o botão mostra **Este atalho já está em uso** e o atalho não é salvo. O atalho funciona mesmo quando o Stream Toolkit não é a janela ativa.

Você também pode clicar no botão **MARK** abaixo do atalho. Ele faz o mesmo que o atalho. A janela de [Ferramentas rápidas](./quick-tools) também tem um botão **MARK**.

## Passo 3: Marcar durante a live

1. (Opcional) Digite um nome em **Nome da marcação** antes de marcar. Se deixar em branco, as marcações são numeradas automaticamente (`精華標記_1`, `精華標記_2`, …)
2. Pressione o atalho ou clique em **MARK**

O nome digitado vale só para a próxima marcação, e o campo é limpo em seguida.

## Registros de destaques

A aba **Registros de destaques** lista todas as marcações, da mais nova para a mais antiga. Cada linha mostra o tempo da transmissão, o nome, a fonte e a data e hora em que você marcou.

- **Copiar**: copia a marcação como texto, no formato `[data] nome 🎬 tempo da transmissão (fonte)`
- **🗑️**: clique nele e depois em **Confirmar exclusão** para excluir a marcação
- **Abrir clipe do Twitch**: aparece quando um clipe da Twitch foi criado para esta marcação. Abre o clipe na Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Limites da versão de teste
**Criar clipe do Twitch ao marcar** não está disponível. Aparece como "Disponível na versão completa".

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
