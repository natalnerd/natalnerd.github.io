function scrollBanner() {
    var scrollPos = window.scrollY;
    var header = document.querySelector('.header-paralax');

    if (scrollPos <= 280) {
        header.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        header.style.opacity = 1 - (scrollPos / 280);
    }
}

window.addEventListener('scroll', scrollBanner);