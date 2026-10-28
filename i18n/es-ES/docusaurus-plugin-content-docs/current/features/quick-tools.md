---
sidebar_position: 1
---

# Herramientas rápidas

**Herramientas rápidas** es una pequeña ventana de control que puedes tener abierta junto al juego o a OBS. Te permite activar y desactivar funciones y usar sus controles más habituales sin volver a la ventana principal.

## Abrir Herramientas rápidas

Usa cualquiera de estas opciones:

- Haz clic en **⚡ Herramientas rápidas** en la parte superior de la barra lateral izquierda de la ventana principal
- Haz clic derecho en el icono de Stream Toolkit de la bandeja del sistema y elige **Abrir herramientas rápidas**

Si la ventana ya está abierta, pasa al frente en lugar de abrirse una segunda.

{/* TODO: 截圖 — 快速工具視窗 */}

## La ventana

- **Moverla**: arrastra la barra de título
- **📌 Fijar arriba / Dejar de fijar**: mantiene la ventana por encima de las demás. Al abrir la ventana, está fijada
- **✕**: cierra la ventana

La ventana sigue el tema y el idioma de la interfaz de la aplicación.

## Panel Interruptores rápidos

Haz clic en la flecha **›** del borde izquierdo para desplegar el panel **Interruptores rápidos**. En él aparecen todas las funciones:

- El interruptor activa o desactiva la función (igual que el interruptor junto a cada función en la barra lateral principal)
- **⚙** (**Abrir ajustes**) abre la ventana principal en la página de ajustes de esa función

Haz clic fuera del panel o vuelve a hacer clic en la flecha para cerrarlo.

Las funciones aparecen en el mismo orden que en la barra lateral principal. Para cambiar el orden, arrastra el asa **⠿** junto a una función en la barra lateral de la ventana principal.

## Tarjetas de funciones

Cada función activada que tiene controles aparece como una tarjeta. Las tarjetas empiezan plegadas: haz clic en el título de una tarjeta para desplegarla o plegarla. Si no hay ninguna de estas funciones activada, la ventana muestra **Aún no hay ninguna función activada**.

| Función | Qué ofrece la tarjeta |
|---------|---------------------|
| [Control de escenas OBS](./obs-scene) | Estado de la conexión y un botón por cada cambio de escena o alternancia de fuentes configurados (la escena actual aparece resaltada). Los botones están desactivados mientras no hay conexión. La tarjeta solo aparece cuando existe al menos una entrada de atajo |
| [Traducción de voz](./voice-translate) | Botón **REC**: mantenlo pulsado para grabar y suéltalo para traducir |
| [Marcador de momentos destacados de stream](./highlight) | Botón **MARK**. Tras crear una marca, se muestran el icono de la plataforma y la marca de tiempo durante 5 segundos |
| [Barra de donaciones](./donate) | Cantidad actual / objetivo con una barra de progreso, un campo **Añadir cantidad manualmente** con **Añadir**, y **Poner a cero** |
| [Temporizador](./timer) | Para cada temporizador mostrado: nombre, tiempo, **Iniciar** / **Pausar**, **Restablecer** y los botones para añadir tiempo que hayas configurado. Los cronómetros muestran **Detener** y **Vuelta** en su lugar |
| [Ruleta](./turntable) | Para cada ruleta mostrada: **Girar** y **Restablecer** |
| [Media Board](./multimedia) | Botones para las imágenes fijadas (mostrar / ocultar), los vídeos fijados (reproducir) y los sonidos fijados (reproducir) |
| [Solicitudes de canciones](./song-request) | **Reproducir** / **Pausar**, **Detener**, **Siguiente** |

Si un control tiene un atajo asignado, el atajo aparece en su botón.

Las funciones que no tienen nada que manejar aquí (Chat, Barra de objetivos de Twitch, Alertas de donaciones, Panel de donaciones, Reloj, Muro de emotes, Encuestas en directo, Sorteos, Bot de chat) solo tienen su interruptor de activación en el panel Interruptores rápidos.

:::tip
**Poner a cero** en la tarjeta de la Barra de donaciones necesita dos clics: el primer clic pone el botón en modo de confirmación (**Poner a cero**) y un segundo clic en menos de 10 segundos deja la cantidad a cero.
:::

:::info
Los temporizadores y las ruletas siguen el **Modo de visualización** de cada función: con **Un solo cronómetro** / **Una sola ruleta** solo se muestra el seleccionado en ese momento; con **Varios cronómetros** / **Varias ruletas** solo se muestran los que hayas añadido. Si no hay ninguno, la tarjeta muestra **Aún no hay cronómetros** / **Aún no hay ruletas**.
:::
