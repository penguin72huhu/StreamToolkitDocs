---
sidebar_position: 17
---

# Solicitudes de canciones

Los espectadores piden canciones de YouTube con un comando del chat, y las canciones se reproducen en OBS una tras otra. También puedes agregar canciones tú mismo y configurar una lista de reproducción predeterminada que suena cuando no hay pedidos.

## URL de la fuente de OBS

```
http://127.0.0.1:7272/song-request
```

Haz clic en **Copiar** junto a **URL de origen para OBS** en la parte superior de la página y agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

:::warning
Las solicitudes de canciones reproducen sonido. En las propiedades de la fuente de navegador, marca **Controlar audio vía OBS**; de lo contrario, la música no llegará a tu transmisión.
:::

:::tip
Activa también el interruptor junto a **Solicitudes de canciones** en el menú izquierdo. Los comandos del chat solo se procesan mientras el interruptor está activado.
:::

La página tiene dos pestañas: **Configuración** y **Lista de reproducción**.

## Pestaña Configuración

### Plataforma

Cada plataforma tiene su propia tarjeta:

- **Permitir pedir canciones desde esta plataforma**: permite que los espectadores de ese chat pidan canciones
- **Activar respuestas del bot del chat** (solo Twitch, activado de forma predeterminada): responde en el chat de Twitch con el resultado de cada comando, usando tu cuenta de Twitch conectada. Solo se muestra cuando Twitch está activado y conectado

Una plataforma que no está conectada muestra **(sin conexión)** (Twitch) o **No hay URL del chat conectada** (YouTube). Conéctala primero:

- [Configuración de Twitch](../platforms/twitch)
- [Configuración de YouTube](../platforms/youtube-settings)

### Comandos del chat

| Campo | Predeterminado |
|------|--------|
| **Prefijo de comando** | `!` (elige entre `! @ # $ % & ~`) |
| **Comando para pedir canción** | `sr` |
| **Eliminar canción** | `remove` |
| **Ver lista de canciones** | `queue` |
| **Consultar canción actual** | `song` |
| **Tiempo de espera entre pedidos** | 3000 ms |

El tiempo de espera se cuenta por espectador: después de un pedido exitoso, el mismo espectador tiene que esperar ese tiempo antes de volver a pedir.

### Configuración

- **Mostrar el video en pantalla** (activado de forma predeterminada): cuando está desactivado, el video se oculta en OBS pero el audio se sigue reproduciendo
- **Límite de la lista** (1–100, predeterminado 20): la cantidad máxima de canciones pedidas en la lista. Las canciones de la lista predeterminada no cuentan
- **Mostrar notificación de pedido** (activado de forma predeterminada): muestra una tarjeta de notificación en OBS cuando un espectador pide, elimina o no logra pedir una canción. Cuando está activado, puedes configurar:
  - **X** / **Y**: posición de la notificación desde la esquina superior izquierda (px, predeterminado 16 / 16)
  - **Escala de la notificación**: multiplicador de tamaño (predeterminado 1.0)
  - **Probar apariencia de la notificación**: envía una notificación de prueba a OBS

Cada notificación permanece 5 segundos; se muestran hasta 3 a la vez.

{/* TODO: 截圖 — 點歌設定分頁 */}

## Cómo lo usan los espectadores

Con la configuración predeterminada:

| Comando | Qué hace |
|------|------|
| `!sr <YouTube link>` | Pide ese video |
| `!sr <search words>` | Busca en YouTube y pide el primer resultado |
| `!remove` | Elimina el pedido más reciente del espectador (no la canción que está sonando) |
| `!queue` | Responde con las próximas 3 canciones pedidas |
| `!song` | Responde con la canción que está sonando |

- Enlaces aceptados: `youtube.com/watch?v=…`, `youtu.be/…`, `youtube.com/live/…`, `youtube.com/shorts/…`, o un ID de video de 11 caracteres
- No se aceptan enlaces de listas de reproducción
- Un pedido falla cuando la lista llegó al **Límite de la lista**
- Los pedidos nuevos se ponen en cola después de los pedidos de los demás espectadores y antes de las canciones de la lista predeterminada
- `!queue` y `!song` solo funcionan en el chat de Twitch con **Activar respuestas del bot del chat** activado

## Pestaña Lista de reproducción

### Controles de reproducción

La línea superior muestra quién pidió la canción actual y su título. Botones:

- **Reproducir** / **Pausar**: si no está sonando nada, empieza desde la primera canción de la lista
- **Detener**: detiene la reproducción
- **Siguiente**: salta a la siguiente canción

Mientras suena una canción aparece una barra de progreso; arrástrala para saltar a una posición. Cuando una canción termina, la siguiente empieza automáticamente.

:::note
No se reproduce nada automáticamente al iniciar la app. Presiona **Reproducir** para empezar.
:::

### Lista de reproducción predeterminada

Pega la URL de una lista de reproducción de YouTube y elige **Reproducción en bucle** o **Reproducción aleatoria**. Cuando la lista se queda sin canciones, se agrega y reproduce automáticamente una canción de esta lista. Estas canciones aparecen como **Lista predeterminada** en la lista.

La lista predeterminada se lee a través de tu cuenta de YouTube, así que primero debes iniciar sesión con Google en [Configuración de YouTube](../platforms/youtube-settings).

### Pedir canción manualmente

Pega la URL de un video de YouTube y haz clic en **Agregar a la lista** (o presiona Enter). Los pedidos manuales no admiten palabras de búsqueda.

### Lista

**Lista (n)** muestra todas las canciones: plataforma, quién la pidió, título e ID del video (haz clic para abrirlo en YouTube). Haz clic en **Eliminar** para quitar una canción; eliminar la canción que está sonando salta a la siguiente. **Vaciar** vacía toda la lista.

{/* TODO: 截圖 — 播放清單分頁 */}

## Preguntas frecuentes

**Q: ¿Los espectadores escriben el comando pero no pasa nada?**
Comprueba que:
- El interruptor **Solicitudes de canciones** del menú izquierdo esté activado
- **Permitir pedir canciones desde esta plataforma** esté marcado para esa plataforma
- En Twitch: el chat de Twitch lo lee la función [Chat](./chat). Si desactivaste Twitch en la página Chat (y el [Bot de chat](./chat-bot) no está usando Twitch), los comandos de Twitch no se reciben

**Q: ¿La lista de reproducción predeterminada no suena?**
Asegúrate de haber iniciado sesión con Google en Configuración y de que la URL sea un enlace de lista de reproducción (contiene `list=`).

:::info Límites de la versión de prueba
- Los pedidos de los espectadores desde el chat solo están disponibles en la versión completa. En la versión de prueba, un pedido desde el chat falla con el mensaje "Los pedidos de canciones no están disponibles en la versión de prueba". **Pedir canción manualmente** y la lista de reproducción predeterminada siguen funcionando
- El overlay de OBS muestra una marca de agua

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::
