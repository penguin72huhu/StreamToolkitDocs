---
sidebar_position: 20
---

# Temas

Compartilhe e baixe visuais de overlay pelo Steam Workshop. Um tema pode incluir a aparência destes recursos:

- [Chat](./chat)
- [Barra de doações](./donate)
- [Alertas de doações](./donate-alert)
- [Alertas de novos seguidores](./fan-alert)
- [Alertas de aniversário](./birthday-alert)
- [Painel de doações](./sponsors)
- [Enquetes ao vivo](./vote)
- [Relógio](./clock)
- [Barra de metas do Twitch](./goal): **Meta de seguidores**, **Meta de inscrições**, **Meta de Bits**

Abra pelo item **🎨 Temas** na parte inferior do menu à esquerda. A página tem duas abas: **Meus temas** e **Temas baixados**. A Steam precisa estar aberta.

## Encontrar e aplicar um tema na página de um recurso

Em cada recurso listado acima, abra a seção **CSS personalizado** e clique em **Explorar temas do Workshop**:

1. **Explorar temas** lista os temas do Workshop para este recurso. Digite em **Pesquisar nome do tema** e clique em **Pesquisar**, ou use **Página anterior** / **Próxima página** para navegar
2. Clique em uma miniatura para ver a imagem de pré-visualização
3. Clique em **Aplicar**. O tema é inscrito, baixado e aplicado a este recurso
4. **Inscritos** lista os temas em que você já se inscreveu para este recurso

Enquanto um tema estiver aplicado, a página mostra **Tema em uso: (nome)** e um botão **Restaurar**, e o CSS personalizado fica somente leitura. Clique em **Restaurar** para voltar às suas próprias configurações.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Temas baixados

Lista todos os temas em que você se inscreveu na Steam. Os temas inscritos não são aplicados automaticamente — use os botões do cartão. O OBS é atualizado na hora.

Cada cartão mostra a pré-visualização, o nome, **Em uso** se algum recurso o estiver usando e **Inclui:** os recursos que o tema abrange (✓ marca os recursos que o estão usando no momento).

| Botão | O que faz |
|------|------|
| **Aplicar tudo** | Aplica o tema a todos os recursos que ele inclui. Se um recurso estiver usando outro tema, você precisa confirmar a substituição |
| **Escolher…** | Escolha a quais recursos aplicá-lo |
| **Restaurar tudo** | Devolve todos os recursos que usam este tema às suas próprias configurações de antes da aplicação |
| **Restaurar…** | Escolha quais recursos restaurar |
| **Cancelar inscrição** | Cancela a inscrição. Se o tema estiver em uso, esses recursos são restaurados primeiro |

Depois de aplicar, uma mensagem na parte inferior mostra o que mudou por 30 segundos, com um botão **Restaurar** para desfazer.

:::note
- Restaurar volta às suas próprias configurações, não a um tema que foi substituído
- As mudanças de aparência feitas enquanto um tema está aplicado não são mantidas depois de restaurar
:::

- **Baixando…**: mantenha a Steam aberta; você pode aplicá-lo quando o download terminar
- **Tema removido (#id)**: o tema não está mais nas suas inscrições da Steam, mas alguns recursos ainda o usam. As imagens podem não aparecer, então é recomendável restaurar
- Se a Steam não estiver aberta, abra a Steam e clique em **Atualizar**

{/* TODO: 截圖 — 下載的主題 */}

## Meus temas: enviar um tema

1. Configure a aparência dos recursos que você quer compartilhar nas páginas de cada um
2. Em **Meus temas**, clique em **Enviar novo tema**
3. Preencha:
   - **Nome do tema** (obrigatório)
   - **Descrição do tema**
   - **Recursos incluídos** (pelo menos um)
   - **Imagem de pré-visualização** (obrigatória, até 1MB): clique em **Escolher imagem de pré-visualização**
4. Marque a caixa confirmando que você tem o direito de distribuir todas as imagens, fontes e sons do tema. Recursos licenciados apenas para uso pessoal ou não comercial não podem ser enviados
5. Clique em **Enviar tema**

Se aparecer "Aceite os termos do Steam Workshop no navegador", aceite os termos para que o tema possa ser publicado.

### Gerenciar os temas enviados

Cada tema enviado tem:

- **Baixar e aplicar**: aplica o tema publicado aos seus recursos. Isso substitui suas configurações de aparência atuais
- **Editar**: reenvia suas configurações de aparência atuais para o mesmo tema. Se você não tiver baixado o tema, a imagem de pré-visualização existente não é mantida e você precisa escolher uma nova
- **Gerenciar na Steam**: abre o tema na Steam

:::info Limites da versão de teste
Os Temas (Steam Workshop) só estão disponíveis na versão completa. Na versão de teste, **🎨 Temas** não pode ser aberto e os temas não podem ser aplicados.

Veja [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::
