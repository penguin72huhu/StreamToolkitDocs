---
sidebar_position: 12
---

# Relógio

Mostra a hora atual na transmissão, opcionalmente com a data e o dia da semana.

## Passo 1: Adicionar a fonte do OBS

Copie a **URL da fonte OBS** no topo da página:

```
http://127.0.0.1:7272/clock
```

Adicione-a ao OBS como fonte de navegador. Veja [Como adicionar fontes no OBS](../getting-started/obs-source). O relógio não toca som, então não é preciso ativar "Controlar áudio via OBS".

:::tip
Ative também o botão ao lado de **Relógio** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto ele estiver desligado, o relógio fica oculto no OBS.
:::

## Pré-visualização

A área **Pré-visualizar** no topo mostra o overlay real do OBS e é atualizada conforme você muda as configurações. Use a caixa de cor ao lado dela para mudar o fundo da pré-visualização.

Abaixo da pré-visualização há três abas: **Aparência**, **Formato do relógio** e **Configurações de exibição**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Aparência

| Configuração | Descrição |
|--------------|-----------|
| **Fonte** | Fonte de todo o texto do relógio |
| **Estilo** | Como a hora, a data e o dia da semana são organizados: **Stack**, **Horizontal**, **One-Top-Two-Bottom** ou **Two-Top-One-Bottom**. **Espaçamento entre linhas** está disponível em todos os estilos exceto **Horizontal**, e **Espaçamento** em todos exceto **Stack** (ambos de −200 a 200 px) |
| **Ordem** | Arraste os blocos **Hora**, **Data** e **Dia da semana** para mudar a ordem |
| **Texto** | Defina **Hora**, **Data** e **Dia da semana** separadamente: **Tamanho da fonte**, cor (**Cor sólida**, ou **Gradiente** com duas cores e um **Ângulo**) e cor, **Opacidade** e **Espessura** (0–7 px) da **Borda** |
| **Sombra** | Cor da sombra, **Opacidade**, **Desfoque** e deslocamento **X** / **Y**, compartilhados por todo o texto |

O botão **Restaurar padrão** fica no topo da aba.

### CSS personalizado

Clique em **CSS personalizado** para expandir o editor. O CSS padrão lista os seletores de cada parte do relógio (hora, data, dia da semana e seus contêineres) com comentários. Use-o para layout e estrutura. Cores, fontes e tamanhos são definidos nas configurações de aparência acima.

- **Restaurar padrão**: restaura o CSS padrão
- **Gerenciar recursos**: abre o gerenciador de recursos para as imagens usadas no seu CSS

Se o seu CSS substituir uma propriedade com `!important`, o controle de aparência correspondente fica bloqueado, porque o CSS prevaleceria de qualquer forma.

## Formato do relógio

- **Formato de hora**: **24 horas** ou uma das duas opções de 12 horas: **12 horas (manhã/tarde)** mostra os marcadores chineses 上午 / 下午, e **12 horas (AM/PM)** mostra AM/PM
- **Fuso horário**: de UTC−12 a UTC+14. Por padrão, o fuso horário é o mesmo do seu computador

## Configurações de exibição

- **Mostrar segundos**
- **Mostrar data**: quando ligado, escolha um formato de data na lista. Os formatos marcados com **Sem ano** omitem o ano
  - **Zero à esquerda na data**: mostra meses e dias de um dígito com um zero à esquerda (por exemplo, 2026/05/20)
  - **Formato do ano**: aparece nos formatos que começam pelo ano. **Completo (2026)** ou **Abreviado (26)**

  Essas duas opções se aplicam aos formatos numéricos (com `/` ou `-`). Os formatos por extenso (por exemplo, "20 de maio de 2026") seguem o idioma da interface do app
- **Mostrar dia da semana**: quando ligado, escolha como o dia da semana é escrito (por exemplo, **quarta-feira**, **Wednesday**, **WED** ou **Wed**)

:::info Limites da versão de teste
O **CSS personalizado** só está disponível na versão completa. Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
