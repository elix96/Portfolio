// JavaScript source code
(function ($) {
    "use strict";
    var tpj = jQuery;
    var revapi98;
    tpj(document).ready(function () {
        if (tpj("#rev_slider_98_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_98_1");
        } else {
            revapi98 = tpj("#rev_slider_98_1").show().revolution({
                sliderType: "hero",
                jsFileLocation: "js/revolution/",
                sliderLayout: "fullwidth",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                },
                responsiveLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [600, 550, 500, 500],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
                },
                shadow: 0,
                spinner: "off",
                autoHeight: "off",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    disableFocusListener: false,
                }
            });
        }
    }); /*ready*/

    var tpj = jQuery;
    var revapi213;
    tpj(document).ready(function () {
        if (tpj("#rev_slider_213_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_213_1");
        } else {
            revapi213 = tpj("#rev_slider_213_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "js/revolution/",
                sliderLayout: "auto",
                dottedOverlay: "none",
                delay: 4000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",

                    bullets: {
                        enable: false,
                        hide_onmobile: false,
                        style: "custom",
                        hide_onleave: false,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 80,
                        space: 15,
                        tmp: ''
                    }
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1200, 1024, 778, 480],
                gridheight: [650, 300, 300, 220],
                lazyType: "single",
                parallax: {
                    type: "scroll",
                    origo: "slidercenter",
                    speed: 400,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],

                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
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
        }
    }); /*ready*/
})(jQuery);

$(".single-item").slick({

    autoplay: true,
    autoplaySpeed: 3000
});


$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
});

function login_pop_up() {

    document.getElementById('id01').style.display = 'block'
}

function close_pop_up() {
    document.getElementById('id01').style.display = 'none'
}

var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var sliderimg = $('.service-images');
var countslider = sliderimg.length;
var textclick = $('.service-info');
var description = $('.service-description');
var nextslide = 1;
var timeout = 6000;
function nextslider() {
    if (nextslide > countslider) {
        nextslide = 1;
    }
    textclick.removeClass('service-active');
    sliderimg.hide();
    description.hide();
    sliderimg.eq(nextslide - 1).fadeIn(400);
    textclick.eq(nextslide - 1).addClass('service-active');
    description.eq(nextslide - 1).css('display', 'inline-block');
    nextslide++;
}

function gotoslid(index) {
    nextslide = index;
    nextslider();
}

clearInterval(timer);
nextslider();
var timer = setInterval(nextslider, timeout);

$('.service-info').click(function () {
    var sliderindex = $(this).index();
    gotoslid(sliderindex + 1);
})