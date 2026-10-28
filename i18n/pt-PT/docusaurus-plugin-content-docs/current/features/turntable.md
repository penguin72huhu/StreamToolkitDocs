---
sidebar_position: 14
---

# Roleta

Crie as suas próprias roletas de prémios e gire-as na transmissão. Pode definir o peso de cada opção, as cores da roleta e se uma opção sorteada é removida depois.

A página tem três separadores: **Definições**, **Criar roleta** e **Histórico**. Crie primeiro uma roleta e depois gire-a a partir de **Definições**.

## Passo 1: Criar uma roleta

1. Abra **Roleta** na barra lateral esquerda e mude para o separador **Criar roleta**
2. Em **As minhas roletas**, clique em **Adicionar**. Aparece uma nova roleta chamada "Roleta 1" (depois "Roleta 2" e assim por diante)
3. Clique no cartão de uma roleta para a editar. Clique no **✕** de um cartão para eliminar essa roleta

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Título da roleta

Introduza um nome para a roleta. É usado na lista de roletas, nas listas pendentes e no histórico.

### Conteúdo da roleta

1. Clique em **Editar conteúdo**
2. Introduza as opções, **uma por linha**
3. Clique em **Confirmar**

### Peso

Depois de a roleta ter opções, cada uma recebe um campo **Peso** (mínimo 1, predefinição 1). O tamanho da fatia de uma opção e a probabilidade de ser sorteada aumentam com o peso. Por exemplo, uma opção com peso 2 tem o dobro da probabilidade de ser sorteada de uma opção com peso 1.

### Cor do tema da roleta

- **Minimalista**: o esquema branco e cinzento incorporado
- **Personalizar**: crie o seu próprio esquema de cores. Introduza um **Nome**, escolha **Cores (3–5 cores)** com **＋** para adicionar uma cor e **✕** para remover uma, e clique em **Adicionar**

Para alterar um tema personalizado, clique no respetivo botão **✎**. Para o eliminar, clique em **✕**. Os temas personalizados também são oferecidos como esquemas de cores para a animação de roleta nos [Sorteios](./lottery).

### Remover opção após sorteio

Quando está ativo, uma opção sorteada é retirada da roleta antes do giro seguinte. Clique em **Repor** para recolocar todas as opções.

## Passo 2: Escolher um modo de exibição e adicionar a fonte do OBS

Mude para o separador **Definições** e escolha um **Modo de exibição**:

| Modo | Descrição | URL da fonte do OBS |
|------|-------------|----------------|
| **Roleta única** | O OBS mostra apenas a roleta selecionada. Mude de roleta na lista **Roleta em uso** | `http://127.0.0.1:7272/turntable` |
| **Várias roletas** | O OBS pode mostrar várias roletas ao mesmo tempo. Cada roleta tem o seu próprio URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

No modo **Várias roletas**, escolha as roletas em **Adicionar à exibição da roleta**. Cada roleta adicionada tem o seu próprio cartão com o respetivo **URL da fonte OBS**. Clique em **Copiar** para o copiar. Clique em **✕** num cartão para retirar essa roleta da exibição.

Adicione o URL copiado ao OBS como fonte de navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source). A Roleta não reproduz som, por isso não precisa de ativar "Controlar áudio via OBS".

:::tip
Ative também o interruptor junto a **Roleta** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto estiver desligado, o overlay fica oculto.
:::

## Passo 3: Girar

Em cada cartão de roleta no separador **Definições**:

- **Iniciar**: começa o giro. Quando a animação termina, o overlay mostra o resultado. Não é possível clicar no botão enquanto a roleta não tiver opções ou ainda estiver a girar
- **Repor**: recoloca as opções removidas, repõe a roleta e limpa a **Lista de vencedores** atual

A **Lista de vencedores** do cartão reúne todos os resultados desde o último **Repor**.

Também pode usar **Iniciar** e **Repor** a partir da janela das [Ferramentas rápidas](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Histórico

O separador **Histórico** guarda um registo por ronda, desde o primeiro giro até ao **Repor** seguinte. Lista a hora, o título da roleta e os vencedores. Só é guardado o histórico de roletas dos últimos 30 dias. Para eliminar um registo, clique em 🗑 e depois em **Confirmar eliminação**.

:::info Limites da versão de teste
- Só pode criar **1** roleta
- O overlay do OBS mostra uma marca de água

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
