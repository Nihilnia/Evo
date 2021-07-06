//IF the random person is female, then print them first,
// later bois.


var contFemale = document.querySelector("#women");
var contMale = document.querySelector("#men");


var xhrGloria = new XMLHttpRequest();

const url = "https://randomuser.me/api/";
xhrGloria.open('GET', url, true);


function getPeople(){

    var femaleZ = [];
    var maleZ = [];

    for(let f = 0; f <= 4; f++){
        xhrGloria.onload = () =>{

            if(xhrGloria.readyState === 4){
                if(xhrGloria.status === 200){
                    jsonInfo = JSON.parse(xhrGloria.responseText);
                    let gender = jsonInfo.results[0].gender;

                    if(gender === "female"){
                        console.log("A female");
                        femaleZ.push(jsonInfo.results[0].picture.large);
                    }else{
                        console.log("A male");
                        maleZ.push(jsonInfo.results[0].picture.large);
                    }
                }
            }  
            
        }
    }

    console.log(femaleZ);
    console.log(maleZ);    
    
}
xhrGloria.send();
getPeople();
getPeople();

