---
sidebar_position: 20
---

# Temas

Comparte y descarga estilos de overlay a través de Steam Workshop. Un tema puede incluir la apariencia de estas funciones:

- [Chat](./chat)
- [Barra de donaciones](./donate)
- [Alertas de donaciones](./donate-alert)
- [Alertas de nuevos seguidores](./fan-alert)
- [Alertas de cumpleaños](./birthday-alert)
- [Panel de donaciones](./sponsors)
- [Encuestas en directo](./vote)
- [Reloj](./clock)
- [Barra de objetivos de Twitch](./goal): **Objetivo de seguidores**, **Objetivo de suscripciones**, **Objetivo de Bits**

Ábrelo desde **🎨 Temas** en la parte inferior del menú izquierdo. La página tiene dos pestañas: **Mis temas** y **Temas descargados**. Steam debe estar abierto.

## Buscar y aplicar un tema desde la página de una función

En cada una de las funciones anteriores, abre su sección **CSS personalizado** y haz clic en **Explorar temas del Workshop**:

1. **Explorar temas** muestra los temas del Workshop para esta función. Escribe en **Buscar por nombre de tema** y haz clic en **Buscar**, o usa **Anterior** / **Siguiente** para pasar de página
2. Haz clic en una miniatura para ver la imagen de vista previa
3. Haz clic en **Aplicar**. El tema se suscribe, se descarga y se aplica a esta función
4. **Suscritos** muestra los temas a los que ya te has suscrito para esta función

Mientras hay un tema aplicado, la página muestra **Tema en uso: (nombre)** y un botón **Restaurar**, y el CSS personalizado es de solo lectura. Haz clic en **Restaurar** para volver a tus propios ajustes.

{/* TODO: 截圖 — 瀏覽工作坊主題 */}

## Temas descargados

Muestra todos los temas a los que te has suscrito en Steam. Los temas suscritos no se aplican automáticamente: usa los botones de la tarjeta. OBS se actualiza al instante.

Cada tarjeta muestra la vista previa, el nombre, **En uso** si alguna función lo usa, e **Incluye** con las funciones que cubre el tema (✓ marca las funciones que lo están usando).

| Botón | Qué hace |
|------|------|
| **Aplicar todo** | Aplica el tema a todas las funciones que incluye. Si una función está usando otro tema, se te pide que confirmes la sustitución |
| **Elegir** | Elige a qué funciones aplicarlo |
| **Restaurar todo** | Devuelve todas las funciones que usan este tema a tus propios ajustes de antes de aplicarlo |
| **Restaurar** | Elige qué funciones restaurar |
| **Cancelar suscripción** | Cancela la suscripción. Si el tema está en uso, primero se restauran esas funciones |

Después de aplicarlo, un mensaje en la parte inferior muestra durante 30 segundos lo que ha cambiado, con un botón **Restaurar** para deshacerlo.

:::note
- Restaurar vuelve a tus propios ajustes, no a un tema que haya sido sustituido
- Los cambios de apariencia hechos mientras hay un tema aplicado no se conservan después de restaurar
:::

- **Descargando…**: mantén Steam abierto; podrás aplicarlo cuando termine la descarga
- **Tema eliminado (#id)**: el tema ya no está en tus suscripciones de Steam, pero algunas funciones aún lo usan. Puede que las imágenes no se muestren, así que se recomienda restaurar
- Si Steam no está abierto, inicia Steam y haz clic en **Actualizar**

{/* TODO: 截圖 — 下載的主題 */}

## Mis temas: subir un tema

1. Configura la apariencia de las funciones que quieras compartir en sus propias páginas
2. En **Mis temas**, haz clic en **Subir tema nuevo**
3. Rellena:
   - **Nombre del tema** (obligatorio)
   - **Descripción del tema**
   - **Funciones incluidas** (al menos una)
   - **Imagen de vista previa** (obligatoria, hasta 1MB): haz clic en **Elegir vista previa**
4. Marca la casilla que confirma que tienes derecho a distribuir todas las imágenes, fuentes y sonidos del tema. No se pueden subir recursos con licencia solo para uso personal o no comercial
5. Haz clic en **Subir tema**

Si ves "Acepta primero los términos de Steam Workshop en el navegador para que tu tema se haga público", acepta los términos para que el tema pueda hacerse público.

### Gestionar tus temas subidos

Cada tema subido tiene:

- **Descargar y aplicar**: aplica el tema publicado a tus funciones. Sobrescribe tus ajustes de apariencia actuales
- **Editar**: vuelve a subir tus ajustes de apariencia actuales al mismo tema. Si no has descargado el tema, la imagen de vista previa existente no se conserva y tienes que elegir una nueva
- **Gestionar en Steam**: abre el tema en Steam

:::info Límites de la versión de prueba
Los temas (Steam Workshop) solo están disponibles en la versión completa. En la versión de prueba no se puede abrir **🎨 Temas** ni aplicar temas.

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::
