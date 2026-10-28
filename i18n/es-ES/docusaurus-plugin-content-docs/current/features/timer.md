---
sidebar_position: 11
---

# Temporizador

Muestra en el stream temporizadores de cuenta atrás o cronómetros. Una cuenta atrás puede ganar o perder tiempo con botones en los que haces clic, o automáticamente con seguidores, suscripciones, Bits y donaciones de Twitch.

La página tiene dos pestañas: **Ajustes** y **Crear cronómetro**. Primero crea un temporizador y luego contrólalo desde **Ajustes**.

## Paso 1: Crear un temporizador

1. Abre **Temporizador** en la barra lateral izquierda y cambia a la pestaña **Crear cronómetro**
2. En **Mis cronómetros**, haz clic en **Añadir**. Se crea un temporizador de cuenta atrás nuevo con un tiempo inicial de 10 minutos y tres opciones de tiempo (+30 s, +1 min, +5 min)
3. Haz clic en la tarjeta de un temporizador para editarlo. Haz clic en la **✕** de una tarjeta para eliminar ese temporizador

La **Vista previa** muestra el aspecto del temporizador seleccionado. Usa el cuadro de color que hay al lado para cambiar el fondo de la vista previa.

Debajo de la vista previa, cambia entre **Ajustes del cronómetro** y **Apariencia**.

{/* TODO: 截圖 — 建立計時器分頁 */}

## Paso 2: Ajustes del cronómetro

### Modo de cronometraje

- **Cuenta atrás**: cuenta hacia atrás desde el tiempo inicial
- **Cronómetro**: cuenta hacia delante desde 0 y puede registrar vueltas. El modo Cronómetro no tiene tiempo inicial, tiempo de aviso, sonido final ni opciones de tiempo

### Nombre

El nombre que se muestra en la lista de temporizadores, en los desplegables y en Herramientas rápidas.

### Tiempo inicial

El tiempo de inicio de la cuenta atrás, en horas, minutos y segundos. Al lado se muestra el total en segundos.

### Tiempo de aviso

Cuando el tiempo restante llega a este valor, el texto del temporizador cambia al color de **Aviso** definido en **Apariencia**. Déjalo en 0 para no usar aviso.

### Sonido al terminar la cuenta atrás

El sonido que suena cuando la cuenta atrás llega a 0. Elige **Ninguno** o uno de los sonidos integrados (**Campanilla**, **Moneda**, **Campana**, **Pop**, **Fanfarria**). Haz clic en **▶** para probarlo. Para usar tu propio archivo, haz clic en **Elegir sonido** y elige uno en el gestor de recursos.

El sonido lo reproduce la fuente de navegador de OBS, así que activa **Controlar audio vía OBS** en la fuente del temporizador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

### Opciones de tiempo

Las opciones de tiempo son los botones para sumar o restar tiempo de una cuenta atrás. Cada temporizador puede tener hasta 20.

Para añadir una, rellena el formulario **Añadir opción de tiempo**:

1. **Origen del disparador**: elige qué aplica esta opción automáticamente
   - **Manual**: solo se aplica al hacer clic en el botón
   - **Seguimiento**: se aplica con cada nuevo seguidor de Twitch
   - **Twitch Bits**: se aplica con los cheers de Bits
   - **Nueva suscripción de Twitch**: se aplica con las suscripciones de Twitch
   - **Donación**: se aplica con las donaciones. Usa **Plataformas de donación** para elegir cuáles de **YouTube**, **O'Pay**, **ECPay** y **PayPal** cuentan
2. Para **Twitch Bits** y **Donación**, define también:
   - **Umbral de activación**: la cantidad de Bits o de donación de un paso
   - **Método de conversión**: **Activar por múltiplos enteros** o **Convertir de forma proporcional** (consulta el ejemplo de abajo)
3. **Añadir tiempo**: elige **＋** o **－** y define las horas, los minutos y los segundos
4. Haz clic en **Añadir**

Para cambiar una opción, haz clic en su **Editar**, cambia el formulario y haz clic en **Guardar** (o **Cancelar**). Haz clic en **✕** para eliminarla. Las opciones con disparador automático se marcan con 🔗 y el nombre del disparador.

**Ejemplo de conversión**: Umbral de activación 100 bits, Añadir tiempo +1 min, y un espectador envía un cheer de 250 bits:

- **Activar por múltiplos enteros**: solo cuentan los múltiplos completos del umbral → 2 × 1 min = **+2 min**
- **Convertir de forma proporcional**: 250 ÷ 100 × 1 min → **+2 min 30 s**

En las donaciones, la cantidad se convierte a la moneda seleccionada en los Ajustes de la aplicación antes de compararla con el umbral.

:::note
- Los disparadores automáticos solo afectan a los temporizadores de cuenta atrás
- Las opciones de tiempo con disparador automático siguen apareciendo como botones en el panel de control, así que también puedes pulsarlas a mano
- **Nueva suscripción de Twitch** se aplica una vez por evento de suscripción: un regalo de varias suscripciones la aplica una sola vez. Las resuscripciones solo la aplican si **Contar resuscripciones** está activado en [Barra de objetivos de Twitch](./goal)
:::

### Atajos de control

Define atajos de teclado para este temporizador:

- **Iniciar/Pausar**
- **Atajo de vuelta** (solo cronómetro)
- **Atajo de restablecer**

Consulta también [Atajos de teclado](./hotkeys).

## Paso 3: Apariencia

| Ajuste | Descripción |
|---------|-------------|
| **Fuente** | Fuente del texto del tiempo |
| **Tamaño de fuente** | 12–300 px |
| **Color del texto** | **Normal**: **Color sólido** o **Degradado** (dos colores y un **Ángulo**). **Aviso** (solo cuenta atrás): el color que se usa al alcanzar el tiempo de aviso |
| **Color de fondo** | Fondo detrás del tiempo |
| **Borde** | Color del contorno, **Opacidad** y **Grosor** (0–20 px) |
| **Sombra** | Color de la sombra, **Opacidad**, **Desenfoque** y desplazamiento **X** / **Y** |

## Paso 4: Elegir un modo de visualización y añadir la fuente en OBS

Cambia a la pestaña **Ajustes**. En **Panel de control**, elige un **Modo de visualización**:

| Modo | Descripción | URL de origen para OBS |
|------|-------------|----------------|
| **Un solo cronómetro** | OBS muestra solo el temporizador seleccionado. Cambia de temporizador con el desplegable **Cronómetro actual** | `http://127.0.0.1:7272/timer` |
| **Varios cronómetros** | Cada temporizador tiene su propia URL y se puede añadir a OBS por separado | `http://127.0.0.1:7272/timer/<timer ID>` |

En el modo **Varios cronómetros**, elige temporizadores en **Añadir a la visualización**. Cada temporizador añadido tiene su propia tarjeta con su **URL de origen para OBS**. Haz clic en **Copiar** para copiarla. Haz clic en **✕** en una tarjeta para quitarlo de la visualización.

Añade la URL copiada a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

:::tip
Activa también el interruptor junto a **Temporizador** en la barra lateral izquierda (**Activar salida en OBS**). Mientras está desactivado, el temporizador permanece oculto en OBS.
:::

## Paso 5: Controlar el temporizador

Cada tarjeta de temporizador de la pestaña **Ajustes** tiene:

- **Iniciar** / **Pausar**: en un cronómetro, el botón de pausa dice **Detener**. Una cuenta atrás que ha llegado a 0 no se puede iniciar hasta que la restablezcas o le añadas tiempo
- **Vuelta** (solo cronómetro): registra una vuelta mientras está en marcha. Las vueltas aparecen debajo de la tarjeta con el tiempo y la diferencia respecto a la vuelta anterior
- **Restablecer**: para el temporizador y lo devuelve al tiempo inicial (0 en un cronómetro), borrando las vueltas
- **Añadir tiempo** (solo cuenta atrás): un botón por cada opción de tiempo

El tiempo en marcha solo se muestra en el overlay de OBS, no en la página de ajustes. También puedes controlar los temporizadores desde la ventana [Herramientas rápidas](./quick-tools), que además muestra el tiempo actual.

{/* TODO: 截圖 — 計時器控制台 */}

:::info Límites de la versión de prueba
Solo puedes crear **1** temporizador. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
