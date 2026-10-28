---
sidebar_position: 20
---

# Temas

Partilhe e transfira aspetos de overlay através do Steam Workshop. Um tema pode incluir o aspeto destas funcionalidades:

- [Chat](./chat)
- [Barra de donativos](./donate)
- [Alertas de donativos](./donate-alert)
- [Alertas de novos seguidores](./fan-alert)
- [Alertas de aniversário](./birthday-alert)
- [Painel de donativos](./sponsors)
- [Sondagens em direto](./vote)
- [Relógio](./clock)
- [Barra de objetivos do Twitch](./goal): **Meta de seguidores**, **Meta de subscrições**, **Meta de Bits**

Abra-a a partir de **🎨 Temas** no fundo do menu esquerdo. A página tem dois separadores: **Os meus temas** e **Temas transferidos**. O Steam tem de estar em execução.

## Encontrar e aplicar um tema na página de uma funcionalidade

Em cada funcionalidade listada acima, abra a secção **CSS personalizado** e clique em **Explorar temas do Workshop**:

1. **Explorar temas** lista os temas do Workshop para esta funcionalidade. Escreva em **Pesquisar nome do tema** e clique em **Pesquisar**, ou use **Página anterior** / **Página seguinte** para percorrer as páginas
2. Clique numa miniatura para ver a imagem de pré-visualização
3. Clique em **Aplicar**. O tema é subscrito, transferido e aplicado a esta funcionalidade
4. **Subscritos** lista os temas que já subscreveu para esta funcionalidade

Enquanto um tema estiver aplicado, a página mostra **Tema em uso: (nome)** e um botão **Restaurar**, e o CSS personalizado fica só de leitura. Clique em **Restaurar** para voltar às suas próprias definições.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Temas transferidos

Lista todos os temas que subscreveu no Steam. Os temas subscritos não são aplicados automaticamente — use os botões do cartão. O OBS é atualizado de imediato.

Cada cartão mostra a pré-visualização, o nome, **Em uso** se alguma funcionalidade o estiver a usar, e **Inclui:** as funcionalidades abrangidas pelo tema (✓ marca as funcionalidades que o estão a usar).

| Botão | O que faz |
|------|------|
| **Aplicar tudo** | Aplica o tema a todas as funcionalidades que inclui. Se uma funcionalidade estiver a usar outro tema, é-lhe pedido que confirme a substituição |
| **Escolher…** | Escolha a que funcionalidades o aplicar |
| **Restaurar tudo** | Repõe todas as funcionalidades que usam este tema nas suas próprias definições de antes de o aplicar |
| **Restaurar…** | Escolha que funcionalidades restaurar |
| **Anular subscrição** | Anula a subscrição. Se o tema estiver em uso, essas funcionalidades são restauradas primeiro |

Depois de aplicar, uma mensagem no fundo mostra durante 30 segundos o que mudou, com um botão **Restaurar** para anular.

:::note
- Restaurar volta às suas próprias definições, não a um tema que tenha sido substituído
- As alterações de aspeto feitas enquanto um tema está aplicado não são mantidas depois de restaurar
:::

- **A transferir…**: mantenha o Steam em execução; pode aplicá-lo quando a transferência terminar
- **Tema removido (#id)**: o tema já não está nas suas subscrições do Steam, mas algumas funcionalidades ainda o usam. As imagens podem não ser apresentadas, por isso recomenda-se restaurar
- Se o Steam não estiver em execução, inicie o Steam e clique em **Atualizar**

{/* TODO: 截圖 — 下載的主題 */}

## Os meus temas: carregar um tema

1. Configure o aspeto das funcionalidades que quer partilhar nas respetivas páginas
2. Em **Os meus temas**, clique em **Carregar novo tema**
3. Preencha:
   - **Nome do tema** (obrigatório)
   - **Descrição do tema**
   - **Funcionalidades incluídas** (pelo menos uma)
   - **Imagem de pré-visualização** (obrigatória, até 1MB): clique em **Escolher imagem de pré-visualização**
4. Marque a caixa que confirma que tem o direito de distribuir todas as imagens, tipos de letra e sons do tema. Não podem ser carregados recursos licenciados apenas para uso pessoal ou não comercial
5. Clique em **Carregar tema**

Se vir "Aceite primeiro os termos do Steam Workshop no browser para que o seu tema fique público", aceite os termos para que o tema possa ficar público.

### Gerir os temas carregados

Cada tema carregado tem:

- **Transferir e aplicar**: aplica o tema publicado às suas funcionalidades. Isto substitui as suas definições de aspeto atuais
- **Editar**: volta a carregar as suas definições de aspeto atuais para o mesmo tema. Se não tiver transferido o tema, a imagem de pré-visualização existente não é mantida e tem de escolher uma nova
- **Gerir no Steam**: abre o tema no Steam

:::info Limites da versão de teste
Os temas (Steam Workshop) só estão disponíveis na versão completa. Na versão de teste, não é possível abrir **🎨 Temas** nem aplicar temas.

Consulte [Comparação entre Versão de Teste e Versão Completa](../getting-started/trial-comparison).
:::
