---
sidebar_position: 4
---

# Traducción de voz

Mantén pulsado un atajo y habla. Stream Toolkit convierte tu voz en texto, lo traduce y muestra ambas líneas como subtítulos en OBS.

El reconocimiento de voz se ejecuta en tu propio ordenador con un modelo Whisper. Después, el texto se traduce con MyMemory.

La página tiene dos pestañas: **Ajustes** y **Apariencia**.

## Paso 1: Añadir la fuente en OBS

La URL de origen para OBS se muestra en la parte superior de la página:

```
http://127.0.0.1:7272/voice-translate
```

Haz clic en **Copiar** y añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). Traducción de voz no reproduce sonido, así que no hace falta activar "Controlar audio vía OBS".

Los subtítulos aparecen en la parte inferior de la fuente: el texto original arriba y la traducción debajo. Se desvanecen pasada la **Duración de los subtítulos**.

:::tip
Activa el interruptor junto a **Traducción de voz** en la barra lateral izquierda (**Activar salida en OBS**). El atajo solo funciona mientras está activado.
:::

{/* TODO: 截圖 — 語音翻譯設定分頁 */}

## Paso 2: Configurar el atajo

En **Atajo de teclado (mantén pulsado para grabar, suelta para reconocer)**:

1. Haz clic en **Haz clic para configurar el atajo**
2. Pulsa la combinación de teclas que quieras y suéltala. Pulsa **Esc** para cancelar
3. Para quitar el atajo, haz clic en **Borrar**

Si la combinación ya la usa otra función, el botón muestra **Conflicto de atajo** y el atajo no se guarda.

El atajo funciona aunque Stream Toolkit no sea la ventana activa. **Mantenlo pulsado** mientras hablas y **suéltalo** para reconocer y traducir. La grabación se detiene automáticamente a los 15 segundos.

También puedes mantener pulsado con el ratón el botón **REC** que hay debajo del atajo. Funciona igual: pulsa para grabar y suelta para traducir. La ventana [Herramientas rápidas](./quick-tools) tiene el mismo botón **REC**.

## Paso 3: Ajustes de reconocimiento

| Campo | Descripción |
|-------|-------------|
| **Estado del modelo** | Muestra **Cargando xx%**, **Listo** o **Error al cargar el modelo**. Puedes grabar cuando muestra **Listo** |
| **Modelo de Whisper** | **Tiny (el más rápido, unos 40 MB)**, **Base (recomendado, unos 75 MB)** (predeterminado) o **Small (el más preciso, unos 245 MB)**. El modelo se descarga la primera vez que lo usas. Al cambiar de modelo, se vuelve a cargar |
| **Idioma del habla** | El idioma en que hablas. El predeterminado es el chino tradicional |
| **Micrófono** | El micrófono con el que se graba. **Predeterminado del sistema** usa el dispositivo de entrada predeterminado de Windows |

## Paso 4: Ajustes de traducción

| Campo | Descripción |
|-------|-------------|
| **Duración de los subtítulos** | Cuánto tiempo permanecen los subtítulos en pantalla, 1–30 segundos. El valor predeterminado es 5 |
| **Idioma de destino** | El idioma al que se traduce. El predeterminado es el inglés |
| **Usar la traducción de Whisper cuando el idioma de destino es English** | Cuando el idioma de destino es el inglés, traduce Whisper en lugar de MyMemory. (Gratis y sin cuota, pero con más latencia). No tiene efecto con otros idiomas de destino |
| **Servicio de traducción** | MyMemory |

### Email (opcional)

MyMemory es gratuito. Su cuota diaria depende de si introduces un email:

- Sin email: 5.000 caracteres al día
- Con email: 50.000 caracteres al día (gratis, sin necesidad de registrarse en MyMemory)

Introduce tu email y haz clic en **Guardar**. Este email está **Compartido con la traducción del chat**.

La barra de debajo muestra **Usado hoy (aproximado; se restablece a diario a las 08:00 UTC)**. Cuando se agota la cuota, muestra **Cuota agotada**.

## Paso 5: Apariencia

En la pestaña **Apariencia** puedes cambiar el aspecto de los subtítulos. Los cambios se guardan al momento.

- **Vista previa**: muestra subtítulos de ejemplo. El cuadro de color que hay al lado solo cambia el fondo de la vista previa
- **Alineación**: **Izquierda** (predeterminado), **Centro** o **Derecha**
- **Fuente**: una fila para **Idioma original** (el texto original) y otra para **Idioma de destino** (la traducción). Cada fila tiene fuente, color y tamaño (8–120 px). Los valores predeterminados son 14 px para el original y 22 px para la traducción
- **Sombra**: el color de la sombra del texto
- **Restablecer valores**: restaura la apariencia predeterminada

{/* TODO: 截圖 — 語音翻譯外觀分頁 */}

:::info Límites de la versión de prueba
El **Idioma de destino** está fijado en inglés. La página muestra "La versión Demo solo permite traducir a inglés".

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::

## Preguntas frecuentes

**Q: Mantengo pulsado el atajo, pero no pasa nada.**
Comprueba que el interruptor junto a **Traducción de voz** en la barra lateral izquierda está activado y que el **Estado del modelo** muestra **Listo**.

**Q: La grabación funciona, pero no aparecen subtítulos en OBS.**
Si MyMemory no puede traducir (por ejemplo, porque se ha agotado la cuota diaria), no se muestran subtítulos. Revisa la barra **Usado hoy**. Introducir un email aumenta la cuota. Si tu idioma de destino es el inglés, también puedes activar **Usar la traducción de Whisper cuando el idioma de destino es English**, que no tiene cuota.
