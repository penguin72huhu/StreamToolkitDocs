---
sidebar_position: 3
---

# Chat

O **Chat** mostra o chat da Twitch e do YouTube juntos em um único overlay, com tradução automática opcional. Ele também pode mostrar o chat em uma janela transparente na área de trabalho que só você vê.

## URL da fonte do OBS

```
http://127.0.0.1:7272/chat
```

Adicione-a como fonte de navegador: [Como adicionar fontes no OBS](../getting-started/obs-source). Este overlay não tem som.

:::info
As mensagens só são enviadas ao overlay enquanto o botão **Chat** na barra lateral estiver ligado. O chat continua sendo recebido com ele desligado, então os recursos que leem o chat (enquetes, sorteios, pedidos de música etc.) continuam funcionando.
:::

## Antes de começar

Conecte as plataformas que você quer mostrar:

- [Configurações do Twitch](../platforms/twitch)
- [Configurações do YouTube](../platforms/youtube-settings)

A página de configurações tem duas abas: **Configurações** e **Aparência**.

## Aba Configurações

### Plataformas

- **Mostrar ícone da plataforma (Twitch / YouTube)** — mostra o ícone <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> antes de cada mensagem

Cada plataforma tem seu próprio cartão. O ponto ao lado do nome da plataforma fica verde quando ela está conectada e ativada; aparece **(Não conectado)** se a Twitch não estiver conectada, e **URL do chat não conectada** se o chat do YouTube não estiver vinculado.

| Opção | Descrição |
|-------|-----------|
| **Ativar chat** | Mostra as mensagens desta plataforma |
| **Mostrar avatar** | Mostra o avatar do espectador |
| **Mostrar emblemas** (Twitch) / **Mostrar emblemas (ícone de membro)** (YouTube) | Mostra os emblemas |
| **Mostrar o nome dos espectadores em vez do @identificador** | Só no YouTube. Fica desativado até você entrar com o Google |

Quando o chat do YouTube está ativado mas não vinculado, dois botões aparecem no cartão dele:

- **Conectar automaticamente** — encontra sua transmissão atual automaticamente (exige login com o Google)
- **Inserir manualmente** — leva à página de configurações para colar a URL do chat

**Máximo de mensagens**: quantas mensagens ficam na tela (5–200, padrão 50).

### Tradução automática

1. Marque **Ativar tradução**
2. **Idioma de destino**: o idioma para o qual as mensagens são traduzidas. O padrão, **Seguir o idioma da interface**, usa o idioma da interface do app
3. **Idiomas a não traduzir** (opcional): as mensagens nos idiomas marcados ficam como estão. Português PT-BR e PT-PT não podem ser diferenciados, então marcar qualquer um deles ignora os dois

O **Serviço de tradução** é o **MyMemory**, que não precisa de chave de API.

- **E-mail (opcional)**: sem e-mail, a cota diária é de 5.000 caracteres; insira um e-mail e clique em **Salvar** para aumentá-la para 50.000 caracteres (gratuito, sem necessidade de cadastro no MyMemory)
- A barra abaixo mostra a quantidade aproximada usada hoje. Ela é zerada diariamente às 08:00 UTC

### Teste

- **Enviar mensagem de teste** — envia uma mensagem de exemplo aleatória ao overlay
- **Limpar** — apaga todas as mensagens do overlay

Se aparecer **Falha na conexão — o servidor pode não estar em execução**, o servidor local do Stream Toolkit não está respondendo.

### Janela de chat na área de trabalho

Mostra o chat em uma pequena janela transparente, sempre no topo, sobre o seu jogo. Só você a vê — prático para transmitir com um único monitor.

1. Clique em **Abrir janela** (ou clique com o botão direito no ícone da bandeja e escolha **Abrir chat na área de trabalho**)
2. Enquanto destravada, arraste a barra superior para mover a janela e arraste as bordas para redimensioná-la
3. Clique em **🔒 Travar** quando ela estiver no lugar. A partir daí, os cliques atravessam a janela e vão para o jogo. Para destravar, passe o mouse sobre a janela e clique no 🔓 que aparece no canto superior direito, ou clique em **🔓 Destravar** na página de configurações

**Redefinir posição** leva a janela de volta à posição padrão.

| Configuração | Descrição |
|--------------|-----------|
| **Estilo** | **Só nome e mensagem** (padrão) ou **Igual ao chat do OBS** |
| **Tamanho da fonte** | 12–32 px, padrão 16. Só para **Só nome e mensagem** |
| **Opacidade do texto** | 10–100%, padrão 100% |
| **Opacidade do fundo** | 0–100%, padrão 40% |
| **Esmaecer mensagens** | 0–120 segundos, padrão 0. Cada mensagem desaparece depois desse número de segundos, e não é possível rolar de volta até as mensagens que sumiram. Em 0 nada desaparece, e você pode rolar para cima até mensagens anteriores enquanto a janela estiver destravada (até o Máximo de mensagens) |
| **Ocultar da captura da transmissão** | Ligado por padrão. A Captura de tela do OBS não capta a janela, então os espectadores não veem o chat duas vezes. Ela também não aparece em capturas de tela nem no compartilhamento de tela do Discord |

:::tip
Se você não vir a janela com o jogo em tela cheia, mude o jogo para o modo janela sem bordas ou janela. Use **Enviar mensagem de teste** para conferir a posição e o tamanho da janela.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Aba Aparência

### Pré-visualização

O topo da aba mostra uma pré-visualização ao vivo. O seletor de cor ao lado de **Pré-visualizar** muda só o fundo da pré-visualização. As caixas **Avatar**, **Emblemas** e **Ícone da plataforma** mudam só o que a pré-visualização mostra.

### Configurações de aparência

**Restaurar padrão** restaura a aparência padrão (ou a aparência do tema aplicado, se houver um tema aplicado).

- **Direção de entrada**: **De cima para baixo**, **De baixo para cima** (padrão), **Da esquerda para a direita**, **Da direita para a esquerda**
- **Texto** — definido separadamente para **Apelido** e **Mensagem**:
  - Fonte, tamanho (px) e cor. Para o apelido, você pode escolher **Cor original** (a cor do espectador na plataforma) ou **Cor personalizada**
  - **Contorno**: cor, **Opacidade**, **Espessura**
  - **Sombra**: cor, **Opacidade**, **Desfoque**, deslocamento X / Y
- **Tamanho dos ícones**: escala de **Ícone da plataforma**, **Avatar** e **Emblemas** (0.1–5x)
- **Cor**: **Cor de fundo** de cada mensagem

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS do overlay diretamente. Use **Gerenciar recursos** para enviar imagens e referenciá-las no CSS. **Restaurar padrão** restaura o CSS padrão. Veja também [Temas](./themes).

:::tip
Se o seu CSS personalizado definir um dos campos de aparência com `!important`, esse campo fica acinzentado nas configurações de aparência ("Esta configuração é controlada por CSS personalizado"). Quando um tema está aplicado, o CSS fica somente leitura — restaure-o antes de editar.
:::

## Limites da versão de teste

:::info
- Ativar a tradução automática adiciona uma marca d'água ao overlay do chat
- O **CSS personalizado** só está disponível na versão completa
- A **Janela de chat na área de trabalho** só está disponível na versão completa

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::
