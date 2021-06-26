let Person = function(name, yearOfBirth, job){

    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job
};

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

let Machine = function(name, yearOfBirth, job, series){

    Person.call(this, name, yearOfBirth, job);
    this.series = series;
}

console.log();
console.log("Machine- constructor object:");
console.log(Machine);

//* Inherit the methods of the Person to Machine

Machine.prototype = Object.create(Person.prototype);

//* BIT CONFUSING!
Machine.prototype.constructor = Machine;


Machine.prototype.greeting = function(){
    return `Hi, my name is ${this.name}`;
}

console.log(Machine.prototype.constructor);
let mac01 = new Machine("Mac000-1", 1994, 0, "XY-Z1");
console.log(mac01);
console.log(mac01.calculateAge());