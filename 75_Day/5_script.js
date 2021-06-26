function getTotal(a, b, c){
    return a + b + c;
}

console.log(getTotal(11, 12, 13));

//* ES5
var numbZ = [11, 12, 13];

console.log(getTotal.apply(null, numbZ));

//* ES6 */
console.log(getTotal(...numbZ));


// Another Example

var arr01 = ["two", "three"];
var arr02 = ["one", "four", "five"];

arr01.push(...arr02);
console.log(arr01);

arr01.unshift(...arr02);
console.log(arr01);

var arr03 = arr02;
arr03.push(...["de", "ne", "me"]);
console.log(arr03);


var arr05 = [];
arr05.push("Gloria",...["Ni", "hil", "ni", "a"]);
console.log(arr05);
// arr05.push("Gloria", ["Ni", "hil", "ni", "a"]);
// console.log(arr05[1]);



// Example with HTML Tags

var tagH1 = document.querySelector("h2");
var tagDivz = document.querySelectorAll("div");

var tagZ = [];
tagZ.push(tagH1, ...tagDivz);
console.log(tagZ);

tagZ.forEach(theTagz => {
    theTagz.style.color = "white";
});