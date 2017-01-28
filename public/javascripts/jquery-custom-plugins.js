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
    });


})()