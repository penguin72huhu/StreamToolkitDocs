---
sidebar_position: 11
---

# Temporizador

Mostre contagens regressivas ou cronômetros na transmissão. Uma contagem regressiva pode ganhar ou perder tempo por botões que você clica, ou automaticamente com seguidores, inscrições, Bits e doações da Twitch.

A página tem duas abas: **Configurações** e **Criar cronômetro**. Crie um cronômetro primeiro e depois controle-o em **Configurações**.

## Passo 1: Criar um cronômetro

1. Abra **Temporizador** na barra lateral esquerda e mude para a aba **Criar cronômetro**
2. Em **Meus cronômetros**, clique em **Adicionar**. É criada uma nova contagem regressiva com tempo inicial de 10 minutos e três opções de tempo (+30 s, +1 min, +5 min)
3. Clique no cartão de um cronômetro para editá-lo. Clique no **✕** de um cartão para excluir aquele cronômetro

A área **Pré-visualizar** mostra a aparência do cronômetro selecionado. Use a caixa de cor ao lado dela para mudar o fundo da pré-visualização.

Abaixo da pré-visualização, alterne entre **Configurações do cronômetro** e **Aparência**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Passo 2: Configurações do cronômetro

### Modo de cronometragem

- **Contagem regressiva**: conta para trás a partir do tempo inicial
- **Cronômetro**: conta para a frente a partir de 0 e pode registrar voltas. O modo cronômetro não tem tempo inicial, tempo de alerta, som de fim nem opções de tempo

### Nome

O nome exibido na lista de cronômetros, nas listas suspensas e nas Ferramentas rápidas.

### Tempo inicial

O tempo de início da contagem regressiva, em horas, minutos e segundos. O total em segundos aparece ao lado.

### Tempo de alerta

Quando o tempo restante chega a esse valor, o texto do cronômetro muda para a cor **Alerta** definida em **Aparência**. Deixe em 0 para não ter alerta.

### Som ao terminar a contagem

O som tocado quando a contagem regressiva chega a 0. Escolha **Nenhum** ou um dos sons integrados (**Sino**, **Moeda**, **Campainha**, **Pop**, **Fanfarra**). Clique em **▶** para testá-lo. Para usar seu próprio arquivo, clique em **Escolher som** e escolha um no gerenciador de recursos.

O som é tocado pela fonte de navegador do OBS, então ative **Controlar áudio via OBS** na fonte do cronômetro. Veja [Como adicionar fontes no OBS](../getting-started/obs-source).

### Opções de tempo

As opções de tempo são os botões de adicionar/subtrair tempo de uma contagem regressiva. Cada cronômetro pode ter até 20.

Para adicionar uma, preencha o formulário **Adicionar opção de tempo**:

1. **Fonte de acionamento**: escolha o que aplica esta opção automaticamente
   - **Manual**: só é aplicada quando você clica no botão
   - **Seguir**: aplicada a cada novo seguidor na Twitch
   - **Twitch Bits**: aplicada em cheers de Bits
   - **Nova inscrição na Twitch**: aplicada em inscrições na Twitch
   - **Doação**: aplicada em doações. Use **Plataformas de doação** para escolher quais entre **YouTube**, **O'Pay**, **ECPay** e **PayPal** contam
2. Para **Twitch Bits** e **Doação**, defina também:
   - **Limite de acionamento**: a quantidade de Bits ou o valor de doação de um passo
   - **Forma de conversão**: **Acionar em múltiplos inteiros** ou **Converter proporcionalmente** (veja o exemplo abaixo)
3. **Adicionar tempo**: escolha **＋** ou **－** e defina as horas, os minutos e os segundos
4. Clique em **Adicionar**

Para mudar uma opção, clique em **Editar**, altere o formulário e clique em **Salvar** (ou **Cancelar**). Clique em **✕** para excluí-la. As opções com acionamento automático ficam marcadas com 🔗 e o nome do acionamento.

**Exemplo de conversão**: Limite de acionamento de 100 bits, Adicionar tempo +1 min, e um espectador envia 250 bits:

- **Acionar em múltiplos inteiros**: só os múltiplos completos do limite contam → 2 × 1 min = **+2 min**
- **Converter proporcionalmente**: 250 ÷ 100 × 1 min → **+2 min 30 s**

Nas doações, o valor é convertido para a moeda selecionada nas Configurações do app antes de ser comparado com o limite.

:::note
- Os acionamentos automáticos só afetam contagens regressivas
- As opções de tempo com acionamento automático continuam aparecendo como botões no painel de controle, então você também pode clicá-las manualmente
- **Nova inscrição na Twitch** é aplicada uma vez por evento de inscrição: um presente de várias inscrições a aplica uma vez. As reinscrições só a aplicam quando **Contar reinscrições** está ligado na [Barra de metas do Twitch](./goal)
:::

### Atalhos de controle

Defina atalhos de teclado para este cronômetro:

- **Iniciar / Pausar**
- **Atalho de volta** (só cronômetro)
- **Atalho de redefinição**

Veja também [Atalhos](./hotkeys).

## Passo 3: Aparência

| Configuração | Descrição |
|--------------|-----------|
| **Fonte** | Fonte do texto do tempo |
| **Tamanho da fonte** | 12–300 px |
| **Cor do texto** | **Normal**: **Cor sólida** ou **Gradiente** (duas cores e um **Ângulo**). **Alerta** (só contagem regressiva): a cor usada quando o tempo de alerta é atingido |
| **Cor de fundo** | Fundo atrás do tempo |
| **Borda** | Cor do contorno, **Opacidade** e **Espessura** (0–20 px) |
| **Sombra** | Cor da sombra, **Opacidade**, **Desfoque** e deslocamento **X** / **Y** |

## Passo 4: Escolher um modo de exibição e adicionar a fonte do OBS

Mude para a aba **Configurações**. Em **Painel de controle**, escolha um **Modo de exibição**:

| Modo | Descrição | URL da fonte do OBS |
|------|-----------|---------------------|
| **Cronômetro único** | O OBS mostra só o cronômetro selecionado. Troque de cronômetro na lista **Cronômetro atual** | `http://127.0.0.1:7272/timer` |
| **Múltiplos cronômetros** | Cada cronômetro tem sua própria URL e pode ser adicionado ao OBS separadamente | `http://127.0.0.1:7272/timer/<timer ID>` |

No modo **Múltiplos cronômetros**, escolha os cronômetros em **Adicionar à exibição**. Cada cronômetro adicionado ganha seu próprio cartão com a **URL da fonte OBS** dele. Clique em **Copiar** para copiá-la. Clique em **✕** em um cartão para removê-lo da exibição.

Adicione a URL copiada ao OBS como fonte de navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source).

:::tip
Ative também o botão ao lado de **Temporizador** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto ele estiver desligado, o cronômetro fica oculto no OBS.
:::

## Passo 5: Controlar o cronômetro

Cada cartão de cronômetro na aba **Configurações** tem:

- **Iniciar** / **Pausar**: no cronômetro, o botão de pausa mostra **Parar**. Uma contagem regressiva que chegou a 0 não pode ser iniciada até você redefini-la ou adicionar tempo
- **Volta** (só cronômetro): registra uma volta enquanto está rodando. As voltas aparecem abaixo do cartão com o tempo e a diferença em relação à volta anterior
- **Redefinir**: para o cronômetro e o volta ao tempo inicial (0 no cronômetro), apagando as voltas
- **Adicionar tempo** (só contagem regressiva): um botão para cada opção de tempo

O tempo correndo só aparece no overlay do OBS, não na página de configurações. Você também pode controlar os cronômetros pela janela de [Ferramentas rápidas](./quick-tools), que também mostra o tempo atual.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Limites da versão de teste
Você só pode criar **1** cronômetro. Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
