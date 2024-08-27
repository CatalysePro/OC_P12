
//todo START V2 = v1 +  NAV LINK COLOR ADAPTATION REGARDING TARGETED SECTION

document.querySelectorAll('a[data-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Remove 'targeted' class from all links
        document.querySelectorAll('a[data-scroll]').forEach(anchor => {
            anchor.classList.remove('targeted');
        });

        // Add 'targeted' class to the clicked link
        this.classList.add('targeted');
    });
});

// Add scroll event listener to update targeted link
window.addEventListener('scroll', function () {
    const headerHeight = document.querySelector('header').offsetHeight;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            const targetId = section.getAttribute('id');
            document.querySelectorAll('a[data-scroll]').forEach(anchor => {
                anchor.classList.remove('targeted');
                if (anchor.getAttribute('href').substring(1) === targetId) {
                    anchor.classList.add('targeted');
                }
            });
        }
    });
});

//todo END V2 = v1 +  NAV LINK COLOR ADAPTATION REGARDING TARGETED SECTION
