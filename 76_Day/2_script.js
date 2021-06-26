//* Destructuring

var a, b, _Gloria;

[a, b] = [10, 20];
console.log(a);
console.log(b);

console.log();

[a, b, ..._Gloria] = [10, 20, 30, 40, 50];

console.log(a);
console.log(b);
console.log(_Gloria);

console.log();

({a, b} = {b: 10, a: 20});
console.log(a);
console.log(b);

console.log();

//* Array Destructing

var networkConfig = ["localhost", "8080", "900"];

//ES5 Version
var server = networkConfig[0];
var port = networkConfig[1];
var timeout = networkConfig[2];

console.log(server, port, timeout);
console.log();

//ES6 Version
var [server, port, timeout] = networkConfig;

console.log(server, port, timeout);

console.log();

//* Object Destructing

var objConfig = {
    server: "localhost",
    port: 8080,
    timeout: 900
};

//ES5 Version
var server = objConfig.server;
var port = objConfig.port;
var timeout = objConfig.timeout;

console.log(server, port, timeout);
console.log();

//ES6 Version
var {server, port, timeout} = objConfig;

console.log(server, port, timeout);

console.log();

//?ALSO
var {timeout: t} = objConfig;
console.log(t);

console.log();

//?ALSO
//If the key of the object is not defined
var objGloria = {
    name: "_Gloria",
    surname: "Unknown"
}

var {name, surname, age = 3} = objGloria;
console.log(name, surname, age);

console.log();

//If the key is defined but you still trying to assign a new value
var objNihil = {
    name: "_Nihil",
    surname: "Nia",
    age: new Date().getFullYear() - 1994
}

var {name, surname, age = 19} = objNihil;

console.log(name, surname, age); //Name will be 27.
//You cannot assign a new value if the key is already defined and assigned.

console.log();


//* E X T R A

var dayZ = ["monday", "tuesday", "wednesday", "thursday", "friday"];

var [,, wed,, fri] = dayZ;

console.log(wed, fri);