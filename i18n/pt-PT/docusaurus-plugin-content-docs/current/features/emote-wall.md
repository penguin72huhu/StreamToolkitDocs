---
sidebar_position: 13
---

# Parede de emotes

Quando os espectadores usam emotes no chat, os emotes flutuam pela sua transmissão.

:::note Antes de começar
A Parede de emotes lê os emotes do chat, por isso ligue primeiro as plataformas que usa. Consulte [Definições do Twitch](../platforms/twitch) e [Definições do YouTube](../platforms/youtube-settings).
:::

## Passo 1: Adicionar a fonte do OBS

Copie o **URL da fonte OBS** no topo da página:

```
http://127.0.0.1:7272/emote-wall
```

Adicione-o ao OBS como fonte de navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source). A Parede de emotes não reproduz som, por isso não precisa de ativar "Controlar áudio via OBS".

:::tip
Ative também o interruptor junto a **Parede de emotes** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto estiver desligado, os emotes do chat não são enviados para o overlay.
:::

## Passo 2: Escolher as fontes

Em **Fonte** há um cartão para a **Twitch** e outro para o **YouTube**. Cada cartão mostra o estado da ligação:

- A Twitch mostra **(não ligado)** quando a sua conta da Twitch não está ligada
- O YouTube mostra **URL do chat não ligado** quando o chat do YouTube não está ligado

Marque **Ativar mural de emotes** num cartão para mostrar os emotes do chat dessa plataforma. Desmarque para ignorar essa plataforma.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Passo 3: Definições de animação

| Definição | Descrição |
|---------|-------------|
| **Tamanho do emote** | Tamanho de cada emote, 16–256 px |
| **Máximo de emotes por mensagem** | São usados no máximo estes emotes de uma mensagem do chat (1–20) |
| **Duração da flutuação** | Quanto tempo cada emote flutua, 1–30 segundos |
| **Velocidade da flutuação** | 50–500 px/s |

Clique em **Repor predefinição** junto ao título da secção para restaurar os quatro valores.

## Passo 4: Testar

Clique em **Testar (mostrar no OBS)** para enviar emotes de exemplo da Twitch para o overlay com as definições atuais. O número de emotes de teste segue **Máximo de emotes por mensagem**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Limites da versão de teste
O overlay do OBS mostra uma marca de água enquanto há emotes no ecrã. Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
