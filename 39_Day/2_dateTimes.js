/* Date Time bitchez */

var _Gloria = new Date();

/* Get Methods */

console.log();
console.log("In the day of:", _Gloria.getFullYear());
console.log("month:", _Gloria.getMonth())
console.log("Current day of the month:", _Gloria.getDate());
console.log("And the time:", _Gloria.getHours(), _Gloria.getMinutes());

console.log();

/* Set Methods */

console.log("5 Years, 5 Months, 5 Days, 5 Hours and 5 Minutes Later..");
_Gloria.setFullYear(_Gloria.getFullYear() + 5);
_Gloria.setMonth(_Gloria.getMonth() + 5);
_Gloria.setDate(_Gloria.getDate() + 5);
_Gloria.setHours(_Gloria.getHours() + 5, _Gloria.getMinutes() + 5);

console.log(_Gloria.getFullYear());
console.log(_Gloria.getMonth());
console.log(_Gloria.getDate());
console.log(_Gloria.getHours(), _Gloria.getMinutes());

/* How long it's been that Nihil alive? */


var _Nihil = new Date(1994, 1, 1);
var _currentDate = new Date();

var year, month, day;

year = _currentDate.getFullYear() - _Nihil.getFullYear();
month = _currentDate.getMonth() - _Nihil.getMonth();
day = _currentDate.getDate() - _Nihil.getDate();

console.log("Nihil is alive and it's been",
    year, "years",
    month, "months",
    day, "days..");