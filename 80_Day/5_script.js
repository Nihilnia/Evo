//* ES5

var PersonES5 = function(name, surname){
    this.name = name,
    this.surname = surname
}

PersonES5.prototype.sayHi = function(){
    console.log("Hello it's:", this.name, this.surname);
}

var p01 = new PersonES5("Nihil", "Nia");
p01.sayHi();

var TeacherES5 = function(phone, age, name, surname){
    PersonES5.call(this, phone, age);
    this.phone = phone,
    this.age = age
}

TeacherES5.prototype = Object.create(PersonES5.prototype);

var teacher01 = new TeacherES5("Teacheeeer", "idkkk", 234324, 22);
teacher01.sayHi();


//* ES6

class PersonES6{
    constructor(name, surname){
        this.name = name,
        this.surname = surname
    }

    sayHiES6(){
        console.log("Henloooo it's", this.name, this.surname);
    }
}

class TeacherES6 extends PersonES6{
    constructor(name, surname, phone, age){
        super(name, surname);
        this.phone = phone,
        this.age = age
    }
}

var teacher02 = new TeacherES6("T02020", "Sur020asd2", 32423, 232);
teacher02.sayHiES6();