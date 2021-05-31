function Person(name, surname, bDay){
    this.name = name,
    this.surname = surname,
    this.bDay = bDay,
    this.calculateAge = 2021 - this.bday;

    console.log(this);
};

let Machine = function(machineName = "Unknown", machinePurpose = "Who Knows?"){
    this.machineName = machineName,
    this.machinePurpose = machinePurpose,
    this.asdf = 2012

    this.calculate = function(){
        return 2021 - this.asdf;
    }
};

let Gloria = new Person('Gloria', 'Nia', 2017);
let xMachine = new Machine('_Sun');
console.log(xMachine.asdf);
console.log(xMachine.calculate());