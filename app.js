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
});