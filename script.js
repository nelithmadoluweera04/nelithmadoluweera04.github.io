document.addEventListener('DOMContentLoaded', () => {
    // 1. MOBILE NAVIGATION TOGGLE 

    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (mobileToggle && navLinksContainer) {
        // Toggle mobile drawer visibility
        mobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });

        // Close mobile drawer when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                }
            });
        });
    }

    // 2. SCROLL-SPY (HIGHLIGHT ACTIVE NAV LINK ON SCROLL)

    const sections = document.querySelectorAll('section');

    const handleScrollSpy = () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (currentSection && link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScrollSpy);

    // 3. CONTACT FORM SUBMISSION

    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Retrieve form values safely
            const nameInput = document.getElementById('name');
            const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'there';

            // User confirmation feedback
            alert(`Thank you, ${name}! Your message has been sent successfully.`);
            
            // Clear form fields
            contactForm.reset();
        });
    }
});