$(function() {
    // Sticky menu
    window.onscroll = function() { onScrollListener() };


    function onScrollListener() {
        let navbar = document.getElementsByClassName("menu")[0];
        let sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("menu-sticky");
            $('body').css('paddingTop', $('.menu').height() + 'px');
        } else {
            navbar.classList.remove("menu-sticky");
            $('body').css('paddingTop', 0);
        }
    }


    $('.dropdown').hover(function() {
        let inner = $(this).find('.dropdown__inner')
        console.log('hover');
        inner.stop(true, true).slideDown(100);
    }, function() {
        let inner = $(this).find('.dropdown__inner')
        console.log('hover out');
        inner.stop(true, true).slideUp(100);
    });

    // Mobile menu
    jQuery(document).ready(function($) {
        $("#menu").mmenu({
            "extensions": [
                "pagedim-black",
                "theme-dark"
            ],
            "navbar": {
                "title": "Навигационная панель",
                "sticky": false
            },
            "searchfield": {
                'placeholder': "Поиск",
                'noResults': "Нет подходящих вариантов"
            },
            "navbars": [{
                    "position": "top",
                    "content": [
                        "searchfield",
                    ]
                },
                {
                    "position": "top",
                    "content": [
                        "prev",
                        "title"
                    ]
                },
                {
                    "position": "bottom",
                    "content": [
                        "<a class='fa fa-envelope' href='#/'></a>",
                        "<a class='fa fa-twitter' href='#/'></a>",
                        "<a class='fa fa-facebook' href='#/'></a>"
                    ]
                }
            ]
        });
    });
});