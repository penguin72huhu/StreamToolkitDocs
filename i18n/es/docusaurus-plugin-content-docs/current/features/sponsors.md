---
sidebar_position: 9
---

# Panel de donaciones

Muestra en la transmisión una lista de donaciones recientes: icono de la plataforma, nombre del donante, monto y mensaje.

## URL de la fuente de OBS

```
http://127.0.0.1:7272/sponsors
```

Copia la URL desde la parte superior de la página **Configuración de Panel de donaciones** y agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

Usa el interruptor junto a **Panel de donaciones** en la barra lateral izquierda para mostrar u ocultar el panel en OBS. Cuando está desactivado, el panel se desvanece. Las donaciones se siguen registrando mientras está desactivado.

{/* TODO: 截圖 — 贊助紀錄板設定頁 */}

## Pestaña Configuración

### Plataforma de integración

Marca las plataformas cuyas donaciones deben registrarse: **Twitch**, **YouTube**, **PayPal**, **Stripe**, **O'Pay**, **ECPay**. Un punto verde significa que la plataforma está conectada; de lo contrario, la fila muestra **(sin conexión)**. Estas casillas solo afectan al panel, no a la Barra de donaciones ni a Alertas de donaciones.

**Twitch ⚙️** (se muestra cuando Twitch está conectado y marcado):

1. Elige **Contar Bits y suscripciones**, **Contar solo Bits** o **Contar solo suscripciones**
2. **Contar resuscripciones**: si se registran las resuscripciones (se muestra cuando se cuentan las suscripciones)
3. **Menos de [N] Bits no se contabilizan**: márcalo e ingresa un mínimo para que los cheers más pequeños no se registren (se muestra cuando se cuentan los Bits)
4. Haz clic en **Guardar**

**YouTube ⚙️**:

- **Mostrar el nombre de los espectadores en vez del @alias**: solo está disponible una vez que inicias sesión con Google.
- **Eventos contados**: **Super Chat**, **Super Sticker**, **Nuevo miembro**, **Renovación de membresía**, **Membresía regalada**, **Gemas**. **Gemas** requiere iniciar sesión con Google. Los regalos de Gemas se muestran con un icono de gema y la cantidad de gemas en lugar de un monto de dinero.

Si el chat en vivo de YouTube no está vinculado, la fila muestra **No hay URL del chat conectada** con **Conexión automática** (requiere iniciar sesión con Google) e **Introducir manualmente** (te lleva al campo de la URL del chat en Configuración). Si hay un evento de membresía marcado pero no se han configurado los precios de membresía, haz clic en **⚠ Sin precios de membresía** para configurarlos. Consulta [Configuración de YouTube](../platforms/youtube-settings).

Para conectar PayPal, Stripe, O'Pay o ECPay, consulta [PayPal](../payments/paypal), [Stripe](../payments/stripe), [O'Pay](../payments/opay) y [ECPay](../payments/ecpay).

### Configuración

| Campo | Descripción |
|-------|-------------|
| **Convertir automáticamente a tu moneda** | Activado de forma predeterminada. Muestra los montos convertidos a la **Moneda de las donaciones** configurada en la página Configuración. |
| **Mostrar como máximo** | Cuántos registros conservar (1–100). Predeterminado: 20. Cuando llega una nueva donación por encima de este límite, se quita el registro más antiguo. |

## Pestaña Apariencia

### Vista previa

Usa el selector de color junto a **Vista previa** para cambiar el fondo de la vista previa. Haz clic en **Probar animación de agregado** para reproducir la animación de entrada con un registro de ejemplo. El ejemplo no se guarda en el historial.

Haz clic en **Restaurar predeterminado** para restablecer la apariencia predeterminada.

### Configuración de visualización

- **Mostrar icono de la plataforma**: muestra el icono de la plataforma en cada registro.
- **Dirección de entrada**: **De arriba abajo** (predeterminado), **De abajo arriba**, **De izquierda a derecha** o **De derecha a izquierda**.

### Fuente

Configura la fuente, el color y el tamaño (8–72 px) de **Título** (nombre del donante), **Texto** (mensaje) y **Monto**.

### Color de fondo

- **Predeterminado**: color de fondo de todos los registros.
- **+ Agregar rango**: agrega un color con un rango de **Monto** (**Mínimo** ~ **Máximo**). Los registros cuyo monto cae en el rango usan ese color en su lugar. Deja Mínimo o Máximo vacío para no poner límite en ese lado. Haz clic en **✕** para quitar un rango.

Cuando **Convertir automáticamente a tu moneda** está activado, el rango se compara con el monto convertido.

### CSS personalizado

Expande **CSS personalizado** para editar el CSS del panel. **Restaurar predeterminado** restablece el CSS predeterminado y **Administrar recursos** abre el administrador de recursos. Aquí también se pueden aplicar temas de Steam Workshop. Mientras haya un tema aplicado, el CSS es de solo lectura. Consulta [Temas](./themes).

## Pestaña Historial

### Agregar manualmente (para pruebas)

Elige una plataforma, ingresa **Nombre**, **Monto** y opcionalmente **Mensaje (opcional)**, y haz clic en **Agregar**. El registro solo se agrega si esa plataforma está marcada en **Plataforma de integración**. El monto se trata en tu moneda de donaciones.

### Historial

Muestra los registros guardados con la cantidad de registros.

- Haz clic en **🗑** y luego en **Confirmar eliminación** para eliminar un registro.
- Haz clic en **Borrar** para eliminar todos los registros. Primero aparece una confirmación. No se puede deshacer.

:::info Versión de prueba
El CSS personalizado solo está disponible en la versión completa. Las pasarelas de pago reales (PayPal / Stripe / O'Pay / ECPay), los eventos de membresía de YouTube y las Gemas no se pueden usar en la versión de prueba, y el panel muestra una marca de agua en OBS. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: Las alertas de prueba aparecen en el panel.**
La **Alerta de prueba** de la página Configuración se trata como una donación real, así que también se registra aquí si esa plataforma está marcada. Elimínala en la pestaña **Historial**.
