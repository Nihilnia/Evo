var a = 10;
var b = a;
a = 12;

console.log("a:", a);
console.log("b:", b);

console.log();
console.log();


var obj01 = {
    num: 5
}

var obj02 = obj01;
obj01.num = 6;

console.log("Obj 01:", obj01);
console.log("Obj 02:", obj02);


console.log();
console.log("###############");
console.log();


//* You need to understand this


var _Gloria = 50;

var _Nihil = {
    name: "Nihil",
    aNumb: 123456
}

function updateShit(a, b){
    a = 100;
    b.aNumb = 000000;
}

updateShit(_Gloria, _Nihil);

console.log(_Gloria);
console.log(_Nihil);


//* -------------- */

var products = [
    {name: "p1", price: 1},
    {name: "p2", price: 2},
    {name: "p3", price: 1},
    {name: "p4", price: 2},
    {name: "p5", price: 1},
    {name: "p6", price: 2}
];

function filterProducts(x){
    if (x.price === 1){
        console.log(x);
    }
}

for(let f = 0; f < products.length; f++){
    filterProducts(products[f]);
}