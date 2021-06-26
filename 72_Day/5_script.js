//* String */
var str01 = "Gloria";
var str02 = new String("Gloria");

console.log(str01);
console.log(str02);

console.log();

//* Number */
var num01 = 2;
var num02 = new Number(2);

console.log(num01);
console.log(num02);

console.log();

//* Array */
var arr01 = ['Çak', 'bi', 'selam'];
var arr02 = new Array('Çak', 'bi', 'selam');

console.log(arr01);
console.log(arr02);

console.log();

//* Boolean */
var bool01 = false;
var bool02 = new Boolean(false);

console.log(bool01);
console.log(bool02);

console.log();

//* Object */
var obj01 = {
    name: "Gloria"
}

var obj02 = new Object({
    name: "Gloria"
})

console.log(obj01);
console.log(obj02);

console.log();

//* We can extend methods
String.prototype.doubleIt = function(){
    return `${this} HEHE ${this}`;
}

var nihil = "nihil";
console.log(nihil.doubleIt());

Array.prototype.remove = function(item){
    var index = this.indexOf(item);
    if (index >= 0){
        this.splice(index, 1);
    }else{
        console.log("There is no item like this:");
    }

    return this;
}

var lanaDelRey = ["radio", "born to die", "summertime sadness"];
console.log(lanaDelRey);

lanaDelRey.remove("radio");
console.log(lanaDelRey);

//? NOTE: If developer of the JavaScript add a method just like .remove
//? our method gonna crush that method and our one is gonna work.
//? We need to do somethings about like. And the solution is easy:

Array.prototype.remove = Array.prototype.remove || function(item){
    var index = this.indexOf(item);
    if (index >= 0){
        this.splice(index, 1);
    }else{
        console.log("There is no item like this:");
    }

    return this;
}
