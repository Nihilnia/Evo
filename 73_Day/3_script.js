//! JavaScript_ Object Oriented Programming */

//* Objects */

var objArray = Array("de", "ne", "me");
console.log(objArray);

console.log();

var objFunction = function () {
    console.log("I am an object bitchez.");
};
console.log(objFunction);

console.log();

var objObject = {
    name: "Gloria",
    purpose: "Unknown"
};
console.log(objObject);

console.log();

var objDate = new Date();
console.log(objDate);

console.log();

var objString = new String("Gloria");
console.log(objString);
//You can use valueof method to use to get what is the string it's deposit. Idk how to say.

console.log();

var objNumber = new Number(2);
console.log(objNumber);
//Same for the number: valueof


//* Prototype */

var doIWannaKnow = function (name, surname, age) {

    //When the create the object if we dont use 'new'
    if (!(this instanceof doIWannaKnow)) {
        return new doIWannaKnow(name, surname, age);
    };

    this.name = name,
        this.surname = surname,
        this.age = age,

        //Inside function
        this.printTheShit = function () {
            console.log("Hello my name is", this.name);
        }
}

var _Gloria = new doIWannaKnow("Gloria", "Uknown", 3);
var Nihil = doIWannaKnow("Nihil", "Nia", 27);

console.log(_Gloria);
console.log(Nihil);
_Gloria.printTheShit();

//Outside function (going to prototype)
doIWannaKnow.prototype.calculateTheAgeTo50 = function (year) {
    var currentYear = new Date().getFullYear();
    return currentYear + year;
}

console.log(_Gloria.calculateTheAgeTo50(5));
console.log(Nihil.calculateTheAgeTo50(10));
console.log(_Gloria.hasOwnProperty("printTheShit"));
console.log(_Gloria.hasOwnProperty("name"));
console.log(_Gloria.hasOwnProperty("calculateTheAgeTo50"));



//* Object.create */

//First of all we need an object, right? Makes sense.
var natural = {
    song: "Natural",
    band: "Imagine Dragons"
}

console.log(natural);
console.log(natural.band);

var dynoro = Object.create(natural);
console.log(dynoro);

dynoro.deneme = "awdas";
dynoro.sururuur = "asd";
console.log(dynoro);

//Another one

var freeTibet = Object.create(natural, {
    anotherProperty: { value: "awdasdasd" },
    andTheAnotha: { value: "Anothaa" } //Bit hard to remember. You'll get to used with it.
})

console.log(freeTibet);


//* Zurnanın zırt dediği yer
//* Inheritance with PROTOTYPE


var camelWhite = function (a, b, c) {

    if (!(this instanceof camelWhite)) {
        return new camelWhite(a, b, c);
    }

    this.IDK = a,
        this.IDC = b,
        this.EVEN = c
}

camelWhite.prototype.gatherThem = function () {
    return `Parameter A:${this.IDK}
    Parameter B:${this.IDC}
    Parameter C:${this.EVEN}`;
}

var hadi = camelWhite("naaaaa", "tu", "ral");
console.log(hadi);
console.log(hadi.gatherThem());

var camelBlack = function (x, a, c) {
    this.TakeTheBluePill = x;
    camelWhite.call(this, a, c);
    //other ones will be here
}

//Hatırlayamıyorum.
//İlk once ekliyor sonra da constructor ' in camelBlack oldugunu söylüyoruz fakat ilki neydi......

var hadi2 = new camelBlack("What truth?");
console.log(camelBlack);
camelBlack.prototype = Object.create(camelWhite.prototype);
camelBlack.prototype.constructor = camelBlack;
var hadi3 = new camelBlack("X", "A_", "B_", "C_");
console.log(hadi3.gatherThem());

