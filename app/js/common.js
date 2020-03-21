$(function() {
    $('.dropdown').hover(function() {
        let inner = $(this).find('.dropdown__inner')
        console.log('hover');
        inner.stop(true, true).slideDown(100);
    }, function() {
        let inner = $(this).find('.dropdown__inner')
        console.log('hover out');
        inner.stop(true, true).slideUp(100);
    });
});