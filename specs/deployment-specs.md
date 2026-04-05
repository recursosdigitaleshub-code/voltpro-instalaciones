# Especificaciones de Despliegue: VoltPro Instalaciones

## 1. Plataforma de Hosting
- **Servicio**: GitHub Pages (gratuito)
- **Tipo**: Sitio estatico (HTML/CSS/JS sin build)
- **HTTPS**: Incluido automaticamente
- **CDN**: Fastly (incluido en GitHub Pages)

## 2. Repositorio
- **Carpeta**: `VoltPro/` dentro del repositorio de Prototipos
- **Rama de produccion**: `main`
- **Metodo de despliegue**: GitHub Actions (artifact-based)

## 3. Workflow de Despliegue
Archivo: `VoltPro/.github/workflows/deploy.yml`
- **Trigger**: Push a rama `main`
- **Proceso**: Checkout → Upload artifact (solo carpeta VoltPro) → Deploy to Pages
- **Sin build step**: El sitio se sirve directamente

## 4. Checklist Pre-Despliegue
- [ ] Verificar que `index.html` carga correctamente en navegador local
- [ ] Comprobar responsive en 375px, 768px y 1200px+
- [ ] Verificar todos los links de navegacion (smooth scroll)
- [ ] Validar formulario de contacto
- [ ] Confirmar favicon visible
- [ ] Verificar meta tags SEO
- [ ] Probar menu hamburguesa en movil
- [ ] Revisar galeria de proyectos

## 5. Formulario de Contacto
**Estado actual**: Solo validacion en cliente (JavaScript). El formulario NO envia datos.

**Para habilitar envio real** (futuro):
- **Opcion 1**: Formspree — Cambiar form action
- **Opcion 2**: Netlify Forms — Migrar hosting
- **Opcion 3**: EmailJS — Envio directo desde JS
