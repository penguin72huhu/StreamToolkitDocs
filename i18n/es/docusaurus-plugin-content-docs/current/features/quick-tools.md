---
sidebar_position: 1
---

# Herramientas rápidas

**Herramientas rápidas** es una pequeña ventana de control que puedes mantener abierta junto a tu juego u OBS. Te permite activar y desactivar funciones y usar sus controles más comunes sin volver a la ventana principal.

## Abrir Herramientas rápidas

Usa cualquiera de estas opciones:

- Haz clic en **⚡ Herramientas rápidas** en la parte superior de la barra lateral izquierda de la ventana principal
- Haz clic derecho en el icono de Stream Toolkit en la bandeja y elige **Abrir herramientas rápidas**

Si la ventana ya está abierta, pasa al frente en lugar de abrirse una segunda.

{/* TODO: 截圖 — 快速工具視窗 */}

## La ventana

- **Moverla**: arrastra la barra de título
- **📌 Fijar / Desfijar**: mantiene la ventana encima de las demás ventanas. Al abrir la ventana está fijada
- **✕**: cierra la ventana

La ventana sigue el tema y el idioma de la interfaz de la app.

## Panel de interruptores rápidos

Haz clic en la flecha **›** del borde izquierdo para desplegar el panel **Interruptores rápidos**. Muestra todas las funciones:

- El interruptor activa o desactiva la función (igual que el interruptor junto a cada función en la barra lateral principal)
- **⚙** (**Abrir configuración**) muestra la ventana principal en la página de configuración de esa función

Haz clic fuera del panel o vuelve a hacer clic en la flecha para cerrarlo.

Las funciones aparecen en el mismo orden que en la barra lateral principal. Para cambiar el orden, arrastra el control **⠿** junto a una función en la barra lateral de la ventana principal.

## Tarjetas de funciones

Cada función activada que tiene controles aparece como una tarjeta. Las tarjetas empiezan contraídas: haz clic en el título de una tarjeta para expandirla o contraerla. Si ninguna de estas funciones está activada, la ventana muestra **Aún no has activado ninguna función**.

| Función | Qué ofrece la tarjeta |
|---------|---------------------|
| [Control de escenas OBS](./obs-scene) | Estado de la conexión, más un botón por cada cambio de escena o alternancia de fuentes configurado (la escena actual aparece resaltada). Los botones están desactivados mientras no hay conexión. La tarjeta solo aparece cuando existe al menos una entrada de atajo |
| [Traducción de voz](./voice-translate) | Botón **REC**: mantenlo presionado para grabar y suéltalo para traducir |
| [Marcador de momentos destacados de stream](./highlight) | Botón **MARK**. Después de marcar, se muestran el icono de la plataforma y la marca de tiempo durante 5 segundos |
| [Barra de donaciones](./donate) | Monto actual / meta con una barra de progreso, un campo **Agregar monto manualmente** con **Agregar**, y **Reiniciar a cero** |
| [Temporizador](./timer) | Para cada temporizador mostrado: nombre, tiempo, **Iniciar** / **Pausar**, **Restablecer** y los botones para agregar tiempo que configuraste. Los cronómetros muestran **Detener** y **Vuelta** en su lugar |
| [Ruleta](./turntable) | Para cada ruleta mostrada: **Girar** y **Restablecer** |
| [Media Board](./multimedia) | Botones para las imágenes fijadas (mostrar / ocultar), los videos fijados (reproducir) y los sonidos fijados (reproducir) |
| [Solicitudes de canciones](./song-request) | **Reproducir** / **Pausar**, **Detener**, **Siguiente** |

Si un control tiene un atajo asignado, el atajo se muestra en su botón.

Las funciones que no tienen nada que operar aquí (Chat, Barra de objetivos de Twitch, Alertas de donaciones, Panel de donaciones, Reloj, Muro de emotes, Encuestas en vivo, Sorteos, Bot de chat) solo tienen su interruptor de encendido/apagado en el panel Interruptores rápidos.

:::tip
**Reiniciar a cero** en la tarjeta de Barra de donaciones requiere dos clics: el primer clic cambia el botón a **Confirmar reinicio**, y un segundo clic en menos de 10 segundos pone el monto en cero.
:::

:::info
Los temporizadores y las ruletas siguen el **Modo de visualización** de cada función: con **Un solo temporizador** / **Una sola ruleta** solo se muestra el seleccionado actualmente; con **Varios temporizadores** / **Varias ruletas** solo se muestran los que agregaste. Si no hay ninguno, la tarjeta muestra **Aún no hay temporizador** / **Aún no hay ruleta**.
:::
