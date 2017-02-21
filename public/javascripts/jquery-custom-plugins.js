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

        //navbar animation
        $(document).ready(function () {
            var overlayActive = false;

            $('.navbar-button').click(function() {
                $('.navbar-overlay').toggleClass('anim');
                if(overlayActive) {
                    overlayActive = false;
                    /* don't add class if on first section */
                    if(!$("body").hasClass("fp-viewing-0")){
                        $("nav").addClass("transform-navbar");
                    }
                } else {
                    overlayActive = true;
                    $("nav").removeClass("transform-navbar");
                }

            });

            $('.animation').click(function(){
                $('.anim').toggleClass('reverse-animation');
            })
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