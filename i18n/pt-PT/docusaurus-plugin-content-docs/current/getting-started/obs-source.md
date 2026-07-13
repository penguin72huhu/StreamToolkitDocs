---
sidebar_position: 2
---

# Como adicionar fontes no OBS

A maioria das funcionalidades do Stream Toolkit exige a adição de uma "Fonte de Navegador" no OBS para ser exibida na transmissão ao vivo.

## Passo 1: Copiar o URL da funcionalidade

No Stream Toolkit, cada página de funcionalidade exibe o seu URL local correspondente, no formato:

```
http://127.0.0.1:7272/feature-name
```

Copia o URL da funcionalidade que desejas adicionar.

## Passo 2: Adicionar fonte de navegador no OBS

1. Na secção **Fontes** do OBS, clica no botão **+** na parte inferior
2. Seleciona **Navegador**
3. Seleciona **Criar novo**, introduz um nome para a fonte (por exemplo, "Barra de donativos") e clica em **OK**
4. Cola o URL copiado no Passo 1 no campo **URL**
5. Ajusta a **Largura** e a **Altura** conforme necessário
6. Clica em **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Funcionalidades abaixo que exigem marcar "Controlar áudio via OBS"

Inclui saída de áudio; deves marcar **Controlar áudio via OBS** nas definições da fonte de navegador para que o som surja corretamente na transmissão:

- **Media Board** — Vídeo, Som
- **Alertas de donativos**
- **Pedidos de música**

Como marcar:
1. Na lista de fontes do OBS, clica com o botão direito na fonte de navegador
2. Seleciona **Propriedades**
3. Encontra **Controlar áudio via OBS** e marca-o
4. Clica em **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Se ainda não houver som após marcar, confirma se a fonte não está sem som no misturador do OBS.
:::
