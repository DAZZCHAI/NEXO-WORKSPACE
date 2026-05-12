# SEO SPECIALIST OUTPUT — Nexo Workspace

---

## 1. KEYWORDS OBJETIVO

```
Keyword principal: coworking en León Guanajuato
Intención: transaccional + local (búsqueda de solución con intención de compra)

Keywords secundarias:
  - oficinas privadas León
  - espacios de trabajo León
  - sala de juntas León
  - domicilio fiscal León
  - membresía coworking León
  - oficina ejecutiva Blvd. Campestre
  - workspace profesional Guanajuato

Long-tail local:
  - "coworking en León sin contrato anual"
  - "oficina privada para 3 personas León"
  - "sala de juntas por hora León"
  - "generador eléctrico coworking León"
  - "fibra óptica 1 Gbps León oficinas"
  - "estacionamiento incluido coworking León"
  - "domicilio fiscal Blvd. Campestre"
  - "workspace con eventos networking León"
```

---

## 2. META TAGS — Listos para `<head>`

### Página principal (`index.html`):

```html
<!-- Fundacionales -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="language" content="es-MX">

<!-- SEO -->
<title>Coworking León | Oficinas Privadas sin Contrato | Nexo Workspace</title>
<meta name="description" content="Coworking y oficinas privadas en León, Guanajuato. Desde $280/día. Fibra óptica 1 Gbps, generador eléctrico, estacionamiento. Primera semana gratis. Agenda tu visita.">
<meta name="keywords" content="coworking León, oficinas privadas León, sala de juntas León, espacios de trabajo, domicilio fiscal, Blvd. Campestre">
<meta name="robots" content="index, follow">
<meta name="author" content="Nexo Workspace">
<link rel="canonical" href="https://nexoworkspace.mx/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Coworking León | Tu oficina sin contratos de años">
<meta property="og:description" content="Acceso a coworking profesional desde $280/día. Oficinas privadas, salas de juntas y servicios ejecutivos en el corazón corporativo de León.">
<meta property="og:url" content="https://nexoworkspace.mx/">
<meta property="og:image" content="https://nexoworkspace.mx/og-image.jpg">
<meta property="og:locale" content="es_MX">
<meta property="og:site_name" content="Nexo Workspace">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Coworking en León, Guanajuato | Nexo Workspace">
<meta name="twitter:description" content="Oficinas, coworking y salas de juntas profesionales sin compromisos de años. Primera semana gratis.">
<meta name="twitter:image" content="https://nexoworkspace.mx/og-image.jpg">

<!-- Preconnect a servicios externos -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.gstatic.com">
```

---

## 3. SCHEMA JSON-LD — Listo para `<head>`

Usar estructura `@graph` con LocalBusiness (subtipo: Coworking Space) + WebSite:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": "https://nexoworkspace.mx/#organization",
      "@type": "LocalBusiness",
      "name": "Nexo Workspace",
      "description": "Coworking, oficinas privadas y salas de juntas profesionales en León, Guanajuato. Contratos sin compromisos de años. Fibra óptica 1 Gbps, generador eléctrico, estacionamiento incluido.",
      "url": "https://nexoworkspace.mx/",
      "telephone": "+524771985543",
      "email": "info@nexoworkspace.mx",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Boulevard Campestre",
        "addressLocality": "León",
        "addressRegion": "Guanajuato",
        "addressCountry": "MX"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "CLOSED"
        }
      ],
      "priceRange": "$$$",
      "image": "https://nexoworkspace.mx/og-image.jpg",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexoworkspace.mx/logo.png",
        "width": 250,
        "height": 60
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "45",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Coworking y Oficinas",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Día Suelto Coworking",
            "price": "280",
            "priceCurrency": "MXN",
            "itemOffered": {
              "@type": "Service",
              "name": "Acceso a coworking por día"
            }
          },
          {
            "@type": "Offer",
            "name": "Pase Semanal",
            "price": "980",
            "priceCurrency": "MXN",
            "itemOffered": {
              "@type": "Service",
              "name": "Acceso ilimitado a coworking por semana"
            }
          },
          {
            "@type": "Offer",
            "name": "Membresía Ilimitada",
            "price": "3200",
            "priceCurrency": "MXN",
            "itemOffered": {
              "@type": "Service",
              "name": "Acceso ilimitado a coworking por mes"
            }
          },
          {
            "@type": "Offer",
            "name": "Oficina Privada 1-2 personas",
            "price": "6500",
            "priceCurrency": "MXN",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "MXN",
              "price": "6500",
              "billingDuration": "P1M"
            },
            "itemOffered": {
              "@type": "Service",
              "name": "Oficina privada cerrada"
            }
          }
        ]
      },
      "sameAs": [],
      "areaServed": {
        "@type": "City",
        "name": "León",
        "addressRegion": "Guanajuato",