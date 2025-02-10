document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.gallery');

    if (grid) {
        imagesLoaded(grid, function () {
            new Masonry(grid, {
                itemSelector: '.gallery-item',
                columnWidth: '.gallery-sizer',
                percentPosition: true
            });
        });
    }
});
