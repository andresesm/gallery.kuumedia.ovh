document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.masonry');

    if (grid) {
        imagesLoaded(grid, function () {
            new Masonry(grid, {
                itemSelector: '.masonry-item',
                columnWidth: '.gallery-sizer',
                percentPosition: true
            });
        });
    }
});

// Recalcular Masonry cuando el usuario cambia el tamaño de la ventana
window.addEventListener('resize', function () {
    var grid = document.querySelector('.masonry');
    if (grid) {
        new Masonry(grid, {
            itemSelector: '.masonry-item',
            columnWidth: '.gallery-sizer',
            percentPosition: true
        });
    }
});
