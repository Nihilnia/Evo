new Promise(function(resolve, reject){
    var islem = true;
    if(islem){
        resolve();
    }else{
        reject();
    }
})
.then(function(){
    console.log("Islem basarili..");
})
.catch(function(){
    console.log("Islem basarisiz..");
})