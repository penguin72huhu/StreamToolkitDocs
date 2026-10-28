---
sidebar_position: 5
---

# Media Board

Muestra imágenes, reproduce vídeos y reproduce efectos de sonido en el stream con un clic o un atajo.

La página tiene tres pestañas: **Imagen**, **Vídeo** y **Sonido**. Cada pestaña tiene su propia URL de origen para OBS.

| Pestaña | URL de origen para OBS | Controlar audio vía OBS |
|-----|----------------|-----------------------|
| **Imagen** | `http://127.0.0.1:7272/imageboard` | No hace falta |
| **Vídeo** | `http://127.0.0.1:7272/videoboard` | Obligatorio |
| **Sonido** | `http://127.0.0.1:7272/soundboard` | Obligatorio |

Haz clic en **Copiar** junto a cada URL y añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). Los vídeos y sonidos se reproducen en la fuente de OBS, no dentro de Stream Toolkit, así que tienes que activar **Controlar audio vía OBS** en esas dos fuentes; si no, los espectadores no los oirán.

:::tip
Activa el interruptor junto a **Media Board** en la barra lateral izquierda (**Activar salida en OBS**). Mientras está desactivado, no se pueden mostrar imágenes ni se reproducen vídeos ni sonidos, tanto si usas los botones como los atajos.
:::

## Controles comunes

Las imágenes, los vídeos y los sonidos se muestran como tarjetas:

- Haz clic en una tarjeta para desplegar o plegar sus ajustes
- La casilla de la derecha de una tarjeta: si está marcada, el elemento aparece entre las herramientas de acceso de [Herramientas rápidas](./quick-tools). Los elementos nuevos están marcados de forma predeterminada
- **✕** elimina el elemento
- Si un archivo local se ha movido o eliminado, la tarjeta muestra **Archivo no encontrado**

### Atajos

Cada elemento puede tener su propio atajo:

1. Despliega la tarjeta y haz clic en el botón del atajo
2. Pulsa la combinación de teclas que quieras y suéltala. Pulsa **Esc** para cancelar
3. Para quitar el atajo, haz clic en **Borrar**

Si la combinación ya la usa otra función, no se guarda y el botón muestra un mensaje de conflicto. El atajo funciona aunque Stream Toolkit no sea la ventana activa. Todos los atajos aparecen también en la página [Atajos de teclado](./hotkeys).

## Imagen

{/* TODO: 截圖 — 圖片分頁 */}

### Añadir una imagen

1. Haz clic en **Añadir imagen**
2. Elige un archivo (jpg, jpeg, png o gif). El nombre del archivo pasa a ser el nombre de la imagen

Al desplegar la tarjeta se muestran una miniatura y estos ajustes:

- **Nombre**: el nombre de la imagen
- **Ruta del archivo**: haz clic en **Volver a elegir** para elegir otro archivo
- **Atajo de teclado**: púlsalo una vez para mostrar la imagen y otra vez para ocultarla
- **Configurar posición y tamaño**: ver más abajo
- **Eliminar imagen**: elimina la imagen

### Mostrar y ocultar

Haz clic en el botón **○** de una tarjeta para mostrar la imagen en OBS. Se convierte en **◉**. Vuelve a hacer clic para ocultar la imagen.

### Ajustes de visualización

**Permitir mostrar varias imágenes a la vez** está desactivado de forma predeterminada. Mientras está desactivado, al mostrar una imagen se oculta la que se está mostrando. Actívalo para mostrar varias imágenes al mismo tiempo.

### Configurar posición y tamaño

- **Posición X** / **Posición Y**: en px. 0/0 es el centro de la fuente. Los valores positivos mueven hacia la derecha/abajo y los negativos hacia la izquierda/arriba
- **Ancho** / **Alto**: en % del tamaño original. 100 = tamaño original. El botón 🔗 bloquea la relación de aspecto (activado de forma predeterminada). Haz clic en él para escalar libremente
- Mientras la imagen se muestra, los cambios se previsualizan en directo en OBS
- **Guardar** conserva los cambios, **Restablecer** vuelve a los valores que había al abrir la ventana y **Cancelar** cierra sin guardar

## Vídeo

{/* TODO: 截圖 — 影片分頁 */}

Haz clic en **Añadir vídeo** para añadir una tarjeta y despliégala:

- **Nombre del vídeo**: el nombre que se muestra en la tarjeta
- **Origen**: **YouTube** o **Local**
  - **YouTube**: pega el enlace del vídeo en **URL de YouTube**. Haz clic en **Probar análisis** para comprobarlo. Si funciona, muestra "Analizado; se aplicará automáticamente al reproducir"
  - **Local**: haz clic en **Elegir archivo** para elegir un archivo mp4, webm u ogg. El límite de tamaño es de 200MB, y cuanto más grande es el archivo, más latencia. Para un fondo transparente, usa un vídeo WebM (VP9 Alpha)
- **Reproducción en bucle**: repite el vídeo
- **Tiempo de reproducción**: define **Desde** y **Hasta** (horas, minutos, segundos, ms). Deja **Hasta** en 00:00 para reproducir hasta el final
- **Volumen**: 0–100 %
- **Atajo de teclado**: púlsalo para reproducir el vídeo. Vuelve a pulsarlo mientras se reproduce para detenerlo
- **Configurar posición y tamaño**: los mismos campos de posición y tamaño que para las imágenes. Haz clic en **Vista previa en bucle** para reproducir el vídeo en bucle en OBS mientras lo ajustas, y en **Detener vista previa** para pararlo. Haz clic en **Guardar** o **Cancelar** al terminar

Haz clic en **▶** en una tarjeta para reproducir el vídeo en OBS. Haz clic en **■** para detenerlo.

## Sonido

{/* TODO: 截圖 — 音效分頁 */}

Haz clic en **Añadir sonido** para añadir una tarjeta y despliégala:

- **Nombre del sonido**: el nombre que se muestra en la tarjeta
- **Origen**: **URL de YouTube** o **Archivo local**
  - **URL de YouTube**: pega el enlace y haz clic en **Probar análisis** para comprobarlo
  - **Archivo local**: haz clic en **Elegir archivo** para elegir un archivo mp3, wav, ogg, flac, m4a, aac u opus
- **Tiempo de reproducción**: define **Desde** y **Hasta**. Deja **Hasta** en 00:00 para reproducir hasta el final
- **Volumen**: 0–100 %
- **Atajo de teclado**: púlsalo para reproducir el sonido

Haz clic en **▶** en una tarjeta para reproducir el sonido en OBS. Haz clic en **■** para detenerlo. Solo se reproduce un sonido a la vez. Al iniciar otro sonido se detiene el actual.

:::info Límites de la versión de prueba
- Solo puedes añadir **1** imagen, **1** vídeo y **1** sonido
- Los overlays de imagen y vídeo muestran una marca de agua

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::

## Preguntas frecuentes

**Q: Los vídeos o sonidos se reproducen, pero no hay sonido en el stream.**
Asegúrate de que **Controlar audio vía OBS** está marcado en las fuentes `/videoboard` y `/soundboard`, y de que las fuentes no están silenciadas en el mezclador de OBS.

**Q: No puedo elegir mi archivo de vídeo.**
Solo se pueden elegir archivos mp4, webm y ogg, de hasta 200MB. Si un archivo es más grande, un mensaje muestra el límite y el archivo no se añade.
