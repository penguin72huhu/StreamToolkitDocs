---
sidebar_position: 5
---

# Media Board

Mostre imagens, reproduza vídeos e toque efeitos sonoros na transmissão com um clique ou um atalho.

A página tem três abas: **Imagem**, **Vídeo** e **Som**. Cada aba tem sua própria URL de fonte do OBS.

| Aba | URL da fonte do OBS | Controlar áudio via OBS |
|-----|---------------------|-------------------------|
| **Imagem** | `http://127.0.0.1:7272/imageboard` | Não é necessário |
| **Vídeo** | `http://127.0.0.1:7272/videoboard` | Obrigatório |
| **Som** | `http://127.0.0.1:7272/soundboard` | Obrigatório |

Clique em **Copiar** ao lado de cada URL e adicione-a ao OBS como fonte de navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source). Os vídeos e sons são reproduzidos na fonte do OBS, não dentro do Stream Toolkit, então é preciso ativar **Controlar áudio via OBS** nessas duas fontes, ou os espectadores não vão ouvi-los.

:::tip
Ative o botão ao lado de **Media Board** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto ele estiver desligado, as imagens não podem ser exibidas e os vídeos e sons não tocam, seja pelos botões ou pelos atalhos.
:::

## Controles comuns

Imagens, vídeos e sons aparecem como cartões:

- Clique em um cartão para expandir ou recolher as configurações dele
- A caixa de seleção à direita do cartão: quando marcada, o item aparece nas ferramentas de inicialização das [Ferramentas rápidas](./quick-tools). Itens novos vêm marcados por padrão
- **✕** exclui o item
- Se um arquivo local tiver sido movido ou excluído, o cartão mostra **Arquivo não encontrado**

### Atalhos

Cada item pode ter seu próprio atalho:

1. Expanda o cartão e clique no botão do atalho
2. Pressione a combinação de teclas desejada e solte. Pressione **Esc** para cancelar
3. Para remover o atalho, clique em **Limpar**

Se a combinação já estiver em uso por outro recurso, ela não é salva e o botão mostra uma mensagem de conflito. O atalho funciona mesmo quando o Stream Toolkit não é a janela ativa. Todos os atalhos também aparecem na página [Atalhos](./hotkeys).

## Imagem

{/* TODO: 截圖 — 圖片分頁 */}

### Adicionar uma imagem

1. Clique em **Adicionar imagem**
2. Escolha um arquivo (jpg, jpeg, png ou gif). O nome do arquivo vira o nome da imagem

Ao expandir o cartão, aparecem uma miniatura e estas configurações:

- **Nome**: o nome da imagem
- **Caminho do arquivo**: clique em **Escolher novamente** para escolher outro arquivo
- **Atalho**: pressione uma vez para mostrar a imagem e de novo para ocultá-la
- **Definir posição e tamanho**: veja abaixo
- **Excluir imagem**: exclui a imagem

### Mostrar e ocultar

Clique no botão **○** de um cartão para mostrar a imagem no OBS. Ele vira **◉**. Clique de novo para ocultar a imagem.

### Configurações de exibição

**Permitir exibir várias imagens ao mesmo tempo** vem desligado por padrão. Enquanto estiver desligado, mostrar uma imagem oculta a que está sendo exibida. Ligue para mostrar várias imagens ao mesmo tempo.

### Definir posição e tamanho

- **Posição X** / **Posição Y**: em px. 0/0 é o centro da fonte. Valores positivos movem para a direita/baixo, negativos para a esquerda/cima
- **Largura** / **Altura**: em % do tamanho original. 100 = tamanho original. O botão 🔗 trava a proporção (ligado por padrão). Clique nele para redimensionar livremente
- Enquanto a imagem está sendo exibida, as mudanças aparecem ao vivo no OBS
- **Salvar** mantém as mudanças, **Redefinir** volta aos valores de quando você abriu a janela, **Cancelar** fecha sem salvar

## Vídeo

{/* TODO: 截圖 — 影片分頁 */}

Clique em **Adicionar vídeo** para adicionar um cartão e depois expanda-o:

- **Nome do vídeo**: o nome exibido no cartão
- **Fonte**: **YouTube** ou **Local**
  - **YouTube**: cole o link do vídeo em **URL do YouTube**. Clique em **Testar resolução** para conferir. Se der certo, aparece "Resolvido; será aplicado automaticamente na reprodução"
  - **Local**: clique em **Escolher arquivo** para escolher um arquivo mp4, webm ou ogg. O limite de tamanho é 200MB, e arquivos maiores significam mais latência. Para fundo transparente, use um vídeo WebM (VP9 Alpha)
- **Reprodução em sequência**: repete o vídeo
- **Tempo de reprodução**: defina **De** e **Até** (horas, minutos, segundos, ms). Deixe **Até** em 00:00 para reproduzir até o fim
- **Volume**: 0–100%
- **Atalho**: pressione para reproduzir o vídeo. Pressione de novo enquanto o vídeo está tocando para pará-lo
- **Definir posição e tamanho**: os mesmos campos de posição e tamanho das imagens. Clique em **Repetir pré-visualização** para reproduzir o vídeo em repetição no OBS enquanto ajusta, e em **Parar pré-visualização** para parar. Clique em **Salvar** ou **Cancelar** ao terminar

Clique em **▶** em um cartão para reproduzir o vídeo no OBS. Clique em **■** para pará-lo.

## Som

{/* TODO: 截圖 — 音效分頁 */}

Clique em **Adicionar som** para adicionar um cartão e depois expanda-o:

- **Nome do som**: o nome exibido no cartão
- **Fonte**: **URL do YouTube** ou **Arquivo local**
  - **URL do YouTube**: cole o link e clique em **Testar resolução** para conferir
  - **Arquivo local**: clique em **Escolher arquivo** para escolher um arquivo mp3, wav, ogg, flac, m4a, aac ou opus
- **Tempo de reprodução**: defina **De** e **Até**. Deixe **Até** em 00:00 para reproduzir até o fim
- **Volume**: 0–100%
- **Atalho**: pressione para tocar o som

Clique em **▶** em um cartão para tocar o som no OBS. Clique em **■** para pará-lo. Só um som toca por vez. Iniciar outro som para o atual.

:::info Limites da versão de teste
- Você só pode adicionar **1** imagem, **1** vídeo e **1** som
- Os overlays de imagem e de vídeo mostram uma marca d'água

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::

## Perguntas frequentes

**Q: Os vídeos ou sons tocam, mas não há som na transmissão.**
Confirme se **Controlar áudio via OBS** está marcado nas fontes `/videoboard` e `/soundboard` e se as fontes não estão mutadas no mixer do OBS.

**Q: Não consigo escolher meu arquivo de vídeo.**
Só é possível escolher arquivos mp4, webm e ogg, de até 200MB. Se um arquivo for maior, uma mensagem mostra o limite e o arquivo não é adicionado.
