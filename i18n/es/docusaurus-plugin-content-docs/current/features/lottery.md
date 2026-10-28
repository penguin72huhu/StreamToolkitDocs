---
sidebar_position: 16
---

# Sorteos

Los espectadores participan escribiendo una palabra clave en el chat de Twitch o YouTube. Cuando se cierra la inscripción, se sortean ganadores al azar y la animación del sorteo se reproduce en el overlay de OBS.

## URL de la fuente de OBS

```
http://127.0.0.1:7272/lottery
```

Haz clic en **Copiar** junto a **URL de origen para OBS** en la parte superior de la página y agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). Sorteos no reproduce sonido, así que no necesitas activar "Controlar audio vía OBS".

:::tip
Activa también el interruptor junto a **Sorteos** en la barra lateral izquierda (**Activar salida en OBS**). Mientras esté desactivado, el overlay permanece oculto.
:::

La página tiene dos pestañas: **Configuración** e **Historial**.

## Configuración

### Plataforma de votación

Haz clic en **Twitch** o **YouTube** para elegir desde qué chat se puede participar. Puedes elegir ambas. Una plataforma que no está conectada muestra **(sin conexión)** en Twitch o **No hay URL del chat conectada** en YouTube. Para conectarlas, consulta [Configuración de Twitch](../platforms/twitch) y [Configuración de YouTube](../platforms/youtube-settings).

### Palabra clave del sorteo

Un mensaje del chat que contenga esta palabra clave inscribe al espectador. Cada espectador puede participar solo una vez por sorteo. No se puede hacer clic en **Iniciar recolección** mientras la palabra clave esté vacía.

### Duración del sorteo

Cuánto tiempo permanece abierta la inscripción, en segundos. El valor predeterminado es 300 y el rango es 10–3600.

### Máximo de participantes

La inscripción se cierra antes de tiempo cuando se une esta cantidad de personas. Ingresa `0` para no tener límite.

### Eliminar la opción tras sortearla

Cuando está activado, el ganador se quita de los participantes antes del siguiente sorteo, así que no puede volver a salir en ese sorteo.

### Texto de aviso

El aviso que se muestra en el overlay durante la inscripción, que indica a los espectadores la palabra clave y la cantidad de participantes. Configura su fuente, color y tamaño (px).

### Animación del sorteo

- **Cambio rápido de ID** (predeterminado): los nombres de los participantes flotan en pantalla mientras la inscripción está abierta y luego cambian rápidamente durante el sorteo
  - **Fuente de la pantalla de recolección**: fuente, tamaño de fuente y los colores de las etiquetas de nombre (hasta 5)
  - **Fuente de la animación del sorteo**: fuente y tamaño de fuente de los nombres que cambian durante el sorteo
  - **Restaurar predeterminado**: restablece esta configuración
- **Animación de ruleta**: los participantes se colocan en una ruleta que gira para elegir al ganador. Elige un esquema de colores: **Minimalista** o un tema personalizado que hayas creado en [Ruleta](./turntable)

Mientras la inscripción está abierta, no puedes cambiar las plataformas, la palabra clave, la duración, el máximo de participantes, Eliminar la opción tras sortearla ni el tipo de animación.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Realizar un sorteo

1. Haz clic en **Iniciar recolección**. El panel muestra **Recolectando…**, el tiempo restante y la cantidad de participantes
2. Mientras la inscripción está abierta, puedes escribir un nombre en **Ingresar nombre de participante manualmente** y hacer clic en **Agregar** (o presionar Enter). Un nombre que ya está en la lista muestra "Este ID ya está en la lista"
3. Para cerrar la inscripción antes de que se acabe el tiempo, haz clic en **Finalizar recolección**. La inscripción también se cierra cuando se acaba el tiempo o se alcanza el **Máximo de participantes**. Entonces el panel muestra **¡Se acabó el tiempo!**
4. Haz clic en **Iniciar sorteo**. El overlay reproduce la animación y, al terminar, el ganador aparece en **Ganador**
5. Para sortear otro ganador, haz clic en **Sortear de nuevo**

Haz clic en **Cancelar sorteo** en cualquier momento para borrar todos los participantes y ganadores; el overlay vuelve a quedar en espera.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Historial

La pestaña **Historial** guarda un registro por sorteo con la hora, la palabra clave y la cantidad de participantes. Expande un registro para ver los ganadores y la lista completa de participantes. Solo se conserva el historial de sorteos de los últimos 30 días. Para eliminar un registro, haz clic en 🗑 y luego en **Confirmar eliminación**.

:::info Límites de la versión de prueba
El overlay de OBS muestra una marca de agua. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
