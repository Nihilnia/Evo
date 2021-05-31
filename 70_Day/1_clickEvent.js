$(function(){
    console.log("Every fucking things are ready, sir.");

    $('#btnDeneme').click(function(){
        console.log("Calisti!");
    });

    

    $('ul').click(function(){
        // var newLI = document.createElement('li');
        // newLI.setAttribute('class', 'list-group-item');
        // var theUL = document.querySelector('ul');
        // newLI.textContent = 'Gloria';
        // theUL.appendChild(newLI);
        // var newOne = $('<li class="list-group-item">And a fifth one</li>');
        // newOne.addClass('lightNing');
        // $(this).append(newOne);

        // console.log("QQA");
        // alert("New element created.");
    });

    $("li").click(function(){
        $(this).toggleClass('lightNing');
    });


});




// var tQHateIt = $('<h1>Looks terrible. And I hate everything related to this fucking Harry Potter thing.</h1>');
// while(true){
//     $('wholeWorld').append(tQHateIt);  
// };