---
sidebar_position: 8
---

# Alertas de donaciones

Muestra una alerta emergente con imagen, sonido, nombre del donante, cantidad y mensaje cuando alguien hace una donación.

## URL de origen para OBS

```
http://127.0.0.1:7272/donate-alert
```

Copia la URL de la parte superior de la página de ajustes de **Alertas de donaciones** y añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

:::warning
Las alertas reproducen sonido. Marca **Controlar audio vía OBS** en las propiedades de la fuente de navegador; si no, el sonido no se oirá en el stream.
:::

Usa el interruptor junto a **Alertas de donaciones** en la barra lateral izquierda para activar o desactivar las alertas. Mientras está desactivado, no se muestra ninguna alerta (tampoco las de prueba), pero las donaciones se siguen registrando en el [Panel de donaciones](./sponsors).

Cuando llegan varias donaciones seguidas, las alertas se ponen en cola y se muestran una tras otra.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Pestaña Ajustes

### Plataforma de integración

Marca las plataformas que deben activar una alerta: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Un punto verde indica que la plataforma está conectada; si no, la fila muestra **(sin conexión)**. Estas casillas solo afectan a las alertas, no a la Barra de donaciones ni al Panel de donaciones.

**Twitch ⚙️** (aparece cuando Twitch está conectado y marcado):

1. Elige **Contar Bits y suscripciones**, **Contar solo Bits** o **Contar solo suscripciones**
2. **Contar resuscripciones**: si las resuscripciones activan una alerta (aparece cuando se cuentan las suscripciones)
3. **Por debajo de [N] Bits no se contarán**: márcalo e introduce un mínimo para que los cheers más pequeños no activen una alerta (aparece cuando se cuentan los Bits)
4. Haz clic en **Guardar**

**YouTube ⚙️**:

- **Mostrar el nombre de los espectadores en vez del @alias**: solo está disponible después de iniciar sesión con Google.
- **Eventos contados**: **Super Chat**, **Super Sticker**, **Nuevo miembro**, **Renovación de membresía**, **Membresía regalada**, **Gemas**. **Gemas** requiere iniciar sesión con Google.

Si el chat en directo de YouTube no está vinculado, la fila muestra **URL del chat no conectada** con **Conexión automática** (requiere iniciar sesión con Google) e **Introducir manualmente** (te lleva al campo de la URL del chat en Ajustes). Si hay algún evento de membresía marcado pero no se han definido precios de membresía, haz clic en **⚠ Sin precios de membresía** para ir a definirlos. Consulta [Ajustes de YouTube](../platforms/youtube-settings).

Para conectar PayPal, Stripe, O'Pay o ECPay, consulta [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) y [ECPay](../payments/ecpay).

### Ajustes

| Campo | Descripción |
|-------|-------------|
| **Convertir automáticamente a tu moneda** | Activado de forma predeterminada. Muestra la cantidad convertida a la **Moneda de las donaciones** definida en la página Ajustes. |
| **Duración** | Cuánto tiempo permanece cada alerta en pantalla, en segundos. Predeterminado: 6. |

## Pestaña Apariencia

### Vista previa

La vista previa usa la misma página que la fuente de OBS. Usa el selector de color junto a **Vista previa** para cambiar el fondo de la vista previa, y haz clic en **▶ Repetir animación** para volver a reproducir la animación de la alerta.

### Estilo unificado / Independiente por plataforma

- **Estilo unificado**: todas las plataformas usan el mismo estilo de alerta.
- **Independiente por plataforma**: cada plataforma tiene su propio estilo. Elige la plataforma con los botones de debajo (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) y edita sus ajustes. La primera vez que cambias, las plataformas que no has personalizado copian el estilo unificado actual, cada una con su propio color de barra de cuenta atrás.

**Restablecer valores** restaura el estilo predeterminado del estilo que estás editando.

### Imagen

- **Elegir imagen**: elige una imagen del gestor de recursos. Si no hay ninguna, se muestra un emoji de corazón. **Borrar** quita la imagen.
- **Tamaño de la imagen**: 1–400 px.
- **Posición de la imagen**: **Izquierda**, **Derecha**, **Arriba** o **Abajo**.

### Sonido

Elige un sonido integrado: **Ninguno**, **Campanilla** (predeterminado), **Moneda**, **Campana**, **Pop**, **Fanfarria**. Haz clic en **▶** para escucharlo. Haz clic en **Elegir sonido** para usar tu propio archivo de sonido del gestor de recursos.

### Visualización del texto

- **Predeterminado**: la cantidad, el nombre del donante y el mensaje se muestran en líneas separadas.
- **Texto personalizado**: escribe tu propia línea. Usa `{name}` para el nombre del donante y `{amount}` para la cantidad, p. ej. `¡Gracias, {name}, por donar {amount}!`

### Texto y color

- **Texto**: define la fuente, el tamaño y el color de **Cantidad**, **Nombre del donante** y **Mensaje** (además de **Texto personalizado** en el modo Texto personalizado).
- **Color**: **Fondo**, **Sombra** y **Barra de cuenta atrás**.

### CSS personalizado

Despliega **CSS personalizado** para editar el CSS del estilo que estás editando (el unificado o el de la plataforma seleccionada). **Restablecer valores** restaura el CSS de la plantilla y **Gestionar recursos** abre el gestor de recursos. Aquí también se pueden aplicar temas de Steam Workshop. Mientras haya un tema aplicado, el CSS es de solo lectura. Consulta [Temas](./themes).

## Probar las alertas

En la página **Ajustes**, haz clic en **Probar notificación** junto a **Integración de plataformas de donación**:

1. Rellena **Nombre de prueba**, **Mensaje de prueba** y **Cantidad de prueba**, y elige una **Plataforma de prueba**
2. Haz clic en **Enviar notificación de prueba**

La sección **Prueba de Super Chat de YouTube** te permite introducir una **Cadena de la cantidad** sin procesar (p. ej. `$5.00`, `¥500`, `NT$150`) y hacer clic en **Enviar Super Chat de prueba** para probar el análisis de la cantidad y la conversión de moneda.

:::note
Una alerta de prueba se trata como una donación real: también se suma a la [Barra de donaciones](./donate) y al [Panel de donaciones](./sponsors) si esas plataformas están marcadas allí.
:::

:::info Versión de prueba
CSS personalizado solo está disponible en la versión completa. Las pasarelas de pago reales (PayPal / Stripe / O'Pay / ECPay), así como los eventos de membresía y las Gemas de YouTube, no se pueden usar en la versión de prueba, y la alerta muestra una marca de agua en OBS. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: ¿No hay sonido en el stream?**
Comprueba que **Controlar audio vía OBS** está marcado en las propiedades de la fuente de navegador y que la fuente no está silenciada en el mezclador de OBS. Comprueba también que **Sonido** no está en **Ninguno**.

**Q: He añadido la fuente de OBS tarde. ¿Repetirá las alertas anteriores?**
No. Una fuente recién abierta solo muestra las alertas que llegan después de conectarse.
