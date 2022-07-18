$(document).ready(function() {
    // scroll navbar
    $(window).scroll(function() {
        let navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass("scrolled")
        } else { navbar.removeClass("scrolled") }
    })

    // control tabs
    $('.tab-switch ul li').click(function() {
        // adding active class 
        $(this).addClass('active').siblings().removeClass('active');
        // conntect divs with active class
        $('.tab-content > div').hide();
        $('.' + $(this).attr('data-value')).fadeIn(1000);
    })
});