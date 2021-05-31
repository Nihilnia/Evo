$(document).ready(function(){
    console.log("Ok!.");




    var button = $('button');
    var box = $('#container');

    button.click(function(){
        box.animate({
            left: '200px',
            width: '400px',
            height: '400px'
        }, 2000)
    });

});