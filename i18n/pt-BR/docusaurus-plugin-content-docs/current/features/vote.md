---
sidebar_position: 15
---

# Enquetes ao vivo

Faça uma votação na transmissão. Os espectadores votam digitando o número de uma opção no chat da Twitch ou do YouTube, e os resultados são atualizados ao vivo no overlay do OBS.

## URL da fonte do OBS

```
http://127.0.0.1:7272/vote
```

Clique em **Copiar** ao lado de **URL da fonte OBS** no topo da página e adicione-a ao OBS como fonte de navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source). As Enquetes ao vivo não tocam som, então não é preciso ativar "Controlar áudio via OBS".

:::tip
Ative também o botão ao lado de **Enquetes ao vivo** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto ele estiver desligado, o overlay fica oculto.
:::

A página tem três abas: **Configurações**, **Aparência** e **Histórico**.

## Iniciar uma votação (aba Configurações)

### Plataforma de votação

Clique em **Twitch** ou **YouTube** para escolher o chat de qual plataforma pode votar. Você pode escolher as duas. Uma plataforma não conectada mostra **(Não conectado)** na Twitch ou **URL do chat não conectada** no YouTube. Conecte-a primeiro:

- [Configurações do Twitch](../platforms/twitch)
- [Configurações do YouTube](../platforms/youtube-settings)

### Título da votação

Opcional. Por exemplo: "Qual jogo hoje à noite?"

### Opções de votação (2–10 itens)

- Insira pelo menos 2 opções. Você pode ter até 10
- **+ Adicionar opção** adiciona uma linha e **×** exclui uma
- **Aplicar histórico** permite escolher uma das suas 15 votações mais recentes e preencher o título e as opções dela

Enquanto você edita, o overlay do OBS pré-visualiza o título e as opções.

### Duração da votação

A duração da votação em segundos. O padrão é 60 e o mínimo é 10.

### Iniciar / Parar

- **Iniciar votação**: exige pelo menos 2 opções preenchidas e pelo menos uma plataforma selecionada que esteja conectada
- **Parar votação**: encerra a votação antes do tempo. Caso contrário, ela termina quando o tempo acaba

Enquanto uma votação está em andamento, não é possível mudar as plataformas, o título, as opções nem a duração.

{/* TODO: 截圖 — 投票設定分頁 */}

## Como os espectadores votam

Enquanto a votação está em andamento, o overlay mostra "Digite o número da opção no chat para votar (ex.: 1)".

- A mensagem inteira precisa ser o número da opção, como `1` ou `1.`. Espaços são ignorados. Uma mensagem com qualquer outro texto não conta
- Cada espectador tem um voto. Se mandar outro número, o voto passa para a nova opção, e vale o último voto antes do fim do tempo

## Resultado ao vivo

Durante a votação, **Resultado ao vivo** aparece abaixo das configurações com o tempo restante, o número de votos e a porcentagem de cada opção e o total de votos. Quando a votação termina, muda para **Resultado final**. Clique em **Detalhes** para ver quem votou em cada opção, agrupado por Twitch e YouTube.

## Aparência

A aba **Aparência** tem uma área **Pré-visualizar** no topo. O seletor de cor ao lado muda só o fundo da pré-visualização, não o overlay do OBS.

- **Fonte**: defina a fonte, a cor e o **Tamanho** (px) de **Título**, **Dica**, **Opção**, **Contagem regressiva** e **Número de votos**
- **Cor da barra de progresso**: até 5 cores, usadas em ordem nas barras das opções. Cada uma pode ser **Cor sólida** ou **Gradiente**. Os gradientes também têm um **Ângulo**
- **Cor de fundo**: o fundo do cartão da votação
- **Restaurar padrão**: restaura a aparência padrão. Se houver um tema aplicado, restaura a aparência do tema

Em **CSS personalizado** você pode escrever seus próprios estilos. Para compartilhar ou baixar visuais, veja [Temas](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Histórico

A aba **Histórico** lista o título, o horário, o número de opções e o total de votos de cada votação. Expanda uma votação para ver os resultados, o número de votos por plataforma e os **Detalhes**. São mantidos apenas os registros dos últimos 30 dias. Para excluir um registro, clique em 🗑 e depois em **Confirmar exclusão**.

:::info Limites da versão de teste
- O **CSS personalizado** só está disponível na versão completa
- O overlay do OBS mostra uma marca d'água

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
