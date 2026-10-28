---
sidebar_position: 10
---

# Barra de objetivos de Twitch

Muestra en el stream barras de progreso para tus objetivos de seguidores, suscripciones y Bits de Twitch. Cada tipo de objetivo tiene su propia barra, sus propios ajustes y su propia URL de OBS.

:::note Antes de empezar
Las barras de objetivos cuentan eventos de Twitch, así que primero conecta tu cuenta de Twitch. Consulta [Ajustes de Twitch](../platforms/twitch).
:::

## Paso 1: Elegir un tipo de objetivo y añadir la fuente en OBS

En la parte superior de la página, elige un tipo de objetivo: **Seguimiento**, **Suscripciones** o **Bits**. La **URL de OBS** que hay debajo de los botones cambia en consecuencia. Haz clic en **Copiar** para copiarla.

| Tipo de objetivo | URL de origen para OBS |
|-----------|----------------|
| **Seguimiento** | `http://127.0.0.1:7272/goal/follow` |
| **Suscripciones** | `http://127.0.0.1:7272/goal/sub` |
| **Bits** | `http://127.0.0.1:7272/goal/bits` |

Añade a OBS cada barra que quieras mostrar como una fuente de navegador independiente. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source). Las barras de objetivos no reproducen sonido, así que no hace falta activar "Controlar audio vía OBS".

:::tip
Activa también el interruptor junto a **Barra de objetivos de Twitch** en la barra lateral izquierda (**Activar salida en OBS**). Mientras está desactivado, las barras permanecen ocultas en OBS.
:::

{/* TODO: 截圖 — Twitch目標條設定頁 */}

## Paso 2: Definir el objetivo

Todos los ajustes siguientes se aplican al tipo de objetivo que elegiste arriba.

- **Título**: el texto del título que se muestra en la barra
- **Objetivo**: el número que quieres alcanzar (números enteros, 0 o más)
- **Progreso**: muestra el recuento actual, el objetivo y el porcentaje

### Cómo se cuenta el progreso

| Tipo de objetivo | Qué suma al progreso |
|-----------|----------------------|
| **Seguimiento** | Cada nuevo seguidor suma 1. Mientras Twitch está conectado, el recuento también se sincroniza cada 30 segundos con el total de seguidores de tu canal en Twitch. Haz clic en **Sincronizar** para sincronizarlo al momento |
| **Suscripciones** | Suscripciones nuevas y suscripciones regaladas (un regalo de varias suscripciones suma el número de suscripciones regaladas). Las resuscripciones solo cuentan si **Contar resuscripciones** está activado |
| **Bits** | Cada cheer suma el número de Bits enviados |

### Opciones de suscripción

Solo aparecen para **Suscripciones**:

- **Ponderado por Tier (T1=+1, T2=+2, T3=+6)**: si está activado, las suscripciones de nivel superior suman más al progreso. Si está desactivado, cada suscripción suma 1
- **Contar resuscripciones**: si está activado, los mensajes de resuscripción también suman al progreso

### Restablecer el progreso

**Suscripciones** y **Bits** tienen un botón **Restablecer progreso**. Haz clic en él y después en **Restablecer** para volver a poner el recuento actual a 0. El número del objetivo se mantiene.

**Seguimiento** no tiene botón de restablecer, porque su recuento sigue tu total de seguidores de Twitch.

## Paso 3: Ajustar la apariencia

### Vista previa

La **Vista previa** de la parte superior muestra la barra del tipo de objetivo seleccionado. Usa el cuadro de color que hay al lado para cambiar el fondo de la vista previa. Marca **Vista previa de objetivo alcanzado** para ver cómo queda la barra cuando se alcanza el objetivo.

### Ajustes de apariencia

| Ajuste | Descripción |
|---------|-------------|
| **Color de fondo** | Fondo de la barra |
| **Color de la barra de progreso** | Color de la parte rellena |
| **Color al alcanzar el objetivo** | Color de relleno una vez alcanzado el objetivo |
| **Texto del título** | Fuente, color y tamaño (8–72 px) del título |
| **Texto del objetivo** | Fuente, color y tamaño (8–72 px) de los números |
| **Porcentaje** | Fuente, color y tamaño (8–72 px) del porcentaje |

Haz clic en **Restablecer valores** para restaurar la apariencia del tipo de objetivo seleccionado.

### CSS personalizado

Haz clic en **CSS personalizado** para desplegar el editor. Cada tipo de objetivo tiene su propio CSS. Úsalo para el diseño y la estructura. Los colores, las fuentes y los tamaños se configuran en los ajustes de apariencia de arriba.

- **Restablecer valores**: restaura el CSS predeterminado
- **Gestionar recursos**: abre el gestor de recursos para las imágenes que uses en tu CSS

Si tu CSS sobrescribe una propiedad con `!important`, el control de apariencia correspondiente se bloquea, porque el CSS prevalecería de todos modos.

:::info Límites de la versión de prueba
- **CSS personalizado** solo está disponible en la versión completa
- El overlay de OBS muestra una marca de agua

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison) para más detalles.
:::
