$(window).scroll(function () {
    var scrollPos = window.scrollY;
    var header = document.querySelector('.header-paralax');

    if (scrollPos <= 280) {
        header.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
        header.style.opacity = 1 - (scrollPos / 280);
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.scrollTop').fadeIn();
     } else {
        $('.scrollTop').fadeOut();
     }
 });
 
 $(".scrollTop").hide();

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
        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'linear');
    });
});

$(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
       $(".navbar").addClass("navbarChange");
      } else {
       $(".navbar").removeClass("navbarChange");
      }
    });
  });