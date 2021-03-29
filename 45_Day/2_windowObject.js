// Window Object

var wO = window;

var a = 1;
var b = 2;

var deneme = function(){
    return false;
}

console.log(wO);

/* 
Basically: when we define anything
it's actually defining in window object.
*/


//Alert
alert("Hello mf.");

//Prompt
var userName = prompt("Ur name:");

console.log("Hello mf,", userName);

//Confirm

var userChoice = confirm("Are you sure mf?");
if (userChoice){
    console.log("Ur sure mf.");
}else{
    console.log("Gtfo mf.");
}


//Scroll

var yScroll = scrollY;
var xScroll = scrollX;

console.log("ScroolX:", xScroll);
console.log("ScroolY:", yScroll);


//Location

var lok = window.location;
var lokHref = lok.href;
var lokHostName = lok.hostname;
var lokHost = lok.host;
var lokProtocol = lok.protocol;
var lokSearch = lok.search;


console.log(lok);
console.log("Href:", lokHref);
console.log("Host Name:", lokHostName);
console.log("Host:", lokHost);
console.log("Protocol:", lokProtocol);
console.log("Search:", lokSearch);

// var newHref = prompt("Where do you wanna go bitch?");
// lok.href = newHref;

// // Reload

// window.location.reload;


// Navigator

window.navigator;


//document

var deneme = document.getElementById("moonshine");
console.log(deneme);