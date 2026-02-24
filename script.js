// // Wait for DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
    
//     // Mobile Menu Toggle
//     const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
//     const navMenu = document.getElementById('nav-menu');
//     const navLinks = document.querySelectorAll('.nav-link');

//     mobileMenuToggle.addEventListener('click', function() {
//         navMenu.classList.toggle('active');
//         const icon = this.querySelector('i');
//         if (navMenu.classList.contains('active')) {
//             icon.classList.remove('fa-bars');
//             icon.classList.add('fa-times');
//         } else {
//             icon.classList.remove('fa-times');
//             icon.classList.add('fa-bars');
//         }
//     });

//     // Close mobile menu when clicking on a link
//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             navMenu.classList.remove('active');
//             const icon = mobileMenuToggle.querySelector('i');
//             icon.classList.remove('fa-times');
//             icon.classList.add('fa-bars');
//         });
//     });

//     // Smooth scrolling for navigation links
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href');
//             const targetSection = document.querySelector(targetId);
            
//             if (targetSection) {
//                 const headerHeight = document.getElementById('header').offsetHeight;
//                 const targetPosition = targetSection.offsetTop - headerHeight;
                
//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // Active navigation link on scroll
//     window.addEventListener('scroll', function() {
//         let current = '';
//         const sections = document.querySelectorAll('section');
//         const headerHeight = document.getElementById('header').offsetHeight;

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop - headerHeight - 100;
//             const sectionHeight = section.clientHeight;
//             if (pageYOffset >= sectionTop) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href') === `#${current}`) {
//                 link.classList.add('active');
//             }
//         });
//     });

//     // Header shadow on scroll
//     const header = document.getElementById('header');
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 100) {
//             header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
//         } else {
//             header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
//         }
//     });

//     // Scroll to Top Button
//     const scrollTopBtn = document.getElementById('scroll-top');

//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 300) {
//             scrollTopBtn.classList.add('show');
//         } else {
//             scrollTopBtn.classList.remove('show');
//         }
//     });

//     scrollTopBtn.addEventListener('click', function() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });

//     // Contact Form Handling
//     const contactForm = document.getElementById('contact-form');
    
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form values
//         const name = document.getElementById('name').value.trim();
//         const email = document.getElementById('email').value.trim();
//         const phone = document.getElementById('phone').value.trim();
//         const message = document.getElementById('message').value.trim();

//         // Basic validation
//         if (!name || !email || !phone || !message) {
//             showNotification('Please fill in all fields', 'error');
//             return;
//         }

//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             showNotification('Please enter a valid email address', 'error');
//             return;
//         }

//         // Phone validation (basic)
//         const phoneRegex = /^[0-9]{10}$/;
//         const cleanedPhone = phone.replace(/\D/g, '');
//         if (cleanedPhone.length < 10) {
//             showNotification('Please enter a valid 10-digit phone number', 'error');
//             return;
//         }

//         // If validation passes
//         showNotification('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
        
//         // Reset form
//         contactForm.reset();

//         // In a real application, you would send this data to a server
//         console.log('Form submitted:', { name, email, phone, message });
//     });

//     // Notification function
//     function showNotification(message, type) {
//         // Remove any existing notifications
//         const existingNotification = document.querySelector('.notification');
//         if (existingNotification) {
//             existingNotification.remove();
//         }

//         // Create notification element
//         const notification = document.createElement('div');
//         notification.className = `notification ${type}`;
//         notification.innerHTML = `
//             <div class="notification-content">
//                 <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
//                 <span>${message}</span>
//             </div>
//         `;

//         // Add styles
//         notification.style.cssText = `
//             position: fixed;
//             top: 100px;
//             right: 20px;
//             background-color: ${type === 'success' ? '#22c55e' : '#ef4444'};
//             color: white;
//             padding: 1rem 1.5rem;
//             border-radius: 5px;
//             box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
//             z-index: 10000;
//             animation: slideInRight 0.3s ease;
//             max-width: 400px;
//         `;

//         const notificationContent = notification.querySelector('.notification-content');
//         notificationContent.style.cssText = `
//             display: flex;
//             align-items: center;
//             gap: 0.75rem;
//         `;

//         const icon = notification.querySelector('i');
//         icon.style.fontSize = '1.5rem';

//         // Add to document
//         document.body.appendChild(notification);

//         // Remove after 5 seconds
//         setTimeout(() => {
//             notification.style.animation = 'slideOutRight 0.3s ease';
//             setTimeout(() => {
//                 notification.remove();
//             }, 300);
//         }, 5000);
//     }

//     // Add animation styles dynamically
//     const style = document.createElement('style');
//     style.textContent = `
//         @keyframes slideInRight {
//             from {
//                 transform: translateX(100%);
//                 opacity: 0;
//             }
//             to {
//                 transform: translateX(0);
//                 opacity: 1;
//             }
//         }

//         @keyframes slideOutRight {
//             from {
//                 transform: translateX(0);
//                 opacity: 1;
//             }
//             to {
//                 transform: translateX(100%);
//                 opacity: 0;
//             }
//         }

//         .nav-link.active {
//             color: var(--primary-color);
//         }

//         .nav-link.active::after {
//             width: 100%;
//         }
//     `;
//     document.head.appendChild(style);

//     // Animate elements on scroll
//     const observerOptions = {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver(function(entries) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.style.opacity = '1';
//                 entry.target.style.transform = 'translateY(0)';
//             }
//         });
//     }, observerOptions);

//     // Observe service cards, product categories, and why choose cards
//     const animatedElements = document.querySelectorAll('.service-card, .product-category, .why-choose-card, .contact-card');
//     animatedElements.forEach(el => {
//         el.style.opacity = '0';
//         el.style.transform = 'translateY(20px)';
//         el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//         observer.observe(el);
//     });

//     // Form input focus effects
//     const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
//     formInputs.forEach(input => {
//         input.addEventListener('focus', function() {
//             this.parentElement.style.transform = 'translateY(-2px)';
//             this.parentElement.style.transition = 'transform 0.3s ease';
//         });

//         input.addEventListener('blur', function() {
//             this.parentElement.style.transform = 'translateY(0)';
//         });
//     });

//     // Add loading state to form submission button
//     const submitButton = contactForm.querySelector('button[type="submit"]');
//     const originalButtonText = submitButton.textContent;

//     contactForm.addEventListener('submit', function() {
//         submitButton.disabled = true;
//         submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
//         setTimeout(() => {
//             submitButton.disabled = false;
//             submitButton.textContent = originalButtonText;
//         }, 2000);
//     });

//     // Counter animation for statistics (if you want to add stats section later)
//     function animateCounter(element, target, duration) {
//         let start = 0;
//         const increment = target / (duration / 16);
        
//         const timer = setInterval(() => {
//             start += increment;
//             if (start >= target) {
//                 element.textContent = target;
//                 clearInterval(timer);
//             } else {
//                 element.textContent = Math.floor(start);
//             }
//         }, 16);
//     }

//     // Lazy loading for images (if you add images later)
//     const lazyImages = document.querySelectorAll('img[data-src]');
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 img.src = img.dataset.src;
//                 img.removeAttribute('data-src');
//                 imageObserver.unobserve(img);
//             }
//         });
//     });

//     lazyImages.forEach(img => imageObserver.observe(img));

//     // Add hover effect to cards
//     const cards = document.querySelectorAll('.service-card, .product-category, .why-choose-card');
//     cards.forEach(card => {
//         card.addEventListener('mouseenter', function() {
//             this.style.transition = 'all 0.3s ease';
//         });
//     });

//     // Prevent form resubmission on page refresh
//     if (window.history.replaceState) {
//         window.history.replaceState(null, null, window.location.href);
//     }

//     console.log('Shree Jagabalia Medicine Store website loaded successfully!');
// });

// // Utility function to debounce scroll events
// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// // Add smooth scroll behavior for all anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         const href = this.getAttribute('href');
//         if (href !== '#' && href.length > 1) {
//             e.preventDefault();
//             const target = document.querySelector(href);
//             if (target) {
//                 const headerHeight = document.getElementById('header').offsetHeight;
//                 const targetPosition = target.offsetTop - headerHeight;
//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: 'smooth'
//                 });
//             }
//         }
//     });
// });


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const headerHeight = document.getElementById('header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Header shadow on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // =========================================
    // Contact Form with Google Sheets Integration
    // =========================================
    const contactForm = document.getElementById('contact-form');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // ✅ PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL BELOW
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxfoDN3S_PpR-C714xjT3-i8qzol6XCHrBJABnycgDg5ZO5b6xjwn2csDppt9DbBWlv/exec';

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name || !email || !phone || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        const cleanedPhone = phone.replace(/\D/g, '');
        if (cleanedPhone.length < 10) {
            showNotification('Please enter a valid 10-digit phone number', 'error');
            return;
        }

        // Loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        // Send to Google Sheets
        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, message }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.result === 'success') {
                showNotification('Thank you! Your message has been sent. We will contact you soon.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Submission failed');
            }
        })
        .catch(() => {
            showNotification('Something went wrong. Please call us at +91-9556944742', 'error');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
    });

    // Notification function
    function showNotification(message, type) {
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: ${type === 'success' ? '#22c55e' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 5px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
        `;

        const notificationContent = notification.querySelector('.notification-content');
        notificationContent.style.cssText = `
            display: flex;
            align-items: center;
            gap: 0.75rem;
        `;

        const icon = notification.querySelector('i');
        icon.style.fontSize = '1.5rem';

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // Add animation styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .nav-link.active { color: var(--primary-color); }
        .nav-link.active::after { width: 100%; }
    `;
    document.head.appendChild(style);

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .product-category, .why-choose-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Form input focus effects
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.3s ease';
        });
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => imageObserver.observe(img));

    // Prevent form resubmission on page refresh
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    console.log('Shree Jagabalia Medicine Store website loaded successfully!');
});

// Utility function to debounce scroll events
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

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
    });
});