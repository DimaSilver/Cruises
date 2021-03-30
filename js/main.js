$(function () {
    $('select').styler();

    $('.menu__btn').on("click", function () {
        $('.menu__list').toggleClass('menu__list--active')
    });
    $('.btn__link').on("click", function () {
        $('.btn__link').toggleClass('btn__link--active');
    });
    $('.catalog__item-textarea__prices-new').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#card-form',
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#card-form';
                }
            }
        }
    });
});