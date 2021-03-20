/* Arithmetic Operators */

var _Gloria = 1;
console.log("_Gloria is = 1");
console.log();

console.log("+ Operator");
console.log(_Gloria + 1);
console.log();

console.log("- Operator");
console.log(_Gloria - 1);
console.log();

console.log("+ Operator");
console.log(_Gloria / 1);
console.log();

console.log("+ Operator");
console.log(_Gloria * 1);
console.log();

console.log("++ Operator");
console.log(++_Gloria);
console.log();

console.log("-- Operator");
console.log(--_Gloria);
console.log();


/* Assignment Operators */
console.log("- - - - - - - - - - - - ")


var _Nihil = 1;
console.log("+= Operator");
_Nihil += _Gloria;
console.log(_Nihil);
console.log();


var _Nihil = 1;
console.log("-= Operator");
_Nihil -= _Gloria;
console.log(_Nihil);
console.log();

var _Nihil = 1;
console.log("*= Operator");
_Nihil *= _Gloria;
console.log(_Nihil);
console.log();


var _Nihil = 1;
console.log("/= Operator");
_Nihil /= _Gloria;
console.log(_Nihil);
console.log();


/* Comparasion Operators */
console.log("- - - - - - - - - - - - ")
console.log();

var a = 1;
var b = 2;
var c;

console.log("== Operator");
c = a==b;
console.log(c);
console.log();

console.log("=== Operator");
c = a===b;
console.log(c);
console.log();

console.log("!= Operator");
c = a!=b;
console.log(c);
console.log();

console.log("!== Operator");
c = a!==b;
console.log(c);
console.log();

console.log("> Operator");
c = a>b;
console.log(c);
console.log();

console.log(">= Operator");
c = a>=b;
console.log(c);
console.log();

console.log("< Operator");
c = a<b;
console.log(c);
console.log();

console.log("<= Operator");
c = a<=b;
console.log(c);
console.log();


/* Logical Operators */
console.log("- - - - - - - - - - - - ")
console.log();

var a = 0;
var b = 1;
var c = 2;
var d;

console.log("&& (And) Operator")
d = (a > b) && (a > c);
console.log(d);
console.log();

console.log("|| (Or) Operator")
d = (a > b) || (a > c);
console.log(d);
console.log();

console.log("! (Not) Operator")
d = !(a > b);
console.log(d);
console.log();
