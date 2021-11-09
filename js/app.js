$(document).ready(() => {
    let nav_menu = $('#nav-menu');
    let hamburger = $('#hamburger');
    let user_circle = $('#user-circle');
    let search = $('search');
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active');
        $('#nav-menu').toggleClass('active');
    })

    $('#user-circle').click(() => {
        $('#option-user').toggleClass('active');
        $('#search-input').removeClass('active');
    })

    $('#search').click(() => {
        $('#option-user').removeClass('active');
        $('#search-input').toggleClass('active');
    })

    $(window).click((event) => {
        let arr1 = ['hamburger', 'user-circle', 'search', 'hamburger-menu', 'search-input'];
        if (!arr1.includes(event.target.id)) {
            $('#hamburger-menu').removeClass('active');
            $('#nav-menu').removeClass('active');
            $('#search-input').removeClass('active');
            $('#option-user').removeClass('active');
        }
    })
    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#product-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                nav: false
            },
            600: {

            }
        }
    })

    $('#new-arrivals-carousel').owlCarousel({
        items: 4,
        dots: false,
        loop: true,
        nav: false,
        margin: 15,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    $('#hot-trend-carousel').owlCarousel({
        items: 4,
        dots: false,
        loop: true,
        nav: false,
        margin: 15,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    $('#label-login').click(() => {
        $('#login-line').removeClass('line-to-right');
        $('#login-line').addClass('line-to-left');

        $('#login-content').css('left', '0');
        $('#register-content').css('left', '100%');
        $('#register-content').css('opacity', '0');
        $('#login-content').css('opacity', '1');

        $('#login-register-content').css('height', '350px')

    })

    $('#label-register').click(() => {
        $('#login-line').removeClass('line-to-left');
        $('#login-line').addClass('line-to-right');

        $('#register-content').css('left', '0');
        $('#login-content').css('left', '-100%');
        $('#login-content').css('opacity', '0');
        $('#register-content').css('opacity', '1');

        $('#login-register-content').css('height', '600px')
    })

});