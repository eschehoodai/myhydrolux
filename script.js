/**
 * Hydrolux Liquid Intelligence – Main JavaScript
 * Handles navigation, scroll reveals, smooth interactions, and glassmorphism effects
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollReveal();
    initSmoothScroll();
    initNavbarScroll();
    initGlassCards();
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('mobile-open');
    });

    // Close mobile menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('mobile-open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navToggle.classList.remove('active');
            navLinks.classList.remove('mobile-open');
        }
    });
}

/**
 * Scroll Reveal Animation
 * Elements with class 'reveal' fade in and slide up when entering viewport
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Trigger reveal for elements already in viewport on load
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    }, 100);
}

/**
 * Smooth Scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = document.getElementById('navbar')?.offsetHeight || 72;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Navbar background on scroll
 * Adds subtle border glow and opacity change when scrolled
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.borderBottomColor = 'rgba(11, 216, 87, 0.1)';
            navbar.style.background = 'rgba(13, 21, 12, 0.9)';
        } else {
            navbar.style.borderBottomColor = 'rgba(133, 149, 130, 0.12)';
            navbar.style.background = 'rgba(13, 21, 12, 0.75)';
        }
    });
}

/**
 * Glass Card Enhancement
 * Applies inner-glow border effect to all glass cards dynamically
 */
function initGlassCards() {
    const glassCards = document.querySelectorAll('.glass-card, .product-card, .nemes-card, .contact-card, .value-card, .visual-card');

    glassCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(11, 216, 87, 0.12)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'transparent';
        });
    });
}
