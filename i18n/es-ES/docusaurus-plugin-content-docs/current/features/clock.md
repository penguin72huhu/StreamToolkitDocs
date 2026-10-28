---
sidebar_position: 12
---

# Reloj

Muestra la hora actual en el stream, con la fecha y el día de la semana si quieres.

## Paso 1: Añadir la fuente en OBS

Copia la **URL de origen para OBS** de la parte superior de la página:

```
http://127.0.0.1:7272/clock
```

Añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). El reloj no reproduce sonido, así que no hace falta activar "Controlar audio vía OBS".

:::tip
Activa también el interruptor junto a **Reloj** en la barra lateral izquierda (**Activar salida en OBS**). Mientras está desactivado, el reloj permanece oculto en OBS.
:::

## Vista previa

La **Vista previa** de la parte superior muestra el overlay real de OBS y se actualiza a medida que cambias los ajustes. Usa el cuadro de color que hay al lado para cambiar el fondo de la vista previa.

Debajo de la vista previa hay tres pestañas: **Apariencia**, **Formato del reloj** y **Ajustes de visualización**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Apariencia

| Ajuste | Descripción |
|---------|-------------|
| **Fuente** | Fuente de todo el texto del reloj |
| **Estilo** | Cómo se colocan la hora, la fecha y el día de la semana: **Apilado**, **Horizontal**, **Uno arriba, dos abajo** o **Dos arriba, uno abajo**. **Interlineado** está disponible en todos los estilos excepto **Horizontal**, y **Espaciado** en todos excepto **Apilado** (ambos de −200 a 200 px) |
| **Orden** | Arrastra los bloques **Hora**, **Fecha** y **Día de la semana** para cambiar su orden |
| **Texto** | Configura **Hora**, **Fecha** y **Día de la semana** por separado: **Tamaño de fuente**, color (**Color sólido**, o **Degradado** con dos colores y un **Ángulo**), y color, **Opacidad** y **Grosor** (0–7 px) del **Borde** |
| **Sombra** | Color de la sombra, **Opacidad**, **Desenfoque** y desplazamiento **X** / **Y**, compartidos por todo el texto |

El botón **Restablecer valores** está en la parte superior de la pestaña.

### CSS personalizado

Haz clic en **CSS personalizado** para desplegar el editor. El CSS predeterminado enumera, con comentarios, los selectores de cada parte del reloj (hora, fecha, día de la semana y sus contenedores). Úsalo para el diseño y la estructura. Los colores, las fuentes y los tamaños se configuran en los ajustes de apariencia de arriba.

- **Restablecer valores**: restaura el CSS predeterminado
- **Gestionar recursos**: abre el gestor de recursos para las imágenes que uses en tu CSS

Si tu CSS sobrescribe una propiedad con `!important`, el control de apariencia correspondiente se bloquea, porque el CSS prevalecería de todos modos.

## Formato del reloj

- **Formato horario**: **24 horas**, **12 horas (mañana/tarde)** o **12 horas (AM/PM)**. **12 horas (AM/PM)** muestra AM/PM, mientras que **12 horas (mañana/tarde)** muestra los indicadores chinos 上午 / 下午
- **Zona horaria**: de UTC−12 a UTC+14. De forma predeterminada, coincide con la zona horaria de tu ordenador

## Ajustes de visualización

- **Mostrar segundos**
- **Mostrar fecha**: al activarlo, elige un formato de fecha en el desplegable. Los formatos marcados como **Sin año** omiten el año
  - **Fecha con cero inicial**: muestra los meses y días de una cifra con un cero delante (por ejemplo, 2026/05/20)
  - **Formato del año**: aparece en los formatos que empiezan por el año. **Completo (2026)** o **Abreviado (26)**

  Estas dos opciones se aplican a los formatos numéricos (con `/` o `-`). Los formatos escritos con letras (por ejemplo, "20 de mayo de 2026") siguen el idioma de la interfaz de la aplicación
- **Mostrar día de la semana**: al activarlo, elige cómo se escribe el día de la semana (por ejemplo, **miércoles**, **Wednesday**, **WED** o **Wed**)

:::info Límites de la versión de prueba
**CSS personalizado** solo está disponible en la versión completa. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
