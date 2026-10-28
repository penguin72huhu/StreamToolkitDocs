---
sidebar_position: 8.1
---

# Alertas de nuevos seguidores

Muestra una alerta en la transmisión cuando alguien te sigue en Twitch o se suscribe a tu canal de YouTube.

## URL de la fuente de OBS

```
http://127.0.0.1:7272/fan-alert
```

Copia la URL desde la parte superior de la página **Configuración de Alertas de nuevos seguidores** y agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

:::warning
Las alertas reproducen un sonido. Marca **Controlar audio vía OBS** en las propiedades de la fuente de navegador; de lo contrario, el sonido no se escuchará en la transmisión.
:::

Usa el interruptor junto a **Alertas de nuevos seguidores** en la barra lateral izquierda para activar o desactivar las alertas. Mientras esté desactivado, los nuevos seguidores no se muestran ni se registran, y los botones de prueba tampoco funcionan.

Cuando llegan varios seguidores casi al mismo tiempo, las alertas se ponen en cola y se muestran una tras otra. Este overlay tiene su propia cola, así que nunca espera detrás de [Alertas de donaciones](./donate-alert).

{/* TODO: 截圖 — 新粉絲通知設定頁 */}

## Pestaña Configuración

### Plataforma de integración

Marca las plataformas que deben activar una alerta: **Twitch** y **YouTube** (ambas marcadas de forma predeterminada). Un punto verde significa que la plataforma está conectada; de lo contrario, la fila muestra **Sin autorizar**.

- **Twitch**: cada nuevo seguidor activa una alerta de inmediato. Conecta Twitch primero: [Configuración de Twitch](../platforms/twitch).
- **YouTube**: nuevos suscriptores. Inicia sesión con Google primero: [Configuración de YouTube](../platforms/youtube-settings).

Cómo se detectan los suscriptores de YouTube:

- YouTube no tiene un evento en vivo de "nuevo suscriptor", así que la app le pide a YouTube tus suscriptores más recientes cada 1.5 minutos.
- Solo comprueba mientras estás en directo y tu chat en vivo de YouTube está conectado a esa transmisión. No comprueba en la sala de espera ni después de que termina la transmisión.
- Las personas que se suscribieron antes de que empezara la transmisión (más de unos 5 minutos antes de que comenzara la comprobación) no se anuncian.
- Como dice el aviso de la página, **YouTube solo avisa de quienes tienen sus suscripciones públicas, y puede tardar de minutos a horas.**

### Configuración

| Campo | Descripción |
|-------|-------------|
| **Tiempo de visualización** | Cuánto tiempo permanece cada alerta en pantalla, en segundos (1–60). Predeterminado: 5. |
| **Avisar a la misma persona como máximo una vez cada 24 horas** | Desactivado de forma predeterminada. Cuando está activado, si el mismo espectador vuelve a seguirte en menos de 24 horas (por ejemplo, deja de seguirte y te sigue de nuevo), no se muestra ni se registra. |

### Probar alertas

Haz clic en **Probar alerta (Twitch)** o **Probar alerta (YouTube)** para enviar una alerta de ejemplo a OBS. Las alertas de prueba no se agregan al historial.

Si Alertas de nuevos seguidores está desactivado, la prueba no se reproduce y la página muestra **Primero activa Alertas de nuevos seguidores en los accesos rápidos**.

## Pestaña Apariencia

### Vista previa

La vista previa usa la misma página que la fuente de OBS. Usa el selector de color junto a **Vista previa** para cambiar el fondo de la vista previa y haz clic en **▶ Repetir animación** para reproducir de nuevo la animación de la alerta.

### Estilo unificado / Independiente por plataforma

- **Estilo unificado**: Twitch y YouTube usan el mismo estilo de alerta.
- **Independiente por plataforma**: cada plataforma tiene su propio estilo. Elige **Twitch** o **YouTube** con los botones de abajo y edita su configuración. La primera vez que cambies, las plataformas que no hayas personalizado copian el estilo unificado actual, cada una con su propio color de barra de cuenta regresiva.

**Restaurar predeterminado** restablece el estilo predeterminado del estilo que estás editando.

### Imagen

- **Elegir imagen**: elige una imagen del administrador de recursos. Si no eliges ninguna, se muestra un emoji de corazón. **Borrar** quita la imagen.
- **Tamaño de la imagen**: 1–400 px.
- **Posición de la imagen**: **A la izquierda**, **A la derecha**, **Arriba** o **Abajo**.

### Sonido

Elige un sonido integrado: **Ninguno**, **Campanilla** (predeterminado), **Moneda**, **Campana**, **Pop**, **Fanfarria**. Haz clic en **▶** para escucharlo. Haz clic en **Elegir sonido** para usar tu propio archivo de sonido desde el administrador de recursos.

### Texto personalizado

Escribe la línea que se muestra en la alerta. Usa `{name}` para el nombre del seguidor y `{platform}` para el nombre de la plataforma. Déjala vacía para usar el texto predeterminado: `¡Bienvenido, {name}! Gracias por seguirnos`

### Texto y color

- **Texto**: configura la fuente, el tamaño y el color de **Texto personalizado** y **Nombre del seguidor**.
- **Color**: **Fondo**, **Sombra** y **Barra de cuenta regresiva**.

### CSS personalizado

Expande **CSS personalizado** para editar el CSS del estilo que estás editando (el unificado o el de la plataforma seleccionada). **Restaurar predeterminado** restablece el CSS de la plantilla y **Administrar recursos** abre el administrador de recursos. Aquí también se pueden aplicar temas de Steam Workshop. Mientras haya un tema aplicado, el CSS es de solo lectura. Consulta [Temas](./themes).

## Pestaña Historial

Muestra los nuevos seguidores recientes de ambas plataformas, del más reciente al más antiguo: plataforma, nombre y hora. El historial solo se muestra en la app, nunca en el overlay.

- Se guardan hasta 100 seguidores, y las entradas de más de 30 días se eliminan automáticamente.
- Haz clic en **Borrar** para vaciar la lista.

:::info Versión de prueba
El CSS personalizado solo está disponible en la versión completa, y la alerta muestra una marca de agua en OBS. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: ¿No hay sonido en la transmisión?**
Comprueba que **Controlar audio vía OBS** esté marcado en las propiedades de la fuente de navegador y que la fuente no esté silenciada en el mezclador de OBS. Comprueba también que **Sonido** no esté configurado en **Ninguno**.

**Q: Un suscriptor de YouTube no recibió alerta.**
Solo se informan las suscripciones públicas, y YouTube puede tardar de minutos a horas en informarlas. Además, la app solo comprueba mientras estás en directo con el chat en vivo de YouTube conectado.

**Q: Agregué la fuente de OBS tarde. ¿Se repetirán las alertas anteriores?**
No. Una fuente recién abierta solo muestra las alertas que llegan después de conectarse. Los seguidores anteriores siguen en la pestaña **Historial**.
