---
sidebar_position: 11
---

# Temporizador

Muestra temporizadores de cuenta regresiva o cronómetros en la transmisión. Una cuenta regresiva puede ganar o perder tiempo con botones que pulsas, o automáticamente con seguidores, suscripciones, Bits y donaciones de Twitch.

La página tiene dos pestañas: **Configuración** y **Crear temporizador**. Primero crea un temporizador y luego contrólalo desde **Configuración**.

## Paso 1: Crear un temporizador

1. Abre **Temporizador** en la barra lateral izquierda y cambia a la pestaña **Crear temporizador**
2. En **Mis temporizadores**, haz clic en **Agregar**. Se crea un nuevo temporizador de cuenta regresiva con un tiempo inicial de 10 minutos y tres opciones de tiempo (+30 s, +1 min, +5 min)
3. Haz clic en la tarjeta de un temporizador para editarlo. Haz clic en la **✕** de una tarjeta para eliminar ese temporizador

La **Vista previa** muestra cómo se ve el temporizador seleccionado. Usa el cuadro de color junto a ella para cambiar el fondo de la vista previa.

Debajo de la vista previa, cambia entre **Configuración del temporizador** y **Apariencia**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Paso 2: Configuración del temporizador

### Modo de cronometraje

- **Cuenta regresiva**: cuenta hacia atrás desde el tiempo inicial
- **Cronómetro**: cuenta hacia adelante desde 0 y puede registrar vueltas. El modo cronómetro no tiene tiempo inicial, tiempo de alerta, sonido final ni opciones de tiempo

### Nombre

El nombre que se muestra en la lista de temporizadores, en las listas desplegables y en Herramientas rápidas.

### Tiempo inicial

El tiempo de inicio de la cuenta regresiva, en horas, minutos y segundos. Junto a él se muestra el total en segundos.

### Tiempo de alerta

Cuando el tiempo restante llega a este valor, el texto del temporizador cambia al color de **Alerta** configurado en **Apariencia**. Déjalo en 0 para no tener alerta.

### Sonido al finalizar la cuenta regresiva

El sonido que se reproduce cuando la cuenta regresiva llega a 0. Elige **Ninguno** o uno de los sonidos integrados (**Campanilla**, **Moneda**, **Campana**, **Pop**, **Fanfarria**). Haz clic en **▶** para probarlo. Para usar tu propio archivo, haz clic en **Elegir sonido** y elige uno del administrador de recursos.

El sonido lo reproduce la fuente de navegador de OBS, así que activa **Controlar audio vía OBS** en la fuente del temporizador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

### Opciones de tiempo

Las opciones de tiempo son los botones para sumar/restar tiempo a una cuenta regresiva. Cada temporizador puede tener hasta 20.

Para agregar una, completa el formulario **Agregar opción de tiempo**:

1. **Origen del disparador**: elige qué aplica esta opción automáticamente
   - **Manual**: solo se aplica cuando haces clic en el botón
   - **Seguidor**: se aplica con cada nuevo seguidor de Twitch
   - **Twitch Bits**: se aplica con los cheers de Bits
   - **Nueva suscripción de Twitch**: se aplica con las suscripciones de Twitch
   - **Donación**: se aplica con las donaciones. Usa **Plataformas de donación** para elegir cuáles de **YouTube**, **O'Pay**, **ECPay** y **PayPal** cuentan
2. Para **Twitch Bits** y **Donación**, configura también:
   - **Umbral de disparo**: la cantidad de Bits o el monto de donación de un paso
   - **Método de conversión**: **Disparo por múltiplos enteros** o **Conversión proporcional** (consulta el ejemplo de abajo)
3. **Agregar tiempo**: elige **＋** o **－** y configura las horas, los minutos y los segundos
4. Haz clic en **Agregar**

Para cambiar una opción, haz clic en su **Editar**, cambia el formulario y haz clic en **Guardar** (o **Cancelar**). Haz clic en **✕** para eliminarla. Las opciones con un disparador automático se marcan con 🔗 y el nombre del disparador.

**Ejemplo de conversión**: Umbral de disparo de 100 bits, Agregar tiempo +1 min, y un espectador envía un cheer de 250 bits:

- **Disparo por múltiplos enteros**: solo cuentan los múltiplos completos del umbral → 2 × 1 min = **+2 min**
- **Conversión proporcional**: 250 ÷ 100 × 1 min → **+2 min 30 s**

En las donaciones, el monto se convierte a la moneda seleccionada en la Configuración de la app antes de compararlo con el umbral.

:::note
- Los disparadores automáticos solo afectan a los temporizadores de cuenta regresiva
- Las opciones de tiempo con un disparador automático siguen apareciendo como botones en el panel de control, así que también puedes pulsarlas a mano
- **Nueva suscripción de Twitch** se aplica una vez por evento de suscripción: un regalo de varias suscripciones la aplica una sola vez. Las resuscripciones solo la aplican cuando **Contar resuscripciones** está activado en [Barra de objetivos de Twitch](./goal)
:::

### Atajos de control

Configura atajos de teclado para este temporizador:

- **Iniciar/Pausar**
- **Atajo de vuelta** (solo cronómetro)
- **Atajo de restablecer**

Consulta también [Atajos de teclado](./hotkeys).

## Paso 3: Apariencia

| Ajuste | Descripción |
|---------|-------------|
| **Fuente** | Fuente del texto del tiempo |
| **Tamaño de fuente** | 12–300 px |
| **Color del texto** | **Normal**: **Sólido** o **Degradado** (dos colores y un **Ángulo**). **Alerta** (solo cuenta regresiva): el color que se usa una vez alcanzado el tiempo de alerta |
| **Color de fondo** | Fondo detrás del tiempo |
| **Borde** | Color, **Opacidad** y **Grosor** (0–20 px) del contorno |
| **Sombra** | Color, **Opacidad**, **Desenfoque** y desplazamiento **X** / **Y** de la sombra |

## Paso 4: Elegir un modo de visualización y agregar la fuente de OBS

Cambia a la pestaña **Configuración**. En **Panel de control**, elige un **Modo de visualización**:

| Modo | Descripción | URL de la fuente de OBS |
|------|-------------|----------------|
| **Un solo temporizador** | OBS muestra solo el temporizador seleccionado. Cambia de temporizador con la lista desplegable **Temporizador actual** | `http://127.0.0.1:7272/timer` |
| **Varios temporizadores** | Cada temporizador tiene su propia URL y se puede agregar a OBS por separado | `http://127.0.0.1:7272/timer/<timer ID>` |

En el modo **Varios temporizadores**, elige temporizadores en **Agregar a la visualización**. Cada temporizador agregado tiene su propia tarjeta con su **URL de origen para OBS**. Haz clic en **Copiar** para copiarla. Haz clic en **✕** en una tarjeta para quitarlo de la visualización.

Agrega la URL copiada en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

:::tip
Activa también el interruptor junto a **Temporizador** en la barra lateral izquierda (**Activar salida en OBS**). Mientras esté desactivado, el temporizador se oculta en OBS.
:::

## Paso 5: Controlar el temporizador

Cada tarjeta de temporizador en la pestaña **Configuración** tiene:

- **Iniciar** / **Pausar**: en un cronómetro, el botón de pausa dice **Detener**. Una cuenta regresiva que llegó a 0 no se puede iniciar hasta que la restablezcas o le agregues tiempo
- **Vuelta** (solo cronómetro): registra una vuelta mientras corre. Las vueltas se muestran debajo de la tarjeta con el tiempo y la diferencia con la vuelta anterior
- **Restablecer**: detiene el temporizador y lo devuelve al tiempo inicial (0 en un cronómetro), borrando las vueltas
- **Agregar tiempo** (solo cuenta regresiva): un botón por cada opción de tiempo

El tiempo en curso solo se muestra en el overlay de OBS, no en la página de configuración. También puedes controlar los temporizadores desde la ventana de [Herramientas rápidas](./quick-tools), que además muestra el tiempo actual.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Límites de la versión de prueba
Solo puedes crear **1** temporizador. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
