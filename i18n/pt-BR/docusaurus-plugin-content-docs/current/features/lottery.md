---
sidebar_position: 16
---

# Sorteios

Os espectadores participam digitando uma palavra-chave no chat da Twitch ou do YouTube. Quando as inscrições se encerram, os vencedores são sorteados aleatoriamente, e a animação do sorteio aparece no overlay do OBS.

## URL da fonte do OBS

```
http://127.0.0.1:7272/lottery
```

Clique em **Copiar** ao lado de **URL da fonte OBS** no topo da página e adicione-a ao OBS como fonte de navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source). Os Sorteios não tocam som, então não é preciso ativar "Controlar áudio via OBS".

:::tip
Ative também o botão ao lado de **Sorteios** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto ele estiver desligado, o overlay fica oculto.
:::

A página tem duas abas: **Configurações** e **Histórico**.

## Configurações

### Plataforma de votação

Clique em **Twitch** ou **YouTube** para escolher o chat de qual plataforma pode participar. Você pode escolher as duas. Uma plataforma não conectada mostra **(Não conectado)** na Twitch ou **URL do chat não conectada** no YouTube. Para conectar, veja [Configurações do Twitch](../platforms/twitch) e [Configurações do YouTube](../platforms/youtube-settings).

### Palavra-chave do sorteio

Uma mensagem no chat que contenha essa palavra-chave inscreve o espectador. Cada espectador só pode participar uma vez por sorteio. Não é possível clicar em **Iniciar coleta** enquanto a palavra-chave estiver vazia.

### Duração do sorteio

Quanto tempo as inscrições ficam abertas, em segundos. O padrão é 300 e o intervalo é 10–3600.

### Máximo de participantes

As inscrições se encerram antes do tempo quando esse número de pessoas entrar. Insira `0` para não ter limite.

### Remover opção após sorteio

Quando ligado, o vencedor é removido dos participantes antes do próximo sorteio, então não pode ser sorteado de novo naquele sorteio.

### Texto de aviso

O aviso mostrado no overlay durante as inscrições, que informa aos espectadores a palavra-chave e o número de participantes. Defina a fonte, a cor e o tamanho (px).

### Animação do sorteio

- **Rotação rápida de IDs** (padrão): os nomes dos participantes flutuam na tela enquanto as inscrições estão abertas e depois passam rapidamente durante o sorteio
  - **Fonte da tela de coleta**: fonte, tamanho da fonte e as cores das etiquetas de nome (até 5)
  - **Fonte da animação do sorteio**: fonte e tamanho da fonte dos nomes passando durante o sorteio
  - **Restaurar padrão**: restaura essas configurações
- **Animação de roleta**: os participantes são colocados em uma roleta que gira para escolher o vencedor. Escolha um esquema de cores: **Minimalista** ou um tema personalizado criado na [Roleta](./turntable)

Enquanto as inscrições estão abertas, não é possível mudar as plataformas, a palavra-chave, a duração, o máximo de participantes, Remover opção após sorteio nem o tipo de animação.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Fazer um sorteio

1. Clique em **Iniciar coleta**. O painel mostra **Coletando…**, o tempo restante e o número de participantes
2. Com as inscrições abertas, você pode digitar um nome em **Digite o nome do participante manualmente** e clicar em **Adicionar** (ou pressionar Enter). Um nome que já está na lista mostra "Este ID já está na lista"
3. Para encerrar as inscrições antes do fim do tempo, clique em **Encerrar coleta**. As inscrições também se encerram quando o tempo acaba ou quando o **Máximo de participantes** é atingido. O painel então mostra **Tempo esgotado!**
4. Clique em **Iniciar sorteio**. O overlay toca a animação e, ao terminar, o vencedor aparece em **Vencedor**
5. Para sortear outro vencedor, clique em **Sortear novamente**

Clique em **Cancelar sorteio** em qualquer etapa para apagar todos os participantes e vencedores; o overlay volta a aguardar.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Histórico

A aba **Histórico** guarda um registro por sorteio com o horário, a palavra-chave e o número de participantes. Expanda um registro para ver os vencedores e a lista completa de participantes. São mantidos apenas os registros dos últimos 30 dias. Para excluir um registro, clique em 🗑 e depois em **Confirmar exclusão**.

:::info Limites da versão de teste
O overlay do OBS mostra uma marca d'água. Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
