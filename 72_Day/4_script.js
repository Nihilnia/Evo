//* Source Object */

let _Gloria = {
    name: "Gloria"
}

console.log("Source Object: _Gloria");
console.log(_Gloria);

console.log();

//* Creating Objects by using Object.create()

let Nihil = Object.create(_Gloria);

console.log("New Object: Nihil");

console.log(Nihil);
console.log();

//* Define new properties to new object

let Nia = Object.create(_Gloria, {
    surname: {value: "unknown"},
    isActive : {value: 0}
});

console.log("Nia- object:");
console.log(Nia);