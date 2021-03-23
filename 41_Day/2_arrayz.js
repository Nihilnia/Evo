let stringArray = ["scrub", "Blood in the Cut", "Unlike Pluto", "K.Flay"];
console.log("Itemz of \"stringArray\"");
console.log(stringArray);
console.log();

console.log(`Itemz of stringArray:\n ${stringArray}`);

// Type of an array
console.log();
console.log(`Type of "stringArray":`);
console.log(typeof stringArray);

//Getting array itemz

console.log();
console.log(`stringArray's 2.item: "${stringArray[1]}"`);


// Setting array itemz
console.log();
console.log("Adding new item to array.. Index number: 10..");

stringArray[10] = "10.Item bitchez";
console.log(stringArray);

// Adding new item to end of the array

    var intArray = [0, 1, 2, 3];
    console.log();
    console.log("Adding new item to 'intArray'..");
    intArray[intArray.length] = 4;
    console.log(intArray);

// Add new itemz

console.log();
console.log("For add a new item to end of the array: push()..");
intArray.push(12);
console.log(intArray);

console.log();
console.log("For add a new item to beginning of the array: push()..");
intArray.unshift(-12);
console.log(intArray);

//Remove item

console.log();
console.log(`The last item "${intArray[intArray.length-1]}" deleting from the array..`);
intArray.pop();
console.log(intArray);

console.log();
console.log(`The first item "${intArray[0]}" deleting from the array..`);
intArray.shift();
console.log(intArray);

// Indexin' an item

console.log();
console.log(`Index number of "scrub" is: ${stringArray.indexOf("scrub")}`);

// Reverse the whole array

let _Glorai = [0, 1, 2, "zero", "one", "two"];

console.log("Current situation of the _Glorai:");
console.log(_Glorai);

console.log();
console.log("Reversing the array..");
_Glorai.reverse();
console.log("Current situation of the _Glorai, now:");
console.log(_Glorai);


//Sorting hat!

console.log();
console.log("Sorting the _Glorai:");
console.log(_Glorai.sort());


// Concatenation arrayz

console.log();
let array01 = [5, 6, 7];
var array02 = ["c", "d", "e"];
let concattedArray = array02.concat(array01);

console.log(`Two arrayz (array02{${array02}} and array01{${array01}} concatted..)`);
console.log(concattedArray);


//Splice
console.log();
let fGenZ = ["a", "b", "c", "d", "e"];
console.log("Adding 'aabb' and deleting two others..")
fGenZ.splice(1, 2, "aabb");
console.log(fGenZ);

console.log();
console.log("Adding nothin' and deleting one..");
fGenZ.splice(0, 1);
console.log(fGenZ);


// Find nd Filter bitchez. Like it.

console.log();

function isOver18(year){
    var age = 2021 - year;
    return age>= 18;
}

var lastOne = [1994, 1995, 1996, 1997, 1998, 1999];

let usingFind = lastOne.find(isOver18);
console.log(`Find method is used and the first result that found: ${usingFind}`);
console.log();

var usingFilter = lastOne.filter(isOver18);
console.log(`Find method is used and the results that found: ${usingFilter}`);
console.log();

