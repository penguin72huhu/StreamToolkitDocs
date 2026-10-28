---
sidebar_position: 7
---

# Barra de donaciones

Muestra en el stream una barra de progreso hacia un objetivo de donaciones. Las donaciones de las plataformas que elijas se suman al total automáticamente.

## URL de origen para OBS

```
http://127.0.0.1:7272/donate
```

Copia la URL de la parte superior de la página de ajustes de la **Barra de donaciones** y añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

Usa el interruptor junto a **Barra de donaciones** en la barra lateral izquierda para mostrar u ocultar la barra en OBS. Si está desactivado, la barra permanece oculta.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Moneda

La barra usa la **Moneda de las donaciones** definida en la página **Ajustes**. Las donaciones en otras monedas se convierten a esta moneda antes de sumarse. Si la moneda de una donación no se puede convertir, no se suma a la barra (Alertas de donaciones y Panel de donaciones la siguen mostrando en su moneda original).

## Pestaña Ajustes

### Plataforma de integración

Marca las plataformas cuyas donaciones deben contar para la barra:

- **Twitch**: Bits y suscripciones
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Un punto verde indica que la plataforma está conectada; si no, la fila muestra **(sin conexión)**. Estas casillas solo deciden qué cuenta la barra. No afectan a Alertas de donaciones ni a Panel de donaciones, que tienen sus propias listas de plataformas.

- **YouTube**: si el chat en directo no está vinculado, la fila muestra **URL del chat no conectada** con dos botones: **Conexión automática** (requiere iniciar sesión con Google) e **Introducir manualmente** (te lleva al campo de la URL del chat en Ajustes). Consulta [Ajustes de YouTube](../platforms/youtube-settings).
- **YouTube ⚙️**: elige qué **Eventos contados** se suman a la barra: **Super Chat**, **Super Sticker**, **Nuevo miembro**, **Renovación de membresía**, **Membresía regalada**, **Gemas**. **Gemas** requiere iniciar sesión con Google.
- Si hay algún evento de membresía marcado pero no se han definido precios de membresía, aparece **⚠ Sin precios de membresía**. Haz clic en él para ir a Ajustes e introducir los precios de los niveles en la **Configuración de conversión** de YouTube.
- Cuánto valen los Bits y las suscripciones de Twitch se define en Ajustes → Twitch → **Configuración de conversión**. Consulta [Ajustes de Twitch](../platforms/twitch).
- Para conectar PayPal, Stripe, O'Pay o ECPay, consulta [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) y [ECPay](../payments/ecpay).

### Progreso actual

Muestra el total actual, el objetivo y el porcentaje.

| Campo | Descripción |
|-------|-------------|
| **Título** | Opcional. Se muestra encima de la barra. |
| **Cantidad objetivo** | La cantidad que quieres alcanzar, en tu moneda de donaciones. |
| **Añadir manualmente** | Introduce una cantidad y haz clic en **Añadir** (o pulsa Intro) para sumarla al total. |
| **Poner a cero** | Vuelve a poner el total actual a cero. Primero aparece una confirmación. No se puede deshacer. |

## Pestaña Apariencia

### Vista previa

La vista previa muestra la barra con cantidades de ejemplo. Usa el selector de color junto a **Vista previa** para cambiar el fondo de la vista previa. Marca **Vista previa de objetivo alcanzado** para ver la barra en su estado completado.

### Fuente y color

Haz clic en **Restablecer valores** para restaurar la apariencia predeterminada.

- **Fuente**: define la fuente, el color y el tamaño (8–72 px) de **Título**, **Cantidad** y **Porcentaje**.
- **Color**: define **Fondo**, **Barra de objetivo** (color de relleno) y **Barra de objetivo alcanzado** (color de relleno una vez alcanzado el objetivo).

### CSS personalizado

Despliega **CSS personalizado** para editar el CSS de la barra. **Restablecer valores** restaura el CSS predeterminado y **Gestionar recursos** abre el gestor de recursos para las imágenes que quieras usar en tu CSS. Aquí también se pueden aplicar temas de Steam Workshop. Mientras haya un tema aplicado, el CSS es de solo lectura hasta que lo restaures. Consulta [Temas](./themes).

:::info Versión de prueba
CSS personalizado solo está disponible en la versión completa. Las pasarelas de pago reales (PayPal / Stripe / O'Pay / ECPay), así como los eventos de membresía y las Gemas de YouTube, no se pueden usar en la versión de prueba, y el overlay muestra una marca de agua. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: El total ha subido después de enviar una alerta de prueba.**
**Probar notificación** en la página Ajustes cuenta como una donación real, así que se suma a la barra (si esa plataforma está marcada). Después de probar, haz clic en **Poner a cero** para volver a poner el total a cero.
