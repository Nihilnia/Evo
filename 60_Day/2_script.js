var ulElement = document.querySelector(".list-group");

// remove

// ulElement.remove();

// *Removing only text nodes..*

var ndChildNodes = ulElement.childNodes;
console.log(ndChildNodes);

ndChildNodes.forEach(function (x){
    if (x.nodeType === 3){
        x.remove();
    }
})

console.log();
console.log(`after delete`);
console.log();
console.log(ndChildNodes);

// *Remove the last child*

ulElement.lastChild.remove();

// *Remove attribute*

console.log("Current situation");

for (let f = 0; f < ulElement.children.length; f++){
    console.log(ulElement.children[f]);
}
console.log();
ulElement.lastChild.removeAttribute("class");

console.log("Current situation");
console.log();
for (let f = 0; f < ulElement.children.length; f++){
    console.log(ulElement.children[f]);
}
console.log();

// Removing all classes

for (let x = 0; x < ulElement.childElementCount; x++){
    ulElement.children[x].removeAttribute("class");
}



// * R E P L A C I N G (UPDATE)*

// reaching li-Gloria and replacing with v2
const doc = document; 

// new element
const GloriaV2 = doc.createElement("h1");
GloriaV2.innerHTML = "<figure class='figure'>";
const GlrChild = doc.createElement("img");
GlrChild.setAttribute("class", "figure-img img-fluid rounded");
GlrChild.setAttribute("src", "./img/_Gloria.jpg");
GlrChild.setAttribute("style", "width: 200px; border: 5px solid red;");
GloriaV2.appendChild(GlrChild);


// getting Parent
var parentUL = doc.querySelector(".list-group");

// getting Current child

// var currentChild = doc.querySelector("#denemeGloria");
var currentChild = parentUL.children[0];
parentUL.replaceChild(GloriaV2, currentChild);

console.log();

//* Classes*

console.log("Current class list:");
var olElement = document.querySelector("#denemeBro");
console.log(olElement.firstElementChild.classList);

console.log();
console.log("New class list:");
olElement.firstElementChild.classList.add("deneme333");
console.log(olElement.firstElementChild.classList);

console.log();
console.log("After replace the deneme333 with deneme444 of the class list:");
olElement.firstElementChild.classList.replace("deneme333", "deneme444");
console.log(olElement.firstElementChild.classList);

console.log();
console.log("Deleting deneme444 classname:");
olElement.firstElementChild.classList.remove("deneme444");
console.log(olElement.firstElementChild.classList);

console.log();
console.log("Getting classList[0]:");
console.log(olElement.firstElementChild.classList[0]);

console.log();
console.log();
console.log();
    

//* Attributes*

var scruB = document.querySelector("#Majesty").querySelector("#scruB");
console.log(scruB);

console.log();
console.log("### Getting attributes.. ###");
console.log(scruB.lastElementChild.getAttribute("class"));

console.log();
console.log("### Changing cattributes as projectGloria.. ###");
scruB.lastElementChild.setAttribute("class", "projectGloria");
console.log(scruB.lastElementChild.getAttribute("class"));

//hasAttribute

console.log();
console.log("### Cheching if scruB's lastElementChild has id attbiute.. ###");
if (scruB.lastElementChild.hasAttribute("id")){
    console.log("Yes, the element has id attribute..:", scruB.lastElementChild.getAttribute("id"));
}else{
    console.log("No, the element has no id attribute..");
}