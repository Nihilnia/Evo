var sumAllBabe = function(){
    var result = 0;
    for (var f = 0; f < arguments.length; f++){
        console.log(f, ".item:_", arguments[f]);
        result += arguments[f];
    }

    return result;
};

console.log("Result:", sumAllBabe(1, 2, 3));