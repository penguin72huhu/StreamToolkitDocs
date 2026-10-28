---
sidebar_position: 14
---

# Ruleta

Crea tus propias ruletas de premios y gíralas en la transmisión. Puedes configurar el peso de cada opción, los colores de la ruleta y si una opción sorteada se quita después.

La página tiene tres pestañas: **Configuración**, **Crear ruleta** e **Historial**. Primero crea una ruleta y luego gírala desde **Configuración**.

## Paso 1: Crear una ruleta

1. Abre **Ruleta** en la barra lateral izquierda y cambia a la pestaña **Crear ruleta**
2. En **Mis ruletas**, haz clic en **Agregar**. Aparece una nueva ruleta llamada "Ruleta 1" (luego "Ruleta 2" y así sucesivamente)
3. Haz clic en la tarjeta de una ruleta para editarla. Haz clic en la **✕** de una tarjeta para eliminar esa ruleta

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Título de la ruleta

Ingresa un nombre para la ruleta. Se usa en la lista de ruletas, en las listas desplegables y en el historial.

### Contenido de la ruleta

1. Haz clic en **Editar contenido**
2. Ingresa las opciones, **una por línea**
3. Haz clic en **Confirmar**

### Peso

Cuando la ruleta tiene opciones, cada una recibe un campo **Peso** (mínimo 1, predeterminado 1). El tamaño de la porción de una opción y su probabilidad de salir aumentan con su peso. Por ejemplo, una opción con peso 2 tiene el doble de probabilidad de salir que una opción con peso 1.

### Color del tema de la ruleta

- **Minimalista**: el esquema integrado en blanco y gris
- **Personalizar**: crea tu propio esquema de colores. Ingresa un **Nombre**, elige **Colores (3–5 colores)** con **＋** para agregar un color y **✕** para quitarlo, y haz clic en **Agregar**

Para cambiar un tema personalizado, haz clic en su botón **✎**. Para eliminarlo, haz clic en **✕**. Los temas personalizados también se ofrecen como esquemas de colores para la animación de ruleta en [Sorteos](./lottery).

### Eliminar la opción tras sortearla

Cuando está activado, una opción sorteada se quita de la ruleta antes del siguiente giro. Haz clic en **Restablecer** para devolver todas las opciones.

## Paso 2: Elegir un modo de visualización y agregar la fuente de OBS

Cambia a la pestaña **Configuración** y elige un **Modo de visualización**:

| Modo | Descripción | URL de la fuente de OBS |
|------|-------------|----------------|
| **Una sola ruleta** | OBS muestra solo la ruleta seleccionada. Cambia de ruleta con la lista desplegable **Ruleta en uso** | `http://127.0.0.1:7272/turntable` |
| **Varias ruletas** | OBS puede mostrar varias ruletas a la vez. Cada ruleta tiene su propia URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

En el modo **Varias ruletas**, elige ruletas en **Agregar a la visualización de la ruleta**. Cada ruleta agregada tiene su propia tarjeta con su **URL de origen para OBS**. Haz clic en **Copiar** para copiarla. Haz clic en **✕** en una tarjeta para quitar esa ruleta de la visualización.

Agrega la URL copiada en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). La Ruleta no reproduce sonido, así que no necesitas activar "Controlar audio vía OBS".

:::tip
Activa también el interruptor junto a **Ruleta** en la barra lateral izquierda (**Activar salida en OBS**). Mientras esté desactivado, el overlay permanece oculto.
:::

## Paso 3: Girar

En cada tarjeta de ruleta de la pestaña **Configuración**:

- **Girar**: inicia el giro. Cuando termina la animación, el overlay muestra el resultado. No se puede hacer clic en el botón mientras la ruleta no tenga opciones o siga girando
- **Restablecer**: devuelve las opciones quitadas, restablece la ruleta y borra la **Lista de ganadores** actual

La **Lista de ganadores** de la tarjeta reúne todos los resultados desde el último **Restablecer**.

También puedes usar **Girar** y **Restablecer** desde la ventana de [Herramientas rápidas](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Historial

La pestaña **Historial** guarda un registro por cada ronda, desde el primer giro hasta el siguiente **Restablecer**. Muestra la hora, el título de la ruleta y los ganadores. Solo se conserva el historial de ruletas de los últimos 30 días. Para eliminar un registro, haz clic en 🗑 y luego en **Confirmar eliminación**.

:::info Límites de la versión de prueba
- Solo puedes crear **1** ruleta
- El overlay de OBS muestra una marca de agua

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
