// function multipleByTwo(a, b, c){
//     var arr = [];
//     for(let f = 0; f < 3; f++){
//         arr[f] = arguments[f] * 2;
//     }

//     return arr;
// };

// var los = multipleByTwo(3, 4, 5);
// console.log(los);

// function addOne(x){
//     return x + 1;
// }

// for(let f = 0; f < los.length; f++){
//     los[f] = addOne(los[f]);
// }

// console.log(los);



//* We can do the same thing as shorter with callback function

function multipleByTwo(a, b, c, callback) {
    var arr = [];
    for (let f = 0; f < 3; f++) {
        arr[f] = callback(arguments[f] * 2);
    }

    return arr;
};

function addOne(x) {
    return x + 1;
}
function addTwo(x) {
    return x + 2;
}
function addThree(x) {
    return x + 3;
}

//* ISN’T IT COOL!?
var los = multipleByTwo(3, 4, 5, addOne);
console.log(los);

//* addTwo
var los = multipleByTwo(3, 4, 5, addTwo);
console.log(los);

//* addThree
var los = multipleByTwo(3, 4, 5, addThree);
console.log(los);

//* anonymous Function
var los = multipleByTwo(3, 4, 5, function (x) {
    return x ** 2;
});
console.log(los);