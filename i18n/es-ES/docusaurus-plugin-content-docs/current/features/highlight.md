---
sidebar_position: 6
---

# Marcador de momentos destacados de stream

Pulsa un atajo durante el stream para registrar "en qué momento del stream" ocurrió algo destacado. Después puedes usar la lista de tiempos para encontrar esos momentos en tu VOD al editar.

Las marcas se guardan en Stream Toolkit. Esta función no tiene overlay de OBS, así que no hace falta añadir ninguna fuente en OBS.

La página tiene dos pestañas: **Ajustes** y **Marcas destacadas**.

:::tip
Activa el interruptor junto a **Marcador de momentos destacados de stream** en la barra lateral izquierda. Mientras está desactivado, ni el atajo ni el botón **MARK** añaden marcas.
:::

{/* TODO: 截圖 — 精華標記設定分頁 */}

## Paso 1: Elegir el origen

**Origen** decide cómo se calcula el tiempo del stream:

| Origen | Cómo se calcula el tiempo | Requisito |
|--------|----------------------------|-------------|
| **Twitch** | Tiempo desde que empezó tu stream actual de Twitch | Twitch conectado. Consulta [Ajustes de Twitch](../platforms/twitch) |
| **YouTube** | Tiempo desde que empezó tu directo actual de YouTube | Iniciar sesión con Google. Consulta [Ajustes de YouTube](../platforms/youtube-settings) |
| **Alineación manual** (predeterminado) | El valor del cronómetro manual de esta página | Ninguno |

Un punto junto a **Twitch** y **YouTube** indica si está conectado. Si no lo está, la opción muestra **(sin conexión)** o **(no has iniciado sesión con Google)**.

Si marcas cuando no estás en directo (o, con **Alineación manual**, cuando el cronómetro está parado), el tiempo se registra como **Sin transmisión**. Con el origen **Twitch**, este resultado puede tardar unos 20 segundos en aparecer, porque Stream Toolkit lo reintenta varias veces por si Twitch aún no ha registrado un stream que acaba de empezar.

### Cronómetro manual

Cuando se selecciona **Alineación manual**, aparece un **Cronómetro manual**:

1. Introduce el tiempo actual del stream como `HH:MM:SS` (por ejemplo, `00:00:00` justo al empezar el directo)
2. Haz clic en **Iniciar cronometraje sincronizado**. El cronómetro empieza a contar a partir de ese valor
3. Cada marca usa el valor actual del cronómetro
4. Haz clic en **Detener** para parar el cronómetro

### Crear clip de Twitch al marcar

Esta opción solo aparece cuando el origen es **Twitch**. Si está activada, cada marca crea también un clip de Twitch.

- Tienes que estar en directo. El clip dura unos 30 segundos
- Los clips se guardan en Panel de control del creador → Contenido → Clips
- Después de marcar, la página muestra **Clip de Twitch creado** o el motivo del fallo: **No estás en directo**, **Falta permiso; reconecta Twitch**, **Twitch no conectado** o **Error; inténtalo de nuevo**

## Paso 2: Configurar el atajo

El atajo predeterminado es `Ctrl+Shift+M`. Para cambiarlo:

1. Haz clic en el botón del atajo
2. Pulsa la combinación de teclas que quieras y suéltala. Pulsa **Esc** para cancelar
3. Para quitarlo, haz clic en **Borrar**

Si la combinación ya la usa otra función, el botón muestra **Este atajo ya está en uso** y el atajo no se guarda. El atajo funciona aunque Stream Toolkit no sea la ventana activa.

También puedes hacer clic en el botón **MARK** que hay debajo del atajo. Hace lo mismo que el atajo. La ventana [Herramientas rápidas](./quick-tools) también tiene un botón **MARK**.

## Paso 3: Marcar durante el stream

1. (Opcional) Escribe un nombre en **Nombre de la marca** antes de marcar. Si lo dejas vacío, las marcas se numeran automáticamente (`精華標記_1`, `精華標記_2`, …)
2. Pulsa el atajo o haz clic en **MARK**

El nombre que escribiste solo se usa para la siguiente marca, y después el campo se vacía.

## Marcas destacadas

La pestaña **Marcas destacadas** muestra todas las marcas, de la más reciente a la más antigua. Cada fila muestra el tiempo del stream, el nombre, el origen y la fecha y hora en que marcaste.

- **Copiar**: copia la marca como texto, con el formato `[date] name 🎬 stream time (source)`
- **🗑️**: haz clic en él y luego en **Confirmar eliminación** para eliminar la marca
- **Abrir clip de Twitch**: aparece cuando se creó un clip de Twitch para esta marca. Abre el clip en Twitch

{/* TODO: 截圖 — 精華紀錄分頁 */}

:::info Límites de la versión de prueba
**Crear clip de Twitch al marcar** no está disponible. Se muestra como "Disponible en la versión completa".

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
