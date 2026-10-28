---
sidebar_position: 19
---

# Configuración

Haz clic en **⚙️ Configuración** en la parte inferior del menú izquierdo. Esta página contiene las opciones generales de la app, las conexiones de plataformas y las pasarelas de pago para donaciones.

## General

| Opción | Qué hace | Predeterminado |
|------|------|------|
| **Tema** | Modo de visualización de la interfaz: **Gris oscuro** o **Claro** | Gris oscuro |
| **Idioma** | Idioma de la interfaz; cambia de inmediato | — |
| **Minimizar a la barra de tareas al pulsar X** | Al cerrar la ventana, se minimiza a la bandeja en lugar de salir | Activado |
| **Moneda de las donaciones** | Unidad monetaria global, usada por la barra de donaciones, las alertas y todas las demás visualizaciones de montos | Se define en el primer inicio según el idioma de tu sistema (p. ej. chino tradicional (Taiwán) → TWD, japonés → JPY, otros → USD) |

{/* TODO: 截圖 — 一般設定 */}

## Conexión de plataformas

### Twitch

Haz clic en **Conectar cuenta** y autoriza en el navegador. Una vez conectada, muestra **Conectado @tu-nombre** y un botón **Desconectar**. Pasos completos: [Configuración de Twitch](../platforms/twitch).

Después de conectar, **▸ Configuración de conversión** define cuánto valen los Bits y las suscripciones en tu moneda de donaciones:

- **Modelo de reparto de ingresos**: **50 / 50** o **70 / 30**
- **Por cada 100 Bits**, **Suscripción Tier 1**, **Suscripción Tier 2**, **Suscripción Tier 3**
- **Guardar** almacena los valores para la moneda actual; **Restaurar predeterminado** completa los valores integrados para esa moneda

### YouTube

1. Haz clic en **Conectar cuenta** e inicia sesión con Google. Paso a paso: [Configuración de YouTube](../platforms/youtube-settings)
2. Una vez conectada, muestra **Conectado: nombre del canal**. **Desconectar** desvincula la cuenta
3. Elige cómo encontrar el chat en vivo:
   - **Detectar la transmisión actual**: requiere iniciar sesión con Google. Haz clic en **Conectar** para buscar en tu canal la transmisión actual o próxima. Si hay varias, elige una de la lista
   - **Introducir una URL manualmente**: pega la **URL del chat**
4. **Solicitar la URL del chat cada vez que se abra el programa**: opcional

**▸ Configuración de conversión** en YouTube define cuánto valen las membresías (YouTube no envía un monto para las membresías):

- **Niveles de membresía**: agrega el nombre de cada nivel y su valor. Los nombres de nivel deben coincidir exactamente con los de tu canal de YouTube
- **Niveles no listados**: valor usado para un nivel que no está en la tabla
- **Nivel de membresías regaladas**: como qué nivel cuentan las membresías regaladas
- Los niveles que aparecen en eventos pero faltan en la tabla se muestran con **Añadir a la tabla** / **Ignorar**

## Integración de plataformas de donaciones

Haz clic en una pasarela para expandirla. Cada una tiene un enlace **Ver tutorial aquí** a su guía de configuración:

- [PayPal](../payments/paypal)
- [Stripe](../payments/stripe)
- [O'Pay](../payments/opay)
- [ECPay](../payments/ecpay)

### Alerta de prueba

El botón **Alerta de prueba** junto al encabezado abre una ventana de prueba:

- Completa **Nombre de prueba**, **Mensaje de prueba** y **Monto de prueba**, elige **Plataforma de prueba** y haz clic en **Enviar alerta de prueba**
- **Prueba de Super Chat de YouTube**: ingresa una **Cadena de monto** como `$5.00` o `NT$150` y haz clic en **Enviar Super Chat de prueba** para probar el análisis del monto y la conversión de moneda

## Acerca de

Haz clic en el botón **i** junto a "Stream Toolkit" en la parte superior del menú izquierdo para ver la versión, el autor y un enlace a la documentación oficial.

:::info Límites de la versión de prueba
- **Integración de plataformas de donaciones** solo está disponible en la versión completa
- La **Configuración de conversión** de membresías de YouTube solo está disponible en la versión completa

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::
