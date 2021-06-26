//* ES5

var PersonES5 = function(name, job, yearOfBirth){
    this.name = name,
    this.job = job,
    this.yearOfBirth = yearOfBirth
}

PersonES5.prototype.calculateTheShit = function(){
    return new Date().getFullYear() - this.yearOfBirth;
}

var _Nihil = new PersonES5("Nihil", "Programmer", 1994);
console.log(_Nihil);
console.log(_Nihil.name, "is:", _Nihil.calculateTheShit(), "years old.");
console.log(PersonES5);


console.log();
console.log();

//* ES6

class PersonES6{
    constructor(nameZ, jobZ, yearOfBirthZ){
        this.nameZ = nameZ,
        this.jobZ = jobZ,
        this.yearOfBirthZ = yearOfBirthZ
    }

    calculateGirl(){
        return new Date().getFullYear() - this.yearOfBirthZ;
    }
}

var _Gloria = new PersonES6("Gloria", "Unknown yet", 2017);
console.log(_Gloria);
console.log(_Gloria.nameZ, "is:", _Gloria.calculateGirl(), "years old.");
console.log(PersonES6);
