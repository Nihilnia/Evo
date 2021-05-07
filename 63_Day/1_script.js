//? MOUSE EVENTS

function eventHandlerBitch(event){
    console.log(`Event type: ${event.type}`);
}

const btnClick = document.querySelector("#btnClick");
const btnDblClick = document.querySelector("#btnDblClick");
const btnDown = document.querySelector("#btnDown");
const btnUp = document.querySelector("#btnUp");
const btnEnter = document.querySelector("#btnEnter");
const btnLeave = document.querySelector("#btnLeave");
const btnOver = document.querySelector("#btnOver");
const btnOut = document.querySelector("#btnOut");

const listGroup = document.querySelector("#A2");

//* Click
btnClick.addEventListener('click', eventHandlerBitch);

//* Double Click
btnDblClick.addEventListener('dblclick', eventHandlerBitch);

//* Mouse Down
btnDown.addEventListener('mousedown', eventHandlerBitch);

//* Mouse Up
btnUp.addEventListener('mouseup', eventHandlerBitch);

//* Mouse Enter
btnEnter.addEventListener('mouseenter', eventHandlerBitch);

//* Mouse Leave
btnLeave.addEventListener('mouseleave', eventHandlerBitch);

//* Mouseover
btnOver.addEventListener('mouseover', eventHandlerBitch);

//* Mouseout
btnOut.addEventListener('mouseout', eventHandlerBitch);

//! Mousemove
var mouseMoveNumbers = 0;
function exampleMovementHandler(fInfo){
    // console.log(`Movement detected:
    // Axis X: ${event.offsetX}
    // Axis Y: ${event.offsetY}
    // `);
    mouseMoveNumbers += 1;
    console.log(mouseMoveNumbers, "- Mouse movement detected bitch:\n" +
    "Axis X:", fInfo.offsetX,
    "\nAxis Y:", fInfo.offsetY);
}

listGroup.addEventListener('mousemove', exampleMovementHandler);
listGroup.addEventListener('mouseleave', function(f){
    console.clear();
    console.log("Mouse is not in the area anymore..");
    console.log("##Total mouse movements from last session:", mouseMoveNumbers);
})


console.log(event);