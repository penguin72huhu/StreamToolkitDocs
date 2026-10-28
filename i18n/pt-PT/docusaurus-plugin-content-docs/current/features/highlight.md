---
sidebar_position: 6
---

# Marcador de destaques da stream

Prima um atalho durante a transmissão para registar "em que ponto da transmissão" aconteceu um destaque. Mais tarde, pode usar a lista de tempos para encontrar os destaques no seu VOD ao editar.

Os marcadores são guardados no Stream Toolkit. Esta funcionalidade não tem overlay para o OBS, por isso não precisa de adicionar uma fonte do OBS.

A página tem dois separadores: **Definições** e **Registo de destaques**.

:::tip
Ative o interruptor junto a **Marcador de destaques da stream** na barra lateral esquerda. Enquanto estiver desligado, nem o atalho nem o botão **MARK** adicionam um marcador.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Passo 1: Escolher a fonte

A **Fonte** decide como é calculado o tempo da transmissão:

| Fonte | Como o tempo é calculado | Requisito |
|--------|----------------------------|-------------|
| **Twitch** | Tempo desde o início da sua transmissão atual na Twitch | Twitch ligada. Consulte [Definições do Twitch](../platforms/twitch) |
| **YouTube** | Tempo desde o início da sua transmissão em direto atual no YouTube | Início de sessão com a Google. Consulte [Definições do YouTube](../platforms/youtube-settings) |
| **Alinhamento manual** (predefinição) | O valor do temporizador manual desta página | Nenhum |

Um ponto junto a **Twitch** e **YouTube** mostra se está ligado. Se não estiver, a opção mostra **(não ligado)** ou **(sem sessão iniciada na Google)**.

Se marcar quando não está em direto (ou, com **Alinhamento manual**, enquanto o temporizador estiver parado), o tempo é registado como **Sem transmissão**. Com a fonte **Twitch**, este resultado pode demorar cerca de 20 segundos a aparecer, porque o Stream Toolkit tenta algumas vezes caso a Twitch ainda não tenha registado uma transmissão que acabou de começar.

### Temporizador manual

Quando **Alinhamento manual** está selecionado, aparece um **Temporizador manual**:

1. Introduza o tempo atual da transmissão no formato `HH:MM:SS` (por exemplo `00:00:00` no momento em que entra em direto)
2. Clique em **Iniciar sincronização de tempo**. O temporizador começa a contar a partir desse valor
3. Cada marcador usa o valor atual do temporizador
4. Clique em **Parar** para parar o temporizador

### Criar clipe do Twitch ao marcar

Esta opção só aparece quando a fonte é **Twitch**. Quando está ativa, cada marcador também cria um clipe da Twitch.

- Tem de estar em direto. O clipe tem cerca de 30 segundos
- Os clipes são guardados em Painel do criador → Conteúdo → Clipes
- Depois de marcar, a página mostra **Clipe do Twitch criado**, ou o motivo da falha: **Não está em direto**, **Permissão em falta; reconecte o Twitch**, **Twitch não ligado** ou **Falhou; tente novamente**

## Passo 2: Definir o atalho

O atalho predefinido é `Ctrl+Shift+M`. Para o mudar:

1. Clique no botão do atalho
2. Prima a combinação de teclas que quer e solte-a. Prima **Esc** para cancelar
3. Para o remover, clique em **Limpar**

Se a combinação já estiver a ser usada por outra funcionalidade, o botão mostra **Este atalho já está em uso** e o atalho não é guardado. O atalho funciona mesmo quando o Stream Toolkit não é a janela ativa.

Também pode clicar no botão **MARK** por baixo do atalho. Faz o mesmo que o atalho. A janela das [Ferramentas rápidas](./quick-tools) também tem um botão **MARK**.

## Passo 3: Marcar durante a transmissão

1. (Opcional) Escreva um nome em **Nome do marcador** antes de marcar. Se o deixar em branco, os marcadores são numerados automaticamente (`精華標記_1`, `精華標記_2`, …)
2. Prima o atalho ou clique em **MARK**

O nome que escreveu só é usado no marcador seguinte, e o campo é limpo depois.

## Registo de destaques

O separador **Registo de destaques** lista todos os marcadores, do mais recente para o mais antigo. Cada linha mostra o tempo da transmissão, o nome, a fonte e a data e hora em que marcou.

- **Copiar**: copia o marcador como texto, no formato `[data] nome 🎬 tempo da transmissão (fonte)`
- **🗑️**: clique nele e depois em **Confirmar eliminação** para eliminar o marcador
- **Abrir clipe do Twitch**: aparece quando foi criado um clipe da Twitch para este marcador. Abre o clipe na Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Limites da versão de teste
**Criar clipe do Twitch ao marcar** não está disponível. Aparece como "Ativar na versão completa".

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
