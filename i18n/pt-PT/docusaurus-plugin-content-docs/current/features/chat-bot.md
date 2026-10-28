---
sidebar_position: 18
---

# Bot de chat

Publica mensagens no seu chat automaticamente: mensagens programadas num intervalo definido e respostas por palavra-chave quando um espectador escreve um comando. O bot publica a partir da sua própria conta.

O bot de chat não tem overlay para o OBS, por isso não há URL para adicionar.

:::tip
Ative o interruptor junto a **Bot de chat** no menu esquerdo. Enquanto estiver desligado, o bot não envia nada.
:::

A página tem três separadores: **Definições**, **Mensagens programadas** e **Respostas por palavra-chave**.

## Separador Definições

Em **Plataformas**, clique em **Twitch** para a ativar (clique novamente para a desativar). O ponto ao lado acende-se quando a Twitch está ligada; caso contrário, mostra **(não ligado)**. Ligue primeiro a Twitch: [Definições do Twitch](../platforms/twitch).

O **YouTube** aparece como **Brevemente** e ainda não pode ser ativado.

Se nenhuma plataforma estiver ligada, os outros dois separadores mostram "Nenhuma plataforma ligada, por isso o bot não enviará nada." com um botão **Ir para definições**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Mensagens programadas

Publica uma mensagem de tempos a tempos enquanto está em direto.

1. Clique em **+ Adicionar**
2. Preencha:
   - **Mensagem**: o texto a publicar (até 500 caracteres na Twitch). É sempre uma única linha: Enter não faz nada e as quebras de linha coladas passam a espaços
   - **Intervalo**: minutos entre publicações (5–240, predefinição 15)
   - **Mín. de mensagens**: quantas novas mensagens no chat são necessárias desde a última publicação antes de voltar a publicar (0–100, predefinição 2), para não continuar a publicar num chat vazio
   - **Plataformas**: onde publicar
3. Clique em **Guardar**

Como publica:

- Só enquanto a sua transmissão estiver em direto. A primeira publicação acontece um intervalo completo depois de entrar em direto, não no momento em que a transmissão começa
- Se várias mensagens programadas tiverem de ser publicadas ao mesmo tempo, são espaçadas em vez de publicadas juntas

## Respostas por palavra-chave

Responde quando a mensagem de um espectador começa por um comando.

1. Clique em **+ Adicionar**
2. Preencha:
   - **Comando**: escolha o prefixo (`! @ # $ % & ~`) e escreva uma palavra sem espaços, por exemplo `!dc`. É comparado com a primeira palavra de uma mensagem do chat, ignorando maiúsculas/minúsculas
   - **Resposta**: o texto a publicar. `{user}` é substituído pelo nome do espectador que usou o comando
   - **Intervalo**: segundos até o mesmo comando poder responder novamente (0–3600, predefinição 5)
   - **Plataformas**: onde responder
3. Clique em **Guardar**

As respostas por palavra-chave funcionam a qualquer momento, em direto ou não.

Um comando não pode ser igual ao de outra resposta por palavra-chave, nem a um comando já usado pelos [Pedidos de música](./song-request) ou pela palavra-chave dos [Sorteios](./lottery).

## Gerir a lista

Em ambos os separadores, cada item tem:

- Uma caixa de verificação à esquerda para ativar ou desativar o item sem o eliminar
- Etiquetas de plataforma; uma etiqueta esbatida significa que essa plataforma está desativada no separador Definições
- **Editar** e **Eliminar**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Limites da versão de teste
- 1 mensagem programada e 1 resposta por palavra-chave
- Todas as mensagens terminam com ` (by StreamToolkit)`, por isso o comprimento máximo da mensagem é menor

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::
