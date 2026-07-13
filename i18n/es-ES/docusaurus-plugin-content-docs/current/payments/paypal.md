---
sidebar_position: 3
---

# Configuración de PayPal

Stream Toolkit utiliza Webhooks para recibir notificaciones de pago de PayPal, por lo que no es necesario introducir una clave API.

## Paso 1: Obtener la URL de Webhook en Stream Toolkit

1. Abre Stream Toolkit
2. Haz clic en **Ajustes** en el menú de la parte inferior izquierda
3. Busca **Integración de plataformas de donación** → **PayPal**
4. Haz clic en el botón **Obtener URL**
5. Una vez generada la URL, haz clic en el botón **Copiar**

![Get PayPal webhook URL in Stream Toolkit](./paypal-img/step1.png)

:::warning Atención
La URL del Webhook contiene un token exclusivo, por lo que no debes compartirla públicamente. Si sospechas que se ha filtrado, puedes hacer clic en **Volver a obtener la URL** para emitir una nueva (la URL anterior quedará invalidada de inmediato).
:::

## Paso 2: Iniciar sesión en el panel de desarrolladores de PayPal

1. Ve a [PayPal Developer](https://developer.paypal.com)
2. Haz clic en **Log in to Dashboard** en la esquina superior derecha e inicia sesión con tu cuenta de PayPal
3. Tras iniciar sesión, haz clic en el botón **`</>`** en la esquina superior derecha para ingresar al panel de desarrolladores

![PayPal developer button at top right](./paypal-img/step2.png)

## Paso 3: Cambiar al modo Live

Asegúrate de que el interruptor de modo que está arriba del menú de la izquierda esté en **Live**. Solo debes cambiarlo si muestra **Sandbox** (modo de prueba):

1. Busca el interruptor de palanca arriba del menú de la izquierda
2. Haz clic para cambiar a **Live**

![Sandbox/Live toggle](./paypal-img/step3.png)

## Paso 4: Ir a la configuración de Webhooks

1. Haz clic en **Apps & Credentials** en el menú de la izquierda

   ![Apps & Credentials in sidebar](./paypal-img/step4-1.png)

2. Busca el botón **Manage Webhooks** en la página y haz clic en él para ingresar

   ![Manage Webhooks button](./paypal-img/step4-2.png)

3. Desplázate hasta el final de la página y haz clic en **Add Webhook**

   ![Add Webhook button](./paypal-img/step4-3.png)

## Paso 5: Añadir Webhook

1. Pega la URL que acabas de copiar de Stream Toolkit en el campo **Webhook URL**
2. En **Event types**, busca la categoría **Payments & payouts** y marca:
   - ✅ `Payment capture completed`
   - ✅ `Payment sale completed`
3. Haz clic en **Save**

{/* TODO: 截圖 — Add Webhook 設定頁 */}

Una vez completada la configuración, cuando los espectadores realicen pagos a través de PayPal, Stream Toolkit recibirá notificaciones en tiempo real.

## Preguntas frecuentes

**Q: ¿Se puede probar en el modo Sandbox?**
Sí. En el modo Sandbox también puedes añadir un Webhook para probar el proceso de pago, pero no recibirás dinero real.

**Q: ¿Qué pasa si se vuelve a generar la URL de Webhook?**
Debes volver al panel de PayPal y cambiar la URL de Webhook anterior por la nueva.
