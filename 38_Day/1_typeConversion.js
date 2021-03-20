var Gloria;

// Converting to String

console.log("Using by 'String()'")
Gloria = String(true);
console.log("Value of Gloria:", Gloria, "Type of Gloria:", typeof Gloria)
console.log();

console.log("Using by 'String()'")
Gloria = String(1964);
console.log("Value of Gloria:", Gloria, "Type of Gloria:", typeof Gloria)
console.log();

console.log("Using by 'toString()'")
Gloria = (1965).toString();
console.log("Value of Gloria:", Gloria, "Type of Gloria:", typeof Gloria)
console.log();



// Converting to Number

console.log("Using by 'Number()'")
Gloria = Number("1965")
console.log("Value of Gloria:", Gloria, "Type of Gloria:", typeof Gloria)
console.log();

console.log("Using by 'parseInt()'")
Gloria = parseInt("1965.1");
console.log("Value of Gloria:", Gloria, "Type of Gloria:", typeof Gloria)
console.log();

console.log("Using by 'parseFloat()'")
Gloria = parseFloat("1965.2");
console.log("Value of Gloria:", Gloria, "Type of Gloria:", typeof Gloria)
console.log();


// Converting to boolean

console.log("Using by 'String()'")
Gloria = Boolean("true");
console.log("Value of Gloria:", Gloria, "Type of Gloria:", typeof Gloria)
console.log();


// etc. etc.



// constructor function

console.log("String type")
var _loneDigger = "Lone Digger";
console.log((_loneDigger).constructor)
console.log();

console.log("Number type")
var _loneDigger = 12;
console.log((_loneDigger).constructor)
console.log();

console.log("Boolean type")
var _loneDigger = true;
console.log((_loneDigger).constructor)
console.log();

console.log("Array type")
var _loneDigger = [1, 2, 3, "a", "b", "c"];
console.log((_loneDigger).constructor)
console.log();

console.log("Object type")
var _loneDigger = {name: "Nihil", surName: "Nia"};
console.log((_loneDigger).constructor)
console.log();

console.log("Date type")
var _loneDigger = new Date();
console.log((_loneDigger).constructor)
console.log();

console.log("Function type")
var _loneDigger = function(){
    return 0;    
};
console.log((_loneDigger).constructor)
console.log();


var _caravanPalace = 12;
console.log(typeof _caravanPalace);