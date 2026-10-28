---
sidebar_position: 5
---

# Media Board

Muestra imágenes, reproduce videos y efectos de sonido en la transmisión con un clic o un atajo.

La página tiene tres pestañas: **Imagen**, **Video** y **Sonido**. Cada pestaña tiene su propia URL de fuente de OBS.

| Pestaña | URL de la fuente de OBS | Controlar audio vía OBS |
|-----|----------------|-----------------------|
| **Imagen** | `http://127.0.0.1:7272/imageboard` | No es necesario |
| **Video** | `http://127.0.0.1:7272/videoboard` | Obligatorio |
| **Sonido** | `http://127.0.0.1:7272/soundboard` | Obligatorio |

Haz clic en **Copiar** junto a cada URL y agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). Los videos y sonidos se reproducen en la fuente de OBS, no dentro de Stream Toolkit, así que debes activar **Controlar audio vía OBS** en esas dos fuentes; de lo contrario, los espectadores no los escucharán.

:::tip
Activa el interruptor junto a **Media Board** en la barra lateral izquierda (**Activar salida en OBS**). Mientras esté desactivado, no se pueden mostrar imágenes y los videos y sonidos no se reproducen, ya sea con los botones o con los atajos.
:::

## Controles comunes

Las imágenes, los videos y los sonidos se muestran como tarjetas:

- Haz clic en una tarjeta para expandir o contraer su configuración
- La casilla a la derecha de una tarjeta: cuando está marcada, el elemento aparece en las herramientas de inicio de [Herramientas rápidas](./quick-tools). Los elementos nuevos están marcados de forma predeterminada
- **✕** elimina el elemento
- Si un archivo local se movió o se eliminó, la tarjeta muestra **Archivo no encontrado**

### Atajos

Cada elemento puede tener su propio atajo:

1. Expande la tarjeta y haz clic en el botón del atajo
2. Presiona la combinación de teclas que quieras y suéltala. Presiona **Esc** para cancelar
3. Para quitar el atajo, haz clic en **Borrar**

Si otra función ya usa esa combinación, no se guarda y el botón muestra un mensaje de conflicto. El atajo funciona incluso cuando Stream Toolkit no es la ventana activa. Todos los atajos también aparecen en la página [Atajos de teclado](./hotkeys).

## Imagen

{/* TODO: 截圖 — 圖片分頁 */}

### Agregar una imagen

1. Haz clic en **Agregar imagen**
2. Elige un archivo (jpg, jpeg, png o gif). El nombre del archivo se convierte en el nombre de la imagen

Al expandir la tarjeta se muestran una miniatura y estos ajustes:

- **Nombre**: el nombre de la imagen
- **Ruta del archivo**: haz clic en **Volver a elegir** para elegir otro archivo
- **Atajo de teclado**: presiónalo una vez para mostrar la imagen y otra vez para ocultarla
- **Configurar posición y tamaño**: consulta abajo
- **Eliminar imagen**: elimina la imagen

### Mostrar y ocultar

Haz clic en el botón **○** de una tarjeta para mostrar la imagen en OBS. Cambia a **◉**. Haz clic de nuevo para ocultar la imagen.

### Configuración de visualización

**Permitir mostrar varias imágenes a la vez** está desactivado de forma predeterminada. Mientras esté desactivado, al mostrar una imagen se oculta la que se está mostrando. Actívalo para mostrar varias imágenes al mismo tiempo.

### Configurar posición y tamaño

- **Posición X** / **Posición Y**: en px. 0/0 es el centro de la fuente. Los valores positivos mueven a la derecha/abajo y los negativos a la izquierda/arriba
- **Ancho** / **Alto**: en % del tamaño original. 100 = tamaño original. El botón 🔗 bloquea la relación de aspecto (activado de forma predeterminada). Haz clic en él para escalar libremente
- Mientras la imagen se muestra, los cambios se previsualizan en vivo en OBS
- **Guardar** conserva los cambios, **Restablecer** vuelve a los valores que tenía al abrir la ventana y **Cancelar** cierra sin guardar

## Video

{/* TODO: 截圖 — 影片分頁 */}

Haz clic en **Agregar video** para agregar una tarjeta y luego expándela:

- **Nombre del video**: el nombre que se muestra en la tarjeta
- **Origen**: **YouTube** o **Local**
  - **YouTube**: pega el enlace del video en **URL de YouTube**. Haz clic en **Probar análisis** para comprobarlo. Si funciona, muestra "Analizado; se aplicará automáticamente al reproducir"
  - **Local**: haz clic en **Elegir archivo** para elegir un archivo mp4, webm u ogg. El límite de tamaño es de 200MB, y los archivos más grandes implican más latencia. Para un fondo transparente, usa un video WebM (VP9 Alpha)
- **Reproducción en bucle**: repite el video
- **Tiempo de reproducción**: configura **Desde** y **Hasta** (horas, minutos, segundos, ms). Deja **Hasta** en 00:00 para reproducir hasta el final
- **Volumen**: 0–100%
- **Atajo de teclado**: presiónalo para reproducir el video. Presiónalo de nuevo mientras el video se reproduce para detenerlo
- **Configurar posición y tamaño**: los mismos campos de posición y tamaño que para las imágenes. Haz clic en **Vista previa en bucle** para reproducir el video en bucle en OBS mientras lo ajustas, y en **Detener vista previa** para detenerlo. Haz clic en **Guardar** o **Cancelar** al terminar

Haz clic en **▶** en una tarjeta para reproducir el video en OBS. Haz clic en **■** para detenerlo.

## Sonido

{/* TODO: 截圖 — 音效分頁 */}

Haz clic en **Agregar sonido** para agregar una tarjeta y luego expándela:

- **Nombre del sonido**: el nombre que se muestra en la tarjeta
- **Origen**: **URL de YouTube** o **Archivo local**
  - **URL de YouTube**: pega el enlace y haz clic en **Probar análisis** para comprobarlo
  - **Archivo local**: haz clic en **Elegir archivo** para elegir un archivo mp3, wav, ogg, flac, m4a, aac u opus
- **Tiempo de reproducción**: configura **Desde** y **Hasta**. Deja **Hasta** en 00:00 para reproducir hasta el final
- **Volumen**: 0–100%
- **Atajo de teclado**: presiónalo para reproducir el sonido

Haz clic en **▶** en una tarjeta para reproducir el sonido en OBS. Haz clic en **■** para detenerlo. Solo se reproduce un sonido a la vez. Al iniciar otro sonido se detiene el actual.

:::info Límites de la versión de prueba
- Solo puedes agregar **1** imagen, **1** video y **1** sonido
- Los overlays de imagen y video muestran una marca de agua

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::

## Preguntas frecuentes

**Q: Los videos o sonidos se reproducen, pero no hay sonido en la transmisión.**
Asegúrate de que **Controlar audio vía OBS** esté marcado en las fuentes `/videoboard` y `/soundboard`, y de que las fuentes no estén silenciadas en el mezclador de OBS.

**Q: No puedo elegir mi archivo de video.**
Solo se pueden elegir archivos mp4, webm y ogg, de hasta 200MB. Si un archivo es más grande, aparece un mensaje con el límite y el archivo no se agrega.
