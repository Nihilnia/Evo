var elementImg = document.querySelector("img");

function sliderThing(piece){
    var key = 1;
    while (key < piece){
        setTimeout(function(){
            elementImg.setAttribute('src', `./img/${key}.jpg`);
            key += 1;
        }, 2000)
    }
    
}

sliderThing(5);