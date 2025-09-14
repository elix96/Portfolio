$(document).ready(function () {
    var $lightbox = $('#lightbox');

    $('[data-target="#lightbox"]').on('click', function (event) {
        var $img = $(this).find('img'),
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };

        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });

    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
        $lightbox.find('.modal-dialog').css({ 'width': $img.width() });
    });

    $(".images-grid-1").imagesGrid();

    $(".images-grid-2").imagesGrid({
        rowHeight: 250,
        margin: 10
    });

    $(".products").imagesGrid({
        rowHeight: 250,
        margin: 5,
        imageSelector: '.product-image'
    });
});