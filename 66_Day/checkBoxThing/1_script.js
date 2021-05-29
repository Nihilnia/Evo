const reco = document.querySelector(".form-check-input");
const button = document.querySelector("button");

reco.addEventListener('click', function(e){
    if (reco.getAttribute('checked') === ""){
        reco.removeAttribute('checked');
    }else{
        reco.setAttribute('checked', "");
    }
})



button.addEventListener('click', function(e){
    var kontrol = reco.getAttribute('checked');

    if (kontrol === ""){
        console.log("İşaretli");
    }else{
        console.log("işaretsiz");
    }
})