var name = "Gloria";
var age = 2;
var whereSheLives = "Lines, yet.";

var result = `Hi, my name is ${name}.\n
I'm ${age>=5?'Over 5 years old':'Under 5 years old'}.\n
I'm living in ${whereSheLives}`;

console.log(result);