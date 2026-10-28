---
sidebar_position: 16
---

# Sorteos

Los espectadores participan escribiendo una palabra clave en el chat de Twitch o YouTube. Cuando se cierra la inscripción, se sortean ganadores al azar y la animación del sorteo se reproduce en el overlay de OBS.

## URL de origen para OBS

```
http://127.0.0.1:7272/lottery
```

Haz clic en **Copiar** junto a **URL de origen para OBS** en la parte superior de la página y añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). Sorteos no reproduce sonido, así que no hace falta activar "Controlar audio vía OBS".

:::tip
Activa también el interruptor junto a **Sorteos** en la barra lateral izquierda (**Activar salida en OBS**). Mientras está desactivado, el overlay permanece oculto.
:::

La página tiene dos pestañas: **Ajustes** e **Historial**.

## Ajustes

### Plataforma de votación

Haz clic en **Twitch** o **YouTube** para elegir el chat de qué plataforma puede participar. Puedes elegir ambas. Una plataforma que no está conectada muestra **(sin conexión)** en Twitch o **URL del chat no conectada** en YouTube. Para conectarla, consulta [Ajustes de Twitch](../platforms/twitch) y [Ajustes de YouTube](../platforms/youtube-settings).

### Palabra clave del sorteo

Un mensaje del chat que contenga esta palabra clave inscribe al espectador. Cada espectador solo puede inscribirse una vez por sorteo. No se puede hacer clic en **Empezar a recopilar** mientras la palabra clave esté vacía.

### Duración del sorteo

Cuánto tiempo está abierta la inscripción, en segundos. El valor predeterminado es 300 y el rango es 10–3600.

### Máximo de participantes

La inscripción se cierra antes de tiempo en cuanto se apunta este número de personas. Introduce `0` para no poner límite.

### Eliminar la opción tras sortearla

Si está activado, el ganador se quita de los participantes antes del siguiente sorteo, de modo que no puede volver a salir en ese sorteo.

### Texto de aviso

El aviso que se muestra en el overlay durante la inscripción, que indica a los espectadores la palabra clave y el número de participantes. Define su fuente, color y tamaño (px).

### Animación del sorteo

- **Rotación rápida de ID** (predeterminada): los nombres de los participantes flotan en pantalla mientras la inscripción está abierta y luego van cambiando rápidamente durante el sorteo
  - **Fuente de la pantalla de recopilación**: fuente, tamaño de fuente y colores de las etiquetas de nombre (hasta 5)
  - **Fuente de la animación del sorteo**: fuente y tamaño de fuente de los nombres que van cambiando durante el sorteo
  - **Restablecer valores**: restaura estos ajustes
- **Animación de ruleta**: los participantes se colocan en una ruleta que gira para elegir al ganador. Elige una combinación de colores: **Minimalista** o un tema personalizado creado en [Ruleta](./turntable)

Mientras la inscripción está abierta, no puedes cambiar las plataformas, la palabra clave, la duración, el máximo de participantes, Eliminar la opción tras sortearla ni el tipo de animación.

{/* TODO: 截圖 — 抽獎設定分頁 */}

## Hacer un sorteo

1. Haz clic en **Empezar a recopilar**. El panel muestra **Recopilando…**, el tiempo restante y el número de participantes
2. Mientras la inscripción está abierta, puedes escribir un nombre en **Introduce manualmente el nombre del participante** y hacer clic en **Añadir** (o pulsar Intro). Si el nombre ya está en la lista, aparece "Este ID ya está en la lista"
3. Para cerrar la inscripción antes de que se acabe el tiempo, haz clic en **Terminar recopilación**. La inscripción también se cierra cuando se acaba el tiempo o se alcanza el **Máximo de participantes**. El panel muestra entonces **¡Se acabó el tiempo!**
4. Haz clic en **Iniciar sorteo**. El overlay reproduce la animación y, cuando termina, el ganador aparece en **Ganador**
5. Para sacar otro ganador, haz clic en **Sortear de nuevo**

Haz clic en **Cancelar sorteo** en cualquier momento para borrar todos los participantes y ganadores; el overlay vuelve a la espera.

{/* TODO: 截圖 — 抽獎進行中與 OBS 畫面 */}

## Historial

La pestaña **Historial** guarda un registro por sorteo con la hora, la palabra clave y el número de participantes. Despliega un registro para ver los ganadores y la lista completa de participantes. Solo se conserva el historial de sorteos de los últimos 30 días. Para eliminar un registro, haz clic en 🗑 y luego en **Confirmar eliminación**.

:::info Límites de la versión de prueba
El overlay de OBS muestra una marca de agua. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
