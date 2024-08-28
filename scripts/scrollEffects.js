
//?  START V4 = v3 + header back card nav icon stylisation

// document.addEventListener('DOMContentLoaded', function () {
//     const header = document.getElementById('header');
//     const navHeader = document.getElementById('nav-header');
//     const headerLogo = document.getElementById('header-logo');
//     const headerName = document.getElementById('header-name');
//     // const burgerIcon = document.getElementById('burger-icon');
//     const cards = document.querySelectorAll('.card');
//     const presIcon = document.getElementById('icon-presentation');
//     const servIcon = document.getElementById('icon-services');
//     const realIcon = document.getElementById('icon-realisations');
//     const contactIcon = document.getElementById('icon-contact');
//     const headerBackCard1 = document.getElementById('header-back-card-1');
//     const headerBackCard2 = document.getElementById('header-back-card-2');
//     const headerBackCard3 = document.getElementById('header-back-card-3');
//     const headerBackCard4 = document.getElementById('header-back-card-4');

//     // IntersectionObserver for cards
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('is-visible');
//             } else {
//                 entry.target.classList.remove('is-visible');
//             }
//         });
//     }, { threshold: 0.1 });

//     cards.forEach(card => {
//         observer.observe(card);
//     });

//     // Function to update header based on scroll position
//     function updateHeaderOnScroll() {
//         if (window.scrollY > 0) {
//             header.classList.add('fixed');
//             navHeader.classList.add('fixed');
//             headerLogo.classList.add('fixed');
//             headerName.classList.add('fixed');
//             // burgerIcon.classList.add('fixed');
//             presIcon.classList.add('fixed');
//             servIcon.classList.add('fixed');
//             realIcon.classList.add('fixed');
//             contactIcon.classList.add('fixed');
//             headerBackCard1.classList.add('fixed');
//             headerBackCard2.classList.add('fixed');
//             headerBackCard3.classList.add('fixed');
//             headerBackCard4.classList.add('fixed');

//             console.log('fixed Class added');

//         } else {
//             header.classList.remove('fixed');
//             navHeader.classList.remove('fixed');
//             headerLogo.classList.remove('fixed');
//             headerName.classList.remove('fixed');
//             // burgerIcon.classList.remove('fixed');
//             presIcon.classList.remove('fixed');
//             servIcon.classList.remove('fixed');
//             realIcon.classList.remove('fixed');
//             contactIcon.classList.remove('fixed');
//             headerBackCard1.classList.remove('fixed');
//             headerBackCard2.classList.remove('fixed');
//             headerBackCard3.classList.remove('fixed');
//             headerBackCard4.classList.remove('fixed');

//             console.log('fixed Class removed');
//         }
//     }

//     // Scroll event for header
//     window.addEventListener('scroll', updateHeaderOnScroll);

//     // Check if the page is reloaded and handle the header appropriately
//     window.addEventListener('load', function () {
//         // Use sessionStorage to check if this is a reload
//         if (sessionStorage.getItem('isReloaded')) {
//             if (window.scrollY > 0) {
//                 updateHeaderOnScroll(); // Call the function if scrolling down
//             } else {
//                 // Force removal of 'fixed' classes if at the top of the page after reload
//                 header.classList.remove('fixed');
//                 navHeader.classList.remove('fixed');
//                 headerLogo.classList.remove('fixed');
//                 headerName.classList.remove('fixed');
//                 // burgerIcon.classList.remove('fixed');
//                 presIcon.classList.remove('fixed');
//                 servIcon.classList.remove('fixed');
//                 realIcon.classList.remove('fixed');
//                 contactIcon.classList.remove('fixed');
//                 headerBackCard1.classList.remove('fixed');
//                 headerBackCard2.classList.remove('fixed');
//                 headerBackCard3.classList.remove('fixed');
//                 headerBackCard4.classList.remove('fixed');
//                 console.log('fixed Class removed AGAIN');
//             }
//             // Initialize particles after handling header
//             // initializeParticles();
//         } else {
//             // First load, initialize particles
//             // initializeParticles();
//         }
//         // Set the reload flag
//         sessionStorage.setItem('isReloaded', 'true');
//     });
// });

//?  END V4 = v3 + header back card nav icon stylisation

//todo  START V5 = v4 + FIRST PAGE DISPLAY FORCING ON PHONES ISA

// document.addEventListener('DOMContentLoaded', function () {
//     const header = document.getElementById('header');
//     const navHeader = document.getElementById('nav-header');
//     const headerLogo = document.getElementById('header-logo');
//     const headerName = document.getElementById('header-name');
//     const cards = document.querySelectorAll('.card');
//     const presIcon = document.getElementById('icon-presentation');
//     const servIcon = document.getElementById('icon-services');
//     const realIcon = document.getElementById('icon-realisations');
//     const contactIcon = document.getElementById('icon-contact');
//     const headerBackCard1 = document.getElementById('header-back-card-1');
//     const headerBackCard2 = document.getElementById('header-back-card-2');
//     const headerBackCard3 = document.getElementById('header-back-card-3');
//     const headerBackCard4 = document.getElementById('header-back-card-4');

//     // IntersectionObserver for cards
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('is-visible');
//             } else {
//                 entry.target.classList.remove('is-visible');
//             }
//         });
//     }, { threshold: 0.1 });

//     cards.forEach(card => {
//         observer.observe(card);
//     });

//     // Function to update header based on scroll position
//     function updateHeaderOnScroll() {
//         if (window.scrollY > 0) {
//             header.classList.add('fixed');
//             navHeader.classList.add('fixed');
//             headerLogo.classList.add('fixed');
//             headerName.classList.add('fixed');
//             presIcon.classList.add('fixed');
//             servIcon.classList.add('fixed');
//             realIcon.classList.add('fixed');
//             contactIcon.classList.add('fixed');
//             headerBackCard1.classList.add('fixed');
//             headerBackCard2.classList.add('fixed');
//             headerBackCard3.classList.add('fixed');
//             headerBackCard4.classList.add('fixed');

//             console.log('fixed Class added');

//         } else {
//             header.classList.remove('fixed');
//             navHeader.classList.remove('fixed');
//             headerLogo.classList.remove('fixed');
//             headerName.classList.remove('fixed');
//             presIcon.classList.remove('fixed');
//             servIcon.classList.remove('fixed');
//             realIcon.classList.remove('fixed');
//             contactIcon.classList.remove('fixed');
//             headerBackCard1.classList.remove('fixed');
//             headerBackCard2.classList.remove('fixed');
//             headerBackCard3.classList.remove('fixed');
//             headerBackCard4.classList.remove('fixed');

//             console.log('fixed Class removed');
//         }
//     }

//     // Scroll event for header
//     window.addEventListener('scroll', updateHeaderOnScroll);

//     // Check if the page is reloaded and handle the header appropriately
//     window.addEventListener('load', function () {
//         // Force header update immediately after page load
//         updateHeaderOnScroll();

//         // Use sessionStorage to check if this is a reload
//         if (sessionStorage.getItem('isReloaded')) {
//             if (window.scrollY > 0) {
//                 updateHeaderOnScroll(); // Call the function if scrolling down
//             } else {
//                 // Force removal of 'fixed' classes if at the top of the page after reload
//                 header.classList.remove('fixed');
//                 navHeader.classList.remove('fixed');
//                 headerLogo.classList.remove('fixed');
//                 headerName.classList.remove('fixed');
//                 presIcon.classList.remove('fixed');
//                 servIcon.classList.remove('fixed');
//                 realIcon.classList.remove('fixed');
//                 contactIcon.classList.remove('fixed');
//                 headerBackCard1.classList.remove('fixed');
//                 headerBackCard2.classList.remove('fixed');
//                 headerBackCard3.classList.remove('fixed');
//                 headerBackCard4.classList.remove('fixed');
//                 console.log('fixed Class removed AGAIN');
//             }
//         }
//         // Set the reload flag
//         sessionStorage.setItem('isReloaded', 'true');
//     });

// });


//todo  END V5 = v4 + FIRST PAGE DISPLAY FORCING ON PHONES ISA

//! START V6 = V5 + nav link styles application based on screen view ISA - DO NOT WK

// document.addEventListener('DOMContentLoaded', function () {
//     const elementsToToggle = [
//         document.getElementById('header'),
//         document.getElementById('nav-header'),
//         document.getElementById('header-logo'),
//         document.getElementById('header-name'),
//         document.getElementById('icon-presentation'),
//         document.getElementById('icon-services'),
//         document.getElementById('icon-realisations'),
//         document.getElementById('icon-contact'),
//         document.getElementById('header-back-card-1'),
//         document.getElementById('header-back-card-2'),
//         document.getElementById('header-back-card-3'),
//         document.getElementById('header-back-card-4')
//     ];

//     const fixedClass = 'fixed';

//     // Function to update header based on scroll position
//     function updateHeaderOnScroll() {
//         const addFixedClass = window.scrollY > 0;
//         elementsToToggle.forEach(element => {
//             element.classList.toggle(fixedClass, addFixedClass);
//         });
//     }

//     // Scroll event for header
//     window.addEventListener('scroll', updateHeaderOnScroll);

//     // Handle page reload
//     window.addEventListener('load', function () {
//         updateHeaderOnScroll();
//         if (sessionStorage.getItem('isReloaded')) {
//             updateHeaderOnScroll();
//         }
//         sessionStorage.setItem('isReloaded', 'true');
//     });

//     // IntersectionObserver for nav links and sections
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('nav a');

//     const sectionObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 navLinks.forEach(link => {
//                     link.classList.remove('active');
//                     if (link.getAttribute('href').substring(1) === entry.target.id) {
//                         link.classList.add('active');
//                     }
//                 });
//             }
//         });
//     }, {
//         rootMargin: '0px 0px -20% 0px', // Adjust this base - 50% negative bottom-margin to ensure proper detection - the bigger the 
//         threshold: 0.5 // Adjust this base 0.5 threshold for better accuracy - the smaller the widther
//     });

//     sections.forEach(section => {
//         sectionObserver.observe(section);
//     });

//     // Observe specific section
//     const problematicSection = document.querySelector('section_4'); // Adjust selector
//     if (problematicSection) {
//         sectionObserver.observe(problematicSection);
//     }

//     // IntersectionObserver for card animations
//     const cards = document.querySelectorAll('.card');

//     const cardObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle('is-visible', entry.isIntersecting);
//         });
//     }, { threshold: 0.1 });

//     cards.forEach(card => {
//         cardObserver.observe(card);
//     });
// });


//! START V6 = V5 + nav link styles application based on screen view ISA - DO NOT WK

//! START V7 = V5 + specific scroll by pixel value for section 4 ISA not wking

// document.addEventListener('DOMContentLoaded', function () {
//     const header = document.getElementById('header');
//     const navHeader = document.getElementById('nav-header');
//     const headerLogo = document.getElementById('header-logo');
//     const headerName = document.getElementById('header-name');
//     const cards = document.querySelectorAll('.card');
//     const presIcon = document.getElementById('icon-presentation');
//     const servIcon = document.getElementById('icon-services');
//     const realIcon = document.getElementById('icon-realisations');
//     const contactIcon = document.getElementById('icon-contact');
//     const headerBackCard1 = document.getElementById('header-back-card-1');
//     const headerBackCard2 = document.getElementById('header-back-card-2');
//     const headerBackCard3 = document.getElementById('header-back-card-3');
//     const headerBackCard4 = document.getElementById('header-back-card-4');
    
//     // IntersectionObserver for cards
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('is-visible');
//             } else {
//                 entry.target.classList.remove('is-visible');
//             }
//         });
//     }, { threshold: 0.1 });

//     cards.forEach(card => {
//         observer.observe(card);
//     });

//     // Function to update header based on scroll position
//     function updateHeaderOnScroll() {
//         if (window.scrollY > 0) {
//             header.classList.add('fixed');
//             navHeader.classList.add('fixed');
//             headerLogo.classList.add('fixed');
//             headerName.classList.add('fixed');
//             presIcon.classList.add('fixed');
//             servIcon.classList.add('fixed');
//             realIcon.classList.add('fixed');
//             contactIcon.classList.add('fixed');
//             headerBackCard1.classList.add('fixed');
//             headerBackCard2.classList.add('fixed');
//             headerBackCard3.classList.add('fixed');
//             headerBackCard4.classList.add('fixed');
//             console.log('fixed Class added');
//         } else {
//             header.classList.remove('fixed');
//             navHeader.classList.remove('fixed');
//             headerLogo.classList.remove('fixed');
//             headerName.classList.remove('fixed');
//             presIcon.classList.remove('fixed');
//             servIcon.classList.remove('fixed');
//             realIcon.classList.remove('fixed');
//             contactIcon.classList.remove('fixed');
//             headerBackCard1.classList.remove('fixed');
//             headerBackCard2.classList.remove('fixed');
//             headerBackCard3.classList.remove('fixed');
//             headerBackCard4.classList.remove('fixed');
//             console.log('fixed Class removed');
//         }
//     }

//     // Scroll event for header
//     window.addEventListener('scroll', updateHeaderOnScroll);

//     // Check if the page is reloaded and handle the header appropriately
//     window.addEventListener('load', function () {
//         // Force header update immediately after page load
//         updateHeaderOnScroll();

//         // Use sessionStorage to check if this is a reload
//         if (sessionStorage.getItem('isReloaded')) {
//             if (window.scrollY > 0) {
//                 updateHeaderOnScroll(); // Call the function if scrolling down
//             } else {
//                 // Force removal of 'fixed' classes if at the top of the page after reload
//                 header.classList.remove('fixed');
//                 navHeader.classList.remove('fixed');
//                 headerLogo.classList.remove('fixed');
//                 headerName.classList.remove('fixed');
//                 presIcon.classList.remove('fixed');
//                 servIcon.classList.remove('fixed');
//                 realIcon.classList.remove('fixed');
//                 contactIcon.classList.remove('fixed');
//                 headerBackCard1.classList.remove('fixed');
//                 headerBackCard2.classList.remove('fixed');
//                 headerBackCard3.classList.remove('fixed');
//                 headerBackCard4.classList.remove('fixed');
//                 console.log('fixed Class removed AGAIN');
//             }
//         }
//         // Set the reload flag
//         sessionStorage.setItem('isReloaded', 'true');
//     });

//     // Adjust scroll for specific nav link
//     function scrollToSectionWithOffset(id, offset = 50) {
//         const section = document.getElementById(id);
//         if (section) {
//             window.scrollTo({
//                 top: section.offsetTop - offset,
//                 behavior: 'smooth'
//             });
//         }
//     }

//     // Attach click event to the specific nav link
//     const linkSection4 = document.getElementById('link-section-4');
//     if (linkSection4) {
//         linkSection4.addEventListener('click', function (event) {
//             event.preventDefault(); // Prevent default anchor behavior
//             scrollToSectionWithOffset('section-4', 50); // Adjust the offset value as needed
//         });
//     }
// });



//*! END V7 = V5 + specific scroll by pixel value for section 4 ISA not wking


//* START V8 = V5 + specific scroll based on header height for section 4 ISA

document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const navHeader = document.getElementById('nav-header');
    const headerLogo = document.getElementById('header-logo');
    const headerName = document.getElementById('header-name');
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
        // Force header update immediately after page load
        updateHeaderOnScroll();

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
        }
        // Set the reload flag
        sessionStorage.setItem('isReloaded', 'true');
    });

    // Function to adjust scroll position with dynamic header height
    function scrollToSectionWithDynamicOffset(id) {
        const section = document.getElementById(id);
        if (section) {
            const headerHeight = header ? header.offsetHeight : 0; // Get header height dynamically
            window.scrollTo({
                top: section.offsetTop - headerHeight, // Adjust the scroll position
                behavior: 'smooth'
            });
        }
    }

    // Attach click event to the specific nav link
    const linkSection4 = document.getElementById('link-section-4');
    if (linkSection4) {
        linkSection4.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            scrollToSectionWithDynamicOffset('section-4'); // Adjust the scroll position dynamically
        });
    }

    // Force header update immediately after page load
    updateHeaderOnScroll();
});



//* END V8 = V5 + specific scroll based on header height for section 4 ISA
