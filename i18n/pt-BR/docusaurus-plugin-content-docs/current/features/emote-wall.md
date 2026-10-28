---
sidebar_position: 13
---

# Parede de emotes

Quando os espectadores usam emotes no chat, os emotes flutuam pela sua transmissão.

:::note Antes de começar
A Parede de emotes lê os emotes do chat, então conecte primeiro as plataformas que você usa. Veja [Configurações do Twitch](../platforms/twitch) e [Configurações do YouTube](../platforms/youtube-settings).
:::

## Passo 1: Adicionar a fonte do OBS

Copie a **URL da fonte OBS** no topo da página:

```
http://127.0.0.1:7272/emote-wall
```

Adicione-a ao OBS como fonte de navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source). A Parede de emotes não toca som, então não é preciso ativar "Controlar áudio via OBS".

:::tip
Ative também o botão ao lado de **Parede de emotes** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto ele estiver desligado, os emotes do chat não são enviados ao overlay.
:::

## Passo 2: Escolher as fontes

Em **Fonte** há um cartão para **Twitch** e outro para **YouTube**. Cada cartão mostra o status da conexão:

- A Twitch mostra **(Não conectado)** quando sua conta da Twitch não está conectada
- O YouTube mostra **URL do chat não conectada** quando o chat do YouTube não está conectado

Marque **Ativar mural de emotes** em um cartão para mostrar os emotes do chat daquela plataforma. Desmarque para ignorar a plataforma.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Passo 3: Configurações de animação

| Configuração | Descrição |
|--------------|-----------|
| **Tamanho do emote** | Tamanho de cada emote, 16–256 px |
| **Máximo de emotes por mensagem** | São usados até esse número de emotes de uma mesma mensagem do chat (1–20) |
| **Duração da flutuação** | Quanto tempo cada emote flutua, 1–30 segundos |
| **Velocidade da flutuação** | 50–500 px/s |

Clique em **Restaurar padrão** ao lado do título da seção para restaurar os quatro valores.

## Passo 4: Testar

Clique em **Testar (exibir no OBS)** para enviar emotes de exemplo da Twitch ao overlay com as configurações atuais. O número de emotes de teste segue o **Máximo de emotes por mensagem**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Limites da versão de teste
O overlay do OBS mostra uma marca d'água enquanto há emotes na tela. Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
