document.addEventListener('DOMContentLoaded', function () {

    const btnHamburger = document.querySelector('.nav-icon-hamburger');
    const btnClose = document.querySelector('.nav-icon-close');
    const mobileMenu = document.querySelector('.nav-mobile-links');


    function closeHamburger() {
        btnHamburger.style.display = 'none';
        btnClose.style.display = 'block';
        mobileMenu.classList.toggle("active")
    }

    function openHamburger() {
        btnHamburger.style.display = 'block';
        btnClose.style.display = 'none';
        mobileMenu.classList.toggle("active")
    }

    btnHamburger.addEventListener('click', closeHamburger);
    btnClose.addEventListener('click', openHamburger);

});