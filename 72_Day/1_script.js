//* Employee Constructor */

function Employee(name, salary){
    if(!(this instanceof Employee)){
        return new Employee(name, salary);
    };

    this.name = name,
    this.salary = salary
};

//* Prototype */

Employee.prototype.calculateSalary = function(){
    var totalSalary = new Date().getMonth() * this.salary;
    var totalTax = 0;
    var tax = 0;
    var pay = 0;

    if(totalSalary <= 20000){
        tax = 0.2;
        totalTax = totalSalary * tax;
        pay = totalSalary - totalTax;
    }else if(totalSalary > 20000 && totalSalary <= 30000){
        tax = 0.25;
        totalTax = totalSalary * tax;
        pay = totalSalary - totalTax;
    }else{
        tax = 0.27;
        totalTax = totalSalary * tax;
        pay = totalSalary - totalTax;
    }

    return{
        TotalSalary: totalSalary,
        TotalTax: totalTax,
        Tax: tax,
        Pay: pay
    }
};

Employee.prototype.print = function(){
    var x = this.calculateSalary();

    console.log(`
    
    ###_ Employee name: ${this.name} _###
    Monthly salary: ${this.salary},
    Monthly tax: ${x.Tax},
    
    Total salary: ${x.TotalSalary},
    Total tax: ${x.TotalTax},

    Employee gets ${x.Pay} at total..
    
    `);
}

//* Instances */

let emp01 = Employee("_Nihil", 3000);
console.log(emp01);
console.log(emp01.calculateSalary());

console.log("#############");

let emp02 = Employee("_Gloria", 5000);
console.log(emp02);
console.log(emp02.calculateSalary());

emp02.print();

// E X A M P L E