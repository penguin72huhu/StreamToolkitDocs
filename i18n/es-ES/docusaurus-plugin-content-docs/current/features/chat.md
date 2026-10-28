---
sidebar_position: 3
---

# Chat

**Chat** muestra el chat de Twitch y el de YouTube juntos en un único overlay, con traducción automática opcional. También puede mostrar el chat en una ventana transparente del escritorio que solo ves tú.

## URL de origen para OBS

```
http://127.0.0.1:7272/chat
```

Añádela como fuente de navegador: [Cómo agregar fuentes en OBS](../getting-started/obs-source). Este overlay no tiene sonido.

:::info
Los mensajes solo se envían al overlay mientras el interruptor de **Chat** de la barra lateral está activado. El chat se sigue recibiendo aunque esté desactivado, así que las funciones que leen el chat (encuestas, sorteos, solicitudes de canciones, etc.) siguen funcionando.
:::

## Antes de empezar

Conecta las plataformas que quieras mostrar:

- [Ajustes de Twitch](../platforms/twitch)
- [Ajustes de YouTube](../platforms/youtube-settings)

La página de ajustes tiene dos pestañas: **Ajustes** y **Apariencia**.

## Pestaña Ajustes

### Plataformas

- **Mostrar icono de la plataforma (Twitch / YouTube)**: muestra el icono <img src={require('@site/static/img/twitch-icon.png').default} alt="Twitch" className="inline-icon" /> / <img src={require('@site/static/img/youtube-icon.png').default} alt="YouTube" className="inline-icon" /> delante de cada mensaje

Cada plataforma tiene su propia tarjeta. El punto junto al nombre de la plataforma se ilumina en verde cuando está conectada y activada; se muestra **(sin conexión)** si Twitch no está conectado y **URL del chat no conectada** si el chat de YouTube no está vinculado.

| Opción | Descripción |
|--------|-------------|
| **Activar chat** | Muestra los mensajes de esta plataforma |
| **Mostrar avatar** | Muestra el avatar del espectador |
| **Mostrar insignias** (Twitch) / **Mostrar insignias (icono de miembro)** (YouTube) | Muestra las insignias |
| **Mostrar el nombre de los espectadores en vez del @alias** | Solo YouTube. Desactivado hasta que inicies sesión con Google |

Cuando el chat de YouTube está activado pero no vinculado, aparecen dos botones en su tarjeta:

- **Conexión automática**: encuentra automáticamente tu emisión actual (requiere iniciar sesión con Google)
- **Introducir manualmente**: te lleva a la página de ajustes para pegar la URL del chat

**Máximo de mensajes**: cuántos mensajes se mantienen en pantalla (5–200, predeterminado 50).

### Traducción automática

1. Marca **Activar traducción**
2. **Idioma de destino**: el idioma al que se traducen los mensajes. La opción predeterminada, **Seguir el idioma de la interfaz**, usa el idioma de la interfaz de la aplicación
3. **Idiomas que no se traducen** (opcional): los mensajes en los idiomas marcados se dejan tal cual. El portugués PT-BR y el PT-PT no se pueden distinguir, así que marcar cualquiera de los dos omite ambos

El **Servicio de traducción** es **MyMemory**, que no necesita clave de API.

- **Email (opcional)**: sin email, la cuota diaria es de 5.000 caracteres; introduce un email y haz clic en **Guardar** para subirla a 50.000 caracteres (gratis, sin necesidad de registrarse en MyMemory)
- La barra de debajo muestra la cantidad aproximada usada hoy. Se restablece a diario a las 08:00 UTC

### Prueba

- **Enviar mensaje de prueba**: envía al overlay un mensaje de ejemplo aleatorio
- **Borrar**: borra todos los mensajes del overlay

Si aparece **Error de conexión: puede que el servidor no esté en marcha**, el servidor local de Stream Toolkit no responde.

### Ventana de chat en el escritorio

Muestra el chat en una pequeña ventana transparente, siempre visible, encima del juego. Solo la ves tú: muy útil si emites con un solo monitor.

1. Haz clic en **Abrir ventana** (o haz clic derecho en el icono de la bandeja y elige **Abrir chat de escritorio**)
2. Mientras está desbloqueada, arrastra la barra superior para mover la ventana y arrastra sus bordes para cambiar su tamaño
3. Haz clic en **🔒 Bloquear** cuando esté en su sitio. A partir de ahí, los clics atraviesan la ventana y llegan al juego. Para desbloquearla, pasa el ratón por encima de la ventana y haz clic en el 🔓 que aparece en la esquina superior derecha, o haz clic en **🔓 Desbloquear** en la página de ajustes

**Restablecer posición** devuelve la ventana a su posición predeterminada.

| Ajuste | Descripción |
|---------|-------------|
| **Estilo** | **Solo nombre y mensaje** (predeterminado) o **Igual que el chat de OBS** |
| **Tamaño de fuente** | 12–32 px, predeterminado 16. Solo para **Solo nombre y mensaje** |
| **Opacidad del texto** | 10–100 %, predeterminado 100 % |
| **Opacidad del fondo** | 0–100 %, predeterminado 40 % |
| **Desvanecer mensajes** | 0–120 segundos, predeterminado 0. Cada mensaje se desvanece al cabo de estos segundos, y no se puede volver a los mensajes desvanecidos desplazándose. Con 0 no se desvanece nada y, mientras está desbloqueada, puedes desplazarte hacia arriba hasta mensajes anteriores (hasta el Máximo de mensajes) |
| **Ocultar en la captura del directo** | Activado de forma predeterminada. La Captura de pantalla de OBS no recoge la ventana, así que los espectadores no ven el chat dos veces. Tampoco aparece en capturas de pantalla ni al compartir pantalla en Discord |

:::tip
Si no ves esta ventana con el juego en pantalla completa, cambia el juego al modo de ventana sin bordes o en ventana. Usa **Enviar mensaje de prueba** para comprobar la posición y el tamaño de la ventana.
:::

{/* TODO: 截圖 — 桌面聊天室視窗 */}

## Pestaña Apariencia

### Vista previa

La parte superior de la pestaña muestra una vista previa en directo. El selector de color junto a **Vista previa** solo cambia el fondo de la vista previa. Las casillas **Avatar**, **Insignias** e **Icono de la plataforma** solo cambian lo que muestra la vista previa.

### Ajustes de apariencia

**Restablecer valores** restaura la apariencia predeterminada (o la apariencia del tema aplicado, si hay uno).

- **Dirección de entrada**: **De arriba abajo**, **De abajo arriba** (predeterminado), **De izquierda a derecha**, **De derecha a izquierda**
- **Texto**: se configura por separado para **Nombre** y **Mensaje**:
  - Fuente, tamaño (px) y color. Para el nombre puedes elegir **Color original** (el color del espectador en la plataforma) o **Color personalizado**
  - **Contorno**: color, **Opacidad**, **Grosor**
  - **Sombra**: color, **Opacidad**, **Desenfoque**, desplazamiento X / Y
- **Tamaño de los iconos**: escala de **Icono de la plataforma**, **Avatar** e **Insignias** (0,1–5x)
- **Color**: **Color de fondo** de cada mensaje

### CSS personalizado

Despliega **CSS personalizado** para editar directamente el CSS del overlay. Usa **Gestionar recursos** para subir imágenes a las que hacer referencia en el CSS. **Restablecer valores** restaura el CSS predeterminado. Consulta también [Temas](./themes).

:::tip
Si tu CSS personalizado define uno de los campos de apariencia con `!important`, ese campo aparece atenuado en los ajustes de apariencia ("Este ajuste está controlado por CSS personalizado"). Cuando hay un tema aplicado, el CSS es de solo lectura: restáuralo antes de editar.
:::

## Límites de la versión de prueba

:::info
- Activar la traducción automática añade una marca de agua al overlay del chat
- **CSS personalizado** solo está disponible en la versión completa
- La **Ventana de chat en el escritorio** solo está disponible en la versión completa

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::
