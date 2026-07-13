---
sidebar_position: 1
---

# Configuración de la API de YouTube

Este tutorial explica cómo obtener la **API Key** y el **ID del canal** de la YouTube Data API, utilizados para la función `Marcador de momentos destacados de stream`.

## YouTube Data API

### Paso 1: Abrir Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Inicia sesión con tu cuenta de Google

### Paso 2: Habilitar YouTube Data API v3

1. Busca `YouTube Data API v3` en la barra de búsqueda superior

   ![Search YouTube Data API v3](./Youtube_API_Key_img/API_step2-1.png)

2. Haz clic en el resultado de la búsqueda
3. Haz clic en **Enable**

   ![Click Enable](./Youtube_API_Key_img/API_step2-3.png)

### Paso 3: Crear clave API

1. Haz clic en **Credentials** a la izquierda

   ![Click Credentials](./Youtube_API_Key_img/API_step3-1.png)

2. Selecciona **Create credentials** → **API Key**

   ![Create credentials](./Youtube_API_Key_img/API_step3-2.png)

### Paso 4: Configurar clave API

1. Escribe cualquier **Name** (por ejemplo: `StreamToolkit`)
2. En **Select API restrictions** marca `YouTube Data API v3` y haz clic en **OK**

   ![Select API restrictions](./Youtube_API_Key_img/API_step4-2.png)

3. Deja desmarcado **Authenticate API calls through a service account**
4. En **Application restrictions** selecciona **None**

   ![Select None for Application restrictions](./Youtube_API_Key_img/API_step4-4.png)

5. Haz clic en **Create**

### Paso 5: Introducir en la App

1. Pega la API Key obtenida en el campo **YouTube API** de la App

![Paste into app](./Youtube_API_Key_img/API_step5.png)

## ID del canal

### Paso 1: Abrir la configuración de YouTube

1. Ve a [YouTube](https://www.youtube.com)
2. Haz clic en tu foto de perfil en la esquina superior derecha
3. Selecciona **Configuración**

![Open YouTube settings](./Youtube_API_Key_img/ID_step1.png)

### Paso 2: Obtener ID del canal

1. Selecciona **Configuración avanzada** en el menú de la izquierda

   ![Advanced settings](./Youtube_API_Key_img/ID_step2-1.png)

2. Copia el **ID del canal** y pégalo de nuevo en la App

   ![Copy Channel ID](./Youtube_API_Key_img/ID_step2-2.png)

## Preguntas frecuentes

**Q: ¿Tiene límites de uso la clave API?**
Sí. La YouTube Data API v3 tiene un límite diario gratuito de 10,000 unidades. El uso normal en transmisiones no lo superará.

**Q: ¿Aparece el error "API Key no válida"?**
Asegúrate de que la YouTube Data API v3 esté habilitada y de que estés utilizando la clave del proyecto correcto.

**Q: ¿Se puede hacer pública la clave?**
No se recomienda. Si la clave se filtra y se abusa de ella, tu límite diario se agotará rápidamente.
