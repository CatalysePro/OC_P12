
//?  START V4 = v3 + header back card nav icon stylisation

document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const navHeader = document.getElementById('nav-header');
    const headerLogo = document.getElementById('header-logo');
    const headerName = document.getElementById('header-name');
    // const burgerIcon = document.getElementById('burger-icon');
    const cards = document.querySelectorAll('.card');
    const presIcon = document.getElementById('icon-presentation');
    const servIcon = document.getElementById('icon-services');
    const realIcon = document.getElementById('icon-realisations');
    const contactIcon = document.getElementById('icon-contact');
    const headerBackCard1 = document.getElementById('header-back-card-1');
    const headerBackCard2 = document.getElementById('header-back-card-2');
    const headerBackCard3 = document.getElementById('header-back-card-3');
    const headerBackCard4 = document.getElementById('header-back-card-4');

    // IntersectionObserver for cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Function to update header based on scroll position
    function updateHeaderOnScroll() {
        if (window.scrollY > 0) {
            header.classList.add('fixed');
            navHeader.classList.add('fixed');
            headerLogo.classList.add('fixed');
            headerName.classList.add('fixed');
            // burgerIcon.classList.add('fixed');
            presIcon.classList.add('fixed');
            servIcon.classList.add('fixed');
            realIcon.classList.add('fixed');
            contactIcon.classList.add('fixed');
            headerBackCard1.classList.add('fixed');
            headerBackCard2.classList.add('fixed');
            headerBackCard3.classList.add('fixed');
            headerBackCard4.classList.add('fixed');

            console.log('fixed Class added');

        } else {
            header.classList.remove('fixed');
            navHeader.classList.remove('fixed');
            headerLogo.classList.remove('fixed');
            headerName.classList.remove('fixed');
            // burgerIcon.classList.remove('fixed');
            presIcon.classList.remove('fixed');
            servIcon.classList.remove('fixed');
            realIcon.classList.remove('fixed');
            contactIcon.classList.remove('fixed');
            headerBackCard1.classList.remove('fixed');
            headerBackCard2.classList.remove('fixed');
            headerBackCard3.classList.remove('fixed');
            headerBackCard4.classList.remove('fixed');

            console.log('fixed Class removed');
        }
    }

    // Scroll event for header
    window.addEventListener('scroll', updateHeaderOnScroll);


    

    // Check if the page is reloaded and handle the header appropriately
    window.addEventListener('load', function () {
        // Use sessionStorage to check if this is a reload
        if (sessionStorage.getItem('isReloaded')) {
            if (window.scrollY > 0) {
                updateHeaderOnScroll(); // Call the function if scrolling down
            } else {
                // Force removal of 'fixed' classes if at the top of the page after reload
                header.classList.remove('fixed');
                navHeader.classList.remove('fixed');
                headerLogo.classList.remove('fixed');
                headerName.classList.remove('fixed');
                // burgerIcon.classList.remove('fixed');
                presIcon.classList.remove('fixed');
                servIcon.classList.remove('fixed');
                realIcon.classList.remove('fixed');
                contactIcon.classList.remove('fixed');
                headerBackCard1.classList.remove('fixed');
                headerBackCard2.classList.remove('fixed');
                headerBackCard3.classList.remove('fixed');
                headerBackCard4.classList.remove('fixed');
                console.log('fixed Class removed AGAIN');
            }
            // Initialize particles after handling header
            // initializeParticles();
        } else {
            // First load, initialize particles
            // initializeParticles();
        }
        // Set the reload flag
        sessionStorage.setItem('isReloaded', 'true');
    });
});

//?  END V4 = v3 + header back card nav icon stylisation
