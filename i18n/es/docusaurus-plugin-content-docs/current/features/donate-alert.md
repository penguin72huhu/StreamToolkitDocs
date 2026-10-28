---
sidebar_position: 8
---

# Alertas de donaciones

Muestra una alerta con imagen, sonido, nombre del donante, monto y mensaje cuando alguien hace una donación.

## URL de la fuente de OBS

```
http://127.0.0.1:7272/donate-alert
```

Copia la URL desde la parte superior de la página **Configuración de Alertas de donaciones** y agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

:::warning
Las alertas reproducen un sonido. Marca **Controlar audio vía OBS** en las propiedades de la fuente de navegador; de lo contrario, el sonido no se escuchará en la transmisión.
:::

Usa el interruptor junto a **Alertas de donaciones** en la barra lateral izquierda para activar o desactivar las alertas. Mientras esté desactivado no se muestra ninguna alerta (incluidas las de prueba), pero las donaciones se siguen registrando en el [Panel de donaciones](./sponsors).

Cuando llegan varias donaciones casi al mismo tiempo, las alertas se ponen en cola y se muestran una tras otra.

{/* TODO: 截圖 — 贊助通知設定頁 */}

## Pestaña Configuración

### Plataforma de integración

Marca las plataformas que deben activar una alerta: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Un punto verde significa que la plataforma está conectada; de lo contrario, la fila muestra **(sin conexión)**. Estas casillas solo afectan a las alertas, no a la Barra de donaciones ni al Panel de donaciones.

**Twitch ⚙️** (se muestra cuando Twitch está conectado y marcado):

1. Elige **Contar Bits y suscripciones**, **Contar solo Bits** o **Contar solo suscripciones**
2. **Contar resuscripciones**: si las resuscripciones activan una alerta (se muestra cuando se cuentan las suscripciones)
3. **Menos de [N] Bits no se contabilizan**: márcalo e ingresa un mínimo para que los cheers más pequeños no activen una alerta (se muestra cuando se cuentan los Bits)
4. Haz clic en **Guardar**

**YouTube ⚙️**:

- **Mostrar el nombre de los espectadores en vez del @alias**: solo está disponible una vez que inicias sesión con Google.
- **Eventos contados**: **Super Chat**, **Super Sticker**, **Nuevo miembro**, **Renovación de membresía**, **Membresía regalada**, **Gemas**. **Gemas** requiere iniciar sesión con Google.

Si el chat en vivo de YouTube no está vinculado, la fila muestra **No hay URL del chat conectada** con **Conexión automática** (requiere iniciar sesión con Google) e **Introducir manualmente** (te lleva al campo de la URL del chat en Configuración). Si hay un evento de membresía marcado pero no se han configurado los precios de membresía, haz clic en **⚠ Sin precios de membresía** para configurarlos. Consulta [Configuración de YouTube](../platforms/youtube-settings).

Para conectar PayPal, Stripe, O'Pay o ECPay, consulta [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) y [ECPay](../payments/ecpay).

### Configuración

| Campo | Descripción |
|-------|-------------|
| **Convertir automáticamente a tu moneda** | Activado de forma predeterminada. Muestra el monto convertido a la **Moneda de las donaciones** configurada en la página Configuración. |
| **Tiempo de visualización** | Cuánto tiempo permanece cada alerta en pantalla, en segundos. Predeterminado: 6. |

## Pestaña Apariencia

### Vista previa

La vista previa usa la misma página que la fuente de OBS. Usa el selector de color junto a **Vista previa** para cambiar el fondo de la vista previa y haz clic en **▶ Repetir animación** para reproducir de nuevo la animación de la alerta.

### Estilo unificado / Independiente por plataforma

- **Estilo unificado**: todas las plataformas usan el mismo estilo de alerta.
- **Independiente por plataforma**: cada plataforma tiene su propio estilo. Elige la plataforma con los botones de abajo (**Twitch**, **YouTube**, **O'Pay**, **ECPay**, **PayPal**, **Stripe**) y edita su configuración. La primera vez que cambies, las plataformas que no hayas personalizado copian el estilo unificado actual, cada una con su propio color de barra de cuenta regresiva.

**Restaurar predeterminado** restablece el estilo predeterminado del estilo que estás editando.

### Imagen

- **Elegir imagen**: elige una imagen del administrador de recursos. Si no eliges ninguna, se muestra un emoji de corazón. **Borrar** quita la imagen.
- **Tamaño de la imagen**: 1–400 px.
- **Posición de la imagen**: **A la izquierda**, **A la derecha**, **Arriba** o **Abajo**.

### Sonido

Elige un sonido integrado: **Ninguno**, **Campanilla** (predeterminado), **Moneda**, **Campana**, **Pop**, **Fanfarria**. Haz clic en **▶** para escucharlo. Haz clic en **Elegir sonido** para usar tu propio archivo de sonido desde el administrador de recursos.

### Visualización del texto

- **Predeterminado**: el monto, el nombre del donante y el mensaje se muestran en líneas separadas.
- **Texto personalizado**: escribe tu propia línea. Usa `{name}` para el nombre del donante y `{amount}` para el monto, p. ej. `¡Gracias {name} por donar {amount}!`

### Texto y color

- **Texto**: configura la fuente, el tamaño y el color de **Monto**, **Nombre del donante** y **Mensaje** (además de **Texto personalizado** en el modo Texto personalizado).
- **Color**: **Fondo**, **Sombra** y **Barra de cuenta regresiva**.

### CSS personalizado

Expande **CSS personalizado** para editar el CSS del estilo que estás editando (el unificado o el de la plataforma seleccionada). **Restaurar predeterminado** restablece el CSS de la plantilla y **Administrar recursos** abre el administrador de recursos. Aquí también se pueden aplicar temas de Steam Workshop. Mientras haya un tema aplicado, el CSS es de solo lectura. Consulta [Temas](./themes).

## Probar alertas

En la página **Configuración**, haz clic en **Alerta de prueba** junto a **Integración de plataformas de donaciones**:

1. Completa **Nombre de prueba**, **Mensaje de prueba** y **Monto de prueba**, y elige una **Plataforma de prueba**
2. Haz clic en **Enviar alerta de prueba**

La sección **Prueba de Super Chat de YouTube** te permite ingresar una **Cadena de monto** sin procesar (p. ej. `$5.00`, `¥500`, `NT$150`) y hacer clic en **Enviar Super Chat de prueba** para probar el análisis del monto y la conversión de moneda.

:::note
Una alerta de prueba se trata como una donación real: también se suma a la [Barra de donaciones](./donate) y al [Panel de donaciones](./sponsors) si esas plataformas están marcadas allí.
:::

:::info Versión de prueba
El CSS personalizado solo está disponible en la versión completa. Las pasarelas de pago reales (PayPal / Stripe / O'Pay / ECPay), los eventos de membresía de YouTube y las Gemas no se pueden usar en la versión de prueba, y la alerta muestra una marca de agua en OBS. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: ¿No hay sonido en la transmisión?**
Comprueba que **Controlar audio vía OBS** esté marcado en las propiedades de la fuente de navegador y que la fuente no esté silenciada en el mezclador de OBS. Comprueba también que **Sonido** no esté configurado en **Ninguno**.

**Q: Agregué la fuente de OBS tarde. ¿Se repetirán las alertas anteriores?**
No. Una fuente recién abierta solo muestra las alertas que llegan después de conectarse.
