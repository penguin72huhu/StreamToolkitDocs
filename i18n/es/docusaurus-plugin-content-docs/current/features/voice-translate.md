---
sidebar_position: 4
---

# Traducción de voz

Mantén presionado un atajo y habla. Stream Toolkit convierte tu voz en texto, la traduce y muestra ambas líneas como subtítulos en OBS.

El reconocimiento de voz se ejecuta en tu propia computadora con un modelo Whisper. Después, el texto se traduce con MyMemory.

La página tiene dos pestañas: **Configuración** y **Apariencia**.

## Paso 1: Agregar la fuente de OBS

La URL de la fuente de OBS se muestra en la parte superior de la página:

```
http://127.0.0.1:7272/voice-translate
```

Haz clic en **Copiar** y agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). Traducción de voz no reproduce sonido, así que no necesitas activar "Controlar audio vía OBS".

Los subtítulos aparecen en la parte inferior de la fuente: el texto original arriba y la traducción abajo. Se desvanecen después del **Tiempo de visualización de subtítulos**.

:::tip
Activa el interruptor junto a **Traducción de voz** en la barra lateral izquierda (**Activar salida en OBS**). El atajo solo funciona mientras esté activado.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Paso 2: Configurar el atajo

En **Atajo de teclado (mantén pulsado para grabar, suelta para reconocer)**:

1. Haz clic en **Haz clic para configurar el atajo**
2. Presiona la combinación de teclas que quieras y suéltala. Presiona **Esc** para cancelar
3. Para quitar el atajo, haz clic en **Borrar**

Si otra función ya usa esa combinación, el botón muestra **Conflicto de atajo de teclado** y el atajo no se guarda.

El atajo funciona incluso cuando Stream Toolkit no es la ventana activa. **Mantenlo presionado** mientras hablas y **suéltalo** para reconocer y traducir. Una grabación se detiene automáticamente después de 15 segundos.

También puedes mantener presionado con el mouse el botón **REC** debajo del atajo. Funciona igual: presiona para grabar y suelta para traducir. La ventana de [Herramientas rápidas](./quick-tools) tiene el mismo botón **REC**.

## Paso 3: Configuración de reconocimiento

| Campo | Descripción |
|-------|-------------|
| **Estado del modelo** | Muestra **Cargando xx%**, **Listo** o **Error al cargar el modelo**. Puedes grabar cuando muestre **Listo** |
| **Modelo de Whisper** | **Tiny (el más rápido, aprox. 40 MB)**, **Base (recomendado, aprox. 75 MB)** (predeterminado) o **Small (el más preciso, aprox. 245 MB)**. El modelo se descarga la primera vez que lo usas. Cambiar de modelo lo vuelve a cargar |
| **Idioma del habla** | El idioma en que hablas. El predeterminado es el chino tradicional |
| **Micrófono** | El micrófono desde el que se graba. **Predeterminado del sistema** usa el dispositivo de entrada predeterminado de Windows |

## Paso 4: Configuración de traducción

| Campo | Descripción |
|-------|-------------|
| **Tiempo de visualización de subtítulos** | Cuánto tiempo permanecen los subtítulos en pantalla, 1–30 segundos. El predeterminado es 5 |
| **Idioma de destino** | El idioma al que se traduce. El predeterminado es el inglés |
| **Usar la traducción de Whisper cuando el destino sea English** | Cuando el idioma de destino es el inglés, Whisper traduce en lugar de MyMemory. (Gratis y sin cuota, pero con más latencia.) No tiene efecto con otros idiomas de destino |
| **Servicio de traducción** | MyMemory |

### Email (opcional)

MyMemory es gratis. Su cuota diaria depende de si ingresas un email:

- Sin email: 5,000 caracteres al día
- Con email: 50,000 caracteres al día (gratis, sin necesidad de registrarse en MyMemory)

Ingresa tu email y haz clic en **Guardar**. Este email **Se comparte con la traducción del chat**.

La barra de abajo muestra **Usado hoy (estimado; se restablece a las 08:00 UTC cada día)**. Cuando se agota la cuota, muestra **Cuota agotada**.

## Paso 5: Apariencia

En la pestaña **Apariencia** puedes cambiar cómo se ven los subtítulos. Los cambios se guardan de inmediato.

- **Vista previa**: muestra subtítulos de ejemplo. El cuadro de color junto a ella cambia solo el fondo de la vista previa
- **Alineación**: **Izquierda** (predeterminado), **Centro** o **Derecha**
- **Fuente**: una fila para **Idioma original** (el texto original) y otra para **Idioma de destino** (la traducción). Cada fila tiene una fuente, un color y un tamaño (8–120 px). Los valores predeterminados son 14 px para el original y 22 px para la traducción
- **Sombra**: el color de la sombra del texto
- **Restaurar predeterminado**: restablece la apariencia predeterminada

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Límites de la versión de prueba
El **Idioma de destino** está fijo en inglés. La página muestra "La versión Demo solo admite traducir a inglés".

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::

## Preguntas frecuentes

**Q: Mantengo presionado el atajo, pero no pasa nada.**
Comprueba que el interruptor junto a **Traducción de voz** en la barra lateral izquierda esté activado y que **Estado del modelo** muestre **Listo**.

**Q: La grabación funciona, pero no aparecen subtítulos en OBS.**
Si MyMemory no puede traducir (por ejemplo, porque se agotó la cuota diaria), no se muestran subtítulos. Revisa la barra **Usado hoy**. Ingresar un email aumenta la cuota. Si tu idioma de destino es el inglés, también puedes activar **Usar la traducción de Whisper cuando el destino sea English**, que no tiene cuota.
