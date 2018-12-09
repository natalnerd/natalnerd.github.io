function scrollBanner() {
    var scrollPos = window.scrollY;
    var header = document.querySelector('.header-paralax');

    if (scrollPos <= 280) {
        header.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        header.style.opacity = 1 - (scrollPos / 280);
    }
}

window.addEventListener('scroll', scrollBanner);

$(document).ready(() => {
    $('.scrollSuave').click(function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(document).ready(() => {
    $('.toTop').click(function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'linear');
    });
});

// $('html, body').animate({
//     scrollTop: 0
// }, 1000, 'linear');
//     }

// var $doc = $('html, body');
// $('.scrollSuave').click(function () {
//     $doc.animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 1000);
//     return false;
// });