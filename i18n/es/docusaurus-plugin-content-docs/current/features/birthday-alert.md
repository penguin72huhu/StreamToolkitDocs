---
sidebar_position: 8.2
---

# Alertas de cumpleaños

Agrega los cumpleaños de tus espectadores a una lista. Cuando un espectador de la lista escribe en el chat durante tu transmisión el día de su cumpleaños o poco después, aparece una alerta de cumpleaños en pantalla. Cada espectador recibe una sola alerta por cumpleaños.

## URL de la fuente de OBS

```
http://127.0.0.1:7272/birthday-alert
```

Copia la URL desde la parte superior de la página **Configuración de Alertas de cumpleaños** y agrégala en OBS como fuente de navegador. Consulta [Cómo agregar fuentes en OBS](../getting-started/obs-source).

:::warning
Las alertas reproducen un sonido. Marca **Controlar audio vía OBS** en las propiedades de la fuente de navegador; de lo contrario, el sonido no se escuchará en la transmisión.
:::

Activa el interruptor junto a **Alertas de cumpleaños** en la barra lateral izquierda. Solo mientras esté activado la app se conecta al chat y revisa los cumpleaños. Los botones **Probar alerta** y **Repetir** funcionan incluso cuando está desactivado.

La página tiene tres pestañas: **Configuración**, **Espectadores** y **Apariencia**.

{/* TODO: 截圖 — 粉絲生日通知設定頁 */}

## Cómo funciona

- Un espectador de la lista que escriba en el chat desde el día de su cumpleaños hasta la cantidad de días que configures después recibe una alerta. No se muestra nada antes del cumpleaños.
- Cada espectador recibe una sola alerta por cumpleaños. Un cumpleaños del 12/28 que se anuncia el 1/2 sigue contando como el cumpleaños del año anterior.
- Las alertas solo se activan mientras la plataforma donde escribió el espectador está en directo. Mientras no estás en directo, o mientras la app todavía no puede saber si lo estás, escribir en el chat no activa ni registra la alerta; aparecerá la próxima vez que escriba durante una transmisión.
- El historial del chat que se carga al conectar el chat de YouTube no cuenta, así que reiniciar la app no anunciará a quienes escribieron mientras estaba cerrada.
- Un cumpleaños del 2/29 cae el 2/28 en los años no bisiestos.

## Pestaña Configuración

### Conexión al chat

Se muestra cuando la función está activada. Cada plataforma indica si su chat está conectado:

- **Twitch**: si no hay un canal configurado, la fila muestra **No hay canal de Twitch: vincula Twitch primero** con **Ir a ajustes**. Conecta Twitch primero: [Configuración de Twitch](../platforms/twitch).
- **YouTube**: si el chat no está conectado, la fila muestra **Conexión automática** e **Introducir manualmente** (te lleva al campo de la URL del chat en Configuración). Si usas la conexión automática y has iniciado sesión con Google, muestra **Si no se conecta cuando estés en directo, pulsa Conectar en la página Chat**. Consulta [Configuración de YouTube](../platforms/youtube-settings) y [Chat](./chat).

Una vez conectada una plataforma, también muestra **En directo**, **Sin directo** o **No se sabe si está en directo**. Las alertas solo se activan con **En directo**.

### Configuración

| Campo | Descripción |
|-------|-------------|
| **Días después del cumpleaños que aún cuentan** | 0–30. Predeterminado: 7. 0 = solo el día del cumpleaños. |
| **Tiempo de visualización** | Cuánto tiempo permanece cada alerta en pantalla, en segundos (1–60). Predeterminado: 6. |

### Probar alertas

Haz clic en **Probar alerta** para enviar una alerta de ejemplo a OBS, con un espectador de prueba y la fecha de hoy. Solo se muestra en OBS y nunca se registra, y funciona incluso con el interruptor de la barra lateral izquierda desactivado. El botón cambia brevemente a **Enviado**.

## Pestaña Espectadores

### Agregar un espectador

Hay dos formas de agregar un espectador:

- **+ Añadir de los participantes recientes**: elige a alguien que haya escrito recientemente. El formulario se abre con su nombre como nota, su cuenta ya vinculada y la fecha de hoy como cumpleaños.
- **+ Añadir por nombre**: escribe tú mismo el nombre de la cuenta.

**Participantes recientes del chat** muestra a los espectadores que escribieron mientras el chat estaba conectado (hasta 200, se conservan durante 30 días). Haz clic en **Actualizar** para refrescar la lista. Los espectadores que ya están en la lista muestran **Añadido** y no se pueden volver a elegir. Cuando la lista es larga aparece un cuadro de búsqueda.

Completa el formulario:

1. **Nota / apodo**: el nombre con el que lo conoces, p. ej. `Alex`. Opcional.
2. **Cumpleaños**: mes y día (sin año).
3. **Cuentas**: al menos una cuenta. Un espectador puede tener varias cuentas, p. ej. una de Twitch y otra de YouTube.
   - **＋ Escribir una cuenta**: elige **Twitch** o **YouTube** y escribe el nombre. En Twitch, usa el nombre de usuario o el nombre visible; en YouTube, el @identificador o el nombre del canal.
   - **＋ De los participantes recientes**: agrega una cuenta que ya está vinculada.
   - **✕** quita una cuenta.
4. Haz clic en **Guardar** (o presiona Enter). **Cancelar** (o Esc) cierra el formulario.

### Nombres escritos y vinculación

Un nombre escrito se vincula a la cuenta la primera vez que ese espectador escribe en el chat. La coincidencia no distingue mayúsculas de minúsculas e ignora una `@` inicial. Los nombres pueden repetirse, así que es más seguro elegir entre los participantes recientes.

En YouTube, escribe el @identificador: si **Mostrar el nombre de los espectadores en vez del @alias** no está activado en la página Chat, un nombre de canal puede no coincidir nunca.

Cada cuenta de la lista muestra:

- **Vinculado: [nombre]**: la cuenta está vinculada.
- **Esperando a que “[nombre]” escriba**: un nombre escrito que todavía no se ha vinculado.
- **Recién vinculado**: la app vinculó esta cuenta automáticamente cuando el espectador escribió. Comprueba que sea la persona correcta y haz clic en **✓ Es correcto**, o haz clic en **Desvincular** si no lo es.
- **Esta cuenta ya está en “[nombre]”**: el nombre escrito coincidió con una cuenta que pertenece a otro espectador de la lista. Una cuenta solo puede pertenecer a un espectador, así que cambia el nombre aquí o elimina uno de los dos.

**Desvincular** abre un cuadro debajo de la cuenta. Tras desvincular, se busca el nombre del cuadro (puedes cambiarlo) y la cuenta se vuelve a vincular la próxima vez que ese espectador escriba.

### La lista

Primero aparecen los espectadores cuya alerta de cumpleaños está pendiente y luego los próximos cumpleaños. Cuando hay más de 5 espectadores aparece un cuadro de búsqueda. Cada espectador muestra:

- **Esperando que escriba**: es su época de cumpleaños; la alerta aparece en cuanto escriba en el chat.
- **🎂 Mostrado el [fecha]**: la alerta de este cumpleaños ya se mostró.
- **▶ Repetir**: vuelve a mostrar la alerta de este espectador en OBS. Funciona en cualquier momento y nunca se registra.
- **Editar**: cambia la nota, el cumpleaños o las cuentas. Si cambias el cumpleaños, la alerta puede volver a activarse para la nueva fecha.
- **Eliminar**: haz clic en **Eliminar** y luego en **Confirmar eliminación**.

## Pestaña Apariencia

### Vista previa

La vista previa usa la misma página que la fuente de OBS. Usa el selector de color junto a **Vista previa** para cambiar el fondo de la vista previa y haz clic en **▶ Repetir animación** para reproducir de nuevo la animación de la alerta.

### Estilo unificado / Independiente por plataforma

- **Estilo unificado**: Twitch y YouTube usan el mismo estilo de alerta.
- **Independiente por plataforma**: cada plataforma tiene su propio estilo. Elige **Twitch** o **YouTube** con los botones de abajo y edita su configuración. La primera vez que cambies, las plataformas que no hayas personalizado copian el estilo unificado actual, cada una con su propio color de barra de cuenta regresiva.

**Restaurar predeterminado** restablece el estilo predeterminado del estilo que estás editando.

### Imagen

- **Elegir imagen**: elige una imagen del administrador de recursos. Si no eliges ninguna, se muestra un emoji de pastel. **Borrar** quita la imagen.
- **Tamaño de la imagen**: 1–400 px.
- **Posición de la imagen**: **A la izquierda**, **A la derecha**, **Arriba** o **Abajo**.

### Sonido

Elige un sonido integrado: **Ninguno**, **Campanilla** (predeterminado), **Moneda**, **Campana**, **Pop**, **Fanfarria**. Haz clic en **▶** para escucharlo. Haz clic en **Elegir sonido** para usar tu propio archivo de sonido desde el administrador de recursos.

### Texto personalizado

Escribe la línea que se muestra en la alerta. Déjala vacía para usar el texto predeterminado: `¡Feliz cumpleaños, {name}!` Puedes usar:

| Marcador | Se reemplaza por |
|-------------|---------------|
| `{name}` | El nombre del espectador en el chat |
| `{label}` | Tu nota / apodo (el nombre del chat si la nota está vacía) |
| `{birthday}` | El cumpleaños, p. ej. `10/20` |
| `{MM}` `{DD}` | Mes y día con dos dígitos, para armar tu propio formato, p. ej. `{DD}/{MM}` |
| `{date}` | El cumpleaños en el idioma del overlay |
| `{platform}` | El nombre de la plataforma |

### Texto y color

- **Texto**: configura la fuente, el tamaño y el color de **Texto personalizado** y **Nombre del espectador**.
- **Color**: **Fondo**, **Sombra** y **Barra de cuenta regresiva**.

### CSS personalizado

Expande **CSS personalizado** para editar el CSS del estilo que estás editando (el unificado o el de la plataforma seleccionada). **Restaurar predeterminado** restablece el CSS de la plantilla y **Administrar recursos** abre el administrador de recursos. Aquí también se pueden aplicar temas de Steam Workshop. Mientras haya un tema aplicado, el CSS es de solo lectura. Consulta [Temas](./themes).

:::info Versión de prueba
- Hasta 3 espectadores en la lista. Si la lista tiene más (p. ej. de un archivo guardado de la versión completa), los espectadores adicionales se muestran bloqueados 🔒: nunca activan una alerta y no se pueden editar ni repetir.
- El CSS personalizado solo está disponible en la versión completa.
- La alerta muestra una marca de agua en OBS.

Consulta [Comparación entre versión de prueba y versión completa](../getting-started/trial-comparison).
:::

## Preguntas frecuentes

**Q: ¿No hay sonido en la transmisión?**
Comprueba que **Controlar audio vía OBS** esté marcado en las propiedades de la fuente de navegador y que la fuente no esté silenciada en el mezclador de OBS. Comprueba también que **Sonido** no esté configurado en **Ninguno**.

**Q: Un espectador escribió el día de su cumpleaños, pero no apareció ninguna alerta.**
Comprueba que el interruptor de la barra lateral izquierda esté activado, que **Conexión al chat** en la pestaña **Configuración** muestre **En directo** para esa plataforma y que la cuenta en la lista muestre **Vinculado** o que el nombre escrito coincida con su nombre en el chat. Si se mostró mientras OBS no estaba abierto, usa **▶ Repetir**.

**Q: Agregué la fuente de OBS tarde. ¿Se repetirán las alertas anteriores?**
No. Una fuente recién abierta solo muestra las alertas que llegan después de conectarse. Usa **▶ Repetir** en la pestaña **Espectadores** para volver a mostrar una.
