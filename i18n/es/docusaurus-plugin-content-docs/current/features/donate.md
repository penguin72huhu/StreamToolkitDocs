---
sidebar_position: 7
---

# Barra de donaciones

Muestra en la transmisión una barra de progreso hacia una meta de donaciones. Las donaciones de las plataformas que elijas se suman al total automáticamente.

## URL de la fuente de OBS

```
http://127.0.0.1:7272/donate
```

Copia la URL desde la parte superior de la página **Configuración de Barra de donaciones** y agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

Usa el interruptor junto a **Barra de donaciones** en la barra lateral izquierda para mostrar u ocultar la barra en OBS. Cuando está desactivado, la barra se oculta.

{/* TODO: 截圖 — 贊助條設定頁 */}

## Moneda

La barra usa la **Moneda de las donaciones** configurada en la página **Configuración**. Las donaciones en otras monedas se convierten a esta moneda antes de sumarse. Si la moneda de una donación no se puede convertir, no se suma a la barra (Alertas de donaciones y el Panel de donaciones la siguen mostrando en su moneda original).

## Pestaña Configuración

### Plataforma de integración

Marca las plataformas cuyas donaciones deben contar para la barra:

- **Twitch** — Bits y suscripciones
- **YouTube**
- **PayPal**
- **Stripe**
- **O'Pay**
- **ECPay**

Un punto verde significa que la plataforma está conectada; de lo contrario, la fila muestra **(sin conexión)**. Estas casillas solo deciden lo que cuenta la barra. No afectan a Alertas de donaciones ni al Panel de donaciones, que tienen sus propias listas de plataformas.

- **YouTube**: si el chat en vivo no está vinculado, la fila muestra **No hay URL del chat conectada** con dos botones: **Conexión automática** (requiere iniciar sesión con Google) e **Introducir manualmente** (te lleva al campo de la URL del chat en Configuración). Consulta [Configuración de YouTube](../platforms/youtube-settings).
- **YouTube ⚙️**: elige qué **Eventos contados** se suman a la barra: **Super Chat**, **Super Sticker**, **Nuevo miembro**, **Renovación de membresía**, **Membresía regalada**, **Gemas**. **Gemas** requiere iniciar sesión con Google.
- Si hay algún evento de membresía marcado pero no se han configurado los precios de membresía, aparece **⚠ Sin precios de membresía**. Haz clic en él para ir a Configuración e ingresar los precios de cada nivel en **Configuración de conversión** de YouTube.
- El valor de los Bits y las suscripciones de Twitch se configura en Configuración → Twitch → **Configuración de conversión**. Consulta [Configuración de Twitch](../platforms/twitch).
- Para conectar PayPal, Stripe, O'Pay o ECPay, consulta [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) y [ECPay](../payments/ecpay).

### Progreso actual

Muestra el total actual, la meta y el porcentaje.

| Campo | Descripción |
|-------|-------------|
| **Título** | Opcional. Se muestra encima de la barra. |
| **Monto de la meta** | El monto objetivo, en tu moneda de donaciones. |
| **Agregar manualmente** | Ingresa un monto y haz clic en **Agregar** (o presiona Enter) para sumarlo al total. |
| **Reiniciar a cero** | Devuelve el total actual a cero. Primero aparece una confirmación. No se puede deshacer. |

## Pestaña Apariencia

### Vista previa

La vista previa muestra la barra con montos de ejemplo. Usa el selector de color junto a **Vista previa** para cambiar el fondo de la vista previa. Marca **Vista previa: alcanzada** para ver la barra en su estado completado.

### Fuente y color

Haz clic en **Restaurar predeterminado** para restablecer la apariencia predeterminada.

- **Fuente**: configura la fuente, el color y el tamaño (8–72 px) de **Título**, **Monto** y **Porcentaje**.
- **Color**: configura **Fondo**, **Barra de meta** (color de relleno) y **Barra de meta alcanzada** (color de relleno una vez alcanzada la meta).

### CSS personalizado

Expande **CSS personalizado** para editar el CSS de la barra. **Restaurar predeterminado** restablece el CSS predeterminado y **Administrar recursos** abre el administrador de recursos para las imágenes que quieras usar en tu CSS. Aquí también se pueden aplicar temas de Steam Workshop. Mientras haya un tema aplicado, el CSS es de solo lectura hasta que lo restaures. Consulta [Temas](./themes).

:::info Versión de prueba
El CSS personalizado solo está disponible en la versión completa. Las pasarelas de pago reales (PayPal / Stripe / O'Pay / ECPay), los eventos de membresía de YouTube y las Gemas no se pueden usar en la versión de prueba, y el overlay muestra una marca de agua. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: El total subió después de enviar una alerta de prueba.**
La **Alerta de prueba** de la página Configuración cuenta como una donación real, así que se suma a la barra (si esa plataforma está marcada). Después de probar, haz clic en **Reiniciar a cero** para devolver el total a cero.
