function deneme(){
    console.log(Gloria);
    var Gloria = "hahahu";
};

deneme();
deneme();

var _Gloria = new Map();

//* SET
_Gloria.set("name", "Gloriabby");
_Gloria.set("surname", "IDK");
_Gloria.set(345, "Daydreamin'");

//* GET
console.log(_Gloria.get("name"));

//* SIZE
console.log(_Gloria.size);

//* HAS
console.log(_Gloria.has(345));
console.log(_Gloria.has("song"));

//* DELETE
_Gloria.delete(345);
console.log(_Gloria);

//* CLEAR
// _Gloria.clear();
// console.log(_Gloria);

for (let [keyZ, valuEz] of _Gloria){
    console.log("Key:", keyZ, "Value:", valuEz);
}

for (let [keyZ, valuEz] of _Gloria.entries()){
    console.log("Key:", keyZ, "Value:", valuEz);
}

for (let x of _Gloria.keys()){
    console.log("Key:", x);
}

for (let y of _Gloria.values()){
    console.log("Values:", y);
}

_Gloria.forEach((x, y) => {
    console.log(x, y);
})


////////////////////


var first = new Map([
    [1, "bir"],
    [2, "iki"],
    [3, "uc"]
]);

console.log(first);

var second = new Map([
    [4, "dort"],
    [5, "bes"],
    [6, "alti"]
]);

console.log(second);

var mergedZ = new Map([...first, ...second]);

console.log(mergedZ);