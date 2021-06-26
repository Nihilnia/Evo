let Person = function(name = "Unknown", surname = "Unknown", yearOfBirth = 0){
    this.name = name,
    this.surname = surname,
    this.yearOfBirth = yearOfBirth;

};

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

Person.prototype.lastName = "OOP";

let _Nihil = new Person(name = "Gloria", surname = "Unknown", yearOfBirth = 2017);
console.log(_Nihil);
console.log(_Nihil.calculateAge());
console.log(_Nihil.lastName);

let _Gloria = new Person("_Nihil", "Uknonwn2", 1994);
console.log(_Gloria);
console.log(_Gloria.calculateAge());

//* hasOwnProperty() */

console.log(_Nihil.hasOwnProperty('name'));
console.log(_Nihil.hasOwnProperty('lastName'));
