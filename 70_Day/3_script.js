$(document).ready(function(){
    console.log("Everything is ready.");

    var elementH2 = $('h2');

    $('#btnShow').click(function(){
        elementH2.show(2000);
    });
    $('#btnHide').click(function(){
        elementH2.hide(2000);
    });
    $('#btnToggle').click(function(){
        elementH2.toggle(2000, function(){
            elementH2.css('color', 'red');
            console.log("Completed..");
        });
    });
});