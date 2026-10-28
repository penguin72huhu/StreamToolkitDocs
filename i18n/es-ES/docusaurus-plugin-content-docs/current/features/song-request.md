---
sidebar_position: 17
---

# Solicitudes de canciones

Los espectadores piden canciones de YouTube con un comando del chat, y las canciones suenan en OBS una tras otra. También puedes añadir canciones tú mismo y definir una lista de reproducción predeterminada que suena cuando no hay peticiones.

## URL de origen para OBS

```
http://127.0.0.1:7272/song-request
```

Haz clic en **Copiar** junto a **URL de origen para OBS** en la parte superior de la página y añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

:::warning
Las solicitudes de canciones reproducen sonido. En las propiedades de la fuente de navegador, marca **Controlar audio vía OBS**; si no, la música no llegará a tu stream.
:::

:::tip
Activa también el interruptor junto a **Solicitudes de canciones** en el menú izquierdo. Los comandos del chat solo se procesan mientras el interruptor está activado.
:::

La página tiene dos pestañas: **Ajustes** y **Lista de reproducción**.

## Pestaña Ajustes

### Plataforma

Cada plataforma tiene su propia tarjeta:

- **Permitir pedir canciones desde esta plataforma**: permite a los espectadores de ese chat pedir canciones
- **Activar respuestas del bot de chat** (solo Twitch, activado de forma predeterminada): responde en el chat de Twitch con el resultado de cada comando, usando tu cuenta de Twitch conectada. Solo aparece cuando Twitch está activado y conectado

Una plataforma que no está conectada muestra **(sin conexión)** (Twitch) o **URL del chat no conectada** (YouTube). Conéctala primero:

- [Ajustes de Twitch](../platforms/twitch)
- [Ajustes de YouTube](../platforms/youtube-settings)

### Comandos del chat

| Campo | Predeterminado |
|------|--------|
| **Prefijo de comando** | `!` (elige entre `! @ # $ % & ~`) |
| **Comando para pedir canción** | `sr` |
| **Eliminar canción** | `remove` |
| **Ver lista de canciones** | `queue` |
| **Consultar canción actual** | `song` |
| **Tiempo de espera entre peticiones** | 3000 ms |

El tiempo de espera se cuenta por espectador: después de una petición correcta, el mismo espectador tiene que esperar ese tiempo antes de volver a pedir.

### Ajustes

- **Mostrar el vídeo en pantalla** (activado de forma predeterminada): si está desactivado, el vídeo se oculta en OBS pero el audio sigue sonando
- **Máximo de la lista** (1–100, predeterminado 20): el número máximo de canciones pedidas en la lista. Las canciones de la lista predeterminada no cuentan
- **Mostrar notificación de petición** (activado de forma predeterminada): muestra una tarjeta de notificación en OBS cuando un espectador pide o elimina una canción, o cuando su petición falla. Si está activado, puedes definir:
  - **X** / **Y**: posición de la notificación desde la esquina superior izquierda (px, predeterminado 16 / 16)
  - **Escala de la notificación**: multiplicador de tamaño (predeterminado 1.0)
  - **Probar apariencia de la notificación**: envía una notificación de prueba a OBS

Cada notificación permanece 5 segundos; se muestran como máximo 3 a la vez.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Cómo lo usan los espectadores

Con los ajustes predeterminados:

| Comando | Qué hace |
|------|------|
| `!sr <YouTube link>` | Pide ese vídeo |
| `!sr <search words>` | Busca en YouTube y pide el primer resultado |
| `!remove` | Elimina la petición más reciente del espectador (no la canción que está sonando) |
| `!queue` | Responde con las 3 siguientes canciones pedidas |
| `!song` | Responde con la canción que está sonando |

- Enlaces aceptados: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…` o un ID de vídeo de 11 caracteres
- No se aceptan enlaces de listas de reproducción
- Una petición falla cuando la lista ha llegado al **Máximo de la lista**
- Las peticiones nuevas se colocan después de las de los demás espectadores y por delante de las canciones de la lista predeterminada
- `!queue` y `!song` solo funcionan en el chat de Twitch con **Activar respuestas del bot de chat** activado

## Pestaña Lista de reproducción

### Controles de reproducción

La línea superior muestra quién pidió la canción actual y su título. Botones:

- **Reproducir** / **Pausar**: si no suena nada, empieza por la primera canción de la lista
- **Detener**: detiene la reproducción
- **Siguiente**: salta a la siguiente canción

Mientras suena una canción, aparece una barra de progreso; arrástrala para saltar a otro punto. Cuando termina una canción, empieza automáticamente la siguiente.

:::note
No suena nada automáticamente al iniciar la aplicación. Pulsa **Reproducir** para empezar.
:::

### Lista de reproducción predeterminada

Pega la URL de una lista de reproducción de YouTube y elige **Reproducción en bucle** o **Reproducción aleatoria**. Cuando la lista se queda vacía, se añade y se reproduce automáticamente una canción de esta lista de reproducción. Estas canciones aparecen como **Lista predeterminada** en la lista.

La lista de reproducción predeterminada se lee a través de tu cuenta de YouTube, así que primero tienes que iniciar sesión con Google en [Ajustes de YouTube](../platforms/youtube-settings).

### Pedir canción manualmente

Pega la URL de un vídeo de YouTube y haz clic en **Añadir a la lista** (o pulsa Intro). Las peticiones manuales no admiten palabras de búsqueda.

### Lista

**Lista (n)** muestra todas las canciones: plataforma, quién la pidió, título e ID del vídeo (haz clic para abrirlo en YouTube). Haz clic en **Eliminar** para quitar una canción; si eliminas la canción que está sonando, se salta a la siguiente. **Vaciar** vacía toda la lista.

{/* TODO: 截圖 — 播放清單分頁 */}

## Preguntas frecuentes

**Q: ¿Los espectadores escriben el comando, pero no pasa nada?**
Comprueba que:
- El interruptor de **Solicitudes de canciones** del menú izquierdo está activado
- **Permitir pedir canciones desde esta plataforma** está marcado para esa plataforma
- En Twitch: el chat de Twitch lo lee la función [Chat](./chat). Si desactivaste Twitch en la página Chat (y el [Bot de chat](./chat-bot) no usa Twitch), los comandos de Twitch no se reciben

**Q: ¿No suena la lista de reproducción predeterminada?**
Asegúrate de haber iniciado sesión con Google en Ajustes y de que la URL es un enlace de lista de reproducción (contiene `list=`).

:::info Límites de la versión de prueba
- Las peticiones de los espectadores por el chat solo están disponibles en la versión completa. En la versión de prueba, una petición desde el chat falla con el mensaje "Las peticiones de canciones no están disponibles en la versión de prueba". **Pedir canción manualmente** y la lista de reproducción predeterminada siguen funcionando
- El overlay de OBS muestra una marca de agua

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::
