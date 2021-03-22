// concat

var _Gloria = "Gloria";
var birlestir = _Gloria.concat(", hello.");
console.log(birlestir);

// length

console.log("Length of variable _Gloria:", _Gloria.length);

// Lowercase - Upparcase

console.log("\nGloria lowercase..")
console.log(_Gloria.toLowerCase());
console.log("\nGloria uppercase..")
console.log(_Gloria.toUpperCase());


// Indexof

console.log("\nGloria's index of 'i'..")
console.log(_Gloria.indexOf("i"));

// Substring

console.log("\nGloria's substring of '4-6'..")
console.log(_Gloria.substring(4, 6));

// Slice
console.log("\nGloria's slice between '2-5'..")
console.log(_Gloria.substring(2, 5));


//Replace

console.log("\nReplace Gloria's 'ia' with  'ai'..")
console.log(_Gloria.replace('ia', 'ai'));

// Split

var hobbies = "sport, reading, coding, lol, lmao";
console.log(hobbies.split(","));