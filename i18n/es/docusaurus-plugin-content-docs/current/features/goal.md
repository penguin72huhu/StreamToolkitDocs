---
sidebar_position: 10
---

# Barra de objetivos de Twitch

Muestra en la transmisión barras de progreso para tus metas de seguidores, suscripciones y Bits de Twitch. Cada tipo de meta tiene su propia barra, su propia configuración y su propia URL de OBS.

:::note Antes de empezar
Las barras de objetivos cuentan eventos de Twitch, así que primero conecta tu cuenta de Twitch. Consulta [Configuración de Twitch](../platforms/twitch).
:::

## Paso 1: Elegir un tipo de meta y agregar la fuente de OBS

En la parte superior de la página, elige un tipo de meta: **Seguidor**, **Suscripciones** o **Bits**. La **URL de OBS** debajo de los botones cambia en consecuencia. Haz clic en **Copiar** para copiarla.

| Tipo de meta | URL de la fuente de OBS |
|-----------|----------------|
| **Seguidor** | `http://127.0.0.1:7272/goal/follow` |
| **Suscripciones** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Agrega cada barra que quieras mostrar en OBS como una fuente de navegador independiente. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). Las barras de objetivos no reproducen sonido, así que no necesitas activar "Controlar audio vía OBS".

:::tip
Activa también el interruptor junto a **Barra de objetivos de Twitch** en la barra lateral izquierda (**Activar salida en OBS**). Mientras esté desactivado, las barras se ocultan en OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Paso 2: Configurar la meta

Toda la configuración de abajo se aplica al tipo de meta que elegiste arriba.

- **Título**: el texto del título que se muestra en la barra
- **Meta**: el número objetivo (números enteros, 0 o más)
- **Progreso**: muestra el conteo actual, la meta y el porcentaje

### Cómo se cuenta el progreso

| Tipo de meta | Qué suma al progreso |
|-----------|----------------------|
| **Seguidor** | Cada nuevo seguidor suma 1. Mientras Twitch esté conectado, el conteo también se sincroniza cada 30 segundos con el total de seguidores de tu canal en Twitch. Haz clic en **Sincronizar** para sincronizarlo de inmediato |
| **Suscripciones** | Suscripciones nuevas y suscripciones de regalo (un regalo de varias suscripciones suma la cantidad de suscripciones regaladas). Las resuscripciones solo cuentan cuando **Contar resuscripciones** está activado |
| **Bits** | Cada cheer suma la cantidad de Bits enviados |

### Opciones de suscripción

Solo se muestran para **Suscripciones**:

- **Ponderado por Tier**: cuando está activado, las suscripciones de nivel más alto suman más al progreso. Cuando está desactivado, cada suscripción suma 1
- **Contar resuscripciones**: cuando está activado, los mensajes de resuscripción también suman al progreso

### Restablecer el progreso

**Suscripciones** y **Bits** tienen un botón **Restablecer progreso**. Haz clic en él y luego en **Confirmar restablecimiento** para devolver el conteo actual a 0. El número de la meta se conserva.

**Seguidor** no tiene botón para restablecer, porque su conteo sigue tu total de seguidores de Twitch.

## Paso 3: Ajustar la apariencia

### Vista previa

La **Vista previa** de la parte superior muestra la barra del tipo de meta seleccionado. Usa el cuadro de color junto a ella para cambiar el fondo de la vista previa. Marca **Vista previa: alcanzada** para ver cómo se ve la barra una vez alcanzada la meta.

### Configuración de apariencia

| Ajuste | Descripción |
|---------|-------------|
| **Color de fondo** | Fondo de la barra |
| **Color de la barra de progreso** | Color de la parte rellena |
| **Color al alcanzar la meta** | Color de relleno una vez alcanzada la meta |
| **Texto del título** | Fuente, color y tamaño (8–72 px) del título |
| **Texto de la meta** | Fuente, color y tamaño (8–72 px) de los números |
| **Porcentaje** | Fuente, color y tamaño (8–72 px) del porcentaje |

Haz clic en **Restaurar predeterminado** para restablecer la apariencia del tipo de meta seleccionado.

### CSS personalizado

Haz clic en **CSS personalizado** para expandir el editor. Cada tipo de meta tiene su propio CSS. Úsalo para el diseño y la estructura. Los colores, las fuentes y los tamaños se configuran en los ajustes de apariencia de arriba.

- **Restaurar predeterminado**: restablece el CSS predeterminado
- **Administrar recursos**: abre el administrador de recursos para las imágenes que uses en tu CSS

Si tu CSS sobrescribe una propiedad con `!important`, el control de apariencia correspondiente se bloquea, porque el CSS prevalecería de todos modos.

:::info Límites de la versión de prueba
- **CSS personalizado** solo está disponible en la versión completa
- El overlay de OBS muestra una marca de agua

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
