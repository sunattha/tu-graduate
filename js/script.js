

jQuery(function ($) {


    "use strict";

    var $window = $(window);
    var windowsize = $(window).width();



    /*===================================
       Loading Timeout
     ====================================== */

    setTimeout(function () {
        $("#loader-fade").fadeOut("slow");
    }, 1000);


    /* ===================================
        Nav Scroll
        ====================================== */

    $(".scroll").on("click", function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top - 55}, 700);
    });



    /* ===================================
               Side Menu
           ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".side-nav-btn").addClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(".side-nav-btn").removeClass("active");
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"),
                $(".side-nav-btn").removeClass("active");
        });
    }


    /*header appear*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 220) {
            $('.navbar').addClass("fixedmenu");
            $('.hamburger').addClass("menu-scroll");
            $('header').addClass("header-appear");
        }
        else {
            $('.navbar').removeClass("fixedmenu");
            $('.hamburger').removeClass("menu-scroll");
            $('header').removeClass("header-appear");
        }
    });

    /*// fixing bottom nav to top on scrolliing
    var $fixednav = $(".fixed-bottom");
    $(window).on("scroll", function () {
        var $heightcalc = $(window).height() - $fixednav.height();
        if ($(this).scrollTop() > $heightcalc) {
            $fixednav.addClass("navbar-bottom-top");
        } else {
            $fixednav.removeClass("navbar-bottom-top");
        }
    });/*

  // fixing bottom nav to top on scrolliing */
    var $fixednav = $(".fixed-bottom");
    $(window).on("scroll", function () {
        var $heightcalc = $(window).height() - $fixednav.height();
        if ($(this).scrollTop() > $heightcalc) {
            $fixednav.addClass("navbar-bottom-top");
        } else {
            $fixednav.removeClass("navbar-bottom-top");
        }
    });



    /* ===================================
     Equal Heights
     ====================================== */
    checheight();
    $window.on("resize", function () {
        checheight();
    });

    function checheight() {
        var $smae_height = $(".equalheight");
        if ($smae_height.length) {
            if (windowsize > 767) {
                $smae_height.matchHeight({
                    property: "height",
                });
            }
        }
    }


    /* ===================================
                 Parallax
              ====================================== */
    if (windowsize > 992) {
        $(".parallaxie").parallaxie({
            speed: 0.4,
            offset: 0,
        });
    }


    /* =====================================
          Portfolio Filter
      ====================================== */

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({filter: filterValue});

    });

    $('.filtering').on('click', 'span', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

    setTimeout(function (){
        $('.filtering .active').click();
    }, 1500)


// Team Slider

    $("#team-slider").owlCarousel({
        items: 3,
        dots: false,
        nav: false,
        responsive: {
            992: {
                items: 3,
            },
            991: {
                items: 2,
            },
            767: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });


    /*=======================================
         Number Scrolling
 * ======================================*/

    $(".counter").appear(function () {
        $('.num-scrolling').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    /*====================================
           Progress Bar
     ===================================*/


    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 3000)
        });
    });


    $('.count').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    /*============================================*
                  Cube Portfolio
    ============================================*/

// init cubeportfolio
    $('#js-grid-mosaic-flat').cubeportfolio({
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'mosaic',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 6,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic-flat',
                action: 'click',
                loadItems: 3,
            }
        },
    });

/*=========================
    price slider
=========================*/

    $("#price-slider").owlCarousel({
        items: 3,
        dots: false,
        nav: false,
        responsive: {
            991: {
                items: 3,
            },
            767: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });


    /*=================
    Revolution slider
    ============*/

    $("#rev_slider_19_1").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//localhost:82/revslider/revslider/public/assets/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            bullets: {
                enable: true,
                hide_onmobile: true,
                hide_under: 767,
                style: "wexim",
                hide_onleave: false,
                direction: "vertical",
                h_align: "left",
                v_align: "center",
                h_offset: 30,
                v_offset: 0,
                space: 5,
                tmp: '<div class="tp-bullet-inner"></div><div class="tp-line"></div>'
            },
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
        },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: [1140, 1024, 750, 480],
        gridheight: [600, 500, 500, 350],
        lazyType: "none",
        scrolleffect: {
            on_slidebg: "on",
        },
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2000,
            speedbg: 0,
            speedls: 0,
            levels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            disable_onmobile: "on"
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "on",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });

    /*Video Background*/
    $("#video-bg").show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        scrollbarDrag: "true",
        dottedOverlay: "none",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            bullets: {
                enable: false
            },
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            }
        },
        viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "90%"
        },
        responsiveLevels: [4096, 1024, 778, 480],
        gridwidth: [1140, 1024, 750, 480],
        gridheight: [600, 500, 500, 350],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 9000,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
        }
    });



    /* ===================================
      Rotating Text
      ====================================== */

    if ($("#js-rotating").length) {
        $("#js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "flipInX",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 3000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    }


    /* =====================================
          Wow
     ======================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }


    /*Testimonial one slide fade*/
    $(".owl-testimonial").owlCarousel({
        autoplay: false,
        autoplayHoverPause: true,
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        responsive: {
            1280: {
                center: true,
                items: 3,
            },
            800: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });

    var owl5 = $('.partners-slider');
    owl5.owlCarousel({
        items: 5,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 5,
            },
            900: {
                items: 4,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });

    $(".owl-testimonial").owlCarousel({
        autoplay: 1000,
        smartSpeed: 1500,
        margin: 30,
        slideBy: 1,
        autoplayHoverPause: true,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            600: {
                items: 2
            },
            320: {
                items: 1
            },
        }
    });




    /* ===================================
     Rotating Text
     ====================================== */

    if ($("#js-rotating").length) {
        $("#js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "flipInX",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 3000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    }

    /*=======================================
          Number Scrolling
  * ======================================*/

    $(".stats").appear(function () {
        $('.num-scrolling').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    /*Services Box Slider*/
    $("#services-slider").owlCarousel({
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        loop: true,
        nav: false,
        navText: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 3
            }
        }
    });


    /* ===================================
         Type Text
         ====================================== */

    if ($("#typewriting").length) {
        var app = document.getElementById("typewriting");
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('Way to achieve success').pauseFor(2000).deleteAll()
            .typeString('Style to achieve success').pauseFor(2000).deleteAll()
            .typeString('Method to achieve success').start();
    }

    if ($("#personal").length) {
        var app = document.getElementById("personal");
        var personal = new Typewriter(app, {
            loop: true
        });
        personal.typeString('UI/UX Designer').pauseFor(2000).deleteAll()
            .typeString('Web Developer').pauseFor(2000).deleteAll()
            .typeString('Wordpress Developer').start();
    }

    // Cube Portfolio Style 2
    $('#js-grid-full-width').cubeportfolio({
        filters: '#js-filters-full-width',
        layoutMode: 'mosaic',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: -1,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,
        sortByDimension: true,

        mediaQueries: [{
            width: 1500,
            cols: 4,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 2,
        }, {
            width: 480,
            cols: 1,
        }],

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: '#js-loadMore-full-width',
                action: 'auto',
                loadItems: 3,
            }
        },
    });

    /* =====================================
     Coming Soon Count Down
    ====================================== */


    if ($(".count_down").length) {
        $('.count_down').downCount({
            date: '12/23/2019 12:00:00',
            offset: +10
        });
    }



    /*animated elements hero banner*/
    $("#rev_single").show().revolution({
        sliderType: "hero",
        jsFileLocation: "js/revolution",
        sliderLayout: "fullscreen",
        scrollbarDrag: "true",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {},
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1170, 1024, 778, 480],
        gridheight: [868, 768, 960, 720],
        lazyType: "none",
        parallax: {
            type: "scroll",
            origo: "slidercenter",
            speed: 400,
            levels: [10, 15, 20, 25, 30, 35, 40, -10, -15, -20, -25, -30, -35, -40, -45, 55]
        },
        shadow: 0,
        spinner: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            disableFocusListener: false
        }
    });

    /*arrows thumb Slider*/
    $("#rev_arrows").show().revolution({
        sliderType: "standard",
        jsFileLocation: "js/revolution/",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                style: "zeus",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '<div class="tp-title-wrap"> <div class="tp-arr-imgholder"></div> </div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                }
            }
        },
        viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "80%",
            presize: false
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1140, 1024, 768, 480],
        gridheight: [660, 650, 600, 490],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2000,
            speedbg: 0,
            speedls: 0,
            levels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 25, 55],
            disable_onmobile: "on"
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });



    /*==========================================
    rev slider
    ============================================*/

    $("#rev_slider_6_1").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//localhost:82/revslider/revslider/public/assets/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "on",
            arrows: {
                style: "zeus",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                }
            },

            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            bullets: {
                enable: true,
                hide_onmobile: false,
                style: "hermes",
                hide_onleave: false,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20,
                space: 5,
                tmp: ''
            }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [868, 768, 960, 720],
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });





    /* Thumb */
    $("#thumb-banner").show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        scrollbarDrag: "true",
        dottedOverlay: "none",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            thumbnails: {
                style: "hades",
                enable: true,
                width: 70,
                height: 70,
                min_width: 50,
                wrapper_padding: 5,
                wrapper_color: "transparent",
                wrapper_opacity: "1",
                tmp: '<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
                visibleAmount: 5,
                hide_onmobile: false,
                hide_onleave: false,
                direction: "horizontal",
                span: false,
                position: "inner",
                space: 5,
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 20
            },
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false,
            }
        },
        viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "90%"
        },
        responsiveLevels: [4096, 1024, 778, 480],
        gridwidth: [1140, 1024, 768, 480],
        gridheight: [600, 500, 500, 350],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 9000,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });

    //single slider

    $("#single-slider").owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 3000,

    });


    $(".single-slider").owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 3000,

    });



    // Gym Style 3
    $('#js-grid-full-width2').cubeportfolio({
        filters: '#js-filters-full-width',
        layoutMode: 'mosaic',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,
        sortByDimension: true,

        mediaQueries: [{
            width: 1500,
            cols: 3,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 800,
            cols: 2,
        }, {
            width: 480,
            cols: 1,
        }],

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: '#js-loadMore-full-width',
                action: 'auto',
                loadItems: 3,
            }
        },
    });


    /* Construction */
    $("#rev_slider_1078_2").show().revolution({
        sliderType: "standard",
        jsFileLocation: "revolution/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 6000,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                style: "zeus",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false,
                hide_onmobile: false,
                hide_under: 300,
                style: "hermes",
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 8,
                tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
            }
        },
        viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "80%",
            presize: false
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [600, 600, 500, 400],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2000,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55]
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
        }
    });




    /*Main Slider*/
    $("#banner-main").show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        scrollbarDrag: "true",
        dottedOverlay: "none",
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            bullets: {
                style: "",
                enable: false,
                rtl: false,
                hide_onmobile: false,
                hide_onleave: false,
                hide_under: 767,
                hide_over: 9999,
                tmp: '',
                direction: "vertical",
                space: 10,
                h_align: "right",
                v_align: "center",
                h_offset: 40,
                v_offset: 0
            },
            arrows: {
                enable: true,
                hide_onmobile: true,
                hide_onleave: false,
                hide_under: 1025,
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 30
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 30
                }
            },
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false,
            }
        },
        viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "90%"
        },
        responsiveLevels: [4096, 1024, 778, 480],
        gridwidth: [1140, 1024, 750, 480],
        gridheight: [600, 500, 500, 350],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 9000,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "on",
            disableFocusListener: false,
        }
    });

});

/* ===================================
          Revolution Slider
   ====================================== */

$("#rev_slider_19_2").show().revolution({
    sliderType: "standard",
    jsFileLocation: "//localhost:82/revslider/revslider/public/assets/js/",
    sliderLayout: "fullscreen",
    dottedOverlay: "none",
    delay: 9000,
    navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        bullets: {
            enable: false,
            hide_onmobile: true,
            hide_under: 767,
            style: "wexim",
            hide_onleave: false,
            direction: "vertical",
            h_align: "left",
            v_align: "center",
            h_offset: 30,
            v_offset: 0,
            space: 5,
            tmp: '<div class="tp-bullet-inner"></div><div class="tp-line"></div>'
        },
        touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
        },
    },
    responsiveLevels: [1240, 1024, 778, 480],
    visibilityLevels: [1240, 1024, 778, 480],
    gridwidth: [1240, 1024, 778, 480],
    gridheight: [600, 600, 500, 400],

    lazyType: "none",
    scrolleffect: {
        on_slidebg: "on",
    },
    parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2000,
        speedbg: 0,
        speedls: 0,
        levels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        disable_onmobile: "on"
    },
    shadow: 0,
    spinner: "off",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: "off",
    autoHeight: "off",
    fullScreenAutoWidth: "off",
    fullScreenAlignForce: "off",
    fullScreenOffsetContainer: "",
    fullScreenOffset: "",
    disableProgressBar: "on",
    hideThumbsOnMobile: "on",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
    }
});


//Contact Us
$("#submit_btn").click(function() {

    //disable submit button on click
    $("#submit_btn").attr("disabled", "disabled");
    $("#submit_btn span").text('Sending');
    $("#submit_btn i").removeClass('d-none');

    var user_name = $('input[name=first_name]').val() + ' ' + $('input[name=last_name]').val();
    var user_email = $('input[name=email]').val();
    var user_phone = $('input[name=phone]').val();
    var user_message = $('textarea[name=message]').val();

    //simple validation at client's end
    var post_data, output;
    var proceed = true;
    if (user_name == "") {
        proceed = false;
    }
    if (user_email == "") {
        proceed = false;
    }
    // if (user_phone == "") {
    //proceed = false;
    // }

    if (user_message == "") {
        proceed = false;
    }
    //everything looks good! proceed...
    if (proceed) {

        //data to be sent to server
        post_data = { 'userName': user_name, 'userEmail': user_email, 'userPhone': user_phone, 'userMessage': user_message };

        //Ajax post data to server
        $.post('contact.php', post_data, function(response) {

            //load json data from server and output message
            if (response.type == 'error') {
                output = '<div class="alert-danger" style="padding:10px; margin-bottom:30px;">' + response.text + '</div>';
            } else {
                output = '<div class="alert-success" style="padding:10px; margin-bottom:30px;">' + response.text + '</div>';

                //reset values in all input fields
                $('.contact-form input').val('');
                $('.contact-form textarea').val('');
            }

            $("#result").hide().html(output).slideDown();

            // enable submit button on action done
            $("#submit_btn").removeAttr("disabled");
            $("#submit_btn span").text('Contact Now');
            $("#submit_btn i").addClass('d-none');

        }, 'json');

    }
    else {
        output = '<div class="alert-danger" style="padding:10px; margin-bottom:30px;">Please provide the missing fields.</div>';
        $("#result").hide().html(output).slideDown();

        // enable submit button on action done
        $("#submit_btn").removeAttr("disabled");
        $("#submit_btn span").text('Contact Now');
        $("#submit_btn i").addClass('d-none');
    }




});



