//* ES5 */

function sumES5(){
    let numberZ = Array.prototype.slice.call(arguments);

    var result = 0;

    numberZ.forEach(function(x){
        result += x;
    });

    return result;
}

console.log(sumES5(10, 20, 30));


//* ES6 */

function sumES6(...arr){
    let result = 0;

    arr.forEach(x => result += x);

    return result;
}

console.log(sumES6(10, 20, 30, 40));



//* Another Example */

function driverLicense(age, ...peopleBDays){
    peopleBDays.forEach(x => {
        var ageOfThePerson = new Date().getFullYear() - x;
        if(ageOfThePerson <= age){
            console.log("This person cannot get license because bday is:", ageOfThePerson);
        }else{
            console.log("This person can get license, because bday is:", ageOfThePerson);
        }
    })
}

driverLicense(18, 1994, 1996, 2012, 2003);




// var abc = function(x){
//     console.log("abc");
// }

// abc();

// var dca = () => {
//     console.log("dca")
// }

// dca();