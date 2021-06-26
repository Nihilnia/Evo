function Person(isim, soyisim, yas){
    this.age = yas,
    this.name = isim,
    this.surname = soyisim

    console.log(this);
};

var Nihil = new Person("_Nihil", "Nia_", 27);

let Teacher = function(tName, tYas){
    this.name = tName,
    this.age = tYas,
    this.yazdir0 = `Teacher name: ${this.name}, ${this.age}`,

    this.yazdir = function(){
        console.log(`Teacher name: ${this.name}, ${this.age}`);
    };
};

var t01 = new Teacher('_Gloria', 3);
console.log(t01.yazdir0);
t01.yazdir();