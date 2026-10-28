---
sidebar_position: 15
---

# Encuestas en directo

Haz una votación en el stream. Los espectadores votan escribiendo el número de una opción en el chat de Twitch o YouTube, y los resultados se actualizan en directo en el overlay de OBS.

## URL de origen para OBS

```
http://127.0.0.1:7272/vote
```

Haz clic en **Copiar** junto a **URL de origen para OBS** en la parte superior de la página y añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). Encuestas en directo no reproduce sonido, así que no hace falta activar "Controlar audio vía OBS".

:::tip
Activa también el interruptor junto a **Encuestas en directo** en la barra lateral izquierda (**Activar salida en OBS**). Mientras está desactivado, el overlay permanece oculto.
:::

La página tiene tres pestañas: **Ajustes**, **Apariencia** e **Historial**.

## Iniciar una votación (pestaña Ajustes)

### Plataforma de votación

Haz clic en **Twitch** o **YouTube** para elegir el chat de qué plataforma puede votar. Puedes elegir ambas. Una plataforma que no está conectada muestra **(sin conexión)** en Twitch o **URL del chat no conectada** en YouTube. Conéctala primero:

- [Ajustes de Twitch](../platforms/twitch)
- [Ajustes de YouTube](../platforms/youtube-settings)

### Título de la votación

Opcional. Por ejemplo: "¿A qué juego jugamos esta noche?"

### Opciones de la votación (2–10)

- Introduce al menos 2 opciones. Puedes tener hasta 10
- **+ Añadir opción** añade una fila y **×** elimina una
- **Aplicar del historial** te permite elegir una de tus 15 votaciones más recientes y rellenar su título y sus opciones

Mientras editas, el overlay de OBS muestra una vista previa del título y las opciones.

### Duración de la votación

La duración de la votación en segundos. El valor predeterminado es 60 y el mínimo es 10.

### Iniciar / Detener

- **Iniciar votación**: requiere al menos 2 opciones rellenadas y al menos una plataforma seleccionada que esté conectada
- **Detener votación**: termina la votación antes de tiempo. Si no, termina cuando se acaba el tiempo

Mientras hay una votación en curso, no puedes cambiar las plataformas, el título, las opciones ni la duración.

{/* TODO: 截圖 — 投票設定分頁 */}

## Cómo votan los espectadores

Mientras la votación está en curso, el overlay muestra "Escribe el número de la opción en el chat para votar (ej.: 1)".

- El mensaje entero debe ser el número de la opción, como `1` o `1.`. Los espacios se ignoran. Un mensaje con cualquier otro texto no cuenta
- Cada espectador tiene un voto. Si envía otro número, su voto pasa a la nueva opción, y cuenta el último voto antes de que se acabe el tiempo

## Resultados en directo

Durante la votación, aparece **Resultados en directo** debajo de los ajustes con el tiempo restante, el número de votos y el porcentaje de cada opción, y el total de votos. Cuando termina la votación, cambia a **Resultado final**. Haz clic en **Detalles** para ver quién votó cada opción, agrupado por Twitch y YouTube.

## Apariencia

La pestaña **Apariencia** tiene una **Vista previa** en la parte superior. El selector de color que hay al lado solo cambia el fondo de la vista previa, no el overlay de OBS.

- **Fuente**: define la fuente, el color y el **Tamaño** (px) de **Título**, **Consejo**, **Opción**, **Segundos de cuenta atrás** y **Número de votos**
- **Color de la barra de progreso**: hasta 5 colores, usados por orden para las barras de las opciones. Cada uno puede ser **Color sólido** o **Degradado**. Los degradados también tienen un **Ángulo**
- **Color de fondo**: el fondo de la tarjeta de la votación
- **Restablecer valores**: restaura la apariencia predeterminada. Si hay un tema aplicado, restaura la apariencia del tema

En **CSS personalizado** puedes escribir tus propios estilos. Para compartir o descargar estilos, consulta [Temas](./themes).

{/* TODO: 截圖 — 投票外觀分頁 */}

## Historial

La pestaña **Historial** muestra el título, la hora, el número de opciones y el total de votos de cada votación. Despliega una votación para ver sus resultados, el número de votos por plataforma y **Detalles**. Solo se conserva el historial de votaciones de los últimos 30 días. Para eliminar un registro, haz clic en 🗑 y luego en **Confirmar eliminación**.

:::info Límites de la versión de prueba
- **CSS personalizado** solo está disponible en la versión completa
- El overlay de OBS muestra una marca de agua

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
