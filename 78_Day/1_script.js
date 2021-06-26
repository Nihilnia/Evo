    const elementBoxes = document.querySelectorAll(".box");

    //* ES5

    let boxesES5 = Array.prototype.slice.call(elementBoxes);

    console.log(boxesES5);

    boxesES5.forEach(function(x){
        x.style.backgroundColor = "green";
    })


    //* ES6

    Array.from(elementBoxes).forEach((y) => {
        if(y.id !== "blue"){
            y.textContent = "I'm changed";
        y.style.backgroundColor = "Brown";
        };
        
    })

//* FROM

var exampleObj = [
    {name: "deneme1", price: 1000},
    {name: "deneme2", price: 2000},
    {name: "deneme3", price: 3000},
];

console.log(Array.from(exampleObj, x => x.price <= 2000));

//* FIND

console.log(exampleObj.find(damn => damn.name === "deneme2"));


//* FILTER
console.log(Array.from(exampleObj).filter(hellYeah => hellYeah.price <= 2000));

//* FIND INDEX

console.log(Array.from(exampleObj).findIndex(fff => fff.price === 2000));
//If the item that you're looking for not in it, it returns -1

//* ENTRIES

let numberZ = ["1a", "2b", "3c"];
let entrieZ = numberZ.entries();

// console.log(entrieZ);

for(let f of entrieZ){
    console.log(f);
}

//* KEYS and VALUES

let keyZ = numberZ.keys();

for (let f of keyZ){
    console.log(f);
}

let valueZ = numberZ.values();

for(let f of valueZ){
    console.log(f);
}