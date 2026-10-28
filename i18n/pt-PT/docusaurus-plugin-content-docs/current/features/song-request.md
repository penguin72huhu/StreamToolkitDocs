---
sidebar_position: 17
---

# Pedidos de música

Os espectadores pedem músicas do YouTube com um comando no chat, e as músicas são reproduzidas no OBS umas a seguir às outras. Também pode adicionar músicas manualmente e definir uma lista de reprodução predefinida que toca quando não há pedidos.

## URL da fonte do OBS

```
http://127.0.0.1:7272/song-request
```

Clique em **Copiar** junto a **URL da fonte OBS** no topo da página e adicione-o ao OBS como fonte de navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source).

:::warning
Os pedidos de música reproduzem som. Nas propriedades da fonte de navegador, marque **Controlar áudio via OBS**, caso contrário a música não chegará à sua transmissão.
:::

:::tip
Ative também o interruptor junto a **Pedidos de música** no menu esquerdo. Os comandos do chat só são processados enquanto o interruptor estiver ativo.
:::

A página tem dois separadores: **Definições** e **Lista de reprodução**.

## Separador Definições

### Plataforma

Cada plataforma tem o seu próprio cartão:

- **Permitir pedidos de música nesta plataforma**: permite que os espectadores desse chat peçam músicas
- **Ativar respostas do bot de chat** (só Twitch, ativo por predefinição): responde no chat da Twitch com o resultado de cada comando, usando a sua conta da Twitch ligada. Só aparece quando a Twitch está ativada e ligada

Uma plataforma que não esteja ligada mostra **(não ligado)** (Twitch) ou **URL do chat não ligado** (YouTube). Ligue-a primeiro:

- [Definições do Twitch](../platforms/twitch)
- [Definições do YouTube](../platforms/youtube-settings)

### Comandos de chat

| Campo | Predefinição |
|------|--------|
| **Prefixo de comando** | `!` (escolha entre `! @ # $ % & ~`) |
| **Comando de pedido** | `sr` |
| **Remover pedido** | `remove` |
| **Ver lista de pedidos** | `queue` |
| **Consultar música atual** | `song` |
| **Tempo de espera entre pedidos** | 3000 ms |

O tempo de espera é contado por espectador: depois de um pedido bem-sucedido, o mesmo espectador tem de esperar este tempo antes de voltar a pedir.

### Definições

- **Mostrar vídeo no ecrã** (ativo por predefinição): quando desativado, o vídeo fica oculto no OBS mas o áudio continua a tocar
- **Limite da lista** (1–100, predefinição 20): o número máximo de músicas pedidas na lista. As músicas da lista de reprodução predefinida não contam
- **Mostrar notificação de pedido** (ativo por predefinição): mostra um cartão de notificação no OBS quando um espectador pede, remove ou não consegue pedir uma música. Quando ativo, pode definir:
  - **X** / **Y**: posição da notificação a partir do canto superior esquerdo (px, predefinição 16 / 16)
  - **Escala da notificação**: multiplicador de tamanho (predefinição 1.0)
  - **Testar aspeto da notificação**: envia uma notificação de teste para o OBS

Cada notificação fica 5 segundos; são mostradas até 3 de cada vez.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Como os espectadores o usam

Com as definições predefinidas:

| Comando | O que faz |
|------|------|
| `!sr <ligação do YouTube>` | Pede esse vídeo |
| `!sr <palavras de pesquisa>` | Pesquisa no YouTube e pede o primeiro resultado |
| `!remove` | Remove o pedido mais recente do espectador (não a música que está a tocar) |
| `!queue` | Responde com as próximas 3 músicas pedidas |
| `!song` | Responde com a música que está a tocar |

- Ligações aceites: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…`, ou um ID de vídeo de 11 caracteres
- As ligações de listas de reprodução não são aceites
- Um pedido falha quando a lista atingiu o **Limite da lista**
- Os novos pedidos ficam na fila depois dos pedidos dos outros espectadores, à frente das músicas da lista de reprodução predefinida
- `!queue` e `!song` só funcionam no chat da Twitch com **Ativar respostas do bot de chat** ativo

## Separador Lista de reprodução

### Controlos de reprodução

A linha superior mostra quem pediu a música atual e o respetivo título. Botões:

- **Reproduzir** / **Pausar**: se nada estiver a tocar, começa pela primeira música da lista
- **Parar**: para a reprodução
- **Seguinte**: salta para a música seguinte

Enquanto uma música toca, aparece uma barra de progresso; arraste-a para saltar para uma posição. Quando uma música termina, a seguinte começa automaticamente.

:::note
Nada é reproduzido automaticamente quando a aplicação inicia. Prima **Reproduzir** para começar.
:::

### Lista de reprodução predefinida

Cole o URL de uma lista de reprodução do YouTube e escolha **Reprodução em ciclo** ou **Reprodução aleatória**. Quando a lista se esgota, uma música desta lista de reprodução é adicionada e reproduzida automaticamente. Estas músicas aparecem como **Lista predefinida** na lista.

A lista de reprodução predefinida é lida através da sua conta do YouTube, por isso tem de iniciar primeiro sessão com a Google nas [Definições do YouTube](../platforms/youtube-settings).

### Pedir música manualmente

Cole o URL de um vídeo do YouTube e clique em **Adicionar à lista** (ou prima Enter). Os pedidos manuais não suportam palavras de pesquisa.

### Lista

**Lista (n)** mostra todas as músicas: plataforma, quem pediu, título e ID do vídeo (clique para abrir no YouTube). Clique em **Eliminar** para remover uma música; eliminar a música que está a tocar salta para a seguinte. **Limpar** esvazia a lista inteira.

{/* TODO: 截圖 — 播放清單分頁 */}

## Perguntas frequentes

**Q: Os espectadores escrevem o comando mas nada acontece?**
Verifique se:
- O interruptor **Pedidos de música** no menu esquerdo está ativo
- **Permitir pedidos de música nesta plataforma** está marcado para essa plataforma
- Na Twitch: o chat da Twitch é lido pela funcionalidade [Chat](./chat). Se desativou a Twitch na página Chat (e o [Bot de chat](./chat-bot) não estiver a usar a Twitch), os comandos da Twitch não são recebidos

**Q: A lista de reprodução predefinida não toca?**
Certifique-se de que tem sessão iniciada com a Google nas Definições e de que o URL é uma ligação de lista de reprodução (contém `list=`).

:::info Limites da versão de teste
- Os pedidos dos espectadores pelo chat só estão disponíveis na versão completa. Na versão de teste, um pedido feito no chat falha com a mensagem "Pedidos de músicas não estão disponíveis na versão de avaliação". **Pedir música manualmente** e a lista de reprodução predefinida continuam a funcionar
- O overlay do OBS mostra uma marca de água

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::
