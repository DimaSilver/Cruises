$(function () {
    $('select').styler();

    $('.menu__btn').on("click", function () {
        $('.menu__list').toggleClass('menu__list--active')
    });
    $('.btn__link').on("click", function () {
        $('.btn__link').toggleClass('btn__link--active');
    });
});