$(document).ready(() => {
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


    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#product-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

});