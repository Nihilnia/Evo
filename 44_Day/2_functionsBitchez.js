// Definin' a function bitchez

function sayHello(name){
    console.log("Hello", name + "!");
};

sayHello("Nihil");

// Get a value from the function

function yourAge(bDay){
    return new Date().getFullYear() - bDay;
};

ageOfNihil = yourAge(1994);

console.log("It's Nihil and he is", ageOfNihil, "years old bitchez..");


// Well, let's use conditionals in a function


// If the user +18 years old or not

function userAge(urBDay){
    return new Date().getFullYear() - urBDay;
};

ageOfGloria = userAge(2018);

function if18orNot(theAge, theName){
    if (theAge > 0 && theAge < 18){
        console.log("You're not 18 yet..", theName);
    }else if (theAge === 18){
        console.log("You're just 18, wait bit more..", theName);
    }else if (theAge > 18){
        console.log("You're already above 18..", theName);
    }else{
        console.log("There is not an age such like this:", theAge, theName);
    }
};

if18orNot(ageOfGloria, "Gloria");
if18orNot(ageOfNihil, "Nihil");
if18orNot(-2, "Idk");
if18orNot(2, "Idk2");