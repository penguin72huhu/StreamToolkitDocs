---
sidebar_position: 9
---

# Panel de donaciones

Muestra en el stream una lista de las donaciones recientes: icono de la plataforma, nombre del donante, cantidad y mensaje.

## URL de origen para OBS

```
http://127.0.0.1:7272/sponsors
```

Copia la URL de la parte superior de la página de ajustes del **Panel de donaciones** y añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

Usa el interruptor junto a **Panel de donaciones** en la barra lateral izquierda para mostrar u ocultar el panel en OBS. Si está desactivado, el panel se desvanece. Las donaciones se siguen registrando mientras está desactivado.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Pestaña Ajustes

### Plataforma de integración

Marca las plataformas cuyas donaciones deben registrarse: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Un punto verde indica que la plataforma está conectada; si no, la fila muestra **(sin conexión)**. Estas casillas solo afectan al panel, no a la Barra de donaciones ni a Alertas de donaciones.

**Twitch ⚙️** (aparece cuando Twitch está conectado y marcado):

1. Elige **Contar Bits y suscripciones**, **Contar solo Bits** o **Contar solo suscripciones**
2. **Contar resuscripciones**: si se registran las resuscripciones (aparece cuando se cuentan las suscripciones)
3. **Por debajo de [N] Bits no se contarán**: márcalo e introduce un mínimo para que no se registren los cheers más pequeños (aparece cuando se cuentan los Bits)
4. Haz clic en **Guardar**

**YouTube ⚙️**:

- **Mostrar el nombre de los espectadores en vez del @alias**: solo está disponible después de iniciar sesión con Google.
- **Eventos contados**: **Super Chat**, **Super Sticker**, **Nuevo miembro**, **Renovación de membresía**, **Membresía regalada**, **Gemas**. **Gemas** requiere iniciar sesión con Google. Los regalos de Gemas se muestran con un icono de gema y el número de gemas en lugar de una cantidad de dinero.

Si el chat en directo de YouTube no está vinculado, la fila muestra **URL del chat no conectada** con **Conexión automática** (requiere iniciar sesión con Google) e **Introducir manualmente** (te lleva al campo de la URL del chat en Ajustes). Si hay algún evento de membresía marcado pero no se han definido precios de membresía, haz clic en **⚠ Sin precios de membresía** para ir a definirlos. Consulta [Ajustes de YouTube](../platforms/youtube-settings).

Para conectar PayPal, Stripe, O'Pay o ECPay, consulta [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) y [ECPay](../payments/ecpay).

### Ajustes

| Campo | Descripción |
|-------|-------------|
| **Convertir automáticamente a tu moneda** | Activado de forma predeterminada. Muestra las cantidades convertidas a la **Moneda de las donaciones** definida en la página Ajustes. |
| **Mostrar como máximo** | Cuántos registros se conservan (1–100). Predeterminado: 20. Cuando llega una donación nueva por encima de este límite, se elimina el registro más antiguo. |

## Pestaña Apariencia

### Vista previa

Usa el selector de color junto a **Vista previa** para cambiar el fondo de la vista previa. Haz clic en **Probar animación de nuevo registro** para reproducir la animación de entrada con un registro de ejemplo. El ejemplo no se guarda en el historial.

Haz clic en **Restablecer valores** para restaurar la apariencia predeterminada.

### Ajustes de visualización

- **Mostrar icono de la plataforma**: muestra el icono de la plataforma en cada registro.
- **Dirección de aparición**: **De arriba abajo** (predeterminado), **De abajo arriba**, **De izquierda a derecha** o **De derecha a izquierda**.

### Fuente

Define la fuente, el color y el tamaño (8–72 px) de **Título** (nombre del donante), **Cuerpo del texto** (mensaje) y **Cantidad**.

### Color de fondo

- **Predeterminado**: color de fondo de todos los registros.
- **+ Añadir intervalo**: añade un color con un intervalo de **Cantidad** (**Mínimo** ~ **Máximo**). Los registros cuya cantidad esté dentro del intervalo usan ese color en su lugar. Deja Mínimo o Máximo vacío para no poner límite por ese lado. Haz clic en **✕** para quitar un intervalo.

Si **Convertir automáticamente a tu moneda** está activado, el intervalo se compara con la cantidad convertida.

### CSS personalizado

Despliega **CSS personalizado** para editar el CSS del panel. **Restablecer valores** restaura el CSS predeterminado y **Gestionar recursos** abre el gestor de recursos. Aquí también se pueden aplicar temas de Steam Workshop. Mientras haya un tema aplicado, el CSS es de solo lectura. Consulta [Temas](./themes).

## Pestaña Historial

### Añadir manualmente (para pruebas)

Elige una plataforma, introduce **Nombre**, **Cantidad** y, si quieres, **Mensaje (opcional)**, y haz clic en **Añadir**. El registro solo se añade si esa plataforma está marcada en **Plataforma de integración**. La cantidad se interpreta en tu moneda de donaciones.

### Historial

Muestra los registros guardados con el número de registros.

- Haz clic en **🗑** y luego en **Confirmar eliminación** para eliminar un registro.
- Haz clic en **Vaciar** para eliminar todos los registros. Primero aparece una confirmación. No se puede deshacer.

:::info Versión de prueba
CSS personalizado solo está disponible en la versión completa. Las pasarelas de pago reales (PayPal / Stripe / O'Pay / ECPay), así como los eventos de membresía y las Gemas de YouTube, no se pueden usar en la versión de prueba, y el panel muestra una marca de agua en OBS. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: Las alertas de prueba aparecen en el panel.**
**Probar notificación** en la página Ajustes se trata como una donación real, así que también se registra aquí si esa plataforma está marcada. Elimínala en la pestaña **Historial**.
