---
sidebar_position: 2
---

# Controle de cenas do OBS

O **Controle de cenas do OBS** permite trocar de cena e mostrar/ocultar fontes no seu software de transmissão com atalhos globais ou pelas [Ferramentas rápidas](./quick-tools). Funciona com **OBS Studio**, **Streamlabs** e **Meld Studio**.

Este recurso não tem overlay, então não há nada para adicionar no OBS como fonte de navegador.

:::info
Os atalhos só funcionam enquanto o botão **Controle de cenas do OBS** na barra lateral estiver ligado. Eles funcionam mesmo com a janela do Stream Toolkit minimizada na bandeja.
:::

A página de configurações tem duas abas: **Conexão** e **Atalhos**.

## Aba Conexão

### Passo 1: Escolher o software

Em **Software**, escolha **OBS Studio**, **Streamlabs** ou **Meld Studio**. Isso só pode ser alterado enquanto estiver desconectado.

Cada software guarda seus próprios atalhos e sua lista de cenas, então trocar de software mostra as configurações daquele software.

### Passo 2: Preparar o software

#### OBS Studio

1. No OBS, abra **Ferramentas → Configurações do servidor WebSocket**
2. Marque **Ativar servidor WebSocket**
3. Clique em **Mostrar informações de conexão** para ver a senha
4. No Stream Toolkit, preencha **Host** (padrão `localhost`), **Porta** (padrão `4455`) e **Senha**

#### Streamlabs / Meld Studio

Não é preciso configurar nada — basta deixar o programa aberto.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Passo 3: Conectar

Clique em **Conectar**. O **Estado** muda para **Conectado** (no OBS e no Meld, o número da versão também aparece). Clique em **Desconectar** para encerrar a conexão.

**Conectar ao iniciar** (ligado por padrão): conecta automaticamente quando o Stream Toolkit inicia e quando você liga o botão do recurso. Desligar o botão do recurso desconecta.

### Cenas

A seção **Cenas** lista suas cenas e quantas fontes cada uma tem; a cena atual fica destacada. Clique em **Atualizar** para buscar a lista mais recente depois de mudar as cenas no seu software.

Quando desconectado, a última lista buscada continua aparecendo.

## Aba Atalhos

Para definir um atalho, clique em **Clique para definir o atalho** e pressione a combinação de teclas. Pressione `Esc` para cancelar. Se a combinação já estiver em uso por outro recurso, aparece **Conflito de atalho** e ela não é salva. Clique em **✕** ao lado de um atalho para limpá-lo.

### Trocar de cena

1. Clique em **Adicionar**
2. Defina um atalho
3. Escolha a cena para a qual trocar

Clique em **✕** no fim da linha para excluí-la.

### Alternar fontes

Um atalho pode controlar várias fontes da mesma cena ao mesmo tempo.

1. Clique em **Adicionar**
2. Defina um atalho
3. Insira um **Nome** (opcional — usado como rótulo do botão nas Ferramentas rápidas; se vazio, é usado o nome da cena)
4. Escolha a cena à qual as fontes pertencem
5. Clique em **Adicionar fonte**, escolha uma fonte e selecione **Mostrar**, **Ocultar** ou **Alternar** (padrão **Alternar**)
6. Repita o passo 5 para mais fontes

Mudar a cena de uma entrada limpa a lista de fontes dela.

:::tip
Uma cena ou fonte que não existe mais no seu software fica marcada em vermelho. Escolha-a de novo na lista.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Usar pelas Ferramentas rápidas

Quando o recurso está ligado e existe pelo menos uma entrada de atalho, as [Ferramentas rápidas](./quick-tools) mostram um cartão **Controle de cenas do OBS** com um botão para cada entrada. Clicar em um botão faz o mesmo que pressionar o atalho dele.

## Mensagens de erro

Ao usar um atalho ou botão, estas mensagens podem aparecer:

| Mensagem | Significado |
|----------|-------------|
| **Não conectado ao OBS** | Sem conexão — vá até a aba **Conexão** e clique em **Conectar** |
| **Cena “…” não encontrada** | A cena foi renomeada ou excluída no seu software |
| **Fontes não encontradas: …** | Essas fontes não existem mais na cena |

## Limites da versão de teste

:::info
A versão de teste permite **1** entrada de atalho no total (Trocar de cena e Alternar fontes somados). Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: Disse que não consegue acessar o OBS e não tentou de novo depois que abri o OBS.**
Se a primeira tentativa de conexão falhar (por exemplo, o OBS ainda não estava aberto), o Stream Toolkit não fica tentando de novo. Abra seu software de transmissão e clique em **Conectar**. Depois que uma conexão der certo, ele reconecta automaticamente se a conexão cair.
