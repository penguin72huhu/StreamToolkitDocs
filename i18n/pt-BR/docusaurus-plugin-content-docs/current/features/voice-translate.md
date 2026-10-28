---
sidebar_position: 4
---

# Tradução de voz

Segure um atalho e fale. O Stream Toolkit transforma sua fala em texto, traduz e mostra as duas linhas como legendas no OBS.

O reconhecimento de voz roda no seu próprio computador com um modelo Whisper. Depois, o texto é traduzido com o MyMemory.

A página tem duas abas: **Configurações** e **Aparência**.

## Passo 1: Adicionar a fonte do OBS

A URL da fonte do OBS aparece no topo da página:

```
http://127.0.0.1:7272/voice-translate
```

Clique em **Copiar** e adicione-a ao OBS como fonte de navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source). A Tradução de voz não toca som, então não é preciso ativar "Controlar áudio via OBS".

As legendas aparecem na parte inferior da fonte: o texto original em cima e a tradução embaixo. Elas desaparecem depois do **Tempo de exibição da legenda**.

:::tip
Ative o botão ao lado de **Tradução de voz** na barra lateral esquerda (**Ativar exibição no OBS**). O atalho só funciona enquanto ele estiver ligado.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Passo 2: Definir o atalho

Em **Atalho (segure para gravar, solte para reconhecer)**:

1. Clique em **Clique para definir o atalho**
2. Pressione a combinação de teclas desejada e solte. Pressione **Esc** para cancelar
3. Para remover o atalho, clique em **Limpar**

Se a combinação já estiver em uso por outro recurso, o botão mostra **Conflito de atalho** e o atalho não é salvo.

O atalho funciona mesmo quando o Stream Toolkit não é a janela ativa. **Segure** enquanto fala e **solte** para reconhecer e traduzir. Uma gravação para automaticamente depois de 15 segundos.

Você também pode segurar o botão **REC** abaixo do atalho com o mouse. Ele funciona do mesmo jeito: pressione para gravar e solte para traduzir. A janela de [Ferramentas rápidas](./quick-tools) tem o mesmo botão **REC**.

## Passo 3: Configurações de reconhecimento

| Campo | Descrição |
|-------|-----------|
| **Status do modelo** | Mostra **Carregando xx%**, **Pronto** ou **Falha ao carregar o modelo**. Você pode gravar quando aparecer **Pronto** |
| **Modelo Whisper** | **Tiny (mais rápido, cerca de 40MB)**, **Base (recomendado, cerca de 75MB)** (padrão) ou **Small (mais preciso, cerca de 245MB)**. O modelo é baixado na primeira vez que você o usa. Trocar de modelo o recarrega |
| **Idioma da fala** | O idioma em que você fala. O padrão é chinês tradicional |
| **Microfone** | O microfone usado para gravar. **Padrão do sistema** usa o dispositivo de entrada padrão do Windows |

## Passo 4: Configurações de tradução

| Campo | Descrição |
|-------|-----------|
| **Tempo de exibição da legenda** | Quanto tempo as legendas ficam na tela, 1–30 segundos. O padrão é 5 |
| **Idioma de destino** | O idioma para o qual traduzir. O padrão é inglês |
| **Usar tradução do Whisper quando o destino for English** | Quando o idioma de destino é inglês, o Whisper traduz no lugar do MyMemory. (Gratuito e sem cota, mas com mais latência.) Não tem efeito para outros idiomas de destino |
| **Serviço de tradução** | MyMemory |

### E-mail (opcional)

O MyMemory é gratuito. A cota diária depende de você inserir um e-mail:

- Sem e-mail: 5.000 caracteres/dia
- Com e-mail: 50.000 caracteres/dia (gratuito, sem necessidade de cadastro no MyMemory)

Insira seu e-mail e clique em **Salvar**. Este e-mail é **Compartilhado com a tradução do chat**.

A barra abaixo mostra **Usado hoje (estimativa aproximada, redefinido diariamente às 08:00 UTC)**. Quando a cota acaba, aparece **Cota esgotada**.

## Passo 5: Aparência

Na aba **Aparência** você pode mudar o visual das legendas. As mudanças são salvas na hora.

- **Pré-visualizar**: mostra legendas de exemplo. A caixa de cor ao lado muda só o fundo da pré-visualização
- **Alinhamento**: **À esquerda** (padrão), **Centralizado** ou **À direita**
- **Fonte**: uma linha para **Idioma original** (o texto original) e outra para **Idioma de destino** (a tradução). Cada linha tem fonte, cor e tamanho (8–120 px). Os padrões são 14 px para o original e 22 px para a tradução
- **Sombra**: a cor da sombra do texto
- **Restaurar padrão**: restaura a aparência padrão

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Limites da versão de teste
O **Idioma de destino** fica fixo em inglês. A página mostra "A Demo só suporta tradução para o inglês".

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::

## Perguntas frequentes

**Q: Seguro o atalho, mas nada acontece.**
Verifique se o botão ao lado de **Tradução de voz** na barra lateral esquerda está ligado e se o **Status do modelo** mostra **Pronto**.

**Q: A gravação funciona, mas nenhuma legenda aparece no OBS.**
Se o MyMemory não conseguir traduzir (por exemplo, quando a cota diária acabou), nenhuma legenda é exibida. Confira a barra **Usado hoje**. Inserir um e-mail aumenta a cota. Se o seu idioma de destino for inglês, você também pode ativar **Usar tradução do Whisper quando o destino for English**, que não tem cota.
