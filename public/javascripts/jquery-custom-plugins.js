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

            /* changing the slideselector to avoid conflict with bootstrap's carousel */
            slideSelector: '.fullpage-slide'
        });


        window.setTimeout(function(){
            $('.preload').fadeOut();
        },500);
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

})()