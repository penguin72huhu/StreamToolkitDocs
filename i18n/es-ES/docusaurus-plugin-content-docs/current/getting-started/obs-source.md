---
sidebar_position: 2
---

# Cómo agregar fuentes en OBS

La mayoría de las funciones de Stream Toolkit requieren agregar una "Fuente de navegador" en OBS para mostrarse en la transmisión en vivo.

## Paso 1: Copiar la URL de la función

En Stream Toolkit, cada página de función muestra su URL local correspondiente, con el formato:

```
http://127.0.0.1:7272/feature-name
```

Copia la URL de la función que deseas agregar.

## Paso 2: Agregar fuente de navegador en OBS

1. En la sección **Fuentes** de OBS, haz clic en el botón **+** en la parte inferior
2. Selecciona **Navegador**
3. Selecciona **Crear nuevo**, ingresa un nombre para la fuente (por ejemplo, "Barra de donaciones") y haz clic en **Aceptar**
4. Pega la URL copiada en el Paso 1 en el campo **URL**
5. Ajusta el **Ancho** y el **Alto** según sea necesario
6. Haz clic en **Aceptar**

{/* TODO: 截圖 — OBS 新增瀏覽器來源 */}

## Funciones que requieren marcar "Controlar audio vía OBS" a continuación

Incluye salida de audio; debe marcar **Controlar audio vía OBS** en la configuración de la fuente de navegador para que el sonido aparezca correctamente en la transmisión:

- **Media Board** — Vídeo, Sonido
- **Alertas de donaciones**
- **Solicitudes de canciones**

Cómo marcarlo:
1. In la lista de fuentes de OBS, haz clic derecho en la fuente de navegador
2. Selecciona **Propiedades**
3. Busca **Controlar audio vía OBS** y márcalo
4. Haz clic en **Aceptar**

{/* TODO: 截圖 — 勾選「使用 OBS 控制音訊」 */}

:::tip
Si todavía no hay sonido después de marcarlo, confirma que la fuente no esté silenciada en el mezclador de OBS.
:::
