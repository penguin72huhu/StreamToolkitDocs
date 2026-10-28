---
sidebar_position: 2
---

# Controlo de cenas do OBS

O **Controlo de cenas do OBS** permite mudar de cena e mostrar/ocultar fontes no seu software de transmissão com atalhos globais ou a partir das [Ferramentas rápidas](./quick-tools). Funciona com o **OBS Studio**, o **Streamlabs** e o **Meld Studio**.

Esta funcionalidade não tem overlay, por isso não há nada a adicionar no OBS como fonte de navegador.

:::info
Os atalhos só funcionam enquanto o interruptor **Controlo de cenas do OBS** na barra lateral estiver ativo. Funcionam mesmo quando a janela do Stream Toolkit está minimizada na área de notificação.
:::

A página de definições tem dois separadores: **Ligação** e **Atalhos**.

## Separador Ligação

### Passo 1: Escolher o software

Em **Software**, escolha **OBS Studio**, **Streamlabs** ou **Meld Studio**. Só pode ser alterado enquanto estiver desligado.

Cada software guarda os seus próprios atalhos e lista de cenas, por isso mudar de software mostra as definições desse software.

### Passo 2: Preparar o software

#### OBS Studio

1. No OBS, abra **Ferramentas → Definições do servidor WebSocket**
2. Marque **Ativar servidor WebSocket**
3. Clique em **Mostrar informações de ligação** para ver a palavra-passe
4. No Stream Toolkit, preencha **Anfitrião** (predefinição `localhost`), **Porta** (predefinição `4455`) e **Palavra-passe**

#### Streamlabs / Meld Studio

Não é preciso configurar nada — basta ter o programa em execução.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Passo 3: Ligar

Clique em **Ligar**. O **Estado** muda para **Ligado** (no OBS e no Meld também é mostrado o número da versão). Clique em **Desligar** para terminar a ligação.

**Ligar ao iniciar** (ativo por predefinição): liga automaticamente quando o Stream Toolkit inicia e quando ativa o interruptor da funcionalidade. Desativar o interruptor da funcionalidade termina a ligação.

### Cenas

A secção **Cenas** lista as suas cenas e quantas fontes tem cada uma; a cena atual fica destacada. Clique em **Atualizar** para obter a lista mais recente depois de alterar cenas no seu software.

Quando está desligado, continua a ser mostrada a última lista obtida.

## Separador Atalhos

Para definir um atalho, clique em **Clique para definir o atalho** e prima a combinação de teclas. Prima `Esc` para cancelar. Se a combinação já estiver a ser usada por outra funcionalidade, aparece **Conflito de atalho** e não é guardada. Clique em **✕** junto a um atalho para o limpar.

### Mudar de cena

1. Clique em **Adicionar**
2. Defina um atalho
3. Escolha a cena para a qual mudar

Clique em **✕** no fim da linha para a eliminar.

### Alternar fontes

Um atalho pode controlar várias fontes da mesma cena de uma só vez.

1. Clique em **Adicionar**
2. Defina um atalho
3. Introduza um **Nome** (opcional — usado como rótulo do botão nas Ferramentas rápidas; se estiver vazio, é usado o nome da cena)
4. Escolha a cena a que as fontes pertencem
5. Clique em **Adicionar fonte**, escolha uma fonte e selecione **Mostrar**, **Ocultar** ou **Alternar** (predefinição **Alternar**)
6. Repita o passo 5 para mais fontes

Mudar a cena de uma entrada limpa a respetiva lista de fontes.

:::tip
Uma cena ou fonte que já não exista no seu software fica marcada a vermelho. Escolha-a novamente na lista.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Utilizar a partir das Ferramentas rápidas

Quando a funcionalidade está ativa e existe pelo menos uma entrada de atalho, as [Ferramentas rápidas](./quick-tools) mostram um cartão **Controlo de cenas do OBS** com um botão por entrada. Clicar num botão faz o mesmo que premir o respetivo atalho.

## Mensagens de erro

Quando um atalho ou botão é usado, podem aparecer estas mensagens:

| Mensagem | Significado |
|---------|---------|
| **Não ligado ao OBS** | Sem ligação — vá ao separador **Ligação** e clique em **Ligar** |
| **Cena "…" não encontrada** | A cena foi renomeada ou eliminada no seu software |
| **Fontes não encontradas: …** | Essas fontes já não existem na cena |

## Limites da versão de teste

:::info
A versão de teste permite **1** entrada de atalho no total (Mudar de cena e Alternar fontes em conjunto). Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: Disse que não consegue chegar ao OBS e não voltou a tentar depois de eu abrir o OBS.**
Se a primeira tentativa de ligação falhar (por exemplo, o OBS ainda não estava em execução), o Stream Toolkit não continua a tentar. Abra o seu software de transmissão e clique em **Ligar**. Depois de uma ligação ter sido bem-sucedida, volta a ligar automaticamente se a ligação cair.
