
// Enable Smooth Scrolling ...  by Chris Coyier of CSS-Tricks.com (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
// all code taken from https://css-tricks.com/snippets/jquery/smooth-scrolling/

$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1200);
            return false;
        }
    }
});

