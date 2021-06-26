let beenGoodToKnowYa = {
    name: "Gloria",
    surname: "Unknown",
    setPerson: function(fullName){
        var userInput = fullName.split(" ");
        this.name = userInput[0],
        this.surname = userInput[1]
    },
    getPerson: function(){
        return `Hi, ${this.name} ${this.surname}`;
    }
}

beenGoodToKnowYa.setPerson("Nihil Nia");
console.log(beenGoodToKnowYa.getPerson());


//* We can do the same shit with getter and setter

let beenGoodToKnowYa = {
    name: "Gloria",
    surname: "Unknown",
    set fullName(fullName){
        var userInput = fullName.split(" ");
        this.name = userInput[0],
        this.surname = userInput[1]
    },
    get fullName(){
        return `Hi, ${this.name} ${this.surname}`;
    },
    set theAge(value){
        if(value > 0){
            this.age = value
        }
    }
}

beenGoodToKnowYa.fullName = "Nihil Nia";
console.log(beenGoodToKnowYa.fullName);

console.log(beenGoodToKnowYa);
console.log(beenGoodToKnowYa.hasOwnProperty("fullName"));

//* Also you can define the getter and setter outside of the Object
Object.defineProperty(beenGoodToKnowYa, 'fullName', {
    set function(fullName){
        var userInput = fullName.split(" ");
        this.name = userInput[0],
        this.surname = userInput[1]
    },
    get function(){
        return `Hi, ${this.name} ${this.surname}`;
    }
});

Object.defineProperty(beenGoodToKnowYa, "age", {
    value: 27,
    writable: true
}
);

beenGoodToKnowYa.theAge = 35;

console.log(beenGoodToKnowYa.age);