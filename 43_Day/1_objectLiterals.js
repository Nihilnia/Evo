var person = {

    name: "Gloria",
    surname: false,
    type: "AI",
    future: {
        when: false,
        current: 0,
        sayHi: "Hello",
        ideaWhen: 2018
    },

    getTheAge: function(){
        return new Date().getFullYear() - this.future.ideaWhen;
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
Age of the project: ${person.getTheAge()}
`);

console.log("############################################################");

// Then let's create a 'people' object and create persons inside it.

var people = [
    {name: "Gloria",
    surname: "noneee",
    age: 3},

    {name: "Nihil",
    surname: "Nia",
    age: 27},

    {name: "IDK",
    surname: "KDI",
    age: 0},
];

console.log(people[0].name, people[0].surname, people[0].age);

// FOR LOOP BITCHEZ, FINALLY!!

for (var i = 0; i <= people.length; i++){
    console.log(`Name: ${people[i].name},
    Surname: ${people[i].surname},
    Age: ${people[i].age}..
    ######################################`);
};