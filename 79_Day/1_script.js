//* MAP OBJECT

var _Gloria = new Map();

//* Set
_Gloria.set("Key One", "Value One");
_Gloria.set("Out of the Black", "Royal Blood");
_Gloria.set(24124, "Randomnumbs");

console.log(_Gloria);

//* GET
console.log(_Gloria.get("Out of the Black"));
console.log(_Gloria.get("Outaaa of the Black"));

//* HAS
console.log(_Gloria.has("Nihil"));
console.log(_Gloria.has("Key One"));

//* SIZE
console.log("Size of the _Gloria 'map' object:", _Gloria.size);

//* DELETE

console.log("Before the delete..");
console.log(_Gloria);

console.log();

_Gloria.delete("Key One");

console.log("After the delete...");
console.log(_Gloria);

//* CLEAR

console.log("Before the clear..");
console.log(_Gloria);

console.log();

_Gloria.clear();

console.log("After clear...");
console.log(_Gloria);

