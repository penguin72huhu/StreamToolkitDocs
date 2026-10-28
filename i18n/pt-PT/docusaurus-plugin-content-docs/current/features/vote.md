---
sidebar_position: 15
---

# Sondagens em direto

Faça uma sondagem na transmissão. Os espectadores votam escrevendo o número de uma opção no chat da Twitch ou do YouTube, e os resultados são atualizados em tempo real no overlay do OBS.

## URL da fonte do OBS

```
http://127.0.0.1:7272/vote
```

Clique em **Copiar** junto a **URL da fonte OBS** no topo da página e adicione-o ao OBS como fonte de navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source). As Sondagens em direto não reproduzem som, por isso não precisa de ativar "Controlar áudio via OBS".

:::tip
Ative também o interruptor junto a **Sondagens em direto** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto estiver desligado, o overlay fica oculto.
:::

A página tem três separadores: **Definições**, **Aspeto** e **Histórico**.

## Iniciar uma sondagem (separador Definições)

### Plataforma de votação

Clique em **Twitch** ou **YouTube** para escolher o chat de que plataforma pode votar. Pode escolher ambas. Uma plataforma que não esteja ligada mostra **(não ligado)** na Twitch ou **URL do chat não ligado** no YouTube. Ligue-a primeiro:

- [Definições do Twitch](../platforms/twitch)
- [Definições do YouTube](../platforms/youtube-settings)

### Título da votação

Opcional. Por exemplo: "Que jogo esta noite?"

### Opções de votação (2–10 itens)

- Introduza pelo menos 2 opções. Pode ter até 10
- **+ Adicionar opção** adiciona uma linha e **×** elimina uma
- **Aplicar histórico** permite escolher uma das suas 15 sondagens mais recentes e preencher o respetivo título e opções

Enquanto edita, o overlay do OBS pré-visualiza o título e as opções.

### Duração da votação

A duração da sondagem em segundos. A predefinição é 60 e o mínimo é 10.

### Iniciar / parar

- **Iniciar votação**: requer pelo menos 2 opções preenchidas e pelo menos uma plataforma selecionada que esteja ligada
- **Parar votação**: termina a sondagem mais cedo. Caso contrário, termina quando o tempo acaba

Enquanto uma sondagem estiver a decorrer, não pode alterar as plataformas, o título, as opções nem a duração.

{/* TODO: 截圖 — 投票設定分頁 */}

## Como os espectadores votam

Enquanto a sondagem decorre, o overlay mostra "Escreva o número da opção no chat para votar (ex.: 1)".

- A mensagem inteira tem de ser o número da opção, como `1` ou `1.`. Os espaços são ignorados. Uma mensagem com qualquer outro texto não conta
- Cada espectador tem um voto. Se enviar outro número, o voto passa para a nova opção, e conta o último voto antes de o tempo acabar

## Resultados em tempo real

Durante a sondagem, aparece **Resultados em tempo real** por baixo das definições, com o tempo restante, o número de votos e a percentagem de cada opção, e o total de votos. Depois de a sondagem terminar, muda para **Resultados finais**. Clique em **Detalhes** para ver quem votou em cada opção, agrupado por Twitch e YouTube.

## Aspeto

O separador **Aspeto** tem uma **Pré-visualizar** no topo. O seletor de cor ao lado muda apenas o fundo da pré-visualização, não o overlay do OBS.

- **Tipo de letra**: defina o tipo de letra, a cor e o **Tamanho** (px) de **Título**, **Dica**, **Opção**, **Contagem decrescente** e **Número de votos**
- **Cor da barra de progresso**: até 5 cores, usadas pela ordem nas barras das opções. Cada uma pode ser **Cor sólida** ou **Gradiente**. Os gradientes têm também um **Ângulo**
- **Cor de fundo**: o fundo do cartão da sondagem
- **Repor predefinição**: restaura o aspeto predefinido. Se houver um tema aplicado, restaura o aspeto do tema

Em **CSS personalizado** pode escrever os seus próprios estilos. Para partilhar ou transferir aspetos, consulte [Temas](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Histórico

O separador **Histórico** lista o título, a hora, o número de opções e o total de votos de cada sondagem. Expanda uma sondagem para ver os resultados, o número de votos por plataforma e **Detalhes**. Só é guardado o histórico de sondagens dos últimos 30 dias. Para eliminar um registo, clique em 🗑 e depois em **Confirmar eliminação**.

:::info Limites da versão de teste
- O **CSS personalizado** só está disponível na versão completa
- O overlay do OBS mostra uma marca de água

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
