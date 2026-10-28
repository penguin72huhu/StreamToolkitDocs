---
sidebar_position: 2
---

# Control de escenas OBS

**Control de escenas OBS** te permite cambiar de escena y mostrar/ocultar fuentes en tu software de streaming con atajos globales o desde [Herramientas rápidas](./quick-tools). Funciona con **OBS Studio**, **Streamlabs** y **Meld Studio**.

Esta función no tiene overlay, así que no hay nada que añadir en OBS como fuente de navegador.

:::info
Los atajos solo funcionan mientras el interruptor de **Control de escenas OBS** de la barra lateral está activado. Funcionan incluso cuando la ventana de Stream Toolkit está minimizada en la bandeja.
:::

La página de ajustes tiene dos pestañas: **Conexión** y **Atajos**.

## Pestaña Conexión

### Paso 1: Elegir el software

En **Software**, elige **OBS Studio**, **Streamlabs** o **Meld Studio**. Solo se puede cambiar mientras no hay conexión.

Cada software guarda sus propios atajos y su propia lista de escenas, así que al cambiar de software se muestran los ajustes de ese software.

### Paso 2: Preparar el software

#### OBS Studio

1. En OBS, abre **Herramientas → Configuración del servidor WebSocket**
2. Marca **Habilitar servidor WebSocket**
3. Haz clic en **Mostrar información de conexión** para ver la contraseña
4. En Stream Toolkit, rellena **Host** (predeterminado `localhost`), **Puerto** (predeterminado `4455`) y **Contraseña**

#### Streamlabs / Meld Studio

No hace falta configurar nada: basta con tener el programa abierto.

{/* TODO: 截圖 — OBS WebSocket 伺服器設定 */}

### Paso 3: Conectar

Haz clic en **Conectar**. El **Estado** cambia a **Conectado** (en OBS y Meld también se muestra el número de versión). Haz clic en **Desconectar** para cortar la conexión.

**Conectar al iniciar** (activado de forma predeterminada): se conecta automáticamente cuando se inicia Stream Toolkit y cuando activas el interruptor de la función. Al desactivar el interruptor de la función, se desconecta.

### Escenas

La sección **Escenas** muestra tus escenas y cuántas fuentes tiene cada una; la escena actual aparece resaltada. Haz clic en **Actualizar** para obtener la lista más reciente después de cambiar escenas en tu software.

Sin conexión, se sigue mostrando la última lista obtenida.

## Pestaña Atajos

Para configurar un atajo, haz clic en **Haz clic para configurar el atajo** y pulsa la combinación de teclas. Pulsa `Esc` para cancelar. Si la combinación ya la usa otra función, se muestra **Conflicto de atajo** y no se guarda. Haz clic en **✕** junto a un atajo para borrarlo.

### Cambiar de escena

1. Haz clic en **Añadir**
2. Configura un atajo
3. Elige la escena a la que cambiar

Haz clic en **✕** al final de la fila para eliminarla.

### Alternar fuentes

Un mismo atajo puede controlar a la vez varias fuentes de la misma escena.

1. Haz clic en **Añadir**
2. Configura un atajo
3. Introduce un **Nombre** (opcional; se usa como texto del botón en Herramientas rápidas; si está vacío, se usa el nombre de la escena)
4. Elige la escena a la que pertenecen las fuentes
5. Haz clic en **Añadir fuente**, elige una fuente y elige **Mostrar**, **Ocultar** o **Alternar** (predeterminado **Alternar**)
6. Repite el paso 5 para más fuentes

Si cambias la escena de una entrada, se vacía su lista de fuentes.

:::tip
Una escena o fuente que ya no existe en tu software se marca en rojo. Vuelve a elegirla en el desplegable.
:::

{/* TODO: 截圖 — 快捷鍵設定分頁 */}

## Usarlo desde Herramientas rápidas

Cuando la función está activada y existe al menos una entrada de atajo, [Herramientas rápidas](./quick-tools) muestra una tarjeta **Control de escenas OBS** con un botón por cada entrada. Hacer clic en un botón equivale a pulsar su atajo.

## Mensajes de error

Al usar un atajo o un botón, pueden aparecer estos mensajes:

| Mensaje | Significado |
|---------|---------|
| **Sin conexión con OBS** | No hay conexión: ve a la pestaña **Conexión** y haz clic en **Conectar** |
| **No se encontró la escena «…»** | La escena se ha renombrado o eliminado en tu software |
| **Fuentes no encontradas: …** | Esas fuentes ya no existen en la escena |

## Límites de la versión de prueba

:::info
La versión de prueba permite **1** entrada de atajo en total (Cambiar de escena y Alternar fuentes juntos). Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: Dijo que no podía conectar con OBS y no volvió a intentarlo después de abrir OBS.**
Si el primer intento de conexión falla (por ejemplo, porque OBS aún no estaba abierto), Stream Toolkit no sigue reintentando. Abre tu software de streaming y haz clic en **Conectar**. Una vez que la conexión ha funcionado, se reconecta automáticamente si se corta.
