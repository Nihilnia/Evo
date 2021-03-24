var person = {

    name: "Gloria",
    surname: false,
    type: "AI",
    future: {
        when: false,
        current: 0,
        sayHi: "Hello"
    }

};


console.log(person);
console.log(typeof person);
console.log(`
Name: ${person.name},
Surname: ${person.surname},
Type: ${person.type},
Future, when: ${person.future.when},
Future, current: ${person.future.current},
Future, sayHi: ${person.future.sayHi}.
`);