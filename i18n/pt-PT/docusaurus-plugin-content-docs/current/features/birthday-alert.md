---
sidebar_position: 8.2
---

# Alertas de aniversário

Adicione os aniversários dos seus espectadores a uma lista. Quando um espectador da lista fala no chat durante a sua transmissão no dia do aniversário ou pouco depois, aparece um alerta de aniversário no ecrã. Cada espectador recebe um alerta por aniversário.

## URL da fonte do OBS

```
http://127.0.0.1:7272/birthday-alert
```

Copie o URL no topo da página **Definições de Alertas de aniversário** e adicione-o ao OBS como Fonte de Navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source).

:::warning
Os alertas reproduzem um som. Marque **Controlar áudio via OBS** nas propriedades da fonte de navegador, caso contrário o som não se ouvirá na transmissão.
:::

Ative o interruptor junto a **Alertas de aniversário** na barra lateral esquerda. Só enquanto estiver ativo é que a aplicação se liga ao chat e verifica os aniversários. Os botões **Testar alerta** e **Repetir** funcionam mesmo com o interruptor desligado.

A página tem três separadores: **Definições**, **Espectadores** e **Aspeto**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Como funciona

- Um espectador da lista que fale no chat desde o dia do aniversário até ao número de dias que definir depois recebe um alerta. Nada aparece antes do aniversário.
- Cada espectador recebe um alerta por aniversário. Um aniversário a 28/12 anunciado a 2/1 continua a contar como o aniversário do ano anterior.
- Os alertas só disparam enquanto a plataforma em que o espectador falou estiver em direto. Enquanto estiver offline, ou enquanto a aplicação ainda não souber se está em direto, falar no chat não dispara nem regista o alerta; este aparece da próxima vez que a pessoa falar durante uma transmissão.
- O histórico do chat carregado quando o chat do YouTube se liga não conta, por isso reiniciar a aplicação não anuncia pessoas que falaram enquanto estava fechada.
- Um aniversário a 29/2 passa para 28/2 nos anos não bissextos.

## Separador Definições

### Ligação ao chat

Aparece quando a funcionalidade está ativa. Cada plataforma mostra se o respetivo chat está ligado:

- **Twitch**: se não houver canal definido, a linha mostra **Nenhum canal da Twitch definido — ligue a Twitch primeiro** com **Ir para definições**. Ligue primeiro a Twitch: [Definições do Twitch](../platforms/twitch).
- **YouTube**: se o chat não estiver ligado, a linha mostra **Ligar automaticamente** e **Introduzir manualmente** (leva-o ao campo do URL do chat nas Definições). Se usar a ligação automática e tiver sessão iniciada com a Google, mostra **Se não ligar quando estiver em direto, carregue em Ligar na página Chat**. Consulte [Definições do YouTube](../platforms/youtube-settings) e [Chat](./chat).

Depois de uma plataforma estar ligada, mostra também **Em direto**, **Offline** ou **Não é possível saber se está em direto**. Os alertas só disparam com **Em direto**.

### Definições

| Campo | Descrição |
|-------|-------------|
| **Dias após o aniversário que ainda contam** | 0–30. Predefinição: 7. 0 = só no dia do aniversário. |
| **Tempo de exibição** | Quanto tempo cada alerta fica no ecrã, em segundos (1–60). Predefinição: 6. |

### Testar alertas

Clique em **Testar alerta** para enviar um alerta de exemplo para o OBS, com um espectador de teste e a data de hoje. Aparece só no OBS, nunca fica registado e funciona mesmo com o interruptor da barra lateral esquerda desligado. O botão muda por instantes para **Enviado**.

## Separador Espectadores

### Adicionar um espectador

Há duas formas de adicionar um espectador:

- **+ Adicionar das pessoas recentes**: escolha alguém que falou recentemente no chat. O formulário abre com o nome dessa pessoa como nota, a conta já associada e a data de hoje como aniversário.
- **+ Adicionar pelo nome**: escreva o nome da conta.

**Pessoas que falaram no chat** lista os espectadores que falaram enquanto o chat estava ligado (até 200, guardados durante 30 dias). Clique em **Atualizar** para a atualizar. Os espectadores que já estão na lista mostram **Adicionado** e não podem ser escolhidos de novo. Aparece uma caixa de pesquisa quando a lista é longa.

Preencha o formulário:

1. **Nota / alcunha**: o nome pelo qual conhece a pessoa, por exemplo `Ana`. Opcional.
2. **Aniversário**: mês e dia (sem ano).
3. **Contas**: pelo menos uma conta. Um espectador pode ter várias contas, por exemplo na Twitch e no YouTube.
   - **＋ Escrever uma conta**: escolha **Twitch** ou **YouTube** e escreva o nome. Na Twitch, use o login ou o nome de apresentação; no YouTube, o @identificador ou o nome do canal.
   - **＋ Das pessoas que falaram no chat**: adicione uma conta que já está associada.
   - **✕** remove uma conta.
4. Clique em **Guardar** (ou prima Enter). **Cancelar** (ou Esc) fecha o formulário.

### Nomes escritos e associação

Um nome escrito é associado à conta na primeira vez que esse espectador fala no chat. A correspondência ignora maiúsculas/minúsculas e um `@` inicial. Os nomes podem repetir-se, por isso escolher entre as pessoas recentes é mais seguro.

No YouTube, escreva o @identificador: se **Mostrar o nome dos espectadores em vez do @identificador** não estiver ligado na página Chat, um nome de canal pode nunca ser reconhecido.

Cada conta da lista mostra:

- **Associado: [nome]**: a conta está associada.
- **À espera de que "[nome]" fale no chat**: um nome escrito que ainda não foi associado.
- **Recém-associado**: a aplicação associou esta conta automaticamente quando o espectador falou no chat. Confirme que é mesmo a pessoa certa e clique em **✓ Está correto**, ou clique em **Desassociar** se não for.
- **Esta conta já está em "[nome]"**: o nome escrito correspondeu a uma conta que pertence a outro espectador da lista. Uma conta só pode pertencer a um espectador, por isso mude o nome aqui ou elimine um dos dois.

**Desassociar** abre uma caixa por baixo da conta. Depois de desassociar, passa a ser procurado o nome da caixa (pode alterá-lo), e a conta volta a ser associada quando esse espectador falar novamente no chat.

### A lista

Os espectadores cujo alerta de aniversário está pendente aparecem primeiro, seguidos dos próximos aniversários. Aparece uma caixa de pesquisa quando há mais de 5 espectadores. Cada espectador mostra:

- **À espera de falar**: é a época do aniversário; o alerta aparece assim que a pessoa falar no chat.
- **🎂 Mostrado a [data]**: o alerta deste aniversário já foi mostrado.
- **▶ Repetir**: mostra novamente o alerta deste espectador no OBS. Funciona a qualquer momento e nunca fica registado.
- **Editar**: altere a nota, o aniversário ou as contas. Alterar o aniversário permite que o alerta volte a disparar na nova data.
- **Eliminar**: clique em **Eliminar** e depois em **Confirmar eliminação**.

## Separador Aspeto

### Pré-visualização

A pré-visualização usa a mesma página que a fonte do OBS. Use o seletor de cor junto a **Pré-visualizar** para mudar o fundo da pré-visualização e clique em **▶ Repetir animação** para reproduzir novamente a animação do alerta.

### Estilo unificado / Independente por plataforma

- **Estilo unificado**: a Twitch e o YouTube usam o mesmo estilo de alerta.
- **Independente por plataforma**: cada plataforma tem o seu próprio estilo. Escolha **Twitch** ou **YouTube** com os botões abaixo e edite as respetivas definições. Quando muda pela primeira vez, as plataformas que ainda não personalizou copiam o estilo unificado atual, cada uma com a sua própria cor da barra de contagem.

**Repor predefinição** restaura o estilo predefinido do estilo que está a editar.

### Imagem

- **Escolher imagem**: escolha uma imagem no gestor de recursos. Sem imagem, é mostrado um emoji de bolo. **Limpar** remove a imagem.
- **Tamanho da imagem**: 1–400 px.
- **Posição da imagem**: **À esquerda**, **À direita**, **Em cima** ou **Em baixo**.

### Som

Escolha um som incorporado: **Nenhum**, **Sino** (predefinição), **Moeda**, **Campainha**, **Pop**, **Fanfarra**. Clique em **▶** para ouvir. Clique em **Escolher som** para usar o seu próprio ficheiro de som do gestor de recursos.

### Texto personalizado

Escreva a frase mostrada no alerta. Deixe vazio para usar o texto predefinido: `Feliz aniversário, {name}!` Pode usar:

| Marcador | Substituído por |
|-------------|---------------|
| `{name}` | O nome do espectador no chat |
| `{label}` | A sua nota / alcunha (o nome no chat se a nota estiver vazia) |
| `{birthday}` | O aniversário, por exemplo `10/20` |
| `{MM}` `{DD}` | Mês e dia com dois dígitos, para criar o seu próprio formato, por exemplo `{DD}/{MM}` |
| `{date}` | O aniversário no idioma do overlay |
| `{platform}` | O nome da plataforma |

### Texto e cor

- **Texto**: defina o tipo de letra, o tamanho e a cor de **Texto personalizado** e **Nome do espectador**.
- **Cor**: **Fundo**, **Sombra** e **Barra de contagem**.

### CSS personalizado

Expanda **CSS personalizado** para editar o CSS do estilo que está a editar (unificado ou da plataforma selecionada). **Repor predefinição** restaura o CSS do modelo e **Gerir recursos** abre o gestor de recursos. Também pode aplicar aqui temas do Steam Workshop. Enquanto um tema estiver aplicado, o CSS fica só de leitura. Consulte [Temas](./themes).

:::info Versão de teste
- Até 3 espectadores na lista. Se a lista tiver mais (por exemplo, de um ficheiro guardado da versão completa), os espectadores a mais aparecem bloqueados 🔒: nunca disparam um alerta e não podem ser editados nem repetidos.
- O CSS personalizado só está disponível na versão completa.
- O alerta mostra uma marca de água no OBS.

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::

## Perguntas frequentes

**Q: Não há som na transmissão?**
Verifique se **Controlar áudio via OBS** está marcado nas propriedades da fonte de navegador e se a fonte não está sem som no misturador do OBS. Verifique também se **Som** não está definido como **Nenhum**.

**Q: Um espectador falou no chat no dia do aniversário, mas não apareceu nenhum alerta.**
Verifique se o interruptor da barra lateral esquerda está ativo, se a **Ligação ao chat** no separador **Definições** mostra **Em direto** para essa plataforma e se a conta na lista mostra **Associado** ou se o nome escrito corresponde ao nome no chat. Se o alerta foi mostrado quando o OBS não estava aberto, use **▶ Repetir**.

**Q: Adicionei a fonte do OBS mais tarde. Os alertas anteriores voltam a aparecer?**
Não. Uma fonte acabada de abrir só mostra os alertas que chegam depois de se ligar. Use **▶ Repetir** no separador **Espectadores** para voltar a mostrar um.
