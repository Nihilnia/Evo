var promiseGloria = new Promise((resolve, reject) => {
    var result = 1 + 1;

    if(result === 2){
        resolve(result);
    }else{
        reject(result);
    }
})

promiseGloria
.then((incomingResult) => {
    console.log("Then worked cuz result is:", incomingResult);
    return "Gloria";
}).then((fromFirstThen) => {
    console.log("Hi,", fromFirstThen);
})
.catch((incomingResult) => {
    console.log("Catch worked cuz result is:", incomingResult);
})