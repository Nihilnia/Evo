//* Quick example to understand async

var first = () =>{
    console.log("First");
    second();
}
var second = () =>{
    setTimeout(() =>{
        console.log("second");
    }, 2000)
    third();
}
var third = () =>{
    console.log("third");
}

first();