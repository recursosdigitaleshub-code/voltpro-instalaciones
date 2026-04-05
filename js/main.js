/**
 * VoltPro Instalaciones - Script principal
 * Vanilla JS (ES6+), sin dependencias externas
 */
'use strict';

(function () {
  // =========================================================================
  // Utilidades
  // =========================================================================

  /**
   * Selecciona un elemento del DOM de forma segura
   */
  const qs = (selector, parent = document) => parent.querySelector(selector);
  const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  // =========================================================================
  // 1. Efecto de scroll en la barra de navegacion
  // =========================================================================

  const navbar = qs('#navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  // Ejecutar al cargar por si la pagina ya esta desplazada
  handleNavbarScroll();

  // =========================================================================
  // 2. Menu movil (toggle)
  // =========================================================================

  const navToggle = qs('#navToggle');
  const navMenu = qs('#navMenu');

  function openMobileMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.add('navbar__nav--open');
    navToggle.classList.add('navbar__toggle--active');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove('navbar__nav--open');
    navToggle.classList.remove('navbar__toggle--active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMobileMenu() {
    const isOpen = navMenu && navMenu.classList.contains('navbar__nav--open');
    isOpen ? closeMobileMenu() : openMobileMenu();
  }

  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
  }

  // Cerrar menu al hacer clic en cualquier enlace de navegacion
  qsa('.navbar__link').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // =========================================================================
  // 3. Scroll suave para enlaces internos
  // =========================================================================

  const NAVBAR_HEIGHT = 70; // Offset para la barra fija

  qsa('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Ignorar enlaces vacios

      const target = qs(targetId);
      if (!target) return;

      e.preventDefault();

      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });

  // =========================================================================
  // 4. Validacion del formulario de contacto
  // =========================================================================

  const contactForm = qs('#contactForm');
  const formStatus = qs('#formStatus');

  /**
   * Expresion regular para email basico
   */
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * Expresion regular para telefono argentino
   * Permite: +54, espacios, guiones, entre 7 y 15 digitos
   */
  const PHONE_REGEX = /^[\+]?[0-9\s\-]{7,15}$/;

  /**
   * Muestra un error en un campo especifico
   */
  function showFieldError(field) {
    if (!field) return;
    field.classList.add('input--error');
  }

  /**
   * Limpia el error de un campo cuando el usuario escribe
   */
  function clearFieldError(field) {
    if (!field) return;
    field.classList.remove('input--error');
  }

  /**
   * Muestra el estado del formulario (exito o error)
   */
  function showFormStatus(message, type) {
    if (!formStatus) return;
    // Limpiar clases previas
    formStatus.classList.remove(
      'contact__form-status--success',
      'contact__form-status--error'
    );
    formStatus.textContent = message;
    formStatus.classList.add(`contact__form-status--${type}`);
  }

  /**
   * Valida todos los campos del formulario
   * Retorna true si es valido, false en caso contrario
   */
  function validateForm() {
    let isValid = true;

    // Nombre: obligatorio, minimo 2 caracteres
    const nombre = qs('#nombre', contactForm) || qs('[name="nombre"]', contactForm);
    if (nombre) {
      if (!nombre.value.trim() || nombre.value.trim().length < 2) {
        showFieldError(nombre);
        isValid = false;
      }
    }

    // Email: obligatorio, formato valido
    const email = qs('#email', contactForm) || qs('[name="email"]', contactForm);
    if (email) {
      if (!email.value.trim() || !EMAIL_REGEX.test(email.value.trim())) {
        showFieldError(email);
        isValid = false;
      }
    }

    // Telefono: opcional, pero si se llena debe ser formato argentino
    const telefono =
      qs('#telefono', contactForm) || qs('[name="telefono"]', contactForm);
    if (telefono && telefono.value.trim()) {
      // Extraer solo digitos para validar la cantidad
      const soloDigitos = telefono.value.replace(/[^\d]/g, '');
      if (!PHONE_REGEX.test(telefono.value.trim()) || soloDigitos.length < 7 || soloDigitos.length > 15) {
        showFieldError(telefono);
        isValid = false;
      }
    }

    // Servicio: obligatorio, no vacio ni valor por defecto
    const servicio =
      qs('#servicio', contactForm) || qs('[name="servicio"]', contactForm);
    if (servicio) {
      if (!servicio.value || servicio.value === '') {
        showFieldError(servicio);
        isValid = false;
      }
    }

    // Mensaje: obligatorio, minimo 10 caracteres
    const mensaje =
      qs('#mensaje', contactForm) || qs('[name="mensaje"]', contactForm);
    if (mensaje) {
      if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
        showFieldError(mensaje);
        isValid = false;
      }
    }

    return isValid;
  }

  // Registrar eventos de limpieza de errores en cada campo del formulario
  if (contactForm) {
    qsa('input, textarea, select', contactForm).forEach((field) => {
      field.addEventListener('input', () => clearFieldError(field));
      // Para selects tambien escuchar change
      if (field.tagName === 'SELECT') {
        field.addEventListener('change', () => clearFieldError(field));
      }
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Limpiar errores anteriores
      qsa('.input--error', contactForm).forEach((el) =>
        el.classList.remove('input--error')
      );

      if (validateForm()) {
        // Exito: mostrar mensaje y resetear formulario
        showFormStatus(
          '\u00a1Gracias por tu consulta! Nos comunicaremos a la brevedad.',
          'success'
        );
        // Resetear formulario despues de 2 segundos
        setTimeout(() => {
          contactForm.reset();
          if (formStatus) {
            formStatus.classList.remove('contact__form-status--success');
            formStatus.textContent = '';
          }
        }, 2000);
      } else {
        // Error: mostrar mensaje de error general
        showFormStatus(
          'Por favor, corrige los campos marcados en rojo.',
          'error'
        );
      }
    });
  }

  // =========================================================================
  // 5. Animaciones de scroll (Intersection Observer)
  // =========================================================================

  const fadeElements = qsa('.fade-in');

  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in--visible');
            // Solo animar una vez: dejar de observar el elemento
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    fadeElements.forEach((el) => fadeObserver.observe(el));
  }

  // =========================================================================
  // 6. Resaltado del enlace activo en la navegacion
  // =========================================================================

  const navLinks = qsa('.navbar__link[href^="#"]');
  const sections = [];

  // Recopilar las secciones correspondientes a los enlaces
  navLinks.forEach((link) => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#') {
      const section = qs(targetId);
      if (section) {
        sections.push({ element: section, link: link });
      }
    }
  });

  function highlightActiveLink() {
    if (sections.length === 0) return;

    // Posicion actual del scroll con offset
    const scrollPos = window.scrollY + NAVBAR_HEIGHT + 100;

    let activeIndex = -1;

    // Encontrar la seccion actualmente visible
    sections.forEach((item, index) => {
      const sectionTop = item.element.offsetTop;
      const sectionBottom = sectionTop + item.element.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        activeIndex = index;
      }
    });

    // Si estamos al final de la pagina, activar la ultima seccion
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
      activeIndex = sections.length - 1;
    }

    // Actualizar clases de los enlaces
    navLinks.forEach((link) => link.classList.remove('navbar__link--active'));
    if (activeIndex >= 0) {
      sections[activeIndex].link.classList.add('navbar__link--active');
    }
  }

  window.addEventListener('scroll', highlightActiveLink, { passive: true });
  // Ejecutar al cargar
  highlightActiveLink();
})();
