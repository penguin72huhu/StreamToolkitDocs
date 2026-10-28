---
sidebar_position: 16
---

# Sorteios

Os espectadores participam escrevendo uma palavra-chave no chat da Twitch ou do YouTube. Quando as inscrições fecham, sorteie vencedores aleatoriamente, e a animação do sorteio é reproduzida no overlay do OBS.

## URL da fonte do OBS

```
http://127.0.0.1:7272/lottery
```

Clique em **Copiar** junto a **URL da fonte OBS** no topo da página e adicione-o ao OBS como fonte de navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source). Os Sorteios não reproduzem som, por isso não precisa de ativar "Controlar áudio via OBS".

:::tip
Ative também o interruptor junto a **Sorteios** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto estiver desligado, o overlay fica oculto.
:::

A página tem dois separadores: **Definições** e **Histórico**.

## Definições

### Plataforma de votação

Clique em **Twitch** ou **YouTube** para escolher o chat de que plataforma pode participar. Pode escolher ambas. Uma plataforma que não esteja ligada mostra **(não ligado)** na Twitch ou **URL do chat não ligado** no YouTube. Para ligar, consulte [Definições do Twitch](../platforms/twitch) e [Definições do YouTube](../platforms/youtube-settings).

### Palavra-chave do sorteio

Uma mensagem do chat que contenha esta palavra-chave inscreve o espectador. Cada espectador só pode participar uma vez por sorteio. Não é possível clicar em **Iniciar recolha** enquanto a palavra-chave estiver vazia.

### Duração do sorteio

Quanto tempo as inscrições ficam abertas, em segundos. A predefinição é 300 e o intervalo é 10–3600.

### Máximo de participantes

As inscrições fecham mais cedo quando este número de pessoas tiver participado. Introduza `0` para não ter limite.

### Remover opção após sorteio

Quando está ativo, um vencedor é removido dos participantes antes do sorteio seguinte, para não poder voltar a ser sorteado nesse sorteio.

### Texto de aviso

O aviso mostrado no overlay durante as inscrições, que indica aos espectadores a palavra-chave e o número de participantes. Defina o tipo de letra, a cor e o tamanho (px).

### Animação do sorteio

- **Rotação rápida de IDs** (predefinição): os nomes dos participantes flutuam no ecrã enquanto as inscrições estão abertas e depois alternam rapidamente durante o sorteio
  - **Tipo de letra do ecrã de recolha**: tipo de letra, tamanho e as cores das etiquetas com os nomes (até 5)
  - **Tipo de letra da animação do sorteio**: tipo de letra e tamanho dos nomes que alternam durante o sorteio
  - **Repor predefinição**: restaura estas definições
- **Animação de roleta**: os participantes são colocados numa roleta que gira para escolher o vencedor. Escolha um esquema de cores: **Minimalista** ou um tema personalizado que criou na [Roleta](./turntable)

Enquanto as inscrições estiverem abertas, não pode alterar as plataformas, a palavra-chave, a duração, o máximo de participantes, Remover opção após sorteio nem o tipo de animação.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Realizar um sorteio

1. Clique em **Iniciar recolha**. O painel mostra **A recolher…**, o tempo restante e o número de participantes
2. Enquanto as inscrições estiverem abertas, pode escrever um nome em **Introduza manualmente o nome do participante** e clicar em **Adicionar** (ou premir Enter). Um nome que já esteja na lista mostra "Este ID já está na lista"
3. Para fechar as inscrições antes de o tempo acabar, clique em **Terminar recolha**. As inscrições também fecham quando o tempo acaba ou quando o **Máximo de participantes** é atingido. O painel mostra então **Tempo esgotado!**
4. Clique em **Iniciar sorteio**. O overlay reproduz a animação e, quando termina, o vencedor aparece em **Vencedor**
5. Para sortear outro vencedor, clique em **Sortear novamente**

Clique em **Cancelar sorteio** em qualquer fase para limpar todos os participantes e vencedores, e o overlay volta ao estado de espera.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Histórico

O separador **Histórico** guarda um registo por sorteio com a hora, a palavra-chave e o número de participantes. Expanda um registo para ver os vencedores e a lista completa de participantes. Só é guardado o histórico de sorteios dos últimos 30 dias. Para eliminar um registo, clique em 🗑 e depois em **Confirmar eliminação**.

:::info Limites da versão de teste
O overlay do OBS mostra uma marca de água. Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
