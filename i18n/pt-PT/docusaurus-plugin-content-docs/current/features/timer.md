---
sidebar_position: 11
---

# Temporizador

Mostre temporizadores de contagem decrescente ou cronómetros na transmissão. Uma contagem decrescente pode ganhar ou perder tempo através de botões em que clica, ou automaticamente com seguidores, subscrições, Bits e donativos da Twitch.

A página tem dois separadores: **Definições** e **Criar temporizador**. Crie primeiro um temporizador e depois controle-o a partir de **Definições**.

## Passo 1: Criar um temporizador

1. Abra **Temporizador** na barra lateral esquerda e mude para o separador **Criar temporizador**
2. Em **Os meus temporizadores**, clique em **Adicionar**. É criado um novo temporizador de contagem decrescente com um tempo inicial de 10 minutos e três opções de tempo (+30 s, +1 min, +5 min)
3. Clique no cartão de um temporizador para o editar. Clique no **✕** de um cartão para eliminar esse temporizador

A **Pré-visualizar** mostra o aspeto do temporizador selecionado. Use a caixa de cor ao lado para mudar o fundo da pré-visualização.

Por baixo da pré-visualização, alterne entre **Definições do temporizador** e **Aspeto**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Passo 2: Definições do temporizador

### Modo de temporização

- **Contagem decrescente**: conta para trás a partir do tempo inicial
- **Cronómetro**: conta para a frente a partir de 0 e pode registar voltas. O modo cronómetro não tem tempo inicial, tempo de aviso, som de fim nem opções de tempo

### Nome

O nome mostrado na lista de temporizadores, nas listas pendentes e nas Ferramentas rápidas.

### Tempo inicial

O tempo de partida da contagem decrescente, em horas, minutos e segundos. O total em segundos aparece ao lado.

### Tempo de aviso

Quando o tempo restante atinge este valor, o texto do temporizador muda para a cor **Aviso** definida em **Aspeto**. Deixe a 0 para não ter aviso.

### Som de fim da contagem

O som reproduzido quando a contagem decrescente chega a 0. Escolha **Nenhum** ou um dos sons incorporados (**Sino**, **Moeda**, **Campainha**, **Pop**, **Fanfarra**). Clique em **▶** para o testar. Para usar o seu próprio ficheiro, clique em **Escolher som** e escolha um no gestor de recursos.

O som é reproduzido pela fonte de navegador do OBS, por isso ative **Controlar áudio via OBS** na fonte do temporizador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source).

### Opções de tempo

As opções de tempo são os botões para adicionar/subtrair tempo de uma contagem decrescente. Cada temporizador pode ter até 20.

Para adicionar uma, preencha o formulário **Adicionar opção de tempo**:

1. **Fonte de acionamento**: escolha o que aplica esta opção automaticamente
   - **Manual**: só é aplicada quando clica no botão
   - **Seguidor**: aplicada a cada novo seguidor da Twitch
   - **Twitch Bits**: aplicada em cheers de Bits
   - **Nova subscrição Twitch**: aplicada em subscrições da Twitch
   - **Donativo**: aplicada em donativos. Use **Plataformas de donativo** para escolher quais de **YouTube**, **O'Pay**, **ECPay** e **PayPal** contam
2. Para **Twitch Bits** e **Donativo**, defina também:
   - **Limiar de acionamento**: a quantidade de Bits ou o valor do donativo para um passo
   - **Método de conversão**: **Acionar por múltiplos inteiros** ou **Converter proporcionalmente** (ver o exemplo abaixo)
3. **Adicionar tempo**: escolha **＋** ou **－** e defina as horas, os minutos e os segundos
4. Clique em **Adicionar**

Para alterar uma opção, clique em **Editar**, altere o formulário e clique em **Guardar** (ou **Cancelar**). Clique em **✕** para a eliminar. As opções com acionamento automático estão marcadas com 🔗 e o nome do acionamento.

**Exemplo de conversão**: Limiar de acionamento de 100 bits, Adicionar tempo +1 min, e um espectador envia 250 bits:

- **Acionar por múltiplos inteiros**: só contam os múltiplos completos do limiar → 2 × 1 min = **+2 min**
- **Converter proporcionalmente**: 250 ÷ 100 × 1 min → **+2 min 30 s**

Nos donativos, o valor é convertido para a moeda selecionada nas Definições da aplicação antes de ser comparado com o limiar.

:::note
- Os acionamentos automáticos só afetam os temporizadores de contagem decrescente
- As opções de tempo com acionamento automático continuam a aparecer como botões no painel de controlo, por isso também pode clicar nelas manualmente
- **Nova subscrição Twitch** aplica-se uma vez por evento de subscrição: uma oferta de várias subscrições aplica-a uma vez. As resubscrições só a aplicam quando **Contar resubscrições** está ativo na [Barra de objetivos do Twitch](./goal)
:::

### Atalhos de controlo

Defina atalhos de teclado para este temporizador:

- **Iniciar/pausar**
- **Atalho de volta** (só cronómetro)
- **Atalho de reposição**

Consulte também [Atalhos](./hotkeys).

## Passo 3: Aspeto

| Definição | Descrição |
|---------|-------------|
| **Tipo de letra** | Tipo de letra do texto do tempo |
| **Tamanho da letra** | 12–300 px |
| **Cor da letra** | **Normal**: **Cor sólida** ou **Gradiente** (duas cores e um **Ângulo**). **Aviso** (só contagem decrescente): a cor usada quando o tempo de aviso é atingido |
| **Cor de fundo** | Fundo por trás do tempo |
| **Contorno** | Cor do contorno, **Opacidade** e **Espessura** (0–20 px) |
| **Sombra** | Cor da sombra, **Opacidade**, **Desfoque** e deslocamento **X** / **Y** |

## Passo 4: Escolher um modo de exibição e adicionar a fonte do OBS

Mude para o separador **Definições**. Em **Painel de controlo**, escolha um **Modo de exibição**:

| Modo | Descrição | URL da fonte do OBS |
|------|-------------|----------------|
| **Temporizador único** | O OBS mostra apenas o temporizador selecionado. Mude de temporizador na lista **Temporizador atual** | `http://127.0.0.1:7272/timer` |
| **Vários temporizadores** | Cada temporizador tem o seu próprio URL e pode ser adicionado ao OBS separadamente | `http://127.0.0.1:7272/timer/<timer ID>` |

No modo **Vários temporizadores**, escolha os temporizadores em **Adicionar à exibição**. Cada temporizador adicionado tem o seu próprio cartão com o respetivo **URL da fonte OBS**. Clique em **Copiar** para o copiar. Clique em **✕** num cartão para o retirar da exibição.

Adicione o URL copiado ao OBS como fonte de navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source).

:::tip
Ative também o interruptor junto a **Temporizador** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto estiver desligado, o temporizador fica oculto no OBS.
:::

## Passo 5: Controlar o temporizador

Cada cartão de temporizador no separador **Definições** tem:

- **Iniciar** / **Pausar**: num cronómetro, o botão de pausa diz **Parar**. Uma contagem decrescente que chegou a 0 não pode ser iniciada até a repor ou adicionar tempo
- **Volta** (só cronómetro): regista uma volta durante a contagem. As voltas aparecem por baixo do cartão com o tempo e a diferença em relação à volta anterior
- **Repor**: para o temporizador e repõe o tempo inicial (0 num cronómetro), limpando as voltas
- **Adicionar tempo** (só contagem decrescente): um botão por cada opção de tempo

O tempo em curso só aparece no overlay do OBS, não na página de definições. Também pode controlar os temporizadores a partir da janela das [Ferramentas rápidas](./quick-tools), que também mostra o tempo atual.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Limites da versão de teste
Só pode criar **1** temporizador. Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
