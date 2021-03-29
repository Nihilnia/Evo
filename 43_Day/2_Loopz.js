// Famous for loop

for (let i = 0; i < 10; i++){
    console.log(`${i + 1}.Gloria..`);
};

console.log();
console.log("###################");
console.log("");

// Continue & Break

for (let i = 0; i < 10; i++){

    if (i == 5){
        console.log("5 is here. Let's 'continue..'");
        continue;
    }

    if (i == 7){
        console.log("7 is here. Let's 'break..'");
        break;
    }

    console.log(`${i}.Gloria..`);
};

console.log();
console.log("###################");
console.log("While..");

// Famous while loop

var _Gloria = 10;
while (_Gloria > 0){
    console.log(`${_Gloria}.Gloria.#`);
    _Gloria --;
};


// Do- While loop

console.log();
console.log("###################");
console.log("Do while..");

var abc = 0;
do{
    console.log(abc);
    abc ++;
}while(abc<= 10)


// Last example for now- nested loops

var a = '';
var b = "";
for (let i = 0; i < 10; i++) {
    for (let x = 0; x < 10; x++){
        a += "* ";
    }
    b += "* "
    console.log(a+ b);
    a = '';
    
}

console.log();
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log();

// And da anotha one

var star = "";
var x = 9;
for (var f = 1; f <= 10; f++){
    star += "*";
    console.log(star, f);

    if (f == 10){
        console.log("deneme");
        for (var n = 10; n >= 1; n--){
            star -= "*";
            console.log(star);
        }

    }
};

// didnt work, somehow..