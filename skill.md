---
name: adsterra-monetag-optimizer
description: >
  Skill para optimizar páginas web monetizadas con AdsTerra y/o Monetag que reciben tráfico
  desde redes sociales (Instagram, TikTok, Facebook, etc.). Úsala cuando el usuario tenga
  una página con anuncios invasivos, problemas de acceso, bloqueos por antivirus, caídas de
  visitas o quiera mejorar la experiencia del usuario sin perder ingresos publicitarios.
  Actívala siempre que el usuario mencione: AdsTerra, Monetag, pop-ups, push notifications,
  anuncios invasivos, página bloqueada por antivirus, visitas bajas, tráfico social que no
  convierte, o quiera migrar/mejorar una página de WordPress monetizada.
---

# AdsTerra / Monetag Page Optimizer

## Objetivo
Optimizar páginas monetizadas con redes publicitarias de alto volumen (AdsTerra, Monetag, PropellerAds, etc.) para:
- Evitar bloqueos de antivirus y navegadores
- Reducir la percepción de "spam" sin eliminar los ingresos
- Mejorar la experiencia de usuario llegando desde redes sociales
- Aumentar el tiempo en página y reducir el rebote inmediato

---

## PASO 1 — Diagnóstico inicial

Antes de tocar código, haz estas preguntas o busca las respuestas en el código existente:

```
1. ¿Qué formatos de anuncios están activos? (popunder, push, banner, interstitial, native)
2. ¿Cuántos scripts de ads se cargan simultáneamente?
3. ¿Hay redirecciones automáticas al entrar a la página?
4. ¿La página usa HTTPS?
5. ¿Hay múltiples scripts de tracking/analytics además de los de ads?
6. ¿El dominio tiene historial de reportes en listas negras?
```

**Herramienta de diagnóstico rápido** — ejecuta esto si tienes acceso al código:
```bash
# Contar scripts externos en el HTML
grep -c '<script' index.html

# Buscar scripts de ads conocidos
grep -iE "(adsterra|monetag|propeller|popunder|push\.js|sw\.js)" index.html

# Verificar si hay service workers (usados por Monetag push)
find . -name "sw.js" -o -name "service-worker.js"
```

---

## PASO 2 — Problemas comunes y sus soluciones

### 🔴 Problema: Antivirus / Chrome bloquea la página

**Causas:**
- Múltiples popunders al mismo tiempo
- Scripts cargando desde dominios en listas negras
- Service Worker de push notifications sin consentimiento visible

**Solución:**
```html
<!-- ❌ MALO: Cargar todos los scripts al inicio -->
<script src="//ad.adsterra.com/popunder.js"></script>
<script src="//monetag.com/sw-check.js"></script>
<script src="//monetag.com/push.js"></script>

<!-- ✅ BUENO: Lazy load con delay después de interacción -->
<script>
  // Solo cargar ads después de que el usuario haga scroll o click
  let adsLoaded = false;
  function loadAds() {
    if (adsLoaded) return;
    adsLoaded = true;
    
    // Popunder solo una vez por sesión
    if (!sessionStorage.getItem('popShown')) {
      const s = document.createElement('script');
      s.src = '//tu-script-adsterra.js';
      document.head.appendChild(s);
      sessionStorage.setItem('popShown', '1');
    }
  }
  
  // Activar en scroll (más natural, menos agresivo)
  window.addEventListener('scroll', loadAds, { once: true });
  // Fallback: después de 3 segundos
  setTimeout(loadAds, 3000);
</script>
```

---

### 🔴 Problema: Push notifications sin consentimiento = bandera de spam

**Solución con consentimiento visible:**
```html
<!-- Banner de consentimiento ANTES de pedir push -->
<div id="push-consent-bar" style="
  position: fixed; bottom: 0; left: 0; right: 0;
  background: #1a1a2e; color: white; padding: 12px 20px;
  display: flex; align-items: center; justify-content: space-between;
  z-index: 9999; font-family: sans-serif; font-size: 14px;
">
  <span>🔔 ¿Quieres recibir notificaciones de contenido nuevo?</span>
  <div>
    <button onclick="acceptPush()" style="background:#4CAF50;color:white;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;margin-right:8px">Sí, acepto</button>
    <button onclick="rejectPush()" style="background:transparent;color:#aaa;border:1px solid #aaa;padding:8px 16px;border-radius:4px;cursor:pointer">No gracias</button>
  </div>
</div>

<script>
function acceptPush() {
  document.getElementById('push-consent-bar').remove();
  localStorage.setItem('pushConsent', 'accepted');
  // Aquí cargar el script de Monetag push
  const s = document.createElement('script');
  s.src = '//tu-script-monetag-push.js';
  document.head.appendChild(s);
}
function rejectPush() {
  document.getElementById('push-consent-bar').remove();
  localStorage.setItem('pushConsent', 'rejected');
}

// No mostrar si ya respondió
if (localStorage.getItem('pushConsent')) {
  document.getElementById('push-consent-bar').remove();
}
</script>
```

---

### 🔴 Problema: Página lenta = usuario rebota antes de que carguen los anuncios

**Optimización de carga:**
```html
<!-- En el <head>, SOLO lo esencial -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- CSS crítico inline, el resto defer -->
<style>/* Solo los estilos above-the-fold */</style>
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'">

<!-- Scripts de ads: SIEMPRE al final del body o con defer/async -->
<!-- ❌ Nunca en el <head> sin async -->
<script async src="//tu-ad-script.js"></script>
```

**Métricas objetivo:**
- First Contentful Paint: < 2 segundos
- Time to Interactive: < 4 segundos
- Sin layout shifts por carga de anuncios (usar contenedores con altura fija)

---

### 🔴 Problema: Visitantes desde Instagram/Facebook ven error o página en blanco

**Causa:** Los in-app browsers de Instagram/Facebook bloquean ciertos scripts.

**Solución — Detectar y adaptar:**
```javascript
function isInAppBrowser() {
  const ua = navigator.userAgent;
  return /Instagram|FBAN|FBAV|Twitter|Line\/|Musical\.ly/i.test(ua);
}

if (isInAppBrowser()) {
  // Modo suave: no cargar popunders ni push
  // Solo mostrar banners nativos
  console.log('In-app browser detected - loading light ad version');
  loadLightAds(); // Solo banners, sin pop
} else {
  loadFullAds(); // Versión completa
}
```

---

### 🔴 Problema: Dominio en lista negra de antivirus

**Diagnóstico:**
```bash
# Verificar en VirusTotal (manual) o usar estas APIs gratis:
# https://www.virustotal.com/gui/domain/tudominio.com
# https://transparencyreport.google.com/safe-browsing/search?url=tudominio.com
# https://urlvoid.com/
```

**Si el dominio está reportado:**
1. Usar un dominio limpio como "landing" y redirigir el tráfico de ads ahí
2. Separar el dominio de contenido del dominio de monetización
3. Contactar a AdsTerra/Monetag para solicitar revisión de scripts

---

## PASO 3 — Estructura recomendada de página optimizada

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Tu título]</title>
  
  <!-- Preconnect solo a dominios de ads que vas a usar -->
  <link rel="preconnect" href="//las3.highest-gyorsposta.com">
  
  <!-- CSS crítico inline -->
  <style>
    body { margin: 0; font-family: sans-serif; }
    .ad-container { min-height: 250px; background: #f5f5f5; }
  </style>
</head>
<body>

  <!-- CONTENIDO PRIMERO, anuncios después -->
  <main>
    <!-- Tu contenido real aquí -->
  </main>

  <!-- Banners con contenedor de tamaño fijo (evita layout shift) -->
  <div class="ad-container">
    <!-- Banner AdsTerra aquí -->
  </div>

  <!-- Push consent bar (ver código arriba) -->
  
  <!-- Scripts al final, con lazy load -->
  <script>
    // Sistema de carga diferida (ver PASO 2)
  </script>

</body>
</html>
```

---

## PASO 4 — Checklist final antes de publicar

```
□ Solo 1 popunder por sesión (sessionStorage check)
□ Push notifications con consentimiento visible
□ Scripts de ads cargan después del contenido (lazy/defer)
□ Contenedores de anuncios con altura definida (no layout shift)
□ Detección de in-app browser (Instagram, Facebook)
□ HTTPS activo en el dominio
□ Dominio verificado en VirusTotal y Google Safe Browsing
□ Tiempo de carga < 4 segundos (probar en PageSpeed Insights)
□ Sin redirecciones automáticas al primer click
□ Meta tags Open Graph para mejor preview en redes sociales
```

---

## PASO 5 — Meta tags para mejor CTR desde redes sociales

```html
<!-- Open Graph (Facebook, Instagram, WhatsApp) -->
<meta property="og:title" content="Tu título atractivo">
<meta property="og:description" content="Descripción que genere curiosidad">
<meta property="og:image" content="https://tudominio.com/imagen-1200x630.jpg">
<meta property="og:url" content="https://tudominio.com/pagina">
<meta property="og:type" content="website">

<!-- Twitter/X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Tu título">
<meta name="twitter:image" content="https://tudominio.com/imagen.jpg">
```

> **Nota:** La imagen OG es crítica. Sin ella, Instagram/Facebook no genera preview y el CTR cae drásticamente.

---

## Notas importantes

- **AdsTerra Popunder**: Limitar a 1 por sesión. Más de eso activa banderas de spam.
- **Monetag Push**: Siempre pedir consentimiento explícito. Sin consentimiento = reportes de spam.
- **Scripts de ambas redes**: Si usas AdsTerra Y Monetag simultáneamente, cargarlos con al menos 1 segundo de diferencia para evitar conflictos.
- **Dominio separado**: Si el dominio actual tiene historial de reportes, considera usar un dominio nuevo y redireccionar el contenido.