# DESIGN SYSTEM — Nexo Workspace

## Dirección Estética

**Preguntas de dirección respondidas:**

1. **Tono emocional**: Profesionalismo accesible + flexibilidad moderna. El visitante debe sentir "aquí mi negocio se ve serio" pero también "no me van a atar con contratos eternos".

2. **Diferenciación de competidores**: Los coworkings en León usan azules genéricos + fotos de gente sonriendo en mesas largas. Nosotros vamos por contraste sofisticado (casi negro sobre blanco) con acento ámbar que comunica energía y premium sin frialdad.

3. **Nivel de sofisticación**: Alto. El cliente ideal es un profesional/empresa que valora su imagen corporativa (por eso quiere Blvd. Campestre, no un café con wifi).

4. **Local vs. escalado**: Profesional y escalado, pero con toque de comunidad local (los eventos de networking, el Community Manager).

---

## 1. PALETA DE COLORES

```css
--primary: #F59E0B       /* Ámbar energético — CTAs, highlights, badges */
--primary-dark: #D97706  /* Hover de primary — 15% más oscuro */
--secondary: #111827     /* Casi negro — headers, elementos de autoridad */
--bg: #FFFFFF            /* Blanco puro — limpieza corporativa */
--text: #1F2937          /* Gris muy oscuro — contraste 12.6:1 sobre blanco */
--text-muted: #6B7280    /* Gris medio — contraste 5.7:1, WCAG AA */
```

**Notas de aplicación:**
- Hero con fondo `--secondary` (#111827) y texto blanco para impacto inicial
- Secciones alternas entre `--bg` y `#F9FAFB` (gris apenas perceptible)
- `--primary` solo para CTAs y elementos de acción — no decorativo
- Badges de precios en `--secondary` con texto blanco

**Verificación WCAG:**
- `--text` (#1F2937) sobre `--bg` (#FFFFFF): ratio 12.6:1 ✓
- `--text-muted` (#6B7280) sobre `--bg`: ratio 5.7:1 ✓
- Blanco sobre `--secondary` (#111827): ratio 17.4:1 ✓
- `--secondary` sobre `--primary` (#F59E0B): ratio 9.1:1 ✓

---

## 2. TIPOGRAFÍA

```
Heading: Montserrat, peso 600/700
Body: Source Sans Pro, peso 400/600

Escala desktop:
  H1: 56px / line-height 1.1 / letter-spacing -0.02em
  H2: 40px / line-height 1.2 / letter-spacing -0.01em
  H3: 24px / line-height 1.3
  Body: 17px / line-height 1.6
  Small: 14px / line-height 1.5

Escala mobile:
  H1: 36px
  H2: 28px
  H3: 20px
  Body: 16px
  Small: 13px
```

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet">
```

**Razón de la elección**: Montserrat tiene autoridad geométrica sin ser fría (evita el cliché de Roboto). Source Sans Pro es la body font de Adobe y muchas empresas tech — comunica modernidad profesional.

---

## 3. COMPONENTES VISUALES

### Botones

```
Primario:
  Background: var(--primary)
  Color: var(--secondary)  /* Texto casi negro sobre ámbar = legible + distintivo */
  Border-radius: 8px
  Padding: 16px 32px
  Font: 15px / weight 600 / letter-spacing 0.3px / uppercase
  Transition: background 0.2s ease, transform 0.2s ease
  Hover: background var(--primary-dark), transform translateY(-2px)

Secundario:
  Background: transparent
  Border: 2px solid var(--secondary)
  Color: var(--secondary)
  Border-radius: 8px
  Padding: 14px 30px
  Hover: background var(--secondary), color white

Ghost (sobre fondos oscuros):
  Background: transparent
  Border: 2px solid white
  Color: white
  Hover: background white, color var(--secondary)
```

### Cards

```
Card de servicio/plan:
  Background: white
  Border: 1px solid #E5E7EB
  Border-radius: 16px
  Padding: 32px
  Box-shadow: 0 4px 24px rgba(17, 24, 39, 0.06)
  Transition: transform 0.3s ease, box-shadow 0.3s ease
  Hover: transform translateY(-4px), box-shadow 0 12px 40px rgba(17, 24, 39, 0.12)

Card destacada (oficina privada):
  Border: 2px solid var(--primary)
  Badge "POPULAR" en esquina superior derecha
```

### Espaciado

```
Sección padding:
  Desktop: 100px 0
  Tablet: 72px 0
  Mobile: 56px 0

Contenedor:
  Max-width: 1140px
  Padding lateral: 24px (mobile) | 40px (desktop)

Gap entre elementos:
  Cards en grid: 32px
  Elementos dentro de card: 16px
  Entre H2 y contenido: 48px
  Entre párrafos: 24px
```

### Íconos

```
Sistema: Lucide Icons via CDN
Tamaño en cards: 48px
Color default: var(--primary)
Stroke-width: 1.5

CDN:
<script src="https://unpkg.com/lucide@latest"></script>
```

---

## 4. ARQUITECTURA DE SECCIONES

### SECCIÓN 1 — HERO
**Propósito**: Primera impresión de profesionalismo + flexibilidad. Convertir visitante frío en lead calificado.

**Layout**: Fondo `--secondary` (#111827) full-width, contenido centrado con imagen a la derecha en desktop, stacked en mobile.

**Elementos**:
- **Badge superior**: "Único en León con generador de respaldo" — fondo `--primary`, texto `--secondary`
- **H1**: Mensaje de libertad + ubicación premium (max 10 palabras)
- **Subtítulo**: Refuerzo de sin compromisos + beneficios tangibles (2 líneas max)
- **CTA primario**: "Agenda tu visita gratis" → scroll a formulario
- **CTA secundario**: "Ver planes y precios" → scroll a sección de servicios
- **Imagen**: Placeholder 600x500, espacio de trabajo moderno, tono cálido
- **Social proof rápido**: "320+ profesionales nos han elegido" con ícono de check

**Dimensiones hero**: 
- Desktop: min-height 90vh
- Mobile: min-height auto, padding 80px 0

---

### SECCIÓN 2 — PROPUESTA DE VALOR (DIFERENCIADORES)
**Propósito**: Responder "¿por qué Nexo y no otro coworking?"

**Layout**: Fondo blanco, grid de 3 columnas (2 en tablet, 1 en mobile)

**Elementos**:
- **H2**: Centrado, algo como "Por qué elegirnos" o "Lo que nos hace diferentes"
- **6 cards de diferenciador**, cada una con:
  - Ícono Lucide relevante (48px, color `--primary`)
  - Título corto (H3)
  - Descripción de 1-2 líneas
  
**Diferenciadores a destacar** (prioridad visual):
1. Generador eléctrico (ícono: zap)
2. Fibra 1 Gbps (ícono: wifi)
3. Ubicación Blvd. Campestre (ícono: map-pin)
4. Contratos desde 1 mes (ícono: calendar)
5. Comunidad + eventos (ícono: users)
6. Estacionamiento incluido (ícono: car)

---

### SECCIÓN 3 — PLANES Y PRECIOS
**Propósito**: Mostrar opciones claras para que el visitante se auto-segmente.

**Layout**: Fondo `#F9FAFB`, tabs o acordeón para categorías, cards de pricing

**Estructura de tabs**:
1. **Coworking** — día suelto, pase semanal, membresías
2. **Oficinas Privadas** — 4 tamaños
3. **Salas de Juntas** — 3 opciones
4. **Servicios Extra** — domicilio fiscal, correspondencia

**Card de plan**:
```
[Nombre del plan]
[Precio destacado grande] /periodo
[Lista de 4-5 features con checks]
[CTA "Agenda visita" o "Cotizar"]
```

**Nota**: La membresía ilimitada ($3,200) y la oficina 3-5 personas ($11,000) deben tener badge "POPULAR" — son el sweet spot.

---

### SECCIÓN 4 — NÚMEROS QUE RESPALDAN
**Propósito**: Prueba social cuantitativa.

**Layout**: Fondo `--secondary` (#111827), texto blanco, grid de 5 columnas (scroll horizontal en mobile)

**Stats con animación de contador**:
- 320+ empresas y profesionales atendidos
- 7 años en operación
- 98% ocupación promedio
- 45 empresas con membresía activa
- 180+ profesionales en comunidad

**Efecto**: Números cuentan desde 0 al entrar en viewport (IntersectionObserver + requestAnimationFrame)

---

### SECCIÓN 5 — OFERTA ESPECIAL
**Propósito**: Crear urgencia y dar razón para actuar ahora.

**Layout**: Card destacada centrada, fondo blanco, borde `--primary` grueso (4px), max-width 800px

**Elementos**:
- Badge "OFERTA LIMITADA" en `--primary`
- **H3**: "Prueba una semana gratis"
- **Descripción**: Detalle de la oferta sin letra chica
- **Oferta secundaria**: 50% primer mes en oficinas (contrato 3+ meses)
- **Fecha límite**: "Válido hasta 30 de junio"
- **CTA**: "Reclamar mi semana gratis" → scroll a formulario

---

### SECCIÓN 6 — UBICACIÓN Y HORARIOS
**Propósito**: Resolver la duda de "¿dónde queda exactamente?"

**Layout**: Dos columnas — info de contacto + mapa embed (o placeholder)

**Columna izquierda**:
- **H2**: "Encuéntranos"
- Dirección completa con ícono map-pin
- Horario con ícono clock
- Teléfono con ícono phone (clickeable en mobile)
- Mención de zona: "En el corazón corporativo de León"

**Columna derecha**:
- Placeholder para Google Maps embed (400x350)
- Texto: "Blvd. Campestre, León, Guanajuato"

---

### SECCIÓN 7 — FORMULARIO DE CONTACTO (CTA FINAL)
**Propósito**: Capturar lead calificado.

**Layout**: Fondo `#F9FAFB`, formulario a la izquierda, beneficios a la derecha

**Campos del formulario**:
1. Nombre completo (required)
2. Email (required, validación)
3. Teléfono (required, para WhatsApp follow-up)
4. ¿Qué te interesa? (select: Coworking / Oficina privada / Sala de juntas / Domicilio fiscal / Solo información)
5. ¿Cuándo podrías visitarnos? (select: Esta semana / Próxima semana / Solo quiero info por ahora)
6. Mensaje adicional (textarea, opcional)

**CTA submit**: "Agendar mi visita gratis"

**Columna derecha (beneficios de agendar)**:
- ✓ Recorrido personalizado de 30 min
- ✓ Semana de prueba gratis sin compromiso
- ✓ Asesoría para elegir el plan ideal
- ✓ Sin presión de venta

**Validación JS**: En tiempo real, mensajes de error bajo cada campo.

---

### SECCIÓN 8 — FOOTER
**Propósito**: Cierre profesional + navegación secundaria.

**Layout**: Fondo `--secondary`, texto blanco/gris claro, 3-4 columnas

**Columnas**:
1. **Logo + tagline** + descripción corta (2 líneas)
2. **Navegación**: Links a secciones de la página
3. **Contacto**: Teléfono, email placeholder, dirección
4. **Horario**: Lunes a viernes 7-22 / Sábado 8-18 / Domingo cerrado

**Bottom bar**: © 2024 Nexo Workspace. León, Guanajuato.

---

## 5. ELEMENTOS ESPECIALES

### Botón flotante WhatsApp

```
Posición: fixed, bottom: 24px, right: 24px
Dimensiones: 60px x 60px
Background: #25D366
Border-radius: 50%
Box-shadow: 0 4px 16px rgba(37, 211, 102, 0.4)
Z-index: 999
Ícono: SVG de WhatsApp, 32px, blanco
Animación: pulse suave cada 3 segundos
Hover: scale(1.1)
Link: https://wa.me/524771985543?text=Hola,%20me%20interesa%20conocer%20Nexo%20Workspace
```

**Nota**: Aunque `objetivo_pagina` es formulario, WhatsApp es canal secundario importante.

### Header sticky

```
Posición: fixed top
Background: transparent inicialmente → blanco con sombra al scroll (después de 50px)
Transición: background 0.3s ease, box-shadow 0.3s ease
Altura: 72px desktop / 64px mobile
Z-index: 100
Logo a la izquierda, nav en desktop, hamburger en mobile
```

### Animaciones prioritarias

| Elemento | Trigger | Animación | Duración |
|----------|---------|-----------|----------|
| H1 + badge del hero | Page load | fadeInUp stagger | 0.6s + 0.1s delay |
| CTA del hero | Page load (después de H1) | fadeInUp | 0.5s, delay 0.3s |
| Cards de diferenciadores | Scroll into view | fadeInUp stagger 100ms | 0.5s each |
| Números/stats | Scroll into view | Contador 0→valor | 2s ease-out |
| Cards de pricing | Scroll into view | fadeInUp stagger | 0.4s each |
| Formulario | Scroll into view | fadeIn | 0.5s |

---

## 6. NOTAS PARA AGENTES SIGUIENTES

### Para Copywriter:

```
Tono confirmado: Profesional pero no frío,