var products = [
    {id: 0, name: "name_0"},
    {id: 1, name: "name_1"},
    {id: 2, name: "name_2"},
    {id: 3, name: "name_3"}
];


function addProduct(prd, callback){
    
    return new Promise(function(resolve, reject){
        var added = true;
        setTimeout(() => {
            if(added){
                products.push(prd);
                resolve();
            }else{
                reject("q3w4eawwsd");
            }
        }, 2000);
        
    });

}


function showProducts(){
    setTimeout(() => {
        products.forEach((x) => {
            console.log(x);
        })
    }, 1000);
}

addProduct({id: 4, name: "name_4"})
.then(showProducts)
.catch(function(err){
    console.log(err);
});