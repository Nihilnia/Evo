//* Elementz */
var inputNumber = document.querySelector("#inputNumber");
var btnGetPoeple = document.querySelector("#btnGetPeople");
var divFemalez = document.querySelector("#femaleZ");
var divMmalez = document.querySelector("#maleZ");


btnGetPoeple.addEventListener('click', gettinPeople);
function gettinPeople(){

    return new Promise((resolve, reject) => {
        var userChoice = inputNumber.value;
        console.log(userChoice);
        var xhr = new XMLHttpRequest();
        const url = "https://randomuser.me/api/?results=" + userChoice;
        xhr.open('GET', url, true);
    
        xhr.onload = () =>{
            if(xhr.readyState === 4 && xhr.status === 200){
                // console.log(xhr.responseText);
                var jsoN = JSON.parse(xhr.responseText);

                jsoN.results.forEach(x => {
                    if(x.gender == "female"){
                        resolve(x);
                    }else{
                        reject(x);
                    }
                });
    
            }
        }
    
        
    
        xhr.send();
    })

};

gettinPeople().then((person) => {
    console.log("Then worked:", person);
}).catch((person) => {
    console.log("Catch worked:", person);
})