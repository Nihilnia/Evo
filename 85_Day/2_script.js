var xhrGloria = new XMLHttpRequest();

xhrGloria.open('POST', "deneme.JSON", true);

// xhrGloria.onreadystatechange = () =>{
//     if(xhrGloria.readyState === 4){
//         console.log("4: request finished and response is ready");

//         if(xhrGloria.status === 200){
//             console.log(`200: "OK”`);

//             var userChoice = prompt("Wanna read the JSON File? (Y/N)");
//             if(userChoice === "Y"){
//                 console.log(xhrGloria.responseText);
//             }
//         }else if(xhrGloria.status === 404){
//             console.log(`404: "Not Found”`);
//         }
//     }
// }
var gonderilecek;
xhrGloria.onreadystatechange = () => {
    gonderilecek = JSON.stringify("denenenene");
    console.log(gonderilecek);
}

xhrGloria.send(gonderilecek);