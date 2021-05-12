const textArea = document.querySelector(".input-group");

//* keydown
function eventHandler01(event){
    console.log("Event occurd..");
    console.log("Event type:", event.type);
    console.log("Event type:", event.key);
}

textArea.addEventListener('keydown', eventHandler01);



//* keyUp
function eventHandler02(event){
    console.log("Event occurd..");
    console.log("Event type:", event.type);
    console.log("Event type:", event.key);
}

textArea.addEventListener('keyup', eventHandler02);


//* keypress
function eventHandler03(event){
    console.log("Event occurd..");
    console.log("Event type:", event.type);
    console.log("Event type:", event.key);
}

textArea.addEventListener('keypress', eventHandler03);


//* focus
function eventHandler04(event){
    console.log("Event occurd..");
    console.log("Event type:", event.type);
    console.log("Event type:", event.key);
    event.target.style.backgroundColor = 'red';
}
textArea.addEventListener('focus', eventHandler04);
//curently not working, idk why, i'll pass this for now


//* blur
function eventHandler05(event){
    console.log("Event occurd..");
    console.log("Event type:", event.type);
    console.log("Event type:", event.key);
    event.target.style.backgroundColor = 'red';
}
textArea.addEventListener('blur', eventHandler05);
//curently not working, idk why, i'll pass this for now


//* cut
function eventHandler06(event){
    console.log("Event occurd..");
    console.log("Event type:", event.type);
    console.log("Event type:", event.key);
    event.target.style.backgroundColor = 'red';
}
textArea.addEventListener('cut', eventHandler06);


//* copy
function eventHandler07(event){
    console.log("Event occurd..");
    console.log("Event type:", event.type);
    console.log("Event type:", event.key);
    event.target.style.backgroundColor = 'red';
}
textArea.addEventListener('copy', eventHandler07);


//* paste
function eventHandler08(event){
    console.log("Event occurd..");
    console.log("Event type:", event.type);
    console.log("Event type:", event.key);
    event.target.style.backgroundColor = 'red';
}
textArea.addEventListener('paste', eventHandler08);


//* submit
const theFButton = document.querySelector("#theFButton");

function eventHandler09(event){
    console.log("Event occurd..");
    console.log("Event type:", event.type);
    event.target.textContent = "Gloria";
    event.target.style.color = "Black";
    event.target.style.backgroundColor = "red";
    event.preventDefault();
}
theFButton.addEventListener('submit', eventHandler09);

//* select
const selectItem = document.querySelector("#selectItem");

function eventHandler10(event){
    console.log("Event occurd..");
    console.log("Event type:", event.type);
    console.log("Event type:", event.target.value);
    event.target.style.backgroundColor = 'red';
}
selectItem.addEventListener('change', eventHandler10);



/*!
keydown
keyup
keypress
focus
blur
cut
copy (found this myself :D)
paste
submit
select
*/