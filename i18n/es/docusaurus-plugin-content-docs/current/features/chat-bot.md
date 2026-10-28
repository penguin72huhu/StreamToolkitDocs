---
sidebar_position: 18
---

# Bot de chat

Publica mensajes en tu chat automáticamente: mensajes programados cada cierto intervalo y respuestas por palabra clave cuando un espectador escribe un comando. El bot publica desde tu propia cuenta.

El bot de chat no tiene overlay para OBS, así que no hay ninguna URL que agregar.

:::tip
Activa el interruptor junto a **Bot de chat** en el menú izquierdo. Mientras esté desactivado, el bot no envía nada.
:::

La página tiene tres pestañas: **Configuración**, **Mensajes programados** y **Respuestas por palabra clave**.

## Pestaña Configuración

En **Plataformas**, haz clic en **Twitch** para activarlo (haz clic de nuevo para desactivarlo). El punto junto a él se ilumina cuando Twitch está conectado; de lo contrario, muestra **(sin conexión)**. Conecta Twitch primero: [Configuración de Twitch](../platforms/twitch).

**YouTube** aparece como **Próximamente** y todavía no se puede activar.

Si no hay ninguna plataforma conectada, las otras dos pestañas muestran "No hay ninguna plataforma conectada, así que el bot no enviará nada." con un botón **Ir a ajustes**.

{/* TODO: 截圖 — 聊天機器人設定分頁 */}

## Mensajes programados

Publica un mensaje cada cierto tiempo mientras estás en directo.

1. Haz clic en **+ Agregar**
2. Completa:
   - **Mensaje**: el texto que se publica (hasta 500 caracteres en Twitch). Siempre es una sola línea: Enter no hace nada y los saltos de línea pegados se convierten en espacios
   - **Intervalo**: minutos entre publicaciones (5–240, predeterminado 15)
   - **Mín. de mensajes**: cuántos mensajes nuevos de chat se necesitan desde la última publicación antes de volver a publicar (0–100, predeterminado 2), para no seguir publicando en un chat vacío
   - **Plataformas**: dónde publicar
3. Haz clic en **Guardar**

Cómo publica:

- Solo mientras tu transmisión está en directo. La primera publicación llega un intervalo completo después de que empiezas el directo, no en el momento en que comienza la transmisión
- Si varios mensajes programados tocan al mismo tiempo, se reparten en lugar de publicarse juntos

## Respuestas por palabra clave

Responde cuando el mensaje de un espectador empieza con un comando.

1. Haz clic en **+ Agregar**
2. Completa:
   - **Comando**: elige el prefijo (`! @ # $ % & ~`) y escribe una palabra sin espacios, p. ej. `!dc`. Se compara con la primera palabra del mensaje del chat, sin distinguir mayúsculas de minúsculas
   - **Respuesta**: el texto que se publica. `{user}` se sustituye por el nombre del espectador que usó el comando
   - **Espera**: segundos antes de que el mismo comando pueda volver a responder (0–3600, predeterminado 5)
   - **Plataformas**: dónde responder
3. Haz clic en **Guardar**

Las respuestas por palabra clave funcionan en cualquier momento, estés en directo o no.

Un comando no puede ser igual a otra respuesta por palabra clave ni a un comando que ya usen [Solicitudes de canciones](./song-request) o la palabra clave de [Sorteos](./lottery).

## Administrar la lista

En ambas pestañas, cada elemento tiene:

- Una casilla a la izquierda para activar o desactivar el elemento sin eliminarlo
- Etiquetas de plataforma; una etiqueta atenuada significa que esa plataforma está desactivada en la pestaña Configuración
- **Editar** y **Eliminar**

{/* TODO: 截圖 — 定時留言列表 */}

:::info Límites de la versión de prueba
- 1 mensaje programado y 1 respuesta por palabra clave
- Todos los mensajes terminan con ` (by StreamToolkit)`, por lo que la longitud máxima del mensaje es menor

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::
