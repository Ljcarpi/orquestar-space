# OrquestAr — Landing Page

## Qué es esto

Landing page de conversión para OrquestAr (`orquestar.space`), un SaaS B2B argentino que combina un asistente de ventas IA por WhatsApp con un CRM en tiempo real, orientado a pequeños comercios minoristas (ferreterías, almacenes, tiendas de barrio).

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Componentes UI:** 21st.dev (se instalan con `npx shadcn@latest add "https://21st.dev/r/..."`)
- **Animaciones:** Framer Motion
- **Fonts:** Syne (headings), DM Sans (body) — importar desde Google Fonts

## Identidad visual

- Fondos: `#0a0118` (principal), `#120825` (secundario)
- Acento: `#d4a843` (oro/ámbar), hover `#e8c068`
- Texto: `#f0e6d3` (crema), secundario `#a89ec4` (lavanda)
- Glassmorphism: `rgba(255,255,255,0.05)` con `backdrop-blur`
- Estética: cinematográfica, premium, oro sobre púrpura oscuro
- Logo: `/assets/img/logo.png`

## Tono y copy

- Español rioplatense: voseo siempre ("tenés", "podés", "gestioná", "mirá")
- Tono: profesional pero cercano, orientado a conversión
- Público: dueños de comercios minoristas argentinos, cansados de perder ventas y tiempo

## Documento de referencia

El archivo **"OrquestAr Propuesta Comercial.docx"** contiene toda la info del producto: features, flujos, propuesta de valor, integraciones y pricing. Consultalo para cualquier contenido o copy.

## URLs clave

- WhatsApp CTA: `https://wa.me/5491162857653?text=Hola%2C%20quiero%20una%20demo%20de%20OrquestAr`
- Email: `contacto@orquestar.space`
- Teléfono: +54 9 11 6285-7653
- Términos: `/terminos`
- Privacidad: `/privacidad`

## Convenciones

- Mobile-first siempre
- Componentes en `/components`, páginas en `/app`
- Cada sección de la landing es un componente separado
- Lazy loading para componentes pesados (shaders, animaciones)
- SEO: meta tags y Open Graph en el layout principal
