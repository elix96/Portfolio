$(document).ready(function() {

    $('#customer').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            450: {
                items: 3
            },
            600: {
                items: 5,
            },
            1000: {
                items: 8,
            }
        }
    })
    $('#software').owlCarousel({
        loop: true,
        rtl: true,
        autoplay: true,
        responsiveClass: true,
        navText: ["<i class='fa fa-caret-right'></i>", "<i class='fa fa-caret-left'></i>"],
        responsive: {

            0: {
                items: 1,
                nav: false,
            },

            768: {
                items: 1,
                dots: false,
                nav: true,
            }
        }
    })

    $('#hardware').owlCarousel({
        loop: true,
        rtl: true,
        autoplay: true,
        singleItem: true,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                dots: true,
                nav: false,
            },
            768: {
                dots: false,
                nav: true,
            }
        }
    })

    $('#whyacsan').owlCarousel({
        loop: true,
        rtl: true,
        autoplay: true,
        singleItem: true,
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                dots: true,
                nav: false,
            },
            768: {
                dots: false,
                nav: true,
            }
        }
    })

    var a = 0;
    $(window).scroll(function() {

        var oTop = $('.acsan-honors').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.numbers').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }

    });


})