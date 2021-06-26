$('#submitZ').click(function(){
    
    var inputID = $('#id');
    var inputPass = $('#pass');
    var outputErrorz = $('#errorZ h2');

    if(inputID.val() <= 3){
        outputErrorz.html("asdaaa");
        outputErrorz.css('color', 'white');
    }

})