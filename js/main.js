/* ============================================
   SatGPT Hub - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMap();
    initCounters();
    initTabs();
    initSmoothScroll();
});

/* ============================================
   Navigation
   ============================================ */

function initNavigation() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdownParents = document.querySelectorAll('.has-dropdown');

    // Mobile menu toggle
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Mobile dropdown toggle
    dropdownParents.forEach(parent => {
        const link = parent.querySelector('a');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                parent.classList.toggle('active');
            }
        });
    });

    // Close menu on link click
    const navLinks = document.querySelectorAll('.nav-menu a:not(.has-dropdown > a)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const nav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 14, 23, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 14, 23, 0.85)';
        }
        
        lastScroll = currentScroll;
    });
}

/* ============================================
   Interactive Map (Leaflet)
   ============================================ */

function initMap() {
    const mapContainer = document.getElementById('preview-map');
    if (!mapContainer) return;

    // Initialize map centered on Asia-Pacific
    const map = L.map('preview-map', {
        center: [20, 100],
        zoom: 4,
        zoomControl: true,
        scrollWheelZoom: false
    });

    // Light theme map tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Sample case study markers - UN Color Palette
    const caseStudies = [
        {
            coords: [13.7563, 100.5018],
            title: 'Bangkok Flood Monitoring',
            category: 'Disaster Risk Reduction',
            color: '#ED1847',  // UN Red
            description: 'Real-time flood extent mapping using Sentinel-1 SAR data.'
        },
        {
            coords: [28.3949, 84.1240],
            title: 'Nepal Agricultural Assessment',
            category: 'Agriculture & Food Security',
            color: '#72BF44',  // UN Green
            description: 'Crop yield estimation using multi-spectral satellite imagery.'
        },
        {
            coords: [35.8617, 104.1954],
            title: 'China Water Resources',
            category: 'Water Resources',
            color: '#009EDB',  // UN Blue
            description: 'Lake and reservoir monitoring across the Yangtze basin.'
        },
        {
            coords: [21.0285, 105.8542],
            title: 'Hanoi Urban Growth',
            category: 'Urban Development',
            color: '#A05FB4',  // UN Purple
            description: 'Urban expansion analysis using time-series Landsat data.'
        },
        {
            coords: [-6.2088, 106.8456],
            title: 'Jakarta Land Subsidence',
            category: 'Disaster Risk Reduction',
            color: '#ED1847',  // UN Red
            description: 'InSAR-based ground deformation monitoring.'
        },
        {
            coords: [14.5995, 120.9842],
            title: 'Manila Coastal Mapping',
            category: 'Water Resources',
            color: '#009EDB',  // UN Blue
            description: 'Coastal erosion and mangrove monitoring.'
        },
        {
            coords: [23.8103, 90.4125],
            title: 'Bangladesh Rice Monitoring',
            category: 'Agriculture & Food Security',
            color: '#72BF44',  // UN Green
            description: 'Paddy rice mapping using radar imagery.'
        },
        {
            coords: [1.3521, 103.8198],
            title: 'Singapore Urban Heat',
            category: 'Urban Development',
            color: '#A05FB4',  // UN Purple
            description: 'Urban heat island analysis using thermal imagery.'
        }
    ];

    // Custom marker icon
    function createMarkerIcon(color) {
        return L.divIcon({
            className: 'custom-marker-wrapper',
            html: `<div style="
                width: 16px;
                height: 16px;
                background: ${color};
                border-radius: 50%;
                border: 3px solid #ffffff;
                box-shadow: 0 2px 8px ${color}60;
            "></div>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8],
            popupAnchor: [0, -8]
        });
    }

    // Add markers
    caseStudies.forEach(study => {
        const marker = L.marker(study.coords, {
            icon: createMarkerIcon(study.color)
        }).addTo(map);

        marker.bindPopup(`
            <div style="min-width: 200px;">
                <div style="
                    display: inline-block;
                    padding: 2px 8px;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    background: ${study.color}20;
                    color: ${study.color};
                    border-radius: 4px;
                    margin-bottom: 8px;
                ">${study.category}</div>
                <h4 style="margin: 0 0 8px 0; font-size: 14px;">${study.title}</h4>
                <p style="margin: 0; font-size: 12px; color: #94a3b8;">${study.description}</p>
            </div>
        `);
    });

    // Enable scroll zoom on click
    map.on('click', () => {
        map.scrollWheelZoom.enable();
    });

    map.on('mouseout', () => {
        map.scrollWheelZoom.disable();
    });
}

// Full page map for case studies
function initFullMap() {
    const mapContainer = document.getElementById('case-study-map');
    if (!mapContainer) return;

    const map = L.map('case-study-map', {
        center: [20, 100],
        zoom: 4,
        zoomControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    return map;
}

/* ============================================
   Animated Counters
   ============================================ */

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const animateCounter = (counter) => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };

        update();
    };

    // Intersection Observer for triggering animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

/* ============================================
   Tab System
   ============================================ */

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (!tabButtons.length) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Update buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Handle hash navigation
    const handleHash = () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetButton = document.querySelector(`[data-tab="${hash}"]`);
            if (targetButton) {
                targetButton.click();
                // Scroll to section
                const section = document.getElementById(hash);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
}

/* ============================================
   Smooth Scroll
   ============================================ */

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   Form Handling
   ============================================ */

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send to a backend
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
}

/* ============================================
   Utility Functions
   ============================================ */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Export for use in other scripts
window.SatGPTHub = {
    initMap,
    initFullMap,
    initContactForm,
    debounce,
    isInViewport
};
