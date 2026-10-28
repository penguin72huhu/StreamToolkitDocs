---
sidebar_position: 12
---

# Reloj

Muestra la hora actual en la transmisión, opcionalmente con la fecha y el día de la semana.

## Paso 1: Agregar la fuente de OBS

Copia la **URL de origen para OBS** en la parte superior de la página:

```
http://127.0.0.1:7272/clock
```

Agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). El reloj no reproduce sonido, así que no necesitas activar "Controlar audio vía OBS".

:::tip
Activa también el interruptor junto a **Reloj** en la barra lateral izquierda (**Activar salida en OBS**). Mientras esté desactivado, el reloj se oculta en OBS.
:::

## Vista previa

La **Vista previa** de la parte superior muestra el overlay real de OBS y se actualiza a medida que cambias la configuración. Usa el cuadro de color junto a ella para cambiar el fondo de la vista previa.

Debajo de la vista previa hay tres pestañas: **Apariencia**, **Formato del reloj** y **Configuración de visualización**.

{/* TODO: 截圖 — 時鐘設定頁 */}

## Apariencia

| Ajuste | Descripción |
|---------|-------------|
| **Fuente** | Fuente de todo el texto del reloj |
| **Estilo** | Cómo se organizan la hora, la fecha y el día de la semana: **Stack**, **Horizontal**, **One-Top-Two-Bottom** o **Two-Top-One-Bottom**. **Interlineado** está disponible en todos los estilos excepto **Horizontal**, y **Espaciado** en todos excepto **Stack** (ambos de −200 a 200 px) |
| **Orden** | Arrastra los bloques **Hora**, **Fecha** y **Día de la semana** para cambiar su orden |
| **Texto** | Configura **Hora**, **Fecha** y **Día de la semana** por separado: **Tamaño de fuente**, color (**Sólido**, o **Degradado** con dos colores y un **Ángulo**), y color, **Opacidad** y **Grosor** del **Borde** (0–7 px) |
| **Sombra** | Color, **Opacidad**, **Desenfoque** y desplazamiento **X** / **Y** de la sombra, compartidos por todo el texto |

El botón **Restaurar predeterminado** está en la parte superior de la pestaña.

### CSS personalizado

Haz clic en **CSS personalizado** para expandir el editor. El CSS predeterminado enumera los selectores de cada parte del reloj (hora, fecha, día de la semana y sus contenedores) con comentarios. Úsalo para el diseño y la estructura. Los colores, las fuentes y los tamaños se configuran en los ajustes de apariencia de arriba.

- **Restaurar predeterminado**: restablece el CSS predeterminado
- **Administrar recursos**: abre el administrador de recursos para las imágenes que uses en tu CSS

Si tu CSS sobrescribe una propiedad con `!important`, el control de apariencia correspondiente se bloquea, porque el CSS prevalecería de todos modos.

## Formato del reloj

- **Formato del reloj**: **24 horas**, o una de las dos opciones de 12 horas: **12 horas (AM/PM)** muestra AM/PM, mientras que **12 horas (a. m./p. m.)** muestra los marcadores chinos 上午 / 下午
- **Zona horaria**: de UTC−12 a UTC+14. De forma predeterminada, la zona horaria coincide con la de tu computadora

## Configuración de visualización

- **Mostrar segundos**
- **Mostrar fecha**: cuando está activado, elige un formato de fecha en la lista desplegable. Los formatos marcados con **Sin año** omiten el año
  - **Rellenar fecha con ceros**: muestra los meses y días de un solo dígito con un cero inicial (por ejemplo 2026/05/20)
  - **Formato del año**: se muestra en los formatos que empiezan por el año. **Completo (2026)** o **Abreviado (26)**

  Estas dos opciones se aplican a los formatos numéricos (con `/` o `-`). Los formatos escritos con palabras (por ejemplo "20 de mayo de 2026") siguen en cambio el idioma de la interfaz de la app
- **Mostrar día de la semana**: cuando está activado, elige cómo se escribe el día de la semana (por ejemplo **miércoles**, **MIÉ** o **mié**)

:::info Límites de la versión de prueba
**CSS personalizado** solo está disponible en la versión completa. Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
