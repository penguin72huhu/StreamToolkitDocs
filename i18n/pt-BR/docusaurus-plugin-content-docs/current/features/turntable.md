---
sidebar_position: 14
---

# Roleta

Crie suas próprias roletas de prêmios e gire-as na transmissão. Você pode definir o peso de cada opção, as cores da roleta e se uma opção sorteada é removida depois.

A página tem três abas: **Configurações**, **Criar roleta** e **Histórico**. Crie uma roleta primeiro e depois gire-a em **Configurações**.

## Passo 1: Criar uma roleta

1. Abra **Roleta** na barra lateral esquerda e mude para a aba **Criar roleta**
2. Em **Minhas roletas**, clique em **Adicionar**. Aparece uma nova roleta chamada "Roleta 1" (depois "Roleta 2" e assim por diante)
3. Clique no cartão de uma roleta para editá-la. Clique no **✕** de um cartão para excluir aquela roleta

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Título da roleta

Insira um nome para a roleta. Ele é usado na lista de roletas, nas listas suspensas e no histórico.

### Conteúdo da roleta

1. Clique em **Editar conteúdo**
2. Insira as opções, **uma por linha**
3. Clique em **Confirmar**

### Peso

Quando a roleta tem opções, cada uma ganha um campo **Peso** (mínimo 1, padrão 1). O tamanho da fatia de uma opção e a chance de ela ser sorteada crescem com o peso. Por exemplo, uma opção com peso 2 tem o dobro de chance de ser sorteada que uma opção com peso 1.

### Cor do tema da roleta

- **Minimalista**: o esquema integrado em branco e cinza
- **Personalizar**: crie seu próprio esquema de cores. Insira um **Nome**, escolha as **Cores (3–5 cores)** com **＋** para adicionar uma cor e **✕** para remover uma, e clique em **Adicionar**

Para mudar um tema personalizado, clique no botão **✎** dele. Para excluí-lo, clique em **✕**. Os temas personalizados também são oferecidos como esquemas de cores para a animação de roleta em [Sorteios](./lottery).

### Remover opção após sorteio

Quando ligado, uma opção sorteada sai da roleta antes do próximo giro. Clique em **Redefinir** para devolver todas as opções.

## Passo 2: Escolher um modo de exibição e adicionar a fonte do OBS

Mude para a aba **Configurações** e escolha um **Modo de exibição**:

| Modo | Descrição | URL da fonte do OBS |
|------|-----------|---------------------|
| **Roleta única** | O OBS mostra só a roleta selecionada. Troque de roleta na lista **Roleta em uso** | `http://127.0.0.1:7272/turntable` |
| **Múltiplas roletas** | O OBS pode mostrar várias roletas ao mesmo tempo. Cada roleta tem sua própria URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

No modo **Múltiplas roletas**, escolha as roletas em **Adicionar à exibição da roleta**. Cada roleta adicionada ganha seu próprio cartão com a **URL da fonte OBS** dela. Clique em **Copiar** para copiá-la. Clique em **✕** em um cartão para remover aquela roleta da exibição.

Adicione a URL copiada ao OBS como fonte de navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source). A Roleta não toca som, então não é preciso ativar "Controlar áudio via OBS".

:::tip
Ative também o botão ao lado de **Roleta** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto ele estiver desligado, o overlay fica oculto.
:::

## Passo 3: Girar

Em cada cartão de roleta na aba **Configurações**:

- **Girar**: começa o giro. Quando a animação termina, o overlay mostra o resultado. Não é possível clicar no botão enquanto a roleta não tiver opções ou ainda estiver girando
- **Redefinir**: devolve as opções removidas, redefine a roleta e apaga a **Lista de vencedores** atual

A **Lista de vencedores** do cartão reúne todos os resultados desde o último **Redefinir**.

Você também pode usar **Girar** e **Redefinir** pela janela de [Ferramentas rápidas](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Histórico

A aba **Histórico** guarda um registro por rodada, do primeiro giro até o próximo **Redefinir**. Ela lista o horário, o título da roleta e os vencedores. São mantidos apenas os registros dos últimos 30 dias. Para excluir um registro, clique em 🗑 e depois em **Confirmar exclusão**.

:::info Limites da versão de teste
- Você só pode criar **1** roleta
- O overlay do OBS mostra uma marca d'água

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
