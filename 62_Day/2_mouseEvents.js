/*
click
dblclick
mousedown
mouseup
mousenter
mouseleave
mouseover
mouseout
mousemove
*/


const btnPrimary = document.querySelector(".btn-primary");
const btnSecondary = document.querySelector(".btn-secondary");
const btnSuccess = document.querySelector(".btn-success");
const btnDanger = document.querySelector(".btn-danger");
const btnWarning = document.querySelector(".btn-warning");
const btnInfo = document.querySelector(".btn-info");
const btnLight = document.querySelector(".btn-light");
const btnDark = document.querySelector(".btn-dark");
const btnMove = document.querySelector("#denemeMove");

function eventHandler(f){
    console.log(f.type)
}


//Click
btnPrimary.addEventListener('click', eventHandler);

//Double Click
btnSecondary.addEventListener('dblclick', eventHandler);

//Mouse Down
btnSuccess.addEventListener('mousedown', eventHandler);

//Mouse Up
btnDanger.addEventListener('mouseup', eventHandler);

// //Mouse Enter
// btnWarning.addEventListener('mouseenter', eventHandler);

// //Mouse Leave
// btnInfo.addEventListener('mouseleave', eventHandler);

// //MouseOver
// btnLight.addEventListener('mouseover', eventHandler);

// //Mouseout
// btnDark.addEventListener('mouseout', eventHandler);

// //Mouse Move
// btnMove.addEventListener('mousemove', eventHandler);