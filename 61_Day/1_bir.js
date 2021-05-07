const h1tagX1 = document.createElement("h1");
h1tagX1.setAttribute("id", "denemeID");
h1tagX1.setAttribute("class", "denemeCLASS");
h1tagX1.textContent = "Deneme";
h1tagX1.style.color = "white";
h1tagX1.setAttribute("style", "color: red");


//Placing

var bodyTag = document.querySelector("body");
bodyTag.appendChild(h1tagX1);

