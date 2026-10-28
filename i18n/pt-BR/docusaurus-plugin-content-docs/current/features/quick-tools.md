---
sidebar_position: 1
---

# Ferramentas rápidas

As **Ferramentas rápidas** são uma pequena janela de controle que você pode deixar aberta ao lado do jogo ou do OBS. Com ela, você liga e desliga recursos e usa os controles mais comuns deles sem voltar à janela principal.

## Abrir as Ferramentas rápidas

Use uma destas opções:

- Clique em **⚡ Ferramentas rápidas** no topo da barra lateral esquerda da janela principal
- Clique com o botão direito no ícone do Stream Toolkit na bandeja e escolha **Abrir ferramentas rápidas**

Se a janela já estiver aberta, ela vem para a frente em vez de abrir uma segunda.

{/* TODO: 截圖 — 快速工具視窗 */}

## A janela

- **Mover**: arraste a barra de título
- **📌 Fixar / Desafixar**: mantém a janela acima das outras janelas. A fixação vem ligada quando a janela abre
- **✕**: fecha a janela

A janela segue o tema e o idioma da interface do app.

## Painel Interruptores rápidos

Clique na seta **›** na borda esquerda para abrir o painel **Interruptores rápidos**. Ele lista todos os recursos:

- O botão liga ou desliga o recurso (o mesmo que o botão ao lado de cada recurso na barra lateral principal)
- **⚙** (**Abrir configurações**) traz a janela principal na página de configurações daquele recurso

Clique fora do painel ou na seta de novo para fechá-lo.

Os recursos aparecem na mesma ordem da barra lateral principal. Para mudar a ordem, arraste a alça **⠿** ao lado de um recurso na barra lateral da janela principal.

## Cartões de recursos

Cada recurso ativado que tem controles aparece como um cartão. Os cartões começam recolhidos — clique no título de um cartão para expandi-lo ou recolhê-lo. Se nenhum desses recursos estiver ligado, a janela mostra **Nenhum recurso ativado ainda**.

| Recurso | O que o cartão oferece |
|---------|------------------------|
| [Controle de cenas do OBS](./obs-scene) | Estado da conexão e um botão para cada troca de cena ou alternância de fontes configurada (a cena atual fica destacada). Os botões ficam desativados enquanto não houver conexão. O cartão só aparece quando existe pelo menos uma entrada de atalho |
| [Tradução de voz](./voice-translate) | Botão **REC** — mantenha pressionado para gravar e solte para traduzir |
| [Marcador de destaques da stream](./highlight) | Botão **MARK**. Depois de uma marcação, o ícone da plataforma e o horário aparecem por 5 segundos |
| [Barra de doações](./donate) | Valor atual / meta com uma barra de progresso, um campo **Adicionar valor manualmente** com **Adicionar**, e **Zerar** |
| [Temporizador](./timer) | Para cada temporizador exibido: nome, tempo, **Iniciar** / **Pausar**, **Redefinir** e os botões de adicionar tempo que você configurou. Os cronômetros mostram **Parar** e **Volta** no lugar |
| [Roleta](./turntable) | Para cada roleta exibida: **Girar** e **Redefinir** |
| [Media Board](./multimedia) | Botões para as imagens fixadas (mostrar / ocultar), os vídeos fixados (reproduzir) e os sons fixados (tocar) |
| [Pedidos de música](./song-request) | **Reproduzir** / **Pausar**, **Parar**, **Próxima** |

Se um controle tiver um atalho atribuído, o atalho aparece no botão dele.

Os recursos sem nada para operar aqui (Chat, Barra de metas do Twitch, Alertas de doações, Painel de doações, Relógio, Parede de emotes, Enquetes ao vivo, Sorteios, Bot de chat) têm apenas o botão de liga/desliga no painel Interruptores rápidos.

:::tip
O **Zerar** do cartão da Barra de doações precisa de dois cliques: o primeiro muda o botão para **Confirmar zeramento**, e um segundo clique em até 10 segundos zera o valor.
:::

:::info
Os temporizadores e as roletas seguem o **Modo de exibição** de cada recurso: com **Cronômetro único** / **Roleta única**, só aparece o que está selecionado no momento; com **Múltiplos cronômetros** / **Múltiplas roletas**, só aparecem os que você adicionou. Se não houver nenhum, o cartão mostra **Nenhum cronômetro ainda** / **Nenhuma roleta ainda**.
:::
