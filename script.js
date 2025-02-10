document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.masonry');

    if (grid) {
        imagesLoaded(grid, function () {
            var msnry = new Masonry(grid, {
                itemSelector: '.masonry-item',
                columnWidth: '.gallery-sizer',
                percentPosition: true
            });

            // 🔥 SOLUCIÓN: Recalcular Masonry después de 500ms
            setTimeout(() => {
                msnry.layout();
            }, 500);
        });
    }
});
