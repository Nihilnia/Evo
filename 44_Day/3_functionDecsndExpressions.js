// Function Declaration

function sumEm(a, b){
    var c = a + b;
    return c;
}

console.log(sumEm(10, 20));

// Function Expressions
 
const sumEm2 = function(a, b){
    var c = a + b;
    return c;
}

console.log(sumEm(10, 20));

// ES6 Default Parameters

const sumEm3 = function(a = 0, b = 0){
    var c = a + b;
    return c;
}

console.log(sumEm3(10));


// Let's control it if the user gave us a, b

const sumEm4 = function(a, b){

    if (typeof a === 'undefined'){
        console.log("a is undefined");
    }
    if (typeof b === 'undefined'){
        console.log("b is undefined");
    }

    var c = a + b;
    return c;
}

console.log(sumEm4());


// A R G S

var deneme = function(){
    return arguments;
}

console.log(deneme(1, 2, 3));



var sumAllMate = function(){
    var result = 0;
    // for (var f in arguments){
    //     result += arguments[f];
    // }

    // for (var f = 0; f <= arguments.length; f++){
    //     result += f;
    // }

    // arguments.array.forEach(element => {
        
    // });(function(itemZ){
    //     result += itemZ;
    // })

    return result;
}

console.log(sumAllMate(1, 2, 3, 4, 5));