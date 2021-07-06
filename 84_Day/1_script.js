var functionOne = () => {
    console.log("F1 worked..");
    functionTwo();
}

var functionTwo = () => {
    setTimeout(() => {
        console.log("F2 worked..");
    }, 2000);
    functionThree();
}

var functionThree = () => {
    console.log("F3 worked..");
}

functionOne();