---
sidebar_position: 8.2
---

# Alertas de cumpleaños

Añade a una lista los cumpleaños de tus espectadores. Cuando un espectador de la lista escribe en el chat durante tu stream el día de su cumpleaños o poco después, aparece una alerta de cumpleaños en el stream. Cada espectador recibe una alerta por cumpleaños.

## URL de origen para OBS

```
http://127.0.0.1:7272/birthday-alert
```

Copia la URL de la parte superior de la página de ajustes de **Alertas de cumpleaños** y añádela a OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

:::warning
Las alertas reproducen sonido. Marca **Controlar audio vía OBS** en las propiedades de la fuente de navegador; si no, el sonido no se oirá en el stream.
:::

Activa el interruptor junto a **Alertas de cumpleaños** en la barra lateral izquierda. La aplicación solo se conecta al chat y comprueba los cumpleaños mientras está activado. Los botones **Probar alerta** y **Repetir** funcionan aunque esté desactivado.

La página tiene tres pestañas: **Ajustes**, **Espectadores** y **Apariencia**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Cómo funciona

- Un espectador de la lista que escribe en el chat desde su cumpleaños hasta el número de días que definas después recibe una alerta. Antes del cumpleaños no se muestra nada.
- Cada espectador recibe una alerta por cumpleaños. Un cumpleaños del 28/12 que se anuncia el 2/1 sigue contando como el cumpleaños del año anterior.
- Las alertas solo se activan mientras la plataforma en la que escribió el espectador está en directo. Mientras no estás en directo, o mientras la aplicación aún no sabe si lo estás, escribir en el chat no activa ni registra la alerta; aparecerá la próxima vez que escriba durante un stream.
- El historial del chat que se carga al conectar el chat de YouTube no cuenta, así que reiniciar la aplicación no anuncia a quienes escribieron mientras estaba cerrada.
- Un cumpleaños el 29/2 se celebra el 28/2 en los años no bisiestos.

## Pestaña Ajustes

### Conexión al chat

Aparece cuando la función está activada. Cada plataforma muestra si su chat está conectado:

- **Twitch**: si no hay ningún canal configurado, la fila muestra **No hay canal de Twitch: vincula Twitch primero** con **Ir a ajustes**. Conecta Twitch primero: [Ajustes de Twitch](../platforms/twitch).
- **YouTube**: si el chat no está conectado, la fila muestra **Conexión automática** e **Introducir manualmente** (te lleva al campo de la URL del chat en Ajustes). Si usas la conexión automática y has iniciado sesión con Google, muestra **Si no se conecta cuando estés en directo, pulsa Conectar en la página Chat**. Consulta [Ajustes de YouTube](../platforms/youtube-settings) y [Chat](./chat).

Una vez conectada una plataforma, también muestra **En directo**, **Sin directo** o **No se sabe si está en directo**. Las alertas solo se activan con **En directo**.

### Ajustes

| Campo | Descripción |
|-------|-------------|
| **Días después del cumpleaños que aún cuentan** | 0–30. Predeterminado: 7. 0 = solo el día del cumpleaños. |
| **Duración** | Cuánto tiempo permanece cada alerta en pantalla, en segundos (1–60). Predeterminado: 6. |

### Probar las alertas

Haz clic en **Probar alerta** para enviar una alerta de ejemplo a OBS, con un espectador de prueba y la fecha de hoy. Solo se muestra en OBS y no se registra nunca, y funciona aunque el interruptor de la barra lateral izquierda esté desactivado. El botón cambia brevemente a **Enviado**.

## Pestaña Espectadores

### Añadir un espectador

Hay dos formas de añadir un espectador:

- **+ Añadir de los participantes recientes**: elige a alguien que haya escrito hace poco. El formulario se abre con su nombre como nota, su cuenta ya vinculada y la fecha de hoy como cumpleaños.
- **+ Añadir por nombre**: escribe tú mismo el nombre de la cuenta.

**Participantes recientes del chat** muestra los espectadores que escribieron mientras el chat estaba conectado (hasta 200, conservados 30 días). Haz clic en **Actualizar** para actualizar la lista. Los espectadores que ya están en la lista muestran **Añadido** y no se pueden volver a elegir. Cuando la lista es larga, aparece un cuadro de búsqueda.

Rellena el formulario:

1. **Nota / apodo**: el nombre con el que lo conoces, p. ej. `Ana`. Opcional.
2. **Cumpleaños**: mes y día (sin año).
3. **Cuentas**: al menos una cuenta. Un espectador puede tener varias cuentas, p. ej. de Twitch y de YouTube.
   - **＋ Escribir una cuenta**: elige **Twitch** o **YouTube** y escribe el nombre. En Twitch, usa el usuario o el nombre visible; en YouTube, el @identificador o el nombre del canal.
   - **＋ De los participantes recientes**: añade una cuenta que ya esté vinculada.
   - **✕** quita una cuenta.
4. Haz clic en **Guardar** (o pulsa Intro). **Cancelar** (o Esc) cierra el formulario.

### Nombres escritos y vinculación

Un nombre escrito se vincula a la cuenta la primera vez que ese espectador escribe en el chat. La coincidencia no distingue mayúsculas de minúsculas e ignora una `@` inicial. Los nombres pueden repetirse, así que es más seguro elegir entre los participantes recientes.

En YouTube, escribe el @identificador: si **Mostrar el nombre de los espectadores en vez del @alias** no está activado en la página Chat, puede que un nombre de canal no coincida nunca.

Cada cuenta de la lista muestra:

- **Vinculado: [nombre]**: la cuenta está vinculada.
- **Esperando a que “[nombre]” escriba**: un nombre escrito que aún no se ha vinculado.
- **Recién vinculado**: la aplicación vinculó esta cuenta automáticamente cuando el espectador escribió. Comprueba que sea realmente esa persona y haz clic en **✓ Es correcto**, o en **Desvincular** si no lo es.
- **Esta cuenta ya está en “[nombre]”**: el nombre escrito coincide con una cuenta que pertenece a otro espectador de la lista. Una cuenta solo puede pertenecer a un espectador, así que cambia el nombre aquí o elimina uno de los dos.

**Desvincular** abre un cuadro debajo de la cuenta. Tras desvincular, se busca en su lugar el nombre del cuadro (puedes cambiarlo), y la cuenta se vuelve a vincular la próxima vez que ese espectador escriba.

### La lista

Primero aparecen los espectadores cuya alerta de cumpleaños está pendiente y después los próximos cumpleaños. Cuando hay más de 5 espectadores, aparece un cuadro de búsqueda. Cada espectador muestra:

- **Esperando a que escriba**: es la época de su cumpleaños; la alerta aparece en cuanto escriba en el chat.
- **🎂 Mostrado el [fecha]**: la alerta de este cumpleaños ya se ha mostrado.
- **▶ Repetir**: vuelve a mostrar en OBS la alerta de este espectador. Funciona en cualquier momento y no se registra nunca.
- **Editar**: cambia la nota, el cumpleaños o las cuentas. Si cambias el cumpleaños, la alerta puede volver a activarse para la nueva fecha.
- **Eliminar**: haz clic en **Eliminar** y luego en **Confirmar eliminación**.

## Pestaña Apariencia

### Vista previa

La vista previa usa la misma página que la fuente de OBS. Usa el selector de color junto a **Vista previa** para cambiar el fondo de la vista previa, y haz clic en **▶ Repetir animación** para volver a reproducir la animación de la alerta.

### Estilo unificado / Independiente por plataforma

- **Estilo unificado**: Twitch y YouTube usan el mismo estilo de alerta.
- **Independiente por plataforma**: cada plataforma tiene su propio estilo. Elige **Twitch** o **YouTube** con los botones de debajo y edita sus ajustes. La primera vez que cambias, las plataformas que no has personalizado copian el estilo unificado actual, cada una con su propio color de barra de cuenta atrás.

**Restablecer valores** restaura el estilo predeterminado del estilo que estás editando.

### Imagen

- **Elegir imagen**: elige una imagen del gestor de recursos. Si no hay ninguna, se muestra un emoji de tarta. **Borrar** quita la imagen.
- **Tamaño de la imagen**: 1–400 px.
- **Posición de la imagen**: **Izquierda**, **Derecha**, **Arriba** o **Abajo**.

### Sonido

Elige un sonido integrado: **Ninguno**, **Campanilla** (predeterminado), **Moneda**, **Campana**, **Pop**, **Fanfarria**. Haz clic en **▶** para escucharlo. Haz clic en **Elegir sonido** para usar tu propio archivo de sonido del gestor de recursos.

### Texto personalizado

Escribe la línea que se muestra en la alerta. Déjalo vacío para usar el texto predeterminado: `¡Feliz cumpleaños, {name}!` Puedes usar:

| Marcador | Se sustituye por |
|-------------|---------------|
| `{name}` | El nombre del espectador en el chat |
| `{label}` | Tu nota / apodo (el nombre del chat si la nota está vacía) |
| `{birthday}` | El cumpleaños, p. ej. `10/20` |
| `{MM}` `{DD}` | Mes y día con dos cifras, para crear tu propio formato, p. ej. `{DD}/{MM}` |
| `{date}` | El cumpleaños en el idioma del overlay |
| `{platform}` | El nombre de la plataforma |

### Texto y color

- **Texto**: define la fuente, el tamaño y el color de **Texto personalizado** y **Nombre del espectador**.
- **Color**: **Fondo**, **Sombra** y **Barra de cuenta atrás**.

### CSS personalizado

Despliega **CSS personalizado** para editar el CSS del estilo que estás editando (el unificado o el de la plataforma seleccionada). **Restablecer valores** restaura el CSS de la plantilla y **Gestionar recursos** abre el gestor de recursos. Aquí también se pueden aplicar temas de Steam Workshop. Mientras haya un tema aplicado, el CSS es de solo lectura. Consulta [Temas](./themes).

:::info Versión de prueba
- Hasta 3 espectadores en la lista. Si la lista tiene más (p. ej., procedentes de un guardado de la versión completa), los espectadores sobrantes aparecen bloqueados 🔒: nunca activan una alerta y no se pueden editar ni repetir.
- CSS personalizado solo está disponible en la versión completa.
- La alerta muestra una marca de agua en OBS.

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: ¿No hay sonido en el stream?**
Comprueba que **Controlar audio vía OBS** está marcado en las propiedades de la fuente de navegador y que la fuente no está silenciada en el mezclador de OBS. Comprueba también que **Sonido** no está en **Ninguno**.

**Q: Un espectador escribió en el chat el día de su cumpleaños, pero no apareció ninguna alerta.**
Comprueba que el interruptor de la barra lateral izquierda está activado, que la **Conexión al chat** de la pestaña **Ajustes** muestra **En directo** para esa plataforma y que la cuenta de la lista muestra **Vinculado** o que el nombre escrito coincide con su nombre en el chat. Si la alerta se mostró mientras OBS no estaba abierto, usa **▶ Repetir**.

**Q: He añadido la fuente de OBS tarde. ¿Repetirá las alertas anteriores?**
No. Una fuente recién abierta solo muestra las alertas que llegan después de conectarse. Usa **▶ Repetir** en la pestaña **Espectadores** para volver a mostrar una.
