---
sidebar_position: 8.1
---

# Alertas de nuevos seguidores

Muestra una alerta emergente en el stream cuando alguien te sigue en Twitch o se suscribe a tu canal de YouTube.

## URL de origen para OBS

```
http://127.0.0.1:7272/fan-alert
```

Copia la URL de la parte superior de la página de ajustes de **Alertas de nuevos seguidores** y añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

:::warning
Las alertas reproducen sonido. Marca **Controlar audio vía OBS** en las propiedades de la fuente de navegador; si no, el sonido no se oirá en el stream.
:::

Usa el interruptor junto a **Alertas de nuevos seguidores** en la barra lateral izquierda para activar o desactivar las alertas. Mientras está desactivado, los nuevos seguidores no se muestran ni se registran, y los botones de prueba tampoco funcionan.

Cuando llegan varios seguidores seguidos, las alertas se ponen en cola y se muestran una tras otra. Este overlay tiene su propia cola, así que nunca espera detrás de [Alertas de donaciones](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Pestaña Ajustes

### Plataforma de integración

Marca las plataformas que deben activar una alerta: **Twitch** y **YouTube** (ambas marcadas de forma predeterminada). Un punto verde indica que la plataforma está conectada; si no, la fila muestra **Sin autorizar**.

- **Twitch**: cada nuevo seguidor activa una alerta al momento. Conecta Twitch primero: [Ajustes de Twitch](../platforms/twitch).
- **YouTube**: nuevos suscriptores. Inicia sesión con Google primero: [Ajustes de YouTube](../platforms/youtube-settings).

Cómo se detectan los suscriptores de YouTube:

- YouTube no tiene un evento en directo de "nuevo suscriptor", así que la aplicación pide a YouTube tus suscriptores más recientes cada 1,5 minutos.
- Solo comprueba mientras estás en directo y tu chat en directo de YouTube está conectado a esa emisión. No comprueba en la sala de espera ni después de que termine el stream.
- No se anuncian las personas que se suscribieron antes de empezar el stream (más de unos 5 minutos antes de que empezara la comprobación).
- Como indica el aviso de la página, **YouTube solo avisa de quienes tienen sus suscripciones públicas, y puede tardar de minutos a horas.**

### Ajustes

| Campo | Descripción |
|-------|-------------|
| **Duración** | Cuánto tiempo permanece cada alerta en pantalla, en segundos (1–60). Predeterminado: 5. |
| **Avisar a la misma persona como máximo una vez cada 24 horas** | Desactivado de forma predeterminada. Si está activado, cuando el mismo espectador vuelve a seguirte en menos de 24 horas (por ejemplo, deja de seguirte y vuelve a seguirte), no se muestra ni se registra. |

### Probar las alertas

Haz clic en **Probar alerta (Twitch)** o **Probar alerta (YouTube)** para enviar una alerta de ejemplo a OBS. Las alertas de prueba no se añaden al historial.

Si Alertas de nuevos seguidores está desactivado, la prueba no se reproduce y la página muestra **Primero activa Alertas de nuevos seguidores en los accesos rápidos**.

## Pestaña Apariencia

### Vista previa

La vista previa usa la misma página que la fuente de OBS. Usa el selector de color junto a **Vista previa** para cambiar el fondo de la vista previa, y haz clic en **▶ Repetir animación** para volver a reproducir la animación de la alerta.

### Estilo unificado / Independiente por plataforma

- **Estilo unificado**: Twitch y YouTube usan el mismo estilo de alerta.
- **Independiente por plataforma**: cada plataforma tiene su propio estilo. Elige **Twitch** o **YouTube** con los botones de debajo y edita sus ajustes. La primera vez que cambias, las plataformas que no has personalizado copian el estilo unificado actual, cada una con su propio color de barra de cuenta atrás.

**Restablecer valores** restaura el estilo predeterminado del estilo que estás editando.

### Imagen

- **Elegir imagen**: elige una imagen del gestor de recursos. Si no hay ninguna, se muestra un emoji de corazón. **Borrar** quita la imagen.
- **Tamaño de la imagen**: 1–400 px.
- **Posición de la imagen**: **Izquierda**, **Derecha**, **Arriba** o **Abajo**.

### Sonido

Elige un sonido integrado: **Ninguno**, **Campanilla** (predeterminado), **Moneda**, **Campana**, **Pop**, **Fanfarria**. Haz clic en **▶** para escucharlo. Haz clic en **Elegir sonido** para usar tu propio archivo de sonido del gestor de recursos.

### Texto personalizado

Escribe la línea que se muestra en la alerta. Usa `{name}` para el nombre del seguidor y `{platform}` para el nombre de la plataforma. Déjalo vacío para usar el texto predeterminado: `¡Bienvenido, {name}! Gracias por seguirnos`

### Texto y color

- **Texto**: define la fuente, el tamaño y el color de **Texto personalizado** y **Nombre del seguidor**.
- **Color**: **Fondo**, **Sombra** y **Barra de cuenta atrás**.

### CSS personalizado

Despliega **CSS personalizado** para editar el CSS del estilo que estás editando (el unificado o el de la plataforma seleccionada). **Restablecer valores** restaura el CSS de la plantilla y **Gestionar recursos** abre el gestor de recursos. Aquí también se pueden aplicar temas de Steam Workshop. Mientras haya un tema aplicado, el CSS es de solo lectura. Consulta [Temas](./themes).

## Pestaña Historial

Muestra los nuevos seguidores recientes de ambas plataformas, del más reciente al más antiguo: plataforma, nombre y hora. El historial solo se muestra en la aplicación, nunca en el overlay.

- Se conservan hasta 100 seguidores, y las entradas de más de 30 días se eliminan automáticamente.
- Haz clic en **Borrar** para vaciar la lista.

:::info Versión de prueba
CSS personalizado solo está disponible en la versión completa, y la alerta muestra una marca de agua en OBS. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: ¿No hay sonido en el stream?**
Comprueba que **Controlar audio vía OBS** está marcado en las propiedades de la fuente de navegador y que la fuente no está silenciada en el mezclador de OBS. Comprueba también que **Sonido** no está en **Ninguno**.

**Q: Un suscriptor de YouTube no ha recibido alerta.**
Solo se notifican las suscripciones públicas, y YouTube puede tardar de minutos a horas en notificarlas. Además, la aplicación solo comprueba mientras estás en directo con el chat en directo de YouTube conectado.

**Q: He añadido la fuente de OBS tarde. ¿Repetirá las alertas anteriores?**
No. Una fuente recién abierta solo muestra las alertas que llegan después de conectarse. Los seguidores anteriores siguen en la pestaña **Historial**.
