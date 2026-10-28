---
sidebar_position: 13
---

# Muro de emotes

Cuando los espectadores usan emotes en el chat, los emotes flotan por tu transmisión.

:::note Antes de empezar
El Muro de emotes lee los emotes del chat, así que primero conecta las plataformas que usas. Consulta [Configuración de Twitch](../platforms/twitch) y [Configuración de YouTube](../platforms/youtube-settings).
:::

## Paso 1: Agregar la fuente de OBS

Copia la **URL de origen para OBS** en la parte superior de la página:

```
http://127.0.0.1:7272/emote-wall
```

Agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). El Muro de emotes no reproduce sonido, así que no necesitas activar "Controlar audio vía OBS".

:::tip
Activa también el interruptor junto a **Muro de emotes** en la barra lateral izquierda (**Activar salida en OBS**). Mientras esté desactivado, los emotes del chat no se envían al overlay.
:::

## Paso 2: Elegir los orígenes

En **Origen** hay una tarjeta para **Twitch** y otra para **YouTube**. Cada tarjeta muestra el estado de la conexión:

- Twitch muestra **(sin conexión)** cuando tu cuenta de Twitch no está conectada
- YouTube muestra **No hay URL del chat conectada** cuando el chat de YouTube no está conectado

Marca **Activar muro de emotes** en una tarjeta para mostrar los emotes del chat de esa plataforma. Desmárcalo para ignorar esa plataforma.

{/* TODO: 截圖 — 表情符號牆來源設定 */}

## Paso 3: Configuración de animación

| Ajuste | Descripción |
|---------|-------------|
| **Tamaño de los emotes** | Tamaño de cada emote, 16–256 px |
| **Máximo de emotes por mensaje** | Se toman como máximo esta cantidad de emotes de un mismo mensaje del chat (1–20) |
| **Duración del movimiento flotante** | Cuánto tiempo flota cada emote, 1–30 segundos |
| **Velocidad del movimiento flotante** | 50–500 px/s |

Haz clic en **Restaurar predeterminado** junto al título de la sección para restablecer los cuatro valores.

## Paso 4: Probar

Haz clic en **Probar (mostrar en OBS)** para enviar emotes de Twitch de ejemplo al overlay con tu configuración actual. La cantidad de emotes de prueba sigue el valor de **Máximo de emotes por mensaje**.

{/* TODO: 截圖 — OBS 中的表情符號牆 */}

:::info Límites de la versión de prueba
El overlay de OBS muestra una marca de agua mientras hay emotes en pantalla. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
