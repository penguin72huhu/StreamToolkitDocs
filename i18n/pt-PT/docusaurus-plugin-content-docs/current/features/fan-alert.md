---
sidebar_position: 8.1
---

# Alertas de novos seguidores

Mostra um alerta na transmissão quando alguém o segue na Twitch ou subscreve o seu canal do YouTube.

## URL da fonte do OBS

```
http://127.0.0.1:7272/fan-alert
```

Copie o URL no topo da página **Definições de Alertas de novos seguidores** e adicione-o ao OBS como Fonte de Navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source).

:::warning
Os alertas reproduzem um som. Marque **Controlar áudio via OBS** nas propriedades da fonte de navegador, caso contrário o som não se ouvirá na transmissão.
:::

Use o interruptor junto a **Alertas de novos seguidores** na barra lateral esquerda para ativar ou desativar os alertas. Enquanto estiver desligado, os novos seguidores não são mostrados nem registados, e os botões de teste também não funcionam.

Quando vários seguidores chegam quase ao mesmo tempo, os alertas ficam em fila e são mostrados um após o outro. Este overlay tem a sua própria fila, por isso nunca fica à espera dos [Alertas de donativos](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Separador Definições

### Plataforma de integração

Marque as plataformas que devem disparar um alerta: **Twitch** e **YouTube** (ambas marcadas por predefinição). Um ponto verde significa que a plataforma está ligada; caso contrário, a linha mostra **Não autorizado**.

- **Twitch**: cada novo seguidor dispara um alerta de imediato. Ligue primeiro a Twitch: [Definições do Twitch](../platforms/twitch).
- **YouTube**: novos subscritores. Inicie primeiro sessão com a Google: [Definições do YouTube](../platforms/youtube-settings).

Como são encontrados os subscritores do YouTube:

- O YouTube não tem um evento em tempo real de "novo subscritor", por isso a aplicação pede ao YouTube os seus subscritores mais recentes a cada 1,5 minutos.
- Só verifica enquanto estiver em direto e o chat em direto do YouTube estiver ligado a essa transmissão. Não verifica na sala de espera nem depois de a transmissão terminar.
- As pessoas que subscreveram antes de a transmissão começar (mais de cerca de 5 minutos antes do início da verificação) não são anunciadas.
- Como indica a dica na página, **O YouTube só avisa subscritores com subscrições públicas, e pode demorar de minutos a horas.**

### Definições

| Campo | Descrição |
|-------|-------------|
| **Tempo de exibição** | Quanto tempo cada alerta fica no ecrã, em segundos (1–60). Predefinição: 5. |
| **Avisar o mesmo espetador no máximo uma vez a cada 24 horas** | Desativado por predefinição. Quando ativo, o mesmo espectador que volte a seguir dentro de 24 horas (por exemplo, deixar de seguir e voltar a seguir) não é mostrado nem registado. |

### Testar alertas

Clique em **Testar alerta (Twitch)** ou **Testar alerta (YouTube)** para enviar um alerta de exemplo para o OBS. Os alertas de teste não são adicionados ao histórico.

Se os Alertas de novos seguidores estiverem desligados, o teste não é reproduzido e a página mostra **Ative primeiro Alertas de novos seguidores nos atalhos rápidos**.

## Separador Aspeto

### Pré-visualização

A pré-visualização usa a mesma página que a fonte do OBS. Use o seletor de cor junto a **Pré-visualizar** para mudar o fundo da pré-visualização e clique em **▶ Repetir animação** para reproduzir novamente a animação do alerta.

### Estilo unificado / Independente por plataforma

- **Estilo unificado**: a Twitch e o YouTube usam o mesmo estilo de alerta.
- **Independente por plataforma**: cada plataforma tem o seu próprio estilo. Escolha **Twitch** ou **YouTube** com os botões abaixo e edite as respetivas definições. Quando muda pela primeira vez, as plataformas que ainda não personalizou copiam o estilo unificado atual, cada uma com a sua própria cor da barra de contagem.

**Repor predefinição** restaura o estilo predefinido do estilo que está a editar.

### Imagem

- **Escolher imagem**: escolha uma imagem no gestor de recursos. Sem imagem, é mostrado um emoji de coração. **Limpar** remove a imagem.
- **Tamanho da imagem**: 1–400 px.
- **Posição da imagem**: **À esquerda**, **À direita**, **Em cima** ou **Em baixo**.

### Som

Escolha um som incorporado: **Nenhum**, **Sino** (predefinição), **Moeda**, **Campainha**, **Pop**, **Fanfarra**. Clique em **▶** para ouvir. Clique em **Escolher som** para usar o seu próprio ficheiro de som do gestor de recursos.

### Texto personalizado

Escreva a frase mostrada no alerta. Use `{name}` para o nome do seguidor e `{platform}` para o nome da plataforma. Deixe vazio para usar o texto predefinido: `Bem-vindo, {name}! Obrigado por seguir`

### Texto e cor

- **Texto**: defina o tipo de letra, o tamanho e a cor de **Texto personalizado** e **Nome do seguidor**.
- **Cor**: **Fundo**, **Sombra** e **Barra de contagem**.

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS do estilo que está a editar (unificado ou da plataforma selecionada). **Repor predefinição** restaura o CSS do modelo e **Gerir recursos** abre o gestor de recursos. Também pode aplicar aqui temas do Steam Workshop. Enquanto um tema estiver aplicado, o CSS fica só de leitura. Consulte [Temas](./themes).

## Separador Histórico

Lista os novos seguidores recentes das duas plataformas, do mais recente para o mais antigo: plataforma, nome e hora. O histórico só aparece na aplicação, nunca no overlay.

- São guardados até 100 seguidores, e as entradas com mais de 30 dias são removidas automaticamente.
- Clique em **Limpar** para esvaziar a lista.

:::info Versão de teste
O CSS personalizado só está disponível na versão completa, e o alerta mostra uma marca de água no OBS. Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: Não há som na transmissão?**
Verifique se **Controlar áudio via OBS** está marcado nas propriedades da fonte de navegador e se a fonte não está sem som no misturador do OBS. Verifique também se **Som** não está definido como **Nenhum**.

**Q: Um subscritor do YouTube não recebeu alerta.**
Só são comunicadas as subscrições públicas, e o YouTube pode demorar de minutos a horas a comunicá-las. A aplicação também só verifica enquanto estiver em direto com o chat em direto do YouTube ligado.

**Q: Adicionei a fonte do OBS mais tarde. Os alertas anteriores voltam a aparecer?**
Não. Uma fonte acabada de abrir só mostra os alertas que chegam depois de se ligar. Os seguidores anteriores continuam no separador **Histórico**.
