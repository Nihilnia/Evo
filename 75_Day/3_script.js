//* ES5 without parameters */

let sayHelloES5 = function(){
    console.log("Hi, it's ES5");
}

sayHelloES5();

//* ES6 without parameters */

let sayHelloES6 = () => console.log("Hi, it's ES6 babe.");
//If the line is one (my english..) you can write it like that.
sayHelloES6();

//? or

let sayHelloES6_2 = () => {
    console.log("x2, Hi, it's ES6 babe");
}

sayHelloES6_2();


//* ES5 with parameters */

let multipleThemES5 = function(x, y){
    return x * y;
}

console.log(multipleThemES5(5, 6));



//* ES6 with parameters */
let multipleThemES6 = (x, y) => {
    return x * y;
}

console.log(multipleThemES6(4, 5));

//?or

let multipleThemES6_2 = (a, b) => a * b;

console.log(multipleThemES6_2(2, 3));



//* Another examples */

let splitES5 = function(text){
    return text.split(' ');
}

console.log(splitES5("Hello my name is Gloria"));

let splitES6 = text => text.split(' ');

console.log(splitES6('Hello my name is _Gloria'));

//or

let splitES6_2 = text => {
    return text.split(' ');
}

console.log(splitES6_2("False alarm"));



//* Object Literals */

let oLiteralES5 = function(id, name){
    return {
        id: id,
        name: name
    }
};

console.log(oLiteralES5(1 ,"__Gloria__"));


let oLiteralES6 = (id, name) => (
    {
        id: id,
        name: name
    }
);

console.log(oLiteralES6(2, "__Nihil__"));



//* Another Examples */

let telePhonez = [
    {name: "Iphone1", price: 1000},
    {name: "Iphone2", price: 2000},
    {name: "Iphone3", price: 3000},
    {name: "Iphone4", price: 4000},
    {name: "Iphone5", price: 5000}
];

let filterES5 = function(priceUnder){
    var returnZ = [];
    for(let f = 0; f < telePhonez.length; f++){
        if(telePhonez[f].price <= priceUnder){
            returnZ.push(telePhonez[f]);
        }
    }
    return returnZ;
}
console.log(filterES5(3000));


let filterES6 = priceUnder => {
    var returnZ = [];
    for(let f = 0; f < telePhonez.length; f++){
        if(telePhonez[f].price <= priceUnder){
            returnZ.push(telePhonez[f]);
        }
    }
    return returnZ;
}

console.log(filterES6(2222));


//Remembering the map function 
let filterES5_MAP = telePhonez.map(function(phone){
    return phone.price;
})
console.log(filterES5_MAP);

//? with ES6

let filterES6_MAP = telePhonez.map(x => x.price);
console.log(filterES6_MAP);


//* Another Example */

let randomNumberz = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumberzES5 = function(theArray){
    var evenOnez = [];
    randomNumberz.forEach(function(x){
        if(x % 2 == 0){
            evenOnez.push(x);
        }
    })

    return evenOnez;
}

console.log(evenNumberzES5(randomNumberz));


let evenNumberzES6 = theArray => {
    var evenOnez = [];
    randomNumberz.forEach(function(x){
        if(x % 2 == 0){
            evenOnez.push(x);
        }
    })

    return evenOnez;
}

console.log(evenNumberzES6(randomNumberz));


//* You can use filter function */

let oddNumberzES5 = randomNumberz.filter(function(x){
    return x % 2 == 1;
})

console.log(oddNumberzES5);

let oddNumberzES6 = randomNumberz.filter(x => x % 2 == 1);

console.log(oddNumberzES6);