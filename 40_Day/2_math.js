console.log(typeof Nihil);

console.log(isNaN("10a"));

var numB = 10.123456;

console.log("Precision Method");
console.log(numB.toPrecision(3));


console.log("toFixed Method");
console.log(numB.toFixed(3));


console.log("round Method");
console.log(Math.round(3.4));

console.log(Math.round(3.5));


console.log("ceil Method");
console.log(Math.ceil(3.4));


console.log("floor Method");
console.log(Math.floor(3.7));


console.log("sqrt Method");
console.log(Math.sqrt(64));


console.log("pow Method");
console.log(Math.pow(2, 3));


console.log("abs Method");
console.log(Math.abs(-100));


console.log("min Method");
console.log(Math.min(1, 2, 3, 4 , 2 , 3));

console.log("max Method");
console.log(Math.max(1, 2, 3, 4 , 2 , 3));

console.log();
console.log();
console.log();

console.log("var a defining = '10a' ");
a = "10a";
console.log("type of a:", typeof a);

console.log("var a converting to number...");
a = Number(a);
console.log("type of a:", typeof a);

console.log();
console.log();

console.log("var b defining = 'a10a' ");
b = "a10a";
console.log("type of b:", typeof b);

console.log("var a converting to number...");
b = Number(b);
console.log("type of b:", typeof b);

console.log();
console.log();


console.log("a + b...");
var c = Number(a + b);
console.log(a + b);