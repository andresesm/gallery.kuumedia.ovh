document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.grid');

    if (grid) {
        imagesLoaded(grid, function () {
            new Masonry(grid, {
                itemSelector: '.gallery-item',
                columnWidth: '.gallery-item',
                percentPosition: true
            });
        });
    }
});
