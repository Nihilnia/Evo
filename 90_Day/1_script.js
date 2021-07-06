var Counter = {
    number: 0,
    increment: function(){
        return  this.number += 1; 
    },
    decrement: function(){
        return this.number -= 1;
    }
}


console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
//But we can reach and change the value of number:
Counter.number = 9;
console.log(Counter.increment());



(function(){
    var name = "Gloria";
    console.log(name);
})();

(function(){
    var name = "Nihil";
    console.log(name);
})();






//* Immediately-invoked Function Expressions */
(function(){
    let number = 0;

    let inc = function(){
        return ++number;
    }

    console.log(inc());
    console.log(inc());
})();


var moduleTry = (function(){
    let number = 0;

    function inc(){
        return ++number;
    }

    let decrement = function(){
        return --number;
    }

    return{
        inc,
        decrement
    }
})();

console.log(moduleTry.inc());
console.log(moduleTry.inc());
console.log(moduleTry.inc());
console.log(moduleTry.inc());
console.log(moduleTry.decrement());
console.log(moduleTry.decrement());
console.log(moduleTry.decrement());

//* Encapsulation */

var GloriaModule = (function(){


    //Private area
    function privateHello(){
        return "Hi, I'm from Private area";
    }

    return{
        //Public area
        publicHello: function(){
            return "Hi, I'm from Public area";
        }
    }
})();


console.log(GloriaModule.publicHello());
console.log(GloriaModule.privateHello()); //ERROr!


GloriaModule();