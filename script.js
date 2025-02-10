document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.gallery');

    // Iniciar Masonry después de que todas las imágenes se hayan cargado
    imagesLoaded(grid, function () {
        new Masonry(grid, {
            itemSelector: '.gallery-item',
            columnWidth: '.gallery-sizer',
            percentPosition: true
        });
    });
});
