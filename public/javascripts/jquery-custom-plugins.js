(function(){
    
    $(document).ready(function() {

        $('#fullpage').fullpage({
            /* Adding a transform class to nav when scrolling away from first section 
             * Removing the class when scrolling back to first section */
            onLeave: function(index, nextIntex, direction) {
                if(index == 1 && direction == "down"){
                    $("nav").addClass("transform-navbar");
                }
                if(index == 2 && direction == "up"){
                    $("nav").removeClass("transform-navbar");
                }
            },

            /* reveal "misc projects"-images when entering the section */
            afterLoad: function(anchorLink, index) {
                if(index == 4) {
                    $('.revealAnimation').each(function(i) {
                        $(this).delay(150*(i)).animate({opacity: 1}); //Uses the each methods index+1 to create a multiplier on the delay
                    });
                }
            },

            /* changing the slideselector to avoid conflict with bootstrap's carousel */
            slideSelector: '.fullpage-slide',
            responsiveWidth: '1050'
        });


        window.setTimeout(function(){
            $('.preload').fadeOut();
        },500);

        // "Disable" the horizontal scroll.
        var $body = $(document);

        $body.bind('scroll', function() {
            if ($body.scrollLeft() !== 0) {
                $body.scrollLeft(0);
            }
        });
    });


    $('nav').affix({
        offset: {
            top: 100
        }
    })

    /* code for smooth scrolling */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /* change background image in about-page */
    $(window).scroll(function() {
        var windowScrollTop = $(window).scrollTop();

        if(windowScrollTop >= 650) {
            $('#biImage-1').hide();
            $('#biImage-2').show();
        } else if (windowScrollTop < 650) {
            $('#biImage-1').show();
            $('#biImage-2').hide();
        }
    })

    /* scrollreveal */
    window.sr = ScrollReveal();
    sr.reveal('.reveal', { delay: 500});

})()