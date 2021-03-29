var _Gloria = [1, 2, 3, 4, 5, "a", "b", "c"];

for (let i = 0; i < _Gloria.length; i++) {
    console.log(`Item number: ${i + 1}: ${_Gloria[i]}`);
};

// We can do the same thing with for in, like in python

for (var x in _Gloria){
    console.log(_Gloria[x]);
};

// And even we can use "foreach" loop for it:

console.log();
console.log("Foreach..");

_Gloria.forEach(function(everyItem){
    console.log(everyItem);
});


var abc = function(xxx){
    console.log("Hello", xxx);
};

console.log(abc("deneme"));


// Examples for objects

var people = [
    {name: "aa", surname: "bb"},
    {name: "cc", surname: "dd"},
    {name: "ee", surname: "ff"},
];

console.log();

for (let i = 0; i < people.length; i++){
    console.log(people[i].name, people[i].surname);
};

console.log();
console.log("With for- in..");

for (var f in people){
    console.log(people[f].name, people[f].surname);
};

console.log();
console.log("With foreach..");

people.forEach(function(itemZ){
    console.log(itemZ.name, itemZ.surname);
});


// map method - returns array

var mapTry = people.map(function(evryItem){
    return evryItem.name + "-" + evryItem.surname;
});

console.log(mapTry);

// Last example for map method

console.log();
console.log("Creating an array..");

var anArray = [];
for (var f = 1; f <= 10; f++){
    anArray.push(f);
};

console.log();
console.log("Array created..");
console.log(anArray);

console.log();
console.log("Applyin' map method (calculating ever number's 2* pow)..");

var poww2 = anArray.map(function(bozz){
    return Math.pow(bozz, 2);
});

console.log();
console.log("New array created with pow2..");
console.log(poww2);