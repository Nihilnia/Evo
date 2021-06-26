var denemeZ = new Set();

//* ADD

denemeZ.add("Nihil");
denemeZ.add("Gloria");
denemeZ.add("Gloria");
denemeZ.add({a: "a1", b: "b2"});
denemeZ.add("Legendary");
denemeZ.add(2);

console.log(denemeZ);

//* HAS

console.log(denemeZ.has("Gloria"));
// console.log(denemeZ.has(Object.a));
console.log(denemeZ.has("Gloriax"));

//* DELETE
denemeZ.delete("Nihil");
console.log(denemeZ);

for (let f of denemeZ){
    console.log("Hehehe", f);
}

//* keys(), values();, entries() doesnt make any difference.
console.log("          ");
var convArr = Array.from(denemeZ);
console.log(convArr);


var newSet2 = new Set([2, 31]);
newSet2.add("Gloria");
console.log(newSet2);

var mergeEm = new Set([...denemeZ, ...newSet2]);
console.log(mergeEm);

console.log();
console.log("Merge, forEach");
mergeEm.forEach(x => console.log(x));
console.log();

//* Intersect
var intersectZ = new Set(Array.from(denemeZ).filter(x => newSet2.has(x)));
console.log(intersectZ);

//* Difference
var differenceZ = new Set(Array.from(denemeZ).filter(x => !newSet2.has(x)));
console.log(differenceZ);

