var products = [
    {id: 0, name: "name_0"},
    {id: 1, name: "name_1"},
    {id: 2, name: "name_2"},
    {id: 3, name: "name_3"}
];

var ifAdded = true;

function addProduct(prd, callback){

    if(ifAdded){
        setTimeout(function(){
            products.push(prd);
            console.log("Urun basari ile eklendi.");
            callback(null, prd);
        }, 2000)
    }else{
        callback("Hataaaa!!", prd);
    }

    
}

function showProducts(){
    setTimeout(() => {
        products.forEach((x) => {
            console.log(x.name);
        })
    }, 1000);
}


// addProduct({name: "name_4", id: 4}, showProducts);

addProduct({name: "name_4", id: 4},
function(err, data){
    if(err){
        console.log("Bir hata olustu:", err);
    }else{
        console.log(data);
    }
})