document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.masonry');

    if (grid) {
        imagesLoaded(grid, function () {
            var msnry = new Masonry(grid, {
                itemSelector: '.masonry-item',
                columnWidth: '.gallery-sizer',
                percentPosition: true
            });

            // Forzar reordenamiento después de un tiempo
            setTimeout(() => {
                msnry.layout();
            }, 500);
        });
    }
});
