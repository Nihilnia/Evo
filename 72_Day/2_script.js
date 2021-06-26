//* An object

let Gloria = {
    calculateAge: function(){
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

console.log(Gloria);
console.log();


console.log("You can create an object from an object");
console.log("But properties of the source object going to be in prototype:");

let Nihil = Object.create(Gloria);
console.log(Nihil);

console.log();

console.log("If you want you can define new properties to the new object");
let Nia = Object.create(Gloria, {
    song: {value: "makeMeFade"},
    length: {value: 1.12}
})

console.log(Nia);
console.log(Nia.song);