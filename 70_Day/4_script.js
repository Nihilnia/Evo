$(document).ready(function(){

    console.log("Everything is ready.");

    var elementH2 = $('#h2_1');

    //* Fade Operations */

    $('#btnShow').click(function(){
        elementH2.fadeIn(2000);
    });

    $('#btnHide').click(function(){
        elementH2.fadeOut(2000);
    });

    $('#btnToggle').click(function(){
        elementH2.fadeToggle(2000, function(){
            console.log("Completed..");
        });
    });

    $('#btnTo').click(function(){
        elementH2.fadeTo('slow', 0);
    });


    var elementH2_2 = $('#h2_2')
    //* Slide Operations */

    $('#btnSlideUp').click(function(){
        elementH2_2.slideUp(2000);
    });

    $('#btnSlideDown').click(function(){
        elementH2_2.slideDown(2000);
    });

    $('#btnSlideToggle').click(function(){
        elementH2_2.slideToggle(2000);
    });

});