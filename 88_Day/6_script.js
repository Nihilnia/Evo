// function f1(){
//     console.log("F1 is here.");
// }

// function f2(){
//     console.log("F2 is here.");
// }

// function f1(){
//     console.log("F3 is here.");
// }



// var vega = new Promise((resolve, reject) =>{
//     var result = true;
    
//     if(result){
//         resolve();
//     }else{
//         reject();
//     }
// })

// vega
// .then(result => {
//     console.log("F1 is here.");
//     return "F2 is here."
// })
// .then(result => {
//     console.log(result);
//     return "F3 is here."
// })
// .then(result => {
//     console.log(result);
// })
// .catch(() => {
//     console.log("Naah");
// })


function freeTibet(){
    return Promise.resolve("Hellu");
}

freeTibet()
.then(result => console.log(result));


//* We dont need to return promise everytime.
//* Like so:

async function freeTibet2(){
    return "Hellu2";
}

freeTibet2()
.then(result => console.log(result));

//* You can use 'await' keywords only in async function

console.log(freeTibet2());



function xCategory(){
    return new Promise((resolve, reject) => {
        var isGood = true;
        setTimeout(() => {
            if(isGood){
                resolve("phone");
            }else{
                reject("Somethings went wrong..");
            }
            
        }, 2000);
    })
}

function xProducts(category){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(category !== "Somethings went wrong.."){
                resolve(`15 results in ${category}`);
            }else{
                reject("Somethings went wrong..");
            }
            
        }, 2000);
    })
}


xCategory()
.then(xProducts)
.then(result => {
    console.log(result);
}).catch(err => console.log(err));

async function Gloria(){

    try{
        let category = await xCategory();
        let products = await xProducts(category);
        console.log("withAwait", products);
    }catch(err){
        console.log(",,", err);
    }
    
}

Gloria();