document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.masonry');

    if (grid) {
        imagesLoaded(grid, function () {
            var msnry = new Masonry(grid, {
                itemSelector: '.masonry-item',
                columnWidth: '.gallery-sizer',
                percentPosition: true
            });

            // Forzar realineación después de cada imagen cargada
            imagesLoaded(grid).on('progress', function () {
                msnry.layout();
            });
        });
    }
});
