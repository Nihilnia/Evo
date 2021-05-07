var mustBe = "list-group-item active";


// Reaching all <li> elements

var liElement = document.querySelector(".list-group");

for (let f = 0; f < liElement.childElementCount; f++){
    liElement.children[f].setAttribute("class", mustBe);
    liElement.children[f].textContent = "G L O R I A " + f;
}

// Deleting everything except ul-li

var dell = document.querySelector("h2");
dell.remove();


// Trying to add new elements via loop

var newElement = document.createElement("li");
newElement.setAttribute("class", mustBe);

key = 0;
while (key < 10){
    liElement.appendChild(newElement);
    newElement.textContent = "Deneme" + (key + 1);
    console.log("Worked..");
    key += 1;
}