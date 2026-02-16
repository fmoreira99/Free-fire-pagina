# 🤖 Prompt Maestro: Game-UI Blog Estático (React + Vite)

**Instrucción para la IA:** Copia el siguiente prompt y pégalo en el chat de tu agente de IA para que genere el código exacto del proyecto.

---

## 📝 El Prompt

> **Actúa como un Desarrollador Frontend Senior experto en React, animaciones web (Framer Motion) y diseño de interfaces.** >
> Tu objetivo es crear una Single Page Application (SPA) con React, optimizada exclusivamente para ser desplegada como sitio estático en **GitHub Pages**. La temática visual del portal debe ser un "Videojuego Moderno" (Game UI) con estilo Cyberpunk/Neón.
>
> ### **1. Requerimientos Técnicos y Dependencias:**
> * **Framework:** React creado con Vite (`npm create vite@latest`).
> * **Librerías Obligatorias:** `framer-motion` (animaciones 2D/3D), `lucide-react` (iconografía), `canvas-confetti` (efectos de partículas/destellos) y `gh-pages` (para el despliegue).
> * **Base de datos:** Ninguna. Todo el contenido debe ser estático y consumirse de un archivo local `src/data.js` que contenga un array de objetos con decenas de artículos falsos de prueba.
>
> ### **2. Estructura y Navegación:**
> * **Menú Minimalista:** Solo tres secciones navegables (Inicio, Artículos, Sobre el Autor).
> * **Buscador Funcional:** Un input de texto en la parte superior que filtre los artículos por título en tiempo real.
> * **Paginación Manual:** Un sistema de paginación (Estilo "Nivel 1, Nivel 2...") para navegar por los artículos del `data.js` sin sobrecargar la vista. Muestra un máximo de 6 artículos por página.
> * **Espacios Publicitarios:** Integra contenedores o "banners" (AdSlots) entre el contenido con un diseño de marcador de posición (placeholder) que tenga animaciones de parpadeo (glitch/pulse) para que destaquen.
>
> ### **3. Estética y Efectos Visuales (Game UI):**
> * **Colores y Tipografía:** Fondos muy oscuros (casi negros) con acentos en colores neón brillantes (Cyan, Magenta, Verde Lima). Usa fuentes monoespaciadas o de estilo terminal.
> * **Efectos 3D/2D:** Las tarjetas de los artículos deben tener un efecto de inclinación 3D (rotateY/rotateX) o escalado al pasar el mouse (hover) usando Framer Motion.
> * **Interacciones:** Al hacer clic en botones importantes (como "Leer más" o en el logo), debe dispararse un efecto visual atractivo usando `canvas-confetti`.
>
> ### **4. Formato de Entrega Exigido (IMPORTANTE):**
> Como soy usuario de **Windows**, necesito que tu respuesta sea directa y orientada al "copiar y pegar":
> 1.  Dame el bloque de código exacto para la terminal de Windows (PowerShell/CMD) con los comandos para crear el proyecto e instalar las dependencias.
> 2.  Muestra la estructura exacta de carpetas y archivos que debo crear.
> 3.  Dame el código completo y sin omitir partes de los siguientes archivos:
>     * `package.json` (Debe incluir los scripts `"predeploy": "npm run build"` y `"deploy": "gh-pages -d dist"`).
>     * `src/data.js` (Con al menos 10 artículos de prueba).
>     * `src/App.jsx` (Con toda la lógica de paginado, buscador y animaciones).
>     * `src/index.css` o `App.css` (Con todos los estilos neón y Game UI).
> 4.  Dame los comandos finales de Git para subirlo y desplegarlo en GitHub Pages.
>
> **No asumas nada. Dame todo el código listo para copiar y ejecutar.**

---

## 🎯 Objetivo de este archivo
Mantener un registro claro de las instrucciones dadas a la IA para poder iterar o regenerar el proyecto en el futuro si se necesita cambiar la temática visual o la estructura base.