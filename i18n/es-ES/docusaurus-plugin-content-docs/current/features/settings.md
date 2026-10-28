---
sidebar_position: 19
---

# Ajustes

Haz clic en **⚙️ Ajustes** en la parte inferior del menú izquierdo. Esta página reúne las opciones generales de la aplicación, las conexiones de plataformas y las pasarelas de pago de donaciones.

## General

| Opción | Qué hace | Predeterminado |
|------|------|------|
| **Tema** | Modo de visualización de la interfaz: **Gris oscuro** o **Claro** | Gris oscuro |
| **Idioma** | Idioma de la interfaz; cambia al instante | — |
| **Minimizar a la bandeja al pulsar la X** | Al cerrar la ventana, se minimiza a la bandeja en lugar de salir | Activado |
| **Moneda de las donaciones** | Moneda global, usada por la barra de donaciones, las alertas y todas las demás cantidades mostradas | Se establece en el primer inicio según el idioma del sistema (p. ej., chino tradicional (Taiwán) → TWD, japonés → JPY, otros → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Conexión de plataformas

### Twitch

Haz clic en **Conectar cuenta** y autoriza en el navegador. Una vez conectada, muestra **Conectado @tu-nombre** y un botón **Desconectar**. Pasos completos: [Ajustes de Twitch](../platforms/twitch).

Tras conectarla, **▸ Configuración de conversión** define cuánto valen los Bits y las suscripciones en tu moneda de donaciones:

- **Reparto de ingresos**: **50 / 50** o **70 / 30**
- **Por cada 100 Bits**, **Suscripción Tier 1**, **Suscripción Tier 2**, **Suscripción Tier 3**
- **Guardar** almacena los valores para la moneda actual; **Restablecer valores** rellena los valores integrados para esa moneda

### YouTube

1. Haz clic en **Conectar cuenta** e inicia sesión con Google. Paso a paso: [Ajustes de YouTube](../platforms/youtube-settings)
2. Una vez conectada, muestra **Conectado: nombre del canal**. **Desconectar** desvincula la cuenta
3. Elige cómo encontrar el chat en directo:
   - **Detectar la transmisión actual**: requiere iniciar sesión con Google. Haz clic en **Conectar** para buscar en tu canal la transmisión actual o la próxima. Si hay varias, elige una de la lista
   - **Introducir una URL manualmente**: pega la **URL del chat**
4. **Pedir la URL del chat cada vez que se abre el programa**: opcional

**▸ Configuración de conversión** bajo YouTube define cuánto valen las membresías (YouTube no envía ninguna cantidad para las membresías):

- **Ajustes de niveles de suscripción**: añade el nombre de cada nivel y su valor. Los nombres de los niveles deben coincidir exactamente con los de tu canal de YouTube
- **Niveles no listados**: valor usado para un nivel que no está en la tabla
- **Nivel de membresías regaladas**: nivel con el que se cuentan las membresías regaladas
- Los niveles que aparecen en eventos pero faltan en la tabla se listan con **Añadir a la tabla** / **Ignorar**

## Integración de plataformas de donación

Haz clic en una pasarela para desplegarla. Cada una tiene un enlace **Ver tutorial aquí** a su guía de configuración:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Probar notificación

El botón **Probar notificación** junto al encabezado abre una ventana de prueba:

- Rellena **Nombre de prueba**, **Mensaje de prueba** y **Cantidad de prueba**, elige la **Plataforma de prueba** y haz clic en **Enviar notificación de prueba**
- **Prueba de Super Chat de YouTube**: introduce una **Cadena de la cantidad** como `$5.00` o `NT$150` y haz clic en **Enviar Super Chat de prueba** para probar el análisis de la cantidad y la conversión de moneda

## Acerca de

Haz clic en el botón **i** junto a "Stream Toolkit" en la parte superior del menú izquierdo para ver la versión, el autor y un enlace a la documentación oficial.

:::info Límites de la versión de prueba
- **Integración de plataformas de donación** solo está disponible en la versión completa
- La **Configuración de conversión** de membresías de YouTube solo está disponible en la versión completa

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::
