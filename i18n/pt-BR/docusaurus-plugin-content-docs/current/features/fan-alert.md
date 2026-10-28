---
sidebar_position: 8.1
---

# Alertas de novos seguidores

Exibe um alerta na transmissão quando alguém segue você na Twitch ou se inscreve no seu canal do YouTube.

## URL da fonte do OBS

```
http://127.0.0.1:7272/fan-alert
```

Copie a URL no topo da página **Configurações de Alertas de novos seguidores** e adicione-a ao OBS como Fonte de Navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source).

:::warning
Os alertas tocam um som. Marque **Controlar áudio via OBS** nas propriedades da fonte de navegador, ou o som não será ouvido na transmissão.
:::

Use o botão ao lado de **Alertas de novos seguidores** na barra lateral esquerda para ligar ou desligar os alertas. Enquanto ele estiver desligado, os novos seguidores não são exibidos nem registrados, e os botões de teste também não funcionam.

Quando vários seguidores chegam em sequência, os alertas entram em fila e são exibidos um após o outro. Este overlay tem sua própria fila, então nunca espera atrás dos [Alertas de doações](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Aba Configurações

### Plataforma de integração

Marque as plataformas que devem disparar um alerta: **Twitch** e **YouTube** (ambas marcadas por padrão). Um ponto verde indica que a plataforma está conectada; caso contrário, a linha mostra **Não autorizado**.

- **Twitch**: cada novo seguidor dispara um alerta na hora. Conecte a Twitch primeiro: [Configurações do Twitch](../platforms/twitch).
- **YouTube**: novos inscritos. Entre com o Google primeiro: [Configurações do YouTube](../platforms/youtube-settings).

Como os inscritos do YouTube são encontrados:

- O YouTube não tem um evento ao vivo de "novo inscrito", então o app pergunta ao YouTube pelos inscritos mais recentes a cada 1,5 minuto.
- Ele só verifica enquanto você está ao vivo e o chat ao vivo do YouTube está conectado àquela transmissão. Não verifica na sala de espera nem depois que a live termina.
- Quem se inscreveu antes do início da live (mais de cerca de 5 minutos antes do início das verificações) não é anunciado.
- Como diz a dica na página, **O YouTube só avisa inscritos com inscrições públicas, e pode levar de minutos a horas.**

### Configurações

| Campo | Descrição |
|-------|-----------|
| **Tempo de exibição** | Quanto tempo cada alerta fica na tela, em segundos (1–60). Padrão: 5. |
| **Avisar o mesmo espectador no máximo uma vez a cada 24 horas** | Desligado por padrão. Quando ligado, se o mesmo espectador seguir de novo em até 24 horas (por exemplo, deixando de seguir e seguindo outra vez), isso não é exibido nem registrado. |

### Testar alertas

Clique em **Testar alerta (Twitch)** ou **Testar alerta (YouTube)** para enviar um alerta de exemplo ao OBS. Os alertas de teste não entram no histórico.

Se os Alertas de novos seguidores estiverem desligados, o teste não é exibido e a página mostra **Ative primeiro Alertas de novos seguidores nos atalhos rápidos**.

## Aba Aparência

### Pré-visualização

A pré-visualização usa a mesma página da fonte do OBS. Use o seletor de cor ao lado de **Pré-visualizar** para mudar o fundo da pré-visualização e clique em **▶ Repetir animação** para tocar a animação do alerta de novo.

### Estilo unificado / Individual por plataforma

- **Estilo unificado**: Twitch e YouTube usam o mesmo estilo de alerta.
- **Individual por plataforma**: cada plataforma tem seu próprio estilo. Escolha **Twitch** ou **YouTube** com os botões abaixo e edite as configurações dela. Na primeira troca, as plataformas que você ainda não personalizou copiam o estilo unificado atual, cada uma com sua própria cor da barra de contagem regressiva.

**Restaurar padrão** restaura o estilo padrão do estilo que você está editando.

### Imagem

- **Escolher imagem**: escolha uma imagem no gerenciador de recursos. Sem imagem, aparece um emoji de coração. **Limpar** remove a imagem.
- **Tamanho da imagem**: 1–400 px.
- **Posição da imagem**: **À esquerda**, **À direita**, **Acima** ou **Abaixo**.

### Som

Escolha um som integrado: **Nenhum**, **Sino** (padrão), **Moeda**, **Campainha**, **Pop**, **Fanfarra**. Clique em **▶** para ouvir. Clique em **Escolher som** para usar seu próprio arquivo de som do gerenciador de recursos.

### Texto personalizado

Escreva a frase exibida no alerta. Use `{name}` para o nome do seguidor e `{platform}` para o nome da plataforma. Deixe vazio para usar o texto padrão: `Boas-vindas, {name}! Obrigado por seguir`

### Texto e cor

- **Texto**: defina fonte, tamanho e cor de **Texto personalizado** e **Nome do seguidor**.
- **Cor**: **Fundo**, **Sombra** e **Barra de contagem regressiva**.

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS do estilo que você está editando (unificado ou a plataforma selecionada). **Restaurar padrão** restaura o CSS do modelo, e **Gerenciar recursos** abre o gerenciador de recursos. Temas do Steam Workshop também podem ser aplicados aqui. Enquanto um tema estiver aplicado, o CSS fica somente leitura. Veja [Temas](./themes).

## Aba Histórico

Lista os novos seguidores recentes das duas plataformas, do mais novo para o mais antigo: plataforma, nome e horário. O histórico só aparece no app, nunca no overlay.

- São guardados até 100 seguidores, e as entradas com mais de 30 dias são removidas automaticamente.
- Clique em **Limpar** para esvaziar a lista.

:::info Versão de teste
O CSS personalizado só está disponível na versão completa, e o alerta mostra uma marca d'água no OBS. Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: Não há som na transmissão?**
Verifique se **Controlar áudio via OBS** está marcado nas propriedades da fonte de navegador e se a fonte não está mutada no mixer do OBS. Verifique também se **Som** não está definido como **Nenhum**.

**Q: Um inscrito do YouTube não recebeu alerta.**
Só as inscrições públicas são informadas, e o YouTube pode levar de minutos a horas para informá-las. Além disso, o app só verifica enquanto você está ao vivo com o chat ao vivo do YouTube conectado.

**Q: Adicionei a fonte do OBS depois. Ela vai repetir os alertas anteriores?**
Não. Uma fonte recém-aberta só mostra os alertas que chegam depois que ela se conecta. Os seguidores anteriores continuam na aba **Histórico**.
