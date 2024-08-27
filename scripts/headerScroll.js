

window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const navHeader = document.getElementById('nav-header');
    const headerLogo = document.getElementById('header-logo');
    const headerName = document.getElementById('header-name');
    const burgerIcon = document.getElementById('burger-icon');
    if (window.scrollY > 0) {
        header.classList.add('fixed');
        navHeader.classList.add('fixed');
        headerLogo.classList.add('fixed');
        headerName.classList.add('fixed');
        burgerIcon.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
        navHeader.classList.remove('fixed');
        headerLogo.classList.remove('fixed');
        headerName.classList.remove('fixed');
        burgerIcon.classList.remove('fixed');
    }
});
