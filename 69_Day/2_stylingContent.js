//* Changing HR element's stylez */

var elementHR = $('hr');
elementHR.css('border', '10px solid white');
elementHR.css('border-top-right-radius', '20%');
elementHR.css('border-bottom-left-radius', '20%');

//* You can define bunch of style attributes in an object
var elementH2 = $('h2');
var demStylez = {
    color: "white",
    border: "1px solid yellow",
    fontWeight: "bold"
}

elementH2.css(demStylez);

//* Example bulk selecting and changin' */
var elementZUL = document.querySelectorAll("li");
elementZUL.forEach(function (x){
    x.style.color = "red";
})

//insted of that
var getEmAll = $('li');
getEmAll.css('color', "blue");

//* Another example */
var theBody = $('body');
theBody.css('margin', '0px');

// theBody.css('display', 'none');