---
sidebar_position: 6
---

# Marcador de momentos destacados de stream

Presiona un atajo durante tu transmisión para registrar "en qué momento de la transmisión" ocurrió un momento destacado. Después puedes usar la lista de tiempos para encontrar los momentos destacados en tu VOD al editar.

Los marcadores se guardan en Stream Toolkit. Esta función no tiene overlay para OBS, así que no necesitas agregar una fuente de OBS.

La página tiene dos pestañas: **Configuración** y **Registro de momentos destacados**.

:::tip
Activa el interruptor junto a **Marcador de momentos destacados de stream** en la barra lateral izquierda. Mientras esté desactivado, ni el atajo ni el botón **MARK** agregan un marcador.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Paso 1: Elegir el origen

**Origen** decide cómo se calcula el tiempo de la transmisión:

| Origen | Cómo se calcula el tiempo | Requisito |
|--------|----------------------------|-------------|
| **Twitch** | Tiempo desde que empezó tu transmisión actual de Twitch | Twitch conectado. Consulta [Configuración de Twitch](../platforms/twitch) |
| **YouTube** | Tiempo desde que empezó tu transmisión en vivo actual de YouTube | Inicio de sesión con Google. Consulta [Configuración de YouTube](../platforms/youtube-settings) |
| **Alineación manual** (predeterminado) | El valor del temporizador manual de esta página | Ninguno |

Un punto junto a **Twitch** y **YouTube** indica si está conectado. Si no lo está, la opción muestra **(sin conexión)** o **(no has iniciado sesión con Google)**.

Si marcas mientras no estás en directo (o, con **Alineación manual**, mientras el temporizador está detenido), el tiempo se registra como **Sin transmisión**. Con el origen **Twitch** este resultado puede tardar unos 20 segundos en aparecer, porque Stream Toolkit reintenta varias veces por si Twitch todavía no ha registrado una transmisión que acaba de empezar.

### Temporizador manual

Cuando se selecciona **Alineación manual**, aparece un **Temporizador manual**:

1. Ingresa el tiempo actual de la transmisión como `HH:MM:SS` (por ejemplo `00:00:00` justo al empezar el directo)
2. Haz clic en **Iniciar cronometraje sincronizado**. El temporizador empieza a contar hacia adelante desde ese valor
3. Cada marcador usa el valor actual del temporizador
4. Haz clic en **Detener** para detener el temporizador

### Crear clip de Twitch al marcar

Esta opción solo aparece cuando el origen es **Twitch**. Cuando está activada, cada marcador también crea un clip de Twitch.

- Debes estar en directo. El clip dura unos 30 segundos
- Los clips se guardan en Panel del creador → Contenido → Clips
- Después de marcar, la página muestra **Clip de Twitch creado**, o el motivo del error: **No estás en directo**, **Falta permiso; reconecta Twitch**, **Twitch no conectado** o **Error; inténtalo de nuevo**

## Paso 2: Configurar el atajo

El atajo predeterminado es `Ctrl+Shift+M`. Para cambiarlo:

1. Haz clic en el botón del atajo
2. Presiona la combinación de teclas que quieras y suéltala. Presiona **Esc** para cancelar
3. Para quitarlo, haz clic en **Borrar**

Si otra función ya usa esa combinación, el botón muestra **Este atajo ya está en uso** y el atajo no se guarda. El atajo funciona incluso cuando Stream Toolkit no es la ventana activa.

También puedes hacer clic en el botón **MARK** debajo del atajo. Hace lo mismo que el atajo. La ventana de [Herramientas rápidas](./quick-tools) también tiene un botón **MARK**.

## Paso 3: Marcar durante la transmisión

1. (Opcional) Escribe un nombre en **Nombre del marcador** antes de marcar. Si lo dejas vacío, los marcadores se numeran automáticamente (`精華標記_1`, `精華標記_2`, …)
2. Presiona el atajo o haz clic en **MARK**

El nombre que escribiste se usa solo para el siguiente marcador, y el campo se vacía después.

## Registro de momentos destacados

La pestaña **Registro de momentos destacados** muestra todos los marcadores, del más reciente al más antiguo. Cada fila muestra el tiempo de la transmisión, el nombre, el origen y la fecha y hora en que marcaste.

- **Copiar**: copia el marcador como texto, con el formato `[date] name 🎬 stream time (source)` (fecha, nombre, tiempo de la transmisión y origen)
- **🗑️**: haz clic en él y luego en **Confirmar eliminación** para eliminar el marcador
- **Abrir clip de Twitch**: aparece cuando se creó un clip de Twitch para este marcador. Abre el clip en Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Límites de la versión de prueba
**Crear clip de Twitch al marcar** no está disponible. Se muestra como "Disponible en la versión completa".

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
