# Especificaciones del Proyecto: VoltPro Instalaciones

## 1. Vision General
Pagina web profesional para VoltPro Instalaciones, empresa argentina especializada en trabajos electricos y armado de tableros. El sitio debe transmitir confianza, profesionalismo y experiencia tecnica.

## 2. Objetivos
- Promocionar servicios especializados en electricidad y tableros
- Mostrar proyectos realizados con galeria visual
- Facilitar el contacto para solicitar presupuestos
- Posicionar la marca como referente en el sector electrico argentino
- Compatibilidad total con dispositivos moviles

## 3. Alcance
### Incluido
- Hero section con propuesta de valor impactante
- Seccion de servicios detallada (6 servicios principales)
- Galeria de proyectos realizados con imagenes
- Seccion "Sobre Nosotros" con historia y experiencia
- Formulario de contacto para presupuestos y consultas
- Diseno responsive (movil, tablet, desktop)
- Logo SVG y favicon
- SEO basico (meta tags, Schema.org)

### Excluido
- E-commerce / carrito de compras
- Backend / base de datos
- Sistema de autenticacion
- Blog o seccion de noticias
- Chat en vivo

## 4. Arquitectura
### Tech Stack
- HTML5 semantico
- CSS3 con custom properties
- Vanilla JavaScript (ES6+)
- Google Fonts (CDN)
- Sin frameworks, sin dependencias, sin build tools

### Estructura de la pagina
1. **Navbar** (sticky): Logo + navegacion (Inicio, Servicios, Proyectos, Nosotros, Contacto)
2. **Hero** (100vh): Titulo, tagline, CTA "Solicitar Presupuesto"
3. **Servicios** (grid 3x2): 6 tarjetas de servicios con iconos
4. **Proyectos** (galeria): Grid de imagenes con overlay descriptivo
5. **Sobre Nosotros** (2 columnas): Historia + cifras destacadas
6. **Contacto** (2 columnas): Formulario + Informacion/Mapa
7. **Footer**: Copyright, redes sociales, datos rapidos

## 5. Diseno Visual
### Paleta
| Color | Hex | Uso |
|-------|-----|-----|
| Azul Electrico | #0056B3 | Primario, navbar, botones |
| Azul Oscuro | #002244 | Texto, fondos oscuros |
| Ambar Energia | #F5A623 | Acentos, CTAs, iconos |
| Blanco | #FFFFFF | Fondo principal, texto sobre oscuro |
| Gris Claro | #F4F6F8 | Fondos alternos de secciones |
| Gris Medio | #6C757D | Texto secundario |
| Gris Oscuro | #343A40 | Texto cuerpo |
| Verde Seguridad | #28A745 | Indicadores de confianza |

### Tipografia
- Titulos: Montserrat (600, 700, 800) — moderna, tecnica, solida
- Cuerpo: Open Sans (300, 400, 600) — legible, profesional
- Decorativo/numeros: Rajdhani (500, 700) — aspecto tecnico/industrial

### Responsive Breakpoints
- Movil: < 768px (diseno base, mobile-first)
- Tablet: 768px - 1199px
- Desktop: >= 1200px

## 6. Secciones Detalladas

### 6.1 Navbar
- Fija en la parte superior (sticky)
- Logo SVG + nombre "VoltPro"
- Links: Inicio | Servicios | Proyectos | Nosotros | Contacto
- Menu hamburguesa en movil (< 768px)
- Efecto de fondo solido al hacer scroll

### 6.2 Hero Section
- Altura completa (100vh)
- Fondo azul oscuro con gradiente diagonal y patron electrico sutil
- Titulo: "VoltPro Instalaciones" (Montserrat)
- Subtitulo: "Soluciones electricas profesionales" (Open Sans)
- Tagline: "Potenciamos tu proyecto con seguridad y eficiencia"
- Boton CTA: "Solicitar Presupuesto" → smooth scroll a contacto
- Indicador de scroll animado

### 6.3 Servicios
- Fondo gris claro (#F4F6F8)
- Titulo: "Nuestros Servicios"
- Subtitulo: "Soluciones integrales para cada necesidad electrica"
- 6 tarjetas en grid (3x2 desktop, 2x3 tablet, 1x6 movil):
  1. Instalaciones Residenciales (icono casa/enchufe)
  2. Instalaciones Industriales (icono fabrica/rayo)
  3. Mantenimiento Preventivo (icono herramienta/check)
  4. Reparacion de Urgencia (icono rayo/reloj)
  5. Armado de Tableros (icono tablero/circuito)
  6. Configuracion y Automatizacion (icono engranaje/pantalla)
- Cada tarjeta: icono SVG + titulo + descripcion breve

### 6.4 Proyectos / Galeria
- Fondo blanco
- Titulo: "Proyectos Realizados"
- Subtitulo: "Conoce nuestro trabajo"
- Grid de 6 tarjetas de proyecto (placeholders con gradientes simulando fotos)
- Cada tarjeta: imagen placeholder + overlay con titulo y categoria
- Categorias: Residencial, Industrial, Tableros

### 6.5 Sobre Nosotros
- Fondo gris claro (#F4F6F8)
- Titulo: "Sobre Nosotros"
- Layout 2 columnas:
  - **Texto**: Historia de la empresa, experiencia, valores
  - **Cifras**: Anios de experiencia, proyectos completados, clientes satisfechos
- Enfasis en experiencia argentina y conocimiento local de normativas

### 6.6 Contacto
- Fondo azul oscuro (#002244) para contraste
- Titulo: "Contactanos"
- Subtitulo: "Solicita tu presupuesto sin compromiso"
- Layout 2 columnas (stack en movil):
  - **Formulario**: Nombre, Email, Telefono, Tipo de servicio (select), Mensaje, Boton enviar
  - **Info**: Direccion (Buenos Aires), telefono, email, horario, Google Maps embebido
- Validacion de formulario en cliente (campos requeridos, formato email, telefono argentino)

### 6.7 Footer
- Fondo azul oscuro mas profundo
- Logo + "VoltPro Instalaciones"
- Links rapidos de navegacion
- Datos de contacto resumidos
- Redes sociales (placeholder links)
- Copyright 2026

## 7. SEO y Metadatos
- Title: "VoltPro Instalaciones | Soluciones Electricas Profesionales en Argentina"
- Meta description en espanol argentino
- Open Graph tags para redes sociales
- Schema.org ElectricalContractor structured data
- lang="es-AR" en el HTML
- Favicon SVG

## 8. Accesibilidad
- Contraste minimo 4.5:1 (WCAG AA)
- HTML semantico con landmarks
- ARIA labels donde sea necesario
- Navegacion por teclado funcional
- Alt text en imagenes

## 9. Rendimiento
- Sin dependencias externas (excepto Google Fonts)
- SVGs inline o como archivos pequenos
- CSS optimizado con custom properties
- JavaScript minimo y diferido (defer)
- Imagenes de galeria como placeholders CSS (gradientes)

## 10. Contenido Localizado (Argentina)
- Uso de "vos" o neutro formal en textos
- Telefono formato argentino (+54 11 XXXX-XXXX)
- Direccion en Buenos Aires, Argentina
- Referencia a normativas electricas argentinas (AEA)
- Moneda: pesos argentinos (mencion de presupuestos)
