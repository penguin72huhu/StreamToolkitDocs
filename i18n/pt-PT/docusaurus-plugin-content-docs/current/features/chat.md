---
sidebar_position: 3
---

# Chat

O **Chat** mostra o chat da Twitch e do YouTube em conjunto num único overlay, com tradução automática opcional. Também pode mostrar o chat numa janela transparente no ambiente de trabalho que só você vê.

## URL da fonte do OBS

```
http://127.0.0.1:7272/chat
```

Adicione-o como fonte de navegador: [Como adicionar fontes no OBS](../getting-started/obs-source). Este overlay não tem som.

:::info
As mensagens só são enviadas para o overlay enquanto o interruptor **Chat** na barra lateral estiver ativo. O chat continua a ser recebido enquanto está desligado, por isso as funcionalidades que leem o chat (sondagens, sorteios, pedidos de música, etc.) continuam a funcionar.
:::

## Antes de começar

Ligue as plataformas que quer mostrar:

- [Definições do Twitch](../platforms/twitch)
- [Definições do YouTube](../platforms/youtube-settings)

A página de definições tem dois separadores: **Definições** e **Aspeto**.

## Separador Definições

### Plataformas

- **Mostrar ícone da plataforma (Twitch / YouTube)** — mostra o ícone <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> antes de cada mensagem

Cada plataforma tem o seu próprio cartão. O ponto junto ao nome da plataforma acende-se a verde quando está ligada e ativada; aparece **(não ligado)** se a Twitch não estiver ligada, e **URL do chat não ligado** se o chat do YouTube não estiver associado.

| Opção | Descrição |
|--------|-------------|
| **Ativar chat** | Mostra as mensagens desta plataforma |
| **Mostrar avatar** | Mostra o avatar do espectador |
| **Mostrar emblemas** (Twitch) / **Mostrar emblemas (ícone de membro)** (YouTube) | Mostra os emblemas |
| **Mostrar o nome dos espectadores em vez do @identificador** | Só YouTube. Desativado até iniciar sessão com a Google |

Quando o chat do YouTube está ativado mas não associado, aparecem dois botões no respetivo cartão:

- **Ligar automaticamente** — encontra automaticamente a sua transmissão atual (requer início de sessão com a Google)
- **Introduzir manualmente** — leva-o à página de definições para colar o URL do chat

**Máximo de mensagens**: quantas mensagens são mantidas no ecrã (5–200, predefinição 50).

### Tradução automática

1. Marque **Ativar tradução**
2. **Idioma de destino**: o idioma para o qual as mensagens são traduzidas. A predefinição, **Seguir o idioma da interface**, usa o idioma da interface da aplicação
3. **Idiomas a não traduzir** (opcional): as mensagens nos idiomas marcados ficam como estão. O português PT-BR e PT-PT não podem ser distinguidos, por isso marcar um deles ignora ambos

O **Serviço de tradução** é o **MyMemory**, que não precisa de chave de API.

- **Email (opcional)**: sem email, a quota diária é de 5.000 caracteres; introduza um email e clique em **Guardar** para a aumentar para 50.000 caracteres (grátis, sem necessidade de registo no MyMemory)
- A barra abaixo mostra a quantidade aproximada usada hoje. É reposta diariamente às 08:00 UTC

### Teste

- **Enviar mensagem de teste** — envia uma mensagem de exemplo aleatória para o overlay
- **Limpar** — limpa todas as mensagens do overlay

Se aparecer **Falha na ligação — o servidor pode não estar em execução**, o servidor local do Stream Toolkit não está a responder.

### Janela de chat no ambiente de trabalho

Mostra o chat numa pequena janela transparente, sempre visível, por cima do seu jogo. Só você a vê — útil para transmitir com um único monitor.

1. Clique em **Abrir janela** (ou clique com o botão direito no ícone da área de notificação e escolha **Abrir chat no ambiente de trabalho**)
2. Enquanto estiver desbloqueada, arraste a barra superior para mover a janela e arraste as margens para a redimensionar
3. Clique em **🔒 Bloquear** quando estiver no sítio certo. Os cliques passam então através da janela para o seu jogo. Para desbloquear, passe o rato por cima da janela e clique no 🔓 que aparece no canto superior direito, ou clique em **🔓 Desbloquear** na página de definições

**Repor posição** volta a colocar a janela na posição predefinida.

| Definição | Descrição |
|---------|-------------|
| **Estilo** | **Só nome e mensagem** (predefinição) ou **Igual ao chat do OBS** |
| **Tamanho da letra** | 12–32 px, predefinição 16. Só para **Só nome e mensagem** |
| **Opacidade do texto** | 10–100%, predefinição 100% |
| **Opacidade do fundo** | 0–100%, predefinição 40% |
| **Desvanecer mensagens** | 0–120 segundos, predefinição 0. Cada mensagem desvanece-se após este número de segundos, e não é possível voltar a ver as mensagens desvanecidas. Com 0 nada se desvanece, e pode deslocar-se para cima até mensagens anteriores enquanto estiver desbloqueada (até ao Máximo de mensagens) |
| **Ocultar da captura da transmissão** | Ativo por predefinição. A Captura de ecrã do OBS não apanha a janela, por isso os espectadores não veem o chat duas vezes. Também não aparece em capturas de ecrã nem na partilha de ecrã do Discord |

:::tip
Se não conseguir ver a janela com o jogo em ecrã inteiro, mude o jogo para o modo Janela sem margens ou Janela. Use **Enviar mensagem de teste** para verificar a posição e o tamanho da janela.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Separador Aspeto

### Pré-visualização

O topo do separador mostra uma pré-visualização em tempo real. O seletor de cor junto a **Pré-visualizar** muda apenas o fundo da pré-visualização. As caixas **Avatar**, **Emblemas** e **Ícone da plataforma** mudam apenas o que a pré-visualização mostra.

### Definições de aspeto

**Repor predefinição** restaura o aspeto predefinido (ou o aspeto do tema aplicado, se houver um tema aplicado).

- **Direção de entrada**: **De cima para baixo**, **De baixo para cima** (predefinição), **Da esquerda para a direita**, **Da direita para a esquerda**
- **Texto** — definido separadamente para **Nome de utilizador** e **Mensagem**:
  - Tipo de letra, tamanho (px) e cor. Para o nome de utilizador pode escolher **Cor original** (a cor do espectador na plataforma) ou **Cor personalizada**
  - **Contorno**: cor, **Opacidade**, **Espessura**
  - **Sombra**: cor, **Opacidade**, **Desfoque**, deslocamento X / Y
- **Tamanho dos ícones**: escala de **Ícone da plataforma**, **Avatar** e **Emblemas** (0,1–5x)
- **Cor**: **Cor de fundo** de cada mensagem

### CSS personalizado

Expanda **CSS personalizado** para editar diretamente o CSS do overlay. Use **Gerir recursos** para carregar imagens a referenciar no CSS. **Repor predefinição** restaura o CSS predefinido. Consulte também [Temas](./themes).

:::tip
Se o seu CSS personalizado definir um dos campos de aspeto com `!important`, esse campo fica a cinzento nas definições de Aspeto ("Esta definição é controlada por CSS personalizado"). Quando um tema está aplicado, o CSS fica só de leitura — reponha-o antes de editar.
:::

## Limites da versão de teste

:::info
- Ativar a tradução automática adiciona uma marca de água ao overlay do chat
- O **CSS personalizado** só está disponível na versão completa
- A **Janela de chat no ambiente de trabalho** só está disponível na versão completa

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::
