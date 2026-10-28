---
sidebar_position: 8.2
---

# Alertas de aniversário

Adicione os aniversários dos seus espectadores a uma lista. Quando um espectador da lista fala no chat durante a sua live no dia do aniversário ou pouco depois, um alerta de aniversário aparece na transmissão. Cada espectador recebe um alerta por aniversário.

## URL da fonte do OBS

```
http://127.0.0.1:7272/birthday-alert
```

Copie a URL no topo da página **Configurações de Alertas de aniversário** e adicione-a ao OBS como Fonte de Navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source).

:::warning
Os alertas tocam um som. Marque **Controlar áudio via OBS** nas propriedades da fonte de navegador, ou o som não será ouvido na transmissão.
:::

Ative o botão ao lado de **Alertas de aniversário** na barra lateral esquerda. Só enquanto ele estiver ligado o app se conecta ao chat e verifica os aniversários. Os botões **Testar alerta** e **Repetir** funcionam mesmo com ele desligado.

A página tem três abas: **Configurações**, **Espectadores** e **Aparência**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Como funciona

- Um espectador da lista que fala no chat desde o dia do aniversário até o número de dias que você definir depois dele recebe um alerta. Nada aparece antes do aniversário.
- Cada espectador recebe um alerta por aniversário. Um aniversário em 28/12 anunciado em 2/1 ainda conta como o aniversário do ano anterior.
- Os alertas só disparam enquanto a plataforma em que o espectador falou estiver ao vivo. Enquanto você estiver offline, ou enquanto o app ainda não souber se você está ao vivo, falar no chat não dispara nem registra o alerta; ele aparece na próxima vez que a pessoa falar durante uma live.
- O histórico do chat carregado quando o chat do YouTube se conecta não conta, então reiniciar o app não anuncia quem falou enquanto ele estava fechado.
- Um aniversário em 29/2 cai em 28/2 nos anos não bissextos.

## Aba Configurações

### Conexão com o chat

Aparece quando o recurso está ativado. Cada plataforma mostra se o chat dela está conectado:

- **Twitch**: se nenhum canal estiver definido, a linha mostra **Nenhum canal da Twitch definido — conecte a Twitch primeiro** com **Ir para configurações**. Conecte a Twitch primeiro: [Configurações do Twitch](../platforms/twitch).
- **YouTube**: se o chat não estiver conectado, a linha mostra **Conectar automaticamente** e **Inserir manualmente** (leva ao campo de URL do chat nas Configurações). Se você usa a conexão automática e entrou com o Google, aparece **Se não conectar quando você estiver ao vivo, clique em Conectar na página Chat**. Veja [Configurações do YouTube](../platforms/youtube-settings) e [Chat](./chat).

Depois que uma plataforma se conecta, ela também mostra **Ao vivo**, **Offline** ou **Não dá para saber se está ao vivo**. Os alertas só disparam em **Ao vivo**.

### Configurações

| Campo | Descrição |
|-------|-----------|
| **Dias após o aniversário que ainda contam** | 0–30. Padrão: 7. 0 = só no dia do aniversário. |
| **Tempo de exibição** | Quanto tempo cada alerta fica na tela, em segundos (1–60). Padrão: 6. |

### Testar alertas

Clique em **Testar alerta** para enviar um alerta de exemplo ao OBS, usando um espectador de teste e a data de hoje. Ele aparece só no OBS e nunca é registrado, e funciona mesmo com o botão da barra lateral esquerda desligado. O botão muda por um instante para **Enviado**.

## Aba Espectadores

### Adicionar um espectador

Há duas formas de adicionar um espectador:

- **+ Adicionar das pessoas recentes**: escolha alguém que falou no chat recentemente. O formulário abre com o nome da pessoa como anotação, a conta dela já vinculada e a data de hoje como aniversário.
- **+ Adicionar pelo nome**: digite você mesmo o nome da conta.

**Pessoas que falaram no chat** lista os espectadores que falaram enquanto o chat estava conectado (até 200, guardados por 30 dias). Clique em **Atualizar** para atualizá-la. Espectadores que já estão na lista mostram **Adicionado** e não podem ser escolhidos de novo. Uma caixa de pesquisa aparece quando a lista é longa.

Preencha o formulário:

1. **Anotação / apelido**: o nome pelo qual você conhece a pessoa, ex.: `Ana`. Opcional.
2. **Aniversário**: mês e dia (sem ano).
3. **Contas**: pelo menos uma conta. Um espectador pode ter várias contas, ex.: Twitch e YouTube.
   - **＋ Digitar uma conta**: escolha **Twitch** ou **YouTube** e digite o nome. Na Twitch, use o login ou o nome de exibição; no YouTube, o @identificador ou o nome do canal.
   - **＋ Das pessoas que falaram no chat**: adicione uma conta que já está vinculada.
   - **✕** remove uma conta.
4. Clique em **Salvar** (ou pressione Enter). **Cancelar** (ou Esc) fecha o formulário.

### Nomes digitados e vinculação

Um nome digitado é vinculado à conta na primeira vez que esse espectador fala no chat. A comparação ignora maiúsculas/minúsculas e um `@` no início. Nomes podem se repetir, então escolher entre as pessoas recentes é mais seguro.

No YouTube, digite o @identificador: se **Mostrar o nome dos espectadores em vez do @identificador** não estiver ligado na página Chat, um nome de canal pode nunca ser reconhecido.

Cada conta da lista mostra:

- **Vinculado: [nome]**: a conta está vinculada.
- **Aguardando “[nome]” falar no chat**: um nome digitado que ainda não foi vinculado.
- **Recém-vinculado**: o app vinculou esta conta automaticamente quando o espectador falou no chat. Confira se é mesmo a pessoa e clique em **✓ Está certo**, ou clique em **Desvincular** se não for.
- **Esta conta já está em “[nome]”**: o nome digitado correspondeu a uma conta que pertence a outro espectador da lista. Uma conta só pode pertencer a um espectador, então mude o nome aqui ou exclua um dos dois.

**Desvincular** abre uma caixa embaixo da conta. Depois de desvincular, o nome da caixa passa a ser procurado (você pode alterá-lo), e a conta é vinculada de novo quando esse espectador falar no chat.

### A lista

Os espectadores cujo alerta de aniversário está pendente aparecem primeiro, seguidos dos próximos aniversários. Uma caixa de pesquisa aparece quando há mais de 5 espectadores. Cada espectador mostra:

- **Aguardando falar**: é a época do aniversário; o alerta aparece assim que a pessoa falar no chat.
- **🎂 Exibido em [data]**: o alerta deste aniversário já foi exibido.
- **▶ Repetir**: mostra o alerta deste espectador de novo no OBS. Funciona a qualquer momento e nunca é registrado.
- **Editar**: altere a anotação, o aniversário ou as contas. Mudar o aniversário permite que o alerta dispare de novo na nova data.
- **Excluir**: clique em **Excluir** e depois em **Confirmar exclusão**.

## Aba Aparência

### Pré-visualização

A pré-visualização usa a mesma página da fonte do OBS. Use o seletor de cor ao lado de **Pré-visualizar** para mudar o fundo da pré-visualização e clique em **▶ Repetir animação** para tocar a animação do alerta de novo.

### Estilo unificado / Individual por plataforma

- **Estilo unificado**: Twitch e YouTube usam o mesmo estilo de alerta.
- **Individual por plataforma**: cada plataforma tem seu próprio estilo. Escolha **Twitch** ou **YouTube** com os botões abaixo e edite as configurações dela. Na primeira troca, as plataformas que você ainda não personalizou copiam o estilo unificado atual, cada uma com sua própria cor da barra de contagem regressiva.

**Restaurar padrão** restaura o estilo padrão do estilo que você está editando.

### Imagem

- **Escolher imagem**: escolha uma imagem no gerenciador de recursos. Sem imagem, aparece um emoji de bolo. **Limpar** remove a imagem.
- **Tamanho da imagem**: 1–400 px.
- **Posição da imagem**: **À esquerda**, **À direita**, **Acima** ou **Abaixo**.

### Som

Escolha um som integrado: **Nenhum**, **Sino** (padrão), **Moeda**, **Campainha**, **Pop**, **Fanfarra**. Clique em **▶** para ouvir. Clique em **Escolher som** para usar seu próprio arquivo de som do gerenciador de recursos.

### Texto personalizado

Escreva a frase exibida no alerta. Deixe vazio para usar o texto padrão: `Feliz aniversário, {name}!` Você pode usar:

| Marcador | Substituído por |
|----------|-----------------|
| `{name}` | O nome do espectador no chat |
| `{label}` | Sua anotação / apelido (o nome do chat se a anotação estiver vazia) |
| `{birthday}` | O aniversário, ex.: `10/20` |
| `{MM}` `{DD}` | Mês e dia com dois dígitos, para montar seu próprio formato, ex.: `{DD}/{MM}` |
| `{date}` | O aniversário no idioma do overlay |
| `{platform}` | O nome da plataforma |

### Texto e cor

- **Texto**: defina fonte, tamanho e cor de **Texto personalizado** e **Nome do espectador**.
- **Cor**: **Fundo**, **Sombra** e **Barra de contagem regressiva**.

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS do estilo que você está editando (unificado ou a plataforma selecionada). **Restaurar padrão** restaura o CSS do modelo, e **Gerenciar recursos** abre o gerenciador de recursos. Temas do Steam Workshop também podem ser aplicados aqui. Enquanto um tema estiver aplicado, o CSS fica somente leitura. Veja [Temas](./themes).

:::info Versão de teste
- Até 3 espectadores na lista. Se a lista tiver mais (ex.: vinda de um salvamento da versão completa), os espectadores extras aparecem bloqueados 🔒: nunca disparam alerta e não podem ser editados nem repetidos.
- O CSS personalizado só está disponível na versão completa.
- O alerta mostra uma marca d'água no OBS.

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: Não há som na transmissão?**
Verifique se **Controlar áudio via OBS** está marcado nas propriedades da fonte de navegador e se a fonte não está mutada no mixer do OBS. Verifique também se **Som** não está definido como **Nenhum**.

**Q: Um espectador falou no chat no aniversário, mas nenhum alerta apareceu.**
Verifique se o botão da barra lateral esquerda está ligado, se a **Conexão com o chat** na aba **Configurações** mostra **Ao vivo** para aquela plataforma e se a conta na lista mostra **Vinculado** ou se o nome digitado corresponde ao nome dela no chat. Se o alerta apareceu enquanto o OBS não estava aberto, use **▶ Repetir**.

**Q: Adicionei a fonte do OBS depois. Ela vai repetir os alertas anteriores?**
Não. Uma fonte recém-aberta só mostra os alertas que chegam depois que ela se conecta. Use **▶ Repetir** na aba **Espectadores** para mostrar um de novo.
