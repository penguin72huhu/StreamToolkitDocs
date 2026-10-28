---
sidebar_position: 12
---

# Relógio

Mostre a hora atual na transmissão, opcionalmente com a data e o dia da semana.

## Passo 1: Adicionar a fonte do OBS

Copie o **URL da fonte OBS** no topo da página:

```
http://127.0.0.1:7272/clock
```

Adicione-o ao OBS como fonte de navegador. Consulte [Como adicionar fontes no OBS](../getting-started/obs-source). O relógio não reproduz som, por isso não precisa de ativar "Controlar áudio via OBS".

:::tip
Ative também o interruptor junto a **Relógio** na barra lateral esquerda (**Ativar exibição no OBS**). Enquanto estiver desligado, o relógio fica oculto no OBS.
:::

## Pré-visualização

A **Pré-visualizar** no topo mostra o overlay real do OBS e atualiza-se à medida que altera as definições. Use a caixa de cor ao lado para mudar o fundo da pré-visualização.

Por baixo da pré-visualização há três separadores: **Aspeto**, **Formato do relógio** e **Definições de visualização**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Aspeto

| Definição | Descrição |
|---------|-------------|
| **Tipo de letra** | Tipo de letra de todo o texto do relógio |
| **Estilo** | Como a hora, a data e o dia da semana são dispostos: **Stack**, **Horizontal**, **One-Top-Two-Bottom** ou **Two-Top-One-Bottom**. **Espaçamento entre linhas** está disponível em todos os estilos exceto **Horizontal**, e **Espaçamento** em todos exceto **Stack** (ambos de −200 a 200 px) |
| **Ordem** | Arraste os blocos **Hora**, **Data** e **Dia da semana** para mudar a ordem |
| **Texto** | Defina **Hora**, **Data** e **Dia da semana** separadamente: **Tamanho da letra**, cor (**Cor sólida**, ou **Gradiente** com duas cores e um **Ângulo**), e cor, **Opacidade** e **Espessura** (0–7 px) do **Contorno** |
| **Sombra** | Cor da sombra, **Opacidade**, **Desfoque** e deslocamento **X** / **Y**, partilhados por todo o texto |

O botão **Repor predefinição** está no topo do separador.

### CSS personalizado

Clique em **CSS personalizado** para expandir o editor. O CSS predefinido lista os seletores de cada parte do relógio (hora, data, dia da semana e os respetivos contentores) com comentários. Use-o para a disposição e a estrutura. As cores, os tipos de letra e os tamanhos definem-se nas definições de aspeto acima.

- **Repor predefinição**: restaura o CSS predefinido
- **Gerir recursos**: abre o gestor de recursos para as imagens usadas no seu CSS

Se o seu CSS substituir uma propriedade com `!important`, o controlo de aspeto correspondente fica bloqueado, porque o CSS prevaleceria de qualquer forma.

## Formato do relógio

- **Formato de hora**: **24 horas**, ou uma de duas opções de 12 horas: **12 horas (AM/PM)** mostra AM/PM, enquanto **12 horas (manhã/tarde)** mostra os marcadores chineses 上午 / 下午
- **Fuso horário**: de UTC−12 a UTC+14. Por predefinição, o fuso horário corresponde ao do seu computador

## Definições de visualização

- **Mostrar segundos**
- **Mostrar data**: quando ativo, escolha um formato de data na lista. Os formatos marcados com **Sem ano** omitem o ano
  - **Zero à esquerda na data**: mostra os meses e dias de um só algarismo com um zero à esquerda (por exemplo 2026/05/20)
  - **Formato do ano**: aparece nos formatos que começam pelo ano. **Completo (2026)** ou **Abreviado (26)**

  Estas duas opções aplicam-se aos formatos numéricos (com `/` ou `-`). Os formatos por extenso (por exemplo "20 de maio de 2026") seguem antes o idioma da interface da aplicação
- **Mostrar dia da semana**: quando ativo, escolha como o dia da semana é escrito (por exemplo **quarta-feira**, **Wednesday**, **WED** ou **Wed**)

:::info Limites da versão de teste
O **CSS personalizado** só está disponível na versão completa. Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison) para mais detalhes.
:::
