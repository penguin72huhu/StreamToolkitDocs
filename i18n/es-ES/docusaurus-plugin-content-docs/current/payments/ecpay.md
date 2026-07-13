---
sidebar_position: 2
---

# Configuración de ECPay

Este tutorial explica cómo obtener el **HashKey** y el **HashIV** de ECPay e introducirlos en Stream Toolkit.

## Paso 1: Iniciar sesión en el panel de comerciante de ECPay

1. Ve al [sitio web oficial de ECPay](https://www.ecpay.com.tw/)
2. Haz clic en **Inicio de sesión del vendedor** → **Zona de comerciante** en la esquina superior derecha

## Paso 2: Ir a la Configuración de integración de sistemas

1. Haz clic en **Configuración del sistema** en el menú de la izquierda
2. Selecciona **Configuración de integración de sistemas**

   ![System interface setup in system settings menu](./ecpay-img/step2-2.png)

3. Busca el **Hash Key de integración** y el **Hash IV de integración**

   ![HashKey and HashIV](./ecpay-img/step2-3.png)

## Paso 3: Introducir en Stream Toolkit

1. Abre Stream Toolkit
2. Haz clic en **Ajustes** en el menú de la parte inferior izquierda
3. Busca **ECPay** en **Integración de plataformas de donación**
4. Pega el **HashKey de integración** y el **HashIV de integración** de la **Configuración de integración de sistemas** en los campos **Hash Key** y **Hash IV** respectivamente
5. Haz clic en **Guardar**

![ECPay settings in Stream Toolkit](./ecpay-img/step3.png)

## Paso 4: Configurar la URL de notificación

1. Copia la **URL de notificación en segundo plano** de ECPay

   ![Copy the notification URL](./ecpay-img/step4-1.png)

2. En el panel de comerciante de ECPay, busca **Herramientas de pago** → **Pagos de streamer**

   ![Streamer payment in payment tools menu](./ecpay-img/step4-2.png)

3. Pega la **URL de notificación en segundo plano** en el campo **URL de retorno de notificación de pago completado**

   ![Payment completion notification URL field](./ecpay-img/step4-3.png)

4. Haz clic en **Guardar configuración**

## Preguntas frecuentes

**Q: ¿No puedes ver "Configuración del sistema" después de iniciar sesión?**
Es posible que tu cuenta aún no haya completado la verificación. Por favor, ve a "Gestión de datos del comerciante" para verificar el estado.

**Q: ¿Se puede hacer público el HashKey?**
No. HashKey y HashIV son claves privadas; por favor, no compartas capturas de pantalla ni las publiques en lugares públicos.
