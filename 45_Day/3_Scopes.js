// Global Scopes

var _Gloria = "Gloria";

// Functions creates their own scopes
// if you have a variable, functions not gonna change it.
function sayHi(){
    var _Gloria = "Nihil";
    console.log("Function:", _Gloria);
};

sayHi();

// Blocks doesnt create their own scopes
// So, if you have a variable, blocks gonna change it.

if (true){
    var _Gloria = "Block..";
    console.log("If Block:", _Gloria);
}

console.log("C.Log:", _Gloria);



// Local Scopes



// But the thing is:
// let and const creates their own scopes.
// So, if you have a variable as let/const; will not change.

//Example

console.log("-  - - - - -- - - -- - -- - -");

if (true){
    var a = "a";
    let b = "b";
    const c = "c";
    console.log(`
    A: ${a},
    B: ${b},
    C: ${c},
    `);
}

// Now, if we try to reach 'em as globally, we cant (let, const)

// console.log(`Trying to reach on global level:
//     A: ${a},
//     B: ${b},
//     C: ${c},
//     `);

//ANOTHER EXAMPLE

var aa = "aa";
let bb = "bb";
const cc = "cc";

if (true){
    var aa = "aa22";
    let bb = "bb22";
    const cc = "cc22";
    console.log(`
    AA: ${aa},
    BB: ${bb},
    CC: ${cc},
    `);
}

console.log(`Trying to reach on global level:
//     A: ${aa},
//     B: ${bb},
//     C: ${cc},
//     `);

// As you can see; b(let) and c(const) didn't change on global level. 