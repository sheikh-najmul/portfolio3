$(function () {
    'use strict';

    //preloader start    
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    //active menu start    
    $('body').scrollspy({
        target: '#navbarSupportedContent'
    });

    //smooth scroll   
    $('#menubar a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    //menu fixed
    var $navOffset = $('#menubar').offset().top;
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling > $navOffset) {
            $('#menubar').addClass('navFixed');
        } else {
            $('#menubar').removeClass('navFixed');
        }
    });

    //top to button
    $('.top-to').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });


    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling > 300) {
            $('.top-to').fadeIn();
        } else {
            $('.top-to').fadeOut();
        }

    });

    //about image tilt
    const tilt = $('.js-tilt').tilt({
        maxTilt: 5,
    });

    // about counter
    $('.count-item').counterUp({
        delay: 10,
        time: 3000
    });

    //portfolio slide show
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    //portfolio filtering
    var containerEl = document.querySelector('.main_img');
    var mixer = mixitup(containerEl);
    //portfolio menu active
    $('.p-menu li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    //progress bar
    $(".skillbar").appear(function () {
        var color = $(this).find('.chart').data('color');
        var percent = $(this).find('.chart').data('percent');
        $(this).find('.chart').easyPieChart({
            barColor: '#b3995f',
            trackColor: '#f2f2f2',
            scaleColor: false,
            scaleLength: 5,
            lineWidth: 5,
            size: 150,
            lineCap: 'circle',
            animate: 1500
        });
    });


    // client slide
    $('.client-slide').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left leftbtn"></i>',
        nextArrow: '<i class="fa fa-chevron-right rightbtn"></i>',
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
      },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
      },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });
});