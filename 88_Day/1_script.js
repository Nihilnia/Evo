var promiseDeneme = new Promise((resolve, reject) => {
    var name = "Recep";
    var kontrol = true;
    if(kontrol){
        resolve(name);
    }else{
        reject("Ben seni tanımıyorum, recoyu cagir");
    }
});


promiseDeneme.then((gelenIsim) => {
    console.log("Merhaba", gelenIsim);
    var sifre = Math.floor(Math.random() * 5);
    return sifre;
}).then((olusturanSifre) => {
    console.log("Gecici sifreniz:", olusturanSifre);
})
.catch((hataMesaji) => {
    console.log(hataMesaji);
})