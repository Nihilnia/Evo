var btnDanger = document.querySelector("#denemeBtn");

var theList = document.querySelector('.list-group');

function btnClick(){
    console.log("btnClicked.");
}

// btnDanger.addEventListener('click', function(){
//     for (let f = 0; f < theList.children.length; f++){
//         theList.children[f].textContent = "";
//     }
// })

btnDanger.addEventListener('click', btnClick);
btnDanger.addEventListener('mouseover', btnClick);

const btnPrimary = document.querySelector(".btn-primary");
const btnSecondary = document.querySelector(".btn-secondary");


var key = 0;
function fncTextRemover(){
    
    if (key % 2 === 0){
        this.textContent = "Primary";
        key++;
    }else{
        this.textContent = "Gloria";
        key++;
    }
    
}



// click - primary
btnPrimary.addEventListener('click', fncTextRemover);

// mousehover - secondary
btnSecondary.addEventListener('mouseover', fncTextRemover);