---
sidebar_position: 4
---

# Tradução de voz

Mantenha um atalho premido e fale. O Stream Toolkit converte a sua fala em texto, traduz e mostra as duas linhas como legendas no OBS.

O reconhecimento de voz é feito no seu próprio computador com um modelo Whisper. O texto é depois traduzido com o MyMemory.

A página tem dois separadores: **Definições** e **Aspeto**.

## Passo 1: Adicionar a fonte do OBS

O URL da fonte do OBS aparece no topo da página:

```
http://127.0.0.1:7272/voice-translate
```

Clique em **Copiar** e adicione-o ao OBS como fonte de navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source). A Tradução de voz não reproduz som, por isso não precisa de ativar "Controlar áudio via OBS".

As legendas aparecem no fundo da fonte: o texto original em cima e a tradução por baixo. Desvanecem-se depois do **Tempo de exibição da legenda**.

:::tip
Ative o interruptor junto a **Tradução de voz** na barra lateral esquerda (**Ativar exibição no OBS**). O atalho só funciona enquanto estiver ativo.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Passo 2: Definir o atalho

Em **Atalho (manter premido para gravar, soltar para reconhecer)**:

1. Clique em **Clique para definir o atalho**
2. Prima a combinação de teclas que quer e solte-a. Prima **Esc** para cancelar
3. Para remover o atalho, clique em **Limpar**

Se a combinação já estiver a ser usada por outra funcionalidade, o botão mostra **Conflito de atalho** e o atalho não é guardado.

O atalho funciona mesmo quando o Stream Toolkit não é a janela ativa. **Mantenha-o premido** enquanto fala e depois **solte-o** para reconhecer e traduzir. Uma gravação para automaticamente ao fim de 15 segundos.

Também pode manter premido com o rato o botão **REC** por baixo do atalho. Funciona da mesma forma: prima para gravar, solte para traduzir. A janela das [Ferramentas rápidas](./quick-tools) tem o mesmo botão **REC**.

## Passo 3: Definições de reconhecimento

| Campo | Descrição |
|-------|-------------|
| **Estado do modelo** | Mostra **A carregar xx%**, **Pronto** ou **Falha ao carregar o modelo**. Pode gravar quando mostrar **Pronto** |
| **Modelo Whisper** | **Tiny (mais rápido, cerca de 40MB)**, **Base (recomendado, cerca de 75MB)** (predefinição) ou **Small (mais preciso, cerca de 245MB)**. O modelo é transferido na primeira utilização. Mudar de modelo recarrega-o |
| **Idioma da fala** | O idioma em que fala. A predefinição é o chinês tradicional |
| **Microfone** | O microfone a partir do qual gravar. **Predefinição do sistema** usa o dispositivo de entrada predefinido do Windows |

## Passo 4: Definições de tradução

| Campo | Descrição |
|-------|-------------|
| **Tempo de exibição da legenda** | Quanto tempo as legendas ficam no ecrã, 1–30 segundos. A predefinição é 5 |
| **Idioma de destino** | O idioma para o qual traduzir. A predefinição é o inglês |
| **Usar o Whisper para traduzir quando o destino for English** | Quando o idioma de destino é o inglês, o Whisper traduz em vez do MyMemory. (Grátis e sem quota, mas com maior latência.) Não tem efeito com outros idiomas de destino |
| **Serviço de tradução** | MyMemory |

### Email (opcional)

O MyMemory é gratuito. A quota diária depende de introduzir ou não um email:

- Sem email: 5.000 caracteres/dia
- Com email: 50.000 caracteres/dia (grátis, sem necessidade de registo no MyMemory)

Introduza o seu email e clique em **Guardar**. Este email é **Partilhado com a tradução do chat**.

A barra abaixo mostra **Usado hoje (aproximado, repõe às 08:00 UTC diariamente)**. Quando a quota se esgota, mostra **Quota esgotada**.

## Passo 5: Aspeto

No separador **Aspeto** pode mudar o aspeto das legendas. As alterações são guardadas de imediato.

- **Pré-visualizar**: mostra legendas de exemplo. A caixa de cor ao lado muda apenas o fundo da pré-visualização
- **Alinhamento**: **À esquerda** (predefinição), **Ao centro** ou **À direita**
- **Tipo de letra**: uma linha para **Idioma original** (o texto original) e outra para **Idioma de destino** (a tradução). Cada linha tem um tipo de letra, uma cor e um tamanho (8–120 px). As predefinições são 14 px para o original e 22 px para a tradução
- **Sombra**: a cor da sombra do texto
- **Repor predefinição**: restaura o aspeto predefinido

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Limites da versão de teste
O **Idioma de destino** está fixo em inglês. A página mostra "A versão Demo só suporta tradução para inglês".

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::

## Perguntas frequentes

**Q: Mantenho o atalho premido, mas nada acontece.**
Verifique se o interruptor junto a **Tradução de voz** na barra lateral esquerda está ativo e se o **Estado do modelo** mostra **Pronto**.

**Q: A gravação funciona, mas não aparecem legendas no OBS.**
Se o MyMemory não conseguir traduzir (por exemplo, porque a quota diária se esgotou), não são mostradas legendas. Verifique a barra **Usado hoje**. Introduzir um email aumenta a quota. Se o seu idioma de destino for o inglês, também pode ativar **Usar o Whisper para traduzir quando o destino for English**, que não tem quota.
