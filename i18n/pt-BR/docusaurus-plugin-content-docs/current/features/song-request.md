---
sidebar_position: 17
---

# Pedidos de música

Os espectadores pedem músicas do YouTube com um comando no chat, e as músicas tocam no OBS uma após a outra. Você também pode adicionar músicas por conta própria e definir uma lista de reprodução padrão que toca quando não há pedidos.

## URL da fonte do OBS

```
http://127.0.0.1:7272/song-request
```

Clique em **Copiar** ao lado de **URL da fonte OBS** no topo da página e adicione-a ao OBS como fonte de navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source).

:::warning
Os pedidos de música tocam som. Nas propriedades da fonte de navegador, marque **Controlar áudio via OBS**, ou a música não chegará à sua transmissão.
:::

:::tip
Ative também o botão ao lado de **Pedidos de música** no menu à esquerda. Os comandos do chat só são processados enquanto o botão estiver ligado.
:::

A página tem duas abas: **Configurações** e **Lista de reprodução**.

## Aba Configurações

### Plataforma

Cada plataforma tem seu próprio cartão:

- **Permitir pedidos de música nesta plataforma**: permite que os espectadores daquele chat peçam músicas
- **Ativar respostas do bot de chat** (só Twitch, ligado por padrão): responde no chat da Twitch com o resultado de cada comando, usando sua conta da Twitch conectada. Só aparece quando a Twitch está ativada e conectada

Uma plataforma não conectada mostra **(Não conectado)** (Twitch) ou **URL do chat não conectada** (YouTube). Conecte-a primeiro:

- [Configurações do Twitch](../platforms/twitch)
- [Configurações do YouTube](../platforms/youtube-settings)

### Comandos do chat

| Campo | Padrão |
|------|--------|
| **Prefixo de comando** | `!` (escolha entre `! @ # $ % & ~`) |
| **Comando de pedido de música** | `sr` |
| **Remover pedido** | `remove` |
| **Ver lista de pedidos** | `queue` |
| **Consultar música atual** | `song` |
| **Tempo de espera entre pedidos** | 3000 ms |

O tempo de espera é contado por espectador: depois de um pedido bem-sucedido, o mesmo espectador precisa esperar esse tempo antes de pedir de novo.

### Configurações

- **Exibir vídeo na tela** (ligado por padrão): quando desligado, o vídeo fica oculto no OBS, mas o áudio continua tocando
- **Limite da lista** (1–100, padrão 20): o número máximo de músicas pedidas na lista. As músicas da lista de reprodução padrão não contam
- **Mostrar notificação de pedido** (ligado por padrão): mostra um cartão de notificação no OBS quando um espectador pede, remove ou não consegue pedir uma música. Quando ligado, você pode definir:
  - **X** / **Y**: posição da notificação a partir do canto superior esquerdo (px, padrão 16 / 16)
  - **Escala da notificação**: multiplicador de tamanho (padrão 1.0)
  - **Testar aparência da notificação**: envia uma notificação de teste ao OBS

Cada notificação fica 5 segundos na tela; até 3 aparecem ao mesmo tempo.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Como os espectadores usam

Com as configurações padrão:

| Comando | O que faz |
|------|------|
| `!sr <link do YouTube>` | Pede aquele vídeo |
| `!sr <palavras de busca>` | Pesquisa no YouTube e pede o primeiro resultado |
| `!remove` | Remove o pedido mais recente do espectador (não a música que está tocando) |
| `!queue` | Responde com as próximas 3 músicas pedidas |
| `!song` | Responde com a música que está tocando |

- Links aceitos: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…` ou um ID de vídeo de 11 caracteres
- Links de playlist não são aceitos
- Um pedido falha quando a lista atingiu o **Limite da lista**
- Os novos pedidos entram na fila depois dos pedidos dos outros espectadores e antes das músicas da lista de reprodução padrão
- `!queue` e `!song` só funcionam no chat da Twitch com **Ativar respostas do bot de chat** ligado

## Aba Lista de reprodução

### Controles de reprodução

A linha superior mostra quem pediu a música atual e o título dela. Botões:

- **Reproduzir** / **Pausar**: se nada estiver tocando, começa pela primeira música da lista
- **Parar**: para a reprodução
- **Próxima**: pula para a próxima música

Enquanto uma música toca, aparece uma barra de progresso; arraste-a para ir a um ponto. Quando uma música termina, a próxima começa automaticamente.

:::note
Nada toca automaticamente quando o app inicia. Pressione **Reproduzir** para começar.
:::

### Lista de reprodução padrão

Cole a URL de uma playlist do YouTube e escolha **Reprodução em sequência** ou **Reprodução aleatória**. Quando a lista acaba, uma música desta playlist é adicionada e tocada automaticamente. Essas músicas aparecem como **Lista padrão** na lista.

A lista de reprodução padrão é lida pela sua conta do YouTube, então é preciso primeiro entrar com o Google em [Configurações do YouTube](../platforms/youtube-settings).

### Pedir música manualmente

Cole a URL de um vídeo do YouTube e clique em **Adicionar à lista** (ou pressione Enter). Os pedidos manuais não aceitam palavras de busca.

### Lista

**Lista (n)** mostra todas as músicas: plataforma, quem pediu, título e ID do vídeo (clique para abrir no YouTube). Clique em **Excluir** para remover uma música; excluir a música que está tocando pula para a próxima. **Limpar** esvazia a lista inteira.

{/* TODO: 截圖 — 播放清單分頁 */}

## Perguntas frequentes

**Q: Os espectadores digitam o comando, mas nada acontece?**
Verifique se:
- O botão **Pedidos de música** no menu à esquerda está ligado
- **Permitir pedidos de música nesta plataforma** está marcado para aquela plataforma
- Na Twitch: o chat da Twitch é lido pelo recurso [Chat](./chat). Se você desativou a Twitch na página Chat (e o [Bot de chat](./chat-bot) não está usando a Twitch), os comandos da Twitch não são recebidos

**Q: A lista de reprodução padrão não toca?**
Confirme que você entrou com o Google nas Configurações e que a URL é um link de playlist (contém `list=`).

:::info Limites da versão de teste
- Os pedidos pelo chat dos espectadores só estão disponíveis na versão completa. Na versão de teste, um pedido pelo chat falha com a mensagem "Pedidos de músicas não estão disponíveis na versão de teste". **Pedir música manualmente** e a lista de reprodução padrão continuam funcionando
- O overlay do OBS mostra uma marca d'água

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::
