// Getting h3 tag by id


// getElementById()
let deneme = window.document.getElementById("deneme");
deneme.style.color = "white";
deneme.style.fontWeight = "bold";
deneme.style.fontSize = "52px"
deneme.innerText = "_Gloria";
deneme.style.fontFamily = 'New Tegomin';
deneme.innerHTML = "<a href='https://google.com'>_Gloria</a>"

// querySelector()

// by ID
let divDeneme = window.document.querySelector("#divDeneme");
divDeneme.style.color = "white";
console.log(divDeneme);

// by Class

let divDeneme2 = window.document.querySelector(".divDeneme2");
divDeneme2.style.color = "white";
console.log(divDeneme);

// by Tag

let divDeneme3 = window.document.querySelector("div");
divDeneme3.style.fontWeight = "bold";

let liDeneme = window.document.querySelector("li");
liDeneme.style.color = "white";
let liDeneme2 = window.document.querySelector("li:last-child");
liDeneme2.style.color = "white";
let liDeneme3 = window.document.querySelector("li:nth-child(2)");
liDeneme3.style.color = "red";
let liDeneme4 = window.document.querySelector("li:nth-child(3)");
liDeneme4.innerText = "AAAAAA";
liDeneme4.style.color = "White";



// var deneme34 = window.document.querySelectorAll("div");
// console.log("deneme here..");
// console.log(deneme34);
//LMAO IT's worked.

// Changing and adding class

//Change class

console.log("Before the change:");
let rosez1 = window.document.querySelector('.divDeneme2');
console.log(rosez1);
window.document.querySelector('.divDeneme2').className= "degistir";
let rosez2 = window.document.querySelector('.degistir');
console.log("After the change:");
console.log(rosez2);

// Adding class
console.log("- - - -")
console.log("Before the adding class:");
console.log(rosez2);
window.document.querySelector(".degistir").classList.add("ekleGloria");
let rosez3 = window.document.querySelector("#violin");
console.log("After the adding class:");
console.log(rosez3);    