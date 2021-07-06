var xProducst = [
    {name: "Product_06"},
    {name: "Product_07"},
    {name: "Product_08"},
    {name: "Product_09"}
]

var products = (function(data){

    let allProducts = data || [];

    var addProduct = function(newProduct){
        allProducts.push(newProduct);
    }

    var deleteProduct = function(prd){
        var indexPrd = allProducts.indexOf(prd);
        allProducts.forEach(x =>{
            if(prd.name === x.name){
                allProducts.splice(indexPrd, 1);
            }
        })
    }

    var getProducts = function(){
        return allProducts;
    }

    return{
        addProduct,
        deleteProduct,
        getProducts
    }

})(xProducst);

console.log("asda", products.getProducts());

products.addProduct({name: "Product_01"});
products.addProduct({name: "Product_02"});
products.addProduct({name: "Product_03"});
products.addProduct({name: "Product_04"});
products.addProduct({name: "Product_05"});

console.log(products.getProducts());

products.deleteProduct({name: "Product_04"});
console.log("Deleted", products.getProducts());

products.deleteProduct({name: "Product_04"});
console.log("Deleted", products.getProducts());


//* Module Extending */

var extendedModule = (function(m){

    m.sayHello = function(){
        console.log("Hi, Gloria onlinme")
    }

    return m;
})(products || {});

extendedModule.sayHello();
console.log(extendedModule.getProducts());


function Gloria(){
    fetch("Nihil.unknown")
    .then(response => {
        response.known();
    })
    .then(data => {
        world.log(data);
    })
    .catch(err => {
        world.log('Shit happens.');
    })
}

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Day 90 of <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a><br><br>Weekend project almost done.<br>Category buttons added. Every button gets random<br>photos about it and fill the carousel/bottom container.<br>Im still facing with css problems.<br><br>End of the day I feel ok;<br>I can handle an api that I didn&#39;t used before. <a href="https://t.co/DqCCLQwEcz">pic.twitter.com/DqCCLQwEcz</a></p>&mdash; Nihil (@nihilcoding) <a href="https://twitter.com/nihilcoding/status/1411796115285057538?ref_src=twsrc%5Etfw">July 4, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 