//* text() - get */

var elementH2 = $('h2');
console.log(elementH2.text());

//* text() - set */

var elementH2 = $('h2');
elementH2.text("DenemeGloria");
console.log(elementH2.text());

//* val() - get */
var elementInput1 = $('#dnmInput1');
var elementInput2 = $('#dnmInput2');

console.log("#########################");
console.log(elementInput1.val());
console.log(elementInput2.val());
console.log("#########################");

//* val() - set */
elementInput1.val("Ad");
elementInput2.val("Soyad");

//? Example ?/
function sendItBabe(){
    var ad = elementInput1.val();
    var soyAd = elementInput2.val();

    console.log("Merhaba:", ad, soyAd);
}

//* addClass */
var GloriaH2 = $('#h2Gloria');

function GloriaClick(){
    GloriaH2.addClass('highLight');
}

//* removeClass */
function addGreen(){
    GloriaH2.addClass('green');
}

function deleteGreen(){
    GloriaH2.removeClass('green');
}

function addYellow(){
    GloriaH2.addClass('yellow');
}

function deleteYellow(){
    GloriaH2.removeClass('yellow');
}

//* toggleClass */
var btnKendiniBul = $("#kendiniBul");
var haha = $('#haha');
function changeIt(){
    btnKendiniBul.toggleClass('yellow');
    haha.toggleClass('doNotShow');
}

var kndBl = document.querySelector("#kendiniBul");
kndBl.addEventListener('click', function(){
    console.log("AKSHDAS");
})


var HCF = $('#HCF');
//* attr()*/
function clickHCF(){
    HCF.attr("width", "500");
}

var ulElementz = $('ul');
//* show() */
ulElementz.show();

//* hide() */

console.log(ulElementz);
ulElementz.hide();