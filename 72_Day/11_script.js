$(document).ready(function(){
    console.log("Everything is ready.");
 
    $('input').change(function(){
        console.log($(this).val());
        $(this).hide();
    });

    $("button").click(function(){
        $('input').toggle();
    });
});