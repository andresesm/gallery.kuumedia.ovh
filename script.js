document.addEventListener("DOMContentLoaded", function() {
    var grid = document.querySelector('.gallery');
    new Masonry(grid, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true
    });
});
