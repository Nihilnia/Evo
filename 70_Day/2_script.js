$(document).ready(function(){
    var oldValue = $('.control').val();
    $('.control').change(function(){
        
        console.log('Old value:', oldValue);
        console.log('New value:', $(this).val());
        oldValue = $(this).val();
    });
});

//Not perfect, jjust wanna see that if it's gonna work.