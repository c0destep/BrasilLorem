function themedark() {
    if (localStorage.getItem("theme") == 'lighted') {
        localStorage.setItem("theme", "inverted");
        localStorage.setItem("background", "background-color: #1b1c1d;");
        $('.theme').removeClass('lighted');
    } else {
        localStorage.setItem("theme", "lighted");
        localStorage.setItem("background", "false");
        $('.theme').removeClass('inverted');
    }

    $('.theme').addClass(localStorage.getItem("theme"));
    $('.pusher').attr('style', localStorage.getItem("background"));
}
$(document).ready(function () {
    $('.ui.sidebar.icon.labeled')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '.menuteral');

    document.getElementById('search-mobile').addEventListener('click', searchMobile);

    if (localStorage.getItem("theme") == 'lighted') {
        $('.theme').removeClass('inverted');
        $('.theme').addClass(localStorage.getItem("theme"));
        $('.pusher').attr('style', false);
    } else {
        $('.theme').removeClass('lighted');
        $('.theme').addClass(localStorage.getItem("theme"));
        $('.pusher').attr('style', 'background-color: #1b1c1d;');
    }

    function searchMobile() {
        console.log('ESTÁ FUNCIONANDO');
    }
});