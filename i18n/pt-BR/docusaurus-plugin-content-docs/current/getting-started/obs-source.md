---
sidebar_position: 2
---

# Como adicionar fontes no OBS

A maioria dos recursos do Stream Toolkit exige a adição de uma "Fonte de Navegador" no OBS para ser exibida na transmissão ao vivo.

## Passo 1: Copiar a URL do recurso

No Stream Toolkit, cada página de recurso exibe sua URL local correspondente, no formato:

```
http://127.0.0.1:7272/feature-name
```

Copie a URL do recurso que você deseja adicionar.

## Passo 2: Adicionar fonte de navegador no OBS

1. Na seção **Fontes** do OBS, clique no botão **+** na parte inferior
2. Selecione **Navegador**
3. Selecione **Criar novo**, insira um nome para a fonte (por exemplo, "Barra de doações") e clique em **OK**
4. Cole a URL copiada no Passo 1 no campo **URL**
5. Ajuste a **Largura** e a **Altura** conforme necessário
6. Clique em **OK**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Recursos abaixo que exigem marcar "Controlar áudio via OBS"

Inclui saída de áudio; você deve marcar **Controlar áudio via OBS** nas configurações da fonte de navegador para que o som apareça corretamente na transmissão:

- **Media Board** — Vídeo, Som
- **Alertas de doações**
- **Pedidos de música**

Como marcar:
1. Na lista de fontes do OBS, clique com o botão direito na fonte de navegador
2. Selecione **Propriedades**
3. Encontre **Controlar áudio via OBS** e marque-o
4. Clique em **OK**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Se ainda não houver som após marcar, confirme se a fonte não está mutada no misturador do OBS.
:::
