---
sidebar_position: 5
---

# Media Board

Mostre imagens, reproduza vídeos e efeitos sonoros na transmissão com um clique ou um atalho.

A página tem três separadores: **Imagem**, **Vídeo** e **Som**. Cada separador tem o seu próprio URL de fonte do OBS.

| Separador | URL da fonte do OBS | Controlar áudio via OBS |
|-----|----------------|-----------------------|
| **Imagem** | `http://127.0.0.1:7272/imageboard` | Não é necessário |
| **Vídeo** | `http://127.0.0.1:7272/videoboard` | Obrigatório |
| **Som** | `http://127.0.0.1:7272/soundboard` | Obrigatório |

Clique em **Copiar** junto a cada URL e adicione-o ao OBS como fonte de navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source). Os vídeos e os sons são reproduzidos na fonte do OBS, não dentro do Stream Toolkit, por isso tem de ativar **Controlar áudio via OBS** nessas duas fontes, caso contrário os espectadores não os ouvirão.

:::tip
Ative o interruptor junto a **Media Board** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto estiver desligado, não é possível mostrar imagens e os vídeos e sons não são reproduzidos, quer use os botões quer os atalhos.
:::

## Controlos comuns

As imagens, os vídeos e os sons são todos apresentados como cartões:

- Clique num cartão para expandir ou recolher as respetivas definições
- A caixa de verificação à direita de um cartão: quando marcada, o item aparece nas ferramentas de arranque das [Ferramentas rápidas](./quick-tools). Os novos itens vêm marcados por predefinição
- **✕** elimina o item
- Se um ficheiro local tiver sido movido ou eliminado, o cartão mostra **Ficheiro não encontrado**

### Atalhos

Cada item pode ter o seu próprio atalho:

1. Expanda o cartão e clique no botão do atalho
2. Prima a combinação de teclas que quer e solte-a. Prima **Esc** para cancelar
3. Para remover o atalho, clique em **Limpar**

Se a combinação já estiver a ser usada por outra funcionalidade, não é guardada e o botão mostra uma mensagem de conflito. O atalho funciona mesmo quando o Stream Toolkit não é a janela ativa. Todos os atalhos aparecem também na página [Atalhos](./hotkeys).

## Imagem

{/* TODO: 截圖 — 圖片分頁 */}

### Adicionar uma imagem

1. Clique em **Adicionar imagem**
2. Escolha um ficheiro (jpg, jpeg, png ou gif). O nome do ficheiro passa a ser o nome da imagem

Ao expandir o cartão, aparecem uma miniatura e estas definições:

- **Nome**: o nome da imagem
- **Caminho do ficheiro**: clique em **Reescolher** para escolher outro ficheiro
- **Atalho**: prima uma vez para mostrar a imagem e novamente para a ocultar
- **Definir posição e tamanho**: ver abaixo
- **Eliminar imagem**: elimina a imagem

### Mostrar e ocultar

Clique no botão **○** de um cartão para mostrar a imagem no OBS. Passa a **◉**. Clique novamente para ocultar a imagem.

### Definições de visualização

**Permitir mostrar várias imagens em simultâneo** está desativado por predefinição. Enquanto estiver desativado, mostrar uma imagem oculta a que está a ser mostrada. Ative-o para mostrar várias imagens ao mesmo tempo.

### Definir posição e tamanho

- **Posição X** / **Posição Y**: em px. 0/0 é o centro da fonte. Valores positivos movem para a direita/baixo, valores negativos para a esquerda/cima
- **Largura** / **Altura**: em % do tamanho original. 100 = tamanho original. O botão 🔗 bloqueia a proporção (ativo por predefinição). Clique nele para redimensionar livremente
- Enquanto a imagem estiver a ser mostrada, as alterações são pré-visualizadas em tempo real no OBS
- **Guardar** mantém as alterações, **Repor** volta aos valores de quando abriu a janela e **Cancelar** fecha sem guardar

## Vídeo

{/* TODO: 截圖 — 影片分頁 */}

Clique em **Adicionar vídeo** para adicionar um cartão e depois expanda-o:

- **Nome do vídeo**: o nome mostrado no cartão
- **Fonte**: **YouTube** ou **Local**
  - **YouTube**: cole a ligação do vídeo em **URL do YouTube**. Clique em **Testar resolução** para a verificar. Se tiver êxito, mostra "Resolvido, aplicado automaticamente na reprodução"
  - **Local**: clique em **Escolher ficheiro** para escolher um ficheiro mp4, webm ou ogg. O limite de tamanho é 200MB, e ficheiros maiores significam mais latência. Para um fundo transparente, use um vídeo WebM (VP9 Alpha)
- **Reprodução em ciclo**: repete o vídeo
- **Tempo de reprodução**: defina **De** e **Até** (horas, minutos, segundos, ms). Deixe **Até** em 00:00 para reproduzir até ao fim
- **Volume**: 0–100%
- **Atalho**: prima-o para reproduzir o vídeo. Prima-o novamente durante a reprodução para o parar
- **Definir posição e tamanho**: os mesmos campos de posição e tamanho das imagens. Clique em **Repetir pré-visualização** para reproduzir o vídeo em ciclo no OBS enquanto o ajusta, e em **Parar pré-visualização** para parar. Clique em **Guardar** ou **Cancelar** quando terminar

Clique em **▶** num cartão para reproduzir o vídeo no OBS. Clique em **■** para o parar.

## Som

{/* TODO: 截圖 — 音效分頁 */}

Clique em **Adicionar som** para adicionar um cartão e depois expanda-o:

- **Nome do som**: o nome mostrado no cartão
- **Fonte**: **URL do YouTube** ou **Ficheiro local**
  - **URL do YouTube**: cole a ligação e clique em **Testar resolução** para a verificar
  - **Ficheiro local**: clique em **Escolher ficheiro** para escolher um ficheiro mp3, wav, ogg, flac, m4a, aac ou opus
- **Tempo de reprodução**: defina **De** e **Até**. Deixe **Até** em 00:00 para reproduzir até ao fim
- **Volume**: 0–100%
- **Atalho**: prima-o para reproduzir o som

Clique em **▶** num cartão para reproduzir o som no OBS. Clique em **■** para o parar. Só é reproduzido um som de cada vez. Iniciar outro som para o atual.

:::info Limites da versão de teste
- Só pode adicionar **1** imagem, **1** vídeo e **1** som
- Os overlays de imagem e vídeo mostram uma marca de água

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::

## Perguntas frequentes

**Q: Os vídeos ou sons são reproduzidos, mas não há som na transmissão.**
Certifique-se de que **Controlar áudio via OBS** está marcado nas fontes `/videoboard` e `/soundboard` e de que as fontes não estão sem som no misturador do OBS.

**Q: Não consigo escolher o meu ficheiro de vídeo.**
Só é possível escolher ficheiros mp4, webm e ogg, até 200MB. Se um ficheiro for maior, aparece uma mensagem com o limite e o ficheiro não é adicionado.
