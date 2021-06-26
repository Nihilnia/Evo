var products = [
    {name: "Pr1", price: 1000, id: 1},
    {name: "Pr2", price: 2000, id: 2},
    {name: "Pr3", price: 3000, id: 3},
    {name: "Pr4", price: 4000, id: 4}
];

function addProduct(newProduct, callback){

    setTimeout(() => {
        products.push(newProduct);
        callback();
    }, 2000)
};


function showProducts(){
    products.forEach((x) => {
        console.log(x.name);
    })
}

addProduct({name: "Pr5", price: 5000, id: 5}, () => {
    products.forEach((x) => {
        if(x.id % 2 === 0){
            console.log(x.name);
        }
    })
});
