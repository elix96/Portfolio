jQuery(document).ready(function ($) {

    /* ==============================================
    menu-->
    =============================================== */

    var MqL = 1170;
    //move nav element position according to window width
    moveNavigation();
    $(window).on('resize', function () {
        (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
    });

    //mobile - open lateral menu clicking on the menu icon
    $('.cd-nav-trigger').on('click', function (event) {
        event.preventDefault();
        if ($('.cd-main-content').hasClass('nav-is-visible')) {
            closeNav();
            $('.cd-overlay').removeClass('is-visible');
        } else {
            $(this).addClass('nav-is-visible');
            $('.cd-main-header').addClass('nav-is-visible');
            $('.cd-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').addClass('overflow-hidden');
            });
            toggleSearch('close');
            $('.cd-overlay').addClass('is-visible');
        }
    });

    //open search form
    $('.cd-search-trigger').on('click', function (event) {
        event.preventDefault();
        toggleSearch();
        closeNav();
    });

    (function ($) {
        $(document).ready(function () {
            $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent().siblings().removeClass('open');
                $(this).parent().toggleClass('open');
            });
        });
    })(jQuery);


    //submenu items - go back link
    $('.go-back').on('click', function () {
        $(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
    });

    function closeNav() {
        $('.cd-nav-trigger').removeClass('nav-is-visible');
        $('.cd-main-header').removeClass('nav-is-visible');
        $('.cd-primary-nav').removeClass('nav-is-visible');
        $('.has-children ul').addClass('is-hidden');
        $('.has-children a').removeClass('selected');
        $('.moves-out').removeClass('moves-out');
        $('.cd-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
            $('body').removeClass('overflow-hidden');
        });
    }

    function toggleSearch(type) {
        if (type == "close") {
            //close serach 
            $('.cd-search').removeClass('is-visible');
            $('.cd-search-trigger').removeClass('search-is-visible');
            $('.cd-overlay').removeClass('search-is-visible');
        } else {
            //toggle search visibility
            $('.cd-search').toggleClass('is-visible');
            $('.cd-search-trigger').toggleClass('search-is-visible');
            $('.cd-overlay').toggleClass('search-is-visible');
            if ($(window).width() > MqL && $('.cd-search').hasClass('is-visible')) $('.cd-search').find('input[type="search"]').focus();
            ($('.cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible');
        }
    }

    function checkWindowWidth() {
        //check window width (scrollbar included)
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        if (e[a + 'Width'] >= MqL) {
            return true;
        } else {
            return false;
        }
    }

    function moveNavigation() {
        var navigation = $('.cd-nav');
        var desktop = checkWindowWidth();
        if (desktop) {
            navigation.detach();
            navigation.insertBefore('.cd-header-buttons');
        } else {
            navigation.detach();
            navigation.insertAfter('.cd-main-content');
        }
    }
    
    /* ==============================================
     Slider-->
      =============================================== */
    $(window).load(function () {
        $('.flexslider').flexslider({
            animation: "slide",
            start: function (slider) {
                $('body').removeClass('loading');
            }
        });
    });

    /* ==============================================
     counter-->
     =============================================== */


    $('.about').appear(function () {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3400,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    processLine.init();
    magnific_video();
    

    });


    //Process Bar 
var processLine = {
    el: ".process-node",
    init: function() {
        processLine.bind();
    },
    bind: function() {
        $(window).scroll(function() {
            processLine.check();
        });
    },
    check: function() {
        $(processLine.el).each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 200) {
                $(this).closest("li").addClass("active").find(".line").addClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
                $(this).closest("li").removeClass("active").find(".line").removeClass("active");
            }
        });
    }


}


function magnific_video(){	
    jQuery('.mfp-video').magnificPopup({
        type: 'iframe',
    });
}