---
sidebar_position: 14
---

# Ruleta

Crea tus propias ruletas de premios y hazlas girar en el stream. Puedes definir el peso de cada opción, los colores de la ruleta y si una opción que sale se elimina después.

La página tiene tres pestañas: **Ajustes**, **Crear ruleta** e **Historial**. Primero crea una ruleta y luego gírala desde **Ajustes**.

## Paso 1: Crear una ruleta

1. Abre **Ruleta** en la barra lateral izquierda y cambia a la pestaña **Crear ruleta**
2. En **Mis ruletas**, haz clic en **Añadir**. Aparece una nueva ruleta llamada "Ruleta 1" (después "Ruleta 2", etc.)
3. Haz clic en la tarjeta de una ruleta para editarla. Haz clic en la **✕** de una tarjeta para eliminar esa ruleta

{/* TODO: 截圖 — 建立轉盤分頁 */}

### Título de la ruleta

Introduce un nombre para la ruleta. Se usa en la lista de ruletas, en los desplegables y en el historial.

### Contenido de la ruleta

1. Haz clic en **Editar contenido**
2. Introduce las opciones, **una por línea**
3. Haz clic en **Confirmar**

### Peso

Cuando la ruleta tiene opciones, cada una recibe un campo **Peso** (mínimo 1, predeterminado 1). El tamaño de la porción de una opción y su probabilidad de salir son proporcionales a su peso. Por ejemplo, una opción con peso 2 tiene el doble de probabilidades de salir que una opción con peso 1.

### Color del tema de la ruleta

- **Minimalista**: la combinación integrada de blanco y gris
- **Personalizar**: crea tu propia combinación de colores. Introduce un **Nombre**, elige **Colores (3–5)** con **＋** para añadir un color y **✕** para quitarlo, y haz clic en **Añadir**

Para cambiar un tema personalizado, haz clic en su botón **✎**. Para eliminarlo, haz clic en **✕**. Los temas personalizados también se ofrecen como combinaciones de colores para la animación de ruleta de [Sorteos](./lottery).

### Eliminar la opción tras sortearla

Si está activado, la opción que sale se quita de la ruleta antes del siguiente giro. Haz clic en **Restablecer** para volver a poner todas las opciones.

## Paso 2: Elegir un modo de visualización y añadir la fuente en OBS

Cambia a la pestaña **Ajustes** y elige un **Modo de visualización**:

| Modo | Descripción | URL de origen para OBS |
|------|-------------|----------------|
| **Una sola ruleta** | OBS muestra solo la ruleta seleccionada. Cambia de ruleta con el desplegable **Ruleta en uso** | `http://127.0.0.1:7272/turntable` |
| **Varias ruletas** | OBS puede mostrar varias ruletas a la vez. Cada ruleta tiene su propia URL | `http://127.0.0.1:7272/turntable/<wheel ID>` |

En el modo **Varias ruletas**, elige ruletas en **Añadir a la visualización de ruletas**. Cada ruleta añadida tiene su propia tarjeta con su **URL de origen para OBS**. Haz clic en **Copiar** para copiarla. Haz clic en **✕** en una tarjeta para quitar esa ruleta de la visualización.

Añade la URL copiada a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). La Ruleta no reproduce sonido, así que no hace falta activar "Controlar audio vía OBS".

:::tip
Activa también el interruptor junto a **Ruleta** en la barra lateral izquierda (**Activar salida en OBS**). Mientras está desactivado, el overlay permanece oculto.
:::

## Paso 3: Girar

En cada tarjeta de ruleta de la pestaña **Ajustes**:

- **Girar**: inicia el giro. Cuando termina la animación, el overlay muestra el resultado. No se puede hacer clic en el botón mientras la ruleta no tenga opciones o siga girando
- **Restablecer**: recupera las opciones eliminadas, restablece la ruleta y vacía la **Lista de ganadores** actual

La **Lista de ganadores** de la tarjeta reúne todos los resultados desde el último **Restablecer**.

También puedes usar **Girar** y **Restablecer** desde la ventana [Herramientas rápidas](./quick-tools).

{/* TODO: 截圖 — 轉盤設定分頁與 OBS 畫面 */}

## Historial

La pestaña **Historial** guarda un registro por ronda, desde el primer giro hasta el siguiente **Restablecer**. Muestra la hora, el título de la ruleta y los ganadores. Solo se conserva el historial de ruletas de los últimos 30 días. Para eliminar un registro, haz clic en 🗑 y luego en **Confirmar eliminación**.

:::info Límites de la versión de prueba
- Solo puedes crear **1** ruleta
- El overlay de OBS muestra una marca de agua

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
