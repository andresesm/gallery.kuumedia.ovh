document.addEventListener("DOMContentLoaded", function() {
    var elem = document.querySelector('.gallery');
    var msnry = new Masonry(elem, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true
    });
});
