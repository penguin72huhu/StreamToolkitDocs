---
sidebar_position: 1
---

# Configuración de O'Pay

Este tutorial explica cómo obtener el **HashKey** y el **HashIV** de O'Pay e introducirlos en Stream Toolkit.

## Paso 1: Iniciar sesión en el panel de comerciante de O'Pay

1. Ve al [sitio web oficial de O'Pay](https://www.opay.tw/) e inicia sesión
2. Después de iniciar sesión, haz clic en la esquina superior derecha para ingresar al panel de comerciante

   ![O'Pay merchant portal button at top right](./opay-img/step1.png)

:::note
Si aún no tienes una cuenta de O'Pay, primero debes completar la solicitud de tienda y la verificación de identidad.
:::

## Paso 2: Gestión de desarrollo de sistemas

1. Busca **Gestión de desarrollo de sistemas** en el menú de la izquierda
2. Haz clic en **Configuración de integración de sistemas**

![System interface setup in system development menu](./opay-img/step2.png)

## Paso 3: Introducir en Stream Toolkit

1. Abre Stream Toolkit
2. Haz clic en **Configuración** en el menú de la parte inferior izquierda
3. Busca **O'Pay** en **Integración de plataformas de donaciones**
4. Pega el **ALL IN ONE HashKey de integración** y el **ALL IN ONE HashIV de integración** de la **Configuración de integración de sistemas** en los campos **Hash Key** y **Hash IV** respectivamente

   ![O'Pay interface info](./opay-img/step3-4.png)

5. Haz clic en **Guardar**

   ![O'Pay settings in Stream Toolkit](./opay-img/step3-5.png)

## Paso 4: Configurar la URL de notificación

1. Copia la **URL de notificación en segundo plano** de O'Pay

   ![Copy the notification URL](./opay-img/step4-1.png)

2. Vuelve al [sitio web oficial de O'Pay](https://www.opay.tw/) y haz clic en **Recibir pagos** → **Configuración de pago del streamer**

   ![Streamer payment settings in payment menu](./opay-img/step4-2.png)

3. Pega la **URL de notificación en segundo plano** en el campo **URL de notificación de pago de donación exitoso**

   ![Donation payment notification URL field](./opay-img/step4-3.png)

4. Haz clic en **Guardar configuración**

## Preguntas frecuentes

**Q: ¿No encuentras el menú "Gestión de desarrollo de sistemas"?**
Esto significa que tu cuenta aún no ha sido aprobada, o que las funciones de pago relevantes no se han habilitado. Por favor, contacta al servicio de atención al cliente de O'Pay.

**Q: ¿Se puede hacer público el HashKey?**
No. HashKey y HashIV son claves privadas; por favor, no compartas capturas de pantalla ni las publiques en lugares públicos.
