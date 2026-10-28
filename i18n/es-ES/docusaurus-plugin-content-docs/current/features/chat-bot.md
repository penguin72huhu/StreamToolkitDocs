---
sidebar_position: 18
---

# Bot de chat

Publica mensajes en tu chat automáticamente: mensajes programados cada cierto intervalo y respuestas por palabra clave cuando un espectador escribe un comando. El bot publica desde tu propia cuenta.

El bot de chat no tiene overlay de OBS, así que no hay ninguna URL que añadir.

:::tip
Activa el interruptor junto a **Bot de chat** en el menú izquierdo. Mientras está desactivado, el bot no envía nada.
:::

La página tiene tres pestañas: **Ajustes**, **Mensajes programados** y **Respuestas por palabra clave**.

## Pestaña Ajustes

En **Plataformas**, haz clic en **Twitch** para activarlo (vuelve a hacer clic para desactivarlo). El punto que hay al lado se ilumina cuando Twitch está conectado; si no, muestra **(sin conexión)**. Conecta Twitch primero: [Ajustes de Twitch](../platforms/twitch).

**YouTube** aparece como **Próximamente** y todavía no se puede activar.

Si no hay ninguna plataforma conectada, las otras dos pestañas muestran "No hay ninguna plataforma conectada, así que el bot no enviará nada." con un botón **Ir a ajustes**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Mensajes programados

Publica un mensaje cada cierto tiempo mientras estás en directo.

1. Haz clic en **+ Añadir**
2. Rellena:
   - **Mensaje**: el texto que se publica (hasta 500 caracteres en Twitch). Siempre es una sola línea: Intro no hace nada y los saltos de línea pegados se convierten en espacios
   - **Intervalo**: minutos entre publicaciones (5–240, predeterminado 15)
   - **Mín. de mensajes**: cuántos mensajes nuevos del chat hacen falta desde la última publicación para volver a publicar (0–100, predeterminado 2), para que no siga publicando en un chat vacío
   - **Plataformas**: dónde publicar
3. Haz clic en **Guardar**

Cómo publica:

- Solo mientras tu stream está en directo. La primera publicación llega un intervalo completo después de empezar el directo, no en el momento en que empieza
- Si toca enviar varios mensajes programados a la vez, se reparten en lugar de publicarse juntos

## Respuestas por palabra clave

Responde cuando el mensaje de un espectador empieza por un comando.

1. Haz clic en **+ Añadir**
2. Rellena:
   - **Comando**: elige el prefijo (`! @ # $ % & ~`) y escribe una palabra sin espacios, p. ej. `!dc`. Se compara con la primera palabra del mensaje del chat, sin distinguir mayúsculas de minúsculas
   - **Respuesta**: el texto que se publica. `{user}` se sustituye por el nombre del espectador que usó el comando
   - **Espera**: segundos antes de que el mismo comando pueda volver a responder (0–3600, predeterminado 5)
   - **Plataformas**: dónde responder
3. Haz clic en **Guardar**

Las respuestas por palabra clave funcionan en cualquier momento, estés en directo o no.

Un comando no puede coincidir con el de otra respuesta por palabra clave ni con un comando que ya usen [Solicitudes de canciones](./song-request) o la palabra clave de [Sorteos](./lottery).

## Gestionar la lista

En ambas pestañas, cada elemento tiene:

- Una casilla a la izquierda para activar o desactivar el elemento sin eliminarlo
- Etiquetas de plataforma; una etiqueta atenuada indica que esa plataforma está desactivada en la pestaña Ajustes
- **Editar** y **Eliminar**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Límites de la versión de prueba
- 1 mensaje programado y 1 respuesta por palabra clave
- Todos los mensajes terminan con ` (by StreamToolkit)`, así que la longitud máxima del mensaje es menor

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::
