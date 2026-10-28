---
sidebar_position: 18
---

# Bot de chat

Publica mensagens no seu chat automaticamente: mensagens programadas em um intervalo definido e respostas por palavra-chave quando um espectador digita um comando. O bot publica pela sua própria conta.

O bot de chat não tem overlay no OBS, então não há URL para adicionar.

:::tip
Ative o botão ao lado de **Bot de chat** no menu à esquerda. Enquanto ele estiver desligado, o bot não envia nada.
:::

A página tem três abas: **Configurações**, **Mensagens programadas** e **Respostas por palavra-chave**.

## Aba Configurações

Em **Plataformas**, clique em **Twitch** para ativá-la (clique de novo para desativar). O ponto ao lado acende quando a Twitch está conectada; caso contrário, aparece **(Não conectado)**. Conecte a Twitch primeiro: [Configurações do Twitch](../platforms/twitch).

O **YouTube** aparece como **Em breve** e ainda não pode ser ativado.

Se nenhuma plataforma estiver conectada, as outras duas abas mostram "Nenhuma plataforma conectada, então o bot não enviará nada." com um botão **Ir para configurações**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Mensagens programadas

Publica uma mensagem de tempos em tempos enquanto você está ao vivo.

1. Clique em **+ Adicionar**
2. Preencha:
   - **Mensagem**: o texto a publicar (até 500 caracteres na Twitch). É sempre uma linha só: Enter não faz nada e quebras de linha coladas viram espaços
   - **Intervalo**: minutos entre as publicações (5–240, padrão 15)
   - **Mín. de mensagens**: quantas mensagens novas no chat são necessárias desde a última publicação antes de publicar de novo (0–100, padrão 2), para não ficar publicando em um chat vazio
   - **Plataformas**: onde publicar
3. Clique em **Salvar**

Como publica:

- Só enquanto sua live estiver no ar. A primeira publicação acontece um intervalo inteiro depois que você entra ao vivo, não no momento em que a live começa
- Se várias mensagens programadas vencerem ao mesmo tempo, elas são espaçadas em vez de publicadas juntas

## Respostas por palavra-chave

Responde quando a mensagem de um espectador começa com um comando.

1. Clique em **+ Adicionar**
2. Preencha:
   - **Comando**: escolha o prefixo (`! @ # $ % & ~`) e digite uma palavra sem espaços, ex.: `!dc`. Ele é comparado com a primeira palavra da mensagem no chat, ignorando maiúsculas/minúsculas
   - **Resposta**: o texto a publicar. `{user}` é substituído pelo nome do espectador que usou o comando
   - **Recarga**: segundos até o mesmo comando poder responder de novo (0–3600, padrão 5)
   - **Plataformas**: onde responder
3. Clique em **Salvar**

As respostas por palavra-chave funcionam a qualquer momento, ao vivo ou não.

Um comando não pode ser igual ao de outra resposta por palavra-chave, nem a um comando já usado por [Pedidos de música](./song-request) ou pela palavra-chave de [Sorteios](./lottery).

## Gerenciar a lista

Nas duas abas, cada item tem:

- Uma caixa de seleção à esquerda para ativar ou desativar o item sem excluí-lo
- Etiquetas de plataforma; uma etiqueta apagada significa que essa plataforma está desativada na aba Configurações
- **Editar** e **Excluir**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Limites da versão de teste
- 1 mensagem programada e 1 resposta por palavra-chave
- Toda mensagem termina com ` (by StreamToolkit)`, então o tamanho máximo da mensagem é menor

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::
